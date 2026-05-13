/**
 * Daten für die 7 Leistungsseiten unter /leistungen/.
 *
 * Struktur pro Service:
 *   - slug, title, kicker (Eyebrow)
 *   - hero (Titel, Sub)
 *   - sections: einzelne Content-Blöcke mit Headline + Body + optionalen Bullets
 *   - faq: stadt-unabhängige FAQs zum Thema
 *   - cta: optionaler CTA-Block-Titel
 */
import type { FAQItem } from "../components/FAQ.astro";

export interface ServiceSection {
  /** Eyebrow über der Headline, kann leer sein */
  eyebrow?: string;
  headline: string;
  /** Längerer Text als HTML (kann <p>, <strong>, <ul> enthalten) */
  body: string;
  /** Optionale Bullet-Liste rechts neben dem Text */
  bullets?: string[];
  /** Alternativer Layout-Modus: "split" zeigt Body links + Bullets rechts; "stacked" alles untereinander */
  layout?: "split" | "stacked";
}

export interface Service {
  slug: string;
  /** Anzeige-Name im Header / Breadcrumb */
  name: string;
  /** Eyebrow auf der Detail-Seite */
  kicker: string;
  /** SEO Title */
  seoTitle: string;
  /** SEO Description */
  seoDescription: string;
  /** Hero-Titel: Zeile 1 weiß, Zeile 2 orange */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Hero-Subtitle */
  heroSub: string;
  /** Card-Beschreibung in der Übersicht */
  cardSummary: string;
  /** Inline-SVG-Path für das Icon */
  iconSvg: string;
  /** Sections mit Inhalt */
  sections: ServiceSection[];
  /** Themen-spezifische FAQs */
  faq: FAQItem[];
}

export const services: Service[] = [
  {
    slug: "webdesign",
    name: "Webdesign",
    kicker: "Leistung · Webdesign",
    seoTitle: "WordPress-Webdesign aus Sachsenhagen — ohne Pagebuilder",
    seoDescription:
      "Individuelle WordPress-Websites: schnell, mobil optimiert, SEO-bereit. Kein Elementor-Bloat. Aus Sachsenhagen für Niedersachsen und Deutschland.",
    heroTitleLine1: "Websites, die",
    heroTitleLine2: "geladen sind, bevor du blinzelst.",
    heroSub:
      "WordPress, individuell gebaut. Kein Theme-Klon, kein Pagebuilder-Spaghetti, keine 8-Sekunden-Ladezeit. Stattdessen: sauberes HTML, schmale JavaScript-Pakete, Core-Web-Vitals im grünen Bereich.",
    cardSummary:
      "Maßgeschneiderte WordPress-Websites — schnell, mobil optimiert, barrierefrei. Keine schwerfälligen Pagebuilder.",
    iconSvg: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
    sections: [
      {
        eyebrow: "Was du bekommst",
        headline: "Eine Website, die nicht nur gut aussieht, sondern auch arbeitet.",
        body: `<p>Wir starten mit einer Inhalts- und Wettbewerbsanalyse, bauen daraus eine klare Informations-Architektur und übersetzen die in ein Design, das zu deiner Marke passt — nicht zum nächsten Trend. Technisch landest du bei einer reinen WordPress-Installation ohne Pagebuilder-Ballast.</p>`,
        bullets: [
          "Individuelles Design statt Theme-Forest-Klon",
          "PageSpeed 90+ aus dem Karton",
          "Mobile-First gebaut",
          "WCAG-konforme Grundstruktur",
          "SEO-fertig ab Tag 1 (RankMath-konfiguriert)",
          "Volle Eigentümerschaft — kein Vendor-Lock-in",
        ],
        layout: "split",
      },
      {
        eyebrow: "Tech-Stack",
        headline: "Modern, schlank, wartbar.",
        body: `<p>Wir setzen auf <strong>WordPress 6.x</strong> als bewährtes CMS, kombiniert mit einem schlanken, custom-codierten Theme oder Astro+Headless-WP für Hochleistungs-Projekte. Bilder werden automatisch in modernen Formaten (WebP, AVIF) ausgespielt. JavaScript läuft nur dort, wo es wirklich nötig ist.</p><p>Wer maximale Geschwindigkeit braucht (oder einfach das beste aus seinem Ranking herausholen will), bekommt von uns auf Wunsch eine statische Variante per Astro: <strong>volle Trennung von Backend und Frontend</strong>, deployt als reines HTML/CSS auf einem CDN. Genau die Architektur, mit der unsere eigene Website gerade neu gebaut wird.</p>`,
        layout: "stacked",
      },
    ],
    faq: [
      {
        question: "Was kostet eine neue Website?",
        answerHtml: `Eine schlanke Visitenkartenseite mit unserer KI-Unterstützung ab rund <strong>500 €</strong>. Ein vollwertiger WordPress-Auftritt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>. Komplexere Projekte mit Shop oder Custom-Build entsprechend. Wir kalkulieren transparent nach Aufwand — keine Pakete, keine versteckten Posten.`,
      },
      {
        question: "Wie lange dauert ein Website-Projekt?",
        answerHtml: `Eine kompakte WordPress-Website ist in <strong>3-4 Wochen</strong> umgesetzt. Größere Projekte mit Shop oder umfangreichem Content brauchen <strong>6-10 Wochen</strong>. Wir planen gemeinsam einen realistischen Zeitplan — und halten ihn ein.`,
      },
      {
        question: "Kann ich die Website später selbst pflegen?",
        answerHtml: `Absolut. WordPress ist genau dafür gebaut. Wir liefern eine kurze Einführung und Video-Tutorials. Wer keine Zeit hat, bucht unsere <a href="/leistungen/wartung-support/" class="text-[var(--color-accent)]">Wartung &amp; Support</a> dazu.`,
      },
      {
        question: "Bekomme ich vorher einen Designentwurf?",
        answerHtml: `Ja. Wir zeigen vor der Umsetzung 1-2 Design-Konzepte (Figma) — inklusive Mobile-Variante. Erst nach deiner Freigabe wird gebaut.`,
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO & Lokale Auffindbarkeit",
    kicker: "Leistung · SEO",
    seoTitle: "SEO aus Sachsenhagen — lokal & technisch | 2FOX4",
    seoDescription:
      "Lokale SEO für Niedersachsen, technische On-Page-Optimierung, KI-gestützte Content-Strategie. RankMath, Schema.org, Core Web Vitals.",
    heroTitleLine1: "SEO, das nicht",
    heroTitleLine2: "nach Buzzword klingt.",
    heroSub:
      "Wir kümmern uns um die Stellschrauben, die wirklich an deiner Auffindbarkeit drehen: technische Hygiene, Inhalts-Architektur, lokale Signale, strukturierte Daten. KI dort, wo sie hilft — Erfahrung dort, wo sie zählt.",
    cardSummary:
      "Lokales SEO, On-Page, technische Hygiene und KI-gestützte Content-Strategie. Mit RankMath und Schema.org.",
    iconSvg: `<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>`,
    sections: [
      {
        eyebrow: "Drei Säulen",
        headline: "Lokales SEO, technisches SEO, Content-SEO.",
        body: `<p>SEO funktioniert nicht in einem Bereich allein. Wir arbeiten parallel an drei Achsen — und merken im Reporting genau, welche davon dir gerade die meiste Wirkung bringt.</p>`,
        bullets: [
          "Lokales SEO: Google Business Profile, lokale Citations, NAP-Konsistenz",
          "Technisches SEO: Core Web Vitals, sauberer Code, Crawl-Budget",
          "Content-SEO: Keyword-Recherche, Cluster-Aufbau, Snippet-Optimierung",
          "Strukturierte Daten: LocalBusiness, FAQ, Breadcrumb, Article",
          "Monitoring per RankMath Pro + Google Search Console",
          "KI-gestützte Content-Produktion (mit menschlicher Endredaktion)",
        ],
        layout: "split",
      },
      {
        eyebrow: "Lokales SEO",
        headline: "Damit deine Nachbarn dich finden.",
        body: `<p>Lokales SEO ist mehr als ein Google-Business-Eintrag. Wir kümmern uns um die <strong>NAP-Konsistenz</strong> (Name, Adresse, Telefon) über alle wichtigen Verzeichnisse, optimieren dein Google-Business-Profil, bauen lokale Schema.org-Strukturen ins HTML ein und sorgen mit dedizierten Stadt-Landingpages dafür, dass du für regionale Suchen auftauchst.</p>`,
        layout: "stacked",
      },
      {
        eyebrow: "KI im Einsatz",
        headline: "Wir nutzen KI — aber wir vertrauen ihr nicht blind.",
        body: `<p>Unser eigenes WordPress-Plugin <a href="/wp-plugins/wp-blog-agent/" class="text-[var(--color-accent)]">WP Blog Agent</a> hilft beim Recherchieren, Strukturieren und Vor-Texten von Blog-Beiträgen. Aber jeder Beitrag wird vor Veröffentlichung von einem Menschen redigiert. Wir sehen KI als Beschleuniger, nicht als Ersatz für Qualität.</p>`,
        layout: "stacked",
      },
    ],
    faq: [
      {
        question: "Wie schnell wirkt SEO?",
        answerHtml: `Technische Fixes (Ladezeit, Schema, fehlende Meta-Daten) wirken oft <strong>innerhalb von 2-4 Wochen</strong> sichtbar. Content-SEO ist ein langfristiges Spiel: erste Effekte nach 2-3 Monaten, nennenswerte Ranking-Verbesserungen typischerweise nach 4-6 Monaten. Wer schnelle Gewinne braucht, beginnt mit lokalen Signalen.`,
      },
      {
        question: "Übernehmt ihr auch die laufende Content-Produktion?",
        answerHtml: `Ja, auf Wunsch. Wir produzieren Blogbeiträge, Ratgeber und Landingpages — entweder klassisch redaktionell oder mit unserem WP Blog Agent als KI-Vorlage. Final geht aber immer ein Mensch drüber.`,
      },
      {
        question: "Wieso braucht es Schema.org-Markup?",
        answerHtml: `Strukturierte Daten helfen Google, deine Inhalte richtig einzuordnen — und entscheiden mit darüber, ob du in den Rich Snippets (Sternebewertung, FAQ, Breadcrumb) erscheinst. Das erhöht deine Klickrate erheblich, oft ohne Position-Gewinn.`,
      },
      {
        question: "Bekomme ich ein SEO-Reporting?",
        answerHtml: `Ja, monatlich. Du bekommst die wichtigsten Kennzahlen aus Search Console, GA4 und RankMath als verständliche Zusammenfassung — keine 30-Seiten-PDF, in der die Antwort versteckt liegt.`,
      },
    ],
  },
  {
    slug: "wartung-support",
    name: "WordPress-Wartung & Support",
    kicker: "Leistung · Wartung & Support",
    seoTitle: "WordPress-Wartung aus Sachsenhagen — Sicherheit, Backups, Updates, Performance",
    seoDescription:
      "Wir kümmern uns um deine WordPress-Installation: Sicherheits-Updates, Backups, Performance-Tuning, Uptime-Monitoring. Ohne Vertrag wartbar.",
    heroTitleLine1: "Wir halten deine",
    heroTitleLine2: "Website am Leben.",
    heroSub:
      "Updates installieren sich nicht von selbst — und Backups werden meist erst dann gemacht, wenn es schon zu spät ist. Wir kümmern uns um den technischen Unterbau, damit du dich aufs Geschäft konzentrieren kannst.",
    cardSummary:
      "Sicherheits-Updates, Backups, Performance-Tuning, Uptime-Monitoring — mit fairer Pauschale oder auf Aufruf.",
    iconSvg: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
    sections: [
      {
        eyebrow: "Was drin ist",
        headline: "Alle Routine-Arbeiten, die normalerweise liegenbleiben.",
        body: `<p>Pauschalen ab <strong>49 €/Monat</strong> für kleine Sites, <strong>129 €/Monat</strong> für umfangreichere Installationen mit Shop oder Custom-Plugins. Auch ohne Pauschale auf Aufruf abrechenbar.</p>`,
        bullets: [
          "Wöchentliche Updates: Core, Plugins, Themes",
          "Tägliche externe Backups (30 Tage Aufbewahrung)",
          "Security-Monitoring + Notfall-Wiederherstellung",
          "PageSpeed-Checks und Optimierung",
          "Uptime-Monitoring rund um die Uhr",
          "Pro Quartal: kurzer Statusreport per E-Mail",
        ],
        layout: "split",
      },
    ],
    faq: [
      {
        question: "Was passiert, wenn meine Website angegriffen wird?",
        answerHtml: `Im Wartungspaket sind <strong>Notfall-Wiederherstellungen aus dem letzten sauberen Backup inklusive</strong>. Wir analysieren die Angriffsquelle, schließen die Lücke und stellen die Site wieder her — ohne extra Stundensatz.`,
      },
      {
        question: "Brauche ich eine monatliche Pauschale?",
        answerHtml: `Nein. Du kannst Wartung auch auf Aufruf buchen. Für regelmäßig genutzte Sites lohnt sich die Pauschale meistens, weil Updates dann nicht in Quartals-Sprüngen sondern wöchentlich laufen — was Sicherheitslücken deutlich kleiner hält.`,
      },
      {
        question: "Wird auch das Hosting übernommen?",
        answerHtml: `Auf Wunsch ja. Siehe unsere <a href="/leistungen/hosting/" class="text-[var(--color-accent)]">Hosting-Seite</a>. Wenn du schon irgendwo hostest, betreuen wir deinen Server-Provider mit, ohne dass du umziehen musst.`,
      },
    ],
  },
  {
    slug: "hosting",
    name: "Hosting",
    kicker: "Leistung · Hosting",
    seoTitle: "WordPress-Hosting aus Deutschland — schnell, sicher, DSGVO-konform",
    seoDescription:
      "Performance-Hosting für WordPress, Shopware und Astro: Schnelle Server, automatische Backups, deutsche Rechenzentren. Auf Wunsch mit Wartung.",
    heroTitleLine1: "Hosting, das nicht",
    heroTitleLine2: "in deinem Weg steht.",
    heroSub:
      "Wir hosten unsere Projekte auf einer überschaubaren Anzahl ausgewählter Server in deutschen Rechenzentren — DSGVO-konform, performant, mit unserer Wartung im Hintergrund.",
    cardSummary:
      "Schnelles WordPress-Hosting aus Deutschland mit Backups, Monitoring und auf Wunsch komplett verwaltet.",
    iconSvg: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    sections: [
      {
        eyebrow: "Was drin ist",
        headline: "Hosting, das wie eine Wartungs-Pauschale fühlt.",
        body: `<p>Wir hosten direkt bei <strong>all-inkl.com</strong> (deutsches Rechenzentrum) oder einem unserer Partner. Pakete starten bei <strong>9 €/Monat</strong> für eine WordPress-Single-Site, inklusive PHP 8.3, MariaDB, Let&apos;s-Encrypt-SSL, täglichem Backup.</p>`,
        bullets: [
          "Deutsche Rechenzentren (Frankfurt / München)",
          "PHP 8.3 / MariaDB / OPcache aktiviert",
          "HTTP/2 und HTTP/3",
          "Tägliche externe Backups",
          "Let's-Encrypt-SSL inklusive",
          "Auf Wunsch komplett mit Wartung kombiniert",
        ],
        layout: "split",
      },
    ],
    faq: [
      {
        question: "Kann ich meine bestehende Website zu euch umziehen?",
        answerHtml: `Klar. Der Umzug ist im Hostingpaket inklusive: Wir kopieren Dateien und Datenbank, richten Mailserver ein, ziehen die Domain um — und du merkst (im besten Fall) nichts davon, weil du nur am nächsten Tag eine schnellere Website hast.`,
      },
      {
        question: "Wo stehen die Server?",
        answerHtml: `In Deutschland (Frankfurt / München). DSGVO-konform, ISO-zertifiziert. Wir nutzen keine US-CDNs ohne Auftragsverarbeitungsvertrag.`,
      },
      {
        question: "Wie sieht es mit Skalierung aus?",
        answerHtml: `Für die meisten WordPress- und WooCommerce-Sites reicht ein Shared-Hosting bis weit über 100.000 Besucher pro Monat. Wenn du in die Größenordnung kommst, ziehen wir um auf vServer oder Managed-Hosting (Cloud-Anbieter mit Kubernetes). Für Astro-Projekte deployen wir direkt auf CDN.`,
      },
    ],
  },
  {
    slug: "digitalisierungsberatung",
    name: "Digitalisierungsberatung",
    kicker: "Leistung · Digitalisierung",
    seoTitle: "Digitalisierungsberatung für KMU — ehrlich, ohne KI-Hype, BAFA-förderfähig",
    seoDescription:
      "Wir zeigen dir, welche Prozesse sich automatisieren lohnen und welche nicht. BAFA-förderfähige Beratung für KMU in Niedersachsen.",
    heroTitleLine1: "Beratung ohne",
    heroTitleLine2: "Buzzword-Bingo.",
    heroSub:
      "Wir kommen nicht mit einer KI-Slides-Show und reden 90 Minuten darüber, wie disruptiv alles ist. Wir setzen uns mit dir 2 Stunden hin, schauen uns deine Prozesse an — und sagen ehrlich, was sich lohnt zu automatisieren und was nicht.",
    cardSummary:
      "Ehrliche Beratung für KMU: welche Prozesse sich automatisieren lohnen, welche nicht. BAFA-förderfähig.",
    iconSvg: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`,
    sections: [
      {
        eyebrow: "Was du bekommst",
        headline: "Eine Außensicht auf deine digitalen Werkzeuge.",
        body: `<p>Wir starten mit einem <strong>Bestands-Audit</strong>: welche Tools nutzt du, welche Schritte machst du noch manuell, welche Übergaben sind brüchig? Daraus entsteht eine Liste an Optimierungs-Ideen, priorisiert nach <strong>Wirkung vs. Aufwand</strong>. Du entscheidest dann, was du selbst umsetzt und was wir übernehmen.</p>`,
        bullets: [
          "2-Stunden Bestands-Audit vor Ort oder per Video",
          "Schriftliche Empfehlung mit Quick-Wins",
          "Tool-Stack-Vorschlag (mit konkreten Produkten)",
          "ROI-Schätzung pro Maßnahme",
          "Optional: gemeinsame Umsetzung",
          "Förderfähig nach BAFA-Richtlinien für KMU",
        ],
        layout: "split",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Beratung?",
        answerHtml: `Ein Bestands-Audit inkl. schriftlicher Empfehlung kostet ab <strong>1.200 €</strong>. Bei BAFA-Förderfähigkeit übernimmt der Staat bis zu 50 % der Kosten — siehe unsere <a href="/leistungen/bafa-foerderung/" class="text-[var(--color-accent)]">BAFA-Seite</a>.`,
      },
      {
        question: "Bekomme ich auch Hilfe bei der Förderung?",
        answerHtml: `Ja, wir unterstützen beim Antrag (BAFA "Förderung von Unternehmensberatungen für KMU"). Den eigentlichen Antrag stellt dein Steuerberater oder du selbst — wir liefern alle nötigen Unterlagen.`,
      },
    ],
  },
  {
    slug: "bafa-foerderung",
    name: "BAFA-Förderung",
    kicker: "Leistung · Förderung",
    seoTitle: "BAFA-Förderung für Digitalisierung — bis zu 50 % Zuschuss für KMU",
    seoDescription:
      "Bis zu 50 % staatlicher Zuschuss für Digitalisierungsberatung über das BAFA-Programm. Wir helfen beim Antrag und bei der Umsetzung.",
    heroTitleLine1: "Bis zu 50 %",
    heroTitleLine2: "Zuschuss vom Staat.",
    heroSub:
      'Das BAFA-Programm „Förderung von Unternehmensberatungen für KMU" fördert genau die Art von Beratung, die wir anbieten. Wir helfen dir durch den Antrag und liefern die Unterlagen, die der Staat sehen will.',
    cardSummary:
      "Bis zu 50 % staatlicher Zuschuss für Digitalisierungsberatung. Wir unterstützen beim Antrag.",
    iconSvg: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`,
    sections: [
      {
        eyebrow: "So funktioniert es",
        headline: "Vier Schritte vom Antrag bis zur Auszahlung.",
        body: `<p>Die BAFA-Förderung ist überraschend unbürokratisch — wenn man weiß, welche Felder wichtig sind. Der typische Ablauf:</p>`,
        bullets: [
          "1. Antrag bei der BAFA stellen (vor Beratungsbeginn!)",
          "2. Bewilligungs-Bescheid abwarten (~4 Wochen)",
          "3. Beratung durchführen (von uns oder einem anderen anerkannten Berater)",
          "4. Verwendungsnachweis einreichen → Auszahlung",
        ],
        layout: "split",
      },
      {
        eyebrow: "Wichtig",
        headline: "Antrag muss vor Beratungsbeginn gestellt werden.",
        body: `<p>Das ist der häufigste Fehler: Erst beraten lassen, dann den Antrag stellen wollen — geht nicht. Die BAFA fördert nur Beratungen, die <strong>nach</strong> der Antragstellung beginnen. Plan also den Zeitpuffer ein.</p>`,
        layout: "stacked",
      },
    ],
    faq: [
      {
        question: "Wer ist berechtigt?",
        answerHtml: `Kleine und mittlere Unternehmen (KMU) mit Sitz in Deutschland und einem Jahresumsatz < 50 Mio. €. Solo-Selbstständige in der Regel auch — siehe BAFA-Richtlinien.`,
      },
      {
        question: "Wie hoch ist die Förderung?",
        answerHtml: `In Niedersachsen typischerweise <strong>50 % der Beratungskosten</strong>, gedeckelt bei einem maximalen Förderbetrag (aktuell 3.500 € Bundesmittel + ggf. Landesmittel). Genaue Quoten variieren — wir nennen dir die aktuellen Zahlen im Erstgespräch.`,
      },
      {
        question: "Kann ich euch als Berater wählen?",
        answerHtml: `Wir sind im BAFA-Beraterverzeichnis gelistet, ja. Du kannst aber auch jeden anderen anerkannten Berater wählen — die Förderung hängt nicht an uns persönlich.`,
      },
    ],
  },
  {
    slug: "barrierefreie-website",
    name: "Barrierefreie Website",
    kicker: "Leistung · Barrierefreiheit",
    seoTitle: "Barrierefreie WordPress-Websites — WCAG 2.2 / BFSG konform aus Sachsenhagen",
    seoDescription:
      "Wir bauen WCAG-konforme WordPress-Websites — wichtig für öffentliche Einrichtungen, Vereine und alle, die vom BFSG betroffen sind.",
    heroTitleLine1: "Eine Website, die",
    heroTitleLine2: "für alle funktioniert.",
    heroSub:
      "Barrierefreiheit ist nicht nur Pflicht für viele Branchen seit dem BFSG — sie ist auch einfach guter Code. Wir bauen Websites, die mit Screenreadern, Tastatur und reduzierter Bewegung sauber funktionieren.",
    cardSummary:
      "WCAG 2.2-konforme WordPress-Websites. Wichtig für öffentliche Einrichtungen, Vereine und BFSG-Betroffene.",
    iconSvg: `<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>`,
    sections: [
      {
        eyebrow: "Unser eigenes Plugin",
        headline: "2fox4 Accessibility Suite — auf jeder unserer Sites enthalten.",
        body: `<p>Wir entwickeln und pflegen die <a href="/wp-plugins/accessibility-suite/" class="text-[var(--color-accent)]">2fox4 Accessibility Suite</a>, ein WordPress-Plugin, das die häufigsten Accessibility-Probleme automatisch fixt: Kontrast-Probleme erkennen, ARIA-Labels nachrüsten, Skip-Links generieren, Schriftgröße auf Knopfdruck anpassen. Auf jeder Website, die wir bauen, ist es aktiviert.</p>`,
        layout: "stacked",
      },
      {
        eyebrow: "Was wir liefern",
        headline: "Mehr als ein Plugin — eine durchgehende Strategie.",
        body: `<p>Plugins allein machen eine Website nicht barrierefrei. Wir bauen die Seite von Grund auf so, dass die Suite überhaupt wirken kann.</p>`,
        bullets: [
          "Sauberes semantisches HTML (H1-Hierarchie, Landmark-Tags)",
          "Tastatur-Navigation auf jedem interaktiven Element",
          "Kontrast nach WCAG AA in allen Designs",
          "Alt-Texte für alle Bilder",
          "Reduzierte-Bewegung-Respekt für Animationen",
          "Erklärung zur Barrierefreiheit im Footer",
        ],
        layout: "split",
      },
    ],
    faq: [
      {
        question: "Bin ich vom BFSG betroffen?",
        answerHtml: `Seit dem 28.06.2025 gilt das Barrierefreiheitsstärkungsgesetz für viele Anbieter digitaler Produkte und Dienstleistungen — vor allem E-Commerce, Banking, Personenbeförderung, Telekommunikation. Wer auch zuvor schon unter WCAG-Pflichten stand (öffentliche Einrichtungen), bleibt es. Im Zweifel: Wir prüfen das in einem 15-Minuten-Call.`,
      },
      {
        question: "Was kostet ein Barrierefreiheits-Audit?",
        answerHtml: `Ein erster Audit mit Maßnahmen-Liste ab <strong>490 €</strong>. Umsetzung je nach Aufwand. Bei neu gebauten Websites ist Barrierefreiheit im Preis enthalten.`,
      },
    ],
  },
];

export function serviceBySlug(slug: string): Service {
  const s = services.find((s) => s.slug === slug);
  if (!s) throw new Error(`Service not found: ${slug}`);
  return s;
}
