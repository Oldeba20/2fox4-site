/**
 * Daten für die 8 Leistungsseiten unter /leistungen/.
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
  /** Optionales Bild, das innerhalb der Section angezeigt wird */
  image?: {
    /** Pfad relativ zur Site-Root, z. B. "/images/leistungen/print-design/flyer.svg" */
    src: string;
    /** Beschreibender Alt-Text für SEO und Screenreader */
    alt: string;
    /** Position: "right" (neben Bullets/Body) oder "below" (volle Breite unter Headline) */
    position?: "right" | "below";
  };
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
  /** Optionale TL;DR-/„Kurz gesagt"-Box (HTML erlaubt) — wird direkt unter dem Hero gerendert, GEO-optimiert für KI-Suchmaschinen. */
  tldr?: string;
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
    slug: "digitale-stadtrallyes",
    name: "Digitale Stadtrallyes",
    kicker: "Leistung · Digitale Stadtrallyes",
    seoTitle: "Digitale Stadtrallye entwickeln lassen — KI-Stadtführung fürs Handy | 2FOX4",
    seoDescription:
      "Digitale Stadtrallye als ortsbezogene Schnitzeljagd im Browser — ohne App-Store, DSGVO-konform, mit KI-Avatar. Aus Sachsenhagen für Tourismus & Stadtmarketing.",
    heroTitleLine1: "Eine Stadt voller",
    heroTitleLine2: "Geschichten — wir machen sie hörbar.",
    heroSub:
      "Eine ortsbezogene Schnitzeljagd direkt im Browser: Touristen und Einheimische lösen Rätsel an echten Orten, geführt von einem digitalen Charakter — etwa einer historischen Persönlichkeit, deren Porträt per KI zum sprechenden Avatar wird. GPS, Audio, Video, Karte — alles auf dem Handy, ohne App-Store-Installation.",
    cardSummary:
      "Ortsbezogene Schnitzeljagd im Browser — geführt von einem KI-Avatar, ohne App-Store, DSGVO-konform. Stadtgeschichte zum Erleben.",
    iconSvg: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
    sections: [
      {
        eyebrow: "Worum es geht",
        headline: "Stadtführung, die im Browser stattfindet — und Spaß macht.",
        body: `<p>Eine digitale Stadtrallye ist eine ortsbezogene Schnitzeljagd: Spieler lösen Rätsel an echten Orten in der Stadt, geführt von einem digitalen Charakter — einer historischen Persönlichkeit, einem Maskottchen oder einem Reiseleiter. GPS-Karte, Audio und Avatar-Video laufen direkt im Handy-Browser, <strong>ohne Installation aus dem App-Store</strong>. Wer mag, pinnt die Rallye als App-ähnliche Kachel auf den Home-Bildschirm.</p><p>So führt eine Route zum Beispiel in mehreren Stationen durch eine Altstadt — geführt von einer historischen Persönlichkeit, deren gemeinfreies Porträt per KI zum sprechenden Avatar wird. Konzeptionell skaliert das Format auf 10–12 Stationen und mehrere Themenrouten.</p>`,
        bullets: [
          "Ohne App-Store — direkt im Browser spielbar, Installation optional als PWA",
          "Historisch authentisch — Wikipedia-Gemälde wird per KI zum sprechenden Avatar",
          "DSGVO-konform by Design — Standort bleibt auf dem Gerät, kein Tracking, deutsches Hosting",
          "Förderfähig — als digitales Tourismus-Projekt über NBank, Digitalbonus & Co.",
          "Skalierbar — eine Engine, mehrere Städte unter eigener Domain",
          "Lokal verankert — entwickelt in Sachsenhagen, für Kommunen in der Region",
        ],
        layout: "split",
      },
      {
        eyebrow: "Was die Leistung umfasst",
        headline: "Von der Storyline bis zum laufenden Betrieb — alles aus einer Hand.",
        body: `<p>Wir übernehmen den kompletten Weg: <strong>Konzeption</strong> der Storyline mit historischer Bezugsfigur oder Maskottchen, Stationsauswahl gemeinsam mit Tourist-Info und Heimatpflegern, Rätsel-Mechanik (Beobachtung, Logik, Zahlen-Eingabe, Multiple Choice) und Drehbuch pro Station inklusive Audio-Texten.</p><p>Die <strong>Inhalte-Produktion</strong> umfasst Voiceover per Voice Cloning oder lokalem Sprecher (mehrsprachig möglich) sowie Lipsync-Videos, die ein historisches Porträt zum sprechenden Avatar machen. Beim <strong>Branding</strong> bekommt jede Stadt ihre eigene Domain, ihr Logo, ihre Farbpalette und ihr App-Icon. Für den laufenden <strong>Betrieb</strong> sorgen Hosting bei deutschem Provider und ein Wartungsvertrag für Updates und Content-Erweiterung.</p>`,
        bullets: [
          "Konzeption: Storyline, Stationsauswahl, Rätsel-Mechanik, Drehbücher",
          "Audio: Voice Cloning oder lokaler Sprecher via ElevenLabs",
          "Video: Lipsync-Avatar aus historischem Porträt via D-ID",
          "Branding: eigene Domain, Logo, Farben, App-Icon",
          "Offline-fähig durch Service Worker",
          "Betrieb: deutsches Hosting + Wartungsvertrag",
        ],
        layout: "split",
      },
      {
        eyebrow: "Technologie-Stack",
        headline: "Schlank gebaut, langzeitwartbar, ohne Framework-Lock-in.",
        body: `<p>Die Engine läuft in <strong>Vanilla HTML/CSS/JS</strong> mit Leaflet für die Karte — keine Framework-Abhängigkeit, die in drei Jahren neu gebaut werden muss. Kartenmaterial kommt von OpenStreetMap (frei, DSGVO-freundlich, keine Google-Maps-Kosten). Audio entsteht mit ElevenLabs Multilingual v2 für saubere deutsche Aussprache und Mehrsprachigkeit, die Avatar-Videos mit D-ID Studio. Als Progressive Web App ist die Rallye über Service Worker und Manifest offline-fähig und installierbar. Gehostet wird auf deutschen Servern (KAS / ALL-INKL) — DSGVO-konform, schnell, ohne US-CDN.</p>`,
        layout: "stacked",
      },
      {
        eyebrow: "Für wen es sich lohnt",
        headline: "Tourismus, Stadtmarketing, Wirtschaftsförderung, Vereine.",
        body: `<p><strong>Tourist-Information &amp; Stadtmarketing</strong> halten Besucher länger in der Stadt und binden sie tiefer ein — ein Erlebnis-Format jenseits der Print-Broschüre, das junge Familien und digitalaffine Touristen gleichermaßen abholt.</p><p><strong>Wirtschaftsförderungen und Regionen</strong> machen mehrere Städte unter einer regionalen Klammer sichtbar: einzelne Rallyes mit eigener Markenidentität, optional gebündelt unter einem Regional-Portal. Und <strong>Vereine, Initiativen und Heimatpflege</strong> bekommen einen kostengünstigen Weg, ihr Wissen in ein Erlebnis zu verwandeln, das auch ohne Stadtführer funktioniert — bis hin zum Edutainment-Format für Schulklassen und Familien.</p>`,
        layout: "stacked",
      },
    ],
    faq: [
      {
        question: "Müssen Nutzer eine App installieren?",
        answerHtml: `Nein. Die Rallye läuft komplett im Handy-Browser — einfach Link öffnen und loslegen. Wer mag, kann sie als <strong>Progressive Web App</strong> auf den Home-Bildschirm pinnen, dann verhält sie sich wie eine installierte App (eigenes Icon, Vollbild, offline-fähig). Der Umweg über App Store oder Play Store entfällt komplett — das senkt die Einstiegshürde drastisch.`,
      },
      {
        question: "Ist das datenschutzkonform?",
        answerHtml: `Ja, DSGVO-konform by Design. Die <strong>Standortdaten verlassen nie das Gerät</strong> — GPS wird nur lokal im Browser ausgewertet, um die Karte mitzuführen und Stationen freizuschalten. Wir setzen keine externen Tracker ein und hosten auf deutschen Servern. Kein Google Maps, kein US-CDN ohne Auftragsverarbeitungsvertrag.`,
      },
      {
        question: "Wie wird daraus ein sprechender historischer Avatar?",
        answerHtml: `Wir nehmen ein gemeinfreies Porträt (z. B. ein Wikipedia-Gemälde) und animieren es per <strong>D-ID</strong> mit Lipsync zum passenden Audio. Die Stimme entsteht über ElevenLabs — wahlweise als Voice Cloning oder mit einem lokalen Sprecher. Ergebnis: Die historische Figur erzählt ihre Geschichte selbst, statt dass man sie auf einer Tafel nachliest.`,
      },
      {
        question: "Kann ich das fördern lassen?",
        answerHtml: `Häufig ja. Als digitales Tourismus- und Digitalisierungsprojekt ist eine Stadtrallye potenziell über Programme wie <strong>NBank Tourismus, Digitalbonus</strong> oder weitere Förderungen anschlagbar. Oliver ist BAFA-Berater — die Förderberatung läuft direkt über 2fox4 mit. Welche Töpfe konkret passen, klären wir im Erstgespräch.`,
      },
      {
        question: "Lässt sich das auf mehrere Städte einer Region ausweiten?",
        answerHtml: `Genau dafür ist die Architektur gebaut. Eine geteilte Engine bedient mehrere Städte, jede mit <strong>eigener Domain und eigenem Branding</strong>. Sobald der politische Rückhalt da ist, lässt sich ein übergeordnetes Regional-Portal darüberlegen, das alle Rallyes bündelt. So tritt die Region gemeinsam auf, ohne dass eine Stadt ihre eigene Identität verliert.`,
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
    name: "KI- & Digitalisierungsberatung",
    kicker: "Leistung · KI-Beratung für den Mittelstand",
    seoTitle: "KI-Beratung für den Mittelstand — ehrlich, ohne Hype, BAFA-förderfähig | 2FOX4",
    seoDescription:
      "KI-Beratung für KMU: Use-Case-Analyse, Prozessautomatisierung mit KI-Agenten, Tool-Auswahl und Schulungen. Ehrlich, ohne Hype, BAFA-förderfähig — aus Niedersachsen.",
    heroTitleLine1: "KI im Mittelstand,",
    heroTitleLine2: "ohne Buzzword-Bingo.",
    heroSub:
      "Wir kommen nicht mit einer 90-Minuten-Slideshow über disruptive Zukunftsvisionen. Wir setzen uns mit dir hin, schauen uns deine Prozesse an — und sagen ehrlich, wo dir KI heute schon Zeit und Geld spart und wo sie überflüssig ist. Von der Use-Case-Analyse über Automatisierung mit KI-Agenten bis zur Schulung deines Teams.",
    cardSummary:
      "KI-Beratung für KMU: welche KI-Use-Cases sich wirklich lohnen, welche nicht. Automatisierung, Tool-Auswahl, Schulungen — BAFA-förderfähig.",
    iconSvg: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`,
    tldr: `<strong>Kurz gesagt:</strong> Wir beraten kleine und mittlere Unternehmen dabei, Künstliche Intelligenz praktisch einzusetzen — in vier Schritten: <strong>(1) KI-Strategie &amp; Use-Case-Analyse</strong> (wo lohnt sich KI überhaupt?), <strong>(2) Prozessautomatisierung mit KI-Agenten</strong>, <strong>(3) Auswahl &amp; Einführung passender KI-Tools</strong> und <strong>(4) Schulungen für dein Team</strong>. Ehrlich statt Hype, mit ROI-Blick und in vielen Fällen <strong>BAFA-förderfähig</strong> (bis zu 50 % Zuschuss).`,
    sections: [
      {
        eyebrow: "Schritt 1 · Strategie",
        headline: "KI-Strategie & Use-Case-Analyse: Wo lohnt sich KI wirklich?",
        body: `<p>Bevor irgendein Tool eingeführt wird, klären wir die wichtigste Frage: <strong>Wo spart dir KI im Tagesgeschäft echtes Geld und Zeit — und wo ist sie nur teure Spielerei?</strong> Wir starten mit einem Bestands-Audit deiner Prozesse, identifizieren konkrete KI-Use-Cases und priorisieren sie nach <strong>Wirkung gegen Aufwand</strong>. Heraus kommt eine klare Roadmap: was zuerst, was später, was gar nicht.</p>`,
        bullets: [
          "2-Stunden Prozess-Audit vor Ort oder per Video",
          "Konkrete KI-Use-Cases statt Buzzwords",
          "Priorisierung nach Wirkung vs. Aufwand",
          "ROI-Schätzung pro Maßnahme",
          "Schriftliche Roadmap mit Quick-Wins",
          "Förderfähig nach BAFA-Richtlinien für KMU",
        ],
        layout: "split",
      },
      {
        eyebrow: "Schritt 2 · Automatisierung",
        headline: "Prozessautomatisierung mit KI-Agenten.",
        body: `<p>Repetitive Fleißarbeit — Angebote schreiben, Daten übertragen, recherchieren, dokumentieren — lässt sich heute zu großen Teilen an KI-Agenten delegieren. Wir bauen die passenden Automatisierungen und binden sie an deine bestehenden Werkzeuge (E-Mail, CRM, Website, Shop) an, sodass deine Mitarbeiter von der Routine entlastet werden und sich auf das konzentrieren, wofür man wirklich Menschen braucht.</p><p>Wie ein ganzer Schwarm aus KI-Agenten eine große Aufgabe selbstständig plant, abarbeitet und prüft, zeigen wir am Beispiel im Beitrag <a href="/blog/ultracode-ki-agenten-schwarm-mittelstand/">KI-Agenten-Schwarm für den Mittelstand</a>.</p>`,
        layout: "stacked",
      },
      {
        eyebrow: "Schritt 3 · Tools",
        headline: "Auswahl & Einführung der richtigen KI-Tools.",
        body: `<p>Der Markt ist unübersichtlich und ändert sich wöchentlich. Wir kennen die Werkzeuge aus dem täglichen Einsatz in Kundenprojekten und wählen mit dir die aus, die zu <strong>deinem</strong> Betrieb passen — datenschutzkonform, bezahlbar und ohne dich in einen Anbieter zu sperren. Anschließend führen wir sie sauber ein, statt dich mit einem Login allein zu lassen.</p><p>Worauf es bei der Tool-Wahl ankommt, vertiefen wir im Beitrag <a href="/blog/kostenlose-vs-bezahlte-ki-tools-2026/">Kostenlose vs. bezahlte KI-Tools</a>.</p>`,
        layout: "stacked",
      },
      {
        eyebrow: "Schritt 4 · Befähigung",
        headline: "Schulungen & Workshops für dein Team.",
        body: `<p>Die beste KI nützt nichts, wenn sie niemand bedient. Deshalb befähigen wir dein Team in praxisnahen Workshops: <strong>KI-Grundlagen, sinnvolles Prompting, sichere und datenschutzkonforme Nutzung</strong> im Arbeitsalltag. Kein theoretischer Frontalunterricht, sondern an euren echten Aufgaben.</p>`,
        bullets: [
          "Praxis-Workshops an euren echten Aufgaben",
          "KI-Grundlagen & Prompting verständlich erklärt",
          "Datenschutz & sichere Nutzung im Team",
          "Auf Wunsch laufende Begleitung statt Einmal-Termin",
        ],
        layout: "split",
      },
    ],
    faq: [
      {
        question: "Für wen lohnt sich eine KI-Beratung?",
        answerHtml: `Für kleine und mittlere Unternehmen, die ahnen, dass KI ihnen helfen könnte, aber nicht wissen, wo sie anfangen sollen. Du brauchst kein Vorwissen und keine eigene IT-Abteilung — wir holen dich dort ab, wo du stehst, und übersetzen KI in konkrete, bezahlbare Schritte für deinen Betrieb.`,
      },
      {
        question: "Was kostet eine KI-Beratung?",
        answerHtml: `Ein Prozess-Audit inkl. schriftlicher Roadmap kostet ab <strong>1.200 €</strong>. Bei BAFA-Förderfähigkeit übernimmt der Staat bis zu 50 % der Kosten — siehe unsere <a href="/leistungen/bafa-foerderung/" class="text-[var(--color-accent)]">BAFA-Seite</a>. Umsetzung und Schulungen kalkulieren wir transparent nach Aufwand.`,
      },
      {
        question: "Ersetzt KI dann meine Mitarbeiter?",
        answerHtml: `Nein. Unser Ansatz entlastet Menschen von Routine- und Fleißarbeit, damit sie sich auf die Aufgaben konzentrieren können, für die man wirklich Menschen braucht. KI ist bei uns ein Beschleuniger, kein Ersatz für Qualität und Urteilsvermögen.`,
      },
      {
        question: "Ist die KI-Beratung BAFA-förderfähig?",
        answerHtml: `In vielen Fällen ja. Die Beratung kann über das BAFA-Programm „Förderung von Unternehmensberatungen für KMU" bezuschusst werden. Wir unterstützen beim Antrag und liefern alle nötigen Unterlagen — den Antrag selbst stellst du oder dein Steuerberater. Details auf unserer <a href="/leistungen/bafa-foerderung/" class="text-[var(--color-accent)]">BAFA-Seite</a>.`,
      },
      {
        question: "Wie stellt ihr sicher, dass KI datenschutzkonform eingesetzt wird?",
        answerHtml: `Wir wählen Tools und Hosting-Varianten so aus, dass sie DSGVO-konform betrieben werden können (z. B. EU-Hosting), und schulen dein Team im sicheren Umgang mit Unternehmensdaten. Datenschutz ist Teil jeder Use-Case-Bewertung — nicht ein nachträglicher Anbau.`,
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
  {
    slug: "print-design",
    name: "Print- & Messedesign",
    kicker: "Leistung · Print & Messe",
    seoTitle: "Print-Design & Messebau aus Sachsenhagen — Flyer, Plakate, Prospekte, Messestand",
    seoDescription:
      "Wir gestalten Flyer, Prospekte, Plakate und ganze Messestände — vom Reinzeichnungs-PDF bis zum aufgebauten Stand. Druckfertig, markenkonsistent, regional aus Niedersachsen.",
    heroTitleLine1: "Print, der nicht",
    heroTitleLine2: "im Papierkorb landet.",
    heroSub:
      "Visitenkarte, Imageprospekt, A0-Plakat oder kompletter Messestand — wir denken Druck und Raum von der Marke her, nicht von der Vorlage im Online-Shop. Reinzeichnungssicher, drucklos abnehmbar, mit Druckerei deiner Wahl oder unserer.",
    cardSummary:
      "Flyer, Prospekte, Plakate und Messestände — markenkonsistent gestaltet, druckfertig geliefert. Regional aus Sachsenhagen.",
    iconSvg: `<path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6M9 9h2"/>`,
    sections: [
      {
        eyebrow: "Was wir gestalten",
        headline: "Vom Visitenkarten-Stapel bis zum 24 m² Messestand.",
        body: `<p>Wir bauen nicht nur Websites — wir gestalten die komplette visuelle Identität, mit der dein Unternehmen am Markt auftritt. Ob du gerade einen Imageprospekt für die nächste Akquise brauchst, ein A0-Plakat für die regionale Veranstaltung oder einen Messestand, der auf der nächsten Hannover Messe Aufmerksamkeit zieht: wir liefern Konzept, Layout und druckfertige Reinzeichnung aus einer Hand.</p><p>Alle Druck-Materialien werden im selben visuellen System wie deine Website gestaltet — Farbe, Typografie, Bildsprache bleiben konsistent. Das spart dir auf Dauer Geld, weil du kein zweites Mal „Corporate Design" einkaufen musst.</p>`,
        bullets: [
          "Flyer & Folder (DIN lang, A6, A5, Wickelfalz)",
          "Imageprospekte & Kataloge (8 bis 64 Seiten)",
          "Plakate (A3 bis A0, City-Light, Bauzaun)",
          "Visitenkarten, Briefpapier, Rechnungsvorlagen",
          "Rollups, Banner, Beachflags",
          "Messestände (Modul bis individueller Standbau)",
        ],
        layout: "split",
        image: {
          src: "/images/leistungen/print-design/flyer-mockup.webp",
          alt: "Drei DIN-lang-Flyer von 2fox4 auf schwarzem Designer-Schreibtisch — schwarze Cover mit orangenem Akzentstreifen, geöffneter Mittelflyer mit Layout und Call-to-Action",
          position: "below",
        },
      },
      {
        eyebrow: "Wie wir arbeiten",
        headline: "Briefing, Konzept, Reinzeichnung — und dann ab in den Druck.",
        body: `<p>Der Ablauf für ein Print-Projekt ist immer derselbe, egal ob Flyer oder Messestand: wir starten mit einem <strong>Briefing-Gespräch</strong> (Zielgruppe, Botschaft, Distributionsweg). Daraus entstehen 1-2 Layout-Konzepte, die wir gemeinsam an deinen Texten und Bildern entlang verfeinern. Erst wenn alles passt, geht's in die <strong>Reinzeichnung</strong> — also das druckfertige PDF mit Beschnitt, Passmarken und richtigem Farbprofil (CMYK Fogra39 in der Regel).</p><p>Den Druck selbst übernehmen wir bei Bedarf über unsere Partner-Druckereien in der Region (kurze Wege, faire Preise), oder du lieferst die Dateien bei deiner Hausdruckerei ab. Bei Messeständen koordinieren wir den Aufbau direkt mit dem Standbauer.</p>`,
        layout: "stacked",
        image: {
          src: "/images/leistungen/print-design/plakat-mockup.webp",
          alt: "A1-Plakat von 2fox4 mit Headline „DRUCK, DER WIRKT.\" auf Betonwand im urbanen Umfeld — schwarzer Hintergrund, orangener Akzent, im goldenen Abendlicht",
          position: "below",
        },
      },
      {
        eyebrow: "Messestände",
        headline: "Wir denken den Stand vom ersten Eindruck bis zum Gesprächsplatz.",
        body: `<p>Ein guter Messestand ist mehr als eine bedruckte Rückwand mit Logo. Wir planen Stände von <strong>9 m² bis 60 m²</strong> — mit klarer Besucherführung, Blickfang-Element auf 8 Meter Sichtweite, Gesprächs- und Rückzugszonen sowie Lager- und Cateringbereich. Auf Wunsch komplett mit 3D-Visualisierung vor der Buchung, damit du dem Vorstand zeigen kannst, was am Standort ankommt.</p><p>Typische Stationen, die wir abdecken: <strong>Hannover Messe, Domotex, IAA, IDS, lokale Gewerbeschauen</strong> in Stadthagen, Minden und Hannover. Wir arbeiten mit zwei festen Standbau-Partnern aus der Region zusammen, kennen die Hallen und die Logistik.</p>`,
        bullets: [
          "Standkonzept mit Grundriss und 3D-Visualisierung",
          "Grafiken für Rückwand, Theken, Counter, Stelen",
          "Druckdaten in Standbauer-Spezifikation",
          "Mietsysteme oder individueller Standbau",
          "Koordination Aufbau & Abbau vor Ort",
          "Erweiterbar um Giveaways, Roll-ups, Lanyards",
        ],
        layout: "split",
        image: {
          src: "/images/leistungen/print-design/messestand-mockup.webp",
          alt: "Messestand von 2fox4 in einer modernen Messehalle — schwarze Rückwand mit Headline „WIR BAUEN AUFTRITTE.\", orangener Diagonalstreifen, Theke, zwei Roll-ups und Mitarbeitende im Gespräch",
          position: "below",
        },
      },
    ],
    faq: [
      {
        question: "Was kostet ein Flyer oder Prospekt?",
        answerHtml: `Ein klassischer DIN-lang-Flyer (4-seitig, Wickelfalz) startet bei <strong>250 € Gestaltung</strong> plus Druck. Ein Imageprospekt mit 8-12 Seiten typischerweise zwischen <strong>800 € und 1.800 €</strong>. Druckpreise hängen vom Papier und der Auflage ab — wir holen die Angebote für dich ein.`,
      },
      {
        question: "Und ein Messestand?",
        answerHtml: `Grafische Gestaltung eines 12-m²-Stands (Rückwand, Theke, Roll-ups, Beschilderung) ab <strong>1.500 €</strong>. Inklusive 3D-Vorschau ab <strong>2.200 €</strong>. Der eigentliche Standbau (Material, Aufbau, Logistik) wird separat vom Standbauer abgerechnet — typischerweise 3.000 € bis 12.000 € je nach Größe und Mietsystem vs. Eigenbau.`,
      },
      {
        question: "Liefert ihr auch druckfertige Daten an meine Druckerei?",
        answerHtml: `Selbstverständlich. Du bekommst von uns das fertige <strong>Druck-PDF nach PDF/X-4-Standard</strong>: mit 3 mm Beschnitt, Passmarken, CMYK-Farbprofil und allen Schriften eingebettet. Jede seriöse Druckerei (online oder lokal) verarbeitet das ohne Rückfragen.`,
      },
      {
        question: "Könnt ihr meine alten Vorlagen weiterverwenden?",
        answerHtml: `Wenn dein bisheriger Designer InDesign- oder Illustrator-Daten geliefert hat, ja. Bei reinen PDF-Dateien (ohne offene Layout-Daten) ist es oft sinnvoller, das Layout neu aufzubauen — die Stunden für das Auseinandernehmen eines fremden PDFs sind meist teurer als ein sauberes Neu-Layout.`,
      },
      {
        question: "Macht ihr auch Logos und Corporate Design?",
        answerHtml: `Ja. Wir entwickeln Logos und komplette Corporate-Design-Manuals (Farben, Typografie, Bildwelten, Anwendungsregeln) als Grundlage für alle weiteren Print- und Web-Auftritte. Ein kompaktes CD-Paket startet bei <strong>1.200 €</strong>.`,
      },
      {
        question: "Bis wann muss ich für eine Messe buchen?",
        answerHtml: `Für regionale Gewerbeschauen reichen <strong>4-6 Wochen Vorlauf</strong>. Für größere Messen (Hannover Messe, Domotex) planen wir mindestens <strong>8-12 Wochen</strong> ein — sonst wird's beim Standbauer und bei der Hallen-Logistik eng. Je früher du uns ansprichst, desto entspannter wird's für alle.`,
      },
    ],
  },
];

export function serviceBySlug(slug: string): Service {
  const s = services.find((s) => s.slug === slug);
  if (!s) throw new Error(`Service not found: ${slug}`);
  return s;
}
