<?php
/**
 * KI-Check — Newsletter-Einwilligungen (eigene Tabelle, getrennt von den Check-Leads).
 *
 * Warum eine eigene Tabelle (28.09.2026): „Adresse per Double-Opt-in bestätigt"
 * heißt nur, dass die Person ihre Auswertung bekommen darf. Werbung/Neuigkeiten
 * brauchen eine EIGENE, freiwillige Einwilligung (§ 7 Abs. 2 UWG, Kopplungsverbot).
 * Hier steht pro Adresse genau ein Datensatz mit Status, Zeitpunkt, Quelle und dem
 * wörtlichen Einwilligungstext – das ist der Nachweis beim Import in ein
 * Newsletter-Tool.
 *
 * Quellen (source):
 *   check-form     Checkbox im Check angehakt, bestätigt durch den DOI-Klick
 *   check-form-dc  Checkbox angehakt, Adresse hatte DOI schon früher durchlaufen
 *   confirm-page   Button auf der Seite „Adresse bestätigt"
 *   result-mail    Link in der Auswertungsmail (mit Bestätigungsbutton)
 *
 * Versand läuft über CleverReach: Neue Einwilligungen werden automatisch dort
 * eingetragen, sofern die Zugangsdaten in der Config stehen (lib/ki-check-cleverreach.php).
 * Ohne Zugangsdaten: CSV-Export im Admin-Bereich und in CleverReach importieren.
 */

declare(strict_types=1);

require_once __DIR__ . '/ki-check-cleverreach.php';

if (!function_exists('kicnl_consent_text')) {

/** Wörtlicher Einwilligungstext – identisch auf Check-Seite, Bestätigungsseite und Opt-in-Seite. */
function kicnl_consent_text(): string {
    return 'Ja, schickt mir etwa einmal im Monat Neuigkeiten und Tipps zur KI-Sichtbarkeit '
         . 'und zu Angeboten von 2FOX4 per E-Mail. Abmelden kann ich mich jederzeit mit einem Klick.';
}

function kicnl_ensure_table(PDO $pdo): void {
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS ki_check_newsletter (
            email VARCHAR(255) NOT NULL PRIMARY KEY,
            status ENUM('subscribed','unsubscribed') NOT NULL,
            token CHAR(32) NOT NULL,
            source VARCHAR(20) NULL,
            consent_text TEXT NULL,
            consent_version VARCHAR(40) NULL,
            subscribed_at DATETIME NULL,
            subscribed_ip VARCHAR(64) NULL,
            unsubscribed_at DATETIME NULL,
            UNIQUE KEY uniq_nl_token (token)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
    );
    // Alt-Anmeldungen übernehmen: Checkbox angehakt UND per DOI bestätigt.
    $pdo->exec(
        "INSERT IGNORE INTO ki_check_newsletter
            (email, status, token, source, consent_text, consent_version, subscribed_at, subscribed_ip)
         SELECT LOWER(email), 'subscribed', MD5(CONCAT(email, RAND(), NOW())), 'check-form',
                'Optional: Schickt mir darüber hinaus gelegentlich Tipps und Angebote zur KI-Sichtbarkeit. Jederzeit widerrufbar.',
                MAX(consent_version), MIN(confirmed_at), MIN(confirmed_ip)
           FROM ki_check_leads
          WHERE status='confirmed' AND marketing=1
          GROUP BY LOWER(email)"
    );
}

/** Status einer Adresse: ['status'=>'subscribed'|'unsubscribed'|'', 'token'=>...] */
function kicnl_get(PDO $pdo, string $email): array {
    $st = $pdo->prepare("SELECT status, token FROM ki_check_newsletter WHERE email=?");
    $st->execute([mb_strtolower($email)]);
    $r = $st->fetch(PDO::FETCH_ASSOC);
    return $r ? ['status' => (string)$r['status'], 'token' => (string)$r['token']] : ['status' => '', 'token' => ''];
}

/** Einwilligung speichern (auch Wieder-Anmeldung nach Abmeldung). Gibt das Abmelde-Token zurück. */
function kicnl_subscribe(PDO $pdo, string $email, string $source, string $consentVersion, string $ip,
                         array $config = [], array $extra = []): string {
    $email = mb_strtolower($email);
    $cur = kicnl_get($pdo, $email);
    $token = $cur['token'] !== '' ? $cur['token'] : bin2hex(random_bytes(16));
    $pdo->prepare(
        "INSERT INTO ki_check_newsletter
            (email, status, token, source, consent_text, consent_version, subscribed_at, subscribed_ip, unsubscribed_at)
         VALUES (?, 'subscribed', ?, ?, ?, ?, NOW(), ?, NULL)
         ON DUPLICATE KEY UPDATE
            -- Reihenfolge wichtig: MySQL/MariaDB werten die Zuweisungen von links nach
            -- rechts aus, `status` darf deshalb erst ganz am Ende umgestellt werden.
            -- Bestehende Einwilligung bleibt unverändert (ursprünglicher Nachweis).
            source = IF(status='subscribed', source, VALUES(source)),
            consent_text = IF(status='subscribed', consent_text, VALUES(consent_text)),
            consent_version = IF(status='subscribed', consent_version, VALUES(consent_version)),
            subscribed_at = IF(status='subscribed', subscribed_at, NOW()),
            subscribed_ip = IF(status='subscribed', subscribed_ip, VALUES(subscribed_ip)),
            unsubscribed_at = NULL,
            status = 'subscribed'"
    )->execute([$email, $token, $source, kicnl_consent_text(), $consentVersion, $ip]);
    // Nur bei NEUER Einwilligung an CleverReach übergeben (optional, siehe ki-check-cleverreach.php)
    if ($cur['status'] !== 'subscribed' && $config) {
        kiccr_subscribe($config, $email, ['source' => $source] + $extra);
    }
    return $token;
}

/** Abmelden über das Token aus der Mail. true, wenn eine Adresse gefunden wurde. */
function kicnl_unsubscribe(PDO $pdo, string $token, array $config = []): bool {
    if ($config) {
        $em = $pdo->prepare("SELECT email FROM ki_check_newsletter WHERE token=? AND status='subscribed'");
        $em->execute([$token]);
        $mail = (string)($em->fetchColumn() ?: '');
        if ($mail !== '') kiccr_unsubscribe($config, $mail);
    }
    $st = $pdo->prepare(
        "UPDATE ki_check_newsletter SET status='unsubscribed', unsubscribed_at=NOW()
          WHERE token=? AND status='subscribed'"
    );
    $st->execute([$token]);
    if ($st->rowCount() > 0) return true;
    $chk = $pdo->prepare("SELECT COUNT(*) FROM ki_check_newsletter WHERE token=?");
    $chk->execute([$token]);
    return (int)$chk->fetchColumn() > 0; // war schon abgemeldet → trotzdem Erfolg anzeigen
}

/**
 * Links für die Auswertungsmail.
 * Angemeldet → Abmeldelink. Nicht angemeldet → Link zur Anmeldeseite (mit Button,
 * damit Mail-Scanner, die Links vorab öffnen, keine Einwilligung auslösen).
 */
function kicnl_mail_links(PDO $pdo, string $email, string $leadToken, string $base): array {
    $cur = kicnl_get($pdo, $email);
    $base = rtrim($base, '/');
    if ($cur['status'] === 'subscribed') {
        return ['subscribed' => true, 'unsub_url' => $base . '/ki-check-newsletter.php?u=' . $cur['token'], 'optin_url' => ''];
    }
    return ['subscribed' => false, 'unsub_url' => '',
            'optin_url' => $leadToken !== '' ? $base . '/ki-check-newsletter.php?t=' . $leadToken . '&src=result-mail' : ''];
}

}
