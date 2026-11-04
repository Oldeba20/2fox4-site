// Prüft das gebaute HTML (nach `npx astro build`, outDir /tmp/astro-dist).
// Aufruf: node --test tests/build-output.test.mjs  (wird übersprungen, wenn kein Build da ist)
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const DIST = process.env.DIST ?? "/tmp/astro-dist";
const has = existsSync(path.join(DIST, "index.html"));
const html = (p) => readFileSync(path.join(DIST, p), "utf8");
function* walk(d) { for (const f of readdirSync(d)) { const p = path.join(d, f); if (statSync(p).isDirectory()) yield* walk(p); else if (f.endsWith(".html")) yield p; } }

test("keine verschachtelten <a> (Karten zerfallen sonst im Browser)", { skip: !has }, () => {
  const bad = [];
  for (const f of walk(DIST)) {
    let depth = 0, nested = false;
    for (const m of readFileSync(f, "utf8").matchAll(/<(\/?)a\b[^>]*>/gi)) {
      if (m[1]) depth = Math.max(0, depth - 1); else { if (depth > 0) nested = true; depth++; }
    }
    if (nested) bad.push(path.relative(DIST, f));
  }
  assert.deepEqual(bad, []);
});

test("JSON-LD auf den neuen Seiten ist gültig, Apps mit MobileApplication", { skip: !has }, () => {
  for (const p of ["leistungen/app-entwicklung/index.html", "referenzen/eulenwart/index.html", "referenzen/events-schaumburg-app/index.html"]) {
    const blocks = [...html(p).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    assert.ok(blocks.length > 0, p);
    if (p.startsWith("referenzen/")) assert.ok(blocks.flat().some((b) => b["@type"] === "MobileApplication"), p);
  }
});

test("jede Referenzkarte hat data-cats, Apps-Filter vorhanden", { skip: !has }, () => {
  const h = html("referenzen/index.html");
  const cards = (h.match(/class="monitor-card /g) ?? []).length;
  const cats = (h.match(/data-cats="/g) ?? []).length;
  assert.equal(cats, cards);
  assert.match(h, /data-filter="apps"/);
});
