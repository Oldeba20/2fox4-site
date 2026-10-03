import * as THREE from 'three';

// Partikelsystem auf Basis von THREE.Points (ein Draw-Call je System)
class Pool {
  constructor(scene, max, additive) {
    this.max = max;
    this.n = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.c = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.age = new Float32Array(max);
    this.size = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.alpha = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.posA = new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage);
    this.colA = new THREE.BufferAttribute(this.c, 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeA = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    this.alphaA = new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posA);
    g.setAttribute('color', this.colA);
    g.setAttribute('size', this.sizeA);
    g.setAttribute('alpha', this.alphaA);
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { scale: { value: 600 }, soft: { value: additive ? 1 : 0 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(-mv.z,0.1); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA; uniform float soft;
        void main(){ vec2 d = gl_PointCoord-0.5; float r = length(d)*2.0; if(r>1.0) discard;
          float a = soft > 0.5 ? pow(1.0-r, 1.6) : smoothstep(1.0, 0.75, r);
          vec3 c = soft > 0.5 ? vC : mix(vC, vC*0.82, smoothstep(0.2,0.9,r));
          gl_FragColor = vec4(c, a*vA); }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
  }

  emit(x, y, z, vx, vy, vz, col, size, life, grav = 0, drag = 0, grow = 0) {
    let i = this.n;
    if (i >= this.max) {
      // ältestes ersetzen
      let best = 0, ba = -1;
      for (let k = 0; k < this.max; k += 7) { const r = this.age[k] / this.life[k]; if (r > ba) { ba = r; best = k; } }
      i = best;
    } else this.n++;
    const j = i * 3;
    this.p[j] = x; this.p[j + 1] = y; this.p[j + 2] = z;
    this.v[j] = vx; this.v[j + 1] = vy; this.v[j + 2] = vz;
    this.c[j] = col.r; this.c[j + 1] = col.g; this.c[j + 2] = col.b;
    this.size0[i] = size; this.size[i] = size;
    this.life[i] = life; this.age[i] = 0;
    this.grav[i] = grav; this.drag[i] = drag; this.grow[i] = grow;
    this.alpha[i] = 1;
  }

  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.age[i] += dt;
      if (this.age[i] >= this.life[i]) {
        // mit letztem tauschen
        const l = this.n - 1;
        if (i !== l) {
          for (let k = 0; k < 3; k++) { this.p[i * 3 + k] = this.p[l * 3 + k]; this.v[i * 3 + k] = this.v[l * 3 + k]; this.c[i * 3 + k] = this.c[l * 3 + k]; }
          this.life[i] = this.life[l]; this.age[i] = this.age[l]; this.size0[i] = this.size0[l];
          this.grav[i] = this.grav[l]; this.drag[i] = this.drag[l]; this.grow[i] = this.grow[l];
        }
        this.n--;
        continue;
      }
      const j = i * 3;
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.v[j] *= d; this.v[j + 1] = this.v[j + 1] * d - this.grav[i] * dt; this.v[j + 2] *= d;
      this.p[j] += this.v[j] * dt; this.p[j + 1] += this.v[j + 1] * dt; this.p[j + 2] += this.v[j + 2] * dt;
      const r = this.age[i] / this.life[i];
      this.size[i] = this.size0[i] * (1 + this.grow[i] * r);
      this.alpha[i] = r < 0.1 ? r * 10 : 1 - Math.pow((r - 0.1) / 0.9, 2);
      i++;
    }
    this.points.geometry.setDrawRange(0, this.n);
    this.posA.needsUpdate = this.colA.needsUpdate = this.sizeA.needsUpdate = this.alphaA.needsUpdate = true;
  }
}

const C = (h) => new THREE.Color(h);
export const COL = {
  dust: C(0xd8c7a4), grass: C(0x6fbf4a), smoke: C(0xeeeeee), dark: C(0x55555c),
  spark1: C(0x4fb4ff), spark2: C(0xff8a1f), spark3: C(0xd05cff), flame: C(0xff7a2a), flame2: C(0xffd23a),
  star: C(0xffe14a), white: C(0xffffff), box: C(0xff6b35), oil: C(0x2a2040),
};

export class FX {
  constructor(scene) {
    this.add = new Pool(scene, 1600, true);
    this.norm = new Pool(scene, 1600, false);
    this.tmp = new THREE.Color();
  }
  setScale(h) { this.add.mat.uniforms.scale.value = h * 0.9; this.norm.mat.uniforms.scale.value = h * 0.9; }

  dust(x, y, z, vx, vz, col = COL.dust, n = 1, size = 0.32) {
    for (let k = 0; k < n; k++) this.norm.emit(x + (Math.random() - 0.5) * 0.6, y + 0.15, z + (Math.random() - 0.5) * 0.6, vx * 0.15 + (Math.random() - 0.5) * 2, 0.8 + Math.random() * 1.5, vz * 0.15 + (Math.random() - 0.5) * 2, col, size * (0.8 + Math.random() * 0.5), 0.45 + Math.random() * 0.3, 3, 1.5, 1.4);
  }
  spark(x, y, z, col) {
    this.add.emit(x, y, z, (Math.random() - 0.5) * 4, 1.5 + Math.random() * 3, (Math.random() - 0.5) * 4, col, 0.22 + Math.random() * 0.15, 0.25 + Math.random() * 0.2, 14, 1);
  }
  flame(x, y, z, vx, vz, big) {
    const c = Math.random() < 0.5 ? COL.flame : COL.flame2;
    this.add.emit(x, y, z, vx + (Math.random() - 0.5), (Math.random()) * 0.8, vz + (Math.random() - 0.5), c, big ? 0.55 : 0.38, 0.09 + Math.random() * 0.07, -2, 0, -0.5);
  }
  burst(x, y, z, col, n = 24, spd = 7, size = 0.4) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2;
      this.add.emit(x, y, z, Math.cos(a) * spd * Math.cos(e), Math.sin(e) * spd + 2, Math.sin(a) * spd * Math.cos(e), col, size * (0.7 + Math.random() * 0.6), 0.5 + Math.random() * 0.4, 10, 1.5);
    }
  }
  puff(x, y, z, n = 14, col = COL.smoke) {
    for (let k = 0; k < n; k++) this.norm.emit(x + (Math.random() - 0.5), y + Math.random(), z + (Math.random() - 0.5), (Math.random() - 0.5) * 5, Math.random() * 4, (Math.random() - 0.5) * 5, col, 1.0 + Math.random() * 0.8, 0.7 + Math.random() * 0.5, -1, 2.5, 1.5);
  }
  stars(x, y, z) {
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      this.add.emit(x, y + 1.6, z, Math.cos(a) * 3, 2.5, Math.sin(a) * 3, COL.star, 0.45, 0.8, 4, 1);
    }
  }
  update(dt) { this.add.update(dt); this.norm.update(dt); }
}
