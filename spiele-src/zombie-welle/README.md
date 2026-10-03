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
| `src/main.js` | Spielablauf, Renderer, Postprocessing, Spieler, Wellen, HUD |
| `src/level.js` | Karte (ASCII-Raster), Wände/Boden/Decke, Lichter, Kollision, Wegfindung |
| `src/zombies.js` | Zombie-Modell, Animationen, KI, Trefferzonen (Kopf/Körper/Glieder) |
| `src/weapon.js` | Pistole mit Hand (prozedural), Rückstoß, Nachladen, Mündungsfeuer |
| `src/fx.js` | Blut, Spritzer an Wand/Boden, Einschusslöcher, Funken, Rauch |
| `src/audio.js` | Sämtliche Sounds prozedural per WebAudio (keine Audiodateien) |

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
