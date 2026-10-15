/**
 * Rendert eine 2fox4-Blog-Infografik (SVG) als hochaufloesendes WebP.
 * Aufruf:  node scripts/blog-svg-render.mjs <in.svg> <out.webp> [breite=2000]
 * Schriften: Poppins / Lato muessen per fontconfig installiert sein
 * (in der Cowork-VM unter /usr/share/fonts/truetype/google-fonts + lato).
 * SVG-Texte NICHT doppelt escapen: im SVG steht &amp; fuer ein &.
 */
import fs from "node:fs";
// fontconfig braucht ein beschreibbares Cache-Verzeichnis (in der VM ist $HOME oft voll)
if (!process.env.XDG_CACHE_HOME) process.env.XDG_CACHE_HOME = "/tmp/fc-cache";
fs.mkdirSync(process.env.XDG_CACHE_HOME, { recursive: true });
const { default: sharp } = await import("sharp");

const [inp, out, w = "2000"] = process.argv.slice(2);
if (!inp || !out) { console.error("Aufruf: node scripts/blog-svg-render.mjs <in.svg> <out.webp> [breite]"); process.exit(1); }
const svg = fs.readFileSync(inp);
const width = parseInt(w, 10);
const meta = await sharp(svg).metadata();
const density = Math.max(72, Math.round(72 * width / (meta.width || width)));
await sharp(svg, { density })
  .resize({ width })
  .webp({ quality: 88, effort: 6 })
  .toBuffer()
  .then((b) => fs.writeFileSync(out, b)); // Buffer statt toFile: vermeidet Hardlinks im Sync-Ordner
const m = await sharp(out).metadata();
console.log(`OK ${out} ${m.width}x${m.height} ${fs.statSync(out).size} Bytes`);
