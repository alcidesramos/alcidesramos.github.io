// Menú móvil y año del pie de página
(function () {
  const b = document.querySelector('.boton-menu');
  const m = document.getElementById('menu');
  if (b && m) b.addEventListener('click', () => {
    const abierto = m.classList.toggle('abierto');
    b.setAttribute('aria-expanded', abierto);
  });
  const a = document.getElementById('anio');
  if (a) a.textContent = new Date().getFullYear();
})();
