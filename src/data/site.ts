/**
 * Zentrale Stammdaten für die gesamte Seite.
 * Diese Werte werden in Header, Footer, Schema.org-Markup und Meta-Tags verwendet.
 * Änderungen hier wirken sich überall aus — nichts hartkodieren in Komponenten.
 */
export const site = {
  name: '2FOX4 Websites and more',
  shortName: '2FOX4',
  domain: 'www.2fox4.de',
  url: 'https://www.2fox4.de',

  // NAP (Name, Adresse, Phone) — muss überall konsistent sein für Local SEO
  // Hinweis: Marktanalyse erwähnte Inkonsistenz Stadthagen/Sachsenhagen — final klären.
  nap: {
    company: '2FOX4 Websites and more',
    street: 'Schaumburger Str. 21',
    zip: '31553',
    city: 'Sachsenhagen',
    country: 'DE',
    phone: '+49 5725 9890175',
    phoneDisplay: '05725 9890175',
    phoneHref: 'tel:+4957259890175',
    email: 'info@2fox4.de',
    emailHref: 'mailto:info@2fox4.de',
    // WhatsApp Business — internationale Nummer ohne + / Leerzeichen (für wa.me)
    whatsapp: '4915751038643',
    whatsappDisplay: '+49 1575 1038643',
  },

  // Geo-Koordinaten Sachsenhagen (für Schema.org)
  geo: {
    latitude: 52.4361,
    longitude: 9.2086,
  },

  // Hauptnavigation
  nav: [
    { label: 'Leistungen', href: '/leistungen/' },
    { label: 'Regional', href: '/regional/' },
    { label: 'Plugins', href: '/wordpress-plugins/' },
    { label: 'Referenzen', href: '/referenzen/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],

  // Footer-Spalten
  footer: {
    leistungen: [
      { label: 'Webdesign', href: '/leistungen/webdesign/' },
      { label: 'SEO & Lokale Auffindbarkeit', href: '/leistungen/seo/' },
      { label: 'WordPress-Service', href: '/leistungen/wartung-support/' },
      { label: 'Digitalisierungsberatung', href: '/leistungen/digitalisierungsberatung/' },
      { label: 'Hosting', href: '/leistungen/hosting/' },
      { label: 'BAFA-Förderung', href: '/leistungen/bafa-foerderung/' },
      { label: 'Branchen', href: '/branchen/' },
      { label: 'Preise', href: '/preise/' },
    ],
    regional: [
      { label: 'Sachsenhagen', href: '/webdesign-sachsenhagen/' },
      { label: 'Stadthagen', href: '/webdesign-stadthagen/' },
      { label: 'Bückeburg', href: '/webdesign-bueckeburg/' },
      { label: 'Wunstorf', href: '/webdesign-wunstorf/' },
      { label: 'Hameln', href: '/webdesign-hameln/' },
      { label: 'Rinteln', href: '/webdesign-rinteln/' },
      { label: 'Minden', href: '/webdesign-minden/' },
      { label: 'Nienburg', href: '/webdesign-nienburg/' },
      { label: 'Bad Münder', href: '/webdesign-bad-muender/' },
      { label: 'Barsinghausen', href: '/webdesign-barsinghausen/' },
      { label: 'Gehrden', href: '/webdesign-gehrden/' },
      { label: 'Garbsen', href: '/webdesign-garbsen/' },
    ],
    pflicht: [
      { label: 'Impressum', href: '/impressum/' },
      { label: 'Datenschutz', href: '/datenschutz/' },
      { label: 'AGB', href: '/agb/' },
      { label: 'Barrierefreiheit', href: '/barrierefreiheit/' },
    ],
  },

  // Default Open-Graph-Bild (wenn pro Seite nichts gesetzt ist)
  ogImage: '/og-default.jpg',

  // Social-Media-Profile. `name` muss zum Icon-Key in Footer.astro passen.
  // Auskommentierte Einträge einfach freischalten (URL + name) — der Footer
  // rendert nur, was hier steht.
  social: [
    { name: 'facebook',  label: 'Facebook',  url: 'https://www.facebook.com/2fox4/' },
    { name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/2fox4.de/' },
    // { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/2fox4/' },
    // { name: 'youtube',  label: 'YouTube',  url: 'https://www.youtube.com/@2fox4' },
    // { name: 'x',        label: 'X / Twitter', url: 'https://x.com/2fox4' },
    // { name: 'github',   label: 'GitHub',   url: 'https://github.com/2fox4' },
  ],
} as const;

export type SiteConfig = typeof site;
