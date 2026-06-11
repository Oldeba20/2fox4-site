<?php
/**
 * Geschützter Protokoll-Viewer für den KI-Sichtbarkeits-Check.
 *
 * Zeigt alle durchgeführten Checks (E-Mail, Firma, Suchbegriff, generierte
 * Fragen, Score). Zugriff nur mit dem admin_key aus ki-check.config.php:
 *
 *   https://2fox4.de/ki-check-log.php?key=DEIN_ADMIN_KEY
 *
 * Liest ki-check-data/log.jsonl (eine JSON-Zeile pro Check).
 */

declare(strict_types=1);

$configFile = __DIR__ . '/ki-check.config.php';
if (!is_file($configFile)) { http_response_code(500); exit('Konfiguration fehlt.'); }
$config = require $configFile;
$adminKey = (string)($config['admin_key'] ?? '');

$given = (string)($_GET['key'] ?? '');
if ($adminKey === '' || !hash_equals($adminKey, $given)) {
    http_response_code(403);
    header('Content-Type: text/plain; charset=utf-8');
    exit('Zugriff verweigert.');
}

$logFile = __DIR__ . '/ki-check-data/log.jsonl';
$entries = [];
if (is_readable($logFile)) {
    foreach (@file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
        $row = json_decode($line, true);
        if (is_array($row)) $entries[] = $row;
    }
}
$entries = array_reverse($entries); // neueste zuerst

function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KI-Check Protokoll · 2fox4</title>
<style>
  body { font-family: system-ui, sans-serif; background:#0a0a0a; color:#ededed; margin:0; padding:24px; }
  h1 { font-size:20px; }
  .meta { color:#999; font-size:13px; margin-bottom:16px; }
  table { width:100%; border-collapse:collapse; font-size:13px; }
  th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #222; vertical-align:top; }
  th { color:#ffe600; position:sticky; top:0; background:#0a0a0a; }
  .score { font-weight:700; }
  details { color:#bbb; } summary { cursor:pointer; color:#ffe600; }
  li { margin:2px 0; }
  .yes { color:#ffe600; } .no { color:#777; }
</style>
</head>
<body>
  <h1>KI-Sichtbarkeits-Check · Protokoll</h1>
  <p class="meta"><?= count($entries) ?> Einträge · neueste zuerst</p>
  <table>
    <thead>
      <tr><th>Zeit</th><th>E-Mail</th><th>Firma</th><th>Suchbegriff / Region</th><th>Score</th><th>Fragen</th></tr>
    </thead>
    <tbody>
    <?php foreach ($entries as $e): ?>
      <tr>
        <td><?= h(substr((string)($e['ts'] ?? ''), 0, 16)) ?></td>
        <td><?= h((string)($e['email'] ?? '')) ?></td>
        <td><?= h((string)($e['business'] ?? '')) ?></td>
        <td><?= h((string)($e['service'] ?? '')) ?><?php if (!empty($e['region'])): ?><br><span style="color:#777"><?= h((string)$e['region']) ?></span><?php endif; ?></td>
        <td class="score"><?= (int)($e['score'] ?? 0) ?>%<br><span style="color:#777;font-weight:400"><?= h((string)($e['level'] ?? '')) ?></span></td>
        <td>
          <details>
            <summary><?= (int)($e['mentions'] ?? 0) ?> genannt</summary>
            <ul>
            <?php foreach (($e['questions'] ?? []) as $q): ?>
              <li><span class="<?= !empty($q['mentioned']) ? 'yes' : 'no' ?>"><?= !empty($q['mentioned']) ? '✓' : '✕' ?></span> <?= h((string)($q['q'] ?? '')) ?></li>
            <?php endforeach; ?>
            </ul>
          </details>
        </td>
      </tr>
    <?php endforeach; ?>
    <?php if (!$entries): ?>
      <tr><td colspan="6" style="color:#777">Noch keine Checks protokolliert.</td></tr>
    <?php endif; ?>
    </tbody>
  </table>
</body>
</html>
