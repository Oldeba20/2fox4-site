<?php
/**
 * Vorlage für ki-check.config.php (KI-Sichtbarkeits-Check).
 *
 * SO NUTZEN:
 *   1. Diese Datei auf dem Server zu  ki-check.config.php  kopieren
 *      (im selben Ordner wie ki-check.php, also im Web-Root von 2fox4.de).
 *   2. Werte unten eintragen.
 *   3. ki-check.config.php NICHT ins Repo committen (steht in .gitignore).
 *
 * Den Perplexity-API-Key bekommst du unter perplexity.ai → Settings → API.
 * Die SMTP-Werte sind dieselben wie in kontakt.config.php (all-inkl-Postfach).
 */

return [
    // ---- Perplexity (Pflicht) ----
    'perplexity_api_key' => 'DEIN_PERPLEXITY_API_KEY',
    'perplexity_model'   => 'sonar',   // 'sonar' = günstig & schnell; 'sonar-pro' = gründlicher
    'question_count'     => 5,          // Anzahl Käuferfragen pro Check (1–6)

    // ---- Schutz für den Protokoll-Viewer ki-check-log.php ----
    'admin_key' => 'BITTE_LANGES_ZUFALLS_GEHEIMNIS_SETZEN',

    // ---- Lead-Benachrichtigung per SMTP (optional, gleiche Daten wie Kontaktformular) ----
    'smtp_host'      => 'w0202caa.kasserver.com',
    'smtp_user'      => 'postfach@2fox4.de',
    'smtp_password'  => 'DEIN_SMTP_PASSWORT',
    'smtp_secure'    => 'tls',          // 'tls' (Port 587) oder 'ssl' (Port 465)
    'smtp_port'      => 587,
    'mail_from'      => 'postfach@2fox4.de',
    'mail_from_name' => '2fox4 KI-Check',
    'mail_to'        => 'info@2fox4.de', // wohin die Lead-Mails gehen
];
