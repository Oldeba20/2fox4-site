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

    // ---- Schutz für ki-check-log.php und ki-check-leads.php ----
    'admin_key' => 'BITTE_LANGES_ZUFALLS_GEHEIMNIS_SETZEN',

    // ---- Double-Opt-in / Newsletter-Liste (MySQL auf all-inkl) ----
    // DB in KAS anlegen (Datenbanken → neue MySQL-DB). Die Tabelle ki_check_leads
    // legt das Skript bei Bedarf selbst an. Bleibt db_host leer, ist die
    // Newsletter-Funktion inaktiv – der Check selbst läuft trotzdem.
    'db_host'  => '',                            // z. B. 'w0202caa.kasserver.com'
    'db_name'  => '',                            // z. B. 'd0202caa_kicheck'
    'db_user'  => '',                            // z. B. 'd0202caa_1'
    'db_pass'  => '',                            // DB-Passwort
    'site_base_url'   => 'https://www.2fox4.de', // für den Bestätigungslink (DOI)
    'consent_version' => '2026-06-11',           // Version des Einwilligungstextes (Nachweis)

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
