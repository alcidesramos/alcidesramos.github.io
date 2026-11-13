/* Buscador general: videos, cursos, proyectos y repositorios de código. */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const C = window.CURSOS || CURSOS, P = window.PROYECTOS || PROYECTOS, R = window.REPOS || REPOS;
  const grupoDe = {};
  C.grupos.forEach((g) => g.cursos.forEach((c) => (grupoDe[c] = g.nombre)));

  // Índice
  const videos = [], cursos = [], proyectos = [], repos = [];
  for (const [slug, c] of Object.entries(C.cursos)) {
    cursos.push({ slug, t: c.titulo, d: c.desc, n: c.videos.length, g: grupoDe[slug], k: norm(c.titulo + ' ' + grupoDe[slug]), kd: norm(c.desc) });
    for (const v of c.videos) videos.push({ ...v, slug, curso: c.titulo, k: norm(v.t), kd: norm(v.d + ' ' + c.titulo + ' ' + (grupoDe[slug] || '') + ' ' + (v.m || []).join(' ') + ' ' + (v.g || []).join(' ')) });
  }
  for (const p of P) proyectos.push({ ...p, k: norm(p.titulo), kd: norm(p.texto + ' ' + p.tags.join(' ') + ' ' + p.area) });
  for (const r of R.repos) repos.push({ ...r, k: norm(r.t + ' ' + r.n), kd: norm(r.c + ' ' + r.v.map((x) => x[1]).join(' ')) });

  function puntuar(item, terms) {
    let s = 0;
    for (const t of terms) {
      if (item.k.includes(t)) s += 3;
      else if (item.kd.includes(t)) s += 1;
      else return 0;
    }
    return s;
  }
  const buscarEn = (lista, terms) => lista.map((x) => [puntuar(x, terms), x]).filter((a) => a[0] > 0).sort((a, b) => b[0] - a[0]).map((a) => a[1]);

  const AREAS = { naval: 'Naval y defensa', industria: 'Industria e IoT', biomedica: 'Biomédica', aula: 'Con mis estudiantes' };
  let limiteVideos = 24, ultimo = '';

  function tVideo(v) {
    return `<article class="clase">
      <a class="clase-img" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" aria-label="Ver video: ${esc(v.t)}">
        <span class="clase-fallback" aria-hidden="true"><span>${esc(grupoDe[v.slug] || '')}</span></span>
        <img src="img/cursos/${v.id}.jpg" alt="" loading="lazy" onerror="if(!this.dataset.r){this.dataset.r=1;this.src='https://i.ytimg.com/vi/${v.id}/mqdefault.jpg'}else{this.remove()}">
        <span class="play" aria-hidden="true"></span>
      </a>
      <div class="clase-cuerpo">
        <ul class="tags"><li>${esc(v.curso)}</li></ul>
        <h3>${esc(v.t)}</h3>
        ${v.d ? `<p>${esc(v.d.length > 180 ? v.d.slice(0, 180) + '…' : v.d)}</p>` : ''}
        <div class="clase-acciones">
          <a class="btn-mini btn-video" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Ver video</a>
          <a class="btn-mini btn-codigo" href="cursos.html#${v.slug}">Ver el curso</a>
          ${(v.c && v.c[0]) ? `<a class="btn-mini btn-codigo" href="${esc(v.c[0])}" target="_blank" rel="noopener">Código</a>` : ''}
        </div>
      </div>
    </article>`;
  }
  const tCurso = (c) => `<a class="res-item" href="cursos.html#${c.slug}"><span class="area">${esc(c.g)} · ${c.n} clases</span><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></a>`;
  const tProy = (p) => `<a class="res-item res-proy" href="trayectoria.html#proyectos"><img src="img/${p.img}" alt="" loading="lazy"><div><span class="area">${AREAS[p.area] || ''}${p.anio ? ' · ' + esc(p.anio) : ''}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></div></a>`;
  const tRepo = (r) => `<a class="res-item" href="https://github.com/alcidesramos/${esc(r.n)}" target="_blank" rel="noopener"><span class="area">${esc(r.c)}${r.v.length ? ' · ' + r.v.length + (r.v.length === 1 ? ' video' : ' videos') : ''}</span><h3><code>${esc(r.n)}</code></h3><p>${esc(r.t)}</p></a>`;

  function bloque(id, titulo, items, plantilla, clase, extra) {
    if (!items.length) return '';
    return `<section class="res-grupo" id="${id}"><h2>${titulo} <small>${items.length}</small></h2><div class="${clase}">${items.map(plantilla).join('')}</div>${extra || ''}</section>`;
  }

  function buscar(q, empujar) {
    q = q.trim();
    const terms = norm(q).split(/\s+/).filter((t) => t.length > 1 || /\d/.test(t));
    if (q !== ultimo) limiteVideos = 24;
    ultimo = q;
    if (empujar) history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
    if (!terms.length) { $('resultados').innerHTML = ''; $('res-resumen').textContent = ''; $('sugerencias').hidden = false; return; }
    $('sugerencias').hidden = true;
    const rv = buscarEn(videos, terms), rc = buscarEn(cursos, terms), rp = buscarEn(proyectos, terms), rr = buscarEn(repos, terms);
    const total = rv.length + rc.length + rp.length + rr.length;
    $('res-resumen').innerHTML = total
      ? `${total} resultados para <strong>${esc(q)}</strong>: ` + [[rv, 'videos', 'r-videos'], [rc, 'cursos', 'r-cursos'], [rp, 'proyectos', 'r-proyectos'], [rr, 'repositorios', 'r-codigo']].filter((a) => a[0].length).map((a) => `<a href="#${a[2]}">${a[0].length} ${a[1]}</a>`).join(' · ')
      : `No encontré nada para <strong>${esc(q)}</strong>. Prueba con otra palabra, por ejemplo: ADC, PWM, Bluetooth, PID.`;
    const mas = rv.length > limiteVideos ? `<p style="text-align:center;margin-top:22px"><button class="btn btn-sec" id="mas-videos" type="button">Ver más videos (${rv.length - limiteVideos})</button></p>` : '';
    $('resultados').innerHTML =
      bloque('r-cursos', 'Cursos', rc, tCurso, 'res-lista') +
      bloque('r-proyectos', 'Proyectos', rp, tProy, 'res-lista') +
      bloque('r-videos', 'Videos', rv.slice(0, limiteVideos), tVideo, 'grid-clases', mas).replace(/<small>\d+<\/small>/, `<small>${rv.length}</small>`) +
      bloque('r-codigo', 'Código en GitHub', rr, tRepo, 'res-lista');
    const b = $('mas-videos');
    if (b) b.onclick = () => { limiteVideos += 48; buscar($('q').value, false); };
  }

  let espera;
  $('q').addEventListener('input', () => { clearTimeout(espera); espera = setTimeout(() => buscar($('q').value, true), 180); });
  $('form-buscar').addEventListener('submit', (e) => { e.preventDefault(); buscar($('q').value, true); });
  document.querySelectorAll('[data-q]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); $('q').value = a.dataset.q; buscar(a.dataset.q, true); }));
  $('res-total').textContent = `${videos.length} videos, ${cursos.length} cursos, ${proyectos.length} proyectos y ${repos.length} repositorios`;
  const q0 = new URLSearchParams(location.search).get('q') || '';
  $('q').value = q0;
  buscar(q0, false);
})();
