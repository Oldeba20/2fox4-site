<?php
/**
 * Geschützte Lead-Liste (Double-Opt-in) für den KI-Sichtbarkeits-Check.
 *
 *   https://www.2fox4.de/ki-check-leads.php?key=ADMIN_KEY            → Liste
 *   https://www.2fox4.de/ki-check-leads.php?key=ADMIN_KEY&export=csv → CSV-Download
 *
 * Zeigt bestätigte (confirmed) und offene (pending) Anmeldungen.
 * Der CSV-Export enthält ausschließlich BESTÄTIGTE Adressen – nur diese
 * dürfen für Newsletter/Anschreiben genutzt werden.
 */

declare(strict_types=1);

$configFile = __DIR__ . '/ki-check.config.php';
if (!is_file($configFile)) { http_response_code(500); exit('Konfiguration fehlt.'); }
$config = require $configFile;

$adminKey = (string)($config['admin_key'] ?? '');
if ($adminKey === '' || !hash_equals($adminKey, (string)($_GET['key'] ?? ''))) {
    http_response_code(403);
    header('Content-Type: text/plain; charset=utf-8');
    exit('Zugriff verweigert.');
}

if (empty($config['db_host'])) { http_response_code(500); exit('Keine Datenbank konfiguriert.'); }

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
        $config['db_user'], $config['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 8]
    );
} catch (\Throwable $e) {
    http_response_code(500);
    exit('Datenbank nicht erreichbar.');
}

/* ---------- CSV-Export: nur bestätigte Adressen, dedupliziert ---------- */
if (($_GET['export'] ?? '') === 'csv') {
    $rows = $pdo->query(
        "SELECT email, MAX(business) AS business, MAX(confirmed_at) AS confirmed_at
           FROM ki_check_leads
          WHERE status='confirmed'
          GROUP BY email
          ORDER BY confirmed_at DESC"
    )->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="ki-check-leads-' . date('Y-m-d') . '.csv"');
    $out = fopen('php://output', 'w');
    fputcsv($out, ['email', 'business', 'confirmed_at']);
    foreach ($rows as $r) {
        fputcsv($out, [$r['email'], $r['business'], $r['confirmed_at']]);
    }
    fclose($out);
    exit;
}

/* ---------- Übersicht ---------- */
$confirmed = (int)$pdo->query("SELECT COUNT(DISTINCT email) FROM ki_check_leads WHERE status='confirmed'")->fetchColumn();
$pending   = (int)$pdo->query("SELECT COUNT(*) FROM ki_check_leads WHERE status='pending'")->fetchColumn();
$rows = $pdo->query(
    "SELECT email, business, service, region, status, signup_at, confirmed_at
       FROM ki_check_leads
      ORDER BY (status='confirmed') DESC, COALESCE(confirmed_at, signup_at) DESC
      LIMIT 1000"
)->fetchAll(PDO::FETCH_ASSOC);

function h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
$key = urlencode((string)($_GET['key'] ?? ''));
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KI-Check Leads · 2fox4</title>
<style>
  body { font-family: system-ui, sans-serif; background:#0a0a0a; color:#ededed; margin:0; padding:24px; }
  h1 { font-size:20px; }
  .meta { color:#999; font-size:13px; margin-bottom:16px; }
  .btn { display:inline-block; background:#ffe600; color:#0a0a0a; font-weight:600;
         text-decoration:none; padding:8px 16px; border-radius:8px; font-size:14px; }
  table { width:100%; border-collapse:collapse; font-size:13px; margin-top:18px; }
  th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #222; }
  th { color:#ffe600; position:sticky; top:0; background:#0a0a0a; }
  .pill { font-size:11px; font-weight:600; padding:2px 8px; border-radius:999px; }
  .pill.confirmed { background:#ffe600; color:#000; }
  .pill.pending { background:#2a2a2a; color:#9a9a9a; }
</style>
</head>
<body>
  <h1>KI-Sichtbarkeits-Check · Newsletter-Anmeldungen</h1>
  <p class="meta"><strong style="color:#ffe600"><?= $confirmed ?></strong> bestätigt ·
     <?= $pending ?> offen (Double-Opt-in)</p>
  <a class="btn" href="?key=<?= $key ?>&amp;export=csv">Bestätigte als CSV exportieren</a>
  <table>
    <thead>
      <tr><th>Status</th><th>E-Mail</th><th>Firma</th><th>Suchbegriff / Region</th><th>Angemeldet</th><th>Bestätigt</th></tr>
    </thead>
    <tbody>
    <?php foreach ($rows as $r): $st = $r['status']; ?>
      <tr>
        <td><span class="pill <?= $st ?>"><?= $st === 'confirmed' ? 'bestätigt' : 'offen' ?></span></td>
        <td><?= h($r['email']) ?></td>
        <td><?= h($r['business']) ?></td>
        <td><?= h($r['service']) ?><?php if (!empty($r['region'])): ?><br><span style="color:#777"><?= h($r['region']) ?></span><?php endif; ?></td>
        <td style="color:#999"><?= h(substr((string)$r['signup_at'], 0, 16)) ?></td>
        <td style="color:#999"><?= h(substr((string)($r['confirmed_at'] ?? ''), 0, 16)) ?></td>
      </tr>
    <?php endforeach; ?>
    <?php if (!$rows): ?>
      <tr><td colspan="6" style="color:#777">Noch keine Anmeldungen.</td></tr>
    <?php endif; ?>
    </tbody>
  </table>
</body>
</html>
