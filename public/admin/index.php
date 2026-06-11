<?php
/**
 * Einfaches Admin-Dashboard für 2fox4 unter /admin/.
 *
 * Login mit EINEM Passwort (admin_pass aus ki-check.config.php), Session-basiert.
 * Danach Buttons zu den geschützten Tools (Leads + Protokoll) – der admin_key
 * wird automatisch eingesetzt, du musst ihn dir nicht merken.
 *
 * Aufruf:  https://www.2fox4.de/admin/
 */

declare(strict_types=1);
session_start();

$configFile = dirname(__DIR__) . '/ki-check.config.php';
if (!is_file($configFile)) { http_response_code(500); exit('Konfiguration fehlt.'); }
$config = require $configFile;

$adminPass = (string)($config['admin_pass'] ?? '');
$adminKey  = (string)($config['admin_key'] ?? '');

/* ---------- Logout ---------- */
if (isset($_GET['logout'])) {
    $_SESSION = [];
    session_destroy();
    header('Location: ./');
    exit;
}

/* ---------- Login ---------- */
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pw = (string)($_POST['password'] ?? '');
    if ($adminPass !== '' && hash_equals($adminPass, $pw)) {
        session_regenerate_id(true);
        $_SESSION['ki_admin'] = true;
    } else {
        usleep(700000); // kleine Bremse gegen Raten
        $error = 'Falsches Passwort.';
    }
}
$authed = !empty($_SESSION['ki_admin']);

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
$k = rawurlencode($adminKey);
function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>2fox4 · Admin</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center;
         font-family: system-ui, -apple-system, sans-serif;
         background:#0a0a0a; color:#ededed; padding:24px; }
  .card { width:100%; max-width:420px; background:#161616;
          border:1px solid rgba(255,255,255,0.12); border-radius:18px; padding:32px; }
  h1 { font-size:20px; margin:0 0 6px; }
  .sub { color:#9a9a9a; font-size:14px; margin:0 0 24px; }
  label { display:block; font-size:13px; color:#9a9a9a; margin-bottom:6px; }
  input[type=password] { width:100%; box-sizing:border-box; background:#0a0a0a;
          border:1px solid rgba(255,255,255,0.14); border-radius:9px; padding:12px 14px;
          color:#ededed; font-size:15px; outline:none; }
  input[type=password]:focus { border-color:#ffe600; }
  button { margin-top:16px; width:100%; background:#ffe600; color:#0a0a0a; font-weight:600;
          border:0; border-radius:9px; padding:13px; font-size:15px; cursor:pointer; }
  .err { color:#ff6b35; font-size:13px; margin-top:12px; }
  .tile { display:block; text-decoration:none; background:#0a0a0a;
          border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:18px 20px;
          margin-bottom:12px; color:#ededed; transition:border-color .15s; }
  .tile:hover { border-color:#ffe600; }
  .tile b { color:#ffe600; }
  .tile span { display:block; color:#9a9a9a; font-size:13px; margin-top:4px; }
  .logout { display:inline-block; margin-top:8px; color:#9a9a9a; font-size:13px; }
</style>
</head>
<body>
  <div class="card">
  <?php if (!$authed): ?>
    <h1>2fox4 · Admin</h1>
    <p class="sub">Bitte mit deinem Admin-Passwort anmelden.</p>
    <form method="post">
      <label for="password">Passwort</label>
      <input type="password" id="password" name="password" autofocus autocomplete="current-password">
      <button type="submit">Anmelden</button>
      <?php if ($error): ?><div class="err"><?= e($error) ?></div><?php endif; ?>
      <?php if ($adminPass === ''): ?>
        <div class="err">Hinweis: In der Config ist noch kein <code>admin_pass</code> gesetzt.</div>
      <?php endif; ?>
    </form>
  <?php else: ?>
    <h1>2fox4 · Admin</h1>
    <p class="sub">KI-Sichtbarkeits-Check</p>
    <a class="tile" href="/ki-check-leads.php?key=<?= $k ?>">
      <b>Newsletter-Leads →</b>
      <span>Bestätigte Anmeldungen ansehen &amp; als CSV exportieren</span>
    </a>
    <a class="tile" href="/ki-check-log.php?key=<?= $k ?>">
      <b>Check-Protokoll →</b>
      <span>Alle durchgeführten KI-Checks mit Fragen &amp; Score</span>
    </a>
    <a class="logout" href="?logout">Abmelden</a>
  <?php endif; ?>
  </div>
</body>
</html>
