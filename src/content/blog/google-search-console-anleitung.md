---
title: "Google Search Console 2026: Die Anleitung für KMU, inklusive KI-Bericht"
date: 2026-11-10
description: "Google Search Console einfach erklärt: einrichten, die wichtigsten Berichte lesen, den neuen KI-Bericht nutzen und in 20 Minuten im Monat die richtigen Schlüsse für deine Website ziehen."
cover:
  src: "/uploads/blog/google-search-console-anleitung/cover.webp"
  alt: "Google Search Console: Handwerksmeister prüft frühmorgens am Laptop die Suchdaten seiner Website"
categories:
  - seo
categoryNames:
  - "SEO"
draft: false
seoTitle: "Google Search Console 2026: Anleitung für KMU"
seoDescription: "Google Search Console einrichten und verstehen: Leistungsbericht, Indexierung, Core Web Vitals und der neue KI-Bericht. Mit Monatsroutine für kleine Betriebe."
---

Wie steht deine Website eigentlich bei Google da? Die meisten Unternehmer, mit denen wir sprechen, können das nur schätzen. Dabei gibt es ein Werkzeug, in dem Google dir das selbst sagt: die Google Search Console. Sie ist kostenlos, braucht keine Programmierkenntnisse und beantwortet die Fragen, die sich jeder Betrieb mit Website stellt: Wer findet uns über welche Suchbegriffe? Kennt Google alle wichtigen Seiten? Gibt es technische Probleme, die Kunden vergraulen? Seit 2026 kommt eine vierte Frage dazu, und die ist neu: Tauchen unsere Seiten in den KI-Antworten von Google auf? In dieser Anleitung zeigen wir dir, wie du die Search Console einrichtest, welche Berichte für kleine und mittlere Unternehmen zählen und wie du mit 20 Minuten im Monat erfährst, wo deine Website bei Google wirklich steht.

> **Kurz gesagt:** Die Google Search Console ist ein kostenloser Dienst von Google, der zeigt, wie oft deine Seiten in der Suche erscheinen, wie oft sie angeklickt werden und ob Google sie überhaupt aufnehmen kann. Richte eine Domain-Property über einen DNS-Eintrag ein, reiche deine Sitemap ein und schau einmal im Monat in vier Berichte: Leistung, Seitenindexierung, Core Web Vitals und den neuen Bericht zu generativen KI-Funktionen. Der KI-Bericht zeigt seit Sommer 2026 Impressionen in AI Overviews und im KI-Modus, aber keine Klicks und keine Suchbegriffe.

## Was ist die Google Search Console?

Die Google Search Console ist eine kostenlose Plattform, mit der Website-Betreiber die Präsenz ihrer Seiten in der Google-Suche überwachen und Probleme erkennen. Früher hieß sie Google Webmaster Tools. Der Name hat sich geändert, das Prinzip nicht: Google stellt dir Daten zur Verfügung, die es nur bei Google gibt.

Der Unterschied zu Google Analytics oder einem datenschutzfreundlichen Statistik-Tool ist wichtig. Analytics misst, was Besucher auf deiner Website tun, nachdem sie angekommen sind. Die Search Console misst, was vorher passiert: in der Suche, bei Google. Wie oft wurde deine Seite angezeigt? Bei welchem Suchbegriff? Auf welcher Position? Wurde sie angeklickt oder hat der Nutzer etwas anderes gewählt? Diese Daten bekommst du nirgendwo sonst aus erster Hand. Externe SEO-Tools schätzen solche Werte, die Search Console misst sie. Ob sich daneben ein bezahltes SEO-Tool für deinen Betrieb lohnt, haben wir im Beitrag [SEO-Tools für kleine Unternehmen](/blog/seo-tools-kleine-unternehmen/) durchgerechnet.

Ein zweiter Vorteil für kleine Betriebe: Die Search Console setzt keine Cookies auf deiner Website und braucht kein Tracking-Skript. Sie wertet Daten aus, die bei Google ohnehin entstehen. Für den Cookie-Banner ändert sie also nichts.

## Search Console einrichten: So geht es in fünf Schritten

Die Einrichtung dauert selten länger als eine halbe Stunde. Den größten Teil davon wartest du darauf, dass ein DNS-Eintrag wirkt.

![Google Search Console einrichten in fünf Schritten: Domain-Property, DNS-Bestätigung, Sitemap, Nutzer, Monatsroutine](/uploads/blog/google-search-console-anleitung/einrichtung.webp)

**1. Google-Konto wählen.** Nimm ein Konto, das dem Betrieb gehört, nicht das private Konto einer Mitarbeiterin oder deiner Agentur. Wer die Property besitzt, entscheidet später, wer Zugriff bekommt. Wir erleben regelmäßig, dass ein Betrieb nach dem Wechsel der Webagentur keinen Zugang mehr zu seinen eigenen Suchdaten hat.

**2. Domain-Property anlegen.** Die Search Console kennt zwei Arten von Properties. Eine Domain-Property umfasst alles unter deiner Domain: mit und ohne www, http und https, alle Subdomains. Eine URL-Präfix-Property gilt nur für genau eine Schreibweise. Für KMU ist die Domain-Property fast immer die richtige Wahl, weil dir sonst Daten durch die Lappen gehen.

**3. Inhaberschaft per DNS bestätigen.** Google gibt dir einen TXT-Eintrag, den du bei deinem Hoster in die DNS-Einstellungen der Domain einträgst. Bei den meisten deutschen Hostern findest du das im Kundenmenü unter „DNS“ oder „Domain-Einstellungen“. Nach dem Speichern dauert es meist Minuten, manchmal einige Stunden, bis Google den Eintrag sieht. Lösche diesen Eintrag später nicht, sonst verlierst du die Bestätigung.

**4. Sitemap einreichen.** Eine XML-Sitemap ist eine Liste aller Seiten, die Google kennen soll. WordPress erzeugt sie automatisch, SEO-Plugins wie Rank Math oder Yoast ebenfalls. Die Adresse lautet meist `/sitemap_index.xml` oder `/sitemap.xml`. Unter „Sitemaps“ trägst du sie ein und siehst danach, wie viele Adressen Google daraus gelesen hat.

**5. Nutzer hinzufügen.** Unter „Einstellungen“ und „Nutzer und Berechtigungen“ gibst du deiner Agentur oder einer Kollegin Zugriff. Vergib die Berechtigung „Uneingeschränkt“ statt „Inhaber“, wenn die Person nur arbeiten, aber keine weiteren Nutzer verwalten soll.

Ein Hinweis zur Geduld: Je nach Website siehst du im Leistungsbericht sofort Zahlen aus den letzten Monaten, oder es dauert einige Tage, bis die ersten Daten erscheinen. Beides ist normal.

## Welche Berichte zählen für kleine Unternehmen wirklich?

Die Search Console hat über ein Dutzend Berichte. Für einen Handwerksbetrieb, eine Steuerkanzlei oder einen kleinen Onlineshop reichen vier, um 90 Prozent der wichtigen Fragen zu klären. Den Rest brauchst du nur, wenn ein Problem auftaucht.

| Bericht | Welche Frage er beantwortet | Wie oft anschauen |
|---|---|---|
| Leistung (Suchergebnisse) | Wer findet uns über welche Begriffe, und wird geklickt? | monatlich |
| Seitenindexierung | Hat Google alle wichtigen Seiten aufgenommen? | monatlich und nach Änderungen |
| Core Web Vitals | Lädt die Seite schnell und ruhig, vor allem mobil? | vierteljährlich |
| Generative KI-Funktionen | Erscheinen unsere Seiten in AI Overviews und im KI-Modus? | monatlich |
| URL-Prüfung | Was weiß Google über genau diese eine Seite? | bei Bedarf |
| Sicherheit und manuelle Maßnahmen | Gibt es eine Strafe oder einen Hack? | bei E-Mail-Warnung |

![Google Search Console Berichte im Überblick: Leistung, Seitenindexierung, Core Web Vitals und KI-Funktionen](/uploads/blog/google-search-console-anleitung/berichte.webp)

## Den Leistungsbericht richtig lesen

Mit dem Leistungsbericht arbeitest du am häufigsten. Hier lohnt es sich, einmal genau hinzuschauen. Er zeigt vier Kennzahlen, die du verstehen solltest.

**Impressionen** sind die Zahl der Male, die eine Seite von dir in einem Suchergebnis angezeigt wurde. Ob der Nutzer bis zu deinem Eintrag gescrollt hat, spielt dabei in der Regel keine Rolle. **Klicks** zählen, wie oft jemand auf dein Ergebnis geklickt hat und zu dir kam. Die **CTR** (Klickrate) ist Klicks geteilt durch Impressionen. Die **durchschnittliche Position** zeigt, wo dein bestes Ergebnis im Mittel stand.

Zwei Punkte führen in der Praxis oft zu Missverständnissen. Erstens ist die durchschnittliche Position ein Mittelwert über alle Suchanfragen. Steht eine Seite bei einem Begriff auf Platz 2 und bei einem anderen auf Platz 40, kommt ein Wert heraus, der keiner Realität entspricht. Mit so einer Zahl kannst du nichts anfangen. Schau dir Positionen deshalb immer pro Suchbegriff an. Zweitens bewahrt die Search Console nur die letzten 16 Monate auf. Wer Jahresvergleiche über längere Zeiträume braucht, sollte die Daten regelmäßig exportieren. In der Oberfläche sind Tabellen dabei auf 1.000 Zeilen begrenzt, für kleine Websites reicht das meistens.

### Drei Filter, die sofort helfen

**Markenbegriffe ausblenden.** Seit März 2026 sortiert die Search Console Suchanfragen für alle geeigneten Websites automatisch in Marken- und Nicht-Marken-Anfragen. Wer nach „Tischlerei Müller“ sucht, kennt dich schon. Spannend sind die Menschen, die nach „Einbauschrank nach Maß“ suchen und bei dir landen. Der Filter funktioniert laut Google nur für Properties auf oberster Ebene, nicht für Unterverzeichnisse oder Subdomains.

**Seiten statt Suchbegriffe.** Wechsle oben auf den Reiter „Seiten“. So siehst du, welche Unterseiten überhaupt Besucher aus der Suche bekommen. Bei vielen KMU-Websites tragen zwei, drei Seiten fast den gesamten Verkehr, und die Leistungsseiten, die eigentlich Aufträge bringen sollen, tauchen kaum auf. Genau das solltest du wissen, bevor du die nächste Überarbeitung planst.

**Vergleichen statt staunen.** Mit „Datum“ und „Vergleichen“ stellst du die letzten drei Monate dem Vorjahreszeitraum gegenüber. Saisonale Betriebe wie ein Gartenbauer oder ein Heizungsinstallateur sehen nur so, ob ein Rückgang im Januar normal ist oder ein echtes Problem.

### Fragen statt Filter bauen

Ende 2025 hat Google im Leistungsbericht eine KI-gestützte Konfiguration vorgestellt, seit Februar 2026 steht sie allen zur Verfügung. Du beschreibst in normaler Sprache, was du sehen willst, etwa „Klicks der letzten 28 Tage auf Mobilgeräten für Seiten mit /leistungen/ im Vergleich zum Vormonat“, und die Search Console stellt Filter und Vergleich ein. Das spart Klickerei. Allerdings bezeichnet Google die Funktion als experimentell. Prüfe deshalb, ob die gesetzten Filter wirklich deiner Frage entsprechen, bevor du Schlüsse ziehst. Sie funktioniert nur im Bericht für Suchergebnisse, nicht für Discover oder News.

Unscheinbar, aber im Alltag sehr praktisch sind die Anmerkungen im Diagramm, die Google im November 2025 eingeführt hat. Trage dort ein, wann du die Website umgebaut, ein neues Angebot veröffentlicht oder ein Plugin gewechselt hast. Ein halbes Jahr später weißt du sonst nicht mehr, warum die Kurve im März nach oben ging.

### Die CTR-Lücke als Quick Win

Der vielleicht nützlichste Trick für kleine Websites: Sortiere die Suchbegriffe nach Impressionen und suche nach Einträgen mit vielen Impressionen, durchschnittlicher Position zwischen 3 und 10 und auffällig niedriger Klickrate. Diese Seiten sieht Google als relevant an, aber die Menschen klicken nicht. Woran liegt das? Oft an einem nichtssagenden Seitentitel oder einer automatisch erzeugten Beschreibung. Ein besserer Titel mit dem Nutzen für den Kunden kostet zehn Minuten. Das Ranking bleibt dabei gleich, die Klicks können trotzdem spürbar steigen.

## Seitenindexierung: Ist alles bei Google angekommen?

Indexierung bedeutet, dass Google eine Seite gespeichert hat und sie in den Suchergebnissen zeigen kann. Was nicht im Index ist, kann nicht gefunden werden, egal wie gut der Text ist.

Der Bericht „Seitenindexierung“ teilt deine Adressen in indexiert und nicht indexiert und nennt für Letztere einen Grund. Viele Gründe sind harmlos und sogar gewollt: Weiterleitungen, Seiten mit einem Canonical-Verweis auf eine andere Adresse oder bewusst ausgeschlossene Seiten wie der Warenkorb. Lass dich von einer hohen Zahl also nicht erschrecken. Das sieht auf fast jeder Website so aus.

Aufmerksam solltest du bei zwei Meldungen werden, die sinngemäß „Gecrawlt, aber zurzeit nicht indexiert“ und „Gefunden, aber zurzeit nicht indexiert“ heißen. Steht dort eine deiner Leistungsseiten oder ein wichtiger Blogbeitrag, hält Google die Seite entweder für zu dünn, zu ähnlich zu anderen Seiten oder schlicht für nicht wichtig genug. Die Lösung ist fast nie technisch. Meistens hilft es, die Seite inhaltlich zu stärken und sie von anderen Seiten deiner Website aus zu verlinken.

Auch Fehler mit dem Status 404, also „Seite nicht gefunden“, sind laut Google für sich genommen kein Problem für das Ranking. Wichtig werden sie erst, wenn eine Adresse betroffen ist, die früher Besucher hatte oder von außen verlinkt ist. Dann gehört eine Weiterleitung auf die passende neue Seite her. Genau das passiert häufig nach einem Relaunch. Wie du das von Anfang an vermeidest, steht in unserer [SEO-Checkliste für den Website-Relaunch](/blog/website-relaunch-seo-checkliste-ohne-ranking-verlust/).

### Die URL-Prüfung für den Einzelfall

Oben in der Search Console steht ein Suchfeld. Gibst du dort eine Adresse deiner Website ein, zeigt die URL-Prüfung, ob die Seite im Index ist, wann Google sie zuletzt besucht hat und welche Adresse Google als Hauptversion betrachtet. Nach einer größeren Überarbeitung kannst du hier die „Indexierung beantragen“. Das ist kein Turbo und keine Garantie, aber ein Hinweis an Google, die Seite bald erneut zu besuchen. Für hunderte Seiten ist das nichts, für die eine neue Leistungsseite schon.

## Core Web Vitals: Wie schnell fühlt sich deine Seite an?

Core Web Vitals sind drei Messwerte, mit denen Google das Nutzererlebnis beim Laden einer Seite bewertet. Der Bericht in der Search Console stützt sich auf echte Daten aus Chrome-Browsern, nicht auf einen Labortest.

| Messwert | Was er misst | Gut ist |
|---|---|---|
| LCP (Largest Contentful Paint) | Wann das größte sichtbare Element geladen ist | bis 2,5 Sekunden |
| INP (Interaction to Next Paint) | Wie schnell die Seite auf Klicks und Tippen reagiert | bis 200 Millisekunden |
| CLS (Cumulative Layout Shift) | Wie stark Inhalte beim Laden verrutschen | bis 0,1 |

Kleine Websites haben oft zu wenig Besucher, damit Google überhaupt Werte anzeigt. Dann bleibt der Bericht leer, und das ist kein Fehler. In diesem Fall misst du mit PageSpeed Insights einzelne Seiten. Werden Werte angezeigt und stehen viele Adressen auf „Schlecht“, lohnt sich ein genauer Blick, vor allem mobil. Meist sind übergroße Bilder, zu viele Plugins oder ein schwerer Pagebuilder die Ursache. Unsere Erfahrung aus vielen WordPress-Projekten: Schon das Umstellen der Bilder auf moderne Formate und ein sauberes Caching bringt oft mehr als jede Detailoptimierung.

## Der neue KI-Bericht: Sichtbarkeit in AI Overviews und KI-Modus

Für viele Website-Betreiber ist das die wichtigste Neuerung des Jahres. Am 3. Juni 2026 hat Google eigene Berichte für generative KI-Funktionen angekündigt und zunächst mit einem Teil der Websites getestet. Seit dem 31. August 2026 stehen sie laut Google allen Websites weltweit zur Verfügung. Du findest sie als eigenen Bereich beim Leistungsbericht.

Der Bericht zeigt, wie oft Seiten deiner Website in KI-Funktionen der Google-Suche und in Discover erschienen sind. Gemeint sind vor allem AI Overviews, die KI-Übersichten über den klassischen Ergebnissen, und der KI-Modus, in dem Google ganze Antworten im Dialog formuliert. Du siehst Impressionen, die betroffenen Seiten, Länder und für die Suche auch die Geräte, wahlweise stündlich, täglich, wöchentlich oder monatlich. Google hat angekündigt, weitere Messwerte nach und nach zu ergänzen. Die offizielle Beschreibung findest du im [Search Central Blog von Google](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports).

Mindestens ebenso wichtig ist, was der Bericht nicht zeigt. Es gibt keine Klicks und keine Suchbegriffe. Du erfährst also, dass deine Seite zur Wärmepumpenförderung 300 Mal in einer KI-Antwort aufgetaucht ist, aber nicht, bei welcher Frage und ob jemand danach zu dir gekommen ist. Außerdem sind diese Impressionen bereits in den Gesamtzahlen des normalen Leistungsberichts enthalten. Der KI-Bericht ist eine zusätzliche Sicht auf dieselben Daten, keine Ergänzung obendrauf.

### Was du mit dem KI-Bericht anfangen kannst

Für KMU ist der Bericht vor allem ein Frühwarnsystem und ein Ideengeber. Drei Auswertungen empfehlen wir:

- **Welche Seiten tauchen auf?** Meist sind es Ratgeberseiten und Beiträge mit klaren Erklärungen, Definitionen und Tabellen. Das bestätigt, was wir im Beitrag [Sichtbarkeit in KI-Suchmaschinen messen](/blog/sichtbarkeit-in-ki-suchmaschinen-messen/) beschrieben haben: Gut strukturierte Inhalte werden eher als Quelle genutzt.
- **Welche wichtigen Seiten fehlen?** Wenn deine Hauptleistung nie in KI-Funktionen erscheint, fehlt ihr vielleicht eine klare, zitierfähige Antwort auf die typischen Kundenfragen.
- **Wie entwickelt sich das Verhältnis?** Steigen die KI-Impressionen, während die Klicks im normalen Bericht sinken, beantwortet Google die Frage womöglich schon in der Übersicht. Das ist ein Signal, auf deinen Seiten mehr zu bieten als die schnelle Antwort: Beratung, Preise, Rechner, Termine.

### Der Schalter gegen KI-Funktionen

Zusammen mit dem Bericht hat Google eine Einstellung eingeführt, mit der du deine Website aus AI Overviews, KI-Modus und den KI-Übersichten in Discover herausnehmen kannst. Laut [Google](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/) bekommst du dann aus diesen Funktionen weder Besucher noch Impressionen. Die Einstellung soll nicht als Rankingsignal für die normalen Suchergebnisse dienen.

Für die allermeisten kleinen und mittleren Unternehmen raten wir davon ab, den Schalter umzulegen. Wer als Dienstleister gefunden werden will, braucht jede Sichtbarkeit, auch in KI-Antworten. Sinnvoll kann er für Verlage oder Anbieter sein, deren Geschäftsmodell vom Klick auf exklusive Inhalte lebt. Wie du KI-Crawler außerhalb von Google steuerst, haben wir im Beitrag zu [robots.txt und llms.txt](/blog/ki-crawler-steuern-robots-txt-llms-txt/) erklärt.

## Was sich 2026 sonst geändert hat

Neben dem KI-Bericht hat Google die Search Console in diesem Jahr an mehreren Stellen umgebaut. Nicht alles davon betrifft dich. Diese Punkte schon.

**FAQ-Ergebnisse sind Geschichte.** Seit dem 7. Mai 2026 zeigt Google keine aufklappbaren FAQ-Rich-Results mehr in der Suche. Den passenden Bericht und die Darstellungsoption in der Search Console wollte Google laut eigener Ankündigung im Juni entfernen, die API-Daten dazu im August. Strukturierte FAQ-Daten musst du deshalb nicht entfernen, sie schaden nicht. Und gut geschriebene Fragen und Antworten auf der Seite bleiben wertvoll, für Besucher genauso wie für KI-Systeme, die nach klaren Antworten suchen.

**Bilder-Suchen werden messbar.** Seit dem 24. September 2026 kannst du im Leistungsbericht beim Suchtyp „Web“ zwischen textbasierten und multimodalen Suchen unterscheiden. Gemeint sind Suchen mit einem Bild, Foto oder Screenshot, etwa über Google Lens oder „Circle to Search“ auf Android-Handys. Suchbegriffe gibt es dort naturgemäß nicht. Für Onlineshops, Möbeltischler oder Gärtnereien, deren Produkte fotografiert und gesucht werden, ist das eine spannende neue Datenquelle.

**Länder lassen sich kombinieren.** Im Oktober kam die Möglichkeit hinzu, im Leistungsbericht mehrere Länder gleichzeitig zu filtern. Wer in Deutschland, Österreich und der Schweiz verkauft, sieht die DACH-Region nun in einem Schritt.

Auch das Spam-Update von September und Oktober lässt sich mit der Search Console gut begleiten. Was dabei zu prüfen ist, steht in unserem Beitrag zum [Google Spam Update September 2026](/blog/google-spam-update-september-2026/).

## Deine 20-Minuten-Routine für jeden Monat

Einmal einrichten und dann vergessen: So läuft es in vielen Betrieben, und so bringt die Search Console wenig. Ihren Nutzen entfaltet sie erst, wenn du regelmäßig hineinschaust. Einmal im Monat genügt. Plane dir dafür einen festen Termin ein, zum Beispiel den ersten Montag im Monat, und arbeite diese Liste ab:

1. **Leistung, letzte 28 Tage gegen Vorjahr:** Steigen oder fallen Klicks und Impressionen? Markenbegriffe dabei ausblenden.
2. **Top-Seiten prüfen:** Bekommen die Leistungsseiten Besucher oder nur Blogbeiträge?
3. **CTR-Lücke suchen:** zwei Begriffe mit vielen Impressionen und wenigen Klicks notieren und deren Seitentitel überarbeiten.
4. **Seitenindexierung:** Sind neue oder wichtige Seiten unter „nicht indexiert“ gelandet?
5. **KI-Bericht:** Welche Seiten erscheinen in KI-Funktionen, welche wichtigen fehlen?
6. **Anmerkung setzen:** Was hast du in diesem Monat an der Website geändert?

Ein typisches Beispiel: Ein Elektrobetrieb mit zehn Beschäftigten stellt bei dieser Routine fest, dass seine Seite zur Wallbox-Installation bei „Wallbox installieren lassen Kosten“ auf Position 7 steht, mit hunderten Impressionen und kaum Klicks. Der Seitentitel lautete nur „Wallbox“. Ein neuer Titel mit Preisspanne und Region, dazu ein kurzer Abschnitt mit typischen Kosten auf der Seite, und die Seite bekommt endlich die Anfragen, für die sie gebaut wurde. Solche Funde sind keine Seltenheit. Sie bleiben nur unentdeckt, wenn niemand hinschaut.

## Typische Fehler mit der Search Console

**Die Agentur besitzt die Property.** Dann hängt dein Zugriff an einer Geschäftsbeziehung. Der Betrieb sollte immer selbst Inhaber sein und die Agentur als Nutzer eintragen.

**Nur die www-Version ist eingerichtet.** Bei URL-Präfix-Properties fehlen dann Daten aus anderen Schreibweisen. Die Domain-Property löst das.

**E-Mails landen im Nirgendwo.** Google schickt Warnungen zu Sicherheitsproblemen, manuellen Maßnahmen oder Indexierungsfehlern per E-Mail. Prüfe, ob diese an ein Postfach gehen, das tatsächlich gelesen wird.

**Panik bei jedem Ausschlag.** Tagesschwankungen sind normal. Bewerte Trends über mehrere Wochen und vergleiche mit dem Vorjahr, bevor du die Website umbaust.

**Zahlen ohne Konsequenz.** Die Search Console ist kein Selbstzweck. Jeder Monatsblick sollte mit mindestens einer konkreten Aufgabe enden, zum Beispiel einem besseren Seitentitel oder einem neuen Abschnitt auf einer Leistungsseite.

## Fazit: Das wichtigste kostenlose SEO-Werkzeug

Die Google Search Console ist für jeden Betrieb mit Website Pflichtprogramm. Sie kostet nichts, ist in einer halben Stunde eingerichtet und liefert Daten, die du sonst nicht bekommst. Mit dem neuen Bericht zu KI-Funktionen zeigt sie 2026 außerdem zum ersten Mal, ob deine Inhalte in den Antworten von Google mitspielen. Klicks und Suchbegriffe fehlen dort noch. An der Grundregel ändert das nichts: Wer seine Seiten so schreibt, dass Menschen und KI-Systeme klare Antworten finden, hat in der klassischen Suche und in den KI-Antworten die besseren Karten.

Unser Rat: Fang klein an. Richte die Property ein, reiche die Sitemap ein und trag dir den ersten Montag im nächsten Monat in den Kalender. Mehr braucht es für den Anfang nicht.

Wenn du dir beim Einrichten oder beim Lesen der Berichte Unterstützung wünschst, schauen wir gern gemeinsam mit dir auf deine Daten. In unserer [SEO-Betreuung](/leistungen/seo/) gehört die Search Console zum festen Werkzeugkasten, und oft zeigt schon der erste Blick, wo die schnellsten Verbesserungen liegen. Schreib uns einfach über die [Kontaktseite](/kontakt/).

## Häufige Fragen (FAQ)

<details>
<summary>Ist die Google Search Console kostenlos?</summary>
<p>Ja. Die Google Search Console ist ein kostenloser Dienst von Google. Du brauchst nur ein Google-Konto und musst nachweisen, dass dir die Website gehört, am einfachsten über einen DNS-Eintrag bei deinem Hoster.</p>
</details>

<details>
<summary>Was ist der Unterschied zwischen Search Console und Google Analytics?</summary>
<p>Die Search Console zeigt, was in der Google-Suche passiert: Impressionen, Klicks, Suchbegriffe und Positionen. Google Analytics misst, was Besucher auf deiner Website tun. Die Search Console braucht kein Tracking-Skript und keine Cookies auf deiner Seite.</p>
</details>

<details>
<summary>Zeigt die Search Console, ob meine Website in KI-Antworten von Google erscheint?</summary>
<p>Ja, seit 2026. Der Bericht zu generativen KI-Funktionen zeigt Impressionen deiner Seiten in AI Overviews, im KI-Modus und in Discover. Klicks und Suchbegriffe enthält er bisher nicht.</p>
</details>

<details>
<summary>Wie lange speichert die Google Search Console Daten?</summary>
<p>Der Leistungsbericht reicht 16 Monate zurück. Ältere Daten löscht Google. Wer längere Vergleiche braucht, sollte die Daten regelmäßig exportieren, zum Beispiel nach Google Sheets.</p>
</details>

<details>
<summary>Warum ist eine meiner Seiten nicht indexiert?</summary>
<p>Häufige Gründe sind Weiterleitungen, Canonical-Verweise, ein Noindex-Tag oder Inhalte, die Google für zu dünn oder zu ähnlich hält. Die <strong>URL-Prüfung</strong> in der Search Console nennt den Grund für jede einzelne Seite. Bei wichtigen Seiten hilft meist, den Inhalt zu stärken und intern zu verlinken.</p>
</details>

<details>
<summary>Wie oft sollte ein kleines Unternehmen in die Search Console schauen?</summary>
<p>Einmal im Monat reicht für die meisten Betriebe. In 20 Minuten prüfst du Leistung, Indexierung und KI-Bericht und leitest eine konkrete Aufgabe ab. Zusätzlich solltest du auf Warn-E-Mails von Google sofort reagieren.</p>
</details>
