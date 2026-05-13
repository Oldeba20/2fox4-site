/**
 * Daten für die 7 Plugin-Marketingseiten unter /wp-plugins/[slug]/.
 *
 * Jedes Plugin ist auch im offiziellen WordPress.org-Repository — der
 * Link dorthin dient als Backlink-Magnet für die SEO-Strategie.
 *
 * Hinweis: Die Plugin-Slugs der WordPress.org-Repos sind ggf. anders als
 * die internen Marketing-Slugs. `wpOrgSlug` ist der Pfad bei wordpress.org/plugins/.
 */
import type { FAQItem } from "../components/FAQ.astro";

/** Ein Backend-Screenshot in der Plugin-Vorstellung. */
export interface PluginScreenshot {
  src: string;
  alt: string;
  /** Überschrift über dem Screenshot */
  title: string;
  /** Erklärung neben dem Screenshot */
  description: string;
  /** Optionale Bullet-Highlights */
  bullets?: string[];
}

export interface Plugin {
  slug: string;
  name: string;
  tagline: string;
  /** SEO Title */
  seoTitle: string;
  /** SEO Description */
  seoDescription: string;
  /** Inline-SVG-Path für das Icon */
  iconSvg: string;
  /** Akzentfarbe als CSS-Farbe (optional, default = orange) */
  accent?: string;
  /** Hero-Sub-Text auf der Detail-Seite */
  heroSub: string;
  /** Slug im WordPress.org-Repository (für externen Link) */
  wpOrgSlug?: string;
  /** Direkter Download-Link (z. B. .zip auf eigenem Server) — wenn das Plugin
   *  (noch) nicht im WordPress-Repository ist. Hat Vorrang vor wpOrgSlug. */
  downloadUrl?: string;
  /** YouTube-Video-ID (z. B. "Vr2WgOh6Dc0") — wird via youtube-nocookie eingebettet */
  youtubeId?: string;
  /** Eyebrow über dem Video, falls eines existiert */
  youtubeEyebrow?: string;
  /** Headline über dem Video */
  youtubeHeadline?: string;
  /** Subtitle über dem Video */
  youtubeSub?: string;
  /** Kernfunktionen als Bullet-Liste */
  features: Array<{ title: string; text: string; iconSvg: string }>;
  /** Screenshot-Galerie mit erklärtem Text neben jedem Bild */
  screenshots?: PluginScreenshot[];
  /** 3-Schritte-Installation (optional, ergänzt zur Download-Anweisung) */
  installSteps?: Array<{ title: string; text: string }>;
  /** Optionale lange Beschreibung als HTML */
  longDescription?: string;
  faq: FAQItem[];
}

export const plugins: Plugin[] = [
  {
    slug: "accessibility-suite",
    name: "2fox4 Accessibility Suite",
    tagline: "WCAG-Quick-Fixes für WordPress",
    seoTitle: "2fox4 Accessibility Suite — WCAG-Quick-Fixes für WordPress",
    seoDescription:
      "Kostenloses WordPress-Plugin: WCAG-Konformität auf Knopfdruck. Kontrast-Checks, ARIA-Labels, Skip-Links, Schriftgrößen-Toggle.",
    iconSvg: `<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>`,
    accent: "#2dd4bf",
    heroSub:
      "Mit dem BFSG ab Juni 2025 wird Barrierefreiheit für viele Websites zur Pflicht. Wir haben ein Plugin gebaut, das die häufigsten Probleme automatisch fixt — und für Besucher ein sichtbares Accessibility-Menü mit Schriftgrößen-Toggle, Kontrast-Modi und Pausen-Schaltern bietet.",
    wpOrgSlug: "2fox4-accessibility-suite",
    features: [
      {
        iconSvg: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
        title: "Accessibility-Scan",
        text: "Klick auf Knopf, Liste der Probleme. Findet fehlende ARIA-Labels, schlechte Kontraste, leere Headings und Bilder ohne Alt-Text.",
      },
      {
        iconSvg: `<path d="M21 12c-1 0-2-.4-2.7-1.2-1.5-1.5-3.9-1.5-5.4 0-.8.8-1.7 1.2-2.7 1.2-1 0-2-.4-2.7-1.2C7 9.3 4.6 9.3 3 10.8c-.7.7-1.7 1.2-2.7 1.2"/><path d="M21 5c-1 0-2-.4-2.7-1.2-1.5-1.5-3.9-1.5-5.4 0C12.1 4.6 11.2 5 10.2 5c-1 0-2-.4-2.7-1.2C6 2.3 3.6 2.3 2 3.8 1.3 4.5.3 5 -1 5"/><path d="M21 19c-1 0-2-.4-2.7-1.2-1.5-1.5-3.9-1.5-5.4 0-.8.8-1.7 1.2-2.7 1.2-1 0-2-.4-2.7-1.2-1.5-1.5-3.9-1.5-5.4 0-.7.7-1.7 1.2-2.7 1.2"/>`,
        title: "Frontend-Toolbar für Besucher",
        text: "Schwebende Toolbar mit Schriftgröße, Hochkontrast-Modus, Animation-Pause und Lesehilfe — alles in einem schmalen Sidebar-Widget.",
      },
      {
        iconSvg: `<path d="M19 11.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0z"/><path d="M11.5 14v-3"/><circle cx="11.5" cy="8.5" r=".5"/>`,
        title: "Skip-Links automatisch",
        text: "Tastatur-Benutzer kommen mit einem Tab direkt zum Haupt-Inhalt. Wird automatisch eingefügt — keine Theme-Änderung nötig.",
      },
      {
        iconSvg: `<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>`,
        title: "ARIA-Labels nachrüsten",
        text: "Findet Buttons ohne Label, Links nur mit Icon und ähnliche Probleme. Schlägt Labels vor — auf Wunsch automatisch im Quellcode patchen.",
      },
    ],
    faq: [
      {
        question: "Ist das Plugin kostenlos?",
        answerHtml: `Ja, die Basis-Version ist im offiziellen WordPress.org-Repository kostenlos verfügbar. Eine Pro-Version mit erweitertem Reporting ist in Planung.`,
      },
      {
        question: "Macht das Plugin meine Seite wirklich WCAG-konform?",
        answerHtml: `Es deckt einen relevanten Anteil der häufigsten WCAG-2.2-AA-Probleme ab. Hundertprozentige Konformität braucht zusätzlich saubere semantische HTML-Struktur — die das Plugin nicht erzeugen kann, sondern dein Theme. Für einen vollständigen Audit empfehlen wir unsere <a href="/leistungen/barrierefreie-website/" class="text-[var(--color-accent)]">Barrierefrei-Leistung</a>.`,
      },
    ],
  },
  {
    slug: "wp-blog-agent",
    name: "2fox4 WP Blog Agent",
    tagline: "Der automatische KI-Blogautor für WordPress",
    seoTitle: "WP Blog Agent — Automatischer KI-Blogautor für WordPress",
    seoDescription:
      "WordPress-Plugin, das automatisch SEO-Artikel mit Claude schreibt, Beitragsbilder mit Imagen erzeugt und Meta-Daten direkt in RankMath, Yoast oder SEOPress legt. Mit RSS-Autopilot.",
    iconSvg: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13l-4 4-4-4"/>`,
    // Plugin (noch) nicht im WordPress.org-Repo — Direktdownload vom eigenen Server.
    downloadUrl: "https://www.2fox4.de/wp-content/uploads/wp-blog-agent.zip",
    youtubeId: "Vr2WgOh6Dc0",
    youtubeEyebrow: "Plugin in Aktion",
    youtubeHeadline: "Sieh selbst, wie der WP Blog Agent arbeitet.",
    youtubeSub:
      "Von der Themenrecherche bis zum fertigen SEO-Beitrag — in wenigen Minuten.",
    heroSub:
      "Recherchiert Themen, schreibt SEO-optimierte Artikel mit Claude, generiert Beitragsbilder mit Imagen und schreibt Meta-Daten direkt in RankMath, Yoast oder SEOPress. Dank integrierter RSS-Feeds von Nachrichtenportalen deiner Wahl schreibst du zeitaktuelle Blog-Beiträge — automatisch und fast in Echtzeit.",
    features: [
      {
        iconSvg: `<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>`,
        title: "Topic Scout",
        text: "Recherchiert auf Basis von Nische, Unterthemen und Zielgruppe automatisch passende Blog-Themen und füllt deine Topic-Queue.",
      },
      {
        iconSvg: `<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>`,
        title: "Blog Writer mit Claude",
        text: "Erzeugt strukturierte Artikel mit Claude — inklusive Headings, interner Verlinkung und sauberem HTML.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>`,
        title: "Vier Stilvorlagen",
        text: "Eine erkannte plus drei manuelle Stilvorlagen. Per A/B/C/D testen, welcher Ton am besten funktioniert.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="15" x2="15" y2="15"/>`,
        title: "SEO-Integration",
        text: "Schreibt Meta-Title, Description und Fokus-Keyword direkt in RankMath, Yoast oder SEOPress.",
      },
      {
        iconSvg: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
        title: "Interne Verlinkung",
        text: "Findet via WP_Query bis zu 12 relevante Link-Kandidaten und baut sie thematisch passend ein.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`,
        title: "Bildgenerierung",
        text: "Google Imagen 4 erstellt Beitragsbilder und setzt sie automatisch als Featured Image inkl. Alt-Text.",
      },
      {
        iconSvg: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
        title: "Vorschau & KI-Revision",
        text: "Artikel vor dem Publizieren prüfen und per Freitext-Prompt an Claude überarbeiten lassen.",
      },
      {
        iconSvg: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
        title: "Autopilot & RSS",
        text: "Scannt RSS-Feeds nach relevanten Nachrichten und plant Beiträge per WP-Cron an deinen Wunschtagen.",
      },
    ],
    screenshots: [
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/1-Blog-Agent-Einstellungen.png",
        alt: "WP Blog Agent — Hauptansicht im WordPress-Backend",
        title: "Inhalte erstellen & Themen finden",
        description:
          "Die Startansicht: Der Topic Scout recherchiert auf Knopfdruck passende Themen, und du kannst jederzeit ein eigenes Thema direkt als Beitrag schreiben lassen.",
        bullets: [
          "Topic Scout mit einstellbarer Anzahl",
          "Eigenes Thema mit Freitext-Eingabe",
          "Pro-Features klar gekennzeichnet",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/2-Blog-Agent-Nische.png",
        alt: "Blog Agent Nische und Themen",
        title: "Hauptnische, Unterthemen, Zielgruppe",
        description:
          "Das Fundament: Nische, Unterthemen und Zielgruppe fließen in jeden Prompt ein und sorgen dafür, dass alle Artikel inhaltlich und stilistisch konsistent bleiben.",
        bullets: [
          "Hauptnische und beliebig viele Unterthemen",
          "Zielgruppen-Beschreibung als Freitext",
          "Basis für alle KI-generierten Inhalte",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/3-Blog-Agent-Beitragsstruktur.png",
        alt: "Blog Agent Beitragsstruktur",
        title: "Kategorie, Wortanzahl, FAQ, CTA",
        description:
          "Steuere die Struktur jedes Beitrags: Wortanzahl, Anzahl der FAQ-Fragen, maximale Inhaltsbreite und den Call-to-Action-Text — alles individuell anpassbar.",
        bullets: [
          "Wortanzahl von 2.500 bis 4.000 Wörter",
          "Bis zu 10 FAQ-Fragen pro Beitrag",
          "Beitragsbreite und CTA einstellbar",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/4-Blog-Agent-SEO-Einstellungen.png",
        alt: "Blog Agent SEO-Einstellungen",
        title: "RankMath, Yoast & SEOPress direkt befüllen",
        description:
          "Der Blog Agent erkennt dein SEO-Plugin und schreibt Meta-Title, Description und Fokus-Keyword automatisch in die passenden Felder.",
        bullets: [
          "Unterstützt RankMath, Yoast und SEOPress",
          "Fokus-Keyword wird sauber durchgereicht",
          "Meta-Description in passender Länge",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/5-Blog-Agent-API-Konfiguration.png",
        alt: "Blog Agent API-Konfiguration",
        title: "Anthropic & Google Imagen in einem Tab",
        description:
          "Anthropic-Key für Claude und optional einen Google-Key für Imagen 4 hinterlegen. Die Keys werden sicher in den WordPress-Options gespeichert.",
        bullets: [
          "Claude Sonnet 4.6, Opus 4.6, Haiku 4.5",
          "Google Imagen 4 für Beitragsbilder",
          "Verbindungstest direkt im Backend",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/6-Blog-Agent-Blid-Einstellungen.png",
        alt: "Blog Agent Bild-Einstellungen",
        title: "Stil, Größe und Prompt-Sprache",
        description:
          "Bildstil frei definieren, Auflösung wählen und die Sprache der Bild-Prompts einstellen.",
        bullets: [
          "Bildstil-Prompt frei definierbar",
          "Mehrere Größen wie 1024×572",
          "Prompt-Sprache separat einstellbar",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/7-Blog-Agent-Autopilot-RSS.png",
        alt: "Blog Agent Autopilot und RSS-Feeds",
        title: "RSS-Feeds, Schlagwortfilter, Zeitplan",
        description:
          "15 vordefinierte Feeds aus Deutschland und international, gefiltert nach deinen Schlagwörtern.",
        bullets: [
          "15 vordefinierte Feeds (DE & EN)",
          "Schlagwortfilter mit Phrase-Matching",
          "Abfragetage und -zeit frei wählbar",
          "Manuelle Abfrage mit Live-Fortschritt",
        ],
      },
      {
        src: "https://www.2fox4.de/wp-content/uploads/2026/04/8-Blog-Agent-Affiliat-Links.png",
        alt: "Blog Agent Affiliate-Links",
        title: "Partner-Links automatisch einbauen",
        description:
          "Affiliate-Partner mit Link, Bezeichnung und Kategorie eintragen. Die KI wählt bei jedem neuen Beitrag automatisch die thematisch passenden Links aus.",
        bullets: [
          "Unbegrenzt viele Affiliate-Partner",
          "Kategorie für intelligente Zuordnung",
          "KI baut Links kontextbezogen ein",
        ],
      },
    ],
    installSteps: [
      {
        title: "ZIP-Datei herunterladen",
        text: 'Klicke oben auf „Plugin herunterladen" und speichere die .zip-Datei auf deinem Computer.',
      },
      {
        title: "Plugin in WordPress hochladen",
        text: 'Gehe zu Plugins → Installieren → Plugin hochladen. Wähle die .zip-Datei aus und klicke auf „Jetzt installieren".',
      },
      {
        title: "Aktivieren & API-Keys eintragen",
        text: "Plugin aktivieren, API-Schlüssel für Anthropic (Claude) und Google (Imagen 4) eintragen — fertig!",
      },
    ],
    faq: [
      {
        question: "Brauche ich einen API-Key?",
        answerHtml: `Ja. Du benötigst einen API-Key von Anthropic (Claude) und einen von Google (Imagen 4 — optional, nur für Bildgenerierung). Du zahlst nur das, was du verbrauchst — direkt an die Anbieter, ohne Aufpreis von uns.`,
      },
      {
        question: "Was kostet ein einzelner Beitrag?",
        answerHtml: `Nur wenige Cent an API-Gebühren. Kein Abo und keine versteckten Kosten. Bei 10 Beiträgen pro Monat mit Claude Sonnet 4.6 rechne mit etwa <strong>3-5 USD</strong>.`,
      },
      {
        question: "Welche SEO-Plugins werden unterstützt?",
        answerHtml: `RankMath, Yoast SEO und SEOPress. Die Erkennung erfolgt automatisch — Meta-Title, Description und Fokus-Keyword werden direkt in die passenden Felder geschrieben.`,
      },
      {
        question: "Was bringt der RSS-Autopilot?",
        answerHtml: `Der Autopilot scannt deine ausgewählten Nachrichtenportale (z. B. tagesschau.de, heise.de, Golem.de) und erzeugt automatisch zeitaktuelle Beiträge. Mit Schlagwortfilter bestimmst du genau, welche Themen relevant sind.`,
      },
      {
        question: "Muss ich Beiträge vor Veröffentlichung prüfen?",
        answerHtml: `Empfohlen — definitiv. KI-Modelle können Fakten erfinden. Standardmäßig speichert das Plugin neue Beiträge als <strong>Entwurf</strong>; du gibst sie manuell frei. Im Autopilot-Modus lässt sich das auch auf direktes Veröffentlichen umstellen, aber Faktencheck und Google E-E-A-T sprechen dagegen.`,
      },
      {
        question: "Wie installiere ich das Plugin?",
        answerHtml: `ZIP herunterladen, unter <code>Plugins → Installieren → Plugin hochladen</code> die Datei wählen, „Jetzt installieren" → „Aktivieren". Danach unter dem neuen Menüpunkt „Blog Agent" deine API-Keys hinterlegen.`,
      },
      {
        question: "Bleiben meine API-Keys sicher?",
        answerHtml: `Ja. Die Keys werden in der WordPress-Datenbank gespeichert und bleiben auf deinem eigenen Host — kein SaaS-Mittelsmann, kein Token-Weiterverkauf.`,
      },
    ],
  },
  {
    slug: "custom-popup",
    name: "Custom Popup",
    tagline: "Schmale Popups für WordPress — ohne Cookie-Wall-Optik",
    seoTitle: "2fox4 Custom Popup — schlanke Popups für WordPress, DSGVO-konform",
    seoDescription:
      "WordPress-Plugin für saubere Popups: Exit-Intent, Scroll-Trigger, Zeit-basiert. Schlankes JavaScript, kein Cookie-Wall-Bloat.",
    iconSvg: `<rect x="3" y="6" width="18" height="13" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>`,
    heroSub:
      "Die meisten Popup-Plugins bringen 200 KB JavaScript mit und sehen aus wie aus 2014. Unser Popup-Plugin macht ein paar Dinge gut: Exit-Intent, Scroll-Tiefe, Verweildauer — und das war's. Schmal, gut aussehend, DSGVO-konform.",
    features: [
      {
        iconSvg: `<path d="M21 12h-8M3 12h2M11 12h2M3 16h18M3 8h2M11 8h2M19 8h2"/>`,
        title: "Schmal & schnell",
        text: "Unter 12 KB komplettes JS. Lädt asynchron und beeinflusst PageSpeed nicht messbar.",
      },
      {
        iconSvg: `<polyline points="6 9 12 15 18 9"/>`,
        title: "Trigger nach Wunsch",
        text: "Exit-Intent (Maus verlässt Fenster), Scroll-Tiefe (z. B. 70 %), Verweildauer (Sekunden), oder Klick auf Button.",
      },
      {
        iconSvg: `<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
        title: "Mobile First",
        text: "Auf Mobilgeräten kein Vollbild-Overlay — stattdessen unauffälliger Bottom-Sheet, der sich wegwischen lässt.",
      },
      {
        iconSvg: `<path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.6 0 4.96 1.1 6.62 2.86"/>`,
        title: "DSGVO-konform",
        text: "Kein externes Tracking, keine Drittanbieter-Skripte. Klick-Statistiken bleiben auf deinem Server.",
      },
    ],
    faq: [
      {
        question: "Kann ich beliebigen HTML-Inhalt im Popup zeigen?",
        answerHtml: `Ja — der Popup-Inhalt wird über einen WordPress-Block-Editor verwaltet. Du kannst beliebige Blöcke, Bilder, Buttons oder Shortcodes (z. B. Newsletter-Formular) einbauen.`,
      },
      {
        question: "Lässt sich das Popup A/B-testen?",
        answerHtml: `In der aktuellen Version gibt es keinen integrierten A/B-Test. Mehrere Varianten zeitversetzt veröffentlichen funktioniert aber gut — Statistiken pro Variante siehst du im Admin.`,
      },
    ],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    tagline: "Bilder ohne Cloud auf den eigenen Server komprimieren",
    seoTitle: "2fox4 Image Compressor — lokale Bild-Komprimierung für WordPress",
    seoDescription:
      "WordPress-Plugin für Bild-Komprimierung ohne Cloud-Dienst. WebP, AVIF, intelligente Größenanpassung — alles lokal auf dem Server.",
    iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`,
    heroSub:
      "Die meisten Bild-Komprimierungs-Plugins schicken deine Bilder an einen externen Dienst, der dann Geld kostet — und manchmal kaputt geht. Unser Plugin kann es lokal: WebP, AVIF, Lazy-Sizes, alles auf deinem eigenen Server.",
    features: [
      {
        iconSvg: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`,
        title: "Lokal statt Cloud",
        text: "Nutzt ImageMagick / GD auf deinem Server. Keine externen API-Calls, keine versteckten Kosten, keine Cloud-Abhängigkeit.",
      },
      {
        iconSvg: `<polyline points="20 12 12 20 4 12"/><line x1="12" y1="20" x2="12" y2="4"/>`,
        title: "WebP & AVIF automatisch",
        text: "Browser-modernes Format wird ausgespielt, JPG/PNG als Fallback. Schließt LCP-Probleme bei Hero-Bildern fast immer.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>`,
        title: "Bulk-Komprimierung",
        text: "Bestehende Mediathek nachträglich optimieren. Läuft im Hintergrund per WP-Cron — keine PHP-Timeouts.",
      },
    ],
    faq: [
      {
        question: "Funktioniert das Plugin auf einfachem Shared-Hosting?",
        answerHtml: `Ja, wenn ImageMagick oder GD installiert ist (was bei den meisten Anbietern Standard ist). AVIF-Support hängt von der ImageMagick-Version ab — wir prüfen das automatisch und zeigen, was geht.`,
      },
    ],
  },
  {
    slug: "translate-to-english",
    name: "Translate to English",
    tagline: "WordPress-Inhalte mit einem Klick ins Englische",
    seoTitle: "2fox4 Translate to English — Auto-Übersetzung für WordPress mit DeepL/OpenAI",
    seoDescription:
      "WordPress-Plugin: Posts und Seiten mit einem Klick ins Englische übersetzen. DeepL- oder OpenAI-API. WPML-kompatibel.",
    iconSvg: `<path d="M4 5h7M9 3v2M4 9h7"/><path d="M4 17l3 -8l3 8"/><path d="M5 14h4"/><path d="M14 3v17"/><path d="M14 12l4 4M14 16l4 -4"/>`,
    heroSub:
      "Wer eine deutsche WordPress-Seite ins Englische übersetzen will, hat zwei Optionen: WPML komplett einrichten oder jeden Post manuell übersetzen. Unser Plugin macht die zweite Option erträglich: ein Klick im Editor, fertige Übersetzung.",
    features: [
      {
        iconSvg: `<path d="M3 12c4-4 12-4 18 0M3 12c4 4 12 4 18 0M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18"/>`,
        title: "DeepL- oder OpenAI-Backend",
        text: "Du wählst, welche API benutzt wird. DeepL liefert bessere Übersetzungen, OpenAI/Claude bessere Lokalisierung und Tonalität.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>`,
        title: "Block-Editor-Integration",
        text: "Der Übersetze-Button sitzt direkt im Sidebar. Original und Übersetzung kannst du nebeneinander sehen.",
      },
      {
        iconSvg: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
        title: "WPML-kompatibel",
        text: "Erzeugt korrekte WPML-Verknüpfungen, wenn WPML installiert ist. Auch ohne WPML nutzbar als reine Übersetzungs-Hilfe.",
      },
    ],
    faq: [
      {
        question: "Welche Sprachen sind unterstützt?",
        answerHtml: `Aktuell DE → EN. Weitere Sprachpaare in Arbeit (DE → FR, DE → ES, DE → NL).`,
      },
    ],
  },
  {
    slug: "vorher-nachher",
    name: "Vorher / Nachher",
    tagline: "Bild-Vergleichs-Slider für WordPress, leichtgewichtig",
    seoTitle: "2fox4 Vorher Nachher — schmaler Bild-Slider für WordPress",
    seoDescription:
      "WordPress-Plugin: Vorher/Nachher-Slider mit < 5 KB JavaScript. Touch-fähig, accessibility-bewusst, ohne jQuery.",
    iconSvg: `<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="3" x2="12" y2="17"/><polyline points="8 21 12 17 16 21"/>`,
    heroSub:
      "Klassischer Vorher-Nachher-Slider, wie er bei Sanierungs-, Beauty- oder Foto-Webseiten gebraucht wird. Schmal, schnell, ohne jQuery — funktioniert mit Tastatur und Touch.",
    features: [
      {
        iconSvg: `<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>`,
        title: "Unter 5 KB JS",
        text: "Kein jQuery, keine externen Dependencies. Pure-Vanilla-JS-Implementation.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/>`,
        title: "Touch & Tastatur",
        text: "Auf Mobilgeräten wischen, am Desktop ziehen oder mit Pfeiltasten verschieben.",
      },
      {
        iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>`,
        title: "Gutenberg-Block",
        text: "Eigener Block im WordPress-Editor: zwei Bilder hochladen, fertig. Keine Shortcode-Frickelei.",
      },
    ],
    faq: [
      {
        question: "Funktioniert das mit großen Bildern?",
        answerHtml: `Ja — wenn deine Bilder mit unserem <a href="/wp-plugins/image-compressor/" class="text-[var(--color-accent)]">Image-Compressor-Plugin</a> oder Imagify optimiert sind, läuft der Slider auch mit 4K-Fotos flüssig.`,
      },
    ],
  },
  {
    slug: "woocommerce-zusatzfeld",
    name: "WooCommerce Zusatzfeld",
    tagline: "Benutzerdefinierte Bestell-Felder für WooCommerce",
    seoTitle: "2fox4 WooCommerce Zusatzfeld — Custom-Felder im Checkout",
    seoDescription:
      "WooCommerce-Plugin: beliebige Zusatzfelder im Checkout. Text, Datum, Datei-Upload — mit Anzeige in der Bestell-Email.",
    iconSvg: `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>`,
    heroSub:
      "Wer WooCommerce nutzt, kommt früher oder später an den Punkt, wo Standard-Felder nicht reichen — und WPML, Conditional Logic oder ähnliches überdimensioniert ist. Unser Plugin macht genau eine Sache: zusätzliche Felder im Checkout, einfach.",
    features: [
      {
        iconSvg: `<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
        title: "Beliebige Feldtypen",
        text: "Text, Textarea, Datum, Datei-Upload, Checkbox, Select. Pflichtfeld oder optional, mit Regex-Validierung.",
      },
      {
        iconSvg: `<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>`,
        title: "In Bestätigungs-Mail",
        text: "Die Eingaben werden automatisch in der Kunden- und Admin-Mail mitgesendet — kein zusätzliches Plugin nötig.",
      },
      {
        iconSvg: `<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>`,
        title: "Datei-Upload",
        text: "Datei-Anhänge (z. B. Logo für Bestellung) werden sicher gespeichert und an die Bestellung gehängt.",
      },
    ],
    faq: [
      {
        question: "Funktioniert das auch im Block-Checkout?",
        answerHtml: `Ja — das Plugin unterstützt sowohl den klassischen als auch den neuen Block-Checkout von WooCommerce.`,
      },
    ],
  },
];

export function pluginBySlug(slug: string): Plugin {
  const p = plugins.find((p) => p.slug === slug);
  if (!p) throw new Error(`Plugin not found: ${slug}`);
  return p;
}
