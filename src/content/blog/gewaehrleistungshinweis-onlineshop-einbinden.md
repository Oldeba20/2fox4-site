---
title: "Gewährleistungshinweis im Onlineshop einbinden: Anleitung für WooCommerce, Shopify und Shopware"
date: 2026-10-30
description: "Gewährleistungshinweis einbinden: wo der EU-Hinweis im Onlineshop hingehört, welche Darstellung sicher ist und wie du ihn in WooCommerce, Shopify und Shopware umsetzt."
cover:
  src: "/uploads/blog/gewaehrleistungshinweis-onlineshop-einbinden/cover.webp"
  alt: "Gewährleistungshinweis im Onlineshop einbinden: Webentwickler baut am Laptop den EU-Hinweis in den Checkout ein"
categories:
  - ecommerce
categoryNames:
  - "E-Commerce"
draft: false
seoTitle: "Gewährleistungshinweis einbinden: Anleitung für Shops"
seoDescription: "Gewährleistungshinweis im Onlineshop einbinden: sichere Platzierung, Datei, Mobilansicht und Bestellmail. Schritt für Schritt für WooCommerce, Shopify und Shopware."
---

Den Gewährleistungshinweis im Onlineshop einzubinden, klingt nach fünf Minuten Arbeit: Grafik hochladen, fertig. In der Praxis tauchen dann schnell Fragen auf, die das Gesetz nicht eindeutig beantwortet. Reicht ein Link im Footer? Muss die Grafik auf jede Produktseite? Was passiert auf dem Smartphone? Und wie kommt der Hinweis in die Bestellbestätigung? Wir zeigen dir, welche Variante wir für die sicherste halten und wie du sie in WooCommerce, Shopify und Shopware Schritt für Schritt umsetzt.

> **Kurz gesagt:** Seit dem 27. September 2026 muss jeder Shop, der Waren an Verbraucher verkauft, den harmonisierten EU-Gewährleistungshinweis zeigen. Die sicherste Umsetzung ist die farbige Originalgrafik, unverändert und ohne Vergrößern lesbar, direkt im Warenkorb oder Checkout vor dem Bestellbutton. Ein Link oder ein Footer-Eintrag allein ist umstritten. Zusätzlich empfehlen wir, den Hinweis als PDF an die Bestellbestätigung zu hängen. In Shopware ist eine Funktion ab Version 6.7.14 eingebaut, in WooCommerce und Shopify ist meist etwas Handarbeit im Theme nötig.

Welche neuen Pflichten 2026 sonst noch auf Shops zukommen, haben wir im Überblick [Onlineshop rechtssicher: Die neuen Pflichten 2026](/blog/onlineshop-rechtssicher-neue-pflichten-2026/) zusammengefasst. Hier geht es nur um eine Frage: Wie bekommst du den Gewährleistungshinweis sauber in deinen Shop?

## Was ist der Gewährleistungshinweis genau?

Der Gewährleistungshinweis ist eine von der EU vorgegebene Grafik, die Verbraucher über ihr gesetzliches Recht auf Gewährleistung von mindestens zwei Jahren informiert. Offiziell heißt er „harmonisierte Mitteilung“. Aussehen, Texte und Farben legt die [Durchführungsverordnung (EU) 2025/1960](https://eur-lex.europa.eu/eli/reg_impl/2025/1960/oj?locale=de) der Kommission vom 25. September 2025 fest. Die Grafik enthält einen QR-Code, der zum EU-Portal „Ihr Europa“ mit Informationen zu Verbraucherrechten führt.

Wichtig für die Umsetzung: Am Gewährleistungshinweis darfst du nichts verändern. Laut der Übersicht der [IHK Berlin](https://www.ihk.de/berlin/service-und-beratung/innovation/product-compliance/muster-garantielabel-7186302) ist kein einziges Element editierbar. Du darfst ihn also nicht in deinen Shopfarben nachbauen, nicht kürzen, nicht quer statt hoch anordnen und nicht als HTML-Text nachschreiben. Im Onlineshop muss er farbig sein. Die Schwarz-Weiß-Fassung ist nur für den Aushang im Laden gedacht.

Davon zu unterscheiden ist das Garantielabel, oft „GARAN-Label“ genannt. Es betrifft nur Produkte, für die der Hersteller eine kostenlose Haltbarkeitsgarantie von mehr als zwei Jahren gibt. Viele kleine Shops brauchen es gar nicht. Wir gehen weiter unten kurz darauf ein.

## Wo muss der Gewährleistungshinweis im Onlineshop stehen?

Hier wird es unbequem, denn die Fachleute sind sich nicht einig. Die EU-Vorgaben verlangen, dass der Hinweis „in hervorgehobener Weise“ erscheint, und zwar bevor der Kunde seine Bestellung abschickt. Eine konkrete Stelle im Shop nennen sie nicht.

Die EU-Kommission hat dazu 2026 praktische Leitlinien veröffentlicht. Darin hält sie eine verschachtelte Darstellung für möglich: ein eindeutig benannter Link, etwa „Ihre gesetzlichen Gewährleistungsrechte“, der die Grafik erst beim Anklicken in voller Größe öffnet. Der Haken: Verbindlich sind diese Leitlinien nicht. Gerichte müssen sich nicht daran halten.

Die [IT-Recht Kanzlei](https://www.it-recht-kanzlei.de/gewaehrleistung-label-leitlinien-geschachtelt.html) und der Händlerbund sehen das deutlich strenger. Ihr Argument: Die Verordnung erlaubt die verschachtelte Darstellung ausdrücklich nur beim freiwilligen Garantielabel, nicht beim Pflichthinweis zur Gewährleistung. Nach dieser Lesart muss die Grafik direkt sichtbar sein, ohne Klick und ohne Mouseover. Nur das bietet laut Händlerbund vollständige Rechtssicherheit. Einige IHKs sind großzügiger. Sie halten einen allgemeinen Hinweis auf der Website für ausreichend, ein Link im Footer dürfte demnach genügen. Die sichtbare Grafik sehen aber auch sie als die sicherere Lösung.

Immerhin in einem Punkt herrscht Einigkeit: Ein Satz in den AGB reicht nicht. Auch ein eingeklapptes Dropdown-Menü dürfte nicht genügen.

| Platzierung | Einschätzung | Aufwand |
|---|---|---|
| Grafik direkt im Warenkorb oder Checkout, vor dem Bestellbutton | sicherste Variante, von allen Seiten akzeptiert | gering bis mittel |
| Grafik auf jeder Produktseite | ebenfalls sicher, belastet aber die Produktseite | mittel |
| Link oder Icon, das die Grafik per Klick öffnet | laut EU-Leitlinien möglich, von Kanzleien als riskant eingestuft | gering |
| Nur ein Link im Footer oder auf einer Infoseite | umstritten, als alleinige Lösung nicht empfehlenswert | sehr gering |
| Nur ein Satz in den AGB | reicht nicht | entfällt |

Unsere Empfehlung für die meisten Shops: Die Originalgrafik einmal zentral im Warenkorb oder Checkout zeigen, gut sichtbar oberhalb des Buttons „Zur Kasse“ bzw. „Zahlungspflichtig bestellen“. Zusätzlich eine Infoseite „Gesetzliche Gewährleistung“ mit Link im Footer. Das kostet kaum Mehraufwand und deckt auch die strengere Auslegung ab. Eine Einschränkung gehört dazu: Wir sind keine Anwälte. Wenn du in deinem Shop eine andere Lösung wählst, sprich das mit deinem Händlerverband oder einer Anwältin ab.

![Gewährleistungshinweis einbinden: Wo der EU-Hinweis im Onlineshop sicher steht, vom Footer-Link bis zum Checkout](/uploads/blog/gewaehrleistungshinweis-onlineshop-einbinden/platzierung.webp)

## Was brauchst du, bevor du anfängst?

Bevor du ins Theme gehst, lohnt sich eine kurze Vorbereitung. Sie erspart dir später Ärger mit falschen Dateien oder verpixelten Grafiken.

**Die richtige Datei.** Die Kommission stellt den Hinweis in allen 24 EU-Amtssprachen bereit, als PDF, als JPG/PNG und als SVG. Die IHK Berlin verlinkt die Pakete direkt. Für deinen Shop brauchst du die deutsche Farbfassung. Wenn du mehrsprachig verkaufst, nimm für jede Shopsprache die passende Version.

**Eine weboptimierte Fassung.** Die Originaldateien sind für den Druck gedacht. Für den Shop brauchst du eine Grafik von etwa 1.000 bis 1.300 Pixeln Breite, idealerweise als WebP. Achtung bei der SVG: Sie hat einen transparenten Hintergrund. Wandelst du sie ohne weißen Hintergrund in ein anderes Format um, wird der Hintergrund schnell schwarz und der Hinweis ist kaum noch lesbar. Genau das haben wir bei einem Kundenshop selbst erlebt. Schau dir das Ergebnis nach dem Export also immer an und prüfe, ob sich der QR-Code mit dem Handy scannen lässt.

**Eine PDF-Fassung.** Für die Bestellbestätigung brauchst du zusätzlich eine PDF-Datei. Die gibt es im offiziellen Paket schon fertig.

**Ein Testzugang.** Arbeite, wenn möglich, auf einer Staging-Kopie deines Shops. Mindestens solltest du vorher ein Backup ziehen und einen günstigen Testartikel bereithalten, mit dem du den Checkout durchklicken kannst.

## Wie groß und wie sichtbar muss der Hinweis sein?

Für den Aushang im Ladengeschäft gilt A4 als Mindestgröße. Für die Online-Darstellung gibt es keine feste Mindestgröße. Entscheidend ist, dass die Inhalte ohne Vergrößern lesbar sind. Ein winziges Vorschaubild, das man erst anklicken muss, um etwas zu erkennen, reicht nach Einschätzung der IT-Recht Kanzlei nicht.

In der Praxis heißt das: Am Desktop sollte die Grafik im Checkout mindestens so breit sein wie die Spalte mit der Bestellübersicht. Auf dem Smartphone darf sie laut IT-Recht Kanzlei an die kleinere Bildschirmbreite angepasst werden, sie muss aber vollständig zu sehen sein. Teste das auf einem echten Gerät, nicht nur in der Entwickleransicht des Browsers.

Drei Details, die wir in Shops oft korrigieren:

- **Dunkle Themes:** Die Grafik bleibt farbig und unverändert. Setze sie auf eine helle Fläche oder in einen hellen Kasten, statt sie einzufärben.
- **Alternativtext:** Gib der Grafik einen beschreibenden Alt-Text, etwa „EU-Hinweis zur gesetzlichen Gewährleistung von mindestens zwei Jahren“. Ergänze darunter einen Textlink zur Seite des EU-Portals in deiner Sprache. So erreichen die Informationen auch Menschen mit Screenreader. Mit Blick auf das Barrierefreiheitsstärkungsgesetz ist das ohnehin sinnvoll.
- **Ladezeit:** Lade die Grafik als komprimiertes WebP, nicht als mehrere Megabyte großes PNG. Im Checkout zählt jede Sekunde.

## Gewährleistungshinweis in WooCommerce einbinden

In WooCommerce führen mehrere Wege zum Ziel. Prüfe zuerst, ob dein Rechtstext- oder Germanized-Plugin in der aktuellen Version schon eine eigene Funktion anbietet und wo genau sie den Hinweis ausgibt. Wenn du dort nichts Passendes findest oder mehr Kontrolle willst, ist ein kleines eigenes Plugin die sauberste Lösung. So haben wir es bei Kundenshops umgesetzt:

1. **Grafik und PDF ins Plugin legen.** Lege einen Ordner `assets` im Plugin an und speichere dort WebP und PDF. So hängt nichts an der Mediathek und alles übersteht Theme-Updates.
2. **Hinweis im Checkout ausgeben.** Über den Hook `woocommerce_review_order_before_submit` erscheint die Grafik direkt über dem Bestellbutton. Nutzt du Germanized, gibt es dafür einen eigenen Hook. Ein kleiner Schutz im Code verhindert, dass der Hinweis doppelt erscheint, wenn beide Hooks greifen.
3. **Infoseite anlegen.** Ein Shortcode gibt dieselbe Grafik auf einer Seite „Gesetzliche Gewährleistung“ aus. Diese Seite verlinkst du im Footer, neben Widerrufsbelehrung und AGB.
4. **PDF an die Bestellmail hängen.** Mit dem Filter `woocommerce_email_attachments` hängst du die PDF an die Mails, die der Kunde nach der Bestellung bekommt, zum Beispiel an die Bestellbestätigung.
5. **Bildoptimierer prüfen.** Plugins, die Bilder über ein CDN ausliefern, etwa Jetpack, schreiben Bild-URLs manchmal um. Dann lädt die Grafik im Checkout nicht. Schließe den Plugin-Ordner in diesem Fall von der Optimierung aus.

Wenn du lieber ohne Code arbeitest, geht auch ein Block oder ein HTML-Widget im Checkout-Template deines Pagebuilders. Achte dann darauf, dass Elementor, Divi oder der Theme-Builder wirklich das Template nutzen, das im Shop ausgeliefert wird. Wir sehen regelmäßig Shops, in denen der Hinweis am Desktop erscheint und auf dem Smartphone nicht, weil ein anderes Template greift.

## Gewährleistungshinweis in Shopify einbinden

In Shopify hängt der Weg davon ab, welchen Tarif du nutzt. Der Checkout selbst lässt sich nur mit Shopify Plus über Checkout-Erweiterungen anpassen. In allen anderen Tarifen ist der Warenkorb die richtige Stelle.

So gehst du vor:

1. Lade die WebP-Grafik unter Inhalte > Dateien hoch und kopiere die URL.
2. Öffne im Theme-Editor die Warenkorbseite und füge einen Abschnitt „Bild“ oder „Benutzerdefiniertes Liquid“ oberhalb des Buttons „Zur Kasse“ ein. Bindet dein Theme einen seitlichen Mini-Warenkorb ein, über den Kunden direkt zur Kasse springen können, braucht auch dieser den Hinweis.
3. Mit Shopify Plus kannst du den Hinweis zusätzlich als Checkout-Erweiterung direkt vor dem Bezahlschritt platzieren.
4. Lege eine Seite „Gesetzliche Gewährleistung“ an und verlinke sie im Footer-Menü.
5. Ergänze in der Vorlage für die Bestellbestätigung unter Einstellungen > Benachrichtigungen einen gut sichtbaren Hinweis mit Link auf die PDF.

Im Shopify App Store gibt es inzwischen auch Apps, die Gewährleistungshinweis und Garantielabel ausspielen. Prüfe vor der Installation, wo genau die App den Hinweis anzeigt und ob sie dafür nur ein Icon mit Klick nutzt. Falls ja, landest du wieder bei der umstrittenen verschachtelten Variante.

## Gewährleistungshinweis in Shopware einbinden

Shopware-Nutzer haben es am leichtesten. Laut einer Anleitung der Shopware-Agentur [Xictron](https://www.xictron.com/de/blog/gewaehrleistungshinweis-pflicht-shopware-umsetzen-2026/) bringt Shopware ab Version 6.7.14 eine eigene Funktion mit. Du aktivierst sie unter Einstellungen > Warenkorb-Einstellungen > Checkout. Shopware liefert den Hinweis in allen EU-Amtssprachen aus und richtet sich automatisch nach der Sprache der Storefront. Für andere Sprachen greift die englische Fassung.

Zwei Haken gibt es trotzdem. Standardmäßig zeigt Shopware im Checkout einen Link neben der AGB-Checkbox, der den Hinweis in einem Dialog öffnet. Das entspricht der Lesart der EU-Leitlinien, nicht der strengeren Sicht der Kanzleien. Wer auf Nummer sicher gehen will, ergänzt per Template-Anpassung die Grafik direkt sichtbar im Warenkorb. Außerdem passt Shopware die Bestellbestätigung nur an, wenn du die Mail-Vorlage nie verändert hast. Bei individuellen Vorlagen musst du den Hinweis selbst ergänzen.

## Muss der Hinweis auch in die Bestellbestätigung?

Die Verordnung selbst sagt dazu nichts. Nach deutschem Recht musst du dem Kunden aber nach Vertragsschluss die vorvertraglichen Pflichtinformationen auf einem dauerhaften Datenträger zur Verfügung stellen, spätestens bei Lieferung der Ware. Das steht in § 312f Abs. 2 BGB. Ob der Gewährleistungshinweis dazugehört und in welcher Form, ist noch nicht geklärt.

Wir empfehlen deshalb, die PDF-Fassung an die Bestellbestätigung zu hängen. Das ist mit wenigen Zeilen Code oder einer Plugin-Einstellung erledigt und schließt eine mögliche Lücke. Wer seine Bestellmails ohnehin überarbeitet, kann bei der Gelegenheit gleich prüfen, ob der [Widerrufsbutton](/blog/widerrufsbutton-pflicht-onlineshop-2026/) dort richtig verlinkt ist.

## Was gilt für das Garantielabel?

Das Garantielabel brauchst du nur, wenn der Hersteller für ein Produkt eine kostenlose Haltbarkeitsgarantie von mehr als zwei Jahren gibt und dir diese Information bereitstellt. Recherchieren musst du das nicht selbst. Anders als der Gewährleistungshinweis ist das Label produktbezogen und gehört im Onlineshop direkt neben das Produktbild. Es ersetzt den Gewährleistungshinweis nicht, sondern kommt zusätzlich dazu.

Hier ist die verschachtelte Darstellung ausdrücklich erlaubt. Es genügt eine Kurzfassung, die beim ersten Klick, beim ersten Mouseover oder beim ersten Antippen auf dem Touchscreen das vollständige Label zeigt. Einige Felder darfst du anpassen: die Garantiedauer in Jahren, Marke und Modellbezeichnung. Technisch heißt das: Du brauchst ein Produktfeld für die Garantiedauer und ein Template, das das Label nur bei Produkten mit diesem Feld ausgibt.

## Wie gehst du Schritt für Schritt vor?

Egal welches Shopsystem du nutzt, die Reihenfolge ist immer dieselbe. Plane dafür bei einem gepflegten Shop einen halben bis einen Arbeitstag ein, inklusive Test.

![Gewährleistungshinweis im Onlineshop einbinden in sechs Schritten: Datei, Platzierung, Mobilansicht, Infoseite, Bestellmail, Test](/uploads/blog/gewaehrleistungshinweis-onlineshop-einbinden/ablauf.webp)

1. **Datei besorgen und aufbereiten:** deutsche Farbfassung, weboptimiert, weißer Hintergrund, QR-Code geprüft.
2. **Platzierung festlegen:** Grafik direkt sichtbar im Warenkorb oder Checkout, vor dem Bestellbutton.
3. **Mobil prüfen:** Grafik vollständig sichtbar, nicht abgeschnitten, nicht in einem Akkordeon versteckt.
4. **Infoseite und Footer-Link anlegen:** Seite „Gesetzliche Gewährleistung“ neben den anderen Rechtstexten.
5. **Bestellmail ergänzen:** PDF anhängen oder deutlich verlinken.
6. **Testkauf durchspielen:** Testartikel in den Warenkorb, Checkout am Desktop und am Smartphone durchgehen, Screenshots ablegen, Warenkorb wieder leeren.

Die Screenshots sind kein Selbstzweck. Kommt in einem Jahr eine Abmahnung oder eine Nachfrage, kannst du belegen, wann und wie du den Hinweis eingebaut hast.

## Welche Fehler sehen wir bei der Umsetzung am häufigsten?

Bei den Shops, die wir uns seit Ende September angesehen haben, tauchen immer wieder dieselben Muster auf. Absicht steckt selten dahinter. Meist musste einfach schnell eine Lösung her.

**Der Hinweis wurde nachgebaut.** Statt der Originalgrafik steht ein eigener Kasten im Shopdesign mit ähnlichem Text. Das ist nicht erlaubt, auch wenn es hübscher aussieht.

**Der Hinweis wurde zugeschnitten.** Manche verwenden nur den oberen Teil als kleines Badge oder schneiden den Bereich mit dem Garantie-Bezug weg, weil sie keine Garantie anbieten. Auch das ist eine unzulässige Veränderung.

**Der Hinweis ist nur am Desktop sichtbar.** Ein Template für mobile Geräte oder ein ausgeblendeter Bereich lässt ihn auf dem Smartphone verschwinden. Dabei kauft gerade dort ein großer Teil der Kunden.

**Der Hinweis steht unter dem Bestellbutton.** Technisch ist er da, aber der Kunde hat zu diesem Zeitpunkt schon geklickt. Er gehört davor.

**Die Grafik lädt nicht.** Ein Bildoptimierer, ein Cache oder ein falscher Pfad sorgt dafür, dass im Checkout nur ein leerer Rahmen erscheint. Deshalb gehört nach jeder Änderung ein Test im privaten Browserfenster dazu.

## Fazit: Einmal sauber einbauen, dann ist Ruhe

Den Gewährleistungshinweis einzubinden, ist keine große Aufgabe. Du musst nur ein paar Regeln beachten: Originalgrafik in Farbe, unverändert, gut lesbar, direkt sichtbar vor dem Bestellbutton und auch auf dem Smartphone vollständig zu sehen. Dazu eine Infoseite im Footer und die PDF an der Bestellbestätigung. So bist du auch dann auf der sicheren Seite, wenn sich die strengere Auslegung durchsetzt. Und solange kein Gericht entschieden hat, ist das schlicht die vernünftigste Wahl.

Wenn du keine Zeit hast, dich durch Templates und Hooks zu arbeiten, übernehmen wir das gern für dich. Wir bauen den Hinweis in WooCommerce, Shopify oder Shopware so ein, dass er Theme-Updates übersteht, und prüfen dabei gleich die übrigen Pflichtangaben im Checkout. Mehr dazu findest du bei unseren Leistungen rund um [Webdesign und Onlineshops](/leistungen/webdesign/), oder du schreibst uns direkt über das [Kontaktformular](/kontakt/).

## Häufige Fragen (FAQ)

<details>
<summary>Reicht ein Link im Footer für den Gewährleistungshinweis?</summary>
<p>Als alleinige Lösung empfehlen wir das nicht. Einige IHKs halten einen allgemeinen Hinweis auf der Website für ausreichend, Kanzleien und der Händlerbund verlangen eine direkt sichtbare Grafik vor der Bestellung. Am sichersten ist die Originalgrafik im Warenkorb oder Checkout, der Footer-Link kommt zusätzlich dazu.</p>
</details>

<details>
<summary>Darf der Gewährleistungshinweis an das Shopdesign angepasst werden?</summary>
<p>Nein. Kein Element des harmonisierten Hinweises ist veränderbar. Du darfst ihn nicht umfärben, kürzen, zuschneiden oder als eigenen Text nachbauen. Im Onlineshop muss er farbig sein. Auf dem Smartphone darfst du die Größe an die Bildschirmbreite anpassen.</p>
</details>

<details>
<summary>Muss der Gewährleistungshinweis auf jede Produktseite?</summary>
<p>Nein, das ist nicht nötig. Es genügt eine zentrale, gut sichtbare Platzierung, die der Kunde vor dem Absenden der Bestellung sieht, zum Beispiel im Warenkorb oder im Checkout direkt über dem Bestellbutton. Nur das Garantielabel gehört neben das jeweilige Produktbild.</p>
</details>

<details>
<summary>Wo gibt es die offizielle Datei für den Gewährleistungshinweis?</summary>
<p>Die EU-Kommission stellt den Hinweis in allen 24 Amtssprachen als PDF, JPG/PNG und SVG bereit. Die IHKs, zum Beispiel die <a href="https://www.ihk.de/berlin/service-und-beratung/innovation/product-compliance/muster-garantielabel-7186302">IHK Berlin</a>, verlinken die Pakete direkt. Für den Shop nimmst du die deutsche Farbfassung.</p>
</details>

<details>
<summary>Muss der Gewährleistungshinweis auch per E-Mail verschickt werden?</summary>
<p>Das ist rechtlich noch nicht geklärt. Weil vorvertragliche Informationen nach § 312f BGB auf einem dauerhaften Datenträger bereitgestellt werden müssen, empfehlen wir, die PDF-Fassung an die Bestellbestätigung zu hängen. Der Aufwand ist gering.</p>
</details>

<details>
<summary>Brauchst du zusätzlich das Garantielabel?</summary>
<p>Nur wenn der Hersteller für ein Produkt eine kostenlose Haltbarkeitsgarantie von mehr als zwei Jahren gibt und dir diese Information bereitstellt. Dann gehört das Label neben das Produktbild, zusätzlich zum Gewährleistungshinweis. Eine aufklappbare Kurzfassung ist dabei erlaubt.</p>
</details>
