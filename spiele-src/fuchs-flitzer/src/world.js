import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_HALF, WALL } from './track.js';
import { toon, mesh, canvasTex, rng, makeNoise, outline } from './toon.js';
import { head as animalHead, RACERS } from './models.js';
import LOGO_SVG from './logo.svg';

export const LAKE = { x: 120, z: -120, rx: 72, rz: 58 };

export function loadLogo() {
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => res(null);
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(LOGO_SVG);
  });
}

function lakeDepth(x, z) {
  const dx = (x - LAKE.x) / LAKE.rx, dz = (z - LAKE.z) / LAKE.rz;
  return dx * dx + dz * dz; // <1 = im See
}

export class World {
  constructor(scene, track, logo) {
    this.scene = scene;
    this.track = track;
    this.logo = logo;
    this.noise = makeNoise(7);
    this.anim = [];       // Objekte mit update(t)
    this.colliders = [];  // runde Hindernisse neben der Strecke {x,z,r}
  }

  // Index eines Kontrollpunkts auf der Strecke
  at(x, z) { return this.track.nearestGlobal(x, z, 6).i; }

  build() {
    this.sky();
    this.terrain();
    this.road();
    this.water();
    this.fences();
    this.trees();
    this.mountains();
    this.clouds();
    this.startArch();
    this.grandstand();
    this.billboards();
    this.tunnel();
    this.village();
    this.lighthouse();
    this.features();
    this.decor();
    this.monument();
    this.hillLetters();
    this.balloons();
    this.tires();
  }

  // ---------------- Himmel ----------------
  sky() {
    const g = new THREE.SphereGeometry(1400, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x2f86e6) }, mid: { value: new THREE.Color(0x8cc8ff) }, bot: { value: new THREE.Color(0xe4f3ff) }, sunDir: { value: new THREE.Vector3(0.4, 0.55, -0.7).normalize() } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `uniform vec3 top, mid, bot, sunDir; varying vec3 vP;
        void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(mid, bot, clamp(-h*6.0,0.0,1.0));
          c = mix(c, bot, smoothstep(0.12, 0.0, abs(h))*0.6);
          float s = max(dot(vP, sunDir), 0.0);
          c += vec3(1.0,0.92,0.7) * (pow(s, 600.0)*3.0 + pow(s, 12.0)*0.18);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    const sky = new THREE.Mesh(g, m);
    sky.renderOrder = -1;
    this.skyMesh = sky;
    this.scene.add(sky);
  }

  // ---------------- Gelände ----------------
  height(x, z) {
    const T = this.track;
    const n = this.noise;
    // natürliche Hügel
    let nat = n(x * 0.005, z * 0.005, 4) * 22 + n(x * 0.018 + 40, z * 0.018, 3) * 4 + 6;
    const r = Math.hypot(x - 30, z + 80);
    nat += Math.max(0, r - 380) * 0.18; // Rand steigt an
    nat = Math.max(nat, 0.4);
    const L = lakeDepth(x, z);
    if (L < 1.6) nat = THREE.MathUtils.lerp(-3.2, nat, THREE.MathUtils.smoothstep(L, 0.55, 1.6));
    const near = T.nearestGlobal(x, z, 6);
    if (near.i < 0) return nat;
    const ty = T.y[near.i] - 0.06;
    const t = THREE.MathUtils.smoothstep(near.d, WALL + 2, WALL + 42);
    return THREE.MathUtils.lerp(ty, nat, t);
  }

  terrain() {
    const S = 1300, SEG = 230;
    const g = new THREE.PlaneGeometry(S, S, SEG, SEG);
    g.rotateX(-Math.PI / 2);
    g.translate(30, 0, -80);
    const pos = g.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    const r = rng(3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const h = this.height(x, z);
      pos.setY(i, h);
      const L = lakeDepth(x, z);
      const near = this.track.nearestGlobal(x, z, 2);
      // Farben: Gras mit Mähstreifen, Sand am See, Fels/Schnee am Rand
      const pn = this.noise(x * 0.012 + 9, z * 0.012 - 3, 3);
      c.setHSL(0.25 + pn * 0.05 + r() * 0.008, 0.55 + pn * 0.1, 0.42 + pn * 0.07 + r() * 0.015);
      if (near.i >= 0 && near.d < WALL + 1) { const stripe = Math.floor((this.track.lateral(near.i, x, z)) / 3) & 1; c.setHSL(0.27, 0.55, 0.47 + stripe * 0.04); }
      if (L < 1.25) c.lerp(new THREE.Color(0xe6d39a), THREE.MathUtils.smoothstep(1.25 - L, 0, 0.35));
      if (h > 26) c.lerp(new THREE.Color(0x8d8a82), THREE.MathUtils.smoothstep(h, 26, 40));
      if (h > 52) c.lerp(new THREE.Color(0xf4f6fa), THREE.MathUtils.smoothstep(h, 52, 62));
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    const grass = canvasTex(512, 512, (cx, w, h) => {
      cx.fillStyle = '#ffffff'; cx.fillRect(0, 0, w, h);
      const rr = rng(31);
      for (let k = 0; k < 7000; k++) {
        const v = rr();
        cx.fillStyle = v < 0.5 ? `rgba(40,70,10,${0.05 + rr() * 0.1})` : `rgba(255,255,200,${0.05 + rr() * 0.1})`;
        const bx = rr() * w, by = rr() * h;
        cx.fillRect(bx, by, 1.5, 3 + rr() * 5);
      }
    });
    grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
    grass.repeat.set(S / 9, S / 9);
    const m = new THREE.Mesh(g, toon(0xffffff, { vertexColors: true, map: grass, noCache: true }));
    m.receiveShadow = true;
    this.terrainMesh = m;
    this.scene.add(m);
  }

  // ---------------- Fahrbahn ----------------
  road() {
    const T = this.track, N = T.N;
    const asphalt = canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#5b616b'; g.fillRect(0, 0, w, h);
      const r = rng(11);
      for (let i = 0; i < 9000; i++) {
        const v = 70 + r() * 60 | 0;
        g.fillStyle = `rgba(${v},${v + 3},${v + 8},${0.25 + r() * 0.3})`;
        g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2);
      }
      // weiße Randlinien
      g.fillStyle = '#f4f4f4';
      g.fillRect(14, 0, 12, h); g.fillRect(w - 26, 0, 12, h);
    });
    asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping;
    const curbTex = canvasTex(64, 128, (g, w, h) => {
      g.fillStyle = '#e8402a'; g.fillRect(0, 0, w, h / 2);
      g.fillStyle = '#f7f7f7'; g.fillRect(0, h / 2, w, h / 2);
    });
    curbTex.wrapS = curbTex.wrapT = THREE.RepeatWrapping;

    const ribbon = (inner, outer, yOff, vScale, tex, mat) => {
      const pos = [], uv = [], idx = [];
      for (let i = 0; i <= N; i++) {
        const k = i % N;
        const [rx, rz] = T.right(k);
        const y = T.y[k] + yOff;
        pos.push(T.x[k] + rx * inner, y, T.z[k] + rz * inner, T.x[k] + rx * outer, y, T.z[k] + rz * outer);
        const v = (i * 0.5) / vScale;
        uv.push(0, v, 1, v);
        if (i < N) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true;
      this.scene.add(m);
      return m;
    };
    // Normalen zeigen nach oben? Reihenfolge prüfen: wir erzwingen DoubleSide nicht, sondern drehen falls nötig
    const roadMat = toon(0xffffff, { map: asphalt, noCache: true });
    this.roadMesh = ribbon(-ROAD_HALF, ROAD_HALF, 0.02, 14, asphalt, roadMat);
    const curbMat = toon(0xffffff, { map: curbTex, noCache: true });
    ribbon(ROAD_HALF, ROAD_HALF + 1.3, 0.05, 4, curbTex, curbMat);
    ribbon(-ROAD_HALF - 1.3, -ROAD_HALF, 0.05, 4, curbTex, curbMat);
    // Normalen nach oben ausrichten
    this.scene.traverse((o) => {
      if (o.isMesh && (o.material === roadMat || o.material === curbMat)) {
        const n = o.geometry.attributes.normal;
        if (n.getY(0) < 0) { o.geometry.index.array.reverse(); o.geometry.computeVertexNormals(); }
      }
    });

    // Start-/Ziellinie (Schachbrett)
    const checker = canvasTex(256, 64, (g, w, h) => {
      const s = 16;
      for (let x = 0; x < w / s; x++) for (let y = 0; y < h / s; y++) { g.fillStyle = (x + y) % 2 ? '#111' : '#fafafa'; g.fillRect(x * s, y * s, s, s); }
    });
    const sl = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_HALF * 2, 2.2), toon(0xffffff, { map: checker, noCache: true }));
    sl.rotation.x = -Math.PI / 2;
    sl.rotation.z = -T.heading(0) + Math.PI / 2;
    sl.position.set(T.x[0], T.y[0] + 0.04, T.z[0]);
    sl.receiveShadow = true;
    this.scene.add(sl);
  }

  // ---------------- Wasser ----------------
  water() {
    const g = new THREE.CircleGeometry(1, 64);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: { t: { value: 0 }, c1: { value: new THREE.Color(0x2aa6e0) }, c2: { value: new THREE.Color(0x7fd8f5) } },
      vertexShader: 'varying vec2 vU; varying vec3 vW; void main(){ vU = position.xz; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
      fragmentShader: `uniform float t; uniform vec3 c1, c2; varying vec2 vU; varying vec3 vW;
        void main(){ float r = length(vU);
          float w = sin(vW.x*0.35 + t*1.3)*0.5 + sin(vW.z*0.27 - t*1.1 + vW.x*0.1)*0.5;
          vec3 c = mix(c1, c2, smoothstep(0.55, 1.0, r) * 0.6 + step(0.82, w)*0.35);
          float foam = smoothstep(0.93, 0.985, r + sin(atan(vU.y,vU.x)*12.0 + t*2.0)*0.012);
          c = mix(c, vec3(1.0), foam);
          gl_FragColor = vec4(c, 0.92); }`,
    });
    const w = new THREE.Mesh(g, m);
    w.scale.set(LAKE.rx * 1.08, 1, LAKE.rz * 1.08);
    w.position.set(LAKE.x, -0.6, LAKE.z);
    this.scene.add(w);
    this.anim.push((t) => { m.uniforms.t.value = t; });
  }

  // ---------------- Zaun/Bande ----------------
  fences() {
    const T = this.track;
    const posts = [], rails = [];
    const tun = this.tunnelRange();
    for (const side of [-1, 1]) {
      const rail = [];
      for (let i = 0; i < T.N; i += 8) {
        if (tun && i > tun[0] - 10 && i < tun[1] + 10) { if (rail.length > 1) rails.push(rail.splice(0)); else rail.length = 0; continue; }
        const [rx, rz] = T.right(i);
        const x = T.x[i] + rx * WALL * side, z = T.z[i] + rz * WALL * side;
        const y = T.y[i];
        const L = lakeDepth(x, z);
        if (L < 1.05) { if (rail.length > 1) rails.push(rail.splice(0)); else rail.length = 0; continue; }
        posts.push([x, y, z]);
        rail.push([x, y, z]);
      }
      if (rail.length > 1) rails.push(rail);
    }
    const pg = new THREE.BoxGeometry(0.22, 1.3, 0.22);
    pg.translate(0, 0.65, 0);
    const im = new THREE.InstancedMesh(pg, toon(0x8a5a32), posts.length);
    const m4 = new THREE.Matrix4();
    posts.forEach((p, k) => { m4.makeTranslation(p[0], p[1] - 0.06, p[2]); im.setMatrixAt(k, m4); });
    im.castShadow = true;
    this.scene.add(im);
    // Bretter
    const geos = [];
    for (const rail of rails) {
      for (let k = 0; k < rail.length - 1; k++) {
        const a = rail[k], b = rail[k + 1];
        const len = Math.hypot(b[0] - a[0], b[2] - a[2]);
        for (const h of [0.55, 1.05]) {
          const bg = new THREE.BoxGeometry(0.08, 0.22, len);
          bg.rotateY(Math.atan2(b[0] - a[0], b[2] - a[2]));
          bg.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + h, (a[2] + b[2]) / 2);
          geos.push(bg);
        }
      }
    }
    const rm = new THREE.Mesh(mergeGeometries(geos), toon(0xf2e6cf));
    rm.castShadow = true;
    this.scene.add(rm);
  }

  // ---------------- Bäume ----------------
  trees() {
    const T = this.track;
    const r = rng(21);
    const spots = [];
    let tries = 0;
    while (spots.length < 900 && tries < 20000) {
      tries++;
      const x = 30 + (r() - 0.5) * 900, z = -80 + (r() - 0.5) * 900;
      const near = T.nearestGlobal(x, z, 3);
      if (near.i >= 0 && near.d < WALL + 5) continue;
      if (lakeDepth(x, z) < 1.25) continue;
      if (x < -200 && x > -270 && z > -30 && z < 110) continue; // Dorf
      if (x > -60 && x < 120 && z > 8 && z < 60) continue; // Tribüne
      const h = this.height(x, z);
      if (h > 40) continue;
      spots.push([x, h, z, 0.7 + r() * 0.8, r()]);
    }
    // Typ A: runder Laubbaum, Typ B: Tanne
    const trunk = new THREE.CylinderGeometry(0.25, 0.38, 2.4, 7); trunk.translate(0, 1.2, 0);
    const crown = new THREE.IcosahedronGeometry(2.2, 1); crown.translate(0, 4.0, 0);
    const crown2 = new THREE.IcosahedronGeometry(1.5, 1); crown2.translate(0.9, 5.2, 0.3);
    const crownA = mergeGeometries([crown, crown2]);
    const f1 = new THREE.ConeGeometry(2.3, 3.6, 8); f1.translate(0, 3.4, 0);
    const f2 = new THREE.ConeGeometry(1.8, 3.0, 8); f2.translate(0, 5.2, 0);
    const f3 = new THREE.ConeGeometry(1.2, 2.4, 8); f3.translate(0, 6.8, 0);
    const crownB = mergeGeometries([f1, f2, f3]);
    const A = spots.filter((s) => s[4] < 0.55), B = spots.filter((s) => s[4] >= 0.55);
    const mk = (geo, mat, list, castOutline) => {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
      list.forEach((t, k) => {
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t[4] * 20);
        s.setScalar(t[3]);
        m4.compose(p.set(t[0], t[1] - 0.2, t[2]), q, s);
        im.setMatrixAt(k, m4);
      });
      im.castShadow = true;
      im.receiveShadow = false;
      this.scene.add(im);
      if (castOutline) {
        const o = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: 0x1d3014, side: THREE.BackSide }), list.length);
        list.forEach((t, k) => {
          q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t[4] * 20);
          s.setScalar(t[3] * 1.05);
          m4.compose(p.set(t[0], t[1] - 0.25, t[2]), q, s);
          o.setMatrixAt(k, m4);
        });
        this.scene.add(o);
      }
      return im;
    };
    mk(trunk, toon(0x7a4b2a), spots, false);
    mk(crownA, toon(0x4caf3c), A, true);
    mk(crownB, toon(0x2f8a45), B, true);
    // Kollision für Bäume nahe der Bande (nicht nötig, Bande hält auf)
  }

  // ---------------- Berge ----------------
  mountains() {
    const r = rng(5);
    const geos = [];
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + r() * 0.2;
      const R = 700 + r() * 160;
      const h = 120 + r() * 160;
      const g = new THREE.ConeGeometry(110 + r() * 90, h, 7, 1);
      g.translate(30 + Math.cos(a) * R, h / 2 - 10, -80 + Math.sin(a) * R);
      geos.push(g);
    }
    const m = new THREE.Mesh(mergeGeometries(geos), toon(0x7d8fa8, { fog: true }));
    this.scene.add(m);
    // Schneekappen
    const caps = [];
    const r2 = rng(5);
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + r2() * 0.2;
      const R = 700 + r2() * 160;
      const h = 120 + r2() * 160;
      const rad = 110 + r2() * 90;
      const ch = h * 0.3;
      const g = new THREE.ConeGeometry(rad * 0.3 + 1, ch, 7, 1);
      g.translate(30 + Math.cos(a) * R, h - 10 - ch / 2 + 0.5, -80 + Math.sin(a) * R);
      caps.push(g);
    }
    this.scene.add(new THREE.Mesh(mergeGeometries(caps), toon(0xf5f8ff)));
  }

  // ---------------- Wolken ----------------
  clouds() {
    const r = rng(9);
    const group = new THREE.Group();
    const mat = toon(0xffffff, { emissive: 0x8899aa, emissiveIntensity: 0.35 });
    for (let i = 0; i < 22; i++) {
      const c = new THREE.Group();
      for (let k = 0; k < 5; k++) {
        const s = new THREE.Mesh(new THREE.IcosahedronGeometry(10 + r() * 9, 1), mat);
        s.position.set((k - 2) * 12 + r() * 4, r() * 6, r() * 10);
        s.scale.y = 0.65;
        c.add(s);
      }
      const a = r() * Math.PI * 2, R = 250 + r() * 450;
      c.position.set(30 + Math.cos(a) * R, 110 + r() * 70, -80 + Math.sin(a) * R);
      c.userData.v = 1 + r() * 2;
      group.add(c);
    }
    this.scene.add(group);
    this.anim.push((t, dt) => { group.children.forEach((c) => { c.position.x += c.userData.v * dt; if (c.position.x > 800) c.position.x = -700; }); });
  }

  // ---------------- Startbogen mit Logo ----------------
  logoTexture(w = 1024, h = 300, bg = '#1a1410') {
    return canvasTex(w, h, (g) => {
      g.fillStyle = bg; g.fillRect(0, 0, w, h);
      if (this.logo) {
        const lw = w * 0.82, lh = lw * (2524.8 / 9741.63);
        g.drawImage(this.logo, (w - lw) / 2, (h - lh) / 2, lw, lh);
      } else {
        g.fillStyle = '#fff'; g.font = `bold ${h * 0.6}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText('2FOX4', w / 2, h / 2);
      }
    });
  }

  startArch() {
    const T = this.track;
    const i = 0;
    const grp = new THREE.Group();
    const [rx, rz] = T.right(i);
    const W = WALL - 1.5;
    const pillarG = new THREE.BoxGeometry(1.4, 9, 1.4); pillarG.translate(0, 4.5, 0);
    const pm = toon(0x2b2b33);
    for (const s of [-1, 1]) {
      const p = mesh(pillarG, pm, { thick: 0.06 });
      p.position.set(rx * W * s, 0, rz * W * s);
      grp.add(p);
      // Flaggen
      const flag = mesh(new THREE.PlaneGeometry(2.2, 1.4), toon(0xff6b35, { side: THREE.DoubleSide }), { out: false });
      flag.position.set(rx * W * s, 10.2, rz * W * s);
      const pole = mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.6), toon(0xdddddd), { out: false });
      pole.position.set(rx * W * s - 1.1 * Math.sin(T.heading(i)), 9.6, rz * W * s - 1.1 * Math.cos(T.heading(i)));
      grp.add(pole);
      flag.rotation.y = T.heading(i) + Math.PI / 2;
      grp.add(flag);
      this.anim.push((t) => { flag.rotation.x = Math.sin(t * 6 + s) * 0.15; });
    }
    // Querbalken mit Logo
    const beamG = new THREE.BoxGeometry(W * 2 + 1.4, 2.6, 1.0);
    const tex = this.logoTexture(1400, 220);
    const mats = [pm, pm, pm, pm, toon(0xffffff, { map: tex, noCache: true }), toon(0xffffff, { map: tex, noCache: true })];
    const beam = new THREE.Mesh(beamG, mats);
    beam.castShadow = true;
    outline(beam, 0.08);
    beam.position.set(0, 8.2, 0);
    beam.rotation.y = T.heading(i) + Math.PI / 2;
    grp.add(beam);
    // Schachbrett-Streifen unter dem Logo
    const chk = canvasTex(512, 32, (g, w, h) => { const s = 16; for (let x = 0; x < w / s; x++) for (let y = 0; y < 2; y++) { g.fillStyle = (x + y) % 2 ? '#111' : '#fff'; g.fillRect(x * s, y * s, s, s); } });
    const strip = new THREE.Mesh(new THREE.BoxGeometry(W * 2 + 1.4, 0.5, 1.05), toon(0xffffff, { map: chk, noCache: true }));
    strip.position.set(0, 6.65, 0);
    strip.rotation.y = beam.rotation.y;
    grp.add(strip);
    grp.position.set(T.x[i], T.y[i], T.z[i]);
    this.scene.add(grp);
  }

  grandstand() {
    const T = this.track;
    const i0 = 40;
    const grp = new THREE.Group();
    const [rx, rz] = T.right(i0);
    const h = T.heading(i0);
    const len = 46;
    for (let row = 0; row < 5; row++) {
      const step = mesh(new THREE.BoxGeometry(len, 0.6, 1.6), toon(row % 2 ? 0xdedede : 0xc9c9c9), { thick: 0.04 });
      step.position.set(0, 0.3 + row * 0.7, row * 1.5);
      step.receiveShadow = true;
      grp.add(step);
    }
    // Dach
    const roof = mesh(new THREE.BoxGeometry(len + 2, 0.3, 9), toon(0xff6b35), { thick: 0.05 });
    roof.position.set(0, 7.5, 3.2);
    roof.rotation.x = -0.12;
    grp.add(roof);
    for (const x of [-len / 2, -len / 6, len / 6, len / 2]) {
      const p = mesh(new THREE.BoxGeometry(0.4, 7.4, 0.4), toon(0x333333), { thick: 0.03 });
      p.position.set(x, 3.7, 7.4);
      grp.add(p);
    }
    // Zuschauer (bunte Kugelköpfe, wippen)
    const r = rng(4);
    const fanGeo = new THREE.CapsuleGeometry(0.28, 0.5, 4, 8);
    const cols = [0xff6b35, 0x3d7cff, 0xffd23a, 0x5bc85b, 0xe84a8a, 0xffffff, 0x8f5cff];
    const fans = [];
    for (let row = 0; row < 5; row++) for (let k = 0; k < 26; k++) {
      if (r() < 0.25) continue;
      const f = new THREE.Mesh(fanGeo, toon(cols[(r() * cols.length) | 0]));
      f.position.set(-len / 2 + 1 + k * (len - 2) / 25 + (r() - 0.5) * 0.4, 1.2 + row * 0.7, row * 1.5);
      f.userData.p = r() * 6;
      grp.add(f);
      fans.push(f);
    }
    this.anim.push((t) => { for (const f of fans) f.position.y = Math.floor(f.position.y / 0.7) * 0.7 + 0.5 + Math.abs(Math.sin(t * 5 + f.userData.p)) * 0.18 + 0.2; });
    grp.position.set(T.x[i0] + rx * (WALL + 5), T.y[i0], T.z[i0] + rz * (WALL + 5));
    grp.rotation.y = h + Math.PI / 2 + Math.PI;
    // Ausrichtung: Tribüne schaut zur Strecke
    grp.rotation.y = Math.atan2(-rx, -rz) + Math.PI;
    this.scene.add(grp);
  }

  billboards() {
    const T = this.track;
    const texts = [
      ['2FOX4', 'Webdesign mit Biss'],
      ['2FOX4', 'SEO, das Gas gibt'],
      ['KI-CHECK', 'Wirst du gefunden?'],
      ['2FOX4', 'Turbo für deine Website'],
      ['404', 'Seite verloren – Spaß gefunden'],
      ['2FOX4', 'Digital. Regional. Schnell.'],
    ];
    const spots = [0.12, 0.27, 0.41, 0.55, 0.7, 0.86];
    spots.forEach((f, k) => {
      const i = Math.floor(f * T.N);
      const side = k % 2 ? 1 : -1;
      const [rx, rz] = T.right(i);
      const tex = canvasTex(1024, 384, (g, w, h) => {
        const grd = g.createLinearGradient(0, 0, w, h);
        grd.addColorStop(0, '#1d1410'); grd.addColorStop(1, '#3a1d10');
        g.fillStyle = grd; g.fillRect(0, 0, w, h);
        g.fillStyle = '#ff6b35'; g.fillRect(0, h - 26, w, 26);
        if (texts[k][0] === '2FOX4' && this.logo) {
          const lw = w * 0.66, lh = lw * (2524.8 / 9741.63);
          g.drawImage(this.logo, (w - lw) / 2, 50, lw, lh);
        } else {
          g.fillStyle = '#ffffff'; g.font = '900 150px Impact, Arial Black, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'top';
          g.fillText(texts[k][0], w / 2, 40);
        }
        g.fillStyle = '#ffd9bf'; g.font = '700 58px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
        g.fillText(texts[k][1], w / 2, h - 60);
      });
      const grp = new THREE.Group();
      const board = mesh(new THREE.BoxGeometry(12, 4.5, 0.4), [toon(0x222222), toon(0x222222), toon(0x222222), toon(0x222222), toon(0xffffff, { map: tex, noCache: true }), toon(0x222222)], { thick: 0.05 });
      board.position.y = 5;
      grp.add(board);
      for (const x of [-4.5, 4.5]) {
        const p = mesh(new THREE.BoxGeometry(0.35, 5, 0.35), toon(0x444444), { thick: 0.03 });
        p.position.set(x, 1.6, 0);
        grp.add(p);
      }
      grp.position.set(T.x[i] + rx * (WALL + 3) * side, T.y[i], T.z[i] + rz * (WALL + 3) * side);
      // Front zur Strecke und leicht entgegen der Fahrtrichtung
      const toTrack = Math.atan2(-rx * side, -rz * side);
      grp.rotation.y = toTrack - side * 0.45;
      this.scene.add(grp);
    });
  }

  tunnelRange() {
    if (this._tun) return this._tun;
    const T = this.track;
    const a = this.at(-112, -258), b = this.at(-148, -205);
    this._tun = a < b ? [a, b] : [b, a];
    return this._tun;
  }

  tunnel() {
    const T = this.track;
    const [a, b] = this.tunnelRange();
    const HW = WALL + 0.5, H = 8;
    const seg = 14;
    const pos = [], idx = [], col = [];
    const rows = [];
    for (let i = a; i <= b; i += 2) rows.push(i);
    rows.forEach((i, ri) => {
      const [rx, rz] = T.right(i);
      for (let k = 0; k <= seg; k++) {
        const ang = Math.PI * (k / seg);
        const lx = Math.cos(ang) * HW, ly = Math.sin(ang) * H;
        pos.push(T.x[i] + rx * lx, T.y[i] + ly, T.z[i] + rz * lx);
        const stripe = (Math.floor(ri / 6) % 2) ? 0.92 : 1;
        col.push(0.62 * stripe, 0.48 * stripe, 0.4 * stripe);
      }
      if (ri < rows.length - 1) {
        const o = ri * (seg + 1);
        for (let k = 0; k < seg; k++) idx.push(o + k, o + k + 1, o + k + seg + 1, o + k + 1, o + k + seg + 2, o + k + seg + 1);
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const shell = new THREE.Mesh(g, toon(0xffffff, { vertexColors: true, side: THREE.DoubleSide }));
    shell.castShadow = true;
    shell.receiveShadow = true;
    this.scene.add(shell);
    // Außenhügel über dem Tunnel (Erdwulst)
    const hill = new THREE.Mesh(g.clone().scale(1, 1, 1), toon(0x55a842, { side: THREE.BackSide }));
    hill.geometry = g.clone();
    const p2 = hill.geometry.attributes.position;
    const center = new THREE.Vector3();
    for (let k = 0; k < p2.count; k++) center.add(new THREE.Vector3(p2.getX(k), 0, p2.getZ(k)));
    // Lampen an der Decke
    const lampG = new THREE.BoxGeometry(0.5, 0.2, 2.2);
    const lamps = [];
    for (let i = a + 8; i < b - 4; i += 18) {
      const lg = lampG.clone();
      lg.rotateY(T.heading(i));
      lg.translate(T.x[i], T.y[i] + H - 0.35, T.z[i]);
      lamps.push(lg);
    }
    this.scene.add(new THREE.Mesh(mergeGeometries(lamps), new THREE.MeshBasicMaterial({ color: 0xffd9a0 })));
    // Portale mit Logo
    for (const i of [a, b]) {
      const grp = new THREE.Group();
      const tex = this.logoTexture(1024, 200, '#2a1a12');
      const sign = new THREE.Mesh(new THREE.BoxGeometry(HW * 1.3, 2.4, 0.6), [toon(0x3a2a20), toon(0x3a2a20), toon(0x3a2a20), toon(0x3a2a20), toon(0xffffff, { map: tex, noCache: true }), toon(0xffffff, { map: tex, noCache: true })]);
      outline(sign, 0.08);
      sign.position.y = H + 1.4;
      grp.add(sign);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(HW + 0.6, 0.8, 8, 24, Math.PI), toon(0x7d6a5c));
      ring.scale.y = H / HW;
      grp.add(ring);
      grp.position.set(T.x[i], T.y[i], T.z[i]);
      grp.rotation.y = T.heading(i);
      this.scene.add(grp);
      void center;
    }
    this.tunnelLightRange = [a, b];
  }

  village() {
    const r = rng(77);
    const roofCols = [0xc8462e, 0x9b3d2b, 0x3f6db3, 0x6b4b9a];
    const spots = [[-238, 20], [-232, 48], [-252, 74], [-225, 88], [-262, 40], [-210, 110]];
    for (const [x, z] of spots) {
      const grp = new THREE.Group();
      const w = 6 + r() * 3, d = 6 + r() * 3, h = 4 + r() * 2;
      const body = mesh(new THREE.BoxGeometry(w, h, d), toon(r() < 0.5 ? 0xf3e7cf : 0xe9d9b8), { thick: 0.06 });
      body.position.y = h / 2;
      grp.add(body);
      const roofG = new THREE.ConeGeometry(Math.max(w, d) * 0.78, 3.2, 4);
      roofG.rotateY(Math.PI / 4);
      const roof = mesh(roofG, toon(roofCols[(r() * roofCols.length) | 0]), { thick: 0.06 });
      roof.position.y = h + 1.6;
      grp.add(roof);
      const win = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ color: 0x6fb7ff }));
      win.position.set(0, h * 0.55, d / 2 + 0.02);
      grp.add(win);
      grp.position.set(x, this.height(x, z) - 0.2, z);
      grp.rotation.y = r() * Math.PI * 2;
      this.scene.add(grp);
    }
    // Windmühle
    const wm = new THREE.Group();
    const tower = mesh(new THREE.CylinderGeometry(2.2, 3.2, 12, 10), toon(0xf1e4cc), { thick: 0.06 });
    tower.position.y = 6;
    wm.add(tower);
    const cap = mesh(new THREE.ConeGeometry(3, 3, 10), toon(0x9b3d2b), { thick: 0.06 });
    cap.position.y = 13.5;
    wm.add(cap);
    const rotor = new THREE.Group();
    rotor.position.set(0, 11, 3.2);
    for (let k = 0; k < 4; k++) {
      const blade = mesh(new THREE.BoxGeometry(1.4, 8, 0.15), toon(0xffffff), { thick: 0.04 });
      blade.position.y = 4;
      const arm = new THREE.Group();
      arm.rotation.z = (k * Math.PI) / 2;
      arm.add(blade);
      rotor.add(arm);
    }
    wm.add(rotor);
    wm.position.set(-250, this.height(-250, -15) - 0.3, -15);
    wm.rotation.y = 1.2;
    this.scene.add(wm);
    this.anim.push((t, dt) => { rotor.rotation.z += dt * 0.8; });
  }

  lighthouse() {
    const grp = new THREE.Group();
    const island = mesh(new THREE.CylinderGeometry(9, 11, 2, 16), toon(0xe6d39a), { out: false });
    island.position.y = -0.4;
    grp.add(island);
    for (let k = 0; k < 5; k++) {
      const seg = mesh(new THREE.CylinderGeometry(2.1 - k * 0.2, 2.3 - k * 0.2, 2.6, 16), toon(k % 2 ? 0xffffff : 0xff6b35), { thick: 0.04 });
      seg.position.y = 1.9 + k * 2.6;
      grp.add(seg);
    }
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 1.6, 12), new THREE.MeshBasicMaterial({ color: 0xfff1a8 }));
    lamp.position.y = 15.6;
    grp.add(lamp);
    const roof = mesh(new THREE.ConeGeometry(1.8, 1.8, 12), toon(0x2b2b33), { thick: 0.04 });
    roof.position.y = 17.3;
    grp.add(roof);
    grp.position.set(LAKE.x + 6, 0, LAKE.z + 4);
    this.scene.add(grp);
  }

  // ---------------- Boost-Felder, Item-Kisten, Schanze ----------------
  features() {
    const T = this.track;
    const N = T.N;
    // Boost-Felder: Startgerade, Westgerade, Südbogen
    this.boosts = [
      { i: this.at(55, 0), lat: -2.5 }, { i: this.at(-175, 5), lat: 2.5 }, { i: this.at(-120, 102), lat: -2.5 },
      { i: this.at(230, -100), lat: 2.0 },
    ];
    const chev = canvasTex(128, 256, (g, w, h) => {
      g.fillStyle = '#ff6b35'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#ffe04a'; g.lineWidth = 26; g.lineJoin = 'miter';
      for (let k = 0; k < 2; k++) { g.beginPath(); g.moveTo(10, 100 + k * 128); g.lineTo(w / 2, 30 + k * 128); g.lineTo(w - 10, 100 + k * 128); g.stroke(); }
    });
    chev.wrapS = chev.wrapT = THREE.RepeatWrapping;
    chev.repeat.set(1, 2);
    const bmat = new THREE.MeshBasicMaterial({ map: chev, transparent: true, opacity: 0.95 });
    for (const bp of this.boosts) {
      const p = T.point(bp.i, bp.lat);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 7), bmat);
      m.rotation.order = 'YXZ';
      m.rotation.y = T.heading(bp.i);
      m.rotation.x = -Math.PI / 2;
      m.position.set(p.x, p.y + 0.06, p.z);
      // Textur zeigt nach vorn (+v = Fahrtrichtung)
      m.rotation.z = Math.PI;
      this.scene.add(m);
    }
    this.anim.push((t) => { chev.offset.y = -t * 1.6; });

    // Item-Kisten-Reihen
    this.boxRows = [this.at(110, 0), this.at(75, -195), this.at(-95, -120), this.at(-150, 95)];
    // Sprungschanze
    this.ramp = { i: this.at(-100, -40), len: 7, h: 1.4 };
    const rp = T.point(this.ramp.i, 0);
    const rg = new THREE.BufferGeometry();
    const W = ROAD_HALF, L = this.ramp.len, Hh = this.ramp.h;
    const v = [
      -W, 0, 0, W, 0, 0, W, Hh, L, -W, Hh, L, // Schräge
      -W, 0, L, W, 0, L, // Rückseite unten
    ];
    rg.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    rg.setIndex([0, 2, 1, 0, 3, 2, 3, 4, 5, 3, 5, 2, 0, 4, 3, 1, 2, 5]);
    rg.computeVertexNormals();
    const stripes = canvasTex(256, 64, (g, w, h) => {
      for (let k = 0; k < 16; k++) { g.fillStyle = k % 2 ? '#222' : '#ffd23a'; g.beginPath(); g.moveTo(k * 32, 0); g.lineTo(k * 32 + 32, 0); g.lineTo(k * 32, h); g.lineTo(k * 32 - 32, h); g.fill(); }
    });
    const uvs = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0];
    rg.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    const ramp = new THREE.Mesh(rg, toon(0xffffff, { map: stripes, noCache: true, side: THREE.DoubleSide }));
    ramp.castShadow = true;
    ramp.receiveShadow = true;
    ramp.position.set(rp.x, rp.y + 0.02, rp.z);
    ramp.rotation.y = T.heading(this.ramp.i);
    outline(ramp, 0.08);
    this.scene.add(ramp);
    void N;
  }

  // ---------------- Deko: Blumen, Büsche, Steine ----------------
  decor() {
    const T = this.track, r = rng(55);
    const flowers = [], bushes = [], rocks = [];
    for (let k = 0; k < 6000 && (flowers.length < 1400 || bushes.length < 260 || rocks.length < 120); k++) {
      const i = (r() * T.N) | 0;
      const side = r() < 0.5 ? -1 : 1;
      const off = WALL + 1.5 + Math.pow(r(), 1.6) * 70;
      const [rx, rz] = T.right(i);
      const x = T.x[i] + rx * off * side + (r() - 0.5) * 6, z = T.z[i] + rz * off * side + (r() - 0.5) * 6;
      const near = T.nearestGlobal(x, z, 3);
      if (near.i >= 0 && near.d < WALL + 1) continue;
      if (lakeDepth(x, z) < 1.15) continue;
      const tun = this.tunnelRange();
      const y = this.height(x, z);
      const v = r();
      if (v < 0.78) flowers.push([x, y, z, r()]);
      else if (v < 0.94) bushes.push([x, y, z, r()]);
      else rocks.push([x, y, z, r()]);
      void tun;
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const inst = (geo, mat, list, scale, yOff = 0, colorFn = null, out = 0) => {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      const col = new THREE.Color();
      list.forEach((t, k) => {
        q.setFromAxisAngle(up, t[3] * 40);
        sc.setScalar(scale(t[3]));
        m4.compose(p.set(t[0], t[1] + yOff, t[2]), q, sc);
        im.setMatrixAt(k, m4);
        if (colorFn) im.setColorAt(k, colorFn(t[3], col));
      });
      im.castShadow = !!out;
      this.scene.add(im);
      if (out) {
        const o = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: 0x1a2a10, side: THREE.BackSide }), list.length);
        list.forEach((t, k) => { q.setFromAxisAngle(up, t[3] * 40); sc.setScalar(scale(t[3]) * (1 + out)); m4.compose(p.set(t[0], t[1] + yOff - 0.02, t[2]), q, sc); o.setMatrixAt(k, m4); });
        this.scene.add(o);
      }
      return im;
    };
    // Blumen: kleines Büschel aus Blütenköpfen
    const fl = [];
    for (let k = 0; k < 5; k++) { const g = new THREE.IcosahedronGeometry(0.16, 0); const a = k * 1.3; g.translate(Math.cos(a) * 0.35, 0.25 + (k % 2) * 0.12, Math.sin(a) * 0.35); fl.push(g); }
    const stem = new THREE.ConeGeometry(0.4, 0.35, 5); stem.translate(0, 0.1, 0);
    const flowerCols = [0xffffff, 0xffd23a, 0xff8ab8, 0xff6b35, 0xb98cff];
    inst(mergeGeometries(fl), new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: toon(0).gradientMap }), flowers, (v) => 0.8 + v * 0.7, 0, (v, c) => c.setHex(flowerCols[(v * 97 | 0) % flowerCols.length]));
    inst(stem, toon(0x3f9a32), flowers, (v) => 0.8 + v * 0.7);
    // Büsche
    const b1 = new THREE.IcosahedronGeometry(1, 1); const b2 = new THREE.IcosahedronGeometry(0.75, 1); b2.translate(0.8, -0.15, 0.2); const b3 = new THREE.IcosahedronGeometry(0.65, 1); b3.translate(-0.7, -0.2, -0.3);
    inst(mergeGeometries([b1, b2, b3]), toon(0x3e9c3a), bushes, (v) => 0.9 + v * 0.9, 0.35, null, 0.06);
    // Steine
    const rock = new THREE.DodecahedronGeometry(1, 0); rock.scale(1.2, 0.75, 1);
    inst(rock, toon(0x9a958c), rocks, (v) => 0.6 + v * 1.6, 0.2, null, 0.05);
  }

  // ---------------- Riesiger Fuchskopf als Denkmal ----------------
  monument() {
    const x = 150, z = 62;
    const y = this.height(x, z);
    const grp = new THREE.Group();
    const base = mesh(new THREE.CylinderGeometry(9, 11, 5, 8), toon(0xb9b1a3), { thick: 0.15 });
    base.position.y = 1.5;
    grp.add(base);
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), new THREE.MeshBasicMaterial({ map: this.logoTexture(800, 200, '#1d1410'), toneMapped: false }));
    plaque.position.set(0, 2.2, 10.05);
    grp.add(plaque);
    const h = animalHead(RACERS[0]);
    h.scale.setScalar(16);
    h.position.y = 4 + 0.36 * 16 * 0.95;
    grp.add(h);
    // Umrisse bei großem Maßstab dünner machen
    h.traverse((o) => { if (o.userData.outline) { const s = o.scale.x; o.scale.setScalar(1 + (s - 1) * 0.35); o.position.multiplyScalar(0.35); } });
    grp.position.set(x, y - 0.5, z);
    grp.rotation.y = Math.atan2(40 - x, 0 - z);
    this.scene.add(grp);
    this.foxHead = h;
    this.anim.push((t) => { h.rotation.y = Math.sin(t * 0.4) * 0.25; });
  }

  // ---------------- 2FOX4-Schriftzug am Hang ----------------
  hillLetters() {
    if (!this.logo) return;
    const tex = canvasTex(2048, 560, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      const lw = w * 0.94, lh = lw * (2524.8 / 9741.63);
      g.shadowColor = 'rgba(29,20,16,1)'; g.shadowBlur = 0; g.shadowOffsetY = 18;
      g.drawImage(this.logo, (w - lw) / 2, (h - lh) / 2 - 8, lw, lh);
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(120, 32.8), new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, fog: true }));
    const x = -40, z = 200;
    m.position.set(x, this.height(x, z) + 26, z);
    m.rotation.y = Math.PI + 0.15;
    m.rotation.x = 0.25;
    this.scene.add(m);
  }

  // ---------------- Heißluftballons ----------------
  balloons() {
    const r = rng(12);
    const band = canvasTex(1024, 256, (g, w, h) => {
      g.fillStyle = '#ff6b35'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#1d1410'; g.fillRect(0, 70, w, 116);
      if (this.logo) for (let k = 0; k < 3; k++) { const lw = 300, lh = lw * (2524.8 / 9741.63); g.drawImage(this.logo, k * (w / 3) + (w / 3 - lw) / 2, 128 - lh / 2, lw, lh); }
    });
    const cols = [[0xff6b35, 0xffffff], [0xffd23a, 0xff6b35], [0x3d7cff, 0xffffff]];
    const spots = [[60, -40, 70], [-90, -190, 85], [-200, 160, 75]];
    spots.forEach(([x, z, y], k) => {
      const grp = new THREE.Group();
      const env = new THREE.SphereGeometry(7, 24, 18);
      // Streifen über Vertexfarben
      const pos = env.attributes.position;
      const col = [];
      for (let i = 0; i < pos.count; i++) {
        const a = Math.atan2(pos.getZ(i), pos.getX(i));
        const c = new THREE.Color(Math.floor((a + Math.PI) / (Math.PI / 6)) % 2 ? cols[k][0] : cols[k][1]);
        col.push(c.r, c.g, c.b);
      }
      env.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      const b = mesh(env, toon(0xffffff, { vertexColors: true }), { thick: 0.15 });
      b.scale.set(1, 1.15, 1);
      grp.add(b);
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(6.55, 5.6, 3.2, 32, 1, true), toon(0xffffff, { map: band, noCache: true }));
      belt.position.y = -3.0;
      grp.add(belt);
      const basket = mesh(new THREE.BoxGeometry(2, 1.6, 2), toon(0x8a5a32), { thick: 0.05 });
      basket.position.y = -11.5;
      grp.add(basket);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 4.2), toon(0x3a2a20));
        rope.position.set(sx * 1.6, -9, sz * 1.6);
        rope.rotation.set(sz * 0.25, 0, -sx * 0.25);
        grp.add(rope);
      }
      grp.position.set(x, y, z);
      grp.userData.base = y;
      grp.userData.ph = r() * 6;
      this.scene.add(grp);
      this.anim.push((t) => { grp.position.y = grp.userData.base + Math.sin(t * 0.3 + grp.userData.ph) * 3; grp.rotation.y = t * 0.05 + grp.userData.ph; });
    });
  }

  // ---------------- Reifenstapel an den Kurven ----------------
  tires() {
    const T = this.track;
    const spots = [];
    for (let i = 0; i < T.N; i += 14) {
      const c = T.curv[i];
      if (Math.abs(c) < 0.03) continue;
      const tun = this.tunnelRange();
      if (i > tun[0] - 12 && i < tun[1] + 12) continue;
      const side = c > 0 ? -1 : 1; // Kurvenaußenseite
      const [rx, rz] = T.right(i);
      const x = T.x[i] + rx * (WALL - 0.6) * side, z = T.z[i] + rz * (WALL - 0.6) * side;
      if (lakeDepth(x, z) < 1.1) continue;
      for (let h = 0; h < 3; h++) spots.push([x, T.y[i] + 0.22 + h * 0.42, z, h]);
    }
    const g = new THREE.TorusGeometry(0.45, 0.22, 8, 14);
    g.rotateX(Math.PI / 2);
    const im = new THREE.InstancedMesh(g, toon(0xffffff), spots.length);
    const m4 = new THREE.Matrix4(), col = new THREE.Color();
    spots.forEach((s, k) => { m4.makeTranslation(s[0], s[1], s[2]); im.setMatrixAt(k, m4); im.setColorAt(k, col.setHex(s[3] === 1 ? 0xf2f2f2 : 0xe8402a)); });
    im.castShadow = true;
    this.scene.add(im);
  }

  update(t, dt) { for (const f of this.anim) f(t, dt); }
}
