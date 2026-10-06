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
// Container (X), Lampenmasten (Y), Tore (S). Erzeugt mit tools/hofmap.py
const HOF = [
  '################################################',
  '################################################',
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
  '##.................TTTTTTTTET.................##',
  '##.................TTTTTTTTTT.................##',
  '##.................##########.................##',
  '##.................##########.................##',
  '##.................##########.................##',
  '################################################',
  '################################################',
];

export const ROOF_H = 4.0;
export const MAPS = {
  halle: { key: 'halle', name: 'Die Halle', map: HALLE, outdoor: false, wallH: 4.4, fog: 0.032, fogColor: 0x070709, startYaw: Math.PI, ambient: 0 },
  hof: { key: 'hof', name: 'Der Hof', map: HOF, outdoor: true, wallH: 7.5, fog: 0.0095, fogColor: 0x0b1018, startYaw: 0, ambient: 0.55 },
};

export const CELL = 2;
export const WALL_H = 4.4;

const WALLS = new Set(['#', 'M']);
const BLOCK = new Set(['#', 'M', 'C', 'B', 'O', 'W', 'X', 'Y']);
const CONTAINER_H = 2.8;
export const CUBE_H = 0.9;
const CRATE_H = 1.7;

export class Level {
  constructor(textures, def = MAPS.halle) {
    this.tex = textures;
    this.def = def;
    this.map = def.map;
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
    if (ch === 'T' || (this.outdoor && (ch === '@' || ch === 'E'))) return ROOF_H;
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
    return WALLS.has(this.map[r][c]);
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
        if (this.isWall(c + dc, r + dr)) continue;
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
    const trim = new THREE.Mesh(mergeGeometries(trimGeo), mats.hazard);
    trim.receiveShadow = true;
    g.add(trim);

    // ---------- Boden / Decke ----------
    const floorG = new THREE.PlaneGeometry(this.w, this.h);
    floorG.rotateX(-Math.PI / 2);
    floorG.translate(this.w / 2, 0, this.h / 2);
    setWorldUV(floorG, 'xz', 3.2);
    const floor = new THREE.Mesh(floorG, mats.concrete);
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
      if (ch === 'C') {
        const s = CRATE_H;
        const bg = new THREE.BoxGeometry(s, s, s);
        setBoxUV(bg, s);
        bg.rotateY((rnd() - 0.5) * 0.12);
        bg.translate(x, s / 2, z);
        crateGeos.push(bg);
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
        this.addLight(x, H - 0.5, z, 0xffd9a8, ch === 'K' ? 40 : 22, 16, ch === 'K', rnd() < 0.25);
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
        this.addLight(x, 6.6, z, 0xcfe0ff, 110, 30, false, rnd() < 0.2);
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

    if (this.outdoor) this.buildOutdoor(g, mats, add);
    this.buildExit(g);

    this.initLightPool(10);
    // Grundlicht
    const hemi = this.outdoor ? new THREE.HemisphereLight(0x7088b8, 0x2a241c, 1.5) : new THREE.HemisphereLight(0x8a96b0, 0x2a1d18, 0.55);
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

    // Himmel: Verlauf + Sterne + Mond
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(190, 32, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, fog: false,
        uniforms: {},
        vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: `varying vec3 vP;
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
    sky.position.set(this.w / 2, 0, this.h / 2);
    sky.renderOrder = -10;
    g.add(sky);
    const moon = new THREE.Mesh(new THREE.CircleGeometry(7, 32), new THREE.MeshBasicMaterial({ color: 0xf2efe0, fog: false }));
    const md = new THREE.Vector3(-0.45, 0.55, -0.7).normalize();
    moon.position.copy(md).multiplyScalar(180).add(new THREE.Vector3(this.w / 2, 0, this.h / 2));
    moon.lookAt(this.w / 2, 0, this.h / 2);
    g.add(moon);
    const ml = new THREE.DirectionalLight(0xa9bce0, 3.2);
    ml.position.copy(md).multiplyScalar(80).add(new THREE.Vector3(this.w / 2, 0, this.h / 2));
    ml.target.position.set(this.w / 2, 0, this.h / 2);
    g.add(ml.target);
    ml.castShadow = true;
    ml.shadow.mapSize.set(globalThis.ZW_LOW ? 1024 : 2048, globalThis.ZW_LOW ? 1024 : 2048);
    const sc = ml.shadow.camera;
    sc.left = -62; sc.right = 62; sc.top = 62; sc.bottom = -62; sc.near = 10; sc.far = 180;
    ml.shadow.bias = -0.0006;
    ml.shadow.normalBias = 0.04;
    g.add(ml);
    this.moon = ml;
  }

  // Ausgang: leuchtender Ring + Lichtsäule (erst sichtbar, wenn er offen ist)
  buildExit(g) {
    if (!this.exitPos) return;
    const e = new THREE.Group();
    e.position.copy(this.exitPos);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x35e0ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 40), ringMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03;
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x35e0ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 6, 32, 1, true), beamMat);
    beam.position.y = 3;
    // Schild „AUSGANG“
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const x2 = c.getContext('2d');
    x2.fillStyle = '#35e0ff'; x2.font = '900 44px Impact, Arial, sans-serif'; x2.textAlign = 'center'; x2.textBaseline = 'middle';
    x2.fillText(this.outdoor ? 'ZUR HALLE' : 'AUSGANG', 128, 34);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
    sign.scale.set(2.4, 0.6, 1); sign.position.y = 2.6;
    e.add(ring, beam, sign);
    e.visible = false;
    g.add(e);
    this.exit = { group: e, ring, beam, sign, active: false };
  }

  setExit(on) {
    if (!this.exit) return;
    this.exit.active = on;
    this.exit.group.visible = on;
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
        const inset = ch === 'C' ? 0.12 : ch === 'W' ? 0.1 : 0;
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
