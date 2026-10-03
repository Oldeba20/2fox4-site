import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

const B = 'CityDeadOutfit';
const HIT_CAPSULES = [
  // [von, nach, Radius (m), Zone]
  ['Head', '+Head', 0.125, 'head'],
  ['Neck', 'Head', 0.075, 'head'],
  ['Hips', 'Spine1', 0.16, 'body'],
  ['Spine1', 'Spine2', 0.16, 'body'],
  ['Spine2', 'Neck', 0.13, 'body'],
  ['LeftUpLeg', 'LeftLeg', 0.11, 'limb'],
  ['RightUpLeg', 'RightLeg', 0.11, 'limb'],
  ['LeftLeg', 'LeftFoot', 0.085, 'limb'],
  ['RightLeg', 'RightFoot', 0.085, 'limb'],
  ['LeftArm', 'LeftForeArm', 0.075, 'limb'],
  ['RightArm', 'RightForeArm', 0.075, 'limb'],
  ['LeftForeArm', 'LeftHand', 0.065, 'limb'],
  ['RightForeArm', 'RightHand', 0.065, 'limb'],
];

// ------------------------------------------------------------
// Vorlage: lädt Modell, bereitet Animationen auf (Root-Motion, Treffzeitpunkte)
// ------------------------------------------------------------
export const WALK_RATE = 2.25; // Lauf-Animationen schneller abspielen (Originale schlurfen sehr langsam)

export class ZombieTemplate {
  constructor(gltf, textures) {
    this.scene = gltf.scene;
    this.clips = {};
    const box = new THREE.Box3().setFromObject(this.scene);
    this.rawHeight = box.max.y - box.min.y;
    this.scale = 1.78 / this.rawHeight;

    // Materialien
    this.mats = {};
    const mk = (t, opts = {}) => new THREE.MeshStandardMaterial({
      map: t.c, normalMap: t.n, roughnessMap: t.orm, metalnessMap: t.orm, aoMap: t.orm,
      roughness: 1, metalness: 1, ...opts,
    });
    this.scene.traverse((o) => {
      if (!o.isMesh) return;
      const n = o.material.name || '';
      if (/Outfit/i.test(n)) o.material = mk(textures.outfit, { name: 'outfit' });
      else o.material = mk(textures.body, { name: 'body' });
      o.castShadow = true;
      o.receiveShadow = true;
    });

    for (const c of gltf.animations) this.clips[c.name] = c;

    // Root-Motion messen und entfernen (Hüfte x/z)
    const hipName = B + 'Hips.position';
    this.speed = {};
    for (const [name, clip] of Object.entries(this.clips)) {
      const tr = clip.tracks.find((t) => t.name === hipName);
      if (!tr) continue;
      const v = tr.values, n = v.length / 3;
      const dz = v[(n - 1) * 3 + 2] - v[2];
      const dx = v[(n - 1) * 3] - v[0];
      this.speed[name] = (Math.hypot(dx, dz) * this.scale) / clip.duration;
      if (name === 'die') continue;
      const x0 = v[0], z0 = v[2];
      for (let i = 0; i < n; i++) { v[i * 3] = x0; v[i * 3 + 2] = z0; }
    }
    // In-Place-Animationen: Laufgeschwindigkeit aus dem Standbein ableiten (kein Fußrutschen)
    {
      const probe = SkeletonUtils.clone(this.scene);
      const mixer = new THREE.AnimationMixer(probe);
      const fl = probe.getObjectByName(B + 'LeftToeBase') || probe.getObjectByName(B + 'LeftFoot');
      const fr = probe.getObjectByName(B + 'RightToeBase') || probe.getObjectByName(B + 'RightFoot');
      const a = new THREE.Vector3(), b = new THREE.Vector3(), pa = new THREE.Vector3(), pb = new THREE.Vector3();
      for (const name of ['walk', 'walk2', 'run']) {
        const clip = this.clips[name];
        if (!clip || this.speed[name] > 0.2) continue;
        const act = mixer.clipAction(clip);
        act.reset().play();
        const N = 90, dtc = clip.duration / N, vs = [];
        for (let i = 0; i <= N; i++) {
          mixer.setTime(i * dtc);
          probe.updateMatrixWorld(true);
          fl.getWorldPosition(a); fr.getWorldPosition(b);
          if (i > 0) {
            const low = a.y < b.y ? [a, pa] : [b, pb];
            vs.push(-(low[0].z - low[1].z) / dtc);
          }
          pa.copy(a); pb.copy(b);
        }
        act.stop();
        vs.sort((x, y) => x - y);
        const med = vs[(vs.length * 0.6) | 0];
        this.speed[name] = Math.max(0.15, Math.min(3.5, med * this.scale));
      }
    }
    // „root“-Knochen nicht animieren
    for (const clip of Object.values(this.clips)) {
      clip.tracks = clip.tracks.filter((t) => !t.name.startsWith('root.'));
    }

    // Treffzeitpunkte der Angriffe automatisch ermitteln (Hand weit vorn)
    this.attackHits = {};
    const probe = SkeletonUtils.clone(this.scene);
    const mixer = new THREE.AnimationMixer(probe);
    const hl = probe.getObjectByName(B + 'LeftHand'), hr = probe.getObjectByName(B + 'RightHand');
    const hips = probe.getObjectByName(B + 'Hips');
    const tmp = new THREE.Vector3(), base = new THREE.Vector3();
    for (const name of ['attack', 'attack2', 'attack3']) {
      const clip = this.clips[name];
      if (!clip) continue;
      const act = mixer.clipAction(clip);
      act.reset().play();
      const samples = [];
      const N = 60;
      for (let i = 0; i <= N; i++) {
        mixer.setTime((clip.duration * i) / N);
        probe.updateMatrixWorld(true);
        hips.getWorldPosition(base);
        const zl = hl.getWorldPosition(tmp).z - base.z;
        const zr = hr.getWorldPosition(tmp).z - base.z;
        samples.push(Math.max(zl, zr));
      }
      act.stop();
      const max = Math.max(...samples), min = Math.min(...samples);
      const thr = min + (max - min) * 0.78;
      const hits = [];
      for (let i = 1; i < N; i++) {
        if (samples[i] >= thr && samples[i] >= samples[i - 1] && samples[i] >= samples[i + 1]) {
          const t = i / N;
          if (!hits.length || t - hits[hits.length - 1] > 0.12) hits.push(t);
        }
      }
      this.attackHits[name] = hits.length ? hits : [0.45];
    }
  }
}

// ------------------------------------------------------------
// Einzelner Zombie
// ------------------------------------------------------------
let ZID = 0;
export class Zombie {
  constructor(tpl) {
    this.id = ++ZID;
    this.tpl = tpl;
    this.root = new THREE.Group();
    this.model = SkeletonUtils.clone(tpl.scene);
    this.model.scale.setScalar(tpl.scale);
    this.root.add(this.model);
    this.meshes = [];
    this.model.traverse((o) => {
      if (o.isMesh) {
        o.material = o.material.clone();
        o.material.emissive = new THREE.Color(0x000000);
        o.frustumCulled = false;
        this.meshes.push(o);
      }
    });
    this.bones = {};
    this.model.traverse((o) => { if (o.isBone) this.bones[o.name.replace(B, '')] = o; });
    this.mixer = new THREE.AnimationMixer(this.model);
    this.actions = {};
    for (const [n, c] of Object.entries(tpl.clips)) this.actions[n] = this.mixer.clipAction(c);
    this.actions.die.setLoop(THREE.LoopOnce, 1);
    this.actions.die.clampWhenFinished = true;
    for (const n of ['attack', 'attack2', 'attack3', 'hit', 'scream']) {
      if (!this.actions[n]) continue;
      this.actions[n].setLoop(THREE.LoopOnce, 1);
      this.actions[n].clampWhenFinished = true;
    }
    // Blob-Schatten
    this.blob = new THREE.Mesh(BLOB_GEO, BLOB_MAT);
    this.blob.rotation.x = -Math.PI / 2;
    this.blob.position.y = 0.02;
    this.blob.renderOrder = 1;
    this.root.add(this.blob);

    this.active = false;
    this.cur = null;
    this._v = new THREE.Vector3();
    this.capsA = HIT_CAPSULES.map(() => new THREE.Vector3());
    this.capsB = HIT_CAPSULES.map(() => new THREE.Vector3());
  }

  spawn(pos, opts) {
    this.active = true;
    this.gibbed = false;
    this.push = 0;
    this.state = 'rise';
    this.dead = false;
    this.root.position.copy(pos);
    this.root.rotation.y = Math.random() * Math.PI * 2;
    this.root.visible = true;
    this.hp = this.maxHp = opts.hp;
    this.speedMul = opts.speed;
    this.dmg = opts.dmg;
    const s = 0.92 + Math.random() * 0.16;
    this.model.scale.setScalar(this.tpl.scale * s);
    this.height = 1.78 * s;
    this.walkClip = Math.random() < 0.3 ? "walk" : "walk2";
    this.flinch = 0; this.flinchSide = 0;
    this.knock = 0; this.knockDir = new THREE.Vector3();
    this.flash = 0;
    this.stagger = 0;
    this.groanT = 1 + Math.random() * 4;
    this.attackCD = 0;
    this.deadT = 0;
    this.sink = 0;
    this.headless = false;
    this.bones.Head.scale.setScalar(1);
    this.pathT = 0;
    this.blob.visible = true;
    this.blob.material = BLOB_MAT;
    this.blob.scale.setScalar(1);
    for (const m of this.meshes) {
      m.material.emissive.setRGB(0, 0, 0);
      m.material.color.setHSL(0, 0, 0.85 + Math.random() * 0.2);
    }
    this.mixer.stopAllAction();
    // „Aufstehen“: Sterbeanimation rückwärts
    const a = this.actions.die;
    a.reset();
    a.setLoop(THREE.LoopOnce, 1);
    a.clampWhenFinished = true;
    a.time = a.getClip().duration;
    a.timeScale = -1.35;
    a.play();
    this.cur = 'die';
    this.mixer.update(0);
  }

  play(name, fade = 0.25, timeScale = 1) {
    const next = this.actions[name];
    if (!next) return;
    if (this.cur === name && next.isRunning()) { next.timeScale = timeScale; return; }
    next.reset();
    next.timeScale = timeScale;
    next.setEffectiveWeight(1);
    next.play();
    const prev = this.actions[this.cur];
    if (prev && prev !== next) prev.crossFadeTo(next, fade, false);
    this.cur = name;
  }

  // Treffer-Kapseln in Weltkoordinaten
  updateCapsules() {
    for (let i = 0; i < HIT_CAPSULES.length; i++) {
      const [a, b] = HIT_CAPSULES[i];
      this.bones[a].getWorldPosition(this.capsA[i]);
      if (b === '+Head') {
        // Schädeldecke: vom Hals über den Kopf hinaus verlängern
        this.bones.Neck.getWorldPosition(this.capsB[i]);
        this.capsB[i].sub(this.capsA[i]).normalize().multiplyScalar(-0.2 * (this.height / 1.78)).add(this.capsA[i]);
      } else this.bones[b].getWorldPosition(this.capsB[i]);
    }
  }

  // Strahl gegen Kapseln -> {t, zone, point}
  raycast(ro, rd, maxT) {
    if (!this.active || this.dead) return null;
    // Grobtest: Kugel um den Körper
    const c = this._v.copy(this.root.position); c.y += 1.0;
    const oc = c.sub(ro);
    const tc = oc.dot(rd);
    if (tc < 0 || tc - 1.4 > maxT) return null;
    if (oc.lengthSq() - tc * tc > 1.5 * 1.5) return null;
    this.updateCapsules();
    let best = null;
    for (let i = 0; i < HIT_CAPSULES.length; i++) {
      const r = HIT_CAPSULES[i][2] * (this.height / 1.78);
      const t = rayCapsule(ro, rd, this.capsA[i], this.capsB[i], r);
      if (t !== null && t < maxT && (!best || t < best.t)) best = { t, zone: HIT_CAPSULES[i][3], bone: HIT_CAPSULES[i][0] };
    }
    if (best) best.point = ro.clone().addScaledVector(rd, best.t);
    return best;
  }
}

// Strahl gegen Kapsel (Segment a-b, Radius r). Liefert t oder null.
const _ab = new THREE.Vector3(), _ao = new THREE.Vector3(), _p = new THREE.Vector3();
function rayCapsule(ro, rd, a, b, r) {
  // Näherung: nächster Punkt zwischen Strahl und Segment
  _ab.subVectors(b, a);
  _ao.subVectors(ro, a);
  const abab = _ab.dot(_ab), abrd = _ab.dot(rd), abao = _ab.dot(_ao), rdao = rd.dot(_ao);
  const denom = abab - abrd * abrd;
  let s = denom > 1e-6 ? (abab * -rdao + abrd * abao) / denom : 0; // Parameter auf dem Strahl
  let u = abab > 1e-6 ? (abao + s * abrd) / abab : 0;              // Parameter auf dem Segment
  u = Math.max(0, Math.min(1, u));
  // mit geklemmtem u neu projizieren
  _p.copy(a).addScaledVector(_ab, u);
  s = Math.max(0, _p.clone().sub(ro).dot(rd));
  const q = ro.clone().addScaledVector(rd, s);
  const d = q.distanceTo(_p);
  if (d > r) return null;
  return Math.max(0, s - Math.sqrt(Math.max(0, r * r - d * d)));
}

function makeBlobTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  gr.addColorStop(0, 'rgba(0,0,0,0.75)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.4)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
const BLOB_GEO = new THREE.PlaneGeometry(1.3, 1.3);
const BLOB_MAT = new THREE.MeshBasicMaterial({ map: makeBlobTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });

// ------------------------------------------------------------
// Verwaltung: Pool, KI, Wellen
// ------------------------------------------------------------
export class ZombieManager {
  constructor(game, tpl, poolSize = 18) {
    this.game = game;
    this.tpl = tpl;
    this.pool = [];
    for (let i = 0; i < poolSize; i++) {
      const z = new Zombie(tpl);
      z.root.visible = false;
      game.scene.add(z.root);
      this.pool.push(z);
    }
    this._d = new THREE.Vector3();
    this._f = new THREE.Vector3();
    this._s = new THREE.Vector3();
  }

  get alive() { return this.pool.filter((z) => z.active && !z.dead); }

  spawn(pos, opts) {
    let z = this.pool.find((q) => !q.active);
    if (!z) {
      // älteste Leiche recyceln
      const dead = this.pool.filter((q) => q.dead).sort((a, b) => b.deadT - a.deadT)[0];
      if (!dead) return null;
      z = dead;
    }
    z.spawn(pos, opts);
    this.game.fx.spawnPortal(pos);
    this.game.audio.roar(pos.clone().setY(1.5));
    return z;
  }

  reset() {
    for (const z of this.pool) { z.active = false; z.root.visible = false; z.mixer.stopAllAction(); }
  }

  damage(z, amount, zone, point, dir, push = 0, gibIfKill = false) {
    if (z.dead) return false;
    z.hp -= amount;
    z.flash = 1;
    const g = this.game;
    if (z.hp <= 0) {
      this.kill(z, gibIfKill && g.fx.blood ? 'gib' : zone, point, dir, push);
      return true;
    }
    if (push > 0) { z.knock = push * 0.6; z.knockDir = dir.clone().setY(0).normalize(); }
    // Zucken + kurz stolpern
    z.flinch = Math.min(1.2, z.flinch + (zone === 'head' ? 1.1 : 0.7));
    z.flinchSide = (Math.random() - 0.5) * 2;
    z.stagger = zone === 'limb' ? 0.35 : 0.25;
    if (Math.random() < 0.25 && z.state === 'chase') {
      z.state = 'hit';
      z.hitT = 0.55;
      z.play('hit', 0.08, 1.6);
    }
    if (Math.random() < 0.5) g.audio.groan(z.root.position.clone().setY(1.6));
    return false;
  }

  kill(z, zone, point, dir, push = 0) {
    const g = this.game;
    z.dead = true;
    z.state = 'dead';
    z.deadT = 0;
    z.flinch = 0;
    z.push = push;
    z.pushDir = dir.clone().setY(0).normalize();
    if (zone === 'gib') {
      // zerfetzt: Modell verschwindet, Brocken fliegen
      z.gibbed = true;
      z.root.visible = false;
      z.pooled = true;
      g.fx.gibExplode(z.root.position.clone().setY(0.95), z.pushDir);
      g.audio.headshot(z.root.position.clone().setY(1));
      g.onKill(z, zone);
      return;
    }
    const a = z.actions.die;
    a.reset();
    a.timeScale = 1.15;
    a.setLoop(THREE.LoopOnce, 1);
    a.clampWhenFinished = true;
    a.play();
    const prev = z.actions[z.cur];
    if (prev && prev !== a) prev.crossFadeTo(a, 0.12, false);
    z.cur = 'die';
    // nach hinten (weg vom Spieler) ausrichten
    z.root.rotation.y = Math.atan2(-dir.x, -dir.z);
    if (zone === 'head' && g.fx.blood) {
      z.headless = true;
      z.bones.Head.scale.setScalar(0.0001);
    }
    g.audio.death(z.root.position.clone().setY(1.4));
    setTimeout(() => z.active && z.dead && g.audio.thud(z.root.position.clone().setY(0.2)), 1300);
    g.onKill(z, zone);
  }

  update(dt, player) {
    const g = this.game;
    const lvl = g.level;
    const pp = player.pos;
    lvl.updateFlow(pp.x, pp.z);
    const alive = this.pool.filter((z) => z.active);

    for (const z of alive) {
      const p = z.root.position;
      z.mixer.update(dt);

      // Treffer-Aufblitzen
      if (z.flash > 0) {
        z.flash = Math.max(0, z.flash - dt * 9);
        for (const m of z.meshes) m.material.emissive.setRGB(z.flash * 0.22, z.flash * 0.02, 0);
      }

      if (z.dead) {
        z.deadT += dt;
        if (z.gibbed) { if (z.deadT > 0.5) { z.active = false; z.gibbed = false; } continue; }
        if (z.push > 0.05) {
          p.addScaledVector(z.pushDir, z.push * dt);
          z.push *= Math.exp(-dt * 4);
          lvl.collide(p, 0.3);
        }
        if (z.deadT > 1.9 && !z.pooled) {
          z.pooled = true;
          const hips = z.bones.Hips.getWorldPosition(this._d);
          g.fx.pool(hips.x, hips.z, z.headless ? 2.2 : 1.5);
        }
        if (z.deadT > 0.4) z.blob.material.opacity = 1;
        if (z.deadT > 28) {
          z.sink += dt * 0.25;
          p.y = -z.sink;
          if (z.sink > 0.6) { z.active = false; z.root.visible = false; z.pooled = false; p.y = 0; }
        }
        continue;
      }
      z.pooled = false;

      // Abstand / Richtung zum Spieler
      const dx = pp.x - p.x, dz = pp.z - p.z;
      const dist = Math.hypot(dx, dz);

      if (z.state === 'rise') {
        const a = z.actions.die;
        if (a.time <= 0.02) {
          z.state = Math.random() < 0.35 ? 'scream' : 'chase';
          if (z.state === 'scream') { z.play('scream', 0.25, 1.4); z.screamT = 1.6; g.audio.roar(p.clone().setY(1.6)); }
          else z.play(z.walkClip, 0.3, z.speedMul * WALK_RATE);
        }
        this.face(z, dx, dz, dt, 2);
        continue;
      }
      if (z.state === 'scream') {
        z.screamT -= dt;
        this.face(z, dx, dz, dt, 3);
        if (z.screamT <= 0) { z.state = 'chase'; z.play(z.walkClip, 0.35, z.speedMul * WALK_RATE); }
        continue;
      }
      if (z.state === 'hit') {
        z.hitT -= dt;
        if (z.hitT <= 0) { z.state = 'chase'; z.play(z.walkClip, 0.25, z.speedMul * WALK_RATE); }
        continue;
      }
      if (z.state === 'attack') {
        this.face(z, dx, dz, dt, 5);
        const a = z.actions[z.attackClip];
        const frac = a.time / a.getClip().duration;
        const hits = this.tpl.attackHits[z.attackClip];
        while (z.nextHit < hits.length && frac >= hits[z.nextHit]) {
          z.nextHit++;
          if (dist < 1.75 + (player.y > 0.4 ? 0.4 : 0) && player.y < 1.3 && !player.dead) g.hurtPlayer(z.dmg, p);
        }
        if (!a.isRunning() || frac > 0.97 || (dist > 2.6 && frac > (hits[hits.length - 1] || 0.5) + 0.05)) {
          z.state = 'chase';
          z.attackCD = 0.4;
          z.play(z.walkClip, 0.3, z.speedMul * WALK_RATE);
        }
        continue;
      }

      // ---- Verfolgen ----
      z.attackCD -= dt;
      if (dist < 1.35 + (player.y > 0.4 ? 0.45 : 0) && z.attackCD <= 0 && !player.dead) {
        z.state = 'attack';
        z.attackClip = ['attack', 'attack2', 'attack3'][(Math.random() * 3) | 0];
        z.nextHit = 0;
        z.play(z.attackClip, 0.15, 1.45);
        g.audio.attackGrunt(p.clone().setY(1.6));
        continue;
      }

      // Richtung: direkt, wenn freie Sicht, sonst Flussfeld
      const dir = this._f;
      const r = 0.42;
      const nx = -dz / (dist || 1), nz = dx / (dist || 1);
      const clear = dist < 24 && lvl.los(p.x + nx * r, p.z + nz * r, pp.x, pp.z) && lvl.los(p.x - nx * r, p.z - nz * r, pp.x, pp.z);
      if (clear) dir.set(dx / dist, 0, dz / dist);
      else lvl.flowDir(p.x, p.z, dir);

      // Abstand zu anderen Zombies
      const sep = this._s.set(0, 0, 0);
      for (const o of alive) {
        if (o === z || o.dead) continue;
        const ox = p.x - o.root.position.x, oz = p.z - o.root.position.z;
        const d2 = ox * ox + oz * oz;
        if (d2 < 0.9 * 0.9 && d2 > 1e-5) { const d = Math.sqrt(d2); sep.x += (ox / d) * (0.9 - d) * 2.2; sep.z += (oz / d) * (0.9 - d) * 2.2; }
      }
      dir.add(sep);
      dir.y = 0;
      if (dir.lengthSq() > 1e-6) dir.normalize();

      this.face(z, dir.x, dir.z, dt, 3.2);
      // Laufen in Blickrichtung (passend zur Animation, kein Rutschen)
      z.stagger = Math.max(0, z.stagger - dt);
      const base = (this.tpl.speed[z.walkClip] || 0.9);
      const sp = base * WALK_RATE * z.speedMul * (z.stagger > 0 ? 0.25 : 1) * (dist < 1.1 ? 0 : 1);
      if (z.knock > 0.05) { p.addScaledVector(z.knockDir, z.knock * dt); z.knock *= Math.exp(-dt * 6); }
      const fwd = z.root.rotation.y;
      p.x += Math.sin(fwd) * sp * dt;
      p.z += Math.cos(fwd) * sp * dt;
      lvl.collide(p, 0.38);
      const act = z.actions[z.walkClip];
      if (act) act.timeScale = WALK_RATE * z.speedMul * (z.stagger > 0 ? 0.4 : 1);

      // Stöhnen
      z.groanT -= dt;
      if (z.groanT <= 0) {
        z.groanT = 3 + Math.random() * 6;
        if (dist < 26) g.audio.groan(p.clone().setY(1.6));
      }
    }

    // Prozedurales Zucken (nach dem Mixer, additiv)
    for (const z of alive) {
      if (z.dead || z.flinch <= 0.001) continue;
      z.flinch *= Math.exp(-dt * 7);
      const f = z.flinch;
      z.bones.Spine2.rotation.x -= f * 0.45;
      z.bones.Spine1.rotation.x -= f * 0.25;
      z.bones.Head.rotation.x -= f * 0.5;
      z.bones.Spine2.rotation.z += f * 0.3 * z.flinchSide;
    }
  }

  face(z, dx, dz, dt, rate) {
    if (Math.abs(dx) + Math.abs(dz) < 1e-5) return;
    const target = Math.atan2(dx, dz);
    let d = target - z.root.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    z.root.rotation.y += d * Math.min(1, rate * dt);
  }

  // Schuss gegen alle Zombies
  raycast(ro, rd, maxT) {
    let best = null;
    for (const z of this.pool) {
      if (!z.active || z.dead) continue;
      const h = z.raycast(ro, rd, maxT);
      if (h && (!best || h.t < best.t)) { best = h; best.z = z; }
    }
    return best;
  }
}
