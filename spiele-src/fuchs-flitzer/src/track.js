import * as THREE from 'three';

// Kontrollpunkte der Strecke „Fuchsbau-Ring“ (x, z, Höhe y), Fahrtrichtung in Reihenfolge
const CP = [
  [0, 0, 0], [110, 0, 0], [190, -15, 0.5], [245, -70, 1.5], [250, -150, 4], [205, -215, 8], [130, -230, 11],
  [75, -195, 12], [20, -215, 12], [-35, -260, 10], [-105, -262, 8], [-150, -215, 6], [-140, -150, 4],
  [-95, -120, 3], [-60, -80, 3], [-100, -40, 2], [-160, -20, 1], [-190, 40, 0.5], [-150, 95, 0], [-80, 100, 0], [-40, 60, 0],
];

export const ROAD_HALF = 7.5;      // halbe Fahrbahnbreite
export const WALL = ROAD_HALF + 9; // ab hier Bande

function cr(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

export class Track {
  constructor() {
    // dichte Abtastung
    const raw = [];
    const n = CP.length;
    for (let i = 0; i < n; i++) {
      const a = CP[(i - 1 + n) % n], b = CP[i], c = CP[(i + 1) % n], d = CP[(i + 2) % n];
      for (let k = 0; k < 200; k++) {
        const t = k / 200;
        raw.push([cr(a[0], b[0], c[0], d[0], t), cr(a[1], b[1], c[1], d[1], t), cr(a[2], b[2], c[2], d[2], t)]);
      }
    }
    // gleichmäßig auf 0,5 m umrechnen
    const cum = [0];
    for (let i = 1; i <= raw.length; i++) {
      const p = raw[i - 1], q = raw[i % raw.length];
      cum.push(cum[i - 1] + Math.hypot(q[0] - p[0], q[1] - p[1]));
    }
    this.length = cum[cum.length - 1];
    const STEP = 0.5;
    const N = Math.floor(this.length / STEP);
    this.N = N;
    this.x = new Float32Array(N); this.z = new Float32Array(N); this.y = new Float32Array(N);
    this.tx = new Float32Array(N); this.tz = new Float32Array(N); // Tangente
    this.curv = new Float32Array(N);
    let j = 0;
    for (let i = 0; i < N; i++) {
      const s = (i * this.length) / N;
      while (cum[j + 1] < s) j++;
      const f = (s - cum[j]) / (cum[j + 1] - cum[j] || 1);
      const p = raw[j], q = raw[(j + 1) % raw.length];
      this.x[i] = p[0] + (q[0] - p[0]) * f;
      this.z[i] = p[1] + (q[1] - p[1]) * f;
      this.y[i] = p[2] + (q[2] - p[2]) * f;
    }
    for (let i = 0; i < N; i++) {
      const a = (i - 2 + N) % N, b = (i + 2) % N;
      const dx = this.x[b] - this.x[a], dz = this.z[b] - this.z[a];
      const l = Math.hypot(dx, dz) || 1;
      this.tx[i] = dx / l; this.tz[i] = dz / l;
    }
    // Krümmung (Richtungsänderung pro Meter, geglättet)
    for (let i = 0; i < N; i++) {
      const a = (i - 6 + N) % N, b = (i + 6) % N;
      const h1 = Math.atan2(this.tz[a], this.tx[a]), h2 = Math.atan2(this.tz[b], this.tx[b]);
      let d = h2 - h1; d = Math.atan2(Math.sin(d), Math.cos(d));
      this.curv[i] = d / 6; // rad pro Meter
    }
    // Höhen glätten
    const ys = Float32Array.from(this.y);
    for (let it = 0; it < 3; it++) for (let i = 0; i < N; i++) {
      let s = 0; for (let k = -20; k <= 20; k++) s += ys[(i + k + N) % N];
      this.y[i] = s / 41;
    }
    // Rasterindex für schnelle Nächster-Punkt-Suche
    this.cell = 12;
    this.grid = new Map();
    for (let i = 0; i < N; i += 2) {
      const key = this._key(this.x[i], this.z[i]);
      if (!this.grid.has(key)) this.grid.set(key, []);
      this.grid.get(key).push(i);
    }
  }

  _key(x, z) { return Math.floor(x / this.cell) + ',' + Math.floor(z / this.cell); }

  // Normale (nach links bezogen auf Fahrtrichtung): (tz, -tx)? -> wir definieren rechts = (-tz, tx)
  right(i) { return [-this.tz[i], this.tx[i]]; }

  // global nächster Abtastpunkt (langsam, für Gelände/Platzierung)
  nearestGlobal(x, z, maxR = 3) {
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    let best = -1, bd = Infinity;
    for (let r = 0; r <= maxR; r++) {
      for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
        const list = this.grid.get((cx + dx) + ',' + (cz + dz));
        if (!list) continue;
        for (const i of list) {
          const d = (this.x[i] - x) ** 2 + (this.z[i] - z) ** 2;
          if (d < bd) { bd = d; best = i; }
        }
      }
      if (best >= 0 && r >= 1) break;
    }
    if (best < 0) return { i: -1, d: Infinity };
    // fein
    for (let k = -2; k <= 2; k++) {
      const i = (best + k + this.N) % this.N;
      const d = (this.x[i] - x) ** 2 + (this.z[i] - z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return { i: best, d: Math.sqrt(bd) };
  }

  // lokal nächster Punkt ausgehend vom letzten Index
  nearestLocal(x, z, last, win = 40) {
    let best = last, bd = Infinity;
    for (let k = -win; k <= win; k++) {
      const i = (last + k + this.N) % this.N;
      const d = (this.x[i] - x) ** 2 + (this.z[i] - z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  // seitlicher Abstand (rechts positiv)
  lateral(i, x, z) {
    const [rx, rz] = this.right(i);
    return (x - this.x[i]) * rx + (z - this.z[i]) * rz;
  }

  idx(i) { return ((i % this.N) + this.N) % this.N; }
  point(i, lat = 0, out = new THREE.Vector3()) {
    i = this.idx(Math.round(i));
    const [rx, rz] = this.right(i);
    return out.set(this.x[i] + rx * lat, this.y[i], this.z[i] + rz * lat);
  }
  heading(i) { i = this.idx(i); return Math.atan2(this.tx[i], this.tz[i]); }
  dist(a, b) { return ((b - a + this.N) % this.N) * 0.5; }
}
