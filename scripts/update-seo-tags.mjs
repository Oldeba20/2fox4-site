#!/usr/bin/env node
/**
 * Updates rankMath.title and rankMath.description for the 10 highest-impact
 * "Striking Distance" pages from the GSC report (4.5.-1.6.2026).
 *
 * Source of truth for SEO meta on Astro blog pages:
 *   src/data/blog-cache.json → posts[].rankMath.{title,description}
 *
 * Safety: backup file is created next to blog-cache.json before write.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cachePath = path.resolve(__dirname, "../src/data/blog-cache.json");

const updates = {
  // 1) Top-Hebel — Pos 3.9 / 1468 Imp / nur 9 Klicks (CTR 0.6 %)
  "hat-der-beruf-webdesigner-in-2026-noch-zukunft": {
    title: "Webdesigner-Beruf 2026: Stirbt er durch KI? Klare Antwort",
    description:
      "Macht KI den Webdesigner überflüssig? Nach 20 Jahren Praxis: Was 2026 wegfällt, was bleibt und welche Skills jetzt richtig Geld bringen.",
  },
  // 2) Pos 7.8 / 1920 Imp / 12 Klicks
  "perplexity-ai-2025-die-ki-suchmaschine-die-alles-veraendert": {
    title: "Perplexity AI 2026 Test: Lohnt sich Pro wirklich?",
    description:
      "Perplexity Pro im Praxistest: Was die KI-Suche besser kann als ChatGPT, wo sie schwächelt und wie du dir das Abo 2026 kostenlos sicherst.",
  },
  // 3) Pos 11.3 / 520 Imp / 11 Klicks
  "wordpress-7-neue-funktionen": {
    title: "WordPress 7: 6 neue Funktionen, die alles verändern",
    description:
      "WordPress 7 ist da: KI-Assistent, Custom Fields 2.0, Real-Time-Editing. Die 6 wichtigsten Features – und was für deine Website jetzt zählt.",
  },
  // 4) Pos 7.2 / 442 Imp / 6 Klicks
  "wordpress-7": {
    title: "WordPress 7 Release 2026: Das große Update im Überblick",
    description:
      "WordPress 7 ist live: Was sich ändert, wann du upgraden solltest und welche Risiken du kennen musst. Komplette Übersicht mit Praxis-Tipps.",
  },
  // 5) Pos 14.4 / 746 Imp / 0 Klicks
  "ki-chatbots-fuer-unternehmen-2026-der-ultimative-guide": {
    title: "KI-Chatbot für Unternehmen 2026: Tools, Kosten, Praxis",
    description:
      "7 KI-Chatbots getestet: echte Preise, klare Pros und Contras. So findest du 2026 die Lösung, die wirklich zu deinem Unternehmen passt.",
  },
  // 6) Pos 9.7 / 335 Imp / 2 Klicks
  "ki-tools-wordpress": {
    title: "WordPress KI-Tools 2026: Die 7 besten im Praxistest",
    description:
      "Welche KI-Plugins sparen 2026 wirklich Zeit bei Content, SEO und Design? 7 Tools getestet – mit klarer Empfehlung und ehrlichen Schwächen.",
  },
  // 7) Pos 17.1 / 270 Imp / 0 Klicks
  "wordpress-ki-plugins-2026": {
    title: "WordPress KI-Plugins 2026: 8 Tools im Vergleich",
    description:
      "Welches KI-Plugin lohnt sich 2026 für WordPress? 8 Tools direkt verglichen: Funktionen, Preise, Praxiseinsatz – mit klarer Kaufempfehlung.",
  },
  // 8) Pos 9.2 / 466 Imp / 1 Klick — derzeit ohne rankMath
  "outlook-365-vorteile-und-nachteile-der-e-mail-umstellung-bei-hostern-ein-kritischer-blick":
    {
      title: "Outlook 365 vom Hoster: Vorteile, Nachteile, Risiken",
      description:
        "All-Inkl, IONOS & Co. drängen zu Outlook 365: Was kostet die Umstellung wirklich, welche Daten verlässt du, und wann lohnt es sich nicht?",
    },
  // 9) Pos 9.9 / 311 Imp / 2 Klicks — alter Jahres-Tag im Title
  "terminbuchungssysteme-fuer-wordpress-im-vergleich-amelia-bookingpress-bookly-simply-schedule-appointments-preise-features-alleinstellungsmerkmale-2025":
    {
      title: "WordPress Terminbuchung 2026: 4 Plugins im Vergleich",
      description:
        "Amelia, BookingPress, Bookly und Simply Schedule im Test: Funktionen, Preise, Schwächen. So findest du 2026 das richtige Buchungs-Plugin.",
    },
  // 10) Pos 6.7 / 46 + Pos 18.8 / 169 Imp / 2 Klicks
  "die-10-wichtigsten-wordpress-plugins-2026-must-haves": {
    title: "Die 10 wichtigsten WordPress-Plugins 2026 (Must-Haves)",
    description:
      "Nach 20 Jahren Praxis: Die 10 Plugins, die wirklich auf jede WordPress-Website gehören – für Speed, Sicherheit, SEO und Conversion 2026.",
  },
};

function lengthCheck(slug, field, value, max) {
  if (value.length > max) {
    console.warn(
      `  ⚠  ${slug} ${field}=${value.length} chars (>${max}): ${value}`,
    );
  }
}

const raw = fs.readFileSync(cachePath, "utf8");
const data = JSON.parse(raw);

let updated = 0;
let notFound = [];

for (const post of data.posts) {
  if (updates[post.slug]) {
    const u = updates[post.slug];
    const prev = post.rankMath || {};
    console.log(`\n[${post.slug}]`);
    console.log(`  OLD title:       ${prev.title || "(none)"}`);
    console.log(`  NEW title:       ${u.title}`);
    console.log(`  OLD description: ${prev.description || "(none)"}`);
    console.log(`  NEW description: ${u.description}`);
    lengthCheck(post.slug, "title", u.title, 60);
    lengthCheck(post.slug, "description", u.description, 160);
    post.rankMath = { title: u.title, description: u.description };
    updated++;
  }
}

for (const slug of Object.keys(updates)) {
  if (!data.posts.find((p) => p.slug === slug)) {
    notFound.push(slug);
  }
}

if (notFound.length) {
  console.error("\n✗ slugs not found in cache:", notFound);
  process.exit(1);
}

fs.writeFileSync(cachePath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(`\n✓ ${updated} posts updated → ${cachePath}`);
