# Zombie-Welle (404-Arcade)

3D-Ego-Shooter mit three.js. Das fertige Spiel liegt statisch unter
`public/spiele/zombie-welle/` und wird auf der 404-Seite per iframe geladen
(erst, wenn jemand das Spiel auswählt).

Dieser Ordner enthält nur den Quellcode. Astro baut ihn **nicht** mit –
`game.js` wird einmalig hier gebaut und eingecheckt.

## Neu bauen

```bash
cd spiele-src/zombie-welle
npm install
npm run build
```

## Aufbau

| Datei | Inhalt |
| --- | --- |
| `src/main.js` | Spielablauf, Renderer, Postprocessing, Spieler (inkl. Springen), Wellen, Explosionen, Pickups, HUD |
| `src/level.js` | Karte (ASCII-Raster), Wände/Boden/Decke, Würfel, explosive Fässer, Lichter, Kollision, Wegfindung |
| `src/zombies.js` | Zombie-Modell, Gegnertypen (`TYPES`), Glitch-Material, Animationen, KI, Trefferzonen, Zerfetzen/Auflösen |
| `src/minimap.js` | Drehende Minimap unten links, Gegner als leuchtende Punkte |
| `src/weapons.js` | Pistole, Pump-Action, Raketenwerfer, Granaten-Hand (alles prozedural), Waffenwechsel, Nachladen |
| `src/projectiles.js` | Raketen und Granaten (Flug, Abprallen, Zünder) |
| `src/fx.js` | Blut, Spritzer, Einschusslöcher, Funken, Rauch, Explosionen, Brandflecken |
| `src/audio.js` | Sämtliche Sounds prozedural per WebAudio (keine Audiodateien) |
| `tools/genmap.py` | Erzeugt die Karte (Räume + Gänge) und prüft die Erreichbarkeit; Ausgabe in `level.js` einsetzen |

## Steuerung

WASD laufen · Shift rennen · Leertaste springen · Klick schießen · R nachladen ·
1/2/3 oder Mausrad Waffe · Q letzte Waffe · G oder rechte Maustaste Granate · F Vollbild · Esc Pause

## Assets (alle CC0)

- Zombie: „Male City Zombie" von OpenGameArt (CC0), FBX → GLB mit three.js
  (FBXLoader + GLTFExporter), danach `gltf-transform weld/simplify/resample/meshopt`.
- Texturen: ambientCG (CC0) – Bricks097, MetalPlates006, Concrete012/046,
  DiamondPlate008C, PaintedMetal016, Rust004. Als WebP; Rauheit/Metall/AO
  sind in einer ORM-Textur zusammengefasst.

## Einstellungen im Browser

- `fps_sound_v1` – Sound an/aus (geteilt mit dem Sound-Knopf der 404-Seite)
- `zw_blood` – Blut an/aus
- `zw_sens` – Mausempfindlichkeit
- `zw_best_v2` – Rekord `{ wave, kills }`

## Version 2 (04.10.2026)

- **Zwei Darstellungen**, im Menü und in der Pause umschaltbar:
  - *Glitch* (Standard, jugendfrei): Gegner als leuchtende Hologramme, Treffer sprühen Pixel,
    Erledigte zerfallen in Pixel – kein Blut, keine Leichen, keine Körperteile.
  - *Hart* (18+): die alte, realistische Darstellung mit Blut. Beim ersten Einschalten fragt
    das Spiel nach („Ich bin 18“). Mit `<body data-hardmode="off">` in `index.html` lässt sich
    der Hart-Modus ganz ausblenden (z. B. für die öffentliche 404-Seite).
- **Upgrades:** nach jeder Welle 1 aus 3 Karten (Taste 1/2/3), 13 Upgrades mit Stufen.
- **Neue Gegner:** Sprinter (ab Welle 2), Bit-Bombe/Blähbauch (ab Welle 3, platzt – auch als
  Kettenreaktion), Firewall/Brocken (ab Welle 4, sehr zäh). Neue Typen werden per Banner angekündigt.
- **Minimap** unten links, dreht sich mit, Gegner in ihrer Farbe, Beute als kleine Quadrate.

Einstellungen neu: `zw_mode` (`glitch`/`hard`), `zw_adult` (Hart-Modus bestätigt). `zw_blood` entfällt.

## Version 3 (04.10.2026): Der Hof

- **Zwei Gebiete:** Nach 2 Wellen in der Halle geht ein Ausgang auf (blaue Lichtsäule, auf der Minimap markiert).
  Man läuft hinein und landet auf dem Dach eines Gebäudes im nächtlichen **Hof** (3 Wellen), danach geht es
  wieder in die Halle (2 Wellen) usw. Steuerung über `WAVES_PER` in `main.js`.
- **Hof** (`MAPS.hof` in `level.js`, erzeugt mit `tools/hofmap.py`): 48×40 Felder, Dach 4 m hoch mit Brüstung,
  zwei Treppen (Felder `1`–`7`), Container (`X`), Lampenmasten (`Y`), Mond mit Schatten, Sternenhimmel.
  Gegner kommen durch die Tore und steigen über die Treppen aufs Dach (Flussfeld beachtet Höhen).
- **Scharfschützengewehr** (Taste 4, ab dem Hof): rechte Maustaste = Zielfernrohr (8,5-fach), wackelt mit dem Atem,
  Shift = Luft anhalten (Atemleiste), Repetieren nach jedem Schuss, Kugel durchschlägt 2 Gegner, Leuchtspur.
- **Fernglas** (Taste B): Entfernungsmesser; Gegner kurz anvisieren = markieren (Raute über dem Kopf, auf der
  Minimap umkreist, +30 % Schaden).
- Neue Beute: Gewehrpatronen.
