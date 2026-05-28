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
 * Spam-Schutz (alles "silent drop" — Bot sieht eine status=ok-Seite,
 * tatsächlich wird keine Mail verschickt; echte User merken davon nichts):
 *   - Zwei Honeypot-Felder ("fax_number", "company_url") — für Bots sichtbar,
 *     für Menschen via CSS unsichtbar.
 *   - Time-Trap: Submit unter 3 Sekunden nach Page-Load → Bot.
 *   - Content-Filter: kyrillisch/CJK-Zeichen, >2 URLs in der Nachricht,
 *     typische SEO/Spam-Keywords ("backlinks", "guest post" usw.).
 *   - Rate-Limit: max. 3 Submits pro IP pro Stunde.
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

// Honeypot — zwei Felder, beide MÜSSEN leer sein
$hp1 = field('fax_number', 100);
$hp2 = field('company_url', 100);
$hpLegacy = field('website', 100); // legacy, falls alte Form-Versionen noch live sind
if ($hp1 !== '' || $hp2 !== '' || $hpLegacy !== '') {
    redirect($SPAM_REDIRECT);
}

// Time-Trap — Submit darf nicht <3 s nach Page-Load passieren
$loadedAt = field('form_loaded_at', 20);
if ($loadedAt !== '' && ctype_digit($loadedAt)) {
    $nowMs    = (int) round(microtime(true) * 1000);
    $elapsed  = $nowMs - (int) $loadedAt;
    if ($elapsed >= 0 && $elapsed < 3000) {
        redirect($SPAM_REDIRECT);
    }
}

// Content-Filter — Nachricht auf typische Spam-Muster prüfen
$msgLower = mb_strtolower($message, 'UTF-8');

// Kyrillisch / CJK (Chinesisch, Japanisch, Koreanisch) — Geschäftskontakt
// aus dem Schaumburger Land hat das im Klartext praktisch nie.
$nonLatinScripts = '/[\x{0400}-\x{04FF}\x{4E00}-\x{9FFF}\x{3040}-\x{30FF}\x{3400}-\x{4DBF}\x{AC00}-\x{D7AF}]/u';
if (preg_match_all($nonLatinScripts, $message) > 4) {
    redirect($SPAM_REDIRECT);
}

// Mehr als 2 URLs in der Nachricht → praktisch immer Linkspam
if (preg_match_all('~(?:https?://|www\.)~i', $message) > 2) {
    redirect($SPAM_REDIRECT);
}

// Typische SEO/Service-Spam-Phrasen
$spamKeywords = [
    '/\bback\s*-?\s*links?\b/i',
    '/\blink\s*-?\s*building\b/i',
    '/\bseo\s+services?\b/i',
    '/\bguest\s+post(s|ing)?\b/i',
    '/\bguest\s+blog/i',
    '/\bdofollow\b/i',
    '/\bdomain\s+rating\b/i',
    '/\bcasino\b/i',
    '/\bviagra\b/i',
    '/\bcialis\b/i',
    '/\bbitcoin\s+(invest|trading|profit)/i',
    '/\bcrypto\s+(invest|trading|profit)/i',
    '/\bforex\b/i',
    '/\bpayday\s+loan/i',
    '/\besports?\s+betting\b/i',
    '/\bweb\s*-?\s*scraping\b/i',
    '/\brank\s+(higher|first|#1)\b/i',
    '/\bincrease\s+(your\s+)?(traffic|ranking|sales)\b/i',
    '/\bget\s+more\s+(traffic|customers|leads)\b/i',
];
foreach ($spamKeywords as $pattern) {
    if (preg_match($pattern, $msgLower)) {
        redirect($SPAM_REDIRECT);
    }
}

// Rate-Limit — max. 3 Submits pro IP pro Stunde
$rawIp = $_SERVER['REMOTE_ADDR'] ?? '';
if ($rawIp !== '') {
    $rateFile = sys_get_temp_dir() . '/2fox4_rate_' . hash('sha256', $rawIp) . '.txt';
    $now      = time();
    $cutoff   = $now - 3600; // 1 Stunde
    $stamps   = [];
    if (is_readable($rateFile)) {
        $lines = @file($rateFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
        foreach ($lines as $line) {
            $ts = (int) $line;
            if ($ts > $cutoff) {
                $stamps[] = $ts;
            }
        }
    }
    if (count($stamps) >= 3) {
        redirect($SPAM_REDIRECT);
    }
    $stamps[] = $now;
    @file_put_contents($rateFile, implode("\n", $stamps), LOCK_EX);
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
