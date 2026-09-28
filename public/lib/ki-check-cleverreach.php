<?php
/**
 * KI-Check → CleverReach (REST API v3), optional.
 *
 * Aktiv nur, wenn in ki-check.config.php gesetzt:
 *   'cleverreach_client_id'     => '…',   // CleverReach → Mein Account → Extras → REST API → OAuth-App
 *   'cleverreach_client_secret' => '…',
 *   'cleverreach_group_id'      => 123456, // Empfängerliste „KI-Check" im 2FOX4-Konto
 *
 * Neue Newsletter-Einwilligungen werden als AKTIVE Empfänger eingetragen – die
 * Einwilligung wurde bereits per Double-Opt-in bei uns eingeholt und ist in der
 * Tabelle ki_check_newsletter nachgewiesen (Zeitpunkt, IP gekürzt, Wortlaut).
 * Abmeldungen über unseren Link werden in CleverReach deaktiviert. Abmeldungen,
 * die in CleverReach passieren, bleiben dort – für den Versand ist CleverReach
 * maßgeblich.
 *
 * Fehler werden nur protokolliert und blockieren nie den Check oder die Mail.
 */

declare(strict_types=1);

if (!function_exists('kiccr_enabled')) {

function kiccr_enabled(array $config): bool {
    return !empty($config['cleverreach_client_id']) && !empty($config['cleverreach_client_secret'])
        && !empty($config['cleverreach_group_id']);
}

/** HTTP-Aufruf; gibt [httpCode, decodedBody] zurück. */
function kiccr_http(string $method, string $url, array $headers, ?string $body = null): array {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
    ]);
    if ($body !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    $res  = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return [$code, is_string($res) ? json_decode($res, true) : null];
}

/** Access-Token per client_credentials, 50 Minuten im Temp-Verzeichnis zwischengespeichert. */
function kiccr_token(array $config): string {
    $cache = sys_get_temp_dir() . '/2fox4_cr_' . hash('sha256', (string)$config['cleverreach_client_id']) . '.json';
    if (is_readable($cache)) {
        $c = json_decode((string)@file_get_contents($cache), true);
        if (is_array($c) && ($c['exp'] ?? 0) > time() && !empty($c['tok'])) return (string)$c['tok'];
    }
    [$code, $data] = kiccr_http('POST', 'https://rest.cleverreach.com/oauth/token.php', [
        'Authorization: Basic ' . base64_encode($config['cleverreach_client_id'] . ':' . $config['cleverreach_client_secret']),
        'Content-Type: application/x-www-form-urlencoded',
    ], 'grant_type=client_credentials');
    $tok = (string)($data['access_token'] ?? '');
    if ($code >= 400 || $tok === '') {
        throw new RuntimeException('CleverReach-Token fehlgeschlagen (HTTP ' . $code . ')');
    }
    @file_put_contents($cache, json_encode(['tok' => $tok, 'exp' => time() + 3000]), LOCK_EX);
    return $tok;
}

/**
 * Empfänger aktiv eintragen bzw. reaktivieren.
 * $extra: source, business – landen im Feld „Quelle“. Bewusst keine Attribute:
 * die müssten in CleverReach erst angelegt werden, sonst lehnt die API ab.
 */
function kiccr_subscribe(array $config, string $email, array $extra = []): bool {
    if (!kiccr_enabled($config)) return false;
    try {
        $tok = kiccr_token($config);
        $gid = (int)$config['cleverreach_group_id'];
        $now = time();
        $receiver = [
            'email'      => $email,
            'registered' => $now,
            'activated'  => $now,
            'source'     => mb_substr('2fox4.de KI-Check (' . (string)($extra['source'] ?? 'check') . ')'
                . (!empty($extra['business']) ? ' – ' . $extra['business'] : ''), 0, 250),
        ];
        [$code] = kiccr_http('POST', 'https://rest.cleverreach.com/v3/groups.json/' . $gid . '/receivers',
            ['Authorization: Bearer ' . $tok, 'Content-Type: application/json'],
            json_encode($receiver, JSON_UNESCAPED_UNICODE));
        if ($code === 409) {
            // gibt es schon (z. B. früher abgemeldet) → wieder aktivieren
            [$code] = kiccr_http('PUT', 'https://rest.cleverreach.com/v3/groups.json/' . $gid . '/receivers/'
                . rawurlencode($email) . '/setactive', ['Authorization: Bearer ' . $tok]);
        }
        if ($code >= 400) throw new RuntimeException('HTTP ' . $code);
        return true;
    } catch (\Throwable $e) {
        error_log('[2fox4 KI-Check] CleverReach subscribe: ' . $e->getMessage());
        return false;
    }
}

function kiccr_unsubscribe(array $config, string $email): bool {
    if (!kiccr_enabled($config)) return false;
    try {
        $tok = kiccr_token($config);
        [$code] = kiccr_http('PUT', 'https://rest.cleverreach.com/v3/groups.json/' . (int)$config['cleverreach_group_id']
            . '/receivers/' . rawurlencode($email) . '/setinactive', ['Authorization: Bearer ' . $tok]);
        if ($code >= 400 && $code !== 404) throw new RuntimeException('HTTP ' . $code);
        return true;
    } catch (\Throwable $e) {
        error_log('[2fox4 KI-Check] CleverReach unsubscribe: ' . $e->getMessage());
        return false;
    }
}

}
