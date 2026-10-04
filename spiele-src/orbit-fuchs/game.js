/* ORBIT-FUCHS — Röhren-Shooter im Geist der 80er-Arcade. Eigene Figuren, eigener Code, eigene Musik
   (Thema frei nach J. S. Bachs Toccata d-Moll, gemeinfrei). Teil der 2FOX4-404-Arcade. */
(() => {
'use strict';
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
const TEST = /[?&]test/.test(location.search);
const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const wrapA = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const pick = (a) => a[(Math.random() * a.length) | 0];
const ease = (t) => 1 - Math.pow(1 - t, 3);
const FONT = '"Press Start 2P", "Courier New", monospace';
const coarse = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* */ } },
};

// ---------------------------------------------------------------- Bildschirm
let W = 0, H = 0, DPR = 1, CX = 0, CY = 0, R = 100, S = 1;
function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth, h = window.innerHeight;
  cv.width = Math.round(w * DPR); cv.height = Math.round(h * DPR);
  W = cv.width; H = cv.height; CX = W / 2; CY = H / 2;
  R = Math.min(W, H) * 0.43; S = R / 300;
  BG.dirty = true;
}
window.addEventListener('resize', resize);

// polar → Bildschirm. d: 0 = Mitte, 1 = Ring des Spielers
const px = (a, d) => CX + Math.cos(a) * R * d;
const py = (a, d) => CY + Math.sin(a) * R * d;
const kd = (d) => 0.22 + 0.78 * clamp(d, 0, 1.3); // Größenfaktor (Tiefe)

// ---------------------------------------------------------------- Sprites
function mk(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); draw(g, w, h); return c; }
function glowSprite(col, size = 64) {
  return mk(size, size, (g, w) => {
    const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    r.addColorStop(0, col); r.addColorStop(0.35, col.replace(/[\d.]+\)$/, '0.35)')); r.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = r; g.fillRect(0, 0, w, w);
  });
}
const SPR = {};
function buildSprites() {
  // Spielerschiff: zeigt nach oben (= zur Mitte). Fuchs-Design in Markenorange
  SPR.ship = mk(128, 128, (g) => {
    g.translate(64, 64); g.lineJoin = 'round';
    // Flügel = Fuchsohren nach hinten
    g.fillStyle = '#ff6b35'; g.strokeStyle = '#1d1410'; g.lineWidth = 5;
    for (const s of [-1, 1]) {
      g.beginPath(); g.moveTo(s * 10, -6); g.lineTo(s * 46, 34); g.lineTo(s * 30, 40); g.lineTo(s * 12, 26); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#fff5ea'; g.beginPath(); g.moveTo(s * 20, 14); g.lineTo(s * 38, 33); g.lineTo(s * 30, 36); g.closePath(); g.fill(); g.fillStyle = '#ff6b35';
    }
    // Rumpf
    g.beginPath(); g.moveTo(0, -50); g.bezierCurveTo(16, -30, 18, 10, 14, 34); g.lineTo(-14, 34); g.bezierCurveTo(-18, 10, -16, -30, 0, -50); g.closePath();
    const gr = g.createLinearGradient(-16, 0, 16, 0); gr.addColorStop(0, '#e2531f'); gr.addColorStop(0.5, '#ff8a55'); gr.addColorStop(1, '#c8461a');
    g.fillStyle = gr; g.fill(); g.stroke();
    // weiße Schnauze
    g.fillStyle = '#fff5ea'; g.beginPath(); g.moveTo(0, -48); g.bezierCurveTo(7, -36, 8, -26, 0, -22); g.bezierCurveTo(-8, -26, -7, -36, 0, -48); g.fill();
    g.fillStyle = '#1d1410'; g.beginPath(); g.arc(0, -46, 3.2, 0, TAU); g.fill();
    // Cockpit
    g.fillStyle = '#1d1410'; g.beginPath(); g.ellipse(0, -2, 8, 13, 0, 0, TAU); g.fill();
    g.fillStyle = '#7fe0ff'; g.beginPath(); g.ellipse(-2, -5, 3, 6, -0.3, 0, TAU); g.fill();
    // „4“ auf dem Heck
    g.fillStyle = '#fff'; g.font = 'bold 13px Arial, sans-serif'; g.textAlign = 'center'; g.fillText('4', 0, 28);
  });
  // Blechhuhn (Gegner): zeigt nach oben (= nach außen zum Spieler)
  const chicken = (body, dark, comb, extra) => mk(96, 96, (g) => {
    g.translate(48, 48); g.lineJoin = 'round'; g.strokeStyle = '#0d0b18'; g.lineWidth = 4;
    // Flügel
    g.fillStyle = dark;
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 14, -4); g.quadraticCurveTo(s * 40, 0, s * 36, 18); g.lineTo(s * 16, 12); g.closePath(); g.fill(); g.stroke(); }
    // Körper
    const gr = g.createRadialGradient(-6, -8, 2, 0, 0, 28); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.35, body); gr.addColorStop(1, dark);
    g.fillStyle = gr; g.beginPath(); g.ellipse(0, 4, 20, 24, 0, 0, TAU); g.fill(); g.stroke();
    // Nieten
    g.fillStyle = 'rgba(0,0,0,0.35)'; for (const [x, y] of [[-12, 8], [12, 8], [0, 22], [-8, 18], [8, 18]]) { g.beginPath(); g.arc(x, y, 1.8, 0, TAU); g.fill(); }
    // Kamm
    g.fillStyle = comb; g.beginPath(); g.arc(-7, -22, 6, 0, TAU); g.arc(0, -26, 7, 0, TAU); g.arc(7, -22, 6, 0, TAU); g.fill(); g.stroke();
    g.beginPath(); g.ellipse(0, 4, 20, 24, 0, 0, TAU); g.fillStyle = 'rgba(0,0,0,0)'; g.fill();
    // Schnabel
    g.fillStyle = '#ffc23a'; g.beginPath(); g.moveTo(-6, -12); g.lineTo(0, -26); g.lineTo(6, -12); g.closePath(); g.fill(); g.stroke();
    // Augen (Visor)
    g.fillStyle = '#0d0b18'; g.fillRect(-14, -9, 28, 8);
    g.fillStyle = '#ff3b1f'; g.fillRect(-11, -7, 7, 4); g.fillRect(4, -7, 7, 4);
    if (extra) extra(g);
  });
  SPR.drone = chicken('#c8ccd8', '#5a6070', '#ff3b3b');
  SPR.spinner = chicken('#7cff8a', '#1f7a3a', '#ffe14a', (g) => { g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(0, 4, 30, -0.4, 0.4); g.stroke(); g.beginPath(); g.arc(0, 4, 30, Math.PI - 0.4, Math.PI + 0.4); g.stroke(); });
  SPR.bomber = chicken('#c39bff', '#4a2a8a', '#ff6b35', (g) => { g.fillStyle = '#ffc23a'; g.strokeStyle = '#0d0b18'; g.lineWidth = 3; for (const s of [-1, 1]) { g.beginPath(); g.rect(s * 22 - 4, 14, 8, 14); g.fill(); g.stroke(); } });
  SPR.kami = chicken('#ffb36b', '#a8401a', '#ff3b3b', (g) => { g.fillStyle = '#fff3a0'; g.beginPath(); g.moveTo(-5, 28); g.lineTo(0, 44); g.lineTo(5, 28); g.fill(); });
  SPR.rock = mk(96, 96, (g) => {
    g.translate(48, 48); g.fillStyle = '#7a6250'; g.strokeStyle = '#0d0b18'; g.lineWidth = 4;
    g.beginPath(); for (let i = 0; i < 11; i++) { const a = (i / 11) * TAU, r = 30 + Math.sin(i * 2.7) * 6; i ? g.lineTo(Math.cos(a) * r, Math.sin(a) * r) : g.moveTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#5a4536'; for (const [x, y, r] of [[-10, -6, 7], [10, 8, 6], [4, -14, 4], [-8, 14, 4]]) { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
    g.fillStyle = 'rgba(255,255,255,0.15)'; g.beginPath(); g.arc(-10, -14, 8, 0, TAU); g.fill();
  });
  SPR.sat = mk(80, 80, (g) => {
    g.translate(40, 40); g.strokeStyle = '#0d0b18'; g.lineWidth = 3;
    g.fillStyle = '#3d7cff'; for (const s of [-1, 1]) { g.fillRect(s * 14 - (s < 0 ? 18 : 0), -7, 18, 14); g.strokeRect(s * 14 - (s < 0 ? 18 : 0), -7, 18, 14); }
    g.fillStyle = '#e8e8f0'; g.beginPath(); g.arc(0, 0, 13, 0, TAU); g.fill(); g.stroke();
    g.fillStyle = '#ff6b35'; g.beginPath(); g.arc(0, 0, 6, 0, TAU); g.fill();
  });
  SPR.satCore = mk(80, 80, (g) => {
    g.translate(40, 40); g.strokeStyle = '#0d0b18'; g.lineWidth = 3;
    g.fillStyle = '#ffd23a'; for (const s of [-1, 1]) { g.fillRect(s * 14 - (s < 0 ? 18 : 0), -7, 18, 14); g.strokeRect(s * 14 - (s < 0 ? 18 : 0), -7, 18, 14); }
    g.fillStyle = '#fff'; g.beginPath(); g.arc(0, 0, 14, 0, TAU); g.fill(); g.stroke();
    g.fillStyle = '#ff6b35'; g.font = 'bold 14px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('2x', 0, 1);
  });
  SPR.glowO = glowSprite('rgba(255,140,60,1)');
  SPR.glowY = glowSprite('rgba(255,230,120,1)');
  SPR.glowB = glowSprite('rgba(120,220,255,1)');
  SPR.glowR = glowSprite('rgba(255,70,70,1)');
  SPR.glowP = glowSprite('rgba(220,120,255,1)');
  SPR.glowW = glowSprite('rgba(255,255,255,1)');
  // Fuchskopf fürs HUD (Leben)
  SPR.foxHead = mk(40, 40, (g) => {
    g.translate(20, 22); g.strokeStyle = '#1d1410'; g.lineWidth = 2.5; g.lineJoin = 'round';
    g.fillStyle = '#ff6b35';
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 4, -8); g.lineTo(s * 14, -18); g.lineTo(s * 14, -4); g.closePath(); g.fill(); g.stroke(); }
    g.beginPath(); g.moveTo(-15, -6); g.quadraticCurveTo(-14, 10, 0, 15); g.quadraticCurveTo(14, 10, 15, -6); g.quadraticCurveTo(0, -12, -15, -6); g.fill(); g.stroke();
    g.fillStyle = '#fff5ea'; g.beginPath(); g.moveTo(-9, 3); g.quadraticCurveTo(0, 18, 9, 3); g.quadraticCurveTo(0, 7, -9, 3); g.fill();
    g.fillStyle = '#1d1410'; g.beginPath(); g.arc(-5, -1, 1.8, 0, TAU); g.arc(5, -1, 1.8, 0, TAU); g.fill(); g.beginPath(); g.arc(0, 11, 2, 0, TAU); g.fill();
  });
}

// ---------------------------------------------------------------- Planeten & Hintergrund
const PLANETS = [
  { name: 'NEPTUN', c1: '#2f5bff', c2: '#0b1a6b', band: 'rgba(140,190,255,0.1)', neb: [40, 70, 200], spot: '#1a2a90' },
  { name: 'URANUS', c1: '#8ff0ff', c2: '#1f7f9a', band: 'rgba(255,255,255,0.15)', neb: [30, 140, 160], ring: 'v' },
  { name: 'SATURN', c1: '#f2d39a', c2: '#8a6a30', band: 'rgba(120,80,30,0.3)', neb: [150, 110, 50], ring: 'h' },
  { name: 'JUPITER', c1: '#f0c8a0', c2: '#8a4a2a', band: 'rgba(150,70,30,0.45)', neb: [170, 80, 40], spot: '#c0402a' },
  { name: 'MARS', c1: '#ff7a4a', c2: '#7a1f0a', band: 'rgba(90,20,10,0.25)', neb: [190, 50, 40], craters: true },
  { name: 'ERDE', c1: '#3a8cff', c2: '#0a2a6a', band: 'rgba(255,255,255,0.0)', neb: [40, 90, 160], earth: true },
];
function planetSprite(P, size) {
  return mk(size * 2.4, size * 2.4, (g, w) => {
    const c = w / 2, r = size;
    g.translate(c, c);
    const ringDraw = (front) => {
      if (!P.ring) return;
      g.save();
      if (P.ring === 'v') g.rotate(1.35); else g.rotate(-0.35);
      g.scale(1, 0.28);
      g.lineWidth = r * 0.16;
      g.strokeStyle = P.ring === 'h' ? 'rgba(230,200,140,0.85)' : 'rgba(200,250,255,0.6)';
      g.beginPath(); g.arc(0, 0, r * 1.75, front ? 0 : Math.PI, front ? Math.PI : TAU); g.stroke();
      g.lineWidth = r * 0.06; g.strokeStyle = P.ring === 'h' ? 'rgba(160,120,70,0.8)' : 'rgba(150,220,240,0.5)';
      g.beginPath(); g.arc(0, 0, r * 1.5, front ? 0 : Math.PI, front ? Math.PI : TAU); g.stroke();
      g.restore();
    };
    ringDraw(false);
    // Atmosphäre
    const at = g.createRadialGradient(0, 0, r * 0.9, 0, 0, r * 1.25);
    at.addColorStop(0, P.c1.replace('#', 'rgba(') && 'rgba(255,255,255,0.18)'); at.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = at; g.beginPath(); g.arc(0, 0, r * 1.25, 0, TAU); g.fill();
    g.save();
    g.beginPath(); g.arc(0, 0, r, 0, TAU); g.clip();
    const gr = g.createRadialGradient(-r * 0.4, -r * 0.4, r * 0.1, 0, 0, r * 1.1);
    gr.addColorStop(0, P.c1); gr.addColorStop(1, P.c2);
    g.fillStyle = gr; g.fillRect(-r, -r, r * 2, r * 2);
    // Bänder
    g.fillStyle = P.band;
    for (let i = -6; i <= 6; i++) { const y = i * r * 0.16 + Math.sin(i * 1.7) * r * 0.03; g.fillRect(-r, y, r * 2, r * (0.05 + (Math.abs(Math.sin(i * 2.1)) * 0.06))); }
    if (P.spot) { g.fillStyle = P.spot; g.beginPath(); g.ellipse(r * 0.3, r * 0.25, r * 0.22, r * 0.12, 0, 0, TAU); g.fill(); }
    if (P.craters) { g.fillStyle = 'rgba(60,10,0,0.35)'; for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(Math.sin(i * 3.3) * r * 0.7, Math.cos(i * 2.1) * r * 0.7, r * (0.04 + (i % 4) * 0.025), 0, TAU); g.fill(); } }
    if (P.earth) {
      g.fillStyle = '#3fae4a';
      const blobs = [[-0.35, -0.2, 0.32, 0.22], [0.25, -0.35, 0.22, 0.18], [0.3, 0.2, 0.3, 0.2], [-0.2, 0.4, 0.2, 0.12], [-0.6, 0.15, 0.12, 0.2]];
      for (const [x, y, a, b] of blobs) { g.beginPath(); g.ellipse(x * r, y * r, a * r, b * r, x * 2, 0, TAU); g.fill(); }
      g.fillStyle = 'rgba(255,255,255,0.75)';
      for (let i = 0; i < 7; i++) { g.beginPath(); g.ellipse(Math.sin(i * 4.1) * r * 0.6, Math.cos(i * 2.7) * r * 0.6, r * 0.25, r * 0.05, i, 0, TAU); g.fill(); }
    }
    // Schatten (Terminator)
    const sh = g.createRadialGradient(-r * 0.5, -r * 0.5, r * 0.2, -r * 0.2, -r * 0.2, r * 1.6);
    sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(0.6, 'rgba(0,0,10,0.15)'); sh.addColorStop(1, 'rgba(0,0,15,0.85)');
    g.fillStyle = sh; g.fillRect(-r, -r, r * 2, r * 2);
    g.restore();
    ringDraw(true);
  });
}
const BG = { dirty: true, canvas: null, planet: null, level: -1 };
function buildBG(level) {
  const P = PLANETS[level];
  BG.canvas = mk(W, H, (g) => {
    const gr = g.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * 0.7);
    gr.addColorStop(0, '#0d0a24'); gr.addColorStop(1, '#020108');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    // Nebel
    const [r0, g0, b0] = P.neb;
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * TAU, d = rnd(0.2, 1.4) * R;
      const x = CX + Math.cos(a) * d * 1.3, y = CY + Math.sin(a) * d, rr = rnd(0.25, 0.7) * R;
      const n = g.createRadialGradient(x, y, 0, x, y, rr);
      n.addColorStop(0, `rgba(${r0},${g0},${b0},${rnd(0.05, 0.12)})`); n.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = n; g.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    // ferne Sterne
    for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(255,255,255,${rnd(0.15, 0.7)})`; const s = Math.random() < 0.1 ? 2 : 1; g.fillRect(Math.random() * W, Math.random() * H, s * DPR, s * DPR); }
  });
  BG.planet = planetSprite(P, Math.round(R * 0.5));
  BG.level = level; BG.dirty = false;
}

// ---------------------------------------------------------------- Sterne (Flug nach außen)
const STARS = [];
for (let i = 0; i < 220; i++) STARS.push({ a: Math.random() * TAU, d: Math.random() * 1.5, s: rnd(0.3, 1), c: pick(['#ffffff', '#cfe6ff', '#ffe0c0', '#ffd23a']) });

// ---------------------------------------------------------------- Audio (prozedural)
const AU = {
  ctx: null, on: true,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain(); this.master.gain.value = this.on ? 0.8 : 0;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 4;
    this.master.connect(comp).connect(c.destination);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.7; this.sfx.connect(this.master);
    this.mus = c.createGain(); this.mus.gain.value = 0.3; this.mus.connect(this.master);
    this.vo = c.createGain(); this.vo.gain.value = 1.1; this.vo.connect(this.master);
    const len = c.sampleRate; this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.voices = {};
    for (const n of ['start', 'warp', 'boss', 'bonus', 'power', 'clear', 'gameover', 'home', 'p0', 'p1', 'p2', 'p3', 'p4', 'perfect'])
      fetch('voice/' + n + '.mp3').then((r) => (r.ok ? r.arrayBuffer() : null)).then((b) => b && c.decodeAudioData(b)).then((buf) => { if (buf) this.voices[n] = buf; }).catch(() => {});
  },
  resume() { this.init(); if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  set(on) { this.on = on; if (this.master) this.master.gain.setTargetAtTime(on ? 0.8 : 0, this.ctx.currentTime, 0.05); },
  get t() { return this.ctx.currentTime; },
  tone(f, dur, type = 'square', vol = 0.15, slide = 0, at = 0, out) {
    if (!this.ctx) return; const c = this.ctx, t = this.t + at;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f * slide), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g).connect(out || this.sfx); o.start(t); o.stop(t + dur + 0.05);
  },
  noiseB(dur, f = 1000, vol = 0.3, type = 'bandpass', slide = 0, at = 0, out) {
    if (!this.ctx) return; const c = this.ctx, t = this.t + at;
    const s = c.createBufferSource(); s.buffer = this.noise;
    const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); if (slide) fl.frequency.exponentialRampToValueAtTime(f * slide, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(fl).connect(g).connect(out || this.sfx); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  },
  shoot() { this.tone(1400, 0.07, 'square', 0.05, 0.4); },
  boom(big) { this.noiseB(big ? 0.8 : 0.35, big ? 500 : 900, big ? 0.5 : 0.28, 'lowpass', 0.3); if (big) this.tone(90, 0.6, 'sine', 0.35, 0.4); },
  hit() { this.tone(300, 0.05, 'square', 0.06, 0.6); },
  die() { this.noiseB(1.2, 1200, 0.5, 'lowpass', 0.15); this.tone(600, 1.0, 'sawtooth', 0.12, 0.1); },
  power() { [0, 4, 7, 12, 16].forEach((s, i) => this.tone(523 * Math.pow(2, s / 12), 0.12, 'triangle', 0.15, 0, i * 0.06)); },
  warp() { this.noiseB(2.2, 200, 0.3, 'bandpass', 12); this.tone(110, 2.2, 'sawtooth', 0.07, 6); },
  eshot() { this.tone(500, 0.12, 'triangle', 0.05, 0.5); },
  extra() { [0, 7, 12, 19, 24].forEach((s, i) => this.tone(440 * Math.pow(2, s / 12), 0.15, 'square', 0.1, 0, i * 0.08)); },
  voice(n) {
    if (!this.ctx || !this.voices[n]) return false;
    if (this.vs) try { this.vs.stop(); } catch (e) { /* */ }
    const s = this.ctx.createBufferSource(); s.buffer = this.voices[n]; s.connect(this.vo); s.start(); this.vs = s;
    this.mus.gain.setTargetAtTime(0.12, this.t, 0.05); this.mus.gain.setTargetAtTime(0.3, this.t + s.buffer.duration, 0.3);
    return true;
  },
  // Musik: Toccata-Motiv (Bach, gemeinfrei) über treibendem Bass
  startMusic(kind) {
    if (!this.ctx) return; this.stopMusic();
    this.kind = kind; this.step = 0; this.nt = this.t + 0.1;
    this.bpm = kind === 'boss' ? 150 : kind === 'title' ? 110 : 138;
    this.timer = setInterval(() => this.sched(), 40);
  },
  stopMusic() { if (this.timer) clearInterval(this.timer); this.timer = null; },
  sched() {
    const spb = 60 / this.bpm / 4;
    while (this.nt < this.t + 0.15) { this.play(this.step, this.nt - this.t, spb); this.nt += spb; this.step++; }
  },
  play(s, at, spb) {
    const mf = (n) => 440 * Math.pow(2, (n - 69) / 12);
    const out = this.mus;
    const bar = Math.floor(s / 16) % 8, st = s % 16;
    // Harmonie d-Moll: Dm Dm A A Bb Gm A A
    const roots = [50, 50, 45, 45, 46, 43, 45, 45];
    const root = roots[bar];
    if (this.kind !== 'title' && st % 2 === 0) this.tone(mf(root - 12 + (st % 4 === 2 ? 12 : 0)), spb * 1.8, 'triangle', 0.32, 0, at, out);
    if (this.kind === 'title' && st % 4 === 0) this.tone(mf(root - 12), spb * 3.8, 'triangle', 0.3, 0, at, out);
    if (this.kind !== 'title') {
      if (st % 4 === 0) this.tone(140, 0.18, 'sine', 0.45, 0.3, at, out);
      if (st === 4 || st === 12) this.noiseB(0.12, 1800, 0.18, 'bandpass', 0, at, out);
      if (st % 2 === 1) this.noiseB(0.03, 8000, 0.05, 'highpass', 0, at, out);
    }
    // Melodie: Toccata-Anfang (A G A … G F E D C# D) und Arpeggien
    const mel = [
      [81, 0, 79, 81, 0, 0, 0, 0, 79, 77, 76, 74, 73, 0, 74, 0],
      [0, 0, 0, 0, 69, 0, 67, 69, 0, 0, 65, 64, 62, 61, 62, 0],
      [69, 73, 76, 81, 76, 73, 69, 73, 76, 81, 85, 81, 76, 73, 69, 0],
      [73, 76, 79, 81, 79, 76, 73, 76, 79, 76, 73, 69, 73, 0, 69, 0],
      [70, 74, 77, 82, 77, 74, 70, 74, 77, 82, 86, 82, 77, 74, 70, 0],
      [67, 70, 74, 79, 74, 70, 67, 70, 74, 79, 82, 79, 74, 70, 67, 0],
      [69, 73, 76, 81, 79, 77, 76, 74, 73, 74, 76, 77, 79, 81, 82, 81],
      [81, 0, 79, 81, 0, 0, 0, 0, 79, 77, 76, 74, 73, 0, 74, 0],
    ];
    const n = mel[bar][st];
    if (n) this.tone(mf(n - (this.kind === 'title' ? 12 : 0)), spb * 1.7, this.kind === 'title' ? 'triangle' : 'square', this.kind === 'title' ? 0.09 : 0.055, 0, at, out);
  },
};
const soundPref = () => { try { const v = localStorage.getItem('fps_sound_v1'); return v === null ? true : v === '1'; } catch (e) { return true; } };
try { if (localStorage.getItem('fps_sound_v1') === null) localStorage.setItem('fps_sound_v1', '1'); } catch (e) { /* */ }
AU.on = soundPref();
window.addEventListener('storage', (e) => { if (e.key === 'fps_sound_v1') AU.set(soundPref()); });
function toggleSound() { AU.resume(); AU.set(!AU.on); try { localStorage.setItem('fps_sound_v1', AU.on ? '1' : '0'); } catch (e) { /* */ } }

// ---------------------------------------------------------------- Spielzustand
const G = {
  state: 'title', t: 0, stT: 0, score: 0, hi: store.get('orbit_hi', 0), lives: 3, level: 0, stage: 0,
  enemies: [], shots: [], eshots: [], parts: [], pops: [], boss: null,
  shake: 0, flash: 0, msg: '', msgSub: '', msgT: 0, nextLife: 30000,
  formRot: 0, diveT: 0, waveT: 0, spawnQ: [], bonusHits: 0, bonusTotal: 0, warpK: 0, planetK: 0,
  paused: false,
};
const P = { a: Math.PI / 2, ta: Math.PI / 2, alive: true, inv: 0, respawn: 0, dbl: false, cd: 0, fireHeld: false };

// Ablauf eines Levels: 3 Wellen + Endgegner, Bonusrunde nach Level 2 und 4
function stageList(L) { const s = ['w0', 'w1', 'w2', 'boss']; if (L === 1 || L === 3) s.push('bonus'); return s; }

function newGame() {
  G.score = 0; G.lives = 3; G.level = 0; G.stage = 0; G.nextLife = 30000;
  P.dbl = false;
  startLevel(0);
}
function startLevel(L) {
  G.level = L; G.stage = 0;
  BG.dirty = true;
  G.planetK = 0;
  setState('intro');
  banner(PLANETS[L].name, L === 0 ? 'Mission: zurück zur Erde' : 'Nächster Halt', 2.6);
  if (!AU.voice('p' + L)) setTimeout(() => { if (G.state === 'intro') AU.voice('p' + L); }, 900);
  AU.startMusic('game');
}
function setState(s) { G.state = s; G.stT = 0; }
function banner(t, sub, dur = 2) { G.msg = t; G.msgSub = sub || ''; G.msgT = dur; }

function startStage() {
  const st = stageList(G.level)[G.stage];
  G.enemies.length = 0; G.eshots.length = 0; G.spawnQ.length = 0; G.boss = null;
  G.waveT = 0; G.diveT = 2; G.formRot = 0;
  G.planetK = Math.min(1, G.stage / 3);
  if (st === 'boss') { spawnBoss(); setState('play'); banner('MEGA-HENNE!', 'Schieß die Schilde weg', 2.2); AU.voice('boss'); AU.startMusic('boss'); return; }
  if (st === 'bonus') { setupBonus(); setState('play'); banner('BONUSRUNDE', 'Triff so viele wie möglich', 2.2); AU.voice('bonus'); return; }
  setupWave(+st[1]);
  setState('play');
  const left = 3 - +st[1];
  banner('WARP ' + (+st[1] + 1) + '/3', left === 3 ? PLANETS[G.level].name + ' voraus' : 'Noch ' + left + ' bis ' + PLANETS[G.level].name, 1.6);
}

// ---------------------------------------------------------------- Wellen
const PATTERNS = ['spiral', 'loop', 'swing', 'spiral2', 'cross'];
function setupWave(w) {
  const L = G.level;
  const groups = 4 + (L >= 2 ? 1 : 0) + (w === 2 ? 1 : 0);
  const types = ['drone'];
  if (L >= 1) types.push('spinner');
  if (L >= 2) types.push('bomber');
  if (L >= 3) types.push('kami');
  let slot = 0;
  for (let gi = 0; gi < groups; gi++) {
    const pat = PATTERNS[(gi + w + L) % PATTERNS.length];
    const type = gi === 0 ? 'drone' : pick(types);
    const dir = gi % 2 ? 1 : -1;
    const a0 = rnd(0, TAU);
    for (let k = 0; k < 8; k++) {
      const ring = slot % 2, idx = Math.floor(slot / 2);
      const slotA = (idx / 24) * TAU + ring * (TAU / 48);
      const slotD = ring ? 0.46 : 0.33;
      G.spawnQ.push({ t: gi * 2.1 + k * 0.13 + 0.8, type, pat, dir, a0: a0 + k * 0.02, slotA, slotD });
      slot++;
    }
  }
  if (w === 1) G.spawnQ.push({ t: groups * 2.1 + 1.2, sats: true });
  if (L >= 4 || (L >= 2 && w === 2)) for (let i = 0; i < 4 + L; i++) G.spawnQ.push({ t: 4 + i * 3.2, rock: true });
}
const STATS = {
  drone: { hp: 1, pts: 100, r: 22 },
  spinner: { hp: 1, pts: 150, r: 22 },
  bomber: { hp: 2, pts: 300, r: 26 },
  kami: { hp: 1, pts: 200, r: 22 },
  rock: { hp: 4, pts: 500, r: 20 },
  sat: { hp: 1, pts: 1000, r: 14 },
};
function spawnEnemy(q) {
  if (q.sats) {
    const base = rnd(0, TAU);
    for (let i = 0; i < 3; i++) G.enemies.push({ type: 'sat', core: i === 1, a: base, d: 0.02, t: 0, i, hp: 1, r: 20, st: 'sat', life: 9 });
    return;
  }
  if (q.rock) { G.enemies.push({ type: 'rock', a: rnd(0, TAU), d: 0.02, hp: 4, r: 20, pts: 500, st: 'rock', t: 0, spin: rnd(-2, 2), noWave: true }); return; }
  const s = STATS[q.type];
  G.enemies.push({ type: q.type, hp: s.hp, r: s.r, pts: s.pts, st: 'enter', t: 0, pat: q.pat, dir: q.dir, a0: q.a0, slotA: q.slotA, slotD: q.slotD, a: q.a0, d: 0.02, cd: rnd(0.5, 2), ph: Math.random() * TAU, bonus: q.bonus });
}
// Einflugbahn: s läuft 0..1, Endpunkt = Formationsplatz
function enterPath(e, s) {
  const tgtA = e.slotA + G.formRot;
  let a, d;
  switch (e.pat) {
    case 'spiral': a = tgtA + e.dir * (1 - ease(s)) * TAU * 1.25; d = lerp(0.02, e.slotD, ease(s)) + 0.42 * Math.pow(Math.sin(Math.PI * s), 2); break;
    case 'spiral2': a = tgtA - e.dir * (1 - s) * TAU * 0.8; d = lerp(0.02, e.slotD, s) + 0.5 * Math.sin(Math.PI * s); break;
    case 'loop': a = tgtA + e.dir * Math.sin(Math.PI * s) * 1.6; d = lerp(0.02, e.slotD, ease(s)) + 0.55 * Math.sin(Math.PI * s); break;
    case 'swing': a = lerp(e.a0, tgtA + e.dir * TAU, ease(s)); d = lerp(0.02, e.slotD, s) + 0.3 * Math.abs(Math.sin(TAU * s)); break;
    default: a = tgtA + e.dir * (1 - s) * Math.PI; d = lerp(0.02, e.slotD, s) + 0.62 * Math.sin(Math.PI * s);
  }
  e.a = a; e.d = d;
}
function bonusPath(e, s) {
  // Bonusrunde: nach außen schwingen und wieder in der Mitte verschwinden
  e.a = e.a0 + e.dir * s * TAU * 1.3;
  e.d = 0.02 + 0.9 * Math.sin(Math.PI * s);
}
function setupBonus() {
  G.bonusHits = 0; G.bonusTotal = 0;
  for (let gi = 0; gi < 5; gi++) {
    const a0 = rnd(0, TAU), dir = gi % 2 ? 1 : -1;
    for (let k = 0; k < 8; k++) { G.spawnQ.push({ t: 0.8 + gi * 2.6 + k * 0.14, type: pick(['drone', 'spinner']), pat: 'bonus', dir, a0: a0 + k * 0.05, slotA: 0, slotD: 0, bonus: true }); G.bonusTotal++; }
  }
}

// ---------------------------------------------------------------- Endgegner
function spawnBoss() {
  const L = G.level;
  const rings = [{ d: 0.32, n: 12, rot: 0.5, hp: 2 + Math.floor(L / 2), segs: [] }];
  if (L >= 3) rings.push({ d: 0.44, n: 16, rot: -0.35, hp: 2, segs: [] });
  for (const r of rings) for (let i = 0; i < r.n; i++) r.segs.push({ hp: r.hp, flash: 0 });
  G.boss = { hp: 40 + L * 18, max: 40 + L * 18, rings, rot: 0, t: 0, atk: 2, flash: 0, spawnT: 6, dead: false, deathT: 0 };
}
function bossUpdate(dt) {
  const B = G.boss; if (!B) return;
  B.t += dt;
  if (B.dead) {
    B.deathT += dt;
    if (Math.random() < 0.5) boom(px(rnd(0, TAU), rnd(0, 0.25)), py(rnd(0, TAU), rnd(0, 0.25)), 'O', 14, 1.4);
    if (B.deathT > 2.2) { G.boss = null; stageDone(); }
    return;
  }
  for (const r of B.rings) r.ang = (r.ang || 0) + r.rot * dt * (1 + (1 - B.hp / B.max));
  for (const r of B.rings) for (const s of r.segs) s.flash = Math.max(0, s.flash - dt);
  B.flash = Math.max(0, B.flash - dt);
  B.atk -= dt;
  const rage = 1 - B.hp / B.max, L = G.level;
  if (B.atk <= 0) {
    const pat = Math.floor(B.t / 5) % 3;
    if (pat === 0) { const n = 10 + L * 2; const o = rnd(0, TAU); for (let i = 0; i < n; i++) eshot(o + (i / n) * TAU, 0.12, 0.55 + L * 0.06); B.atk = 1.9 - rage * 0.6 - L * 0.1; }
    else if (pat === 1) { for (let i = 0; i < 3; i++) eshot(P.a + (i - 1) * 0.12, 0.12, 0.75 + L * 0.06); B.atk = 0.9 - rage * 0.3; }
    else { B.spiral = (B.spiral || 0) + 0.45; for (let i = 0; i < 3; i++) eshot(B.spiral + (i / 3) * TAU, 0.12, 0.6); B.atk = 0.22; }
    AU.eshot();
  }
  B.spawnT -= dt;
  if (B.spawnT <= 0) {
    B.spawnT = 9 - L;
    const a0 = rnd(0, TAU);
    for (let k = 0; k < 4 + L; k++) G.spawnQ.push({ t: G.waveT + k * 0.15, type: L >= 3 ? 'kami' : 'drone', pat: 'loop', dir: 1, a0, slotA: rnd(0, TAU), slotD: 0.55 });
  }
}
// Schuss trifft Schild oder Kern? (Schuss läuft von außen nach innen)
function bossHit(s, d0, d1) {
  const B = G.boss; if (!B || B.dead) return false;
  for (const r of B.rings) {
    if (d0 >= r.d && d1 < r.d) {
      const seg = r.n; const rel = ((s.a - r.ang) % TAU + TAU) % TAU; const i = Math.floor(rel / (TAU / seg));
      const frac = rel / (TAU / seg) - i;
      const sg = r.segs[i];
      if (sg.hp > 0 && frac > 0.08 && frac < 0.92) {
        sg.hp--; sg.flash = 0.1; AU.hit();
        const a = r.ang + (i + 0.5) * (TAU / seg);
        sparks(px(a, r.d), py(a, r.d), '#9fe8ff', 6);
        if (sg.hp <= 0) { addScore(200, px(a, r.d), py(a, r.d)); boom(px(a, r.d), py(a, r.d), 'B', 10, 0.8); AU.boom(false); }
        return true;
      }
    }
  }
  if (d1 < 0.2) {
    B.hp--; B.flash = 0.08; AU.hit(); sparks(CX + rnd(-20, 20) * S, CY + rnd(-20, 20) * S, '#ffd23a', 6);
    if (B.hp <= 0) {
      B.dead = true; AU.boom(true); G.shake = 1.2; G.flash = 0.8;
      addScore(5000 + G.level * 2500, CX, CY - 40 * S);
      G.eshots.length = 0;
      for (const e of G.enemies) if (!e.dead) { e.dead = true; boom(px(e.a, e.d), py(e.a, e.d), 'O', 12, kd(e.d)); }
    }
    return true;
  }
  return false;
}

// ---------------------------------------------------------------- Schüsse & Effekte
function eshot(a, d, sp) { G.eshots.push({ a, d, sp }); }
function fire() {
  if (P.cd > 0 || !P.alive) return;
  const max = P.dbl ? 8 : 5;
  if (G.shots.length >= max) return;
  P.cd = 0.15;
  if (P.dbl) { G.shots.push({ a: P.a - 0.045, d: 0.95 }); G.shots.push({ a: P.a + 0.045, d: 0.95 }); }
  else G.shots.push({ a: P.a, d: 0.95 });
  AU.shoot();
}
function part(o) { if (G.parts.length > 900) G.parts.shift(); G.parts.push(o); }
function sparks(x, y, col, n) { for (let i = 0; i < n; i++) { const a = rnd(0, TAU), s = rnd(60, 260) * S; part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rnd(0.2, 0.45), t: 0, size: rnd(1.5, 3) * S, col, spark: true }); } }
function boom(x, y, g, n = 18, k = 1) {
  const glow = { O: SPR.glowO, B: SPR.glowB, Y: SPR.glowY, R: SPR.glowR, P: SPR.glowP }[g] || SPR.glowO;
  part({ x, y, vx: 0, vy: 0, life: 0.4, t: 0, size: 70 * S * k, glow, ring: true });
  for (let i = 0; i < n; i++) { const a = rnd(0, TAU), s = rnd(40, 320) * S * k; part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rnd(0.3, 0.8), t: 0, size: rnd(10, 26) * S * k, glow }); }
  for (let i = 0; i < n / 2; i++) { const a = rnd(0, TAU), s = rnd(80, 380) * S * k; part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rnd(0.25, 0.6), t: 0, size: rnd(1.5, 3.5) * S, col: pick(['#fff3a0', '#ffd23a', '#ff6b35', '#ffffff']), spark: true }); }
}
function addScore(n, x, y) {
  G.score += n;
  if (x !== undefined) G.pops.push({ x, y, txt: String(n), t: 0 });
  if (G.score >= G.nextLife) { G.lives++; G.nextLife += G.nextLife < 80000 ? 50000 : 70000; AU.extra(); banner('EXTRALEBEN!', '', 1.2); }
  if (G.score > G.hi) { G.hi = G.score; }
}
function killEnemy(e, byShot) {
  e.dead = true;
  const x = px(e.a, e.d), y = py(e.a, e.d), k = kd(e.d);
  if (e.type === 'sat') {
    if (e.core) { if (!P.dbl) { P.dbl = true; banner('DOPPELLASER!', '', 1.4); AU.voice('power'); } else addScore(5000, x, y); AU.power(); }
    else addScore(1000, x, y);
    boom(x, y, 'Y', 14, k);
    return;
  }
  if (e.bonus) { G.bonusHits++; addScore(100, x, y); boom(x, y, 'Y', 12, k); AU.boom(false); return; }
  const diving = e.st === 'dive' || e.st === 'enter';
  addScore(diving ? e.pts * 2 : e.pts, x, y);
  boom(x, y, e.type === 'spinner' ? 'B' : e.type === 'bomber' ? 'P' : 'O', 16, k);
  AU.boom(e.type === 'bomber' || e.type === 'rock');
  if (byShot) G.shake = Math.max(G.shake, 0.15);
}
function killPlayer() {
  if (!P.alive || P.inv > 0) return;
  P.alive = false; P.dbl = false; P.respawn = 2.4;
  const x = px(P.a, 1), y = py(P.a, 1);
  boom(x, y, 'O', 40, 1.6); boom(x, y, 'Y', 20, 1); G.shake = 1; G.flash = 0.6;
  AU.die();
  G.lives--;
  G.eshots.length = 0;
}

// ---------------------------------------------------------------- Eingabe
const K = {};
let mouseA = null, mouseDown = false, touchActive = false, touchA = null, useMouse = false;
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if ([' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'].includes(k)) e.preventDefault();
  AU.resume();
  if (k === 'm') { toggleSound(); return; }
  if ((k === 'p' || k === 'escape') && (G.state === 'play' || G.state === 'intro' || G.state === 'warp')) { G.paused = !G.paused; return; }
  if (G.paused && (k === ' ' || k === 'enter')) { G.paused = false; return; }
  if (G.state === 'title' && (k === ' ' || k === 'enter')) { start(); return; }
  if ((G.state === 'over' || G.state === 'win') && G.stT > 1.5 && (k === ' ' || k === 'enter')) { toTitle(); return; }
  K[k] = true; useMouse = false;
});
window.addEventListener('keyup', (e) => { K[e.key.toLowerCase()] = false; });
window.addEventListener('blur', () => { for (const k in K) K[k] = false; mouseDown = false; if (G.state === 'play' && !TEST) G.paused = true; });
function angleAt(e) {
  const r = cv.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width * W, y = (e.clientY - r.top) / r.height * H;
  return { a: Math.atan2(y - CY, x - CX), x, y };
}
cv.addEventListener('pointermove', (e) => {
  const p = angleAt(e);
  if (e.pointerType === 'mouse') { mouseA = p.a; useMouse = true; }
  else if (touchActive) touchA = p.a;
});
cv.addEventListener('pointerdown', (e) => {
  e.preventDefault(); AU.resume();
  const p = angleAt(e);
  // Knöpfe oben rechts (Ton, Pause)
  if (hitButton(p.x, p.y)) return;
  if (G.state === 'title') { start(); return; }
  if ((G.state === 'over' || G.state === 'win') && G.stT > 1.5) { toTitle(); return; }
  if (G.paused) { G.paused = false; return; }
  if (e.pointerType === 'mouse') { mouseDown = true; mouseA = p.a; useMouse = true; }
  else { touchActive = true; touchA = p.a; }
  try { cv.setPointerCapture(e.pointerId); } catch (err) { /* */ }
});
const up = (e) => { if (e.pointerType === 'mouse') mouseDown = false; else { touchActive = false; } };
cv.addEventListener('pointerup', up);
cv.addEventListener('pointercancel', up);
cv.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('visibilitychange', () => { if (document.hidden && G.state === 'play') G.paused = true; });
document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

function buttons() {
  const s = 36 * DPR, m = 10 * DPR;
  return [{ id: 'snd', x: W - m - s, y: m, w: s, h: s }, { id: 'pause', x: W - m * 2 - s * 2, y: m, w: s, h: s }];
}
function hitButton(x, y) {
  for (const b of buttons()) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
    if (b.id === 'snd') toggleSound();
    else if (G.state === 'play' || G.state === 'intro' || G.state === 'warp') G.paused = !G.paused;
    return true;
  }
  return false;
}

function playerInput(dt) {
  // Zielrichtung: Tastatur (wie ein Joystick), Maus oder Finger
  let tx = 0, ty = 0;
  if (K.arrowleft || K.a) tx -= 1; if (K.arrowright || K.d) tx += 1;
  if (K.arrowup || K.w) ty -= 1; if (K.arrowdown || K.s) ty += 1;
  let target = null;
  if (tx || ty) target = Math.atan2(ty, tx);
  else if (touchActive && touchA !== null) target = touchA;
  else if (useMouse && mouseA !== null) target = mouseA;
  if (target !== null) {
    const d = wrapA(target - P.a);
    const sp = 5.2 * dt;
    P.a += clamp(d, -sp, sp);
  }
  P.a = wrapA(P.a);
  const firing = K[' '] || K.x || K.j || mouseDown || touchActive || (coarse && G.state === 'play');
  if (firing) fire();
}

// ---------------------------------------------------------------- Ablauf
function start() {
  AU.resume();
  newGame();
}
function toTitle() { setState('title'); AU.startMusic('title'); G.enemies.length = 0; G.shots.length = 0; G.eshots.length = 0; G.boss = null; }
function stageDone() {
  const list = stageList(G.level);
  const st = list[G.stage];
  if (st === 'bonus') {
    const perfect = G.bonusHits === G.bonusTotal;
    const b = perfect ? 10000 : G.bonusHits * 100;
    G.score += b; addScore(0);
    banner(perfect ? 'PERFEKT!' : 'BONUS ' + G.bonusHits + '/' + G.bonusTotal, '+' + b + ' Punkte', 2.4);
    if (perfect) AU.voice('perfect');
  } else if (st === 'boss') {
    banner('PLANET ERREICHT!', PLANETS[G.level].name + ' gesichert', 2.4); AU.voice('clear');
  }
  G.stage++;
  if (G.stage >= list.length) {
    if (G.level >= 4) { setState('win'); BG.dirty = true; G.level = 5; AU.voice('home'); AU.startMusic('title'); saveHi(); return; }
    setState('warp'); G.warpNext = 'level';
  } else { setState('warp'); G.warpNext = 'stage'; }
  if (st !== 'bonus' && st !== 'boss') AU.voice('warp');
  AU.warp();
  if (st === 'boss') AU.startMusic('game');
}
function saveHi() { if (G.score > store.get('orbit_hi', 0)) store.set('orbit_hi', G.score); try { parent.postMessage({ type: 'orbitfuchs:best', best: G.score }, location.origin); } catch (e) { /* */ } }

function update(dt) {
  G.t += dt; G.stT += dt;
  if (G.msgT > 0) G.msgT -= dt;
  G.shake = Math.max(0, G.shake - dt * 2.5);
  G.flash = Math.max(0, G.flash - dt * 2);
  // Sterne
  const warp = G.state === 'warp' ? Math.min(1, G.stT / 0.6) * (G.stT < 2.2 ? 1 : Math.max(0, 1 - (G.stT - 2.2) / 0.5)) : 0;
  G.warpK = warp;
  for (const s of STARS) { s.d += dt * s.s * (0.08 + s.d * 0.5) * (1 + warp * 14); if (s.d > 1.6) { s.d = rnd(0.01, 0.08); s.a = rnd(0, TAU); } }
  // Partikel
  for (const p of G.parts) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 1 - 2.2 * dt; p.vy *= 1 - 2.2 * dt; }
  G.parts = G.parts.filter((p) => p.t < p.life);
  for (const p of G.pops) p.t += dt;
  G.pops = G.pops.filter((p) => p.t < 0.9);

  if (G.state === 'title' || G.state === 'over' || G.state === 'win') return;
  if (G.state === 'intro') { playerInput(dt); P.cd -= dt; if (G.stT > 2.4) startStage(); return; }
  if (G.state === 'warp') {
    playerInput(dt); P.cd = 1; G.shots.length = 0;
    G.planetK = Math.min(1, G.planetK + dt * 0.15);
    if (G.stT > 2.8) { if (G.warpNext === 'level') startLevel(G.level + 1); else startStage(); }
    return;
  }
  // ---- play
  playerInput(dt);
  P.cd -= dt;
  if (!P.alive) {
    P.respawn -= dt;
    if (P.respawn <= 0) {
      if (G.lives <= 0) { setState('over'); saveHi(); AU.voice('gameover'); AU.stopMusic(); return; }
      P.alive = true; P.inv = 2.2;
    }
  }
  if (P.inv > 0) P.inv -= dt;
  G.waveT += dt;
  G.formRot += dt * 0.22;
  // Spawns
  for (let i = G.spawnQ.length - 1; i >= 0; i--) if (G.spawnQ[i].t <= G.waveT) { spawnEnemy(G.spawnQ[i]); G.spawnQ.splice(i, 1); }
  bossUpdate(dt);
  const L = G.level, stg = stageList(L)[G.stage];
  // Angriffe aus der Formation
  G.diveT -= dt;
  if (G.diveT <= 0 && stg !== 'bonus') {
    const cand = G.enemies.filter((e) => e.st === 'form' && !e.dead);
    if (cand.length) {
      const n = 1 + (L >= 2 && Math.random() < 0.4 ? 1 : 0);
      for (let i = 0; i < n && cand.length; i++) { const e = cand.splice((Math.random() * cand.length) | 0, 1)[0]; e.st = 'dive'; e.t = 0; e.da = e.a; e.dd = e.d; e.fired = false; e.dur = e.type === 'kami' ? 1.5 : 2.6 - L * 0.12; }
    }
    G.diveT = Math.max(0.7, 2.2 - L * 0.28 - G.waveT * 0.01);
  }
  for (const e of G.enemies) {
    if (e.dead) continue;
    e.t += dt;
    switch (e.st) {
      case 'enter': {
        const dur = e.bonus ? 4.2 : 2.6 - L * 0.1;
        const s = Math.min(1, e.t / dur);
        if (e.bonus) { bonusPath(e, s); if (s >= 1) { e.dead = true; e.gone = true; } }
        else { enterPath(e, s); if (s >= 1) { e.st = 'form'; e.t = 0; } }
        break;
      }
      case 'form': {
        e.a = e.slotA + G.formRot * (e.type === 'spinner' ? 1.6 : 1) + Math.sin(G.t * 1.5 + e.slotA * 3) * 0.04;
        e.d = e.slotD + Math.sin(G.t * 2 + e.slotA * 5) * 0.025;
        e.cd -= dt;
        if (e.cd <= 0 && e.type === 'bomber') { e.cd = rnd(3, 5) - L * 0.3; for (let i = -1; i <= 1; i++) eshot(e.a + i * 0.15, e.d, 0.55 + L * 0.05); AU.eshot(); }
        else if (e.cd <= 0) { e.cd = rnd(3, 6) - L * 0.4; if (Math.random() < 0.25 + L * 0.08) { eshot(e.a, e.d, 0.5 + L * 0.05); AU.eshot(); } }
        break;
      }
      case 'dive': {
        const s = Math.min(1, e.t / e.dur);
        if (e.type === 'kami') {
          // Sturzflug direkt auf den Fuchs
          e.a += clamp(wrapA(P.a - e.a), -2.4 * dt, 2.4 * dt);
          e.d = lerp(e.dd, 1.15, ease(s));
          if (s >= 1) { e.st = 'enter'; e.t = 0; e.d = 0.02; e.pat = pick(PATTERNS); }
        } else {
          const tgt = e.da + clamp(wrapA(P.a - e.da), -1.2, 1.2) * Math.sin(Math.PI * s * 0.5);
          e.a = tgt + (e.type === 'spinner' ? Math.sin(s * TAU * 2) * 0.35 : 0);
          e.d = e.dd + (0.9 - e.dd) * Math.sin(Math.PI * s);
          if (!e.fired && s > 0.4) { e.fired = true; const n = e.type === 'bomber' ? 3 : 1; for (let i = 0; i < n; i++) eshot(e.a + (i - (n - 1) / 2) * 0.12, e.d, 0.7 + L * 0.06); AU.eshot(); }
          if (s >= 1) { e.st = 'form'; e.t = 0; }
        }
        break;
      }
      case 'sat': {
        // drei Satelliten kreisen aus der Mitte heraus
        e.d = Math.min(0.42, e.d + dt * 0.25);
        e.a += dt * 1.1;
        const base = e.a;
        e.sa = base + (e.i - 1) * 0.32;
        e.life -= dt;
        if (e.life <= 0) { e.dead = true; e.gone = true; }
        break;
      }
      case 'rock': {
        e.d += dt * (0.08 + e.d * 0.35);
        if (e.d > 1.25) { e.dead = true; e.gone = true; }
        break;
      }
    }
    // Kollision mit dem Spieler
    if (P.alive && P.inv <= 0 && !e.bonus && e.st !== 'sat' && e.d > 0.88 && e.d < 1.12) {
      const ea = e.st === 'sat' ? e.sa : e.a;
      const dx = px(ea, e.d) - px(P.a, 1), dy = py(ea, e.d) - py(P.a, 1);
      if (Math.hypot(dx, dy) < (e.r * kd(e.d) + 16) * S) { killPlayer(); if (e.type !== 'rock') killEnemy(e, false); }
    }
  }
  // Wellen-Ende: Nachzügler fliegen nach einer Weile weg
  if (stg !== 'boss' && stg !== 'bonus' && !G.spawnQ.some((q) => !q.rock && !q.sats) && G.waveT > 40) {
    for (const e of G.enemies) if (!e.dead && e.st === 'form') { e.st = 'leave'; e.t = 0; }
  }
  for (const e of G.enemies) if (e.st === 'leave' && !e.dead) { e.d -= dt * 0.35; e.a += dt * 1.5; if (e.d <= 0.02) { e.dead = true; e.gone = true; } }
  // Schüsse des Spielers
  for (const s of G.shots) {
    const d0 = s.d;
    s.d -= dt * (0.35 + 1.9 * s.d);
    if (G.boss && bossHit(s, d0, s.d)) { s.dead = true; continue; }
    if (s.d < 0.04) { s.dead = true; continue; }
    const sx = px(s.a, s.d), sy = py(s.a, s.d);
    for (const e of G.enemies) {
      if (e.dead) continue;
      const ea = e.st === 'sat' ? e.sa : e.a;
      if (Math.abs(e.d - s.d) > 0.15) continue;
      const ex = px(ea, e.d), ey = py(ea, e.d);
      if (Math.hypot(ex - sx, ey - sy) < (e.r * kd(e.d) + 5) * S) {
        s.dead = true;
        e.hp--;
        if (e.hp <= 0) killEnemy(e, true);
        else { e.flash = 0.08; AU.hit(); sparks(ex, ey, '#fff', 5); }
        break;
      }
    }
  }
  G.shots = G.shots.filter((s) => !s.dead);
  // Schüsse der Gegner
  for (const b of G.eshots) {
    b.d += dt * b.sp * (0.25 + b.d * 0.9);
    if (b.d > 1.3) b.dead = true;
    if (P.alive && P.inv <= 0 && b.d > 0.92 && b.d < 1.06) {
      const dx = px(b.a, b.d) - px(P.a, 1), dy = py(b.a, b.d) - py(P.a, 1);
      if (Math.hypot(dx, dy) < 15 * S) { b.dead = true; killPlayer(); }
    }
  }
  G.eshots = G.eshots.filter((b) => !b.dead);
  for (const e of G.enemies) if (e.flash) e.flash = Math.max(0, e.flash - dt);
  G.enemies = G.enemies.filter((e) => !e.dead);
  // Stufe geschafft?
  if (stg !== 'boss' && G.spawnQ.length === 0 && G.enemies.filter((e) => !e.noWave && e.type !== 'sat').length === 0 && G.waveT > 2 && P.alive) {
    G.enemies.length = 0;
    stageDone();
  }
}

// ---------------------------------------------------------------- Zeichnen
function drawSprite(img, x, y, rot, scale, alpha = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.globalAlpha = alpha;
  const w = img.width * scale, h = img.height * scale;
  ctx.drawImage(img, -w / 2, -h / 2, w, h); ctx.restore();
}
function glow(img, x, y, size, alpha = 1) { ctx.globalAlpha = alpha; ctx.drawImage(img, x - size / 2, y - size / 2, size, size); ctx.globalAlpha = 1; }

function render() {
  if (BG.dirty || BG.level !== Math.min(G.level, 5)) buildBG(Math.min(G.level, 5));
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(BG.canvas, 0, 0);
  const sh = G.shake * 10 * S;
  ctx.translate(rnd(-sh, sh), rnd(-sh, sh));
  // Planet in der Mitte (wird pro Warp größer)
  const pk = G.state === 'title' ? 0.55 : G.state === 'win' ? 1.6 : 0.35 + G.planetK * 0.65 + (G.boss ? 0.1 : 0);
  const pw = BG.planet.width * pk;
  ctx.globalAlpha = G.state === 'title' ? 0.9 : 0.95;
  ctx.drawImage(BG.planet, CX - pw / 2, CY - pw / 2, pw, pw);
  ctx.globalAlpha = 1;
  // Sterne
  ctx.globalCompositeOperation = 'lighter';
  for (const s of STARS) {
    const x = px(s.a, s.d), y = py(s.a, s.d);
    const len = (2 + G.warpK * 60 * s.d) * S;
    ctx.strokeStyle = s.c; ctx.globalAlpha = Math.min(1, s.d * 1.5) * (0.4 + s.s * 0.6);
    ctx.lineWidth = Math.max(1, (s.d * 2.2) * S * DPR * 0.6);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - Math.cos(s.a) * len, y - Math.sin(s.a) * len); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  // Bahn des Spielers
  ctx.strokeStyle = 'rgba(255,107,53,0.10)'; ctx.lineWidth = 2 * DPR;
  ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.stroke();
  ctx.strokeStyle = 'rgba(120,200,255,0.05)'; ctx.beginPath(); ctx.arc(CX, CY, R * 0.33, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(CX, CY, R * 0.46, 0, TAU); ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';

  if (G.state !== 'title') {
    drawBoss();
    // Gegner (hinten zuerst)
    const list = G.enemies.slice().sort((a, b) => a.d - b.d);
    for (const e of list) {
      const a = e.st === 'sat' ? e.sa : e.a;
      const x = px(a, e.d), y = py(a, e.d), k = kd(e.d) * S;
      if (e.type === 'sat') { glow(e.core ? SPR.glowY : SPR.glowB, x, y, 70 * k, 0.6 + Math.sin(G.t * 8) * 0.2); drawSprite(e.core ? SPR.satCore : SPR.sat, x, y, G.t * 2, k * 1.0); continue; }
      if (e.type === 'rock') { drawSprite(SPR.rock, x, y, G.t * e.spin, k * 1.0); continue; }
      const img = SPR[e.type];
      let rot = a + Math.PI / 2;
      if (e.st === 'enter') rot += Math.sin(e.t * 6) * 0.3;
      if (e.type === 'spinner') rot += G.t * 3;
      ctx.globalCompositeOperation = 'lighter';
      glow(SPR.glowO, x - Math.cos(a) * 20 * k, y - Math.sin(a) * 20 * k, 44 * k, 0.5);
      ctx.globalCompositeOperation = 'source-over';
      drawSprite(img, x, y, rot, k * 0.92);
      if (e.flash > 0) { ctx.globalCompositeOperation = 'lighter'; glow(SPR.glowW, x, y, 80 * k, 0.9); ctx.globalCompositeOperation = 'source-over'; }
    }
    // Schüsse
    ctx.globalCompositeOperation = 'lighter';
    for (const s of G.shots) {
      const x = px(s.a, s.d), y = py(s.a, s.d), k = kd(s.d) * S;
      glow(SPR.glowY, x, y, 34 * k);
      ctx.strokeStyle = '#fff6c0'; ctx.lineWidth = 4 * k; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(px(s.a, s.d + 0.05), py(s.a, s.d + 0.05)); ctx.stroke();
    }
    for (const b of G.eshots) {
      const x = px(b.a, b.d), y = py(b.a, b.d), k = kd(b.d) * S;
      glow(SPR.glowR, x, y, 40 * k);
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 3.5 * k, 0, TAU); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    // Spieler
    if (P.alive && G.state !== 'over' && G.state !== 'win') {
      const x = px(P.a, 1), y = py(P.a, 1);
      const blink = P.inv > 0 && Math.floor(G.t * 12) % 2 === 0;
      if (!blink) {
        ctx.globalCompositeOperation = 'lighter';
        const fl = 0.8 + Math.random() * 0.4 + G.warpK * 2;
        glow(SPR.glowO, x + Math.cos(P.a) * 26 * S, y + Math.sin(P.a) * 26 * S, 54 * S * fl, 0.9);
        glow(SPR.glowY, x + Math.cos(P.a) * 20 * S, y + Math.sin(P.a) * 20 * S, 26 * S * fl, 0.9);
        if (P.dbl) glow(SPR.glowB, x, y, 90 * S, 0.25);
        ctx.globalCompositeOperation = 'source-over';
        drawSprite(SPR.ship, x, y, P.a - Math.PI / 2, S * 0.62);
      }
    }
  }
  // Partikel
  ctx.globalCompositeOperation = 'lighter';
  for (const p of G.parts) {
    const f = 1 - p.t / p.life;
    if (p.glow) { const s = p.ring ? p.size * (0.5 + p.t / p.life) : p.size * (0.4 + f * 0.6); glow(p.glow, p.x, p.y, s, f); }
    else { ctx.fillStyle = p.col; ctx.globalAlpha = f; ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size); }
  }
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (G.flash > 0) { ctx.fillStyle = `rgba(255,240,220,${G.flash * 0.5})`; ctx.fillRect(0, 0, W, H); }
  // Punkte-Popups
  ctx.font = `${10 * DPR}px ${FONT}`; ctx.textAlign = 'center';
  for (const p of G.pops) { ctx.globalAlpha = 1 - p.t / 0.9; ctx.fillStyle = '#ffe14a'; ctx.fillText(p.txt, p.x, p.y - p.t * 30 * DPR); }
  ctx.globalAlpha = 1;
  // Vignette
  const vg = ctx.createRadialGradient(CX, CY, Math.min(W, H) * 0.35, CX, CY, Math.max(W, H) * 0.75);
  vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
  hud();
}

function drawBoss() {
  const B = G.boss; if (!B) return;
  const k = S;
  // Kern: die Mega-Henne
  const pulse = 1 + Math.sin(G.t * 4) * 0.04;
  const coreR = 58 * k * pulse;
  ctx.globalCompositeOperation = 'lighter';
  glow(SPR.glowR, CX, CY, coreR * 4, 0.5 + (B.flash > 0 ? 0.5 : 0));
  ctx.globalCompositeOperation = 'source-over';
  if (!B.dead || Math.floor(G.t * 20) % 2) drawSprite(SPR.drone, CX, CY, Math.sin(G.t) * 0.2 + Math.PI, coreR / 32 * 0.75);
  // Krone
  ctx.fillStyle = '#ffd23a'; ctx.strokeStyle = '#0d0b18'; ctx.lineWidth = 3 * DPR;
  // Lebensbalken
  if (!B.dead) {
    const w = 200 * k, h = 8 * k;
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(CX - w / 2, CY + coreR + 22 * k, w, h);
    ctx.fillStyle = '#ff3b3b'; ctx.fillRect(CX - w / 2, CY + coreR + 22 * k, w * (B.hp / B.max), h);
  }
  // Schildringe
  for (const r of B.rings) {
    const seg = TAU / r.n;
    for (let i = 0; i < r.n; i++) {
      const sg = r.segs[i]; if (sg.hp <= 0) continue;
      const a0 = r.ang + i * seg + seg * 0.08, a1 = r.ang + (i + 1) * seg - seg * 0.08;
      ctx.strokeStyle = sg.flash > 0 ? '#ffffff' : sg.hp >= 2 ? '#5ad8ff' : '#2a8ab0';
      ctx.lineWidth = 14 * k; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(CX, CY, R * r.d, a0, a1); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 3 * k;
      ctx.beginPath(); ctx.arc(CX, CY, R * r.d - 3 * k, a0, a1); ctx.stroke();
    }
  }
  ctx.lineCap = 'butt';
}

function hud() {
  const s = DPR;
  ctx.textBaseline = 'top';
  ctx.font = `${10 * s}px ${FONT}`;
  const L = 58 * s; // Platz links für den Schließen-Knopf der Seite
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ff6b35'; ctx.fillText('PUNKTE', L, 14 * s);
  ctx.fillStyle = '#fff'; ctx.font = `${14 * s}px ${FONT}`; ctx.fillText(String(G.score).padStart(6, '0'), L, 30 * s);
  ctx.font = `${8 * s}px ${FONT}`; ctx.fillStyle = '#9a90c0'; ctx.fillText('REKORD ' + String(G.hi).padStart(6, '0'), L, 52 * s);
  // Leben
  for (let i = 0; i < Math.min(6, G.lives - (P.alive ? 1 : 0)); i++) ctx.drawImage(SPR.foxHead, L + i * 24 * s, H - 36 * s, 22 * s, 22 * s);
  if (P.dbl) { ctx.fillStyle = '#7fe0ff'; ctx.font = `${8 * s}px ${FONT}`; ctx.fillText('DOPPELLASER', L, H - 52 * s); }
  // Ziel / Stufe rechts unten
  ctx.textAlign = 'right';
  if (G.state !== 'title' && G.state !== 'win') {
    const st = stageList(Math.min(G.level, 4))[G.stage] || '';
    ctx.fillStyle = '#ffd23a'; ctx.font = `${10 * s}px ${FONT}`;
    ctx.fillText(PLANETS[Math.min(G.level, 4)].name, W - 14 * s, H - 46 * s);
    ctx.fillStyle = '#cfc4ea'; ctx.font = `${8 * s}px ${FONT}`;
    const txt = st === 'boss' ? 'ENDGEGNER' : st === 'bonus' ? 'BONUS' : st ? 'WARP ' + (+st[1] + 1) + '/3' : '';
    ctx.fillText('LEVEL ' + (Math.min(G.level, 4) + 1) + '/5  ' + txt, W - 14 * s, H - 28 * s);
  }
  // Knöpfe
  for (const b of buttons()) {
    ctx.fillStyle = 'rgba(20,16,36,0.6)'; ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 2 * s;
    roundRect(b.x, b.y, b.w, b.h, 8 * s); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `${10 * s}px ${FONT}`;
    if (b.id === 'snd') ctx.fillText(AU.on ? '♪' : '×', b.x + b.w / 2, b.y + b.h / 2 + 1 * s);
    else ctx.fillText('II', b.x + b.w / 2, b.y + b.h / 2 + 1 * s);
  }
  ctx.textBaseline = 'top';
  // Banner
  if (G.msgT > 0 && (G.state === 'play' || G.state === 'intro' || G.state === 'warp')) {
    const a = Math.min(1, G.msgT * 3);
    ctx.globalAlpha = a; ctx.textAlign = 'center';
    textOutline(G.msg, CX, CY - 40 * s, 22 * s, '#ffd23a');
    if (G.msgSub) textOutline(G.msgSub, CX, CY + 2 * s, 9 * s, '#ffffff');
    ctx.globalAlpha = 1;
  }
  if (G.paused) { overlay(); ctx.textAlign = 'center'; textOutline('PAUSE', CX, CY - 20 * s, 24 * s, '#fff'); textOutline(coarse ? 'Tippen zum Weiterspielen' : 'P drücken zum Weiterspielen', CX, CY + 24 * s, 8 * s, '#cfc4ea'); }
  if (G.state === 'title') titleScreen();
  if (G.state === 'over') { overlay(); ctx.textAlign = 'center'; textOutline('GAME OVER', CX, CY - 50 * s, 26 * s, '#ff5a4a'); textOutline(G.score + ' Punkte', CX, CY, 12 * s, '#fff'); if (G.score >= G.hi && G.score > 0) textOutline('NEUER REKORD!', CX, CY + 26 * s, 10 * s, '#ffd23a'); if (G.stT > 1.5) blinkText(coarse ? 'Tippen für Neustart' : 'Leertaste für Neustart', CX, CY + 60 * s); }
  if (G.state === 'win') { ctx.textAlign = 'center'; textOutline('WILLKOMMEN ZUHAUSE!', CX, CY - R * 0.9, 18 * s, '#ffd23a'); textOutline('Die Erde ist erreicht – alle Blechhühner besiegt', CX, CY - R * 0.9 + 34 * s, 8 * s, '#fff'); textOutline(G.score + ' Punkte', CX, CY + R * 0.85, 14 * s, '#fff'); if (G.stT > 1.5) blinkText(coarse ? 'Tippen für Neustart' : 'Leertaste für Neustart', CX, CY + R * 0.85 + 30 * s); }
}
function roundRect(x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function textOutline(t, x, y, size, col) {
  ctx.font = `${size}px ${FONT}`; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#0d0b18'; ctx.lineWidth = size * 0.35; ctx.strokeText(t, x, y);
  ctx.fillStyle = col; ctx.fillText(t, x, y);
}
function blinkText(t, x, y) { if (Math.floor(G.t * 2.5) % 2) textOutline(t, x, y, 9 * DPR, '#ff6b35'); }
function overlay() { ctx.fillStyle = 'rgba(4,3,12,0.6)'; ctx.fillRect(0, 0, W, H); }
function titleScreen() {
  const s = DPR;
  ctx.textAlign = 'center';
  const y0 = CY - R * 0.62;
  textOutline('2FOX4 PRÄSENTIERT', CX, y0 - 30 * s, 8 * s, '#cfc4ea');
  ctx.save(); ctx.translate(CX, y0); ctx.rotate(-0.05);
  textOutline('ORBIT', 0, -10 * s, 34 * s, '#fff');
  textOutline('FUCHS', 0, 30 * s, 34 * s, '#ff6b35');
  ctx.restore();
  // kreisender Fuchs
  const a = G.t * 1.1;
  drawSprite(SPR.ship, px(a, 0.8), py(a, 0.8), a - Math.PI / 2, S * 0.62);
  for (let i = 0; i < 5; i++) { const b = -G.t * 0.7 + i * 0.5; drawSprite(SPR.drone, px(b, 0.5), py(b, 0.5), b + Math.PI / 2, S * 0.4); }
  const y1 = CY + R * 0.42;
  textOutline('Die Blechhühner haben das Sonnensystem besetzt!', CX, y1, 7 * s, '#fff');
  textOutline('Flieg in 5 Leveln von NEPTUN bis nach Hause.', CX, y1 + 16 * s, 7 * s, '#fff');
  textOutline(coarse ? 'Finger auf den Bildschirm: fliegen + feuern' : 'PFEILE / MAUS fliegen · LEERTASTE / KLICK feuern', CX, y1 + 40 * s, 7 * s, '#ffd23a');
  blinkText(coarse ? 'TIPPEN ZUM START' : 'LEERTASTE ZUM START', CX, y1 + 64 * s);
  if (G.hi) textOutline('REKORD ' + G.hi, CX, y1 + 88 * s, 7 * s, '#9a90c0');
}

// ---------------------------------------------------------------- Schleife
let last = performance.now();
function frame(now) {
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (TEST && window.__frozen) dt = 0;
  if (!G.paused && dt > 0) {
    // feste Teilschritte für stabile Kollisionen
    let rem = dt; while (rem > 0) { const h = Math.min(rem, 1 / 60); update(h); rem -= h; }
  }
  render();
  requestAnimationFrame(frame);
}
resize();
buildSprites();
G.state = 'title';
if (TEST) {
  window.__G = G; window.__P = P; window.__frozen = /frozen/.test(location.search);
  window.sim = (n, h = 1 / 60) => { for (let i = 0; i < n; i++) update(h); render(); return { st: G.state, lvl: G.level, stage: G.stage, en: G.enemies.length, q: G.spawnQ.length, score: G.score, lives: G.lives }; };
  window.go = newGame; window.startStage = startStage; window.__K = K;
  window.bot = (n) => { for (let i = 0; i < n; i++) { const e = G.enemies.filter((x) => !x.dead && x.d > 0.15)[0] || G.boss && { a: P.a + 0.3, st: '' }; if (e) { const a = e.st === 'sat' ? e.sa : e.a; P.a += clamp(wrapA(a - P.a), -0.09, 0.09); } K[' '] = true; P.inv = 1; update(1 / 60); } render(); return { st: G.state, lvl: G.level, stage: G.stage, en: G.enemies.length, q: G.spawnQ.length, score: G.score, lives: G.lives, boss: G.boss && G.boss.hp }; };
}
document.fonts && document.fonts.load('10px "Press Start 2P"').then(() => {}).catch(() => {});
requestAnimationFrame(frame);
})();
