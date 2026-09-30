/**
 * „Fuchs & Federn“ — Schießbuden-Spiel für die 404-Seite von 2fox4.de.
 *
 * Angelehnt an das Prinzip klassischer Moorhuhn-artiger Schießbuden-Spiele
 * (90 Sekunden, Schrotflinte mit 8 Schuss, Punkte nach Entfernung,
 * versteckte Bonusziele, seitlich schwenkbare Landschaft) — Grafik,
 * Figuren und Namen sind eigene Entwürfe. Der 2FOX4-Fuchs lugt hinter
 * Heuballen hervor (nicht treffen!) und fährt im Heißluftballon vorbei.
 *
 * Alles ist Canvas-2D, keine externen Assets. Sounds per Web Audio,
 * gesteuert über den Sound-Knopf der 404-Seite (#hud-sound).
 */
import { foxDataURL } from "./fox-svg.js";

const VW = 960;
const VH = 600;
const WORLD_W = 2000;
const GAME_TIME = 90;
const MAG = 8;
const RELOAD_MS = 520;
const BEST_KEY = "foxhunt_best_v1";

const P = { sky: 0, clouds: 0.12, balloon: 0.3, hillsFar: 0.25, birdFar: 0.4, hillsMid: 0.55, birdMid: 0.75, near: 1, fore: 1.25 };
const layerW = (p) => Math.ceil(VW + (WORLD_W - VW) * p);

const DEPTHS = {
  far: { p: P.birdFar, s: 0.42, pts: 25, speed: [65, 100], y: [80, 290] },
  mid: { p: P.birdMid, s: 0.68, pts: 10, speed: [115, 165], y: [60, 350] },
  near: { p: P.near, s: 1.05, pts: 5, speed: [175, 245], y: [50, 390] },
};

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- Gelände ----------
function hillFn(base, parts) {
  return (x) => base - parts.reduce((s, [a, f, ph]) => s + a * Math.sin(x * f + ph), 0);
}
const groundFar = hillFn(338, [[22, 0.006, 1.2], [12, 0.017, 0.4], [5, 0.05, 2]]);
const groundMid = hillFn(392, [[30, 0.0045, 2.4], [14, 0.013, 0.9], [4, 0.04, 1.3]]);
const groundNear = hillFn(468, [[9, 0.004, 0.2], [6, 0.011, 1.7]]);

const BALES = [230, 760, 1250, 1790];
const SIGN_X = 480;
const SCARECROW_X = 1520;
const MILL_X = 1010; // im Mid-Layer

export function initFoxGame(root) {
  if (!root) return;
  const canvas = root.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const $ = (sel) => root.querySelector(sel);
  const ovStart = $("[data-fx=start]");
  const ovEnd = $("[data-fx=end]");
  const ovPause = $("[data-fx=pause]");
  const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  // ---------- Bilder ----------
  const foxImg = {};
  for (const m of ["normal", "happy", "angry"]) {
    const img = new Image();
    img.src = foxDataURL(m, true);
    foxImg[m] = img;
  }
  const foxHead = new Image();
  foxHead.src = foxDataURL("happy", false);

  // ---------- Canvas-Größe / HiDPI ----------
  let S = 1;
  let layers = {};
  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(320, Math.round(rect.width * dpr));
    if (w === canvas.width && layers.sky) return;
    canvas.width = w;
    canvas.height = Math.round((w * VH) / VW);
    S = canvas.width / VW;
    buildLayers();
  }

  function makeLayer(p, draw) {
    const w = layerW(p);
    const c = document.createElement("canvas");
    c.width = Math.ceil(w * S);
    c.height = Math.ceil(VH * S);
    const g = c.getContext("2d");
    g.scale(S, S);
    draw(g, w);
    return { c, w, p };
  }

  function buildLayers() {
    layers.sky = makeLayer(0, (g) => {
      const grd = g.createLinearGradient(0, 0, 0, VH);
      grd.addColorStop(0, "#161733");
      grd.addColorStop(0.32, "#3d2a5c");
      grd.addColorStop(0.55, "#b8506a");
      grd.addColorStop(0.66, "#ff8c5a");
      grd.addColorStop(0.8, "#ffc27a");
      g.fillStyle = grd;
      g.fillRect(0, 0, VW, VH);
      // Sterne
      let seed = 7;
      const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      for (let i = 0; i < 70; i++) {
        const x = rnd() * VW, y = rnd() * 170;
        g.fillStyle = `rgba(255,255,255,${0.15 + rnd() * 0.5 * (1 - y / 170)})`;
        g.fillRect(x, y, 1.6, 1.6);
      }
      // Sonne
      const sx = 610, sy = 318;
      const glow = g.createRadialGradient(sx, sy, 20, sx, sy, 190);
      glow.addColorStop(0, "rgba(255,214,140,0.75)");
      glow.addColorStop(1, "rgba(255,160,90,0)");
      g.fillStyle = glow;
      g.fillRect(0, 0, VW, VH);
      g.fillStyle = "#ffd89a";
      g.beginPath();
      g.arc(sx, sy, 58, 0, Math.PI * 2);
      g.fill();
    });

    layers.hillsFar = makeLayer(P.hillsFar, (g, w) => {
      fillGround(g, w, groundFar, ["#8a5f86", "#5a4270"]);
    });

    layers.hillsMid = makeLayer(P.hillsMid, (g, w) => {
      fillGround(g, w, groundMid, ["#35503f", "#22362c"]);
      // Baumgruppen
      let seed = 3;
      const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      for (let x = 30; x < w; x += 70 + rnd() * 120) {
        if (Math.abs(x - MILL_X) < 80) continue;
        const gy = groundMid(x) + 6;
        const n = 2 + Math.floor(rnd() * 3);
        for (let k = 0; k < n; k++) {
          const tx = x + k * 18 + rnd() * 8;
          const r = 12 + rnd() * 12;
          g.fillStyle = "#3a2a22";
          g.fillRect(tx - 2, gy - r * 0.8, 4, r * 0.9);
          g.fillStyle = k % 2 ? "#1f3329" : "#243b2f";
          g.beginPath();
          g.arc(tx, gy - r * 1.3, r, 0, Math.PI * 2);
          g.fill();
        }
      }
    });

    layers.meadow = makeLayer(P.near, (g, w) => {
      fillGround(g, w, groundNear, ["#78963f", "#3f5d25"]);
      // Mähstreifen
      g.lineWidth = 10;
      for (let k = 1; k < 6; k++) {
        g.strokeStyle = k % 2 ? "rgba(255,255,210,0.06)" : "rgba(0,0,0,0.06)";
        g.beginPath();
        for (let x = 0; x <= w; x += 12) {
          const y = groundNear(x) + k * 24 + Math.sin(x * 0.01 + k) * 3;
          x === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
        }
        g.stroke();
      }
      // Blumen
      let seed = 11;
      const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      for (let i = 0; i < 160; i++) {
        const x = rnd() * w;
        const y = groundNear(x) + 10 + rnd() * 120;
        g.fillStyle = pick(["#ffe27a", "#fff3e0", "#ff9f7a", "#f2c4ff"]);
        g.beginPath();
        g.arc(x, y, 1.5 + rnd() * 1.5, 0, Math.PI * 2);
        g.fill();
      }
    });

    layers.fore = makeLayer(P.fore, (g, w) => {
      // Zaun
      g.strokeStyle = "#4a2f1d";
      g.fillStyle = "#5a3b24";
      g.lineWidth = 7;
      for (let x0 = 40; x0 < w; x0 += 700) {
        const len = 360;
        for (let x = x0; x <= x0 + len; x += 90) {
          g.fillRect(x - 5, 528, 10, 80);
          g.fillStyle = "#6b4a2e";
          g.fillRect(x - 5, 528, 3, 80);
          g.fillStyle = "#5a3b24";
        }
        g.beginPath();
        g.moveTo(x0, 548); g.lineTo(x0 + len, 546);
        g.moveTo(x0, 574); g.lineTo(x0 + len, 572);
        g.stroke();
      }
      // Gras
      let seed = 5;
      const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
      for (let x = 0; x < w; x += 5) {
        const h = 18 + rnd() * 34;
        g.fillStyle = rnd() > 0.5 ? "#26401a" : "#2f4d1f";
        g.beginPath();
        g.moveTo(x - 4, VH);
        g.quadraticCurveTo(x + rnd() * 6 - 3, VH - h * 0.6, x + rnd() * 10 - 5, VH - h);
        g.lineTo(x + 4, VH);
        g.fill();
      }
    });
  }

  function fillGround(g, w, fn, [c1, c2]) {
    let top = VH;
    for (let x = 0; x <= w; x += 20) top = Math.min(top, fn(x));
    const grd = g.createLinearGradient(0, top, 0, VH);
    grd.addColorStop(0, c1);
    grd.addColorStop(1, c2);
    g.fillStyle = grd;
    g.beginPath();
    g.moveTo(0, VH);
    for (let x = 0; x <= w + 8; x += 8) g.lineTo(x, fn(x));
    g.lineTo(w, VH);
    g.closePath();
    g.fill();
  }

  // ---------- Zustand ----------
  let state = "idle"; // idle | play | pause | over
  let camX = (WORLD_W - VW) / 2;
  let t = 0; // Spielzeit in s
  let timeLeft = GAME_TIME;
  let score = 0, shots = 0, hitShots = 0, birdsHit = 0, foxHits = 0;
  let ammo = MAG, reloadT = 0;
  let best = 0;
  try { best = parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0; } catch (e) {}
  const birds = [], feathers = [], popups = [], confetti = [];
  let spawnCd = 0;
  let shake = 0, flash = 0, recoil = 0;
  let clouds = [];
  const mouse = { x: VW / 2, y: VH / 2, inside: false, touch: false, touchT: 0 };
  const keys = {};
  let scrollHold = 0; // Touch-Pfeile: -1 / 0 / 1
  let emptyHintCd = 0;

  const mill = { a: 0, spin: 0.7, cd: 0 };
  const sign = { flip: 0, flipping: 0, home: false, cd: 0 };
  const crow = { hatOff: 0, hatX: 0, hatY: 0, hatVX: 0, hatVY: 0, hatRot: 0 };
  const fox = { bale: -1, rise: 0, phase: "hidden", timer: 4, mood: "normal", line: "" };
  let balloon = null, balloonCd = 12;

  function resetGame() {
    t = 0; timeLeft = GAME_TIME;
    score = 0; shots = 0; hitShots = 0; birdsHit = 0; foxHits = 0;
    ammo = MAG; reloadT = 0;
    birds.length = 0; feathers.length = 0; popups.length = 0; confetti.length = 0;
    spawnCd = 0.4; shake = 0; flash = 0; recoil = 0;
    mill.a = 0; mill.spin = 0.7; mill.cd = 0;
    sign.flip = 0; sign.flipping = 0; sign.home = false; sign.cd = 0;
    crow.hatOff = 0;
    fox.bale = -1; fox.rise = 0; fox.phase = "hidden"; fox.timer = rand(4, 7);
    balloon = null; balloonCd = rand(10, 16);
    camX = (WORLD_W - VW) / 2;
    clouds = Array.from({ length: 6 }, (_, i) => ({ x: i * 260 + rand(0, 120), y: rand(40, 210), w: rand(90, 180), v: rand(4, 10) }));
  }
  resetGame();

  // ---------- Sound ----------
  let ac = null;
  const soundOn = () => {
    const b = document.getElementById("hud-sound");
    return !!b && !b.classList.contains("sound-off");
  };
  function audio() {
    if (!soundOn()) return null;
    if (!ac) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ac = new AC();
    }
    if (ac.state === "suspended") ac.resume();
    return ac;
  }
  function noise(dur, freqFrom, freqTo, vol) {
    const a = audio(); if (!a) return;
    const n = a.createBufferSource();
    const buf = a.createBuffer(1, Math.floor(a.sampleRate * dur), a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    n.buffer = buf;
    const f = a.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(freqFrom, a.currentTime);
    f.frequency.exponentialRampToValueAtTime(freqTo, a.currentTime + dur);
    const gn = a.createGain();
    gn.gain.value = vol;
    n.connect(f).connect(gn).connect(a.destination);
    n.start();
  }
  function tone(type, f1, f2, dur, vol, delay = 0) {
    const a = audio(); if (!a) return;
    const o = a.createOscillator();
    const gn = a.createGain();
    const t0 = a.currentTime + delay;
    o.type = type;
    o.frequency.setValueAtTime(f1, t0);
    o.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    gn.gain.setValueAtTime(vol, t0);
    gn.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    o.connect(gn).connect(a.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }
  const sfx = {
    shot: () => { noise(0.3, 3000, 160, 0.55); tone("sine", 120, 40, 0.18, 0.4); },
    empty: () => tone("square", 900, 700, 0.04, 0.08),
    reload: () => { tone("square", 500, 300, 0.05, 0.1); tone("square", 700, 400, 0.05, 0.1, 0.18); },
    cluck: () => { tone("square", 780, 420, 0.07, 0.07); tone("square", 900, 500, 0.08, 0.06, 0.08); },
    bonus: () => { [660, 880, 1320].forEach((f, i) => tone("sine", f, f, 0.12, 0.12, i * 0.07)); },
    ouch: () => tone("sawtooth", 520, 180, 0.35, 0.12),
    end: () => { [880, 660, 440].forEach((f, i) => tone("triangle", f, f * 0.98, 0.18, 0.12, i * 0.15)); },
  };

  // ---------- Hilfen ----------
  const sxOf = (lx, p) => lx - camX * p;
  const lxOf = (sx, p) => sx + camX * p;
  function addPopup(x, y, text, color = "#fff", size = 26) {
    popups.push({ x, y, text, color, size, t: 0 });
  }

  // ---------- Hühner ----------
  function spawnBird() {
    const r = Math.random();
    const depth = r < 0.4 ? "far" : r < 0.75 ? "mid" : "near";
    const D = DEPTHS[depth];
    const dir = Math.random() < 0.5 ? 1 : -1;
    const sx = dir > 0 ? -60 : VW + 60;
    const speedK = 1 + 0.35 * (t / GAME_TIME);
    const golden = Math.random() < 0.06;
    birds.push({
      depth, D, dir, golden,
      lx: lxOf(sx, D.p),
      y: rand(D.y[0], D.y[1]),
      baseY: 0,
      vx: rand(D.speed[0], D.speed[1]) * speedK * (golden ? 1.35 : 1),
      bobA: rand(8, 26) * D.s,
      bobF: rand(1.5, 3.2),
      ph: rand(0, 6.28),
      flap: rand(0, 6.28),
      variant: golden ? "gold" : pick(["white", "white", "brown", "speckled"]),
      dead: false, vy: 0, rot: 0,
    });
    const b = birds[birds.length - 1];
    b.baseY = b.y;
    b.targetY = b.y;
  }

  const PALETTE = {
    white: { body: "#fbf6ec", wing: "#e9dfcc", tail: "#e2d6bf" },
    brown: { body: "#b86f3c", wing: "#9a5a2e", tail: "#6e3f1f" },
    speckled: { body: "#4a4450", wing: "#3a3440", tail: "#26222a" },
    gold: { body: "#ffd23f", wing: "#f2b21a", tail: "#e39b10" },
  };

  function drawBird(g, b, x, y) {
    const s = b.D.s;
    const col = PALETTE[b.variant];
    g.save();
    g.translate(x, y);
    g.scale(s * b.dir, s);
    if (b.dead) g.rotate(b.rot);
    if (b.golden && !b.dead) {
      g.shadowColor = "rgba(255,220,90,0.9)";
      g.shadowBlur = 22;
    }
    g.lineWidth = 3;
    g.strokeStyle = "#2b1d14";
    // Schwanz
    g.fillStyle = col.tail;
    g.beginPath();
    g.moveTo(-26, -4);
    g.lineTo(-50, -22);
    g.lineTo(-44, -6);
    g.lineTo(-54, 2);
    g.lineTo(-42, 8);
    g.lineTo(-24, 8);
    g.closePath();
    g.fill(); g.stroke();
    // Körper
    g.fillStyle = col.body;
    g.beginPath();
    g.ellipse(0, 2, 32, 23, 0, 0, Math.PI * 2);
    g.fill(); g.stroke();
    g.shadowBlur = 0;
    if (b.variant === "speckled") {
      g.fillStyle = "rgba(255,255,255,0.55)";
      for (const [px, py] of [[-12, -6], [4, 10], [-4, 0], [12, -2], [-16, 8], [8, -10]]) {
        g.beginPath(); g.arc(px, py, 2.4, 0, Math.PI * 2); g.fill();
      }
    }
    // Beine (eingezogen)
    g.strokeStyle = "#e38b2c";
    g.lineWidth = 3.5;
    g.beginPath();
    g.moveTo(-4, 22); g.lineTo(-10, 30);
    g.moveTo(6, 22); g.lineTo(2, 31);
    g.stroke();
    g.strokeStyle = "#2b1d14";
    g.lineWidth = 3;
    // Kopf
    g.fillStyle = col.body;
    g.beginPath();
    g.arc(28, -16, 14, 0, Math.PI * 2);
    g.fill(); g.stroke();
    // Kamm
    g.fillStyle = "#e0342b";
    g.beginPath();
    g.arc(22, -31, 5, 0, Math.PI * 2);
    g.arc(29, -33, 5.5, 0, Math.PI * 2);
    g.arc(36, -29, 4.5, 0, Math.PI * 2);
    g.fill();
    // Kehllappen
    g.beginPath();
    g.ellipse(38, -4, 3.5, 6, 0.2, 0, Math.PI * 2);
    g.fill();
    // Schnabel
    g.fillStyle = "#ffae2b";
    g.beginPath();
    g.moveTo(40, -20); g.lineTo(53, -15); g.lineTo(40, -11);
    g.closePath();
    g.fill(); g.stroke();
    // Auge
    if (b.dead) {
      g.strokeStyle = "#2b1d14";
      g.lineWidth = 2.5;
      g.beginPath();
      g.moveTo(28, -22); g.lineTo(35, -15);
      g.moveTo(35, -22); g.lineTo(28, -15);
      g.stroke();
    } else {
      g.fillStyle = "#fff";
      g.beginPath(); g.arc(32, -19, 5, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#1d1410";
      g.beginPath(); g.arc(33.5, -19, 2.6, 0, Math.PI * 2); g.fill();
    }
    // Flügel
    const fl = b.dead ? 0.9 : Math.sin(b.flap);
    g.fillStyle = col.wing;
    g.strokeStyle = "#2b1d14";
    g.lineWidth = 3;
    g.save();
    g.translate(-4, -2);
    g.rotate(-0.25 - fl * 0.75);
    g.beginPath();
    g.moveTo(0, 0);
    g.quadraticCurveTo(-8, -34, -30, -40);
    g.quadraticCurveTo(-24, -26, -30, -18);
    g.quadraticCurveTo(-18, -10, -24, -2);
    g.quadraticCurveTo(-10, 2, 0, 0);
    g.closePath();
    g.fill(); g.stroke();
    g.restore();
    g.restore();
  }

  function birdScreen(b) {
    return { x: sxOf(b.lx, b.D.p), y: b.y };
  }

  function hitBird(b, px, py) {
    const { x, y } = birdScreen(b);
    const s = b.D.s;
    const dx = (px - x) / s, dy = (py - y) / s;
    const tol = (mouse.touch ? 22 : 6) / s;
    const body = (dx * dx) / ((34 + tol) ** 2) + ((dy - 2) ** 2) / ((26 + tol) ** 2) <= 1;
    const hx = 28 * b.dir, hy = -16;
    const head = (dx - hx) ** 2 + (dy - hy) ** 2 <= (18 + tol) ** 2;
    return body || head;
  }

  // ---------- Szenen-Objekte ----------
  function millPos() {
    const x = sxOf(MILL_X, P.hillsMid);
    const gy = groundMid(MILL_X);
    return { x, gy, hubY: gy - 86 };
  }
  function drawMill(g) {
    const { x, gy, hubY } = millPos();
    if (x < -120 || x > VW + 120) return;
    g.fillStyle = "#e9dcc4";
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 2.5;
    g.beginPath();
    g.moveTo(x - 20, gy + 6); g.lineTo(x - 11, hubY + 4); g.lineTo(x + 11, hubY + 4); g.lineTo(x + 20, gy + 6);
    g.closePath(); g.fill(); g.stroke();
    g.fillStyle = "#8f3b2a";
    g.beginPath();
    g.moveTo(x - 15, hubY + 6); g.lineTo(x, hubY - 14); g.lineTo(x + 15, hubY + 6);
    g.closePath(); g.fill(); g.stroke();
    g.fillStyle = "#3b2a20";
    g.fillRect(x - 5, gy - 14, 10, 18);
    // Flügel
    g.save();
    g.translate(x, hubY);
    g.rotate(mill.a);
    for (let i = 0; i < 4; i++) {
      g.rotate(Math.PI / 2);
      g.fillStyle = "#f6efe2";
      g.fillRect(3, -6, 50, 11);
      g.strokeRect(3, -6, 50, 11);
      g.strokeStyle = "rgba(59,42,32,0.5)";
      g.lineWidth = 1;
      for (let k = 12; k < 50; k += 9) { g.beginPath(); g.moveTo(3 + k, -6); g.lineTo(3 + k, 5); g.stroke(); }
      g.strokeStyle = "#3b2a20";
      g.lineWidth = 2.5;
    }
    g.fillStyle = "#3b2a20";
    g.beginPath(); g.arc(0, 0, 5, 0, Math.PI * 2); g.fill();
    g.restore();
  }

  function balePos(i) {
    const lx = BALES[i];
    const x = sxOf(lx, P.near);
    const gy = groundNear(lx) + 34;
    return { x, gy, top: gy - 58 };
  }
  function drawBale(g, i) {
    const { x, gy } = balePos(i);
    if (x < -120 || x > VW + 120) return;
    g.fillStyle = "rgba(0,0,0,0.25)";
    g.beginPath(); g.ellipse(x, gy + 2, 70, 10, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = "#d9a54a";
    g.strokeStyle = "#7a5520";
    g.lineWidth = 3;
    g.beginPath();
    g.roundRect ? g.roundRect(x - 64, gy - 58, 128, 60, 26) : g.rect(x - 64, gy - 58, 128, 60);
    g.fill(); g.stroke();
    g.fillStyle = "#e8bb62";
    g.beginPath(); g.ellipse(x + 40, gy - 28, 22, 28, 0, 0, Math.PI * 2); g.fill(); g.stroke();
    g.strokeStyle = "rgba(122,85,32,0.7)";
    g.lineWidth = 2;
    for (let r = 6; r < 22; r += 6) { g.beginPath(); g.ellipse(x + 40, gy - 28, r, r * 1.25, 0, 0, Math.PI * 2); g.stroke(); }
    for (let k = -50; k < 20; k += 12) { g.beginPath(); g.moveTo(x + k, gy - 52); g.lineTo(x + k + 6, gy - 6); g.stroke(); }
  }

  const FOX_W = 92, FOX_H = 98;
  function foxRect() {
    if (fox.bale < 0) return null;
    const { x, top } = balePos(fox.bale);
    const bottom = top + 18;
    const imgTop = bottom - fox.rise * FOX_H;
    return { x: x - 18 - FOX_W / 2, y: imgTop, bottom, cx: x - 18, cy: imgTop + FOX_H * 0.45 };
  }
  function drawFox(g) {
    const r = foxRect();
    if (!r || fox.rise <= 0) return;
    const img = foxImg[fox.mood];
    g.save();
    g.beginPath();
    g.rect(r.x - 20, -50, FOX_W + 40, r.bottom + 50);
    g.clip();
    if (img.complete) g.drawImage(img, r.x, r.y, FOX_W, FOX_H);
    g.restore();
    if (fox.phase === "stay" && fox.line) drawBubble(g, r.cx + 34, r.y - 6, fox.line);
  }
  function drawBubble(g, x, y, text) {
    g.save();
    g.font = "700 15px Inter Variable, Inter, system-ui, sans-serif";
    const w = g.measureText(text).width + 22;
    const h = 30;
    let bx = clamp(x, 10, VW - w - 10);
    const by = y - h - 10;
    g.fillStyle = "#fff";
    g.strokeStyle = "#1d1410";
    g.lineWidth = 2.5;
    g.beginPath();
    g.roundRect ? g.roundRect(bx, by, w, h, 12) : g.rect(bx, by, w, h);
    g.fill(); g.stroke();
    g.beginPath();
    g.moveTo(x - 6, by + h - 1); g.lineTo(x - 14, by + h + 12); g.lineTo(x + 6, by + h - 1);
    g.fill();
    g.beginPath();
    g.moveTo(x - 6, by + h); g.lineTo(x - 14, by + h + 12); g.lineTo(x + 6, by + h);
    g.stroke();
    g.fillStyle = "#1d1410";
    g.textBaseline = "middle";
    g.fillText(text, bx + 11, by + h / 2 + 1);
    g.restore();
  }

  function signGeom() {
    const x = sxOf(SIGN_X, P.near);
    const gy = groundNear(SIGN_X) + 40;
    return { x, gy, bx: x - 52, by: gy - 118, bw: 104, bh: 36 };
  }
  function drawSign(g) {
    const s = signGeom();
    if (s.x < -120 || s.x > VW + 120) return;
    g.fillStyle = "#5a3b24";
    g.fillRect(s.x - 5, s.by, 10, s.gy - s.by);
    const k = Math.cos(sign.flip * Math.PI); // -1..1, Umdrehen
    g.save();
    g.translate(s.x, s.by + s.bh / 2);
    g.scale(Math.abs(k) < 0.05 ? 0.05 : Math.abs(k), 1);
    g.fillStyle = "#f3e2c0";
    g.strokeStyle = "#5a3b24";
    g.lineWidth = 3;
    const home = sign.home;
    g.beginPath();
    if (!home) {
      g.moveTo(-52, -18); g.lineTo(38, -18); g.lineTo(56, 0); g.lineTo(38, 18); g.lineTo(-52, 18);
    } else {
      g.moveTo(52, -18); g.lineTo(-38, -18); g.lineTo(-56, 0); g.lineTo(-38, 18); g.lineTo(52, 18);
    }
    g.closePath(); g.fill(); g.stroke();
    g.fillStyle = "#1d1410";
    g.font = "800 17px Inter Variable, Inter, system-ui, sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(home ? "START" : "404", home ? 6 : -6, 1);
    g.restore();
  }

  function crowGeom() {
    const x = sxOf(SCARECROW_X, P.near);
    const gy = groundNear(SCARECROW_X) + 44;
    return { x, gy, headY: gy - 150 };
  }
  function drawScarecrow(g) {
    const c = crowGeom();
    if (c.x < -140 || c.x > VW + 140) return;
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 3;
    g.fillStyle = "#6b4a2e";
    g.fillRect(c.x - 5, c.headY, 10, c.gy - c.headY);
    g.fillRect(c.x - 62, c.headY + 34, 124, 9);
    // Hemd (kariert, orange)
    g.fillStyle = "#e0662f";
    g.beginPath();
    g.moveTo(c.x - 58, c.headY + 30); g.lineTo(c.x + 58, c.headY + 30);
    g.lineTo(c.x + 30, c.headY + 50); g.lineTo(c.x + 26, c.headY + 100);
    g.lineTo(c.x - 26, c.headY + 100); g.lineTo(c.x - 30, c.headY + 50);
    g.closePath(); g.fill(); g.stroke();
    g.strokeStyle = "rgba(90,30,10,0.45)";
    g.lineWidth = 2;
    for (let k = -20; k <= 20; k += 13) {
      g.beginPath(); g.moveTo(c.x + k, c.headY + 34); g.lineTo(c.x + k, c.headY + 98); g.stroke();
    }
    for (let k = 44; k <= 92; k += 14) {
      g.beginPath(); g.moveTo(c.x - 28, c.headY + k); g.lineTo(c.x + 28, c.headY + k); g.stroke();
    }
    // Stroh an den Ärmeln
    g.strokeStyle = "#e8c15a";
    g.lineWidth = 2;
    for (const sgn of [-1, 1]) for (let k = 0; k < 5; k++) {
      g.beginPath();
      g.moveTo(c.x + sgn * 58, c.headY + 34 + k * 3);
      g.lineTo(c.x + sgn * (68 + k * 2), c.headY + 30 + k * 5);
      g.stroke();
    }
    // Kopf (Sack)
    g.fillStyle = "#e7d3a6";
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 3;
    g.beginPath(); g.arc(c.x, c.headY + 8, 20, 0, Math.PI * 2); g.fill(); g.stroke();
    g.fillStyle = "#3b2a20";
    g.beginPath(); g.arc(c.x - 7, c.headY + 5, 2.6, 0, 7); g.arc(c.x + 7, c.headY + 5, 2.6, 0, 7); g.fill();
    g.beginPath(); g.moveTo(c.x - 8, c.headY + 16); g.lineTo(c.x + 8, c.headY + 16); g.stroke();
    // Hut
    if (crow.hatOff <= 0) drawHat(g, c.x, c.headY - 8, 0);
  }
  function drawHat(g, x, y, rot) {
    g.save();
    g.translate(x, y);
    g.rotate(rot);
    g.fillStyle = "#3e3226";
    g.strokeStyle = "#1d1410";
    g.lineWidth = 2.5;
    g.beginPath(); g.ellipse(0, 0, 34, 7, 0, 0, Math.PI * 2); g.fill(); g.stroke();
    g.beginPath();
    g.moveTo(-18, 0); g.lineTo(-15, -26); g.quadraticCurveTo(0, -32, 15, -26); g.lineTo(18, 0);
    g.closePath(); g.fill(); g.stroke();
    g.fillStyle = "#ff6b35";
    g.fillRect(-17, -8, 34, 6);
    g.restore();
  }

  function balloonPos() {
    if (!balloon) return null;
    return { x: sxOf(balloon.lx, P.balloon), y: balloon.y + Math.sin(balloon.ph) * 8 };
  }
  function drawBalloon(g) {
    const b = balloonPos();
    if (!b || b.x < -160 || b.x > VW + 160) return;
    const { x, y } = b;
    // Seile
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(x - 30, y + 26); g.lineTo(x - 16, y + 66);
    g.moveTo(x + 30, y + 26); g.lineTo(x + 16, y + 66);
    g.stroke();
    // Hülle mit Streifen
    g.save();
    g.beginPath();
    g.moveTo(x, y + 44);
    g.bezierCurveTo(x - 30, y + 26, x - 52, y - 4, x - 52, y - 30);
    g.bezierCurveTo(x - 52, y - 70, x + 52, y - 70, x + 52, y - 30);
    g.bezierCurveTo(x + 52, y - 4, x + 30, y + 26, x, y + 44);
    g.closePath();
    g.fillStyle = "#ff6b35";
    g.fill();
    g.clip();
    g.fillStyle = "#fff5ea";
    for (let k = -3; k <= 3; k += 2) {
      g.beginPath();
      g.ellipse(x + k * 15, y - 16, 7, 64, 0, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 2.5;
    g.beginPath();
    g.moveTo(x, y + 44);
    g.bezierCurveTo(x - 30, y + 26, x - 52, y - 4, x - 52, y - 30);
    g.bezierCurveTo(x - 52, y - 70, x + 52, y - 70, x + 52, y - 30);
    g.bezierCurveTo(x + 52, y - 4, x + 30, y + 26, x, y + 44);
    g.stroke();
    // Fuchs im Korb
    if (foxHead.complete) g.drawImage(foxHead, x - 19, y + 34, 38, 38);
    // Korb
    g.fillStyle = "#8a5a2b";
    g.fillRect(x - 17, y + 66, 34, 26);
    g.strokeRect(x - 17, y + 66, 34, 26);
    g.strokeStyle = "rgba(59,42,32,0.6)";
    g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(x - 17, y + 81); g.lineTo(x + 17, y + 81); g.stroke();
    // Banner 2FOX4
    const by = y + 98;
    g.strokeStyle = "#3b2a20";
    g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(x - 10, y + 92); g.lineTo(x - 26, by); g.moveTo(x + 10, y + 92); g.lineTo(x + 26, by); g.stroke();
    g.fillStyle = "#111";
    g.fillRect(x - 38, by, 76, 24);
    g.font = "900 16px Inter Variable, Inter, system-ui, sans-serif";
    g.textBaseline = "middle";
    g.textAlign = "left";
    const w1 = g.measureText("2FOX").width;
    const w2 = g.measureText("4").width;
    const tx = x - (w1 + w2) / 2;
    g.fillStyle = "#fff";
    g.fillText("2FOX", tx, by + 13);
    g.fillStyle = "#ff6b35";
    g.fillText("4", tx + w1, by + 13);
  }
  function hitBalloon(px, py) {
    const b = balloonPos();
    if (!b) return false;
    const inEnv = ((px - b.x) / 54) ** 2 + ((py - (b.y - 18)) / 64) ** 2 <= 1;
    const inBasket = px > b.x - 40 && px < b.x + 40 && py > b.y + 44 && py < b.y + 124;
    return inEnv || inBasket;
  }

  // ---------- Schießen ----------
  function shoot(px, py) {
    if (state !== "play") return;
    if (reloadT > 0) return;
    if (ammo <= 0) {
      sfx.empty();
      if (emptyHintCd <= 0) {
        addPopup(px, py - 30, isCoarse ? "Leer! Patronen antippen" : "Leer! Rechtsklick oder Leertaste", "#ffd89a", 18);
        emptyHintCd = 1.2;
      }
      return;
    }
    ammo--;
    shots++;
    sfx.shot();
    shake = 6; flash = 0.08; recoil = 1;
    let hitSomething = false;
    let hitBirds = 0;

    // Vorne nach hinten prüfen: Schrot trifft alles unter dem Fadenkreuz.
    for (const b of birds) {
      if (b.dead) continue;
      if (hitBird(b, px, py)) {
        b.dead = true;
        b.vy = -rand(60, 140);
        hitBirds++;
        birdsHit++;
        const pts = b.golden ? 50 : b.D.pts;
        score += pts;
        const { x, y } = birdScreen(b);
        addPopup(x, y - 20 * b.D.s, "+" + pts, b.golden ? "#ffe27a" : "#fff", b.golden ? 30 : 24);
        spawnFeathers(x, y, b);
      }
    }
    if (hitBirds > 0) {
      sfx.cluck();
      hitSomething = true;
      if (hitBirds > 1) {
        const bonus = (hitBirds - 1) * 15;
        score += bonus;
        addPopup(px, py + 34, (hitBirds === 2 ? "Doppeltreffer" : hitBirds === 3 ? "Dreifachtreffer" : "Mehrfachtreffer") + " +" + bonus, "#ff6b35", 22);
      }
    }

    // Fuchs
    const fr = foxRect();
    if (fr && fox.rise > 0.45 && fox.mood !== "angry") {
      if ((px - fr.cx) ** 2 + (py - fr.cy) ** 2 <= 42 ** 2) {
        score = Math.max(0, score - 50);
        foxHits++;
        fox.mood = "angry";
        fox.line = pick(["Aua! Nicht den Fuchs!", "Hey! Ich bin das Maskottchen!", "Die Hühner sind da oben!"]);
        fox.phase = "stay";
        fox.timer = 1.3;
        addPopup(fr.cx, fr.y, "−50", "#ff5a5a", 30);
        sfx.ouch();
        hitSomething = true;
      }
    }

    // Ballon
    if (balloon && !balloon.hit && hitBalloon(px, py)) {
      balloon.hit = true;
      score += 100;
      const b = balloonPos();
      addPopup(b.x, b.y - 70, "+100 Ballon!", "#ffe27a", 30);
      burstConfetti(b.x, b.y);
      sfx.bonus();
      hitSomething = true;
    }

    // Windmühle
    const m = millPos();
    if (mill.cd <= 0 && Math.hypot(px - m.x, py - m.hubY) < 58) {
      mill.spin = 14; mill.cd = 5;
      score += 15;
      addPopup(m.x, m.hubY - 60, "+15 Mühle!", "#ffe27a", 22);
      sfx.bonus();
      hitSomething = true;
    }

    // Wegweiser
    const s = signGeom();
    if (sign.cd <= 0 && px > s.bx - 6 && px < s.bx + s.bw + 6 && py > s.by - 4 && py < s.by + s.bh + 4) {
      sign.flipping = 1; sign.cd = 6;
      score += 20;
      addPopup(s.x, s.by - 20, "+20 Wegweiser!", "#ffe27a", 22);
      sfx.bonus();
      hitSomething = true;
    }

    // Vogelscheuche: Hut
    const c = crowGeom();
    if (crow.hatOff <= 0 && px > c.x - 36 && px < c.x + 36 && py > c.headY - 42 && py < c.headY - 0) {
      crow.hatOff = 9;
      crow.hatX = c.x; crow.hatY = c.headY - 8;
      crow.hatVX = rand(-140, 140); crow.hatVY = -380; crow.hatRot = 0;
      score += 10;
      addPopup(c.x, c.headY - 50, "+10 Hut ab!", "#ffe27a", 22);
      sfx.bonus();
      hitSomething = true;
    }

    if (hitSomething) hitShots++;
  }

  function reload() {
    if (state !== "play" || reloadT > 0 || ammo === MAG) return;
    reloadT = RELOAD_MS / 1000;
    sfx.reload();
  }

  function spawnFeathers(x, y, b) {
    const col = PALETTE[b.variant];
    const n = 7 + Math.floor(b.D.s * 8);
    for (let i = 0; i < n; i++) {
      feathers.push({
        x, y,
        vx: rand(-120, 120) * b.D.s,
        vy: rand(-160, 20) * b.D.s,
        rot: rand(0, 6.28), vr: rand(-6, 6),
        size: rand(5, 10) * b.D.s,
        color: Math.random() < 0.7 ? col.body : col.wing,
        t: 0, ttl: rand(0.9, 1.6),
      });
    }
  }
  function burstConfetti(x, y) {
    for (let i = 0; i < 40; i++) {
      confetti.push({
        x, y, vx: rand(-220, 220), vy: rand(-260, 40),
        color: pick(["#ff6b35", "#fff", "#ffe600", "#ffc27a"]),
        rot: rand(0, 6), vr: rand(-10, 10), t: 0, ttl: rand(1, 1.8),
      });
    }
  }

  // ---------- Update ----------
  function update(dt) {
    const playing = state === "play";
    if (playing) {
      t += dt;
      timeLeft -= dt;
      if (timeLeft <= 0) { timeLeft = 0; finish(); }
    }

    // Schwenken
    let scroll = 0;
    if (keys.left) scroll -= 1;
    if (keys.right) scroll += 1;
    scroll += scrollHold;
    if (!mouse.touch && mouse.inside) {
      const edge = VW * 0.11;
      if (mouse.x < edge) scroll -= 1 - mouse.x / edge;
      else if (mouse.x > VW - edge) scroll += 1 - (VW - mouse.x) / edge;
    }
    camX = clamp(camX + clamp(scroll, -1, 1) * 720 * dt, 0, WORLD_W - VW);

    // Nachladen
    if (reloadT > 0) {
      reloadT -= dt;
      if (reloadT <= 0) { reloadT = 0; ammo = MAG; }
    }
    emptyHintCd -= dt;
    shake = Math.max(0, shake - dt * 40);
    flash = Math.max(0, flash - dt);
    recoil = Math.max(0, recoil - dt * 6);
    mouse.touchT = Math.max(0, mouse.touchT - dt);

    // Hühner spawnen
    const alive = birds.filter((b) => !b.dead).length;
    const target = Math.min(10, 3 + Math.floor(t / 11));
    spawnCd -= dt;
    if (playing && alive < target && spawnCd <= 0) {
      spawnBird();
      spawnCd = rand(0.25, 0.9);
    }

    for (let i = birds.length - 1; i >= 0; i--) {
      const b = birds[i];
      if (b.dead) {
        b.vy += 900 * dt;
        b.y += b.vy * dt;
        b.rot += dt * 5 * b.dir;
        if (b.y > VH + 80) birds.splice(i, 1);
        continue;
      }
      b.lx += b.vx * b.dir * dt;
      b.ph += b.bobF * dt;
      b.flap += dt * (10 + b.D.s * 4);
      if (Math.random() < dt * 0.4) b.targetY = rand(b.D.y[0], b.D.y[1]);
      b.baseY += (b.targetY - b.baseY) * dt * 0.8;
      b.y = b.baseY + Math.sin(b.ph) * b.bobA;
      const sx = sxOf(b.lx, b.D.p);
      if ((b.dir > 0 && sx > VW + 260) || (b.dir < 0 && sx < -260)) birds.splice(i, 1);
    }

    for (let i = feathers.length - 1; i >= 0; i--) {
      const f = feathers[i];
      f.t += dt;
      f.vy += 160 * dt;
      f.vx *= 1 - dt * 1.5;
      f.x += (f.vx + Math.sin(f.t * 6) * 30) * dt;
      f.y += f.vy * dt;
      f.rot += f.vr * dt;
      if (f.t > f.ttl) feathers.splice(i, 1);
    }
    for (let i = confetti.length - 1; i >= 0; i--) {
      const c = confetti[i];
      c.t += dt; c.vy += 400 * dt; c.x += c.vx * dt; c.y += c.vy * dt; c.rot += c.vr * dt;
      if (c.t > c.ttl) confetti.splice(i, 1);
    }
    for (let i = popups.length - 1; i >= 0; i--) {
      popups[i].t += dt;
      if (popups[i].t > 1.1) popups.splice(i, 1);
    }

    // Wolken
    for (const c of clouds) {
      c.x += c.v * dt;
      if (c.x - camX * P.clouds > VW + 200) c.x -= VW + 600;
    }

    // Mühle
    mill.a += mill.spin * dt;
    mill.spin += (0.7 - mill.spin) * dt * 0.6;
    mill.cd -= dt;

    // Wegweiser
    sign.cd -= dt;
    if (sign.flipping > 0) {
      const before = sign.flip;
      sign.flip += dt * 2.2;
      if (before < 0.5 && sign.flip >= 0.5) sign.home = !sign.home;
      if (sign.flip >= 1) { sign.flip = 0; sign.flipping = 0; }
    }

    // Hut
    if (crow.hatOff > 0) {
      crow.hatOff -= dt;
      crow.hatVY += 700 * dt;
      crow.hatX += crow.hatVX * dt;
      crow.hatY += crow.hatVY * dt;
      crow.hatRot += dt * 8;
    }

    // Fuchs
    fox.timer -= dt;
    if (fox.phase === "hidden" && fox.timer <= 0) {
      // bevorzugt einen Heuballen im Bild
      const visible = BALES.map((_, i) => i).filter((i) => {
        const x = balePos(i).x;
        return x > 60 && x < VW - 60;
      });
      fox.bale = visible.length ? pick(visible) : Math.floor(Math.random() * BALES.length);
      fox.phase = "up";
      fox.mood = Math.random() < 0.5 ? "happy" : "normal";
      fox.line = pick(["Psst!", "Da oben fliegen sie!", "Nicht auf mich zielen!", "Ich bin’s nur!", "Hunger!", "Hier ist 2FOX4!"]);
    } else if (fox.phase === "up") {
      fox.rise = Math.min(1, fox.rise + dt * 3.2);
      if (fox.rise >= 1) { fox.phase = "stay"; fox.timer = rand(1.8, 2.8); }
    } else if (fox.phase === "stay" && fox.timer <= 0) {
      fox.phase = "down";
    } else if (fox.phase === "down") {
      fox.rise = Math.max(0, fox.rise - dt * (fox.mood === "angry" ? 5 : 3));
      if (fox.rise <= 0) { fox.phase = "hidden"; fox.bale = -1; fox.timer = rand(5, 10); }
    }

    // Ballon
    if (!balloon) {
      balloonCd -= dt;
      if (balloonCd <= 0) {
        const dir = Math.random() < 0.5 ? 1 : -1;
        const sx = dir > 0 ? -90 : VW + 90;
        balloon = { lx: lxOf(sx, P.balloon), y: rand(120, 180), dir, v: rand(40, 55), ph: 0, hit: false };
      }
    } else {
      balloon.lx += balloon.v * balloon.dir * dt;
      balloon.ph += dt * 1.3;
      if (balloon.hit) balloon.y -= dt * 30;
      const sx = sxOf(balloon.lx, P.balloon);
      if ((balloon.dir > 0 && sx > VW + 200) || (balloon.dir < 0 && sx < -200) || balloon.y < -160) {
        balloon = null;
        balloonCd = rand(20, 28);
      }
    }
  }

  // ---------- Rendern ----------
  function drawLayer(g, L) {
    const off = camX * L.p;
    g.drawImage(L.c, -off, 0, L.w, VH);
  }

  function render() {
    if (!layers.sky) resize();
    const g = ctx;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.setTransform(S, 0, 0, S, 0, 0);
    const sh = shake > 0 ? { x: rand(-shake, shake), y: rand(-shake, shake) } : { x: 0, y: 0 };
    g.save();
    g.translate(sh.x, sh.y);

    g.drawImage(layers.sky.c, 0, 0, VW, VH);
    // Wolken
    for (const c of clouds) {
      const x = c.x - camX * P.clouds;
      g.fillStyle = "rgba(255,200,190,0.28)";
      g.beginPath();
      g.ellipse(x, c.y, c.w * 0.5, c.w * 0.14, 0, 0, Math.PI * 2);
      g.ellipse(x + c.w * 0.2, c.y - c.w * 0.08, c.w * 0.28, c.w * 0.12, 0, 0, Math.PI * 2);
      g.fill();
    }
    drawLayer(g, layers.hillsFar);
    drawBalloon(g);
    for (const b of birds) if (b.depth === "far") { const p = birdScreen(b); drawBird(g, b, p.x, p.y); }
    drawLayer(g, layers.hillsMid);
    drawMill(g);
    for (const b of birds) if (b.depth === "mid") { const p = birdScreen(b); drawBird(g, b, p.x, p.y); }
    drawLayer(g, layers.meadow);
    drawSign(g);
    drawScarecrow(g);
    for (let i = 0; i < BALES.length; i++) drawBale(g, i);
    drawFox(g);
    for (const b of birds) if (b.depth === "near") { const p = birdScreen(b); drawBird(g, b, p.x, p.y); }
    if (crow.hatOff > 0) drawHat(g, crow.hatX, crow.hatY, crow.hatRot);
    for (const f of feathers) {
      g.save();
      g.globalAlpha = 1 - f.t / f.ttl;
      g.translate(f.x, f.y);
      g.rotate(f.rot);
      g.fillStyle = f.color;
      g.beginPath();
      g.ellipse(0, 0, f.size, f.size * 0.35, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
    for (const c of confetti) {
      g.save();
      g.globalAlpha = 1 - c.t / c.ttl;
      g.translate(c.x, c.y);
      g.rotate(c.rot);
      g.fillStyle = c.color;
      g.fillRect(-4, -2, 8, 4);
      g.restore();
    }
    drawLayer(g, layers.fore);
    g.restore();

    if (flash > 0) {
      g.fillStyle = `rgba(255,240,200,${flash * 1.6})`;
      g.fillRect(0, 0, VW, VH);
    }

    for (const p of popups) {
      const a = 1 - p.t / 1.1;
      g.save();
      g.globalAlpha = a;
      g.font = `900 ${p.size}px Inter Variable, Inter, system-ui, sans-serif`;
      g.textAlign = "center";
      g.lineWidth = 5;
      g.strokeStyle = "rgba(0,0,0,0.65)";
      const hw = g.measureText(p.text).width / 2;
      const px = clamp(p.x, hw + 10, VW - hw - 10);
      const py = Math.max(p.size + 6, p.y - p.t * 50);
      g.strokeText(p.text, px, py);
      g.fillStyle = p.color;
      g.fillText(p.text, px, py);
      g.restore();
    }

    drawHud(g);
    drawCrosshair(g);
  }

  function pill(g, x, y, w, h) {
    g.beginPath();
    g.roundRect ? g.roundRect(x, y, w, h, h / 2) : g.rect(x, y, w, h);
  }

  function drawHud(g) {
    g.save();
    g.font = "800 13px JetBrains Mono Variable, ui-monospace, monospace";
    g.textBaseline = "middle";
    // Punkte
    g.fillStyle = "rgba(10,10,10,0.62)";
    pill(g, 14, 14, 196, 42); g.fill();
    g.fillStyle = "rgba(255,255,255,0.6)";
    g.fillText("PUNKTE", 30, 35);
    g.font = "900 24px JetBrains Mono Variable, ui-monospace, monospace";
    g.fillStyle = "#fff";
    g.fillText(String(score).padStart(4, "0"), 104, 36);
    // Zeit
    const secs = Math.ceil(timeLeft);
    const urgent = state === "play" && timeLeft <= 10;
    const tw = 128;
    g.fillStyle = urgent ? "rgba(185,28,28,0.8)" : "rgba(10,10,10,0.62)";
    pill(g, VW / 2 - tw / 2, 14, tw, 42); g.fill();
    g.fillStyle = "#fff";
    g.textAlign = "center";
    const pulse = urgent ? 1 + Math.max(0, Math.sin(t * 10)) * 0.12 : 1;
    g.font = `900 ${Math.round(24 * pulse)}px JetBrains Mono Variable, ui-monospace, monospace`;
    g.fillText(Math.floor(secs / 60) + ":" + String(secs % 60).padStart(2, "0"), VW / 2, 36);
    // Rekord
    g.textAlign = "right";
    g.fillStyle = "rgba(10,10,10,0.62)";
    pill(g, VW - 190, 14, 176, 42); g.fill();
    g.font = "800 13px JetBrains Mono Variable, ui-monospace, monospace";
    g.fillStyle = "rgba(255,255,255,0.6)";
    g.fillText("REKORD", VW - 110, 35);
    g.font = "900 22px JetBrains Mono Variable, ui-monospace, monospace";
    g.fillStyle = "#ff6b35";
    g.fillText(String(Math.max(best, score)).padStart(4, "0"), VW - 30, 36);

    // Patronen unten rechts
    const baseX = VW - 30, baseY = VH - 26;
    g.fillStyle = "rgba(10,10,10,0.55)";
    pill(g, baseX - MAG * 22 - 18, baseY - 44, MAG * 22 + 34, 58); g.fill();
    const filling = reloadT > 0 ? 1 - reloadT / (RELOAD_MS / 1000) : 1;
    for (let i = 0; i < MAG; i++) {
      const x = baseX - (i + 1) * 22;
      const full = reloadT > 0 ? i < Math.floor(filling * MAG) : i < ammo;
      g.globalAlpha = full ? 1 : 0.22;
      g.fillStyle = "#c62828";
      g.fillRect(x, baseY - 36, 14, 30);
      g.fillStyle = "#e0b04a";
      g.fillRect(x, baseY - 12, 14, 8);
      g.fillStyle = "rgba(255,255,255,0.35)";
      g.fillRect(x + 2, baseY - 34, 3, 20);
    }
    g.globalAlpha = 1;
    if (state === "play" && ammo === 0 && reloadT === 0) {
      g.textAlign = "center";
      g.font = "800 13px Inter Variable, Inter, system-ui, sans-serif";
      g.fillStyle = "#ffd89a";
      g.fillText(isCoarse ? "antippen zum Nachladen" : "Rechtsklick / Leertaste", baseX - (MAG * 22) / 2 - 2, baseY - 56);
    }

    // Übersicht: wo bin ich in der Landschaft?
    const mw = 150, mx = 24, my = VH - 30;
    g.fillStyle = "rgba(10,10,10,0.55)";
    pill(g, mx - 8, my - 12, mw + 16, 24); g.fill();
    g.fillStyle = "rgba(255,255,255,0.25)";
    g.fillRect(mx, my - 2, mw, 4);
    const vw = (VW / WORLD_W) * mw;
    const vx = mx + (camX / (WORLD_W - VW)) * (mw - vw);
    g.fillStyle = "#ff6b35";
    g.fillRect(vx, my - 5, vw, 10);

    // Randpfeile (Maus)
    if (!isCoarse && state === "play") {
      g.fillStyle = "rgba(255,255,255,0.35)";
      if (camX > 1) arrow(g, 22, VH / 2, -1);
      if (camX < WORLD_W - VW - 1) arrow(g, VW - 22, VH / 2, 1);
    }
    g.restore();
  }
  function arrow(g, x, y, d) {
    g.beginPath();
    g.moveTo(x + d * 10, y);
    g.lineTo(x - d * 6, y - 14);
    g.lineTo(x - d * 6, y + 14);
    g.closePath();
    g.fill();
  }

  function drawCrosshair(g) {
    if (state !== "play") return;
    if (mouse.touch ? mouse.touchT <= 0 : !mouse.inside) return;
    const { x, y } = mouse;
    const r = 17 + recoil * 8;
    g.save();
    if (mouse.touch) g.globalAlpha = Math.min(1, mouse.touchT * 3);
    for (const [col, lw] of [["rgba(0,0,0,0.7)", 5], ["#fff", 2.2]]) {
      g.strokeStyle = col;
      g.lineWidth = lw;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.moveTo(x - r - 9, y); g.lineTo(x - r + 7, y);
      g.moveTo(x + r - 7, y); g.lineTo(x + r + 9, y);
      g.moveTo(x, y - r - 9); g.lineTo(x, y - r + 7);
      g.moveTo(x, y + r - 7); g.lineTo(x, y + r + 9);
      g.stroke();
    }
    g.fillStyle = "#ff6b35";
    g.beginPath(); g.arc(x, y, 2.5, 0, Math.PI * 2); g.fill();
    g.restore();
  }

  // ---------- Loop ----------
  let last = 0;
  let raf = 0;
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    if (state === "play" || state === "ending") update(dt);
    render();
    if (state === "play" || state === "ending") raf = requestAnimationFrame(loop);
    else raf = 0;
  }
  function kick() {
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
  }

  // ---------- Ablauf ----------
  function start() {
    resize();
    resetGame();
    state = "play";
    ovStart.hidden = true;
    ovEnd.hidden = true;
    ovPause.hidden = true;
    audio();
    addPopup(VW / 2, VH / 2, "Los geht’s!", "#fff", 40);
    kick();
    canvas.focus({ preventScroll: true });
  }

  function finish() {
    state = "ending";
    sfx.end();
    addPopup(VW / 2, VH / 2, "Zeit!", "#ffd89a", 48);
    const isRecord = score > best;
    if (isRecord) {
      best = score;
      try { localStorage.setItem(BEST_KEY, String(best)); } catch (e) {}
    }
    setTimeout(() => {
      state = "over";
      const acc = shots ? Math.round((hitShots / shots) * 100) : 0;
      $("[data-fx=score]").textContent = String(score);
      $("[data-fx=birds]").textContent = String(birdsHit);
      $("[data-fx=acc]").textContent = acc + " %";
      $("[data-fx=best]").textContent = String(best);
      $("[data-fx=record]").hidden = !isRecord || score === 0;
      let line;
      if (score < 100) line = "Die Hühner feiern. Beim nächsten Mal zielen wir gemeinsam.";
      else if (score < 300) line = "Solide! Die Hühner sind gewarnt.";
      else if (score < 600) line = "Stark! So eine Klickrate hätten wir gern bei Google.";
      else line = "Legendär! Du bist ab sofort Ehrenfuchs.";
      if (foxHits === 1) line += " Und mich hast du einmal erwischt. Das merk ich mir.";
      else if (foxHits > 1) line += ` Und mich hast du ${["", "", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"][foxHits] || foxHits + "-"}mal erwischt. Das merk ich mir.`;
      $("[data-fx=line]").textContent = line;
      $("[data-fx=endfox]").src = foxDataURL(foxHits > 0 ? "angry" : score >= 300 ? "happy" : "normal", true);
      ovEnd.hidden = false;
      root.dispatchEvent(new CustomEvent("fox:record", { bubbles: true, detail: best }));
    }, 1100);
  }

  function pause() {
    if (state !== "play") return;
    state = "pause";
    ovPause.hidden = false;
  }
  function resume() {
    if (state !== "pause") return;
    state = "play";
    ovPause.hidden = true;
    kick();
  }

  // ---------- Eingabe ----------
  function toVirtual(e) {
    const r = canvas.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * VW, y: ((e.clientY - r.top) / r.height) * VH };
  }
  canvas.addEventListener("pointermove", (e) => {
    const p = toVirtual(e);
    mouse.x = p.x; mouse.y = p.y;
    mouse.touch = e.pointerType === "touch";
    mouse.inside = true;
  });
  canvas.addEventListener("pointerleave", () => { mouse.inside = false; });
  canvas.addEventListener("pointerdown", (e) => {
    const p = toVirtual(e);
    mouse.x = p.x; mouse.y = p.y;
    mouse.touch = e.pointerType !== "mouse";
    mouse.inside = true;
    if (state !== "play") return;
    e.preventDefault();
    if (e.button === 2) { reload(); return; }
    if (e.button !== 0) return;
    // Patronen antippen = nachladen
    if (p.x > VW - 30 - MAG * 22 - 18 && p.y > VH - 72 && (mouse.touch || ammo === 0)) { reload(); return; }
    if (mouse.touch) mouse.touchT = 0.7;
    shoot(p.x, p.y);
  });
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());

  function isActive() {
    return !root.closest("[data-game]") || root.closest("[data-game]").dataset.game === "fox";
  }
  window.addEventListener("keydown", (e) => {
    if (!isActive()) return;
    const k = e.key.toLowerCase();
    if (state === "play") {
      if (k === "arrowleft" || k === "a") { keys.left = true; e.preventDefault(); }
      if (k === "arrowright" || k === "d") { keys.right = true; e.preventDefault(); }
      if (k === " " || k === "r") { reload(); e.preventDefault(); }
      if (k === "escape" || k === "p") pause();
    } else if (state === "pause" && (k === "escape" || k === "p" || k === " ")) {
      e.preventDefault();
      resume();
    }
  });
  window.addEventListener("keyup", (e) => {
    const k = e.key.toLowerCase();
    if (k === "arrowleft" || k === "a") keys.left = false;
    if (k === "arrowright" || k === "d") keys.right = false;
  });

  // Touch-Pfeile
  root.querySelectorAll("[data-fx-scroll]").forEach((btn) => {
    const dir = parseInt(btn.dataset.fxScroll, 10);
    const on = (e) => { e.preventDefault(); scrollHold = dir; };
    const off = () => { scrollHold = 0; };
    btn.addEventListener("pointerdown", on);
    btn.addEventListener("pointerup", off);
    btn.addEventListener("pointercancel", off);
    btn.addEventListener("pointerleave", off);
  });

  root.querySelectorAll("[data-fx-action=start]").forEach((b) => b.addEventListener("click", start));
  root.querySelectorAll("[data-fx-action=resume]").forEach((b) => b.addEventListener("click", resume));

  document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
  window.addEventListener("arcade:select", (e) => {
    if (e.detail !== "fox") pause();
    else { resize(); if (!raf) render(); }
  });
  window.addEventListener("resize", () => { resize(); if (!raf) render(); });

  // Vorschau-Bild hinter dem Start-Overlay
  function preview() {
    resize();
    if (!raf) render();
  }
  if (document.readyState === "complete") preview();
  else window.addEventListener("load", preview);
  Promise.all(Object.values(foxImg).map((i) => i.decode?.().catch(() => {}))).then(() => { if (!raf) render(); });

  return {
    start, pause, resume,
    get state() { return state; },
    // für automatische Tests
    get info() {
      return {
        score, ammo, shots, birdsHit, foxHits, timeLeft, camX,
        birds: birds.filter((b) => !b.dead).map((b) => ({ ...birdScreen(b), depth: b.depth })),
        fox: fox.bale >= 0 && fox.rise > 0.9 ? foxRect() : null,
        balloon: balloonPos(),
      };
    },
  };
}
