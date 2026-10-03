import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Track } from './track.js';
import { World, loadLogo } from './world.js';
import { RACERS, buildKart } from './models.js';
import { Kart, LAPS } from './kart.js';
import { Items } from './items.js';
import { FX, COL } from './fx.js';
import { Audio } from './audio.js';
import { HUD, fmt } from './hud.js';

const $ = (id) => document.getElementById(id);
const TEST = /[?&]test/.test(location.search);
const CLASSES = [
  { name: 'Gemütlich', speed: 0.86, ai: 0.88, rub: 0.14 },
  { name: 'Flott', speed: 1.0, ai: 0.965, rub: 0.1 },
  { name: 'Rasant', speed: 1.13, ai: 1.03, rub: 0.07 },
];
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* egal */ } },
};
const soundPref = () => { try { const v = localStorage.getItem('fps_sound_v1'); return v === null ? true : v === '1'; } catch (e) { return true; } };
const setSoundPref = (on) => { try { localStorage.setItem('fps_sound_v1', on ? '1' : '0'); } catch (e) { /* */ } };
const SND_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="#fff"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>';
const SND_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="#fff"/><path d="m16 9 6 6M22 9l-6 6"/></svg>';

class Game {
  constructor() {
    this.state = 'loading';
    this.time = 0;
    this.raceTime = 0;
    this.clsIdx = store.get('fk_cls', 1);
    this.cls = CLASSES[this.clsIdx];
    this.tmpV = new THREE.Vector3();
    this.shakeA = 0;
    this.dynScale = 1;
    this.frameAvg = 16;
    this.touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (this.touch) document.body.classList.add('touch');
    this.keys = new Set();
    this.setupRenderer();
  }

  setupRenderer() {
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false }));
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    $('stage').appendChild(r.domElement);
    const s = (this.scene = new THREE.Scene());
    s.fog = new THREE.Fog(0xcfe6ff, 260, 1150);
    s.background = new THREE.Color(0x8cc8ff);
    this.camera = new THREE.PerspectiveCamera(70, 16 / 9, 0.3, 3000);
    // Licht
    this.hemi = new THREE.HemisphereLight(0xcfe9ff, 0x6f8f4a, 1.35);
    s.add(this.hemi);
    const sun = (this.sun = new THREE.DirectionalLight(0xfff2dc, 2.7));
    this.sunDir = new THREE.Vector3(0.4, 0.55, -0.7).normalize();
    sun.castShadow = true;
    const sm = this.touch ? 1024 : 2048;
    sun.shadow.mapSize.set(sm, sm);
    const sc = sun.shadow.camera;
    sc.left = -55; sc.right = 55; sc.top = 55; sc.bottom = -55; sc.near = 1; sc.far = 260;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.04;
    s.add(sun, sun.target);
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('applayout', () => this.resize());
  }

  setupComposer() {
    const r = this.renderer;
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: this.touch ? 2 : 4 });
    const c = (this.composer = new EffectComposer(r, rt));
    c.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.32, 0.45, 0.9);
    c.addPass(this.bloom);
    this.post = new ShaderPass({
      uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uSpeed: { value: 0 }, uAspect: { value: 1.7 }, uFlash: { value: 0 }, uTint: { value: new THREE.Color(1, 1, 1) } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float uTime, uSpeed, uAspect, uFlash; uniform vec3 uTint; varying vec2 vUv;
        float h(float p){ return fract(sin(p*127.1)*43758.5453); }
        void main(){
          vec2 d = vUv - 0.5;
          vec2 da = d*vec2(uAspect,1.0);
          float r = length(da);
          // leichte radiale Unschärfe bei Turbo
          vec3 col = texture2D(tDiffuse, vUv).rgb;
          if (uSpeed > 0.01) {
            vec3 acc = col;
            for (int i = 1; i < 5; i++) acc += texture2D(tDiffuse, vUv - d * float(i) * 0.012 * uSpeed).rgb;
            col = mix(col, acc / 5.0, smoothstep(0.15, 0.6, r));
          }
          // Sättigung (Comic-Look)
          float l = dot(col, vec3(0.299,0.587,0.114));
          col = mix(vec3(l), col, 1.12);
          col *= uTint;
          // Speedlines
          float a = atan(da.y, da.x);
          float id = floor(a * 38.0);
          float n = h(id);
          float line = step(0.72, n) * smoothstep(0.28, 0.7, r) * step(fract(r*1.4 - uTime*(2.5+n*3.0) + n*7.0), 0.35);
          col += vec3(1.0) * line * uSpeed * 0.55;
          col += vec3(1.0, 0.95, 0.85) * uFlash;
          col *= 1.0 - smoothstep(0.45, 1.15, r) * 0.38;
          gl_FragColor = vec4(max(col, 0.0), 1.0);
        }`,
    });
    c.addPass(this.post);
    c.addPass(new OutputPass());
    this.resize();
  }

  resize() {
    const A = window.__app;
    const w = A ? A.w : innerWidth, h = A ? A.h : innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const pr = Math.min(devicePixelRatio || 1, this.touch ? 1.5 : 1.75) * this.dynScale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    if (this.composer) {
      this.composer.setPixelRatio(pr);
      this.composer.setSize(w, h);
      this.post.uniforms.uAspect.value = w / h;
    }
    if (this.fx) this.fx.setScale(h * pr);
  }

  async init() {
    const bar = $('loadbar');
    bar.style.width = '15%';
    this.logo = await loadLogo();
    await frame();
    this.track = new Track();
    bar.style.width = '35%';
    await frame();
    this.world = new World(this.scene, this.track, this.logo);
    this.world.build();
    bar.style.width = '75%';
    await frame();
    this.fx = new FX(this.scene);
    this.audio = new Audio();
    try { if (localStorage.getItem('fps_sound_v1') === null) localStorage.setItem('fps_sound_v1', '1'); } catch (e) { /* */ }
    this.audio.enabled = soundPref();
    // Ton-Knopf der 404-Seite (gleiche Domain) wirkt auch im Spiel
    window.addEventListener('storage', (e) => { if (e.key === 'fps_sound_v1') { this.audio.setEnabled(soundPref()); if (this.paintSnd) this.paintSnd(); } });
    const plate = this.world.logoTexture(512, 150, '#1d1410');
    this.karts = RACERS.map((def, i) => {
      const m = buildKart(def, plate);
      this.scene.add(m);
      return new Kart(this, def, i === 0, m);
    });
    this.player = this.karts[0];
    this.items = new Items(this);
    this.hud = new HUD(this);
    this.setupComposer();
    this.setupInput();
    this.setupUI();
    bar.style.width = '100%';
    // Shader vorkompilieren
    this.placeGrid();
    this.camTitle(0);
    this.renderer.compile(this.scene, this.camera);
    await frame();
    $('loading').classList.remove('show');
    this.toTitle();
    this.last = performance.now();
    if (TEST) {
      window.__fk = this; this.frozen = /frozen/.test(location.search);
      window.sim = (n, dt = 1 / 30, render = true) => { for (let i = 0; i < n; i++) this.step(dt); if (render) this.render(dt); return { st: this.state, t: this.raceTime, lap: this.player.lap, place: this.player.place, spd: this.player.spd, idx: this.player.idx }; };
      window.auto = () => { this.player.ai = { lat: 0, latT: 0, skill: 1, itemT: 0, wob: 0 }; };
      window.tp = (i, lat = 0) => { this.lastKp = null; this.player.reset(i, lat); this.player.lap = 1; this.camYaw = this.player.yaw; this.camPos = null; this.updateCamera(0.016); this.camPos.copy(this.tp); this.camLook.copy(this.tl); this.updateCamera(0.016); };
      window.race = (sec) => { const r = []; for (let i = 0; i < sec * 30; i++) { this.step(1 / 30); if (this.state === 'results') break; } return { st: this.state, t: this.raceTime, karts: this.karts.map((k) => [k.def.id, k.lap, k.finished ? k.finishTime.toFixed(1) : '-', k.lapTimes.map((x) => x.toFixed(1)).join('/'), k.place]) }; };
      window.ready = true;
    }
    this.renderer.setAnimationLoop(() => this.loop());
  }

  // ---------------- UI ----------------
  setupUI() {
    const sb = $('snd');
    const paint = () => { sb.innerHTML = this.audio.enabled ? SND_ON : SND_OFF; };
    paint();
    this.paintSnd = paint;
    this.toggleSound = () => { this.audio.resume(); this.audio.setEnabled(!this.audio.enabled); setSoundPref(this.audio.enabled); paint(); };
    sb.addEventListener('click', (e) => { e.stopPropagation(); this.toggleSound(); sb.blur(); });
    $('close').addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.state === 'race' || this.state === 'count') this.pause(true);
      try { if (document.fullscreenElement) document.exitFullscreen(); } catch (err) { /* */ }
      if (window.parent !== window) { try { parent.postMessage({ type: 'fuchsflitzer:close' }, location.origin); } catch (err) { /* */ } }
      else location.href = '/';
    });
    $('fs').addEventListener('click', (e) => {
      e.stopPropagation();
      const d = document;
      if (d.fullscreenElement) d.exitFullscreen?.(); else d.documentElement.requestFullscreen?.().catch(() => {});
      $('fs').blur();
    });
    const cls = $('cls');
    const mark = () => cls.querySelectorAll('button').forEach((b) => b.classList.toggle('on', +b.dataset.c === this.clsIdx));
    mark();
    cls.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      this.clsIdx = +b.dataset.c; this.cls = CLASSES[this.clsIdx]; store.set('fk_cls', this.clsIdx); mark(); this.showBest();
      this.audio.resume(); this.audio.click();
    });
    $('start').addEventListener('click', () => this.startRace());
    $('again').addEventListener('click', () => this.startRace());
    $('menu').addEventListener('click', () => this.toTitle());
    $('resume').addEventListener('click', () => this.pause(false));
    $('quit').addEventListener('click', () => { this.pause(false); this.toTitle(); });
    if (this.touch) $('keyhelp').innerHTML = '<span>Gas gibt der Fuchs automatisch</span><span>◀ ▶ Lenken</span><span>DRIFT halten + lenken = Turbo</span><span>ITEM einsetzen</span>';
    if (this.touch) $('itemkey').textContent = '';
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'race') this.pause(true); });
    window.addEventListener('blur', () => { if (this.state === 'race' && !TEST) this.pause(true); });
    this.showBest();
  }

  showBest() {
    const b = store.get('fk_best_v1', {});
    const t = b[this.clsIdx];
    $('bestline').textContent = t ? `Deine Bestzeit (${this.cls.name}): ${fmt(t)}` : 'Noch keine Bestzeit – zeig, was der Fuchs kann!';
  }

  setupInput() {
    const down = (e) => {
      const k = e.code;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(k)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(k);
      this.audio.resume();
      if (k === 'KeyM') this.toggleSound();
      if ((k === 'KeyP' || k === 'Escape') && (this.state === 'race' || this.state === 'count')) this.pause(!this.paused);
      if (k === 'Enter' || k === 'Space') {
        if (this.state === 'title' && k === 'Enter') this.startRace();
        else if (this.state === 'results') this.startRace();
      }
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    // Touch
    this.tstate = { l: false, r: false, d: false, i: false, b: false };
    const bind = (id, key) => {
      const el = $(id);
      const on = (v) => (e) => { e.preventDefault(); this.audio.resume(); this.tstate[key] = v; el.classList.toggle('on', v); };
      el.addEventListener('pointerdown', on(true));
      el.addEventListener('pointerup', on(false));
      el.addEventListener('pointercancel', on(false));
      el.addEventListener('pointerleave', on(false));
    };
    bind('tl', 'l'); bind('tr', 'r'); bind('td', 'd'); bind('ti', 'i'); bind('tb', 'b');
    document.addEventListener('pointerdown', () => this.audio.resume(), { passive: true });
  }

  readInput() {
    const K = this.keys, inp = this.player.input, t = this.tstate;
    let steer = 0, gas = 0, brake = 0, drift = false, use = false;
    if (K.has('ArrowLeft') || K.has('KeyA')) steer -= 1;
    if (K.has('ArrowRight') || K.has('KeyD')) steer += 1;
    if (K.has('ArrowUp') || K.has('KeyW')) gas = 1;
    if (K.has('ArrowDown') || K.has('KeyS')) brake = 1;
    if (K.has('Space') || K.has('ShiftLeft') || K.has('ShiftRight')) drift = true;
    if (K.has('KeyE') || K.has('KeyX') || K.has('ControlLeft') || K.has('KeyK')) use = true;
    if (this.touch) {
      if (t.l) steer -= 1; if (t.r) steer += 1;
      if (t.d) drift = true; if (t.i) use = true;
      if (t.b) brake = 1; else if (this.touchGas) gas = 1;
    }
    // Gamepad
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p) continue;
      const ax = p.axes[0] || 0;
      if (Math.abs(ax) > 0.15) steer += ax;
      if (p.buttons[14]?.pressed) steer -= 1;
      if (p.buttons[15]?.pressed) steer += 1;
      if (p.buttons[0]?.pressed || p.buttons[7]?.value > 0.3) gas = 1;
      if (p.buttons[1]?.pressed || p.buttons[6]?.value > 0.3) brake = 1;
      if (p.buttons[5]?.pressed || p.buttons[2]?.pressed) drift = true;
      if (p.buttons[4]?.pressed || p.buttons[3]?.pressed) use = true;
      if (p.buttons[9]?.pressed && !this.padStart) { this.padStart = true; if (this.state === 'title' || this.state === 'results') this.startRace(); else if (this.state === 'race') this.pause(!this.paused); }
      if (!p.buttons[9]?.pressed) this.padStart = false;
    }
    inp.steer = THREE.MathUtils.clamp(steer, -1, 1);
    inp.gas = gas; inp.brake = brake; inp.drift = drift; inp.use = use;
  }

  // ---------------- Ablauf ----------------
  placeGrid() {
    const T = this.track;
    // Startreihenfolge: Spieler startet als Fünfter
    const order = [1, 2, 3, 4, 0, 5];
    order.forEach((ki, slot) => {
      const k = this.karts[ki];
      k.reset(T.N - 16 - slot * 9, slot % 2 ? 3.2 : -3.2);
      k.lap = 0;
      if (k.ai) {
        const skills = [1.0, 0.985, 0.97, 0.955, 0.94];
        k.ai.skill = skills[ki - 1] * this.cls.ai;
      }
      k.sync(0);
    });
    this.updatePlaces();
  }

  toTitle() {
    this.state = 'title';
    this.paused = false;
    document.body.classList.remove('racing');
    ['results', 'pause'].forEach((s) => $(s).classList.remove('show'));
    $('title').classList.add('show');
    this.items.clear();
    this.placeGrid();
    this.showBest();
    this.hud.clearBanner();
    this.audio.startMusic('menu');
    this.titleT = 0;
  }

  startRace() {
    this.landscape();
    this.audio.resume();
    this.audio.click();
    ['title', 'results', 'pause'].forEach((s) => $(s).classList.remove('show'));
    this.items.clear();
    this.placeGrid();
    for (const k of this.karts) { if (k.isPlayer) k.ai = null; }
    this.hud.item(null);
    this.hud.laps([]);
    this.hud.clearBanner();
    this.raceTime = 0;
    this.state = 'intro';
    this.stateT = 0;
    this.lastKp = null;
    this.camYaw = this.player.yaw;
    this.finishOrder = [];
    this.gasAt = -1;
    this.touchGas = false;
    this.lastLapShown = 1;
    this.paused = false;
    this.wrongT = 0;
    this.audio.fadeMusic(0, 0.6);
    this.audio.stopMusic();
    setTimeout(() => { if (this.state === 'intro') this.audio.voice('start'); }, 300);
    document.body.classList.add('racing');
    try { window.focus(); } catch (e) { /* */ }
  }

  // Handy: echtes Vollbild + Querformat anfordern (Android). iPhone kann das nicht – dort dreht das Layout selbst.
  landscape() {
    if (!this.touch) return;
    try {
      const d = document, el = d.documentElement;
      const lock = () => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* */ } };
      if (!d.fullscreenElement && el.requestFullscreen) el.requestFullscreen({ navigationUI: 'hide' }).then(lock).catch(lock);
      else lock();
    } catch (e) { /* */ }
  }

  pause(on) {
    if (this.state !== 'race' && this.state !== 'count') return;
    this.paused = on;
    $('pause').classList.toggle('show', on);
    if (this.audio.ctx) { if (on) this.audio.ctx.suspend(); else this.audio.ctx.resume(); }
    this.keys.clear();
  }

  rubber(k) {
    const d = (this.player.progress - k.progress) * 0.5; // >0: Kart liegt hinten
    const r = this.cls.rub;
    return 1 + THREE.MathUtils.clamp(d / 220, -r, r * 1.3);
  }

  updatePlaces() {
    const list = [...this.karts].sort((a, b) => {
      if (a.finished && b.finished) return a.finishTime - b.finishTime;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.progress - a.progress;
    });
    list.forEach((k, i) => { k.place = i + 1; });
    this.order = list;
  }

  onLap(k) {
    if (!k.isPlayer) return;
    this.hud.laps(k.lapTimes);
    this.audio.lap();
    if (k.lap === LAPS) {
      this.hud.banner('LETZTE RUNDE!', '', false);
      if (!this.audio.voice('letzte')) this.audio.fanfare(false);
      this.audio.setTempo(166);
    } else this.hud.banner(`RUNDE ${k.lap}`, '', false);
  }

  onFinish(k) {
    this.finishOrder.push(k);
    if (!k.isPlayer) return;
    this.hud.laps(k.lapTimes);
    this.state = 'finish';
    this.stateT = 0;
    k.ai = { lat: k.lat, latT: 1, skill: 0.9, itemT: 99, wob: 0 };
    const place = this.order.indexOf(k) + 1 || this.finishOrder.length;
    k.place = this.finishOrder.length;
    const win = k.place === 1;
    this.hud.banner(win ? 'SIEG!' : 'ZIEL!', `${k.place}. Platz · ${fmt(k.finishTime)}`, true);
    this.audio.fadeMusic(0.12, 0.5);
    this.audio.fanfare(win || k.place <= 3);
    if (!this.audio.voice(win ? 'sieg' : 'ziel')) { /* nur Fanfare */ }
    void place;
    // Bestzeit
    const b = store.get('fk_best_v1', {});
    this.newBest = !b[this.clsIdx] || k.finishTime < b[this.clsIdx];
    if (this.newBest) { b[this.clsIdx] = k.finishTime; store.set('fk_best_v1', b); }
    const all = Object.values(b).filter(Boolean);
    if (all.length) {
      const min = Math.min(...all);
      store.set('fk_best', Math.round(min * 100) / 100);
      try { parent.postMessage({ type: 'fuchsflitzer:best', best: min }, location.origin); } catch (e) { /* */ }
    }
    if (win) this.flash = 0.5;
  }

  showResults() {
    this.state = 'results';
    document.body.classList.remove('racing');
    const p = this.player;
    const avg = 27 * this.cls.speed;
    const rows = this.karts.map((k) => {
      let t = k.finishTime, est = false;
      if (!k.finished) { const left = (LAPS + 1) * this.track.N - k.progress; t = this.raceTime + (left * 0.5) / avg; est = true; }
      return { k, t, est };
    }).sort((a, b) => a.t - b.t);
    // Spielerplatz bleibt wie gefahren
    $('restitle').textContent = p.place === 1 ? 'SIEG!' : p.place <= 3 ? 'PODIUM!' : 'ZIEL!';
    $('newbest').hidden = !this.newBest;
    $('restable').innerHTML = rows.map((r, i) => `<tr class="${r.k.isPlayer ? 'me' : ''}"><td>${i + 1}.</td><td><span class="dot" style="background:#${r.k.def.kart.toString(16).padStart(6, '0')}"></span>${r.k.isPlayer ? 'Du (Fuchs)' : r.k.def.name}</td><td>${r.est ? '~' : ''}${fmt(r.t)}</td></tr>`).join('');
    $('results').classList.add('show');
    this.audio.startMusic('menu');
  }

  say(text) {
    this.hud.quip(text);
    const map = { 'Turbo!': 'turbo', 'Treffer!': 'treffer', 'Volltreffer!': 'treffer', 'Hab dich!': 'treffer', 'Autsch!': 'hit' };
    if (map[text] && Math.random() < 0.7) this.audio.voice(map[text]);
  }

  shake(a) { this.shakeA = Math.max(this.shakeA, a); }

  // ---------------- Kamera ----------------
  camTitle(t) {
    const T = this.track;
    const lat = Math.sin(t * 0.18) * 5;
    const c = T.point(T.N - 38, 0.2 + lat * 0.35);
    const look = T.point(T.N - 52, -3.6);
    this.camera.position.set(c.x, c.y + 2.3 + Math.sin(t * 0.25) * 0.2, c.z);
    this.camera.lookAt(look.x, look.y + 0.3, look.z);
    this.camera.fov = 50;
    this.camera.updateProjectionMatrix();
  }

  chasePose(out, look, k, yaw) {
    const sx = Math.sin(yaw), sz = Math.cos(yaw);
    const dist = 6.6 + Math.min(1.5, Math.abs(k.spd) * 0.03);
    out.set(k.x - sx * dist, k.y + 2.7, k.z - sz * dist);
    look.set(k.x + sx * 3, k.y + 1.25, k.z + sz * 3);
  }

  updateCamera(dt) {
    const k = this.player, cam = this.camera;
    if (!this.camYaw && this.camYaw !== 0) this.camYaw = k.yaw;
    const targetYaw = k.spinT > 0 ? this.camYaw : k.yaw + k.driftAng * 0.35;
    let d = targetYaw - this.camYaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    this.camYaw += d * Math.min(1, dt * (k.spd < 0 ? 2 : 5.5));
    if (!this.camPos) { this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3(); this.tp = new THREE.Vector3(); this.tl = new THREE.Vector3(); }
    this.chasePose(this.tp, this.tl, k, this.camYaw);
    if (this.state === 'intro') {
      const T = this.track;
      const f = THREE.MathUtils.smoothstep(this.stateT / 3.2, 0, 1);
      const a = T.point(T.idx(k.idx + 50), 0);
      const pos0 = new THREE.Vector3(a.x + 8, a.y + 14, a.z + 4);
      const look0 = T.point(T.idx(k.idx + 6), 0);
      this.camPos.lerpVectors(pos0, this.tp, f);
      this.camLook.lerpVectors(look0, this.tl, f);
      cam.position.copy(this.camPos);
      cam.lookAt(this.camLook);
      cam.fov = 70;
      cam.updateProjectionMatrix();
      return;
    }
    if (this.state === 'finish') {
      const a = this.stateT * 0.35;
      this.tp.set(k.x + Math.sin(k.yaw + 2.6 + a) * 8, k.y + 3.2, k.z + Math.cos(k.yaw + 2.6 + a) * 8);
      this.tl.set(k.x, k.y + 1.2, k.z);
    }
    // Glättung relativ zum Kart (kein Nachhängen bei hoher Geschwindigkeit)
    const kp = this.tmpK || (this.tmpK = new THREE.Vector3());
    kp.set(k.x, k.y, k.z);
    if (!this.camOff) this.camOff = new THREE.Vector3();
    const wantOff = this.tp.clone().sub(kp);
    const sm = 1 - Math.exp(-dt * (this.state === 'finish' ? 3 : 9));
    this.camOff.copy(this.camPos).sub(this.lastKp || kp);
    this.camOff.x += (wantOff.x - this.camOff.x) * sm;
    this.camOff.z += (wantOff.z - this.camOff.z) * sm;
    this.camOff.y += (wantOff.y - this.camOff.y) * (1 - Math.exp(-dt * (k.air ? 3 : 8)));
    this.camPos.copy(kp).add(this.camOff);
    (this.lastKp || (this.lastKp = new THREE.Vector3())).copy(kp);
    this.camLook.copy(this.tl);
    cam.position.copy(this.camPos);
    if (this.shakeA > 0.001) {
      cam.position.x += (Math.random() - 0.5) * this.shakeA;
      cam.position.y += (Math.random() - 0.5) * this.shakeA;
      this.shakeA *= Math.exp(-dt * 8);
    }
    // Kamera innerhalb der Bande halten
    const T = this.track;
    const ci = T.nearestLocal(cam.position.x, cam.position.z, k.idx, 40);
    const cl = T.lateral(ci, cam.position.x, cam.position.z);
    const lim = 15.6;
    if (Math.abs(cl) > lim && !(this.world.tunnelRange && 0)) {
      const [rx, rz] = T.right(ci), d = Math.abs(cl) - lim, sg = Math.sign(cl);
      cam.position.x -= rx * d * sg; cam.position.z -= rz * d * sg;
    }
    const gy = T.y[ci] + 0.8;
    if (cam.position.y < gy) cam.position.y = gy;
    cam.lookAt(this.camLook);
    const boost = k.boostT > 0 ? 1 : 0;
    this.fovBoost = THREE.MathUtils.lerp(this.fovBoost || 0, boost, 1 - Math.exp(-dt * 5));
    cam.fov = 68 + Math.min(1, Math.abs(k.spd) / 34) * 5 + this.fovBoost * 7;
    cam.updateProjectionMatrix();
  }

  // ---------------- Schleife ----------------
  loop() {
    const now = performance.now();
    let dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    if (this.frozen) dt = 0;
    this.frameAvg = this.frameAvg * 0.95 + (now - (this.prevNow || now)) * 0.05;
    this.prevNow = now;
    this.autoRes();
    if (!this.paused) this.step(dt);
    this.render(dt);
  }

  step(dt) {
    if (dt <= 0) return;
    this.time += dt;
    this.stateT = (this.stateT || 0) + dt;
    const st = this.state;
    const racing = st === 'race' || st === 'finish';
    if (st === 'title') {
      this.titleT += dt;
      this.camTitle(this.titleT);
    }
    if (st === 'intro') {
      if (this.stateT > 3.2) { this.state = 'count'; this.stateT = 0; this.countIdx = -1; this.audio.startMusic('race'); this.audio.fadeMusic(0.0001, 0.1); }
    }
    if (st === 'count' || st === 'intro' || st === 'race') this.readInput();
    if (st === 'count') {
      const ci = Math.floor(this.stateT);
      if (ci !== this.countIdx && ci <= 3) {
        this.countIdx = ci;
        if (ci < 3) { this.hud.count(String(3 - ci)); this.audio.beep(false); this.audio.voice(String(3 - ci)); }
        else {
          this.hud.count('LOS!', true); this.audio.beep(true); this.audio.voice('los');
          this.state = 'race'; this.stateT = 0;
          this.audio.fadeMusic(this.audio.musVol, 0.3);
          this.audio.setTempo(150);
          // Startturbo
          const g = this.gasAt;
          if (this.touch) { this.touchGas = true; }
          if (g >= 1.75 && g <= 2.7) { this.player.boost(1.3, 1); this.say('Raketenstart!'); }
          else if (g >= 0 && g < 1.3) { this.player.stallT = 0.9; this.fx.puff(this.player.x, this.player.y + 0.5, this.player.z, 10, COL.dark); }
          for (const k of this.karts) if (k.ai && Math.random() < 0.55 * k.ai.skill) k.boost(0.8 + Math.random() * 0.5, 0.8);
        }
      }
      // Gas-Zeitpunkt merken
      const gasNow = this.player.input.gas > 0 || (this.touch && this.tstate.d);
      if (gasNow && this.gasAt < 0) this.gasAt = this.stateT;
      if (!gasNow) this.gasAt = -1;
      // Motor aufheulen
      if (gasNow && Math.random() < 0.3) this.fx.dust(this.player.x - Math.sin(this.player.yaw) * 1.4, this.player.y, this.player.z - Math.cos(this.player.yaw) * 1.4, 0, 0, COL.smoke, 1);
    }
    if (racing) this.raceTime += dt;

    // KI + Physik
    for (const k of this.karts) {
      if (k.ai && racing) k.think(dt);
      else if (k.ai) { k.input.gas = 0; k.input.steer = 0; k.input.drift = false; k.input.use = false; }
    }
    if (!racing) for (const k of this.karts) { k.input.gas = 0; k.input.brake = 0; if (!(st === 'count' && k.isPlayer)) k.input.steer = 0; k.input.drift = false; k.input.use = false; }
    const sub = dt > 0.025 ? 2 : 1;
    for (let s = 0; s < sub; s++) {
      for (const k of this.karts) k.update(dt / sub, racing);
      this.collide();
    }
    this.items.update(dt, racing);
    this.updatePlaces();
    for (const k of this.karts) k.sync(dt);
    this.world.update(this.time, dt);
    this.fx.update(dt);

    // Falsche Richtung
    if (st === 'race') {
      const p = this.player;
      const hd = this.track.heading(p.idx);
      const back = Math.cos(p.yaw - hd) < -0.3 && Math.abs(p.spd) > 2;
      this.wrongT = back ? this.wrongT + dt : 0;
      this.hud.wrong(this.wrongT > 1.2);
    } else this.hud.wrong(false);

    if (st === 'finish' && this.stateT > 4.5) this.showResults();
    if (st !== 'title' && st !== 'results') this.updateCamera(dt);
    if (st === 'results') { this.titleT = (this.titleT || 0) + dt; const k = this.player; const a = this.titleT * 0.25; this.camera.position.set(k.x + Math.sin(a) * 9, k.y + 3.5, k.z + Math.cos(a) * 9); this.camera.lookAt(k.x, k.y + 1, k.z); }
    if (racing || st === 'count') this.hud.update(dt);
    // Audio
    let nearest = 999;
    for (const k of this.karts) if (!k.isPlayer) nearest = Math.min(nearest, Math.hypot(k.x - this.player.x, k.z - this.player.z));
    this.audio.updateEngine(this.player, st !== 'title' && st !== 'loading' && st !== 'results', nearest);
  }

  collide() {
    const ks = this.karts;
    for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) {
      const a = ks[i], b = ks[j];
      const dx = b.x - a.x, dz = b.z - a.z;
      if (Math.abs(dx) > 2.2 || Math.abs(dz) > 2.2 || Math.abs(a.y - b.y) > 1.5) continue;
      const d = Math.hypot(dx, dz);
      const R = 1.9;
      if (d < R && d > 1e-4) {
        const nx = dx / d, nz = dz / d, pen = (R - d) / 2;
        a.x -= nx * pen; a.z -= nz * pen; b.x += nx * pen; b.z += nz * pen;
        const va = Math.sin(a.vh) * a.spd * nx + Math.cos(a.vh) * a.spd * nz;
        const vb = Math.sin(b.vh) * b.spd * nx + Math.cos(b.vh) * b.spd * nz;
        const rel = va - vb;
        if (rel > 0) {
          const imp = rel * 0.6 + 2;
          const ma = a.shieldT > 0 ? 0.3 : 1, mb = b.shieldT > 0 ? 0.3 : 1;
          a.ex -= nx * imp * ma; a.ez -= nz * imp * ma; b.ex += nx * imp * mb; b.ez += nz * imp * mb;
          if ((a.isPlayer || b.isPlayer) && rel > 2) { this.audio.wall(Math.min(1, rel / 12)); this.shake(0.15); }
        }
      }
    }
  }

  autoRes() {
    if (TEST) return;
    this.resT = (this.resT || 0) + 1;
    if (this.resT < 90) return;
    this.resT = 0;
    const f = this.frameAvg;
    let s = this.dynScale;
    if (f > 24 && s > 0.55) s = Math.max(0.55, s - 0.1);
    else if (f < 15 && s < 1) s = Math.min(1, s + 0.05);
    if (s !== this.dynScale) { this.dynScale = s; this.resize(); }
  }

  render(dt) {
    // Sonne folgt dem Spieler (Schatten-Kaskade light)
    const k = this.state === 'title' ? null : this.player;
    const c = k ? this.tmpV.set(k.x + Math.sin(k.yaw) * 20, k.y, k.z + Math.cos(k.yaw) * 20) : this.tmpV.copy(this.camera.position);
    const texel = 110 / this.sun.shadow.mapSize.x;
    c.x = Math.round(c.x / texel) * texel; c.z = Math.round(c.z / texel) * texel;
    this.sun.target.position.copy(c);
    this.sun.position.copy(c).addScaledVector(this.sunDir, 120);
    this.world.skyMesh.position.copy(this.camera.position);
    const u = this.post.uniforms;
    u.uTime.value = this.time;
    const p = this.player;
    const sp = (this.state === 'race' && p.boostT > 0) ? Math.min(1, 0.6 + p.boostPow * 0.4) : 0;
    u.uSpeed.value = THREE.MathUtils.lerp(u.uSpeed.value, sp, 1 - Math.exp(-dt * 6 || 0));
    this.flash = Math.max(0, (this.flash || 0) - dt * 1.5);
    u.uFlash.value = this.flash * 0.6;
    // Tunnel abdunkeln
    const tr = this.world.tunnelLightRange;
    const inT = tr && this.state !== 'title' && p.idx > tr[0] + 6 && p.idx < tr[1] - 6;
    const tint = inT ? 0.78 : 1;
    u.uTint.value.setScalar(THREE.MathUtils.lerp(u.uTint.value.r, tint, 1 - Math.exp(-dt * 4 || 0)));
    this.composer.render(dt);
  }
}

function frame() { return new Promise((r) => requestAnimationFrame(() => r())); }

const game = new Game();
game.init().catch((e) => { console.error(e); $('loading').innerHTML = '<div class="loading outline">Ups – der Fuchs hat sich verfahren. Bitte neu laden.</div>'; });
if (TEST) window.__fkGame = game;
