/**
 * Daten für die 9 Stadt-Landingpages.
 *
 * Die Reihenfolge im Array bestimmt die Reihenfolge in der `/regional/`-Übersicht.
 * Distanzen sind grobe Maps-Schätzungen ab Sachsenhagen — bei Bedarf in der
 * `distance.note` nachschärfen (oder einmal exakt in Google Maps prüfen).
 *
 * `localRefs` ist optional: Nur Städte mit echten Projekt-Referenzen befüllt.
 * Wenn leer, wird die LocalRefs-Sektion auf der Stadt-Seite ausgeblendet.
 */
import type { LocalRef } from "../components/LocalRefs.astro";
import type { FAQItem } from "../components/FAQ.astro";

export interface City {
  slug: string;
  name: string;
  /** Vollständiger Genitiv ("Stadthagener", "Bückeburger") */
  inhabitantAdjective: string;
  /** km-Distanz von Sachsenhagen */
  distance: { km: number; note: string };
  /** Geo-Koordinaten der Stadt für meta-Tags */
  geo: { latitude: number; longitude: number };
  /** Eyebrow im Hero (kurz) */
  heroEyebrow: string;
  /** Zwei-Zeilen-Titel im Hero */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Sub-Text im Hero */
  heroSub: string;
  /** Lokale Referenzen (max. 2) */
  localRefs?: LocalRef[];
  /** Stadt-spezifische FAQs (optional) — überschreiben Default vollständig */
  faq?: FAQItem[];
  /** Optionale Zusatz-FAQs, die NACH den Defaults angehängt werden. Sinnvoll,
   *  um pro Stadt 1-3 lokale Themen zu ergänzen, ohne die ganze Default-Liste
   *  zu wiederholen. Wenn `faq` gesetzt ist, wird `localFAQs` ignoriert. */
  localFAQs?: FAQItem[];
  /** Optionaler lokaler Kontext-Block: 2-3 Sätze, die echte Bezugspunkte zur
   *  Stadt herstellen (Branchen, Sehenswürdigkeiten, Wirtschaft). Wird auf der
   *  Stadt-Page über dem WhyChooseUs-Block gerendert. Senkt das Doorway-Risiko,
   *  weil jede Stadt-Page dadurch nachweislich unique Content hat. */
  localContext?: string;
}

/** Default-FAQs, die für jede Stadt gelten, wenn keine eigenen definiert sind. */
function defaultFAQ(city: string, distanceKm: number): FAQItem[] {
  return [
    {
      question: `Was kostet eine Website in ${city}?`,
      answerHtml: `Eine schlanke Visitenkartenseite ist dank unserer KI-gestützten Umsetzung schon ab rund <strong>500 €</strong> machbar — kleine Projekte werden so endlich auch für Solo-Selbstständige und Vereine bezahlbar. Ein vollwertiger WordPress-Auftritt mit SEO und individuellem Design liegt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>. Onlineshops auf WooCommerce oder Shopware ab <strong>2.500 €</strong>. Vorab machen wir ein kostenloses Erstgespräch und kalkulieren transparent — ohne versteckte Kosten oder Lock-in.`,
    },
    {
      question: "Trefft ihr euch persönlich vor Ort?",
      answerHtml: `Selbstverständlich. Unser Büro in Sachsenhagen liegt rund ${distanceKm} km von ${city} entfernt. Wir kommen gerne zu dir — oder du kommst zu uns. Für Erstgespräche bieten wir auch Videocalls an, falls du es schnell und unkompliziert magst.`,
    },
    {
      question: "Wie lange dauert ein Website-Projekt?",
      answerHtml: `Eine kompakte WordPress-Website ist in 3-4 Wochen umgesetzt. Größere Projekte mit Shop oder umfangreichem Content nehmen 6-10 Wochen in Anspruch. Wir planen gemeinsam einen realistischen Zeitplan und halten ihn auch ein — du kennst ja die typischen Agentur-Klagen über Verzögerungen.`,
    },
    {
      question: "Bietet ihr auch SEO und laufende Betreuung?",
      answerHtml: `Ja. Auf Wunsch übernehmen wir nach dem Launch die Wartung, Sicherheits-Updates, Backups und kontinuierliche SEO-Optimierung. Auch lokale Suchmaschinenoptimierung speziell für ${city} ist Teil unseres Angebots — inklusive Google Business Profile, Schema.org-Markup und regionalem Content.`,
    },
    {
      question: "Kann ich später eigenständig Inhalte pflegen?",
      answerHtml: `Absolut. WordPress ist genau dafür gebaut. Wir liefern dir eine Einführung und kurze Video-Anleitungen mit. Wer keine Zeit oder Lust hat, kann uns die Pflege auch komplett überlassen — auf Stunden- oder Pauschalbasis.`,
    },
  ];
}

export const cities: City[] = [
  {
    slug: "webdesign-sachsenhagen",
    name: "Sachsenhagen",
    inhabitantAdjective: "Sachsenhagener",
    distance: { km: 0, note: "Heimsitz — Schaumburger Str. 21, mitten in Sachsenhagen" },
    geo: { latitude: 52.4361, longitude: 9.2086 },
    heroEyebrow: "Webagentur in Sachsenhagen · seit 2008 vor Ort",
    heroTitleLine1: "Webdesigner aus",
    heroTitleLine2: "Sachsenhagen — wir sind eure Nachbarn.",
    heroSub:
      "2FOX4 sitzt seit 2008 in der Schaumburger Str. 21 — mitten in Sachsenhagen, zwischen Steinhuder Meer und Schaumburger Wald. Wir sind nicht „die Webagentur, die Sachsenhagen bedient“, wir sind die Sachsenhagener Webagentur. Bei uns kannst du klingeln, statt anzurufen — persönlich, vor Ort, ohne Konzern-Hotline und Warteschleife.",
    localContext:
      "Sachsenhagen liegt am Westrand der Region Hannover, eingerahmt vom Schaumburger Wald im Süden und dem Steinhuder Meer im Norden. Rund 2.300 Einwohner, ein klassischer kleiner Flecken mit Geschichte als Residenzort der Grafen von Schaumburg. Wirtschaftlich geprägt durch Handwerk, kleinere Mittelständler und ein wachsendes Pendler-Umfeld nach Hannover und Stadthagen. Für Unternehmen vor Ort heißt das: lokale Sichtbarkeit ist wichtiger als überregionale Reichweite — und genau dafür bauen wir hier passende Websites.",
    // Bewusst keine localRefs — die ersten Sachsenhagen-Cases werden hier eingefügt,
    // sobald Oliver eine veröffentlichbare Referenz aus dem Ort vorzeigt.
    faq: [
      {
        question: "Wo genau ist euer Büro in Sachsenhagen?",
        answerHtml: `Unser Büro liegt in der <strong>Schaumburger Str. 21, 31553 Sachsenhagen</strong>. Du kommst aus Richtung Steinhude über die L390 in den Ort, biegst nach der Kirche auf die Schaumburger Straße — wir sind in einem Haus mit kurzer Auffahrt, Parkplätze direkt davor. Aus Richtung Stadthagen kommend (L450) bist du in 12 Minuten bei uns; aus Bückeburg über die A2 brauchst du etwa 20 Minuten.`,
      },
      {
        question: "Kann man auch ohne Termin vorbeikommen?",
        answerHtml: `Im Prinzip ja — aber lieber kurz vorher anrufen oder eine WhatsApp schicken, sonst stehen wir womöglich gerade beim Kunden in Hameln oder vor einer laufenden Aufnahme. <a href="${`/kontakt/`}" class="text-[var(--color-accent)]">Erstgespräch buchen</a> oder einfach unter <a href="tel:+4957259890175" class="text-[var(--color-accent)]">05725 9890175</a> anrufen. Ein 30-Minuten-Slot vor Ort, mit Kaffee, ist meistens am selben Tag möglich.`,
      },
      {
        question: "Sitzt ihr wirklich in Sachsenhagen oder ist das nur eine Briefkasten-Adresse?",
        answerHtml: `Echtes Büro, echte Möbel, echte Menschen. Das ist uns wichtig, weil mittlerweile mehrere Agenturen aus anderen Bundesländern „Webdesign Sachsenhagen“-Landingpages bauen, ohne je hier gewesen zu sein. Wir leben und arbeiten hier — Inhaber <strong>Oliver Deppe</strong> ist gebürtiger Niedersachse, das Unternehmen ist seit 2008 in Sachsenhagen registriert (Impressum: Schaumburger Str. 21).`,
      },
      {
        question: "Warum eine Sachsenhagener Webagentur statt einer aus Hannover oder Bielefeld?",
        answerHtml: `Drei Gründe: Erstens — du kommst persönlich vorbei oder wir zu dir, und das ist ein 5-Minuten-Weg, kein halber Arbeitstag. Zweitens: wir kennen die regionalen Eigenheiten (Schaumburger Wochenblatt, lokale Vereinsstrukturen, regionale Auftraggeber-Mentalität), das spart Erklärungsschleifen. Drittens: dein Geld bleibt im Ort, statt in einer Großstadt-Agentur zu landen, mit der du nur per Ticket-System redest.`,
      },
      {
        question: "Bietet ihr Webdesign-Förderung für Sachsenhagener Unternehmen an?",
        answerHtml: `Ja — wir sind BAFA-anerkannter Berater für Digitalisierung. Kleine und mittlere Unternehmen aus Sachsenhagen können über die <a href="${`/leistungen/bafa-foerderung/`}" class="text-[var(--color-accent)]">BAFA-Beratungsförderung</a> bis zu 80 % der Kosten erstattet bekommen. Wir machen den Förder-Antrag mit dir gemeinsam — kostenfrei, weil über die Förderung abgerechnet.`,
      },
      {
        question: "Was kostet eine Website für ein Sachsenhagener Unternehmen?",
        answerHtml: `Eine schlanke Visitenkartenseite ist dank unserer KI-gestützten Umsetzung schon ab rund <strong>500 €</strong> machbar. Ein vollwertiger WordPress-Auftritt mit SEO liegt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>; Onlineshops auf WooCommerce ab <strong>2.500 €</strong>. Beim kostenlosen Erstgespräch — vor Ort in Sachsenhagen oder per Videocall — kalkulieren wir transparent.`,
      },
      {
        question: "Macht ihr auch lokale SEO speziell für Sachsenhagen?",
        answerHtml: `Klar — gerade für Sachsenhagen ist lokale Suchmaschinenoptimierung wichtig, weil das Suchvolumen klein und die Suchabsicht stark ist (wer „Friseur Sachsenhagen“ googelt, sucht den Termin, nicht den Vergleich). Wir setzen Google-Business-Profile-Optimierung, Schema.org-Markup, LocalBusiness-Strukturdaten und gezielten lokalen Content auf. Bonus: Sachsenhagen sitzt in unserem eigenen Ranking-Fokus, da können wir den Local-Pack auch für dich attackieren.`,
      },
    ],
  },
  {
    slug: "webdesign-stadthagen",
    name: "Stadthagen",
    inhabitantAdjective: "Stadthagener",
    distance: { km: 9, note: "ca. 12 Minuten mit dem Auto über die L450" },
    geo: { latitude: 52.3244, longitude: 9.2074 },
    heroEyebrow: "Webagentur für Stadthagen · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Stadthagen — direkt aus der Region.",
    heroSub:
      "Wir bauen Websites, Onlineshops und SEO-Strategien für Unternehmen aus Stadthagen, Bückeburg und dem Schaumburger Land. Unser Büro liegt in Sachsenhagen — nur 9 km von deiner Innenstadt entfernt. Kein anonymer Agentur-Konzern, sondern deine Ansprechpartner aus der Region.",
    localContext:
      "Stadthagen ist Kreisstadt des Landkreises Schaumburg mit rund 22.000 Einwohnern und Verwaltungssitz der Region. Die Innenstadt rund um den Marktplatz, das Renaissance-Schloss und die St.-Martini-Kirche bringt seit Jahren Tourismus + Einzelhandel zusammen — Branchen, in denen lokale Sichtbarkeit über Google Maps und gepflegte Website-Daten direkt umsatzwirksam ist. Industriell sind wir hier in Niedersachsens Bergbau-Geschichte: ehemalige Zechen, heute Maschinenbauer und Mittelständler. Wir kennen die Auftraggeber-Mentalität: bodenständig, ergebnisorientiert, ohne Buzzword-Geduld.",
    localRefs: [
      {
        url: "renaissance-stadthagen.de",
        image: "/images/referenzen/renaissance-stadthagen.jpg",
        href: "/referenzen/renaissance-stadthagen/",
        tag: "Vereins-Website · Stadthagen",
        title: "Renaissanceverein Stadthagen",
        description:
          "Webdesign und Wartung für den Verein, der die Renaissance-Geschichte Stadthagens lebendig hält.",
      },
      {
        url: "tattoo-stadthagen.de",
        image:
          "https://www.2fox4.de/wp-content/uploads/2025/10/Tattoo-Studio-Stadthagen-Website.jpg",
        href: "/referenzen/tattoo-studio-stadthagen/",
        tag: "Studio-Website · Stadthagen",
        title: "Tattoo- & Piercing Studio Stadthagen",
        description:
          "WordPress-Website mit lokaler SEO-Optimierung, Google-Business-Eintrag und Buchungs-Hinweisen.",
      },
      {
        url: "sad-sicherheit.de",
        image:
          "https://www.2fox4.de/wp-content/uploads/2025/08/Website-SAD-Sicherheit-Referenz.png",
        href: "/referenzen/schule-fuer-sicherheitsmitarbeiter/",
        tag: "Bildungs-Website · Stadthagen",
        title: "Schule für Sicherheitsmitarbeiter",
        description:
          "WordPress-Auftritt für die Stadthagener Schule, die Sicherheitsmitarbeiter ausbildet — mit Kursübersicht und Anmelde-Funnel.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Website in Stadthagen?",
        answerHtml: `Eine schlanke Visitenkartenseite ist dank unserer KI-gestützten Umsetzung schon ab rund <strong>500 €</strong> machbar — kleine Projekte werden so endlich auch für Solo-Selbstständige und Vereine bezahlbar. Ein vollwertiger WordPress-Auftritt mit SEO und individuellem Design liegt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>. Onlineshops auf WooCommerce oder Shopware ab <strong>2.500 €</strong>. Vorab machen wir ein kostenloses Erstgespräch und kalkulieren transparent — ohne versteckte Kosten oder Lock-in.`,
      },
      {
        question: "Trefft ihr euch persönlich vor Ort?",
        answerHtml: `Selbstverständlich. Unser Büro in Sachsenhagen liegt rund 9 km von der Stadthagener Innenstadt entfernt. Wir kommen gerne zu dir — oder du kommst zu uns. Für Erstgespräche bieten wir auch Videocalls an, falls du es schnell und unkompliziert magst.`,
      },
      {
        question: "Wie lange dauert ein Website-Projekt?",
        answerHtml: `Eine kompakte WordPress-Website ist in 3-4 Wochen umgesetzt. Größere Projekte mit Shop oder umfangreichem Content nehmen 6-10 Wochen in Anspruch. Wir planen gemeinsam einen realistischen Zeitplan und halten ihn auch ein.`,
      },
      {
        question: "Habt ihr Referenzen aus Stadthagen?",
        answerHtml: `Ja: unter anderem die Website des Renaissancevereins Stadthagen, ein Tattoo- und Piercing-Studio in Stadthagen sowie die Schule für Sicherheitsmitarbeiter (sad-sicherheit.de). Alle drei findest du weiter oben auf dieser Seite oder in unserer kompletten <a href="/referenzen/" class="text-[var(--color-accent)]">Referenzübersicht</a>.`,
      },
      {
        question: "Bietet ihr auch SEO und laufende Betreuung?",
        answerHtml: `Ja. Auf Wunsch übernehmen wir nach dem Launch die Wartung, Sicherheits-Updates, Backups und kontinuierliche SEO-Optimierung. Auch lokale Suchmaschinenoptimierung speziell für Stadthagen ist Teil unseres Angebots — inklusive Google Business Profile, Schema.org-Markup und regionalem Content.`,
      },
      {
        question: "Kann ich später eigenständig Inhalte pflegen?",
        answerHtml: `Absolut. WordPress ist genau dafür gebaut. Wir liefern dir eine Einführung und kurze Video-Anleitungen mit. Wer keine Zeit oder Lust hat, kann uns die Pflege auch komplett überlassen — auf Stunden- oder Pauschalbasis.`,
      },
    ],
  },
  {
    slug: "webdesign-bueckeburg",
    name: "Bückeburg",
    inhabitantAdjective: "Bückeburger",
    distance: { km: 18, note: "ca. 20 Minuten mit dem Auto" },
    geo: { latitude: 52.2611, longitude: 9.0517 },
    heroEyebrow: "Webagentur für Bückeburg · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Bückeburg & die Residenz.",
    heroSub:
      "Wir bauen Websites, Onlineshops und SEO-Strategien für Unternehmen aus Bückeburg, dem Hofstaat und dem Schaumburger Land. Unser Büro liegt in Sachsenhagen — nur 18 km von der Schloss-Stadt entfernt. Persönlich, regional, mit langjähriger Erfahrung im Mittelstand.",
    localContext:
      "Bückeburg ist mit dem Schloss, der Hofreitschule und dem Hubschraubermuseum eine touristische Attraktion ersten Ranges — und gleichzeitig eine Wirtschaftsstadt mit über 19.000 Einwohnern. Das fürstliche Erbe der Linie Schaumburg-Lippe prägt das Stadtbild bis heute. Für Hotellerie, Gastronomie und Einzelhandel rund um die Schloss-Achse ist eine starke Online-Präsenz besonders wichtig: das Suchvolumen für „Bückeburg Hotel“, „Bückeburg Restaurant“ oder „Bückeburg Veranstaltung“ ist überraschend hoch, weil Touristen die Stadt gezielt ansteuern.",
    localFAQs: [
      {
        question: "Habt ihr Erfahrung mit Tourismus- und Schloss-bezogenen Websites in Bückeburg?",
        answerHtml: `Ja — wir haben in den letzten Jahren mehrere Projekte rund um Stadt-Marketing, Tourismus und Eventgastronomie umgesetzt. Was in Bückeburg konkret zählt: schöne, aber schnelle Websites mit klaren Buchungs- und Anfrage-Wegen, Hofstaat-/Tradition-Bezug ohne Pathos-Übertreibung, und SEO, das auch für Tagestouristen aus Hannover und Bielefeld funktioniert.`,
      },
      {
        question: "Bedient ihr auch Unternehmen aus dem Bückeburger Mittelstand und Handwerk?",
        answerHtml: `Selbstverständlich. Die Mehrzahl unserer Auftraggeber sind klassische KMU: Handwerker, Bauunternehmen, Dienstleister mit 5–50 Mitarbeitenden. Für die kommen wir gerne nach Bückeburg vor Ort, halten Strategie-Workshops an deinem Konferenztisch und sprechen die Sprache, die im Mittelstand verstanden wird — nicht „Conversion-Funnel“ und „Customer-Journey-Mapping“, sondern „mehr Anfragen, weniger Reklamation“.`,
      },
    ],
  },
  {
    slug: "webdesign-wunstorf",
    name: "Wunstorf",
    inhabitantAdjective: "Wunstorfer",
    distance: { km: 12, note: "ca. 14 Minuten mit dem Auto" },
    geo: { latitude: 52.4231, longitude: 9.4267 },
    heroEyebrow: "Webagentur für Wunstorf · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Wunstorf & Steinhuder Meer.",
    heroSub:
      "Websites und Onlineshops für Wunstorf, Steinhude und die Region rund ums Steinhuder Meer. Unser Sitz in Sachsenhagen ist quasi um die Ecke — 12 km, 14 Minuten. Wir helfen Handwerk, Gastronomie, Tourismus und Mittelstand zu mehr Sichtbarkeit.",
    localContext:
      "Wunstorf ist mit rund 42.000 Einwohnern eine der größeren Städte in unserem Einzugsgebiet — und gleichzeitig sehr divers: das Steinhuder Meer ist Tagestourismus-Magnet Nummer eins für Hannover und das Umland, der Bundeswehr-Standort Wunstorf-Luttmersen ist ein wichtiger Arbeitgeber, und im Süden grenzt die Stadt an die Region Hannover mit Pendler-Strukturen. Daraus ergeben sich drei klare Online-Marketing-Bedürfnisse: lokale Tourismus-Sichtbarkeit (Hotels, Gastronomie, Bootsverleih), mittelständische B2B-Auftritte und ehrliche Local-Pack-Optimierung für Dienstleister, die mit Hannover-Anbietern konkurrieren müssen.",
    localFAQs: [
      {
        question: "Habt ihr Erfahrung mit Steinhuder-Meer-Tourismus-Betrieben?",
        answerHtml: `Ja — Hotel-, Pension- und Bootsverleih-Websites in Wunstorf, Steinhude und dem näheren Umfeld haben einen ganz eigenen Anforderungs-Mix: starke Bildsprache, klare Saison-Hinweise, schnelles Mobile-UX (Touristen googeln am Strand), Buchungsanbindung. Die Region kennen wir aus der Hosentasche — Inhaber Oliver Deppe wohnt 12 km weiter.`,
      },
      {
        question: "Bedient ihr auch Wunstorfer B2B-Mittelständler?",
        answerHtml: `Klar — der größere Teil unserer Wunstorf-Aufträge sind klassische B2B-Webseiten (Maschinenbau, Logistik, Beratung). Hier zählen andere Dinge als bei Tourismus: Case-Studies, Whitepaper-Downloads, Vertriebs-Funnels. Wir bauen beide Welten — und entscheiden gemeinsam mit dir, welcher Ansatz für dein Unternehmen passt.`,
      },
    ],
  },
  {
    slug: "webdesign-hameln",
    name: "Hameln",
    inhabitantAdjective: "Hamelner",
    distance: { km: 50, note: "ca. 50 Minuten mit dem Auto" },
    geo: { latitude: 52.1031, longitude: 9.3568 },
    heroEyebrow: "Webagentur für Hameln · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Hameln & das Weserbergland.",
    heroSub:
      "Websites und Onlineshops für die Rattenfänger-Stadt und das Weserbergland. Wir sind zwar 50 km entfernt — dafür mit echter Mittelstands-Erfahrung und einer Liebe zu detailverliebten Projekten. Termine vor Ort sind selbstverständlich möglich.",
    localContext:
      "Hameln ist mit knapp 57.000 Einwohnern die größte Stadt im Weserbergland und zugleich Rattenfänger-Tourismus-Stadt Nummer eins: jährlich kommen Hunderttausende für Open-Air-Spiele, Altstadt-Bummel und Weserrundfahrt. Für Hotels, Gastronomen, Souvenir-Händler und Tagungs-Veranstalter heißt das: Sichtbarkeit auf Google Maps ist überlebenswichtig, weil viele Besucher die Stadt erst auf der Anfahrt googeln. Daneben gibt's eine starke industrielle Basis (Continental, KSB), die regelmäßig B2B-Webdesign braucht — Karriereseiten, Produkt-Mikro-Sites, Investor-Relations.",
    localFAQs: [
      {
        question: "Warum eine Webagentur aus Sachsenhagen statt direkt aus Hameln?",
        answerHtml: `Drei Gründe — auch wenn die Anfahrt 50 Minuten dauert: 1) Wir haben mit Hamelner Mittelständlern und Tourismus-Betrieben seit über 10 Jahren regelmäßig gearbeitet. 2) Unsere Preise sind oft niedriger als die der spezialisierten Hamelner Agenturen, weil wir nicht im Tourismus-Quadrat sitzen. 3) Bei größeren Projekten kommen wir gerne in Tagespaketen vor Ort, das ist effizienter als wöchentliche 30-Minuten-Termine.`,
      },
      {
        question: "Habt ihr Erfahrung mit Hamelner Tourismus- und Altstadt-Geschäften?",
        answerHtml: `Ja — Hamelner Gastronomen, Hotels und Einzelhändler haben einen ganz anderen Marketing-Mix als ein klassischer B2B-Mittelständler: Saisonalität, Event-Bezug (Open-Air, Rattenfänger-Festival), Tagestouristen-Tracking. Wir kennen die Spielregeln dieses Marktes und haben dafür schon Websites mit dynamischer Event-Anzeige, Buchungs-Integration und mehrsprachiger Tagesgast-Navigation gebaut.`,
      },
      {
        question: "Wie häufig kommt ihr für Vor-Ort-Termine nach Hameln?",
        answerHtml: `Bei laufenden Projekten in Hameln planen wir typischerweise alle 4-6 Wochen einen halben Tag vor Ort — entweder bei dir oder in einem unserer Lieblings-Cafés in der Altstadt. Für Erstgespräche und Strategie-Workshops bieten wir auch Komplett-Tagesblöcke an, dann lohnt sich die Anfahrt für beide Seiten richtig.`,
      },
    ],
  },
  {
    slug: "webdesign-rinteln",
    name: "Rinteln",
    inhabitantAdjective: "Rintelner",
    distance: { km: 30, note: "ca. 30 Minuten mit dem Auto" },
    geo: { latitude: 52.1853, longitude: 9.0793 },
    heroEyebrow: "Webagentur für Rinteln · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Rinteln an der Weser.",
    heroSub:
      "Websites, SEO und WordPress-Service für Rintelner Unternehmen. Wir sitzen in Sachsenhagen, sind in 30 Minuten bei dir und kennen die Region wie unsere Westentasche. Persönliche Betreuung statt Großagentur-Anonymität.",
    localContext:
      "Rinteln liegt malerisch zwischen Weser und Schaumburger Wald und gehört trotz der etwa 27.000 Einwohner administrativ noch zum Landkreis Schaumburg — wir sind hier also auf vertrautem Boden. Die Stadt lebt von einer Mischung aus traditionsreichem Handwerk, Tourismus an der Weser und einem überraschend regen kulturellen Leben (das Eulenspiegel-Brunnen-Fest, der Brückentor-Markt). Für Unternehmen heißt das: lokale Marktauftritte, klar regionale Außendarstellung, und ehrliche Schaumburger SEO-Strategie.",
    localFAQs: [
      {
        question: "Wie unterstützt ihr Rintelner Einzelhändler beim Online-Auftritt?",
        answerHtml: `Einzelhändler in Rinteln stehen vor dem klassischen Konflikt: Wer Online-Shop will, konkurriert mit Amazon. Wer Online-Shop NICHT will, verliert junge Käufer. Unsere Antwort: hybride Strategie — die Website wird zum „digitalen Schaufenster“ mit Sortiment-Vorschau, Click-and-Collect, Beratungs-Anfrage und gepflegtem Google-Business-Profile. Reiner Online-Shop ist optional und nur sinnvoll bei spezialisiertem Sortiment.`,
      },
      {
        question: "Sind Vor-Ort-Termine in Rinteln machbar?",
        answerHtml: `Ja, 30 Minuten Anfahrt von Sachsenhagen — kein Problem. Wir machen monatliche Strategie-Termine, Konzeptions-Workshops vor Ort oder einfach Foto-Sessions mit deinem Team in deinem Laden / Büro. Für Erstgespräche reicht auch ein Videocall; aber sobald wir konkret werden, sehen wir uns persönlich.`,
      },
    ],
  },
  {
    slug: "webdesign-minden",
    name: "Minden",
    inhabitantAdjective: "Mindener",
    distance: { km: 38, note: "ca. 35 Minuten mit dem Auto" },
    geo: { latitude: 52.2887, longitude: 8.9171 },
    heroEyebrow: "Webagentur für Minden · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Minden & Ostwestfalen-Lippe.",
    heroSub:
      "Websites, Onlineshops und SEO für Mindener und OWL-Unternehmen. Wir liefern WordPress-Lösungen, die ohne Pagebuilder-Ballast schnell und mobil-optimiert sind. Aus Sachsenhagen — 38 km, 35 Minuten Fahrtzeit.",
    localContext:
      "Minden ist mit etwa 81.000 Einwohnern die größte Stadt in unserem Einzugsgebiet und gleichzeitig die einzige, die in Nordrhein-Westfalen liegt — das prägt die Wirtschaft. Das Wasserstraßenkreuz Minden (Weser, Mittellandkanal) macht die Stadt zum Logistik-Knotenpunkt, daneben gibt es eine starke industrielle Basis (Verpackungsindustrie, Maschinenbau, WAGO Kontakttechnik). Für Mittelständler hier zählen schnelle, technisch sauber gebaute Websites mit klaren Kompetenz-Beweisen — keine Marketing-Floskel-Shows.",
    localFAQs: [
      {
        question: "Bedient ihr auch OWL-Unternehmen, obwohl ihr in Niedersachsen sitzt?",
        answerHtml: `Genau dafür gibt's diese Seite. Wir sind selbst Niedersachsen, arbeiten aber häufig für OWL-Mittelständler — die Landesgrenze ist ein bürokratisches Konstrukt, kein wirtschaftliches Hindernis. Wichtig zu wissen: BAFA-Beratungsförderung läuft bundesweit, da spielt es keine Rolle, ob du in Bückeburg, Minden oder Bielefeld sitzt.`,
      },
      {
        question: "Habt ihr Erfahrung mit Mindener Mittelständlern und Industrie-Kunden?",
        answerHtml: `Ja. Mindener B2B-Mittelstand bedeutet meistens: technische Produkte, B2B-Vertriebszyklus, langfristige Kundenbeziehungen. Hier zählt eine Website, die Vertrieb unterstützt — Datenblätter, Case-Studies, Kontakt-Anfrage über klare Funnel, Karriere-Seiten für Fachkräfte-Rekrutierung. Eine bloß „schicke Website“ reicht nicht.`,
      },
    ],
  },
  {
    slug: "webdesign-nienburg",
    name: "Nienburg",
    inhabitantAdjective: "Nienburger",
    distance: { km: 35, note: "ca. 35 Minuten mit dem Auto" },
    geo: { latitude: 52.6396, longitude: 9.2189 },
    heroEyebrow: "Webagentur für Nienburg · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Nienburg an der Weser.",
    heroSub:
      "Websites und WordPress-Service für Nienburger Unternehmen. Aus Sachsenhagen sind wir in 35 Minuten bei dir — und betreuen Mittelstand, Handwerk und Vereine in der gesamten Region Mittelweser.",
    localContext:
      "Nienburg an der Weser ist Kreisstadt mit etwa 32.000 Einwohnern und Zentrum der Mittelweser-Region. Spargel-Hauptstadt Niedersachsens, traditionsreicher Land- und Gartenbau, dazu mittelständische Industrie und Handwerk. Hier ist die Wirtschaft bodenständig, oft generationsgeführt — und genau deshalb haben viele Unternehmen Nachholbedarf beim digitalen Auftritt. Wir treffen hier auf Geschäftsinhaber, die zum ersten Mal über ihre Website nachdenken — und denen entsprechende Hand-in-Hand-Begleitung wichtiger ist als hippes Design.",
    localFAQs: [
      {
        question: "Bedient ihr auch Nienburger Landwirtschafts-, Spargel- und Agrar-Betriebe?",
        answerHtml: `Ja — der Mittelweser-Raum hat eine starke Agrar- und Direktvermarktungs-Tradition (Spargelhöfe, Hofläden, Direktvermarkter). Für diese Betriebe bauen wir Websites, die saisonale Öffnungszeiten klar kommunizieren, Hofladen-Verkauf via Click-and-Collect ermöglichen und gleichzeitig die regionale Verwurzelung des Betriebs erlebbar machen. Lokale SEO ist hier besonders wertvoll, weil potentielle Kunden gezielt nach „Spargelhof Nienburg“ oder „Hofladen Mittelweser“ suchen.`,
      },
      {
        question: "Wie lange dauert die Anfahrt nach Nienburg und kommt ihr regelmäßig?",
        answerHtml: `Aus Sachsenhagen sind wir in 35 Minuten bei dir — entlang der B442 und B215 ein entspannter Weg. Bei laufenden Nienburger Projekten planen wir typischerweise alle 4-6 Wochen einen halben Tag vor Ort, oder bündeln Termine mit Bookings in Bad Münder oder Hameln zu einer Tagestour durch die Region.`,
      },
    ],
  },
  {
    slug: "webdesign-bad-muender",
    name: "Bad Münder",
    inhabitantAdjective: "Bad Münderaner",
    distance: { km: 45, note: "ca. 45 Minuten mit dem Auto" },
    geo: { latitude: 52.1932, longitude: 9.4666 },
    heroEyebrow: "Webagentur für Bad Münder · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Bad Münder am Deister.",
    heroSub:
      "Webdesign, SEO und WordPress-Wartung für Unternehmen aus Bad Münder und der Deister-Region. Unser Sitz in Sachsenhagen ist 45 Minuten entfernt — Termine vor Ort planen wir gerne langfristig in Tagespaketen.",
    localContext:
      "Bad Münder ist ein staatlich anerkanntes Heilbad am Westhang des Deisters, knapp 16.000 Einwohner, geprägt durch Tourismus, Wellness und ein wachsendes Gesundheits- und Reha-Segment. Daneben gibt es klassischen Mittelstand und Handwerk. Für Bad Münderer Unternehmen heißt das: das Tourismus-Segment braucht hochwertige Online-Auftritte mit Buchungs-Anbindung und überzeugender Bildsprache, während Kur- und Gesundheitsbetriebe mit DSGVO-konformen Patientenformularen und Vertrauenssignalen punkten müssen.",
    localFAQs: [
      {
        question: "Habt ihr Erfahrung mit Kur-, Wellness- und Gesundheitsbetrieben in Bad Münder?",
        answerHtml: `Ja — Gesundheits- und Kurbetriebe haben besondere Anforderungen: DSGVO-konforme Buchungs-/Anfrageformulare, klare Trennung zwischen werblichen und medizinischen Inhalten (Heilmittelwerbegesetz), Trust-Signale wie Zertifizierungen und Bewertungen. Wir bauen Websites, die diesen rechtlichen Rahmen sauber einhalten und trotzdem ansprechend aussehen.`,
      },
      {
        question: "Wie weit ist Bad Münder von eurem Büro entfernt?",
        answerHtml: `Etwa 45 Autominuten über Wunstorf-Hannover-Süd. Bei laufender Zusammenarbeit kommen wir in Tagespaketen vor Ort — z.B. einmal pro Monat ein voller Tag mit zwei bis drei Auftraggebern im Deister-Umfeld. Das macht die Anfahrt für alle Beteiligten effizient.`,
      },
    ],
  },
  {
    slug: "webdesign-barsinghausen",
    name: "Barsinghausen",
    inhabitantAdjective: "Barsinghausener",
    distance: { km: 17, note: "ca. 20 Minuten mit dem Auto" },
    geo: { latitude: 52.3056, longitude: 9.4574 },
    heroEyebrow: "Webagentur für Barsinghausen · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Barsinghausen am Deister.",
    heroSub:
      "Websites, Onlineshops und SEO-Strategien für Barsinghausener Unternehmen. Unser Büro in Sachsenhagen liegt nur 17 km entfernt — wir kommen gerne vorbei für ein persönliches Erstgespräch.",
    localContext:
      "Barsinghausen ist mit gut 33.000 Einwohnern eine der größeren Städte in der Region Hannover, am westlichen Deisterhang gelegen. Die Stadt hat eine Industrie- und Bergbau-Vergangenheit, ist heute aber stark vom Calenberger Mittelstand, Pendler-Verkehr nach Hannover und einem wachsenden Naherholungs-Tourismus geprägt. Für Barsinghausener Unternehmen heißt das: Online-Sichtbarkeit muss zwischen Hannover-Suchen und lokalem Stamm-Kundenkreis ausbalanciert werden — und der Deister ist als Naherholungsgebiet ein dankbares regionales Anker-Thema.",
    localFAQs: [
      {
        question: "Bedient ihr Tourismus- und Wander-Betriebe rund um den Deister?",
        answerHtml: `Ja — der Deister ist ein wichtiges Naherholungsgebiet für Hannover, mit über zwei Millionen Besuchen pro Jahr. Für Gastronomie, Pensionen, Bike-Verleihe und Tourismus-Veranstalter rund um den Deister bauen wir Websites mit klarem Saisonalitäts-Hinweis, mobile-first Navigation (Touristen googeln unterwegs) und schöner Bildsprache. Auch SEO-Optimierung für Suchbegriffe wie „Wandern Deister“, „Mountainbike Barsinghausen“ lohnt sich.`,
      },
      {
        question: "Wie kommt ihr von Sachsenhagen nach Barsinghausen — Auto oder Bahn?",
        answerHtml: `17 km, 20 Minuten mit dem Auto über die B441 und A2 — sehr entspannt. Per S-Bahn wäre es theoretisch auch machbar (S2 Hannover-Haste, dann S1), aber mit Umstieg und Auto-Komfort schlägt das Auto die Bahn deutlich. Für Vor-Ort-Termine kommen wir zu dir — Erstgespräche oder Workshops in deinem Büro.`,
      },
    ],
  },
  {
    slug: "webdesign-gehrden",
    name: "Gehrden",
    inhabitantAdjective: "Gehrdener",
    distance: { km: 32, note: "ca. 30 Minuten mit dem Auto über die A2" },
    geo: { latitude: 52.3019, longitude: 9.6019 },
    heroEyebrow: "Webagentur für Gehrden · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Gehrden am Gehrdener Berg.",
    heroSub:
      "Websites, Onlineshops und lokale SEO für Unternehmen aus Gehrden und dem Calenberger Land. Unser Büro liegt in Sachsenhagen, etwa 32 km von der Innenstadt entfernt — Vor-Ort-Termine sind selbstverständlich möglich. Persönliche Beratung statt Konzern-Agentur.",
    localContext:
      "Gehrden ist mit rund 15.000 Einwohnern eine charakteristische Calenberger Stadt am Fuß des Gehrdener Bergs — kurz hinter dem Stadtrand Hannovers, aber mit eigenem Stadtbild, Wochenmarkt und gewachsener Vereinsstruktur. Die Wirtschaft prägen klassischer Mittelstand, Handwerk, Gesundheitsdienstleister (das Klinikum Robert Koch ist einer der größten Arbeitgeber) und ein wachsender Pendler-Anteil nach Hannover. Für Gehrdener Unternehmen heißt das: ihr konkurriert in Google nicht nur mit Mitbewerbern in Gehrden, sondern auch mit Hannover-Anbietern — gepflegtes Google-Business-Profil, schnelle Mobile-Performance und sauberes LocalBusiness-Markup sind hier kein Nice-to-have, sondern Pflicht.",
    localFAQs: [
      {
        question: "Habt ihr Erfahrung mit Gehrdener Mittelständlern und Handwerksbetrieben?",
        answerHtml: `Ja — der Calenberger Mittelstand ist seit Jahren eines unserer Kerngebiete. Typische Gehrdener Aufträge sind Handwerksbetriebe (Heizung-Sanitär, Elektro, Tischlerei), Gesundheitsdienstleister im Umfeld des Klinikums sowie inhabergeführte Einzelhändler in der Burgstraße und am Markt. Wir bauen Websites, die Anfragen generieren — keine Marketing-Show — und kennen die Auftraggeber-Mentalität: bodenständig, ergebnisorientiert, ohne Buzzword-Geduld.`,
      },
      {
        question: "Wie wichtig ist lokale SEO speziell für Gehrden, wenn Hannover gleich nebenan ist?",
        answerHtml: `Sehr wichtig — und genau deshalb gewinnen Gehrdener Betriebe häufig <strong>gegen</strong> Hannoveraner Mitbewerber, wenn sie es richtig anstellen. Wer in Gehrden „Friseur in der Nähe“ oder „Steuerberater Gehrden“ googelt, will keinen Hannover-Anbieter — Google weiß das und zeigt im Local Pack bevorzugt Treffer aus dem direkten Umkreis. Mit sauberem Google-Business-Profil, konsistenten NAP-Daten und Schema.org-LocalBusiness-Markup lassen sich diese Local-Pack-Plätze sehr gezielt gewinnen.`,
      },
      {
        question: "Bedient ihr auch Gesundheits- und Klinik-bezogene Anbieter in Gehrden?",
        answerHtml: `Ja. Rund um das Klinikum Robert Koch sitzen viele Fachärzte, Physiotherapie-Praxen, Pflegedienste und Reha-Anbieter. Diese Branche hat besondere Anforderungen: DSGVO-konforme Patientenformulare, klare Trennung zwischen Werbung und medizinischer Information (Heilmittelwerbegesetz), Trust-Signale wie Zertifizierungen und Bewertungen. Wir bauen Websites, die diesen rechtlichen Rahmen einhalten und trotzdem ansprechend aussehen — und SEO-technisch sauber funktionieren.`,
      },
      {
        question: "Wie ist die Anfahrt von Sachsenhagen nach Gehrden und kommt ihr regelmäßig?",
        answerHtml: `Aus Sachsenhagen sind wir in rund 30 Minuten bei dir — über die A2, Abfahrt Hannover-Herrenhausen oder Bad Nenndorf je nach Tageszeit. Bei laufenden Projekten in Gehrden planen wir typischerweise alle 4-6 Wochen einen halben Tag vor Ort, oder bündeln Termine mit Bookings in Barsinghausen oder Hannover-West zu einer effizienten Tagestour.`,
      },
    ],
  },
  {
    slug: "webdesign-garbsen",
    name: "Garbsen",
    inhabitantAdjective: "Garbsener",
    distance: { km: 22, note: "ca. 25 Minuten mit dem Auto über die A2" },
    geo: { latitude: 52.4263, longitude: 9.6011 },
    heroEyebrow: "Webagentur für Garbsen · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Garbsen & die Region Hannover.",
    heroSub:
      "Websites, Onlineshops und SEO-Strategien für Garbsener Unternehmen — vom Maschinenbau am Campus bis zum Handwerksbetrieb in Berenbostel. Unser Büro in Sachsenhagen liegt nur 22 km von Garbsen entfernt, A2-direkt. Persönlich, regional, mit langjähriger B2B-Erfahrung.",
    localContext:
      "Garbsen ist mit rund 62.000 Einwohnern die größte Stadt in unserem Einzugsgebiet nach Minden und gleichzeitig eine der dynamischsten Wirtschaftsregionen rund um Hannover. Der Maschinenbau-Campus der Leibniz Universität (Produktionstechnisches Zentrum, PZH) macht Garbsen zu einem Hightech-Standort mit über 20 Forschungsinstituten und etlichen Spin-offs. Daneben prägen Logistik (Mittellandkanal-Anbindung, Nähe Hannover-Hafen), Maschinenbau-Mittelstand und ein starker Einzelhandel rund um den Garbsen-Center und Berenbostel das Stadtbild. Für Unternehmen heißt das: B2B-Webdesign mit klarem Kompetenzbeweis, Karriere-Seiten für Fachkräfte-Rekrutierung und SEO, das gegen Hannover-Wettbewerber besteht.",
    localFAQs: [
      {
        question: "Habt ihr Erfahrung mit B2B-Mittelständlern und Maschinenbau-Unternehmen aus Garbsen?",
        answerHtml: `Ja — Garbsener B2B-Mittelstand bedeutet meistens: technische Produkte, lange Vertriebszyklen, Fachkräfte-Rekrutierung als zweite Säule. Hier zählt eine Website, die Vertrieb aktiv unterstützt — Produkt-Datenblätter, Case-Studies, Whitepaper-Downloads, klare Kontakt-Funnel und eine starke Karriere-Sektion. Eine reine „schicke Website“ greift in diesem Umfeld zu kurz. Wir bauen für Maschinenbau, Logistik und technische Dienstleister regelmäßig.`,
      },
      {
        question: "Bedient ihr auch Spin-offs und Forschungs-Unternehmen vom PZH-Campus?",
        answerHtml: `Ja. Junge Tech-Unternehmen aus dem Umfeld des Produktionstechnischen Zentrums haben spezifische Anforderungen: schneller Launch eines glaubwürdigen Auftritts, Wissenschafts-zu-Sales-Übersetzung des Angebots, Investoren- und Partner-Seiten. Wir liefern hier oft eine kompakte WordPress-Visitenkartenseite zum Start, die später um Produkt-Sections und Fallstudien wachsen kann — ohne komplettes Redesign.`,
      },
      {
        question: "Wie weit ist Garbsen von eurem Büro entfernt und kommt ihr regelmäßig vor Ort?",
        answerHtml: `Aus Sachsenhagen sind wir in rund 25 Minuten in Garbsen — über die A2 direkt zur Abfahrt Garbsen oder Herrenhausen. Bei laufenden Projekten planen wir monatliche Strategie-Termine vor Ort, oder kommen für Workshop-Tage in dein Büro. Garbsen liegt für uns auf der direkten Achse Sachsenhagen-Hannover, das macht Vor-Ort-Termine sehr unkompliziert.`,
      },
      {
        question: "Macht ihr lokale SEO für Garbsener Einzelhändler und Handwerker?",
        answerHtml: `Klar — und gerade in Garbsen ist das besonders spannend, weil die Stadt aus mehreren historisch gewachsenen Ortsteilen besteht (Garbsen-Mitte, Berenbostel, Altgarbsen, Havelse, Schloß Ricklingen, Frielingen, Stelingen, Heitlingen, Horst, Meyenfeld, Osterwald). Wer „Friseur Berenbostel“ oder „Handwerker Altgarbsen“ googelt, sucht hyper-lokal — und genau für diese Stadtteil-Suchen optimieren wir mit Schema.org-LocalBusiness, sauberen Google-Business-Profilen und stadtteilspezifischen Landingpages.`,
      },
      {
        question: "Konkurriert Garbsen mit Hannover bei Online-Suchen — und wenn ja, wie helft ihr?",
        answerHtml: `Definitiv. Wer in Garbsen sucht, bekommt häufig Hannover-Mitbewerber angezeigt, weil die Stadt direkt an Hannover grenzt. Unsere Antwort: konsequent lokale Signale stärken — Garbsener Adresse prominent platzieren, Stadtteil-Bezüge in Texten, lokale Backlinks (Stadtportal Garbsen, Vereins-Sponsoring, regionale Verzeichnisse) und ein gepflegter Google-Business-Eintrag mit aktuellen Fotos und Bewertungen. Das schlägt einen anonymen Hannover-Anbieter regelmäßig.`,
      },
    ],
  },
];

/** Hole eine Stadt per Slug; wirft, wenn nicht gefunden. */
export function cityBySlug(slug: string): City {
  const city = cities.find((c) => c.slug === slug);
  if (!city) throw new Error(`City not found: ${slug}`);
  return city;
}

/** Hilfsfunktion: FAQs für eine Stadt — eigene komplette Liste, oder
 *  Default + lokale Zusatz-FAQs (localFAQs werden hinten angehängt). */
export function faqFor(city: City): FAQItem[] {
  if (city.faq) return city.faq;
  const base = defaultFAQ(city.name, city.distance.km);
  if (city.localFAQs && city.localFAQs.length > 0) {
    return [...base, ...city.localFAQs];
  }
  return base;
}
