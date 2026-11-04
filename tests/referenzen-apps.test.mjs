// Datentest für Referenzen + Leistungen (App-Entwicklung).
// Aufruf: node --experimental-strip-types --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (p) => path.join(root, "public", p);
const { references, referenceCounts, refCategories, featuredReferences } = await import("../src/data/references.ts");
const { services } = await import("../src/data/services.ts");
const WIDTHS = [240, 360, 540, 720, 1080];
const CATS = ["websites", "onlineshops", "apps"];

test("Slugs sind eindeutig", () => {
  const s = references.map((r) => r.slug);
  assert.equal(new Set(s).size, s.length);
});

test("featured braucht story", () => {
  for (const r of references) if (r.featured) assert.ok(r.story, r.slug);
});

test("Kategorien und alsoIn sind gültig", () => {
  for (const r of references) {
    assert.ok(CATS.includes(r.category), r.slug);
    for (const c of r.alsoIn ?? []) { assert.ok(CATS.includes(c), r.slug); assert.notEqual(c, r.category, r.slug); }
  }
});

test("Apps haben Store-Link und Handy-Screenshots", () => {
  for (const r of references.filter((r) => r.category === "apps")) {
    assert.ok(r.app && (r.app.ios || r.app.android), r.slug + ": app.ios/android fehlt");
    assert.ok(r.mobileImage, r.slug + ": mobileImage fehlt");
    assert.ok((r.mobileShots ?? []).length >= 2, r.slug + ": mind. 2 mobileShots für die App-Karte");
    if (r.app.ios) assert.match(r.app.ios, /^https:\/\/apps\.apple\.com\//);
    if (r.app.android) assert.match(r.app.android, /^https:\/\/play\.google\.com\/store\/apps\/details\?id=/);
  }
});

test("Alle Bildpfade existieren", () => {
  for (const r of references) {
    assert.ok(existsSync(pub(r.image)), r.slug + " " + r.image);
    const bases = [r.mobileImage, ...(r.mobileShots ?? []).map((m) => m.image)].filter(Boolean);
    for (const b of bases) for (const w of WIDTHS) assert.ok(existsSync(pub(`${b}-${w}.webp`)), `${r.slug} ${b}-${w}.webp`);
    for (const x of r.story?.extraImages ?? []) assert.ok(existsSync(pub(x.src)), r.slug + " " + x.src);
    if (r.app?.icon) assert.ok(existsSync(pub(r.app.icon)), r.slug + " " + r.app.icon);
    if (r.app?.qr) assert.ok(existsSync(pub(r.app.qr.image)), r.slug + " " + r.app.qr.image);
  }
});

test("related verweist auf vorhandene Case Studies", () => {
  const featured = new Set(featuredReferences().map((r) => r.slug));
  for (const r of references) for (const s of r.related ?? []) assert.ok(featured.has(s), `${r.slug} → ${s}`);
});

test("Eulenwart ersetzt Verein Buddy, App-Referenzen vorhanden", () => {
  assert.equal(references.find((r) => r.slug === "verein-buddy"), undefined);
  const ew = references.find((r) => r.slug === "eulenwart");
  const es = references.find((r) => r.slug === "events-schaumburg-app");
  assert.equal(ew?.category, "apps");
  assert.deepEqual(ew?.alsoIn, ["websites"]);
  assert.equal(es?.category, "apps");
  assert.ok(ew.featured && es.featured);
  assert.doesNotMatch(JSON.stringify(references), /Verein Buddy|verein-buddy/);
});

test("Zähler berücksichtigen alsoIn", () => {
  const c = referenceCounts();
  assert.equal(c.alle, references.length);
  assert.equal(c.apps, references.filter((r) => refCategories(r).includes("apps")).length);
  assert.equal(c.websites, references.filter((r) => refCategories(r).includes("websites")).length);
  assert.ok(c.apps >= 2);
});

test("Leistung App-Entwicklung existiert und verlinkt gültige Referenzen", () => {
  const s = services.find((x) => x.slug === "app-entwicklung");
  assert.ok(s, "Service fehlt");
  const featured = new Set(featuredReferences().map((r) => r.slug));
  assert.ok((s.references ?? []).length >= 2);
  for (const slug of s.references) assert.ok(featured.has(slug), slug);
  const slugs = services.map((x) => x.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("Keine Platzhaltertexte und vollständige Case Studies", () => {
  assert.doesNotMatch(JSON.stringify(references), /TODO/);
  assert.doesNotMatch(JSON.stringify(services), /TODO/);
  for (const r of references.filter((r) => r.category === "apps")) {
    assert.ok(r.story.challenge.length > 80 && r.story.solution.length > 200, r.slug);
    assert.ok(r.story.scope.length >= 3, r.slug);
  }
});
