/**
 * Pflichttexte: Impressum, Datenschutzerklärung, AGB.
 *
 * Quelle: Eigene rechtliche Aufarbeitung mit Stand Mai 2026,
 * basierend auf den bisherigen Texten von 2fox4.de plus aktuelle
 * gesetzliche Anforderungen:
 *
 *   - TMG → DDG (seit 14.05.2024): Paragrafen-Referenz weggelassen,
 *     weil sie nicht gesetzlich vorgeschrieben ist und sich erneut
 *     ändern könnte.
 *   - TTDSG → TDDDG (seit 14.05.2024): keine Erwähnung des alten
 *     Namens mehr.
 *   - ODR-Plattform: am 20.07.2025 EU-weit abgeschaltet. Der Link
 *     gilt jetzt als wettbewerbswidrig — daher nicht enthalten.
 *   - § 36 VSBG: weiterhin Pflicht — der Hinweis zur
 *     Nicht-Teilnahmebereitschaft an Schlichtungsverfahren bleibt.
 *   - Art. 12-14 DSGVO: EDPB-Schwerpunkt 2026 (Transparenz). KI-Tools
 *     müssen klar benannt sein → ChatGPT-Chatbot und WP Blog Agent
 *     sind explizit aufgeführt.
 *   - BFSG seit 28.06.2025: Hinweis zur Erklärung zur Barrierefreiheit
 *     im Footer (separate Seite kann später folgen).
 *
 * Wichtig: Das ist KEINE Rechtsberatung. Vor Live-Schaltung bitte
 * von einer Anwältin gegenchecken lassen — insbesondere die genauen
 * Drittanbieter, die ihr aktiv nutzt (siehe TODO-Marker unten).
 */

export interface LegalDoc {
  /** URL-Slug — entspricht dem Pfad unter /impressum/ etc. */
  slug: "impressum" | "datenschutz" | "agb";
  /** Anzeigetitel */
  title: string;
  /** Eyebrow / Kategorie-Label */
  kicker: string;
  /** Letzte Aktualisierung (für Datenschutz wichtig) */
  lastUpdated: string;
  /** Volltext-HTML (wird sowohl im Modal als auch auf der eigenen Seite angezeigt) */
  html: string;
}

// -----------------------------------------------------------------------
// 1. IMPRESSUM
// -----------------------------------------------------------------------
const impressumHtml = `
<section>
  <h2>Anbieter</h2>
  <p>
    Oliver Deppe<br>
    Internetdienstleistungen<br>
    Schaumburger Str. 21<br>
    31553 Sachsenhagen<br>
    Deutschland
  </p>
</section>

<section>
  <h2>Kontakt</h2>
  <p>
    Telefon: <a href="tel:+4957259890175">05725 9890175</a><br>
    E-Mail: <a href="mailto:info@2fox4.de">info@2fox4.de</a>
  </p>
</section>

<section>
  <h2>Umsatzsteuer-Identifikationsnummer</h2>
  <p>
    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>
    DE238491395
  </p>
</section>

<section>
  <h2>Inhaltlich Verantwortlicher</h2>
  <p>
    Oliver Deppe<br>
    Schaumburger Str. 21<br>
    31553 Sachsenhagen
  </p>
</section>

<section>
  <h2>Verbraucherstreitbeilegung</h2>
  <p>
    Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
    vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
  </p>
</section>

<section>
  <h2>Haftung für Inhalte</h2>
  <p>
    Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
    nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
    verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
    überwachen oder nach Umständen zu forschen, die auf eine
    rechtswidrige Tätigkeit hinweisen.
  </p>
  <p>
    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
    Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
    Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
    von entsprechenden Rechtsverletzungen werden wir diese Inhalte
    umgehend entfernen.
  </p>
</section>

<section>
  <h2>Haftung für Links</h2>
  <p>
    Unser Angebot enthält Links zu externen Websites Dritter, auf deren
    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
    fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
    der Seiten verantwortlich.
  </p>
</section>

<section>
  <h2>Urheberrecht</h2>
  <p>
    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
    diesen Seiten unterliegen dem deutschen Urheberrecht.
    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
    Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
    schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
  </p>
</section>
`;

// -----------------------------------------------------------------------
// 2. DATENSCHUTZERKLÄRUNG
// -----------------------------------------------------------------------
const datenschutzHtml = `
<section>
  <h2>1. Verantwortlicher im Sinne der DSGVO</h2>
  <p>
    Oliver Deppe<br>
    Internetdienstleistungen<br>
    Schaumburger Str. 21<br>
    31553 Sachsenhagen<br>
    Telefon: <a href="tel:+4957259890175">05725 9890175</a><br>
    E-Mail: <a href="mailto:info@2fox4.de">info@2fox4.de</a>
  </p>
  <p>
    Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich und wurde
    nicht bestellt.
  </p>
</section>

<section>
  <h2>2. Ihre Rechte</h2>
  <p>
    Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person
    gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16),
    Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
    Datenübertragbarkeit (Art. 20) sowie auf Widerruf erteilter
    Einwilligungen (Art. 7 Abs. 3) und Widerspruch (Art. 21).
    Eine formlose E-Mail an <a href="mailto:info@2fox4.de">info@2fox4.de</a>
    genügt.
  </p>
  <p>
    Unabhängig davon können Sie sich bei der zuständigen Aufsichtsbehörde
    beschweren:
  </p>
  <p>
    Die Landesbeauftragte für den Datenschutz Niedersachsen<br>
    Prinzenstr. 5<br>
    30159 Hannover<br>
    Telefon: 0511 / 120-4500<br>
    Web: <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener">www.lfd.niedersachsen.de</a>
  </p>
</section>

<section>
  <h2>3. Hosting und Bereitstellung der Website</h2>
  <p>
    Diese Website wird bei <strong>ALL-INKL.COM &mdash; Neue Medien Münnich,
    Inhaber: René Münnich, Hauptstraße 68, 02742 Friedersdorf</strong>
    gehostet. Das Rechenzentrum befindet sich in Deutschland. Beim Aufruf
    unserer Seiten werden personenbezogene Daten verarbeitet:
  </p>
  <ul>
    <li>IP-Adresse des aufrufenden Geräts (gekürzt nach 7 Tagen)</li>
    <li>Datum und Uhrzeit des Zugriffs</li>
    <li>aufgerufene URL und HTTP-Statuscode</li>
    <li>übertragene Datenmenge</li>
    <li>verwendeter Browser und Betriebssystem (User-Agent)</li>
    <li>Referrer-URL (Herkunftsseite)</li>
  </ul>
  <p>
    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
    an einem technisch fehlerfreien Betrieb und an der Abwehr von
    Angriffen). Die Speicherdauer beträgt maximal 14 Tage; danach werden
    die Logs gelöscht oder anonymisiert. Mit ALL-INKL.COM besteht ein
    Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
  </p>
</section>

<section>
  <h2>4. Cookies und vergleichbare Technologien</h2>
  <p>
    Wir setzen auf dieser Website nur die für den Betrieb notwendigen
    Cookies (technische Cookies, z. B. für die Speicherung der
    Cookie-Auswahl selbst). Sie sind nach § 25 Abs. 2 TDDDG ohne
    Einwilligung erlaubt, weil sie für das Funktionieren der Seite
    erforderlich sind.
  </p>
  <p>
    Darüber hinaus binden wir optionale Marketing-Cookies und ‑Technologien
    (siehe § 5: Meta-Pixel) erst nach Ihrer ausdrücklichen Einwilligung über
    unseren Cookie-Banner ein (§ 25 Abs. 1 TDDDG i. V. m. Art. 6 Abs. 1
    lit. a DSGVO). Sie können Ihre Einwilligung jederzeit über den Link
    „Cookie-Einstellungen" im Footer dieser Seite anpassen oder vollständig
    widerrufen. Der Widerruf wirkt für die Zukunft.
  </p>
</section>

<section>
  <h2>5. Meta-Pixel (Facebook / Instagram)</h2>
  <p>
    Auf dieser Website setzen wir nach Ihrer Einwilligung das
    <strong>Meta-Pixel</strong> ein, ein Dienst der Meta Platforms
    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
    Irland („Meta"). Mit dem Pixel können wir die Wirksamkeit unserer
    Werbeanzeigen auf Facebook und Instagram messen und vergleichbare
    Zielgruppen für künftige Kampagnen bilden („Custom Audiences" /
    „Lookalike Audiences").
  </p>
  <p>
    <strong>Verarbeitete Daten:</strong> Beim Aufruf einer Seite mit
    aktivem Pixel werden insbesondere folgende Daten an Meta übertragen:
    IP-Adresse, Browser- und Geräteinformationen, aufgerufene URL,
    Referrer, ein zufällig generiertes Cookie („_fbp") sowie ggf. Ihre
    Meta-Nutzer-ID, sofern Sie gleichzeitig bei Facebook oder Instagram
    eingeloggt sind.
  </p>
  <p>
    <strong>Pixel-ID:</strong> 1478342186395325.
  </p>
  <p>
    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
    (Einwilligung) sowie § 25 Abs. 1 TDDDG. Der Einsatz erfolgt
    ausschließlich nach Ihrer aktiven Zustimmung im Cookie-Banner. Ohne
    Zustimmung wird das Pixel nicht geladen und es findet keine
    Datenübertragung an Meta statt.
  </p>
  <p>
    <strong>Drittlandübermittlung:</strong> Meta verarbeitet die Daten
    auch in den USA. Meta Platforms, Inc. ist nach dem EU-US Data
    Privacy Framework zertifiziert (Angemessenheitsbeschluss der
    EU-Kommission vom 10.07.2023). Für Übermittlungen darüber hinaus
    nutzt Meta Standardvertragsklauseln gemäß Art. 46 DSGVO.
  </p>
  <p>
    <strong>Gemeinsame Verantwortlichkeit:</strong> Für die Erhebung
    Ihrer Daten durch das Pixel und deren Übertragung an Meta sind wir
    gemeinsam mit Meta verantwortlich (Art. 26 DSGVO). Die zugrunde
    liegende Vereinbarung finden Sie unter
    <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener">
      facebook.com/legal/controller_addendum</a>. Für die anschließende
    Weiterverarbeitung Ihrer Daten durch Meta ist allein Meta
    verantwortlich; deren Datenrichtlinie ist unter
    <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener">
      facebook.com/privacy/policy</a> abrufbar.
  </p>
  <p>
    <strong>Speicherdauer:</strong> Das Cookie „_fbp" wird standardmäßig
    90 Tage in Ihrem Browser gespeichert. Sie können es jederzeit über
    Ihre Browser-Einstellungen löschen.
  </p>
  <p>
    <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit
    über den Link „Cookie-Einstellungen" im Footer dieser Seite
    widerrufen. Zusätzlich können Sie unter
    <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener">
      facebook.com/settings/ads</a> personalisierte Werbung in Ihrem
    Meta-Konto deaktivieren.
  </p>
</section>

<section>
  <h2>6. Schriftarten (lokal eingebunden)</h2>
  <p>
    Diese Website verwendet die Schriftarten „Inter" und „JetBrains Mono".
    Beide werden ausschließlich von unserem eigenen Server ausgeliefert
    (via <code>@fontsource-variable</code>). Es findet <strong>keine
    Verbindung</strong> zu Google Fonts oder anderen externen Schrift-Anbietern
    statt — Ihre IP-Adresse wird nicht an Google übertragen.
  </p>
</section>

<section>
  <h2>7. Kontaktaufnahme</h2>
  <p>
    Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular
    Anfragen zukommen lassen, werden Ihre Angaben einschließlich der
    Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von
    Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
    DSGVO (Anbahnung/Erfüllung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f
    DSGVO (berechtigtes Interesse an effizienter Kommunikation).
  </p>
  <p>
    Die Daten werden gelöscht, sobald die Bearbeitung der Anfrage
    abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten
    (z. B. § 147 AO) entgegenstehen.
  </p>
</section>

<section>
  <h2>8. Einsatz von Künstlicher Intelligenz</h2>
  <p>
    An einigen Stellen unserer Website kommen KI-Dienste zum Einsatz:
  </p>
  <ul>
    <li>
      <strong>Chatbot (ChatGPT von OpenAI):</strong> Auf einigen Seiten
      bieten wir einen Chatbot an, der über die API von OpenAI Ireland
      Ltd. (1 Grand Canal Street Upper, Dublin 4, Irland) angebunden ist.
      Inhalte Ihrer Eingaben werden zur Beantwortung an OpenAI übertragen.
      Wir nutzen OpenAI in der EU-Hosting-Variante; Daten werden auf
      EU-Servern verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO,
      Einsatz erfolgt nur nach Ihrer ausdrücklichen Initiative (Klick auf
      den Chatbot).
    </li>
    <li>
      <strong>Blogbeitrags-Erstellung (eigener Prozess):</strong> Wir
      nutzen für die redaktionelle Vorarbeit unser eigenes Plugin
      „WP Blog Agent". Dabei werden keine Daten von Website-Besuchenden
      verarbeitet — es handelt sich um eine interne Redaktions-Hilfe.
    </li>
  </ul>
  <!-- TODO Oliver: Wenn der Chatbot aktuell NICHT live ist, diesen Block
       (Chatbot-Absatz) entfernen. -->
</section>

<section>
  <h2>9. KI-Sichtbarkeits-Check und Newsletter</h2>
  <p>
    <strong>Durchführung des Checks:</strong> Wenn Sie unseren
    KI-Sichtbarkeits-Check nutzen, verarbeiten wir Ihre Eingaben (Firmenname,
    Leistung, ggf. Region) und Ihre E-Mail-Adresse, um den Check durchzuführen.
    Dazu stellen wir automatisiert Suchanfragen an den Dienst Perplexity
    (Perplexity AI, Inc., USA); Ihre eingegebenen Begriffe werden dabei an
    Perplexity übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
    (Durchführung der von Ihnen angeforderten Leistung). Das Ergebnis wird
    Ihnen direkt am Bildschirm angezeigt; eine Ergebnis-E-Mail an Sie
    versenden wir nicht. Zur Nachvollziehbarkeit protokollieren wir die
    Anfrage mit gekürzter IP-Adresse.
  </p>
  <p>
    <strong>Tipps &amp; Angebote per E-Mail (optional, Double-Opt-in):</strong>
    Nur wenn Sie die entsprechende Checkbox aktiv anhaken, speichern wir Ihre
    E-Mail-Adresse, um Ihnen gelegentlich Informationen und Angebote rund um
    Ihre KI-Sichtbarkeit zu senden. Wir versenden zunächst eine neutrale
    Bestätigungs-E-Mail; erst nach Ihrem Klick auf den Bestätigungslink
    (Double-Opt-in) wird Ihre Adresse für den Versand gespeichert.
    Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO
    i. V. m. § 7 Abs. 2 UWG). Sie können Ihre Einwilligung jederzeit mit
    Wirkung für die Zukunft widerrufen, z. B. formlos per E-Mail an
    <a href="mailto:info@2fox4.de">info@2fox4.de</a>. Nicht bestätigte
    Anmeldungen löschen wir automatisch nach 30 Tagen.
  </p>
</section>

<section>
  <h2>10. Eingebettete Inhalte (Karten, Videos)</h2>
  <p>
    Wir binden derzeit <strong>keine externen Karten oder Videos</strong>
    ein. Sollten wir künftig Google Maps oder YouTube-Videos einbinden,
    wird dies vor dem Laden über unseren Cookie-Banner einwilligungspflichtig
    sein (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
  </p>
</section>

<section>
  <h2>11. Datenübermittlung in Drittländer</h2>
  <p>
    Mit Ihrer Einwilligung in das Meta-Pixel (siehe § 5) werden
    personenbezogene Daten an Meta Platforms, Inc. in die USA übermittelt.
    Die Übermittlung erfolgt auf Grundlage des EU-US Data Privacy
    Framework (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023);
    Meta ist unter dem Framework zertifiziert. Eine darüber hinausgehende
    Übermittlung in andere Drittländer findet derzeit nicht statt.
  </p>
</section>

<section>
  <h2>12. SSL-Verschlüsselung</h2>
  <p>
    Diese Website nutzt SSL/TLS-Verschlüsselung. Sie erkennen sie am
    „https://" in der Adresszeile und dem Schloss-Symbol Ihres Browsers.
    Daten, die Sie an uns übermitteln, sind dadurch vor Mitlesern Dritter
    geschützt.
  </p>
</section>

<section>
  <h2>13. Aktualität dieser Erklärung</h2>
  <p>
    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
    rechtliche oder technische Änderungen es erfordern. Die jeweils
    aktuelle Version ist auf dieser Seite einsehbar.
  </p>
</section>
`;

// -----------------------------------------------------------------------
// 3. AGB (B2B-Werkvertrag / Dienstleistung)
// -----------------------------------------------------------------------
const agbHtml = `
<section>
  <h2>1. Geltungsbereich und Rangfolge</h2>
  <ol>
    <li>
      Diese Vertragsbedingungen gelten für sämtliche Angebote und
      Verträge über Webdesign, WordPress-Leistungen, SEO, Beratung sowie
      damit verbundene Leistungen („Leistungen").
    </li>
    <li>
      <strong>Rangfolge:</strong> (1) individuelles Angebot inkl.
      Leistungsbeschreibung und Anlagen, (2) diese Vertragsbedingungen,
      (3) gesetzliche Regelungen.
    </li>
    <li>
      Abweichende Bedingungen des Kunden gelten nur, wenn 2FOX4 diese
      <strong>ausdrücklich in Textform</strong> bestätigt.
    </li>
    <li>
      Diese Vertragsbedingungen richten sich an Unternehmer im Sinne
      des § 14 BGB. Mit Verbrauchern (§ 13 BGB) schließen wir Verträge
      nur ausnahmsweise und individuell ab; ggf. greifen für sie
      gesonderte Bedingungen einschließlich Widerrufsbelehrung.
    </li>
  </ol>
</section>

<section>
  <h2>2. Vertragsgegenstand und Leistungscharakter</h2>
  <ol>
    <li>
      Der konkrete Leistungsumfang ergibt sich ausschließlich aus dem
      Angebot (Deliverables, Timeline, Preis, Annahmen).
    </li>
    <li>
      Je nach Angebot können Leistungen <strong>Werkleistungen</strong>
      (z. B. Erstellung oder Relaunch einer Website) und/oder
      <strong>Dienstleistungen</strong> (z. B. SEO-Beratung, laufende
      Optimierung) sein.
    </li>
    <li>
      Bei SEO und Online-Marketing besteht <strong>keine
      Erfolgsgarantie</strong> (z. B. Ranking-Positionen, Umsatz),
      sofern nicht ausdrücklich schriftlich als verbindliches Ziel
      vereinbart.
    </li>
  </ol>
</section>

<section>
  <h2>3. Mitwirkungspflichten des Kunden</h2>
  <ol>
    <li>
      Der Kunde stellt alle erforderlichen Inhalte, Informationen und
      Zugänge rechtzeitig bereit (Texte, Bilder, Logo, CI,
      Ansprechpartner, Freigaben).
    </li>
    <li>
      Verzögerungen aufgrund fehlender Mitwirkung verlängern Fristen
      angemessen; zusätzlicher Aufwand kann nach Angebot oder
      Stundensatz berechnet werden.
    </li>
    <li>
      Der Kunde sichert zu, dass bereitgestellte Inhalte und Lizenzen
      (Bilder, Fonts, Stock, Texte etc.) rechtmäßig nutzbar sind, und
      stellt 2FOX4 von Ansprüchen Dritter frei.
    </li>
  </ol>
</section>

<section>
  <h2>4. Abstimmung, Änderungswünsche, Korrekturen</h2>
  <ol>
    <li>Kommunikation erfolgt per E-Mail, Telefon, Video oder Messenger.</li>
    <li>
      Enthaltene Korrekturschleifen ergeben sich aus dem Angebot.
      Darüber hinausgehende Änderungen sind
      <strong>Change Requests</strong> und werden gesondert vergütet
      bzw. führen zu Timeline-Anpassungen.
    </li>
    <li>
      Änderungswünsche sind möglichst gesammelt und eindeutig zu
      übermitteln.
    </li>
  </ol>
</section>

<section>
  <h2>5. Abnahme (bei Werkleistungen)</h2>
  <ol>
    <li>
      Nach Bereitstellung zur Prüfung nimmt der Kunde die Leistung
      innerhalb von <strong>14 Kalendertagen</strong> ab oder meldet
      wesentliche Mängel nachvollziehbar.
    </li>
    <li>
      Erfolgt innerhalb der Prüffrist keine Rückmeldung oder nutzt
      der Kunde die Website produktiv, gilt die Leistung als
      <strong>abgenommen</strong>, sofern keine wesentlichen Mängel
      vorliegen.
    </li>
  </ol>
</section>

<section>
  <h2>6. Vergütung, Anzahlung, Fälligkeit</h2>
  <ol>
    <li>
      Preise ergeben sich aus dem Angebot. Sofern nicht anders
      angegeben, verstehen sich Preise zzgl. der gesetzlichen
      Umsatzsteuer.
    </li>
    <li>
      Zahlungsmodell: <strong>Anzahlung und Restzahlung</strong> gemäß
      Angebot (typisch: Anzahlung bei Beauftragung, Rest bei Abnahme
      bzw. Go-Live).
    </li>
    <li>Rechnungen sind innerhalb von <strong>14 Tagen</strong> fällig.</li>
    <li>
      Bei Zahlungsverzug kann 2FOX4 Leistungen aussetzen, bis offene
      Beträge ausgeglichen sind.
    </li>
  </ol>
</section>

<section>
  <h2>7. Nutzungsrechte, Lizenzen, Herausgabe</h2>
  <ol>
    <li>
      Nach vollständiger Zahlung erhält der Kunde die im Angebot
      vereinbarten Nutzungsrechte an den Projektergebnissen.
    </li>
    <li>
      Drittanbieter-Komponenten (Themes, Plugins, Stock, Fonts)
      unterliegen deren Lizenzbedingungen; diese Nutzungsrechte werden
      nicht automatisch mitübertragen.
    </li>
    <li>
      Herausgabe bearbeitbarer Quelldateien (z. B. Figma, PSD,
      Projektdateien) ist nur geschuldet, wenn im Angebot ausdrücklich
      enthalten.
    </li>
  </ol>
</section>

<section>
  <h2>8. Drittsysteme, Zugänge</h2>
  <ol>
    <li>
      Nutzt der Kunde eigene Systeme (Hosting, Domain, DNS, Mail),
      stellt der Kunde die Zugänge bereit und ist für deren
      Verfügbarkeit verantwortlich.
    </li>
    <li>
      Für Störungen durch Drittanbieter (Hoster, Provider,
      Plugin-Hersteller) haftet 2FOX4 nur nach Maßgabe der
      Haftungsregelungen (Abschnitt 11).
    </li>
  </ol>
</section>

<section>
  <h2>9. Termine</h2>
  <ol>
    <li>
      Termine sind nur verbindlich, wenn ausdrücklich als verbindlich
      vereinbart.
    </li>
    <li>
      Höhere Gewalt und nicht von 2FOX4 zu vertretende Umstände
      verlängern Fristen angemessen.
    </li>
  </ol>
</section>

<section>
  <h2>10. Mängel und Gewährleistung</h2>
  <ol>
    <li>
      Bei Werkleistungen gelten die gesetzlichen
      Gewährleistungsfristen. 2FOX4 behebt nachweisbare Mängel im
      Rahmen der Nacherfüllung.
    </li>
    <li>
      Mängelansprüche bestehen nicht für Mängel, die auf Eingriffe
      des Kunden, fehlerhafte Drittsysteme oder fehlende Mitwirkung
      zurückzuführen sind.
    </li>
  </ol>
</section>

<section>
  <h2>11. Haftung</h2>
  <ol>
    <li>
      2FOX4 haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit
      sowie für Schäden aus der Verletzung des Lebens, des Körpers
      oder der Gesundheit.
    </li>
    <li>
      Bei einfacher Fahrlässigkeit haftet 2FOX4 nur bei Verletzung
      vertragswesentlicher Pflichten (Kardinalpflichten); die Haftung
      ist in diesem Fall auf den vertragstypischen, vorhersehbaren
      Schaden begrenzt.
    </li>
    <li>
      Eine darüberhinausgehende Haftung ist ausgeschlossen.
    </li>
  </ol>
</section>

<section>
  <h2>12. Kündigung</h2>
  <ol>
    <li>
      Laufende Dienstleistungs- und Wartungsverträge sind, sofern im
      Angebot nichts anderes vereinbart, mit einer Frist von
      <strong>4 Wochen zum Monatsende</strong> ordentlich kündbar.
    </li>
    <li>
      Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
      bleibt unberührt.
    </li>
    <li>Kündigungen bedürfen der Textform.</li>
  </ol>
</section>

<section>
  <h2>13. Datenschutz und Auftragsverarbeitung</h2>
  <p>
    Sofern 2FOX4 im Rahmen der Leistungserbringung personenbezogene
    Daten des Kunden oder dessen Kunden verarbeitet, schließen die
    Parteien einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
    Die Datenschutzerklärung von 2FOX4 ist unter
    <a href="/datenschutz/">www.2fox4.de/datenschutz/</a> einsehbar.
  </p>
</section>

<section>
  <h2>14. Schlussbestimmungen</h2>
  <ol>
    <li>Es gilt das Recht der Bundesrepublik Deutschland.</li>
    <li>
      Ausschließlicher Gerichtsstand für Streitigkeiten mit
      Kaufleuten, juristischen Personen des öffentlichen Rechts oder
      öffentlich-rechtlichem Sondervermögen ist der Geschäftssitz
      von 2FOX4 in Sachsenhagen.
    </li>
    <li>
      Sollte eine Bestimmung dieser Vertragsbedingungen unwirksam
      sein oder werden, so bleibt die Wirksamkeit der übrigen
      Bestimmungen unberührt.
    </li>
  </ol>
</section>
`;

// -----------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------
export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  impressum: {
    slug: "impressum",
    title: "Impressum",
    kicker: "Pflichtangaben",
    lastUpdated: "6. Juli 2026",
    html: impressumHtml,
  },
  datenschutz: {
    slug: "datenschutz",
    title: "Datenschutzerklärung",
    kicker: "Wie wir mit deinen Daten umgehen",
    lastUpdated: "15. Mai 2026",
    html: datenschutzHtml,
  },
  agb: {
    slug: "agb",
    title: "Allgemeine Geschäftsbedingungen",
    kicker: "Vertragsbedingungen B2B",
    lastUpdated: "6. Juli 2026",
    html: agbHtml,
  },
};

export const legalList: LegalDoc[] = [
  legalDocs.impressum,
  legalDocs.datenschutz,
  legalDocs.agb,
];
