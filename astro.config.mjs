// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.2fox4.de',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // outDir nach /tmp, weil die Sandbox-Mount-Permissions Astro beim
  // Überschreiben in dist/ behindern. Für lokale Entwicklung kann das
  // wieder auf './dist' gesetzt werden — Astro erkennt 'dist' als Default.
  outDir: '/tmp/astro-dist',
  vite: { plugins: [tailwindcss()] },
});
