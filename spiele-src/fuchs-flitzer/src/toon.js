import * as THREE from 'three';

// Toon-Abstufung (3 Stufen + weicher Übergang)
let GRAD = null;
export function gradientMap() {
  if (GRAD) return GRAD;
  const data = new Uint8Array([70, 70, 70, 255, 150, 150, 150, 255, 215, 215, 215, 255, 255, 255, 255, 255]);
  GRAD = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat);
  GRAD.minFilter = GRAD.magFilter = THREE.NearestFilter;
  GRAD.needsUpdate = true;
  return GRAD;
}

const cache = new Map();
export function toon(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!opts.noCache && cache.has(key)) return cache.get(key);
  const { noCache, ...rest } = opts;
  const m = new THREE.MeshToonMaterial({ color, gradientMap: gradientMap(), ...rest });
  if (!noCache) cache.set(key, m);
  return m;
}

// Umriss (invertierte Hülle)
const OUTLINE = new THREE.MeshBasicMaterial({ color: 0x1a1210, side: THREE.BackSide });
export function outline(mesh, thickness = 0.035) {
  const o = new THREE.Mesh(mesh.geometry, OUTLINE);
  o.scale.setScalar(1);
  o.userData.outline = true;
  o.onBeforeRender = () => {};
  // Skalieren relativ zur Geometriegröße
  mesh.geometry.computeBoundingSphere();
  const r = mesh.geometry.boundingSphere.radius || 1;
  const s = 1 + thickness / r;
  o.scale.set(s, s, s);
  o.position.copy(mesh.geometry.boundingSphere.center).multiplyScalar(1 - s);
  mesh.add(o);
  return o;
}

export function mesh(geo, mat, { out = true, thick = 0.03, shadow = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = false;
  if (out) outline(m, thick);
  return m;
}

export function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 2D-Rauschen (Value-Noise) für Gelände
export function makeNoise(seed = 1) {
  const r = rng(seed);
  const P = new Uint8Array(512);
  const p = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) P[i] = p[i & 255];
  const V = new Float32Array(256); for (let i = 0; i < 256; i++) V[i] = r() * 2 - 1;
  const fade = (t) => t * t * (3 - 2 * t);
  const n2 = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const a = V[P[(xi & 255) + P[yi & 255]]], b = V[P[((xi + 1) & 255) + P[yi & 255]]];
    const c = V[P[(xi & 255) + P[(yi + 1) & 255]]], d = V[P[((xi + 1) & 255) + P[(yi + 1) & 255]]];
    const u = fade(xf), v = fade(yf);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  return (x, y, oct = 4) => {
    let s = 0, amp = 1, f = 1, norm = 0;
    for (let o = 0; o < oct; o++) { s += n2(x * f, y * f) * amp; norm += amp; amp *= 0.5; f *= 2; }
    return s / norm;
  };
}
