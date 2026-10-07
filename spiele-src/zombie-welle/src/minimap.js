import { CELL } from './level.js';

// ------------------------------------------------------------
// Minimap unten links: dreht sich mit dem Spieler (Blickrichtung = oben),
// Gegner als leuchtende Punkte in ihrer Typfarbe. Gegner außerhalb des
// Radius erscheinen als Punkt am Rand.
// ------------------------------------------------------------
const RANGE = 17;     // sichtbarer Radius in Metern
const PX = 6;         // Pixel pro Kartenzelle im Hintergrundbild

const hex = (c) => '#' + c.toString(16).padStart(6, '0');

export class Minimap {
  constructor(canvas, level) {
    this.c = canvas;
    this.g = canvas.getContext('2d');
    this.cache = new Map();
    this.t = 0;
    this.setLevel(level);
  }

  setLevel(level) {
    this.level = level;
    if (!this.cache.has(level)) this.cache.set(level, this.renderMap(level));
    this.bg = this.cache.get(level);
  }

  renderMap(level) {
    const MAP = level.map;
    const rows = MAP.length, cols = MAP[0].length;
    const c = document.createElement('canvas');
    c.width = cols * PX; c.height = rows * PX;
    const g = c.getContext('2d');
    const solid = new Set(['#', 'M', 'H', 'G']);
    const obst = new Set(['C', 'W', 'O', 'X', 'A', 'V', 'N']);
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const ch = MAP[r][k];
      const h = level.hAt(k, r);
      if (h >= 3.9) g.fillStyle = 'rgba(255,190,140,0.32)';
      else if (h > 0) g.fillStyle = `rgba(255,190,140,${0.12 + h * 0.05})`;
      else if (solid.has(ch)) continue;
      else if (obst.has(ch)) g.fillStyle = 'rgba(255,255,255,0.3)';
      else if (level.isInterior && level.isInterior(k, r)) g.fillStyle = 'rgba(255,214,150,0.2)';
      else g.fillStyle = ch === ',' ? 'rgba(255,255,255,0.17)' : 'rgba(255,255,255,0.13)';
      g.fillRect(k * PX, r * PX, PX, PX);
      if (ch === 'S') { g.fillStyle = 'rgba(227,36,27,0.55)'; g.fillRect(k * PX + 1, r * PX + 1, PX - 2, PX - 2); }
    }
    // Wandkanten betonen
    g.fillStyle = 'rgba(255,107,53,0.35)';
    for (let r = 1; r < rows - 1; r++) for (let k = 1; k < cols - 1; k++) {
      const wall = (rr, kk) => solid.has(MAP[rr][kk]);
      if (!wall(r, k)) continue;
      if (!wall(r - 1, k)) g.fillRect(k * PX, r * PX, PX, 1);
      if (!wall(r + 1, k)) g.fillRect(k * PX, r * PX + PX - 1, PX, 1);
      if (!wall(r, k - 1)) g.fillRect(k * PX, r * PX, 1, PX);
      if (!wall(r, k + 1)) g.fillRect(k * PX + PX - 1, r * PX, 1, PX);
    }
    return c;
  }

  fit() {
    const dpr = Math.min(2, devicePixelRatio || 1);
    const w = Math.round(this.c.clientWidth * dpr);
    if (w && this.c.width !== w) { this.c.width = w; this.c.height = w; }
    return this.c.width;
  }

  draw(game) {
    const S = this.fit();
    if (!S) return;
    const g = this.g, R = S / 2;
    const p = game.player;
    const k = R / RANGE;            // Pixel pro Meter
    this.t += 0.016;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(R, R, R - 1, 0, Math.PI * 2); g.clip();
    g.fillStyle = 'rgba(6,6,10,0.72)';
    g.fillRect(0, 0, S, S);

    // Welt -> Karte: drehen, damit die Blickrichtung oben ist
    g.translate(R, R);
    g.rotate(p.yaw);
    g.imageSmoothingEnabled = false;
    const m = k * CELL / PX;        // Zelle-Pixel -> Karten-Pixel
    g.drawImage(this.bg, -p.pos.x * k, -p.pos.z * k, this.bg.width * m, this.bg.height * m);

    const rel = (x, z) => [(x - p.pos.x) * k, (z - p.pos.z) * k];

    // Beute
    for (const pk of game.pickups) {
      if (!pk.active) continue;
      const [x, y] = rel(pk.holder.position.x, pk.holder.position.z);
      g.fillStyle = pk.type === 'health' ? '#50ff70' : '#ffffff';
      const s = Math.max(2, S * 0.018);
      g.fillRect(x - s / 2, y - s / 2, s, s);
    }

    // Ausgang
    const ex = this.level.exit;
    if (ex && ex.active) {
      let [x, y] = rel(this.level.exitPos.x, this.level.exitPos.z);
      const d = Math.hypot(x, y), lim = R - S * 0.06;
      if (d > lim) { x *= lim / d; y *= lim / d; }
      const s = S * (0.045 + 0.012 * Math.sin(this.t * 6));
      g.strokeStyle = '#35e0ff'; g.lineWidth = Math.max(2, S * 0.014);
      g.beginPath(); g.arc(x, y, s, 0, Math.PI * 2); g.stroke();
      g.fillStyle = '#35e0ff';
      g.beginPath(); g.arc(x, y, s * 0.35, 0, Math.PI * 2); g.fill();
    }

    // Gegner
    g.globalCompositeOperation = 'lighter';
    const pulse = 0.75 + 0.25 * Math.sin(this.t * 7);
    for (const z of game.zombies.pool) {
      if (!z.active || z.dead) continue;
      let [x, y] = rel(z.root.position.x, z.root.position.z);
      const d = Math.hypot(x, y);
      let edge = false;
      const lim = R - S * 0.04;
      if (d > lim) { x *= lim / d; y *= lim / d; edge = true; }
      const col = hex(z.type.glow);
      const r = S * (z.typeKey === 'brute' ? 0.034 : 0.024) * (edge ? 0.7 : 1);
      const grd = g.createRadialGradient(x, y, 0, x, y, r * 3.2);
      grd.addColorStop(0, col + 'cc');
      grd.addColorStop(1, col + '00');
      g.globalAlpha = (edge ? 0.55 : 1) * pulse;
      g.fillStyle = grd;
      g.beginPath(); g.arc(x, y, r * 3.2, 0, Math.PI * 2); g.fill();
      g.globalAlpha = edge ? 0.7 : 1;
      g.fillStyle = z.typeKey === 'bomber' && z.fuse >= 0 ? '#ffffff' : col;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
      if (z.marked) { g.strokeStyle = '#ffffff'; g.lineWidth = Math.max(1, S * 0.008); g.beginPath(); g.arc(x, y, r * 2, 0, Math.PI * 2); g.stroke(); }
    }
    g.globalAlpha = 1;
    g.globalCompositeOperation = 'source-over';

    // Norden am Rand
    const na = -Math.PI / 2; // Norden = -z = oben in der Karte (vor der Drehung)
    g.fillStyle = 'rgba(244,239,232,0.7)';
    g.font = `800 ${Math.round(S * 0.075)}px system-ui, sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.save();
    g.translate(Math.cos(na) * (R - S * 0.07), Math.sin(na) * (R - S * 0.07));
    g.rotate(-p.yaw);
    g.fillText('N', 0, 0);
    g.restore();
    g.restore();

    // Spieler (Mitte, zeigt nach oben) + Sichtkegel
    g.save();
    g.translate(R, R);
    const cone = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.7);
    cone.addColorStop(0, 'rgba(255,241,220,0.22)');
    cone.addColorStop(1, 'rgba(255,241,220,0)');
    g.fillStyle = cone;
    g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, R * 0.7, -Math.PI / 2 - 0.55, -Math.PI / 2 + 0.55); g.closePath(); g.fill();
    const a = S * 0.045;
    g.fillStyle = '#ff6b35';
    g.strokeStyle = '#000';
    g.lineWidth = Math.max(1, S * 0.008);
    g.beginPath(); g.moveTo(0, -a * 1.2); g.lineTo(a * 0.8, a * 0.9); g.lineTo(0, a * 0.45); g.lineTo(-a * 0.8, a * 0.9); g.closePath();
    g.fill(); g.stroke();
    g.restore();

    // Rand
    g.strokeStyle = 'rgba(255,255,255,0.22)';
    g.lineWidth = Math.max(1, S * 0.01);
    g.beginPath(); g.arc(R, R, R - g.lineWidth, 0, Math.PI * 2); g.stroke();
  }
}
