import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

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

export class Pistol {
  constructor(envMap) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, 16 / 9, 0.01, 10);
    this.scene.add(this.camera);

    // Licht für die Waffe (wird an die Umgebung angepasst)
    this.hemi = new THREE.HemisphereLight(0xb8c4dc, 0x3a2a20, 1.0);
    this.scene.add(this.hemi);
    this.key = new THREE.DirectionalLight(0xffe6c8, 1.4);
    this.key.position.set(-0.5, 1, 0.4);
    this.scene.add(this.key);
    this.rim = new THREE.DirectionalLight(0xff6b35, 0.0);
    this.rim.position.set(1, 0.3, -1);
    this.scene.add(this.rim);
    this.flashLight = new THREE.PointLight(0xffb060, 0, 1.5, 2);
    this.scene.add(this.flashLight);
    this.scene.environment = envMap;
    this.scene.environmentIntensity = 0.35;

    this.rig = new THREE.Group();     // Position im Bild
    this.kick = new THREE.Group();    // Rückstoß
    this.gun = new THREE.Group();
    this.camera.add(this.rig);
    this.rig.add(this.kick);
    this.kick.add(this.gun);
    this.rigBase = new THREE.Vector3(0.12, -0.105, -0.36);
    this.gunRot = new THREE.Euler(0, 0.3, -0.05);
    this.rig.position.copy(this.rigBase);
    this.gun.rotation.copy(this.gunRot);

    const steel = new THREE.MeshStandardMaterial({ color: 0x26282b, metalness: 0.92, roughness: 0.32 });
    const steelLight = new THREE.MeshStandardMaterial({ color: 0x55585c, metalness: 0.95, roughness: 0.22 });
    const poly = new THREE.MeshStandardMaterial({ color: 0x141414, metalness: 0.05, roughness: 0.78 });
    const grip = new THREE.MeshStandardMaterial({ color: 0x151515, metalness: 0.0, roughness: 0.9, bumpMap: stippleTexture(), bumpScale: 1.2 });
    const glove = new THREE.MeshStandardMaterial({ color: 0x1c1a18, metalness: 0.05, roughness: 0.55 });
    const knuckle = new THREE.MeshStandardMaterial({ color: 0x2a2724, metalness: 0.05, roughness: 0.7 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x2f3324, metalness: 0.0, roughness: 0.95 });
    const dot = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x8aff5a, emissiveIntensity: 3 });
    const brass = new THREE.MeshStandardMaterial({ color: 0xc9a046, metalness: 1, roughness: 0.3 });
    this.mats = [steel, steelLight, poly, grip, glove, knuckle, sleeve];

    const add = (geo, mat, x, y, z, parent = this.gun) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      parent.add(m);
      return m;
    };

    // --- Schlitten (beweglich) ---
    this.slide = new THREE.Group();
    this.gun.add(this.slide);
    add(new RoundedBoxGeometry(0.03, 0.032, 0.192, 3, 0.004), steel, 0, 0, 0, this.slide);
    // Fräsungen hinten
    for (let i = 0; i < 7; i++) {
      add(new THREE.BoxGeometry(0.0315, 0.022, 0.0025), steelLight, 0, -0.002, 0.055 + i * 0.0055, this.slide);
    }
    // Auswurffenster
    add(new THREE.BoxGeometry(0.004, 0.012, 0.034), new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6, metalness: 0.5 }), 0.0135, 0.007, -0.012, this.slide);
    add(new THREE.BoxGeometry(0.0045, 0.0105, 0.028), steelLight, 0.0128, 0.007, -0.012, this.slide);
    // Visier
    add(new THREE.BoxGeometry(0.005, 0.007, 0.008), steel, 0, 0.019, -0.085, this.slide);
    add(new THREE.SphereGeometry(0.0013, 8, 8), dot, 0, 0.0205, -0.0805, this.slide);
    const rs = add(new THREE.BoxGeometry(0.024, 0.008, 0.008), steel, 0, 0.0195, 0.086, this.slide);
    void rs;
    add(new THREE.BoxGeometry(0.006, 0.0085, 0.0085), new THREE.MeshStandardMaterial({ color: 0x000000 }), 0, 0.021, 0.086, this.slide);
    add(new THREE.SphereGeometry(0.0012, 8, 8), dot, -0.0062, 0.0215, 0.0818, this.slide);
    add(new THREE.SphereGeometry(0.0012, 8, 8), dot, 0.0062, 0.0215, 0.0818, this.slide);
    // Lauf / Mündung
    const muzzle = add(new THREE.CylinderGeometry(0.0072, 0.0072, 0.012, 16), steelLight, 0, 0.002, -0.097, this.slide);
    muzzle.rotation.x = Math.PI / 2;
    const bore = add(new THREE.CircleGeometry(0.0046, 16), new THREE.MeshBasicMaterial({ color: 0x000000 }), 0, 0.002, -0.1032, this.slide);
    bore.rotation.y = Math.PI;

    // --- Rahmen ---
    add(new RoundedBoxGeometry(0.027, 0.02, 0.17, 2, 0.003), poly, 0, -0.024, -0.008);
    add(new THREE.BoxGeometry(0.02, 0.006, 0.05), poly, 0, -0.036, -0.055); // Schiene
    // Abzugsbügel
    const tg = add(new THREE.TorusGeometry(0.019, 0.0035, 8, 20, Math.PI), poly, 0, -0.035, 0.012);
    tg.rotation.set(Math.PI, Math.PI / 2, 0);
    tg.scale.set(1, 1.15, 1);
    this.trigger = add(new THREE.BoxGeometry(0.006, 0.018, 0.005), steel, 0, -0.04, 0.012);
    this.trigger.rotation.x = 0.25;
    // Griff
    const gr = add(new RoundedBoxGeometry(0.031, 0.115, 0.052, 3, 0.008), grip, 0, -0.082, 0.07);
    gr.rotation.x = 0.28;
    const mag = add(new RoundedBoxGeometry(0.033, 0.012, 0.054, 2, 0.003), poly, 0, -0.142, 0.087);
    mag.rotation.x = 0.28;
    this.mag = new THREE.Group();
    this.gun.add(this.mag);
    this.mag.add(mag);
    this.magBase = this.mag.position.clone();
    // Hahn
    add(new THREE.BoxGeometry(0.008, 0.012, 0.01), steel, 0, 0.004, 0.1);

    // --- Hand (Handschuh) ---
    this.hand = new THREE.Group();
    this.gun.add(this.hand);
    const palm = add(new RoundedBoxGeometry(0.06, 0.1, 0.07, 3, 0.02), glove, 0.004, -0.088, 0.085, this.hand);
    palm.rotation.x = 0.28;
    // Finger um den Griff
    for (let i = 0; i < 3; i++) {
      const fg = new THREE.Group();
      fg.position.set(0, -0.058 - i * 0.022, 0.044 - i * 0.006);
      fg.rotation.x = 0.28;
      this.hand.add(fg);
      const f1 = add(new THREE.CapsuleGeometry(0.0105, 0.03, 4, 10), glove, -0.018, 0, -0.005, fg);
      f1.rotation.z = Math.PI / 2;
      f1.rotation.y = 0.35;
      const f2 = add(new THREE.CapsuleGeometry(0.0098, 0.018, 4, 10), knuckle, 0.008, 0, -0.022, fg);
      f2.rotation.x = Math.PI / 2;
      const f3 = add(new THREE.CapsuleGeometry(0.0095, 0.02, 4, 10), glove, 0.024, 0, -0.01, fg);
      f3.rotation.z = Math.PI / 2;
      f3.rotation.y = -0.6;
    }
    // Zeigefinger am Abzug
    const idx = add(new THREE.CapsuleGeometry(0.0095, 0.04, 4, 10), glove, 0.017, -0.036, 0.022, this.hand);
    idx.rotation.x = Math.PI / 2 - 0.25;
    idx.rotation.z = -0.15;
    // Daumen links am Rahmen
    const th = add(new THREE.CapsuleGeometry(0.011, 0.045, 4, 10), glove, -0.02, -0.02, 0.045, this.hand);
    th.rotation.x = Math.PI / 2 + 0.25;
    th.rotation.z = 0.2;
    // Unterarm/Ärmel
    const wrist = add(new THREE.CylinderGeometry(0.03, 0.033, 0.06, 14), glove, 0.01, -0.14, 0.13, this.hand);
    wrist.rotation.x = 1.0;
    const arm = add(new THREE.CylinderGeometry(0.038, 0.05, 0.36, 16), sleeve, 0.03, -0.2, 0.32, this.hand);
    arm.rotation.x = 1.05;
    arm.rotation.z = -0.12;
    const cuff = add(new THREE.TorusGeometry(0.036, 0.008, 8, 18), sleeve, 0.012, -0.152, 0.152, this.hand);
    cuff.rotation.x = 1.05 + Math.PI / 2;

    this.gun.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

    // --- Mündungsfeuer ---
    const ft = flashTexture();
    const fm = new THREE.MeshBasicMaterial({ map: ft, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffffff });
    fm.opacity = 0.85;
    this.flash = new THREE.Group();
    this.flash.position.set(0, 0.002, -0.112);
    this.slide.add(this.flash);
    const p1 = new THREE.Mesh(new THREE.PlaneGeometry(0.048, 0.048), fm);
    const p2 = new THREE.Mesh(new THREE.PlaneGeometry(0.022, 0.075), fm);
    p2.rotation.x = Math.PI / 2; p2.position.z = -0.028;
    const p3 = new THREE.Mesh(new THREE.PlaneGeometry(0.022, 0.075), fm);
    p3.rotation.set(Math.PI / 2, 0, Math.PI / 2); p3.position.z = -0.028;
    this.flash.add(p1, p2, p3);
    this.flash.visible = false;
    this.flashMat = fm;

    // Hülsen
    this.shells = [];
    const sg = new THREE.CylinderGeometry(0.0045, 0.0045, 0.019, 10);
    for (let i = 0; i < 6; i++) {
      const s = new THREE.Mesh(sg, brass);
      s.visible = false;
      this.camera.add(s);
      this.shells.push({ m: s, v: new THREE.Vector3(), w: new THREE.Vector3(), life: 0 });
    }
    this.shellI = 0;

    // Zustand
    this.magSize = 12;
    this.ammo = this.magSize;
    this.cooldown = 0;
    this.reloadT = 0;
    this.reloadDur = 1.25;
    this.flashT = 0;
    this.slideT = 0;
    this.recoil = { z: 0, vz: 0, rx: 0, vrx: 0, ry: 0, vry: 0 };
    this.swayX = 0; this.swayY = 0;
    this.raise = 1;
    this.damage = 34;
    this.spread = 0.006;
  }

  get reloading() { return this.reloadT > 0; }

  canFire() { return this.cooldown <= 0 && this.reloadT <= 0 && this.raise <= 0.01; }

  fire() {
    if (this.cooldown > 0 || this.reloadT > 0 || this.raise > 0.3) return 'wait';
    if (this.ammo <= 0) { this.cooldown = 0.25; return 'empty'; }
    this.ammo--;
    this.cooldown = 0.15;
    this.flashT = 0.055;
    this.slideT = 0.085;
    this.flash.visible = true;
    this.flash.rotation.z = Math.random() * Math.PI;
    const s = 0.85 + Math.random() * 0.4;
    this.flash.scale.set(s, s, s);
    const r = this.recoil;
    r.vz += 2.2; r.vrx += 26; r.vry += (Math.random() - 0.5) * 6;
    this.ejectShell();
    return 'shot';
  }

  startReload() {
    if (this.reloadT > 0 || this.ammo >= this.magSize) return false;
    this.reloadT = this.reloadDur;
    return true;
  }

  ejectShell() {
    const s = this.shells[this.shellI];
    this.shellI = (this.shellI + 1) % this.shells.length;
    s.m.visible = true;
    // Startpunkt: Auswurffenster in Kamerakoordinaten
    const p = new THREE.Vector3(0.016, 0.01, -0.012);
    this.slide.localToWorld(p);
    this.camera.worldToLocal(p);
    s.m.position.copy(p);
    s.v.set(0.9 + Math.random() * 0.4, 0.9 + Math.random() * 0.5, 0.15 + Math.random() * 0.2);
    s.w.set(Math.random() * 30, Math.random() * 30, 20);
    s.life = 0.6;
  }

  update(dt, { moving = 0, sprint = false, bobPhase = 0, lookDX = 0, lookDY = 0, light = 1, time = 0 }) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    // Licht an Umgebung koppeln
    const L = Math.min(2.4, 0.6 + light * 0.8);
    this.hemi.intensity = 0.5 * L;
    this.key.intensity = 1.1 * L;
    this.scene.environmentIntensity = 0.25 + 0.15 * L;

    // Mündungsfeuer
    if (this.flashT > 0) {
      this.flashT -= dt;
      this.flashLight.intensity = 3;
      this.flashLight.position.set(this.rig.position.x, this.rig.position.y + 0.05, this.rig.position.z - 0.15);
      if (this.flashT <= 0) { this.flash.visible = false; this.flashLight.intensity = 0; }
    }
    // Schlitten
    if (this.slideT > 0) {
      this.slideT -= dt;
      const k = this.slideT / 0.085;
      this.slide.position.z = Math.sin(k * Math.PI) * 0.03;
    } else if (this.ammo === 0 && this.reloadT <= 0) {
      this.slide.position.z = 0.028; // Schlitten fängt hinten
    } else if (this.reloadT <= 0) this.slide.position.z = 0;

    // Rückstoß als Feder
    const r = this.recoil;
    const k = 220, d = 22;
    r.vz += (-k * r.z - d * r.vz) * dt; r.z += r.vz * dt;
    r.vrx += (-k * r.rx - d * r.vrx) * dt; r.rx += r.vrx * dt;
    r.vry += (-k * r.ry - d * r.vry) * dt; r.ry += r.vry * dt;
    this.kick.position.z = r.z * 0.03;
    this.kick.position.y = r.rx * 0.0009;
    this.kick.rotation.x = r.rx * 0.012;
    this.kick.rotation.y = r.ry * 0.01;

    // Nachladen
    let rl = 0, tilt = 0;
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      const p = 1 - this.reloadT / this.reloadDur;
      rl = p < 0.2 ? p / 0.2 : p > 0.85 ? (1 - p) / 0.15 : 1;
      tilt = rl;
      // Magazin raus/rein
      if (p > 0.18 && p < 0.62) {
        const q = (p - 0.18) / 0.44;
        this.mag.position.y = -Math.min(1, q * 2.5) * 0.25;
        this.mag.visible = q < 0.4 || q > 0.75;
        if (q > 0.75) this.mag.position.y = -(1 - (q - 0.75) / 0.25) * 0.08;
      } else {
        this.mag.position.y = 0;
        this.mag.visible = true;
      }
      // Schlitten durchladen
      if (p > 0.72 && p < 0.86) this.slide.position.z = Math.sin(((p - 0.72) / 0.14) * Math.PI) * 0.032;
      if (this.reloadT <= 0) { this.ammo = this.magSize; this.reloadT = 0; this.mag.position.y = 0; this.mag.visible = true; }
    }

    // Hochziehen beim Start
    this.raise = Math.max(0, this.raise - dt * 2.2);

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
    this.rig.position.set(
      this.rigBase.x + bx + this.swayX + this._sd * 0.02,
      this.rigBase.y + by + breathe + this.swayY - rl * 0.06 - raiseOff * 0.35 - this._sd * 0.035,
      this.rigBase.z + rl * 0.04,
    );
    this.rig.rotation.set(tilt * 0.55 + this._sd * -0.25 + raiseOff * 0.8, this.swayX * 2 + this._sd * 0.5, tilt * 0.6 + bx * 2 + this._sd * 0.35);

    // Hülsen
    for (const s of this.shells) {
      if (s.life <= 0) continue;
      s.life -= dt;
      s.v.y -= 6 * dt;
      s.m.position.addScaledVector(s.v, dt);
      s.m.rotation.x += s.w.x * dt; s.m.rotation.y += s.w.y * dt; s.m.rotation.z += s.w.z * dt;
      if (s.life <= 0) s.m.visible = false;
    }
  }

  setAspect(a) { this.camera.aspect = a; this.camera.updateProjectionMatrix(); }
}
