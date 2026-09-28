<?php
/**
 * KI-Sichtbarkeits-Check — Fragen-Generator und Treffer-Erkennung.
 *
 * Ausgelagert aus ki-check.php (28.09.2026), damit die Erkennung separat
 * testbar ist. Wird von ki-check.php per require_once eingebunden und gibt
 * beim direkten Aufruf nichts aus.
 *
 * Hintergrund der Überarbeitung: Die alte Erkennung suchte das Marken-Token
 * als TEILSTRING. Ein erfundener Betrieb „Haus Quendelbrink" (Leistung
 * „Hausmeisterservice") bekam so 100 % – „haus" steckt in jeder Antwort.
 * Jetzt: Wortgrenzen, generische Wörter raus, Wörter mit gleichem Stamm wie
 * die Leistung raus.
 */

declare(strict_types=1);

if (!function_exists('kic_build_questions')) {

/**
 * Käuferfragen. IDENTISCH zu buildQuestions() in
 * src/pages/ki-sichtbarkeit-check/index.astro halten.
 * Formulierungen funktionieren für Tätigkeiten („Webdesign") UND für
 * Berufsbezeichnungen („Steuerberater").
 */
function kic_build_questions(string $service, string $region): array {
    $s = trim($service); $r = trim($region);
    if ($r !== '') {
        return [
            "Wer sind die besten Anbieter für {$s} in {$r}?",
            "Welche Firmen für {$s} kannst du mir in {$r} empfehlen?",
            "Ich suche {$s} in {$r} – wen würdest du empfehlen?",
            "Was ist eine gute Adresse für {$s} im Raum {$r}?",
            "Nenne mir seriöse Anbieter für {$s} in {$r}.",
            "Welcher Anbieter für {$s} in {$r} hat besonders gute Bewertungen?",
            "Welcher Anbieter für {$s} in {$r} hat ein gutes Preis-Leistungs-Verhältnis?",
            "Welchen erfahrenen Experten für {$s} in {$r} kannst du empfehlen?",
        ];
    }
    return [
        "Wer sind die besten Anbieter für {$s}?",
        "Welche Firmen für {$s} kannst du mir empfehlen?",
        "Ich suche einen Anbieter für {$s} – wen würdest du empfehlen?",
        "Was sind führende Unternehmen im Bereich {$s}?",
        "Nenne mir seriöse Anbieter für {$s}.",
        "Welcher Anbieter für {$s} hat besonders gute Bewertungen?",
        "Welcher Anbieter für {$s} hat ein gutes Preis-Leistungs-Verhältnis?",
        "Welchen erfahrenen Experten für {$s} kannst du empfehlen?",
    ];
}

/** Kleinschreibung, Rechtsformen und Sonderzeichen entfernen. */
function kic_normalize_name(string $name): string {
    $n = mb_strtolower($name, 'UTF-8');
    $n = preg_replace('/\b(gmbh|ug|mbh|ag|kg|ohg|gbr|e\.?\s?k\.?|e\.?\s?kfm\.?|& co\.? kg|& co|haftungsbeschr\w*|inh\.?|inhaber\w*)\b/u', ' ', $n);
    $n = preg_replace('/[^a-z0-9äöüß ]+/u', ' ', $n);
    return trim(preg_replace('/\s+/u', ' ', $n));
}

/** Wörter, die in Firmennamen häufig vorkommen, aber nichts über die Marke sagen. */
function kic_generic_words(): array {
    static $g = null;
    if ($g !== null) return $g;
    $list = [
        'haus','hof','service','services','team','gruppe','group','studio','praxis','zentrum','center','centre',
        'firma','betrieb','handwerk','meister','meisterbetrieb','partner','partners','consulting','beratung',
        'agentur','media','digital','online','design','bau','technik','solutions','systems','system','shop',
        'store','markt','handel','vertrieb','werkstatt','atelier','kanzlei','büro','buero','office','company',
        'international','deutschland','germany','nord','süd','sued','west','ost','stadt','land','region',
        'neue','neuer','neues','erste','gute','beste','sohn','söhne','soehne','familie','brüder','brueder',
        'dienstleistung','dienstleistungen','management','marketing','immobilien','reinigung','elektro',
        'sanitär','sanitaer','heizung','dach','garten','auto','kfz','pflege','gesundheit','hotel','restaurant',
    ];
    $g = array_fill_keys($list, true);
    return $g;
}

/** Länge des gemeinsamen Wortanfangs zweier Wörter. */
function kic_common_prefix(string $a, string $b): int {
    $n = min(mb_strlen($a), mb_strlen($b));
    $i = 0;
    while ($i < $n && mb_substr($a, $i, 1) === mb_substr($b, $i, 1)) $i++;
    return $i;
}

/**
 * Distinktives Marken-Token aus dem Firmennamen.
 * Ausgeschlossen: < 4 Zeichen, generische Wörter, Wörter, die in einem
 * Leistungs-/Regionswort stecken („haus" in „hausmeisterservice"), und
 * Wörter mit demselben Stamm wie die Leistung („steuerberatung" ↔ „steuerberater").
 * Deutsche Firmennamen führen meist mit der Marke → erster Treffer gewinnt.
 */
function kic_distinct_token(string $normName, string $service, string $region): string {
    $stop = array_filter(explode(' ', kic_normalize_name($service . ' ' . $region)));
    $generic = kic_generic_words();
    foreach (explode(' ', $normName) as $t) {
        if (mb_strlen($t) < 4 || isset($generic[$t])) continue;
        $bad = false;
        foreach ($stop as $s) {
            if ($t === $s || mb_strpos($s, $t) !== false || kic_common_prefix($t, $s) >= 6) { $bad = true; break; }
        }
        if (!$bad) return $t;
    }
    return '';
}

/** Kommt $needle als eigenes Wort in $hay vor? (optional mit Genitiv-s) */
function kic_contains_word(string $hay, string $needle): bool {
    if ($needle === '') return false;
    $re = '/(?<![a-z0-9äöüß])' . preg_quote($needle, '/') . '(?:s|\'s|’s)?(?![a-z0-9äöüß])/u';
    return (bool)preg_match($re, $hay);
}

/** Domain normalisieren (Schema, Pfad, www. weg) – leer, wenn unplausibel. */
function kic_normalize_domain(string $raw): string {
    $d = mb_strtolower(trim($raw), 'UTF-8');
    if ($d === '') return '';
    $d = preg_replace('#^https?://#u', '', $d);
    $d = preg_replace('#[/?\#].*$#u', '', $d);
    $d = preg_replace('#^www\.#u', '', $d);
    $d = trim($d, " \t.");
    if (!preg_match('/^[a-z0-9äöüß][a-z0-9äöüß.\-]*\.[a-z]{2,}$/u', $d)) return '';
    return $d;
}

/** Marken-Label aus der Domain (2fox4.de → „2fox4"), sofern nicht generisch. */
function kic_domain_token(string $domain, string $service, string $region): string {
    if ($domain === '') return '';
    $labels = explode('.', $domain);
    $label  = preg_replace('/[^a-z0-9äöüß]/u', '', $labels[count($labels) - 2] ?? '');
    return kic_distinct_token($label, $service, $region);
}

/**
 * Wird das Unternehmen in der KI-Antwort genannt bzw. als Quelle verlinkt?
 * $ctx = [normName, nameNoSpace, distinctToken, domain, domainToken]
 */
function kic_detect_mention(string $content, array $sources, array $ctx): array {
    [$normName, $nameNoSpace, $distinctToken, $domain, $domainToken] = $ctx;
    $hay = kic_normalize_name($content);

    $mentioned = false;
    $needle = '';
    foreach ([$normName, $distinctToken, $domainToken] as $cand) {
        if ($cand !== '' && mb_strlen($cand) >= 4 && kic_contains_word($hay, $cand)) {
            $mentioned = true; $needle = $cand; break;
        }
    }

    $cited = false;
    foreach ($sources as $s) {
        $url = trim((string)($s['url'] ?? ''));
        if ($domain !== '' && $url !== '') {
            $host = (string)(parse_url(stripos($url, 'http') === 0 ? $url : 'http://' . $url, PHP_URL_HOST) ?: '');
            $host = preg_replace('#^www\.#u', '', mb_strtolower($host, 'UTF-8'));
            if ($host === $domain
                || ($host !== '' && mb_substr($host, -(mb_strlen($domain) + 1)) === '.' . $domain)) {
                $cited = true; break;
            }
        }
        $blob = kic_normalize_name(($s['title'] ?? '') . ' ' . str_replace(['.', '/', '-', '_'], ' ', $url));
        $hostToken = str_replace(' ', '', $blob);
        if (($nameNoSpace !== '' && mb_strlen($nameNoSpace) >= 6 && mb_strpos($hostToken, $nameNoSpace) !== false)
            || ($distinctToken !== '' && kic_contains_word($blob, $distinctToken))
            || ($domainToken !== '' && kic_contains_word($blob, $domainToken))) {
            $cited = true; break;
        }
    }

    $snippet = '';
    if ($mentioned) {
        $low = mb_strtolower($content, 'UTF-8');
        $pos = mb_strpos($low, $needle);
        if ($pos === false) $pos = mb_strpos($low, explode(' ', $needle)[0]);
        if ($pos !== false) {
            $start = max(0, $pos - 60);
            $snippet = ($start > 0 ? '… ' : '') . trim(mb_substr($content, $start, 180)) . ' …';
        }
    } else {
        $first = trim(mb_substr($content, 0, 150));
        if ($first !== '') $snippet = 'KI-Antwort (Auszug): ' . $first . ' …';
    }
    return ['mentioned' => $mentioned, 'cited' => $cited, 'snippet' => $snippet];
}

}
