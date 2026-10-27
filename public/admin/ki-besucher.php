<?php
/**
 * Admin: KI-Besucher — wer kommt über ChatGPT, Perplexity, Gemini & Co. auf 2fox4.de?
 * Login über /admin/ (gleiche Session). Daten aus Tabelle ki_traffic (siehe lib/ki-traffic-lib.php).
 */

declare(strict_types=1);
session_start();
if (empty($_SESSION['ki_admin'])) { header('Location: ./'); exit; }

$webRoot = dirname(__DIR__);
require_once $webRoot . '/lib/ki-traffic-lib.php';
$config = kit_config($webRoot);

$days = (int)($_GET['days'] ?? 30);
if (!in_array($days, [7, 30, 90, 365], true)) $days = 30;
$to = date('Y-m-d');
$from = date('Y-m-d', strtotime("-" . ($days - 1) . " days"));

$err = ''; $s = null;
try { $pdo = kit_pdo($config); kit_ensure_table($pdo); $s = kit_summary($pdo, $from, $to); }
catch (\Throwable $e) { $err = 'Datenbank nicht erreichbar.'; }

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
function e(string $v): string { return htmlspecialchars($v, ENT_QUOTES, 'UTF-8'); }
function dmy(string $d): string { return date('d.m.Y', strtotime($d)); }

// Tagesreihe lückenlos auffüllen
$series = [];
if ($s) {
    $map = [];
    foreach ($s['by_day'] as $r) $map[$r['day']] = (int)$r['hits'];
    for ($t = strtotime($from); $t <= strtotime($to); $t += 86400) {
        $d = date('Y-m-d', $t); $series[$d] = $map[$d] ?? 0;
    }
}
$maxDay = $series ? max(1, max($series)) : 1;
$maxSrc = ($s && $s['by_source']) ? max(1, $s['by_source'][0]['hits']) : 1;
$delta = $s ? $s['total'] - $s['prev_total'] : 0;
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>2fox4 · KI-Besucher</title>
<style>
  body { margin:0; font-family: system-ui, -apple-system, sans-serif; background:#0a0a0a; color:#ededed; padding:24px 16px; }
  .wrap { max-width:960px; margin:0 auto; }
  a { color:#ffe600; }
  .top { display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:8px; }
  h1 { font-size:22px; margin:0; }
  .sub { color:#9a9a9a; font-size:14px; margin:6px 0 20px; }
  .tabs a { display:inline-block; padding:7px 12px; border:1px solid rgba(255,255,255,.14); border-radius:8px;
            color:#ededed; text-decoration:none; font-size:13px; margin:0 6px 6px 0; }
  .tabs a.on { border-color:#ffe600; color:#ffe600; }
  .kpis { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin:16px 0 20px; }
  .card { background:#161616; border:1px solid rgba(255,255,255,.12); border-radius:14px; padding:18px 20px; }
  .kpi b { display:block; font-size:30px; color:#ffe600; }
  .kpi span { color:#9a9a9a; font-size:13px; }
  h2 { font-size:15px; margin:0 0 12px; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px; }
  @media (max-width:720px){ .grid2 { grid-template-columns:1fr; } }
  .bar { display:flex; align-items:center; gap:10px; font-size:14px; margin:7px 0; }
  .bar .l { width:96px; flex:none; }
  .bar .t { flex:1; background:#0a0a0a; border-radius:5px; height:12px; overflow:hidden; }
  .bar .t i { display:block; height:100%; background:#ff6b35; border-radius:5px; }
  .bar .n { width:44px; text-align:right; color:#9a9a9a; }
  .days { display:flex; align-items:flex-end; gap:2px; height:120px; padding-top:6px; }
  .days i { flex:1; background:#ff6b35; border-radius:2px 2px 0 0; min-height:2px; opacity:.9; }
  .days i.z { background:#2a2a2a; }
  .axis { display:flex; justify-content:space-between; color:#9a9a9a; font-size:12px; margin-top:6px; }
  table { width:100%; border-collapse:collapse; font-size:14px; }
  td, th { text-align:left; padding:7px 6px; border-bottom:1px solid rgba(255,255,255,.08); vertical-align:top; }
  th { color:#9a9a9a; font-weight:500; font-size:12px; }
  td.r, th.r { text-align:right; }
  .note { color:#9a9a9a; font-size:13px; line-height:1.5; margin-top:16px; }
  .empty { color:#9a9a9a; font-size:14px; }
  .err { color:#ff6b35; }
</style>
</head>
<body>
<div class="wrap">
  <div class="top">
    <h1>KI-Besucher</h1>
    <a href="./">← Admin</a>
  </div>
  <p class="sub">Besuche, die aus ChatGPT, Perplexity, Gemini, Copilot, Claude &amp; Co. auf 2fox4.de kommen.</p>

  <div class="tabs">
    <?php foreach ([7 => '7 Tage', 30 => '30 Tage', 90 => '90 Tage', 365 => '12 Monate'] as $d => $lbl): ?>
      <a class="<?= $d === $days ? 'on' : '' ?>" href="?days=<?= $d ?>"><?= $lbl ?></a>
    <?php endforeach; ?>
  </div>

<?php if ($err): ?>
  <p class="err"><?= e($err) ?></p>
<?php else: ?>
  <div class="kpis">
    <div class="card kpi"><b><?= $s['total'] ?></b><span>KI-Besuche <?= dmy($from) ?> – <?= dmy($to) ?></span></div>
    <div class="card kpi"><b><?= ($delta > 0 ? '+' : '') . $delta ?></b><span>gegenüber Vorzeitraum (<?= $s['prev_total'] ?>)</span></div>
    <div class="card kpi"><b><?= count($s['by_source']) ?></b><span>verschiedene KI-Assistenten</span></div>
  </div>

  <div class="card" style="margin-bottom:12px">
    <h2>Verlauf pro Tag</h2>
    <div class="days">
      <?php foreach ($series as $d => $n): ?>
        <i class="<?= $n ? '' : 'z' ?>" style="height:<?= $n ? max(4, round($n / $maxDay * 100)) : 2 ?>%" title="<?= dmy($d) ?>: <?= $n ?>"></i>
      <?php endforeach; ?>
    </div>
    <div class="axis"><span><?= dmy($from) ?></span><span>max. <?= $maxDay ?>/Tag</span><span><?= dmy($to) ?></span></div>
  </div>

  <div class="grid2">
    <div class="card">
      <h2>Nach KI-Assistent</h2>
      <?php if (!$s['by_source']): ?><p class="empty">Noch keine Besuche im Zeitraum.</p><?php endif; ?>
      <?php foreach ($s['by_source'] as $r): ?>
        <div class="bar"><span class="l"><?= e($r['source']) ?></span>
          <span class="t"><i style="width:<?= round($r['hits'] / $maxSrc * 100) ?>%"></i></span>
          <span class="n"><?= $r['hits'] ?></span></div>
      <?php endforeach; ?>
    </div>
    <div class="card">
      <h2>Eingangsseiten</h2>
      <?php if (!$s['by_page']): ?><p class="empty">Noch keine Besuche im Zeitraum.</p><?php else: ?>
      <table>
        <tr><th>Seite</th><th>Quelle</th><th class="r">Besuche</th></tr>
        <?php foreach ($s['by_page'] as $r): ?>
          <tr><td><a href="<?= e($r['page']) ?>" target="_blank" rel="noopener"><?= e($r['page']) ?></a></td>
              <td><?= e((string)$r['sources']) ?></td><td class="r"><?= $r['hits'] ?></td></tr>
        <?php endforeach; ?>
      </table>
      <?php endif; ?>
    </div>
  </div>

  <p class="note">
    Gezählt wird anonym: nur Tag, KI-Quelle und Eingangsseite – keine IP, keine Cookies.
    Viele KI-Apps (besonders auf dem Handy) geben nicht mit, woher der Besuch kommt.
    Die Zahlen sind deshalb eine Untergrenze. Klicks aus Googles KI-Übersichten
    stecken in den normalen Google-Zahlen der Search Console und tauchen hier nicht auf.
  </p>
<?php endif; ?>
</div>
</body>
</html>
