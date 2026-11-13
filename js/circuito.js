/* Fondo animado tipo tarjeta PCB: chips PIC, ESP32, STM32, sensores,
   pistas de cobre con pulsos de señal y ondas IoT. Sin dependencias. */
(function () {
  const canvas = document.getElementById('circuito');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const C = {
    fondo: '#06120f',
    rejilla: 'rgba(80, 160, 130, 0.06)',
    pista: 'rgba(196, 132, 60, 0.30)',
    pistaBrillo: 'rgba(240, 170, 80, 0.9)',
    pad: 'rgba(214, 160, 90, 0.55)',
    chip: '#0d1a17',
    chipBorde: 'rgba(120, 200, 170, 0.35)',
    texto: 'rgba(170, 230, 210, 0.75)',
    led: ['#3cf2c4', '#ffb347', '#ff5d73', '#7cc4ff'],
    wifi: 'rgba(60, 242, 196, 0.55)'
  };

  const G = 24; // paso de rejilla
  let W, H, dpr, chips = [], pistas = [], pulsos = [], leds = [], t = 0;

  const CHIPS = [
    { nombre: 'STM32', sub: 'ARM Cortex-M4', w: 6, h: 6 },
    { nombre: 'ESP32', sub: 'WiFi · BLE', w: 7, h: 5, wifi: true },
    { nombre: 'PIC16F877A', sub: 'MCU 8 bits', w: 8, h: 3 },
    { nombre: 'MPU6050', sub: 'IMU', w: 3, h: 3 },
    { nombre: 'DHT22', sub: 'Temp/Hum', w: 3, h: 4 },
    { nombre: 'L298N', sub: 'Motores', w: 4, h: 3 },
    { nombre: 'HC-05', sub: 'Bluetooth', w: 4, h: 2, wifi: true },
    { nombre: 'nRF24', sub: 'RF 2.4 GHz', w: 4, h: 2, wifi: true }
  ];

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function solapa(a, b, m) {
    return !(a.x + a.w + m < b.x || b.x + b.w + m < a.x || a.y + a.h + m < b.y || b.y + b.h + m < a.y);
  }

  function construir() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.floor(W / G), filas = Math.floor(H / G);
    chips = []; pistas = []; pulsos = []; leds = [];

    // En pantallas pequeñas, menos chips
    const lista = W < 700 ? CHIPS.slice(0, 5) : CHIPS;
    for (const def of lista) {
      for (let intento = 0; intento < 60; intento++) {
        const c = { ...def, x: Math.floor(rnd(1, cols - def.w - 1)), y: Math.floor(rnd(1, filas - def.h - 1)) };
        if (!chips.some(o => solapa(c, o, 3))) { chips.push(c); break; }
      }
    }

    // Pistas que salen de los pines de cada chip
    for (const c of chips) {
      const pines = [];
      for (let i = 0; i < c.w; i++) { pines.push([c.x + i + 0.5, c.y, 0, -1]); pines.push([c.x + i + 0.5, c.y + c.h, 0, 1]); }
      for (let j = 0; j < c.h; j++) { pines.push([c.x, c.y + j + 0.5, -1, 0]); pines.push([c.x + c.w, c.y + j + 0.5, 1, 0]); }
      for (const [px, py, dx, dy] of pines) {
        if (Math.random() < 0.45) continue;
        const pts = [[px, py]];
        let x = px, y = py, vx = dx, vy = dy;
        const segs = Math.floor(rnd(2, 5));
        for (let s = 0; s < segs; s++) {
          const largo = Math.floor(rnd(2, 9));
          x += vx * largo; y += vy * largo;
          pts.push([x, y]);
          // giro de 45° o 90°
          const r = Math.random();
          if (vx !== 0 && vy === 0) { vy = r < 0.5 ? -1 : 1; if (Math.random() < 0.5) vx = 0; }
          else if (vy !== 0 && vx === 0) { vx = r < 0.5 ? -1 : 1; if (Math.random() < 0.5) vy = 0; }
          else { if (Math.random() < 0.5) vx = 0; else vy = 0; }
        }
        const p = pts.map(([a, b]) => [a * G, b * G]);
        let L = 0; const acum = [0];
        for (let i = 1; i < p.length; i++) { L += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); acum.push(L); }
        pistas.push({ p, L, acum });
      }
    }

    // LEDs sueltos
    const nLeds = Math.floor((W * H) / 60000);
    for (let i = 0; i < nLeds; i++) {
      leds.push({ x: Math.floor(rnd(1, cols)) * G, y: Math.floor(rnd(1, filas)) * G, c: C.led[i % C.led.length], f: rnd(0.5, 2), fase: rnd(0, 6) });
    }

    for (let i = 0; i < Math.min(40, pistas.length); i++) nuevoPulso(true);
  }

  function nuevoPulso(inicial) {
    if (!pistas.length) return;
    const tr = pistas[Math.floor(Math.random() * pistas.length)];
    pulsos.push({ tr, d: inicial ? rnd(0, tr.L) : 0, v: rnd(60, 160), color: Math.random() < 0.75 ? C.pistaBrillo : '#3cf2c4' });
  }

  function puntoEn(tr, d) {
    const { p, acum } = tr;
    for (let i = 1; i < p.length; i++) {
      if (d <= acum[i]) {
        const k = (d - acum[i - 1]) / (acum[i] - acum[i - 1] || 1);
        return [p[i - 1][0] + (p[i][0] - p[i - 1][0]) * k, p[i - 1][1] + (p[i][1] - p[i - 1][1]) * k];
      }
    }
    return p[p.length - 1];
  }

  function dibujar(dt) {
    ctx.fillStyle = C.fondo; ctx.fillRect(0, 0, W, H);

    // rejilla de puntos
    ctx.fillStyle = C.rejilla;
    for (let x = 0; x < W; x += G) for (let y = 0; y < H; y += G) ctx.fillRect(x - 1, y - 1, 2, 2);

    // pistas
    ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.pista;
    for (const tr of pistas) {
      ctx.beginPath(); ctx.moveTo(tr.p[0][0], tr.p[0][1]);
      for (let i = 1; i < tr.p.length; i++) ctx.lineTo(tr.p[i][0], tr.p[i][1]);
      ctx.stroke();
      const f = tr.p[tr.p.length - 1];
      ctx.fillStyle = C.pad; ctx.beginPath(); ctx.arc(f[0], f[1], 4, 0, 7); ctx.fill();
      ctx.fillStyle = C.fondo; ctx.beginPath(); ctx.arc(f[0], f[1], 1.6, 0, 7); ctx.fill();
    }

    // pulsos de señal
    for (const pu of pulsos) {
      pu.d += pu.v * dt;
      const [x, y] = puntoEn(pu.tr, pu.d);
      const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
      g.addColorStop(0, pu.color); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 10, 0, 7); ctx.fill();
    }
    for (let i = pulsos.length - 1; i >= 0; i--) if (pulsos[i].d > pulsos[i].tr.L) { pulsos.splice(i, 1); nuevoPulso(false); }

    // ondas IoT
    for (const c of chips) {
      if (!c.wifi) continue;
      const cx = (c.x + c.w / 2) * G, cy = c.y * G - 6;
      for (let k = 0; k < 3; k++) {
        const fase = ((t * 0.6 + k / 3) % 1);
        ctx.strokeStyle = `rgba(60, 242, 196, ${0.55 * (1 - fase)})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 8 + fase * 34, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
      }
    }

    // chips
    for (const c of chips) {
      const x = c.x * G, y = c.y * G, w = c.w * G, h = c.h * G;
      ctx.fillStyle = C.pad;
      for (let i = 0; i < c.w; i++) { ctx.fillRect(x + i * G + G / 2 - 3, y - 6, 6, 6); ctx.fillRect(x + i * G + G / 2 - 3, y + h, 6, 6); }
      for (let j = 0; j < c.h; j++) { ctx.fillRect(x - 6, y + j * G + G / 2 - 3, 6, 6); ctx.fillRect(x + w, y + j * G + G / 2 - 3, 6, 6); }
      ctx.fillStyle = C.chip; ctx.strokeStyle = C.chipBorde; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, 4) : ctx.rect(x, y, w, h); ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.chipBorde; ctx.beginPath(); ctx.arc(x + 8, y + 8, 3, 0, 7); ctx.fill();
      ctx.fillStyle = C.texto; ctx.textAlign = 'center';
      const fs = Math.max(10, Math.min(15, w / (c.nombre.length * 0.62)));
      ctx.font = `600 ${fs}px "JetBrains Mono", monospace`;
      ctx.fillText(c.nombre, x + w / 2, y + h / 2 + (h > G * 2 ? 0 : 4));
      if (h > G * 2) { ctx.font = `400 10px "JetBrains Mono", monospace`; ctx.fillStyle = 'rgba(170,230,210,0.45)'; ctx.fillText(c.sub, x + w / 2, y + h / 2 + 16); }
    }

    // LEDs parpadeando
    for (const l of leds) {
      const a = 0.25 + 0.75 * Math.max(0, Math.sin(t * l.f + l.fase));
      ctx.globalAlpha = a;
      const g = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, 9);
      g.addColorStop(0, l.c); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(l.x, l.y, 9, 0, 7); ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  let ultimo = performance.now(), visible = true;
  function bucle(ahora) {
    const dt = Math.min(0.05, (ahora - ultimo) / 1000); ultimo = ahora; t += dt;
    if (visible) dibujar(dt);
    requestAnimationFrame(bucle);
  }

  let espera;
  window.addEventListener('resize', () => { clearTimeout(espera); espera = setTimeout(() => { construir(); if (reducir) dibujar(0); }, 150); });
  new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(canvas);

  construir();
  if (reducir) dibujar(0); else requestAnimationFrame(bucle);
})();
