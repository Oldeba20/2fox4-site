#!/usr/bin/env node
/**
 * refresh-reviews.mjs
 *
 * Holt die fünf neuesten Google-Bewertungen für 2Fox4 Webdesign (Stadthagen)
 * via Places API (Place Details, sort=newest), updated `src/data/reviews.json`
 * und cached neue Avatare lokal nach `public/reviews/`.
 *
 * Wird täglich von .github/workflows/refresh-reviews.yml ausgeführt. Wenn sich
 * gegenüber dem letzten Snapshot inhaltlich nichts geändert hat (nur das
 * `fetched_at`-Datum wäre neu), wird die Datei NICHT überschrieben — damit
 * landet kein Leer-Commit im Repo und es triggert auch kein neuer Build.
 *
 * Schema der reviews.json bleibt 1:1 zum alten WP-Plugin-Snapshot, damit
 * GoogleReviews.astro und schema.ts unverändert weiter funktionieren.
 *
 * ENV:
 *   GOOGLE_PLACES_API_KEY  Required. Key mit aktivierter "Places API" (Legacy)
 *                          bzw. "Places API" SKU "Place Details".
 *
 * Manueller Aufruf:
 *   GOOGLE_PLACES_API_KEY=... node scripts/refresh-reviews.mjs
 */

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { Buffer } from "node:buffer";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");
const JSON_PATH = join(REPO, "src", "data", "reviews.json");
const AVATAR_DIR = join(REPO, "public", "reviews");

// 2Fox4 Webdesign - Stadthagen (Google Maps Place ID)
const PLACE_ID = "ChIJ0VCNts15sEcRkdvl3hj8Mi8";
const MAX_REVIEWS = 5;

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error(
    "FEHLER: GOOGLE_PLACES_API_KEY ist nicht gesetzt.\n" +
    "Lokal: GOOGLE_PLACES_API_KEY=... node scripts/refresh-reviews.mjs\n" +
    "In CI: als Repository-Secret hinterlegt."
  );
  process.exit(2);
}

/** Robust ASCII-Slug aus einem Namen — matched die manuell gepflegten Dateinamen
 *  wie "reiner-ratter.jpg", "sabrina-umlandt-korsch.jpg". */
function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")          // Diakritika weg
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9]+/g, "-")            // alles non-alnum → "-"
    .replace(/^-+|-+$/g, "")                    // Trim
    .toLowerCase();
}

async function fetchPlaceDetails() {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("reviews_no_translations", "true");
  url.searchParams.set("language", "de");
  url.searchParams.set("key", API_KEY);

  const r = await fetch(url, { headers: { "User-Agent": "2fox4-refresh-reviews/1.0" } });
  if (!r.ok) throw new Error(`Places API HTTP ${r.status}`);
  const data = await r.json();
  if (data.status !== "OK") {
    throw new Error(`Places API status=${data.status}: ${data.error_message || "(no message)"}`);
  }
  return data.result;
}

async function downloadAvatar(url, dest) {
  const r = await fetch(url, { redirect: "follow" });
  if (!r.ok) throw new Error(`avatar HTTP ${r.status} for ${url}`);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length < 200) throw new Error(`avatar too small (${buf.length} bytes) — likely a Google rate-limit page`);
  await writeFile(dest, buf);
}

async function fileExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  console.log(`Hole Reviews für Place-ID ${PLACE_ID} …`);
  const result = await fetchPlaceDetails();

  const reviews = (result.reviews || []).slice(0, MAX_REVIEWS).map((r) => ({
    author_name: r.author_name,
    author_url: r.author_url,
    profile_photo_url: r.profile_photo_url,
    rating: r.rating,
    relative_time_description: r.relative_time_description,
    text: r.text,
    time: r.time,
    profile_photo_local: `/reviews/${slugify(r.author_name)}.jpg`,
  }));

  console.log(
    `Total ${result.user_ratings_total} Bewertungen · ` +
    `Durchschnitt ${result.rating} · ` +
    `${reviews.length} neueste im Marquee.`
  );

  // Avatare cachen — nur wenn lokal noch nicht da
  await mkdir(AVATAR_DIR, { recursive: true });
  for (const r of reviews) {
    const filename = r.profile_photo_local.split("/").pop();
    const dest = join(AVATAR_DIR, filename);
    if (await fileExists(dest)) {
      console.log(`avatar: ${filename} bereits gecached`);
      continue;
    }
    console.log(`avatar: lade ${filename} …`);
    try {
      await downloadAvatar(r.profile_photo_url, dest);
    } catch (e) {
      // Avatar-Fehler nicht fatal — die Komponente fällt auf profile_photo_url
      // (googleusercontent.com) zurück. Nur loggen.
      console.warn(`  ⚠︎  ${e.message}`);
    }
  }

  // Output-Schema bleibt 1:1 zum bestehenden JSON.
  const out = {
    name: result.name,
    rating: result.rating,
    user_ratings_total: result.user_ratings_total,
    url: result.url,
    reviews,
    fetched_at: new Date().toISOString().slice(0, 10),
  };
  const newStr = JSON.stringify(out, null, 2) + "\n";

  let oldStr = "";
  try { oldStr = await readFile(JSON_PATH, "utf8"); } catch { /* erstes Mal */ }

  // Vergleich ohne `fetched_at` — sonst hätten wir jeden Tag einen Trivial-Commit.
  const stripDate = (s) => s.replace(/^\s*"fetched_at":\s*"[^"]+",?\s*$/mu, "");
  if (stripDate(newStr) === stripDate(oldStr)) {
    console.log("Keine inhaltlichen Änderungen — JSON bleibt unverändert.");
    return;
  }

  await writeFile(JSON_PATH, newStr, "utf8");
  console.log(`✓ src/data/reviews.json aktualisiert.`);
}

main().catch((e) => {
  console.error("FAIL:", e.stack || e.message);
  process.exit(1);
});
