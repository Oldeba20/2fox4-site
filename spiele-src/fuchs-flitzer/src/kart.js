import * as THREE from 'three';
import { ROAD_HALF, WALL } from './track.js';
import { COL } from './fx.js';

export const LAPS = 3;
const G = 26;
const DRIFT_LV = [1.0, 2.1, 3.4];
const DRIFT_BOOST = [0.65, 1.1, 1.7];
const SPARK = [COL.spark1, COL.spark2, COL.spark3];

const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

export class Kart {
  constructor(game, def, isPlayer, mesh) {
    this.game = game;
    this.T = game.track;
    this.def = def;
    this.isPlayer = isPlayer;
    this.mesh = mesh;
    this.ud = mesh.userData;
    this.input = { gas: 0, brake: 0, steer: 0, drift: false, use: false };
    this.prevDrift = false;
    this.prevUse = false;
    this.ai = isPlayer ? null : { lat: 0, latT: 0, skill: 1, itemT: 0, wob: Math.random() * 10 };
    this.reset(0, 0);
  }

  reset(idx, lat) {
    const p = this.T.point(idx, lat);
    this.x = p.x; this.z = p.z; this.y = p.y;
    this.vy = 0; this.air = false; this.airT = 0;
    this.yaw = this.T.heading(idx);
    this.vh = this.yaw;
    this.spd = 0;
    this.ex = 0; this.ez = 0; // Stoßimpuls
    this.idx = this.T.idx(idx);
    this.lat = lat;
    this.lap = 0;
    this.lapStart = 0;
    this.lapTimes = [];
    this.finished = false;
    this.finishTime = 0;
    this.drift = 0; this.driftCharge = 0; this.driftLv = -1; this.driftAng = 0;
    this.hop = 0; this.hopV = 0;
    this.boostT = 0; this.boostPow = 0;
    this.spinT = 0; this.spinA = 0;
    this.shieldT = 0;
    this.item = null; this.rollT = 0;
    this.stallT = 0;
    this.trick = false; this.trickT = 0;
    this.offroad = false;
    this.place = 1;
    this.squash = 0;
    this.lastWall = 0;
    this.steerVis = 0;
  }

  get progress() { return this.lap * this.T.N + this.idx; }

  boost(t, pow = 1) {
    this.boostT = Math.max(this.boostT, t);
    this.boostPow = Math.max(this.boostT > 0 ? this.boostPow : 0, pow);
    if (this.isPlayer) this.game.audio.boost(pow);
  }

  hit(kind) {
    if (this.spinT > 0) return false;
    if (this.shieldT > 0) {
      this.shieldT = 0;
      this.game.fx.burst(this.x, this.y + 1, this.z, COL.spark1, 26, 8, 0.4);
      if (this.isPlayer || this.near()) this.game.audio.shieldPop();
      return false;
    }
    this.spinT = kind === 'rakete' ? 1.6 : 1.15;
    this.spd *= 0.25;
    this.drift = 0; this.driftCharge = 0; this.driftLv = -1;
    this.boostT = 0;
    if (kind === 'rakete') { this.vy = 9; this.air = true; }
    this.game.fx.stars(this.x, this.y, this.z);
    if (this.isPlayer) { this.game.audio.hit(); this.game.shake(0.5); this.game.say(['Autsch!', 'Uff!', 'Na warte!'][Math.random() * 3 | 0]); }
    else if (this.near()) this.game.audio.hit(0.5);
    return true;
  }

  near() { const p = this.game.player; return Math.hypot(p.x - this.x, p.z - this.z) < 40; }

  // ---------------- KI ----------------
  think(dt) {
    const T = this.T, a = this.ai, g = this.game;
    const inp = this.input;
    a.latT -= dt;
    if (a.latT <= 0) { a.latT = 2 + Math.random() * 3; a.lat = (Math.random() - 0.5) * ROAD_HALF * 1.1; }
    // Kurveninnenseite bevorzugen
    const look = Math.min(140, 14 + this.spd * 1.3);
    const ahead = T.idx(this.idx + Math.round(look / 0.5));
    let curvAhead = 0;
    for (let k = 10; k < 120; k += 10) curvAhead += T.curv[T.idx(this.idx + k)];
    let wantLat = a.lat * 0.75 - Math.sign(curvAhead) * Math.min(3, Math.abs(curvAhead) * 18);
    // Hindernissen ausweichen (Öl, Zapfen, andere Karts direkt vor uns)
    for (const h of g.items.hazards) {
      const d = T.dist(this.idx, h.idx);
      if (d > 2 && d < 30 && Math.abs(h.lat - wantLat) < 2.6) wantLat = h.lat + (h.lat > 0 ? -4 : 4);
    }
    for (const o of g.karts) {
      if (o === this) continue;
      const d = T.dist(this.idx, o.idx);
      if (d > 1 && d < 9 && Math.abs(o.lat - this.lat) < 2.2 && o.spd < this.spd) wantLat = o.lat + (o.lat > this.lat ? -3.2 : 3.2);
    }
    // Item-Kisten ansteuern, wenn leer
    if (!this.item && this.rollT <= 0) {
      for (const row of g.items.rows) {
        const d = T.dist(this.idx, row.idx);
        if (d > 3 && d < 40) {
          let best = null, bd = 1e9;
          for (const b of row.boxes) if (b.alive && Math.abs(b.lat - wantLat) < bd) { bd = Math.abs(b.lat - wantLat); best = b; }
          if (best && bd < 5) wantLat = best.lat;
        }
      }
    }
    wantLat = THREE.MathUtils.clamp(wantLat, -ROAD_HALF + 2, ROAD_HALF - 2);
    // seitlich nachregeln: Ziel = Punkt voraus mit Wunschversatz, plus Korrektur der aktuellen Abweichung
    const tg = T.point(ahead, wantLat);
    const tgt = Math.atan2(tg.x - this.x, tg.z - this.z);
    let diff = wrap(tgt - this.yaw);
    a.wob += dt;
    diff += Math.sin(a.wob * 1.3) * 0.03 * (1.2 - a.skill);
    inp.steer = THREE.MathUtils.clamp(-diff * 2.6, -1, 1);
    // Geschwindigkeit an Kurven anpassen
    let maxCurv = 0;
    for (let k = 0; k < Math.min(140, 20 + this.spd * 3); k += 6) maxCurv = Math.max(maxCurv, Math.abs(T.curv[T.idx(this.idx + k)]));
    const vMax = Math.sqrt(30 / Math.max(maxCurv, 0.001)) * (0.9 + a.skill * 0.12);
    inp.gas = this.spd < vMax ? 1 : 0.2;
    inp.brake = this.spd > vMax + 6 ? 1 : 0;
    // Driften in langen Kurven
    const cAbs = Math.abs(curvAhead);
    if (!this.drift && cAbs > 0.25 && this.spd > 16 && a.skill > 0.85 && Math.random() < dt * 2) inp.drift = true;
    else if (this.drift && (cAbs < 0.12 || this.driftCharge > DRIFT_LV[a.skill > 1 ? 1 : 0] + 0.2)) inp.drift = false;
    else if (!this.drift) inp.drift = false;
    // Items einsetzen
    inp.use = false;
    if (this.item) {
      a.itemT -= dt;
      if (a.itemT <= 0) {
        const it = this.item;
        const others = g.karts.filter((o) => o !== this);
        const behind = others.some((o) => { const d = T.dist(o.idx, this.idx); return d > 1 && d < 18; });
        const front = others.some((o) => { const d = T.dist(this.idx, o.idx); return d > 3 && d < 45 && Math.abs(o.lat - this.lat) < 3; });
        if (it === 'turbo' && cAbs < 0.15) inp.use = true;
        else if (it === 'oel' && (behind || a.itemT < -6)) inp.use = true;
        else if (it === 'zapfen' && (front || a.itemT < -8)) inp.use = true;
        else if (it === 'schild' && (behind || a.itemT < -3)) inp.use = true;
        else if (it === 'rakete') inp.use = true;
        if (inp.use) a.itemT = 0.5 + Math.random() * 2;
      }
    }
  }

  // ---------------- Physik ----------------
  update(dt, racing) {
    const T = this.T, g = this.game, inp = this.input;
    if (!racing) { inp.gas = inp.brake = 0; inp.steer = 0; inp.drift = false; inp.use = false; }
    const cls = g.cls;
    let maxSpd = 30.5 * cls.speed;
    if (!this.isPlayer) maxSpd *= this.ai.skill * g.rubber(this);

    // Untergrund
    this.offroad = Math.abs(this.lat) > ROAD_HALF + 1.4;
    if (this.offroad && this.boostT <= 0) maxSpd *= 0.52;
    if (this.boostT > 0) { maxSpd *= 1 + 0.32 * this.boostPow; this.boostT -= dt; }
    if (this.stallT > 0) { this.stallT -= dt; inp.gas = 0; }

    // Drehung
    const spinning = this.spinT > 0;
    if (spinning) {
      this.spinT -= dt;
      this.spinA += dt * 13;
      inp.gas = 0;
    } else this.spinA = 0;

    // Hüpfer / Drift-Start
    const dPress = inp.drift && !this.prevDrift;
    if (dPress && !this.air && this.hop === 0 && !spinning) { this.hopV = 4.2; this.hop = 0.001; if (this.isPlayer) g.audio.hop(); }
    if (this.hop > 0) {
      this.hop += this.hopV * dt; this.hopV -= 30 * dt;
      if (this.hop <= 0) {
        this.hop = 0;
        if (inp.drift && Math.abs(inp.steer) > 0.2 && this.spd > 9 && !this.offroad) { this.drift = Math.sign(inp.steer); this.driftCharge = 0; this.driftLv = -1; }
      }
    }
    // Trick beim Absprung von der Schanze
    if (this.air && dPress && !this.trick && this.airT < 0.35) { this.trick = true; this.trickT = 0; if (this.isPlayer) g.audio.trick(); }
    if (this.trick) this.trickT += dt;

    if (this.drift) {
      if (!inp.drift || this.spd < 7 || spinning) {
        // Loslassen: Mini-Turbo
        if (this.driftLv >= 0 && !spinning) this.boost(DRIFT_BOOST[this.driftLv], 0.55 + this.driftLv * 0.25);
        this.drift = 0; this.driftCharge = 0; this.driftLv = -1;
      } else {
        const tight = inp.steer * this.drift; // -1 weit, +1 eng
        this.driftCharge += dt * (0.75 + 0.6 * Math.max(0, tight)) * (this.offroad ? 0.4 : 1);
        const lv = this.driftCharge > DRIFT_LV[2] ? 2 : this.driftCharge > DRIFT_LV[1] ? 1 : this.driftCharge > DRIFT_LV[0] ? 0 : -1;
        if (lv !== this.driftLv) { this.driftLv = lv; if (this.isPlayer && lv >= 0) g.audio.driftLevel(lv); }
      }
    }
    this.prevDrift = inp.drift;

    // Gas / Bremse
    const gas = inp.gas - inp.brake;
    if (!this.air) {
      if (gas > 0) {
        const acc = this.boostT > 0 ? 38 : this.spd < maxSpd * 0.5 ? 17 : 11;
        if (this.spd < maxSpd) this.spd = Math.min(maxSpd, this.spd + acc * gas * dt);
        else this.spd = Math.max(maxSpd, this.spd - 18 * dt);
      } else if (gas < 0) {
        if (this.spd > 0) this.spd = Math.max(-1, this.spd - 32 * dt);
        else this.spd = Math.max(-9, this.spd - 12 * dt);
      } else {
        this.spd -= Math.sign(this.spd) * Math.min(Math.abs(this.spd), 6 * dt);
      }
      if (this.boostT > 0 && this.spd < maxSpd) this.spd = Math.min(maxSpd, this.spd + 30 * dt);
      if (this.spd > maxSpd) this.spd = Math.max(maxSpd, this.spd - 16 * dt);
    }

    // Lenkung
    const sp = Math.abs(this.spd);
    // auch langsam noch lenkbar (z. B. nach einem Bandenkontakt), aber nicht im Stand
    const steerAmt = Math.min(1, (sp + (inp.gas > 0 || inp.brake > 0 ? 3.5 : 0)) / 8) * (1 - 0.3 * Math.min(1, sp / 34));
    let yawRate;
    if (this.drift) {
      const tight = inp.steer * this.drift;
      yawRate = -this.drift * (1.25 + 0.75 * tight) * 1.05;
      this.driftAng = THREE.MathUtils.lerp(this.driftAng, this.drift * (0.42 + 0.12 * tight), 1 - Math.exp(-dt * 6));
    } else {
      yawRate = -inp.steer * 2.05 * steerAmt * Math.sign(this.spd || 1);
      if (this.air) yawRate *= 0.4;
      this.driftAng = THREE.MathUtils.lerp(this.driftAng, 0, 1 - Math.exp(-dt * 8));
    }
    if (!spinning) this.yaw = wrap(this.yaw + yawRate * dt);
    this.steerVis = THREE.MathUtils.lerp(this.steerVis, inp.steer, 1 - Math.exp(-dt * 10));
    // Fahrtrichtung folgt der Nase (Grip)
    const grip = this.air ? 0.5 : this.drift ? 3.2 : this.offroad ? 7 : 11;
    this.vh = wrap(this.vh + wrap(this.yaw - this.vh) * Math.min(1, grip * dt));
    if (spinning) this.vh = this.vh; // driftet weiter

    // Bewegung
    const fx = Math.sin(this.vh), fz = Math.cos(this.vh);
    this.x += (fx * this.spd + this.ex) * dt;
    this.z += (fz * this.spd + this.ez) * dt;
    const ed = Math.exp(-dt * 5);
    this.ex *= ed; this.ez *= ed;

    // Streckenbezug
    const prevIdx = this.idx;
    this.idx = T.nearestLocal(this.x, this.z, this.idx, 40);
    this.lat = T.lateral(this.idx, this.x, this.z);
    // Runden zählen
    if (prevIdx > T.N * 0.85 && this.idx < T.N * 0.15) this.crossLine();
    else if (prevIdx < T.N * 0.15 && this.idx > T.N * 0.85) this.lap--;

    // Bande
    const lim = WALL - 0.9;
    if (Math.abs(this.lat) > lim) {
      const s = Math.sign(this.lat);
      const [rx, rz] = T.right(this.idx);
      const pen = Math.abs(this.lat) - lim;
      this.x -= rx * s * pen; this.z -= rz * s * pen;
      this.lat = s * lim;
      // Anteil gegen die Bande
      const into = (Math.sin(this.vh) * rx + Math.cos(this.vh) * rz) * s;
      if (into > 0) {
        // Bewegung parallel zur Bande weiterlaufen lassen (Gleiten). Die Nase (yaw) bleibt frei,
        // damit man mit Gegenlenken sofort wieder wegkommt.
        const th = T.heading(this.idx);
        const fwdDot = Math.cos(wrap(this.vh - th));
        this.vh = wrap(th + (fwdDot < 0 ? Math.PI : 0) - s * 0.08);
        const hit = into > 0.25 && g.time - this.lastWall > 0.3;
        if (hit) {
          // Aufprall: Tempo nach Aufprallwinkel abziehen, kleiner Abpraller weg von der Bande
          this.spd *= 1 - into * 0.55;
          this.ex -= rx * s * (2 + into * 5); this.ez -= rz * s * (2 + into * 5);
          this.lastWall = g.time;
          if (this.isPlayer) { g.audio.wall(into); g.shake(into * 0.5); }
          g.fx.puff(this.x + rx * s * 1.2, this.y + 0.5, this.z + rz * s * 1.2, 5, COL.smoke);
        } else {
          // Schleifen an der Bande: nur leichte Reibung
          this.spd *= 1 - Math.min(0.5, into) * 2.5 * dt;
        }
        // Stoßimpuls, der in die Bande zeigt, aufheben
        const exIn = (this.ex * rx + this.ez * rz) * s;
        if (exIn > 0) { this.ex -= rx * s * exIn; this.ez -= rz * s * exIn; }
        if (this.drift) { this.drift = 0; this.driftCharge = 0; this.driftLv = -1; }
      }
    }

    // Höhe
    const gy = this.ground();
    if (!this.air) {
      const ny = gy;
      const vyNew = (ny - this.y) / Math.max(dt, 1e-3);
      if (ny < this.y - 0.25) { this.air = true; this.airT = 0; this.vy = Math.min(this.vy, 0) + Math.max(0, this.lastVy || 0); }
      else { this.y = ny; this.lastVy = THREE.MathUtils.clamp(vyNew, -20, 20); this.vy = 0; }
    }
    if (this.air) {
      this.airT += dt;
      this.y += this.vy * dt;
      this.vy -= G * dt;
      if (this.y <= gy) {
        this.y = gy;
        this.air = false;
        this.squash = Math.min(0.35, -this.vy * 0.03);
        if (this.isPlayer) g.audio.land(Math.min(1, -this.vy / 12));
        if (this.trick) { this.trick = false; this.boost(0.9, 0.7); }
        this.vy = 0;
        g.fx.dust(this.x, this.y, this.z, 0, 0, COL.dust, 6);
      }
    }

    // Boost-Felder
    if (!this.air) for (const b of g.world.boosts) {
      const d = T.dist(b.i - 7, this.idx);
      if (d < 7 && Math.abs(this.lat - b.lat) < 2.2) { if (this.boostT < 0.5) this.boost(1.1, 1); else this.boostT = Math.max(this.boostT, 1.0); }
    }
    if (this.shieldT > 0) this.shieldT -= dt;
    this.squash *= Math.exp(-dt * 9);
    this.updateFx(dt);
  }

  ground() {
    const T = this.T, r = this.game.world.ramp;
    let gy = T.y[this.idx] + 0.02;
    if (r && Math.abs(this.lat) < ROAD_HALF) {
      const d = ((this.idx - r.i + T.N) % T.N) * 0.5;
      if (d >= 0 && d < r.len) gy += (d / r.len) * r.h;
    }
    return gy;
  }

  crossLine() {
    const g = this.game;
    this.lap++;
    if (this.lap >= 2) this.lapTimes.push(g.raceTime - this.lapStart);
    this.lapStart = g.raceTime;
    if (this.lap > LAPS && !this.finished) {
      this.finished = true;
      this.finishTime = g.raceTime;
      g.onFinish(this);
    } else if (this.isPlayer && this.lap >= 2) g.onLap(this);
  }

  updateFx(dt) {
    const g = this.game, fx = g.fx;
    if (!this.mesh.visible) return;
    const sx = Math.sin(this.yaw), sz = Math.cos(this.yaw);
    const rx = sz, rz = -sx; // rechts vom Kart (Modell +Z vorn)
    const rearX = this.x - sx * 1.2, rearZ = this.z - sz * 1.2;
    const near = this.isPlayer || Math.hypot(g.camera.position.x - this.x, g.camera.position.z - this.z) < 60;
    if (!near) return;
    if (this.drift && !this.air) {
      const col = this.driftLv >= 0 ? SPARK[this.driftLv] : null;
      for (const s of [-1, 1]) {
        const wx = rearX + rx * s * 1.0, wz = rearZ + rz * s * 1.0;
        if (col && Math.random() < 0.9) for (let k = 0; k < (this.driftLv + 1); k++) fx.spark(wx, this.y + 0.2, wz, col);
        if (Math.random() < 0.35) fx.dust(wx, this.y, wz, 0, 0, COL.smoke, 1);
      }
    }
    if (this.offroad && Math.abs(this.spd) > 6 && !this.air && Math.random() < 0.25) {
      for (const s of [-1, 1]) fx.dust(rearX + rx * s * 0.9, this.y, rearZ + rz * s * 0.9, -sx * this.spd, -sz * this.spd, COL.grass, 1, 0.22);
    }
    if (this.boostT > 0) {
      const ex = this.ud.exhausts;
      for (const e of ex) {
        e.getWorldPosition(g.tmpV);
        fx.flame(g.tmpV.x, g.tmpV.y, g.tmpV.z, Math.sin(this.vh) * this.spd - sx * 7, Math.cos(this.vh) * this.spd - sz * 7, this.boostPow > 0.9);
      }
    }
    if (this.shieldT > 0 && Math.random() < 0.3) fx.spark(this.x + (Math.random() - 0.5) * 3, this.y + Math.random() * 2, this.z + (Math.random() - 0.5) * 3, COL.spark1);
  }

  // Grafik synchronisieren
  sync(dt) {
    const m = this.mesh, ud = this.ud;
    m.position.set(this.x, this.y, this.z);
    m.rotation.y = this.yaw + this.spinA;
    const body = ud.body;
    body.position.y = this.hop + Math.sin(this.game.time * 30 + this.x) * 0.012 * Math.min(1, Math.abs(this.spd) / 10);
    body.rotation.z = THREE.MathUtils.lerp(body.rotation.z, -this.steerVis * 0.06 * Math.min(1, Math.abs(this.spd) / 15) - this.driftAng * 0.12, 1 - Math.exp(-dt * 8));
    body.rotation.x = THREE.MathUtils.lerp(body.rotation.x, this.air ? -0.12 : 0, 1 - Math.exp(-dt * 5));
    body.rotation.y = -this.driftAng * 0.55;
    if (this.trick) body.rotation.y += Math.min(1, this.trickT / 0.45) * Math.PI * 2;
    body.scale.set(1 + this.squash * 0.5, 1 - this.squash, 1 + this.squash * 0.5);
    const spin = this.spd * dt / 0.38;
    for (const w of ud.wheels) {
      w.spin.rotation.x += spin;
      if (w.front) w.steer.rotation.y = -this.steerVis * 0.45;
    }
    ud.head.rotation.y = THREE.MathUtils.lerp(ud.head.rotation.y, -this.steerVis * 0.35 + (this.spinT > 0 ? Math.sin(this.game.time * 20) * 0.5 : 0), 1 - Math.exp(-dt * 8));
    if (ud.tail) ud.tail.rotation.y = Math.sin(this.game.time * 7 + this.x) * 0.35;
    ud.driver.position.y = 0.95 + Math.sin(this.game.time * 9) * 0.01;
    ud.shield.visible = this.shieldT > 0;
    if (ud.shield.visible) { ud.shield.rotation.y += dt * 2; ud.shield.material.opacity = 0.22 + Math.sin(this.game.time * 8) * 0.06; }
    const above = this.y - this.ground();
    ud.blob.position.y = 0.04 - above;
    ud.blob.material.opacity = 0.28 / (1 + (above + this.hop) * 0.6);
  }
}
