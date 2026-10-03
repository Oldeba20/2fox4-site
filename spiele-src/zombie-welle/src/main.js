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
import { Pistol } from './weapon.js';
import { AudioEngine } from './audio.js';

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

// ---------------- Sprüche ----------------
const QUIPS = {
  kill: [
    'Feierabend.', 'Nächster!', '404 – Zombie nicht gefunden.', 'Ab in den Papierkorb.', 'Deine Sitzung ist abgelaufen.',
    'Weiterleitung ins Jenseits.', 'Gelöscht. Ohne Backup.', 'Und tschüss.', 'Abgemeldet.', 'Bounce-Rate: hundert Prozent.',
    'Keine Rückerstattung.', 'Der Nächste bitte.', 'Cache geleert.',
  ],
  head: ['Kopfsache.', 'Volltreffer im Oberstübchen.', 'Hirn? Brauchst du nicht mehr.', 'Kopf hoch! … ach nee.', 'Da war wohl nicht viel drin.'],
  multi: ['Doppelt hält besser!', 'Zwei auf einen Streich.'],
  streak: ['Das ist ein Massaker!', 'Ich bin warmgelaufen.', 'Wer will noch mal?'],
  hurt: ['Das gibt Abzüge in der B-Note.', 'Autsch. Okay. Jetzt bin ich sauer.'],
  wave: ['Da kommen noch mehr.', 'Es wird voller.', 'Pause vorbei.'],
};
const pick = (a) => a[(Math.random() * a.length) | 0];

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

    // Taschenlampe
    const fl = new THREE.SpotLight(0xfff1dc, 26, 30, 0.48, 0.6, 1.3);
    fl.position.set(0.25, -0.15, 0.1);
    this.camera.add(fl);
    fl.target.position.set(0, -0.2, -6);
    this.camera.add(fl.target);
    this.flashlight = fl;
    // Mündungslicht in der Welt
    this.muzzleLight = new THREE.PointLight(0xffa040, 0, 7, 1.8);
    this.scene.add(this.muzzleLight);

    window.addEventListener('resize', () => this.resize());
  }

  setupComposer() {
    const r = this.renderer;
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
    const c = (this.composer = new EffectComposer(r, rt));
    c.addPass(new RenderPass(this.scene, this.camera));
    const wp = new RenderPass(this.pistol.scene, this.pistol.camera);
    wp.clear = false;
    wp.clearDepth = true;
    c.addPass(wp);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.55, 0.55, 0.92);
    c.addPass(this.bloom);
    this.post = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null }, uTime: { value: 0 }, uDamage: { value: 0 }, uLow: { value: 0 }, uAspect: { value: 1.7 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float uTime, uDamage, uLow, uAspect; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
        void main(){
          vec2 d = vUv - 0.5;
          float r2 = dot(d*vec2(uAspect,1.0), d*vec2(uAspect,1.0));
          float ca = 0.0012 + uDamage*0.008;
          vec3 col;
          col.r = texture2D(tDiffuse, vUv + d*ca).r;
          col.g = texture2D(tDiffuse, vUv).g;
          col.b = texture2D(tDiffuse, vUv - d*ca).b;
          // Schadensrand
          float edge = smoothstep(0.25, 1.1, r2);
          col = mix(col, vec3(0.55,0.0,0.0) * (0.6+col.r), clamp(uDamage*edge*1.6, 0.0, 0.85));
          // wenig Leben: entsättigen + pulsieren
          float lum = dot(col, vec3(0.299,0.587,0.114));
          float pulse = 0.5 + 0.5*sin(uTime*6.0);
          col = mix(col, vec3(lum)*vec3(1.1,0.75,0.75), uLow*0.55);
          col = mix(col, col*vec3(1.6,0.3,0.3), uLow*edge*pulse*0.6);
          // Vignette + Körnung
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
    if (this.pistol) this.pistol.setAspect(w / h);
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
    mgr.onProgress = (url, a, b) => {
      $('loadbar').style.width = Math.round((a / b) * 100) + '%';
    };
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
    this.pistol = new Pistol(this.envMap);
    this.setupComposer();

    this.player = {
      pos: new THREE.Vector3().copy(this.level.playerStart),
      vel: new THREE.Vector3(),
      yaw: Math.PI, pitch: 0, hp: 100, dead: false, bob: 0, stepAcc: 0,
      shake: 0, deadT: 0,
    };
    this.placeCamera();

    // Medikits
    this.medkits = [];
    const mg = new THREE.BoxGeometry(0.42, 0.26, 0.3);
    const mm = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 0.4, metalness: 0.1, emissive: 0x112211 });
    const crossM = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xff2020, emissiveIntensity: 3 });
    for (let i = 0; i < 6; i++) {
      const g = new THREE.Group();
      const b = new THREE.Mesh(mg, mm);
      b.castShadow = true;
      g.add(b);
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.012), crossM); c1.position.set(0, 0, 0.152);
      const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.2, 0.012), crossM); c2.position.set(0, 0, 0.152);
      const c3 = c1.clone(); c3.position.z = -0.152;
      const c4 = c2.clone(); c4.position.z = -0.152;
      g.add(c1, c2, c3, c4);
      g.visible = false;
      this.scene.add(g);
      this.medkits.push({ g, active: false, t: 0 });
    }
  }

  async precompile() {
    // alle Shader vorab bauen, damit es im Spiel nicht ruckelt
    const z = this.zombies.pool[0];
    z.root.visible = true;
    z.root.position.copy(this.level.playerStart).add(new THREE.Vector3(0, 0, -4));
    this.medkits[0].g.visible = true;
    this.pistol.flash.visible = true;
    this.fx.bloodHit(new THREE.Vector3(this.level.playerStart.x, 1, this.level.playerStart.z - 3), new THREE.Vector3(0, 0, -1), 0.2);
    try {
      if (this.renderer.compileAsync) {
        await this.renderer.compileAsync(this.scene, this.camera);
        await this.renderer.compileAsync(this.pistol.scene, this.pistol.camera);
      }
    } catch (e) { /* egal */ }
    this.composer.render(0.016);
    z.root.visible = false;
    this.medkits[0].g.visible = false;
    this.pistol.flash.visible = false;
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
    document.addEventListener('pointerlockerror', () => {
      // Fallback: ohne Sperre weiterspielen ist nicht sinnvoll -> Hinweis im Pausenmenü
      if (this.state === 'play') this.pause();
    });
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
    });
    document.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouseDown = false; });
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (this.state === 'play') {
        if (e.code === 'KeyR') this.reload();
        if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
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
    this.nextWave();
  }

  resetRun() {
    const p = this.player;
    p.pos.copy(this.level.playerStart);
    p.vel.set(0, 0, 0);
    p.yaw = Math.PI; p.pitch = 0; p.hp = 100; p.dead = false; p.deadT = 0; p.shake = 0;
    this.zombies.reset();
    this.fx.reset();
    this.medkits.forEach((m) => { m.active = false; m.g.visible = false; });
    this.pistol.ammo = this.pistol.magSize;
    this.pistol.reloadT = 0;
    this.pistol.raise = 1;
    this.wave = 0;
    this.kills = 0;
    this.headshots = 0;
    this.damageFx = 0;
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
    this.banner(`WELLE ${w}`, w === 1 ? 'Sie kommen …' : pick(QUIPS.wave));
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

  quip(text, force = false) {
    if (!force && this.quipCD > 0) return;
    this.quipCD = 5.5;
    const q = $('quip');
    q.textContent = '„' + text + '“';
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

  // ---------------- Waffe ----------------
  reload() {
    if (this.pistol.startReload()) this.audio.reload(this.pistol.reloadDur);
  }

  tryFire() {
    if (this.player.dead) return;
    const res = this.pistol.fire();
    if (res === 'empty') { this.audio.dryFire(); this.reload(); return; }
    if (res !== 'shot') return;
    this.audio.pistol();
    this.player.pitch = Math.min(1.45, this.player.pitch + 0.012);
    this.player.yaw += (Math.random() - 0.5) * 0.004;
    this.player.shake = Math.min(1, this.player.shake + 0.12);
    this.muzzleT = 0.06;
    this.shoot();
    if (this.pistol.ammo === 0) setTimeout(() => this.state === 'play' && this.reload(), 220);
  }

  shoot() {
    const cam = this.camera;
    const ro = new THREE.Vector3();
    cam.getWorldPosition(ro);
    const moving = this.player.vel.length() / 6;
    const spread = this.pistol.spread * (1 + moving * 2.5);
    const rd = new THREE.Vector3((Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread, -1).normalize().applyQuaternion(cam.quaternion);

    // Wand
    const ray = new THREE.Raycaster(ro, rd, 0, 90);
    const wall = ray.intersectObjects(this.level.colliders, false)[0];
    const maxT = wall ? wall.distance : 90;
    const hit = this.zombies.raycast(ro, rd, maxT);
    if (hit) {
      const z = hit.z;
      const mult = hit.zone === 'head' ? 3.2 : hit.zone === 'body' ? 1 : 0.7;
      const dmg = this.pistol.damage * mult * (0.9 + Math.random() * 0.2);
      const killed = this.zombies.damage(z, dmg, hit.zone, hit.point, rd);
      const hs = hit.zone === 'head';
      this.fx.bloodHit(hit.point, rd, hs ? 1.2 : 1, hs && killed);
      if (hs && killed) this.audio.headshot(hit.point); else this.audio.fleshHit(hit.point, killed);
      this.hitmarker(killed);
    } else if (wall) {
      const n = wall.face.normal.clone().transformDirection(wall.object.matrixWorld);
      this.fx.wallHit(wall.point, n);
      this.audio.impactWall(wall.point);
    }
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
    // Killfeed
    const kf = $('killfeed');
    const d = document.createElement('div');
    d.textContent = hs ? '✖ Kopftreffer' : '✖ Zombie erledigt';
    if (hs) d.className = 'hs';
    kf.prepend(d);
    setTimeout(() => d.remove(), 2500);
    while (kf.children.length > 4) kf.lastChild.remove();
    // Sprüche
    if (this.streak === 2) this.quip(pick(QUIPS.multi), true);
    else if (this.streak >= 3) this.quip(pick(QUIPS.streak), true);
    else if (hs && Math.random() < 0.6) this.quip(pick(QUIPS.head));
    else if (Math.random() < 0.4) this.quip(pick(QUIPS.kill));
    // Medikit
    if (Math.random() < 0.13 || (this.player.hp < 35 && Math.random() < 0.35)) this.dropMedkit(z.root.position);
    this.updateHUD();
  }

  dropMedkit(p) {
    const m = this.medkits.find((q) => !q.active);
    if (!m) return;
    m.active = true;
    m.t = 0;
    m.g.visible = true;
    m.g.position.set(p.x, 0.3, p.z);
  }

  hurtPlayer(dmg, from) {
    const p = this.player;
    if (p.dead || this.state !== 'play') return;
    p.hp = Math.max(0, p.hp - dmg);
    this.damageFx = Math.min(1, this.damageFx + 0.55);
    p.shake = Math.min(1.5, p.shake + 0.6);
    this.audio.hurt();
    // Richtungsanzeige
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
      this.quip(pick(['Das … war … unprofessionell.', 'Ich komme wieder. Als Zombie.']), true);
    } else if (p.hp < 30 && Math.random() < 0.3) this.quip(pick(QUIPS.hurt));
    this.updateHUD();
  }

  updateHUD() {
    const p = this.player;
    $('h-wave').textContent = this.wave || 1;
    $('h-kills').textContent = this.kills || 0;
    const left = this.waveCfg ? Math.max(0, this.waveCfg.total - this.spawned) + this.zombies.alive.length : 0;
    $('h-left').textContent = left;
    $('h-hp').textContent = Math.ceil(p.hp);
    $('h-hpbar').style.width = p.hp + '%';
    $('h-hpbox').classList.toggle('low', p.hp < 30);
    $('h-ammo').textContent = this.pistol.reloading ? '…' : this.pistol.ammo;
    $('h-ammobox').classList.toggle('empty', this.pistol.ammo === 0 && !this.pistol.reloading);
    $('h-ammobox').classList.toggle('lowammo', this.pistol.ammo > 0 && this.pistol.ammo <= 3 && !this.pistol.reloading);
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
      .filter((o) => o.d > 9)
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
    const acc = l > 0 ? 14 : 10;
    p.vel.x += (wx * speed - p.vel.x) * Math.min(1, acc * dt);
    p.vel.z += (wz * speed - p.vel.z) * Math.min(1, acc * dt);
    p.pos.x += p.vel.x * dt;
    p.pos.z += p.vel.z * dt;
    this.level.collide(p.pos, 0.36);
    // Zombies wegschieben (nicht durchlaufen)
    for (const z of this.zombies.alive) {
      const dx = p.pos.x - z.root.position.x, dz = p.pos.z - z.root.position.z;
      const d = Math.hypot(dx, dz), m = 0.75;
      if (d < m && d > 1e-4) { p.pos.x = z.root.position.x + (dx / d) * m; p.pos.z = z.root.position.z + (dz / d) * m; }
    }
    const v = Math.hypot(p.vel.x, p.vel.z);
    this.moving = Math.min(1, v / 5);
    this.sprinting = sprint;
    p.bob += v * dt * 1.25;
    p.stepAcc += v * dt;
    if (p.stepAcc > (sprint ? 2.1 : 1.75)) { p.stepAcc = 0; this.audio.step(sprint ? 0.16 : 0.11); }

    // Medikits
    for (const m of this.medkits) {
      if (!m.active) continue;
      m.t += dt;
      m.g.rotation.y += dt * 1.6;
      m.g.position.y = 0.32 + Math.sin(m.t * 3) * 0.06;
      if (m.t > 30) { m.active = false; m.g.visible = false; continue; }
      if (p.hp < 100 && Math.hypot(m.g.position.x - p.pos.x, m.g.position.z - p.pos.z) < 1.0) {
        p.hp = Math.min(100, p.hp + 25);
        m.active = false; m.g.visible = false;
        this.audio.pickup();
        this.banner('', '+25 Leben', 1.0);
        this.updateHUD();
      }
    }
  }

  placeCamera() {
    const p = this.player;
    const cam = this.camera;
    const bobY = Math.abs(Math.sin(p.bob * Math.PI * 0.5)) * 0.055 * (this.moving || 0);
    const bobX = Math.sin(p.bob * Math.PI * 0.25) * 0.03 * (this.moving || 0);
    let eye = 1.62;
    if (p.dead) eye = Math.max(0.35, 1.62 - p.deadT * 1.4);
    cam.position.set(p.pos.x + Math.cos(p.yaw) * bobX, eye + bobY, p.pos.z - Math.sin(p.yaw) * bobX);
    const sh = p.shake * p.shake;
    cam.rotation.set(0, 0, 0, 'YXZ');
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
      if (this.mouseDown && this.pistol.cooldown <= 0 && !this.pistol.reloading) {
        // gehaltene Taste: langsameres Dauerfeuer
        this._holdT = (this._holdT || 0) + dt;
        if (this._holdT > 0.26) { this._holdT = 0; this.tryFire(); }
      } else this._holdT = 0;
      this.quipCD -= dt;
      this.player.shake = Math.max(0, this.player.shake - dt * 3);
      this.damageFx = Math.max(0, this.damageFx - dt * 1.3);
      if (this._hudT === undefined || (this._hudT -= dt) < 0) { this._hudT = 0.1; this.updateHUD(); }
    } else if (this.state === 'menu') {
      // langsamer Kameraschwenk im Menü
      this.player.yaw += dt * 0.08;
      this.player.pitch = -0.05;
    }
    this.placeCamera();
    this.level.update(this.time, this.camera.position);
    this.fx.update(playing || this.state === 'over' ? dt : dt * 0.3);

    // Mündungslicht
    if (this.muzzleT > 0) {
      this.muzzleT -= dt;
      const mp = new THREE.Vector3(0.25, -0.1, -0.8).applyMatrix4(this.camera.matrixWorld);
      this.muzzleLight.position.copy(mp);
      this.muzzleLight.intensity = 9 * Math.max(0, this.muzzleT / 0.06);
    } else this.muzzleLight.intensity = 0;

    // Waffe
    const light = this.level.lightAt(this.camera.position) * 0.06 + (this.muzzleT > 0 ? 1.5 : 0);
    this.fx.setLight(Math.min(1.5, light));
    this.pistol.update(dt, {
      moving: playing ? this.moving || 0 : 0, sprint: this.sprinting, bobPhase: this.player.bob * Math.PI * 0.5,
      lookDX: this.look.dx, lookDY: this.look.dy, light, time: this.time,
    });
    this.look.dx = 0; this.look.dy = 0;
    this.pistol.gun.visible = this.state !== 'menu' && !this.player.dead;

    // Hörer
    if (this.audio.ready) {
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
      this.audio.setListener(this.camera.position, fwd, up);
    }

    // Fadenkreuz-Spreizung
    const gap = 5 + (this.moving || 0) * 6 + (this.pistol.cooldown > 0.08 ? 4 : 0);
    $('crosshair').style.setProperty('--gap', gap.toFixed(1) + 'px');

    const u = this.post.uniforms;
    u.uTime.value = this.time;
    u.uDamage.value = this.damageFx;
    u.uLow.value = this.player.hp < 35 && !this.player.dead ? (35 - this.player.hp) / 35 : this.player.dead ? 1 : 0;
  }

  // Dynamische Auflösung
  perf(dt) {
    if (this.state !== 'play') return;
    const ft = this.frameTimes;
    ft.push(dt);
    if (ft.length < 90) return;
    const avg = ft.reduce((a, b) => a + b, 0) / ft.length;
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
