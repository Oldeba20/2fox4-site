<?php
/**
 * KI-Besucherzähler — gemeinsame Funktionen (Erkennung, Tabelle, Auswertung).
 *
 * Zählt Besuche, die von KI-Assistenten (ChatGPT, Perplexity, Gemini, Copilot,
 * Claude …) auf die Website kommen. Erkannt wird das über die Herkunftsseite
 * (Referrer-Host) oder den Parameter utm_source, den z. B. ChatGPT an Links hängt.
 *
 * Datenschutz: Gespeichert werden NUR Tag, KI-Quelle, aufgerufene Seite und ein
 * Zähler. Keine IP-Adresse, kein User-Agent, keine Cookies, nichts im Endgerät.
 * Deshalb ohne Einwilligung zulässig (keine personenbezogenen Daten,
 * § 25 TDDDG greift nicht, weil nichts auf dem Gerät gespeichert/gelesen wird).
 *
 * Wichtig für die Einordnung: Viele KI-Apps (v. a. Mobil-Apps) schicken keinen
 * Referrer mit. Die Zahlen sind daher eine UNTERGRENZE, keine vollständige Zählung.
 *
 * Gedacht als wiederverwendbarer Baustein: Für Kundenseiten dieselben drei Dateien
 * (lib/ki-traffic-lib.php, ki-traffic.php, Snippet) + eigene ki-traffic.config.php.
 */

declare(strict_types=1);

if (!function_exists('kit_detect_source')) {

/** Host-Endungen → Anzeigename. Reihenfolge egal, Abgleich per Endung. */
function kit_host_map(): array {
    return [
        'chatgpt.com'             => 'ChatGPT',
        'chat.openai.com'         => 'ChatGPT',
        'openai.com'              => 'ChatGPT',
        'perplexity.ai'           => 'Perplexity',
        'gemini.google.com'       => 'Gemini',
        'bard.google.com'         => 'Gemini',
        'copilot.microsoft.com'   => 'Copilot',
        'copilot.cloud.microsoft' => 'Copilot',
        'claude.ai'               => 'Claude',
        'chat.mistral.ai'         => 'Mistral',
        'mistral.ai'              => 'Mistral',
        'chat.deepseek.com'       => 'DeepSeek',
        'deepseek.com'            => 'DeepSeek',
        'meta.ai'                 => 'Meta AI',
        'grok.com'                => 'Grok',
        'you.com'                 => 'You.com',
        'poe.com'                 => 'Poe',
        'phind.com'               => 'Phind',
    ];
}

/** utm_source-Muster → Anzeigename. */
function kit_utm_map(): array {
    return [
        '/chatgpt|openai/i' => 'ChatGPT',
        '/perplexity/i'     => 'Perplexity',
        '/gemini|bard/i'    => 'Gemini',
        '/copilot/i'        => 'Copilot',
        '/claude/i'         => 'Claude',
        '/mistral/i'        => 'Mistral',
        '/deepseek/i'       => 'DeepSeek',
        '/grok/i'           => 'Grok',
        '/meta\.ai/i'       => 'Meta AI',
    ];
}

/** @return array{0:string,1:string}|null  [Quelle, 'referrer'|'utm'] */
function kit_detect_source(string $refHost, string $utm): ?array {
    $refHost = strtolower(trim($refHost));
    if ($refHost !== '' && preg_match('/^[a-z0-9.-]{3,120}$/', $refHost)) {
        foreach (kit_host_map() as $suffix => $label) {
            if ($refHost === $suffix || str_ends_with($refHost, '.' . $suffix)) {
                return [$label, 'referrer'];
            }
        }
    }
    $utm = trim($utm);
    if ($utm !== '' && strlen($utm) <= 60) {
        foreach (kit_utm_map() as $re => $label) {
            if (preg_match($re, $utm)) return [$label, 'utm'];
        }
    }
    return null;
}

/** Pfad säubern: nur Pfad, ohne Query/Fragment, max. 255 Zeichen. */
function kit_clean_path(string $p): string {
    $p = (string)parse_url($p, PHP_URL_PATH);
    if ($p === '' || $p[0] !== '/') return '/';
    $p = preg_replace('#[^A-Za-z0-9/_.%~äöüÄÖÜß-]#u', '', $p) ?? '/';
    return mb_substr($p, 0, 255);
}

/** Config: eigene ki-traffic.config.php, sonst die DB-Daten aus ki-check.config.php. */
function kit_config(string $webRoot): array {
    foreach (['ki-traffic.config.php', 'ki-check.config.php'] as $f) {
        if (is_file($webRoot . '/' . $f)) return (array)require $webRoot . '/' . $f;
    }
    return [];
}

function kit_pdo(array $c): PDO {
    if (empty($c['db_host'])) throw new RuntimeException('Keine Datenbank konfiguriert.');
    return new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $c['db_host'], $c['db_name']),
        $c['db_user'], $c['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 5]
    );
}

function kit_ensure_table(PDO $pdo): void {
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS ki_traffic (
            day    DATE         NOT NULL,
            source VARCHAR(32)  NOT NULL,
            via    VARCHAR(10)  NOT NULL,
            page   VARCHAR(255) NOT NULL,
            hits   INT UNSIGNED NOT NULL DEFAULT 0,
            PRIMARY KEY (day, source, via, page),
            KEY idx_day (day)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
}

function kit_record(PDO $pdo, string $source, string $via, string $page): void {
    $st = $pdo->prepare(
        "INSERT INTO ki_traffic (day, source, via, page, hits) VALUES (CURDATE(), ?, ?, ?, 1)
         ON DUPLICATE KEY UPDATE hits = hits + 1"
    );
    $st->execute([$source, $via, $page]);
}

/**
 * Auswertung für einen Zeitraum (inkl. beider Tage).
 * @return array{from:string,to:string,total:int,by_source:array,by_page:array,by_day:array,prev_total:int}
 */
function kit_summary(PDO $pdo, string $from, string $to): array {
    $q = function (string $sql, array $p) use ($pdo) {
        $st = $pdo->prepare($sql); $st->execute($p); return $st->fetchAll(PDO::FETCH_ASSOC);
    };
    $total = (int)($q("SELECT COALESCE(SUM(hits),0) t FROM ki_traffic WHERE day BETWEEN ? AND ?", [$from, $to])[0]['t'] ?? 0);
    $bySource = $q("SELECT source, SUM(hits) hits FROM ki_traffic WHERE day BETWEEN ? AND ? GROUP BY source ORDER BY hits DESC", [$from, $to]);
    $byPage   = $q("SELECT page, SUM(hits) hits, GROUP_CONCAT(DISTINCT source ORDER BY source SEPARATOR ', ') sources
                      FROM ki_traffic WHERE day BETWEEN ? AND ? GROUP BY page ORDER BY hits DESC LIMIT 25", [$from, $to]);
    $byDay    = $q("SELECT day, SUM(hits) hits FROM ki_traffic WHERE day BETWEEN ? AND ? GROUP BY day ORDER BY day", [$from, $to]);

    // Vorperiode gleicher Länge
    $len = (int)((strtotime($to) - strtotime($from)) / 86400) + 1;
    $pTo = date('Y-m-d', strtotime($from . ' -1 day'));
    $pFrom = date('Y-m-d', strtotime($pTo . ' -' . ($len - 1) . ' days'));
    $prev = (int)($q("SELECT COALESCE(SUM(hits),0) t FROM ki_traffic WHERE day BETWEEN ? AND ?", [$pFrom, $pTo])[0]['t'] ?? 0);

    $cast = fn(array $rows) => array_map(fn($r) => ['hits' => (int)$r['hits']] + $r, $rows);
    return [
        'from' => $from, 'to' => $to, 'total' => $total,
        'prev_from' => $pFrom, 'prev_to' => $pTo, 'prev_total' => $prev,
        'by_source' => $cast($bySource), 'by_page' => $cast($byPage), 'by_day' => $cast($byDay),
    ];
}

/** Grobe Bremse gegen Massen-Aufrufe ohne IP-Bezug: höchstens $max Zählungen pro Tag insgesamt. */
function kit_rate_ok(PDO $pdo, int $max = 2000): bool {
    $n = (int)$pdo->query("SELECT COALESCE(SUM(hits),0) FROM ki_traffic WHERE day = CURDATE()")->fetchColumn();
    return $n < $max;
}

}
