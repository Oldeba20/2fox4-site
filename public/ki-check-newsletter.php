<?php
/**
 * KI-Check — Newsletter an- und abmelden.
 *
 *   Anmelden:  /ki-check-newsletter.php?t=<Lead-Token>&src=result-mail|confirm-page
 *   Abmelden:  /ki-check-newsletter.php?u=<Newsletter-Token>
 *
 * GET zeigt nur eine Seite mit Button, erst der POST ändert etwas. Grund:
 * Virenscanner in Firmen-Postfächern öffnen Links aus Mails automatisch –
 * ein GET-Link würde sonst eine Einwilligung auslösen, die niemand gegeben hat.
 * Ausnahme: One-Click-Abmeldung nach RFC 8058 (POST mit List-Unsubscribe=One-Click).
 */

declare(strict_types=1);

require_once __DIR__ . '/lib/ki-check-newsletter-lib.php';

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

function nl_h(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

$isPost    = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';
$leadToken = (string)($_REQUEST['t'] ?? '');
$unsubTok  = (string)($_REQUEST['u'] ?? '');
$src       = in_array(($_REQUEST['src'] ?? ''), ['confirm-page', 'result-mail'], true) ? (string)$_REQUEST['src'] : 'result-mail';
$mode      = preg_match('/^[a-f0-9]{32}$/', $unsubTok) ? 'out' : (preg_match('/^[a-f0-9]{32}$/', $leadToken) ? 'in' : '');

$state = 'form';   // form | done | error
$title = 'Link ungültig';
$text  = 'Dieser Link ist ungültig oder abgelaufen.';

$configFile = __DIR__ . '/ki-check.config.php';
$pdo = null;
if ($mode !== '' && is_file($configFile)) {
    $config = require $configFile;
    try {
        $pdo = new PDO(
            sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
            $config['db_user'], $config['db_pass'],
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 8]
        );
        kicnl_ensure_table($pdo);
    } catch (\Throwable $e) {
        error_log('[2fox4 KI-Check] Newsletter-DB: ' . $e->getMessage());
        $pdo = null;
        $state = 'error';
        $title = 'Gerade nicht möglich';
        $text  = 'Das hat technisch nicht geklappt. Bitte versuche es später noch einmal oder schreib an info@2fox4.de.';
    }
}

if ($pdo && $mode === 'in') {
    // Nur Adressen, die ihre E-Mail-Adresse per Double-Opt-in bestätigt haben.
    $st = $pdo->prepare("SELECT email FROM ki_check_leads WHERE token=? AND status='confirmed' LIMIT 1");
    $st->execute([$leadToken]);
    $email = (string)($st->fetchColumn() ?: '');
    if ($email === '') {
        $mode = '';
        $state = 'error';
        $title = 'Link ungültig';
        $text  = 'Diesen Link können wir keiner bestätigten Adresse zuordnen.';
    } elseif (kicnl_get($pdo, $email)['status'] === 'subscribed') {
        $state = 'done';
        $title = 'Du bist schon dabei';
        $text  = 'Für ' . $email . ' ist die Anmeldung bereits aktiv. Abmelden kannst du dich über den Link in jeder Mail.';
    } elseif ($isPost) {
        $ip = preg_replace('/\.\d+$/', '.0', $_SERVER['REMOTE_ADDR'] ?? '');
        $ld = $pdo->prepare("SELECT business FROM ki_check_leads WHERE token=? LIMIT 1");
        $ld->execute([$leadToken]);
        kicnl_subscribe($pdo, $email, $src, (string)($config['consent_version'] ?? date('Y-m-d')), $ip,
            $config, ['business' => (string)($ld->fetchColumn() ?: '')]);
        $state = 'done';
        $title = 'Danke, du bist angemeldet';
        $text  = 'Wir schicken dir etwa einmal im Monat Neuigkeiten und Tipps zur KI-Sichtbarkeit an ' . $email . '. Abmelden geht jederzeit über den Link in jeder Mail.';
    } else {
        $title = 'Neuigkeiten zur KI-Sichtbarkeit';
        $text  = 'Möchtest du für ' . $email . ' unsere Neuigkeiten und Tipps erhalten?';
    }
}

if ($pdo && $mode === 'out') {
    $oneClick = $isPost && (($_POST['List-Unsubscribe'] ?? '') === 'One-Click');
    if ($isPost) {
        $found = kicnl_unsubscribe($pdo, $unsubTok, $config);
        if ($oneClick) { http_response_code($found ? 200 : 404); exit; }
        $state = $found ? 'done' : 'error';
        $title = $found ? 'Du bist abgemeldet' : 'Link ungültig';
        $text  = $found ? 'Du bekommst von uns keine Neuigkeiten mehr per E-Mail. Schade – aber danke, dass du dabei warst.'
                        : 'Diesen Abmeldelink können wir keiner Adresse zuordnen. Schreib uns gern an info@2fox4.de.';
    } else {
        $title = 'Vom Newsletter abmelden?';
        $text  = 'Mit einem Klick auf den Button bekommst du keine Neuigkeiten mehr von uns.';
    }
}
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= nl_h($title) ?> · 2FOX4</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center;
         font-family: system-ui, -apple-system, sans-serif; background:#0a0a0a; color:#ededed; padding:24px; }
  .card { max-width:480px; text-align:center; background:#161616; border:1px solid #2e2e2e;
          border-radius:18px; padding:40px 32px; }
  .card.ok { border-color:#ff6b35; }
  h1 { font-size:22px; margin:0 0 12px; }
  p { color:#a8a8a8; line-height:1.6; margin:0 0 20px; }
  .consent { text-align:left; font-size:14px; color:#cfcfcf; background:#1f1f1f; border-radius:10px;
             padding:14px 16px; margin:0 0 20px; }
  button, a.btn { display:inline-block; background:#ff6b35; color:#fff; font-weight:700; font-size:15px;
                  border:0; cursor:pointer; text-decoration:none; padding:13px 24px; border-radius:10px; }
  a.link { display:inline-block; margin-top:16px; color:#8a8a8a; font-size:13px; }
</style>
</head>
<body>
  <div class="card<?= $state === 'done' ? ' ok' : '' ?>">
    <h1><?= nl_h($title) ?></h1>
    <p><?= nl_h($text) ?></p>
    <?php if ($state === 'form' && $mode === 'in'): ?>
      <form method="post" action="/ki-check-newsletter.php">
        <input type="hidden" name="t" value="<?= nl_h($leadToken) ?>">
        <input type="hidden" name="src" value="<?= nl_h($src) ?>">
        <div class="consent"><?= nl_h(kicnl_consent_text()) ?></div>
        <button type="submit">Ja, anmelden</button>
      </form>
      <a class="link" href="https://www.2fox4.de/">Nein danke, zur Startseite</a>
    <?php elseif ($state === 'form' && $mode === 'out'): ?>
      <form method="post" action="/ki-check-newsletter.php">
        <input type="hidden" name="u" value="<?= nl_h($unsubTok) ?>">
        <button type="submit">Abmelden</button>
      </form>
    <?php else: ?>
      <a class="btn" href="https://www.2fox4.de/">Zur Startseite</a>
    <?php endif; ?>
  </div>
</body>
</html>
