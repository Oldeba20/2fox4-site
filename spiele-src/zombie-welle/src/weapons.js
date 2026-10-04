import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// ------------------------------------------------------------
// Texturen
// ------------------------------------------------------------
function flashTexture() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, S / 2);
  gr.addColorStop(0, 'rgba(255,255,240,1)');
  gr.addColorStop(0.15, 'rgba(255,230,150,1)');
  gr.addColorStop(0.4, 'rgba(255,140,40,0.6)');
  gr.addColorStop(1, 'rgba(255,60,0,0)');
  g.fillStyle = gr;
  for (let i = 0; i < 7; i++) {
    g.rotate((Math.PI * 2) / 7 + Math.random() * 0.3);
    g.beginPath();
    g.moveTo(-6, 0);
    g.lineTo(0, -S / 2 * (0.6 + Math.random() * 0.4));
    g.lineTo(6, 0);
    g.fill();
  }
  g.beginPath(); g.arc(0, 0, S * 0.2, 0, Math.PI * 2); g.fill();
  return new THREE.CanvasTexture(c);
}
function stippleTexture() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#808080'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 1400; i++) {
    const v = 90 + Math.random() * 90 | 0;
    g.fillStyle = `rgb(${v},${v},${v})`;
    g.fillRect(Math.random() * S, Math.random() * S, 2, 2);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function woodTexture() {
  const W = 256, H = 64;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#6b4226'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 70; i++) {
    const y = Math.random() * H, a = 0.05 + Math.random() * 0.18;
    g.strokeStyle = Math.random() < 0.5 ? `rgba(40,20,8,${a})` : `rgba(150,95,55,${a})`;
    g.lineWidth = 0.5 + Math.random() * 2;
    g.beginPath(); g.moveTo(0, y);
    for (let x = 0; x <= W; x += 16) g.lineTo(x, y + Math.sin(x * 0.03 + i) * 2.5);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// ------------------------------------------------------------
// Waffen-Definitionen
// ------------------------------------------------------------
export const DEFS = {
  pistol: { name: 'Pistole', slot: 1, mag: 12, maxReserve: Infinity, cooldown: 0.15, reload: 1.25, damage: 34, pellets: 1, spread: 0.006, kick: [2.2, 26], camKick: 0.012 },
  shotgun: { name: 'Pump-Action', slot: 2, mag: 6, maxReserve: 40, cooldown: 0.2, pump: 0.52, shellTime: 0.42, damage: 15, pellets: 10, spread: 0.075, kick: [5.5, 70], camKick: 0.035 },
  rocket: { name: 'Raketenwerfer', slot: 3, mag: 1, maxReserve: 12, cooldown: 0.4, reload: 1.5, kick: [5, 34], camKick: 0.03 },
};
export const ORDER = ['pistol', 'shotgun', 'rocket'];
export const MAX_GRENADES = 6;

// ------------------------------------------------------------
export class Arsenal {
  constructor(envMap) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, 16 / 9, 0.01, 10);
    this.scene.add(this.camera);

    this.hemi = new THREE.HemisphereLight(0xb8c4dc, 0x3a2a20, 1.0);
    this.scene.add(this.hemi);
    this.key = new THREE.DirectionalLight(0xffe6c8, 1.4);
    this.key.position.set(-0.5, 1, 0.4);
    this.scene.add(this.key);
    this.flashLight = new THREE.PointLight(0xffb060, 0, 1.5, 2);
    this.scene.add(this.flashLight);
    this.scene.environment = envMap;
    this.scene.environmentIntensity = 0.35;

    this.rig = new THREE.Group();
    this.kick = new THREE.Group();
    this.camera.add(this.rig);
    this.rig.add(this.kick);

    const M = (this.m = {
      steel: new THREE.MeshStandardMaterial({ color: 0x26282b, metalness: 0.92, roughness: 0.32 }),
      steelLight: new THREE.MeshStandardMaterial({ color: 0x55585c, metalness: 0.95, roughness: 0.22 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6, metalness: 0.5 }),
      black: new THREE.MeshBasicMaterial({ color: 0x000000 }),
      poly: new THREE.MeshStandardMaterial({ color: 0x141414, metalness: 0.05, roughness: 0.78 }),
      grip: new THREE.MeshStandardMaterial({ color: 0x151515, metalness: 0.0, roughness: 0.9, bumpMap: stippleTexture(), bumpScale: 1.2 }),
      glove: new THREE.MeshStandardMaterial({ color: 0x1c1a18, metalness: 0.05, roughness: 0.55 }),
      knuckle: new THREE.MeshStandardMaterial({ color: 0x2a2724, metalness: 0.05, roughness: 0.7 }),
      sleeve: new THREE.MeshStandardMaterial({ color: 0x2f3324, metalness: 0.0, roughness: 0.95 }),
      dot: new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x8aff5a, emissiveIntensity: 3 }),
      red: new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xff2010, emissiveIntensity: 4 }),
      brass: new THREE.MeshStandardMaterial({ color: 0xc9a046, metalness: 1, roughness: 0.3 }),
      shellRed: new THREE.MeshStandardMaterial({ color: 0x9c1010, metalness: 0.1, roughness: 0.45 }),
      wood: new THREE.MeshStandardMaterial({ map: woodTexture(), color: 0xc08a60, roughness: 0.5, metalness: 0.0 }),
      olive: new THREE.MeshStandardMaterial({ color: 0x3e4a2c, metalness: 0.35, roughness: 0.55 }),
      oliveDark: new THREE.MeshStandardMaterial({ color: 0x252c1a, metalness: 0.4, roughness: 0.5 }),
      orange: new THREE.MeshStandardMaterial({ color: 0x220900, emissive: 0xff6b35, emissiveIntensity: 1.2, roughness: 0.4 }),
      warhead: new THREE.MeshStandardMaterial({ color: 0x5a5f4a, metalness: 0.6, roughness: 0.35 }),
      nade: new THREE.MeshStandardMaterial({ color: 0x3a4628, metalness: 0.3, roughness: 0.55 }),
    });
    this.flashTex = flashTexture();

    this.models = {
      pistol: this.buildPistol(),
      shotgun: this.buildShotgun(),
      rocket: this.buildLauncher(),
    };
    for (const k of ORDER) {
      const mdl = this.models[k];
      mdl.group.visible = k === 'pistol';
      this.kick.add(mdl.group);
      mdl.group.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
    }
    this.buildNadeHand();

    // Hülsen
    this.shells = [];
    const pg = new THREE.CylinderGeometry(0.0045, 0.0045, 0.019, 10);
    const sg = new THREE.CylinderGeometry(0.0115, 0.0115, 0.065, 12);
    for (let i = 0; i < 10; i++) {
      const shot = i >= 5;
      const s = new THREE.Mesh(shot ? sg : pg, shot ? M.shellRed : M.brass);
      s.visible = false;
      this.camera.add(s);
      this.shells.push({ m: s, v: new THREE.Vector3(), w: new THREE.Vector3(), life: 0, shot });
    }

    this.reset();
  }

  reset() {
    this.state = {
      pistol: { ammo: 12, reserve: Infinity },
      shotgun: { ammo: 6, reserve: 12 },
      rocket: { ammo: 1, reserve: 3 },
    };
    this.grenades = 3;
    this.owned = { pistol: true, shotgun: true, rocket: true };
    this.current = 'pistol';
    this.last = 'shotgun';
    this.pending = null;
    this.switchT = 0;
    this.cooldown = 0;
    this.reloadT = 0;
    this.pumpT = 0;
    this.sgReload = null;  // { t, phase }
    this.flashT = 0;
    this.slideT = 0;
    this.recoil = { z: 0, vz: 0, rx: 0, vrx: 0, ry: 0, vry: 0 };
    this.swayX = 0; this.swayY = 0;
    this.raise = 1;
    this.nade.t = -1;
    this.nade.group.visible = false;
    for (const k of ORDER) this.models[k].group.visible = k === 'pistol';
    this.applyPose('pistol');
  }

  get def() { return DEFS[this.current]; }
  get st() { return this.state[this.current]; }
  get reloading() { return this.reloadT > 0 || !!this.sgReload; }
  get busy() { return this.switchT > 0 || this.nade.t >= 0 || this.raise > 0.3; }

  applyPose(k) {
    const mdl = this.models[k];
    this.rigBase = mdl.rigBase;
    this.kick.rotation.set(0, 0, 0);
    mdl.group.rotation.copy(mdl.rot);
  }

  // ---------------- Modelle ----------------
  _add(parent, geo, mat, x, y, z) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }

  // Rechte Hand um einen Pistolengriff bei (0,-0.082,0.07)
  rightHand(parent) {
    const M = this.m, add = (...a) => this._add(...a);
    const h = new THREE.Group();
    parent.add(h);
    const palm = add(h, new RoundedBoxGeometry(0.06, 0.1, 0.07, 3, 0.02), M.glove, 0.004, -0.088, 0.085);
    palm.rotation.x = 0.28;
    for (let i = 0; i < 3; i++) {
      const fg = new THREE.Group();
      fg.position.set(0, -0.058 - i * 0.022, 0.044 - i * 0.006);
      fg.rotation.x = 0.28;
      h.add(fg);
      const f1 = add(fg, new THREE.CapsuleGeometry(0.0105, 0.03, 4, 10), M.glove, -0.018, 0, -0.005); f1.rotation.z = Math.PI / 2; f1.rotation.y = 0.35;
      const f2 = add(fg, new THREE.CapsuleGeometry(0.0098, 0.018, 4, 10), M.knuckle, 0.008, 0, -0.022); f2.rotation.x = Math.PI / 2;
      const f3 = add(fg, new THREE.CapsuleGeometry(0.0095, 0.02, 4, 10), M.glove, 0.024, 0, -0.01); f3.rotation.z = Math.PI / 2; f3.rotation.y = -0.6;
    }
    const idx = add(h, new THREE.CapsuleGeometry(0.0095, 0.04, 4, 10), M.glove, 0.017, -0.036, 0.022); idx.rotation.x = Math.PI / 2 - 0.25; idx.rotation.z = -0.15;
    const th = add(h, new THREE.CapsuleGeometry(0.011, 0.045, 4, 10), M.glove, -0.02, -0.02, 0.045); th.rotation.x = Math.PI / 2 + 0.25; th.rotation.z = 0.2;
    const wrist = add(h, new THREE.CylinderGeometry(0.03, 0.033, 0.06, 14), M.glove, 0.01, -0.14, 0.13); wrist.rotation.x = 1.0;
    const arm = add(h, new THREE.CylinderGeometry(0.038, 0.05, 0.36, 16), M.sleeve, 0.03, -0.2, 0.32); arm.rotation.x = 1.05; arm.rotation.z = -0.12;
    const cuff = add(h, new THREE.TorusGeometry(0.036, 0.008, 8, 18), M.sleeve, 0.012, -0.152, 0.152); cuff.rotation.x = 1.05 + Math.PI / 2;
    return h;
  }

  // Linke Stützhand (umgreift ein Rohr/Vorderschaft entlang -Z)
  supportHand(parent, x, y, z, radius = 0.028) {
    const M = this.m, add = (...a) => this._add(...a);
    const h = new THREE.Group();
    h.position.set(x, y, z);
    parent.add(h);
    const palm = add(h, new RoundedBoxGeometry(0.05, 0.035, 0.085, 3, 0.014), M.glove, -0.006, -radius - 0.012, 0);
    palm.rotation.z = 0.25;
    for (let i = 0; i < 4; i++) {
      const f = add(h, new THREE.CapsuleGeometry(0.0095, 0.034, 4, 10), M.glove, radius * 0.9 + 0.004, -0.004, -0.032 + i * 0.021);
      f.rotation.z = -0.35;
    }
    const th = add(h, new THREE.CapsuleGeometry(0.0105, 0.04, 4, 10), M.knuckle, -radius - 0.006, 0.004, -0.01);
    th.rotation.x = Math.PI / 2; th.rotation.z = 0.2;
    // Unterarm: vom Handgelenk schräg nach hinten-unten-links
    const dir = new THREE.Vector3(-0.35, -0.55, 0.75).normalize();
    const len = 0.42;
    const arm = add(h, new THREE.CylinderGeometry(0.048, 0.036, len, 16), M.sleeve, 0, 0, 0);
    arm.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
    arm.position.set(-0.012, -radius - 0.02, 0.03).addScaledVector(dir, len / 2 + 0.02);
    const wrist = add(h, new THREE.SphereGeometry(0.032, 12, 10), M.glove, -0.012, -radius - 0.022, 0.035);
    void wrist;
    return h;
  }

  makeFlash(parent, x, y, z, size) {
    const fm = new THREE.MeshBasicMaterial({ map: this.flashTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85 });
    const fl = new THREE.Group();
    fl.position.set(x, y, z);
    parent.add(fl);
    const p1 = new THREE.Mesh(new THREE.PlaneGeometry(size, size), fm);
    const p2 = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.46, size * 1.55), fm);
    p2.rotation.x = Math.PI / 2; p2.position.z = -size * 0.58;
    const p3 = p2.clone(); p3.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    fl.add(p1, p2, p3);
    fl.visible = false;
    return fl;
  }

  buildPistol() {
    const M = this.m, add = (...a) => this._add(...a);
    const gun = new THREE.Group();
    const slide = new THREE.Group();
    gun.add(slide);
    add(slide, new RoundedBoxGeometry(0.03, 0.032, 0.192, 3, 0.004), M.steel, 0, 0, 0);
    for (let i = 0; i < 7; i++) add(slide, new THREE.BoxGeometry(0.0315, 0.022, 0.0025), M.steelLight, 0, -0.002, 0.055 + i * 0.0055);
    add(slide, new THREE.BoxGeometry(0.004, 0.012, 0.034), M.dark, 0.0135, 0.007, -0.012);
    add(slide, new THREE.BoxGeometry(0.0045, 0.0105, 0.028), M.steelLight, 0.0128, 0.007, -0.012);
    add(slide, new THREE.BoxGeometry(0.005, 0.007, 0.008), M.steel, 0, 0.019, -0.085);
    add(slide, new THREE.SphereGeometry(0.0013, 8, 8), M.dot, 0, 0.0205, -0.0805);
    add(slide, new THREE.BoxGeometry(0.024, 0.008, 0.008), M.steel, 0, 0.0195, 0.086);
    add(slide, new THREE.BoxGeometry(0.006, 0.0085, 0.0085), M.black, 0, 0.021, 0.086);
    add(slide, new THREE.SphereGeometry(0.0012, 8, 8), M.dot, -0.0062, 0.0215, 0.0818);
    add(slide, new THREE.SphereGeometry(0.0012, 8, 8), M.dot, 0.0062, 0.0215, 0.0818);
    const mz = add(slide, new THREE.CylinderGeometry(0.0072, 0.0072, 0.012, 16), M.steelLight, 0, 0.002, -0.097); mz.rotation.x = Math.PI / 2;
    const bore = add(slide, new THREE.CircleGeometry(0.0046, 16), M.black, 0, 0.002, -0.1032); bore.rotation.y = Math.PI;
    add(gun, new RoundedBoxGeometry(0.027, 0.02, 0.17, 2, 0.003), M.poly, 0, -0.024, -0.008);
    add(gun, new THREE.BoxGeometry(0.02, 0.006, 0.05), M.poly, 0, -0.036, -0.055);
    const tg = add(gun, new THREE.TorusGeometry(0.019, 0.0035, 8, 20, Math.PI), M.poly, 0, -0.035, 0.012); tg.rotation.set(Math.PI, Math.PI / 2, 0); tg.scale.set(1, 1.15, 1);
    const tr = add(gun, new THREE.BoxGeometry(0.006, 0.018, 0.005), M.steel, 0, -0.04, 0.012); tr.rotation.x = 0.25;
    const gr = add(gun, new RoundedBoxGeometry(0.031, 0.115, 0.052, 3, 0.008), M.grip, 0, -0.082, 0.07); gr.rotation.x = 0.28;
    const mag = new THREE.Group();
    gun.add(mag);
    const mb = add(mag, new RoundedBoxGeometry(0.033, 0.012, 0.054, 2, 0.003), M.poly, 0, -0.142, 0.087); mb.rotation.x = 0.28;
    add(gun, new THREE.BoxGeometry(0.008, 0.012, 0.01), M.steel, 0, 0.004, 0.1);
    this.rightHand(gun);
    const flash = this.makeFlash(slide, 0, 0.002, -0.112, 0.048);
    const eject = new THREE.Object3D(); eject.position.set(0.016, 0.01, -0.012); slide.add(eject);
    return { group: gun, slide, mag, flash, eject, rigBase: new THREE.Vector3(0.12, -0.105, -0.36), rot: new THREE.Euler(0, 0.3, -0.05) };
  }

  buildShotgun() {
    // Schwere Pump-Action: dicker Lauf, Hitzeschild, gerippter Vorderschaft, Patronenhalter
    const M = this.m, add = (...a) => this._add(...a);
    const gun = new THREE.Group();
    const poly = M.poly;
    // Gehäuse
    add(gun, new RoundedBoxGeometry(0.066, 0.088, 0.27, 4, 0.01), M.steel, 0, 0.012, -0.045);
    add(gun, new RoundedBoxGeometry(0.068, 0.05, 0.2, 2, 0.006), M.steelLight, 0, 0.0, -0.045).scale.set(1, 1, 1);
    add(gun, new THREE.BoxGeometry(0.004, 0.034, 0.09), M.dark, 0.0335, 0.022, -0.05);          // Auswurf rechts
    add(gun, new THREE.BoxGeometry(0.004, 0.024, 0.07), M.steelLight, 0.0325, 0.022, -0.05);    // Verschluss
    // Patronenhalter links mit 4 Schrotpatronen
    add(gun, new RoundedBoxGeometry(0.012, 0.06, 0.12, 2, 0.004), poly, -0.039, 0.01, -0.06);
    for (let i = 0; i < 4; i++) {
      const sh = add(gun, new THREE.CylinderGeometry(0.0115, 0.0115, 0.07, 14), M.shellRed, -0.05, 0.01, -0.105 + i * 0.03);
      const cap = add(gun, new THREE.CylinderGeometry(0.0118, 0.0118, 0.016, 14), M.brass, -0.05, 0.047, -0.105 + i * 0.03);
      void sh; void cap;
    }
    // Lauf (dick) + Mündung
    const barrel = add(gun, new THREE.CylinderGeometry(0.021, 0.021, 0.56, 24), M.steel, 0, 0.038, -0.45); barrel.rotation.x = Math.PI / 2;
    const muzzle = add(gun, new THREE.CylinderGeometry(0.025, 0.025, 0.045, 24), M.steelLight, 0, 0.038, -0.71); muzzle.rotation.x = Math.PI / 2;
    const bore = add(gun, new THREE.CircleGeometry(0.016, 20), M.black, 0, 0.038, -0.7326); bore.rotation.y = Math.PI;
    // Hitzeschild mit Lüftungsschlitzen
    add(gun, new RoundedBoxGeometry(0.05, 0.026, 0.4, 2, 0.006), poly, 0, 0.062, -0.39);
    for (let i = 0; i < 8; i++) {
      add(gun, new THREE.BoxGeometry(0.052, 0.01, 0.022), M.dark, 0, 0.062, -0.24 - i * 0.042);
    }
    // Visier: Lochkimme hinten, Korn vorn
    for (const x of [-0.016, 0.016]) add(gun, new THREE.BoxGeometry(0.008, 0.03, 0.02), M.steel, x, 0.07, 0.06);
    const ring = add(gun, new THREE.TorusGeometry(0.011, 0.0035, 8, 18), M.steel, 0, 0.083, 0.06); void ring;
    add(gun, new THREE.BoxGeometry(0.006, 0.024, 0.018), M.steel, 0, 0.083, -0.66);
    add(gun, new THREE.SphereGeometry(0.0035, 8, 8), M.red, 0, 0.096, -0.66);
    // Magazinrohr + Laufschelle
    const tube = add(gun, new THREE.CylinderGeometry(0.019, 0.019, 0.5, 20), M.steel, 0, -0.012, -0.42); tube.rotation.x = Math.PI / 2;
    const tcap = add(gun, new THREE.CylinderGeometry(0.022, 0.022, 0.03, 20), M.steelLight, 0, -0.012, -0.675); tcap.rotation.x = Math.PI / 2;
    add(gun, new RoundedBoxGeometry(0.05, 0.085, 0.03, 2, 0.008), M.steel, 0, 0.013, -0.63);
    // Vorderschaft (beweglich), dick und gerippt
    const pump = new THREE.Group();
    pump.position.set(0, -0.01, -0.38);
    gun.add(pump);
    add(pump, new RoundedBoxGeometry(0.08, 0.072, 0.25, 4, 0.02), M.wood, 0, 0, 0);
    for (let i = 0; i < 8; i++) add(pump, new THREE.BoxGeometry(0.082, 0.074, 0.007), M.dark, 0, 0, -0.1 + i * 0.028).scale.set(1, 0.92, 1);
    this.supportHand(pump, 0, -0.004, 0.01, 0.042);
    // Abzug, Pistolengriff, Schaft
    const tg = add(gun, new THREE.TorusGeometry(0.024, 0.005, 8, 20, Math.PI), M.steel, 0, -0.034, 0.016); tg.rotation.set(Math.PI, Math.PI / 2, 0); tg.scale.set(1, 1.15, 1);
    const tr = add(gun, new THREE.BoxGeometry(0.008, 0.022, 0.006), M.steel, 0, -0.042, 0.016); tr.rotation.x = 0.25;
    const gr = add(gun, new RoundedBoxGeometry(0.04, 0.125, 0.062, 3, 0.012), M.grip, 0, -0.085, 0.072); gr.rotation.x = 0.28;
    const stock = add(gun, new RoundedBoxGeometry(0.052, 0.1, 0.34, 3, 0.016), poly, 0, -0.025, 0.3); stock.rotation.x = -0.12;
    add(gun, new RoundedBoxGeometry(0.056, 0.11, 0.03, 2, 0.01), M.knuckle, 0, -0.045, 0.47);
    this.rightHand(gun);
    const flash = this.makeFlash(gun, 0, 0.038, -0.76, 0.14);
    const eject = new THREE.Object3D(); eject.position.set(0.036, 0.022, -0.05); gun.add(eject);
    return { group: gun, pump, pumpZ: -0.38, pumpTravel: 0.1, flash, eject, rigBase: new THREE.Vector3(0.17, -0.15, -0.56), rot: new THREE.Euler(0, 0.12, -0.04) };
  }

  buildLauncher() {
    const M = this.m, add = (...a) => this._add(...a);
    const gun = new THREE.Group();
    const ty = 0.105;
    const tube = add(gun, new THREE.CylinderGeometry(0.058, 0.058, 0.92, 28, 1, true), M.olive, 0, ty, -0.16); tube.rotation.x = Math.PI / 2;
    const inner = add(gun, new THREE.CylinderGeometry(0.052, 0.052, 0.9, 20, 1, true), M.oliveDark, 0, ty, -0.16); inner.rotation.x = Math.PI / 2; inner.material = M.oliveDark.clone(); inner.material.side = THREE.BackSide;
    const front = add(gun, new THREE.CylinderGeometry(0.067, 0.067, 0.06, 28, 1, true), M.oliveDark, 0, ty, -0.6); front.rotation.x = Math.PI / 2;
    const frontRim = add(gun, new THREE.RingGeometry(0.052, 0.067, 28), M.oliveDark, 0, ty, -0.63); frontRim.rotation.y = Math.PI;
    const back = add(gun, new THREE.CylinderGeometry(0.058, 0.08, 0.1, 28, 1, true), M.oliveDark, 0, ty, 0.33); back.rotation.x = Math.PI / 2;
    const backIn = add(gun, new THREE.CircleGeometry(0.05, 20), M.black, 0, ty, 0.1); void backIn;
    const stripe = add(gun, new THREE.CylinderGeometry(0.0595, 0.0595, 0.025, 28, 1, true), M.orange, 0, ty, -0.46); stripe.rotation.x = Math.PI / 2;
    for (const z of [-0.3, 0.05]) { const r = add(gun, new THREE.TorusGeometry(0.059, 0.005, 8, 28), M.oliveDark, 0, ty, z); void r; }
    // Rakete im Rohr
    const warhead = new THREE.Group();
    warhead.position.set(0, ty, -0.6);
    gun.add(warhead);
    const cone = add(warhead, new THREE.ConeGeometry(0.044, 0.12, 20), M.warhead, 0, 0, -0.03); cone.rotation.x = -Math.PI / 2;
    const body = add(warhead, new THREE.CylinderGeometry(0.044, 0.044, 0.06, 20), M.warhead, 0, 0, 0.05); body.rotation.x = Math.PI / 2;
    const tip = add(warhead, new THREE.SphereGeometry(0.008, 8, 8), M.red, 0, 0, -0.09); void tip;
    // Visier links
    add(gun, new RoundedBoxGeometry(0.03, 0.045, 0.1, 2, 0.005), M.oliveDark, -0.07, ty + 0.03, -0.08);
    add(gun, new THREE.BoxGeometry(0.02, 0.02, 0.005), M.dark, -0.07, ty + 0.035, -0.032);
    add(gun, new THREE.SphereGeometry(0.0025, 8, 8), M.red, -0.07, ty + 0.036, -0.029);
    add(gun, new THREE.BoxGeometry(0.03, 0.012, 0.03), M.oliveDark, -0.05, ty + 0.01, -0.08);
    // Griffstück
    add(gun, new RoundedBoxGeometry(0.034, 0.07, 0.14, 2, 0.008), M.oliveDark, 0, 0.03, 0.04);
    const tg = add(gun, new THREE.TorusGeometry(0.019, 0.0035, 8, 20, Math.PI), M.steel, 0, -0.03, 0.012); tg.rotation.set(Math.PI, Math.PI / 2, 0); tg.scale.set(1, 1.15, 1);
    const tr = add(gun, new THREE.BoxGeometry(0.006, 0.018, 0.005), M.steel, 0, -0.036, 0.012); tr.rotation.x = 0.25;
    const gr = add(gun, new RoundedBoxGeometry(0.034, 0.115, 0.054, 3, 0.01), M.grip, 0, -0.082, 0.07); gr.rotation.x = 0.28;
    // Vordergriff + Hand
    add(gun, new RoundedBoxGeometry(0.03, 0.03, 0.06, 2, 0.006), M.oliveDark, 0, 0.045, -0.3);
    const fg = add(gun, new RoundedBoxGeometry(0.03, 0.1, 0.035, 2, 0.008), M.grip, 0, -0.01, -0.3); fg.rotation.x = 0.1;
    const lh = new THREE.Group();
    gun.add(lh);
    this.rightHand(lh);
    lh.scale.x = -1;
    lh.position.set(0, 0.072, -0.37);
    this.rightHand(gun);
    const flash = this.makeFlash(gun, 0, ty, -0.66, 0.18);
    return { group: gun, warhead, flash, rigBase: new THREE.Vector3(0.2, -0.2, -0.52), rot: new THREE.Euler(0, 0.06, -0.02) };
  }

  buildNadeHand() {
    const M = this.m, add = (...a) => this._add(...a);
    const g = new THREE.Group();
    this.camera.add(g);
    const nade = new THREE.Group();
    g.add(nade);
    const body = add(nade, new THREE.SphereGeometry(0.032, 18, 14), M.nade, 0, 0, 0);
    body.scale.set(1, 1.18, 1);
    for (let i = 0; i < 3; i++) { const r = add(nade, new THREE.TorusGeometry(0.0325, 0.0025, 6, 20), M.oliveDark, 0, -0.018 + i * 0.018, 0); r.rotation.x = Math.PI / 2; }
    add(nade, new THREE.CylinderGeometry(0.012, 0.014, 0.018, 12), M.steelLight, 0, 0.044, 0);
    const lever = add(nade, new THREE.BoxGeometry(0.008, 0.055, 0.004), M.steelLight, 0.022, 0.03, 0); lever.rotation.z = -0.25;
    const ring = add(nade, new THREE.TorusGeometry(0.011, 0.0018, 6, 16), M.steelLight, -0.016, 0.052, 0); ring.rotation.y = Math.PI / 2;
    // Hand um die Granate
    const palm = add(g, new RoundedBoxGeometry(0.06, 0.05, 0.075, 3, 0.02), M.glove, 0.012, -0.036, 0.018);
    void palm;
    for (let i = 0; i < 4; i++) {
      const f = add(g, new THREE.CapsuleGeometry(0.0095, 0.03, 4, 10), M.glove, 0.034, -0.01 + 0, -0.03 + i * 0.02);
      f.rotation.z = 0.5;
    }
    const arm = add(g, new THREE.CylinderGeometry(0.038, 0.05, 0.4, 16), M.sleeve, 0.02, -0.17, 0.12);
    arm.rotation.set(0.6, 0, -0.3);
    g.visible = false;
    g.traverse((o) => { if (o.isMesh) { o.castShadow = false; } });
    this.nade = { group: g, ball: nade, t: -1, released: false };
  }

  // ---------------- Aktionen ----------------
  hasAmmo(k) { const s = this.state[k]; return s.ammo > 0 || s.reserve > 0; }

  select(k) {
    if (!DEFS[k] || !this.owned[k]) return false;
    if (k === this.current && !this.pending) return false;
    if (!this.hasAmmo(k)) return false;
    if (this.nade.t >= 0) return false;
    this.pending = k;
    if (this.switchT <= 0) this.switchT = 0.45;
    this.reloadT = 0;
    this.sgReload = null;
    return true;
  }
  cycle(dir) {
    let i = ORDER.indexOf(this.pending || this.current);
    for (let n = 0; n < ORDER.length; n++) {
      i = (i + dir + ORDER.length) % ORDER.length;
      if (this.hasAmmo(ORDER[i])) return this.select(ORDER[i]);
    }
    return false;
  }
  selectLast() { return this.select(this.last); }

  // Liefert 'shot' | 'empty' | 'wait'
  fire() {
    const k = this.current, d = DEFS[k], s = this.st;
    if (this.busy) return 'wait';
    if (k === 'shotgun' && this.sgReload && s.ammo > 0) this.sgReload = null; // Nachladen abbrechen
    if (this.cooldown > 0 || this.reloadT > 0 || this.pumpT > 0 || this.sgReload) return 'wait';
    if (s.ammo <= 0) { this.cooldown = 0.25; return 'empty'; }
    s.ammo--;
    this.cooldown = d.cooldown;
    const mdl = this.models[k];
    this.flashT = k === 'rocket' ? 0.08 : 0.055;
    mdl.flash.visible = true;
    mdl.flash.rotation.z = Math.random() * Math.PI;
    const sc = 0.85 + Math.random() * 0.4;
    mdl.flash.scale.set(sc, sc, sc);
    const r = this.recoil;
    r.vz += d.kick[0]; r.vrx += d.kick[1]; r.vry += (Math.random() - 0.5) * 6;
    if (k === 'pistol') { this.slideT = 0.085; this.eject('pistol'); }
    if (k === 'shotgun' && (s.ammo > 0 || s.reserve > 0 || true)) { this.pumpT = d.pump + 0.18; }
    if (k === 'rocket') mdl.warhead.visible = false;
    return 'shot';
  }

  startReload() {
    const k = this.current, d = DEFS[k], s = this.st;
    if (this.busy || this.reloading || this.pumpT > 0) return false;
    if (s.ammo >= d.mag || s.reserve <= 0) return false;
    if (k === 'shotgun') { this.sgReload = { t: 0, phase: 'in' }; return 'shotgun'; }
    this.reloadT = d.reload;
    return k;
  }

  throwGrenade() {
    if (this.grenades <= 0 || this.nade.t >= 0 || this.switchT > 0) return false;
    this.grenades--;
    this.nade.t = 0;
    this.nade.released = false;
    this.nade.group.visible = true;
    this.nade.ball.visible = true;
    this.reloadT = 0;
    this.sgReload = null;
    return true;
  }

  eject(kind) {
    const mdl = this.models[kind];
    const list = this.shells.filter((s) => s.shot === (kind === 'shotgun'));
    const s = list.find((q) => q.life <= 0) || list[0];
    s.m.visible = true;
    const p = new THREE.Vector3();
    mdl.eject.getWorldPosition(p);
    this.camera.worldToLocal(p);
    s.m.position.copy(p);
    s.v.set(0.9 + Math.random() * 0.4, 0.9 + Math.random() * 0.5, 0.15 + Math.random() * 0.2);
    s.w.set(Math.random() * 30, Math.random() * 30, 20);
    s.life = 0.6;
  }

  // ---------------- Animation ----------------
  // events: Array, in das Sound-/Spiel-Ereignisse geschrieben werden
  update(dt, { moving = 0, sprint = false, bobPhase = 0, lookDX = 0, lookDY = 0, light = 1, time = 0 }, events) {
    const k = this.current, d = DEFS[k], s = this.st, mdl = this.models[k];
    this.cooldown = Math.max(0, this.cooldown - dt);
    const rdt = dt * (this.reloadSpeed || 1); // Upgrade „Schnellladen“
    const L = Math.min(2.4, 0.6 + light * 0.8);
    this.hemi.intensity = 0.5 * L;
    this.key.intensity = 1.1 * L;
    this.scene.environmentIntensity = 0.25 + 0.15 * L;

    // Mündungsfeuer
    if (this.flashT > 0) {
      this.flashT -= dt;
      this.flashLight.intensity = k === 'pistol' ? 3 : 6;
      this.flashLight.position.set(this.rig.position.x, this.rig.position.y + 0.05, this.rig.position.z - 0.2);
      if (this.flashT <= 0) { for (const q of ORDER) this.models[q].flash.visible = false; this.flashLight.intensity = 0; }
    }

    let lower = 0, tilt = 0, roll = 0;

    // --- Pistole: Schlitten ---
    if (k === 'pistol') {
      if (this.slideT > 0) { this.slideT -= dt; mdl.slide.position.z = Math.sin((this.slideT / 0.085) * Math.PI) * 0.03; }
      else if (s.ammo === 0 && this.reloadT <= 0) mdl.slide.position.z = 0.028;
      else if (this.reloadT <= 0) mdl.slide.position.z = 0;
    }

    // --- Pump-Action ---
    if (k === 'shotgun') {
      if (this.pumpT > 0) {
        const before = this.pumpT;
        this.pumpT -= rdt;
        const total = d.pump;
        const p = 1 - Math.max(0, this.pumpT) / total; // 0..1 (erste 0.18 s Wartezeit)
        if (this.pumpT < total) {
          const q = Math.min(1, Math.max(0, p));
          mdl.pump.position.z = mdl.pumpZ + Math.sin(q * Math.PI) * mdl.pumpTravel;
          roll = Math.sin(q * Math.PI) * 0.25;
          if (before >= total * 0.62 && this.pumpT < total * 0.62) { this.eject('shotgun'); events.push('pumpBack'); }
          if (before >= total * 0.2 && this.pumpT < total * 0.2) events.push('pumpFwd');
        }
        if (this.pumpT <= 0) { this.pumpT = 0; mdl.pump.position.z = mdl.pumpZ; }
      }
      if (this.sgReload) {
        const r = this.sgReload;
        r.t += rdt;
        tilt = Math.min(1, r.t / 0.2) * 0.6;
        if (r.phase === 'in' && r.t > 0.25) { r.phase = 'load'; r.t = 0.25; r.next = 0.25 + d.shellTime; }
        if (r.phase === 'load') {
          tilt = 0.6 + Math.sin((r.t - 0.25) / d.shellTime * Math.PI * 2) * 0.05;
          if (r.t >= r.next) {
            if (s.ammo < d.mag && s.reserve > 0) { s.ammo++; s.reserve--; events.push('shellIn'); }
            r.next += d.shellTime;
            if (s.ammo >= d.mag || s.reserve <= 0) { r.phase = 'out'; r.out = 0; }
          }
        }
        if (r.phase === 'out') {
          r.out += rdt;
          tilt = 0.6 * (1 - r.out / 0.25);
          if (r.out >= 0.25) this.sgReload = null;
        }
      }
    }

    // --- Pistole / Raketenwerfer nachladen ---
    if (this.reloadT > 0) {
      this.reloadT -= rdt;
      const p = 1 - this.reloadT / d.reload;
      lower = p < 0.2 ? p / 0.2 : p > 0.85 ? (1 - p) / 0.15 : 1;
      tilt = lower;
      if (k === 'pistol') {
        if (p > 0.18 && p < 0.62) {
          const q = (p - 0.18) / 0.44;
          mdl.mag.position.y = -Math.min(1, q * 2.5) * 0.25;
          mdl.mag.visible = q < 0.4 || q > 0.75;
          if (q > 0.75) mdl.mag.position.y = -(1 - (q - 0.75) / 0.25) * 0.08;
        } else { mdl.mag.position.y = 0; mdl.mag.visible = true; }
        if (p > 0.72 && p < 0.86) mdl.slide.position.z = Math.sin(((p - 0.72) / 0.14) * Math.PI) * 0.032;
      }
      if (k === 'rocket') {
        mdl.warhead.visible = p > 0.45;
        if (p > 0.45) mdl.warhead.position.z = -0.6 - Math.max(0, 0.7 - p) * 0.6;
      }
      if (this.reloadT <= 0) {
        this.reloadT = 0;
        const need = Math.min(d.mag - s.ammo, s.reserve);
        s.ammo += need;
        if (s.reserve !== Infinity) s.reserve -= need;
        if (mdl.mag) { mdl.mag.position.y = 0; mdl.mag.visible = true; }
        if (mdl.warhead) { mdl.warhead.visible = true; mdl.warhead.position.z = -0.6; }
      }
    }
    if (k === 'rocket' && this.reloadT <= 0) mdl.warhead.visible = s.ammo > 0;

    // --- Waffenwechsel ---
    let sw = 0;
    if (this.switchT > 0) {
      const before = this.switchT;
      this.switchT -= dt;
      if (before > 0.22 && this.switchT <= 0.22 && this.pending) {
        this.models[this.current].group.visible = false;
        this.last = this.current;
        this.current = this.pending;
        this.pending = null;
        this.models[this.current].group.visible = true;
        this.applyPose(this.current);
        this.pumpT = 0;
        events.push('switched');
      }
      sw = this.switchT > 0.22 ? 1 - (this.switchT - 0.22) / 0.23 : Math.max(0, this.switchT) / 0.22;
      if (this.switchT <= 0) this.switchT = 0;
    }

    // --- Granate ---
    let nadeLower = 0;
    const n = this.nade;
    if (n.t >= 0) {
      n.t += dt;
      const t = n.t;
      nadeLower = t < 0.15 ? t / 0.15 : t > 0.55 ? Math.max(0, 1 - (t - 0.55) / 0.2) : 1;
      // Pfad der Wurfhand
      let x = -0.17, y = -0.3, z = -0.3, rx = 0;
      if (t < 0.22) { const q = t / 0.22; y = -0.3 + q * 0.2; z = -0.3 + q * 0.12; rx = -q * 0.6; }
      else if (t < 0.36) { const q = (t - 0.22) / 0.14; y = -0.1 + q * 0.07; z = -0.18 - q * 0.32; x = -0.17 + q * 0.07; rx = -0.6 + q * 1.4; }
      else { const q = Math.min(1, (t - 0.36) / 0.3); y = -0.03 - q * 0.35; z = -0.5 + q * 0.1; x = -0.1; rx = 0.8; }
      n.group.position.set(x, y, z);
      n.group.rotation.set(rx, 0.3, 0.2);
      if (!n.released && t >= 0.31) { n.released = true; n.ball.visible = false; events.push('nadeRelease'); }
      if (t > 0.7) { n.t = -1; n.group.visible = false; }
    }

    this.raise = Math.max(0, this.raise - dt * 2.2);

    // Rückstoß-Feder
    const r = this.recoil;
    const kk = 220, dd = 22;
    r.vz += (-kk * r.z - dd * r.vz) * dt; r.z += r.vz * dt;
    r.vrx += (-kk * r.rx - dd * r.vrx) * dt; r.rx += r.vrx * dt;
    r.vry += (-kk * r.ry - dd * r.vry) * dt; r.ry += r.vry * dt;
    this.kick.position.z = r.z * 0.03;
    this.kick.position.y = r.rx * 0.0009;
    this.kick.rotation.x = r.rx * 0.012;
    this.kick.rotation.y = r.ry * 0.01;
    this.kick.rotation.z = roll;

    // Bob + Sway
    const bob = moving * (sprint ? 1.6 : 1);
    const bx = Math.sin(bobPhase) * 0.009 * bob;
    const by = -Math.abs(Math.cos(bobPhase)) * 0.008 * bob;
    const breathe = Math.sin(time * 1.6) * 0.0018;
    this.swayX += (-lookDX * 0.00035 - this.swayX) * Math.min(1, dt * 8);
    this.swayY += (lookDY * 0.00035 - this.swayY) * Math.min(1, dt * 8);
    this.swayX = Math.max(-0.03, Math.min(0.03, this.swayX));
    this.swayY = Math.max(-0.03, Math.min(0.03, this.swayY));
    const sprintDrop = sprint && moving > 0.3 ? 1 : 0;
    this._sd = (this._sd || 0) + (sprintDrop - (this._sd || 0)) * Math.min(1, dt * 7);
    const raiseOff = this.raise * this.raise;
    const down = Math.max(sw, nadeLower * 0.7);
    const B = this.rigBase;
    this.rig.position.set(
      B.x + bx + this.swayX + this._sd * 0.02,
      B.y + by + breathe + this.swayY - lower * 0.06 - raiseOff * 0.35 - this._sd * 0.035 - down * 0.3,
      B.z + lower * 0.04,
    );
    const tiltX = k === 'rocket' ? -tilt * 0.45 : tilt * 0.55;
    if (k === 'rocket') this.rig.position.y -= lower * 0.08;
    this.rig.rotation.set(tiltX + this._sd * -0.25 + raiseOff * 0.8 + down * 0.5, this.swayX * 2 + this._sd * 0.5, tilt * 0.6 + bx * 2 + this._sd * 0.35);

    // Hülsen
    for (const sh of this.shells) {
      if (sh.life <= 0) continue;
      sh.life -= dt;
      sh.v.y -= 6 * dt;
      sh.m.position.addScaledVector(sh.v, dt);
      sh.m.rotation.x += sh.w.x * dt; sh.m.rotation.y += sh.w.y * dt; sh.m.rotation.z += sh.w.z * dt;
      if (sh.life <= 0) sh.m.visible = false;
    }
  }

  setAspect(a) { this.camera.aspect = a; this.camera.updateProjectionMatrix(); }
}
