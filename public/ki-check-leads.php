<?php
/**
 * Geschützte Lead-Liste (Double-Opt-in) für den KI-Sichtbarkeits-Check.
 *
 *   https://www.2fox4.de/ki-check-leads.php?key=ADMIN_KEY            → Liste
 *   https://www.2fox4.de/ki-check-leads.php?key=ADMIN_KEY&export=csv → CSV-Download
 *
 * Zeigt Newsletter-Abonnenten und alle Check-Anfragen.
 *
 * WICHTIG (28.09.2026 korrigiert): „bestätigt" bei den Check-Anfragen heißt nur,
 * dass die Person ihre Auswertung bekommen darf – NICHT, dass sie Werbung will.
 * Der CSV-Export enthält deshalb ausschließlich Adressen aus ki_check_newsletter
 * mit Status „subscribed" (eigene, freiwillige Einwilligung + Double-Opt-in),
 * inklusive Nachweis für den Import in CleverReach.
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

require_once __DIR__ . '/lib/ki-check-newsletter-lib.php';
try { kicnl_ensure_table($pdo); } catch (\Throwable $e) { error_log('[2fox4 KI-Check] NL-Tabelle: ' . $e->getMessage()); }

/* ---------- CSV-Export: NUR Newsletter-Abonnenten, mit Einwilligungsnachweis ---------- */
if (($_GET['export'] ?? '') === 'csv') {
    $rows = $pdo->query(
        "SELECT n.email, n.subscribed_at, n.subscribed_ip, n.source, n.consent_version, n.consent_text,
                (SELECT MAX(l.business) FROM ki_check_leads l WHERE LOWER(l.email)=n.email) AS business
           FROM ki_check_newsletter n
          WHERE n.status='subscribed'
          ORDER BY n.subscribed_at DESC"
    )->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="ki-check-newsletter-' . date('Y-m-d') . '.csv"');
    $out = fopen('php://output', 'w');
    fwrite($out, "\xEF\xBB\xBF"); // BOM, damit Excel/CleverReach Umlaute korrekt lesen
    fputcsv($out, ['email', 'firma', 'angemeldet_am', 'ip_gekuerzt', 'quelle', 'einwilligung_version', 'einwilligungstext'], ';');
    foreach ($rows as $r) {
        fputcsv($out, [$r['email'], $r['business'], $r['subscribed_at'], $r['subscribed_ip'],
                       $r['source'], $r['consent_version'], $r['consent_text']], ';');
    }
    fclose($out);
    exit;
}

$nlRows = $pdo->query(
    "SELECT email, status, source, subscribed_at, subscribed_ip, consent_version, unsubscribed_at FROM ki_check_newsletter
      ORDER BY (status='subscribed') DESC, COALESCE(unsubscribed_at, subscribed_at) DESC LIMIT 500"
)->fetchAll(PDO::FETCH_ASSOC);
$nlCount = 0;
foreach ($nlRows as $nr) { if ($nr['status'] === 'subscribed') $nlCount++; }
$crOn = function_exists('kiccr_enabled') && kiccr_enabled($config);

/* ---------- Übersicht ---------- */
$confirmed = (int)$pdo->query("SELECT COUNT(DISTINCT email) FROM ki_check_leads WHERE status='confirmed'")->fetchColumn();
$pending   = (int)$pdo->query("SELECT COUNT(*) FROM ki_check_leads WHERE status='pending'")->fetchColumn();
$rows = $pdo->query(
    "SELECT email, business, service, region, status, signup_at, signup_ip, confirmed_at, confirmed_ip, consent_version
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
<title>KI-Check Newsletter &amp; Leads · 2fox4</title>
<style>
  body { font-family: system-ui, sans-serif; background:#0a0a0a; color:#ededed; margin:0; padding:24px; }
  h1 { font-size:20px; }
  .meta { color:#999; font-size:13px; margin-bottom:16px; }
  .btn { display:inline-block; background:#ff6b35; color:#0a0a0a; font-weight:600;
         text-decoration:none; padding:8px 16px; border-radius:8px; font-size:14px; }
  table { width:100%; border-collapse:collapse; font-size:13px; margin-top:18px; }
  th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #222; }
  th { color:#ff6b35; position:sticky; top:0; background:#0a0a0a; }
  .pill { font-size:11px; font-weight:600; padding:2px 8px; border-radius:999px; }
  .pill.confirmed { background:#ff6b35; color:#fff; }
  .pill.pending { background:#2a2a2a; color:#9a9a9a; }
  .ip { color:#666; font-size:12px; font-family:ui-monospace,monospace; }
  .note { color:#999; font-size:12px; max-width:760px; }
</style>
</head>
<body>
  <h1>Newsletter-Abonnenten (KI-Check)</h1>
  <p class="meta"><strong style="color:#ff6b35"><?= $nlCount ?></strong> angemeldet ·
     CleverReach-Übergabe: <?= $crOn ? 'automatisch aktiv' : 'aus – bitte CSV importieren' ?></p>
  <a class="btn" href="?key=<?= $key ?>&amp;export=csv">Abonnenten als CSV (für CleverReach)</a>
  <table>
    <thead><tr><th>Status</th><th>E-Mail</th><th>Quelle</th><th>Angemeldet (Zeit · IP gekürzt)</th><th>Text-Version</th><th>Abgemeldet</th></tr></thead>
    <tbody>
    <?php foreach ($nlRows as $n): ?>
      <tr>
        <td><span class="pill <?= $n['status'] === 'subscribed' ? 'confirmed' : 'pending' ?>"><?= $n['status'] === 'subscribed' ? 'angemeldet' : 'abgemeldet' ?></span></td>
        <td><?= h($n['email']) ?></td>
        <td style="color:#999"><?= h($n['source']) ?></td>
        <td style="color:#999"><?= h(substr((string)$n['subscribed_at'], 0, 16)) ?><br><span class="ip"><?= h($n['subscribed_ip']) ?></span></td>
        <td style="color:#999"><?= h($n['consent_version']) ?></td>
        <td style="color:#999"><?= h(substr((string)($n['unsubscribed_at'] ?? ''), 0, 16)) ?></td>
      </tr>
    <?php endforeach; ?>
    <?php if (!$nlRows): ?><tr><td colspan="6" style="color:#777">Noch keine Anmeldungen.</td></tr><?php endif; ?>
    </tbody>
  </table>

  <h1 style="margin-top:40px">Alle Check-Anfragen</h1>
  <p class="note">Nachweis Double-Opt-in: Zeitpunkt + IP beim Abschicken des Checks und beim Klick auf den Bestätigungslink.
     IP-Adressen werden gekürzt gespeichert (letzter Block = 0). Zeiten in Serverzeit (Europe/Berlin).</p>
  <p class="meta"><?= $confirmed ?> Adressen bestätigt (nur für die Auswertung, <strong>keine</strong> Werbe-Einwilligung) ·
     <?= $pending ?> offen</p>
  <table>
    <thead>
      <tr><th>Status</th><th>E-Mail</th><th>Firma</th><th>Suchbegriff / Region</th><th>Check abgeschickt (Zeit · IP)</th><th>Link bestätigt (Zeit · IP)</th><th>Text-Version</th></tr>
    </thead>
    <tbody>
    <?php foreach ($rows as $r): $st = $r['status']; ?>
      <tr>
        <td><span class="pill <?= $st ?>"><?= $st === 'confirmed' ? 'bestätigt' : 'offen' ?></span></td>
        <td><?= h($r['email']) ?></td>
        <td><?= h($r['business']) ?></td>
        <td><?= h($r['service']) ?><?php if (!empty($r['region'])): ?><br><span style="color:#777"><?= h($r['region']) ?></span><?php endif; ?></td>
        <td style="color:#999"><?= h(substr((string)$r['signup_at'], 0, 16)) ?><br><span class="ip"><?= h($r['signup_ip']) ?></span></td>
        <td style="color:#999"><?= h(substr((string)($r['confirmed_at'] ?? ''), 0, 16)) ?><br><span class="ip"><?= h($r['confirmed_ip'] ?? '') ?></span></td>
        <td style="color:#999"><?= h($r['consent_version']) ?></td>
      </tr>
    <?php endforeach; ?>
    <?php if (!$rows): ?>
      <tr><td colspan="7" style="color:#777">Noch keine Anmeldungen.</td></tr>
    <?php endif; ?>
    </tbody>
  </table>
</body>
</html>
