<?php
/**
 * KI-SEO-Analyser — Backend für das Tool im Blogbeitrag
 * /blog/ki-seo-analyse-fuer-webseiten/
 *
 * Ruft die eingegebene Seite SERVERSEITIG ab (kein externer CORS-Proxy mehr),
 * prüft 10 Faktoren, die für klassische Suche und KI-Suche zählen, und liefert
 * Punkte + Hinweise als JSON. Es wird nichts gespeichert außer einem
 * kurzlebigen, gehashten Zähler pro IP und Stunde (Missbrauchsschutz).
 *
 * Aufruf: POST application/json  { "url": "https://example.de" }
 * Antwort: { ok:true, url, score, level, factors:[{key,label,points,max,status,hint}], info:{...} }
 *          { ok:false, error:"..." }
 *
 * Sicherheit (SSRF): nur http/https, Standard-Ports, nur öffentliche IPs,
 * IP wird per CURLOPT_RESOLVE fixiert (kein DNS-Rebinding), Weiterleitungen
 * werden einzeln neu geprüft, Download auf 2 MB begrenzt.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

const KISEO_MAX_BYTES   = 2_000_000;
const KISEO_RATE_LIMIT  = 20;      // Analysen pro IP und Stunde
const KISEO_UA          = 'Mozilla/5.0 (compatible; 2FOX4-KI-SEO-Analyser/1.0; +https://www.2fox4.de/blog/ki-seo-analyse-fuer-webseiten/)';

function out_json(array $data, int $code = 200): never {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function fail(string $msg, int $code = 400): never {
    out_json(['ok' => false, 'error' => $msg], $code);
}

/* ---------- Eingabe ---------- */
if (PHP_SAPI !== 'cli') {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') fail('Nur POST erlaubt.', 405);
    $in = json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($in)) fail('Ungültige Anfrage.');
    $rawUrl = trim((string)($in['url'] ?? ''));
    rate_limit((string)($_SERVER['REMOTE_ADDR'] ?? '0'));
} else {
    $rawUrl = trim((string)($argv[1] ?? '')); // lokaler Test: php ki-seo-analyse.php https://…
}
if ($rawUrl === '' || mb_strlen($rawUrl) > 500) fail('Bitte geben Sie eine Website-Adresse ein.');
if (!preg_match('~^https?://~i', $rawUrl)) $rawUrl = 'https://' . $rawUrl;

/* ---------- Missbrauchsschutz ---------- */
function rate_limit(string $ip): void {
    $dir = sys_get_temp_dir() . '/2fox4-kiseo';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    $file = $dir . '/' . sha1($ip . '|' . date('YmdH') . '|2fox4') . '.cnt';
    $n = is_file($file) ? (int)file_get_contents($file) : 0;
    if ($n >= KISEO_RATE_LIMIT) fail('Zu viele Analysen in kurzer Zeit. Bitte versuchen Sie es in einer Stunde erneut.', 429);
    @file_put_contents($file, (string)($n + 1), LOCK_EX);
    if (random_int(1, 50) === 1) { // gelegentlich aufräumen
        foreach (glob($dir . '/*.cnt') ?: [] as $f) if (filemtime($f) < time() - 7200) @unlink($f);
    }
}

/* ---------- sicherer Abruf ---------- */
function public_ips(string $host): array {
    if (filter_var($host, FILTER_VALIDATE_IP)) {
        $ips = [$host];
    } else {
        $ips = [];
        foreach ((@dns_get_record($host, DNS_A | DNS_AAAA) ?: []) as $r) {
            if (!empty($r['ip'])) $ips[] = $r['ip'];
            if (!empty($r['ipv6'])) $ips[] = $r['ipv6'];
        }
        if (!$ips) $ips = @gethostbynamel($host) ?: [];
    }
    if (!$ips) return [];
    foreach ($ips as $ip) {
        if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) return [];
    }
    return $ips;
}

/** @return array{status:int,body:string,url:string,type:string}|null */
function safe_fetch(string $url, int $maxBytes = KISEO_MAX_BYTES, int $hops = 4): ?array {
    for ($i = 0; $i <= $hops; $i++) {
        $p = parse_url($url);
        if (!$p || !isset($p['host'], $p['scheme'])) return null;
        $scheme = strtolower($p['scheme']);
        if (!in_array($scheme, ['http', 'https'], true) || isset($p['user']) || isset($p['pass'])) return null;
        $port = $p['port'] ?? ($scheme === 'https' ? 443 : 80);
        if (!in_array($port, [80, 443], true)) return null;
        $host = trim($p['host'], '[]');
        $ips = public_ips($host);
        if (!$ips) return null;

        $body = '';
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RESOLVE        => [$host . ':' . $port . ':' . (str_contains($ips[0], ':') ? '[' . $ips[0] . ']' : $ips[0])],
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_HEADER         => false,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_USERAGENT      => KISEO_UA,
            CURLOPT_HTTPHEADER     => ['Accept: text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.5', 'Accept-Language: de,en;q=0.7'],
            CURLOPT_ENCODING       => '',
            CURLOPT_PROTOCOLS      => CURLPROTO_HTTP | CURLPROTO_HTTPS,
            CURLOPT_WRITEFUNCTION  => function ($ch, $chunk) use (&$body, $maxBytes) {
                $body .= $chunk;
                return strlen($body) > $maxBytes ? 0 : strlen($chunk);
            },
        ]);
        curl_exec($ch);
        $status = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $type   = (string)curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        $loc    = (string)curl_getinfo($ch, CURLINFO_REDIRECT_URL);
        curl_close($ch);
        if ($status === 0) return null;
        if ($status >= 300 && $status < 400 && $loc !== '') { $url = $loc; continue; }
        return ['status' => $status, 'body' => $body, 'url' => $url, 'type' => $type];
    }
    return null;
}

$page = safe_fetch($rawUrl);
if (!$page) fail('Die Seite konnte nicht abgerufen werden. Bitte prüfen Sie die Adresse (nur öffentlich erreichbare Websites).');
if (in_array($page['status'], [401, 403, 429, 503], true)) fail('Die Website blockiert automatische Abrufe (Fehler ' . $page['status'] . '), deshalb kann sie hier nicht geprüft werden.');
if ($page['status'] >= 400) fail('Die Seite antwortet mit Fehler ' . $page['status'] . '. Bitte prüfen Sie die Adresse.');
if ($page['type'] !== '' && !preg_match('~html~i', $page['type'])) fail('Unter dieser Adresse liegt keine HTML-Seite.');

$finalUrl = $page['url'];
$fp = parse_url($finalUrl);
$origin = strtolower($fp['scheme']) . '://' . $fp['host'] . (isset($fp['port']) ? ':' . $fp['port'] : '');
$html = $page['body'];

/* ---------- HTML parsen ---------- */
libxml_use_internal_errors(true);
$doc = new DOMDocument();
$doc->loadHTML('<?xml encoding="UTF-8">' . $html, LIBXML_NOWARNING | LIBXML_NOERROR);
$xp = new DOMXPath($doc);
function q(DOMXPath $xp, string $expr): DOMNodeList { return $xp->query($expr) ?: new DOMNodeList(); }
function first_attr(DOMXPath $xp, string $expr, string $attr): string {
    $n = q($xp, $expr)->item(0);
    return $n instanceof DOMElement ? trim($n->getAttribute($attr)) : '';
}
function txt(string $s): string { return trim(preg_replace('/\s+/u', ' ', $s) ?? ''); }

$factors = [];
function factor(array &$f, string $key, string $label, int $points, int $max, string $hint): void {
    $points = max(0, min($max, $points));
    $status = $points >= $max * 0.8 ? 'good' : ($points >= $max * 0.4 ? 'warn' : 'bad');
    $f[] = compact('key', 'label', 'points', 'max', 'status', 'hint');
}

/* 1. Seitentitel */
$title = txt((q($xp, '//title')->item(0)?->textContent) ?? '');
$tl = mb_strlen($title);
if ($tl === 0)              factor($factors, 'title', 'Seitentitel', 0, 10, 'Es fehlt ein <title>. Der Titel ist das wichtigste Signal, worum es auf der Seite geht.');
elseif ($tl < 15 || $tl > 65) factor($factors, 'title', 'Seitentitel', 5, 10, "Titel vorhanden ({$tl} Zeichen), ideal sind etwa 30–60 Zeichen mit dem Hauptbegriff vorne.");
else                         factor($factors, 'title', 'Seitentitel', 10, 10, "Gut: „" . mb_substr($title, 0, 70) . "“ ({$tl} Zeichen).");

/* 2. Meta-Beschreibung */
$desc = txt(first_attr($xp, '//meta[translate(@name,"DESCRIPTON","descripton")="description"]', 'content'));
$dl = mb_strlen($desc);
if ($dl === 0)              factor($factors, 'description', 'Meta-Beschreibung', 0, 10, 'Keine Meta-Beschreibung. Suchmaschinen und KI-Systeme nutzen sie als Kurzfassung der Seite.');
elseif ($dl < 70 || $dl > 165) factor($factors, 'description', 'Meta-Beschreibung', 5, 10, "Vorhanden ({$dl} Zeichen), ideal sind etwa 120–160 Zeichen mit klarer Aussage.");
else                         factor($factors, 'description', 'Meta-Beschreibung', 10, 10, "Gut: {$dl} Zeichen.");

/* 3. Überschriften */
$h1 = q($xp, '//h1')->length; $h2 = q($xp, '//h2')->length;
$p = ($h1 === 1 ? 6 : ($h1 > 1 ? 3 : 0)) + ($h2 >= 2 ? 4 : ($h2 === 1 ? 2 : 0));
$hint = $h1 === 0 ? 'Keine H1-Überschrift gefunden. ' : ($h1 > 1 ? "{$h1} H1-Überschriften – besser genau eine. " : 'Genau eine H1 – gut. ');
$hint .= $h2 >= 2 ? "{$h2} H2-Zwischenüberschriften gliedern den Inhalt." : 'Mehr H2-Zwischenüberschriften helfen KI-Systemen, Abschnitte zu verstehen und zu zitieren.';
factor($factors, 'headings', 'Überschriften-Struktur', $p, 10, $hint);

/* 4. Strukturierte Daten */
$types = [];
foreach (q($xp, '//script[contains(translate(@type,"LDJSON","ldjson"),"ld+json")]') as $s) {
    $j = json_decode(trim($s->textContent), true);
    if (!is_array($j)) continue;
    $stack = [$j];
    while ($stack) {
        $n = array_pop($stack);
        if (!is_array($n)) continue;
        if (isset($n['@type'])) foreach ((array)$n['@type'] as $t) if (is_string($t)) $types[$t] = true;
        foreach ($n as $v) if (is_array($v)) $stack[] = $v;
    }
}
$micro = q($xp, '//*[@itemtype]')->length;
$useful = array_intersect(array_keys($types), ['Organization', 'LocalBusiness', 'ProfessionalService', 'Store', 'Restaurant', 'FAQPage', 'Article', 'BlogPosting', 'NewsArticle', 'Product', 'Service', 'Person', 'WebSite', 'HowTo', 'Event']);
if ($types) {
    $p = 6 + ($useful ? 4 : 0);
    factor($factors, 'schema', 'Strukturierte Daten', $p, 10, 'Gefunden: ' . implode(', ', array_slice(array_keys($types), 0, 8)) . ($useful ? '.' : '. Ergänzen Sie z. B. Organization/LocalBusiness oder FAQPage.'));
} elseif ($micro) {
    factor($factors, 'schema', 'Strukturierte Daten', 5, 10, 'Nur Microdata gefunden. JSON-LD (z. B. Organization, LocalBusiness, FAQPage) wird von Suchmaschinen und KI-Systemen am zuverlässigsten gelesen.');
} else {
    factor($factors, 'schema', 'Strukturierte Daten', 0, 10, 'Keine strukturierten Daten. Mit JSON-LD (Organization, LocalBusiness, FAQPage) erklären Sie Maschinen eindeutig, wer Sie sind und was Sie anbieten.');
}

/* 5. Zugang für KI-Crawler (robots.txt + noindex) */
$robotsMeta = strtolower(first_attr($xp, '//meta[translate(@name,"ROBTS","robts")="robots"]', 'content'));
$robots = safe_fetch($origin . '/robots.txt', 300_000, 2);
$robotsTxt = ($robots && $robots['status'] === 200) ? $robots['body'] : '';
$bots = ['GPTBot' => 'ChatGPT', 'OAI-SearchBot' => 'ChatGPT-Suche', 'ClaudeBot' => 'Claude', 'PerplexityBot' => 'Perplexity', 'Google-Extended' => 'Gemini'];
$blocked = [];
if ($robotsTxt !== '') {
    $groups = []; $cur = []; $lastWasAgent = false;
    foreach (preg_split('/\r\n|\r|\n/', $robotsTxt) as $line) {
        $line = trim(preg_replace('/#.*/', '', $line) ?? '');
        if ($line === '' || !str_contains($line, ':')) continue;
        [$k, $v] = array_map('trim', explode(':', $line, 2));
        $k = strtolower($k);
        if ($k === 'user-agent') {
            if (!$lastWasAgent) { if ($cur) $groups[] = $cur; $cur = ['agents' => [], 'disallow' => [], 'allow' => []]; }
            $cur['agents'][] = strtolower($v); $lastWasAgent = true;
        } else {
            $lastWasAgent = false;
            if (!$cur) continue;
            if ($k === 'disallow') $cur['disallow'][] = $v;
            if ($k === 'allow') $cur['allow'][] = $v;
        }
    }
    if ($cur) $groups[] = $cur;
    foreach ($bots as $bot => $name) {
        $g = null;
        foreach ($groups as $gr) if (in_array(strtolower($bot), $gr['agents'], true)) { $g = $gr; break; }
        if (!$g) foreach ($groups as $gr) if (in_array('*', $gr['agents'], true)) { $g = $gr; break; }
        if ($g && in_array('/', $g['disallow'], true) && !in_array('/', $g['allow'], true)) $blocked[] = "$bot ($name)";
    }
}
if (str_contains($robotsMeta, 'noindex') || str_contains($robotsMeta, 'none')) {
    factor($factors, 'crawler', 'Zugang für KI-Crawler', 0, 10, 'Die Seite ist per Meta-Robots auf „noindex“ gesetzt – sie wird weder von Google noch von KI-Suchen aufgenommen.');
} elseif ($blocked) {
    factor($factors, 'crawler', 'Zugang für KI-Crawler', 10 - 2 * count($blocked), 10, 'Per robots.txt ausgesperrt: ' . implode(', ', $blocked) . '. Wenn Sie in KI-Antworten genannt werden möchten, sollten diese Crawler Zugriff haben.');
} else {
    factor($factors, 'crawler', 'Zugang für KI-Crawler', 10, 10, $robotsTxt === '' ? 'Keine robots.txt gefunden – KI-Crawler dürfen alles lesen.' : 'Die robots.txt lässt die wichtigen KI-Crawler (ChatGPT, Claude, Perplexity, Gemini) zu.');
}

/* 6. Textumfang */
foreach (q($xp, '//script|//style|//noscript|//template|//svg') as $n) $n->parentNode?->removeChild($n);
$bodyText = txt((q($xp, '//body')->item(0)?->textContent) ?? '');
$words = $bodyText === '' ? 0 : count(preg_split('/\s+/u', $bodyText) ?: []);
$p = $words >= 600 ? 10 : ($words >= 300 ? 7 : ($words >= 150 ? 4 : 1));
factor($factors, 'content', 'Textumfang', $p, 10, "Etwa {$words} Wörter lesbarer Text. " . ($words >= 600 ? 'Genug Substanz, aus der KI-Systeme zitieren können.' : 'Mehr erklärender Text (Leistungen, Ablauf, häufige Fragen) gibt KI-Systemen Stoff für Antworten.'));

/* 7. Alt-Texte */
$imgs = q($xp, '//img'); $total = $imgs->length; $withAlt = 0;
foreach ($imgs as $img) if ($img instanceof DOMElement && $img->hasAttribute('alt')) $withAlt++;
if ($total === 0) factor($factors, 'alt', 'Alt-Texte bei Bildern', 10, 10, 'Keine Bilder im HTML gefunden.');
else factor($factors, 'alt', 'Alt-Texte bei Bildern', (int)round($withAlt / $total * 10), 10, "{$withAlt} von {$total} Bildern haben ein Alt-Attribut." . ($withAlt < $total ? ' Beschreibende Alt-Texte helfen Suchmaschinen, KI und Screenreadern.' : ''));

/* 8. Sprache + Canonical */
$lang = first_attr($xp, '//html', 'lang');
$canon = first_attr($xp, '//link[translate(@rel,"CANONIL","canonil")="canonical"]', 'href');
factor($factors, 'lang', 'Sprache & Canonical', ($lang ? 5 : 0) + ($canon ? 5 : 0), 10,
    ($lang ? "Sprache ist ausgezeichnet ({$lang}). " : 'Das lang-Attribut fehlt (z. B. lang="de"). ') . ($canon ? 'Canonical-Link vorhanden.' : 'Kein Canonical-Link – er verhindert, dass Duplikate um Rankings konkurrieren.'));

/* 9. HTTPS + mobil */
$https = str_starts_with(strtolower($finalUrl), 'https://');
$viewport = first_attr($xp, '//meta[translate(@name,"VIEWPORT","viewport")="viewport"]', 'content');
factor($factors, 'mobile', 'HTTPS & Mobilfreundlichkeit', ($https ? 5 : 0) + ($viewport ? 5 : 0), 10,
    ($https ? 'HTTPS aktiv. ' : 'Die Seite läuft ohne HTTPS – das kostet Vertrauen und Rankings. ') . ($viewport ? 'Viewport für Mobilgeräte gesetzt.' : 'Kein Viewport-Tag – die Seite ist vermutlich nicht für Smartphones optimiert.'));

/* 10. Social-/Open-Graph-Daten */
$ogT = first_attr($xp, '//meta[@property="og:title"]', 'content');
$ogD = first_attr($xp, '//meta[@property="og:description"]', 'content');
$ogI = first_attr($xp, '//meta[@property="og:image"]', 'content');
$missing = array_keys(array_filter(['og:title' => !$ogT, 'og:description' => !$ogD, 'og:image' => !$ogI]));
factor($factors, 'og', 'Vorschau-Daten (Open Graph)', ($ogT ? 3 : 0) + ($ogD ? 3 : 0) + ($ogI ? 4 : 0), 10,
    $missing ? 'Es fehlen: ' . implode(', ', $missing) . '. Diese Angaben bestimmen die Vorschau beim Teilen und helfen bei der Einordnung.' : 'Titel, Beschreibung und Vorschaubild sind gesetzt.');

/* ---------- Zusatzinfos (ohne Punkte) ---------- */
$llms = safe_fetch($origin . '/llms.txt', 200_000, 2);
$hasLlms = $llms && $llms['status'] === 200 && !preg_match('~html~i', $llms['type']) && trim($llms['body']) !== '';
$hasSitemap = (bool)preg_match('/^\s*sitemap\s*:/mi', $robotsTxt);

$score = array_sum(array_column($factors, 'points'));
$level = $score >= 80 ? 'Sehr gut' : ($score >= 60 ? 'Gut' : ($score >= 40 ? 'Ausbaufähig' : 'Kritisch'));

out_json([
    'ok'      => true,
    'url'     => $finalUrl,
    'score'   => $score,
    'level'   => $level,
    'factors' => $factors,
    'info'    => [
        'llms_txt'  => $hasLlms,
        'sitemap'   => $hasSitemap,
        'html_kb'   => (int)round(strlen($html) / 1024),
        'words'     => $words,
    ],
]);
