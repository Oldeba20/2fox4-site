// Prozeduraler Sound: Motor, Effekte und fröhliche Rennmusik (WebAudio, keine Dateien nötig)
export class Audio {
  constructor() { this.ctx = null; this.enabled = true; this.musicOn = true; this.voices = {}; }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain();
    this.master.gain.value = this.enabled ? 0.85 : 0;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -12; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.18;
    this.master.connect(comp).connect(c.destination);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
    this.mus = c.createGain(); this.mus.gain.value = 0.0; this.mus.connect(this.master);
    this.vo = c.createGain(); this.vo.gain.value = 1.1; this.vo.connect(this.master);
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.engine();
    this.loadVoices();
  }

  resume() { if (!this.ctx) this.init(); if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  setEnabled(on) { this.enabled = on; if (this.master) this.master.gain.setTargetAtTime(on ? 0.85 : 0, this.ctx.currentTime, 0.05); }
  get t() { return this.ctx.currentTime; }

  // ---------- Sprachausgabe (optional, Dateien in voice/) ----------
  loadVoices() {
    const names = ['3', '2', '1', 'los', 'letzte', 'sieg', 'ziel', 'turbo', 'hit', 'treffer', 'start'];
    for (const n of names) {
      fetch(`voice/${n}.mp3`).then((r) => (r.ok ? r.arrayBuffer() : null)).then((b) => b && this.ctx.decodeAudioData(b)).then((buf) => { if (buf) this.voices[n] = buf; }).catch(() => {});
    }
  }
  voice(n) {
    if (!this.ctx || !this.voices[n]) return false;
    if (this.voSrc) try { this.voSrc.stop(); } catch (e) { /* */ }
    const s = this.ctx.createBufferSource();
    s.buffer = this.voices[n];
    s.connect(this.vo);
    s.start();
    this.voSrc = s;
    // Musik kurz absenken
    if (this.mus) { const t = this.t; this.mus.gain.cancelScheduledValues(t); this.mus.gain.setTargetAtTime(this.musVol * 0.45, t, 0.05); this.mus.gain.setTargetAtTime(this.musVol, t + s.buffer.duration, 0.3); }
    return true;
  }

  // ---------- Motor ----------
  engine() {
    const c = this.ctx;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const lfo = c.createOscillator(); lfo.frequency.value = 23;
    const lg = c.createGain(); lg.gain.value = 6;
    lfo.connect(lg); lg.connect(o1.frequency); lg.connect(o2.frequency);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; f.Q.value = 3;
    const g = c.createGain(); g.gain.value = 0;
    const g2 = c.createGain(); g2.gain.value = 0.5;
    o1.connect(f); o2.connect(g2).connect(f); f.connect(g).connect(this.sfx);
    o1.start(); o2.start(); lfo.start();
    this.eng = { o1, o2, f, g, lfo };
    // Rutschgeräusch
    const n = c.createBufferSource(); n.buffer = this.noise; n.loop = true;
    const nf = c.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2400; nf.Q.value = 2.5;
    const ng = c.createGain(); ng.gain.value = 0;
    n.connect(nf).connect(ng).connect(this.sfx); n.start();
    this.skid = { g: ng, f: nf };
    // Gegner-Brummen
    const a = c.createOscillator(); a.type = 'sawtooth'; a.frequency.value = 90;
    const af = c.createBiquadFilter(); af.type = 'lowpass'; af.frequency.value = 400;
    const ag = c.createGain(); ag.gain.value = 0;
    a.connect(af).connect(ag).connect(this.sfx); a.start();
    this.other = { o: a, g: ag };
    // Fahrtwind
    const w = c.createBufferSource(); w.buffer = this.noise; w.loop = true; w.playbackRate.value = 0.5;
    const wf = c.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 500;
    const wg = c.createGain(); wg.gain.value = 0;
    w.connect(wf).connect(wg).connect(this.sfx); w.start();
    this.wind = { g: wg, f: wf };
  }

  updateEngine(k, running, nearest) {
    if (!this.ctx) return;
    const t = this.t, e = this.eng;
    const s = Math.abs(k.spd);
    // Gangwechsel-Gefühl
    const gear = Math.min(3, Math.floor(s / 10));
    const rpm = (s - gear * 10) / 10;
    const base = 52 + gear * 9 + rpm * 48 + (k.boostT > 0 ? 25 : 0) + (k.input.gas > 0 && k.air ? 30 : 0);
    e.o1.frequency.setTargetAtTime(base, t, 0.05);
    e.o2.frequency.setTargetAtTime(base * 0.5, t, 0.05);
    e.f.frequency.setTargetAtTime(500 + s * 40 + (k.input.gas > 0 ? 500 : 0), t, 0.08);
    e.g.gain.setTargetAtTime(running ? 0.09 + Math.min(0.08, s * 0.003) : 0, t, 0.1);
    this.skid.g.gain.setTargetAtTime(running && k.drift && !k.air ? 0.07 + (k.driftLv + 1) * 0.02 : 0, t, 0.04);
    this.skid.f.frequency.setTargetAtTime(2000 + (k.driftLv + 1) * 500, t, 0.05);
    const nd = nearest ?? 999;
    this.other.g.gain.setTargetAtTime(running ? Math.max(0, 0.06 * (1 - nd / 30)) : 0, t, 0.1);
    this.other.o.frequency.setTargetAtTime(80 + Math.random() * 15, t, 0.1);
    this.wind.g.gain.setTargetAtTime(running ? Math.min(0.12, s * 0.003) : 0, t, 0.2);
    this.wind.f.frequency.setTargetAtTime(300 + s * 25, t, 0.2);
  }

  // ---------- Bausteine ----------
  tone(freq, dur, { type = 'square', vol = 0.2, slide = 0, at = 0, out = null, attack = 0.005 } = {}) {
    if (!this.ctx) return;
    const c = this.ctx, t = this.t + at;
    const o = c.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g).connect(out || this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
  }
  burst(dur, { freq = 1200, q = 1, vol = 0.3, type = 'bandpass', at = 0, slide = 0, out = null } = {}) {
    if (!this.ctx) return;
    const c = this.ctx, t = this.t + at;
    const s = c.createBufferSource(); s.buffer = this.noise;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (slide) f.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f).connect(g).connect(out || this.sfx);
    s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }

  beep(hi) { this.tone(hi ? 880 : 440, hi ? 0.7 : 0.35, { type: 'square', vol: 0.22 }); if (hi) this.tone(1320, 0.7, { type: 'triangle', vol: 0.12 }); }
  pickup() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.12, { type: 'triangle', vol: 0.18, at: i * 0.05 })); }
  tick() { this.tone(1500 + Math.random() * 400, 0.03, { type: 'square', vol: 0.05 }); }
  itemReady() { this.tone(1046, 0.18, { type: 'triangle', vol: 0.2 }); this.tone(1568, 0.25, { type: 'triangle', vol: 0.15, at: 0.06 }); }
  boost(p = 1) { this.burst(0.7, { freq: 400, slide: 6, q: 0.8, vol: 0.35 * p, type: 'lowpass' }); this.tone(180, 0.6, { type: 'sawtooth', vol: 0.12, slide: 3 }); }
  driftLevel(lv) { this.tone([900, 1200, 1500][lv], 0.12, { type: 'triangle', vol: 0.12 }); }
  hop() { this.tone(300, 0.1, { type: 'sine', vol: 0.12, slide: 1.8 }); }
  trick() { this.tone(600, 0.15, { type: 'triangle', vol: 0.18, slide: 2 }); this.burst(0.3, { freq: 3000, vol: 0.12 }); }
  land(v) { this.burst(0.18, { freq: 200, type: 'lowpass', vol: 0.25 * v + 0.05 }); }
  wall(v) { this.burst(0.25, { freq: 300, type: 'lowpass', vol: 0.4 * v + 0.1 }); this.tone(90, 0.2, { type: 'square', vol: 0.12 * v, slide: 0.5 }); }
  hit(v = 1) { this.tone(700, 0.5, { type: 'square', vol: 0.18 * v, slide: 0.25 }); this.burst(0.35, { freq: 900, vol: 0.3 * v }); [0, 0.1, 0.2].forEach((a) => this.tone(1800, 0.08, { type: 'triangle', vol: 0.08 * v, at: a + 0.2 })); }
  pop() { this.burst(0.5, { freq: 600, type: 'lowpass', vol: 0.5, slide: 0.3 }); this.tone(120, 0.4, { type: 'sine', vol: 0.3, slide: 0.4 }); }
  shield() { [400, 600, 800].forEach((f, i) => this.tone(f, 0.3, { type: 'sine', vol: 0.12, at: i * 0.06, slide: 1.5 })); }
  shieldPop() { this.tone(1200, 0.3, { type: 'sine', vol: 0.2, slide: 0.3 }); this.burst(0.2, { freq: 4000, vol: 0.15 }); }
  drop() { this.tone(250, 0.25, { type: 'sine', vol: 0.2, slide: 0.5 }); this.burst(0.2, { freq: 500, type: 'lowpass', vol: 0.2 }); }
  throw() { this.burst(0.25, { freq: 1500, slide: 0.4, vol: 0.2 }); }
  rocket() { this.burst(0.9, { freq: 300, slide: 4, vol: 0.35, type: 'lowpass' }); this.tone(220, 0.8, { type: 'sawtooth', vol: 0.1, slide: 2.5 }); }
  lap() { [784, 988, 1175].forEach((f, i) => this.tone(f, 0.18, { type: 'square', vol: 0.12, at: i * 0.1 })); }
  click() { this.tone(900, 0.05, { type: 'triangle', vol: 0.12 }); }
  fanfare(win) {
    const notes = win ? [523, 659, 784, 1047, 784, 1047, 1319] : [523, 494, 523, 659, 523];
    const d = win ? [0, 0.12, 0.24, 0.36, 0.6, 0.72, 0.84] : [0, 0.15, 0.3, 0.45, 0.7];
    notes.forEach((f, i) => { this.tone(f, i === notes.length - 1 ? 0.9 : 0.2, { type: 'square', vol: 0.14, at: d[i] }); this.tone(f / 2, 0.2, { type: 'triangle', vol: 0.12, at: d[i] }); });
  }

  // ---------- Musik ----------
  // Fröhlicher Rennsong: Bass, Akkorde, Melodie, Schlagzeug – sequenziert mit Vorausplanung
  startMusic(kind = 'race') {
    if (!this.ctx) return;
    this.stopMusic();
    this.musKind = kind;
    this.musVol = kind === 'race' ? 0.42 : 0.32;
    this.mus.gain.cancelScheduledValues(this.t);
    this.mus.gain.setTargetAtTime(this.musicOn ? this.musVol : 0, this.t, 0.3);
    this.bpm = kind === 'race' ? 150 : 112;
    this.step = 0;
    this.nextT = this.t + 0.1;
    this.musTimer = setInterval(() => this.schedule(), 40);
  }
  setTempo(bpm) { this.bpm = bpm; }
  stopMusic() { if (this.musTimer) clearInterval(this.musTimer); this.musTimer = null; }
  fadeMusic(to, sec = 0.5) { if (this.mus) this.mus.gain.setTargetAtTime(to, this.t, sec / 3); }

  schedule() {
    const spb = 60 / this.bpm / 4; // 16tel
    while (this.nextT < this.t + 0.15) {
      this.playStep(this.step, this.nextT, spb);
      this.nextT += spb;
      this.step++;
    }
  }

  playStep(s, t, spb) {
    const at = t - this.t;
    const out = this.mus;
    const race = this.musKind === 'race';
    const bar = Math.floor(s / 16) % 8, st = s % 16;
    // Akkordfolge (C-Dur): C G Am F | C G F G
    const prog = race ? [[48, 52, 55], [43, 47, 50], [45, 48, 52], [41, 45, 48], [48, 52, 55], [43, 47, 50], [41, 45, 48], [43, 47, 50]]
      : [[45, 48, 52], [41, 45, 48], [48, 52, 55], [43, 47, 50], [45, 48, 52], [41, 45, 48], [48, 52, 55], [43, 47, 50]];
    const ch = prog[bar];
    const mf = (n) => 440 * Math.pow(2, (n - 69) / 12);
    // Schlagzeug
    if (st % 4 === 0) this.kick(at, out);
    if (race && (st === 4 || st === 12)) this.snare(at, out);
    if (!race && st === 8) this.snare(at, out);
    if (st % 2 === 0) this.hat(at, out, st % 4 === 2 ? 0.06 : 0.03);
    // Bass (Achtel, Oktavsprung)
    if (st % 2 === 0) {
      const n = ch[0] - 12 + (st % 4 === 2 && race ? 12 : 0);
      this.tone(mf(n), spb * 1.8, { type: 'triangle', vol: 0.32, at, out });
    }
    // Akkord-Stabs auf Offbeats
    if (race ? (st % 4 === 2) : (st === 0 || st === 8)) for (const n of ch) this.tone(mf(n + 12), race ? spb * 1.2 : spb * 6, { type: 'square', vol: 0.035, at, out, attack: 0.01 });
    // Melodie (Pentatonik, vorberechnetes Muster)
    if (!this.mel) this.mel = this.makeMelody();
    const m = this.mel[(Math.floor(s / 16) % 8) * 16 + st];
    if (m && (race || st % 2 === 0)) this.tone(mf(m), spb * (race ? 1.6 : 3), { type: race ? 'square' : 'triangle', vol: race ? 0.06 : 0.09, at, out, attack: 0.008 });
  }

  makeMelody() {
    // deterministisch erzeugte, eingängige Melodie in C-Dur-Pentatonik
    const scale = [72, 74, 76, 79, 81, 84, 86, 88];
    const mel = new Array(128).fill(0);
    let seed = 42;
    const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const motif = [];
    let p = 2;
    for (let i = 0; i < 16; i++) {
      if (i % 2 === 0 || r() < 0.3) { p = Math.max(0, Math.min(scale.length - 1, p + Math.round((r() - 0.5) * 3))); motif.push(scale[p]); } else motif.push(0);
    }
    for (let b = 0; b < 8; b++) for (let i = 0; i < 16; i++) {
      let n = motif[i];
      if (n && (b === 1 || b === 5)) n += 2;
      if (n && (b === 3 || b === 7) && i >= 8) n = i % 4 === 0 ? scale[(b === 7 ? 5 : 3)] : 0;
      if (n && b === 6) n -= 3;
      mel[b * 16 + i] = n;
    }
    return mel;
  }
  kick(at, out) { this.tone(150, 0.25, { type: 'sine', vol: 0.55, slide: 0.3, at, out }); }
  snare(at, out) { this.burst(0.16, { freq: 1800, q: 0.7, vol: 0.22, at, out }); this.tone(220, 0.08, { type: 'triangle', vol: 0.12, at, out }); }
  hat(at, out, v) { this.burst(0.04, { freq: 8000, type: 'highpass', vol: v, at, out }); }
}
