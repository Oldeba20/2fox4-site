/**
 * Post-Build-Skript: Präfixt alle internen URLs mit einem Pfad-Präfix.
 *
 * Wird verwendet, um den Astro-Build (mit base='/') auf einem Unterpfad
 * wie /neu/ zu deployen, ohne den Source-Code zu ändern.
 *
 * Aufruf:
 *   node scripts/prefix-paths.mjs <dist-dir> <prefix>
 *
 * Beispiel:
 *   node scripts/prefix-paths.mjs dist /neu
 *
 * Was gemacht wird:
 *   - href="/X"   → href="/neu/X"
 *   - src="/X"    → src="/neu/X"
 *   - action="/X" → action="/neu/X"
 *   - url(/X)     → url(/neu/X)  in CSS-Dateien
 *   - Externe URLs (https://, //, mailto:, tel:) bleiben unangetastet
 *   - Anker-Links (#section) bleiben unangetastet
 */
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const [, , distDir, rawPrefix] = process.argv;
if (!distDir || !rawPrefix) {
  console.error("Usage: node prefix-paths.mjs <dist-dir> <prefix>");
  process.exit(1);
}

// Normalisieren: "/neu" oder "neu" oder "/neu/" → "/neu"
const prefix = "/" + rawPrefix.replace(/^\/|\/$/g, "");

/**
 * Ersetze Pfade in einer HTML-Datei.
 * Match: href|src|action ="/foo"  → "${prefix}/foo"
 * Ausnahmen: //, https://, http://, mailto:, tel:
 */
function rewriteHtml(content) {
  return content.replace(
    /(href|src|action)="(\/[^"]*)"/g,
    (match, attr, path) => {
      // Schon prefixed?
      if (path.startsWith(prefix + "/") || path === prefix) return match;
      // Doppelter Slash (Protokoll-relativ) → nicht anfassen
      if (path.startsWith("//")) return match;
      return `${attr}="${prefix}${path}"`;
    }
  );
}

/**
 * Ersetze Pfade in einer CSS-Datei (url(...)).
 */
function rewriteCss(content) {
  return content.replace(/url\((["']?)(\/[^)"']*)(["']?)\)/g, (match, q1, path, q2) => {
    if (path.startsWith(prefix + "/") || path === prefix) return match;
    if (path.startsWith("//")) return match;
    return `url(${q1}${prefix}${path}${q2})`;
  });
}

async function walk(dir) {
  const files = [];
  async function recur(current) {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await recur(full);
      } else if (entry.isFile()) {
        files.push(full);
      }
    }
  }
  await recur(dir);
  return files;
}

const files = await walk(distDir);
let htmlCount = 0;
let cssCount = 0;

for (const file of files) {
  if (file.endsWith(".html")) {
    const content = readFileSync(file, "utf8");
    const rewritten = rewriteHtml(content);
    if (rewritten !== content) {
      writeFileSync(file, rewritten, "utf8");
      htmlCount++;
    }
  } else if (file.endsWith(".css")) {
    const content = readFileSync(file, "utf8");
    const rewritten = rewriteCss(content);
    if (rewritten !== content) {
      writeFileSync(file, rewritten, "utf8");
      cssCount++;
    }
  }
}

console.log(`✓ ${htmlCount} HTML-Dateien angepasst`);
console.log(`✓ ${cssCount} CSS-Dateien angepasst`);
console.log(`  Präfix: ${prefix}`);
