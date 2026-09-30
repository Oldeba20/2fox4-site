/* KRAWUMM! — ein Retro-Plattformer im Geist der frühen 90er. Original-Figuren, Original-Code. */
(() => {
'use strict';
const VW = 640, VH = 360, T = 16, DT = 1 / 60;
const cv = document.getElementById('screen');
const ctx = cv.getContext('2d', { alpha: false });
cv.width = VW; cv.height = VH;
ctx.imageSmoothingEnabled = false;
const FONT = '"Press Start 2P", "Courier New", monospace';

// ---------------------------------------------------------------- utils
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const pick = a => a[(Math.random() * a.length) | 0];
const overlap = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); x.imageSmoothingEnabled = false; return [c, x]; };
const store = {
  get(k, d) { try { const v = localStorage.getItem('krawumm_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('krawumm_' + k, JSON.stringify(v)); } catch (e) {} }
};

// ---------------------------------------------------------------- assets
const IMG = {};
function loadImg(name, src) { return new Promise(res => { const i = new Image(); i.onload = () => { IMG[name] = i; res(); }; i.onerror = () => res(); i.src = src; }); }
let ATLAS = null, SPR = null;
const SP = {}; // name -> {n:{c,x,y,w,h,ax,ay}, f:{...flipped}, wn, wf}

function buildSprites() {
  const a = IMG.sprites; const W = a.width, H = a.height;
  const [n] = mk(W, H); n.getContext('2d').drawImage(a, 0, 0);
  const [f, fx] = mk(W, H); fx.translate(W, 0); fx.scale(-1, 1); fx.drawImage(a, 0, 0);
  const white = src => { const [c, x] = mk(W, H); x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); return c; };
  const wn = white(n), wf = white(f);
  for (const k in SPR) {
    const s = SPR[k];
    SP[k] = {
      w: s.w, h: s.h,
      n: { c: n, x: s.x, y: s.y, ax: s.ax, ay: s.ay }, f: { c: f, x: W - s.x - s.w, y: s.y, ax: s.w - s.ax, ay: s.ay },
      wn: { c: wn, x: s.x, y: s.y, ax: s.ax, ay: s.ay }, wf: { c: wf, x: W - s.x - s.w, y: s.y, ax: s.w - s.ax, ay: s.ay }
    };
  }
}
// draw sprite so that anchor (ax,ay) lands on (x,y). flip = face right for enemy sprites (which face left natively)
function spr(name, x, y, flip, white, sx = 1, sy = 1) {
  const s = SP[name]; if (!s) return;
  const v = white ? (flip ? s.wf : s.wn) : (flip ? s.f : s.n);
  const w = s.w * sx, h = s.h * sy;
  ctx.drawImage(v.c, v.x, v.y, s.w, s.h, Math.round(x - v.ax * sx), Math.round(y - v.ay * sy), Math.round(w), Math.round(h));
}

// tiny pixel-art icons from char maps
function pix(rows, pal) {
  const h = rows.length, w = rows[0].length; const [c, x] = mk(w, h);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { const ch = rows[j][i]; if (pal[ch]) { x.fillStyle = pal[ch]; x.fillRect(i, j, 1, 1); } }
  return c;
}
const ICON = {};
function buildIcons() {
  ICON.disk = pix([
    '.KKKKKKKKKK.', '.KBBSSSSBBK.', '.KBBSKSSBBK.', '.KBBSKSSBBK.', '.KBBSSSSBBK.', '.KBBBBBBBBK.',
    '.KBWWWWWWBK.', '.KBWRRRRWBK.', '.KBWWWWWWBK.', '.KBWRRRRWBK.', '.KBWWWWWWBK.', '.KKKKKKKKKK.'],
    { K: '#0d0d1c', B: '#2b52e0', S: '#cfd6e0', W: '#f4f4f4', R: '#d23a2a' });
  ICON.wurst = pix([
    '..............', '...RRRRRRRR...', '..RBBRBBBRBBR.', '.RBBYBBRBBYBBR', '.RBBBRBBBYBBR.', '..RRRRRRRRRR..',
    'WWWWWWWWWWWWWW', '.WGGGGGGGGGGW.', '..WWWWWWWWWW..'],
    { R: '#c8321e', B: '#8a4a22', Y: '#f2c230', W: '#f0ede4', G: '#b9b3a6' });
  ICON.can = pix([
    '..SSSS..', '.SSSSSS.', '.GGGGGG.', '.GKGGKG.', '.GGKKGG.', '.GGKKGG.', '.GKGGKG.', '.GGGGGG.', '.GYYYYG.', '.GGGGGG.', '.SSSSSS.', '..SSSS..'],
    { S: '#c9d1dc', G: '#35f05a', K: '#0b1a0d', Y: '#ffe23a' });
  const card = col => pix([
    'KKKKKKKKKKKK', 'KCCCCCCCCCCK', 'KCWWCCCCCCCK', 'KCWWCCYYYYCK', 'KCCCCCCCCCCK', 'KCCKKKKKKCCK', 'KCCCCCCCCCCK', 'KKKKKKKKKKKK'],
    { K: '#0d0d1c', C: col, W: '#ffffff', Y: '#ffd23a' });
  ICON.keyR = card('#e8322a'); ICON.keyU = card('#2f7bff');
  ICON.chip = pix([
    '....OOOO....', '..OOYYYYOO..', '.OYYYYYYYYO.', '.OYKYYYYKYO.', 'OYYKYYYYKYYO', 'OYYKYKKYKYYO',
    'OYYKKYYKKYYO', 'OYYKYYYYKYYO', '.OYYYYYYYYO.', '.OYYYYYYYYO.', '..OOYYYYOO..', '....OOOO....'],
    { O: '#ff6b35', Y: '#ffc23a', K: '#3a1204' });
  // CD-ROM
  { const [c, x] = mk(12, 12); const g = x.createLinearGradient(0, 0, 12, 12);
    g.addColorStop(0, '#ff7ad9'); g.addColorStop(.35, '#7af0ff'); g.addColorStop(.7, '#fff27a'); g.addColorStop(1, '#c9d1dc');
    x.fillStyle = '#0d0d1c'; x.beginPath(); x.arc(6, 6, 6, 0, 7); x.fill();
    x.fillStyle = g; x.beginPath(); x.arc(6, 6, 5, 0, 7); x.fill();
    x.fillStyle = '#0d0d1c'; x.fillRect(5, 5, 2, 2); ICON.cd = c; }
  // heart for HUD
  ICON.heart = pix(['.RR.RR.', 'RWRRRRR', 'RRRRRRR', '.RRRRR.', '..RRR..', '...R...'], { R: '#ff3b3b', W: '#ffd0d0' });
  ICON.heartE = pix(['.KK.KK.', 'K..K..K', 'K.....K', '.K...K.', '..K.K..', '...K...'], { K: '#5a2a3a' });
}

// glow sprites (prerendered radial gradients)
const GLOW = {};
function glowSprite(col, r) {
  const [c, x] = mk(r * 2, r * 2); const g = x.createRadialGradient(r, r, 0, r, r, r);
  g.addColorStop(0, col); g.addColorStop(.35, col.replace(/[\d.]+\)$/, '0.35)')); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, r * 2, r * 2); return c;
}
function buildGlows() {
  GLOW.orange = glowSprite('rgba(255,150,40,0.9)', 64);
  GLOW.yellow = glowSprite('rgba(255,230,120,0.9)', 32);
  GLOW.red = glowSprite('rgba(255,50,40,0.9)', 32);
  GLOW.green = glowSprite('rgba(80,255,120,0.8)', 48);
  GLOW.cyan = glowSprite('rgba(80,220,255,0.8)', 48);
  GLOW.white = glowSprite('rgba(255,255,255,0.9)', 64);
}
function glow(name, x, y, s = 1) { const g = GLOW[name]; const w = g.width * s; ctx.drawImage(g, x - w / 2, y - w / 2, w, w); }

// ---------------------------------------------------------------- themes & tiles
const THEMES = [
  { // city
    top: '#8d93a8', face: '#4b4f66', dark: '#2a2c3d', line: '#1a1b26', accent: '#ff6b35', gir: '#b8742e', girD: '#6b3f16',
    haz: 'spike', fog: 'rgba(40,10,40,0.0)', mid: '#1a1230', mid2: '#2a1a40', lamp: 'orange'
  },
  { // factory
    top: '#7fa0a8', face: '#3e5660', dark: '#223239', line: '#131d21', accent: '#ffc23a', gir: '#caa23a', girD: '#5e4a14',
    haz: 'acid', mid: '#0f2226', mid2: '#18343a', lamp: 'yellow'
  },
  { // mothership
    top: '#9a86c8', face: '#43365f', dark: '#261d3a', line: '#150f22', accent: '#50ff90', gir: '#6f5aa8', girD: '#2d2350',
    haz: 'energy', mid: '#160f26', mid2: '#221838', lamp: 'green'
  }
];

function drawSolidTile(x, px, py, th, above, below, left, right, seed) {
  // base
  x.fillStyle = th.face; x.fillRect(px, py, T, T);
  // panel texture
  if (th === THEMES[0]) { // bricks
    x.fillStyle = th.dark;
    const off = ((py / T) % 2) * 8;
    for (let j = 0; j < 16; j += 8) { x.fillRect(px, py + j + 7, T, 1); x.fillRect(px + ((off + (j ? 8 : 0)) % 16), py + j, 1, 8); }
    x.fillStyle = 'rgba(255,255,255,0.05)'; if (seed % 3 === 0) x.fillRect(px + 2, py + 2, 5, 4);
  } else if (th === THEMES[1]) { // steel plates with rivets
    x.fillStyle = th.dark; x.fillRect(px, py + 15, T, 1); x.fillRect(px + 15, py, 1, T);
    x.fillStyle = 'rgba(255,255,255,0.12)'; x.fillRect(px, py, T, 1); x.fillRect(px, py, 1, T);
    x.fillStyle = '#9fb6bc'; for (const [a, b] of [[3, 3], [12, 3], [3, 12], [12, 12]]) x.fillRect(px + a, py + b, 1, 1);
    x.fillStyle = th.dark; for (const [a, b] of [[4, 4], [13, 4], [4, 13], [13, 13]]) x.fillRect(px + a, py + b, 1, 1);
  } else { // alien hull with glowing seams
    x.fillStyle = th.dark; x.fillRect(px, py + 7, T, 2);
    x.fillStyle = seed % 4 === 0 ? '#50ff90' : '#2f8a5a'; x.fillRect(px + 3, py + 8, 10, 1);
    x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(px, py, T, 1);
  }
  // dithering noise
  x.fillStyle = 'rgba(0,0,0,0.18)';
  for (let i = 0; i < 6; i++) { const r = (seed * 9301 + i * 49297) % 233280; x.fillRect(px + (r % 16), py + ((r >> 4) % 16), 1, 1); }
  // edges
  if (!above) {
    x.fillStyle = th.top; x.fillRect(px, py, T, 3);
    x.fillStyle = 'rgba(255,255,255,0.35)'; x.fillRect(px, py, T, 1);
    if (th === THEMES[1]) { for (let i = 0; i < 16; i += 4) { x.fillStyle = (i / 4 + px / 4) % 2 ? '#1a1a1a' : '#ffc23a'; x.fillRect(px + i, py + 3, 4, 2); } }
    if (th === THEMES[2]) { x.fillStyle = '#50ff90'; x.fillRect(px, py + 3, T, 1); }
  }
  if (!below) { x.fillStyle = th.line; x.fillRect(px, py + 14, T, 2); }
  if (!left) { x.fillStyle = 'rgba(255,255,255,0.12)'; x.fillRect(px, py, 1, T); }
  if (!right) { x.fillStyle = th.line; x.fillRect(px + 15, py, 1, T); }
}
function drawGirder(x, px, py, th) {
  x.fillStyle = th.girD; x.fillRect(px, py, T, 6);
  x.fillStyle = th.gir; x.fillRect(px, py, T, 2); x.fillRect(px, py + 5, T, 1);
  x.fillStyle = th.gir; for (let i = 0; i < 16; i += 4) { x.fillRect(px + i, py + 2, 1, 3); x.fillRect(px + i + 1, py + 3, 1, 1); }
  x.fillStyle = 'rgba(255,255,255,0.4)'; x.fillRect(px, py, T, 1);
}

// ---------------------------------------------------------------- audio
const AU = { ctx: null, master: null, music: null, sfx: null, voice: null, buffers: {}, musicOn: store.get('music', true), noise: null };
function initAudio() {
  if (AU.ctx) { if (AU.ctx.state === 'suspended') AU.ctx.resume(); return; }
  const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
  const a = AU.ctx = new C();
  AU.master = a.createGain(); AU.master.gain.value = 0.8; AU.master.connect(a.destination);
  const comp = a.createDynamicsCompressor(); comp.connect(AU.master);
  AU.music = a.createGain(); AU.music.gain.value = AU.musicOn ? 0.32 : 0; AU.music.connect(comp);
  AU.sfx = a.createGain(); AU.sfx.gain.value = 0.55; AU.sfx.connect(comp);
  AU.voice = a.createGain(); AU.voice.gain.value = 1.0; AU.voice.connect(comp);
  const len = a.sampleRate; const nb = a.createBuffer(1, len, a.sampleRate); const d = nb.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1; AU.noise = nb;
  loadVoices();
}
function tone(type, f0, f1, dur, vol, when = 0, dest) {
  const a = AU.ctx; if (!a) return; const t = a.currentTime + when;
  const o = a.createOscillator(); const g = a.createGain(); o.type = type;
  o.frequency.setValueAtTime(f0, t); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(dest || AU.sfx); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur, vol, fStart, fEnd, when = 0, dest, q = 1) {
  const a = AU.ctx; if (!a) return; const t = a.currentTime + when;
  const s = a.createBufferSource(); s.buffer = AU.noise; s.loop = true;
  const f = a.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = q; f.frequency.setValueAtTime(fStart, t); f.frequency.exponentialRampToValueAtTime(Math.max(40, fEnd), t + dur);
  const g = a.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f); f.connect(g); g.connect(dest || AU.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.02);
}
const SFX = {
  shoot(l) { tone('square', 880 + l * 60, 180, 0.09, 0.22); noise(0.05, 0.12, 6000, 1500); },
  eshoot() { tone('sawtooth', 500, 120, 0.18, 0.12); },
  jump() { tone('square', 220, 520, 0.12, 0.12); },
  land() { noise(0.05, 0.1, 900, 200); },
  hit() { tone('square', 300, 90, 0.07, 0.15); noise(0.04, 0.1, 3000, 800); },
  boom(big) { noise(big ? 1.1 : 0.55, big ? 0.9 : 0.6, big ? 2600 : 3200, 60, 0, null, 2); tone('sine', big ? 110 : 150, 30, big ? 0.9 : 0.4, 0.5); },
  pickup() { [0, 4, 7, 12].forEach((s, i) => tone('square', 523 * Math.pow(2, s / 12), 523 * Math.pow(2, s / 12), 0.08, 0.12, i * 0.05)); },
  power() { [0, 3, 7, 12, 15, 19, 24].forEach((s, i) => tone('square', 330 * Math.pow(2, s / 12), 330 * Math.pow(2, s / 12), 0.07, 0.12, i * 0.045)); },
  hurt() { tone('sawtooth', 320, 70, 0.25, 0.25); },
  door() { tone('square', 140, 70, 0.35, 0.15); noise(0.35, 0.15, 800, 200); },
  step() { noise(0.02, 0.04, 1200, 400); },
  secret() { [0, 7, 12, 16, 19, 24].forEach((s, i) => tone('triangle', 660 * Math.pow(2, s / 12), 660 * Math.pow(2, s / 12), 0.12, 0.15, i * 0.07)); }
};

// ---- chiptune sequencer
const N = n => 440 * Math.pow(2, (n - 69) / 12);
const NAMES = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
const nm = s => { if (s === '.' || s === '-') return null; const m = s.match(/^([A-G]#?)(\d)$/); return (+m[2] + 1) * 12 + NAMES[m[1]]; };
const parse = s => s.trim().split(/\s+/).filter(x => x !== '|').map(nm);
const SONGS = [
  { bpm: 138, // Neo City theme (A minor)
    lead: parse(`A4 . A4 C5 D5 . E5 . | F5 . E5 D5 C5 . D5 . | G5 . F5 E5 D5 . B4 . | E5 . . . E5 D5 C5 B4 |
                 A4 . E5 . A5 . G5 E5 | F5 . C5 . F5 . E5 C5 | D5 . G4 . D5 . E5 F5 | E5 . B4 . E5 . G#5 . |
                 A5 . . . G5 . E5 . | F5 . . . E5 . C5 . | D5 . E5 . F5 . G5 . | A5 . G#5 . E5 . B4 . |
                 C5 . . B4 A4 . . . | F4 . . . A4 C5 F5 . | G5 . . F5 E5 . D5 . | E5 . . . . . . .`),
    roots: [45, 41, 43, 40, 45, 41, 43, 40, 41, 41, 43, 40, 45, 41, 43, 40],
    bassPat: [0, 0, 12, 0, 0, 12, 0, 12] },
  { bpm: 168, // Boss theme (D minor)
    lead: parse(`D5 . D5 F5 D5 G#5 G5 F5 | D5 . D5 F5 G5 . A5 . | D5 . D5 F5 D5 G#5 G5 F5 | C6 . A#5 . A5 . F5 . |
                 D6 . C6 . A#5 . A5 . | G5 . A5 . A#5 . C6 . | D6 . . . C#6 . . . | D6 C6 A5 F5 D5 . . .`),
    roots: [38, 38, 38, 36, 34, 36, 37, 38],
    bassPat: [0, 12, 0, 12, 1, 12, 0, 13] }
];
const SEQ = { song: -1, step: 0, next: 0, timer: null };
function playSong(i) {
  if (!AU.ctx) return;
  SEQ.song = i; SEQ.step = 0; SEQ.next = AU.ctx.currentTime + 0.1;
  if (!SEQ.timer) SEQ.timer = setInterval(schedule, 25);
}
function stopSong() { SEQ.song = -1; }
function schedule() {
  const a = AU.ctx; if (!a || SEQ.song < 0) return;
  const s = SONGS[SEQ.song]; const e = 60 / s.bpm / 2; // eighth
  while (SEQ.next < a.currentTime + 0.12) {
    const t = SEQ.next - a.currentTime; const st = SEQ.step;
    const bar = Math.floor(st / 8) % s.roots.length, b8 = st % 8;
    const ln = s.lead[st % s.lead.length];
    if (ln) { tone('square', N(ln), N(ln), e * 1.6, 0.13, t, AU.music); tone('square', N(ln) * 1.005, N(ln) * 1.005, e * 1.2, 0.05, t + 0.012, AU.music); }
    const bn = s.roots[bar] + s.bassPat[b8];
    tone('triangle', N(bn), N(bn), e * 0.9, 0.34, t, AU.music);
    tone('square', N(bn - 12 + 12), N(bn), e * 0.35, 0.04, t, AU.music);
    if (b8 % 4 === 0) { tone('sine', 150, 40, 0.14, 0.7, t, AU.music); }
    if (b8 % 4 === 2) { noise(0.12, 0.35, 5000, 1200, t, AU.music); }
    noise(0.03, b8 % 2 ? 0.08 : 0.12, 11000, 7000, t, AU.music);
    SEQ.step++; SEQ.next += e;
  }
}
function setMusic(on) { AU.musicOn = on; store.set('music', on); if (AU.music) AU.music.gain.setTargetAtTime(on ? 0.32 : 0, AU.ctx.currentTime, 0.05); }

// ---- voice lines
const LINES = [
  'Wer hat die Roboter bestellt? Ich liefere nur Ärger.',
  "Das war's für dich, Blechdose.",
  'Heute ist Recycling-Tag!',
  'Der Schrottplatz ist zwei Straßen weiter.',
  'Nichts Persönliches. … Doch. Eigentlich schon.',
  'Zu langsam, Toaster.',
  'Ersatzteile heute im Angebot!',
  'Ahh, Currywurst. Das Frühstück der Champions.',
  'Mehr Wumms? Immer gern.',
  'Ein Schlüssel. Der Hausmeister wäre stolz auf mich.',
  "Au! Dafür gibt's 'ne Beschwerde!",
  'Hey! Das war mein Lieblingsshirt!',
  "Ich brauch dringend 'ne Pause. Und 'nen Döner.",
  'Das … stand so nicht im Drehbuch.',
  'Nächstes Level. Die Roboter können schon mal packen.',
  "Na, du bist ja 'n ganz Großer. Umso lauter der Knall.",
  'Krawumm. Und jetzt: Feierabend.',
  'Hallo? Spielt hier noch jemand?',
  'Ein Geheimversteck! Ich bin einfach zu gut.',
  "Energydrink! Jetzt geht's los.",
  'Zeit für Krawumm!',
  'Professor Blechkopf! Deine Sprechstunde ist vorbei.',
  'Garantie abgelaufen, Kumpel.',
  'Glibber. Wie ekelhaft.'
];
const V = { KILL: [1, 2, 3, 4, 5, 6, 22], HURT: [10, 11] };
const VOICE = { src: null, until: 0, text: '', shown: 0, lastKill: 0, lastAny: -99 };
function loadVoices() {
  LINES.forEach((_, i) => {
    const f = 'vo/v' + String(i).padStart(2, '0') + '.mp3';
    fetch(f).then(r => r.arrayBuffer()).then(b => AU.ctx.decodeAudioData(b)).then(buf => { AU.buffers[i] = buf; }).catch(() => {});
  });
}
function say(i, force) {
  const now = G.time;
  if (!force && now - VOICE.lastAny < 2.2) return false;
  if (VOICE.src) { try { VOICE.src.stop(); } catch (e) {} VOICE.src = null; }
  VOICE.lastAny = now;
  const buf = AU.buffers[i];
  let dur = 2.6;
  if (AU.ctx && buf) {
    const s = AU.ctx.createBufferSource(); s.buffer = buf; s.connect(AU.voice); s.start(); VOICE.src = s; dur = buf.duration;
    if (AU.music && AU.musicOn) { const t = AU.ctx.currentTime; AU.music.gain.cancelScheduledValues(t); AU.music.gain.setTargetAtTime(0.12, t, 0.05); AU.music.gain.setTargetAtTime(0.32, t + dur, 0.3); }
    s.onended = () => { if (VOICE.src === s) VOICE.src = null; };
  }
  VOICE.text = LINES[i]; VOICE.until = now + dur + 0.6; VOICE.shown = now;
  return true;
}

// ---------------------------------------------------------------- input
const K = {}; const KP = {};
const KEYMAP = {
  ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', ArrowUp: 'jump', KeyW: 'jump', ArrowDown: 'down', KeyS: 'down',
  Space: 'jump', KeyZ: 'jump', KeyK: 'jump', ShiftLeft: 'fire', ShiftRight: 'fire', KeyX: 'fire', KeyJ: 'fire', KeyF: 'fire',
  Enter: 'start', Escape: 'pause', KeyP: 'pause', KeyM: 'music', KeyC: 'crt'
};
addEventListener('keydown', e => {
  const k = KEYMAP[e.code]; if (!k) return;
  e.preventDefault(); if (!K[k]) KP[k] = true; K[k] = true; initAudio();
});
addEventListener('keyup', e => { const k = KEYMAP[e.code]; if (k) { K[k] = false; e.preventDefault(); } });
addEventListener('blur', () => { for (const k in K) K[k] = false; if (G.state === 'play') G.state = 'pause'; });
// touch
document.querySelectorAll('[data-key]').forEach(b => {
  const k = b.dataset.key;
  const on = e => { e.preventDefault(); initAudio(); if (!K[k]) KP[k] = true; K[k] = true; b.classList.add('on'); };
  const off = e => { e.preventDefault(); K[k] = false; b.classList.remove('on'); };
  b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
});
cv.addEventListener('pointerdown', () => { initAudio(); KP.start = true; });

// ---------------------------------------------------------------- game state
const G = {
  state: 'loading', time: 0, level: 0, score: 0, hi: store.get('hi', 0), shake: 0, hitstop: 0, flash: 0,
  cam: { x: 0, y: 0 }, lv: null, ents: [], bullets: [], parts: [], floats: [], stateT: 0, crt: store.get('crt', true),
  stats: null
};
document.body.classList.toggle('crt', G.crt);

// ---------------------------------------------------------------- level
function loadLevel(i, keepPlayer) {
  const def = LEVELS[i]; G.level = i;
  const map = def.map, h = map.length, w = map[0].length;
  const tiles = new Uint8Array(w * h); // 0 empty 1 solid 2 oneway 3 hazard
  const lv = { def, w, h, tiles, th: THEMES[def.theme], hazards: [], pw: w * T, ph: h * T, secrets: [], exit: null, arena: def.arena, bossOn: false, lamps: [] };
  G.lv = lv; G.ents = []; G.bullets = []; G.parts = []; G.floats = [];
  G.stats = { kills: 0, total: 0, secrets: 0, secretsTotal: 0, time: 0 };
  let start = { x: 48, y: 300 };
  const P = G.player = G.player && keepPlayer ? G.player : newPlayer();
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const c = map[y][x]; const px = x * T, py = y * T; const idx = y * w + x;
    switch (c) {
      case '#': tiles[idx] = 1; break;
      case '=': tiles[idx] = 2; break;
      case '^': tiles[idx] = 3; lv.hazards.push({ x: px, y: py }); break;
      case 'P': start = { x: px + 8, y: py + T }; break;
      case 'w': addEnemy('walker', px + 8, py + T); break;
      case 'd': addEnemy('drone', px + 8, py + 8); break;
      case 't': addEnemy('turret', px + 8, py + T); break;
      case 'b': addEnemy('blob', px + 8, py + T); break;
      case 'X': addEnemy('boss', px + 8, py + T); break;
      case 'B': G.ents.push({ type: 'crate', x: px, y: py, w: T, h: T, hp: 2, solid: true, flash: 0 }); break;
      case 'x': G.ents.push({ type: 'barrel', x: px + 1, y: py + 1, w: 14, h: 15, hp: 1, solid: true, flash: 0 }); break;
      case 'R': G.ents.push({ type: 'door', key: 'r', x: px, y: py - 2 * T, w: T * 2, h: T * 3, solid: true, open: 0 }); break;
      case 'U': G.ents.push({ type: 'door', key: 'u', x: px, y: py - 2 * T, w: T * 2, h: T * 3, solid: true, open: 0 }); break;
      case 'E': lv.exit = { x: px - 8, y: py - 2 * T, w: T * 2, h: T * 3 }; break;
      case 'M': { const r = (def.meta || {})['M_' + x + '_' + y] || [x - 3, x + 3];
        G.ents.push({ type: 'mover', x: px, y: py, w: T * 3, h: 6, x0: r[0] * T, x1: r[1] * T, dir: 1, vx: 0, oneway: true }); break; }
      case '?': lv.secrets.push({ x: px - 8, y: py - 8, w: 32, h: 32, found: false }); G.stats.secretsTotal++; break;
      default:
        if ('$chegru'.includes(c)) G.ents.push({ type: 'item', kind: c, x: px + 2, y: py + 4, w: 12, h: 12, t: Math.random() * 6 });
    }
  }
  G.stats.total = G.ents.filter(e => e.enemy && e.type !== 'boss').length;
  P.x = start.x - P.w / 2; P.y = start.y - P.h; P.vx = P.vy = 0; P.hp = P.hp || 8; P.keys = {}; P.dead = false; P.inv = 0; P.face = 1;
  P.idle = 0; P.lowSaid = false;
  prerenderMap(lv);
  prerenderMid(lv);
  G.cam.x = clamp(P.x - VW / 2, 0, lv.pw - VW); G.cam.y = clamp(P.y - VH / 2, 0, lv.ph - VH);
}
function tileAt(tx, ty) { const lv = G.lv; if (tx < 0 || tx >= lv.w) return 1; if (ty < 0) return 0; if (ty >= lv.h) return 1; return lv.tiles[ty * lv.w + tx]; }

function prerenderMap(lv) {
  const [c, x] = mk(lv.pw, lv.ph); const th = lv.th;
  const s = (tx, ty) => tileAt(tx, ty) === 1;
  for (let ty = 0; ty < lv.h; ty++) for (let tx = 0; tx < lv.w; tx++) {
    const t = lv.tiles[ty * lv.w + tx]; const px = tx * T, py = ty * T;
    if (t === 1) drawSolidTile(x, px, py, th, s(tx, ty - 1), s(tx, ty + 1), s(tx - 1, ty), s(tx + 1, ty), tx * 31 + ty * 17);
    else if (t === 2) drawGirder(x, px, py, th);
  }
  // soft ambient occlusion under girders / along wall bottoms
  lv.map = c;
  // lamps: place decorative lights on tops of some solid runs
  lv.lamps = [];
  for (let tx = 6; tx < lv.w - 4; tx += 11) {
    for (let ty = 3; ty < lv.h; ty++) if (tileAt(tx, ty) === 1 && tileAt(tx, ty - 1) === 0) { lv.lamps.push({ x: tx * T + 8, y: ty * T - 26 }); break; }
  }
}
function prerenderMid(lv) {
  // procedural mid-layer silhouettes (parallax 0.5)
  const w = Math.ceil((lv.pw - VW) * 0.5 + VW) + 64, h = VH;
  const [c, x] = mk(w, h); const th = lv.th;
  let seed = 7 + G.level * 13; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let layer = 0; layer < 2; layer++) {
    x.fillStyle = layer ? th.mid : th.mid2;
    let px = -20;
    while (px < w) {
      const bw = 30 + r() * 70, bh = (layer ? 60 : 110) + r() * (layer ? 80 : 120);
      const top = h - bh - (layer ? 0 : 30);
      if (G.level === 1) { // factory: pipes and tanks
        x.fillRect(px, top, bw, h - top); x.fillRect(px + bw * 0.3, top - 30, 6, 30);
        x.beginPath(); x.arc(px + bw / 2, top, bw / 2, Math.PI, 0); x.fill();
      } else if (G.level === 2) { // mothership: ribs
        x.fillRect(px, top + 20, bw, h - top); x.beginPath(); x.moveTo(px, top + 20); x.lineTo(px + bw / 2, top - 10); x.lineTo(px + bw, top + 20); x.fill();
      } else { // city: ruined skyscrapers
        x.fillRect(px, top, bw, h - top);
        x.fillRect(px + bw * 0.2, top - 12, bw * 0.3, 12);
        // broken top
        x.clearRect(px + bw * 0.6, top, bw * 0.4, 8 + r() * 14);
      }
      // windows
      if (layer === 1) {
        for (let wy = top + 10; wy < h - 20; wy += 12) for (let wx = px + 5; wx < px + bw - 6; wx += 10) {
          if (r() < 0.16) { x.fillStyle = G.level === 2 ? 'rgba(80,255,144,0.55)' : G.level === 1 ? 'rgba(255,190,60,0.5)' : 'rgba(255,170,80,0.55)'; x.fillRect(wx, wy, 3, 4); x.fillStyle = th.mid; }
        }
      }
      px += bw + r() * 30;
    }
  }
  lv.mid = c;
}

// ---------------------------------------------------------------- entities
function newPlayer() { return { x: 0, y: 0, w: 16, h: 44, vx: 0, vy: 0, face: 1, ground: false, hp: 8, maxhp: 8, gun: 1, cool: 0, inv: 0, anim: 0, fireT: 0, keys: {}, coyote: 0, jbuf: 0, dropT: 0, idle: 0 }; }
function addEnemy(type, x, y) {
  const e = { type, enemy: true, flash: 0, t: Math.random() * 10, face: -1, vx: 0, vy: 0, cool: rnd(0.5, 2) };
  if (type === 'walker') Object.assign(e, { w: 22, h: 34, hp: 3, speed: 38, pts: 100 });
  if (type === 'drone') Object.assign(e, { w: 24, h: 20, hp: 2, speed: 60, pts: 150, hx: x, hy: y, fly: true });
  if (type === 'turret') Object.assign(e, { w: 22, h: 22, hp: 4, pts: 200, fixed: true });
  if (type === 'blob') Object.assign(e, { w: 24, h: 20, hp: 3, speed: 70, pts: 120 });
  if (type === 'boss') Object.assign(e, { w: 96, h: 140, hp: 160, maxhp: 160, pts: 10000, fixed: true, phase: 0, active: false, cool: 2 });
  e.x = x - e.w / 2; e.y = y - e.h; if (type === 'drone') e.y = y - e.h / 2;
  G.ents.push(e); return e;
}

// ---------------------------------------------------------------- collision
function solidsFor(o) { return G.ents.filter(e => (e.solid || e.oneway) && e !== o); }
function moveBody(o, dx, dy, opts = {}) {
  const lv = G.lv; const sol = solidsFor(o);
  // X
  o.x += dx; let hitX = false;
  {
    const y0 = Math.floor(o.y / T), y1 = Math.floor((o.y + o.h - 1) / T);
    if (dx > 0) { const tx = Math.floor((o.x + o.w - 1) / T); for (let ty = y0; ty <= y1; ty++) if (tileAt(tx, ty) === 1) { o.x = tx * T - o.w; hitX = true; break; } }
    else if (dx < 0) { const tx = Math.floor(o.x / T); for (let ty = y0; ty <= y1; ty++) if (tileAt(tx, ty) === 1) { o.x = (tx + 1) * T; hitX = true; break; } }
    for (const s of sol) if (s.solid && overlap(o, s)) { if (dx > 0) o.x = s.x - o.w; else if (dx < 0) o.x = s.x + s.w; hitX = true; }
  }
  // Y
  const prevBottom = o.y + o.h; o.y += dy; let hitY = false, ground = false, onMover = null;
  {
    const x0 = Math.floor(o.x / T), x1 = Math.floor((o.x + o.w - 1) / T);
    if (dy > 0) {
      const ty = Math.floor((o.y + o.h - 0.01) / T);
      for (let tx = x0; tx <= x1; tx++) {
        const t = tileAt(tx, ty);
        if (t === 1 || (t === 2 && prevBottom <= ty * T + 0.01 && !opts.drop)) { o.y = ty * T - o.h; hitY = ground = true; break; }
      }
    } else if (dy < 0) {
      const ty = Math.floor(o.y / T);
      for (let tx = x0; tx <= x1; tx++) if (tileAt(tx, ty) === 1) { o.y = (ty + 1) * T; hitY = true; break; }
    }
    for (const s of sol) {
      if (s.solid && overlap(o, s)) { if (dy > 0) { o.y = s.y - o.h; ground = true; } else if (dy < 0) o.y = s.y + s.h; hitY = true; }
      else if (s.oneway && dy >= 0 && !opts.drop && o.x + o.w > s.x && o.x < s.x + s.w && prevBottom <= s.y + 0.5 && o.y + o.h >= s.y) { o.y = s.y - o.h; hitY = ground = true; onMover = s; }
    }
  }
  return { hitX, hitY, ground, onMover };
}
function pointSolid(x, y) { const t = tileAt(Math.floor(x / T), Math.floor(y / T)); if (t === 1) return true; for (const e of G.ents) if (e.solid && x >= e.x && x < e.x + e.w && y >= e.y && y < e.y + e.h) return e; return false; }

// ---------------------------------------------------------------- particles & fx
function part(o) { if (G.parts.length > 700) G.parts.shift(); G.parts.push(Object.assign({ vx: 0, vy: 0, g: 0, life: 0.5, t: 0, size: 2, col: '#fff', drag: 0, glow: null }, o)); }
function sparks(x, y, n, col = '#ffd23a', sp = 160) { for (let i = 0; i < n; i++) { const a = rnd(0, Math.PI * 2), s = rnd(40, sp); part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: 300, life: rnd(0.15, 0.4), size: rnd(1, 2.5), col }); } }
function explode(x, y, big = false) {
  const n = big ? 60 : 26;
  for (let i = 0; i < n; i++) { const a = rnd(0, Math.PI * 2), s = rnd(30, big ? 260 : 170);
    part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 30, g: 120, drag: 2.2, life: rnd(0.3, big ? 1.0 : 0.6), size: rnd(3, big ? 9 : 6), col: pick(['#fff3a0', '#ffc23a', '#ff6b35', '#ff3b1f']), fire: true }); }
  for (let i = 0; i < n / 2; i++) part({ x: x + rnd(-10, 10), y: y + rnd(-10, 10), vx: rnd(-30, 30), vy: rnd(-60, -10), life: rnd(0.6, 1.4), size: rnd(4, 10), col: 'rgba(40,36,48,0.55)', smoke: true, drag: 1 });
  for (let i = 0; i < (big ? 14 : 6); i++) part({ x, y, vx: rnd(-160, 160), vy: rnd(-260, -80), g: 600, life: rnd(0.6, 1.2), size: rnd(2, 3), col: pick(['#7a8090', '#4b4f66', '#b0b6c6']), debris: true });
  part({ x, y, life: big ? 0.45 : 0.28, ring: true, size: big ? 80 : 40, col: '#fff' });
  part({ x, y, life: big ? 0.5 : 0.3, flare: true, size: big ? 3 : 1.6 });
  G.shake = Math.max(G.shake, big ? 10 : 5); if (big) G.hitstop = 0.06;
  SFX.boom(big);
}
function floatText(x, y, txt, col = '#ffd23a') { G.floats.push({ x, y, txt, col, t: 0 }); }

// ---------------------------------------------------------------- player
function updatePlayer(dt) {
  const P = G.player, lv = G.lv;
  if (P.dead) { P.deadT += dt; P.vy += 900 * dt; P.y += P.vy * dt; if (P.deadT > 2.4) { respawn(); } return; }
  const acc = P.ground ? 1400 : 900, max = 150;
  let mx = (K.right ? 1 : 0) - (K.left ? 1 : 0);
  if (mx) { P.vx = clamp(P.vx + mx * acc * dt, -max, max); P.face = mx; } else { const f = (P.ground ? 1600 : 500) * dt; P.vx = Math.abs(P.vx) <= f ? 0 : P.vx - Math.sign(P.vx) * f; }
  // jump buffer & coyote
  if (KP.jump) P.jbuf = 0.12; else P.jbuf -= dt;
  P.coyote = P.ground ? 0.09 : P.coyote - dt;
  if (P.jbuf > 0 && P.coyote > 0) {
    if (K.down && P.standOneway) { P.dropT = 0.25; P.jbuf = 0; P.coyote = 0; }
    else { P.vy = -455; P.jbuf = 0; P.coyote = 0; P.ground = false; SFX.jump(); for (let i = 0; i < 6; i++) part({ x: P.x + P.w / 2, y: P.y + P.h, vx: rnd(-50, 50), vy: rnd(-40, 0), life: 0.35, size: rnd(2, 3), col: 'rgba(180,180,200,0.5)', smoke: true }); }
  }
  if (!K.jump && P.vy < -160) P.vy += 2200 * dt; // variable jump height
  P.vy = Math.min(P.vy + 1350 * dt, 520);
  P.dropT -= dt;
  const wasGround = P.ground; const vyBefore = P.vy;
  const r = moveBody(P, P.vx * dt, P.vy * dt, { drop: P.dropT > 0 });
  if (r.hitX) P.vx = 0;
  if (r.hitY) P.vy = 0;
  P.ground = r.ground; P.standOneway = false;
  if (P.ground) {
    const ty = Math.floor((P.y + P.h + 1) / T); const x0 = Math.floor(P.x / T), x1 = Math.floor((P.x + P.w - 1) / T);
    let solidBelow = false; for (let tx = x0; tx <= x1; tx++) if (tileAt(tx, ty) === 1) solidBelow = true;
    P.standOneway = !solidBelow;
    if (r.onMover) P.x += r.onMover.vx * dt;
  }
  if (!wasGround && P.ground && vyBefore > 300) { SFX.land(); for (let i = 0; i < 8; i++) part({ x: P.x + P.w / 2 + rnd(-8, 8), y: P.y + P.h, vx: rnd(-70, 70), vy: rnd(-40, -5), life: 0.35, size: rnd(2, 3), col: 'rgba(180,180,200,0.45)', smoke: true }); }
  // fire
  P.cool -= dt; P.fireT -= dt;
  const rate = [0, 0.28, 0.22, 0.2, 0.17][P.gun];
  if (K.fire && P.cool <= 0) {
    P.cool = rate; P.fireT = 0.1;
    const mxp = P.x + P.w / 2 + P.face * 22, myp = P.y + P.h - 31;
    const shots = P.gun >= 4 ? [-0.12, 0, 0.12] : P.gun >= 3 ? [-0.05, 0.05] : [0];
    for (const a of shots) G.bullets.push({ x: mxp, y: myp + a * 40, vx: P.face * 470 * Math.cos(a), vy: 470 * Math.sin(a), dmg: P.gun >= 2 ? 1.5 : 1, mine: true, life: 1.1, w: 8, h: 4 });
    SFX.shoot(P.gun);
    part({ x: mxp, y: myp, life: 0.06, muzzle: true, dir: P.face });
    part({ x: P.x + P.w / 2 - P.face * 2, y: myp - 2, vx: -P.face * rnd(40, 80), vy: rnd(-160, -100), g: 700, life: 0.7, size: 2, col: '#ffc23a', shell: true });
    P.vx -= P.face * 12;
  }
  // animation
  P.anim += Math.abs(P.vx) * dt * 0.09;
  if (P.ground && Math.abs(P.vx) > 20) { const s = Math.floor(P.anim) % 4; if (s !== P.lastStep && (s === 0 || s === 2)) SFX.step(); P.lastStep = s; }
  P.inv -= dt;
  // idle chatter
  if (mx || K.fire || K.jump) P.idle = 0; else { P.idle += dt; if (P.idle > 18) { P.idle = -30; say(17); } }
  // hazards
  const feet = { x: P.x + 2, y: P.y + P.h - 6, w: P.w - 4, h: 8 };
  for (const hz of lv.hazards) if (overlap(feet, { x: hz.x, y: hz.y + 6, w: T, h: 10 })) { hurtPlayer(lv.th.haz === 'acid' ? 2 : 1, 0, true); break; }
  // fall out
  if (P.y > lv.ph + 40) { P.hp = 0; killPlayer(); }
  // items
  for (const e of G.ents) if (e.type === 'item' && !e.dead && overlap(P, e)) collect(e);
  // secrets
  for (const s of lv.secrets) if (!s.found && overlap(P, s)) { s.found = true; G.stats.secrets++; addScore(2500, s.x + 16, s.y); SFX.secret(); say(18, true); floatText(s.x + 16, s.y - 10, 'GEHEIMVERSTECK!', '#50ff90'); }
  // exit
  if (lv.exit && overlap(P, lv.exit) && G.state === 'play') levelComplete();
  // arena trigger
  if (lv.arena && !lv.bossOn && P.x > (lv.arena[0] + 3) * T) startBoss();
}
function collect(e) {
  const P = G.player; e.dead = true; const cx = e.x + 6, cy = e.y + 6;
  sparks(cx, cy, 10, '#fff3a0', 120);
  switch (e.kind) {
    case '$': addScore(500, cx, cy); SFX.pickup(); break;
    case 'c': addScore(1000, cx, cy); SFX.pickup(); break;
    case 'h': P.hp = Math.min(P.maxhp, P.hp + 2); SFX.pickup(); floatText(cx, cy - 8, '+2 LEBEN', '#ff8a8a'); say(7); break;
    case 'e': P.hp = P.maxhp; SFX.power(); floatText(cx, cy - 8, 'VOLLE ENERGIE', '#50ff90'); say(19); break;
    case 'g': if (P.gun < 4) P.gun++; else addScore(2000, cx, cy); SFX.power(); floatText(cx, cy - 8, 'FEUERKRAFT ' + P.gun, '#ff6b35'); say(8, true); G.flash = 0.15; break;
    case 'r': case 'u': P.keys[e.kind] = true; SFX.power(); floatText(cx, cy - 8, e.kind === 'r' ? 'ROTE KARTE' : 'BLAUE KARTE', e.kind === 'r' ? '#ff5a4a' : '#5aa0ff'); say(9, true); break;
  }
  if (P.hp > 2) P.lowSaid = false;
}
function addScore(n, x, y) { G.score += n; if (x != null) floatText(x, y, '' + n); }
function hurtPlayer(d, fromX, hazard) {
  const P = G.player; if (P.inv > 0 || P.dead || G.state !== 'play') return;
  P.hp -= d; P.inv = 1.1; G.shake = Math.max(G.shake, 6); G.flash = 0.12; SFX.hurt();
  P.vy = hazard ? -380 : -220; P.vx = hazard ? 0 : (P.x + P.w / 2 < fromX ? -160 : 160);
  sparks(P.x + P.w / 2, P.y + 20, 12, '#ff5a4a');
  if (P.hp <= 0) { killPlayer(); return; }
  if (P.hp <= 2 && !P.lowSaid) { P.lowSaid = true; say(12, true); }
  else if (Math.random() < 0.45) say(pick(V.HURT));
}
function killPlayer() {
  const P = G.player; if (P.dead) return; P.dead = true; P.deadT = 0; P.vy = -300; P.hp = 0;
  explode(P.x + P.w / 2, P.y + 20, false); say(13, true); G.state = 'dying';
}
function respawn() {
  G.score = Math.max(0, G.score - 1000);
  const P = G.player; P.hp = P.maxhp; P.dead = false; P.gun = Math.max(1, P.gun - 1);
  loadLevel(G.level, true); G.state = 'play'; if (G.lv.arena) playSong(0);
}

// ---------------------------------------------------------------- enemies
function hurtEnemy(e, d, bx) {
  if (e.dead) return;
  if (e.type === 'boss' && !e.active) return;
  e.hp -= d; e.flash = 0.08; SFX.hit();
  if (e.type === 'boss') { G.shake = Math.max(G.shake, 2); if (!e.halfSaid && e.hp < e.maxhp / 2) { e.halfSaid = true; say(15, true); } }
  if (e.hp <= 0) killEnemy(e);
  else if (!e.fixed && !e.fly) e.vx += Math.sign(e.x + e.w / 2 - bx) * 40;
}
function killEnemy(e) {
  e.dead = true; const cx = e.x + e.w / 2, cy = e.y + e.h / 2;
  if (e.type === 'boss') { bossDeath(e); return; }
  if (e.type === 'blob') { for (let i = 0; i < 26; i++) part({ x: cx, y: cy, vx: rnd(-160, 160), vy: rnd(-240, -40), g: 700, life: rnd(0.4, 0.9), size: rnd(2, 5), col: pick(['#4cd33a', '#7cff5a', '#2a8a20']), blob: true }); SFX.hit(); noise(0.25, 0.4, 900, 100); G.shake = Math.max(G.shake, 3); }
  else explode(cx, cy, false);
  addScore(e.pts, cx, e.y - 4);
  G.stats.kills++;
  // voice
  if (G.time - VOICE.lastKill > 6 && Math.random() < 0.55) { if (say(e.type === 'blob' ? 23 : pick(V.KILL))) VOICE.lastKill = G.time; }
  // occasional drop
  if (Math.random() < 0.12) G.ents.push({ type: 'item', kind: Math.random() < 0.6 ? 'h' : '$', x: cx - 6, y: e.y + e.h - 14, w: 12, h: 12, t: 0, vy: -150, fall: true });
}
function enemyShoot(e, x, y, tx, ty, sp = 170, big) {
  const a = Math.atan2(ty - y, tx - x);
  G.bullets.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, dmg: 1, mine: false, life: 3, w: big ? 10 : 6, h: big ? 10 : 6, big, g: big ? 220 : 0 });
  SFX.eshoot();
}
function updateEnemy(e, dt) {
  const P = G.player; e.t += dt; e.flash -= dt;
  const pcx = P.x + P.w / 2, pcy = P.y + P.h / 2, cx = e.x + e.w / 2, cy = e.y + e.h / 2;
  const dx = pcx - cx, dy = pcy - cy, dist = Math.hypot(dx, dy);
  const near = Math.abs(dx) < VW * 0.6 && Math.abs(dy) < VH * 0.7;
  if (!near && e.type !== 'boss') return;
  switch (e.type) {
    case 'walker': {
      if (!e.dir) e.dir = -1;
      e.vx += (e.dir * e.speed - e.vx) * Math.min(1, dt * 6);
      e.vy = Math.min(e.vy + 1300 * dt, 500);
      const r = moveBody(e, e.vx * dt, e.vy * dt); if (r.hitY) e.vy = 0;
      // turn at walls / edges
      const ahead = e.dir > 0 ? e.x + e.w + 2 : e.x - 2;
      if (r.hitX || (r.ground && !pointSolid(ahead, e.y + e.h + 4) && !onOneway(ahead, e.y + e.h + 4))) { e.dir *= -1; e.vx = 0; }
      e.face = e.dir;
      e.cool -= dt;
      if (G.level > 0 && e.cool <= 0 && Math.abs(dy) < 30 && Math.abs(dx) < 260 && Math.sign(dx) === e.dir) { e.cool = rnd(1.8, 3); enemyShoot(e, cx + e.dir * 12, e.y + 10, pcx, e.y + 10, 160); }
      break; }
    case 'drone': {
      const tx = clamp(pcx, e.hx - 140, e.hx + 140);
      e.vx += (Math.sign(tx - cx) * e.speed - e.vx) * dt * 1.5;
      e.x += e.vx * dt; e.y = e.hy - e.h / 2 + Math.sin(e.t * 2.4) * 14;
      e.face = dx > 0 ? 1 : -1;
      e.cool -= dt;
      if (e.cool <= 0 && dist < 280) { e.cool = rnd(2, 3.2); enemyShoot(e, cx, e.y + e.h, pcx, pcy, 140); }
      break; }
    case 'turret': {
      e.face = dx > 0 ? 1 : -1; e.cool -= dt;
      if (e.cool <= 0 && Math.abs(dx) < 300 && Math.abs(dy) < 120) { e.cool = G.level === 2 ? 1.4 : 1.9; enemyShoot(e, cx + e.face * 12, e.y + 8, pcx, pcy, 175); e.recoil = 0.12; }
      e.recoil = (e.recoil || 0) - dt;
      break; }
    case 'blob': {
      e.vy = Math.min(e.vy + 1100 * dt, 500);
      const r = moveBody(e, e.vx * dt, e.vy * dt);
      if (r.hitX) e.vx *= -0.5;
      if (r.ground) { e.vx *= 0.85; e.cool -= dt; e.squash = Math.max(0, (e.squash || 0) - dt * 4);
        if (e.cool <= 0 && dist < 300) { e.cool = rnd(0.5, 1.1); e.vy = -rnd(250, 360); e.vx = Math.sign(dx) * rnd(60, 110); e.squash = 0; } }
      else if (e.vy > 0) e.air = true;
      if (r.ground && e.air) { e.air = false; e.squash = 1; }
      if (r.hitY) e.vy = 0;
      e.face = dx > 0 ? 1 : -1;
      break; }
    case 'boss': updateBoss(e, dt, dx, pcx, pcy); break;
  }
  // contact damage
  if (!e.dead && overlap(P, { x: e.x + 3, y: e.y + 3, w: e.w - 6, h: e.h - 6 })) hurtPlayer(e.type === 'boss' ? 2 : 1, cx);
}
function onOneway(x, y) { if (tileAt(Math.floor(x / T), Math.floor(y / T)) === 2) return true; for (const e of G.ents) if (e.oneway && x >= e.x && x < e.x + e.w && Math.abs(y - e.y) < 6) return true; return false; }

// ---------------------------------------------------------------- boss
function startBoss() {
  const lv = G.lv; lv.bossOn = true;
  const wx = lv.arena[0] * T;
  G.ents.push({ type: 'door', key: 'boss', x: wx, y: 13 * T, w: T * 2, h: T * 7, solid: true, open: 0, closing: 0 });
  const b = G.ents.find(e => e.type === 'boss'); if (b) { b.active = false; b.intro = 1.8; }
  playSong(1); say(21, true); G.shake = 8; SFX.door();
}
function updateBoss(e, dt, dx, pcx, pcy) {
  if (!G.lv.bossOn) return;
  if (e.intro > 0) { e.intro -= dt; if (e.intro <= 0) e.active = true; return; }
  const lv = G.lv; const minX = (lv.arena[0] + 3) * T, maxX = (lv.arena[1] - 1) * T - e.w;
  const rage = e.hp < e.maxhp / 2;
  e.phaseT = (e.phaseT || 0) + dt;
  if (!e.mode) e.mode = 'roll';
  e.face = dx > 0 ? 1 : -1;
  if (e.mode === 'roll') {
    const target = clamp(pcx - e.w / 2 - e.face * 120, minX, maxX);
    e.vx += (Math.sign(target - e.x) * (rage ? 95 : 70) - e.vx) * dt * 2;
    if (Math.abs(target - e.x) < 8) e.vx *= 0.9;
    e.x = clamp(e.x + e.vx * dt, minX, maxX);
    e.cool -= dt;
    if (e.cool <= 0) {
      e.cool = rage ? 1.1 : 1.6;
      const r = Math.random();
      if (r < 0.45) { // cannon: arcing shells
        const n = rage ? 3 : 2;
        for (let i = 0; i < n; i++) {
          const sx = e.x + e.w / 2 + e.face * 20, sy = e.y + 10;
          const tx = pcx + rnd(-50, 50) + i * 30 * e.face; const t = 1.0 + i * 0.12;
          G.bullets.push({ x: sx, y: sy, vx: (tx - sx) / t, vy: (pcy - sy - 0.5 * 220 * t * t) / t, dmg: 2, mine: false, life: 4, w: 10, h: 10, big: true, g: 220 });
        }
        SFX.boom(false); e.recoil = 0.25; G.shake = Math.max(G.shake, 4);
      } else if (r < 0.8) { // laser fan from dome
        const n = rage ? 7 : 5; const base = Math.atan2(pcy - (e.y + 20), pcx - (e.x + e.w / 2));
        for (let i = 0; i < n; i++) { const a = base + (i - (n - 1) / 2) * 0.16; G.bullets.push({ x: e.x + e.w / 2, y: e.y + 26, vx: Math.cos(a) * 170, vy: Math.sin(a) * 170, dmg: 1, mine: false, life: 3, w: 6, h: 6 }); }
        SFX.eshoot();
      } else { // charge
        e.mode = 'charge'; e.chargeT = 0; e.vx = 0; SFX.door();
      }
      if (rage && Math.random() < 0.3 && G.ents.filter(x => x.type === 'drone' && !x.dead).length < 2) {
        const d = addEnemy('drone', e.x + e.w / 2, e.y - 10); d.hx = e.x + e.w / 2; d.hy = 8 * T; d.pts = 50;
      }
    }
  } else if (e.mode === 'charge') {
    e.chargeT += dt;
    if (e.chargeT < 0.6) { e.x += Math.sin(e.chargeT * 80) * 1.2; if (Math.random() < 0.5) part({ x: e.x + rnd(0, e.w), y: e.y + e.h - 4, vx: rnd(-30, 30), vy: rnd(-60, -20), life: 0.5, size: 4, col: 'rgba(60,50,60,0.6)', smoke: true }); }
    else {
      if (!e.cdir) e.cdir = e.face;
      e.x += e.cdir * (rage ? 330 : 260) * dt;
      if (e.x <= minX || e.x >= maxX) { e.x = clamp(e.x, minX, maxX); e.mode = 'roll'; e.cdir = 0; e.cool = 1.2; G.shake = 12; SFX.boom(true); sparks(e.cdir > 0 ? e.x + e.w : e.x, e.y + e.h - 20, 20); }
    }
  }
  e.recoil = (e.recoil || 0) - dt;
  if (rage && Math.random() < 0.15) part({ x: e.x + rnd(20, e.w - 20), y: e.y + rnd(30, 80), vx: rnd(-10, 10), vy: rnd(-70, -30), life: 1, size: rnd(4, 8), col: 'rgba(50,45,55,0.5)', smoke: true });
}
function bossDeath(e) {
  G.state = 'bossdying'; G.stateT = 0; e.dying = true; e.dead = false; e.hp = 0; stopSong();
  G.bullets = G.bullets.filter(b => b.mine);
  for (const d of G.ents) if (d.type === 'drone') { d.dead = true; explode(d.x + 12, d.y + 10); }
  addScore(e.pts, e.x + e.w / 2, e.y);
}

// ---------------------------------------------------------------- bullets
function updateBullets(dt) {
  const P = G.player;
  for (const b of G.bullets) {
    b.life -= dt; if (b.g) b.vy += b.g * dt;
    b.x += b.vx * dt; b.y += b.vy * dt;
    if (b.mine && Math.random() < 0.5) part({ x: b.x, y: b.y, life: 0.12, size: 2, col: '#ffe08a' });
    const hit = pointSolid(b.x, b.y);
    if (hit) {
      b.life = 0;
      if (b.mine && hit !== true && (hit.type === 'crate' || hit.type === 'barrel')) damageProp(hit, b.dmg);
      if (b.big) explodeSmall(b.x, b.y); else sparks(b.x, b.y, 5, b.mine ? '#ffe08a' : '#ff6a6a', 100);
      continue;
    }
    const box = { x: b.x - b.w / 2, y: b.y - b.h / 2, w: b.w, h: b.h };
    if (b.mine) {
      let propHit = null;
      for (const e of G.ents) if ((e.type === 'crate' || e.type === 'barrel') && !e.dead && b.x >= e.x && b.x < e.x + e.w && b.y >= e.y - 18 && b.y < e.y + e.h) { propHit = e; break; }
      if (propHit) { b.life = 0; damageProp(propHit, b.dmg); sparks(b.x, b.y, 5, '#ffe08a', 100); continue; }
      for (const e of G.ents) if (e.enemy && !e.dead && !e.dying && overlap(box, (e.type === 'blob' || e.type === 'turret') ? { x: e.x, y: e.y - 14, w: e.w, h: e.h + 14 } : e)) { hurtEnemy(e, b.dmg, b.x); b.life = 0; sparks(b.x, b.y, 6, '#fff3a0', 120); break; }
    } else if (!P.dead && overlap(box, P)) { b.life = 0; hurtPlayer(b.dmg, b.x); if (b.big) explodeSmall(b.x, b.y); }
  }
  G.bullets = G.bullets.filter(b => b.life > 0 && b.x > G.cam.x - 100 && b.x < G.cam.x + VW + 100 && b.y < G.lv.ph + 50);
}
function explodeSmall(x, y) { for (let i = 0; i < 12; i++) { const a = rnd(0, 6.3), s = rnd(30, 120); part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, drag: 3, life: rnd(0.2, 0.45), size: rnd(2, 5), col: pick(['#ffc23a', '#ff6b35', '#fff3a0']), fire: true }); } part({ x, y, life: 0.2, ring: true, size: 22, col: '#ffd' }); noise(0.25, 0.3, 2000, 100); G.shake = Math.max(G.shake, 2); }
function damageProp(p, d) {
  p.hp -= d; p.flash = 0.08;
  if (p.hp > 0) { SFX.hit(); return; }
  p.dead = true; const cx = p.x + p.w / 2, cy = p.y + p.h / 2;
  if (p.type === 'crate') {
    for (let i = 0; i < 12; i++) part({ x: cx, y: cy, vx: rnd(-140, 140), vy: rnd(-220, -60), g: 700, life: rnd(0.5, 1), size: rnd(2, 4), col: pick(['#a86a2c', '#6b3f16', '#d0924a']), debris: true });
    noise(0.2, 0.35, 1600, 200); addScore(50);
    const k = Math.random(); G.ents.push({ type: 'item', kind: k < 0.45 ? 'h' : k < 0.85 ? '$' : 'c', x: cx - 6, y: p.y + 2, w: 12, h: 12, t: 0, vy: -120, fall: true });
  } else { // barrel
    explode(cx, cy, true);
    const R = 56;
    for (const e of G.ents) if ((e.enemy || e.type === 'crate' || e.type === 'barrel') && !e.dead) { if (Math.hypot(e.x + e.w / 2 - cx, e.y + e.h / 2 - cy) < R + e.w / 2) { if (e.enemy) hurtEnemy(e, 6, cx); else setTimeout(() => !e.dead && damageProp(e, 9), 120); } }
    const P = G.player; if (Math.hypot(P.x + P.w / 2 - cx, P.y + P.h / 2 - cy) < R) hurtPlayer(1, cx);
  }
}

// ---------------------------------------------------------------- world update
function update(dt) {
  G.time += dt;
  if (KP.music) setMusic(!AU.musicOn);
  if (KP.crt) { G.crt = !G.crt; store.set('crt', G.crt); document.body.classList.toggle('crt', G.crt); }
  switch (G.state) {
    case 'title':
      if (KP.start || KP.jump || KP.fire) { initAudio(); G.state = 'intro'; G.stateT = 0; }
      break;
    case 'intro':
      G.stateT += dt;
      if ((KP.start || KP.jump || KP.fire) && G.stateT > 0.4 || G.stateT > 14) startGame();
      break;
    case 'pause':
      if (KP.pause || KP.start) G.state = 'play';
      break;
    case 'levelDone':
      G.stateT += dt;
      if (G.stateT > 1.2 && (KP.start || KP.jump || KP.fire)) nextLevel();
      break;
    case 'victory':
      G.stateT += dt;
      if (Math.random() < 0.08) explodeFirework();
      if (G.stateT > 3 && (KP.start || KP.jump || KP.fire)) { G.state = 'title'; stopSong(); }
      break;
    case 'play': case 'dying': case 'bossdying':
      if (KP.pause && G.state === 'play') { G.state = 'pause'; break; }
      if (G.hitstop > 0) { G.hitstop -= dt; break; }
      G.stats.time += dt;
      updatePlayer(dt);
      for (const e of G.ents) {
        if (e.dead) continue;
        if (e.dying) { e.flash -= dt; continue; }
        if (e.enemy) updateEnemy(e, dt);
        else if (e.type === 'mover') { const nx = e.x + e.dir * 40 * dt; if (nx < e.x0 || nx > e.x1) e.dir *= -1; e.vx = e.dir * 40; e.x = clamp(nx, e.x0, e.x1); }
        else if (e.type === 'item') { e.t += dt; if (e.fall) { e.vy += 900 * dt; const r = moveBody(e, 0, e.vy * dt); if (r.hitY) { e.vy = 0; e.fall = false; } } }
        else if (e.type === 'door') {
          const P = G.player;
          if (e.key !== 'boss' && P.keys[e.key] && !e.opening && Math.abs(P.x + P.w / 2 - (e.x + e.w / 2)) < 40 && Math.abs(P.y - e.y) < 60) { e.opening = true; SFX.door(); floatText(e.x + 16, e.y - 6, 'TÜR OFFEN', '#9fe'); }
          if (e.opening) { e.open = Math.min(1, e.open + dt * 1.5); if (e.open >= 1) e.solid = false; }
        }
        else if (e.flash > 0) e.flash -= dt;
      }
      G.ents = G.ents.filter(e => !e.dead || e.type === 'boss');
      updateBullets(dt);
      if (G.state === 'bossdying') bossDyingUpdate(dt);
      break;
  }
  updateParts(dt);
  // camera
  if (G.lv && G.player) {
    const P = G.player; const lv = G.lv;
    let tx = P.x + P.w / 2 - VW / 2 + P.face * 60, ty = P.y + P.h / 2 - VH * 0.55;
    if (lv.bossOn) tx = clamp(tx, lv.arena[0] * T, lv.pw);
    G.cam.x += (clamp(tx, 0, lv.pw - VW) - G.cam.x) * Math.min(1, dt * 5);
    G.cam.y += (clamp(ty, 0, lv.ph - VH) - G.cam.y) * Math.min(1, dt * 5);
  }
  G.shake = Math.max(0, G.shake - dt * 30); G.flash = Math.max(0, G.flash - dt);
  for (const k in KP) KP[k] = false;
}
function updateParts(dt) {
  for (const p of G.parts) {
    p.t += dt; p.vy += p.g * dt; if (p.drag) { p.vx *= 1 - p.drag * dt; p.vy *= 1 - p.drag * dt; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    if ((p.debris || p.shell || p.blob) && G.lv && tileAt(Math.floor(p.x / T), Math.floor(p.y / T)) === 1) { p.y -= p.vy * dt; p.vy *= -0.35; p.vx *= 0.6; }
  }
  G.parts = G.parts.filter(p => p.t < p.life);
  for (const f of G.floats) f.t += dt; G.floats = G.floats.filter(f => f.t < 1.1);
}
function bossDyingUpdate(dt) {
  G.stateT += dt; const b = G.ents.find(e => e.type === 'boss');
  if (b && G.stateT < 3) { if (Math.random() < 0.25) explode(b.x + rnd(0, b.w), b.y + rnd(0, b.h), Math.random() < 0.2); b.flash = 0.05; }
  if (b && G.stateT >= 3 && !b.gone) { b.gone = true; b.dead = true; explode(b.x + b.w / 2, b.y + b.h / 2, true); explode(b.x + 20, b.y + 40, true); explode(b.x + b.w - 20, b.y + 90, true); G.flash = 0.6; G.shake = 16;
    G.ents = G.ents.filter(e => e !== b); say(16, true); }
  if (G.stateT > 6.2) { G.state = 'victory'; G.stateT = 0; saveHi(); playSong(0); }
}
function explodeFirework() {
  const x = rnd(80, VW - 80) + G.cam.x, y = rnd(40, 160) + G.cam.y; const col = pick(['#ff6b35', '#ffd23a', '#50ff90', '#5aa0ff', '#ff5ad9']);
  for (let i = 0; i < 40; i++) { const a = i / 40 * 6.283, s = rnd(80, 130); part({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: 60, drag: 1.2, life: 1.2, size: 2, col }); }
  if (AU.ctx) noise(0.5, 0.25, 3000, 200);
}
function startGame() {
  G.score = 0; G.player = newPlayer(); loadLevel(0); G.state = 'play'; playSong(0); setTimeout(() => say(0, true), 500);
}
function levelComplete() {
  G.state = 'levelDone'; G.stateT = 0; SFX.power(); say(14, true);
  const bonus = Math.max(0, Math.round((240 - G.stats.time) * 20)); G.stats.bonus = bonus; G.score += bonus; saveHi();
}
function nextLevel() { if (G.level + 1 < LEVELS.length) { loadLevel(G.level + 1, true); G.state = 'play'; playSong(0); setTimeout(() => say(20, true), 400); } }
function saveHi() { if (G.score > G.hi) { G.hi = G.score; store.set('hi', G.hi); } }

// ---------------------------------------------------------------- render
function drawBG() {
  const lv = G.lv; const bg = IMG[lv.def.bg];
  const cx = G.cam.x, cy = G.cam.y;
  if (bg) {
    const s = VH * 1.0 / bg.height; const w = bg.width * s, h = VH;
    let off = -((cx * 0.18) % (w * 2)); const y = -cy * 0.1;
    for (let i = 0; off + i * w < VW; i++) {
      const x = Math.floor(off + i * w);
      if (i % 2) { ctx.save(); ctx.translate(x + w, y); ctx.scale(-1, 1); ctx.drawImage(bg, 0, 0, Math.ceil(w) + 1, h); ctx.restore(); }
      else ctx.drawImage(bg, x, y, Math.ceil(w) + 1, h);
    }
  } else { ctx.fillStyle = '#120c22'; ctx.fillRect(0, 0, VW, VH); }
  if (lv.mid) ctx.drawImage(lv.mid, -Math.floor(cx * 0.5), Math.floor(-cy * 0.3 + 30));
  // depth haze
  ctx.fillStyle = 'rgba(8,6,20,0.25)'; ctx.fillRect(0, 0, VW, VH);
}
function drawItem(e, x, y) {
  const bob = Math.sin(e.t * 4) * 2;
  const ic = { '$': ICON.disk, c: ICON.cd, h: ICON.wurst, e: ICON.can, g: ICON.chip, r: ICON.keyR, u: ICON.keyU }[e.kind];
  const gcol = { '$': 'cyan', c: 'white', h: 'orange', e: 'green', g: 'orange', r: 'red', u: 'cyan' }[e.kind];
  ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.35 + Math.sin(e.t * 5) * 0.1; glow(gcol, x + 6, y + 6 + bob, 0.5); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(ic, Math.round(x + 6 - ic.width / 2), Math.round(y + 12 - ic.height + bob));
  if ((e.t * 3) % 3 < 0.25) { ctx.fillStyle = '#fff'; ctx.fillRect(Math.round(x + 9), Math.round(y + bob), 1, 1); }
}
function drawProp(e, x, y) {
  if (e.type === 'crate') {
    ctx.fillStyle = e.flash > 0 ? '#fff' : '#6b3f16'; ctx.fillRect(x, y, T, T);
    if (e.flash <= 0) { ctx.fillStyle = '#b87a36'; ctx.fillRect(x + 1, y + 1, 14, 14); ctx.fillStyle = '#8a5424'; ctx.fillRect(x + 1, y + 5, 14, 1); ctx.fillRect(x + 1, y + 10, 14, 1);
      ctx.fillStyle = '#d9a35a'; ctx.fillRect(x + 1, y + 1, 14, 1); ctx.fillStyle = '#4a2a0e'; for (let i = 0; i < 14; i++) ctx.fillRect(x + 1 + i, y + 1 + i, 1, 1); }
  } else if (e.type === 'barrel') {
    ctx.fillStyle = e.flash > 0 ? '#fff' : '#8a1a12'; ctx.fillRect(x + 1, y, 12, 15);
    if (e.flash <= 0) { ctx.fillStyle = '#d0301e'; ctx.fillRect(x + 2, y, 8, 15); ctx.fillStyle = '#ff7a4a'; ctx.fillRect(x + 3, y + 1, 2, 13);
      ctx.fillStyle = '#2a0a06'; ctx.fillRect(x + 1, y + 3, 12, 1); ctx.fillRect(x + 1, y + 11, 12, 1);
      ctx.fillStyle = '#ffd23a'; ctx.fillRect(x + 5, y + 5, 4, 4); ctx.fillStyle = '#1a1a1a'; ctx.fillRect(x + 6, y + 6, 2, 2); }
  } else if (e.type === 'door') {
    const col = e.key === 'r' ? '#ff4a3a' : e.key === 'u' ? '#3a8aff' : '#ffb23a';
    const h = Math.round(e.h * (1 - e.open));
    ctx.fillStyle = '#1a1b26'; ctx.fillRect(x, y, e.w, 3); ctx.fillRect(x, y + e.h - 3, e.w, 3);
    if (h > 0) {
      ctx.fillStyle = '#2a2c3d'; ctx.fillRect(x + 2, y, e.w - 4, h);
      ctx.fillStyle = col; ctx.globalAlpha = 0.55 + Math.sin(G.time * 8) * 0.15;
      for (let yy = 4; yy < h - 2; yy += 6) ctx.fillRect(x + 4, y + yy, e.w - 8, 2);
      ctx.globalAlpha = 1; ctx.fillStyle = col; ctx.fillRect(x + 2, y, 2, h); ctx.fillRect(x + e.w - 4, y, 2, h);
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.25; glow(e.key === 'r' ? 'red' : e.key === 'u' ? 'cyan' : 'orange', x + e.w / 2, y + h / 2, 1.4); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      if (e.key !== 'boss') { const ic = e.key === 'r' ? ICON.keyR : ICON.keyU; ctx.drawImage(ic, x + e.w / 2 - 6, y + Math.min(h - 12, 18)); }
    }
  } else if (e.type === 'mover') {
    drawGirder(ctx, x, y, G.lv.th); drawGirder(ctx, x + T, y, G.lv.th); drawGirder(ctx, x + 2 * T, y, G.lv.th);
    ctx.fillStyle = G.lv.th.accent; ctx.fillRect(x + 20, y + 6, 8, 2);
    ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.4; glow('cyan', x + 24, y + 10, 0.35); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  }
}
function drawEnemy(e, x, y) {
  const white = e.flash > 0;
  const bx = x + e.w / 2, by = y + e.h;
  switch (e.type) {
    case 'walker': { const bob = Math.abs(Math.sin(e.t * 9)) * 2; spr('walker', bx, by - bob + 1, e.face > 0, white); break; }
    case 'drone': spr('drone', bx, by + 4, e.face > 0, white); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.5; glow('red', bx + e.face * 7, y + 12, 0.35); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; break;
    case 'turret': spr('turret', bx - (e.recoil > 0 ? e.face * 2 : 0), by, e.face > 0, white); break;
    case 'blob': { const sq = e.squash || 0; const air = !e.air ? 0 : 0.15; spr('blob', bx, by, e.face > 0, white, 1 + sq * 0.25 - air, 1 - sq * 0.25 + air + Math.sin(e.t * 6) * 0.04); break; }
    case 'boss': {
      if (e.gone) return;
      const shakeX = e.mode === 'charge' && e.chargeT < 0.6 ? rnd(-1, 1) : 0;
      spr('boss', bx + shakeX - (e.recoil > 0 ? e.face * 3 : 0), by + 2, e.face > 0, white);
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.25 + Math.sin(G.time * 6) * 0.1; glow('orange', bx, y + 70, 1.2); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      break; }
  }
}
function drawPlayer(P, x, y) {
  if (P.dead) { spr('hero_hurt', x + P.w / 2, y + P.h, P.face < 0, false); return; }
  if (P.inv > 0 && Math.floor(P.inv * 20) % 2 === 0) return;
  let f;
  if (P.inv > 0.8) f = 'hero_hurt';
  else if (!P.ground) f = 'hero_jump';
  else if (Math.abs(P.vx) > 20) f = 'hero_run' + (Math.floor(P.anim) % 4);
  else if (P.fireT > 0) f = 'hero_fire';
  else f = 'hero_idle';
  // sprites face right natively -> flip when facing left
  const breathe = f === 'hero_idle' ? Math.sin(G.time * 3) * 0.6 : 0;
  spr(f, x + P.w / 2, y + P.h + 1 + breathe, P.face < 0, false);
}
function render() {
  const lv = G.lv;
  if (G.state === 'title' || G.state === 'loading') return renderTitle();
  if (G.state === 'intro') return renderIntro();
  const sx = G.shake ? rnd(-G.shake, G.shake) : 0, sy = G.shake ? rnd(-G.shake, G.shake) : 0;
  const cx = Math.round(G.cam.x + sx), cy = Math.round(G.cam.y + sy);
  drawBG();
  ctx.save(); ctx.translate(-cx, -cy);
  // lamps glow behind
  ctx.globalCompositeOperation = 'lighter';
  for (const l of lv.lamps) if (l.x > cx - 80 && l.x < cx + VW + 80) { ctx.globalAlpha = 0.18 + Math.sin(G.time * 2 + l.x) * 0.03; glow(lv.th.lamp, l.x, l.y + 30, 1.5); }
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  // map
  ctx.drawImage(lv.map, cx, cy, VW, VH, cx, cy, VW, VH);
  // hazards
  for (const hz of lv.hazards) { if (hz.x < cx - T || hz.x > cx + VW) continue; drawHazard(hz.x, hz.y); }
  // exit
  if (lv.exit) drawExit(lv.exit);
  // entities
  for (const e of G.ents) {
    if (e.dead && !(e.type === 'boss' && !e.gone)) continue;
    if (e.x + (e.w || 16) < cx - 40 || e.x > cx + VW + 40) continue;
    if (e.type === 'item') drawItem(e, e.x, e.y);
    else if (e.enemy) drawEnemy(e, e.x, e.y);
    else drawProp(e, Math.round(e.x), Math.round(e.y));
  }
  drawPlayer(G.player, Math.round(G.player.x), Math.round(G.player.y));
  // bullets
  for (const b of G.bullets) {
    if (b.mine) {
      ctx.fillStyle = '#fff6c0'; ctx.fillRect(Math.round(b.x - 5), Math.round(b.y - 1), 10, 3);
      ctx.fillStyle = '#ffb23a'; ctx.fillRect(Math.round(b.x - 7 * Math.sign(b.vx) - 2), Math.round(b.y - 1), 4, 3);
    } else if (b.big) {
      ctx.fillStyle = '#3a2a2a'; ctx.beginPath(); ctx.arc(b.x, b.y, 5, 0, 7); ctx.fill(); ctx.fillStyle = '#ff6b35'; ctx.fillRect(b.x - 1, b.y - 1, 2, 2);
    } else { ctx.fillStyle = '#ff3b3b'; ctx.beginPath(); ctx.arc(b.x, b.y, 3.2, 0, 7); ctx.fill(); ctx.fillStyle = '#ffd0d0'; ctx.fillRect(b.x - 1, b.y - 1, 2, 2); }
  }
  // particles (normal)
  for (const p of G.parts) {
    const k = p.t / p.life;
    if (p.ring || p.flare || p.muzzle || p.fire) continue;
    ctx.globalAlpha = p.smoke ? (1 - k) * 0.9 : 1;
    ctx.fillStyle = p.col; const s = p.smoke ? p.size * (1 + k * 1.5) : p.size;
    ctx.fillRect(Math.round(p.x - s / 2), Math.round(p.y - s / 2), Math.ceil(s), Math.ceil(s));
  }
  ctx.globalAlpha = 1;
  // additive light pass
  ctx.globalCompositeOperation = 'lighter';
  for (const b of G.bullets) { ctx.globalAlpha = 0.6; glow(b.mine ? 'yellow' : b.big ? 'orange' : 'red', b.x, b.y, b.mine ? 0.7 : 0.6); }
  for (const p of G.parts) {
    const k = p.t / p.life;
    if (p.fire) { ctx.globalAlpha = 1 - k; ctx.fillStyle = p.col; const s = p.size * (1 - k * 0.5); ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s); ctx.globalAlpha = (1 - k) * 0.35; glow('orange', p.x, p.y, s / 20); }
    else if (p.ring) { ctx.globalAlpha = (1 - k) * 0.8; ctx.strokeStyle = p.col; ctx.lineWidth = 3 * (1 - k) + 1; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * k, 0, 7); ctx.stroke(); }
    else if (p.flare) { ctx.globalAlpha = 1 - k; glow('white', p.x, p.y, p.size * (0.6 + k)); glow('orange', p.x, p.y, p.size * 1.3); }
    else if (p.muzzle) { ctx.globalAlpha = 1; glow('yellow', p.x + p.dir * 4, p.y, 1.1); ctx.fillStyle = '#fff'; ctx.fillRect(p.x + p.dir * 2 - 2, p.y - 2, 6, 4); ctx.fillStyle = '#ffd23a'; ctx.fillRect(p.x + p.dir * 7 - 2, p.y - 1, 5, 2); }
  }
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  // floating score text
  ctx.font = '8px ' + FONT; ctx.textAlign = 'center';
  for (const f of G.floats) { const y = f.y - f.t * 30; ctx.globalAlpha = f.t > 0.8 ? (1.1 - f.t) / 0.3 : 1; ctx.fillStyle = '#000'; ctx.fillText(f.txt, Math.round(f.x) + 1, Math.round(y) + 1); ctx.fillStyle = f.col; ctx.fillText(f.txt, Math.round(f.x), Math.round(y)); }
  ctx.globalAlpha = 1;
  ctx.restore();
  // vignette
  ctx.drawImage(VIGNETTE, 0, 0);
  if (G.flash > 0) { ctx.fillStyle = `rgba(255,240,220,${Math.min(0.6, G.flash * 2.5)})`; ctx.fillRect(0, 0, VW, VH); }
  drawHUD();
  drawVoiceBox();
  if (G.state === 'pause') overlayText('PAUSE', 'P oder Enter zum Weiterspielen');
  if (G.state === 'levelDone') drawLevelDone();
  if (G.state === 'victory') drawVictory();
  if (G.state === 'play' && G.stats.time < 3.2) drawLevelBanner();
}
function drawHazard(x, y) {
  const th = G.lv.th;
  if (th.haz === 'acid') {
    ctx.fillStyle = '#1f7a1a'; ctx.fillRect(x, y + 6, T, 10);
    ctx.fillStyle = '#5aff3a'; const w = Math.sin(G.time * 4 + x * 0.3) * 1.5; ctx.fillRect(x, y + 5 + w, T, 3);
    if (Math.random() < 0.01) part({ x: x + rnd(2, 14), y: y + 6, vy: -rnd(20, 50), life: 0.5, size: 2, col: '#8aff6a' });
    ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.18; glow('green', x + 8, y + 8, 0.6); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  } else if (th.haz === 'energy') {
    ctx.fillStyle = '#2a1d4a'; ctx.fillRect(x, y + 12, T, 4);
    for (let i = 0; i < 4; i++) { const h = 6 + Math.sin(G.time * 12 + x + i) * 2; ctx.fillStyle = '#8af0ff'; ctx.fillRect(x + i * 4 + 1, y + 12 - h, 2, h); }
    ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.3; glow('cyan', x + 8, y + 10, 0.5); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  } else {
    ctx.fillStyle = '#2a2c3d'; ctx.fillRect(x, y + 13, T, 3);
    for (let i = 0; i < 4; i++) { ctx.fillStyle = '#c9d1dc'; ctx.beginPath(); ctx.moveTo(x + i * 4, y + 14); ctx.lineTo(x + i * 4 + 2, y + 5); ctx.lineTo(x + i * 4 + 4, y + 14); ctx.fill(); ctx.fillStyle = '#6a7080'; ctx.fillRect(x + i * 4 + 2, y + 7, 1, 7); }
  }
}
function drawExit(ex) {
  const x = ex.x, y = ex.y;
  ctx.fillStyle = '#1a1b26'; ctx.fillRect(x - 2, y - 2, ex.w + 4, ex.h + 2);
  ctx.fillStyle = '#0b2a1a'; ctx.fillRect(x, y, ex.w, ex.h);
  const g = ctx.createLinearGradient(0, y, 0, y + ex.h); g.addColorStop(0, 'rgba(80,255,144,0.1)'); g.addColorStop(1, 'rgba(80,255,144,0.55)');
  ctx.fillStyle = g; ctx.fillRect(x + 2, y + 2, ex.w - 4, ex.h - 2);
  for (let i = 0; i < 5; i++) { const yy = y + ex.h - ((G.time * 30 + i * 11) % ex.h); ctx.fillStyle = 'rgba(180,255,200,0.6)'; ctx.fillRect(x + 4 + (i * 7) % 22, yy, 2, 2); }
  ctx.fillStyle = '#1a1b26'; ctx.fillRect(x + 1, y - 13, 30, 10);
  ctx.font = '8px ' + FONT; ctx.textAlign = 'center'; ctx.fillStyle = Math.floor(G.time * 2) % 2 ? '#50ff90' : '#b8ffd0'; ctx.fillText('EXIT', x + 16, y - 4);
  ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.35; glow('green', x + 16, y + 20, 1.3); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
}
let VIGNETTE;
function buildVignette() { const [c, x] = mk(VW, VH); const g = x.createRadialGradient(VW / 2, VH / 2, VH * 0.35, VW / 2, VH / 2, VW * 0.62); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.55)'); x.fillStyle = g; x.fillRect(0, 0, VW, VH); VIGNETTE = c; }

function txt(s, x, y, col = '#fff', size = 8, align = 'left', shadow = '#000') {
  ctx.font = size + 'px ' + FONT; ctx.textAlign = align;
  if (shadow) { ctx.fillStyle = shadow; ctx.fillText(s, x + 1, y + 1); }
  ctx.fillStyle = col; ctx.fillText(s, x, y);
}
function drawHUD() {
  const P = G.player;
  const g = ctx.createLinearGradient(0, 0, 0, 26); g.addColorStop(0, 'rgba(10,8,20,0.92)'); g.addColorStop(1, 'rgba(10,8,20,0.55)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, VW, 24);
  ctx.fillStyle = '#ff6b35'; ctx.fillRect(0, 24, VW, 1);
  // hearts
  for (let i = 0; i < P.maxhp; i++) ctx.drawImage(i < P.hp ? ICON.heart : ICON.heartE, 8 + i * 9, 9);
  if (P.hp <= 2 && Math.floor(G.time * 4) % 2) txt('!', 8 + P.maxhp * 9 + 2, 16, '#ff3b3b');
  // gun
  txt('WUMMS', 102, 16, '#ff6b35');
  for (let i = 0; i < 4; i++) { ctx.fillStyle = i < P.gun ? '#ffc23a' : '#3a2a20'; ctx.fillRect(146 + i * 7, 9, 5, 8); }
  // keys
  let kx = 190; if (P.keys.r) { ctx.drawImage(ICON.keyR, kx, 8); kx += 16; } if (P.keys.u) ctx.drawImage(ICON.keyU, kx, 8);
  // level
  txt(G.lv.def.name, VW / 2 + 20, 16, '#b8b0d8', 8, 'center');
  // score
  txt(String(G.score).padStart(7, '0'), VW - 8, 16, '#fff3a0', 8, 'right');
  txt('HI ' + String(Math.max(G.hi, G.score)).padStart(7, '0'), VW - 90, 16, '#6a6490', 8, 'right');
  // boss bar
  const b = G.ents.find(e => e.type === 'boss');
  if (b && G.lv.bossOn && !b.gone) {
    const w = 260, x = VW / 2 - w / 2, y = VH - 16;
    ctx.fillStyle = 'rgba(10,8,20,0.8)'; ctx.fillRect(x - 4, y - 12, w + 8, 22);
    txt('PROF. BLECHKOPF', x, y - 2, '#ffb23a', 8);
    ctx.fillStyle = '#3a1010'; ctx.fillRect(x, y + 2, w, 5);
    ctx.fillStyle = '#ff3b3b'; ctx.fillRect(x, y + 2, Math.max(0, w * b.hp / b.maxhp), 5);
    ctx.fillStyle = '#ffb0a0'; ctx.fillRect(x, y + 2, Math.max(0, w * b.hp / b.maxhp), 1);
  }
}
function drawVoiceBox() {
  if (G.time > VOICE.until || !VOICE.text) return;
  const t = G.time - VOICE.shown, out = VOICE.until - G.time;
  const slide = Math.min(1, t * 6, out * 4);
  const x = Math.round(-300 + slide * 308), y = 32;
  const w = 300;
  ctx.fillStyle = 'rgba(10,8,20,0.88)'; ctx.fillRect(x, y, w, 48);
  ctx.fillStyle = '#ff6b35'; ctx.fillRect(x, y, w, 1); ctx.fillRect(x, y + 47, w, 1); ctx.fillRect(x + w - 1, y, 1, 48);
  if (IMG.portrait) ctx.drawImage(IMG.portrait, x + 4, y + 4, 40, 40);
  ctx.strokeStyle = '#ff6b35'; ctx.lineWidth = 1; ctx.strokeRect(x + 4.5, y + 4.5, 39, 39);
  txt('MAX:', x + 52, y + 14, '#ff6b35', 8, 'left', null);
  // wrap text, typewriter
  const shown = VOICE.text.slice(0, Math.floor(t * 40));
  ctx.font = '8px ' + FONT; const words = shown.split(' '); let line = '', ly = y + 27;
  for (const wd of words) { const test = line ? line + ' ' + wd : wd; if (ctx.measureText(test).width > w - 60) { txt(line, x + 52, ly, '#fff', 8, 'left', null); line = wd; ly += 11; } else line = test; }
  txt(line, x + 52, ly, '#fff', 8, 'left', null);
}
function overlayText(a, b) {
  ctx.fillStyle = 'rgba(8,6,20,0.7)'; ctx.fillRect(0, 0, VW, VH);
  txt(a, VW / 2, VH / 2 - 6, '#ff6b35', 24, 'center'); txt(b, VW / 2, VH / 2 + 22, '#ddd', 8, 'center');
}
function drawLevelBanner() {
  const t = G.stats.time; const a = t < 0.3 ? t / 0.3 : t > 2.6 ? (3.2 - t) / 0.6 : 1;
  ctx.globalAlpha = a;
  ctx.fillStyle = 'rgba(8,6,20,0.75)'; ctx.fillRect(0, 120, VW, 64);
  ctx.fillStyle = '#ff6b35'; ctx.fillRect(0, 120, VW, 2); ctx.fillRect(0, 182, VW, 2);
  txt('LEVEL ' + (G.level + 1) + ': ' + G.lv.def.name, VW / 2, 150, '#fff3a0', 16, 'center');
  txt(G.lv.def.sub, VW / 2, 170, '#b8b0d8', 8, 'center');
  ctx.globalAlpha = 1;
}
function drawLevelDone() {
  ctx.fillStyle = 'rgba(8,6,20,0.8)'; ctx.fillRect(0, 0, VW, VH);
  const s = G.stats; const t = G.stateT;
  txt('LEVEL GESCHAFFT!', VW / 2, 90, '#ff6b35', 16, 'center');
  const rows = [['Roboter verschrottet', s.kills + ' / ' + s.total], ['Geheimverstecke', s.secrets + ' / ' + s.secretsTotal], ['Zeit', fmtTime(s.time)], ['Zeitbonus', '+' + s.bonus], ['Punkte', String(G.score)]];
  rows.forEach((r, i) => { if (t > 0.25 + i * 0.2) { txt(r[0], 170, 140 + i * 20, '#b8b0d8'); txt(r[1], 470, 140 + i * 20, '#fff3a0', 8, 'right'); } });
  if (t > 1.2 && Math.floor(G.time * 2) % 2) txt('Enter / Sprung: weiter', VW / 2, 270, '#fff', 8, 'center');
}
function drawVictory() {
  ctx.fillStyle = 'rgba(8,6,20,0.55)'; ctx.fillRect(0, 0, VW, VH);
  txt('KRAWUMM!', VW / 2, 110, '#ff6b35', 32, 'center');
  txt('Professor Blechkopf ist Altmetall.', VW / 2, 150, '#fff3a0', 8, 'center');
  txt('Neo City ist gerettet. Max macht Feierabend.', VW / 2, 166, '#b8b0d8', 8, 'center');
  txt('PUNKTE ' + G.score, VW / 2, 200, '#fff', 16, 'center');
  txt('REKORD ' + G.hi, VW / 2, 222, '#6a6490', 8, 'center');
  if (G.stateT > 3 && Math.floor(G.time * 2) % 2) txt('Enter: zurück zum Titel', VW / 2, 280, '#fff', 8, 'center');
}
const fmtTime = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');

function renderTitle() {
  ctx.fillStyle = '#05040c'; ctx.fillRect(0, 0, VW, VH);
  if (IMG.title) ctx.drawImage(IMG.title, 0, 0, VW, VH);
  if (G.state === 'loading') { txt('LADE …', VW / 2, VH - 40, '#fff', 8, 'center'); return; }
  // cover baked "PRESS START" with our own blinking prompt
  const g = ctx.createLinearGradient(0, VH - 60, 0, VH); g.addColorStop(0, 'rgba(5,4,12,0)'); g.addColorStop(0.4, 'rgba(5,4,12,0.9)'); g.addColorStop(1, 'rgba(5,4,12,1)');
  ctx.fillStyle = g; ctx.fillRect(0, VH - 60, VW, 60);
  if (Math.floor(G.time * 2.2) % 2) txt('ENTER ODER TIPPEN ZUM STARTEN', VW / 2, VH - 22, '#fff3a0', 8, 'center');
  txt('REKORD ' + G.hi, VW - 8, VH - 8, '#6a6490', 8, 'right', null);
  txt('© 1999 NEO CITY SOFTWORKS', 8, VH - 8, '#6a6490', 8, 'left', null);
  // sparkle on logo
  ctx.globalCompositeOperation = 'lighter'; const sx = 90 + ((G.time * 180) % 480); ctx.globalAlpha = 0.5; glow('white', sx, 55, 0.5); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
}
function renderIntro() {
  ctx.fillStyle = '#05040c'; ctx.fillRect(0, 0, VW, VH);
  if (IMG.bg1) { ctx.globalAlpha = 0.35; ctx.drawImage(IMG.bg1, -G.stateT * 8, 0, IMG.bg1.width * VH / IMG.bg1.height, VH); ctx.globalAlpha = 1; }
  const lines = ['NEO CITY, 1999.', '', 'Professor Blechkopf hat die Stadt mit', 'seiner Roboterarmee übernommen.', '', 'Polizei? Im Feierabend.', 'Militär? Steckt im Stau.', '', 'Nur einer hat noch Munition', 'und schlechte Laune:', '', 'MAX KRAWUMM.'];
  const n = Math.floor(G.stateT * 2.2);
  lines.forEach((l, i) => { if (i <= n) txt(l, VW / 2, 70 + i * 17, i === 11 ? '#ff6b35' : i === 0 ? '#fff3a0' : '#ddd', i === 11 ? 16 : 8, 'center'); });
  if (IMG.portrait && n > 11) ctx.drawImage(IMG.portrait, VW / 2 - 32, 280, 64, 64);
  if (Math.floor(G.time * 2) % 2) txt('Enter / Sprung', VW - 10, VH - 10, '#6a6490', 8, 'right', null);
}

// ---------------------------------------------------------------- main loop
let acc = 0, last = 0, fpsT = 0, frames = 0; G.fps = 60;
function frame(ts) {
  requestAnimationFrame(frame);
  if (!last) last = ts; let d = (ts - last) / 1000; last = ts; if (d > 0.1) d = 0.1;
  acc += d; let n = 0;
  while (acc >= DT && n < 5) { update(DT); acc -= DT; n++; }
  if (n === 5) acc = 0;
  render();
  frames++; fpsT += d; if (fpsT > 1) { G.fps = frames / fpsT; frames = 0; fpsT = 0; }
}

async function boot() {
  G.state = 'loading'; requestAnimationFrame(frame);
  await Promise.all([
    loadImg('title', 'title.jpg'), loadImg('sprites', 'sprites.png'), loadImg('portrait', 'portrait.png'),
    loadImg('bg1', 'bg1.jpg'), loadImg('bg2', 'bg2.jpg'), loadImg('bg3', 'bg3.jpg'),
    fetch('sprites.json').then(r => r.json()).then(j => { SPR = j; }),
    document.fonts && document.fonts.load('8px "Press Start 2P"').catch(() => {})
  ]);
  buildSprites(); buildIcons(); buildGlows(); buildVignette();
  G.state = 'title';
}
boot();
})();
