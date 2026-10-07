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

## Handy-Version + Hart-Modus auf der Website (06.10.2026)

- **Touch-Steuerung** (`src/touch.js`), aktiv auf Geräten ohne Maus (`(hover: none) and (pointer: coarse)`),
  zum Testen am Rechner mit `?touch` erzwingbar:
  linke Bildschirmhälfte = Stick zum Laufen (ganz nach vorn = rennen), rechte Hälfte = wischen zum Umsehen,
  roter Knopf = schießen (halten = Dauerfeuer, dabei ziehen = zielen), Knöpfe für Springen, Granate, Nachladen,
  ◎ Zielfernrohr (nur Gewehr, umschalten) und „Luft halten“ (nur im Zielfernrohr), Pause oben rechts.
  Waffenleiste unten in der Mitte antippen = Waffe wechseln bzw. Fernglas an/aus. Upgrade-Karten antippen.
- Leichte **Zielhilfe** nur am Handy: beim Schuss wird das Fadenkreuz zum nächsten sichtbaren Gegner
  in einem kleinen Kegel um die Mitte gezogen (`aimAssist()` in `main.js`).
- HUD am Handy umgebaut (Minimap/Leben oben links, Munition oben rechts, Waffenleiste unten).
- Handy-Leistung: kein MSAA, Pixeldichte max. 1,3, Start mit 85 % Auflösung (passt sich an),
  kleinere Schattenkarten (`globalThis.ZW_LOW` in `level.js`). Pausiert, wenn die Seite in den Hintergrund geht.
- **Hart-Modus auf der Website freigeschaltet:** `<body data-hardmode="on">` in `public/spiele/zombie-welle/index.html`.
  Standard bleibt *Glitch* (jugendfrei); *Hart* erst nach „Ich bin 18“. Mit `data-hardmode="off"` wieder sperren.

## Balancing + Die Stadt (07.10.2026)

- **Rückstoß:** Die Kamera springt beim Schuss nur kurz hoch und federt in ~0,3 s zurück (`kick`/`kickV` am Spieler,
  Feder in `update()`), dauerhaft bleibt fast nichts. Im Zielfernrohr noch schwächer. Gewehr: vorher 2,6° bleibender
  Versatz pro Schuss, jetzt 0,15° (Spitze 1,2°, im Zielfernrohr ~0,5°). Pistole/Pump-Action entsprechend.
- **Ruhigere Zombies:** Lauf-Animation läuft langsamer als gelaufen wird (`ANIM_CALM` in `zombies.js`), Tempo unverändert.
  Oberkörper, Hals und Kopf folgen der Animation nur geglättet (`CALM_BONES`), Treffer-Zucken schwächer, Glitch-Versatz
  nur noch kurz nach Treffern. Kopfbewegung gemessen rund 40 % ruhiger.
- **Pump-Action:** 22 statt 15 Schaden pro Schrotkugel, etwas engere Streuung.
- **Flachere Schwierigkeit:** Gegner-Leben wächst langsamer (+10 je Welle bis Welle 9, danach +4), Tempo-Deckel 1,55.
- **Ablauf:** Halle (2 Wellen) → Hof (3) → **Stadt (3)** → Halle … (`next` je Gebiet in `MAPS`).
- **Tor im Hof:** Nach den Hof-Wellen rollt sich in der Nordmauer ein Tor hoch (`G` in der Karte, `buildGate()`),
  blaue Lichtsäule (14 m, vom Dach aus sichtbar) + Minimap-Markierung. Dahinter ein Gang mit Licht am Ende.
- **Die Stadt** (`MAPS.stadt`, Karte aus `tools/stadtmap.py`): Morgendämmerung (eigener Himmel mit Sonne, warmes
  Streiflicht, rosa Dunst), Start im Gang unter einem Häuserblock. Häuser mit unterschiedlichen Höhen und vier
  Fassaden (Fenster teils kaputt, vernagelt oder noch erleuchtet), Straßen mit Mittellinie, Gehwege, Autos (teils
  ausgebrannt), Mülltonnen, Absperrbaken, Laternen, Schutt, Litfaßsäule auf dem Marktplatz. **9 Läden zum Betreten**
  (Bäckerei, Elektro, Kiosk, Apotheke, Blumen, Supermarkt, Imbiss, Friseur, Pfandhaus) mit Regalen, flackerndem
  Licht und kaputten Leuchtschildern. Gegner kommen aus den Gullys.
- Neue Kartenzeichen: `H` Haus, `,` Gehweg, `-`/`|` Markierung, `i` Laden innen, `g` Gang, `k`/`l` Lampe im Gang/Laden,
  `c` Regal, `a` Start im Gang, `A`/`V` Auto quer/längs, `U` Tonne, `N` Bake, `G` Tor.
