<?php
/**
 * KI-Besucherzähler — Endpunkt.
 *
 *   POST /ki-traffic.php        Zählt einen Besuch (vom Snippet im Seitenkopf, per sendBeacon).
 *                               Body (JSON als text/plain): {"r":"chatgpt.com","u":"","p":"/leistungen/seo/"}
 *   GET  /ki-traffic.php?key=ADMIN_KEY[&from=YYYY-MM-DD&to=YYYY-MM-DD | &days=30]
 *                               Auswertung als JSON (für den monatlichen GSC-Report).
 *
 * Speichert nur Tag + KI-Quelle + Seite + Zähler (siehe lib/ki-traffic-lib.php).
 */

declare(strict_types=1);
require_once __DIR__ . '/lib/ki-traffic-lib.php';

header('X-Robots-Tag: noindex, nofollow');
$config = kit_config(__DIR__);

/* ---------- Auswertung (JSON) ---------- */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    $adminKey = (string)($config['admin_key'] ?? '');
    if ($adminKey === '' || !hash_equals($adminKey, (string)($_GET['key'] ?? ''))) {
        http_response_code(403); echo '{"error":"forbidden"}'; exit;
    }
    $re = '/^\d{4}-\d{2}-\d{2}$/';
    $to = preg_match($re, (string)($_GET['to'] ?? '')) ? $_GET['to'] : date('Y-m-d');
    if (preg_match($re, (string)($_GET['from'] ?? ''))) {
        $from = $_GET['from'];
    } else {
        $days = max(1, min(730, (int)($_GET['days'] ?? 30)));
        $from = date('Y-m-d', strtotime($to . ' -' . ($days - 1) . ' days'));
    }
    try {
        $pdo = kit_pdo($config); kit_ensure_table($pdo);
        echo json_encode(kit_summary($pdo, $from, $to), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    } catch (\Throwable $e) {
        http_response_code(500); echo '{"error":"db"}';
    }
    exit;
}

/* ---------- Zählen (POST) ---------- */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }

// Nur Aufrufe von der eigenen Website annehmen
$host = strtolower((string)($_SERVER['HTTP_HOST'] ?? ''));
$origin = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');
$originHost = strtolower((string)parse_url($origin, PHP_URL_HOST));
if ($host === '' || $originHost !== $host) { http_response_code(204); exit; }

$raw = (string)file_get_contents('php://input', false, null, 0, 2048);
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(204); exit; }

$hit = kit_detect_source((string)($data['r'] ?? ''), (string)($data['u'] ?? ''));
if ($hit === null) { http_response_code(204); exit; }

try {
    $pdo = kit_pdo($config);
    kit_ensure_table($pdo);
    if (kit_rate_ok($pdo)) kit_record($pdo, $hit[0], $hit[1], kit_clean_path((string)($data['p'] ?? '/')));
} catch (\Throwable $e) {
    error_log('[2fox4 KI-Traffic] ' . $e->getMessage());
}
http_response_code(204);
