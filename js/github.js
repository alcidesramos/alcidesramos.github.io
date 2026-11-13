// Página de repositorios de GitHub
(function () {
  const ORDEN = ['Clases y prácticas', 'Pantallas', 'Sensores', 'Control y motores', 'Comunicaciones e IoT',
    'Librerías y Proteus', 'ESP32', 'PIC', 'Robótica', 'Inteligencia artificial'];
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fecha = f => { const [a, m] = f.split('-'); return MESES[+m - 1] + ' ' + a; };
  const repos = REPOS.repos;
  const grid = document.getElementById('repos');
  const filtros = document.getElementById('filtros-repos');
  const buscar = document.getElementById('buscar-repo');
  const vacio = document.getElementById('sin-repos');
  let cat = 'Todos';

  document.getElementById('resumen-repos').textContent = repos.length + ' repositorios.';

  const cats = ['Todos'].concat(ORDEN.filter(c => repos.some(r => r.c === c)));
  filtros.innerHTML = cats.map(c => {
    const n = c === 'Todos' ? repos.length : repos.filter(r => r.c === c).length;
    return `<button type="button" data-cat="${esc(c)}" aria-pressed="${c === cat}">${esc(c)} <small>${n}</small></button>`;
  }).join('');

  grid.innerHTML = repos.map(r => {
    const v = r.v.slice(0, 3).map(([id, t]) =>
      `<li><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('');
    const mas = r.v.length > 3 ? `<li class="repo-mas">y ${r.v.length - 3} videos más</li>` : '';
    const busca = (r.n + ' ' + r.t + ' ' + r.c + ' ' + r.v.map(x => x[1]).join(' ')).toLowerCase();
    return `<article class="repo" data-cat="${esc(r.c)}" data-busca="${esc(busca)}">
      <div class="repo-top"><span class="insignia-repo">${esc(r.c)}</span><span class="repo-fecha">${fecha(r.f)}</span></div>
      <h3>${esc(r.t)}</h3>
      <code class="repo-nombre">${esc(r.n)}</code>
      ${v ? `<p class="repo-sub">Explicado en:</p><ul class="repo-videos">${v}${mas}</ul>` : ''}
      <div class="clase-acciones"><a class="btn-mini btn-codigo" href="https://github.com/alcidesramos/${encodeURIComponent(r.n)}" target="_blank" rel="noopener">Abrir en GitHub</a></div>
    </article>`;
  }).join('');

  function aplicar() {
    const q = buscar.value.trim().toLowerCase();
    let n = 0;
    grid.querySelectorAll('.repo').forEach(el => {
      const ok = (cat === 'Todos' || el.dataset.cat === cat) && (!q || el.dataset.busca.includes(q));
      el.hidden = !ok; if (ok) n++;
    });
    vacio.hidden = n > 0;
  }
  filtros.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    cat = b.dataset.cat;
    filtros.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    aplicar();
  });
  buscar.addEventListener('input', aplicar);
})();
