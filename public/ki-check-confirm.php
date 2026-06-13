<?php
/**
 * Double-Opt-in-Bestätigung für die KI-Check-Newsletter-Liste.
 *
 * Aufruf aus der Bestätigungsmail:  /ki-check-confirm.php?token=...
 * Setzt den passenden pending-Eintrag in ki_check_leads auf 'confirmed'.
 */

declare(strict_types=1);

$configFile = __DIR__ . '/ki-check.config.php';
$ok = false;
$message = 'Dieser Bestätigungslink ist ungültig oder bereits verwendet worden.';

// Gemeinsamer Mail-Baustein (branded HTML-Auswertung + Sender)
require_once __DIR__ . '/ki-check-mail.php';

/**
 * Baut aus einer Lead-Zeile die Datenstruktur für die Auswertungsmail und
 * verschickt sie. Wird NUR nach erfolgreicher Double-Opt-in-Bestätigung
 * aufgerufen, damit niemals an eine unbestätigte (ggf. fremde) Adresse geht.
 */
function send_result_mail(array $config, array $lead): bool
{
    $r = json_decode((string)($lead['result_json'] ?? ''), true) ?: [];
    $data = [
        'email'           => (string)($lead['email'] ?? ''),
        'business'        => (string)($lead['business'] ?? ''),
        'domain'          => '',
        'score'           => (int)($lead['result_score'] ?? 0),
        'level'           => (string)($lead['result_level'] ?? ''),
        'summary'         => (string)($r['summary'] ?? ''),
        'mentions'        => (int)($r['mentions'] ?? 0),
        'citations'       => (int)($r['citations'] ?? 0),
        'nChecked'        => (int)($r['nChecked'] ?? 0),
        'questions'       => is_array($r['questions'] ?? null) ? $r['questions'] : [],
        'recommendations' => is_array($r['recommendations'] ?? null) ? $r['recommendations'] : [],
    ];
    return kicheck_send_result_mail($config, $data);
}

$token = (string)($_GET['token'] ?? '');
if (is_file($configFile) && preg_match('/^[a-f0-9]{32}$/', $token)) {
    $config = require $configFile;
    if (!empty($config['db_host'])) {
        try {
            $pdo = new PDO(
                sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
                $config['db_user'], $config['db_pass'],
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 8]
            );
            // Ergebnis-Spalten sicherstellen (für Alt-Leads von vor diesem Update).
            try {
                $pdo->exec("ALTER TABLE ki_check_leads
                    ADD COLUMN IF NOT EXISTS result_score INT NULL,
                    ADD COLUMN IF NOT EXISTS result_level VARCHAR(120) NULL,
                    ADD COLUMN IF NOT EXISTS result_json LONGTEXT NULL,
                    ADD COLUMN IF NOT EXISTS result_sent_at DATETIME NULL");
            } catch (\Throwable $e) {
                error_log('[2fox4 KI-Check] ALTER (confirm): ' . $e->getMessage());
            }
            $ip = preg_replace('/\.\d+$/', '.0', $_SERVER['REMOTE_ADDR'] ?? '');
            $up = $pdo->prepare(
                "UPDATE ki_check_leads
                    SET status='confirmed', confirmed_at=NOW(), confirmed_ip=?
                  WHERE token=? AND status='pending'"
            );
            $up->execute([$ip, $token]);
            if ($up->rowCount() > 0) {
                $ok = true;
                $message = 'Vielen Dank – deine Anmeldung ist jetzt bestätigt. Dein Ergebnis und passende Tipps schicken wir dir gleich per E-Mail. Abmelden kannst du dich jederzeit.';

                // Ergebnis-Mail an den Kunden senden – AUSSCHLIESSLICH nach dieser
                // Bestätigung (Double-Opt-in). Genau einmal: result_sent_at als Sperre.
                try {
                    $row = $pdo->prepare(
                        "SELECT email, business, service, region,
                                result_score, result_level, result_json, result_sent_at
                           FROM ki_check_leads WHERE token=? LIMIT 1"
                    );
                    $row->execute([$token]);
                    $lead = $row->fetch(PDO::FETCH_ASSOC);

                    if ($lead && empty($lead['result_sent_at']) && !empty($config['smtp_host'])
                        && filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) {
                        send_result_mail($config, $lead);
                        $pdo->prepare("UPDATE ki_check_leads SET result_sent_at=NOW() WHERE token=?")
                            ->execute([$token]);

                        // Interne Lead-Benachrichtigung an 2fox4 – erst jetzt (nach DOI)
                        $rj = json_decode((string)($lead['result_json'] ?? ''), true) ?: [];
                        kicheck_send_lead_notification($config, [
                            'email'     => (string)$lead['email'],
                            'business'  => (string)($lead['business'] ?? ''),
                            'domain'    => '',
                            'service'   => (string)($lead['service'] ?? ''),
                            'region'    => (string)($lead['region'] ?? ''),
                            'score'     => (int)($lead['result_score'] ?? 0),
                            'level'     => (string)($lead['result_level'] ?? ''),
                            'mentions'  => (int)($rj['mentions'] ?? 0),
                            'citations' => (int)($rj['citations'] ?? 0),
                            'nChecked'  => (int)($rj['nChecked'] ?? 0),
                            'questions' => is_array($rj['questions'] ?? null) ? $rj['questions'] : [],
                        ]);
                    }
                } catch (\Throwable $e) {
                    error_log('[2fox4 KI-Check] Ergebnis-Mail-Fehler: ' . $e->getMessage());
                }
            }
        } catch (\Throwable $e) {
            error_log('[2fox4 KI-Check] Confirm-Fehler: ' . $e->getMessage());
            $message = 'Die Bestätigung ist gerade technisch nicht möglich. Bitte versuche es später erneut.';
        }
    }
}

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= $ok ? 'Anmeldung bestätigt' : 'Bestätigung' ?> · 2fox4</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center;
         font-family: system-ui, -apple-system, sans-serif;
         background:#0a0a0a; color:#ededed; padding:24px; }
  .card { max-width:460px; text-align:center; background:#161616;
          border:1px solid <?= $ok ? '#ffe600' : 'rgba(255,255,255,0.12)' ?>;
          border-radius:18px; padding:40px 32px; }
  .badge { width:64px; height:64px; border-radius:50%; margin:0 auto 20px;
           display:grid; place-items:center; font-size:32px; font-weight:700;
           background:<?= $ok ? '#ffe600' : '#2a2a2a' ?>; color:<?= $ok ? '#0a0a0a' : '#ededed' ?>; }
  h1 { font-size:22px; margin:0 0 12px; }
  p { color:#9a9a9a; line-height:1.6; margin:0 0 24px; }
  a.btn { display:inline-block; background:#ffe600; color:#0a0a0a; font-weight:600;
          text-decoration:none; padding:12px 22px; border-radius:9px; }
</style>
</head>
<body>
  <div class="card">
    <div class="badge"><?= $ok ? '✓' : '!' ?></div>
    <h1><?= $ok ? 'Anmeldung bestätigt' : 'Hoppla' ?></h1>
    <p><?= h($message) ?></p>
    <a class="btn" href="https://www.2fox4.de/">Zur Startseite</a>
  </div>
</body>
</html>
