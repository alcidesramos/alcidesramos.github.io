// Página de cursos: grupos, cursos, búsqueda, filtro por micro y saltos por semestre.
(function () {
  const D = window.CURSOS || CURSOS;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const fecha = (f) => { if (!f) return ''; const [y, m, d] = f.split('-'); return `${+d} ${MESES[+m - 1]} ${y}`; };
  const grupoDe = {};
  D.grupos.forEach((g) => g.cursos.forEach((c) => (grupoDe[c] = g.nombre)));

  const total = Object.values(D.cursos).reduce((a, c) => a + c.videos.length, 0);
  $('resumen-cursos').textContent = `Hoy son ${Object.keys(D.cursos).length} cursos y ${total} clases.`;

  let actual = null, micro = 'Todos';

  function textoCodigo(u) {
    if (/github\.com/.test(u)) return 'Código en GitHub';
    if (/libstock/.test(u)) return 'Código en Libstock';
    if (/drive\.google/.test(u)) return 'Archivos en Drive';
    if (/wokwi/.test(u)) return 'Abrir en Wokwi';
    return 'Descargar código';
  }

  function tarjeta(v, curso) {
    const insignia = v.n ? `Clase ${v.n}` : v.f ? fecha(v.f) : '';
    const etiquetas = [...(v.g || []), ...(v.m || []).filter((m) => m !== 'General')];
    const codigos = (v.c || []).slice(0, 2).map((u) => `<a class="btn-mini btn-codigo" href="${esc(u)}" target="_blank" rel="noopener">${textoCodigo(u)}</a>`).join('');
    return `<article class="clase" data-texto="${esc((v.t + ' ' + v.d).toLowerCase())}" data-micro="${esc((v.m || []).join('|'))}">
      <a class="clase-img" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" aria-label="Ver video: ${esc(v.t)}">
        <span class="clase-fallback" aria-hidden="true"><span>${esc(grupoDe[curso] || '')}</span></span>
        <img src="${(window.MINIATURAS && window.MINIATURAS[v.id]) || `img/cursos/${v.id}.jpg`}" alt="" loading="lazy" onerror="if(!this.dataset.r){this.dataset.r=1;this.src='https://i.ytimg.com/vi/${v.id}/mqdefault.jpg'}else{this.remove()}">
        <span class="play" aria-hidden="true"></span>
        ${insignia ? `<span class="insignia">${insignia}</span>` : ''}
      </a>
      <div class="clase-cuerpo">
        ${etiquetas.length ? `<ul class="tags">${etiquetas.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
        <h3>${esc(v.t)}</h3>
        ${v.d ? `<p>${esc(v.d)}</p>` : ''}
        <div class="clase-acciones">
          <a class="btn-mini btn-video" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Ver video</a>
          ${codigos}
        </div>
      </div>
    </article>`;
  }

  function pintarGrupos() {
    $('grupos').innerHTML = D.grupos.map((g) =>
      `<button type="button" data-grupo="${esc(g.nombre)}" aria-pressed="${grupoDe[actual] === g.nombre}">${esc(g.nombre)}</button>`).join('');
    const g = D.grupos.find((x) => x.nombre === grupoDe[actual]);
    $('lista-cursos').innerHTML = g.cursos.map((s) => {
      const c = D.cursos[s];
      return `<a class="curso-chip${s === actual ? ' activo' : ''}" href="#${s}" ${s === actual ? 'aria-current="true"' : ''}>
        <strong>${esc(c.titulo)}</strong><span>${c.videos.length} ${c.videos.length === 1 ? 'video' : 'videos'}</span></a>`;
    }).join('');
  }

  function pintarCurso() {
    const c = D.cursos[actual];
    const conCodigo = c.videos.filter((v) => v.c && v.c.length).length;
    $('curso-cabecera').innerHTML = `
      <span class="etiqueta">// ${esc(grupoDe[actual])}</span>
      <h2 class="titulo-seccion">${esc(c.titulo)}</h2>
      <p class="intro">${esc(c.desc)}</p>
      <div class="curso-datos"><span><b>${c.videos.length}</b> ${c.videos.length === 1 ? 'video' : 'videos'}</span><span><b>${conCodigo}</b> con código</span>
      <a class="btn btn-sec" href="https://www.youtube.com/playlist?list=${c.lista}" target="_blank" rel="noopener">Ver la lista en YouTube</a></div>`;
    micro = 'Todos';
    $('filtro-micro').innerHTML = c.filtros ? ['Todos', ...c.filtros].map((m) =>
      `<button type="button" data-micro="${m}" aria-pressed="${m === micro}">${m}</button>`).join('') : '';
    $('filtro-micro').hidden = !c.filtros;
    $('buscar').value = '';
    if (c.secciones) {
      $('saltos').innerHTML = '<span>Ir a:</span>' + c.secciones.map((s) => `<a href="#${actual}/${s.id}" data-salto="${s.id}">${esc(s.nombre)}</a>`).join('');
      $('clases').innerHTML = c.secciones.map((s) => {
        const vs = c.videos.filter((v) => v.s === s.id);
        return `<section class="seccion-clases" id="sec-${s.id}"><h3 class="seccion-titulo">${esc(s.nombre)} <small>${vs.length} ${vs.length === 1 ? 'clase' : 'clases'}</small></h3>
          <div class="grid-clases">${vs.map((v) => tarjeta(v, actual)).join('')}</div></section>`;
      }).join('');
    } else {
      $('saltos').innerHTML = '';
      $('clases').innerHTML = `<div class="grid-clases">${c.videos.map((v) => tarjeta(v, actual)).join('')}</div>`;
    }
    $('saltos').hidden = !c.secciones;
    filtrar();
  }

  function filtrar() {
    const q = $('buscar').value.trim().toLowerCase();
    let visibles = 0;
    document.querySelectorAll('#clases .clase').forEach((el) => {
      const ok = (!q || el.dataset.texto.includes(q)) && (micro === 'Todos' || el.dataset.micro.split('|').includes(micro));
      el.hidden = !ok; if (ok) visibles++;
    });
    document.querySelectorAll('#clases .seccion-clases').forEach((s) => { s.hidden = !s.querySelector('.clase:not([hidden])'); });
    $('sin-resultados').hidden = visibles > 0;
  }

  function desdeHash() {
    const [slug, sec] = decodeURIComponent(location.hash.slice(1)).split('/');
    const nuevo = D.cursos[slug] ? slug : (actual || D.grupos[0].cursos[0]);
    if (nuevo !== actual) { actual = nuevo; pintarGrupos(); pintarCurso(); }
    if (sec) { const el = document.getElementById('sec-' + sec); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  $('grupos').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-grupo]'); if (!b) return;
    const g = D.grupos.find((x) => x.nombre === b.dataset.grupo);
    location.hash = g.cursos[0];
  });
  $('filtro-micro').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-micro]'); if (!b) return;
    micro = b.dataset.micro;
    $('filtro-micro').querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    filtrar();
  });
  $('buscar').addEventListener('input', filtrar);
  window.addEventListener('hashchange', desdeHash);
  desdeHash();
})();
