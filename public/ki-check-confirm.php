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

/**
 * Sendet dem Kunden sein KI-Sichtbarkeits-Ergebnis per E-Mail.
 * Wird NUR nach erfolgreicher Double-Opt-in-Bestätigung aufgerufen, damit
 * niemals an eine nicht bestätigte (ggf. fremde) Adresse versendet wird.
 */
function send_result_mail(array $config, array $lead): void
{
    $mailFile = __DIR__ . '/lib/PHPMailer/PHPMailer.php';
    if (!is_file($mailFile)) {
        return;
    }
    require_once __DIR__ . '/lib/PHPMailer/Exception.php';
    require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

    $r = json_decode((string)$lead['result_json'], true) ?: [];
    $score    = (int)($lead['result_score'] ?? 0);
    $level    = (string)($lead['result_level'] ?? '');
    $business = (string)($lead['business'] ?? '');
    $summary  = (string)($r['summary'] ?? '');
    $mentions = (int)($r['mentions'] ?? 0);
    $citations = (int)($r['citations'] ?? 0);
    $nChecked  = (int)($r['nChecked'] ?? 0);
    $questions = is_array($r['questions'] ?? null) ? $r['questions'] : [];
    $recs      = is_array($r['recommendations'] ?? null) ? $r['recommendations'] : [];

    $lines = [];
    $lines[] = 'Hallo,';
    $lines[] = '';
    $lines[] = 'danke für deine Bestätigung. Hier ist dein KI-Sichtbarkeits-Check'
             . ($business !== '' ? ' für ' . $business : '') . ':';
    $lines[] = '';
    $lines[] = 'Score: ' . $score . '% – ' . $level;
    if ($summary !== '') {
        $lines[] = $summary;
    }
    $lines[] = '';
    if ($nChecked > 0) {
        $lines[] = 'Genannt:  ' . $mentions . ' von ' . $nChecked . ' Fragen';
        $lines[] = 'Verlinkt: ' . $citations . ' von ' . $nChecked . ' Fragen';
        $lines[] = '';
    }
    $lines[] = 'Was bedeuten die Begriffe?';
    $lines[] = '- "Genannt": Dein Unternehmen wird im Antworttext der KI-Suche';
    $lines[] = '  namentlich erwähnt – die KI kennt dich und nennt dich als Anbieter.';
    $lines[] = '- "Verlinkt": Die KI führt deine Website als Quelle an und verlinkt';
    $lines[] = '  sie. Das ist die stärkste Form der Sichtbarkeit, weil Nutzer direkt';
    $lines[] = '  zu dir gelangen.';
    $lines[] = '';
    if ($questions) {
        $lines[] = 'Geprüfte Fragen:';
        foreach ($questions as $q) {
            $tag = !empty($q['cited']) ? 'genannt + verlinkt'
                 : (!empty($q['mentioned']) ? 'genannt' : 'nicht genannt');
            $lines[] = ' [' . $tag . '] ' . (string)($q['question'] ?? '');
        }
        $lines[] = '';
    }
    if ($recs) {
        $lines[] = 'Deine nächsten Schritte:';
        foreach ($recs as $rec) {
            $lines[] = ' - ' . (string)$rec;
        }
        $lines[] = '';
    }
    $lines[] = 'Hinweis: Das Ergebnis ist ein starker Indikator für deine';
    $lines[] = 'KI-Sichtbarkeit, keine garantierte 1:1-Abbildung der jeweiligen App.';
    $lines[] = '';
    $lines[] = 'Du möchtest sichtbarer werden? Lass uns unverbindlich sprechen:';
    $lines[] = 'https://www.2fox4.de/kontakt/';
    $lines[] = '';
    $lines[] = 'Viele Grüße';
    $lines[] = '2fox4 · www.2fox4.de';
    $lines[] = '';
    $lines[] = 'Du erhältst diese E-Mail, weil du deine Anmeldung zum KI-Sichtbarkeits-Check';
    $lines[] = 'bestätigt hast. Abmelden jederzeit per Antwort auf diese E-Mail.';

    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = ($config['smtp_secure'] ?? 'tls') === 'ssl'
        ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
        : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port    = (int)($config['smtp_port'] ?? 587);
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['mail_from'], $config['mail_from_name'] ?? '2fox4');
    $mail->addAddress((string)$lead['email']);
    $mail->Subject = 'Dein KI-Sichtbarkeits-Check: ' . $score . '%';
    $mail->Body    = implode("\r\n", $lines);
    $mail->isHTML(false);
    $mail->send();
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
