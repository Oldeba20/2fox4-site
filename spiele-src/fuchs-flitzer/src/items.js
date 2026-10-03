import * as THREE from 'three';
import { ROAD_HALF } from './track.js';
import { itemBoxTexture, buildItemMesh } from './models.js';
import { COL } from './fx.js';

export const ITEMS = {
  turbo: { name: 'Turbo-Dose' },
  oel: { name: 'Ölfleck' },
  zapfen: { name: 'Tannenzapfen' },
  schild: { name: 'Schutzblase' },
  rakete: { name: 'Fuchsrakete' },
};

// Wahrscheinlichkeiten nach Platzierung (1 … 6)
const TABLE = [
  { oel: 4, zapfen: 3, schild: 3, turbo: 1 },
  { oel: 3, zapfen: 4, schild: 2, turbo: 2, rakete: 1 },
  { oel: 2, zapfen: 3, schild: 2, turbo: 3, rakete: 2 },
  { oel: 1, zapfen: 3, schild: 1, turbo: 4, rakete: 3 },
  { zapfen: 2, schild: 1, turbo: 5, rakete: 4 },
  { zapfen: 1, turbo: 5, rakete: 5 },
];

export function rollItem(place) {
  const t = TABLE[Math.min(5, Math.max(0, place - 1))];
  let sum = 0; for (const k in t) sum += t[k];
  let r = Math.random() * sum;
  for (const k in t) { r -= t[k]; if (r <= 0) return k; }
  return 'turbo';
}

export class Items {
  constructor(game) {
    this.game = game;
    this.T = game.track;
    this.rows = [];
    this.hazards = []; // {type, idx, lat, x, y, z, mesh, vel, life, owner, target}
    this.boxTex = itemBoxTexture();
    const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const boxMat = new THREE.MeshToonMaterial({ map: this.boxTex, emissive: 0xff6b35, emissiveIntensity: 0.25, transparent: true, opacity: 0.92 });
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(boxGeo), new THREE.LineBasicMaterial({ color: 0xffffff }));
    const glow = new THREE.Mesh(new THREE.BoxGeometry(1.75, 1.75, 1.75), new THREE.MeshBasicMaterial({ color: 0xffb36b, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }));
    for (const idx of game.world.boxRows) {
      const row = { idx, boxes: [] };
      for (const lat of [-4.8, -1.6, 1.6, 4.8]) {
        const p = this.T.point(idx, lat);
        const m = new THREE.Mesh(boxGeo, boxMat);
        m.add(edge.clone());
        m.add(glow.clone());
        m.castShadow = true;
        m.position.set(p.x, p.y + 1.3, p.z);
        m.rotation.set(0.6, Math.random() * 6, 0.5);
        game.scene.add(m);
        row.boxes.push({ mesh: m, lat, x: p.x, y: p.y, z: p.z, alive: true, t: 0, ph: Math.random() * 6 });
      }
      this.rows.push(row);
    }
  }

  update(dt, racing) {
    const g = this.game, T = this.T;
    // Kisten
    for (const row of this.rows) for (const b of row.boxes) {
      if (!b.alive) {
        b.t -= dt;
        if (b.t <= 0) { b.alive = true; b.mesh.visible = true; b.mesh.scale.setScalar(0.01); }
        continue;
      }
      const s = Math.min(1, b.mesh.scale.x + dt * 3);
      b.mesh.scale.setScalar(s);
      b.mesh.rotation.y += dt * 1.4;
      b.mesh.position.y = b.y + 1.3 + Math.sin(g.time * 2.5 + b.ph) * 0.2;
      if (!racing) continue;
      for (const k of g.karts) {
        if (Math.abs(k.x - b.x) > 2.4 || Math.abs(k.z - b.z) > 2.4) continue;
        if (Math.hypot(k.x - b.x, k.z - b.z) < 2.0 && k.y < b.y + 3) {
          b.alive = false; b.mesh.visible = false; b.t = 2.2;
          g.fx.burst(b.x, b.y + 1.3, b.z, COL.box, 18, 6, 0.35);
          if (!k.item && k.rollT <= 0) {
            k.rollT = k.isPlayer ? 1.1 : 0.4;
            k.pending = rollItem(k.place);
            if (k.isPlayer) g.audio.pickup();
          }
          break;
        }
      }
    }
    // Würfeln
    for (const k of g.karts) {
      if (k.rollT > 0) {
        k.rollT -= dt;
        if (k.rollT <= 0) { k.item = k.pending; if (k.ai) k.ai.itemT = 0.8 + Math.random() * 2.5; if (k.isPlayer) { g.audio.itemReady(); g.hud.item(k.item, false); } }
      }
      if (racing && k.input.use && !k.prevUse && k.item && k.spinT <= 0) this.use(k);
      k.prevUse = k.input.use;
    }
    // Gefahren bewegen
    for (let i = this.hazards.length - 1; i >= 0; i--) {
      const h = this.hazards[i];
      h.life -= dt;
      if (h.type === 'zapfen' || h.type === 'rakete') {
        let spd = h.type === 'rakete' ? 52 : 46;
        h.idx = T.idx(h.idx + (spd * dt) / 0.5);
        if (h.type === 'rakete' && h.target && !h.target.finished) {
          const d = T.dist(h.idx | 0, h.target.idx);
          h.lat += THREE.MathUtils.clamp(h.target.lat - h.lat, -1, 1) * dt * (d < 25 ? 14 : 4);
          if (d > T.N * 0.5) { // überholt -> direkt anfliegen
            h.lat = h.target.lat;
          }
        }
        h.lat = THREE.MathUtils.clamp(h.lat, -ROAD_HALF - 2, ROAD_HALF + 2);
        const p = T.point(h.idx, h.lat);
        h.x = p.x; h.z = p.z; h.y = p.y;
        h.mesh.position.set(p.x, p.y + (h.type === 'zapfen' ? Math.abs(Math.sin(g.time * 9)) * 0.6 : 0.2), p.z);
        h.mesh.rotation.y = T.heading(h.idx | 0);
        if (h.type === 'zapfen') h.mesh.rotation.x += dt * 12;
        if (h.type === 'rakete' && Math.random() < 0.9) g.fx.flame(p.x - Math.sin(h.mesh.rotation.y) * 0.9, p.y + 1.0, p.z - Math.cos(h.mesh.rotation.y) * 0.9, 0, 0, false);
      }
      let hit = null;
      for (const k of g.karts) {
        if (h.owner === k && h.safe > 0) continue;
        if (k.air && k.y > h.y + 1.6) continue;
        if (Math.abs(k.x - h.x) < 2 && Math.abs(k.z - h.z) < 2 && Math.hypot(k.x - h.x, k.z - h.z) < (h.type === 'oel' ? 1.8 : 1.7)) { hit = k; break; }
      }
      if (h.safe > 0) h.safe -= dt;
      // Zapfen trifft Öl -> beide weg
      if (!hit && h.type !== 'oel') {
        for (const o of this.hazards) if (o !== h && o.type === 'oel' && Math.hypot(o.x - h.x, o.z - h.z) < 1.6) { o.life = 0; h.life = 0; g.fx.puff(h.x, h.y, h.z, 8, COL.dark); }
      }
      if (hit) {
        if (h.type === 'oel') { if (hit.hit('oel')) g.fx.puff(h.x, h.y, h.z, 6, COL.oil); }
        else { hit.hit(h.type); g.fx.burst(h.x, h.y + 1, h.z, h.type === 'rakete' ? COL.flame2 : COL.star, 30, 9, 0.5); g.fx.puff(h.x, h.y, h.z, 10); if (hit.near()) g.audio.pop(); }
        h.life = 0;
        if (h.owner && h.owner.isPlayer && hit !== h.owner) g.say(['Treffer!', 'Volltreffer!', 'Hab dich!'][Math.random() * 3 | 0]);
      }
      if (h.life <= 0) { g.scene.remove(h.mesh); this.hazards.splice(i, 1); }
    }
  }

  use(k) {
    const g = this.game, T = this.T;
    const it = k.item;
    k.item = null;
    if (k.isPlayer) g.hud.item(null);
    const near = k.near();
    if (it === 'turbo') {
      k.boost(1.5, 1.1);
      if (k.isPlayer) g.say('Turbo!');
    } else if (it === 'schild') {
      k.shieldT = 10;
      if (k.isPlayer || near) g.audio.shield();
    } else if (it === 'oel') {
      const idx = T.idx(k.idx - 6);
      this.spawn('oel', idx, k.lat, k, 30);
      if (near) g.audio.drop();
    } else if (it === 'zapfen') {
      this.spawn('zapfen', T.idx(k.idx + 6), k.lat, k, 6);
      if (near) g.audio.throw();
    } else if (it === 'rakete') {
      // Ziel: nächster Kart vor uns
      let target = null, best = 1e9;
      for (const o of g.karts) {
        if (o === k || o.finished) continue;
        const d = o.progress - k.progress;
        if (d > 0 && d < best) { best = d; target = o; }
      }
      const h = this.spawn('rakete', T.idx(k.idx + 6), k.lat, k, 9);
      h.target = target;
      if (near) g.audio.rocket();
    }
  }

  spawn(type, idx, lat, owner, life) {
    const p = this.T.point(idx, lat);
    const mesh = buildItemMesh(type);
    mesh.position.set(p.x, p.y, p.z);
    mesh.rotation.y = this.T.heading(idx);
    this.game.scene.add(mesh);
    const h = { type, idx, lat, x: p.x, y: p.y, z: p.z, mesh, life, owner, safe: 0.4 };
    this.hazards.push(h);
    return h;
  }

  clear() {
    for (const h of this.hazards) this.game.scene.remove(h.mesh);
    this.hazards.length = 0;
    for (const row of this.rows) for (const b of row.boxes) { b.alive = true; b.mesh.visible = true; }
  }
}
