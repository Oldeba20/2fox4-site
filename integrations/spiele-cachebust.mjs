// Hängt in den Spielseiten (public/spiele/*/index.html) an lokale .js/.css-Verweise
// automatisch ?v=<Inhalts-Hash> an. Grund: Der Server cacht .js/.css ein Jahr lang
// (gedacht für Astros gehashte Dateien). Die Spiele heißen aber immer game.js –
// ohne Versionsnummer würden Browser nach einem Update die alte Fassung behalten.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REF = /(<(?:script|link)\b[^>]*?\b(?:src|href)=")([^"?#:]+\.(?:js|css|mjs))(?:\?v=[^"]*)?(")/gi;

export default function spieleCachebust() {
  return {
    name: 'spiele-cachebust',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const root = join(out, 'spiele');
        if (!existsSync(root)) return;
        let n = 0;
        for (const game of readdirSync(root)) {
          const gdir = join(root, game);
          const html = join(gdir, 'index.html');
          if (!statSync(gdir).isDirectory() || !existsSync(html)) continue;
          const src = readFileSync(html, 'utf8');
          const res = src.replace(REF, (m, pre, ref, post) => {
            const file = join(dirname(html), ref);
            if (ref.startsWith('/') || !existsSync(file)) return m;
            const v = createHash('md5').update(readFileSync(file)).digest('hex').slice(0, 10);
            n++;
            return `${pre}${ref}?v=${v}${post}`;
          });
          if (res !== src) writeFileSync(html, res);
        }
        logger.info(`Spiele: ${n} Skript-/Style-Verweise mit Versionsnummer versehen`);
      },
    },
  };
}
