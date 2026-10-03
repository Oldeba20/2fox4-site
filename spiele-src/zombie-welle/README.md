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
| `src/zombies.js` | Zombie-Modell, Animationen, KI, Trefferzonen (Kopf/Körper/Glieder), Zerfetzen |
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
