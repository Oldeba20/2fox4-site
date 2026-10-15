---
title: "WordPress 7.1 ist da: Die Neuerungen und was du vor dem Update wissen musst"
date: 2026-08-20
description: "WordPress 7.1 „Mary Lou“ ist erschienen: Hover-Styling ohne CSS, eigene Breakpoints, Tabs-Block, Bildverarbeitung im Browser. Alle Neuerungen, Update-Checkliste und FAQ."
cover:
  src: "/uploads/blog/wordpress-7-1-neuerungen/cover.webp"
  alt: "WordPress 7.1 Neuerungen: Website-Betreiber prüft das neue Update am Laptop"
categories:
  - wordpress
categoryNames:
  - "WordPress"
draft: false
seoTitle: "WordPress 7.1: Alle Neuerungen und die Update-Checkliste"
seoDescription: "WordPress 7.1 Release: Was neu ist (Responsive-Styles, Tabs, Medien im Browser, Notizen) und wie du das WordPress Update 2026 sicher einspielst. Mit Checkliste."
---

Vermutlich zeigt dein Dashboard es schon an: WordPress 7.1 wartet auf das Update. Seit dem 19. August 2026 ist die Version verfügbar. Sie trägt den Codenamen „Mary Lou“, benannt nach der Jazzpianistin, Arrangeurin und Komponistin Mary Lou Williams, und wurde zum Abschluss des WordCamp US in Phoenix veröffentlicht. Für die meisten Betreiber überwiegt das Positive. Vieles, wofür du bisher CSS oder ein Zusatz-Plugin gebraucht hast, stellst du jetzt direkt im Editor ein. Gleichzeitig gibt es eine technische Änderung, die ältere Plugins und selbst gebaute Blöcke betreffen kann. Wir gehen die WordPress 7.1 Neuerungen der Reihe nach durch, ordnen ein, wer davon etwas hat, und zeigen dir, wie du das Update ohne böse Überraschungen einspielst.

> **Kurz gesagt:** WordPress 7.1 bringt Hover- und Fokus-Styling ohne Code, Stile pro Bildschirmgröße, neue Blöcke für Tabs und Audio-Playlists, Bildverarbeitung im Browser, einen neuen Bild-Editor und Notizen mit @Erwähnungen. Weil der Beitragseditor jetzt immer in einem iframe läuft, solltest du ältere Blöcke und Editor-Plugins vorher testen. Echtzeit-Zusammenarbeit fehlt noch. Business-Websites aktualisierst du am besten mit Backup und Staging-Test.

## Was ist WordPress 7.1?

WordPress 7.1 ist das zweite große Release der 7er-Reihe und folgt auf WordPress 7.0, das am 20. Mai 2026 erschienen ist. Laut offizieller Ankündigung haben mehr als 800 Mitwirkende aus aller Welt daran gearbeitet, darunter über 170, die zum ersten Mal etwas beigetragen haben. Zusammen stecken mehr als 1.500 Verbesserungen und Fehlerbehebungen in dem Update ([WordPress.org, Ankündigung „Mary Lou“](https://wordpress.org/news/2026/08/mary-lou/)).

Wer die Diskussion um Version 7.0 verfolgt hat, kennt die großen Versprechen rund um gemeinsames Arbeiten im Editor. Die damaligen Pläne haben wir in unserem [Beitrag zu WordPress 7.0](/blog/wordpress-7-0-2026-diese-updates-veraendern-ihre-website/) zusammengefasst. Version 7.1 setzt einen anderen Schwerpunkt. Ein einzelnes Leuchtturm-Feature sucht man diesmal vergeblich. Dafür steckt in vielen Ecken eine kleine Verbesserung, die im Alltag Zeit spart, ob beim Gestalten, beim Hochladen von Bildern oder bei der Abstimmung im Team. Fangen wir beim Design an.

![WordPress 7.1 Neuerungen im Überblick: Design, Medien, Zusammenarbeit und Technik](/uploads/blog/wordpress-7-1-neuerungen/wordpress-7-1-neuerungen-ueberblick.webp)

## Hover, Fokus und Aktiv: Zustände stylen ohne CSS

Bisher war es eine typische Kleinigkeit, die trotzdem einen Entwickler brauchte. Der Button soll beim Überfahren mit der Maus dunkler werden, der Menüpunkt beim Anklicken eine andere Farbe bekommen. Im Block-Editor ging das nur mit eigenem CSS oder über ein Theme, das genau diese Option mitbrachte.

Mit WordPress 7.1 kannst du solche Zustände direkt einstellen. Unterstützt werden Hover (Maus darüber), Fokus (per Tastatur angewählt), Focus-visible und Aktiv (gerade angeklickt). Das geht in den globalen Stilen für alle Buttons gleichzeitig oder für einen einzelnen Button. Laut Entwickler-Dokumentation ist die Funktion vorerst auf die Blöcke „Button“ und „Navigationslink“ beschränkt.

Pflegst du deine Website mit einem Block-Theme, passt du Buttons und Navigation jetzt selbst an dein Corporate Design an, ganz ohne Code. Nebenbei gewinnt die Barrierefreiheit. Ein sichtbarer Fokus-Zustand hilft allen, die mit der Tastatur statt mit der Maus durch die Seite gehen.

## Responsive Einstellungen pro Bildschirmgröße

Die zweite große Design-Neuerung betrifft alle, die sich schon mal über eine zu große Überschrift auf dem Handy geärgert haben. In WordPress 7.1 kannst du für Blöcke eigene Stile für die Ansichten „Tablet“ und „Mobil“ festlegen, entweder global für einen Blocktyp oder für einen einzelnen Block. Eine Überschrift darf auf dem Handy also kleiner sein, ein Abstand auf dem Tablet enger, ohne dass du dafür Media Queries schreiben musst. Die Desktop-Ansicht bleibt dabei der Grundstil, der überall gilt, solange du nichts überschreibst.

Standardmäßig liegen die Grenzen bei 480 Pixeln für „Mobil“ und bei 782 Pixeln für „Tablet“. Block-Themes können eigene Breakpoints in der Datei theme.json festlegen, etwa in rem oder em. Diese Werte gelten dann auch für die Gerätevorschau im Editor und für die Sichtbarkeit von Blöcken. Entwickler können die neuen Regler per Editor-Einstellung ausblenden, bereits gespeicherte Stile bleiben dann trotzdem aktiv ([Make WordPress Core, Responsive Block-Stile](https://make.wordpress.org/core/2026/08/05/responsive-block-styles-and-configurable-viewports-in-wordpress-7-1/)).

Das ist vor allem für Unternehmen interessant, die ihre Inhalte selbst pflegen. Ein Steuerbüro, das eine neue Leistungsseite anlegt, sieht in der Vorschau sofort, wie sie auf dem Smartphone wirkt, und kann nachjustieren. Früher landete so etwas oft als Ticket bei der Agentur.

## Neue Blöcke: Tabs und Playlist

Zwei neue Kernblöcke ersetzen Funktionen, für die viele Websites bisher ein eigenes Plugin installiert hatten.

Der **Tabs-Block** ordnet Inhalte in anklickbare Reiter, statt alles untereinander zu zeigen. Typische Einsatzfälle sind Produktvarianten, Preismodelle oder die Unterscheidung „für Privatkunden“ und „für Gewerbekunden“. Der Block orientiert sich an den ARIA-Empfehlungen des W3C und ist per Tastatur und Screenreader bedienbar. Zum finalen Release kamen Schaltflächen zum Umsortieren der Reiter hinzu.

Der **Playlist-Block** fasst mehrere Audiodateien zu einer Liste zusammen, optional mit Wellenform-Darstellung. Für Vereine mit Konzertmitschnitten, Musikschulen oder Unternehmen mit eigenem Podcast ist das eine schlanke Lösung ohne externen Player.

Ein Hinweis aus der Praxis: Wenn du heute ein Tabs-Plugin nutzt, musst du nicht sofort wechseln. Prüfe beim nächsten Relaunch oder größeren Umbau, ob der Kernblock reicht. Jedes Plugin weniger bedeutet weniger Updates und eine kleinere Angriffsfläche.

## Medien: Bildverarbeitung im Browser und neuer Bild-Editor

Die vielleicht nützlichste Neuerung siehst du gar nicht. Bisher hat der Server nach jedem Upload die verschiedenen Bildgrößen berechnet. Auf günstigen Hosting-Paketen führte das bei großen Fotos manchmal zu Abbrüchen oder Speicherfehlern.

Mit WordPress 7.1 können Komprimierung, Skalierung und das Erzeugen der Vorschaubilder direkt im Browser passieren, bevor die Dateien hochgeladen werden. Technisch steckt eine WebAssembly-Version der Bildbibliothek libvips dahinter. Fotos im HEIC-Format, wie sie iPhones aufnehmen, werden im Browser gelesen und als JPEG hochgeladen, sofern das Betriebssystem das Format entschlüsseln kann. AVIF funktioniert auch dann, wenn der Server dieses Format selbst nicht verarbeiten kann. Volle Unterstützung gibt es in Chrome und Edge ab Version 137. Firefox, Safari sowie schwache Geräte oder langsame Verbindungen fallen automatisch auf die bisherige Verarbeitung auf dem Server zurück, ohne dass du etwas davon merkst ([Make WordPress Core, Client-Side Media Processing](https://make.wordpress.org/core/2026/07/22/client-side-media-processing-in-wordpress-7-1/)).

Beim Upload siehst du jetzt den Fortschritt, und bricht die Verbindung kurz ab, versucht WordPress es automatisch erneut. Animierte GIFs lassen sich optional in Videos umwandeln, was Ladezeit spart. Die Mediathek scrollt jetzt standardmäßig endlos weiter, statt in Seiten zu blättern; wer das nicht mag, stellt es im eigenen Profil zurück.

Neu ist außerdem ein **Bild-Editor als eigenes Fenster**. Zuschneiden, Drehen, Spiegeln und das Bearbeiten von Metadaten liegen jetzt an einer Stelle. Wer regelmäßig Teamfotos oder Produktbilder einpflegt, spart damit Zeit.

## Admin und Website-Editor: schneller finden, leichter abstimmen

Wer täglich im Backend arbeitet, merkt die nächsten Änderungen schnell. Sie betreffen weniger die Website als die Wege dorthin.

Die **Befehlspalette**, die du mit Strg+K (am Mac Cmd+K) öffnest, sortiert ihre Treffer jetzt in „Zuletzt verwendet“, „Passende Treffer“ und „Vorschläge“. Zuletzt genutzte Befehle merkt sich WordPress über die Sitzung hinaus. Wer oft zwischen Seiten, Vorlagen und Einstellungen springt, spart dadurch viele Klicks.

Die **Werkzeugleiste** oben bleibt jetzt auch in den Editoren sichtbar. Du verlierst also nicht mehr die Orientierung, wenn du aus dem Website-Editor zurück ins Dashboard willst.

**Revisionen lassen sich teilen.** Du kannst einen Link zu einer bestimmten früheren Fassung eines Beitrags verschicken; wer ihn öffnet, landet direkt bei dieser Version mit hervorgehobenen Änderungen. „Schau mal, was in der Version vom Dienstag anders war“ geht damit per Link statt per Screenshot.

## Notizen mit @Erwähnungen

Mit WordPress 6.9 kamen die Notizen in den Editor, also Kommentare direkt an einem Block, ähnlich wie in einem Textdokument. In 7.1 werden sie deutlich nützlicher. Wer im Notizfeld ein „@“ tippt, bekommt eine Liste der Kolleginnen und Kollegen und kann jemanden markieren. Die markierte Person erhält eine E-Mail und muss dafür den Editor nicht geöffnet haben. Notizen lassen sich jetzt außerdem an markierten Text statt nur an ganze Blöcke hängen, ein Block kann mehrere Diskussionen haben, und einfache Formatierungen wie fett, kursiv oder Links sind möglich.

Gerade kleine Teams profitieren davon. Ein Handwerksbetrieb, bei dem die Chefin Texte schreibt und der Azubi die Bilder einpflegt, kann Rückfragen direkt an der richtigen Stelle klären. Die Abstimmung per WhatsApp mit „im dritten Absatz oben links“ entfällt.

## Connectors: Andockstellen für externe Dienste und KI

Die Connectors, über die WordPress mit externen Diensten spricht, akzeptieren in 7.1 neben API-Schlüsseln auch Benutzername und Anwendungspasswort als Anmeldeverfahren. Für die meisten Website-Betreiber ist das ein Detail im Hintergrund. Es zeigt aber, wohin die Reise geht. WordPress wird Schritt für Schritt zur Plattform, an die sich andere Systeme und KI-Werkzeuge sauber andocken lassen. Wie KI-Assistenten dabei über das [Model Context Protocol (MCP) mit Systemen wie WordPress sprechen](/blog/mcp-model-context-protocol-unternehmen/), haben wir in einem eigenen Beitrag erklärt.

## Für Entwickler: Abilities API, Icons, Block Bindings und das iframe

Dieser Abschnitt ist technischer. Lies ihn trotzdem, wenn du eine individuell entwickelte Website oder eigene Blöcke hast, denn hier liegt das größte Update-Risiko.

**Abilities API:** Die mit WordPress 6.9 eingeführte Schnittstelle, über die Plugins ihre Funktionen standardisiert beschreiben, wurde erweitert. Es gibt Filter für den Ablauf einer Ausführung, eigene Validierung und eine gemeinsame Erkennung, ausdrücklich auch für KI-gestützte Werkzeuge. Darüber sollen KI-Assistenten künftig gezielt Aktionen auf einer WordPress-Website ausführen können.

**Icons API:** Entwickler können jetzt eigene Icon-Sammlungen im Editor registrieren. Die Funktionen dafür heißen `wp_register_icon_collection()`, `wp_register_icon()` und `wp_get_icon()`.

**Block Bindings:** Die Verknüpfung von Blöcken mit dynamischen Daten, etwa benutzerdefinierten Feldern, funktioniert jetzt auch für Listenpunkte.

**Der Editor läuft immer im iframe.** Das ist die wichtigste Änderung für die Kompatibilität. In WordPress 7.0 hing es noch vom Inhalt ab: Enthielt ein Beitrag einen Block mit einer Block-API-Version unter 3, verzichtete der Editor auf das iframe, um ältere Blöcke nicht zu stören. Ab 7.1 ist der Beitragseditor unabhängig vom Theme-Typ immer in ein iframe eingebettet ([Make WordPress Core, Iframed Editor Changes](https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/)).

Was heißt das konkret? Ein iframe ist ein eigenes Dokument innerhalb der Seite. Code, der über das globale `document` oder `window` nach dem Editor-Inhalt sucht, schaut jetzt ins falsche Dokument. Die meisten Blöcke laufen laut Entwickler-Dokumentation ohne Änderung. Eigene Blöcke, die noch mit Block-API-Version 2 oder älter registriert sind, solltest du trotzdem im neuen Editor testen und bei Gelegenheit auf Version 3 umstellen lassen. Bei Standard-Plugins kümmern sich in der Regel die Hersteller darum. Bei selbst programmierten Blöcken oder älteren Sonderlösungen, die eine Agentur vor Jahren gebaut hat, liegt die Verantwortung bei dir.

Außerdem wurde jQuery UI auf Version 1.14.2 aktualisiert. Plugins, die darauf aufbauen, sollten ebenfalls kurz geprüft werden.

## Was nicht in WordPress 7.1 steckt

Genauso wichtig ist, was fehlt. Sonst wartet jemand im Team auf eine Funktion, die es noch gar nicht gibt.

- **Echtzeit-Zusammenarbeit:** Mehrere Personen gleichzeitig im selben Beitrag, wie in Google Docs, wurde intensiv getestet, ist im finalen Release aber nicht aktiviert ([Make WordPress Core, Field Guide 7.1](https://make.wordpress.org/core/2026/08/05/wordpress-7-1-field-guide/)).
- **Inhaltsverzeichnis-Block:** Er stand auf der Roadmap für 7.1, hat es aber nicht ins Release geschafft.
- **Dashboard-Widget „On This Day“:** nicht enthalten, die Diskussion läuft weiter.
- **React 19:** auf später verschoben.
- **Klassischer Block:** Der Plan, ihn aus der Blockauswahl zu entfernen, wurde zurückgenommen. Er bleibt verfügbar.

Wer auf gemeinsames Live-Bearbeiten gewartet hat, muss sich weiter gedulden. Einen Teil des Bedarfs decken die Notizen mit @Erwähnungen bereits ab.

## WordPress 7.1 Neuerungen auf einen Blick: Wer muss handeln?

Bevor es um Page-Builder und den Update-Ablauf geht, hier alles noch einmal kompakt. Die Tabelle zeigt, welche Neuerung für wen relevant ist.

| Neuerung | Nutzen im Alltag | Wer muss handeln? |
|---|---|---|
| Hover-, Fokus- und Aktiv-Stile | Buttons und Menü ohne CSS ans Design anpassen | Niemand, optional für Redaktion |
| Responsive Stile und Breakpoints | Mobile Ansicht selbst feinjustieren | Theme-Entwickler bei eigenen Breakpoints |
| Tabs- und Playlist-Block | Weniger Plugins für Reiter und Audio | Optional beim nächsten Umbau |
| Bildverarbeitung im Browser | Weniger Last und Abbrüche auf dem Server | Niemand, Prüfung bei strenger CSP sinnvoll |
| Neuer Bild-Editor | Zuschneiden und Metadaten an einer Stelle | Redaktion kurz einweisen |
| Befehlspalette, teilbare Revisionen | Schneller navigieren, Fassungen verlinken | Niemand |
| Notizen mit @Erwähnungen | Abstimmung im Editor mit E-Mail-Hinweis | Team-Abläufe anpassen |
| Editor immer im iframe | Einheitliches Verhalten aller Themes | Entwickler eigener Blöcke und Editor-Plugins |
| jQuery UI 1.14.2 | Aktuelle Bibliothek | Plugin-Entwickler, kurzer Test |

## Wie gehen Elementor- und Page-Builder-Nutzer mit 7.1 um?

Viele kleine Unternehmen bauen ihre Seiten mit einem Page-Builder wie Elementor statt mit dem Block-Editor. Dann betreffen dich die meisten Design-Neuerungen aus 7.1 nur am Rand. Zustände, responsive Stile und die neuen Blöcke gehören zum Block-Editor. Im Page-Builder arbeitest du weiter mit dessen eigenen Werkzeugen. Die Medien-Neuerungen und die Verbesserungen im Admin-Bereich bekommst du dagegen unabhängig vom Builder.

Wichtig ist die Reihenfolge beim Update. Page-Builder und ihre Erweiterungen greifen tief in WordPress ein, und gerade Zusatzpakete mit vielen Widgets sind oft der Teil, der nach einem Core-Update zuerst hakt. Prüfe deshalb vor dem Update, ob dein Builder und alle Add-ons auf dem aktuellen Stand sind und ob der Hersteller Hinweise zu WordPress 7.1 veröffentlicht hat. Mehr zu den Vor- und Nachteilen der verschiedenen Builder findest du in unserem Beitrag über [WordPress-Pagebuilder](/blog/wordpress-pagebuilder/).

## So spielst du das WordPress Update 2026 sicher ein

Ein großes Core-Update ist kein Grund zur Panik, aber auch keine Sache für den Freitagnachmittag. Wir empfehlen bei Business-Websites diesen Ablauf.

![WordPress 7.1 Update-Ablauf in fünf Schritten: Backup, Staging, Kompatibilität, Update, Test](/uploads/blog/wordpress-7-1-neuerungen/wordpress-7-1-update-ablauf.webp)

### 1. Vollständiges Backup anlegen

Sichere Dateien und Datenbank, und zwar so, dass du die Sicherung auch wieder einspielen kannst. Ein Backup, dessen Wiederherstellung nie getestet wurde, ist eher eine Hoffnung als eine Absicherung. Viele Hoster bieten tägliche Sicherungen an; vor einem großen Update lohnt sich trotzdem eine manuelle Sicherung.

### 2. Auf einer Staging-Kopie testen

Eine Staging-Umgebung ist eine Kopie deiner Website, auf der du gefahrlos ausprobieren kannst. Spiele WordPress 7.1 zuerst dort ein. Bei einfachen Websites mit wenigen Plugins ist das schnell erledigt, bei Onlineshops oder Seiten mit Buchungssystem ist dieser Schritt Pflicht.

### 3. Plugins, Theme und Page-Builder prüfen

Aktualisiere alle Plugins und das Theme, bevor du WordPress selbst aktualisierst. Schau in die Änderungsprotokolle, ob die Hersteller WordPress 7.1 erwähnen. Besonders kritisch sind selbst entwickelte Blöcke, ältere Sonder-Plugins und alles, was den Editor verändert, wegen des iframes.

### 4. PHP-Version kontrollieren

Seit WordPress 7.0 ist PHP 7.4 die Mindestversion, empfohlen wird PHP 8.3. Die aktuelle Version siehst du unter „Werkzeuge > Website-Zustand“. Ein PHP-Wechsel ist ein eigener Schritt und sollte nicht gleichzeitig mit dem Core-Update passieren. Sonst weißt du im Fehlerfall nicht, was die Ursache war.

### 5. Nach dem Update gezielt testen

Klicke nicht nur die Startseite an. Prüfe die Punkte, an denen Geld oder Anfragen hängen: Kontaktformular abschicken, Testbestellung im Shop, Terminbuchung, Newsletter-Anmeldung. Öffne einen Beitrag im Editor und lade ein Bild hoch, um das iframe und die neue Medienverarbeitung zu testen. Schau außerdem in die Browser-Konsole und in das PHP-Fehlerprotokoll. Unsere [Checkliste für WordPress-Websites vor dem Launch](/blog/checkliste-wordpress-website-vor-launch-2026/) eignet sich gut als Vorlage für diesen Test.

### Sofort oder abwarten?

Für einfache Websites mit wenigen, gut gepflegten Plugins spricht wenig gegen ein zeitnahes Update nach dem Staging-Test. Bei komplexeren Seiten ist es vernünftig, die ersten Wartungsversionen abzuwarten, bis die großen Plugin-Hersteller nachgezogen haben. Sicherheitsupdates innerhalb der 7er-Reihe solltest du dagegen nie lange liegen lassen. Warum das so wichtig ist, haben wir im Beitrag [WordPress-Sicherheit 2026](/blog/wordpress-sicherheit-2026/) ausführlich beschrieben.

## Fazit: Ein Update für den Alltag, mit einer Hausaufgabe

WordPress 7.1 liefert wenige Schlagzeilen und macht die tägliche Arbeit trotzdem spürbar leichter. Wer seine Website selbst pflegt, gestaltet jetzt ohne CSS, justiert die mobile Ansicht nach, lädt Bilder zuverlässiger hoch und klärt Rückfragen direkt im Editor. Bleibt die Hausaufgabe mit dem Editor-iframe. Setzt du eigene Blöcke oder ältere Sonderlösungen ein, lass vor dem Update prüfen, ob alles mitspielt. Ein Test auf der Staging-Kopie ist allemal günstiger als ein Vormittag mit kaputtem Editor.

Bist du unsicher, ob deine Website bereit für WordPress 7.1 ist, oder gibst du das Update lieber ab, übernehmen wir das im Rahmen unserer [Wartung und Betreuung](/leistungen/wartung-support/) mit Backup, Staging-Test und Kontrolle danach. Und wenn du ohnehin über einen Neustart nachdenkst, findest du unter [Webdesign](/leistungen/webdesign/) mehr dazu, wie wir moderne WordPress-Websites aufbauen. Für eine kurze Einschätzung kannst du dich jederzeit über unsere [Kontaktseite](/kontakt/) melden.

## Häufige Fragen (FAQ)

<details>
<summary>Wann ist WordPress 7.1 erschienen?</summary>
<p>WordPress 7.1 mit dem Codenamen „Mary Lou“ wurde am 19. August 2026 veröffentlicht, zum Abschluss des WordCamp US in Phoenix. Benannt ist es nach der Jazzpianistin Mary Lou Williams.</p>
</details>

<details>
<summary>Was sind die wichtigsten Neuerungen in WordPress 7.1?</summary>
<p>Die wichtigsten Neuerungen sind Hover-, Fokus- und Aktiv-Stile für Buttons und Navigationslinks ohne CSS, eigene Stile für Tablet und Smartphone mit konfigurierbaren Breakpoints, die neuen Blöcke Tabs und Playlist, Bildverarbeitung im Browser vor dem Upload, ein neuer Bild-Editor sowie Notizen mit @Erwähnungen und E-Mail-Benachrichtigung.</p>
</details>

<details>
<summary>Ist die Echtzeit-Zusammenarbeit in WordPress 7.1 enthalten?</summary>
<p>Nein. Die gemeinsame Live-Bearbeitung wurde während der Entwicklung getestet, ist im finalen Release von WordPress 7.1 aber nicht aktiviert. Auch der geplante Inhaltsverzeichnis-Block fehlt noch.</p>
</details>

<details>
<summary>Kann das Update auf WordPress 7.1 meine Website beschädigen?</summary>
<p>Bei gut gepflegten Websites ist das Risiko gering. Kritisch sind vor allem selbst entwickelte Blöcke, ältere Sonderlösungen und Plugins, die den Editor verändern, weil der Beitragseditor jetzt immer in einem iframe läuft. Deshalb empfehlen wir <strong>Backup und Test auf einer Staging-Kopie</strong> vor dem Update.</p>
</details>

<details>
<summary>Welche PHP-Version braucht WordPress 7.1?</summary>
<p>Seit WordPress 7.0 ist PHP 7.4 die Mindestversion, empfohlen wird PHP 8.3. Die aktuelle Version findest du im WordPress-Backend unter „Werkzeuge &gt; Website-Zustand“.</p>
</details>

<details>
<summary>Betreffen die Neuerungen auch Websites mit Elementor?</summary>
<p>Teilweise. Die Design-Neuerungen wie responsive Stile und Hover-Zustände betreffen den Block-Editor. Die Medienverarbeitung im Browser und die Verbesserungen im Admin-Bereich wirken unabhängig vom Page-Builder. Vor dem Update solltest du prüfen, ob Elementor und alle Add-ons aktuell sind.</p>
</details>
