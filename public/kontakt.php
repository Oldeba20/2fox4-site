<?php
/**
 * Kontaktformular-Handler für 2fox4.de (SMTP-Version).
 *
 * Versendet die Anfragen via SMTP-Authentifizierung — auf all-inkl-Hosting
 * funktioniert die native PHP-mail()-Funktion nicht zuverlässig, deshalb
 * nutzen wir PHPMailer + SMTP mit dem Postfach-Login.
 *
 * Konfiguration:
 *   - SMTP-Settings werden aus kontakt.config.php geladen (NICHT im Repo).
 *   - Vorlage liegt unter kontakt.config.example.php.
 *
 * Spam-Schutz:
 *   - Honeypot-Feld "website" (für Bots sichtbar, für Menschen via CSS unsichtbar).
 *   - Server-seitige Pflichtfeld-Validierung.
 *   - DSGVO-Checkbox als Pflicht-Bestätigung.
 *
 * Endpoints:
 *   POST /neu/kontakt.php
 *     → bei Erfolg:   303 redirect /neu/kontakt/?status=ok
 *     → bei Fehler:   303 redirect /neu/kontakt/?status=error
 *     → bei invalid:  303 redirect /neu/kontakt/?status=invalid&fields=...
 *   GET /neu/kontakt.php → 303 redirect zurück zum Formular
 */

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

// PHPMailer einbinden (manuelle Loader, weil ohne Composer)
require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

/* ------------------------------------------------------------------ */
/*  Konfiguration laden                                                */
/* ------------------------------------------------------------------ */
$configFile = __DIR__ . '/kontakt.config.php';
if (!file_exists($configFile)) {
    error_log('[2fox4 Kontakt] kontakt.config.php fehlt');
    header('Location: /neu/kontakt/?status=error&reason=config', true, 303);
    exit;
}
$config = require $configFile;

/* ------------------------------------------------------------------ */
/*  Redirect-Pfade dynamisch aus dem Request bauen                     */
/* ------------------------------------------------------------------ */
// Bei /neu/kontakt.php → $basePath = '/neu'.
// Bei /kontakt.php (live) → $basePath = '' → Redirects bleiben gültig.
$basePath = rtrim(dirname($_SERVER['REQUEST_URI']), '/');

$SUCCESS_REDIRECT = $basePath . '/kontakt/?status=ok';
$ERROR_REDIRECT   = $basePath . '/kontakt/?status=error';
$INVALID_REDIRECT = $basePath . '/kontakt/?status=invalid';
$SPAM_REDIRECT    = $basePath . '/kontakt/?status=ok';

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */
function field(string $name, int $maxLen = 500): string {
    if (!isset($_POST[$name])) return '';
    $v = is_string($_POST[$name]) ? $_POST[$name] : '';
    $v = trim($v);
    if (mb_strlen($v) > $maxLen) $v = mb_substr($v, 0, $maxLen);
    return $v;
}

function redirect(string $url): never {
    header('Cache-Control: no-store, must-revalidate');
    header('Location: ' . $url, true, 303);
    exit;
}

/* ------------------------------------------------------------------ */
/*  Nur POST                                                           */
/* ------------------------------------------------------------------ */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect($INVALID_REDIRECT);
}

/* ------------------------------------------------------------------ */
/*  Felder einlesen                                                    */
/* ------------------------------------------------------------------ */
$name        = field('name', 100);
$email       = field('email', 200);
$phone       = field('phone', 50);
$webPresence = field('web_presence', 200);
$message     = field('message', 5000);
$consent     = isset($_POST['consent']) && $_POST['consent'] !== '';

// Honeypot
$honeypot = field('website', 100);
if ($honeypot !== '') {
    redirect($SPAM_REDIRECT);
}

/* ------------------------------------------------------------------ */
/*  Validierung                                                        */
/* ------------------------------------------------------------------ */
$errors = [];
if ($name === '' || mb_strlen($name) < 2)              $errors[] = 'name';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($message === '' || mb_strlen($message) < 5)        $errors[] = 'message';
if (!$consent)                                          $errors[] = 'consent';

if (!empty($errors)) {
    redirect($INVALID_REDIRECT . '&fields=' . urlencode(implode(',', $errors)));
}

/* ------------------------------------------------------------------ */
/*  Mailbody                                                           */
/* ------------------------------------------------------------------ */
$subject = '[2fox4.de] Neue Kontaktanfrage von ' . $name;

$bodyLines = [
    'Neue Anfrage über das Kontaktformular auf 2fox4.de',
    '====================================================',
    '',
    'Name:           ' . $name,
    'E-Mail:         ' . $email,
];
if ($phone !== '')       $bodyLines[] = 'Telefon:        ' . $phone;
if ($webPresence !== '') $bodyLines[] = 'Onlinepräsenz:  ' . $webPresence;
$bodyLines[] = '';
$bodyLines[] = 'Nachricht:';
$bodyLines[] = '----------';
$bodyLines[] = $message;
$bodyLines[] = '';
$bodyLines[] = '----------';
$bodyLines[] = 'Datenschutzhinweis akzeptiert: ja';
$bodyLines[] = 'Absende-IP (gekürzt): ' . preg_replace('/\.\d+$/', '.0', $_SERVER['REMOTE_ADDR'] ?? 'unbekannt');
$bodyLines[] = 'User-Agent: ' . substr($_SERVER['HTTP_USER_AGENT'] ?? 'unbekannt', 0, 200);
$bodyLines[] = 'Zeitstempel: ' . date('Y-m-d H:i:s');

$body = implode("\r\n", $bodyLines);

/* ------------------------------------------------------------------ */
/*  Versand via PHPMailer + SMTP                                       */
/* ------------------------------------------------------------------ */
$mail = new PHPMailer(true);

try {
    // SMTP-Setup
    $mail->isSMTP();
    $mail->Host        = $config['smtp_host'];
    $mail->SMTPAuth    = true;
    $mail->Username    = $config['smtp_user'];
    $mail->Password    = $config['smtp_password'];
    $mail->SMTPSecure  = $config['smtp_secure'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port        = (int) $config['smtp_port'];
    $mail->CharSet     = 'UTF-8';
    $mail->Encoding    = 'base64';
    $mail->Timeout     = 15; // Sekunden

    // Absender + Empfänger
    $mail->setFrom($config['mail_from'], $config['mail_from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($email, $name);

    // Inhalt
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->isHTML(false);

    $mail->send();
    redirect($SUCCESS_REDIRECT);

} catch (PHPMailerException $e) {
    error_log('[2fox4 Kontakt] SMTP-Fehler: ' . $mail->ErrorInfo);
    redirect($ERROR_REDIRECT);
}
