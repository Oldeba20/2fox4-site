/**
 * Service × Stadt Matrix-Landingpages.
 *
 * SEO-Strategie (basierend auf Search-Console-Daten 2026-05-15):
 *   - „seo stadthagen“ Pos 29.8, 57 Impr./Monat → eigene Page = Pos 10-15 Ziel
 *   - „seo minden“ + „suchmaschinenoptimierung minden“ zusammen ~90 Impr.
 *   - „wordpress stadthagen“ Pos ~10, kein Direkt-Wettbewerber im Schaumburger
 *   - Wettbewerber-Pattern: agentur-plietsch.de/seo-agentur/stadthagen/,
 *     senorit.de/standorte/schaumburg/seo — beide ranken stark.
 *
 * URL-Pattern: /[service]-[city]/ (z. B. /seo-stadthagen/).
 * Astro-Routing: `/src/pages/[serviceCity].astro` mit getStaticPaths
 * über die Slugs hier. Achtung: darf NICHT mit cities.ts kollidieren —
 * Cities haben Slug-Prefix „webdesign-“, hier nur „seo-“ / „wordpress-“.
 */
import type { FAQItem } from "../components/FAQ.astro";

export interface ServiceCity {
  /** URL-Slug (ohne führenden Slash), z. B. "seo-stadthagen" */
  slug: string;
  /** Service-Kürzel für Routing-Logik */
  service: "seo" | "wordpress";
  /** Service-Anzeigename, z. B. "SEO & lokale Auffindbarkeit" */
  serviceName: string;
  /** Stadt-Name */
  city: string;
  /** Genitiv-Form, z. B. "Stadthagener" */
  cityAdjective: string;
  /** km Distanz von Sachsenhagen */
  distanceKm: number;
  /** Eyebrow im Hero */
  heroEyebrow: string;
  /** Hero-Titel: Zeile 1 (weiß) / Zeile 2 (orange) */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Hero-Subtext */
  heroSub: string;
  /** SEO Title */
  seoTitle: string;
  /** SEO Description */
  seoDescription: string;
  /** 2-3 inhaltliche Sektionen (Headline + HTML-Body + optional Bullets) */
  sections: Array<{
    eyebrow?: string;
    headline: string;
    body: string;
    bullets?: string[];
  }>;
  /** Stadt+Service-spezifische FAQs */
  faq: FAQItem[];
}

export const serviceCities: ServiceCity[] = [
  // ===================================================================
  // SEO × STADTHAGEN
  // ===================================================================
  {
    slug: "seo-stadthagen",
    service: "seo",
    serviceName: "SEO & lokale Auffindbarkeit",
    city: "Stadthagen",
    cityAdjective: "Stadthagener",
    distanceKm: 9,
    heroEyebrow: "SEO Stadthagen · seit 2008 in der Region",
    heroTitleLine1: "SEO für Stadthagen",
    heroTitleLine2: "— gefunden, wo Kunden suchen.",
    heroSub:
      "Wir machen Stadthagener Unternehmen bei Google sichtbar — lokal, regional, technisch und inhaltlich. Aus Sachsenhagen, 9 km von der Stadthagener Innenstadt entfernt. Konkrete Stadt-Suchen wie „Maler Stadthagen“, „Steuerberater Stadthagen“, „Restaurant Stadthagen“ haben hochkonzentrierte Käufer-Intention — wir holen dich genau dort in die Top 3.",
    seoTitle: "SEO Stadthagen — Agentur für lokale Suchmaschinen-Optimierung",
    seoDescription:
      "SEO-Agentur für Stadthagen aus Sachsenhagen. Lokale Auffindbarkeit, Google Business Profile, Schema.org, technische SEO. BAFA-gefördert ab 800 € netto.",
    sections: [
      {
        eyebrow: "Was Local SEO in Stadthagen konkret bringt",
        headline: "80 % der Klicks gehen auf die Top 3 im Local Pack.",
        body: `<p>Wenn jemand „Heizungsbauer Stadthagen“ oder „Steuerberater Stadthagen“ googelt, erscheint oben das Google-Maps-Local-Pack mit drei Treffern, Bewertungen und Öffnungszeiten. Wer da nicht steht, ist <strong>quasi unsichtbar</strong> — die Klickrate auf Position 4 und tiefer liegt unter 10 %.</p>
<p>Local SEO heißt: dein Google Business Profile sauber aufsetzen und pflegen, Bewertungen aktiv einsammeln, deine Website mit strukturierten Daten (Schema.org LocalBusiness) verknüpfen, lokale Backlinks aufbauen (Schaumburger Wochenblatt, Gewerbeverein, lokale Vereine), und stadt-spezifische Inhalte schreiben, die echte Stadthagen-Bezüge haben — nicht nur „Stadt + Service“ im Title.</p>`,
        bullets: [
          "Google Business Profile vollständig + gepflegt",
          "LocalBusiness-Schema auf jeder Page",
          "Bewertungs-Strategie (Ziel 40+ Reviews)",
          "Lokale Backlinks aus Schaumburg",
          "Stadt-spezifische FAQs + Content",
          "NAP-Konsistenz über alle Plattformen",
          "Monatliches Ranking-Reporting",
        ],
      },
      {
        eyebrow: "Wettbewerb",
        headline: "Wer steht aktuell auf Platz 1-3 in Stadthagen — und warum.",
        body: `<p>Aktuell (Mai 2026) sieht das Stadthagener Wettbewerbsfeld so aus:</p>
<ul>
<li><strong>t3-media.de</strong> rankt Platz 1 für „Webagentur Stadthagen“ — TYPO3-Schwergewicht mit jahrelang aufgebauter Domain-Authority.</li>
<li><strong>doubleornothing.de</strong> auf Platz 2 — seit 2002 in Stadthagen/Bückeburg ansässig, profitiert vom Stadtmarketing-Referenz-Case.</li>
<li><strong>davidkeiser.de</strong> (aus Recklinghausen!) baut gerade eine Stadt-Page-Maschine auf und greift auch unsere Heim-Keywords an.</li>
</ul>
<p>Unsere Strategie ist nicht, mit Domain-Authority gegen t3-media zu konkurrieren, sondern mit <strong>höherer inhaltlicher Tiefe + mehr lokalen Trust-Signalen</strong> punktuell die Top 5 zu erreichen.</p>`,
      },
    ],
    faq: [
      {
        question: "Was kostet SEO für ein Stadthagener Unternehmen?",
        answerHtml: `Einmalige SEO-Audit-Session: <strong>800 € netto</strong> (4 Stunden + Bericht + Maßnahmenplan). Laufende Betreuung ab <strong>200 € / Monat</strong> mit Keyword-Monitoring, Google-Business-Pflege und monatlichem Reporting. Stadthagener Unternehmen können bis zu <strong>80 % der Beratungskosten über das BAFA</strong> erstattet bekommen — wir sind anerkannter Berater.`,
      },
      {
        question: "Wie lange dauert es, bis SEO-Maßnahmen in Stadthagen wirken?",
        answerHtml: `Technische Quick-Wins (Schema, Meta-Tags, Sitemap) sind nach 2-4 Wochen indexiert. Lokale Sichtbarkeits-Verbesserungen brauchen 3-6 Monate, weil Google deine NAP-Konsistenz und Bewertungs-Signale erst verifizieren muss. Für Top-1-Positionen bei wettbewerbsstarken Stadt-Keywords (wie „Webagentur Stadthagen“) muss man realistisch 12-18 Monate planen — kein SEO-Anbieter, der etwas anderes verspricht, ist seriös.`,
      },
      {
        question: "Welche Stadthagener Branchen sind besonders SEO-lohnenswert?",
        answerHtml: `Dort wo Suchabsicht hoch + Anbieter-Dichte mittel ist. In Stadthagen besonders: <strong>Handwerk</strong> (Maler, SHK, Elektriker, Schreiner — viele Notdienst-Suchen), <strong>Heilberufe</strong> (Ärzte, Therapeuten, Heilpraktiker), <strong>Steuerberater + Anwälte</strong> (B2B mit hohem Auftragswert), <strong>Gastronomie + Veranstaltungslocations</strong> (Tagestourismus aus Hannover). Für reine B2B-Industrie ist Local SEO weniger relevant — da brauchst du eher überregionales Keyword-SEO.`,
      },
      {
        question: "Macht ihr die SEO selbst oder vergebt ihr das?",
        answerHtml: `Wir machen alles selbst — kein Subcontracting nach Indien oder Polen. Oliver Deppe sitzt seit 2008 in Sachsenhagen und betreut die SEO-Projekte persönlich. Das hat einen Preis-Aufschlag gegenüber Discountern, aber dafür weißt du immer mit wem du redest und wer was an deiner Site geändert hat.`,
      },
      {
        question: "Bietet ihr lokale Backlinks via Schaumburger Wochenblatt o.ä.?",
        answerHtml: `Wir machen kein Backlink-Buying (Google-Verbot, Penalty-Risiko). Wir helfen aber beim ORGANISCHEN Aufbau: Kontakt zum Schaumburger Wochenblatt für redaktionelle Beiträge, Sponsoring bei lokalen Vereinen mit Backlink, Verzeichnis-Pflege (trustlocal, gelbeseiten, etc.), Gast-Beiträge bei lokalen Blogs. Das ist Aufwand, aber nachhaltig.`,
      },
    ],
  },

  // ===================================================================
  // SEO × MINDEN
  // ===================================================================
  {
    slug: "seo-minden",
    service: "seo",
    serviceName: "SEO & lokale Auffindbarkeit",
    city: "Minden",
    cityAdjective: "Mindener",
    distanceKm: 38,
    heroEyebrow: "SEO Minden · OWL-Mittelstand seit 2008",
    heroTitleLine1: "SEO für Minden",
    heroTitleLine2: "und Ostwestfalen-Lippe.",
    heroSub:
      "Mindener Unternehmen suchen lokale SEO-Partner — die meisten OWL-Agenturen sitzen in Bielefeld oder Paderborn und kennen die Mindener Wirtschaft kaum. Wir sind 38 km entfernt in Sachsenhagen, betreuen seit Jahren Mindener Mittelstand und Industrie und kennen die regionalen Suchbedingungen.",
    seoTitle: "SEO Minden — Suchmaschinen-Optimierung für OWL-Mittelstand",
    seoDescription:
      "SEO-Agentur für Minden + Ostwestfalen-Lippe. Lokale Auffindbarkeit, Google Business, Wasserstraßenkreuz-Mittelstand. BAFA-gefördert ab 800 € netto.",
    sections: [
      {
        eyebrow: "Mindener SEO-Marktlage",
        headline: "Stadt mit OWL-Branchen-Mix — und überraschend wenig lokaler SEO-Konkurrenz.",
        body: `<p>Minden ist mit 81.000 Einwohnern die größte Stadt in unserem Einzugsgebiet und wirtschaftlich vielseitig: Wasserstraßenkreuz (Logistik), Verpackungsindustrie, Maschinenbau, Mittelstand. Trotzdem ist die Mindener SEO-Landschaft erstaunlich wenig besetzt — die großen OWL-Agenturen aus Bielefeld konzentrieren sich auf Bielefeld selber, Paderborn und Gütersloh.</p>
<p>Konkrete Search-Console-Daten (Mai 2026) zeigen Suchvolumen, das aktuell von 2fox4 nicht eingefangen wird, weil keine spezifische Mindener SEO-Page existierte: „seo minden“, „suchmaschinenoptimierung minden“, „seo agentur minden“ zusammen rund 90 Impressionen pro Monat — alles aktuell auf Position 37-47. Diese Lücke schließen wir.</p>`,
        bullets: [
          "Mindener Google-Business-Profile-Optimierung",
          "Branchen-Pages für OWL-Mittelstand",
          "Local-Pack-Optimierung Minden + Umland",
          "Schema.org LocalBusiness + Service-Markup",
          "Mehrsprachigkeit für internationale OWL-Industrie",
          "Backlink-Aufbau Mindener Tageblatt + Industrie-Verzeichnisse",
        ],
      },
      {
        eyebrow: "Was OWL-Mittelstand braucht",
        headline: "B2B-SEO unterscheidet sich von lokaler Restaurant-SEO.",
        body: `<p>Wenn dein Kunde ein Mindener Industriebetrieb mit B2B-Vertriebszyklus ist, sieht SEO anders aus als für eine Pizzeria. Du brauchst keine Local-Pack-Top-3-Position für „Industrie Minden“ (die googelt niemand) — sondern saubere Rankings für deine spezifischen <strong>Produktnamen, Branchen-Begriffe und Pain-Point-Keywords</strong>. Plus eine Karriereseite, die für Fachkraft-Suchen wie „Konstrukteur Minden“ oder „Logistiker OWL“ performt.</p>
<p>Dafür kombinieren wir lokale Signale (Standort-Bezug, Google Business) mit branchenspezifischer Content-Strategie. Das Resultat ist messbar: mehr qualifizierte Anfragen + bessere Bewerber bei Stellenanzeigen.</p>`,
      },
    ],
    faq: [
      {
        question: "Bedient ihr OWL-Unternehmen, obwohl ihr in Niedersachsen sitzt?",
        answerHtml: `Ja — und das ist gerade ein Vorteil. Niedersachsen / NRW-Grenze ist eine bürokratische Konstrukte, keine wirtschaftliche. Wir kennen die Mindener Wirtschaft (Wasserstraßenkreuz, Verpackung, Maschinenbau) und können von Sachsenhagen aus auch persönliche Termine wahrnehmen. BAFA-Förderung läuft bundesweit, egal welches Bundesland.`,
      },
      {
        question: "Welche Mindener Branchen sind aus SEO-Sicht besonders interessant?",
        answerHtml: `Drei klare Spitzenreiter: <strong>1) Handwerk + SHK</strong> (Notdienst-Suchen + lokale Käufer-Intention), <strong>2) B2B-Industrie</strong> (spezifische Produktbegriffe + Karriereseiten für Fachkräfte-Rekrutierung), <strong>3) Logistik + Spedition</strong> (Wasserstraßenkreuz Minden ist europäisch bedeutend, viele Spezialnischen). Mindener Heilberufe und Gastronomie sind ebenfalls gut bedienbar, aber dort ist die Mindener Konkurrenz dichter.`,
      },
      {
        question: "Wie oft kommt ihr für Vor-Ort-Termine nach Minden?",
        answerHtml: `Bei laufenden Projekten alle 4-6 Wochen ein halber Tag. 38 km Anfahrt aus Sachsenhagen ist 35 Minuten, völlig entspannt. Bei kleinen SEO-Beratungen reichen Videocalls; bei strategischen Workshops oder Foto-Sessions kommen wir gerne vor Ort. Mehrere Mindener Auftraggeber in einer Region kombinieren wir oft zu Tages-Touren — effizient für beide Seiten.`,
      },
      {
        question: "Was kostet SEO für ein Mindener Unternehmen?",
        answerHtml: `Audit + Maßnahmenplan: <strong>800 € netto</strong> einmalig. Laufende Betreuung ab <strong>200 € / Monat</strong>. Industrielle B2B-Projekte mit mehrsprachigem Content + Karriereseiten meist <strong>400-600 € / Monat</strong>. BAFA-Beratung erstattet bis zu 80 % — wir machen den Antrag.`,
      },
      {
        question: "Verlinkt das auch das Mindener Tageblatt o.ä.?",
        answerHtml: `Wir vermitteln Kontakte zu lokalen Medien (Mindener Tageblatt, Westfalen-Blatt, Lokal-Magazinen), helfen beim Themen-Pitch und liefern Pressemitteilungs-Texte. Bezahlte Verlinkung lehnen wir ab — bringt kurzfristig Backlinks, aber Google-Risiko. Stattdessen organischer Aufbau, der dauerhaft trägt.`,
      },
    ],
  },

  // ===================================================================
  // SEO × BÜCKEBURG
  // ===================================================================
  {
    slug: "seo-bueckeburg",
    service: "seo",
    serviceName: "SEO & lokale Auffindbarkeit",
    city: "Bückeburg",
    cityAdjective: "Bückeburger",
    distanceKm: 18,
    heroEyebrow: "SEO Bückeburg · für Schloss + Mittelstand",
    heroTitleLine1: "SEO für Bückeburg",
    heroTitleLine2: "— Tourismus, Hofstaat und KMU.",
    heroSub:
      "Bückeburger Unternehmen leben in einem besonderen Markt: Schloss-Tourismus auf der einen Seite, Mittelstand und Handwerk auf der anderen. Beide brauchen SEO — aber sehr unterschiedlich gewichtet. Wir bauen für jede Bückeburger Branche die passende lokale Suchmaschinen-Strategie, aus Sachsenhagen, 18 km entfernt.",
    seoTitle: "SEO Bückeburg — Suchmaschinen-Optimierung Schaumburg",
    seoDescription:
      "SEO-Agentur für Bückeburg aus Sachsenhagen. Local-Pack-Top-3 für Tourismus, Mittelstand, Handwerk. Hofstaat-Region & Schaumburg. Ab 800 € netto.",
    sections: [
      {
        eyebrow: "Bückeburger SEO-Lage",
        headline: "Tourismus-SEO + B2B-SEO sind zwei verschiedene Spiele.",
        body: `<p>Bückeburg hat eine seltsame Doppelnatur: Auf der einen Seite das Schloss, die Hofreitschule, das Hubschraubermuseum — Tagestouristen aus Hannover, Bielefeld, dem ganzen Norden googeln „Bückeburg Hotel“, „Bückeburg Restaurant“, „Bückeburg Veranstaltung“. Auf der anderen Seite die Wirtschaftsstadt mit Handwerk, Mittelstand, klassischen Dienstleistern, die nach lokaler Auffindbarkeit für lokale Auftraggeber suchen.</p>
<p>SEO für Bückeburger Tourismus heißt: mobile-first, schnelle Buchungs-Wege, mehrsprachige Schema-Markup, professionelle Bilder, Google-Business mit saisonalen Posts. SEO für Bückeburger Mittelstand heißt: präzise Service-Keyword-Pages, NAP-Konsistenz, Branchen-Backlinks, Schema-Daten für ProfessionalService.</p>`,
        bullets: [
          "Bückeburger Google-Business-Profile-Optimierung",
          "Tourism-Schema bei Hotels/Gastronomie",
          "Saisonale Content-Strategie (Schloss-Events)",
          "Schaumburger Backlink-Aufbau",
          "Mehrsprachigkeit (DE/EN) für Tourismus",
          "Konkrete Performance-Ziele pro Monat",
        ],
      },
      {
        eyebrow: "Was im Wettbewerbsfeld passiert",
        headline: "Bückeburg hat aktiv aufrückende Lokal-SEO-Spezialisten.",
        body: `<p>Auf Bückeburger Suchen drängen aktuell mehrere Anbieter: <strong>webflott.de</strong> als Aufsteiger in Bückeburg, <strong>doubleornothing.de</strong> traditionell stark, <strong>mast-media.de</strong> mit dedizierter Bückeburg-Page und 60 ProvenExpert-Reviews. Wer hier in die Top 3 kommen will, braucht <strong>Inhaltliche Tiefe + Trust-Signale (Reviews) + lokale Backlinks</strong> als Dreiklang.</p>`,
      },
    ],
    faq: [
      {
        question: "Habt ihr Erfahrung mit Bückeburger Tourismus-SEO?",
        answerHtml: `Ja — Tourismus-SEO funktioniert anders als klassische lokale SEO. Du musst saisonale Suchmuster bedienen (Schloss-Konzerte, Hofreitschule-Veranstaltungen), mehrsprachig auftreten (viele Hotel-Suchen kommen aus Hannover, aber auch aus Niederlanden + Polen), schnelle mobile UX bieten (Touristen googeln unterwegs) und mit Google-Business + Maps-Posts arbeiten. Wir betreuen mehrere Bückeburger Hotels/Pensionen in genau dieser Logik.`,
      },
      {
        question: "Was kostet Tourism-SEO für ein Bückeburger Hotel?",
        answerHtml: `Audit + Strategie: <strong>800 € netto</strong>. Laufende Betreuung mit saisonalen Content-Updates, Bilder-Pflege, Bewertungs-Strategie + Reporting: <strong>250-400 € / Monat</strong>. Plus eventuelle Foto-Session vor Ort (500-900 € einmalig) — bei einem Hotel im Tourismus-Wettbewerb sind aktuelle Bilder kein Luxus, sondern entscheidend.`,
      },
      {
        question: "Macht ihr auch SEO für den Bückeburger Hofstaat und Schloss-Service-Anbieter?",
        answerHtml: `Ja. Die Service-Anbieter rund um den Bückeburger Hofstaat haben einen sehr spezifischen Kundenkreis und sehr spezifische Suchmuster. Wir wissen, welche Long-Tail-Keywords hier relevant sind und wie man die Marke „Hofstaat-Bezug“ subtil in der SEO-Strategie nutzt, ohne in Pathos abzurutschen.`,
      },
      {
        question: "Wie lange dauert SEO für Bückeburg, um Top 3 zu erreichen?",
        answerHtml: `Bei Tourism-Keywords (eher saisonal, weniger Wettbewerb in Off-Season): 3-6 Monate für Top 5. Bei Bückeburger B2B-Keywords (höhere Konkurrenz): 6-12 Monate. Top 1 für wettbewerbsstarke Begriffe wie „Webagentur Bückeburg“: 12-18 Monate. Realistische Erwartungen sind Teil seriöser SEO-Arbeit.`,
      },
      {
        question: "Wie kommt ihr nach Bückeburg für Vor-Ort-Termine?",
        answerHtml: `Aus Sachsenhagen 18 km, 20 Minuten über A2/B65. Vor-Ort-Termine sind unproblematisch, auch kurzfristig. Foto-Sessions kombinieren wir oft mit Stadthagener oder Mindener Terminen — das macht eine Reise pro Woche möglich, ohne dass die Anfahrt den Tagesplan dominiert.`,
      },
    ],
  },

  // ===================================================================
  // WORDPRESS × STADTHAGEN
  // ===================================================================
  {
    slug: "wordpress-stadthagen",
    service: "wordpress",
    serviceName: "WordPress-Entwicklung & Service",
    city: "Stadthagen",
    cityAdjective: "Stadthagener",
    distanceKm: 9,
    heroEyebrow: "WordPress Stadthagen · seit 2008",
    heroTitleLine1: "WordPress für Stadthagen",
    heroTitleLine2: "— ohne Pagebuilder-Ballast.",
    heroSub:
      "WordPress betreiben heißt: jeden Monat Sicherheits-Updates, regelmäßige Backups, gepflegte Plugins, performante Themes. Wir übernehmen das für Stadthagener Unternehmen — entweder als laufende Wartung oder als Komplett-Neubau einer schlanken WordPress-Site ohne Pagebuilder-Spaghetti. Aus Sachsenhagen, 9 km entfernt, persönlich erreichbar.",
    seoTitle: "WordPress Stadthagen — Wartung, Entwicklung, SEO-Service",
    seoDescription:
      "WordPress-Agentur für Stadthagen aus Sachsenhagen. Wartung, Sicherheit, Performance, Hosting, eigene Plugins. Persönlich, regional, seit 2008.",
    sections: [
      {
        eyebrow: "Was Stadthagener WordPress-Nutzer typischerweise brauchen",
        headline: "Drei Probleme, eine saubere Lösung.",
        body: `<p><strong>Problem 1: „Meine alte Seite ist hacked / extrem langsam / sieht aus wie 2018.“</strong> Lösung: kompletter Rebuild auf moderner WordPress-Basis ohne Pagebuilder-Bloat. 3-6 Wochen, ab 1.500 €.</p>
<p><strong>Problem 2: „Ich habe niemanden, der WordPress pflegt — Updates bleiben liegen, Plugins werden alt.“</strong> Lösung: monatliches Wartungspaket, alles inkludiert. Ab 30 € / Monat.</p>
<p><strong>Problem 3: „Mein WordPress läuft, aber die Performance ist mies, die SEO ist nicht eingerichtet.“</strong> Lösung: WordPress-Audit + gezielte Optimierungen. 4-Stunden-Audit für 800 € + Umsetzungs-Backlog.</p>`,
        bullets: [
          "WordPress-Sicherheits-Updates monatlich",
          "Automatische tägliche Backups",
          "PHP/MySQL-Modernisierung",
          "Performance-Tuning (PageSpeed 90+)",
          "Plugin-Konsolidierung",
          "Eigene Plugins kostenlos für Wartungs-Kunden",
          "24-Stunden-Reaktionszeit",
        ],
      },
      {
        eyebrow: "Eigene Plugins",
        headline: "Wir bauen unsere eigenen WordPress-Plugins — du nutzt sie kostenlos.",
        body: `<p>2FOX4 entwickelt seit Jahren eigene WordPress-Plugins, von denen mehrere im offiziellen WordPress.org-Repository veröffentlicht sind:</p>
<ul>
<li><strong>Accessibility Suite</strong> — WCAG-konforme Barrierefreiheits-Ergänzung</li>
<li><strong>Custom Popup</strong> — leichtes Popup-System ohne Bloat</li>
<li><strong>WP Blog Agent</strong> — KI-gestützte Blog-Post-Erstellung mit Redaktions-Workflow</li>
<li><strong>Vorher-Nachher-Slider</strong> — für Handwerks-/Sanierung-Referenzen</li>
</ul>
<p>Wenn du in unserem Wartungs-Paket bist, bekommst du alle Pro-Funktionen kostenlos — auch zukünftige Erweiterungen.</p>`,
      },
    ],
    faq: [
      {
        question: "Was kostet WordPress-Wartung für ein Stadthagener Unternehmen?",
        answerHtml: `Basis-Paket ab <strong>30 € / Monat</strong>: WordPress-Core + Plugin-Updates, tägliche Backups, Uptime-Monitoring, Sicherheits-Scans. Erweitertes Paket ab <strong>80 € / Monat</strong>: zusätzlich monatliches Reporting, inhaltliche Mini-Änderungen, Performance-Optimierung. Bei Bedarf 24-Stunden-Notfall-Bereitschaft gegen Aufpreis.`,
      },
      {
        question: "Welche Pagebuilder unterstützt ihr?",
        answerHtml: `Wir bauen NEU prinzipiell <strong>ohne Pagebuilder</strong> — also kein Elementor, kein WPBakery, kein Divi. Pagebuilder erzeugen 80-90 % aufgeblähten HTML-Code, sind Performance-Killer und schwer zu warten. Wir nutzen native WordPress-Blocks (Gutenberg), eigene Blöcke und schlanke Themes. <strong>Bestehende</strong> Sites mit Pagebuilder können wir weiterhin warten — oder gemeinsam einen Rebuild ohne Pagebuilder planen.`,
      },
      {
        question: "Können wir die Website nach dem WordPress-Setup selbst pflegen?",
        answerHtml: `Absolut. Wir liefern eine 1-stündige Schulung mit + Schulungs-Video, in dem die wichtigsten Pflege-Wege gezeigt werden. WordPress ist genau dafür gebaut. Wer keine Zeit oder Lust hat, kann die Pflege bei uns abonnieren — aber niemand muss.`,
      },
      {
        question: "Was passiert bei einem WordPress-Hack?",
        answerHtml: `Bei Wartungs-Kunden: wir bekommen die Alarmmeldung automatisch über unser Monitoring, restaurieren das letzte saubere Backup, identifizieren die Eintrittsstelle (meist veraltetes Plugin), schließen sie, ändern alle Passwörter, dokumentieren den Vorfall — meist innerhalb von 4 Stunden. Bei Nicht-Wartungs-Kunden bieten wir Notfall-Service zu Stundensätzen ab 95 € netto.`,
      },
      {
        question: "Bietet ihr WordPress-Hosting für Stadthagener Unternehmen an?",
        answerHtml: `Wir hosten nicht selbst, empfehlen aber spezialisiertes WordPress-Hosting bei All-Inkl oder vergleichbaren deutschen Hostern (Daten bleiben in Deutschland, DSGVO-konform, gute Performance). Setup inklusive Domain + SSL ab 15 € / Monat. Wir richten das ein, dokumentieren alle Zugänge — die Verträge schließt du direkt mit dem Hoster, du bist also nicht von uns abhängig.`,
      },
    ],
  },

  // ===================================================================
  // WORDPRESS × MINDEN
  // ===================================================================
  {
    slug: "wordpress-minden",
    service: "wordpress",
    serviceName: "WordPress-Entwicklung & Service",
    city: "Minden",
    cityAdjective: "Mindener",
    distanceKm: 38,
    heroEyebrow: "WordPress Minden · OWL-Service seit 2008",
    heroTitleLine1: "WordPress für Minden",
    heroTitleLine2: "— OWL-Mittelstand zuverlässig betreut.",
    heroSub:
      "Mindener Unternehmen brauchen einen WordPress-Partner, der nicht in der nächsten OWL-Großstadt sitzt und nur per Ticket-System reagiert. Wir betreuen Mindener Mittelstand und Industrie aus Sachsenhagen, 38 km entfernt — persönlich erreichbar, mit klaren Service-Wegen und ohne Großagentur-Hierarchien.",
    seoTitle: "WordPress Minden — Entwicklung + Wartung für OWL-Mittelstand",
    seoDescription:
      "WordPress-Agentur für Minden + OWL aus Sachsenhagen. Sicherheits-Updates, Backups, Performance, Custom-Entwicklung. Persönlich, seit 2008.",
    sections: [
      {
        eyebrow: "Mindener WordPress-Marktlage",
        headline: "OWL-Mittelstand betreibt oft WordPress — selten optimal.",
        body: `<p>Wir sehen in Minden + OWL häufig das gleiche Muster: ein Unternehmen hat WordPress vor 5-8 Jahren bei einer Bielefelder Agentur bauen lassen, seither sind nur unregelmäßig Updates eingespielt worden, ein Pagebuilder wurde drüber gelegt, die Performance ist mies, die mobile UX kaputt. Niemand traut sich, etwas zu ändern, weil „das ja sonst alles kaputt geht“.</p>
<p>Wir machen genau diese Sites wieder fit. Saubere Bestandsaufnahme, klar priorisierte Maßnahmen, sauberer Rebuild wenn die Substanz nicht mehr trägt. Mindener Unternehmen können bei uns auf eine Sache zählen: wir reden Klartext, nicht in Marketing-Phrasen.</p>`,
        bullets: [
          "WordPress-Bestandsaufnahme + Sanierungsplan",
          "Performance-Tuning für OWL-Mittelstand",
          "Migration alter Pagebuilder-Sites",
          "B2B-Funnel-Optimierung",
          "Karriere-Seiten-Setup mit Fachkräfte-SEO",
          "Mehrsprachigkeit (DE/EN/NL) bei Bedarf",
        ],
      },
    ],
    faq: [
      {
        question: "Bedient ihr OWL-Unternehmen aus Niedersachsen heraus?",
        answerHtml: `Ja. Mindener Unternehmen kommen bei uns oft, gerade weil die Bielefelder Agenturen sich auf den Bielefelder Markt fokussieren. 38 km Anfahrt sind keine Hürde — wir sind in 35 Minuten bei dir. Persönliche Termine sind regelmäßig möglich, kein Ticket-System.`,
      },
      {
        question: "Was kostet WordPress-Wartung für ein Mindener Mittelständler?",
        answerHtml: `Basis-Paket ab <strong>30 € / Monat</strong> für kleinere Mittelständler. Erweitertes Paket ab <strong>80-150 € / Monat</strong> für komplexere Sites mit B2B-Funktionen, Mehrsprachigkeit, Karriere-Bereich. Industrielle Großprojekte mit DACH-weiten Standorten meist <strong>200-500 € / Monat</strong>.`,
      },
      {
        question: "Habt ihr Erfahrung mit B2B-Industrie-WordPress in OWL?",
        answerHtml: `Ja — Wasserstraßenkreuz-Logistik, Verpackungsindustrie, Maschinenbau sind drei Branchen, in denen wir mehrfach gearbeitet haben. Was hier zählt: technische Datenblätter sauber strukturiert, Case-Studies mit Branchen-Bezug, Karriere-Seiten für Fachkraft-Rekrutierung, ggf. mehrsprachige Vertriebs-Funnels. Wir bauen das.`,
      },
      {
        question: "Macht ihr auch WordPress-Migrationen?",
        answerHtml: `Ja, regelmäßig. Typische Mindener Cases: Migration von alter Pagebuilder-Site auf moderne Block-basierte Architektur, Migration von veraltetem Host (z. B. Strato-Shared) auf spezialisiertes WordPress-Hosting (All-Inkl Premium), Migration von TYPO3 oder Joomla zu WordPress. Migration läuft als Tagespauschale ab 480 € netto.`,
      },
      {
        question: "Wie oft kommt ihr nach Minden für Termine?",
        answerHtml: `Bei laufenden Projekten alle 4-6 Wochen. Mehrere Mindener Termine bündeln wir oft mit Bückeburg/Stadthagen-Terminen zu einer Tour — effizient für beide Seiten. Erstgespräche gehen auch per Videocall, kein muss für persönlichen Termin.`,
      },
    ],
  },

  // ===================================================================
  // WORDPRESS × BÜCKEBURG
  // ===================================================================
  {
    slug: "wordpress-bueckeburg",
    service: "wordpress",
    serviceName: "WordPress-Entwicklung & Service",
    city: "Bückeburg",
    cityAdjective: "Bückeburger",
    distanceKm: 18,
    heroEyebrow: "WordPress Bückeburg · seit 2008",
    heroTitleLine1: "WordPress für Bückeburg",
    heroTitleLine2: "— Tourismus, Mittelstand, Vereine.",
    heroSub:
      "Bückeburger Unternehmen brauchen WordPress-Sites, die zu ihrem Markt passen: Tourismus-Auftritte mit klarer Buchungs-Logik, mittelständische Firmen-Sites mit professionellem Auftritt, Vereins-Sites, die ehrenamtlich pflegbar sind. Wir bauen alle drei — aus Sachsenhagen, 18 km entfernt, persönlich erreichbar.",
    seoTitle: "WordPress Bückeburg — Webdesign + Wartung Schaumburg",
    seoDescription:
      "WordPress-Agentur für Bückeburg aus Sachsenhagen. Sicherheits-Wartung, Performance, eigene Plugins. Tourismus, Mittelstand, Vereine — seit 2008.",
    sections: [
      {
        eyebrow: "Bückeburger WordPress-Mix",
        headline: "Drei Welten, ein Werkzeug.",
        body: `<p>Bückeburger Auftraggeber zerfallen in drei klare Segmente, die alle WordPress nutzen — aber sehr unterschiedlich:</p>
<p><strong>1. Tourismus rund um Schloss und Hofreitschule.</strong> Hotels, Pensionen, Eventgastronomie, Souvenir-Geschäfte. Brauchen: schnelle mobile UX, Buchungs-Anbindung, mehrsprachiges Schema, saisonale Inhalte.</p>
<p><strong>2. Mittelstand und Handwerk.</strong> Klassische B2B / B2C-Sites mit Service-Übersicht, Referenzen, Kontakt-Formular. Brauchen: solide Basis ohne Frickel, gute Conversion-Wege, lokale SEO.</p>
<p><strong>3. Vereine, Stiftungen, ehrenamtliche Organisationen.</strong> Brauchen: pflegeleichte Sites, die von Vorständen ohne IT-Hintergrund weiter geführt werden können, oft mit Förder-Mitteln gebaut.</p>
<p>Wir bauen für alle drei — mit dem jeweils richtigen Setup, ohne unnötige Komplexität.</p>`,
        bullets: [
          "Tourism-WordPress mit Buchungs-Anbindung",
          "Mittelstands-WordPress mit Vertrieb-Funktionen",
          "Vereins-WordPress mit DSEE-Förder-Beratung",
          "Mehrsprachigkeit für internationalen Tourismus",
          "Pflegeleichte Block-basierte Architektur",
          "Schaumburger Hosting + DSGVO-konform",
        ],
      },
    ],
    faq: [
      {
        question: "Was kostet eine WordPress-Site für ein Bückeburger Hotel?",
        answerHtml: `Eine Hotel-Site mit Buchungs-Anbindung, mehrsprachig, modernen Bildern und SEO-fertig: zwischen <strong>4.000 € und 8.000 €</strong>, je nach Channel-Management-Anbindung und Sprachen. Laufende Wartung ab <strong>80 € / Monat</strong>. Foto-Session separat <strong>500-900 €</strong>.`,
      },
      {
        question: "Helft ihr Bückeburger Vereinen bei DSEE-Förder-Anträgen?",
        answerHtml: `Ja, kostenlos im Rahmen des Projekts. Die Deutsche Stiftung für Engagement und Ehrenamt fördert Vereins-Digitalisierung mit oft 50-80 % der Kosten. Wir liefern den technischen Antrag und das Kostenangebot — du füllst nur den Hauptantrag aus. Antrags-Erfolgsquote in unseren Fällen: ~70 %.`,
      },
      {
        question: "Bietet ihr lokale Notfall-Reaktionszeiten in Bückeburg?",
        answerHtml: `Wir bieten allen Wartungs-Kunden eine 4-Stunden-Reaktionsgarantie während der Bürozeiten und für Notfälle (Site komplett offline, Hack) eine separate Erreichbarkeit. Bückeburg ist von Sachsenhagen 20 Minuten entfernt — im Worst Case sind wir physisch vor Ort. Kein Konzern-Subcontractor in Übersee.`,
      },
      {
        question: "Wie kommt ihr nach Bückeburg, falls wir uns persönlich treffen wollen?",
        answerHtml: `Aus Sachsenhagen 18 km über A2 + B65, 20 Minuten. Erstgespräche gerne bei dir vor Ort oder in einem Bückeburger Café. Bei laufenden Projekten alle 4-6 Wochen ein Termin. Bückeburger Termine bündeln wir oft mit Stadthagener Auftraggebern — eine Tour pro Woche reicht meistens.`,
      },
      {
        question: "Welche Bückeburger Branchen sind aus WordPress-Sicht besonders interessant?",
        answerHtml: `<strong>Tourismus + Gastronomie</strong> (schöne Bildsprache, mehrsprachige Buchungen — viel Potenzial), <strong>klassisches Handwerk</strong> (lokale Sichtbarkeit + Anfrage-Formulare), <strong>Heilberufe</strong> (Vertrauen aufbauen + Online-Terminbuchung), <strong>Vereine</strong> (Förder-Programme machen die Sites finanzierbar). Reine B2B-Industrie ist in Bückeburg weniger verbreitet als in Minden.`,
      },
    ],
  },
];

export function serviceCityBySlug(slug: string): ServiceCity {
  const sc = serviceCities.find((s) => s.slug === slug);
  if (!sc) throw new Error(`ServiceCity not found: ${slug}`);
  return sc;
}
