<?php
/**
 * KI-Check — Abfrage mehrerer KI-Suchen (Perplexity, ChatGPT mit Websuche).
 *
 * Seit 28.09.2026. Hintergrund: Perplexity lehnt gleichzeitige Anfragen mit HTTP 429
 * ab, auch neue OpenAI-Konten haben enge Grenzen. Deshalb laufen alle Anfragen über
 * einen gemeinsamen Planer mit Obergrenze je Dienst und Wiederholung nach 429.
 *
 * Aktive Dienste: Perplexity (perplexity_api_key), ChatGPT (openai_api_key, optional).
 */

declare(strict_types=1);

if (!function_exists('kic_engines')) {

define('KIC_SYSTEM_PROMPT', 'Du bist eine hilfreiche Such-Assistenz. Beantworte die Frage des Nutzers, '
    . 'indem du konkrete, real existierende Anbieter oder Unternehmen mit Namen nennst, sofern es welche gibt. '
    . 'Antworte knapp und auf Deutsch.');

/** Liste der aktiven Dienste laut Config. */
function kic_engines(array $config): array {
    $e = [];
    $pk = (string)($config['perplexity_api_key'] ?? '');
    if ($pk !== '' && !str_starts_with($pk, 'DEIN_')) {
        $e['perplexity'] = ['label' => 'Perplexity', 'key' => $pk,
            'model' => (string)($config['perplexity_model'] ?? 'sonar'), 'parallel' => 2];
    }
    $ok = (string)($config['openai_api_key'] ?? '');
    if ($ok !== '' && !str_starts_with($ok, 'DEIN_')) {
        $e['chatgpt'] = ['label' => 'ChatGPT', 'key' => $ok,
            'model' => (string)($config['openai_model'] ?? 'gpt-4.1-mini'), 'parallel' => 3];
    }
    return $e;
}

function kic_engine_handle(string $engine, array $cfg, string $question, string $region) {
    if ($engine === 'chatgpt') {
        $tool = ['type' => 'web_search'];
        $tool['user_location'] = array_filter(['type' => 'approximate', 'country' => 'DE',
            'city' => $region !== '' ? $region : null]);
        // Reasoning-Modelle (gpt-5*, o*) verbrauchen Tokens fürs Nachdenken – bei 900 blieb die
        // Antwort leer (status incomplete, max_output_tokens). Deshalb Denkaufwand niedrig + mehr Luft.
        $payload = ['model' => $cfg['model'], 'instructions' => KIC_SYSTEM_PROMPT,
            'input' => $question, 'tools' => [$tool], 'max_output_tokens' => 1200];
        if (preg_match('/^(gpt-5|o\d)/', $cfg['model'])) {
            $payload['reasoning'] = ['effort' => 'low'];
            $payload['max_output_tokens'] = 6000;
        }
        $url = 'https://api.openai.com/v1/responses';
    } else {
        $payload = ['model' => $cfg['model'], 'messages' => [
                ['role' => 'system', 'content' => KIC_SYSTEM_PROMPT],
                ['role' => 'user', 'content' => $question]],
            'max_tokens' => 500, 'temperature' => 0.2];
        $url = 'https://api.perplexity.ai/chat/completions';
    }
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $cfg['key'], 'Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
        CURLOPT_TIMEOUT => 45, CURLOPT_CONNECTTIMEOUT => 10,
    ]);
    return $ch;
}

/** Rohantwort → ['ok','content','sources'=>[['title','url']],'http','err'] */
function kic_engine_parse(string $engine, $res, int $code, string $err): array {
    if ($res === false || $res === null || $code >= 400 || $code === 0) {
        return ['ok' => false, 'content' => '', 'sources' => [], 'http' => $code, 'err' => $err ?: substr((string)$res, 0, 200)];
    }
    $data = json_decode((string)$res, true) ?: [];
    $content = ''; $sources = [];
    if ($engine === 'chatgpt') {
        foreach (($data['output'] ?? []) as $item) {
            if (($item['type'] ?? '') !== 'message') continue;
            foreach (($item['content'] ?? []) as $part) {
                if (($part['type'] ?? '') !== 'output_text') continue;
                $content .= (string)($part['text'] ?? '');
                foreach (($part['annotations'] ?? []) as $a) {
                    if (($a['type'] ?? '') === 'url_citation') $sources[] = ['title' => (string)($a['title'] ?? ''), 'url' => (string)($a['url'] ?? '')];
                }
            }
        }
    } else {
        $content = (string)($data['choices'][0]['message']['content'] ?? '');
        foreach (($data['citations'] ?? []) as $c) if (is_string($c)) $sources[] = ['title' => '', 'url' => $c];
        foreach (($data['search_results'] ?? []) as $sr) $sources[] = ['title' => (string)($sr['title'] ?? ''), 'url' => (string)($sr['url'] ?? '')];
    }
    if (trim($content) === '') return ['ok' => false, 'content' => '', 'sources' => [], 'http' => $code, 'err' => 'leere Antwort'];
    return ['ok' => true, 'content' => $content, 'sources' => $sources, 'http' => $code, 'err' => ''];
}

/**
 * Alle Fragen an alle Dienste. Rückgabe: [engine => [qIndex => parsed]].
 * Planer: je Dienst höchstens 'parallel' Anfragen gleichzeitig; 429/5xx → bis zu 3 Wiederholungen
 * mit wachsender Pause. Gesamtbudget $budget Sekunden.
 */
function kic_ask_engines(array $engines, array $questions, string $region, float $budget = 100.0): array {
    $queue = []; $out = [];
    foreach ($engines as $en => $cfg) foreach ($questions as $i => $q) { $queue[] = [$en, $i, 0, 0.0]; $out[$en][$i] = null; }
    $mh = curl_multi_init(); $active = []; $running = [];
    $deadline = microtime(true) + $budget;
    while (($queue || $active) && microtime(true) < $deadline) {
        // freie Plätze füllen
        foreach ($queue as $k => [$en, $i, $try, $notBefore]) {
            if (($running[$en] ?? 0) >= $engines[$en]['parallel'] || microtime(true) < $notBefore) continue;
            $ch = kic_engine_handle($en, $engines[$en], $questions[$i], $region);
            curl_multi_add_handle($mh, $ch);
            $active[spl_object_id($ch)] = [$ch, $en, $i, $try];
            $running[$en] = ($running[$en] ?? 0) + 1;
            unset($queue[$k]);
        }
        do { $st = curl_multi_exec($mh, $still); } while ($st === CURLM_CALL_MULTI_PERFORM);
        while ($info = curl_multi_info_read($mh)) {
            $ch = $info['handle']; [$h, $en, $i, $try] = $active[spl_object_id($ch)];
            $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $parsed = kic_engine_parse($en, curl_multi_getcontent($ch), $code, curl_error($ch));
            curl_multi_remove_handle($mh, $ch); curl_close($ch);
            unset($active[spl_object_id($ch)]); $running[$en]--;
            if (!$parsed['ok'] && in_array($code, [0, 429, 500, 502, 503], true) && $try < 3) {
                $queue[] = [$en, $i, $try + 1, microtime(true) + ($try === 0 ? 0.8 : 2.0 * ($try + 1))];
            } else {
                $out[$en][$i] = $parsed;
            }
        }
        if ($active) curl_multi_select($mh, 0.2); else usleep(100000);
    }
    foreach ($active as [$ch]) { curl_multi_remove_handle($mh, $ch); curl_close($ch); }
    curl_multi_close($mh);
    foreach ($out as $en => $list) foreach ($list as $i => $r) {
        if ($r === null) $out[$en][$i] = ['ok' => false, 'content' => '', 'sources' => [], 'http' => 0, 'err' => 'Zeitlimit'];
    }
    return $out;
}

}
