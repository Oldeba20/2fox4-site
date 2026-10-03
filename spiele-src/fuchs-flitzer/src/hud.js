const $ = (id) => document.getElementById(id);

export const ICONS = {
  turbo: `<svg viewBox="0 0 64 64"><rect x="18" y="8" width="28" height="48" rx="7" fill="#ff6b35" stroke="#1d1410" stroke-width="4"/><rect x="18" y="8" width="28" height="9" rx="4" fill="#c8ccd4" stroke="#1d1410" stroke-width="4"/><path d="M35 22 25 37h8l-4 13 12-17h-8l4-11z" fill="#ffd23a" stroke="#1d1410" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  oel: `<svg viewBox="0 0 64 64"><path d="M12 40c0-9 8-12 14-12 4-8 16-9 22-2 8 0 12 6 9 13-2 8-12 9-18 8-6 5-17 5-22 0-4 0-5-3-5-7z" fill="#2a2040" stroke="#1d1410" stroke-width="4"/><ellipse cx="38" cy="36" rx="6" ry="3" fill="#9a7cff"/><ellipse cx="22" cy="40" rx="3" ry="1.6" fill="#9a7cff"/></svg>`,
  zapfen: `<svg viewBox="0 0 64 64"><path d="M32 58C20 46 16 30 20 18c3-8 21-8 24 0 4 12 0 28-12 40z" fill="#8a5a32" stroke="#1d1410" stroke-width="4"/><path d="M21 24h22M20 32h24M22 40h20M25 48h14" stroke="#5a3418" stroke-width="3.5"/><path d="M32 12V5" stroke="#3a7a2a" stroke-width="4" stroke-linecap="round"/></svg>`,
  schild: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="#7fe0ff" fill-opacity=".55" stroke="#1d1410" stroke-width="4"/><circle cx="32" cy="32" r="24" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/><path d="M22 22a14 14 0 0 1 12-6" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
  rakete: `<svg viewBox="0 0 64 64"><g transform="rotate(45 32 32)"><path d="M32 4c9 8 11 22 9 36H23c-2-14 0-28 9-36z" fill="#ff6b35" stroke="#1d1410" stroke-width="4" stroke-linejoin="round"/><path d="M25 10l-3-6 7 3M39 10l3-6-7 3" fill="#ff6b35" stroke="#1d1410" stroke-width="2.5"/><circle cx="32" cy="22" r="5" fill="#fff5ea" stroke="#1d1410" stroke-width="3"/><path d="M23 34l-8 10h9M41 34l8 10h-9" fill="#1d1410"/><path d="M27 42l5 14 5-14z" fill="#ffd23a" stroke="#1d1410" stroke-width="2.5" stroke-linejoin="round"/></g></svg>`,
};
const ORDER = ['turbo', 'oel', 'zapfen', 'schild', 'rakete'];

export class HUD {
  constructor(game) {
    this.g = game;
    this.el = { lap: $('lap'), time: $('time'), laps: $('laps'), place: $('place'), kmh: $('kmh'), box: $('itembox'), big: $('big'), sub: $('sub'), quip: $('quip'), wrong: $('wrong'), key: $('itemkey') };
    this.mm = $('minimap').getContext('2d');
    this.lastPlace = 0;
    this.rollT = 0;
    this.prepMap();
  }

  prepMap() {
    const T = this.g.track;
    let minx = 1e9, maxx = -1e9, minz = 1e9, maxz = -1e9;
    for (let i = 0; i < T.N; i++) { minx = Math.min(minx, T.x[i]); maxx = Math.max(maxx, T.x[i]); minz = Math.min(minz, T.z[i]); maxz = Math.max(maxz, T.z[i]); }
    const pad = 30, W = 440;
    const s = (W - pad * 2) / Math.max(maxx - minx, maxz - minz);
    const ox = pad + (W - pad * 2 - (maxx - minx) * s) / 2, oz = pad + (W - pad * 2 - (maxz - minz) * s) / 2;
    // Karte so drehen, dass die Startgerade unten nach rechts läuft
    this.map = (x, z) => [ox + (x - minx) * s, W - (oz + (z - minz) * s)];
    const c = document.createElement('canvas'); c.width = c.height = W;
    const g = c.getContext('2d');
    const path = () => { g.beginPath(); for (let i = 0; i < T.N; i += 6) { const [a, b] = this.map(T.x[i], T.z[i]); i ? g.lineTo(a, b) : g.moveTo(a, b); } g.closePath(); };
    g.lineJoin = 'round'; g.lineCap = 'round';
    path(); g.strokeStyle = 'rgba(29,20,16,.85)'; g.lineWidth = 30; g.stroke();
    path(); g.strokeStyle = '#fff'; g.lineWidth = 22; g.stroke();
    path(); g.strokeStyle = '#6b7380'; g.lineWidth = 14; g.stroke();
    // Startlinie
    const [sx, sz] = this.map(T.x[0], T.z[0]);
    g.fillStyle = '#fff'; g.fillRect(sx - 3, sz - 12, 6, 24);
    g.fillStyle = '#1d1410'; g.fillRect(sx - 3, sz - 12, 3, 6); g.fillRect(sx, sz - 6, 3, 6); g.fillRect(sx - 3, sz, 3, 6); g.fillRect(sx, sz + 6, 3, 6);
    this.mapBg = c;
  }

  drawMap() {
    const g = this.mm, W = 440;
    g.clearRect(0, 0, W, W);
    g.drawImage(this.mapBg, 0, 0);
    // Gefahren
    for (const h of this.g.items.hazards) {
      const [a, b] = this.map(h.x, h.z);
      g.fillStyle = h.type === 'rakete' ? '#ff6b35' : h.type === 'oel' ? '#2a2040' : '#8a5a32';
      g.beginPath(); g.arc(a, b, 6, 0, 7); g.fill();
    }
    const ks = [...this.g.karts].sort((a, b) => (a.isPlayer ? 1 : 0) - (b.isPlayer ? 1 : 0));
    for (const k of ks) {
      const [a, b] = this.map(k.x, k.z);
      const r = k.isPlayer ? 15 : 11;
      g.beginPath(); g.arc(a, b, r, 0, 7);
      g.fillStyle = '#' + k.def.kart.toString(16).padStart(6, '0');
      g.fill();
      g.lineWidth = k.isPlayer ? 5 : 3.5; g.strokeStyle = k.isPlayer ? '#fff' : '#1d1410'; g.stroke();
      if (k.isPlayer) {
        g.save(); g.translate(a, b); g.rotate(k.yaw + Math.PI);
        g.fillStyle = '#fff'; g.beginPath(); g.moveTo(0, r + 9); g.lineTo(-6, r + 1); g.lineTo(6, r + 1); g.fill();
        g.restore();
      }
    }
  }

  item(type, rolling) {
    const b = this.el.box;
    [...b.querySelectorAll('svg')].forEach((s) => s.remove());
    b.classList.toggle('rolling', !!rolling);
    b.classList.toggle('ready', !!type && !rolling);
    if (type) b.insertAdjacentHTML('afterbegin', ICONS[type]);
  }

  update(dt) {
    const g = this.g, p = g.player;
    const e = this.el;
    const lap = Math.min(3, Math.max(1, p.lap));
    if (e.lap.textContent !== String(lap)) e.lap.textContent = lap;
    e.time.textContent = fmt(g.raceTime);
    if (p.place !== this.lastPlace) {
      e.place.textContent = p.place;
      e.place.className = 'n bump ' + (p.place <= 3 ? 'p' + p.place : 'pX');
      this.lastPlace = p.place;
    }
    e.kmh.textContent = Math.round(Math.abs(p.spd) * 3.6 * 1.25);
    // Item-Roulette
    if (p.rollT > 0) {
      this.rollT -= dt;
      if (this.rollT <= 0) { this.rollT = 0.08; this.rollIdx = ((this.rollIdx || 0) + 1) % ORDER.length; this.item(ORDER[this.rollIdx], true); g.audio.tick(); }
    }
    this.drawMap();
  }

  laps(list) {
    this.el.laps.innerHTML = list.map((t, i) => `<div>R${i + 1}  ${fmt(t)}</div>`).join('');
  }

  count(text, go) {
    const b = this.el.big;
    b.className = 'big';
    void b.offsetWidth;
    b.textContent = text;
    b.className = 'big show' + (go ? ' go' : '');
  }
  banner(text, sub, stay) {
    const b = this.el.big;
    b.className = 'big';
    void b.offsetWidth;
    b.textContent = text;
    b.className = 'big ' + (stay ? 'stay go' : 'show go');
    this.el.sub.textContent = sub || '';
    this.el.sub.classList.toggle('show', !!sub);
    clearTimeout(this.subT);
    if (sub && !stay) this.subT = setTimeout(() => this.el.sub.classList.remove('show'), 1600);
  }
  clearBanner() { this.el.big.className = 'big'; this.el.sub.classList.remove('show'); }
  quip(text) {
    const q = this.el.quip;
    q.textContent = text;
    q.classList.add('show');
    clearTimeout(this.qT);
    this.qT = setTimeout(() => q.classList.remove('show'), 1300);
  }
  wrong(on) { this.el.wrong.classList.toggle('show', on); }
}

export function fmt(t) {
  if (!isFinite(t)) return '–';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}
