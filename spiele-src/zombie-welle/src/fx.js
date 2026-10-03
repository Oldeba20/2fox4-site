import * as THREE from 'three';

// ---------------- Texturen (Canvas) ----------------
function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeSplatTexture(seed, kind = 'floor') {
  const S = 256;
  const [c, g] = canvas(S);
  const r = rng(seed);
  g.clearRect(0, 0, S, S);
  const col = (a) => `rgba(${90 + r() * 40 | 0},${r() * 6 | 0},${r() * 6 | 0},${a})`;
  const blobs = kind === 'drip' ? 3 : 14;
  for (let i = 0; i < blobs; i++) {
    const a = r() * Math.PI * 2, d = r() * (kind === 'drip' ? 10 : 34);
    const x = S / 2 + Math.cos(a) * d, y = S / 2 + Math.sin(a) * d;
    const rad = (kind === 'drip' ? 14 : 22) + r() * (kind === 'drip' ? 14 : 34);
    const gr = g.createRadialGradient(x, y, rad * 0.2, x, y, rad);
    gr.addColorStop(0, col(0.95)); gr.addColorStop(0.75, col(0.9)); gr.addColorStop(1, col(0));
    g.fillStyle = gr;
    g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
  }
  const rays = kind === 'drip' ? 4 : 16;
  for (let i = 0; i < rays; i++) {
    const a = r() * Math.PI * 2;
    const len = 40 + r() * 80;
    let x = S / 2, y = S / 2;
    g.strokeStyle = col(0.85);
    for (let k = 0; k < 6; k++) {
      const nx = S / 2 + Math.cos(a) * len * (k + 1) / 6, ny = S / 2 + Math.sin(a) * len * (k + 1) / 6;
      g.lineWidth = Math.max(0.5, (6 - k) * (0.6 + r()));
      g.beginPath(); g.moveTo(x, y); g.lineTo(nx, ny); g.stroke();
      x = nx; y = ny;
    }
    for (let k = 0; k < 3; k++) {
      const dd = len + 6 + r() * 30;
      g.fillStyle = col(0.9);
      g.beginPath(); g.arc(S / 2 + Math.cos(a + (r() - 0.5) * 0.2) * dd, S / 2 + Math.sin(a + (r() - 0.5) * 0.2) * dd, 1 + r() * 4, 0, Math.PI * 2); g.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function makeWallSplatTexture(seed) {
  const S = 256;
  const [c, g] = canvas(S);
  const r = rng(seed);
  const col = (a) => `rgba(${95 + r() * 35 | 0},${r() * 5 | 0},${r() * 5 | 0},${a})`;
  for (let i = 0; i < 10; i++) {
    const x = S / 2 + (r() - 0.5) * 60, y = S * 0.38 + (r() - 0.5) * 50, rad = 12 + r() * 26;
    const gr = g.createRadialGradient(x, y, rad * 0.25, x, y, rad);
    gr.addColorStop(0, col(0.95)); gr.addColorStop(1, col(0));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 40; i++) {
    const a = r() * Math.PI * 2, d = 30 + r() * 90;
    g.fillStyle = col(0.9);
    g.beginPath(); g.arc(S / 2 + Math.cos(a) * d, S * 0.38 + Math.sin(a) * d * 0.8, 1 + r() * 3.5, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 6; i++) {
    const x = S / 2 + (r() - 0.5) * 70, y0 = S * 0.4, len = 40 + r() * 110, w = 2 + r() * 4;
    const gr = g.createLinearGradient(0, y0, 0, y0 + len);
    gr.addColorStop(0, col(0.9)); gr.addColorStop(0.85, col(0.8)); gr.addColorStop(1, col(0));
    g.fillStyle = gr; g.fillRect(x - w / 2, y0, w, len);
    g.beginPath(); g.arc(x, y0 + len * 0.95, w * 0.8, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeHoleTexture() {
  const S = 64;
  const [c, g] = canvas(S);
  const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(0.25, 'rgba(10,8,6,0.95)'); gr.addColorStop(0.45, 'rgba(40,34,30,0.6)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  g.strokeStyle = 'rgba(0,0,0,0.6)';
  for (let i = 0; i < 7; i++) {
    const a = Math.random() * Math.PI * 2;
    g.lineWidth = 1; g.beginPath(); g.moveTo(32, 32); g.lineTo(32 + Math.cos(a) * (10 + Math.random() * 14), 32 + Math.sin(a) * (10 + Math.random() * 14)); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makeSoftDot() {
  const S = 64;
  const [c, g] = canvas(S);
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  return new THREE.CanvasTexture(c);
}

function makeSmokeTexture() {
  const S = 128;
  const [c, g] = canvas(S);
  for (let i = 0; i < 26; i++) {
    const x = 64 + (Math.random() - 0.5) * 50, y = 64 + (Math.random() - 0.5) * 50, rr = 16 + Math.random() * 26;
    const gr = g.createRadialGradient(x, y, 0, x, y, rr);
    gr.addColorStop(0, 'rgba(255,255,255,0.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  }
  return new THREE.CanvasTexture(c);
}

// ---------------- Partikel ----------------
const particleVS = `
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main(){
  vAlpha = alpha; vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * uScale / max(0.05, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const particleFS = `
uniform sampler2D uMap;
uniform float uLight;
uniform float uOpacity;
varying float vAlpha;
varying vec3 vColor;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * uLight, t.a * vAlpha * uOpacity);
  #include <colorspace_fragment>
}`;

class ParticlePool {
  constructor(n, { texture, additive = false, light = 1, gravity = -9.8, drag = 0.4, opacity = 1 }) {
    this.n = n;
    this.geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.size = new Float32Array(n);
    this.alpha = new Float32Array(n);
    this.col = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.maxLife = new Float32Array(n);
    this.grow = new Float32Array(n);
    this.flags = new Uint8Array(n);
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: texture }, uScale: { value: 300 }, uLight: { value: light }, uOpacity: { value: opacity } },
      vertexShader: particleVS, fragmentShader: particleFS,
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    this.cursor = 0;
    this.gravity = gravity;
    this.drag = drag;
    this.onLand = null;
    this.live = 0;
  }
  emit(p, v, size, life, color, grow = 0, flag = 0) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.n;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.alpha[i] = 1; this.grow[i] = grow;
    this.col[i * 3] = color.r; this.col[i * 3 + 1] = color.g; this.col[i * 3 + 2] = color.b;
    this.flags[i] = flag;
    this.live = 1;
  }
  update(dt) {
    if (!this.live) return;
    const g = this.gravity, dr = Math.exp(-this.drag * dt);
    let any = 0;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      any = 1;
      this.life[i] -= dt;
      const k = i * 3;
      this.vel[k + 1] += g * dt;
      this.vel[k] *= dr; this.vel[k + 1] *= dr; this.vel[k + 2] *= dr;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      this.size[i] += this.grow[i] * dt;
      if (this.pos[k + 1] < 0.01 && this.gravity < 0) {
        this.pos[k + 1] = 0.01;
        if (this.flags[i] && this.onLand) this.onLand(this.pos[k], this.pos[k + 2], this.size[i]);
        this.life[i] = 0;
      }
      const f = this.life[i] / this.maxLife[i];
      this.alpha[i] = Math.min(1, f * 3);
    }
    this.live = any;
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
    this.geo.attributes.alpha.needsUpdate = true;
    this.geo.attributes.pcolor.needsUpdate = true;
  }
  clear() { this.life.fill(0); this.alpha.fill(0); this.live = 1; }
}

// ---------------- Decals ----------------
class DecalSet {
  constructor(textures, max, { color = 0xffffff, roughness = 0.25, metalness = 0.0, opacity = 1, wet = true, renderOrder = 2 } = {}) {
    this.meshes = textures.map((t) => {
      const m = new THREE.MeshStandardMaterial({
        map: t, transparent: true, depthWrite: false, color, roughness, metalness, opacity,
        polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
      });
      if (wet) m.envMapIntensity = 1.4;
      const g = new THREE.PlaneGeometry(1, 1);
      const im = new THREE.InstancedMesh(g, m, max);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.count = 0;
      im.frustumCulled = false;
      im.renderOrder = renderOrder;
      im.receiveShadow = true;
      return { im, n: 0, cursor: 0, max, grow: [] };
    });
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._qr = new THREE.Quaternion();
    this._s = new THREE.Vector3();
  }
  add(pos, normal, size, rot = Math.random() * Math.PI * 2, variant = -1, growTo = 0) {
    const set = this.meshes[variant >= 0 ? variant : (Math.random() * this.meshes.length) | 0];
    const i = set.cursor; set.cursor = (set.cursor + 1) % set.max;
    set.n = Math.min(set.n + 1, set.max);
    set.im.count = set.n;
    this._q.setFromUnitVectors(Z, normal);
    this._qr.setFromAxisAngle(Z, rot);
    this._q.multiply(this._qr);
    const s = growTo ? size * 0.15 : size;
    this._s.set(s, s, s);
    this._m.compose(pos, this._q, this._s);
    set.im.setMatrixAt(i, this._m);
    set.im.instanceMatrix.needsUpdate = true;
    if (growTo) set.grow.push({ i, pos: pos.clone(), q: this._q.clone(), s, target: growTo, speed: growTo * 0.18 });
    return set;
  }
  update(dt) {
    for (const set of this.meshes) {
      if (!set.grow.length) continue;
      for (let k = set.grow.length - 1; k >= 0; k--) {
        const gr = set.grow[k];
        gr.s = Math.min(gr.target, gr.s + gr.speed * dt);
        gr.speed *= Math.exp(-0.35 * dt);
        this._s.set(gr.s, gr.s, gr.s);
        this._m.compose(gr.pos, gr.q, this._s);
        set.im.setMatrixAt(gr.i, this._m);
        if (gr.s >= gr.target || gr.speed < 0.002) set.grow.splice(k, 1);
      }
      set.im.instanceMatrix.needsUpdate = true;
    }
  }
  addTo(scene) { this.meshes.forEach((s) => scene.add(s.im)); }
  clear() { this.meshes.forEach((s) => { s.n = 0; s.cursor = 0; s.im.count = 0; s.grow.length = 0; }); }
}

const UP = new THREE.Vector3(0, 1, 0);
const Z = new THREE.Vector3(0, 0, 1);

// ---------------- FX-Manager ----------------
export class FX {
  constructor(scene, level) {
    this.scene = scene;
    this.level = level;
    this.blood = true;
    const dot = makeSoftDot();
    const smoke = makeSmokeTexture();
    this.drops = new ParticlePool(1800, { texture: dot, gravity: -11, drag: 0.6 });
    this.mist = new ParticlePool(300, { texture: smoke, gravity: -0.6, drag: 2.2, opacity: 0.55 });
    this.sparks = new ParticlePool(500, { texture: dot, additive: true, gravity: -9, drag: 1.2 });
    this.dust = new ParticlePool(300, { texture: smoke, gravity: 0.15, drag: 2.6, opacity: 0.8 });
    this.embers = new ParticlePool(300, { texture: dot, additive: true, gravity: 0.6, drag: 1.4 });
    this.pools = [this.drops, this.mist, this.sparks, this.dust, this.embers];
    this.pools.forEach((p) => scene.add(p.points));

    this.floorDecals = new DecalSet([makeSplatTexture(11), makeSplatTexture(23), makeSplatTexture(37)], 90, { color: 0xb01010, roughness: 0.18 });
    this.dripDecals = new DecalSet([makeSplatTexture(5, 'drip'), makeSplatTexture(9, 'drip')], 220, { color: 0xa00c0c, roughness: 0.2 });
    this.wallDecals = new DecalSet([makeWallSplatTexture(3), makeWallSplatTexture(8)], 70, { color: 0xb01010, roughness: 0.22 });
    this.holes = new DecalSet([makeHoleTexture()], 120, { color: 0xffffff, roughness: 0.9, wet: false, renderOrder: 1 });
    this.decals = [this.floorDecals, this.dripDecals, this.wallDecals, this.holes];
    this.decals.forEach((d) => d.addTo(scene));

    this.drops.onLand = (x, z, s) => {
      if (Math.random() < 0.35) this.dripDecals.add(new THREE.Vector3(x, 0.012 + Math.random() * 0.004, z), UP, 0.1 + s * 0.02 + Math.random() * 0.12);
    };

    // Gibs (Brocken)
    this.gibGeo = new THREE.DodecahedronGeometry(0.05, 0);
    this.gibMat = new THREE.MeshStandardMaterial({ color: 0x6a0a08, roughness: 0.35, metalness: 0.0 });
    this.gibs = new THREE.InstancedMesh(this.gibGeo, this.gibMat, 80);
    this.gibs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.gibs.frustumCulled = false;
    this.gibs.castShadow = true;
    this.gibData = [];
    for (let i = 0; i < 80; i++) this.gibData.push({ p: new THREE.Vector3(0, -10, 0), v: new THREE.Vector3(), r: new THREE.Euler(), w: new THREE.Vector3(), s: 1, life: 0, rest: false });
    this.gibCursor = 0;
    scene.add(this.gibs);

    this._v = new THREE.Vector3();
    this._c = new THREE.Color();
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._sv = new THREE.Vector3();
    this._ray = new THREE.Raycaster();
    this.lightLevel = 1;
  }

  setLight(l) {
    this.lightLevel = l;
    this.drops.mat.uniforms.uLight.value = 0.55 + l * 0.5;
    this.mist.mat.uniforms.uLight.value = 0.4 + l * 0.4;
    this.dust.mat.uniforms.uLight.value = 0.3 + l * 0.5;
  }
  setScale(h) {
    for (const p of this.pools) p.mat.uniforms.uScale.value = h * 0.5;
  }

  bloodHit(p, dir, power = 1, headshot = false) {
    if (!this.blood) { this.puff(p, dir, 0x8a8f78, 0.6); return; }
    const n = Math.floor((headshot ? 90 : 34) * power);
    const c = this._c;
    for (let i = 0; i < n; i++) {
      const back = Math.random() < 0.7;
      const s = (back ? 2.5 : 1.5) + Math.random() * (headshot ? 6 : 3.5);
      const v = this._v.set(
        (back ? dir.x : -dir.x * 0.6) * s + (Math.random() - 0.5) * 2.4,
        (Math.random() * 0.9 + 0.3) * s * 0.55 + (headshot ? 1.5 : 0),
        (back ? dir.z : -dir.z * 0.6) * s + (Math.random() - 0.5) * 2.4,
      );
      c.setRGB(0.42 + Math.random() * 0.2, 0.0, 0.0);
      this.drops.emit(p, v, 0.035 + Math.random() * (headshot ? 0.09 : 0.06), 1.2 + Math.random() * 0.8, c, 0, 1);
    }
    for (let i = 0; i < (headshot ? 8 : 3) * power; i++) {
      const v = this._v.set(dir.x * (0.5 + Math.random()) + (Math.random() - 0.5) * 0.6, Math.random() * 0.5, dir.z * (0.5 + Math.random()) + (Math.random() - 0.5) * 0.6);
      c.setRGB(0.22, 0.01, 0.01);
      this.mist.emit(p, v, 0.16 + Math.random() * 0.18, 0.35 + Math.random() * 0.35, c, headshot ? 0.9 : 0.5);
    }
    // Wandspritzer hinter dem Ziel
    const ray = this._ray;
    ray.set(p, this._sv.copy(dir).setY(dir.y * 0.4).normalize());
    ray.far = headshot ? 3.2 : 2.2;
    const hit = ray.intersectObjects(this.level.colliders, false)[0];
    if (hit && hit.face) {
      const nrm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
      if (Math.abs(nrm.y) < 0.5) {
        const sz = (headshot ? 1.4 : 0.8) + Math.random() * 0.5;
        this.wallDecals.add(hit.point.clone().addScaledVector(nrm, 0.01), nrm, sz, (Math.random() - 0.5) * 0.4);
      } else if (nrm.y > 0.5) {
        this.floorDecals.add(hit.point.clone().setY(0.013), UP, 0.8 + Math.random() * 0.6);
      }
    }
    if (headshot) this.spawnGibs(p, dir, 12);
  }

  spawnGibs(p, dir, n) {
    if (!this.blood) return;
    for (let i = 0; i < n; i++) {
      const g = this.gibData[this.gibCursor];
      this.gibCursor = (this.gibCursor + 1) % this.gibData.length;
      g.p.copy(p);
      g.v.set(dir.x * (2 + Math.random() * 3) + (Math.random() - 0.5) * 3, 2 + Math.random() * 3, dir.z * (2 + Math.random() * 3) + (Math.random() - 0.5) * 3);
      g.w.set(Math.random() * 20, Math.random() * 20, Math.random() * 20);
      g.s = 0.6 + Math.random() * 1.2;
      g.life = 40;
      g.rest = false;
    }
  }

  wallHit(p, nrm) {
    this.holes.add(p.clone().addScaledVector(nrm, 0.006), nrm, 0.08 + Math.random() * 0.04);
    const c = this._c;
    for (let i = 0; i < 14; i++) {
      const v = this._v.copy(nrm).multiplyScalar(2 + Math.random() * 4).add(this._sv.set((Math.random() - 0.5) * 4, (Math.random() - 0.2) * 4, (Math.random() - 0.5) * 4));
      c.setRGB(1, 0.55 + Math.random() * 0.3, 0.2);
      this.sparks.emit(p, v, 0.02 + Math.random() * 0.03, 0.15 + Math.random() * 0.25, c);
    }
    this.puff(p, nrm, 0x9a948a, 0.7);
  }

  puff(p, dir, color, scale = 1) {
    const c = this._c.set(color);
    const v = new THREE.Vector3();
    for (let i = 0; i < 6; i++) {
      v.copy(dir).multiplyScalar(0.4 + Math.random() * 0.9).add(this._sv.set((Math.random() - 0.5) * 0.5, Math.random() * 0.4, (Math.random() - 0.5) * 0.5));
      this.dust.emit(p, v, (0.18 + Math.random() * 0.2) * scale, 0.7 + Math.random() * 0.6, c, 0.7 * scale);
    }
  }

  pool(x, z, size = 1.6) {
    if (!this.blood) return;
    this.floorDecals.add(new THREE.Vector3(x, 0.014 + Math.random() * 0.003, z), UP, 0.3, Math.random() * 6.28, -1, size);
  }

  // Dunkler Rauch + aufsteigende Glut beim Spawnen
  spawnPortal(p) {
    const c = this._c;
    const q = new THREE.Vector3();
    for (let i = 0; i < 10; i++) {
      const v = this._v.set((Math.random() - 0.5) * 0.8, 0.3 + Math.random() * 0.9, (Math.random() - 0.5) * 0.8);
      c.setRGB(0.06, 0.03, 0.03);
      this.dust.emit(q.set(p.x + (Math.random() - 0.5) * 0.9, 0.15, p.z + (Math.random() - 0.5) * 0.9), v, 0.5 + Math.random() * 0.5, 1.4 + Math.random(), c, 0.8);
    }
    for (let i = 0; i < 40; i++) {
      const v = this._v.set((Math.random() - 0.5) * 1.5, 1.2 + Math.random() * 2.5, (Math.random() - 0.5) * 1.5);
      c.setRGB(1, 0.35 + Math.random() * 0.2, 0.08);
      this.embers.emit(q.set(p.x + (Math.random() - 0.5) * 1.1, 0.05, p.z + (Math.random() - 0.5) * 1.1), v, 0.025 + Math.random() * 0.03, 0.8 + Math.random(), c);
    }
  }

  update(dt) {
    for (const p of this.pools) p.update(dt);
    this.floorDecals.update(dt);
    let any = false;
    for (let i = 0; i < this.gibData.length; i++) {
      const g = this.gibData[i];
      if (g.life <= 0) { this._m.makeScale(0, 0, 0); this.gibs.setMatrixAt(i, this._m); continue; }
      any = true;
      g.life -= dt;
      if (!g.rest) {
        g.v.y -= 11 * dt;
        g.p.addScaledVector(g.v, dt);
        g.r.x += g.w.x * dt; g.r.y += g.w.y * dt; g.r.z += g.w.z * dt;
        if (g.p.y < 0.03) {
          g.p.y = 0.03;
          if (Math.abs(g.v.y) < 1.2) { g.rest = true; if (Math.random() < 0.6) this.dripDecals.add(new THREE.Vector3(g.p.x, 0.012, g.p.z), UP, 0.18 + Math.random() * 0.15); }
          g.v.y *= -0.3; g.v.x *= 0.5; g.v.z *= 0.5; g.w.multiplyScalar(0.5);
        }
        this.level.collide(g.p, 0.04);
      }
      const s = g.s * Math.min(1, g.life / 3);
      this._q.setFromEuler(g.r);
      this._m.compose(g.p, this._q, this._sv.set(s, s * 0.7, s));
      this.gibs.setMatrixAt(i, this._m);
    }
    if (any || this._gibsWasAny) this.gibs.instanceMatrix.needsUpdate = true;
    this._gibsWasAny = any;
  }

  reset() {
    this.decals.forEach((d) => d.clear());
    for (const g of this.gibData) g.life = 0;
    this._gibsWasAny = true;
    for (const p of this.pools) p.clear();
  }
}
