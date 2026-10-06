// Touch-Steuerung für Handy/Tablet (seit 06.10.2026)
// Linke Bildschirmhälfte: Stick zum Laufen (ganz durchdrücken = rennen)
// Rechte Bildschirmhälfte: wischen = umsehen
// Knöpfe rechts: Feuer (gedrückt halten + ziehen = zielen beim Schießen), Springen, Granate,
// Nachladen, Zielfernrohr (nur Gewehr), Luft anhalten (nur im Zielfernrohr). Pause oben rechts.
// Waffenleiste unten in der Mitte: Waffe antippen = wechseln, Fernglas antippen = an/aus.

const STICK_R = 54; // Radius des Sticks in px

export class TouchControls {
  constructor(game) {
    this.g = game;
    this.move = { x: 0, y: 0, mag: 0 }; // x = seitwärts (rechts +), y = vorwärts (+)
    this.sprint = false;
    this.hold = false; // Luft anhalten
    this.stickId = null;
    this.lookIds = new Map(); // touchId -> {x, y}
    this.fireId = null;
    this.build();
    this.bind();
  }

  build() {
    const layer = (this.layer = document.createElement('div'));
    layer.id = 'touch';
    layer.innerHTML = `
      <div class="t-stick" id="t-stick"><i></i></div>
      <div class="t-stickhint"><span>laufen</span></div>
      <div class="t-lookhint"><span>wischen = umsehen</span></div>`;
    document.body.insertBefore(layer, document.getElementById('hud'));

    const ctl = (this.ctl = document.createElement('div'));
    ctl.id = 'tctl';
    ctl.innerHTML = `
      <button type="button" class="tb t-fire" data-t="fire" aria-label="Feuer"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" stroke-width="2"/></svg></button>
      <button type="button" class="tb t-jump" data-t="jump" aria-label="Springen"><svg viewBox="0 0 24 24"><path d="M5 14l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
      <button type="button" class="tb t-nade" data-t="nade" aria-label="Granate"><svg viewBox="0 0 24 24"><circle cx="11" cy="14" r="6.5" fill="currentColor"/><path d="M9 6.5h5v2.5H9z" fill="currentColor"/><path d="M14 6.5c2-2.5 4.5-2 5.5 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><i id="t-nades">3</i></button>
      <button type="button" class="tb t-reload" data-t="reload" aria-label="Nachladen"><svg viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M19 4v4.5h-4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button type="button" class="tb t-scope" data-t="scope" aria-label="Zielfernrohr"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg></button>
      <button type="button" class="tb t-breath" data-t="breath" aria-label="Luft anhalten"><span>LUFT<br>HALTEN</span></button>
      <button type="button" class="tb t-pause" data-t="pause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg></button>`;
    document.body.appendChild(ctl);
    this.stickEl = layer.querySelector('#t-stick');
    this.knob = this.stickEl.querySelector('i');
  }

  bind() {
    const g = this.g;
    const opt = { passive: false };
    // Fläche: Stick links, Blick rechts
    this.layer.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (g.state !== 'play') return;
      for (const t of e.changedTouches) {
        const w = this.layer.clientWidth;
        if (t.clientX < w * 0.42 && this.stickId === null) {
          this.stickId = t.identifier;
          this.ox = t.clientX; this.oy = t.clientY;
          this.stickEl.style.left = this.ox + 'px';
          this.stickEl.style.top = this.oy + 'px';
          this.stickEl.classList.add('on');
          this.layer.classList.add('used-stick');
          this.setStick(t.clientX, t.clientY);
        } else {
          this.lookIds.set(t.identifier, { x: t.clientX, y: t.clientY });
          this.layer.classList.add('used-look');
        }
      }
    }, opt);
    const moveH = (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier === this.stickId) this.setStick(t.clientX, t.clientY);
        const l = this.lookIds.get(t.identifier);
        if (l) { this.look(t.clientX - l.x, t.clientY - l.y); l.x = t.clientX; l.y = t.clientY; }
      }
    };
    const endH = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.stickId) this.releaseStick();
        this.lookIds.delete(t.identifier);
        if (t.identifier === this.fireId) { this.fireId = null; g.mouseDown = false; this.ctl.querySelector('.t-fire').classList.remove('down'); }
        if (t.identifier === this.breathId) { this.breathId = null; this.hold = false; this.ctl.querySelector('.t-breath').classList.remove('down'); }
      }
    };
    // move/end am Dokument, damit Finger, die über Knöpfe wandern, weiter zählen
    document.addEventListener('touchmove', moveH, opt);
    document.addEventListener('touchend', endH);
    document.addEventListener('touchcancel', endH);

    // Knöpfe
    this.ctl.querySelectorAll('.tb').forEach((b) => {
      b.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const t = e.changedTouches[0];
        this.press(b.dataset.t, t, b);
      }, opt);
      // Fallback für Maus (Tests am Rechner mit ?touch)
      b.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); this.press(b.dataset.t, null, b); });
      b.addEventListener('mouseup', () => { if (b.dataset.t === 'fire') g.mouseDown = false; if (b.dataset.t === 'breath') this.hold = false; b.classList.remove('down'); });
    });

    // Waffenleiste antippen
    document.querySelectorAll('.slot[data-w]').forEach((el) => {
      const pick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (g.state !== 'play') return;
        const w = el.dataset.w;
        if (w === 'nade') { g.throwGrenade(); return; }
        if (w === 'binoc') { if (g.hasBinoc) { g.binoc = !g.binoc; g.audio.zoom(g.binoc); } return; }
        if (g.arsenal.select(w)) g.audio.switchWeapon();
        else if (!g.arsenal.hasAmmo(w)) g.flashSlot(w);
      };
      el.addEventListener('touchstart', pick, opt);
    });
    // Upgrade-Karten reagieren sofort auf Antippen
    document.getElementById('up-cards').addEventListener('touchstart', (e) => {
      const c = e.target.closest('.upcard');
      if (!c) return;
      e.preventDefault();
      const i = [...c.parentNode.children].indexOf(c);
      g.chooseUpgrade(i);
    }, opt);

    // Doppeltipp-Zoom und Lupe verhindern
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());
  }

  press(kind, t, b) {
    const g = this.g;
    if (kind === 'pause') { if (g.state === 'play') g.pause(); return; }
    if (g.state !== 'play') return;
    b.classList.add('down');
    if (kind !== 'fire' && kind !== 'breath') setTimeout(() => b.classList.remove('down'), 140);
    if (kind === 'fire') {
      g.mouseDown = true;
      g.tryFire();
      if (t) { this.fireId = t.identifier; this.lookIds.set(t.identifier, { x: t.clientX, y: t.clientY }); }
    }
    if (kind === 'jump') g.jump();
    if (kind === 'nade') g.throwGrenade();
    if (kind === 'reload') g.reload();
    if (kind === 'scope') {
      if (g.arsenal.current === 'sniper') { g.rmb = !g.rmb; if (g.rmb) g.binoc = false; g.audio.zoom(g.rmb); }
    }
    if (kind === 'breath') { this.hold = true; if (t) this.breathId = t.identifier; }
  }

  setStick(x, y) {
    let dx = x - this.ox, dy = y - this.oy;
    const d = Math.hypot(dx, dy);
    // Stick wandert mit, wenn der Finger weit rausrutscht
    if (d > STICK_R * 1.6) {
      const k = (d - STICK_R * 1.6) / d;
      this.ox += dx * k; this.oy += dy * k;
      this.stickEl.style.left = this.ox + 'px';
      this.stickEl.style.top = this.oy + 'px';
      dx = x - this.ox; dy = y - this.oy;
    }
    const dd = Math.hypot(dx, dy);
    const cl = Math.min(dd, STICK_R);
    const nx = dd > 0 ? dx / dd : 0, ny = dd > 0 ? dy / dd : 0;
    this.knob.style.transform = `translate(${nx * cl}px, ${ny * cl}px)`;
    let mag = Math.min(1, dd / STICK_R);
    mag = mag < 0.12 ? 0 : (mag - 0.12) / 0.88; // tote Zone
    this.move.x = nx * mag;
    this.move.y = -ny * mag;
    this.move.mag = mag;
    // ganz durchgedrückt und überwiegend nach vorn = rennen
    this.sprint = dd > STICK_R * 1.05 && -ny > 0.55;
    this.stickEl.classList.toggle('run', this.sprint);
  }

  releaseStick() {
    this.stickId = null;
    this.move.x = this.move.y = this.move.mag = 0;
    this.sprint = false;
    this.knob.style.transform = '';
    this.stickEl.classList.remove('on', 'run');
  }

  look(dx, dy) {
    const g = this.g;
    if (g.state !== 'play' || g.player.dead) return;
    const s = 0.0062 * g.settings.sens * (g.camera.fov / 74);
    dx = Math.max(-120, Math.min(120, dx)); dy = Math.max(-120, Math.min(120, dy));
    g.player.yaw -= dx * s;
    g.player.pitch = Math.max(-1.45, Math.min(1.45, g.player.pitch - dy * s * 0.85));
    g.look.dx += dx * 1.6; g.look.dy += dy * 1.6;
  }

  reset() {
    this.releaseStick();
    this.lookIds.clear();
    this.fireId = null;
    this.hold = false;
    this.g.mouseDown = false;
    this.ctl.querySelectorAll('.down').forEach((b) => b.classList.remove('down'));
  }

  // pro Bild: Knöpfe je nach Lage zeigen
  update() {
    const g = this.g, a = g.arsenal;
    const playing = g.state === 'play' && !g.player.dead;
    const scoped = (g.scopeAmt || 0) > 0.5;
    const cls = this.ctl.classList;
    cls.toggle('show', playing);
    this.layer.classList.toggle('show', playing);
    cls.toggle('sniper', a.current === 'sniper' && !a.pending);
    cls.toggle('scoped', scoped);
    cls.toggle('binoc', !!g.binoc);
    const sb = this.ctl.querySelector('.t-scope');
    sb.classList.toggle('active', !!g.rmb);
    const n = document.getElementById('t-nades');
    if (n.textContent !== String(a.grenades)) n.textContent = a.grenades;
    this.ctl.querySelector('.t-nade').classList.toggle('off', a.grenades <= 0);
    if (!playing && (this.stickId !== null || this.lookIds.size || this.fireId !== null)) this.reset();
  }
}
