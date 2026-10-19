// Einmal-Reparatur 19.10.2026: alte WP-HTML-Beitraege. Aufruf: node scripts/wp-html-fix-pre.mjs in.md out.html, danach wp-html-fix-post.py in.md out.html ziel.md
// Stufe 1: Body vorbereiten (Stil/Skript raus, Einrückung weg) und mit marked rendern
import fs from 'fs';
import { marked } from 'marked';
const [,, inFile, outFile] = process.argv;
const src = fs.readFileSync(inFile, 'utf8');
const m = src.match(/^---\n[\s\S]*?\n---\n/);
let body = src.slice(m[0].length);
body = body
  .replace(/<!--\s*\/?wp:[\s\S]*?-->/g, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<title[\s\S]*?<\/title>/gi, '')
  .replace(/<(link|meta)\b[^>]*>/gi, '')
  .replace(/<!DOCTYPE[^>]*>/gi, '')
  .replace(/<\/?(html|head|body)\b[^>]*>/gi, '');
// Einrückung entfernen – außer in ```-Blöcken und <pre>
let inFence = false, inPre = false;
body = body.split('\n').map((l) => {
  const t = l.trim();
  if (!inPre && t.startsWith('```')) { inFence = !inFence; return l; }
  if (inFence) return l;
  const wasPre = inPre;
  if (/<pre\b/i.test(l)) inPre = true;
  if (/<\/pre>/i.test(l)) inPre = false;
  if (wasPre) return l;
  return l.replace(/^[ \t]+/, '');
}).join('\n');
fs.writeFileSync(outFile, marked.parse(body, { async: false }));
