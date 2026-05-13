# 2fox4.de — Astro 5 + Tailwind 4 Rebuild

Das neue Projekt-Skelett für `2fox4.de`. Hier wächst der Rebuild als statisch
generierte Seite mit eigenem Komponenten-Set, der später unter
`https://www.2fox4.de/neu/` zur Abnahme bereitsteht.

## Was steht schon?

| Ordner / Datei | Zweck |
|---|---|
| `astro.config.mjs` | Astro-Konfiguration, lädt Tailwind über das Vite-Plugin |
| `src/styles/global.css` | Tailwind-Import + Design-Tokens (Farben, Schriften) |
| `src/data/site.ts` | Stammdaten (NAP, Telefon, Navigation, Footer-Links). Einmal hier ändern → überall korrekt |
| `src/layouts/BaseLayout.astro` | HTML-Rahmen mit SEO-Meta, OpenGraph, Geo-Tags, JSON-LD-Slot |
| `src/components/Header.astro` | Sticky Header mit Logo, Nav, Telefonnummer, Erstgespräch-CTA |
| `src/components/Footer.astro` | Footer mit vollständigem NAP-Block und Pflichtseiten |
| `src/components/Hero.astro` | Hero-Sektion mit animierter 3D-Sphere |
| `src/components/AuroraSphere.astro` | Die Three.js-Drahtgitter-Kugel aus dem Preview |
| `src/components/TrustBar.astro` | Die Zahlen-Leiste unter dem Hero |
| `src/components/ServiceCard.astro` | Wiederverwendbare Leistungs-Karte |
| `src/components/ProcessSection.astro` | 4-Schritte-Sektion mit Code-Block |
| `src/components/CTASection.astro` | Großer Call-to-Action am Seitenende |
| `src/pages/index.astro` | Die Startseite, baut sich aus allen Komponenten zusammen |

## Voraussetzungen

- **Node.js 20 oder höher** ([Download](https://nodejs.org/de))
  Prüfen mit `node --version` in der Shell.

## Erstes Setup

Einmalig im Ordner `site/`:

```bash
cd site
# Linux-Reste aus der Build-Verifikation entfernen (falls vorhanden)
rm -rf node_modules dist .astro
# Frisch installieren (lädt Mac-native Binaries für Tailwind/Astro)
npm install
```

Das lädt Astro, Tailwind und alle weiteren Abhängigkeiten herunter
(ca. 200 MB im `node_modules/`-Ordner — der ist via `.gitignore` ignoriert).

> **Hinweis:** Beim ersten Aufsetzen wurde der Build einmal in einer Linux-Sandbox
> verifiziert (HTML 28 KB, CSS 18 KB, Build-Zeit < 4 s). Die zurückgebliebenen
> `node_modules/`, `dist/` und `.astro/` enthalten Linux-Binaries und müssen vor
> dem ersten lokalen Lauf einmal weggeworfen werden (siehe `rm -rf` oben).

## Lokal entwickeln

```bash
npm run dev
```

Astro startet einen lokalen Dev-Server (meist `http://localhost:4321`).
Änderungen an `.astro`-, `.css`- und `.ts`-Dateien werden live im Browser
neu geladen.

## Produktion bauen

```bash
npm run build
```

Das erzeugt einen `dist/`-Ordner mit reinem HTML, CSS und JS — ohne Node,
ohne PHP, ohne Datenbank. Das ist der Ordner, der auf den Server geht.

```bash
npm run preview
```

Lokal angucken, wie der gebaute Output aussieht.

## Deployment auf all-inkl (Preview unter `/neu/`)

Sobald die Preview-Phase startet:

```bash
# Im site/-Ordner
npm run build

# Per rsync auf den all-inkl-Server schieben
# (Pfad / SSH-User in deinem all-inkl-KAS-Backend nachschlagen)
rsync -avz --delete dist/ \
  ssh1234@2fox4.de:/www/htdocs/w0202caa/2fox4/neu/
```

Zugang zum Webspace muss vorab in all-inkl freigegeben sein.
Bis `/neu/` öffentlich erreichbar ist, ist auf der ganzen Seite
`noindex,nofollow` gesetzt (siehe `index.astro` → `noindex={true}`).

## Wenn die neue Seite live gehen soll

1. Im `BaseLayout`-Aufruf auf jeder Seite `noindex={true}` entfernen
2. In `astro.config.mjs` ggf. `base` auf `/` lassen
3. `npm run build` → `dist/` per rsync in das Webroot (`/www/htdocs/w0202caa/2fox4/`)
4. Vorher: WP-Frontend in einen Backup-Ordner verschieben

## Aktueller Stand der Migration

Stand: 12. Mai 2026 — 155 statische Seiten generieren erfolgreich.

| Bereich | Status | Pfad |
|---|---|---|
| Startseite | ✓ | `/` |
| Leistungen (Übersicht + 7 Detail-Seiten) | ✓ | `/leistungen/`, `/leistungen/[slug]/` |
| Regional (Übersicht + 9 Stadt-Seiten) | ✓ | `/regional/`, `/webdesign-stadthagen/` etc. |
| WordPress-Plugins (Übersicht + 7 Detail-Seiten) | ✓ | `/wordpress-plugins/`, `/wp-plugins/[slug]/` |
| Referenzen-Übersicht (mit Filter) | ✓ | `/referenzen/` |
| Blog-Übersicht | ✓ | `/blog/` |
| 125 Blog-Beiträge aus WP-REST-API | ✓ | `/blog/[slug]/` |
| Blog-Kategorien | ✓ | `/blog/kategorie/[slug]/` |
| Einzelne Referenz-Seiten (`/referenzen/[slug]/`) | offen | — |
| Kontakt-Seite | offen | `/kontakt/` |
| Pflichtseiten: Impressum, Datenschutz, AGB | offen | `/impressum/`, `/datenschutz/`, `/agb/` |
| Cookie-Banner (Borlabs/Eigenbau) | offen | — |
| Blog-Kategorie-Konsolidierung (6 statt 1) | offen — Backend-Job in WordPress | — |
| `noindex` auf live-Stand entfernen | offen — bei Go-Live | überall `BaseLayout` |

## Datenfluss

- **Statischer Content** kommt aus `src/data/*.ts`:
  - `site.ts` — Stammdaten, NAP, Navigation
  - `cities.ts` — 9 Städte (Distanz, Geo, lokale Refs, FAQ)
  - `services.ts` — 7 Leistungs-Definitionen
  - `plugins.ts` — 7 Plugins
  - `references.ts` — 34 Referenz-Projekte
- **Blog-Content** wird zur Build-Zeit aus `https://www.2fox4.de/wp-json/wp/v2/posts` gezogen
  (siehe `src/lib/wp.ts`). Inline-Styles werden dabei aus dem HTML entfernt,
  damit sie nicht mit dem Design-System kollidieren.

## Wenn neue Blog-Beiträge in WordPress erscheinen

Solange das Projekt unter `/neu/` läuft, holt jeder Build die aktuellen
Beiträge frisch aus WordPress. Es gibt zwei Wege zur Aktualisierung:

1. **Manuell:** `npm run build && rsync …` (siehe Deployment unten)
2. **Automatisch:** Cronjob auf all-inkl, der alle 6 Stunden den Build triggert.
   Oder ein `save_post`-Webhook in WordPress, der nach jedem neuen Beitrag
   einen GitHub-Action-Build auslöst.
