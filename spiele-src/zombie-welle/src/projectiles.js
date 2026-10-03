import * as THREE from 'three';

// Raketen und Granaten
export class Projectiles {
  constructor(game) {
    this.game = game;
    const scene = game.scene;
    this.ray = new THREE.Raycaster();
    this._v = new THREE.Vector3();
    this._n = new THREE.Vector3();
    this._c = new THREE.Color();

    // --- Raketen ---
    const body = new THREE.MeshStandardMaterial({ color: 0x5a5f4a, metalness: 0.6, roughness: 0.35 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xffc070, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    this.rockets = [];
    for (let i = 0; i < 4; i++) {
      const g = new THREE.Group();
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.32, 14), body); cyl.rotation.x = Math.PI / 2; g.add(cyl);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 14), body); cone.rotation.x = -Math.PI / 2; cone.position.z = -0.23; g.add(cone);
      for (let k = 0; k < 4; k++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.07, 0.08), body);
        fin.position.set(Math.cos(k * Math.PI / 2) * 0.05, Math.sin(k * Math.PI / 2) * 0.05, 0.13);
        fin.rotation.z = k * Math.PI / 2;
        g.add(fin);
      }
      const ex = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), glow); ex.position.z = 0.2; ex.scale.set(1, 1, 2.2); g.add(ex);
      g.visible = false;
      g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
      scene.add(g);
      this.rockets.push({ g, ex, active: false, vel: new THREE.Vector3(), life: 0 });
    }
    this.rocketLight = new THREE.PointLight(0xff9a40, 0, 9, 1.6);
    scene.add(this.rocketLight);

    // --- Granaten ---
    const nm = new THREE.MeshStandardMaterial({ color: 0x3a4628, metalness: 0.3, roughness: 0.5 });
    const blink = new THREE.MeshBasicMaterial({ color: 0xff3010 });
    this.nades = [];
    for (let i = 0; i < 4; i++) {
      const g = new THREE.Group();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 10), nm); b.scale.set(1, 1.2, 1); b.castShadow = true; g.add(b);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.035, 10), nm); top.position.y = 0.08; g.add(top);
      const led = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), blink); led.position.y = 0.1; g.add(led);
      g.visible = false;
      scene.add(g);
      this.nades.push({ g, led, active: false, vel: new THREE.Vector3(), spin: new THREE.Vector3(), fuse: 0, bounces: 0, rest: false });
    }
    this.timers = [];
  }

  reset() {
    for (const r of this.rockets) { r.active = false; r.g.visible = false; }
    for (const n of this.nades) { n.active = false; n.g.visible = false; }
    this.rocketLight.intensity = 0;
    this.timers.length = 0;
  }

  // verzögerte Aktion (z. B. Kettenreaktion bei Fässern)
  later(t, fn) { this.timers.push({ t, fn }); }

  fireRocket(origin, dir) {
    const r = this.rockets.find((q) => !q.active) || this.rockets[0];
    r.active = true;
    r.life = 4;
    r.g.visible = true;
    r.g.position.copy(origin);
    r.vel.copy(dir).multiplyScalar(30);
    r.g.lookAt(this._v.copy(origin).sub(dir));
    r.smokeT = 0;
    return r;
  }

  throwGrenade(origin, vel) {
    const n = this.nades.find((q) => !q.active) || this.nades[0];
    n.active = true;
    n.fuse = 2.1;
    n.rest = false;
    n.bounces = 0;
    n.g.visible = true;
    n.g.position.copy(origin);
    n.vel.copy(vel);
    n.spin.set(Math.random() * 12, Math.random() * 12, Math.random() * 12);
    return n;
  }

  update(dt) {
    const game = this.game, fx = game.fx, lvl = game.level;
    // Zeitgeber
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const tm = this.timers[i];
      tm.t -= dt;
      if (tm.t <= 0) { this.timers.splice(i, 1); tm.fn(); }
    }

    // Raketen
    let lit = null;
    for (const r of this.rockets) {
      if (!r.active) continue;
      r.life -= dt;
      const p = r.g.position;
      const step = r.vel.length() * dt;
      const dir = this._v.copy(r.vel).normalize();
      // Wand / Boden / Decke
      this.ray.set(p, dir);
      this.ray.far = step + 0.15;
      const hit = this.ray.intersectObjects(lvl.colliders, false)[0];
      // Zombies
      const zh = game.zombies.raycast(p, dir, step + 0.3);
      if (zh && (!hit || zh.t < hit.distance)) {
        this.detonateRocket(r, zh.point, dir.clone().negate());
        continue;
      }
      if (hit) {
        const n = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld) : dir.clone().negate();
        if (hit.object.userData.barrel) game.damageBarrel(hit.object.userData.barrel, 999);
        this.detonateRocket(r, hit.point.clone().addScaledVector(n, 0.2), n);
        continue;
      }
      if (r.life <= 0) { this.detonateRocket(r, p.clone(), null); continue; }
      p.addScaledVector(r.vel, dt);
      r.ex.scale.set(1 + Math.random() * 0.4, 1 + Math.random() * 0.4, 2 + Math.random());
      // Rauchspur + Funken
      r.smokeT -= dt;
      const tail = this._n.copy(p).addScaledVector(dir, -0.3);
      if (r.smokeT <= 0) {
        r.smokeT = 0.012;
        const g = 0.25 + Math.random() * 0.15;
        this._c.setRGB(g, g, g * 0.95);
        fx.smoke.emit(tail, new THREE.Vector3((Math.random() - 0.5) * 0.4, (Math.random() - 0.3) * 0.3, (Math.random() - 0.5) * 0.4), 0.18 + Math.random() * 0.12, 1.1 + Math.random() * 0.8, this._c, 0.9);
        this._c.setRGB(2.6, 1.2, 0.35);
        fx.fire.emit(tail, new THREE.Vector3((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6).addScaledVector(dir, -3), 0.14, 0.12, this._c, 0.6);
      }
      lit = p;
    }
    if (lit) { this.rocketLight.position.copy(lit); this.rocketLight.intensity = 14 + Math.random() * 4; }
    else this.rocketLight.intensity = 0;

    // Granaten
    for (const n of this.nades) {
      if (!n.active) continue;
      n.fuse -= dt;
      const p = n.g.position;
      n.led.visible = Math.sin(n.fuse * (n.fuse < 0.8 ? 40 : 14)) > 0;
      if (n.fuse <= 0) {
        n.active = false;
        n.g.visible = false;
        game.explode(p.clone().setY(Math.max(p.y, 0.25)), { radius: 5.2, damage: 220, source: 'grenade' });
        continue;
      }
      if (n.rest) continue;
      n.vel.y -= 16 * dt;
      const step = n.vel.length() * dt;
      if (step > 1e-5) {
        const dir = this._v.copy(n.vel).normalize();
        this.ray.set(p, dir);
        this.ray.far = step + 0.07;
        const hit = this.ray.intersectObjects(lvl.colliders, false)[0];
        if (hit && hit.face) {
          const nrm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
          p.copy(hit.point).addScaledVector(nrm, 0.07);
          const vn = n.vel.dot(nrm);
          n.vel.addScaledVector(nrm, -1.45 * vn).multiplyScalar(0.62);
          n.spin.multiplyScalar(0.6);
          if (Math.abs(vn) > 1.2) game.audio.grenadeBounce(p, Math.abs(vn) / 8);
          if (nrm.y > 0.6 && n.vel.length() < 0.8) { n.rest = true; n.vel.set(0, 0, 0); }
        } else p.addScaledVector(n.vel, dt);
      }
      // Zombies: abprallen
      for (const z of game.zombies.alive) {
        const dx = p.x - z.root.position.x, dz = p.z - z.root.position.z;
        if (dx * dx + dz * dz < 0.25 && p.y < 1.8) { n.vel.x *= -0.3; n.vel.z *= -0.3; }
      }
      if (p.y < 0.07) { p.y = 0.07; if (Math.abs(n.vel.y) > 1.2) game.audio.grenadeBounce(p, Math.abs(n.vel.y) / 8); n.vel.y *= -0.38; n.vel.x *= 0.7; n.vel.z *= 0.7; if (n.vel.length() < 0.6) n.rest = true; }
      n.g.rotation.x += n.spin.x * dt; n.g.rotation.y += n.spin.y * dt; n.g.rotation.z += n.spin.z * dt;
    }
  }

  detonateRocket(r, point, nrm) {
    r.active = false;
    r.g.visible = false;
    this.game.explode(point, { radius: 5.8, damage: 270, source: 'rocket', normal: nrm });
  }
}
