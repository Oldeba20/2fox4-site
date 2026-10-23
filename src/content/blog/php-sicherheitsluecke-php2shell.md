---
title: "PHP-Sicherheitslücke PHP2Shell: Was Website-Betreiber jetzt tun müssen"
date: 2026-10-22
description: "PHP-Sicherheitslücke PHP2Shell: Was hinter den zwei kritischen Lücken steckt, wer das Update einspielen muss und wie du als KMU deine Website in fünf Schritten prüfst."
cover:
  src: "/uploads/blog/php-sicherheitsluecke-php2shell/cover.webp"
  alt: "PHP-Sicherheitslücke prüfen: Unternehmer arbeitet abends am Laptop vor einem kleinen Server-Schrank"
categories:
  - wordpress
categoryNames:
  - "WordPress"
draft: false
seoTitle: "PHP-Sicherheitslücke PHP2Shell: Was du jetzt tun musst"
seoDescription: "PHP-Sicherheitslücke PHP2Shell: Welche PHP-Versionen gepatcht sind, wann dein Hoster zuständig ist und wie du WordPress-Website und Shop jetzt absicherst."
---

Die PHP-Sicherheitslücke PHP2Shell betrifft fast jede Website, die mit WordPress, Shopware, TYPO3 oder einem anderen PHP-System läuft. Am 21. Oktober 2026 hat das PHP-Projekt außerplanmäßige Updates veröffentlicht, die zwei kritische Fehler schließen. Angreifer können darüber ohne Login eigenen Code auf dem Webserver ausführen. Für dich als Unternehmer heißt das nicht Panik, sondern eine klare Frage: Wer spielt bei deiner Website das Update ein, und ist es schon passiert? Wir zeigen dir, wie du das in einer Viertelstunde klärst.

> **Kurz gesagt:** PHP2Shell sind zwei Lücken in PHP selbst (CVE-2026-109618 und CVE-2026-109619), beide mit 9,2 von 10 Punkten bewertet. Geschlossen sind sie in PHP 8.5.12, 8.4.27, 8.3.36 und 8.2.35. Bei normalem Webhosting spielt der Hoster das Update ein, bei eigenem Server oder VPS bist du selbst zuständig. Ein WordPress- oder Plugin-Update allein reicht nicht. Wer noch PHP 8.1 oder älter nutzt, sollte jetzt auf eine unterstützte Version umsteigen.

## Was ist PHP2Shell?

PHP2Shell ist der Sammelname für zwei Sicherheitslücken in der Programmiersprache PHP, die das PHP-Projekt am 21. Oktober 2026 geschlossen hat. Beide erlauben laut offiziellem [Sicherheitshinweis von php.net](https://www.php.net/archive/2026.php#2026-10-21-5) im schlimmsten Fall eine Codeausführung aus der Ferne, ohne dass sich der Angreifer anmelden muss. Bewertet sind beide mit 9,2 Punkten auf der CVSS-Skala (Version 4.0), also als kritisch.

PHP ist die Sprache, in der der Großteil des Webs läuft. Laut W3Techs nutzen 69,3 % aller Websites, deren serverseitige Sprache bekannt ist, PHP (Stand 22. Oktober 2026). WordPress, Shopware, WooCommerce, TYPO3, Joomla und Nextcloud bauen alle darauf auf. Deshalb trifft eine Lücke in PHP nicht ein einzelnes Plugin, sondern die Grundlage, auf der deine Website steht.

Technisch stecken zwei Speicherfehler dahinter. Bei CVE-2026-109618 kann PHP mitten in der Verarbeitung einer Anfrage wegen Speichermangels abbrechen. Die anschließende Aufräumroutine behandelt halb angelegte Daten dann so, als wären sie gültig. Bei CVE-2026-109619 bleibt ein Teil des Zustands einer Anfrage erhalten, obwohl der zugehörige Speicher schon freigegeben ist. Die nächste Anfrage, die derselbe PHP-Prozess bearbeitet, greift dann auf diese veralteten Daten zu. Beides lässt sich so ausnutzen, dass fremder Code läuft.

### Warum ist die Lücke so ernst?

Drei Dinge kommen zusammen. Erstens braucht ein Angreifer kein Passwort, eine präparierte Anfrage an die Website genügt. Zweitens sitzt der Fehler unterhalb deiner Anwendung. Selbst ein perfekt gepflegtes WordPress mit aktuellen Plugins ist betroffen, wenn darunter ein ungepatchtes PHP läuft. Drittens wird die Lücke schon angegriffen. Amazon hat einen Ausnutzungsversuch auf seinen Honeypots bereits am 17. Oktober registriert, also vier Tage vor der Veröffentlichung. Auch Cloudflare berichtete von Angriffsversuchen und hat Schutzregeln für alle Tarife aktiviert.

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat laut t3n eine Warnung der Stufe 3 („Orange“) herausgegeben, der zweithöchsten Stufe. CERT-EU, der Cybersicherheitsdienst der EU-Institutionen, riet Betreibern laut netzwelt sogar, Websites und Anwendungen gegebenenfalls vom Netz zu nehmen, bis der Patch eingespielt werden kann. Einige Anbieter sind vorsorglich offline gegangen. Der Rechnungsdienst easybill etwa hat Anwendung und Website bis zum Update abgeschaltet.

Die Lücke hat eine Vorgeschichte. Erste Hinweise auf diese Fehlerfamilie gab es laut t3n schon 2024 bei einer Prüfung im Auftrag der Sovereign Tech Agency. Behoben wurde damals nichts, unter anderem weil kein praktischer Angriffsweg bekannt war. Im August 2026 zeigten dann Forscher zusammen mit OpenAI einen funktionierenden Angriff, gefunden mit Hilfe eines KI-Modells. Dieses Muster werden wir vermutlich häufiger sehen: KI macht alte, theoretische Schwachstellen schneller praktisch ausnutzbar.

## Welche PHP-Versionen sind betroffen und welche sind sicher?

Betroffen sind alle PHP-Installationen, die Webanfragen beantworten. Das schließt die üblichen Betriebsarten ein: PHP-FPM, Apache mit mod_php, php-cgi, FrankenPHP und LiteSpeed. Das höchste Risiko sieht das PHP-Projekt bei Apache mit mod_php, weil dort ein Angriff greift, bevor überhaupt Code deiner Website ausgeführt wird.

Die folgende Tabelle zeigt, wo du stehst:

| PHP-Zweig | Status laut php.net | Sichere Version | Was du tun solltest |
|---|---|---|---|
| 8.5 | aktiv unterstützt | 8.5.12 | Update prüfen, fertig |
| 8.4 | aktiv unterstützt | 8.4.27 | Update prüfen, fertig |
| 8.3 | nur Sicherheitsupdates | 8.3.36 | Update prüfen, Wechsel auf 8.4 planen |
| 8.2 | nur Sicherheitsupdates, Ende am 31.12.2026 | 8.2.35 | Update prüfen, Wechsel bis Jahresende |
| 8.1 und älter | kein Support mehr (8.1 seit 31.12.2025) | keine offizielle | Hoster nach Schutz fragen, zügig wechseln |

Für 7.4, 8.0 und 8.1 hat das PHP-Projekt zwar minimale Korrekturen im Quellcode bereitgestellt. Ob dein Hoster sie eingebaut hat, weißt du aber nur, wenn er es dir sagt. Laut W3Techs laufen noch 26,9 % der PHP-Websites auf PHP 7 und 7,7 % auf PHP 5. Zusammen ist das rund ein Drittel aller PHP-Websites, und für diese Versionen gibt es keine regulären Updates mehr. Wie du den Umstieg auf eine aktuelle Version ohne Ausfall angehst, zeigen wir Schritt für Schritt in unserer Anleitung [PHP-Version aktualisieren in WordPress](/blog/php-version-aktualisieren-wordpress/).

Ein wichtiger Haken: Die Versionsnummer allein beweist nichts. Viele Hoster und Linux-Distributionen bauen Sicherheitskorrekturen in ihre eigenen PHP-Pakete ein, ohne die Nummer zu ändern. Netcup weist ausdrücklich darauf hin. Siehst du also in deinem Kundenmenü „8.3.30“, kann das trotzdem gepatcht sein. Steht dort 8.3.36 oder höher, ist die Korrektur enthalten. Im Zweifel zählt die schriftliche Aussage deines Hosters.

## Wer muss das PHP-Update einspielen?

Das hängt allein davon ab, wie deine Website gehostet ist. Die meisten kleinen Unternehmen haben ein klassisches Webhosting-Paket. Dann kümmert sich der Hoster um PHP, und deine Aufgabe ist nur, nachzufragen und dir den Patch bestätigen zu lassen. Anders sieht es aus, wenn du selbst oder deine Agentur einen eigenen Server betreibt. Dann liegt das Update bei dir oder deiner Agentur.

![PHP-Sicherheitslücke PHP2Shell: Wer das Update einspielen muss, bei Webhosting, eigenem Server und Container](/uploads/blog/php-sicherheitsluecke-php2shell/zustaendig.webp)

### Klassisches Webhosting (Shared oder Managed)

Hier läuft deine Website auf einem Server, den der Hoster verwaltet. Er spielt PHP-Updates ein, du kannst im Kundenmenü meist nur zwischen Versionen wählen. Die großen deutschen Anbieter haben schnell reagiert. Laut einer Übersicht vom 22. Oktober hat Hetzner PHP 7.4 und 8.0 bis 8.5 auf Webhosting und Managed Servern gepatcht. Netcup hat seine Webhosting-Server vorsorglich vom Netz genommen und meldete am späten Abend des 21. Oktober alle Webhosting-Pakete als gepatcht. Mittwald hat Datei-Uploads übergangsweise abgeschaltet und die Lücke in der Nacht zum 22. Oktober für nahezu alle PHP-Versionen als behoben gemeldet.

Wenn dein Hoster sich noch nicht öffentlich geäußert hat, frag konkret nach. Nicht „Bin ich sicher?“, sondern: „Ist mein Paket XY mit PHP-Version Z gegen CVE-2026-109618 und CVE-2026-109619 gepatcht?“ Die Antwort lässt du dir per E-Mail geben. Das ist auch für deine eigene Dokumentation gut, falls später Fragen kommen.

### Eigener Server, VPS oder Cloud

Mietest du einen virtuellen oder dedizierten Server mit Root-Zugang, bist du selbst verantwortlich. Das betrifft häufig Onlineshops, die aus Performance-Gründen umgezogen sind, oder Firmen, deren Agentur einen Server für mehrere Projekte betreibt. Hier gilt: Die aktualisierten PHP-Pakete der Linux-Distribution installieren und alle PHP-Prozesse neu starten. Heute, nicht nächste Woche. Einige Hoster wie IONOS und DomainFactory schreiben ausdrücklich, dass VPS-Kunden selbst aktualisieren müssen.

### Docker und Container

Läuft deine Anwendung in Containern, reicht ein Update auf dem Host nicht. Das PHP steckt im Image. Dein Entwickler muss die Images mit einer gepatchten Basis neu bauen und alle laufenden Container ersetzen. Gerade bei individuell entwickelten Webanwendungen wird das gern vergessen, weil niemand regelmäßig auf die Images schaut.

## So prüfst du deine Website in fünf Schritten

Du musst kein Administrator sein, um die wichtigsten Punkte selbst zu klären. Wir gehen mit Kunden in solchen Fällen immer dieselbe Liste durch.

![PHP-Sicherheitslücke prüfen: Notfall-Check in fünf Schritten für deine Website](/uploads/blog/php-sicherheitsluecke-php2shell/check.webp)

**1. Hosting-Art klären.** Schau in deine Verträge oder Rechnungen. Steht dort „Webhosting“, „Managed WordPress“ oder ein Paketname wie „Premium“, ist es klassisches Hosting. Steht dort „vServer“, „VPS“, „Root-Server“ oder „Cloud-Server“, liegt die Verantwortung bei dir oder deinem Dienstleister.

**2. PHP-Version ablesen.** In WordPress findest du sie unter Werkzeuge, Website-Zustand, Reiter Bericht, Abschnitt Server. Alternativ steht sie im Kundenmenü deines Hosters bei den Einstellungen deiner Domain. Notiere die genaue Nummer.

**3. Patch bestätigen lassen.** Vergleiche die Nummer mit der Tabelle oben. Liegt sie darunter, frag deinen Hoster schriftlich, ob die Korrektur eingebaut ist. Bei eigenem Server prüft dein Admin die installierten Pakete und startet PHP neu.

**4. Aufräumen und sichern.** Der PHP-Patch schließt nur die Lücke in PHP. WordPress, Plugins und Themes musst du trotzdem aktuell halten. Wenn du schon dabei bist: Spiel ausstehende Updates ein, lösche ungenutzte Plugins und prüfe, ob ein aktuelles Backup existiert, das du auch wirklich wiederherstellen kannst.

**5. Auf Spuren achten.** Falls deine Seite vor dem Patch angreifbar war, lohnt ein kurzer Blick auf Auffälligkeiten: unbekannte Dateien im Webverzeichnis, neue Administrator-Konten, ungewöhnlicher Mailversand oder geänderte Inhalte. Laut t3n können auch gehäufte HTTP-500-Fehler und ungewöhnlich große Session-Cookies (PHPSESSID) in den Server-Logs Hinweise sein. Findest du etwas, wechsle alle Zugangsdaten und hol dir Hilfe, bevor du weitermachst.

Mehr zu den Grundlagen, die deine Seite dauerhaft robuster machen, findest du in unserem Beitrag zur [WordPress-Sicherheit 2026](/blog/wordpress-sicherheit-2026/).

## Was hilft, wenn das Update noch nicht da ist?

Das PHP-Projekt nennt einige Übergangsmaßnahmen. Wichtig vorab: Sie verringern das Risiko, machen eine Installation aber nicht sicher. Und sie gehören auf die Server-Ebene, also in die php.ini, den FPM-Pool oder die Apache-Konfiguration.

Gegen CVE-2026-109619 hilft die Einstellung `session.upload_progress.enabled=0` mit anschließendem Neustart aller PHP-Prozesse. Sie blockiert laut php.net die bestätigten Angriffswege, aber nicht jede Variante. Eine Einstellung per `.user.ini` oder per `ini_set()` im Code reicht dafür nicht. WordPress selbst nutzt diese Funktion nicht, du verlierst also nichts. Gegen CVE-2026-109618 empfiehlt das PHP-Projekt unter anderem, die maximale Größe von Formulardaten (`post_max_size`) niedrig zu halten und Anfragen schon am Webserver oder Proxy zu begrenzen.

Bei klassischem Webhosting kannst du das meist nicht selbst umsetzen, weil du diese Einstellungen gar nicht ändern darfst. Dann bleibt dir zuerst die Nachfrage beim Hoster. Verarbeitet deine Seite sensible Daten und der Hoster macht keine Aussage, nimm sie vorübergehend in den Wartungsmodus. Das klingt drastisch. Bei einem Onlineshop mit Kundenkonten ist ein Tag Pause aber deutlich billiger als ein Datenleck mit Meldepflicht.

Eine Web Application Firewall wie die von Cloudflare ist eine sinnvolle zusätzliche Schicht. Sie ersetzt das Update aber nicht. Auf den bezahlten Cloudflare-Tarifen solltest du prüfen, ob die verwalteten Regeln auf „Blockieren“ und nicht nur auf „Protokollieren“ stehen.

## Welche Websites sind besonders gefährdet?

Grundsätzlich jede PHP-Website. Ein paar Konstellationen verdienen aber besondere Aufmerksamkeit.

**Seiten mit alter PHP-Version.** Wer noch auf PHP 7.4 oder 8.0 läuft, hängt komplett davon ab, ob der Hoster eine eigene Korrektur nachgereicht hat. Das ist bei großen Anbietern oft der Fall, bei kleinen Resellern oder vergessenen Altverträgen eher nicht. Gerade alte Firmenwebsites, die seit Jahren niemand angefasst hat, laufen häufig auf solchen Versionen.

**Onlineshops und Seiten mit Logins.** Ein erfolgreicher Angriff kann laut t3n auch Passwörter, API-Schlüssel und Sitzungsdaten aus dem Speicher lesen. Bei einem Shop mit Kundenkonten und angebundenem Zahlungsanbieter sind die Folgen entsprechend größer als bei einer reinen Visitenkarten-Website.

**Selbst betriebene Server ohne Wartungsvertrag.** Den VPS, den ein früherer Freelancer eingerichtet hat und um den sich seitdem niemand kümmert, gibt es in vielen kleinen Firmen. Dort spielt in der Regel niemand automatisch Updates ein.

**Weitere PHP-Anwendungen im Haus.** Denk nicht nur an die Website. Nextcloud, ein Ticketsystem, ein Intranet-Wiki oder eine Warenwirtschaft mit Weboberfläche laufen oft ebenfalls mit PHP. Laut Berichten hat IONOS deshalb Nextcloud-Instanzen vorübergehend deaktiviert.

Ein Beispiel aus dem Alltag: Ein Handwerksbetrieb hat seine Website bei einem großen Hoster, dazu aber eine Nextcloud für Baupläne auf einem kleinen Mietserver, den ein Bekannter vor drei Jahren eingerichtet hat. Die Website ist vermutlich längst gepatcht. Die Nextcloud mit allen Kundendaten ist das eigentliche Risiko.

## Was lernen KMU aus PHP2Shell?

Die Lücke wird vermutlich in ein paar Tagen aus den Schlagzeilen verschwinden. Die Fragen, die sie aufwirft, bleiben.

**Weißt du, wer für deine Technik zuständig ist?** In vielen Betrieben kann diese Frage niemand sofort beantworten. Die Website hat eine Agentur gebaut, das Hosting läuft auf den Namen des Geschäftsführers, und der Server für die Cloud ist irgendwann dazugekommen. Leg eine einfache Liste an: Welche Systeme gibt es, wo laufen sie, wer kümmert sich, wer ist der Ansprechpartner beim Hoster.

**Ist deine PHP-Version aktuell?** WordPress empfiehlt laut seinen [offiziellen Anforderungen](https://wordpress.org/about/requirements/) PHP 8.3 oder neuer. PHP 8.2 bekommt laut [php.net](https://www.php.net/supported-versions.php) nur noch bis zum 31. Dezember 2026 Sicherheitsupdates. Wenn du jetzt sowieso prüfst, plane den Wechsel gleich mit. Vorher auf einer Testumgebung ausprobieren und ein Backup anlegen, denn alte Plugins vertragen neue PHP-Versionen nicht immer.

**Passt dein Hoster noch zu dir?** Achte in den nächsten Tagen darauf, wie dein Anbieter kommuniziert. Gab es eine klare Meldung mit Zeitplan, oder musstest du alles in Foren zusammensuchen? Schnelle und offene Kommunikation in einer Krise ist ein guter Grund, bei einem Hoster zu bleiben. Musstest du dagegen lange suchen, ist das ein Anlass, über einen Wechsel nachzudenken. Wie der ohne Ausfall gelingt, beschreiben wir in unserem [Leitfaden zum Hosterwechsel](/blog/website-hosterwechsel-leicht-gemacht-kompletter-leitfaden-2025-mit-checkliste-tipps-zu-allinkl-com/).

**Hast du einen Wartungsvertrag, der so etwas abdeckt?** Ein Vertrag, der nur „Plugin-Updates einmal im Monat“ umfasst, hilft bei PHP2Shell wenig. Ein guter Wartungsvertrag regelt, wer bei kritischen Lücken innerhalb von Stunden reagiert und wer den Hoster kontaktiert.

## Fazit: Kein Grund zur Panik, aber Grund zum Handeln

PHP2Shell ist ernst, weil die Lücke tief im Fundament fast jeder Website sitzt und schon ausgenutzt wird. Für die meisten kleinen Unternehmen mit klassischem Webhosting ist die Arbeit aber überschaubar: Hosting-Art klären, PHP-Version ablesen, Patch schriftlich bestätigen lassen und die eigene Website bei der Gelegenheit aufräumen. Kritisch wird es bei eigenen Servern, Containern und alten PHP-Versionen. Dort muss heute jemand handeln.

Wenn du unsicher bist, wer bei dir zuständig ist, oder deine Website auf einer veralteten PHP-Version läuft, schauen wir uns das gern mit dir an. Wir betreuen WordPress-Websites und Shops im Rahmen unserer [Wartung und Betreuung](/leistungen/wartung-support/) und bauen bei Bedarf eine [neue, saubere Website](/leistungen/webdesign/) auf aktueller Technik. Eine kurze Nachricht über unser [Kontaktformular](/kontakt/) genügt.

## Häufige Fragen (FAQ)

<details>
<summary>Was ist die PHP-Sicherheitslücke PHP2Shell?</summary>
<p>PHP2Shell ist der Name für zwei kritische Lücken in PHP, CVE-2026-109618 und CVE-2026-109619. Sie erlauben im schlimmsten Fall, ohne Anmeldung fremden Code auf dem Webserver auszuführen. Das PHP-Projekt hat sie am 21. Oktober 2026 mit den Versionen 8.5.12, 8.4.27, 8.3.36 und 8.2.35 geschlossen.</p>
</details>

<details>
<summary>Ist deine WordPress-Website von PHP2Shell betroffen?</summary>
<p>Wenn sie auf einem Server mit ungepatchtem PHP läuft, ja. Die Lücke sitzt in PHP selbst, nicht in WordPress. Deshalb hilft ein WordPress- oder Plugin-Update allein nicht. Entscheidend ist, ob dein Hoster oder dein Server-Admin das PHP-Update eingespielt hat.</p>
</details>

<details>
<summary>Wie findest du heraus, welche PHP-Version deine Website nutzt?</summary>
<p>In WordPress unter <strong>Werkzeuge, Website-Zustand, Bericht, Server</strong>. Alternativ im Kundenmenü deines Hosters bei den Domain-Einstellungen. Beachte, dass manche Hoster Korrekturen einbauen, ohne die Versionsnummer zu ändern. Im Zweifel fragst du schriftlich nach.</p>
</details>

<details>
<summary>Musst du bei normalem Webhosting selbst etwas tun?</summary>
<p>Das PHP-Update spielt bei Shared und Managed Hosting der Hoster ein. Deine Aufgabe ist, dir den Patch bestätigen zu lassen und WordPress, Plugins und Themes aktuell zu halten. Läuft deine Seite noch auf PHP 8.1 oder älter, solltest du außerdem auf eine unterstützte Version wechseln.</p>
</details>

<details>
<summary>Reicht eine Firewall wie Cloudflare als Schutz?</summary>
<p>Nein. Cloudflare hat Schutzregeln für alle Tarife aktiviert, das ist eine sinnvolle zusätzliche Schicht. Das PHP-Projekt betont aber, dass nur das Update die Lücke wirklich schließt. Übergangsmaßnahmen und Firewalls verringern nur das Risiko.</p>
</details>

<details>
<summary>Welche PHP-Version sollte deine Website 2026 nutzen?</summary>
<p>WordPress empfiehlt PHP 8.3 oder neuer. PHP 8.2 erhält nur noch bis 31. Dezember 2026 Sicherheitsupdates, PHP 8.1 bereits seit Ende 2025 keine mehr. Vor einem Wechsel testest du die Website am besten auf einer Testumgebung und legst ein Backup an.</p>
</details>
