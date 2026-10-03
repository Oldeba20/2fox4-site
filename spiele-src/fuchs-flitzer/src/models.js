import * as THREE from 'three';
import { toon, mesh, canvasTex } from './toon.js';

// Fahrer-Definitionen (alle eigene Figuren, kein fremdes IP)
export const RACERS = [
  { id: 'fuchs', name: 'Fuchs', kart: 0xff6b35, kart2: 0x1d1410, fur: 0xff6b35, belly: 0xfff5ea, accent: 0x1d1410 },
  { id: 'hase', name: 'Hase', kart: 0x3d7cff, kart2: 0xffffff, fur: 0xd9d4cc, belly: 0xffffff, accent: 0xff9ec2 },
  { id: 'baer', name: 'Bär', kart: 0x5bc85b, kart2: 0x2d6a2d, fur: 0x8a5a32, belly: 0xd9b38a, accent: 0x3b2414 },
  { id: 'waschbaer', name: 'Waschbär', kart: 0x8f5cff, kart2: 0x2b1e4a, fur: 0x8d8f99, belly: 0xe8e8ee, accent: 0x26262e },
  { id: 'eule', name: 'Eule', kart: 0xffd23a, kart2: 0x7a4b10, fur: 0x9a6b3d, belly: 0xf1dfb8, accent: 0xffb000 },
  { id: 'igel', name: 'Igel', kart: 0xe84a8a, kart2: 0x5a1430, fur: 0x6b4a33, belly: 0xf0d6b3, accent: 0x3a2618 },
];

const BLACK = 0x1d1410;

function eye(x, y, z, s = 0.09) {
  const g = new THREE.Group();
  const w = new THREE.Mesh(new THREE.SphereGeometry(s, 12, 10), toon(0xffffff));
  const p = new THREE.Mesh(new THREE.SphereGeometry(s * 0.58, 10, 8), new THREE.MeshBasicMaterial({ color: BLACK }));
  p.position.set(0, 0, s * 0.55);
  const h = new THREE.Mesh(new THREE.SphereGeometry(s * 0.2, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  h.position.set(s * 0.18, s * 0.2, s * 0.95);
  g.add(w, p, h);
  g.position.set(x, y, z);
  return g;
}

function sphere(r, col, sx = 1, sy = 1, sz = 1, thick = 0.02) {
  const m = mesh(new THREE.SphereGeometry(r, 18, 14), toon(col), { thick });
  m.scale.set(sx, sy, sz);
  return m;
}

// ---------------- Kopf je Tier ----------------
export function head(def) {
  const g = new THREE.Group();
  const H = sphere(0.36, def.fur, 1, 0.95, 1);
  g.add(H);
  const add = (o, x, y, z) => { o.position.set(x, y, z); g.add(o); return o; };
  switch (def.id) {
    case 'fuchs': {
      // Schnauze + Wangen
      add(sphere(0.2, def.belly, 1, 0.75, 1.35), 0, -0.1, 0.27);
      add(sphere(0.07, BLACK), 0, -0.04, 0.53);
      for (const s of [-1, 1]) {
        const ear = mesh(new THREE.ConeGeometry(0.15, 0.36, 4), toon(def.fur), { thick: 0.02 });
        ear.rotation.z = -s * 0.25; ear.rotation.y = Math.PI / 4;
        add(ear, s * 0.2, 0.38, -0.02);
        const inner = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 4), toon(0xffd9bf));
        inner.rotation.copy(ear.rotation);
        add(inner, s * 0.2, 0.36, 0.05);
        const tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.12, 4), toon(BLACK));
        tip.rotation.copy(ear.rotation);
        add(tip, s * 0.235, 0.52, -0.02);
        add(sphere(0.13, def.belly, 1, 0.8, 0.7, 0.0), s * 0.22, -0.13, 0.17);
        add(eye(s * 0.13, 0.06, 0.28), 0, 0, 0);
      }
      // 2FOX4-Cap
      const cap = mesh(new THREE.SphereGeometry(0.37, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2.4), toon(BLACK), { thick: 0.02 });
      add(cap, 0, 0.06, -0.02);
      const visor = mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.03, 16, 1, false, -Math.PI / 2, Math.PI), toon(0xff6b35), { thick: 0.015 });
      visor.rotation.y = Math.PI;
      add(visor, 0, 0.18, 0.22);
      break;
    }
    case 'hase': {
      add(sphere(0.17, def.belly, 1.1, 0.8, 1), 0, -0.12, 0.24);
      add(sphere(0.055, def.accent), 0, -0.05, 0.4);
      for (const s of [-1, 1]) {
        const ear = sphere(0.1, def.fur, 0.9, 3.4, 0.6);
        ear.rotation.z = -s * 0.18;
        add(ear, s * 0.13, 0.62, -0.05);
        const inner = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), toon(def.accent));
        inner.scale.set(0.9, 3.3, 0.5);
        inner.rotation.z = -s * 0.18;
        add(inner, s * 0.13, 0.6, 0.0);
        add(eye(s * 0.13, 0.07, 0.27), 0, 0, 0);
      }
      add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.03), toon(0xffffff)), 0, -0.21, 0.36);
      break;
    }
    case 'baer': {
      add(sphere(0.18, def.belly, 1.1, 0.8, 1), 0, -0.1, 0.26);
      add(sphere(0.07, BLACK), 0, -0.03, 0.43);
      for (const s of [-1, 1]) {
        add(sphere(0.12, def.fur), s * 0.27, 0.27, -0.02);
        add(sphere(0.06, def.belly, 1, 1, 0.5, 0), s * 0.28, 0.27, 0.06);
        add(eye(s * 0.13, 0.08, 0.28, 0.075), 0, 0, 0);
      }
      H.scale.set(1.12, 1.0, 1.0);
      break;
    }
    case 'waschbaer': {
      add(sphere(0.17, def.belly, 1, 0.75, 1.3), 0, -0.1, 0.26);
      add(sphere(0.06, BLACK), 0, -0.05, 0.47);
      const mask = sphere(0.3, def.accent, 1.25, 0.42, 0.9, 0);
      add(mask, 0, 0.05, 0.1);
      for (const s of [-1, 1]) {
        const ear = mesh(new THREE.ConeGeometry(0.12, 0.2, 6), toon(def.fur), { thick: 0.02 });
        ear.rotation.z = -s * 0.35;
        add(ear, s * 0.24, 0.32, -0.04);
        add(eye(s * 0.14, 0.06, 0.29), 0, 0, 0);
      }
      break;
    }
    case 'eule': {
      H.scale.set(1.15, 1.0, 0.95);
      for (const s of [-1, 1]) {
        add(sphere(0.15, def.belly, 1, 1, 0.45, 0.0), s * 0.15, 0.04, 0.26);
        add(eye(s * 0.15, 0.05, 0.3, 0.12), 0, 0, 0);
        const tuft = mesh(new THREE.ConeGeometry(0.08, 0.26, 5), toon(def.fur), { thick: 0.02 });
        tuft.rotation.z = -s * 0.5;
        add(tuft, s * 0.3, 0.36, -0.02);
      }
      const beak = mesh(new THREE.ConeGeometry(0.06, 0.16, 6), toon(def.accent), { thick: 0.015 });
      beak.rotation.x = Math.PI / 2 + 0.6;
      add(beak, 0, -0.08, 0.37);
      break;
    }
    case 'igel': {
      add(sphere(0.16, def.belly, 0.9, 0.75, 1.5), 0, -0.1, 0.27);
      add(sphere(0.06, BLACK), 0, -0.07, 0.5);
      const spikes = new THREE.Group();
      const sg = new THREE.ConeGeometry(0.07, 0.3, 5);
      for (let k = 0; k < 26; k++) {
        const a = (k / 26) * Math.PI * 2 * 3.1;
        const el = 0.2 + (k / 26) * 1.2;
        const sp = new THREE.Mesh(sg, toon(def.accent));
        const dir = new THREE.Vector3(Math.sin(a) * Math.sin(el), Math.cos(el), -Math.abs(Math.cos(a)) * Math.sin(el) - 0.3).normalize();
        sp.position.copy(dir).multiplyScalar(0.34);
        sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        spikes.add(sp);
      }
      g.add(spikes);
      for (const s of [-1, 1]) add(eye(s * 0.13, 0.05, 0.28), 0, 0, 0);
      break;
    }
  }
  return g;
}

function tail(def) {
  const g = new THREE.Group();
  if (def.id === 'fuchs') {
    const t = sphere(0.18, def.fur, 1, 1, 2.6);
    t.position.set(0, 0, -0.35);
    const tip = sphere(0.13, def.belly, 1, 1, 1.4);
    tip.position.set(0, 0, -0.78);
    g.add(t, tip);
  } else if (def.id === 'waschbaer') {
    for (let k = 0; k < 5; k++) {
      const r = sphere(0.14, k % 2 ? def.accent : def.fur, 1, 1, 0.9);
      r.position.set(0, 0, -0.15 - k * 0.17);
      g.add(r);
    }
  } else if (def.id === 'hase') {
    g.add(sphere(0.12, 0xffffff));
  } else {
    return null;
  }
  return g;
}

// ---------------- Kart ----------------
export function buildKart(def, logoTex) {
  const root = new THREE.Group();     // Position/Yaw
  const body = new THREE.Group();     // Neigung, Hüpfen
  root.add(body);
  const k = toon(def.kart), k2 = toon(def.kart2), dark = toon(0x2a2a30), metal = toon(0xc8ccd4);

  // Chassis-Wanne
  const shape = new THREE.Shape();
  shape.moveTo(-0.75, -1.1); shape.lineTo(0.75, -1.1); shape.lineTo(0.85, 0.2); shape.lineTo(0.55, 1.25); shape.lineTo(-0.55, 1.25); shape.lineTo(-0.85, 0.2); shape.closePath();
  const pan = new THREE.ExtrudeGeometry(shape, { depth: 0.32, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 3 });
  pan.rotateX(Math.PI / 2);
  pan.translate(0, 0.62, 0);
  body.add(mesh(pan, k, { thick: 0.035 }));
  // Nase
  const nose = mesh(new THREE.SphereGeometry(0.5, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), k, { thick: 0.03 });
  nose.scale.set(1.1, 0.55, 0.9);
  nose.position.set(0, 0.38, 1.05);
  body.add(nose);
  // Frontschild mit Startnummer/Logo
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.28), new THREE.MeshBasicMaterial({ map: logoTex, toneMapped: false }));
  plate.position.set(0, 0.52, 1.38);
  plate.rotation.x = -0.5;
  body.add(plate);
  // Seitenkästen
  for (const s of [-1, 1]) {
    const pod = mesh(new THREE.CapsuleGeometry(0.2, 1.2, 4, 10), k2, { thick: 0.025 });
    pod.rotation.x = Math.PI / 2;
    pod.position.set(s * 0.82, 0.42, 0.05);
    body.add(pod);
  }
  // Sitz
  const seat = mesh(new THREE.BoxGeometry(0.7, 0.75, 0.18), k2, { thick: 0.03 });
  seat.position.set(0, 0.85, -0.55);
  seat.rotation.x = -0.15;
  body.add(seat);
  // Heckspoiler
  const wing = mesh(new THREE.BoxGeometry(1.5, 0.08, 0.4), k2, { thick: 0.025 });
  wing.position.set(0, 1.12, -1.05);
  body.add(wing);
  for (const s of [-1, 1]) {
    const st = mesh(new THREE.BoxGeometry(0.06, 0.45, 0.18), dark, { out: false });
    st.position.set(s * 0.45, 0.88, -1.0);
    body.add(st);
    const fin = mesh(new THREE.BoxGeometry(0.06, 0.32, 0.5), k, { thick: 0.02 });
    fin.position.set(s * 0.76, 1.15, -1.05);
    body.add(fin);
  }
  // Auspuff (Flammen-Anker)
  const exhausts = [];
  for (const s of [-1, 1]) {
    const ex = mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.4, 10), metal, { thick: 0.015 });
    ex.rotation.x = Math.PI / 2;
    ex.position.set(s * 0.32, 0.55, -1.25);
    body.add(ex);
    const a = new THREE.Object3D();
    a.position.set(s * 0.32, 0.55, -1.48);
    body.add(a);
    exhausts.push(a);
  }
  // Lenkrad
  const wheelS = mesh(new THREE.TorusGeometry(0.17, 0.035, 6, 16), dark, { out: false });
  wheelS.position.set(0, 1.0, 0.3);
  wheelS.rotation.x = -0.9;
  body.add(wheelS);

  // Räder
  const wheels = [];
  const tyreG = new THREE.CylinderGeometry(0.36, 0.36, 0.38, 18);
  tyreG.rotateZ(Math.PI / 2);
  const hubG = new THREE.CylinderGeometry(0.17, 0.17, 0.4, 10);
  hubG.rotateZ(Math.PI / 2);
  const wpos = [[-0.92, 0.36, 0.78, 1], [0.92, 0.36, 0.78, 1], [-0.98, 0.4, -0.78, 0], [0.98, 0.4, -0.78, 0]];
  for (const [x, y, z, front] of wpos) {
    const steer = new THREE.Group();
    steer.position.set(x, y, z);
    const spin = new THREE.Group();
    const t = mesh(tyreG, dark, { thick: 0.025 });
    if (!front) t.scale.set(1.15, 1.08, 1.08);
    const hub = new THREE.Mesh(hubG, toon(def.kart2 === 0xffffff ? 0xffd23a : 0xffffff));
    if (!front) hub.scale.set(1.12, 1.08, 1.08);
    const bolt = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.3), toon(def.kart));
    spin.add(t, hub, bolt);
    steer.add(spin);
    body.add(steer);
    wheels.push({ steer, spin, front });
  }

  // Fahrer
  const driver = new THREE.Group();
  driver.position.set(0, 0.95, -0.35);
  const torso = sphere(0.32, def.id === 'fuchs' ? 0x1d1410 : def.fur, 1, 1.05, 0.85, 0.025);
  torso.position.y = 0.12;
  driver.add(torso);
  if (def.id === 'fuchs') {
    // Jacke mit 2FOX4-Brust
    const chest = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.12), new THREE.MeshBasicMaterial({ map: logoTex, toneMapped: false, transparent: true }));
    chest.position.set(0, 0.2, 0.27);
    driver.add(chest);
    const scarf = mesh(new THREE.TorusGeometry(0.2, 0.06, 8, 16), toon(0xff6b35), { thick: 0.015 });
    scarf.rotation.x = Math.PI / 2;
    scarf.position.y = 0.36;
    driver.add(scarf);
  } else {
    const bel = sphere(0.22, def.belly, 1, 1.1, 0.6, 0);
    bel.position.set(0, 0.08, 0.15);
    driver.add(bel);
  }
  // Arme zum Lenkrad
  for (const s of [-1, 1]) {
    const arm = mesh(new THREE.CapsuleGeometry(0.075, 0.38, 4, 8), toon(def.id === 'fuchs' ? 0x1d1410 : def.fur), { thick: 0.015 });
    arm.position.set(s * 0.25, 0.12, 0.38);
    arm.rotation.x = 1.15;
    arm.rotation.z = s * 0.3;
    driver.add(arm);
    const paw = sphere(0.08, def.id === 'fuchs' ? 0xfff5ea : def.belly, 1, 1, 1, 0.012);
    paw.position.set(s * 0.16, 0.05, 0.62);
    driver.add(paw);
  }
  const hd = head(def);
  hd.position.set(0, 0.68, 0.02);
  driver.add(hd);
  const tl = tail(def);
  if (tl) { tl.position.set(0, -0.05, -0.3); tl.rotation.x = -0.5; driver.add(tl); }
  body.add(driver);

  // Schild-Blase (Item)
  const shield = new THREE.Mesh(new THREE.SphereGeometry(1.9, 24, 16), new THREE.MeshBasicMaterial({ color: 0x7fe0ff, transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending }));
  shield.position.y = 0.9;
  shield.visible = false;
  root.add(shield);

  // Schatten-Blob (günstig, zusätzlich zu Shadowmap für Lesbarkeit beim Sprung)
  const blob = new THREE.Mesh(new THREE.CircleGeometry(1.4, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.04;
  root.add(blob);

  root.userData = { body, wheels, driver, head: hd, tail: tl, exhausts, shield, blob };
  return root;
}

// ---------------- Item-Kiste ----------------
export function itemBoxTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    const grd = g.createLinearGradient(0, 0, w, h);
    grd.addColorStop(0, '#ffb36b'); grd.addColorStop(0.5, '#ff6b35'); grd.addColorStop(1, '#ffd23a');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 14; g.strokeRect(7, 7, w - 14, h - 14);
    g.fillStyle = '#fff';
    g.font = '900 170px Arial Black, Impact, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('?', w / 2, h / 2 + 8);
    g.font = '900 54px Arial Black, sans-serif'; g.fillStyle = '#1d1410';
    g.fillText('4', w - 40, 46);
  });
}

// Projektile/Fallen
export function buildItemMesh(type) {
  const g = new THREE.Group();
  if (type === 'oel') {
    const m = new THREE.Mesh(new THREE.CircleGeometry(1.6, 20), new THREE.MeshBasicMaterial({ color: 0x1a1430, transparent: true, opacity: 0.88 }));
    m.rotation.x = -Math.PI / 2;
    m.position.y = 0.06;
    const sh = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), new THREE.MeshBasicMaterial({ color: 0x9a7cff, transparent: true, opacity: 0.6 }));
    sh.rotation.x = -Math.PI / 2;
    sh.position.set(0.4, 0.07, 0.3);
    g.add(m, sh);
  } else if (type === 'zapfen') {
    const c = mesh(new THREE.ConeGeometry(0.45, 1.1, 8), toon(0x8a5a32), { thick: 0.03 });
    c.rotation.x = Math.PI;
    c.position.y = 0.7;
    for (let k = 0; k < 3; k++) {
      const r = mesh(new THREE.TorusGeometry(0.32 - k * 0.07, 0.07, 6, 12), toon(0x6b4220), { out: false });
      r.rotation.x = Math.PI / 2;
      r.position.y = 0.95 - k * 0.25;
      g.add(r);
    }
    g.add(c);
  } else if (type === 'rakete') {
    const b = mesh(new THREE.CapsuleGeometry(0.28, 1.1, 6, 12), toon(0xff6b35), { thick: 0.03 });
    b.rotation.x = Math.PI / 2;
    b.position.y = 0.8;
    const nose = mesh(new THREE.SphereGeometry(0.29, 12, 8), toon(0xffffff), { thick: 0.02 });
    nose.position.set(0, 0.8, 0.62);
    for (let k = 0; k < 4; k++) {
      const fin = mesh(new THREE.BoxGeometry(0.05, 0.4, 0.35), toon(0x1d1410), { out: false });
      fin.position.set(Math.cos(k * Math.PI / 2) * 0.3, 0.8 + Math.sin(k * Math.PI / 2) * 0.3, -0.55);
      fin.rotation.z = k * Math.PI / 2;
      g.add(fin);
    }
    // Fuchsohren auf der Rakete
    for (const s of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.1, 0.25, 4), toon(0xff6b35), { thick: 0.015 });
      ear.position.set(s * 0.14, 1.12, 0.35);
      g.add(ear);
    }
    g.add(b, nose);
  }
  return g;
}
