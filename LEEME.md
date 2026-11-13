# Sitio web de Alcides Ramos Zambrano

## Archivos
- `index.html`: inicio con el fondo animado de circuito (PIC, ESP32, STM32, sensores, ondas IoT).
- `trayectoria.html`: página "Quién soy" con trayectoria, método, 45 proyectos y charlas.
- `cursos.html`: 37 cursos con 829 clases de YouTube (datos en `js/cursos-data.js`, miniaturas en `img/cursos/`).
- `github.html`: tus 92 repositorios públicos por tema (datos en `js/repos-data.js`).
- `css/estilos.css`: colores y diseño.
- `js/circuito.js`: animación del canvas.
- `js/proyectos.js`: lista de proyectos. Para añadir o corregir uno, edita este archivo.
- `img/proyectos/`: fotos sacadas de PROYECTOS_2026.pptx.

## Tu foto
Tu foto ya está en `img/alcides.jpg`. Para cambiarla, reemplaza ese archivo por otra foto cuadrada.

## Publicar en GitHub Pages
1. En GitHub, crea un repositorio público llamado exactamente `alcidesramos.github.io`.
2. Entra al repositorio, pulsa **Add file → Upload files** y arrastra todo el contenido de esta carpeta `sitio-web` (no la carpeta, sino lo que tiene dentro: `index.html`, `trayectoria.html`, `cursos.html`, `github.html`, `css`, `js`, `img`). Si el navegador no deja subir carpetas con muchos archivos, sube primero los archivos sueltos y luego cada carpeta.
3. Pulsa **Commit changes**.
4. Ve a **Settings → Pages**, en "Source" elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
5. En uno o dos minutos el sitio estará en `https://alcidesramos.github.io`.
