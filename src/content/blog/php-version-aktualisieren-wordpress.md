---
title: "PHP-Version aktualisieren in WordPress: Schritt für Schritt ohne Ausfall"
date: 2026-10-23
description: "PHP-Version aktualisieren in WordPress: Welche Version die richtige ist, was alte Versionen beim Hoster kosten und wie du ohne Ausfall in sechs Schritten umstellst."
cover:
  src: "/uploads/blog/php-version-aktualisieren-wordpress/cover.webp"
  alt: "PHP-Version aktualisieren: Frau prüft abends am Schreibtisch ihre WordPress-Website auf zwei Monitoren"
categories:
  - wordpress
categoryNames:
  - "WordPress"
draft: false
seoTitle: "PHP-Version aktualisieren: WordPress sicher umstellen"
seoDescription: "PHP-Version aktualisieren in WordPress: Welche Version passt, was Hoster für alte Versionen verlangen und wie du in sechs Schritten ohne Ausfall umstellst."
---

Die PHP-Version zu aktualisieren gehört zu den Aufgaben, die gern liegen bleiben. Niemand weiß so genau, ob danach noch alles läuft. Dabei ist der Wechsel bei den meisten WordPress-Websites in einer Stunde erledigt, wenn du in der richtigen Reihenfolge vorgehst: erst sichern, dann WordPress und Plugins aktualisieren, testen, umstellen und kontrollieren. Spätestens seit der Sicherheitslücke [PHP2Shell](/blog/php-sicherheitsluecke-php2shell/) ist klar: Eine veraltete PHP-Version ist ein offenes Fenster. Wir zeigen dir, welche Version du wählen solltest, was es kostet, auf einer alten zu bleiben, und wie der Umstieg ohne Ausfall klappt.

> **Kurz gesagt:** WordPress empfiehlt PHP 8.3 oder neuer. PHP 8.1 bekommt seit Ende 2025 keine Sicherheitsupdates mehr, PHP 8.2 nur noch bis 31. Dezember 2026. Trotzdem laufen rund 58 % aller WordPress-Installationen auf diesen oder älteren Versionen. Vor dem Wechsel brauchst du ein Backup und aktuelle Plugins, danach stellst du die Version im Kundenmenü deines Hosters um und prüfst die wichtigsten Seiten. Klemmt etwas, kannst du in den meisten Paketen sofort auf die alte Version zurückschalten.

## Was bedeutet es, die PHP-Version zu aktualisieren?

PHP ist die Programmiersprache, in der WordPress geschrieben ist. Sie läuft auf dem Server deines Hosters und baut bei jedem Seitenaufruf die Seite zusammen, die deine Besucher sehen. Die PHP-Version zu aktualisieren heißt: Du stellst deine Website von einer älteren Hauptversion (zum Beispiel 8.1) auf eine neuere um (zum Beispiel 8.3 oder 8.4).

Das ist etwas anderes als ein WordPress-Update. WordPress, Plugins und Themes aktualisierst du im Dashboard. Die PHP-Version legst du dagegen beim Hoster fest, meist pro Domain im Kundenmenü. Kleine Sicherheitskorrekturen innerhalb einer Version, also etwa von 8.3.35 auf 8.3.36, spielt bei klassischem Webhosting der Hoster selbst ein. Den Sprung auf eine neue Hauptversion musst du in aller Regel selbst auslösen, weil er Auswirkungen auf deine Plugins haben kann.

Deshalb hängen so viele Websites auf alten Versionen fest: Der Hoster stellt nicht von sich aus um, und im Alltag merkt niemand, dass die Version veraltet ist. Bis eine Lücke wie PHP2Shell auftaucht. Oder eine Rechnung mit einem neuen Posten.

## Warum lohnt sich das Update gerade jetzt?

Jede PHP-Version wird nur eine begrenzte Zeit gepflegt. Laut der [offiziellen Übersicht auf php.net](https://www.php.net/supported-versions.php) gibt es zwei Phasen: zwei Jahre aktive Pflege mit Fehler- und Sicherheitskorrekturen, danach zwei Jahre nur noch Sicherheitskorrekturen. Ist auch diese Zeit vorbei, werden neue Lücken nicht mehr geschlossen.

Für dich als Websitebetreiber heißt das ganz praktisch:

- **Sicherheit:** Bei PHP2Shell hat das PHP-Projekt reguläre Updates nur für die Versionen 8.2 bis 8.5 veröffentlicht. Wer auf 8.1 oder älter läuft, hängt davon ab, ob der Hoster selbst nachbessert.
- **Kosten:** Mehrere große Hoster verlangen inzwischen Geld dafür, dass sie alte Versionen weiter absichern. Dazu gleich mehr.
- **Kompatibilität:** Neue Plugin-Versionen setzen zunehmend eine aktuelle PHP-Version voraus. WordPress verhindert dann die Installation oder das Update, wenn deine Version zu alt ist. So bleibst du ausgerechnet bei Sicherheitsupdates von Plugins hängen.
- **Tempo:** Neuere PHP-Versionen arbeiten in der Regel effizienter. Wie viel schneller deine Seite wird, hängt stark von Theme und Plugins ab. Wunder darfst du nicht erwarten. Einen Nachteil hast du aber auch nicht.

Falls deine Seite betroffen ist: Du bist in großer Gesellschaft. Laut der [Statistik von WordPress.org](https://api.wordpress.org/stats/php/1.0/) laufen am 23. Oktober 2026 34,7 % aller WordPress-Installationen auf PHP 8.1 oder älter, weitere 23,5 % auf PHP 8.2. Zusammen sind das gut 58 % der Websites, die spätestens zum Jahreswechsel keine offiziellen Sicherheitsupdates mehr bekommen.

## Welche PHP-Version ist die richtige für WordPress?

WordPress empfiehlt aktuell mindestens PHP 8.3. Das hat das Core-Team in seiner [Klarstellung zum PHP-Support vom Mai 2026](https://make.wordpress.org/core/2026/05/22/php-support-clarification-2026/) bestätigt. WordPress 7.0 läuft offiziell mit PHP 7.4 bis 8.5, die frühere Kennzeichnung einzelner Versionen als „Beta“ hat das Projekt dort ganz abgeschafft.

Die folgende Tabelle zeigt, wie lange die einzelnen Versionen noch Sicherheitsupdates bekommen und was wir für eine typische KMU-Website empfehlen.

| PHP-Version | Sicherheitsupdates bis | Anteil WordPress-Websites | Unsere Empfehlung |
|---|---|---|---|
| 7.4 und älter | längst ausgelaufen | rund 21 % | dringend wechseln, notfalls mit Hilfe |
| 8.0 | ausgelaufen (Ende 2023) | 3,6 % | dringend wechseln |
| 8.1 | ausgelaufen (31.12.2025) | 10,0 % | jetzt wechseln |
| 8.2 | 31.12.2026 | 23,5 % | bis Jahresende wechseln |
| 8.3 | 31.12.2027 | 27,0 % | solide Wahl, von WordPress empfohlen |
| 8.4 | 31.12.2028 | 9,8 % | beste Wahl für die meisten Websites |
| 8.5 | 31.12.2029 | 4,9 % | gut, wenn alle Plugins sie unterstützen |

Unsere Faustregel: Nimm die neueste Version, mit der alle deine Plugins sicher zurechtkommen. Für die meisten gepflegten WordPress-Websites ist das heute PHP 8.4. Sie bekommt noch über zwei Jahre Sicherheitsupdates, und die verbreiteten Plugins sind längst darauf eingestellt. PHP 8.5 ist seit November 2025 verfügbar und von WordPress unterstützt. Hier lohnt aber ein genauerer Blick auf ältere oder selten gepflegte Plugins.

Spring nicht blind auf die höchste Nummer, nur weil sie im Menü steht. Und bleib auch nicht auf 8.2 stehen, nur weil sie gerade noch unterstützt wird. Dann stehst du in wenigen Wochen vor derselben Arbeit.

![PHP-Version aktualisieren: Support-Ende der PHP-Versionen 8.1 bis 8.5 im Überblick](/uploads/blog/php-version-aktualisieren-wordpress/support-ende.webp)

## Was kostet es, auf einer alten PHP-Version zu bleiben?

Viele Unternehmer merken das Thema erst auf der Hosting-Rechnung. Große Anbieter sichern veraltete PHP-Versionen eine Zeit lang weiter ab, lassen sich das aber bezahlen.

Bei IONOS heißt dieser Dienst „PHP Extended Support“. Laut der [Preisseite von IONOS](https://www.ionos.de/hosting/php-extended-support) kostet er je Monat 7,81 € für PHP 8.1, 15,62 € für PHP 7.4 und 8.0 und 18,28 € für PHP 7.0 bis 7.3. Für noch ältere Versionen wird es teurer. Bei STRATO ist der kostenpflichtige Extended Support für PHP 8.1 seit dem 2. März 2026 aktiv. Einen konkreten Betrag nennt STRATO öffentlich nicht, nur eine „geringe monatliche Aufwandentschädigung“.

Rechne das kurz für dich durch: Bleibst du auf PHP 7.4, zahlst du bei IONOS so rund 187 € im Jahr extra, nur damit eine Version weiter abgesichert wird, die du eigentlich gar nicht brauchst. Für dieses Geld ist der Umstieg oft schon erledigt, und die Kosten fallen danach weg. Wir sehen solche Posten regelmäßig, wenn wir mit Kunden die Rechnungen ihrer Website durchgehen. Fast immer wusste niemand, wofür sie anfallen.

Bei Anbietern ohne solche Zusatzgebühr ist das Risiko ein anderes: Dort kostet die alte Version nichts, sie bekommt aber irgendwann auch keine Korrekturen mehr. Das ist auf Dauer das größere Risiko.

## Vor dem Update: So bereitest du den Wechsel vor

Die meisten Probleme nach einem PHP-Wechsel entstehen nicht durch PHP selbst, sondern durch ein veraltetes Plugin oder Theme, das mit der neuen Version nicht klarkommt. Deshalb ist die Vorbereitung wichtiger als der eigentliche Klick.

**Backup anlegen, das du auch zurückspielen kannst.** Du brauchst Dateien und Datenbank. Viele Hoster bieten tägliche Sicherungen im Kundenmenü an, alternativ ein Backup-Plugin. Klär vorher, wie die Wiederherstellung funktioniert. Ein Backup, das niemand einspielen kann, hilft im Ernstfall wenig.

**Aktuelle PHP-Version ablesen.** In WordPress findest du sie unter Werkzeuge, Website-Zustand, Reiter „Bericht“, Abschnitt „Server“. Der Website-Zustand zeigt dir außerdem direkt einen Hinweis an, wenn deine Version veraltet ist.

**WordPress, Plugins und Themes aktualisieren.** Und zwar vor dem PHP-Wechsel. Viele Kompatibilitätsprobleme sind in neueren Plugin-Versionen längst behoben. Gleichzeitig ist das ein guter Moment zum Aufräumen: Deaktivierte Plugins, die niemand mehr braucht, löschst du. Was nicht da ist, kann auch nicht kaputtgehen.

**Kritische Kandidaten erkennen.** Schau bei jedem aktiven Plugin, wann es zuletzt aktualisiert wurde und welche PHP-Version es in seinem Eintrag auf WordPress.org voraussetzt. Plugins, die seit mehr als zwei Jahren kein Update bekommen haben, sind die üblichen Verdächtigen. Dasselbe gilt für Themes, die vor Jahren individuell angepasst und nie wieder angefasst wurden, und für eigenen Code, etwa in der functions.php.

**Testumgebung nutzen, wenn es geht.** Viele Hoster bieten eine Staging-Kopie mit einem Klick an. Dort stellst du zuerst um und testest in Ruhe. Bei einer kleinen Unternehmenswebsite ohne Shop ist das kein Muss, bei einem Onlineshop mit Zahlungsanbindung solltest du nicht darauf verzichten.

**Den richtigen Zeitpunkt wählen.** Stell nicht am Freitagnachmittag um und auch nicht kurz vor einer Aktion im Shop. Ein ruhiger Vormittag unter der Woche, an dem du danach noch eine Stunde Zeit hast, ist ideal.

## Schritt für Schritt: PHP-Version aktualisieren

Wenn die Vorbereitung steht, ist der eigentliche Wechsel schnell gemacht. So gehen wir bei Kundenwebsites vor.

![PHP-Version aktualisieren in sechs Schritten: sichern, aktualisieren, testen, umstellen, prüfen, beobachten](/uploads/blog/php-version-aktualisieren-wordpress/ablauf.webp)

### 1. Sichern

Erstelle direkt vor dem Wechsel ein frisches Backup, auch wenn der Hoster nachts eines anlegt. Bei einem Shop zählen die Bestellungen der letzten Stunden.

### 2. Aktualisieren

Bring WordPress, alle Plugins und das Theme auf den neuesten Stand. Prüf danach kurz, ob die Seite normal läuft. So weißt du später, dass ein Fehler wirklich vom PHP-Wechsel kommt.

### 3. Testen

Hast du eine Staging-Umgebung, stellst du dort zuerst die neue PHP-Version ein und klickst die wichtigsten Abläufe durch. Ohne Staging fällt dieser Schritt weg, dafür wird Schritt 5 umso wichtiger.

### 4. Umstellen

Die PHP-Version änderst du im Kundenmenü deines Hosters, meist in den Einstellungen der jeweiligen Domain. Bei All-Inkl gehst du im KAS auf „Domain“, klickst bei deiner Domain auf das Symbol zum Bearbeiten und wählst unter PHP-Version die neue Version aus. Bei IONOS, STRATO und den meisten anderen Anbietern sitzt die Einstellung ebenfalls in der Hosting-Verwaltung, oft unter einem Punkt wie „PHP-Einstellungen“. Die Umstellung greift meist innerhalb weniger Minuten.

Wichtig: Läuft deine Website auf einem eigenen Server oder VPS, gibt es dieses Menü nicht. Dann installiert dein Administrator die neue Version auf dem Server und stellt den Webserver darauf um. Das ist ein eigenes Projekt und gehört in erfahrene Hände.

### 5. Prüfen

Leere den Cache deines Caching-Plugins und des Browsers. Dann gehst du die Seiten durch, die für dein Geschäft zählen:

- Startseite und zwei, drei wichtige Unterseiten
- Kontaktformular mit einer echten Testnachricht
- Login in den Adminbereich, Beitrag speichern
- Bei Shops: Produkt in den Warenkorb, Kasse bis vor die Zahlung
- Buchungs- oder Terminsysteme, falls vorhanden

Schau zum Schluss noch einmal in den Website-Zustand. Dort sollte jetzt die neue Version stehen, und der Hinweis auf eine veraltete Version ist verschwunden.

### 6. Beobachten

Manche Fehler zeigen sich erst bei bestimmten Aktionen, etwa beim nächtlichen Versand eines Newsletters oder beim Export einer Rechnung. Behalte deshalb in den ersten Tagen dein Postfach im Blick. WordPress schickt bei einem schweren Fehler automatisch eine E-Mail an die Admin-Adresse, inklusive Link zu einem Wiederherstellungsmodus. Wenn dein Hoster ein PHP-Fehlerprotokoll anbietet, lohnt dort ein Blick.

## Was tun, wenn nach dem Update etwas nicht funktioniert?

Keine Panik. In den allermeisten Fällen ist die Ursache ein einzelnes Plugin, und du hast mehrere Wege zurück.

**Die Seite zeigt „Es gab einen kritischen Fehler“.** Das ist die Standardmeldung von WordPress bei einem schweren PHP-Fehler. Schau in dein Postfach: Die Mail an die Admin-Adresse nennt in der Regel das betroffene Plugin oder Theme und enthält den Link zum Wiederherstellungsmodus. Darüber kannst du dich trotz Fehler einloggen und das Plugin deaktivieren.

**Einzelne Funktionen fehlen oder sehen falsch aus.** Ein Slider lädt nicht, ein Formular verschickt nichts. Hier hilft das klassische Vorgehen: Plugins nacheinander deaktivieren, bis der Fehler verschwindet. Dann gibt es drei Möglichkeiten: Update des Plugins abwarten, Ersatz suchen oder Entwickler fragen.

**Gar nichts geht mehr.** Dann schaltest du im Kundenmenü auf die vorherige PHP-Version zurück. Bei klassischem Webhosting ist das eine Sache von Minuten. Danach läuft deine Seite wieder wie vorher, und du kannst in Ruhe nach der Ursache suchen. Genau deshalb ist der Wechsel weniger riskant, als viele denken.

**Du findest die Ursache nicht.** Wenn du dich mit Technik auskennst, kommst du mit dem WordPress-Fehlerprotokoll weiter. In der wp-config.php lässt sich mit `WP_DEBUG` und `WP_DEBUG_LOG` einschalten, dass Fehler in eine Datei geschrieben werden. Mit `WP_DEBUG_DISPLAY` auf `false` siehst nur du sie, nicht deine Besucher. Danach unbedingt wieder abschalten, denn das Protokoll soll nicht dauerhaft öffentlich erreichbar herumliegen.

Wichtig ist eines: Zurückschalten ist eine Notlösung für ein paar Tage, kein Dauerzustand. Das Problem, das hinter dem Fehler steckt, verschwindet nicht von selbst. Es wird mit jedem Monat auf der alten Version größer.

## Wann solltest du dir Hilfe holen?

Viele Websites stellst du mit dieser Anleitung selbst um. Es gibt aber Fälle, in denen du dir Unterstützung holen solltest, weil die Fehlersuche sonst unnötig lange dauert:

- Deine Website läuft noch auf **PHP 7.4 oder älter**. Der Sprung über mehrere Hauptversionen bringt fast immer Anpassungen mit sich.
- Du nutzt ein **individuell programmiertes Theme** oder eigene Erweiterungen, die seit Jahren niemand mehr angefasst hat.
- Du betreibst einen **Onlineshop** mit Zahlungsanbindung, Warenwirtschaft oder Schnittstellen zu anderen Systemen.
- Die Website liegt auf einem **eigenen Server oder VPS**, um den sich niemand mehr aktiv kümmert.
- Du hast **keinen Zugang** zum Hosting, weil die Website damals eine Agentur oder ein Bekannter eingerichtet hat.

Gerade der letzte Punkt ist häufiger, als man denkt. Wenn niemand die Zugangsdaten zum Hosting kennt, kann auch niemand die PHP-Version umstellen. Dann ist der erste Schritt, das zu klären, bevor es eilt.

Wir übernehmen solche Umstellungen im Rahmen unserer [Wartung und Betreuung](/leistungen/wartung-support/), inklusive Backup, Test und Kontrolle danach. Wenn du deine Website ohnehin gerade auf den Prüfstand stellst, findest du in unserem Beitrag zur [WordPress-Sicherheit 2026](/blog/wordpress-sicherheit-2026/) weitere Punkte, die du im selben Durchgang erledigen kannst.

## Fazit: Eine Stunde Arbeit, die sich doppelt auszahlt

Die PHP-Version zu aktualisieren ist keine große Operation, wenn du die Reihenfolge einhältst: sichern, aktualisieren, testen, umstellen, prüfen, beobachten. Für die meisten WordPress-Websites ist PHP 8.4 heute die sinnvollste Wahl, mindestens aber 8.3, wie es WordPress selbst empfiehlt. Läuft deine Seite noch auf 8.1 oder älter, warte nicht bis zur nächsten Sicherheitslücke. Mit 8.2 solltest du noch vor dem Jahresende umstellen.

Du hast gleich zwei Vorteile: Deine Website bekommt wieder regelmäßige Sicherheitsupdates, und je nach Hoster fällt eine monatliche Gebühr weg, die du bisher für eine veraltete Version bezahlt hast. Wenn du dir unsicher bist oder die Umstellung lieber abgeben willst, [sprich uns einfach an](/kontakt/). Wir schauen uns deine Website an und sagen dir ehrlich, ob du das selbst schaffst.

## Häufige Fragen (FAQ)

<details>
<summary>Wie findest du heraus, welche PHP-Version deine WordPress-Website nutzt?</summary>
<p>Im WordPress-Dashboard unter Werkzeuge, Website-Zustand, Reiter „Bericht“, Abschnitt „Server“. Alternativ steht die Version im Kundenmenü deines Hosters bei den Einstellungen deiner Domain.</p>
</details>

<details>
<summary>Welche PHP-Version empfiehlt WordPress?</summary>
<p>WordPress empfiehlt mindestens PHP 8.3. WordPress 7.0 läuft offiziell mit PHP 7.4 bis 8.5. Für die meisten Websites ist PHP 8.4 eine gute Wahl, weil sie bis Ende 2028 Sicherheitsupdates bekommt.</p>
</details>

<details>
<summary>Kann deine Website durch ein PHP-Update kaputtgehen?</summary>
<p>Es kann passieren, meist wegen eines veralteten Plugins oder Themes. Mit Backup, aktuellen Plugins und einem Test vorab ist das Risiko gering. Bei klassischem Webhosting kannst du im Kundenmenü jederzeit auf die vorherige Version zurückschalten.</p>
</details>

<details>
<summary>Was kostet eine veraltete PHP-Version beim Hoster?</summary>
<p>Das hängt vom Anbieter ab. IONOS berechnet für den <strong>PHP Extended Support</strong> je Monat 7,81 € für PHP 8.1 und 15,62 € für PHP 7.4 und 8.0. STRATO verlangt für PHP 8.1 seit März 2026 ebenfalls eine monatliche Gebühr.</p>
</details>

<details>
<summary>Musst du die PHP-Version selbst ändern oder macht das dein Hoster?</summary>
<p>Kleine Sicherheitskorrekturen innerhalb einer Version spielt der Hoster bei klassischem Webhosting selbst ein. Den Wechsel auf eine neue Hauptversion, etwa von 8.1 auf 8.4, musst du in der Regel selbst im Kundenmenü auslösen. Bei eigenem Server oder VPS ist dein Administrator zuständig.</p>
</details>
