import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Kartenlegende (1 Zeichen = CELL x CELL Meter)
//  #  Ziegelwand        M  Metallwand
//  .  Betonboden        P  Riffelblech-Boden
//  C  Kiste             B  Giftfass
//  O  Säule             L  Deckenlampe (Boden)
//  R  rote Lampe        S  Spawnpunkt (Gitter, rotes Licht)
//  @  Spielerstart      K  Lampe mit Schatten (Boden)
//  W  Würfel (draufspringen möglich)   B = explosive Fässer
const HALLE_RAW = [
  '########################################',
  '########################################',
  '##........######........######........##',
  '##.S...CC.######.....WS.MMMMMM...L..S.##',
  '##......C.MMMMMM..L.....PPPLPP........##',
  '##....L...PPRPPP........MMMMMM.....W..##',
  '##..W.....MMMMMM........######.CC.....##',
  '##.B......########MPPM####MMMM......B.##',
  '##........########MPLM###MPPPP........##',
  '####MPMMMMMMMMMMMMMWPM###MPMMM###MPM####',
  '####MPPPPLPPPPPPRPPPPM###MLM#####MRM####',
  '####MLMMMMMMPMMMMMMPPM###MPPM####MPM####',
  '####MPM#####M#............MPM##.......##',
  '##.......#####....W.R.....MPMMM.CC..C.##',
  '##..C..B.#####..O......O..PPLPP....C..##',
  '##.......MMMMM...K........MMMMM...WC..##',
  '##.S.L...PPRPP......@.K...#####.C...B.##',
  '##.......MMMMM..O......O..MMMMM..C....##',
  '##....W..#####.....W.W....PPLPP...R...##',
  '##.......#####............MMMMM.W...S.##',
  '####MPM#########MPM##MPM#######.......##',
  '####MPM#########MPM##MRM#########MPM####',
  '####MLM#########MLM##MPM#########MLM####',
  '####MPM#########MPM##MPM#########MPM####',
  '##.........###...........###..........##',
  '##..CC...B.###.....K.....MMM..W.......##',
  '##....L....MMM..W.....W..PRP....L.....##',
  '##.........PLP...........MMM..........##',
  '##.S....W..MMM.C...S...B.###..B..CC.S.##',
  '##.........###...........###..........##',
  '########################################',
  '########################################',
];

// Ausgang (Lichtsäule) in der Halle
const HALLE = HALLE_RAW.map((row, r) => (r === 4 ? row.slice(0, 33) + 'E' + row.slice(34) : row));
export const MAP = HALLE;

// Der Hof (draußen): Dach des Gebäudes (T, 4 m hoch) mit Treppen (1–7 = Stufenhöhe × 0,5 m),
// Container (X), Lampenmasten (Y), Tore (S), Tor zur Stadt (G). Erzeugt mit tools/hofmap.py
const HOF = [
  '#####################################GG#########',
  '#####################################GG#########',
  '##............................................##',
  '##....S................S.................S....##',
  '##............................................##',
  '##.............CC.............................##',
  '##..........Y..............B.......Y..........##',
  '##............................XXXX............##',
  '##.......XXX..................................##',
  '##...B....................C...................##',
  '##................W.....................C.....##',
  '##....................X.......................##',
  '##..Y.......C........................B.....Y..##',
  '##.S........................................S.##',
  '##......................Y........X............##',
  '##.............X.................X............##',
  '##.............X....B...W.....................##',
  '##....C.......................................##',
  '##...........................CC...............##',
  '##.......B......Y...............Y.......B.....##',
  '##....................XXX.....................##',
  '##.S........................................S.##',
  '##............W..................W............##',
  '##....................................X.......##',
  '##......X.............................X.......##',
  '##......X.............B.......................##',
  '##...Y........C...............C...........Y...##',
  '##......................W.....................##',
  '##............................................##',
  '##.................TTTTTTTTTT.................##',
  '##.................TTTTTTTTTT.................##',
  '##..........1234567TTTT@TTTTT7654321..........##',
  '##..........1234567TTTTTTTTTT7654321..........##',
  '##.................TTTTTTTTTT.................##',
  '##.................TTTTTTTTTT.................##',
  '##.................##########.................##',
  '##.................##########.................##',
  '##.................##########.................##',
  '################################################',
  '################################################',
];


// Die Stadt (Morgendämmerung): Häuser (H), Gehwege (,), Fahrbahnmarkierung (- |), Läden (i = innen, mit Decke),
// Gang mit Decke (g, Lampe k), Lampe innen (l), Regal innen (c), Start im Gang (a), Autos (A quer, V längs),
// Mülltonnen (U), Absperrbaken (N), Gullys als Spawns (S). Erzeugt mit tools/stadtmap.py
const STADT = [
  'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
  'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.|.,HHHHHHHHHHHHHHHHH,.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,VS.,HHHHHHHHHHHHHHHHH,.SE,HHHHHHHHHHHHH',
  'HHHHiciciHHH,V|.,HHicciiciHHciicHH,.|.,HHiciiciHHHHH',
  'HHHHiiliiHHH,...YHHiiiliiiHHiliiHHYV..,HHiiliiiHHHHH',
  'HHHHiiiiiHHH,.|.,HHciiiiiiHHiiiiHH,V|.,HHiiiiicHHHHH',
  'HHHHHiiiHHHH,...,HHHHiiiHHHHHiiHHH,...,HHHiiiHHHHHHH',
  'HH,U,,Y,,,U,,.|.,,U,,,,,,Y,,,,,,U,,.|.B,,,,,Y,,U,,HH',
  'HH...AA....................AA...........AA........HH',
  'HH-S-.-.-.-.-...-.-.-.-.-S-.-.-.-.-...-.-.-.-.-.S.HH',
  'HH..................AA......................AA....HH',
  'HH,,U,,,,,C,,.|.Y,,,B,,,,,,,,,U,,,,.N.,,Y,,,,,,U,,HH',
  'HHHHHiiiiHHH,...,HHHHHHHHHHHHHHHHH,...,HHHHiiHHHHHHH',
  'HHHHiiiiiiHH,V|.,HHiiiiiiiiiiiicHH,.|.,HHciiiiiHHHHH',
  'HHHHiiciliHH,V..,HHiccliccciliiiHH,..V,HHiiliiiHHHHH',
  'HHHHiiiiiiHH,.|.,HHicciiiiiiiiciii,.|V,HHiiiiicHHHHH',
  'HHHHciiiicHHY..V,HHiiiiiiliiicciHH,...YHHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.|V,HHiiiiiiiiiiiiiHH,.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,...,HHHHHHiiiiHHHHHHH,...,HHHHHHHHHHHHH',
  'HH,,,,Y,,,U,,NN.,,,,,,,,,,Y,,,,,C,,.|.,,,,,,,U,,,,HH',
  'HH.....AA....................AA...................HH',
  'HH-S-.-.-.-.-...-.-.-.-.-S-.-.-.-.-...-.-.AA-.-.S.HH',
  'HH................AA..........................AA..HH',
  'HH,,U,,,,,,,,.|.,,,,Y,,,,B,,,,U,,,,.NN,,,,,,Y,,,,,HH',
  'HHHHHHHHHHHHU...,,,,,,,,,,,,,,,,,,,...,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.|.,,C,,,,,,,AA,,,B,,,.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,V..,,C,AA,,,,,,,,,,,,,...,HHHHHHHHHHHHH',
  'HHHHHHiciiiH,V|.,,,,,,,,,,,,,,S,,,,.|.,HHHHHHHHHHHHH',
  'HHHHHHiiliii,...,,,,,,,,,,,,,,,,,,BV..,HHHHHHHHHHHHH',
  'HHHHHHiiiiiiY.|.,,,,,,,,,,,,,,,,,,,V|.YHiiiiciHHHHHH',
  'HHHHHHiciiiH,...,,,V,,,,,O,,,,,,,,,...,iiiliiiHHHHHH',
  'HHHHHHHHHHHH,.|.,,,V,,,,,,,,,,,,,,,.|.,iiiiiiiHHHHHH',
  'HHHHHHHHHHHH,...,,S,,,,,,,,,,,,,,,U...,HiiiiciHHHHHH',
  'HHHHHHHHHHHH,.|.,,,,,,Y,,,,,,AA,,,,.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,..V,,,,,,,,,,,,,,,,C,,...,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.|VU,B,,,,,,,XX,,,C,,,.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,...,,,,,,,,,,,,,,,,,,,...,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.|.,HHHHHHHkgHHHHHHHH,.|V,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,...,HHHHHHHggHHHHHHHH,..V,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,V|.YHHHHHHHggHHHHHHHHY.|.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,V..,HHHHHHHgkHHHHHHHH,...,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,.S.,HHHHHHHggHHHHHHHH,.S.,HHHHHHHHHHHHH',
  'HHHHHHHHHHHH,...,HHHHHHHagHHHHHHHH,...,HHHHHHHHHHHHH',
  'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
  'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
];
// Ladenschilder (Front-Zellen und Blickrichtung zur Straße)
const STADT_SHOPS = [{"r0": 7, "c0": 5, "r1": 7, "c1": 7, "face": "s", "name": "BÄCKEREI KORN"}, {"r0": 7, "c0": 21, "r1": 7, "c1": 23, "face": "s", "name": "ELEKTRO FUNKE"}, {"r0": 7, "c0": 29, "r1": 7, "c1": 30, "face": "s", "name": "KIOSK 24"}, {"r0": 7, "c0": 42, "r1": 7, "c1": 44, "face": "s", "name": "APOTHEKE"}, {"r0": 13, "c0": 5, "r1": 13, "c1": 8, "face": "n", "name": "BLUMEN ROSE"}, {"r0": 19, "c0": 23, "r1": 19, "c1": 26, "face": "s", "name": "SUPERMARKT"}, {"r0": 29, "c0": 11, "r1": 30, "c1": 11, "face": "e", "name": "IMBISS"}, {"r0": 31, "c0": 39, "r1": 32, "c1": 39, "face": "w", "name": "FRISEUR"}, {"r0": 13, "c0": 43, "r1": 13, "c1": 44, "face": "n", "name": "PFANDHAUS"}];

export const GRAFFITI_TEXT = 'ZOMBIES RAUS!';
export const ROOF_H = 4.0;
export const MAPS = {
  halle: { key: 'halle', name: 'Die Halle', map: HALLE, outdoor: false, wallH: 4.4, fog: 0.032, fogColor: 0x070709, startYaw: Math.PI, ambient: 0, exitLabel: 'AUSGANG', next: 'hof',
    // Graffiti an der Wand gegenüber dem Start (Zelle, Seite, Text)
    graffiti: [{ c: 19, r: 20, cells: 2, side: 'n', text: GRAFFITI_TEXT }] },
  hof: { key: 'hof', name: 'Der Hof', map: HOF, outdoor: true, wallH: 7.5, fog: 0.0095, fogColor: 0x0b1018, startYaw: 0, ambient: 0.55, roofStart: true, sky: 'night', exitLabel: 'ZUR STADT', exitR: 1.7, beamH: 14, next: 'stadt' },
  stadt: { key: 'stadt', name: 'Die Stadt', map: STADT, outdoor: true, city: true, wallH: 3.4, fog: 0.0105, fogColor: 0x8e7f86, startYaw: 0, ambient: 1.0, sky: 'dawn', envI: 0.32, flash: 5, lampI: 26, exitLabel: 'ZUR HALLE', next: 'halle', shops: STADT_SHOPS },
};

export const CELL = 2;
export const WALL_H = 4.4;

const WALLS = new Set(['#', 'M']);
const BLOCK = new Set(['#', 'M', 'C', 'B', 'O', 'W', 'X', 'Y', 'H', 'A', 'V', 'N', 'G']);
// Zellen mit Decke (Läden, Gang) – werden beim Laden auf normale Zeichen abgebildet
const INTERIOR = { i: '.', g: '.', l: 'L', k: 'L', c: 'C', a: '@' };
const CAR_H = 1.45;
const BAKE_H = 1.05;
const CONTAINER_H = 2.8;
export const CUBE_H = 0.9;
const CRATE_H = 1.7;

export class Level {
  constructor(textures, def = MAPS.halle) {
    this.tex = textures;
    this.def = def;
    // Innenräume merken und Zeichen normalisieren (l → L, c → C …)
    this.interior = new Uint8Array(def.map.length * def.map[0].length);
    this.map = def.map.map((row, r) => row.split('').map((ch, c) => {
      if (INTERIOR[ch]) { this.interior[r * row.length + c] = ch === 'g' || ch === 'a' || ch === 'k' ? 2 : 1; return INTERIOR[ch]; }
      return ch;
    }).join(''));
    this.outdoor = !!def.outdoor;
    this.rows = this.map.length;
    this.cols = this.map[0].length;
    this.w = this.cols * CELL;
    this.h = this.rows * CELL;
    this.group = new THREE.Group();
    this.colliders = [];        // Meshes für Raycasts (Wände, Kisten …)
    this.virtual = [];
    this.shadowLights = [];
    this.spawns = [];
    this.circles = [];          // runde Hindernisse {x,z,r}
    this.lampPositions = [];
    this.playerStart = new THREE.Vector3();
    this.blocked = new Uint8Array(this.rows * this.cols);
    this.flow = new Float32Array(this.rows * this.cols);
    this.flowCell = -1;
    this.barrels = [];
    this.heap = new Int32Array(this.rows * this.cols * 8);

    for (let r = 0; r < this.rows; r++)
      for (let c = 0; c < this.cols; c++) {
        const ch = this.map[r][c];
        if (BLOCK.has(ch)) this.blocked[r * this.cols + c] = 1;
      }
    // Höhen je Zelle (Dach, Treppen)
    this.heights = new Float32Array(this.rows * this.cols);
    for (let r = 0; r < this.rows; r++)
      for (let c = 0; c < this.cols; c++) this.heights[r * this.cols + c] = this.cellH(this.map[r][c]);
  }

  // begehbare Höhe einer Zelle
  cellH(ch) {
    if (ch === 'T' || (this.def.roofStart && ch === '@')) return ROOF_H;
    if (ch >= '1' && ch <= '9') return (ch.charCodeAt(0) - 48) * 0.5;
    return 0;
  }
  hAt(c, r) {
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return 0;
    return this.heights[r * this.cols + c];
  }
  // darf man von Zelle a nach b gehen (Höhenunterschied ≤ eine Stufe)?
  stepOk(c, r, nc, nr) { return Math.abs(this.hAt(nc, nr) - this.hAt(c, r)) < 0.6; }

  // Welt <-> Zelle
  cx(x) { return Math.floor(x / CELL); }
  cz(z) { return Math.floor(z / CELL); }
  center(c, r) { return new THREE.Vector3((c + 0.5) * CELL, 0, (r + 0.5) * CELL); }
  isBlocked(c, r) {
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return true;
    return this.blocked[r * this.cols + c] === 1;
  }
  isWall(c, r) {
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return true;
    const ch = this.map[r][c];
    return WALLS.has(ch) || ch === 'H' || (ch === 'G' && !this.gateOpen());
  }
  gateOpen() { return !!(this.gate && this.gate.open > 0.85); }
  isInterior(c, r) {
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return 0;
    return this.interior[r * this.cols + c];
  }
  // massive Wand für die Flächen-Erzeugung (Tor zählt nicht: daran entstehen die Gangwände)
  faceWall(c, r) {
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return true;
    const ch = this.map[r][c];
    return ch === '#' || ch === 'M' || ch === 'H';
  }

  // -------- Material-Helfer --------
  mat(name, o = {}) {
    const { normalScale, ...opts } = o;
    const t = this.tex[name];
    const m = new THREE.MeshStandardMaterial({
      map: t.c, normalMap: t.n, roughnessMap: t.orm, metalnessMap: t.orm, aoMap: t.orm,
      roughness: 1, metalness: 1, aoMapIntensity: 1, ...opts,
    });
    if (normalScale) m.normalScale.set(normalScale, normalScale);
    return m;
  }

  build(scene) {
    const g = this.group;
    scene.add(g);
    const mats = {
      bricks: this.mat('bricks', { color: 0x9a8c86, normalScale: 1.4 }),
      metal: this.mat('metal', { color: 0xb8c0c8, normalScale: 1.2 }),
      concrete: this.mat('concrete', { color: 0x6d655e, normalScale: 0.7 }),
      plate: this.mat('plate', { color: 0x8a9096 }),
      ceiling: this.mat('ceiling', { color: 0x3b3a3c }),
      hazard: this.mat('hazard', { color: 0xcfcfcf }),
      rust: this.mat('rust', { color: 0xa08070 }),
    };
    this.mats = mats;

    // ---------- Wände (nur sichtbare Seiten, Welt-UVs) ----------
    const wallGeo = { '#': [], M: [] };
    const trimGeo = [];
    const H = this.def.wallH || WALL_H;
    const sides = [
      [0, -1, 'n'], [0, 1, 's'], [-1, 0, 'w'], [1, 0, 'e'],
    ];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const ch = this.map[r][c];
      if (!WALLS.has(ch)) continue;
      for (const [dc, dr, side] of sides) {
        if (this.faceWall(c + dc, r + dr)) continue;
        const x0 = c * CELL, z0 = r * CELL;
        let a, b; // Eckpunkte der Wandkante (von außen gesehen gegen den Uhrzeigersinn)
        if (side === 'n') { a = [x0 + CELL, z0]; b = [x0, z0]; }
        if (side === 's') { a = [x0, z0 + CELL]; b = [x0 + CELL, z0 + CELL]; }
        if (side === 'w') { a = [x0, z0]; b = [x0, z0 + CELL]; }
        if (side === 'e') { a = [x0 + CELL, z0 + CELL]; b = [x0 + CELL, z0]; }
        const nrm = [dc, 0, dr];
        wallGeo[ch].push(quad(a, b, 0, H, nrm, 2.2));
        // Sockelleiste mit Warnstreifen
        const off = 0.04;
        const ao = [a[0] + dc * off, a[1] + dr * off], bo = [b[0] + dc * off, b[1] + dr * off];
        trimGeo.push(quad(ao, bo, 0, 0.32, nrm, 1.0, 0.32));
      }
    }
    for (const k of Object.keys(wallGeo)) {
      if (!wallGeo[k].length) continue;
      const mesh = new THREE.Mesh(mergeGeometries(wallGeo[k]), k === '#' ? mats.bricks : mats.metal);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      g.add(mesh);
      this.colliders.push(mesh);
    }
    if (trimGeo.length) {
      const trim = new THREE.Mesh(mergeGeometries(trimGeo), mats.hazard);
      trim.receiveShadow = true;
      g.add(trim);
    }

    // ---------- Boden / Decke ----------
    const floorG = new THREE.PlaneGeometry(this.w, this.h);
    floorG.rotateX(-Math.PI / 2);
    floorG.translate(this.w / 2, 0, this.h / 2);
    setWorldUV(floorG, 'xz', 3.2);
    if (this.def.city) setWorldUV(floorG, 'xz', 9);
    const floor = new THREE.Mesh(floorG, this.def.city ? this.cityMat('asphalt') : mats.concrete);
    floor.receiveShadow = true;
    g.add(floor);
    this.colliders.push(floor);
    this.floor = floor;

    const plates = [];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      if (this.map[r][c] !== 'P') continue;
      const pg = new THREE.PlaneGeometry(CELL, CELL);
      pg.rotateX(-Math.PI / 2);
      pg.translate((c + 0.5) * CELL, 0.004, (r + 0.5) * CELL);
      setWorldUV(pg, 'xz', 2);
      plates.push(pg);
    }
    if (plates.length) {
      const pm = new THREE.Mesh(mergeGeometries(plates), mats.plate);
      pm.receiveShadow = true;
      g.add(pm);
    }

    if (!this.outdoor) {
    const ceilG = new THREE.PlaneGeometry(this.w, this.h);
    ceilG.rotateX(Math.PI / 2);
    ceilG.translate(this.w / 2, H, this.h / 2);
    setWorldUV(ceilG, 'xz', 4);
    const ceil = new THREE.Mesh(ceilG, mats.ceiling);
    ceil.receiveShadow = true;
    g.add(ceil);
    this.colliders.push(ceil);

    // Deckenträger
    const beams = [];
    for (let r = 2; r < this.rows; r += 4) {
      const bg = new THREE.BoxGeometry(this.w, 0.35, 0.3);
      bg.translate(this.w / 2, H - 0.175, r * CELL);
      setWorldUV(bg, 'xy', 2);
      beams.push(bg);
    }
    const beamMesh = new THREE.Mesh(mergeGeometries(beams), mats.rust);
    beamMesh.castShadow = false;
    g.add(beamMesh);
    }

    // ---------- Requisiten ----------
    const crateGeos = [], pillarGeos = [], cubeGeos = [], cubeEdgeGeos = [];
    const glowMat = new THREE.MeshStandardMaterial({ color: 0x0a1a05, emissive: 0x7dff3a, emissiveIntensity: 3.2 });
    const lampFixtureGeos = [];
    const lampPanelGeos = [];
    const redPanelGeos = [];
    const grateGeos = [];
    const stripGeos = [];

    const rnd = mulberry(1337);
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const ch = this.map[r][c];
      const x = (c + 0.5) * CELL, z = (r + 0.5) * CELL;
      if (ch === 'C' && this.def.city && this.isInterior(c, r)) {
        (this._shelves || (this._shelves = [])).push({ x, z, c, r });
      } else if (ch === 'C') {
        const s = CRATE_H;
        const bg = new THREE.BoxGeometry(s, s, s);
        setBoxUV(bg, s);
        bg.rotateY((rnd() - 0.5) * 0.12);
        bg.translate(x, s / 2, z);
        (this.def.city ? (this._ccrates || (this._ccrates = [])) : crateGeos).push(bg);
      } else if (ch === 'W') {
        const cg = new THREE.BoxGeometry(1.8, CUBE_H, 1.8);
        setBoxUV(cg, 1.8);
        cg.translate(x, CUBE_H / 2, z);
        cubeGeos.push(cg);
        // Warnkante oben
        for (const [w, d, ox, oz] of [[1.82, 0.08, 0, 0.87], [1.82, 0.08, 0, -0.87], [0.08, 1.82, 0.87, 0], [0.08, 1.82, -0.87, 0]]) {
          const e = new THREE.BoxGeometry(w, 0.1, d);
          e.translate(x + ox, CUBE_H - 0.045, z + oz);
          cubeEdgeGeos.push(e);
        }
      } else if (ch === 'B') {
        const geos = [], tops = [];
        for (let i = 0; i < 3; i++) {
          const ox = x + (i === 0 ? -0.35 : i === 1 ? 0.4 : 0.05), oz = z + (i === 2 ? 0.5 : -0.15);
          const cg = new THREE.CylinderGeometry(0.36, 0.36, 1.15, 20, 1, false);
          cg.translate(ox, 0.575, oz);
          geos.push(cg);
          const top = new THREE.CircleGeometry(0.3, 20);
          top.rotateX(-Math.PI / 2);
          top.translate(ox, 1.152, oz);
          tops.push(top);
        }
        const bm = new THREE.Mesh(mergeGeometries(geos), null);
        const tm = new THREE.Mesh(mergeGeometries(tops), glowMat);
        bm.castShadow = true; bm.receiveShadow = true;
        const circle = { x, z, r: 0.9 };
        const light = this.addLight(x, 1.6, z, 0x6dff2a, 6, 7, false);
        const barrel = { c, r, x, z, mesh: bm, top: tm, circle, light, hp: 25, alive: false };
        bm.userData.barrel = barrel;
        tm.userData.barrel = barrel;
        this.barrels.push(barrel);
      } else if (ch === 'O' && this.def.city) {
        (this._litfass || (this._litfass = [])).push({ x, z });
        this.circles.push({ x, z, r: 0.78 });
      } else if (ch === 'O') {
        const pg = new THREE.CylinderGeometry(0.7, 0.8, H, 16, 1, true);
        pg.translate(x, H / 2, z);
        setCylUV(pg, 0.7, H);
        pillarGeos.push(pg);
        const ring = new THREE.CylinderGeometry(0.81, 0.81, 0.08, 16, 1, true);
        ring.translate(x, 2.2, z);
        stripGeos.push(ring);
        this.circles.push({ x, z, r: 0.85 });
      } else if (ch === 'L' || ch === 'K') {
        const fg = new THREE.BoxGeometry(1.4, 0.12, 0.5);
        fg.translate(x, H - 0.06, z);
        lampFixtureGeos.push(fg);
        const pg2 = new THREE.PlaneGeometry(1.25, 0.36);
        pg2.rotateX(Math.PI / 2);
        pg2.translate(x, H - 0.125, z);
        lampPanelGeos.push(pg2);
        this.addLight(x, H - 0.5, z, 0xffd9a8, ch === 'K' ? 40 : this.def.city ? 14 : 22, this.def.city ? 9 : 16, ch === 'K', rnd() < (this.def.city ? 0.6 : 0.25));
        this.lampPositions.push(new THREE.Vector3(x, H - 0.5, z));
      } else if (ch === 'R') {
        const fg = new THREE.BoxGeometry(0.6, 0.12, 0.6);
        fg.translate(x, H - 0.06, z);
        lampFixtureGeos.push(fg);
        const pg2 = new THREE.PlaneGeometry(0.5, 0.5);
        pg2.rotateX(Math.PI / 2);
        pg2.translate(x, H - 0.125, z);
        redPanelGeos.push(pg2);
        this.addLight(x, H - 0.6, z, 0xff2a12, 18, 13, false, true);
      } else if (ch === 'S') {
        const gg = new THREE.PlaneGeometry(1.7, 1.7);
        gg.rotateX(-Math.PI / 2);
        gg.translate(x, 0.008, z);
        grateGeos.push(gg);
        this.spawns.push(new THREE.Vector3(x, 0, z));
      } else if (ch === '@') {
        this.playerStart.set(x, this.cellH(ch), z);
      } else if (ch === 'E') {
        this.exitPos = new THREE.Vector3(x, this.cellH(ch), z);
      } else if (ch === 'X') {
        const bg = new THREE.BoxGeometry(CELL, CONTAINER_H, CELL);
        setBoxUV(bg, 2.4);
        bg.translate(x, CONTAINER_H / 2, z);
        (this._containers || (this._containers = [])).push(bg);
      } else if (ch === 'Y') {
        // Lampenmast mit Flutlicht
        const pole = new THREE.CylinderGeometry(0.09, 0.13, 7, 10);
        pole.translate(x, 3.5, z);
        (this._poles || (this._poles = [])).push(pole);
        const head = new THREE.BoxGeometry(0.9, 0.18, 0.5);
        head.translate(x, 7.05, z);
        lampFixtureGeos.push(head);
        const pg2 = new THREE.PlaneGeometry(0.8, 0.4);
        pg2.rotateX(Math.PI / 2);
        pg2.translate(x, 6.95, z);
        lampPanelGeos.push(pg2);
        if (!this.def.city || rnd() < 0.45) this.addLight(x, 6.6, z, this.def.city ? 0xffd2a0 : 0xcfe0ff, this.def.lampI || 110, this.def.city ? 18 : 30, false, rnd() < (this.def.city ? 0.5 : 0.2));
        this.circles.push({ x, z, r: 0.2 });
      }
    }

    // Leuchtstreifen an Metallwänden (Markenorange)
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      if (this.map[r][c] !== 'M') continue;
      for (const [dc, dr] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
        if (this.isWall(c + dc, r + dr)) continue;
        const sx = (c + 0.5) * CELL + dc * (CELL / 2 + 0.02), sz = (r + 0.5) * CELL + dr * (CELL / 2 + 0.02);
        const sg = new THREE.BoxGeometry(dc ? 0.03 : 0.08, 2.6, dc ? 0.08 : 0.03);
        sg.translate(sx, 1.9, sz);
        stripGeos.push(sg);
      }
    }

    const add = (geos, mat, shadow = true, collide = true) => {
      if (!geos.length) return null;
      const m = new THREE.Mesh(mergeGeometries(geos), mat);
      m.castShadow = shadow; m.receiveShadow = true;
      g.add(m);
      if (collide) this.colliders.push(m);
      return m;
    };
    add(crateGeos, this.mat('rust', { color: 0x8f7f6a }));
    add(cubeGeos, this.mat('plate', { color: 0x9aa0a6 }));
    add(cubeEdgeGeos, mats.hazard, false, false);
    for (const b of this.barrels) { b.mesh.material = mats.hazard; this.restoreBarrel(b); }
    add(pillarGeos, mats.metal);
    add(lampFixtureGeos, new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.8 }), false, false);
    add(lampPanelGeos, new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffe2b8, emissiveIntensity: 6 }), false, false);
    add(redPanelGeos, new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xff2010, emissiveIntensity: 7 }), false, false);
    add(stripGeos, new THREE.MeshStandardMaterial({ color: 0x110500, emissive: 0xff6b35, emissiveIntensity: 4.5 }), false, false);
    const grateMat = new THREE.MeshStandardMaterial({
      map: makeGrateTexture(), transparent: true, depthWrite: false, roughness: 0.6, metalness: 0.7,
      emissive: 0xff2200, emissiveIntensity: 0.9, emissiveMap: makeGrateTexture(true), polygonOffset: true, polygonOffsetFactor: -2,
    });
    add(grateGeos, grateMat, false, false);

    if (this.def.city) this.buildCity(g, mats, add, rnd);
    else if (this.outdoor) this.buildOutdoor(g, mats, add);
    if (this.outdoor) this.buildSky(g);
    if (this.map.some((row) => row.includes('G'))) this.buildGate(g, mats, add);
    for (const gf of this.def.graffiti || []) this.addGraffiti(g, gf);
    this.buildExit(g);

    this.initLightPool(10);
    // Grundlicht
    const hemi = this.def.sky === 'dawn' ? new THREE.HemisphereLight(0xa9b6dc, 0x6a5242, 1.35)
      : this.outdoor ? new THREE.HemisphereLight(0x7088b8, 0x2a241c, 1.5) : new THREE.HemisphereLight(0x8a96b0, 0x2a1d18, 0.55);
    g.add(hemi);
    this.hemi = hemi;
  }

  // ---------- Draußen: Dach, Treppen, Container, Himmel, Mond ----------
  buildOutdoor(g, mats, add) {
    const roofGeos = [], roofTop = [], stairGeos = [], parapet = [];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const h = this.hAt(c, r);
      if (h <= 0) continue;
      const x = (c + 0.5) * CELL, z = (r + 0.5) * CELL;
      const stair = h < ROOF_H - 0.01;
      const bg = new THREE.BoxGeometry(CELL, h, CELL);
      setBoxUV(bg, 2);
      bg.translate(x, h / 2, z);
      (stair ? stairGeos : roofGeos).push(bg);
      if (!stair) {
        const tg = new THREE.PlaneGeometry(CELL, CELL);
        tg.rotateX(-Math.PI / 2);
        tg.translate(x, h + 0.004, z);
        setWorldUV(tg, 'xz', 2);
        roofTop.push(tg);
        // Brüstung an Kanten zum Hof (nicht zur Treppe)
        for (const [dc, dr] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
          const nh = this.hAt(c + dc, r + dr);
          const nch = this.map[r + dr] && this.map[r + dr][c + dc];
          if (nh > 0 || nch === '#') continue;
          const w = dc ? 0.25 : CELL, d = dc ? CELL : 0.25;
          const pb = new THREE.BoxGeometry(w, 1.0, d);
          setBoxUV(pb, 1);
          pb.translate(x + dc * (CELL / 2 - 0.125), h + 0.5, z + dr * (CELL / 2 - 0.125));
          parapet.push(pb);
        }
      }
    }
    add(roofGeos, mats.bricks);
    add(roofTop, mats.plate);
    add(stairGeos, mats.concrete);
    add(parapet, mats.metal);
    if (this._containers) add(this._containers, this.mat('rust', { color: 0x6f8a9a }));
    if (this._poles) add(this._poles, mats.metal, true, false);

  }

  // ---------- Himmel: Nacht (Hof) oder Morgendämmerung (Stadt) ----------
  buildSky(g) {
    const ctr = new THREE.Vector3(this.w / 2, 0, this.h / 2);
    const dawn = this.def.sky === 'dawn';
    // Sonne/Mond-Richtung
    const md = dawn ? new THREE.Vector3(0.78, 0.3, -0.55).normalize() : new THREE.Vector3(-0.45, 0.55, -0.7).normalize();
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(190, 32, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, fog: false,
        uniforms: { uSun: { value: md.clone() } },
        vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: dawn ? `varying vec3 vP; uniform vec3 uSun;
          float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          void main(){
            float y = max(vP.y, 0.0);
            float s = max(dot(normalize(vP), uSun), 0.0);
            // Morgendämmerung: oben noch Nachtblau, am Horizont rosa, zur Sonne hin orange-gold
            vec3 zen = vec3(0.13, 0.17, 0.33);
            vec3 hor = mix(vec3(0.62, 0.48, 0.55), vec3(1.0, 0.56, 0.3), pow(s, 3.0));
            vec3 col = mix(hor, zen, pow(y, 0.55));
            col += vec3(1.0, 0.62, 0.32) * pow(s, 24.0) * 0.9;
            col += vec3(1.0, 0.85, 0.6) * pow(s, 400.0) * 3.0;
            // letzte Sterne ganz oben, gegenüber der Sonne
            vec3 q = floor(vP * 260.0);
            float st = step(0.9985, h(q)) * smoothstep(0.55, 0.9, y) * (1.0 - s);
            col += vec3(st) * 0.5;
            // dünne Wolkenstreifen, von unten angestrahlt
            float band = sin(vP.x * 9.0 + sin(vP.z * 7.0) * 1.5) * 0.5 + 0.5;
            float cl = smoothstep(0.62, 0.95, band) * smoothstep(0.04, 0.12, y) * (1.0 - smoothstep(0.2, 0.42, y));
            col = mix(col, mix(vec3(0.42, 0.33, 0.42), vec3(1.0, 0.62, 0.42), pow(s, 2.0)), cl * 0.55);
            gl_FragColor = vec4(col, 1.0);
          }` : `varying vec3 vP;
          float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          void main(){
            float y = max(vP.y, 0.0);
            vec3 col = mix(vec3(0.05, 0.07, 0.11), vec3(0.008, 0.012, 0.03), pow(y, 0.6));
            vec3 q = floor(vP * 260.0);
            float s = step(0.9975, h(q)) * smoothstep(0.05, 0.3, y);
            col += vec3(s) * 0.9;
            gl_FragColor = vec4(col, 1.0);
          }`,
      }),
    );
    sky.position.copy(ctr);
    sky.renderOrder = -10;
    g.add(sky);
    if (dawn) {
      // Sonne knapp über den Dächern + weicher Schein
      const sun = new THREE.Mesh(new THREE.CircleGeometry(6, 32), new THREE.MeshBasicMaterial({ color: 0xfff0d0, fog: false, toneMapped: false }));
      sun.position.copy(md).multiplyScalar(180).add(ctr);
      sun.lookAt(ctr);
      g.add(sun);
      const gc = document.createElement('canvas'); gc.width = gc.height = 128;
      const gx = gc.getContext('2d');
      const rg = gx.createRadialGradient(64, 64, 4, 64, 64, 64);
      rg.addColorStop(0, 'rgba(255,220,170,0.9)'); rg.addColorStop(0.35, 'rgba(255,150,80,0.35)'); rg.addColorStop(1, 'rgba(255,120,60,0)');
      gx.fillStyle = rg; gx.fillRect(0, 0, 128, 128);
      const gt = new THREE.CanvasTexture(gc); gt.colorSpace = THREE.SRGBColorSpace;
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, toneMapped: false }));
      glow.scale.set(70, 70, 1);
      glow.position.copy(md).multiplyScalar(175).add(ctr);
      g.add(glow);
    } else {
      const moon = new THREE.Mesh(new THREE.CircleGeometry(7, 32), new THREE.MeshBasicMaterial({ color: 0xf2efe0, fog: false }));
      moon.position.copy(md).multiplyScalar(180).add(ctr);
      moon.lookAt(ctr);
      g.add(moon);
    }
    const ml = new THREE.DirectionalLight(dawn ? 0xffbd86 : 0xa9bce0, dawn ? 3.4 : 3.2);
    ml.position.copy(md).multiplyScalar(90).add(ctr);
    ml.target.position.copy(ctr);
    g.add(ml.target);
    ml.castShadow = true;
    ml.shadow.mapSize.set(globalThis.ZW_LOW ? 1024 : 2048, globalThis.ZW_LOW ? 1024 : 2048);
    const sc = ml.shadow.camera;
    const ext = dawn ? 72 : 62;
    sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 10; sc.far = 200;
    ml.shadow.bias = -0.0006;
    ml.shadow.normalBias = 0.04;
    g.add(ml);
    this.moon = ml;
  }

  // ---------- Tor in der Hofmauer mit Gang dahinter ----------
  buildGate(g, mats, add) {
    let c0 = 1e9, c1 = -1, r1 = -1;
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      if (this.map[r][c] !== 'G') continue;
      c0 = Math.min(c0, c); c1 = Math.max(c1, c); r1 = Math.max(r1, r);
    }
    const x0 = c0 * CELL, x1 = (c1 + 1) * CELL, zf = (r1 + 1) * CELL; // zf = Front zum Hof
    const wdt = x1 - x0, cx = (x0 + x1) / 2, H = this.def.wallH || WALL_H;
    const DOOR_H = 4.6;
    // Sturz über dem Tor (verdeckt den Gang nach oben)
    const lg = new THREE.BoxGeometry(wdt, H - DOOR_H, zf);
    setBoxUV(lg, 2.2);
    lg.translate(cx, DOOR_H + (H - DOOR_H) / 2, zf / 2);
    add([lg], mats.bricks);
    // Gangdecke
    const cg = new THREE.PlaneGeometry(wdt, zf); cg.rotateX(Math.PI / 2); cg.translate(cx, DOOR_H - 0.01, zf / 2);
    add([cg], mats.ceiling, false);
    // Rahmen mit Warnstreifen
    const fr = [];
    for (const x of [x0 + 0.09, x1 - 0.09]) { const b = new THREE.BoxGeometry(0.18, DOOR_H, 0.25); b.translate(x, DOOR_H / 2, zf + 0.05); fr.push(b); }
    const top = new THREE.BoxGeometry(wdt, 0.3, 0.25); top.translate(cx, DOOR_H - 0.15, zf + 0.05); fr.push(top);
    add(fr, mats.hazard, true, false);
    // Licht am Ende des Gangs (es dämmert schon)
    const ec = document.createElement('canvas'); ec.width = 128; ec.height = 128;
    const ex = ec.getContext('2d');
    const lg2 = ex.createLinearGradient(0, 0, 0, 128);
    lg2.addColorStop(0, '#3a3048'); lg2.addColorStop(0.5, '#c86a40'); lg2.addColorStop(1, '#f0a070');
    ex.fillStyle = lg2; ex.fillRect(0, 0, 128, 128);
    // Ränder weich abdunkeln (Gang biegt ab, man sieht nur den Schein)
    const vg = ex.createRadialGradient(64, 90, 10, 64, 80, 80);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(8,6,10,0.92)');
    ex.fillStyle = vg; ex.fillRect(0, 0, 128, 128);
    const et = new THREE.CanvasTexture(ec); et.colorSpace = THREE.SRGBColorSpace;
    const endG = new THREE.PlaneGeometry(wdt - 0.1, DOOR_H);
    const end = new THREE.Mesh(endG, new THREE.MeshBasicMaterial({ map: et, toneMapped: false, fog: false }));
    end.position.set(cx, DOOR_H / 2, 0.03);
    g.add(end);
    this.addLight(cx, 3.2, 1.2, 0xffa868, 16, 9);
    // Rolltor (fährt beim Öffnen nach oben in den Sturz)
    const dg = new THREE.BoxGeometry(wdt - 0.3, DOOR_H, 0.1);
    setBoxUV(dg, 1.4);
    const door = new THREE.Mesh(dg, this.mat('metal', { color: 0x8a949c, normalScale: 1.6 }));
    door.position.set(cx, DOOR_H / 2, zf - 0.16);
    door.castShadow = true; door.receiveShadow = true;
    g.add(door);
    this.colliders.push(door);
    this.gate = { door, open: 0, opening: false, baseY: DOOR_H / 2, cx, zf };
    // Ziel im Gang, Markierung davor im Hof
    this.exitPos = new THREE.Vector3(cx, 0, zf / 2);
    this.exitMarkPos = new THREE.Vector3(cx, 0, zf + 1.6);
  }

  cityMat(kind) {
    this._cm = this._cm || {};
    if (this._cm[kind]) return this._cm[kind];
    let m;
    if (kind === 'asphalt') {
      const t = canvasTex(512, (x, S) => {
        x.fillStyle = '#3b3a3c'; x.fillRect(0, 0, S, S);
        noise(x, S, 9000, 0.05, ['#2a292b', '#4a4846', '#535050']);
        x.strokeStyle = 'rgba(20,18,18,0.7)'; x.lineWidth = 2;
        for (let i = 0; i < 9; i++) { x.beginPath(); let px = Math.random() * S, py = Math.random() * S; x.moveTo(px, py); for (let k = 0; k < 7; k++) { px += (Math.random() - 0.5) * 70; py += (Math.random() - 0.5) * 70; x.lineTo(px, py); } x.stroke(); }
        for (let i = 0; i < 5; i++) { const rg = x.createRadialGradient(0, 0, 0, 0, 0, 40); rg.addColorStop(0, 'rgba(10,10,14,0.45)'); rg.addColorStop(1, 'rgba(10,10,14,0)'); x.save(); x.translate(Math.random() * S, Math.random() * S); x.scale(1.6, 1); x.fillStyle = rg; x.fillRect(-60, -60, 120, 120); x.restore(); }
      });
      m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.92, metalness: 0, color: 0xb8b0b4 });
    } else if (kind === 'walk') {
      const t = canvasTex(256, (x, S) => {
        x.fillStyle = '#8a8682'; x.fillRect(0, 0, S, S);
        noise(x, S, 2500, 0.08, ['#7a7672', '#9a9692', '#6e6a66']);
        x.strokeStyle = '#55524f'; x.lineWidth = 3;
        for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * S / 4, 0); x.lineTo(i * S / 4, S); x.stroke(); x.beginPath(); x.moveTo(0, i * S / 4); x.lineTo(S, i * S / 4); x.stroke(); }
      });
      m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, metalness: 0, color: 0xc0b8b4 });
    } else if (kind === 'tiles') {
      const t = canvasTex(256, (x, S) => {
        for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#8f887c' : '#5f584e'; x.fillRect(i * 32, j * 32, 32, 32); }
        noise(x, S, 3000, 0.12, ['#4a4440', '#d0c8bc']);
        x.strokeStyle = '#3a3430'; x.lineWidth = 1.5;
        for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(Math.random() * S, Math.random() * S); x.lineTo(Math.random() * S, Math.random() * S); x.stroke(); }
      });
      m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.55, metalness: 0.05 });
    } else if (kind === 'lane') {
      m = new THREE.MeshStandardMaterial({ color: 0xd8d2c0, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -2 });
    }
    this._cm[kind] = m;
    return m;
  }

  // ---------- Die Stadt: Häuser, Läden, Straßen, Autos ----------
  buildCity(g, mats, add, rnd) {
    const H = this.def.wallH; // Deckenhöhe innen
    const isB = (c, r) => c >= 0 && r >= 0 && c < this.cols && r < this.rows && (this.map[r][c] === 'H' || this.isInterior(c, r) > 0);
    // Gebäude = zusammenhängende Flächen aus H + Innenräumen; jedes bekommt eine Höhe und Fassade
    const comp = new Int32Array(this.rows * this.cols).fill(-1);
    const bh = [];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      if (!isB(c, r) || comp[r * this.cols + c] >= 0) continue;
      const id = bh.length, st = [[c, r]];
      comp[r * this.cols + c] = id;
      let n = 0;
      while (st.length) {
        const [x, y] = st.pop(); n++;
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, ny = y + dy;
          if (!isB(nx, ny) || comp[ny * this.cols + nx] >= 0) continue;
          comp[ny * this.cols + nx] = id; st.push([nx, ny]);
        }
      }
      bh.push(id);
    }
    // Der Rand ist ein großer Ring – dort Höhe je Abschnitt variieren, sonst je Gebäude
    const cellTop = new Float32Array(this.rows * this.cols);
    const hr = mulberry(77);
    const blockH = {};
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const i = r * this.cols + c;
      if (comp[i] < 0) continue;
      // Abschnitt 6×6 Zellen: gibt dem Rand eine abwechslungsreiche Silhouette
      const key = comp[i] + ':' + Math.floor(c / 6) + ':' + Math.floor(r / 6);
      // ganze Geschosse (3 m) + Attika, damit oben keine Fensterreihe angeschnitten wird
      if (!(key in blockH)) blockH[key] = [(3 + Math.floor(hr() * 3) + (hr() < 0.25 ? 2 : 0)) * 3 + 0.6, Math.floor(hr() * 4)];
      cellTop[i] = blockH[key][0];
    }
    const vAt = (c, r) => { const i = r * this.cols + c; const key = comp[i] + ':' + Math.floor(c / 6) + ':' + Math.floor(r / 6); return blockH[key][1]; };
    const topAt = (c, r) => (c < 0 || r < 0 || c >= this.cols || r >= this.rows) ? 0 : cellTop[r * this.cols + c];

    const fac = [[], [], [], []], inner = [], ceil = [], roofs = [], tiles = [], tunnelF = [], cornice = [], fugen = [];
    const secAt = (c, r) => comp[r * this.cols + c] + ':' + Math.floor(c / 6) + ':' + Math.floor(r / 6);
    const SIDES = [[0, -1, 'n'], [0, 1, 's'], [-1, 0, 'w'], [1, 0, 'e']];
    const edge = (c, r, side) => {
      const x0 = c * CELL, z0 = r * CELL;
      if (side === 'n') return [[x0 + CELL, z0], [x0, z0]];
      if (side === 's') return [[x0, z0 + CELL], [x0 + CELL, z0 + CELL]];
      if (side === 'w') return [[x0, z0], [x0, z0 + CELL]];
      return [[x0 + CELL, z0 + CELL], [x0 + CELL, z0]];
    };
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      if (!isB(c, r)) continue;
      const me = topAt(c, r), inside = this.isInterior(c, r) > 0, v = vAt(c, r);
      const x = (c + 0.5) * CELL, z = (r + 0.5) * CELL;
      for (const [dc, dr, side] of SIDES) {
        const nc = c + dc, nr = r + dr;
        if (nc < 0 || nr < 0 || nc >= this.cols || nr >= this.rows) continue;
        const [a, b] = edge(c, r, side);
        const nrm = [dc, 0, dr];
        // Gesims oben an jeder Außenkante + senkrechte Fuge, wo das Nachbarhaus beginnt
        if (!isB(nc, nr)) {
          const ln = CELL + 0.36, cx0 = (a[0] + b[0]) / 2 + dc * 0.12, cz0 = (a[1] + b[1]) / 2 + dr * 0.12;
          const cb = new THREE.BoxGeometry(dc ? 0.24 : ln, 0.42, dc ? ln : 0.24); cb.translate(cx0, me - 0.12, cz0); cornice.push(cb);
          // an der Bordsteinkante entlang: prüfen, ob die nächste Zelle entlang der Fassade zu einem anderen Haus gehört
          const tc = dr ? 1 : 0, tr = dc ? 1 : 0;
          for (const sgn of [1]) {
            const ac = c + tc * sgn, ar = r + tr * sgn;
            if (isB(ac, ar) && !isB(ac + dc, ar + dr) && this.isInterior(ac, ar) === 0 && secAt(ac, ar) !== secAt(c, r)) {
              const fx = dr ? (c + 1) * CELL : a[0] + dc * 0.06, fz = dc ? (r + 1) * CELL : a[1] + dr * 0.06;
              const fh = Math.min(me, topAt(ac, ar));
              const fg = new THREE.BoxGeometry(dr ? 0.22 : 0.14, fh, dr ? 0.14 : 0.22); fg.translate(fx, fh / 2, fz); fugen.push(fg);
            }
          }
        }
        const nB = isB(nc, nr), nIn = this.isInterior(nc, nr) > 0, nTop = topAt(nc, nr);
        if (!inside) {
          if (nB && !nIn) { if (nTop < me) fac[v].push(quad(a, b, nTop, me, nrm, 16, 15)); continue; }
          if (nIn) { inner.push(quad(a, b, 0, H, nrm, 2.4)); if (nTop < me) fac[v].push(quad(a, b, Math.max(H, nTop), me, nrm, 16, 15)); continue; }
          fac[v].push(quad(a, b, 0, me, nrm, 16, 15));
        } else if (!nB) {
          // Ladenöffnung: Fassade nur über der Öffnung
          fac[v].push(quad(a, b, H, me, nrm, 16, 15));
        } else if (!nIn && nTop < me) fac[v].push(quad(a, b, nTop, me, nrm, 16, 15));
      }
      // Dach
      const tg = new THREE.PlaneGeometry(CELL, CELL); tg.rotateX(-Math.PI / 2); tg.translate(x, me, z); setWorldUV(tg, 'xz', 4); roofs.push(tg);
      if (inside) {
        const cg = new THREE.PlaneGeometry(CELL, CELL); cg.rotateX(Math.PI / 2); cg.translate(x, H, z); setWorldUV(cg, 'xz', 4); ceil.push(cg);
        const fg = new THREE.PlaneGeometry(CELL, CELL); fg.rotateX(-Math.PI / 2); fg.translate(x, 0.006, z); setWorldUV(fg, 'xz', 4);
        (this.isInterior(c, r) === 2 ? tunnelF : tiles).push(fg);
      }
    }
    const facMats = [0, 1, 2, 3].map((k) => makeFacadeMaterial(k));
    fac.forEach((arr, k) => add(arr, facMats[k]));
    add(cornice, this.mat('concrete', { color: 0x9a948c, normalScale: 0.5 }), true, false);
    add(fugen, this.mat('concrete', { color: 0x6a645e, normalScale: 0.5 }), false, false);
    add(inner, this.mat('concrete', { color: 0x9c968e, normalScale: 0.6 }));
    add(ceil, mats.ceiling, false);
    add(roofs, this.mat('concrete', { color: 0x4c4846 }), false, false);
    add(tiles, this.cityMat('tiles'), false, false);
    add(tunnelF, mats.concrete, false, false);

    // Gehwege, Fahrbahnmarkierung
    const walk = [], lanes = [];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const ch = this.map[r][c];
      const x = (c + 0.5) * CELL, z = (r + 0.5) * CELL;
      if (ch === ',' || (this.outdoorWalk(c, r))) {
        const wg = new THREE.PlaneGeometry(CELL, CELL); wg.rotateX(-Math.PI / 2); wg.translate(x, 0.005, z); setWorldUV(wg, 'xz', 2); walk.push(wg);
      }
      if (ch === '-' || ch === '|') {
        const lg = new THREE.PlaneGeometry(ch === '-' ? 1.3 : 0.16, ch === '-' ? 0.16 : 1.3); lg.rotateX(-Math.PI / 2); lg.translate(x, 0.008, z); lanes.push(lg);
      }
    }
    add(walk, this.cityMat('walk'), false, false);
    add(lanes, this.cityMat('lane'), false, false);

    // Ladenschilder
    for (const sh of this.def.shops || []) this.addShopSign(g, sh, H);

    // Autos (A = quer, zwei Felder; V = längs)
    const paints = [0x7a1e1a, 0x24405e, 0xb8b4aa, 0x2f4a32, 0x6b6560, 0x8a6a2a].map((col) => new THREE.MeshStandardMaterial({ color: col, roughness: 0.45, metalness: 0.55, envMapIntensity: 0.8 }));
    const burnt = this.mat('rust', { color: 0x5a4a42 });
    const parts = { glass: [], black: [], chrome: [], head: [], tail: [] };
    const bodies = paints.map(() => []); const burntG = [];
    const seen = new Set();
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const ch = this.map[r][c];
      if ((ch !== 'A' && ch !== 'V') || seen.has(r * this.cols + c)) continue;
      const along = ch === 'A' ? [c + 1, r] : [c, r + 1];
      seen.add(r * this.cols + c); seen.add(along[1] * this.cols + along[0]);
      const x = ch === 'A' ? (c + 1) * CELL : (c + 0.5) * CELL, z = ch === 'A' ? (r + 0.5) * CELL : (r + 1) * CELL;
      const isBurnt = rnd() < 0.28;
      const rot = (ch === 'A' ? 0 : Math.PI / 2) + (rnd() < 0.5 ? Math.PI : 0) + (rnd() - 0.5) * 0.22;
      const mtx = new THREE.Matrix4().makeRotationY(rot).setPosition(x, 0, z);
      const k = Math.floor(rnd() * paints.length);
      makeCar(mtx, isBurnt ? burntG : bodies[k], parts, isBurnt, rnd);
    }
    bodies.forEach((arr, k) => add(arr, paints[k]));
    add(burntG, burnt);
    add(parts.glass, new THREE.MeshStandardMaterial({ color: 0x0c1016, roughness: 0.08, metalness: 0.9, envMapIntensity: 1.4 }), false);
    add(parts.black, new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, metalness: 0.1 }));
    add(parts.chrome, new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.25, metalness: 1 }), false, false);
    add(parts.head, new THREE.MeshStandardMaterial({ color: 0x777766, emissive: 0xfff2c8, emissiveIntensity: 0.25 }), false, false);
    add(parts.tail, new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1a0a, emissiveIntensity: 0.4 }), false, false);

    // Mülltonnen, Absperrbaken, Schutt
    const bins = [], lids = [], bake = [], bakeLegs = [], rubble = [], paper = [];
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const ch = this.map[r][c];
      const x = (c + 0.5) * CELL + (rnd() - 0.5) * 0.5, z = (r + 0.5) * CELL + (rnd() - 0.5) * 0.5;
      if (ch === 'U') {
        const tilt = rnd() < 0.2;
        const bg = new THREE.BoxGeometry(0.62, 1.0, 0.7); setBoxUV(bg, 0.8);
        if (tilt) { bg.translate(0, 0.35, 0); bg.rotateZ(Math.PI / 2); bg.translate(0, 0, 0); }
        bg.rotateY(rnd() * 6.28); bg.translate(x, tilt ? 0.31 : 0.5, z); bins.push(bg);
        if (!tilt) { const lg = new THREE.BoxGeometry(0.68, 0.06, 0.76); lg.rotateY(rnd() * 0.4); lg.translate(x, 1.03, z); lids.push(lg); }
        this.circles.push({ x, z, r: 0.42 });
      } else if (ch === 'N') {
        const along = (this.map[r][c - 1] === 'N' || this.map[r][c + 1] === 'N');
        const bx = (c + 0.5) * CELL, bz = (r + 0.5) * CELL;
        for (const yy of [0.62, 0.92]) { const b = new THREE.BoxGeometry(along ? 1.9 : 0.1, 0.2, along ? 0.1 : 1.9); b.translate(bx, yy, bz); bake.push(b); }
        for (const o of [-0.8, 0.8]) { const l = new THREE.BoxGeometry(0.08, 1.0, 0.5); if (!along) l.rotateY(Math.PI / 2); l.translate(bx + (along ? o : 0), 0.5, bz + (along ? 0 : o)); bakeLegs.push(l); }
      }
      // Schutt am Straßenrand und vor Läden
      const nearB = isB(c - 1, r) || isB(c + 1, r) || isB(c, r - 1) || isB(c, r + 1);
      if ((ch === ',' || ch === '.') && rnd() < (nearB ? 0.22 : 0.05)) {
        for (let k = 0, n = 1 + Math.floor(rnd() * 4); k < n; k++) {
          const s = 0.1 + rnd() * 0.35;
          const rb = new THREE.BoxGeometry(s * (0.8 + rnd()), s * 0.6, s);
          rb.rotateY(rnd() * 6.28); rb.rotateX((rnd() - 0.5) * 0.6);
          rb.translate((c + rnd()) * CELL, s * 0.25, (r + rnd()) * CELL);
          rubble.push(rb);
        }
      }
      if ((ch === ',' || ch === '.' || ch === '-' || ch === '|') && rnd() < 0.08) {
        const pg = new THREE.PlaneGeometry(0.22 + rnd() * 0.15, 0.3); pg.rotateX(-Math.PI / 2); pg.rotateY(rnd() * 6.28); pg.translate((c + rnd()) * CELL, 0.012, (r + rnd()) * CELL); paper.push(pg);
      }
    }
    add(bins, this.mat('plate', { color: 0x4a6a48 }));
    add(lids, new THREE.MeshStandardMaterial({ color: 0x2a3a28, roughness: 0.7 }), false, false);
    add(bake, makeStripeMaterial());
    add(bakeLegs, new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.6 }), false, false);
    add(rubble, this.mat('concrete', { color: 0x7a706a }), true, false);
    add(paper, new THREE.MeshStandardMaterial({ color: 0xd8d0c0, roughness: 0.9, side: THREE.DoubleSide }), false, false);
    if (this._containers) add(this._containers, this.mat('rust', { color: 0xb08a3a }));
    if (this._poles) add(this._poles, mats.metal, true, false);
    if (this._ccrates) add(this._ccrates, this.mat('rust', { color: 0xc8a882, normalScale: 0.8 }));

    // Ladenregale: Metallgestell mit Ware, manches umgekippt
    if (this._shelves) {
      const frame = [], boards = [], goods = [[], [], [], []];
      for (const sh of this._shelves) {
        // Rückwand zur nächsten Wand drehen (frei stehend: Rücken nach Norden)
        const L = 1.8, D = 0.7, Hs = 1.9;
        const inn = (dc, dr) => this.isInterior(sh.c + dc, sh.r + dr) > 0;
        const rot = !inn(0, -1) ? 0 : !inn(0, 1) ? Math.PI : !inn(-1, 0) ? Math.PI / 2 : !inn(1, 0) ? -Math.PI / 2 : 0;
        const m = new THREE.Matrix4().makeRotationY(rot + (rnd() - 0.5) * 0.06).setPosition(sh.x, 0, sh.z);
        const P = (arr, geo) => { geo.applyMatrix4(m); arr.push(geo); };
        for (const ox of [-L / 2 + 0.03, L / 2 - 0.03]) { const b = new THREE.BoxGeometry(0.05, Hs, D); b.translate(ox, Hs / 2, 0); P(frame, b); }
        const back = new THREE.BoxGeometry(L, Hs, 0.03); back.translate(0, Hs / 2, -D / 2 + 0.02); P(frame, back);
        for (let k = 0; k < 4; k++) {
          const y = 0.12 + k * 0.55;
          const bb = new THREE.BoxGeometry(L - 0.06, 0.035, D); bb.translate(0, y, 0); P(boards, bb);
          if (k === 3) continue;
          let px = -L / 2 + 0.12;
          while (px < L / 2 - 0.2) {
            const w = 0.12 + rnd() * 0.22, hh = 0.14 + rnd() * 0.3, d = 0.18 + rnd() * 0.3;
            if (rnd() < 0.72) {
              const gb = new THREE.BoxGeometry(w, hh, d);
              if (rnd() < 0.15) { gb.rotateZ(Math.PI / 2); gb.translate(px + hh / 2, y + 0.02 + w / 2, (rnd() - 0.5) * 0.15); }
              else gb.translate(px + w / 2, y + 0.02 + hh / 2, (rnd() - 0.5) * 0.2);
              P(goods[Math.floor(rnd() * 4)], gb);
            }
            px += w + 0.03;
          }
        }
        // heruntergefallene Ware davor
        for (let k = 0; k < 3; k++) { const gb = new THREE.BoxGeometry(0.2, 0.15, 0.25); gb.rotateY(rnd() * 6); gb.translate((rnd() - 0.5) * L, 0.075, D / 2 + 0.2 + rnd() * 0.6); P(goods[k % 4], gb); }
      }
      add(frame, new THREE.MeshStandardMaterial({ color: 0x8a9096, roughness: 0.45, metalness: 0.7 }));
      add(boards, new THREE.MeshStandardMaterial({ color: 0x6a7076, roughness: 0.5, metalness: 0.6 }), true, false);
      [0x9a3a30, 0xb89a48, 0x3a6a8e, 0xc8c2b4].forEach((col, k) => add(goods[k], new THREE.MeshStandardMaterial({ color: col, roughness: 0.7 }), false, false));
    }

    // Litfaßsäule (statt Säule auf dem Platz)
    if (this._litfass) {
      const tex = canvasTex(512, (x, S) => {
        x.fillStyle = '#d8d0c0'; x.fillRect(0, 0, S, S);
        const cols = ['#ff6b35', '#2e86c1', '#e8c040', '#5a3a6a', '#2a7a4a', '#c0392b'];
        for (let i = 0; i < 6; i++) {
          const px = (i % 3) * 170 + 4, py = Math.floor(i / 3) * 256 + 6;
          x.fillStyle = cols[i]; x.fillRect(px, py, 162, 244);
          x.fillStyle = 'rgba(255,255,255,0.85)'; x.font = '900 34px Impact, Arial, sans-serif'; x.textAlign = 'center';
          x.fillText(['ZIRKUS', 'KONZERT', 'FLOHMARKT', 'KINO', 'STADTFEST', 'GESUCHT'][i], px + 81, py + 60);
          x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(px + 20, py + 90, 122, 100);
          // abgerissene Ecken
          x.fillStyle = '#b8b0a0'; x.beginPath(); x.moveTo(px + 162, py + 244); x.lineTo(px + 100, py + 244); x.lineTo(px + 162, py + 170); x.closePath(); x.fill();
        }
        noise(x, S, 6000, 0.08, ['#000', '#fff']);
      });
      for (const o of this._litfass) {
        const col = new THREE.CylinderGeometry(0.62, 0.62, 2.7, 24, 1, true); col.translate(o.x, 0.25 + 1.35, o.z);
        add([col], new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }));
        const base = new THREE.CylinderGeometry(0.72, 0.75, 0.25, 24); base.translate(o.x, 0.125, o.z);
        const cap = new THREE.CylinderGeometry(0.2, 0.75, 0.45, 24); cap.translate(o.x, 2.95 + 0.225, o.z);
        const knob = new THREE.SphereGeometry(0.12, 12, 8); knob.translate(o.x, 3.45, o.z);
        add([base, cap, knob], new THREE.MeshStandardMaterial({ color: 0x2f4a3a, roughness: 0.5, metalness: 0.5 }));
      }
    }
  }

  // Gehweg auch unter Laternen, Tonnen usw. (die stehen auf dem Gehweg)
  outdoorWalk(c, r) {
    const ch = this.map[r][c];
    if (!'YUBCNX'.includes(ch)) return false;
    let n = 0;
    for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const q = this.map[r + dr] && this.map[r + dr][c + dc]; if (q === ',') n++; }
    return n >= 2;
  }

  // Sprühfarbe auf einer Wand: dicke Buchstaben mit Kontur, Schatten, Läufern und Sprühnebel
  addGraffiti(g, gf) {
    const W = gf.cells * CELL - 0.2, Hh = 1.7;
    const cv = document.createElement('canvas'); cv.width = 1024; cv.height = Math.round(1024 * Hh / W);
    const x = cv.getContext('2d'), CW = cv.width, CH = cv.height;
    const rnd = mulberry(4040);
    const words = gf.text.split(' ');
    const lines = words.length >= 2 ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')] : [gf.text];
    let fs = Math.min(CH / lines.length * 0.78, 220);
    x.font = `900 ${fs}px Impact, "Arial Black", Arial, sans-serif`;
    const widest = Math.max(...lines.map((l) => x.measureText(l).width));
    if (widest > CW * 0.88) { fs *= CW * 0.88 / widest; x.font = `900 ${fs}px Impact, "Arial Black", Arial, sans-serif`; }
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round';
    lines.forEach((ln, li) => {
      const cy = CH / (lines.length + 0) * (li + 0.5);
      let px = CW / 2 - x.measureText(ln).width / 2;
      for (let i = 0; i < ln.length; i++) {
        const ch = ln[i], w = x.measureText(ch).width;
        x.save();
        x.translate(px + w / 2, cy + (rnd() - 0.5) * fs * 0.12);
        x.rotate((rnd() - 0.5) * 0.18);
        // Schatten, Kontur, Füllung mit Verlauf
        x.fillStyle = 'rgba(0,0,0,0.55)'; x.fillText(ch, 8, 8);
        x.strokeStyle = '#111'; x.lineWidth = fs * 0.16; x.strokeText(ch, 0, 0);
        x.strokeStyle = '#f2f2f2'; x.lineWidth = fs * 0.07; x.strokeText(ch, 0, 0);
        const gr = x.createLinearGradient(0, -fs / 2, 0, fs / 2);
        gr.addColorStop(0, '#ffd23a'); gr.addColorStop(0.5, '#ff6b35'); gr.addColorStop(1, '#e3241b');
        x.fillStyle = gr; x.fillText(ch, 0, 0);
        x.restore();
        // Läufer (Farbe tropft)
        if (ch !== ' ' && rnd() < 0.55) {
          const dx = px + w * (0.2 + rnd() * 0.6), dy = cy + fs * 0.32, dl = fs * (0.15 + rnd() * 0.5);
          x.strokeStyle = rnd() < 0.5 ? '#e3241b' : '#ff6b35'; x.lineWidth = 3 + rnd() * 4; x.lineCap = 'round';
          x.beginPath(); x.moveTo(dx, dy); x.lineTo(dx + (rnd() - 0.5) * 3, dy + dl); x.stroke();
          x.fillStyle = x.strokeStyle; x.beginPath(); x.arc(dx, dy + dl, x.lineWidth * 0.8, 0, 7); x.fill();
        }
        px += w;
      }
    });
    // Sprühnebel
    for (let i = 0; i < 2600; i++) {
      x.fillStyle = ['rgba(255,107,53,0.35)', 'rgba(227,36,27,0.3)', 'rgba(255,210,58,0.3)'][i % 3];
      const rr = rnd() * 2.2; x.beginPath(); x.arc(CW * (0.04 + rnd() * 0.92), CH * (0.06 + rnd() * 0.88), rr, 0, 7); x.fill();
    }
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const m = new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, roughness: 0.75, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.1, polygonOffset: true, polygonOffsetFactor: -4 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(W, Hh), m);
    const x0 = gf.c * CELL, z0 = gf.r * CELL, mid = gf.cells * CELL / 2;
    if (gf.side === 'n') { mesh.position.set(x0 + mid, 1.9, z0 - 0.02); mesh.rotation.y = Math.PI; }
    if (gf.side === 's') { mesh.position.set(x0 + mid, 1.9, z0 + CELL + 0.02); }
    if (gf.side === 'w') { mesh.position.set(x0 - 0.02, 1.9, z0 + mid); mesh.rotation.y = -Math.PI / 2; }
    if (gf.side === 'e') { mesh.position.set(x0 + CELL + 0.02, 1.9, z0 + mid); mesh.rotation.y = Math.PI / 2; }
    g.add(mesh);
    this.addLight(mesh.position.x, 3.2, mesh.position.z + (gf.side === 'n' ? -1.2 : 1.2), 0xffd9b0, 8, 6);
  }

  addShopSign(g, sh, H) {
    const cells = (sh.face === 's' || sh.face === 'n') ? sh.c1 - sh.c0 + 1 : sh.r1 - sh.r0 + 1;
    const wdt = Math.max(3.2, cells * CELL - 0.3);
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96;
    const x = cv.getContext('2d');
    x.fillStyle = '#16161a'; x.fillRect(0, 0, 512, 96);
    x.strokeStyle = '#555'; x.lineWidth = 6; x.strokeRect(3, 3, 506, 90);
    const cols = ['#ff6b35', '#ffd23a', '#35e0ff', '#e8e2d0', '#ff4a6a'];
    const col = cols[(sh.name.length + sh.r0) % cols.length];
    x.font = '900 58px Impact, "Arial Black", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    // einzelne Buchstaben sind kaputt (dunkel)
    const txt = sh.name; const tw = x.measureText(txt).width; let px = 256 - tw / 2;
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i]; const w = x.measureText(ch).width;
      x.fillStyle = ((i * 7 + sh.c0) % 5 === 2 && ch !== ' ') ? '#3a3632' : col;
      x.textAlign = 'left'; x.fillText(ch, px, 50); px += w;
    }
    x.fillStyle = 'rgba(0,0,0,0.35)'; for (let i = 0; i < 40; i++) x.fillRect(Math.random() * 512, Math.random() * 96, 2 + Math.random() * 20, 2 + Math.random() * 6);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const m = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.55, roughness: 0.6 });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(wdt, wdt * 96 / 512 * 1.3), m);
    const y = H + 0.62;
    if (sh.face === 's') { sign.position.set((sh.c0 + sh.c1 + 1) / 2 * CELL, y, (sh.r1 + 1) * CELL + 0.07); }
    if (sh.face === 'n') { sign.position.set((sh.c0 + sh.c1 + 1) / 2 * CELL, y, sh.r0 * CELL - 0.07); sign.rotation.y = Math.PI; }
    if (sh.face === 'e') { sign.position.set((sh.c1 + 1) * CELL + 0.07, y, (sh.r0 + sh.r1 + 1) / 2 * CELL); sign.rotation.y = Math.PI / 2; }
    if (sh.face === 'w') { sign.position.set(sh.c0 * CELL - 0.07, y, (sh.r0 + sh.r1 + 1) / 2 * CELL); sign.rotation.y = -Math.PI / 2; }
    g.add(sign);
  }

  // Ausgang: leuchtender Ring + Lichtsäule (erst sichtbar, wenn er offen ist)
  buildExit(g) {
    if (!this.exitPos) return;
    const e = new THREE.Group();
    e.position.copy(this.exitMarkPos || this.exitPos);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x35e0ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 40), ringMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03;
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x35e0ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const bH = this.def.beamH || 6;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, bH, 32, 1, true), beamMat);
    beam.position.y = bH / 2;
    // Schild „AUSGANG“
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const x2 = c.getContext('2d');
    x2.fillStyle = '#35e0ff'; x2.font = '900 44px Impact, Arial, sans-serif'; x2.textAlign = 'center'; x2.textBaseline = 'middle';
    x2.fillText(this.def.exitLabel || 'AUSGANG', 128, 34);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
    sign.scale.set(2.4, 0.6, 1); sign.position.y = 2.6;
    this.signY = 2.6;
    e.add(ring, beam, sign);
    e.visible = false;
    g.add(e);
    this.exit = { group: e, ring, beam, sign, active: false };
  }

  setExit(on) {
    if (!this.exit) return;
    this.exit.active = on;
    this.exit.group.visible = on;
    if (this.gate) {
      this.gate.opening = on;
      if (!on) { this.gate.open = 0; this.gate.door.position.y = this.gate.baseY; this.gate.door.scale.y = 1; }
      this.flowCell = -1;
    }
  }

  addLight(x, y, z, color, intensity, dist, shadow = false, flicker = false) {
    if (shadow) {
      const l = new THREE.SpotLight(color, intensity * 9, 26, Math.PI / 2.6, 0.6, 1.6);
      l.position.set(x, y, z);
      l.target.position.set(x, 0, z);
      this.group.add(l.target);
      l.castShadow = true;
      l.shadow.mapSize.set(globalThis.ZW_LOW ? 512 : 1024, globalThis.ZW_LOW ? 512 : 1024);
      l.shadow.camera.near = 0.5;
      l.shadow.camera.far = 26;
      l.shadow.bias = -0.0004;
      l.shadow.normalBias = 0.02;
      l.shadow.radius = 4;
      this.group.add(l);
      this.shadowLights.push(l);
      this.virtual.push({ pos: new THREE.Vector3(x, y, z), color: new THREE.Color(color), intensity, dist, flicker, seed: Math.random() * 100, cur: intensity, real: l });
      return l;
    }
    const v = { pos: new THREE.Vector3(x, y, z), color: new THREE.Color(color), intensity, dist, flicker, seed: Math.random() * 100, cur: intensity };
    this.virtual.push(v);
    return v;
  }

  // Feste Anzahl echter Punktlichter, die jeweils den nächsten virtuellen Lampen zugeordnet werden
  initLightPool(n = 10) {
    this.pool = [];
    for (let i = 0; i < n; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 10, 1.6);
      this.group.add(l);
      this.pool.push(l);
    }
  }

  update(t, cam) {
    const dt = this._lt === undefined ? 0 : Math.min(0.05, Math.max(0, t - this._lt));
    this._lt = t;
    if (this.gate && this.gate.opening && this.gate.open < 1) {
      // Rolltor fährt in ~2,6 s hoch (erst ruckelnd, dann gleichmäßig)
      this.gate.open = Math.min(1, this.gate.open + dt / 2.6);
      const k = this.gate.open;
      // rollt sich oben ein: Höhe schrumpft, Oberkante bleibt am Sturz
      const hh = Math.max(0.04, 1 - k);
      this.gate.door.scale.y = hh;
      this.gate.door.position.y = this.gate.baseY * 2 - this.gate.baseY * hh + (k < 0.15 ? Math.sin(t * 60) * 0.015 : 0);
    }
    if (this.exit && this.exit.active) {
      const k = 0.5 + 0.5 * Math.sin(t * 4);
      this.exit.beam.material.opacity = 0.14 + 0.12 * k;
      this.exit.ring.scale.setScalar(1 + 0.08 * k);
      this.exit.sign.position.y = 2.6 + Math.sin(t * 2) * 0.08;
    }
    for (const v of this.virtual) {
      if (!v.flicker) { v.cur = v.intensity; continue; }
      const n = Math.sin(t * 13 + v.seed) * Math.sin(t * 7.3 + v.seed * 2) + Math.sin(t * 31 + v.seed);
      const off = Math.sin(t * 0.7 + v.seed) > 0.93 ? 0.08 : 1;
      v.cur = v.intensity * off * (0.82 + 0.18 * n);
      if (v.real) v.real.intensity = v.cur * 9;
    }
    if (!cam || !this.pool) return;
    const cand = this.virtual.filter((v) => !v.real);
    for (const v of cand) v.d = v.pos.distanceToSquared(cam);
    cand.sort((a, b) => a.d - b.d);
    const R = this.outdoor ? 90 * 90 : 34 * 34;
    for (let i = 0; i < this.pool.length; i++) {
      const l = this.pool[i], v = cand[i];
      if (!v) { l.intensity = 0; continue; }
      l.position.copy(v.pos);
      l.color.copy(v.color);
      l.distance = v.dist;
      // weich ausblenden, damit nichts „aufploppt“
      const fade = Math.max(0, Math.min(1, (R - v.d) / (R * 0.35)));
      const lastSlot = i >= this.pool.length - 2 ? 0.5 : 1;
      l.intensity = v.cur * fade * lastSlot;
    }
  }

  // Helligkeit an einer Position (für Waffe/Viewmodel)
  lightAt(p) {
    let s = 0.0;
    for (const v of this.virtual) {
      const d2 = v.pos.distanceToSquared(p);
      s += v.cur / (1 + d2 * 0.6);
    }
    return s;
  }

  // -------- Kollision (Kreis gegen Raster + runde Hindernisse) --------
  // feet = Fußhöhe. Würfel, Treppen und Dach sind nur Hindernis, solange man nicht
  // (fast) auf ihrer Höhe ist. Auf dem Dach hält eine Brüstung vom Absturz ab.
  solidTop(ch, feet, curH) {
    if (ch === '#' || ch === 'M') return Infinity;
    if (ch === 'C') return CRATE_H;
    if (ch === 'X') return CONTAINER_H;
    if (ch === 'W') return feet > CUBE_H - 0.32 ? -1 : CUBE_H;
    if (ch === 'H') return Infinity;
    if (ch === 'G') return this.gateOpen() ? -1 : Infinity;
    if (ch === 'A' || ch === 'V') return CAR_H;
    if (ch === 'N') return BAKE_H;
    const h = this.cellH(ch);
    if (h > 0) return feet > h - 0.6 ? -1 : h;
    // Brüstung: vom Dach nicht auf tieferen Boden laufen (außer über die Treppe)
    if (curH >= ROOF_H - 0.05 && feet > ROOF_H - 0.6) return Infinity;
    return -1;
  }

  collide(pos, radius, feet = 0) {
    for (let it = 0; it < 2; it++) {
      const c0 = this.cx(pos.x), r0 = this.cz(pos.z);
      const curH = this.hAt(c0, r0);
      for (let r = r0 - 1; r <= r0 + 1; r++) for (let c = c0 - 1; c <= c0 + 1; c++) {
        const ch = (c >= 0 && r >= 0 && c < this.cols && r < this.rows) ? this.map[r][c] : '#';
        const top = this.solidTop(ch, feet, curH);
        if (top < 0) continue;
        const inset = ch === 'C' ? 0.12 : ch === 'W' ? 0.1 : ch === 'N' ? 0.35 : 0;
        const minX = c * CELL + inset, maxX = (c + 1) * CELL - inset, minZ = r * CELL + inset, maxZ = (r + 1) * CELL - inset;
        const qx = Math.max(minX, Math.min(pos.x, maxX));
        const qz = Math.max(minZ, Math.min(pos.z, maxZ));
        const dx = pos.x - qx, dz = pos.z - qz;
        const d2 = dx * dx + dz * dz;
        if (d2 < radius * radius) {
          if (d2 < 1e-8) {
            const ex = [pos.x - minX, maxX - pos.x, pos.z - minZ, maxZ - pos.z];
            const m = Math.min(...ex), i = ex.indexOf(m);
            if (i === 0) pos.x = minX - radius; else if (i === 1) pos.x = maxX + radius;
            else if (i === 2) pos.z = minZ - radius; else pos.z = maxZ + radius;
          } else {
            const d = Math.sqrt(d2), push = radius - d;
            pos.x += (dx / d) * push; pos.z += (dz / d) * push;
          }
        }
      }
      for (const o of this.circles) {
        if (o.top !== undefined && feet > o.top) continue;
        const dx = pos.x - o.x, dz = pos.z - o.z;
        const rr = o.r + radius;
        const d2 = dx * dx + dz * dz;
        if (d2 < rr * rr && d2 > 1e-8) {
          const d = Math.sqrt(d2);
          pos.x = o.x + (dx / d) * rr; pos.z = o.z + (dz / d) * rr;
        }
      }
    }
  }

  // Bodenhöhe unter einer Figur (Würfel, Treppe, Dach)
  groundAt(x, z, radius, feet) {
    let g = 0;
    const c0 = this.cx(x), r0 = this.cz(z), rr = radius * 0.55;
    for (let r = r0 - 1; r <= r0 + 1; r++) for (let c = c0 - 1; c <= c0 + 1; c++) {
      if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) continue;
      const ch = this.map[r][c];
      let h = 0;
      if (ch === 'W') { if (feet < CUBE_H - 0.35) continue; h = CUBE_H; }
      else { h = this.heights[r * this.cols + c]; if (h <= 0 || feet < h - 0.6) continue; }
      const minX = c * CELL + 0.1, maxX = (c + 1) * CELL - 0.1, minZ = r * CELL + 0.1, maxZ = (r + 1) * CELL - 0.1;
      const qx = Math.max(minX, Math.min(x, maxX)), qz = Math.max(minZ, Math.min(z, maxZ));
      if ((x - qx) ** 2 + (z - qz) ** 2 < rr * rr || (c === c0 && r === r0)) g = Math.max(g, h);
    }
    return g;
  }

  // -------- Explosive Fässer --------
  restoreBarrel(b) {
    if (b.alive) return;
    b.alive = true;
    b.hp = 25;
    this.group.add(b.mesh, b.top);
    this.colliders.push(b.mesh);
    this.circles.push(b.circle);
    this.blocked[b.r * this.cols + b.c] = 1;
    if (!this.virtual.includes(b.light)) this.virtual.push(b.light);
    this.flowCell = -1;
  }
  removeBarrel(b) {
    if (!b.alive) return;
    b.alive = false;
    this.group.remove(b.mesh, b.top);
    this.colliders = this.colliders.filter((m) => m !== b.mesh);
    this.circles = this.circles.filter((o) => o !== b.circle);
    this.blocked[b.r * this.cols + b.c] = 0;
    this.virtual = this.virtual.filter((v) => v !== b.light);
    this.flowCell = -1;
  }
  resetBarrels() { for (const b of this.barrels) this.restoreBarrel(b); }

  // Sichtlinie im Raster (DDA). Liefert true, wenn frei.
  los(ax, az, bx, bz, ignoreLow = false, y = null) {
    let x = ax / CELL, z = az / CELL;
    const tx = bx / CELL, tz = bz / CELL;
    let c = Math.floor(x), r = Math.floor(z);
    const ec = Math.floor(tx), er = Math.floor(tz);
    const dx = tx - x, dz = tz - z;
    const sc = Math.sign(dx), sr = Math.sign(dz);
    const tdx = dx !== 0 ? Math.abs(1 / dx) : Infinity, tdz = dz !== 0 ? Math.abs(1 / dz) : Infinity;
    let tmx = dx > 0 ? (c + 1 - x) * tdx : dx < 0 ? (x - c) * tdx : Infinity;
    let tmz = dz > 0 ? (r + 1 - z) * tdz : dz < 0 ? (z - r) * tdz : Infinity;
    for (let i = 0; i < 64; i++) {
      if (c === ec && r === er) return true;
      if (tmx < tmz) { tmx += tdx; c += sc; } else { tmz += tdz; r += sr; }
      if (ignoreLow ? this.isWall(c, r) : this.isBlocked(c, r)) return false;
      if (y !== null && Math.abs(this.hAt(c, r) - y) > 0.6) return false;
    }
    return true;
  }

  // Dijkstra-Flussfeld zum Spieler (binärer Heap)
  updateFlow(px, pz) {
    const c0 = Math.max(0, Math.min(this.cols - 1, this.cx(px))), r0 = Math.max(0, Math.min(this.rows - 1, this.cz(pz)));
    const idx = r0 * this.cols + c0;
    if (idx === this.flowCell) return;
    this.flowCell = idx;
    const dist = this.flow, heap = this.heap, cols = this.cols;
    dist.fill(1e9);
    dist[idx] = 0;
    let n = 0;
    const push = (i) => {
      let k = n++; heap[k] = i;
      while (k > 0) { const p = (k - 1) >> 1; if (dist[heap[p]] <= dist[heap[k]]) break; const t = heap[p]; heap[p] = heap[k]; heap[k] = t; k = p; }
    };
    const pop = () => {
      const top = heap[0]; heap[0] = heap[--n];
      let k = 0;
      for (;;) {
        const l = 2 * k + 1, r = l + 1; let m = k;
        if (l < n && dist[heap[l]] < dist[heap[m]]) m = l;
        if (r < n && dist[heap[r]] < dist[heap[m]]) m = r;
        if (m === k) break;
        const t = heap[m]; heap[m] = heap[k]; heap[k] = t; k = m;
      }
      return top;
    };
    push(idx);
    const nb = NB;
    while (n > 0) {
      const cur = pop();
      const c = cur % cols, r = (cur / cols) | 0;
      const dc0 = dist[cur];
      for (let q = 0; q < 8; q++) {
        const dc = nb[q * 3], dr = nb[q * 3 + 1], w = nb[q * 3 + 2];
        const nc = c + dc, nr = r + dr;
        if (this.isBlocked(nc, nr) || !this.stepOk(c, r, nc, nr)) continue;
        if (dc && dr && (this.isBlocked(c + dc, r) || this.isBlocked(c, r + dr) || !this.stepOk(c, r, c + dc, r) || !this.stepOk(c, r, c, r + dr))) continue;
        const ni = nr * cols + nc;
        const nd = dc0 + w;
        if (nd < dist[ni] - 1e-6) { dist[ni] = nd; if (n < heap.length) push(ni); }
      }
    }
  }

  // Richtung entlang des Flussfelds
  flowDir(x, z, out) {
    const c = this.cx(x), r = this.cz(z);
    let best = this.isBlocked(c, r) ? 1e9 : this.flow[r * this.cols + c];
    let bc = c, br = r;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if (!dc && !dr) continue;
      const nc = c + dc, nr = r + dr;
      if (this.isBlocked(nc, nr) || !this.stepOk(c, r, nc, nr)) continue;
      if (dc && dr && (this.isBlocked(c + dc, r) || this.isBlocked(c, r + dr) || !this.stepOk(c, r, c + dc, r) || !this.stepOk(c, r, c, r + dr))) continue;
      const v = this.flow[nr * this.cols + nc];
      if (v < best) { best = v; bc = nc; br = nr; }
    }
    out.set((bc + 0.5) * CELL - x, 0, (br + 0.5) * CELL - z);
    const l = out.length();
    if (l > 1e-4) out.multiplyScalar(1 / l);
    return best;
  }
}

// ---------- Geometrie-Helfer ----------
const NB = [1, 0, 1, -1, 0, 1, 0, 1, 1, 0, -1, 1, 1, 1, 1.414, 1, -1, 1.414, -1, 1, 1.414, -1, -1, 1.414];

function quad(a, b, y0, y1, n, uvScale, vSize) {
  const geo = new THREE.BufferGeometry();
  const p = [a[0], y0, a[1], b[0], y0, b[1], b[0], y1, b[1], a[0], y1, a[1]];
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  // u entlang Welt-Achse, damit Texturen nahtlos laufen
  const u0 = (Math.abs(n[0]) > 0 ? a[1] * -n[0] : a[0] * n[2]) / uvScale;
  const u1 = u0 + len / uvScale;
  const v0 = y0 / (vSize || uvScale), v1 = y1 / (vSize || uvScale);
  const uv = [u0, v0, u1, v0, u1, v1, u0, v1];
  const nn = [...n, ...n, ...n, ...n];
  geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nn, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex([0, 1, 2, 0, 2, 3]);
  computeTangentsSafe(geo);
  return geo;
}
function computeTangentsSafe() {}

function setWorldUV(geo, plane, scale) {
  const p = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (plane === 'xz') uv.setXY(i, x / scale, z / scale);
    else uv.setXY(i, (x + z) / scale, y / scale);
  }
  uv.needsUpdate = true;
}
function setBoxUV(geo, s) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * s / 1.6, uv.getY(i) * s / 1.6);
}
function setCylUV(geo, r, h) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (2 * Math.PI * r) / 2, uv.getY(i) * h / 2);
}

function mulberry(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeGrateTexture(emissive = false) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 256);
  if (emissive) {
    const rg = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    rg.addColorStop(0, '#ff5020'); rg.addColorStop(0.7, '#801000'); rg.addColorStop(1, '#000');
    g.fillStyle = rg; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#000';
    for (let i = 0; i < 9; i++) g.fillRect(14 + i * 26, 14, 10, 228);
    g.fillRect(0, 0, 256, 14); g.fillRect(0, 242, 256, 14); g.fillRect(0, 0, 14, 256); g.fillRect(242, 0, 14, 256);
  } else {
    g.fillStyle = '#2a2a2a'; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#0b0807';
    for (let i = 0; i < 9; i++) g.fillRect(24 + i * 26, 18, 12, 220);
    g.strokeStyle = '#555'; g.lineWidth = 6; g.strokeRect(6, 6, 244, 244);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------- Stadt-Helfer ----------
function canvasTex(S, draw, repeat = true) {
  const c = document.createElement('canvas'); c.width = c.height = S;
  const x = c.getContext('2d');
  draw(x, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
function noise(x, S, n, a, cols) {
  x.globalAlpha = a;
  for (let i = 0; i < n; i++) { x.fillStyle = cols[i % cols.length]; const s = 1 + Math.random() * 3; x.fillRect(Math.random() * S, Math.random() * S, s, s); }
  x.globalAlpha = 1;
}

// Fassade: 16 m × 15 m pro Texturkachel (8 Fensterachsen × 5 Geschosse), Fenster teils kaputt,
// vernagelt oder noch erleuchtet. Varianten: Putz hell, Beton grau, Klinker, Putz ocker
const FACADE = [
  { base: '#b5ab9c', dirt: '#6e665c', frame: '#e8e2d6' },
  { base: '#85878a', dirt: '#4a4c50', frame: '#b8bcc0' },
  { base: '#8a4a38', dirt: '#4a2a20', frame: '#d8d0c0', brick: true },
  { base: '#b88a52', dirt: '#6a4a2a', frame: '#efe6d2' },
];
function makeFacadeMaterial(k) {
  const v = FACADE[k];
  const W = 512, Hh = 480; // 32 px pro Meter
  const cm = document.createElement('canvas'); cm.width = W; cm.height = Hh;
  const ce = document.createElement('canvas'); ce.width = W; ce.height = Hh;
  const x = cm.getContext('2d'), e = ce.getContext('2d');
  const rnd = mulberry(900 + k * 31);
  x.fillStyle = v.base; x.fillRect(0, 0, W, Hh);
  e.fillStyle = '#000'; e.fillRect(0, 0, W, Hh);
  if (v.brick) {
    for (let y = 0; y < Hh; y += 8) for (let xx = ((y / 8) % 2) * 12; xx < W; xx += 24) {
      x.fillStyle = `rgba(${110 + rnd() * 40},${55 + rnd() * 25},${40 + rnd() * 15},1)`; x.fillRect(xx, y, 22, 6);
    }
  }
  noise(x, W, 14000, 0.06, ['#000', '#fff', v.dirt]);
  // Geschossbänder
  for (let f = 0; f < 5; f++) { x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(0, f * 96, W, 5); }
  // Schmutzfahnen
  for (let i = 0; i < 14; i++) { const gx = rnd() * W, gr = x.createLinearGradient(0, 0, 0, Hh); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(20,16,12,0.25)'); x.fillStyle = gr; x.fillRect(gx, rnd() * Hh * 0.5, 6 + rnd() * 18, Hh); }
  for (let f = 0; f < 5; f++) for (let a = 0; a < 8; a++) {
    const wx = a * 64 + 14, wy = f * 96 + 22, ww = 36, wh = 50;
    x.fillStyle = v.frame; x.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);
    x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(wx - 4, wy + wh + 3, ww + 8, 5); // Fensterbank-Schatten
    const r = rnd();
    if (r < 0.07) {
      // noch Licht an
      x.fillStyle = '#e8b070'; x.fillRect(wx, wy, ww, wh);
      e.fillStyle = '#ffb060'; e.fillRect(wx, wy, ww, wh);
    } else if (r < 0.22) {
      // eingeschlagen
      x.fillStyle = '#050506'; x.fillRect(wx, wy, ww, wh);
      x.fillStyle = 'rgba(120,140,170,0.5)';
      x.beginPath(); x.moveTo(wx, wy); x.lineTo(wx + ww * 0.4, wy); x.lineTo(wx + 6, wy + wh * 0.5); x.closePath(); x.fill();
      x.beginPath(); x.moveTo(wx + ww, wy + wh); x.lineTo(wx + ww * 0.5, wy + wh); x.lineTo(wx + ww, wy + wh * 0.6); x.closePath(); x.fill();
    } else if (r < 0.3) {
      // vernagelt
      x.fillStyle = '#1a1612'; x.fillRect(wx, wy, ww, wh);
      for (let b = 0; b < 3; b++) { x.save(); x.translate(wx + ww / 2, wy + 10 + b * 15); x.rotate((rnd() - 0.5) * 0.4); x.fillStyle = ['#7a5a3a', '#8a6a44', '#6a4a2e'][b]; x.fillRect(-ww / 2 - 4, -5, ww + 8, 10); x.restore(); }
    } else {
      const gr = x.createLinearGradient(0, wy, 0, wy + wh);
      gr.addColorStop(0, '#6a6a88'); gr.addColorStop(0.45, '#2a3040'); gr.addColorStop(1, '#141820');
      x.fillStyle = gr; x.fillRect(wx, wy, ww, wh);
      x.fillStyle = 'rgba(255,190,150,0.18)'; x.fillRect(wx + 3, wy + 3, ww * 0.35, wh * 0.4);
      if (rnd() < 0.4) { x.fillStyle = 'rgba(30,26,22,0.85)'; x.fillRect(wx, wy, ww, wh * (0.2 + rnd() * 0.5)); } // Rollo
    }
    x.fillStyle = v.frame; x.fillRect(wx + ww / 2 - 1.5, wy, 3, wh); x.fillRect(wx, wy + wh * 0.38, ww, 3);
  }
  const map = new THREE.CanvasTexture(cm); map.colorSpace = THREE.SRGBColorSpace; map.wrapS = map.wrapT = THREE.RepeatWrapping; map.anisotropy = 8;
  const em = new THREE.CanvasTexture(ce); em.colorSpace = THREE.SRGBColorSpace; em.wrapS = em.wrapT = THREE.RepeatWrapping;
  return new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.88, metalness: 0.02 });
}

function makeStripeMaterial() {
  const t = canvasTex(128, (x, S) => {
    for (let i = -2; i < 6; i++) { x.fillStyle = i % 2 ? '#e8e4dc' : '#c8201a'; x.beginPath(); x.moveTo(i * 32, 0); x.lineTo(i * 32 + 32, 0); x.lineTo(i * 32 + 64, S); x.lineTo(i * 32 + 32, S); x.closePath(); x.fill(); }
  });
  return new THREE.MeshStandardMaterial({ map: t, roughness: 0.5, emissive: 0x220000 });
}

// Prozedurales Auto (≈ 4,1 m × 1,75 m), Teile werden nach Material einsortiert
function makeCar(mtx, body, parts, burnt, rnd) {
  const push = (arr, geo) => { geo.applyMatrix4(mtx); arr.push(geo); };
  const box = (w, h, d, x, y, z) => { const b = new THREE.BoxGeometry(w, h, d); b.translate(x, y, z); return b; };
  const sag = burnt ? -0.12 : 0;
  push(body, box(4.1, 0.6, 1.76, 0, 0.6 + sag, 0));
  push(body, box(1.2, 0.18, 1.7, 1.35, 0.97 + sag, 0)); // Motorhaube etwas höher
  push(body, box(2.1, 0.62, 1.6, -0.25, 1.18 + sag, 0)); // Fahrgastzelle
  if (!burnt) push(parts.glass, box(2.16, 0.36, 1.64, -0.25, 1.17, 0));
  else push(parts.black, box(2.14, 0.34, 1.62, -0.25, 1.05, 0));
  for (const sx of [-1.3, 1.3]) for (const sz of [-0.82, 0.82]) {
    const w = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 14); w.rotateX(Math.PI / 2); w.translate(sx, burnt ? 0.22 : 0.34, sz);
    push(parts.black, w);
    if (!burnt) { const h = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 10); h.rotateX(Math.PI / 2); h.translate(sx, 0.34, sz); push(parts.chrome, h); }
  }
  push(parts.black, box(0.14, 0.22, 1.74, 2.08, 0.42 + sag, 0));
  push(parts.black, box(0.14, 0.22, 1.74, -2.08, 0.42 + sag, 0));
  if (!burnt) {
    for (const z of [-0.6, 0.6]) { push(parts.head, box(0.05, 0.13, 0.34, 2.06, 0.72, z)); push(parts.tail, box(0.05, 0.13, 0.3, -2.06, 0.72, z)); }
    if (rnd() < 0.35) push(body, box(0.9, 0.55, 0.06, 0.25, 0.9, 0.95 + (rnd() < 0.5 ? 0 : -1.9))); // offene Tür
  }
}
