<?php
/**
 * KI-Sichtbarkeits-Check — Backend-Endpoint für 2fox4.de
 *
 * Prüft über die Perplexity-Sonar-API (live Web-Suche mit Quellen), ob ein
 * Unternehmen für typische Käuferfragen von der KI-Suche genannt/zitiert wird,
 * berechnet einen Score + Handlungsempfehlung, protokolliert die Anfrage und
 * schickt den Lead per SMTP an 2fox4.
 *
 * Aufruf: POST application/json
 *   { business, service, region, email, consent, elapsed_ms }
 * Antwort: application/json
 *   { ok:true, score, level, summary, email, questions:[{question,mentioned,cited,snippet}], recommendations:[] }
 *   { ok:false, error:"..." }
 *
 * Konfiguration: ki-check.config.php (NICHT im Repo, Vorlage: .example.php).
 * Protokoll: ki-check-data/log.jsonl (per .htaccess vor Direktzugriff geschützt).
 *
 * Hinweis zum Hosting: läuft als statisch hochgeladene PHP-Datei auf all-inkl,
 * analog zu kontakt.php. Der API-Key bleibt serverseitig.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

/* ---------- kleine JSON-Helfer ---------- */
function out_json(array $data, int $code = 200): never {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function fail(string $msg, int $code = 400): never {
    out_json(['ok' => false, 'error' => $msg], $code);
}

/* ---------- nur POST ---------- */
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    fail('Nur POST erlaubt.', 405);
}

/* ---------- Config laden ---------- */
$configFile = __DIR__ . '/ki-check.config.php';
if (!is_file($configFile)) {
    error_log('[2fox4 KI-Check] ki-check.config.php fehlt');
    fail('Der Check ist gerade nicht verfügbar (Konfiguration fehlt).', 500);
}
$config = require $configFile;
$apiKey  = (string)($config['perplexity_api_key'] ?? '');
$model   = (string)($config['perplexity_model'] ?? 'sonar');
$qCount  = max(1, min(10, (int)($config['question_count'] ?? 8)));
if ($apiKey === '' || str_starts_with($apiKey, 'DEIN_')) {
    fail('Der Check ist gerade nicht verfügbar (API-Key fehlt).', 500);
}

/* ---------- Eingabe (JSON) lesen ---------- */
$raw = file_get_contents('php://input') ?: '';
$in  = json_decode($raw, true);
if (!is_array($in)) {
    fail('Ungültige Anfrage.');
}
function clean(string $s, int $max): string {
    $s = trim($s);
    if (mb_strlen($s) > $max) $s = mb_substr($s, 0, $max);
    return $s;
}
$business  = clean((string)($in['business'] ?? ''), 120);
$service   = clean((string)($in['service'] ?? ''), 120);
$region    = clean((string)($in['region'] ?? ''), 120);
$domainRaw = clean((string)($in['domain'] ?? ''), 120);
$email     = clean((string)($in['email'] ?? ''), 200);
$consent  = !empty($in['consent']);
$newsletter = !empty($in['newsletter']); // separate, freiwillige Marketing-Einwilligung
$elapsed  = (int)($in['elapsed_ms'] ?? 99999);

/* ---------- Validierung ---------- */
if (mb_strlen($business) < 2) fail('Bitte gib deinen Firmennamen an.');
if (mb_strlen($service) < 2)  fail('Bitte gib deine Leistung an.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) fail('Bitte gib eine gültige E-Mail-Adresse an.');
if (!$consent) fail('Bitte bestätige die Verarbeitung deiner Daten.');
// Time-Trap: realer Nutzer braucht > 2 s für die Eingabe
if ($elapsed >= 0 && $elapsed < 2000) fail('Bitte versuche es erneut.');

/* ---------- Rate-Limit: max. 5 Checks / IP / Stunde ---------- */
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
if ($ip !== '') {
    $rl = sys_get_temp_dir() . '/2fox4_kicheck_' . hash('sha256', $ip) . '.txt';
    $now = time(); $cut = $now - 3600; $stamps = [];
    if (is_readable($rl)) {
        foreach (@file($rl, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $l) {
            if ((int)$l > $cut) $stamps[] = (int)$l;
        }
    }
    if (count($stamps) >= 5) {
        fail('Du hast in der letzten Stunde schon mehrere Checks gemacht. Bitte versuche es später erneut.', 429);
    }
    $stamps[] = $now;
    @file_put_contents($rl, implode("\n", $stamps), LOCK_EX);
}

/* ---------- Fragen + Treffer-Erkennung (ausgelagert, siehe lib/ki-check-detect.php) ---------- */
require_once __DIR__ . '/lib/ki-check-detect.php';
$questions = array_slice(kic_build_questions($service, $region), 0, $qCount);
$normName      = kic_normalize_name($business);
$nameNoSpace   = str_replace(' ', '', $normName);
$distinctToken = kic_distinct_token($normName, $service, $region);
$domain        = kic_normalize_domain($domainRaw);
$domainToken   = kic_domain_token($domain, $service, $region);
$detectCtx     = [$normName, $nameNoSpace, $distinctToken, $domain, $domainToken];

/* ---------- Perplexity-Calls (parallel via curl_multi) ---------- */
// Ein cURL-Handle für eine Frage aufbauen.
function perplexity_handle(string $apiKey, string $model, string $question) {
    $payload = [
        'model' => $model,
        'messages' => [
            ['role' => 'system', 'content' =>
                'Du bist eine hilfreiche Such-Assistenz. Beantworte die Frage des Nutzers, '
                . 'indem du konkrete, real existierende Anbieter oder Unternehmen mit Namen nennst, '
                . 'sofern es welche gibt. Antworte knapp und auf Deutsch.'],
            ['role' => 'user', 'content' => $question],
        ],
        'max_tokens' => 500,
        'temperature' => 0.2,
    ];
    $ch = curl_init('https://api.perplexity.ai/chat/completions');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $apiKey,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
        CURLOPT_TIMEOUT => 30,
        CURLOPT_CONNECTTIMEOUT => 10,
    ]);
    return $ch;
}

// Rohe Antwort eines Handles in die einheitliche Struktur überführen.
function perplexity_parse($res, int $code, string $err): array {
    if ($res === false || $res === null || $code >= 400) {
        return ['ok' => false, 'content' => '', 'sources' => [], 'http' => $code, 'err' => $err];
    }
    $data = json_decode((string)$res, true);
    $content = (string)($data['choices'][0]['message']['content'] ?? '');
    // Quellen können als 'citations' (URLs) oder 'search_results' ([{title,url}]) kommen
    $sources = [];
    foreach (($data['citations'] ?? []) as $c) {
        if (is_string($c)) $sources[] = ['title' => '', 'url' => $c];
    }
    foreach (($data['search_results'] ?? []) as $sr) {
        $sources[] = ['title' => (string)($sr['title'] ?? ''), 'url' => (string)($sr['url'] ?? '')];
    }
    return ['ok' => true, 'content' => $content, 'sources' => $sources, 'http' => $code, 'err' => ''];
}

// Alle Fragen GLEICHZEITIG abfragen → Gesamtdauer ≈ ein einzelner Call.
// Rückgabe in derselben Reihenfolge wie $questions.
function perplexity_ask_all(string $apiKey, string $model, array $questions): array {
    $mh = curl_multi_init();
    $handles = [];
    foreach ($questions as $i => $q) {
        $ch = perplexity_handle($apiKey, $model, $q);
        curl_multi_add_handle($mh, $ch);
        $handles[$i] = $ch;
    }
    $running = null;
    do {
        $status = curl_multi_exec($mh, $running);
        if ($running) curl_multi_select($mh, 1.0);
    } while ($running && $status === CURLM_OK);

    $out = [];
    foreach ($handles as $i => $ch) {
        $res  = curl_multi_getcontent($ch);
        $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err  = curl_error($ch);
        $out[$i] = perplexity_parse($res, $code, $err);
        curl_multi_remove_handle($mh, $ch);
        curl_close($ch);
    }
    curl_multi_close($mh);
    return $out;
}

/* ---------- Check ausführen (alle Fragen parallel) ---------- */
@set_time_limit(150);
$results = [];
$apiErrors = 0;
$responses = perplexity_ask_all($apiKey, $model, $questions);
foreach ($questions as $i => $q) {
    $resp = $responses[$i] ?? ['ok' => false];
    if (empty($resp['ok'])) {
        $apiErrors++;
        $results[] = ['question' => $q, 'mentioned' => false, 'cited' => false,
                      'snippet' => 'Diese Frage konnte gerade nicht geprüft werden.', 'error' => true];
        continue;
    }
    $d = kic_detect_mention($resp['content'], $resp['sources'], $detectCtx);
    $results[] = [
        'question'  => $q,
        'mentioned' => $d['mentioned'],
        'cited'     => $d['cited'],
        'snippet'   => $d['snippet'],
        'error'     => false,
    ];
}
// Alle Calls fehlgeschlagen → ehrlicher Fehler statt 0-Score
if ($apiErrors === count($questions)) {
    fail('Die KI-Suche ist gerade nicht erreichbar. Bitte versuche es in ein paar Minuten erneut.', 502);
}

/* ---------- Score + Level + Empfehlung ---------- */
$checked = array_filter($results, fn($r) => empty($r['error']));
$nChecked = max(1, count($checked));
$mentions = 0; $citations = 0; $points = 0;
foreach ($checked as $r) {
    if ($r['mentioned']) { $mentions++; $points += 2; }
    if ($r['cited'])     { $citations++; $points += 1; }
}
$score = (int)round($points / ($nChecked * 3) * 100);

if ($score >= 85)      { $level = 'Dominant in der KI-Suche (Stufe 3)'; }
elseif ($score >= 60)  { $level = 'Stark sichtbar (obere Stufe 2)'; }
elseif ($score >= 34)  { $level = 'Teilweise sichtbar (Stufe 2)'; }
elseif ($score > 0)    { $level = 'Erste Signale (untere Stufe 2)'; }
else                   { $level = 'Aktuell unsichtbar (Stufe 1)'; }

if ($mentions === 0 && $citations === 0) {
    $summary = 'Die KI-Suche nennt dein Unternehmen für diese Anfragen nicht und verweist auch nicht auf deine Inhalte. Hier liegt das größte Potenzial.';
} elseif ($mentions === 0) {
    $summary = 'Deine Inhalte werden teils als Quelle erfasst, aber die KI empfiehlt dich noch nicht aktiv. Der Sprung zur echten Empfehlung ist machbar.';
} elseif ($mentions < $nChecked) {
    $summary = 'Du wirst bei einem Teil der Anfragen genannt – das Ziel ist, über alle Anfragen hinweg konstant empfohlen zu werden.';
} else {
    $summary = 'Du wirst bei allen geprüften Anfragen genannt – eine sehr starke Ausgangslage. Jetzt geht es darum, diese Position abzusichern.';
}

$recs = [];
if ($mentions === 0 && $citations === 0) {
    $recs[] = 'Stufe 1: Du bist in der KI-Suche praktisch unsichtbar – der wichtigste Hebel ist, deine Inhalte überhaupt für KI-Systeme erfassbar zu machen.';
    $recs[] = 'Beschreibe deine Leistungen klar und konkret: was du machst, für wen, was es ungefähr kostet und in welcher Zeit – statt allgemeiner Marketing-Floskeln.';
    $recs[] = 'Baue zitierfähige Inhalte auf (FAQ, klare Überschriften, strukturierte Daten), damit KI-Systeme dich als Quelle erkennen.';
} elseif ($mentions === 0) {
    $recs[] = 'Deine Seite wird als Quelle wahrgenommen, aber nicht aktiv empfohlen – schärfe deine Positionierung, damit klar wird, wofür genau du stehst.';
    $recs[] = 'Stärke Signale wie Bewertungen, Fachbeiträge und konsistente Einträge im Web, auf die sich KI-Systeme stützen.';
    $recs[] = 'Ergänze pro Leistung eigenständige, klar beantwortete Fragen – das erhöht die Chance, direkt genannt zu werden.';
} elseif ($mentions < $nChecked) {
    $recs[] = 'Du wirst bei manchen Anfragen genannt – analysiere, bei welchen nicht, und baue genau dafür gezielt Inhalte auf.';
    $recs[] = 'Sorge für konsistente Nennungen über mehrere Quellen hinweg; das verstetigt die KI-Empfehlung.';
    $recs[] = 'Erweitere deine zitierfähigen Inhalte rund um deine wichtigsten Suchbegriffe und deine Region.';
} else {
    $recs[] = 'Starke KI-Sichtbarkeit – sichere die Position ab, indem du regelmäßig frische, zitierfähige Inhalte veröffentlichst.';
    $recs[] = 'Beobachte deine Sichtbarkeit laufend, da sich KI-Antworten verändern – so reagierst du, bevor ein Wettbewerber aufholt.';
}
$recs[] = 'Mehr zum Thema: unser Leitfaden „GEO – die 3 Stufen der KI-Sichtbarkeit" unter 2fox4.de/blog. Für einen konkreten Plan: kostenloses Erstgespräch.';

/* ---------- Protokollierung (JSONL) ---------- */
$logDir = __DIR__ . '/ki-check-data';
if (!is_dir($logDir)) { @mkdir($logDir, 0750, true); }
// Direktzugriff via Web unterbinden
$htaccess = $logDir . '/.htaccess';
if (!is_file($htaccess)) { @file_put_contents($htaccess, "Require all denied\nDeny from all\n"); }
$logEntry = [
    'ts'        => date('c'),
    'email'     => $email,
    'business'  => $business,
    'service'   => $service,
    'region'    => $region,
    'score'     => $score,
    'level'     => $level,
    'mentions'  => $mentions,
    'citations' => $citations,
    'questions' => array_map(fn($r) => [
        'q' => $r['question'], 'mentioned' => $r['mentioned'], 'cited' => $r['cited'],
    ], $results),
    'ip'        => preg_replace('/\.\d+$/', '.0', $ip),
    'ua'        => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 180),
];
@file_put_contents($logDir . '/log.jsonl',
    json_encode($logEntry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n",
    FILE_APPEND | LOCK_EX);

/* ------------------------------------------------------------------ */
/*  Auswertung per E-Mail — IMMER über Double-Opt-in                    */
/* ------------------------------------------------------------------ */
/*
 * Ablauf (Schutz gegen Fremdadressen-Missbrauch):
 *  - Neue Adresse  → EINE neutrale Bestätigungsmail. Die vollständige,
 *    grafisch aufbereitete Auswertung geht ERST nach Klick auf den
 *    Bestätigungslink raus (siehe ki-check-confirm.php).
 *  - Bereits früher bestätigte Adresse → DOI lag schon vor, die Auswertung
 *    darf direkt zugestellt werden.
 *  - Auf der Seite selbst erscheint nur eine kurze Vorschau (Score + Level).
 */
require_once __DIR__ . '/ki-check-mail.php';

$confirmationSent = false;   // neue Bestätigungsmail wurde verschickt
$alreadyConfirmed = false;   // Adresse hatte DOI bereits durchlaufen
$resultEmailed    = false;   // Auswertung wurde direkt zugestellt
$mailError        = false;   // DB/SMTP-Problem → ehrlicher Hinweis statt „schau ins Postfach“
$pendingUpdated   = false;   // Bestätigung steht noch aus, Ergebnis aktualisiert

// Einheitliche Datenstruktur für die Auswertungsmail
$mailData = [
    'email'           => $email,
    'business'        => $business,
    'domain'          => $domain,
    'service'         => $service,
    'region'          => $region,
    'score'           => $score,
    'level'           => $level,
    'summary'         => $summary,
    'mentions'        => $mentions,
    'citations'       => $citations,
    'nChecked'        => $nChecked,
    'questions'       => array_map(fn($r) => [
        'question'  => $r['question'],
        'mentioned' => (bool)$r['mentioned'],
        'cited'     => (bool)$r['cited'],
    ], $results),
    'recommendations' => $recs,
];

if (!empty($config['db_host']) && !empty($config['smtp_host'])) {
    try {
        $pdo = new PDO(
            sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4',
                $config['db_host'], $config['db_name']),
            $config['db_user'], $config['db_pass'],
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 8]
        );
        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS ki_check_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                business VARCHAR(255) NULL,
                service VARCHAR(255) NULL,
                region VARCHAR(255) NULL,
                token CHAR(32) NOT NULL,
                status ENUM('pending','confirmed') NOT NULL DEFAULT 'pending',
                consent_version VARCHAR(40) NULL,
                signup_ip VARCHAR(64) NULL,
                signup_at DATETIME NOT NULL,
                confirmed_ip VARCHAR(64) NULL,
                confirmed_at DATETIME NULL,
                UNIQUE KEY uniq_token (token),
                KEY idx_email (email),
                KEY idx_status (status)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
        );
        // Ergebnis-/Marketing-Spalten idempotent nachrüsten (MariaDB: IF NOT EXISTS).
        try {
            $pdo->exec("ALTER TABLE ki_check_leads
                ADD COLUMN IF NOT EXISTS result_score INT NULL,
                ADD COLUMN IF NOT EXISTS result_level VARCHAR(120) NULL,
                ADD COLUMN IF NOT EXISTS result_json LONGTEXT NULL,
                ADD COLUMN IF NOT EXISTS result_sent_at DATETIME NULL,
                ADD COLUMN IF NOT EXISTS marketing TINYINT(1) NOT NULL DEFAULT 0");
        } catch (\Throwable $e) {
            error_log('[2fox4 KI-Check] ALTER ki_check_leads: ' . $e->getMessage());
        }
        // Aufräumen: unbestätigte Einträge älter als 30 Tage entfernen
        $pdo->exec("DELETE FROM ki_check_leads WHERE status='pending' AND signup_at < (NOW() - INTERVAL 30 DAY)");

        $resultSnapshot = json_encode([
            'summary'         => $summary,
            'mentions'        => $mentions,
            'citations'       => $citations,
            'nChecked'        => $nChecked,
            'questions'       => $mailData['questions'],
            'recommendations' => $recs,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        // Adresse bereits per DOI bestätigt?
        $st = $pdo->prepare("SELECT COUNT(*) FROM ki_check_leads WHERE email = ? AND status='confirmed'");
        $st->execute([$email]);
        $alreadyConfirmed = ((int)$st->fetchColumn() > 0);

        if ($alreadyConfirmed) {
            // Newsletter: Adresse hat DOI schon durchlaufen. Checkbox jetzt angehakt →
            // Einwilligung direkt speichern; sonst Anmelde-Angebot in die Auswertungsmail.
            try {
                require_once __DIR__ . '/lib/ki-check-newsletter-lib.php';
                kicnl_ensure_table($pdo);
                if ($newsletter) {
                    kicnl_subscribe($pdo, $email, 'check-form-dc',
                        (string)($config['consent_version'] ?? date('Y-m-d')), preg_replace('/\.\d+$/', '.0', $ip),
                        $config, ['business' => $business]);
                }
                $tk = $pdo->prepare("SELECT token FROM ki_check_leads WHERE email=? AND status='confirmed' ORDER BY confirmed_at DESC LIMIT 1");
                $tk->execute([$email]);
                $mailData['newsletter'] = kicnl_mail_links($pdo, $email, (string)($tk->fetchColumn() ?: ''),
                    (string)($config['site_base_url'] ?? 'https://www.2fox4.de'));
            } catch (\Throwable $e) {
                error_log('[2fox4 KI-Check] Newsletter (direkt): ' . $e->getMessage());
            }
            // DOI lag bereits vor → Auswertung direkt zustellen (Flut-Schutz: 1/Adresse/Stunde)
            $sendLock = sys_get_temp_dir() . '/2fox4_kicres_' . hash('sha256', mb_strtolower($email)) . '.txt';
            $recently = is_file($sendLock) && (time() - (int)@file_get_contents($sendLock)) < 3600;
            if (!$recently) {
                try {
                    $resultEmailed = kicheck_send_result_mail($config, $mailData);
                } catch (\Throwable $e) {
                    error_log('[2fox4 KI-Check] Direkt-Auswertung: ' . $e->getMessage());
                }
                if ($resultEmailed) {
                    @file_put_contents($sendLock, (string)time(), LOCK_EX);
                    // Interne Benachrichtigung erst jetzt – zusammen mit der Auswertung
                    try { kicheck_send_lead_notification($config, $mailData); }
                    catch (\Throwable $e) { error_log('[2fox4 KI-Check] Lead-Notify: ' . $e->getMessage()); }
                }
            } else {
                $resultEmailed = true; // wurde gerade eben schon zugestellt
            }
        } else {
            // Neuer Lead → neutrale Bestätigungsmail (Flut-Schutz: 1/Adresse/24 h)
            $mailLock = sys_get_temp_dir() . '/2fox4_doi_' . hash('sha256', mb_strtolower($email)) . '.txt';
            $recently = is_file($mailLock) && (time() - (int)@file_get_contents($mailLock)) < 86400;
            if (!$recently) {
                $token = bin2hex(random_bytes(16));
                $ins = $pdo->prepare(
                    "INSERT INTO ki_check_leads
                       (email, business, service, region, token, status, consent_version, signup_ip, signup_at,
                        result_score, result_level, result_json, marketing)
                     VALUES (?, ?, ?, ?, ?, 'pending', ?, ?, NOW(), ?, ?, ?, ?)"
                );
                $ins->execute([
                    $email, $business, $service, ($region !== '' ? $region : null),
                    $token, (string)($config['consent_version'] ?? date('Y-m-d')),
                    preg_replace('/\.\d+$/', '.0', $ip),
                    $score, $level, $resultSnapshot, ($newsletter ? 1 : 0),
                ]);

                $base = rtrim((string)($config['site_base_url'] ?? 'https://www.2fox4.de'), '/');
                $confirmUrl = $base . '/ki-check-confirm.php?token=' . $token;
                require_once __DIR__ . '/lib/PHPMailer/Exception.php';
                require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
                require_once __DIR__ . '/lib/PHPMailer/SMTP.php';
                $cm = new \PHPMailer\PHPMailer\PHPMailer(true);
                $cm->isSMTP();
                $cm->Host       = $config['smtp_host'];
                $cm->SMTPAuth   = true;
                $cm->Username   = $config['smtp_user'];
                $cm->Password   = $config['smtp_password'];
                $cm->SMTPSecure = ($config['smtp_secure'] ?? 'tls') === 'ssl'
                    ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
                    : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
                $cm->Port    = (int)($config['smtp_port'] ?? 587);
                $cm->CharSet = 'UTF-8';
                $cm->setFrom($config['mail_from'], $config['mail_from_name'] ?? '2fox4');
                $cm->addAddress($email);
                if (!empty($config['mail_to'])) {
                    $cm->addReplyTo($config['mail_to'], '2fox4');
                }
                $cm->Subject = 'Bestätige deine E-Mail – dann kommt deine Auswertung';
                $cm->isHTML(true);
                $cm->Body    = kicheck_doi_email_html($confirmUrl, $config, $business, $score);
                $cm->AltBody = kicheck_doi_email_text($confirmUrl, $config, $business);
                $cm->send();
                @file_put_contents($mailLock, (string)time(), LOCK_EX);
                $confirmationSent = true;
            } else {
                // Bestätigungsmail ging in den letzten 24 h schon raus: keine zweite Mail,
                // aber den offenen Eintrag auf das NEUE Ergebnis aktualisieren – sonst
                // bekäme die Person nach dem Klick die Auswertung des älteren Checks.
                $upd = $pdo->prepare(
                    "UPDATE ki_check_leads
                        SET business=?, service=?, region=?, result_score=?, result_level=?, result_json=?,
                            marketing=GREATEST(marketing, ?)
                      WHERE email=? AND status='pending'
                      ORDER BY signup_at DESC LIMIT 1"
                );
                $upd->execute([
                    $business, $service, ($region !== '' ? $region : null),
                    $score, $level, $resultSnapshot, ($newsletter ? 1 : 0), $email,
                ]);
                $pendingUpdated = $upd->rowCount() > 0;
            }
        }
    } catch (\Throwable $e) {
        $mailError = true;
        error_log('[2fox4 KI-Check] DOI/Mail-Fehler: ' . $e->getMessage());
    }
} else {
    $mailError = true;
}

/* ---------- Invariante: NIE beides in derselben Anfrage ----------
 * Eine neue (unbestätigte) Adresse bekommt ausschließlich die DOI-Mail; die
 * Auswertung folgt erst nach Klick (ki-check-confirm.php). Eine bereits per DOI
 * bestätigte Adresse bekommt die Auswertung direkt – dann aber KEINE DOI-Mail.
 * Sollten durch einen Sonderfall doch beide Flags gesetzt sein, hat die
 * Bestätigung Vorrang: die Auswertung wird unterdrückt, bis bestätigt wurde. */
if ($confirmationSent && $resultEmailed) {
    $resultEmailed = false;
    error_log('[2fox4 KI-Check] Invariante verletzt: DOI+Result zugleich – Result unterdrückt für ' . $email);
}

/* ---------- Antwort: nur Vorschau (vollständige Auswertung kommt per Mail) ---------- */
out_json([
    'ok'                => true,
    'score'             => $score,
    'level'             => $level,
    'summary'           => $summary,
    'email'             => $email,
    'domain'            => $domain,
    'confirmation_sent' => $confirmationSent,
    'already_confirmed' => $alreadyConfirmed,
    'result_emailed'    => $resultEmailed,
    'pending_updated'   => $pendingUpdated,
    'mail_error'        => $mailError && !$confirmationSent && !$resultEmailed && !$pendingUpdated,
]);
