// Prozedurale Sound-Engine (WebAudio) – keine Audiodateien nötig.
// Positionale Sounds über PannerNode (HRTF), Hall über Faltung mit generierter Impulsantwort.

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.ready = false;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? 0.9 : 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 10;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);

    // Hall
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.6, 2.4);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.55;
    this.duck = ctx.createGain();
    this.duck.connect(this.master);
    this.reverbSend.connect(this.reverb).connect(this.duck);

    this.dry = ctx.createGain();
    this.dry.connect(this.duck);

    this.noiseBuf = this._noise(2);
    this.brownBuf = this._brown(4);
    this.ready = true;
  }

  resume() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.9 : 0, this.ctx.currentTime, 0.05);
  }

  get t() { return this.ctx.currentTime; }

  _noise(sec) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  _brown(sec) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    return b;
  }
  _impulse(sec, decay) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const x = i / len;
        // frühe Reflexionen + diffuser Nachhall
        const er = i < ctx.sampleRate * 0.08 && Math.random() < 0.004 ? (Math.random() * 2 - 1) * 0.8 : 0;
        d[i] = ((Math.random() * 2 - 1) * Math.pow(1 - x, decay) + er) * (x < 0.002 ? x / 0.002 : 1);
      }
    }
    return b;
  }

  // Ausgang: entweder positional (pos: {x,y,z}) oder direkt
  _out(pos, reverbAmt = 0.3, gain = 1) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.value = gain;
    let head = g;
    if (pos) {
      const p = ctx.createPanner();
      p.panningModel = 'HRTF';
      p.distanceModel = 'inverse';
      p.refDistance = 2.5;
      p.maxDistance = 60;
      p.rolloffFactor = 1.3;
      p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z;
      g.connect(p);
      head = p;
    }
    head.connect(this.dry);
    if (reverbAmt > 0) {
      const s = ctx.createGain();
      s.gain.value = reverbAmt;
      head.connect(s).connect(this.reverbSend);
    }
    return g;
  }

  setListener(pos, fwd, up) {
    if (!this.ready) return;
    const l = this.ctx.listener, t = this.t;
    if (l.positionX) {
      l.positionX.setValueAtTime(pos.x, t); l.positionY.setValueAtTime(pos.y, t); l.positionZ.setValueAtTime(pos.z, t);
      l.forwardX.setValueAtTime(fwd.x, t); l.forwardY.setValueAtTime(fwd.y, t); l.forwardZ.setValueAtTime(fwd.z, t);
      l.upX.setValueAtTime(up.x, t); l.upY.setValueAtTime(up.y, t); l.upZ.setValueAtTime(up.z, t);
    } else {
      l.setPosition(pos.x, pos.y, pos.z);
      l.setOrientation(fwd.x, fwd.y, fwd.z, up.x, up.y, up.z);
    }
  }

  _noiseSrc(buf) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf || this.noiseBuf;
    s.loopStart = 0;
    s.loop = true;
    return s;
  }

  _env(param, t0, a, peak, d, end = 0.0001) {
    param.cancelScheduledValues(t0);
    param.setValueAtTime(0.0001, t0);
    param.exponentialRampToValueAtTime(peak, t0 + a);
    param.exponentialRampToValueAtTime(end, t0 + a + d);
  }

  // ---------- Waffen ----------
  pistol() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.5, 1);
    // Knall: Rauschen, hochpass
    const n = this._noiseSrc();
    n.loopStart = Math.random();
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
    const ng = ctx.createGain();
    this._env(ng.gain, t, 0.001, 1.1, 0.09);
    n.connect(hp).connect(ng).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.15);
    // Körper: Sinus-Sweep
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(190, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.16);
    const og = ctx.createGain();
    this._env(og.gain, t, 0.002, 1.3, 0.18);
    o.connect(og).connect(out);
    o.start(t); o.stop(t + 0.22);
    // Mittelton-Crack
    const n2 = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.8;
    const n2g = ctx.createGain();
    this._env(n2g.gain, t, 0.0005, 0.9, 0.035);
    n2.connect(bp).connect(n2g).connect(out);
    n2.start(t, Math.random()); n2.stop(t + 0.06);
    // Mechanik
    this._click(t + 0.045, 3200, 0.18);
  }

  _click(t, freq = 2500, vol = 0.3, pos = null) {
    const ctx = this.ctx;
    const out = this._out(pos, 0.08, 1);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 6;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.0005, vol, 0.03);
    n.connect(bp).connect(g).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.05);
  }

  dryFire() { if (this.ready) this._click(this.t, 1800, 0.35); }

  reload(dur = 1.2) {
    if (!this.ready) return;
    const t = this.t;
    this._click(t + 0.12, 1500, 0.35);      // Magazin raus
    this._click(t + 0.16, 900, 0.2);
    this._click(t + dur * 0.62, 1300, 0.45); // Magazin rein
    this._click(t + dur * 0.66, 2600, 0.25);
    this._click(t + dur * 0.86, 3400, 0.4);  // Schlitten
    this._click(t + dur * 0.89, 2200, 0.3);
  }

  shell(pos) {
    if (!this.ready) return;
    const t = this.t + 0.35 + Math.random() * 0.1;
    for (let i = 0; i < 3; i++) this._ting(t + i * (0.07 - i * 0.015), 5200 + Math.random() * 900, 0.08 / (i + 1), pos);
  }
  _ting(t, f, vol, pos) {
    const ctx = this.ctx;
    const out = this._out(pos, 0.15, 1);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = f * 1.51;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.001, vol, 0.12);
    o.connect(g); o2.connect(g); g.connect(out);
    o.start(t); o2.start(t); o.stop(t + 0.15); o2.stop(t + 0.15);
  }

  impactWall(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.25, 1);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800 + Math.random() * 1500; bp.Q.value = 1.5;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.001, 0.5, 0.06);
    n.connect(bp).connect(g).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.09);
    if (Math.random() < 0.35) this._ricochet(pos);
  }
  _ricochet(pos) {
    const ctx = this.ctx, t = this.t + 0.01;
    const out = this._out(pos, 0.3, 1);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(3400 + Math.random() * 800, t);
    o.frequency.exponentialRampToValueAtTime(1300, t + 0.28);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.005, 0.07, 0.3);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.34);
  }

  // ---------- Treffer / Zombies ----------
  fleshHit(pos, heavy = false) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.15, 1);
    const n = this._noiseSrc();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(2400, t); lp.frequency.exponentialRampToValueAtTime(300, t + 0.12);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.002, heavy ? 1.1 : 0.75, heavy ? 0.22 : 0.13);
    n.connect(lp).connect(g).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.3);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    const og = ctx.createGain();
    this._env(og.gain, t, 0.002, heavy ? 0.9 : 0.5, 0.14);
    o.connect(og).connect(out);
    o.start(t); o.stop(t + 0.18);
    // nasses Spritzen
    const n2 = this._noiseSrc();
    const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 3500; hp.Q.value = 0.7;
    const g2 = ctx.createGain();
    this._env(g2.gain, t + 0.02, 0.01, heavy ? 0.35 : 0.18, heavy ? 0.35 : 0.18);
    n2.connect(hp).connect(g2).connect(out);
    n2.start(t, Math.random()); n2.stop(t + 0.45);
  }

  // ---------- Glitch-Modus (jugendfrei) ----------
  // Digitales „Zappen“ statt Fleischtreffer
  glitchHit(pos, heavy = false) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.15, 1);
    const o = ctx.createOscillator(); o.type = 'square';
    const steps = heavy ? 6 : 4;
    for (let i = 0; i < steps; i++) o.frequency.setValueAtTime(300 + Math.random() * 1400, t + i * 0.018);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.002, heavy ? 0.32 : 0.22, steps * 0.02);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
    o.connect(lp).connect(g).connect(out);
    o.start(t); o.stop(t + steps * 0.02 + 0.05);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 1.2;
    const ng = ctx.createGain();
    this._env(ng.gain, t, 0.002, heavy ? 0.9 : 0.6, 0.08);
    n.connect(bp).connect(ng).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.12);
  }

  // Gegner löst sich in Pixel auf: fallendes Arpeggio + Rauschen
  derez(pos, big = false) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.35, 1);
    const o = ctx.createOscillator(); o.type = 'square';
    const base = big ? 520 : 880;
    const notes = [1, 0.75, 0.6, 0.5, 0.375, 0.3, 0.25];
    notes.forEach((m, i) => o.frequency.setValueAtTime(base * m * (1 + (Math.random() - 0.5) * 0.04), t + i * 0.035));
    const g = ctx.createGain();
    this._env(g.gain, t, 0.003, big ? 0.3 : 0.22, 0.28);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(5000, t); lp.frequency.exponentialRampToValueAtTime(600, t + 0.3);
    o.connect(lp).connect(g).connect(out);
    o.start(t); o.stop(t + 0.32);
    const n = this._noiseSrc();
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.setValueAtTime(6000, t); hp.frequency.exponentialRampToValueAtTime(800, t + 0.35);
    const ng = ctx.createGain();
    this._env(ng.gain, t, 0.01, big ? 0.5 : 0.35, 0.35);
    n.connect(hp).connect(ng).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.4);
  }

  // Bombe zündet: schnell steigendes Piepen
  fuse(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.2, 1);
    for (let i = 0; i < 6; i++) {
      const at = t + i * 0.11 - i * i * 0.004;
      const o = ctx.createOscillator(); o.type = 'square';
      o.frequency.value = 900 + i * 180;
      const g = ctx.createGain();
      this._env(g.gain, at, 0.002, 0.25, 0.05);
      o.connect(g).connect(out);
      o.start(at); o.stop(at + 0.07);
    }
  }

  // Upgrade gewählt
  upgrade() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.3, 1);
    [523, 659, 784, 1047].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      this._env(g.gain, t + i * 0.06, 0.005, 0.28, 0.35);
      o.connect(g).connect(out);
      o.start(t + i * 0.06); o.stop(t + i * 0.06 + 0.42);
    });
  }

  headshot(pos) {
    if (!this.ready) return;
    this.fleshHit(pos, true);
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.2, 1);
    // Knacken
    for (let i = 0; i < 4; i++) this._click(t + i * 0.012 + Math.random() * 0.01, 600 + Math.random() * 900, 0.5, pos);
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.3);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.002, 0.8, 0.3);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.35);
  }

  _voice(pos, { f0 = 90, dur = 1.2, formants = [520, 1400, 2500], vol = 0.5, bend = -0.3, rough = 0.5, rev = 0.3, at = 0 } = {}) {
    const ctx = this.ctx, t = this.t + at;
    const out = this._out(pos, rev, 1);
    const src = ctx.createOscillator(); src.type = 'sawtooth';
    src.frequency.setValueAtTime(f0 * (1 + Math.random() * 0.1), t);
    src.frequency.linearRampToValueAtTime(f0 * (1 + bend), t + dur);
    // Vibrato / Rauheit
    const lfo = ctx.createOscillator(); lfo.frequency.value = 5 + Math.random() * 18;
    const lg = ctx.createGain(); lg.gain.value = f0 * 0.12 * rough;
    lfo.connect(lg).connect(src.frequency);
    const am = ctx.createGain(); am.gain.value = 1;
    const lfo2 = ctx.createOscillator(); lfo2.frequency.value = 22 + Math.random() * 20;
    const lg2 = ctx.createGain(); lg2.gain.value = 0.35 * rough;
    lfo2.connect(lg2).connect(am.gain);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + dur * 0.2);
    g.gain.setValueAtTime(vol, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const mix = ctx.createGain(); mix.gain.value = 1;
    formants.forEach((f, i) => {
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
      bp.frequency.setValueAtTime(f, t);
      bp.frequency.linearRampToValueAtTime(f * (0.8 + Math.random() * 0.4), t + dur);
      bp.Q.value = 5 + i * 2;
      const fg = ctx.createGain(); fg.gain.value = [1, 0.6, 0.25][i] || 0.2;
      src.connect(bp).connect(fg).connect(mix);
    });
    // Atem
    const n = this._noiseSrc();
    const nb = ctx.createBiquadFilter(); nb.type = 'bandpass'; nb.frequency.value = 1100; nb.Q.value = 1;
    const ng = ctx.createGain(); ng.gain.value = 0.25 * rough;
    n.connect(nb).connect(ng).connect(mix);
    mix.connect(am).connect(g).connect(out);
    src.start(t); lfo.start(t); lfo2.start(t); n.start(t, Math.random());
    const e = t + dur + 0.05;
    src.stop(e); lfo.stop(e); lfo2.stop(e); n.stop(e);
  }

  groan(pos) {
    if (!this.ready) return;
    this._voice(pos, {
      f0: 70 + Math.random() * 45, dur: 0.9 + Math.random() * 1.1,
      formants: [400 + Math.random() * 250, 1000 + Math.random() * 500, 2300],
      vol: 0.55, bend: -0.25 + Math.random() * 0.2, rough: 0.6 + Math.random() * 0.4,
    });
  }
  roar(pos) {
    if (!this.ready) return;
    this._voice(pos, { f0: 120, dur: 1.4, formants: [700, 1500, 2700], vol: 0.8, bend: -0.45, rough: 1, rev: 0.45 });
    this._voice(pos, { f0: 82, dur: 1.5, formants: [500, 1200, 2400], vol: 0.5, bend: -0.4, rough: 1, rev: 0.45 });
  }
  attackGrunt(pos) {
    if (!this.ready) return;
    this._voice(pos, { f0: 110 + Math.random() * 30, dur: 0.45, formants: [650, 1300, 2500], vol: 0.7, bend: -0.35, rough: 0.9 });
  }
  death(pos) {
    if (!this.ready) return;
    this._voice(pos, { f0: 95, dur: 1.3, formants: [480, 1100, 2400], vol: 0.65, bend: -0.6, rough: 0.8, rev: 0.4 });
  }
  thud(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.25, 1);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(85, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.25);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.003, 0.9, 0.3);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.35);
    const n = this._noiseSrc();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    const ng = ctx.createGain();
    this._env(ng.gain, t, 0.002, 0.6, 0.15);
    n.connect(lp).connect(ng).connect(out); n.start(t, Math.random()); n.stop(t + 0.2);
  }

  // ---------- Spieler ----------
  hurt() {
    if (!this.ready) return;
    this._voice(null, { f0: 135 + Math.random() * 20, dur: 0.32, formants: [700, 1200, 2600], vol: 0.55, bend: -0.25, rough: 0.35, rev: 0.1 });
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.05, 1);
    const n = this._noiseSrc();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.002, 0.8, 0.12);
    n.connect(lp).connect(g).connect(out); n.start(t, Math.random()); n.stop(t + 0.16);
  }
  step(vol = 0.12) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.12, 1);
    const n = this._noiseSrc(this.brownBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380 + Math.random() * 200;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.004, vol * 3, 0.09);
    n.connect(lp).connect(g).connect(out); n.start(t, Math.random() * 3); n.stop(t + 0.12);
    this._click(t + 0.005, 4200 + Math.random() * 1500, vol * 0.25);
  }
  pickup() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.2, 1);
    [660, 990, 1320].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain();
      this._env(g.gain, t + i * 0.06, 0.005, 0.25, 0.18);
      o.connect(g).connect(out); o.start(t + i * 0.06); o.stop(t + i * 0.06 + 0.25);
    });
  }
  hitmarker() {
    if (!this.ready) return;
    this._click(this.t, 5000, 0.12);
  }
  waveHorn() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.7, 1);
    [55, 55.6, 82.5].forEach((f) => {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
      lp.frequency.setValueAtTime(150, t); lp.frequency.linearRampToValueAtTime(900, t + 0.8); lp.frequency.linearRampToValueAtTime(200, t + 2.2);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32, t + 0.3);
      g.gain.setValueAtTime(0.32, t + 1.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      o.connect(lp).connect(g).connect(out); o.start(t); o.stop(t + 2.5);
    });
    this.thud(null);
  }
  waveClear() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.5, 1);
    [196, 247, 294, 392].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
      const g = ctx.createGain();
      this._env(g.gain, t + i * 0.09, 0.01, 0.09, 0.5);
      o.connect(lp).connect(g).connect(out); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.6);
    });
  }

  // ---------- Ambiente ----------
  startAmbience() {
    if (!this.ready || this.amb) return;
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = 0.0001;
    g.gain.setTargetAtTime(0.22, this.t, 1.5);
    const n = this._noiseSrc(this.brownBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 160;
    n.connect(lp).connect(g);
    const hum = ctx.createOscillator(); hum.type = 'sine'; hum.frequency.value = 50;
    const hg = ctx.createGain(); hg.gain.value = 0.18;
    hum.connect(hg).connect(g);
    const hum2 = ctx.createOscillator(); hum2.type = 'sine'; hum2.frequency.value = 100.4;
    const hg2 = ctx.createGain(); hg2.gain.value = 0.06;
    hum2.connect(hg2).connect(g);
    const out = this._out(null, 0.4, 1);
    g.connect(out);
    n.start(); hum.start(); hum2.start();
    this.amb = { g, n, hum, hum2 };
    this._ambTimer = setInterval(() => this._distant(), 5200);
  }
  stopAmbience() {
    if (!this.amb) return;
    const { g, n, hum, hum2 } = this.amb;
    g.gain.setTargetAtTime(0.0001, this.t, 0.3);
    const e = this.t + 1.5;
    n.stop(e); hum.stop(e); hum2.stop(e);
    clearInterval(this._ambTimer);
    this.amb = null;
  }
  _distant() {
    if (!this.ready || Math.random() < 0.4) return;
    const ctx = this.ctx, t = this.t;
    const pos = { x: (Math.random() - 0.5) * 80, y: 3, z: (Math.random() - 0.5) * 80 };
    const out = this._out(pos, 0.9, 0.5);
    // fernes Metallscheppern
    const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 120 + Math.random() * 200;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = o.frequency.value * 2.71;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 3;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.002, 0.18, 0.9);
    o.connect(bp); o2.connect(bp); bp.connect(g).connect(out);
    o.start(t); o2.start(t); o.stop(t + 1); o2.stop(t + 1);
  }

  // ---------- Etappe 2: weitere Waffen ----------
  shotgun() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.65, 1);
    const n = this._noiseSrc();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(6000, t); lp.frequency.exponentialRampToValueAtTime(400, t + 0.3);
    const ng = ctx.createGain();
    this._env(ng.gain, t, 0.001, 1.5, 0.32);
    n.connect(lp).connect(ng).connect(out);
    n.start(t, Math.random()); n.stop(t + 0.4);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(32, t + 0.3);
    const og = ctx.createGain();
    this._env(og.gain, t, 0.002, 1.8, 0.32);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.36);
    const n2 = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.6;
    const g2 = ctx.createGain();
    this._env(g2.gain, t, 0.0005, 1.1, 0.06);
    n2.connect(bp).connect(g2).connect(out); n2.start(t, Math.random()); n2.stop(t + 0.08);
  }
  pump(back = true) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.15, 1);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.setValueAtTime(back ? 2200 : 1500, t); bp.frequency.linearRampToValueAtTime(back ? 1300 : 2400, t + 0.09); bp.Q.value = 2;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.01, 0.35, 0.08);
    n.connect(bp).connect(g).connect(out); n.start(t, Math.random()); n.stop(t + 0.12);
    this._click(t + 0.09, back ? 1200 : 900, 0.6);
    this._click(t + 0.1, 3000, 0.3);
  }
  shellIn() {
    if (!this.ready) return;
    const t = this.t;
    this._click(t, 1700, 0.35);
    this._click(t + 0.05, 900, 0.3);
  }
  rocketFire() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.6, 1);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.setValueAtTime(400, t); bp.frequency.exponentialRampToValueAtTime(2600, t + 0.5); bp.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(1.2, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    n.connect(bp).connect(g).connect(out); n.start(t, Math.random()); n.stop(t + 1);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.25);
    const og = ctx.createGain();
    this._env(og.gain, t, 0.003, 1.4, 0.3);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.35);
  }
  rocketLoad() {
    if (!this.ready) return;
    const t = this.t;
    this._click(t + 0.5, 700, 0.5); this._click(t + 0.56, 1400, 0.35); this._click(t + 1.2, 2200, 0.4);
  }
  explosion(pos, big = 1) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.9, 1.6 * big);
    const n = this._noiseSrc(this.brownBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(3000, t); lp.frequency.exponentialRampToValueAtTime(180, t + 1.2);
    const g = ctx.createGain();
    this._env(g.gain, t, 0.004, 2.2, 1.6);
    n.connect(lp).connect(g).connect(out); n.start(t, Math.random() * 2); n.stop(t + 1.8);
    const n2 = this._noiseSrc();
    const lp2 = ctx.createBiquadFilter(); lp2.type = 'lowpass';
    lp2.frequency.setValueAtTime(8000, t); lp2.frequency.exponentialRampToValueAtTime(600, t + 0.4);
    const g2 = ctx.createGain();
    this._env(g2.gain, t, 0.001, 1.4, 0.45);
    n2.connect(lp2).connect(g2).connect(out); n2.start(t, Math.random()); n2.stop(t + 0.5);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(22, t + 0.9);
    const og = ctx.createGain();
    this._env(og.gain, t, 0.005, 2.4, 1.0);
    o.connect(og).connect(out); o.start(t); o.stop(t + 1.1);
    // Trümmer
    for (let i = 0; i < 6; i++) this._click(t + 0.25 + Math.random() * 0.8, 600 + Math.random() * 2500, 0.15, pos);
  }
  grenadeBounce(pos, v = 1) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(pos, 0.2, Math.min(1, v));
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 520 + Math.random() * 200;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.001, 0.35, 0.09);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.12);
    this._click(t, 1800, 0.3, pos);
  }
  pin() {
    if (!this.ready) return;
    const t = this.t;
    this._ting(t, 3800, 0.08, null);
    this._click(t + 0.02, 2600, 0.3);
    this._click(t + 0.22, 1400, 0.25);
  }
  throwWhoosh() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.1, 1);
    const n = this._noiseSrc();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.setValueAtTime(500, t); bp.frequency.exponentialRampToValueAtTime(1800, t + 0.15); bp.Q.value = 1.2;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.04, 0.3, 0.15);
    n.connect(bp).connect(g).connect(out); n.start(t, Math.random()); n.stop(t + 0.25);
  }
  switchWeapon() {
    if (!this.ready) return;
    const t = this.t;
    this._click(t, 1100, 0.3); this._click(t + 0.07, 2400, 0.25);
  }
  jump() {
    if (!this.ready) return;
    this.step(0.1);
  }
  land(h = 1) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.t;
    const out = this._out(null, 0.15, 1);
    const n = this._noiseSrc(this.brownBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300;
    const g = ctx.createGain();
    this._env(g.gain, t, 0.003, 0.5 * Math.min(1.5, h), 0.14);
    n.connect(lp).connect(g).connect(out); n.start(t, Math.random() * 3); n.stop(t + 0.2);
  }
  ammo() {
    if (!this.ready) return;
    const t = this.t;
    this._click(t, 1500, 0.4); this._click(t + 0.06, 2600, 0.35); this._click(t + 0.12, 1200, 0.3);
  }

  // ---------- Sprachausgabe (vorab erzeugte Sprüche) ----------
  async loadVoices(base, ids) {
    if (!this.ready || this.voices) return;
    this.voices = {};
    await Promise.all(ids.map(async (id) => {
      try {
        const r = await fetch(`${base}${id}.mp3`);
        if (!r.ok) return;
        const buf = await r.arrayBuffer();
        this.voices[id] = await new Promise((res, rej) => this.ctx.decodeAudioData(buf, res, rej));
      } catch (e) { /* fehlt eben */ }
    }));
  }
  voice(id) {
    if (!this.ready || !this.voices || !this.voices[id]) return false;
    const ctx = this.ctx, t = this.t;
    if (this.voiceSrc) { try { this.voiceSrc.stop(); } catch (e) { /* */ } }
    const src = ctx.createBufferSource();
    src.buffer = this.voices[id];
    const lo = ctx.createBiquadFilter(); lo.type = 'lowshelf'; lo.frequency.value = 180; lo.gain.value = 3;
    const g = ctx.createGain(); g.gain.value = 1.25;
    src.connect(lo).connect(g).connect(this.master);
    src.start(t + 0.05);
    this.voiceSrc = src;
    // Effekte kurz leiser, damit man den Spruch versteht
    if (this.duck) {
      this.duck.gain.cancelScheduledValues(t);
      this.duck.gain.setTargetAtTime(0.55, t, 0.05);
      this.duck.gain.setTargetAtTime(1, t + src.buffer.duration, 0.25);
    }
    return true;
  }
}
