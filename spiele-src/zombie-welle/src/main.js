import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Level } from './level.js';
import { FX } from './fx.js';
import { ZombieTemplate, ZombieManager } from './zombies.js';
import { Arsenal, DEFS, ORDER, MAX_GRENADES } from './weapons.js';
import { Projectiles } from './projectiles.js';
import { AudioEngine } from './audio.js';
import VOICELINES from './voicelines.json';

const $ = (id) => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* egal */ } },
};
const TEST = /[?&]test/.test(location.search);
// Sound-Einstellung teilt sich das Spiel mit dem Sound-Knopf der 404-Seite
function readSound() {
  try { const v = localStorage.getItem('fps_sound_v1'); return v === null ? true : v === '1'; } catch (e) { return true; }
}
function writeSound(on) {
  try { localStorage.setItem('fps_sound_v1', on ? '1' : '0'); } catch (e) { /* egal */ }
}

// ---------------- Sprüche (mit Sprachausgabe, siehe voicelines.json) ----------------
const QUIPS = Object.fromEntries(Object.entries(VOICELINES).map(([k, v]) => [k, v.map(([id, t]) => ({ id, t }))]));
const VOICE_IDS = Object.values(VOICELINES).flat().map((l) => l[0]);
const pick = (a) => a[(Math.random() * a.length) | 0];

const PICKUP = {
  health: { label: '+25 Leben', color: 0x50ff70 },
  shells: { label: '+6 Schrot', color: 0xff8a30, amount: 6 },
  rockets: { label: '+2 Raketen', color: 0xff3a2a, amount: 2 },
  grenade: { label: '+1 Granate', color: 0xffd23a, amount: 1 },
};

// ============================================================
class Game {
  constructor() {
    this.stage = $('stage');
    this.audio = new AudioEngine();
    this.settings = {
      blood: store.get('zw_blood', true),
      sound: readSound(),
      sens: store.get('zw_sens', 1),
    };
    this.best = store.get('zw_best_v2', { wave: 0, kills: 0 });
    this.state = 'loading';
    this.keys = {};
    this.look = { dx: 0, dy: 0 };
    this.time = 0;
    this.dynScale = 1;
    this.frameTimes = [];
    this.events = [];
  }

  async init() {
    if (matchMedia('(hover: none) and (pointer: coarse)').matches && !TEST) {
      $('ov-start').hidden = true;
      $('ov-mobile').hidden = false;
      return;
    }
    this.setupRenderer();
    this.bindUI();
    await this.load();
    this.setupWorld();
    await this.precompile();
    this.state = 'menu';
    $('loading').hidden = true;
    $('ready').hidden = false;
    this.showBest();
    this.renderer.setAnimationLoop(() => this.frame());
    window.ZW = this; // für Tests
  }

  // ---------------- Renderer ----------------
  setupRenderer() {
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false }));
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.stage.appendChild(r.domElement);
    this.canvas = r.domElement;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060608);
    this.scene.fog = new THREE.FogExp2(0x070709, 0.032);
    this.camera = new THREE.PerspectiveCamera(74, 16 / 9, 0.05, 140);
    this.scene.add(this.camera);

    const pm = new THREE.PMREMGenerator(r);
    this.envMap = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.12;

    const fl = new THREE.SpotLight(0xfff1dc, 26, 30, 0.48, 0.6, 1.3);
    fl.position.set(0.25, -0.15, 0.1);
    this.camera.add(fl);
    fl.target.position.set(0, -0.2, -6);
    this.camera.add(fl.target);
    this.flashlight = fl;
    this.muzzleLight = new THREE.PointLight(0xffa040, 0, 7, 1.8);
    this.scene.add(this.muzzleLight);
    // Explosionslichter (fest vorhanden, damit keine Shader neu gebaut werden)
    this.boomLights = [0, 1].map(() => {
      const l = new THREE.PointLight(0xffa050, 0, 16, 1.5);
      this.scene.add(l);
      return { l, t: 0 };
    });

    window.addEventListener('resize', () => this.resize());
  }

  setupComposer() {
    const r = this.renderer;
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
    const c = (this.composer = new EffectComposer(r, rt));
    c.addPass(new RenderPass(this.scene, this.camera));
    const wp = new RenderPass(this.arsenal.scene, this.arsenal.camera);
    wp.clear = false;
    wp.clearDepth = true;
    c.addPass(wp);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.55, 0.55, 0.92);
    c.addPass(this.bloom);
    this.post = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null }, uTime: { value: 0 }, uDamage: { value: 0 }, uLow: { value: 0 }, uAspect: { value: 1.7 }, uFlash: { value: 0 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float uTime, uDamage, uLow, uAspect, uFlash; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
        void main(){
          vec2 d = vUv - 0.5;
          float r2 = dot(d*vec2(uAspect,1.0), d*vec2(uAspect,1.0));
          float ca = 0.0012 + uDamage*0.008 + uFlash*0.006;
          vec3 col;
          col.r = texture2D(tDiffuse, vUv + d*ca).r;
          col.g = texture2D(tDiffuse, vUv).g;
          col.b = texture2D(tDiffuse, vUv - d*ca).b;
          float edge = smoothstep(0.25, 1.1, r2);
          col = mix(col, vec3(0.55,0.0,0.0) * (0.6+col.r), clamp(uDamage*edge*1.6, 0.0, 0.85));
          float lum = dot(col, vec3(0.299,0.587,0.114));
          float pulse = 0.5 + 0.5*sin(uTime*6.0);
          col = mix(col, vec3(lum)*vec3(1.1,0.75,0.75), uLow*0.55);
          col = mix(col, col*vec3(1.6,0.3,0.3), uLow*edge*pulse*0.6);
          col += vec3(1.0,0.6,0.25) * uFlash * 0.35;
          col *= 1.0 - smoothstep(0.35, 1.25, r2) * 0.75;
          col += (h(vUv*vec2(1920.0,1080.0) + fract(uTime)*91.0) - 0.5) * 0.035;
          gl_FragColor = vec4(max(col, 0.0), 1.0);
        }`,
    });
    c.addPass(this.post);
    c.addPass(new OutputPass());
    this.resize();
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.arsenal) this.arsenal.setAspect(w / h);
    const pr = Math.min(devicePixelRatio || 1, 1.5) * this.dynScale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    if (this.composer) {
      this.composer.setPixelRatio(pr);
      this.composer.setSize(w, h);
      this.post.uniforms.uAspect.value = w / h;
    }
    if (this.fx) this.fx.setScale(h * pr);
  }

  // ---------------- Laden ----------------
  async load() {
    const mgr = new THREE.LoadingManager();
    mgr.onProgress = (url, a, b) => { $('loadbar').style.width = Math.round((a / b) * 100) + '%'; };
    const tl = new THREE.TextureLoader(mgr);
    const maxAniso = this.renderer.capabilities.getMaxAnisotropy();
    const tex = (url, srgb, repeat = true) => new Promise((res, rej) => tl.load(url, (t) => {
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = Math.min(8, maxAniso);
      res(t);
    }, undefined, rej));
    const set = (base, repeat = true) => Promise.all([tex(base + '_c.webp', true, repeat), tex(base + '_n.webp', false, repeat), tex(base + '_orm.webp', false, repeat)]).then(([c, n, orm]) => ({ c, n, orm }));
    const names = ['bricks', 'metal', 'concrete', 'plate', 'ceiling', 'hazard', 'rust'];
    const zt = (p) => Promise.all([tex(`models/${p}_BaseColor.webp`, true, false), tex(`models/${p}_Normal.webp`, false, false), tex(`models/${p}_OcclusionRoughnessMetallic.webp`, false, false)])
      .then(([c, n, orm]) => ({ c, n, orm }));
    const gl = new GLTFLoader(mgr);
    gl.setMeshoptDecoder(MeshoptDecoder);
    const [gltf, levelTex, zBody, zOutfit] = await Promise.all([
      gl.loadAsync('models/zombie.glb'),
      Promise.all(names.map((n) => set('tex/' + n))).then((arr) => Object.fromEntries(arr.map((v, i) => [names[i], v]))),
      zt('body'), zt('outfit'),
    ]);
    $('loadtxt').textContent = 'Baue Level …';
    this.assets = { gltf, levelTex, zTex: { body: zBody, outfit: zOutfit } };
  }

  setupWorld() {
    this.level = new Level(this.assets.levelTex);
    this.level.build(this.scene);
    this.fx = new FX(this.scene, this.level);
    this.fx.blood = this.settings.blood;
    this.ztpl = new ZombieTemplate(this.assets.gltf, this.assets.zTex);
    this.zombies = new ZombieManager(this, this.ztpl, 18);
    this.arsenal = new Arsenal(this.envMap);
    this.proj = new Projectiles(this);
    this.setupComposer();

    this.player = {
      pos: new THREE.Vector3().copy(this.level.playerStart),
      vel: new THREE.Vector3(),
      y: 0, vy: 0, onGround: true,
      yaw: Math.PI, pitch: 0, hp: 100, dead: false, bob: 0, stepAcc: 0,
      shake: 0, deadT: 0, land: 0,
    };
    this.placeCamera();
    this.buildPickups();
  }

  buildPickups() {
    this.pickups = [];
    const mk = {
      health: () => {
        const g = new THREE.Group();
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.26, 0.3), new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 0.4, metalness: 0.1, emissive: 0x112211 }));
        g.add(b);
        const cm = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xff2020, emissiveIntensity: 3 });
        for (const z of [0.152, -0.152]) {
          const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.012), cm); c1.position.z = z;
          const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.2, 0.012), cm); c2.position.z = z;
          g.add(c1, c2);
        }
        return g;
      },
      shells: () => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.16, 0.24), new THREE.MeshStandardMaterial({ color: 0x8a1410, roughness: 0.5 })));
        const sm = new THREE.MeshStandardMaterial({ color: 0xc9a046, metalness: 1, roughness: 0.3 });
        for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.05, 10), sm); s.position.set(-0.13 + i * 0.065, 0.1, 0); g.add(s); }
        return g;
      },
      rockets: () => {
        const g = new THREE.Group();
        const m = new THREE.MeshStandardMaterial({ color: 0x5a5f4a, metalness: 0.6, roughness: 0.35 });
        for (const x of [-0.07, 0.07]) {
          const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.36, 14), m); c.rotation.z = Math.PI / 2; c.position.set(0, 0, x); g.add(c);
          const t = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 14), m); t.rotation.z = -Math.PI / 2; t.position.set(0.25, 0, x); g.add(t);
        }
        const band = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, 0.26), new THREE.MeshStandardMaterial({ color: 0x220900, emissive: 0xff6b35, emissiveIntensity: 1.5 }));
        g.add(band);
        return g;
      },
      grenade: () => {
        const g = new THREE.Group();
        const m = new THREE.MeshStandardMaterial({ color: 0x3a4628, metalness: 0.3, roughness: 0.5 });
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), m); b.scale.set(1, 1.2, 1); g.add(b);
        const t = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.06, 10), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 1, roughness: 0.3 })); t.position.y = 0.15; g.add(t);
        return g;
      },
    };
    const ringGeo = new THREE.RingGeometry(0.3, 0.42, 32);
    ringGeo.rotateX(-Math.PI / 2);
    for (const [type, fn] of Object.entries(mk)) {
      const ringMat = new THREE.MeshBasicMaterial({ color: PICKUP[type].color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
      for (let i = 0; i < 6; i++) {
        const g = fn();
        g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        const holder = new THREE.Group();
        holder.add(g, ring);
        holder.visible = false;
        this.scene.add(holder);
        this.pickups.push({ type, holder, item: g, ring, active: false, t: 0 });
      }
    }
  }

  async precompile() {
    const z = this.zombies.pool[0];
    z.root.visible = true;
    z.root.position.copy(this.level.playerStart).add(new THREE.Vector3(0, 0, -4));
    for (const t of Object.keys(PICKUP)) { const p = this.pickups.find((q) => q.type === t); p.holder.visible = true; p.holder.position.copy(z.root.position); }
    for (const k of ORDER) { this.arsenal.models[k].group.visible = true; this.arsenal.models[k].flash.visible = true; }
    this.arsenal.nade.group.visible = true;
    for (const r of this.proj.rockets) r.g.visible = true;
    for (const n of this.proj.nades) n.g.visible = true;
    const p0 = new THREE.Vector3(this.level.playerStart.x, 1, this.level.playerStart.z - 3);
    this.fx.bloodHit(p0, new THREE.Vector3(0, 0, -1), 0.2);
    this.fx.explosion(p0, null, 0.3);
    try {
      if (this.renderer.compileAsync) {
        await this.renderer.compileAsync(this.scene, this.camera);
        await this.renderer.compileAsync(this.arsenal.scene, this.arsenal.camera);
      }
    } catch (e) { /* egal */ }
    this.composer.render(0.016);
    z.root.visible = false;
    for (const p of this.pickups) p.holder.visible = false;
    for (const k of ORDER) { this.arsenal.models[k].flash.visible = false; }
    this.proj.reset();
    this.arsenal.reset();
    this.fx.reset();
  }

  // ---------------- UI ----------------
  bindUI() {
    const syncOpts = () => {
      for (const s of ['', '2']) {
        $('opt-blood' + s).checked = this.settings.blood;
        $('opt-sound' + s).checked = this.settings.sound;
        $('opt-sens' + s).value = this.settings.sens;
      }
    };
    syncOpts();
    for (const s of ['', '2']) {
      $('opt-blood' + s).addEventListener('change', (e) => { this.settings.blood = e.target.checked; store.set('zw_blood', this.settings.blood); if (this.fx) this.fx.blood = this.settings.blood; syncOpts(); });
      $('opt-sound' + s).addEventListener('change', (e) => { this.settings.sound = e.target.checked; writeSound(this.settings.sound); this.audio.setEnabled(this.settings.sound); syncOpts(); });
      $('opt-sens' + s).addEventListener('input', (e) => { this.settings.sens = parseFloat(e.target.value); store.set('zw_sens', this.settings.sens); syncOpts(); });
    }
    this.audio.enabled = this.settings.sound;
    window.addEventListener('storage', (e) => {
      if (e.key !== 'fps_sound_v1') return;
      this.settings.sound = readSound();
      this.audio.setEnabled(this.settings.sound);
      syncOpts();
    });

    $('btn-start').addEventListener('click', () => this.start());
    $('btn-again').addEventListener('click', () => this.start());
    $('btn-resume').addEventListener('click', () => this.resume());
    $('btn-quit').addEventListener('click', () => this.gameOver());
    $('fsbtn').addEventListener('click', () => this.toggleFullscreen());

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.canvas) return;
      if (this.state === 'play' && !TEST) this.pause();
    });
    document.addEventListener('pointerlockerror', () => { if (this.state === 'play') this.pause(); });
    document.addEventListener('mousemove', (e) => {
      if (this.state !== 'play') return;
      if (document.pointerLockElement !== this.canvas && !TEST) return;
      const s = 0.0022 * this.settings.sens;
      const mx = Math.max(-300, Math.min(300, e.movementX || 0)), my = Math.max(-300, Math.min(300, e.movementY || 0));
      this.player.yaw -= mx * s;
      this.player.pitch = Math.max(-1.45, Math.min(1.45, this.player.pitch - my * s));
      this.look.dx += mx; this.look.dy += my;
    });
    document.addEventListener('mousedown', (e) => {
      if (this.state !== 'play') return;
      if (document.pointerLockElement !== this.canvas && !TEST) { this.lock(); return; }
      if (e.button === 0) { this.mouseDown = true; this.tryFire(); }
      if (e.button === 2) this.throwGrenade();
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouseDown = false; });
    document.addEventListener('wheel', (e) => {
      if (this.state !== 'play') return;
      if (Math.abs(e.deltaY) < 4) return;
      const now = performance.now();
      if (now - (this._wheelT || 0) < 140) return;
      this._wheelT = now;
      if (this.arsenal.cycle(e.deltaY > 0 ? 1 : -1)) this.audio.switchWeapon();
    }, { passive: true });
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (this.state === 'play') {
        if (e.code === 'KeyR') this.reload();
        if (e.code === 'Space') { e.preventDefault(); this.jump(); }
        if (e.code === 'KeyG') this.throwGrenade();
        if (e.code === 'KeyQ') { if (this.arsenal.selectLast()) this.audio.switchWeapon(); }
        const slot = { Digit1: 'pistol', Digit2: 'shotgun', Digit3: 'rocket', Numpad1: 'pistol', Numpad2: 'shotgun', Numpad3: 'rocket' }[e.code];
        if (slot) { if (this.arsenal.select(slot)) this.audio.switchWeapon(); else if (!this.arsenal.hasAmmo(slot)) this.flashSlot(slot); }
        if (['ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
      }
      if (e.code === 'KeyF' && this.state !== 'loading') this.toggleFullscreen();
      if (e.code === 'Enter' && (this.state === 'menu' || this.state === 'over')) this.start();
    });
    document.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    window.addEventListener('blur', () => { this.keys = {}; this.mouseDown = false; });
  }

  toggleFullscreen() {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen({ navigationUI: 'hide' }).then(() => this.state === 'play' && this.lock()).catch(() => {});
    } catch (e) { /* egal */ }
  }

  lock() {
    if (TEST) return;
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) p.catch(() => { try { this.canvas.requestPointerLock(); } catch (e) { /* */ } });
    } catch (e) { try { this.canvas.requestPointerLock(); } catch (e2) { /* */ } }
  }

  showBest() {
    const b = this.best;
    const el = $('best-start');
    if (b.kills > 0) { el.hidden = false; el.textContent = `Rekord: Welle ${b.wave} · ${b.kills} Kills`; }
  }

  // ---------------- Spielablauf ----------------
  start() {
    writeSound(this.settings.sound);
    this.audio.resume();
    this.audio.setEnabled(this.settings.sound);
    this.resetRun();
    this.state = 'play';
    document.body.classList.add('playing');
    ['ov-start', 'ov-over', 'ov-pause'].forEach((id) => { $(id).hidden = true; });
    this.lock();
    this.audio.startAmbience();
    this.audio.loadVoices('voice/', VOICE_IDS);
    this.nextWave();
  }

  resetRun() {
    const p = this.player;
    p.pos.copy(this.level.playerStart);
    p.vel.set(0, 0, 0);
    p.y = 0; p.vy = 0; p.onGround = true;
    p.yaw = Math.PI; p.pitch = 0; p.hp = 100; p.dead = false; p.deadT = 0; p.shake = 0;
    this.zombies.reset();
    this.fx.reset();
    this.proj.reset();
    this.level.resetBarrels();
    this.pickups.forEach((m) => { m.active = false; m.holder.visible = false; });
    this.arsenal.reset();
    this.wave = 0;
    this.kills = 0;
    this.headshots = 0;
    this.damageFx = 0;
    this.flashFx = 0;
    this.quipCD = 0;
    this.lastKillT = -10;
    this.streak = 0;
    this.waveState = 'idle';
    this.updateHUD();
  }

  nextWave() {
    this.wave++;
    const w = this.wave;
    this.waveCfg = {
      total: 6 + (w - 1) * 3,
      maxAlive: Math.min(4 + w, 14),
      hp: 100 + (w - 1) * 12,
      speed: Math.min(1.7, 1.1 + (w - 1) * 0.07),
      dmg: 11 + w,
      interval: Math.max(0.55, 2.2 - w * 0.13),
    };
    this.spawned = 0;
    this.spawnT = 1.6;
    this.waveState = 'fight';
    if (w > 1) {
      // Nachschub zu Beginn jeder Welle
      const a = this.arsenal, s = a.state;
      s.shotgun.reserve = Math.min(DEFS.shotgun.maxReserve, s.shotgun.reserve + 6);
      s.rocket.reserve = Math.min(DEFS.rocket.maxReserve, s.rocket.reserve + 1);
      a.grenades = Math.min(MAX_GRENADES, a.grenades + 1);
      this.level.resetBarrels();
    }
    const wl = w === 1 ? QUIPS.start[0] : pick(QUIPS.wave);
    this.banner(`WELLE ${w}`, w === 1 ? wl.t : wl.t + ' · Nachschub erhalten');
    setTimeout(() => this.state === 'play' && this.quip(wl, true), 900);
    this.audio.waveHorn();
    this.updateHUD();
  }

  banner(big, small, dur = 2.4) {
    $('banner-big').textContent = big;
    $('banner-small').textContent = small || '';
    const b = $('banner');
    b.classList.add('show');
    clearTimeout(this._bannerT);
    this._bannerT = setTimeout(() => b.classList.remove('show'), dur * 1000);
  }

  toast(text) {
    const t = $('toast');
    t.textContent = text;
    t.classList.remove('show');
    void t.offsetWidth;
    t.classList.add('show');
  }

  quip(line, force = false) {
    if (!force && this.quipCD > 0) return;
    this.quipCD = 5.5;
    this.audio.voice(line.id);
    const q = $('quip');
    q.textContent = '„' + line.t + '“';
    q.classList.add('show');
    clearTimeout(this._quipT);
    this._quipT = setTimeout(() => q.classList.remove('show'), 2200);
  }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'pause';
    $('ov-pause').hidden = false;
    this.mouseDown = false;
    this.keys = {};
  }
  resume() {
    if (this.state !== 'pause') return;
    $('ov-pause').hidden = true;
    this.state = 'play';
    this.lock();
  }

  gameOver() {
    this.state = 'over';
    document.body.classList.remove('playing');
    $('ov-pause').hidden = true;
    if (document.pointerLockElement) document.exitPointerLock();
    this.audio.stopAmbience();
    const nb = this.wave > this.best.wave || (this.wave === this.best.wave && this.kills > this.best.kills);
    if (nb && this.kills > 0) { this.best = { wave: this.wave, kills: this.kills }; store.set('zw_best_v2', this.best); }
    $('go-wave').textContent = this.wave;
    $('go-kills').textContent = this.kills;
    $('go-hs').textContent = this.headshots;
    $('go-newbest').hidden = !(nb && this.kills > 0);
    $('go-best').textContent = this.best.kills > 0 ? `Rekord: Welle ${this.best.wave} · ${this.best.kills} Kills` : 'Noch kein Rekord – nächstes Mal!';
    $('ov-over').hidden = false;
    try { parent.postMessage({ type: 'zombiewelle:best', best: this.best }, location.origin); } catch (e) { /* */ }
  }

  // ---------------- Bewegung ----------------
  jump() {
    const p = this.player;
    if (p.dead || !p.onGround) return;
    p.vy = 6.9;
    p.onGround = false;
    this.audio.jump();
  }

  // ---------------- Waffen ----------------
  reload() {
    const k = this.arsenal.startReload();
    if (!k) return;
    if (k === 'pistol') this.audio.reload(DEFS.pistol.reload);
    if (k === 'rocket') this.audio.rocketLoad();
  }

  flashSlot(k) {
    const el = document.querySelector(`.slot[data-w="${k}"]`);
    if (!el) return;
    el.classList.remove('nope'); void el.offsetWidth; el.classList.add('nope');
  }

  tryFire() {
    if (this.player.dead) return;
    const a = this.arsenal;
    const k = a.current;
    const res = a.fire();
    if (res === 'empty') {
      this.audio.dryFire();
      if (a.st.reserve > 0) this.reload();
      else if (k !== 'pistol') { a.cycle(-1); this.audio.switchWeapon(); }
      return;
    }
    if (res !== 'shot') return;
    const d = DEFS[k];
    this.player.pitch = Math.min(1.45, this.player.pitch + d.camKick);
    this.player.yaw += (Math.random() - 0.5) * d.camKick * 0.35;
    this.player.shake = Math.min(1.2, this.player.shake + (k === 'pistol' ? 0.12 : 0.4));
    this.muzzleT = k === 'pistol' ? 0.06 : 0.09;
    if (k === 'pistol') { this.audio.pistol(); this.shootHitscan(d); }
    if (k === 'shotgun') { this.audio.shotgun(); this.shootHitscan(d); }
    if (k === 'rocket') {
      this.audio.rocketFire();
      if (Math.random() < 0.3) this.quip(pick(QUIPS.rocket));
      const cam = this.camera;
      const o = new THREE.Vector3(0.18, -0.12, -0.6).applyMatrix4(cam.matrixWorld);
      const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
      // Ziel: dorthin, wo das Fadenkreuz hinzeigt
      const ray = new THREE.Raycaster(cam.getWorldPosition(new THREE.Vector3()), dir, 0, 80);
      const hit = ray.intersectObjects(this.level.colliders, false)[0];
      const zt = this.zombies.raycast(ray.ray.origin, dir, hit ? hit.distance : 80);
      const target = zt ? zt.point : hit ? hit.point : ray.ray.origin.clone().addScaledVector(dir, 60);
      const rd = target.clone().sub(o).normalize();
      if (target.distanceTo(o) < 1.2) rd.copy(dir);
      this.proj.fireRocket(o, rd);
      this.fx.puff(o.clone().addScaledVector(dir, -0.6), dir.clone().negate(), 0x777777, 1.6);
    }
  }

  shootHitscan(d) {
    const cam = this.camera;
    const ro = new THREE.Vector3();
    cam.getWorldPosition(ro);
    const moving = this.player.vel.length() / 6 + (this.player.onGround ? 0 : 0.6);
    const ray = new THREE.Raycaster();
    const hits = new Map();
    let walls = 0;
    for (let i = 0; i < d.pellets; i++) {
      const spread = d.spread * (d.pellets > 1 ? 1 : 1 + moving * 2.5);
      const a = Math.random() * Math.PI * 2, r = d.pellets > 1 ? Math.sqrt(Math.random()) * spread : (Math.random() - 0.5) * spread;
      const rd = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, -1).normalize().applyQuaternion(cam.quaternion);
      ray.set(ro, rd);
      ray.far = 90;
      const wall = ray.intersectObjects(this.level.colliders, false)[0];
      const maxT = wall ? wall.distance : 90;
      const hit = this.zombies.raycast(ro, rd, maxT);
      if (hit) {
        const e = hits.get(hit.z) || { dmg: 0, n: 0, head: false, point: hit.point, rd, dist: hit.t };
        const mult = hit.zone === 'head' ? 3.2 : hit.zone === 'body' ? 1 : 0.7;
        e.dmg += d.damage * mult * (0.9 + Math.random() * 0.2) * (d.pellets > 1 ? Math.max(0.35, 1 - hit.t / 22) : 1);
        e.n++;
        if (hit.zone === 'head') e.head = true;
        hits.set(hit.z, e);
      } else if (wall) {
        if (wall.object.userData.barrel) { this.damageBarrel(wall.object.userData.barrel, d.damage); }
        const n = wall.face.normal.clone().transformDirection(wall.object.matrixWorld);
        if (walls < 4) this.fx.wallHit(wall.point, n);
        else this.fx.holes.add(wall.point.clone().addScaledVector(n, 0.006), n, 0.07);
        if (walls === 0) this.audio.impactWall(wall.point);
        walls++;
      }
    }
    let anyKill = false;
    for (const [z, e] of hits) {
      const shotgun = d.pellets > 1;
      const close = shotgun && e.dist < 4.5 && e.n >= 6;
      const push = shotgun ? Math.max(0, 6 - e.dist) * 0.9 : 0;
      const killed = this.zombies.damage(z, e.dmg, e.head ? 'head' : 'body', e.point, e.rd, push, close);
      const hs = e.head && !shotgun;
      this.fx.bloodHit(e.point, e.rd, shotgun ? Math.min(2.2, 0.5 + e.n * 0.18) : hs ? 1.2 : 1, (hs || (e.head && shotgun)) && killed);
      if (killed && e.head) this.audio.headshot(e.point); else this.audio.fleshHit(e.point, killed || shotgun);
      if (killed) anyKill = true;
      if (killed && shotgun && !close && Math.random() < 0.3) this.quip(pick(QUIPS.shotgun));
    }
    if (hits.size) this.hitmarker(anyKill);
  }

  throwGrenade() {
    if (this.player.dead) return;
    if (this.arsenal.grenades <= 0) { this.flashSlot('nade'); return; }
    if (this.arsenal.throwGrenade()) { this.audio.pin(); if (Math.random() < 0.45) this.quip(pick(QUIPS.nade)); }
  }

  releaseGrenade() {
    const cam = this.camera;
    const o = new THREE.Vector3(-0.15, -0.05, -0.5).applyMatrix4(cam.matrixWorld);
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    const vel = dir.multiplyScalar(14).add(new THREE.Vector3(0, 3.2, 0)).add(new THREE.Vector3(this.player.vel.x * 0.5, 0, this.player.vel.z * 0.5));
    // nicht in der Wand starten
    const ray = new THREE.Raycaster(cam.getWorldPosition(new THREE.Vector3()), o.clone().sub(cam.position).normalize(), 0, cam.position.distanceTo(o) + 0.1);
    const h = ray.intersectObjects(this.level.colliders, false)[0];
    if (h) o.copy(h.point).addScaledVector(ray.ray.direction, -0.1);
    this.proj.throwGrenade(o, vel);
    this.audio.throwWhoosh();
  }

  // ---------------- Explosionen ----------------
  explode(p, { radius = 5, damage = 150, source = 'rocket', normal = null } = {}) {
    this.fx.explosion(p, normal, source === 'barrel' ? 1.2 : 1);
    this.audio.explosion(p, source === 'barrel' ? 1.15 : 1);
    const bl = this.boomLights.reduce((a, b) => (a.t < b.t ? a : b));
    bl.l.position.copy(p).addScaledVector(normal || new THREE.Vector3(0, 1, 0), 0.6);
    bl.t = 0.45;
    // Kamera
    const dPlayer = this.camera.position.distanceTo(p);
    this.player.shake = Math.min(2.5, this.player.shake + Math.max(0, 2.2 - dPlayer * 0.12));
    this.flashFx = Math.min(1, this.flashFx + Math.max(0, 1 - dPlayer / 18));
    // Zombies
    const ray = new THREE.Raycaster();
    let kills = 0;
    for (const z of this.zombies.alive) {
      const chest = z.root.position.clone().setY(1.0);
      const d = chest.distanceTo(p);
      if (d > radius) continue;
      const dir = chest.clone().sub(p).setY(0);
      if (dir.lengthSq() < 1e-4) dir.set(Math.random() - 0.5, 0, Math.random() - 0.5);
      dir.normalize();
      ray.set(p, chest.clone().sub(p).normalize());
      ray.far = d;
      const block = ray.intersectObjects(this.level.colliders, false)[0];
      if (block && block.distance < d - 0.4 && !block.object.userData.barrel) continue;
      const f = Math.pow(1 - d / radius, 0.7);
      const killed = this.zombies.damage(z, damage * f + 10, 'body', chest, dir, 8 * f + 2, d < radius * 0.55);
      if (killed) kills++;
    }
    if (kills > 0) this.hitmarker(true);
    if (kills >= 2) this.quip(pick(QUIPS.gib), true);
    // Spieler
    const pc = new THREE.Vector3(this.player.pos.x, this.player.y + 1.0, this.player.pos.z);
    const dp = pc.distanceTo(p);
    if (dp < radius && !this.player.dead) {
      const f = 1 - dp / radius;
      this.hurtPlayer(damage * 0.45 * f, p, true);
      const push = pc.clone().sub(p).normalize().multiplyScalar(9 * f);
      this.player.vel.x += push.x; this.player.vel.z += push.z;
      this.player.vy = Math.max(this.player.vy, 4 * f); this.player.onGround = false;
    }
    // Fässer
    for (const b of this.level.barrels) {
      if (!b.alive) continue;
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d < radius + 0.6) this.proj.later(0.12 + Math.random() * 0.2, () => this.damageBarrel(b, 999));
    }
    // Granaten in der Nähe ebenfalls zünden
    for (const n of this.proj.nades) if (n.active && n.g.position.distanceTo(p) < radius * 0.6) n.fuse = Math.min(n.fuse, 0.15);
  }

  damageBarrel(b, dmg) {
    if (!b.alive) return;
    b.hp -= dmg;
    if (b.hp > 0) { this.fx.puff(new THREE.Vector3(b.x, 1, b.z), new THREE.Vector3(0, 1, 0), 0x88ff44, 0.8); return; }
    this.level.removeBarrel(b);
    if (Math.random() < 0.5) this.quip(pick(QUIPS.barrel));
    this.explode(new THREE.Vector3(b.x, 0.7, b.z), { radius: 6.2, damage: 270, source: 'barrel' });
  }

  hitmarker(kill) {
    const h = $('hitmark');
    h.classList.remove('show', 'kill');
    void h.offsetWidth;
    h.classList.add('show');
    if (kill) h.classList.add('kill');
    this.audio.hitmarker();
  }

  onKill(z, zone) {
    this.kills++;
    const hs = zone === 'head';
    if (hs) this.headshots++;
    const now = this.time;
    if (now - this.lastKillT < 1.6) this.streak++; else this.streak = 1;
    this.lastKillT = now;
    const kf = $('killfeed');
    const d = document.createElement('div');
    d.textContent = hs ? '✖ Kopftreffer' : zone === 'gib' ? '✖ Zerfetzt' : '✖ Zombie erledigt';
    if (hs || zone === 'gib') d.className = 'hs';
    kf.prepend(d);
    setTimeout(() => d.remove(), 2500);
    while (kf.children.length > 4) kf.lastChild.remove();
    if (this.streak === 2) this.quip(pick(QUIPS.multi), true);
    else if (this.streak >= 3) this.quip(pick(QUIPS.streak), true);
    else if (zone === 'gib' && Math.random() < 0.5) this.quip(pick(QUIPS.gib));
    else if (hs && Math.random() < 0.6) this.quip(pick(QUIPS.head));
    else if (Math.random() < 0.35) this.quip(pick(QUIPS.kill));
    this.maybeDrop(z.root.position);
    this.updateHUD();
  }

  // ---------------- Pickups ----------------
  maybeDrop(pos) {
    const a = this.arsenal, s = a.state, hp = this.player.hp;
    const w = [];
    if (hp < 80) w.push(['health', hp < 35 ? 4 : 1.5]);
    w.push(['shells', s.shotgun.reserve < 12 ? 3 : 1]);
    w.push(['rockets', s.rocket.reserve < 3 ? 2 : 0.6]);
    w.push(['grenade', a.grenades < 2 ? 1.6 : 0.5]);
    if (Math.random() > 0.3) return;
    let sum = w.reduce((x, y) => x + y[1], 0), r = Math.random() * sum;
    let type = w[0][0];
    for (const [t, v] of w) { r -= v; if (r <= 0) { type = t; break; } }
    const pk = this.pickups.find((q) => !q.active && q.type === type);
    if (!pk) return;
    pk.active = true;
    pk.t = 0;
    pk.holder.visible = true;
    pk.holder.position.set(pos.x, 0, pos.z);
  }

  updatePickups(dt) {
    const p = this.player, a = this.arsenal, s = a.state;
    for (const m of this.pickups) {
      if (!m.active) continue;
      m.t += dt;
      m.item.rotation.y += dt * 1.6;
      m.item.position.y = 0.36 + Math.sin(m.t * 3) * 0.06;
      m.ring.material.opacity = 0.35 + Math.sin(m.t * 5) * 0.15;
      if (m.t > 35) { m.active = false; m.holder.visible = false; continue; }
      if (p.y > 1.3 || Math.hypot(m.holder.position.x - p.pos.x, m.holder.position.z - p.pos.z) > 1.0) continue;
      let took = false;
      if (m.type === 'health' && p.hp < 100) { p.hp = Math.min(100, p.hp + 25); took = true; this.audio.pickup(); }
      if (m.type === 'shells' && s.shotgun.reserve < DEFS.shotgun.maxReserve) { s.shotgun.reserve = Math.min(DEFS.shotgun.maxReserve, s.shotgun.reserve + PICKUP.shells.amount); took = true; }
      if (m.type === 'rockets' && s.rocket.reserve < DEFS.rocket.maxReserve) { s.rocket.reserve = Math.min(DEFS.rocket.maxReserve, s.rocket.reserve + PICKUP.rockets.amount); took = true; }
      if (m.type === 'grenade' && a.grenades < MAX_GRENADES) { a.grenades++; took = true; }
      if (took) {
        if (m.type !== 'health') this.audio.ammo();
        m.active = false; m.holder.visible = false;
        this.toast(PICKUP[m.type].label);
        this.updateHUD();
      }
    }
  }

  hurtPlayer(dmg, from, blast = false) {
    const p = this.player;
    if (p.dead || this.state !== 'play') return;
    p.hp = Math.max(0, p.hp - dmg);
    this.damageFx = Math.min(1, this.damageFx + (blast ? 0.8 : 0.55));
    p.shake = Math.min(1.5, p.shake + 0.6);
    this.audio.hurt();
    const a = Math.atan2(from.x - p.pos.x, from.z - p.pos.z);
    const rel = a - p.yaw + Math.PI;
    const dd = $('dmgdir');
    dd.style.transform = `rotate(${-rel}rad)`;
    dd.style.transition = 'none';
    dd.style.opacity = 1;
    requestAnimationFrame(() => { dd.style.transition = 'opacity .8s'; dd.style.opacity = 0; });
    if (p.hp <= 0) {
      p.dead = true;
      p.deadT = 0;
      this.quip(pick(QUIPS.death), true);
    } else if (p.hp < 30 && Math.random() < 0.3) this.quip(pick(QUIPS.hurt));
    this.updateHUD();
  }

  updateHUD() {
    const p = this.player, a = this.arsenal;
    $('h-wave').textContent = this.wave || 1;
    $('h-kills').textContent = this.kills || 0;
    const left = this.waveCfg ? Math.max(0, this.waveCfg.total - this.spawned) + this.zombies.alive.length : 0;
    $('h-left').textContent = left;
    $('h-hp').textContent = Math.ceil(p.hp);
    $('h-hpbar').style.width = p.hp + '%';
    $('h-hpbox').classList.toggle('low', p.hp < 30);
    const k = a.pending || a.current, st = a.state[k], d = DEFS[k];
    $('h-wname').textContent = d.name;
    $('h-ammo').textContent = a.reloading && k !== 'shotgun' ? '…' : st.ammo;
    $('h-reserve').textContent = st.reserve === Infinity ? '∞' : st.reserve;
    $('h-ammobox').classList.toggle('empty', st.ammo === 0 && !a.reloading);
    $('h-ammobox').classList.toggle('lowammo', st.ammo > 0 && st.ammo <= Math.ceil(d.mag / 4) && !a.reloading && d.mag > 1);
    $('h-nades').textContent = a.grenades;
    document.querySelectorAll('.slot[data-w]').forEach((el) => {
      const w = el.dataset.w;
      if (w === 'nade') { el.classList.toggle('off', a.grenades <= 0); return; }
      el.classList.toggle('on', w === k);
      el.classList.toggle('off', !a.hasAmmo(w));
    });
  }

  // ---------------- Spawns ----------------
  spawnTick(dt) {
    const c = this.waveCfg;
    if (this.waveState === 'fight') {
      this.spawnT -= dt;
      const alive = this.zombies.alive.length;
      if (this.spawnT <= 0 && this.spawned < c.total && alive < c.maxAlive) {
        this.spawnT = c.interval * (0.7 + Math.random() * 0.6);
        const sp = this.pickSpawn();
        if (sp && this.zombies.spawn(sp, c)) { this.spawned++; this.updateHUD(); }
      }
      if (this.spawned >= c.total && alive === 0) {
        this.waveState = 'break';
        this.breakT = 5.5;
        this.banner(`WELLE ${this.wave} ÜBERSTANDEN`, 'Kurz durchatmen …', 3);
        setTimeout(() => this.state === 'play' && this.quip(pick(QUIPS.clear), true), 1200);
        this.audio.waveClear();
        this.player.hp = Math.min(100, this.player.hp + 15);
        this.updateHUD();
      }
    } else if (this.waveState === 'break') {
      this.breakT -= dt;
      if (this.breakT <= 0) this.nextWave();
    }
  }

  pickSpawn() {
    const pp = this.player.pos;
    const list = this.level.spawns
      .map((s) => ({ s, d: s.distanceTo(pp) }))
      .filter((o) => o.d > 10)
      .sort((a, b) => a.d - b.d);
    if (!list.length) return null;
    const pool = list.slice(0, Math.min(4, list.length));
    const s = pick(pool).s;
    return new THREE.Vector3(s.x + (Math.random() - 0.5) * 0.8, 0, s.z + (Math.random() - 0.5) * 0.8);
  }

  // ---------------- Spieler ----------------
  updatePlayer(dt) {
    const p = this.player;
    if (p.dead) {
      p.deadT += dt;
      p.pitch += (0.5 - p.pitch) * Math.min(1, dt * 2);
      if (p.deadT > 2.4 && this.state === 'play') this.gameOver();
      return;
    }
    const k = this.keys;
    const f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    const s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
    const sprint = (k.ShiftLeft || k.ShiftRight) && f > 0;
    const speed = sprint ? 7.6 : 5.0;
    const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw);
    const rx = Math.cos(p.yaw), rz = -Math.sin(p.yaw);
    let wx = fx * f + rx * s, wz = fz * f + rz * s;
    const l = Math.hypot(wx, wz);
    if (l > 0) { wx /= l; wz /= l; }
    const acc = (l > 0 ? 14 : 10) * (p.onGround ? 1 : 0.35);
    p.vel.x += (wx * speed - p.vel.x) * Math.min(1, acc * dt);
    p.vel.z += (wz * speed - p.vel.z) * Math.min(1, acc * dt);
    p.pos.x += p.vel.x * dt;
    p.pos.z += p.vel.z * dt;
    this.level.collide(p.pos, 0.36, p.y);
    // Zombies wegschieben (nicht durchlaufen)
    if (p.y < 1.2) for (const z of this.zombies.alive) {
      const dx = p.pos.x - z.root.position.x, dz = p.pos.z - z.root.position.z;
      const d = Math.hypot(dx, dz), m = 0.75;
      if (d < m && d > 1e-4) { p.pos.x = z.root.position.x + (dx / d) * m; p.pos.z = z.root.position.z + (dz / d) * m; }
    }
    // Springen / Fallen
    const ground = this.level.groundAt(p.pos.x, p.pos.z, 0.36, p.y);
    if (!p.onGround || p.y > ground + 0.01) {
      p.vy -= 19 * dt;
      p.y += p.vy * dt;
      if (p.y <= ground) {
        const fall = -p.vy;
        p.y = ground; p.vy = 0;
        if (!p.onGround) { p.land = Math.min(1, fall / 9); this.audio.land(fall / 7); }
        p.onGround = true;
      } else p.onGround = false;
    } else { p.y = ground; p.vy = 0; p.onGround = true; }
    p.land = Math.max(0, p.land - dt * 4);

    const v = Math.hypot(p.vel.x, p.vel.z);
    this.moving = p.onGround ? Math.min(1, v / 5) : 0;
    this.sprinting = sprint;
    if (p.onGround) {
      p.bob += v * dt * 1.25;
      p.stepAcc += v * dt;
      if (p.stepAcc > (sprint ? 2.1 : 1.75)) { p.stepAcc = 0; this.audio.step(sprint ? 0.16 : 0.11); }
    }
    this.updatePickups(dt);
  }

  placeCamera() {
    const p = this.player;
    const cam = this.camera;
    const bobY = Math.abs(Math.sin(p.bob * Math.PI * 0.5)) * 0.055 * (this.moving || 0);
    const bobX = Math.sin(p.bob * Math.PI * 0.25) * 0.03 * (this.moving || 0);
    let eye = p.y + 1.62 - (p.land || 0) * 0.12;
    if (p.dead) eye = Math.max(p.y + 0.35, p.y + 1.62 - p.deadT * 1.4);
    cam.position.set(p.pos.x + Math.cos(p.yaw) * bobX, eye + bobY, p.pos.z - Math.sin(p.yaw) * bobX);
    const sh = p.shake * p.shake;
    cam.rotation.order = 'YXZ';
    cam.rotation.y = p.yaw + (Math.random() - 0.5) * sh * 0.03;
    cam.rotation.x = p.pitch + (Math.random() - 0.5) * sh * 0.03;
    cam.rotation.z = (p.dead ? Math.min(0.5, p.deadT * 0.4) : 0) + Math.sin(p.bob * Math.PI * 0.25) * 0.004 * (this.moving || 0);
  }

  // ---------------- Hauptschleife ----------------
  frame() {
    const now = performance.now() / 1000;
    let dt = this._last ? now - this._last : 0.016;
    this._last = now;
    dt = Math.min(dt, 0.05);
    if (this.frozen) return;
    this.perf(dt);
    this.update(dt);
    this.composer.render(dt);
  }

  // Test-Helfer: Spielzeit ohne Rendern vorspulen
  sim(sec, dt = 1 / 60) {
    for (let t = 0; t < sec; t += dt) this.update(dt);
    this.composer.render(dt);
  }

  update(dt) {
    this.time += dt;
    const playing = this.state === 'play';
    if (playing) {
      this.updatePlayer(dt);
      this.spawnTick(dt);
      this.zombies.update(dt, this.player);
      this.proj.update(dt);
      const a = this.arsenal;
      if (this.mouseDown && a.cooldown <= 0 && !a.reloading) {
        // gehaltene Taste: Dauerfeuer (Pistole langsamer)
        this._holdT = (this._holdT || 0) + dt;
        const hold = a.current === 'pistol' ? 0.26 : 0.05;
        if (this._holdT > hold) { this._holdT = 0; this.tryFire(); }
      } else this._holdT = 0;
      // automatisch nachladen, wenn leer
      if (a.st.ammo === 0 && a.st.reserve > 0 && !a.reloading && a.pumpT <= 0 && a.cooldown <= 0 && !a.busy) this.reload();
      this.quipCD -= dt;
      this.player.shake = Math.max(0, this.player.shake - dt * 3);
      this.damageFx = Math.max(0, this.damageFx - dt * 1.3);
      this.flashFx = Math.max(0, this.flashFx - dt * 3);
      if (this._hudT === undefined || (this._hudT -= dt) < 0) { this._hudT = 0.1; this.updateHUD(); }
    } else if (this.state === 'menu') {
      this.player.yaw += dt * 0.08;
      this.player.pitch = -0.05;
    }
    this.placeCamera();
    this.level.update(this.time, this.camera.position);
    this.fx.update(playing || this.state === 'over' ? dt : dt * 0.3);

    // Lichter
    if (this.muzzleT > 0) {
      this.muzzleT -= dt;
      const mp = new THREE.Vector3(0.25, -0.1, -0.8).applyMatrix4(this.camera.matrixWorld);
      this.muzzleLight.position.copy(mp);
      this.muzzleLight.intensity = (this.arsenal.current === 'pistol' ? 9 : 16) * Math.max(0, this.muzzleT / 0.06);
    } else this.muzzleLight.intensity = 0;
    for (const b of this.boomLights) {
      if (b.t > 0) { b.t -= dt; b.l.intensity = 90 * Math.max(0, b.t / 0.45) ** 1.5; } else b.l.intensity = 0;
    }

    // Waffe
    let light = this.level.lightAt(this.camera.position) * 0.06 + (this.muzzleT > 0 ? 1.5 : 0) + this.flashFx * 2;
    this.fx.setLight(Math.min(1.5, light));
    const ev = this.events;
    ev.length = 0;
    this.arsenal.update(dt, {
      moving: playing ? this.moving || 0 : 0, sprint: this.sprinting, bobPhase: this.player.bob * Math.PI * 0.5,
      lookDX: this.look.dx, lookDY: this.look.dy, light, time: this.time,
    }, ev);
    for (const e of ev) {
      if (e === 'pumpBack') this.audio.pump(true);
      if (e === 'pumpFwd') this.audio.pump(false);
      if (e === 'shellIn') this.audio.shellIn();
      if (e === 'nadeRelease') this.releaseGrenade();
      if (e === 'switched') this.updateHUD();
    }
    this.look.dx = 0; this.look.dy = 0;
    this.arsenal.rig.visible = this.state !== 'menu' && !this.player.dead;

    if (this.audio.ready) {
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
      this.audio.setListener(this.camera.position, fwd, up);
    }

    const a = this.arsenal;
    const base = a.current === 'shotgun' ? 14 : a.current === 'rocket' ? 9 : 5;
    const gap = base + (this.moving || 0) * 6 + (a.cooldown > 0.08 ? 4 : 0) + (this.player.onGround ? 0 : 6);
    $('crosshair').style.setProperty('--gap', gap.toFixed(1) + 'px');

    const u = this.post.uniforms;
    u.uTime.value = this.time;
    u.uDamage.value = this.damageFx;
    u.uFlash.value = this.flashFx || 0;
    u.uLow.value = this.player.hp < 35 && !this.player.dead ? (35 - this.player.hp) / 35 : this.player.dead ? 1 : 0;
  }

  perf(dt) {
    if (this.state !== 'play') return;
    const ft = this.frameTimes;
    ft.push(dt);
    if (ft.length < 90) return;
    const avg = ft.reduce((x, y) => x + y, 0) / ft.length;
    ft.length = 0;
    let s = this.dynScale;
    if (avg > 1 / 45) s = Math.max(0.55, s - 0.12);
    else if (avg < 1 / 75) s = Math.min(1, s + 0.06);
    if (s !== this.dynScale) { this.dynScale = s; this.resize(); }
  }
}

const game = new Game();
game.init().catch((e) => {
  console.error(e);
  $('loadtxt').textContent = 'Fehler beim Laden – bitte Seite neu laden.';
});
