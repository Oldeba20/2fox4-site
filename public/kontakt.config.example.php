<?php
/**
 * SMTP-Konfiguration für das Kontaktformular.
 *
 * Diese Datei dient als Vorlage. Auf dem Server muss eine Kopie unter
 *
 *     /www/htdocs/w0202caa/2fox4/neu/kontakt.config.php
 *
 * existieren — diese wird von kontakt.php geladen, ist aber NICHT im
 * Repository und wird nicht beim Deploy überschrieben.
 *
 * Anlegen z. B. über SSH:
 *
 *     cp kontakt.config.example.php kontakt.config.php
 *     nano kontakt.config.php   # Passwort eintragen
 *
 * Berechtigungen: 600 (nur owner darf lesen) — sicherer als Standard.
 *     chmod 600 kontakt.config.php
 */

return [
    'smtp_host'     => 'w0202caa.kasserver.com',
    'smtp_port'     => 587,
    'smtp_secure'   => 'tls',         // 'tls' (STARTTLS, Port 587) oder 'ssl' (Port 465)
    'smtp_user'     => 'info@2fox4.de',
    'smtp_password' => 'CHANGE_ME',   // ← echtes Postfach-Passwort hier eintragen

    'mail_from'      => 'info@2fox4.de',
    'mail_from_name' => '2FOX4 Kontaktformular',
    'mail_to'        => 'info@2fox4.de',
];
