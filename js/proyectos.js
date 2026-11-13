/* Proyectos desarrollados en la asignatura Sistemas Embebidos.
   Para añadir uno: copia un bloque { ... }, cambia los textos y pon la foto en img/proyectos/. */
const PROYECTOS = [
  /* ---- Proyectos profesionales (Ponencia 2024) ---- */
  { titulo: 'USV SÁBALO para patrullaje marítimo y fluvial', area: 'naval', anio: '2019', img: 'trayectoria/sabalo.jpg', tags: ['GPS · IMU · AIS', 'LIDAR', 'Navegación autónoma'],
    texto: 'Vehículo de superficie no tripulado con propulsión a chorro, cámaras térmicas e infrarrojas, ecosonda y control por puntos de ruta y posicionamiento (hovering).' },
  { titulo: 'Piloto automático para buque fluvial (USV)', area: 'naval', anio: '2012–2014', img: 'trayectoria/usv.jpg', tags: ['dsPIC33E 70 MHz', 'FPGA Cyclone II', 'Lógica difusa'],
    texto: 'Hardware y software de navegación, monitoreo, visión y comunicaciones para convertir embarcaciones a escala en vehículos autónomos, con evasión de obstáculos fijos y móviles.' },
  { titulo: 'Piloto automático aéreo PAVMA (UAV)', area: 'naval', anio: '2012–2014', img: 'trayectoria/uav.jpg', tags: ['PCB 4 capas SMD', 'IMU + GPS 10 Hz', 'Módems 64 km'],
    texto: 'Sistema de navegación y control de bajo costo para la Plataforma Aérea de Vigilancia Marítima Autónoma, escalable a diferentes aeronaves.' },
  { titulo: 'Plataforma sensórica para ROV submarino', area: 'naval', anio: '2009–2010', img: 'trayectoria/rov.jpg', tags: ['PIC16F877', 'LabVIEW', 'Colciencias'],
    texto: 'Sensores a bordo de un vehículo submarino operado remotamente para seguridad portuaria, oceanografía y reconocimiento bajo el mar.' },
  { titulo: 'Inspección automática de cascos de buque', area: 'naval', anio: '2012–2013', img: 'trayectoria/casco-buque.jpg', tags: ['dsPIC30F6014A', 'Brújula', 'Sensores inerciales'],
    texto: 'Sistema para inspeccionar cascos en aguas turbias con visibilidad limitada, montado en el sumergible de la Escuela Naval Almirante Padilla.' },
  { titulo: 'Boya oceanográfica a la deriva', area: 'naval', anio: '2009–2014', img: 'trayectoria/boya.jpg', tags: ['Sensores marinos', 'myRIO', 'Telemetría'],
    texto: 'Diseño y evolución de una boya de medición a la deriva, desde su primera electrónica hasta la versión con NI myRIO.' },
  { titulo: 'Banco de pruebas para torpedo', area: 'naval', anio: '2019', img: 'trayectoria/torpedo.jpg', tags: ['Instrumentación', 'Interfaz PC', 'Señales'],
    texto: 'Banco de prueba e interfaz de software para verificar las señales de preajuste y operación de un torpedo.' },
  { titulo: 'Simulador de buque para la Armada', area: 'naval', anio: 'Expodefensa 2023', img: 'trayectoria/simulador-buque.jpg', video: 'trayectoria/simulador-buque.mp4', tags: ['Plataforma de movimiento', 'Servomotores', 'Mandos de navegación'],
    texto: 'Simulador de navegación con pantalla y mandos reales: una plataforma con servomotores mueve la maqueta del buque según la simulación. Presentado en el stand de la Armada de Colombia.' },
  { titulo: 'Simulador de vuelo para la Armada', area: 'naval', anio: '2018', img: 'trayectoria/simulador-vuelo-2.jpg', videos: [{ src: 'trayectoria/simulador-vuelo-3.mp4', poster: 'trayectoria/simulador-vuelo-2.jpg', nombre: 'Cabina' }, { src: 'trayectoria/simulador-vuelo-4.mp4', poster: 'trayectoria/simulador-vuelo-vr.jpg', nombre: 'Realidad virtual' }], tags: ['Realidad virtual', 'Joystick y pedales', 'Tarjeta de integración'],
    texto: 'Prototipo de simulador de vuelo en la Escuela Naval Almirante Padilla, con cabina, mandos reales y visor de realidad virtual.',
    link: 'https://www.eluniversal.com.co/cartagena/un-prototipo-de-simulador-de-vuelo-en-la-escuela-naval-DY7199207', linkTexto: 'Ver la noticia en El Universal' },
  { titulo: 'Tarjetas de integración para proyectos militares', area: 'naval', anio: '2018–2023', img: 'trayectoria/tarjetas-militares.jpg', tags: ['Diseño PCB', 'COTECMAR', 'Ingeniería inversa'],
    texto: 'Tarjetas electrónicas diseñadas y fabricadas para sistemas navales.' },
  { titulo: 'Monitoreo de piscinas de camarones', area: 'industria', anio: '2014', img: 'trayectoria/camarones.jpg', tags: ['Sensores de agua', 'Comunicación RF', 'Acuicultura'],
    texto: 'Sistema de monitoreo de variables en las piscinas de cultivo de camarón de una empresa de la región.' },
  { titulo: 'Diseño de sistema de control para ósmosis y microfiltración', area: 'industria', anio: '2022', img: 'trayectoria/osmosis-2022.jpg', tags: ['Pantalla táctil', 'Válvulas y bombas', 'Control de planta'],
    texto: 'Diseño de los tableros de control de una planta de ósmosis inversa y de microfiltración: pantalla táctil para operar válvulas, bombas y filtros, y modos de servicio y mantenimiento.' },
  { titulo: 'Lavandería automática de autoservicio', area: 'industria', anio: 'Independiente', img: 'trayectoria/lavado-secado.jpg', video: 'trayectoria/lavado-secado.mp4', tags: ['Pantalla táctil', 'Billetero', 'Temporizadores'],
    texto: 'Lavandería de autoservicio: un kiosco con pantalla táctil y billetero activa 4 lavadoras y 4 secadoras y muestra el estado y el tiempo restante de cada máquina.' },
  { titulo: 'Ingeniería inversa de control hidráulico', area: 'industria', anio: '2022', img: 'trayectoria/valvulas.jpg', tags: ['Válvulas proporcionales', 'Linealización', 'Tarjeta de planta'],
    texto: 'Reemplazo de electrónica de control de válvulas hidráulicas: tarjeta prototipo, tarjeta de planta y linealización del sistema.' },
  { titulo: 'Tableros de control industrial', area: 'industria', anio: '2025', img: 'trayectoria/p2025-tablero.jpg', tags: ['Drivers de potencia', 'Control', 'Montaje en tablero'],
    texto: 'Diseño y montaje de tableros electrónicos de control para equipos industriales.' },
  { titulo: 'Estación meteorológica IoT', area: 'industria', anio: '2025', img: 'trayectoria/p2025-meteo.jpg', tags: ['Sensores ambientales', 'Energía solar', 'IoT'],
    texto: 'Estación de medición ambiental con tarjeta propia, alimentación solar y monitoreo remoto.' },
  { titulo: 'Tarjetas de potencia y sensores', area: 'industria', anio: '2024', img: 'trayectoria/p2024-tarjeta.jpg', tags: ['PCB', 'Relés', 'Sensores'],
    texto: 'Tarjetas de control y sensores a medida para soluciones de automatización.' },
  { titulo: 'Equipos biomédicos Baxter', area: 'biomedica', anio: '11 años', img: 'trayectoria/baxter-dialisis.jpg', tags: ['Hemodiálisis', 'Bombas de infusión', 'Mantenimiento'],
    texto: 'Ingeniero de servicio de máquinas de hemodiálisis y bombas de infusión en Laboratorios Baxter.' },
  { titulo: 'Llamado de enfermería y control de aires', area: 'biomedica', anio: 'Software', img: 'trayectoria/llamado-enfermeria.jpg', tags: ['Software', 'Hospitales', 'Control centralizado'],
    texto: 'Software de llamado de enfermería por habitación y control centralizado de múltiples aires acondicionados.' },

  /* ---- Proyectos con mis estudiantes (Sistemas Embebidos) ---- */
  { titulo: 'SolarSense', area: 'aula', img: 'proyectos/solarsense.jpg', tags: ['Energía solar', 'Dashboard web', 'PCB'],
    texto: 'Monitoreo de un panel solar con sensores de tensión, corriente y ambiente, enviando los datos a un tablero en el computador.' },
  { titulo: 'Cultivo aeropónico indoor', area: 'aula', img: 'proyectos/aeroponico.jpg', tags: ['Iluminación LED', 'Nebulización', 'IoT'],
    texto: 'Cámara cerrada de cultivo sin suelo con iluminación de crecimiento y control automático de riego por nebulización.' },
  { titulo: 'Torre de cultivo vertical', area: 'aula', img: 'proyectos/torre-cultivo.jpg', tags: ['Iluminación', 'Riego', 'Sensores'],
    texto: 'Huerta vertical con anillos de iluminación y control de riego para cultivar en espacios reducidos.' },
  { titulo: 'Sistema de riego automático', area: 'aula', img: 'proyectos/riego.jpg', tags: ['Humedad de suelo', 'Bomba', 'PCB propia'],
    texto: 'Riego por demanda según la humedad del suelo, con tarjeta electrónica diseñada a medida.' },
  { titulo: 'Monitoreo de calidad de agua y maceta inteligente', area: 'aula', img: 'proyectos/piscicultura.jpg', tags: ['Turbidez', 'Temperatura', 'Humedad'],
    texto: 'Medición de turbidez, temperatura y humedad para piscicultura y una maceta que cuida su propia planta.' },
  { titulo: 'Granja Feliz', area: 'aula', img: 'proyectos/granja-feliz.jpg', tags: ['Ventilación', 'Temperatura', 'Automatización'],
    texto: 'Ambiente controlado para animales de granja: ventilación y temperatura reguladas automáticamente.' },
  { titulo: 'EcoBuddy', area: 'aula', img: 'proyectos/ecobuddy.jpg', tags: ['Inteligencia artificial', 'Sensores', 'Reciclaje'],
    texto: 'Sistema autónomo de clasificación de residuos mediante sensores e inteligencia artificial.' },
  { titulo: 'Separación de objetos por colores', area: 'aula', img: 'proyectos/colores.jpg', tags: ['Sensor de color', 'Servos', 'Banda'],
    texto: 'Banda transportadora que identifica el color de cada pieza y la desvía al contenedor correcto.' },
  { titulo: 'Control de taladro CNC', area: 'aula', img: 'proyectos/cnc.jpg', tags: ['Motores paso a paso', 'G-code', 'Ejes XYZ'],
    texto: 'Máquina de control numérico para perforación de tarjetas con control de ejes desde el computador.' },
  { titulo: 'Sistema de dispensación automático', area: 'aula', img: 'proyectos/dispensador.jpg', tags: ['Actuadores', 'Sensores', 'Control'],
    texto: 'Dispensador automático que entrega la cantidad exacta del producto bajo demanda.' },
  { titulo: 'Parqueadero automático', area: 'aula', img: 'proyectos/parqueo.jpg', tags: ['Sensores de presencia', 'Barreras', 'Pantalla'],
    texto: 'Maqueta de parqueadero inteligente que detecta cupos libres y controla el acceso de vehículos.' },
  { titulo: 'Wally enfermero', area: 'aula', img: 'proyectos/wally.jpg', tags: ['Robot móvil', 'Salud', 'App'],
    texto: 'Robot asistente para entornos de salud que se desplaza y apoya tareas de enfermería.' },
  { titulo: 'Dron terrestre de exploración', area: 'aula', img: 'proyectos/dron-terrestre.jpg', tags: ['Cámara', 'Control inalámbrico', 'Tracción'],
    texto: 'Vehículo de exploración y reconocimiento controlado de forma remota con transmisión de video.' },
  { titulo: 'Robot minisumo', area: 'aula', img: 'proyectos/minisumo.jpg', tags: ['Sensores IR', 'Motores DC', 'Competencia'],
    texto: 'Robots autónomos de combate minisumo y seguidores, construidos y programados por los estudiantes.' },
  { titulo: 'Robot seguidor de línea', area: 'aula', img: 'proyectos/seguidor-linea.jpg', tags: ['Arreglo de sensores', 'PID', 'PCB'],
    texto: 'Seguidor de línea de alta velocidad con control PID y tarjeta de circuito impreso propia.' },
  { titulo: 'Mano robótica', area: 'aula', img: 'proyectos/mano-robotica.jpg', tags: ['Impresión 3D', 'Servomotores', 'Biomecánica'],
    texto: 'Prótesis de mano impresa en 3D con dedos accionados por servomotores.' },
  { titulo: 'Brazo robótico', area: 'aula', img: 'proyectos/brazo-robotico.jpg', tags: ['Servos', 'Cinemática', 'Pinza'],
    texto: 'Brazo de varios grados de libertad con pinza para tareas de tomar y dejar objetos.' },
  { titulo: 'Recobot', area: 'aula', img: 'proyectos/recobot.jpg', tags: ['Robot', 'Recolección', 'Sensores'],
    texto: 'Robot recolector diseñado para recoger y transportar objetos de forma autónoma.' },
  { titulo: 'Bote limpiador de bahía', area: 'aula', img: 'proyectos/bote.jpg', tags: ['Ambiental', 'Control remoto', 'Propulsión'],
    texto: 'Embarcación que recoge residuos flotantes para ayudar a mantener limpia la bahía.' },
  { titulo: 'Estabilizador inercial para embarcación', area: 'aula', img: 'proyectos/estabilizador.jpg', tags: ['IMU', 'Control', 'Interfaz PC'],
    texto: 'Plataforma que compensa la inclinación medida con una unidad inercial, con visualización en el computador.' },
  { titulo: 'Medición de inclinación de un cohete', area: 'aula', img: 'proyectos/cohete.jpg', tags: ['Acelerómetro', 'Giroscopio', 'Telemetría'],
    texto: 'Electrónica de a bordo que registra inclinación y parámetros de vuelo de un cohete.' },
  { titulo: 'Dispositivo biomecánico de rehabilitación de rodilla', area: 'aula', img: 'proyectos/rodilla.jpg', tags: ['Rehabilitación', 'Motores', 'App'],
    texto: 'Dispositivo para la rehabilitación postoperatoria de fracturas de rótula con movimiento controlado.' },
  { titulo: 'Bastón de ayuda para ciegos', area: 'aula', img: 'proyectos/baston.jpg', tags: ['Ultrasonido', 'Vibración', 'Accesibilidad'],
    texto: 'Bastón que detecta obstáculos y avisa a la persona mediante vibración y sonido.' },
  { titulo: 'Sistema de prevención de incendios', area: 'aula', img: 'proyectos/incendios.jpg', tags: ['Gas y humo', 'Alarma', 'Notificación'],
    texto: 'Detección temprana de humo, gas y temperatura con alarma local y aviso remoto.' },
  { titulo: 'Control de acceso RFID', area: 'aula', img: 'proyectos/acceso-rfid.jpg', tags: ['RFID', 'Cerradura', 'Registro'],
    texto: 'Acceso con tarjeta o llavero RFID y registro de entradas.' },
  { titulo: 'Alimentación y bebida para mascotas', area: 'aula', img: 'proyectos/mascotas.jpg', tags: ['Dosificación', 'Horarios', 'App'],
    texto: 'Comedero y bebedero automático que dosifica por horario y se controla desde el celular.' }
];

const AREAS = {
  todos: 'Todos', naval: 'Naval y defensa', industria: 'Industria e IoT',
  biomedica: 'Biomédica', aula: 'Con mis estudiantes'
};

(function () {
  const grid = document.getElementById('proyectos-grid');
  const filtros = document.getElementById('filtros');
  if (!grid) return;

  function pintar(area) {
    grid.innerHTML = '';
    for (const p of PROYECTOS) {
      if (area !== 'todos' && p.area !== area) continue;
      const art = document.createElement('article');
      art.className = 'proyecto';
      art.innerHTML = `
        <div class="proyecto-img">${p.videos ? `<video src="img/${p.videos[0].src}" poster="img/${p.videos[0].poster}" controls playsinline preload="none" aria-label="Video: ${p.titulo}"></video>` : p.video ? `<video src="img/${p.video}" poster="img/${p.img}" controls playsinline preload="none" aria-label="Video: ${p.titulo}"></video>` : `<img src="img/${p.img}" alt="${p.titulo}" loading="lazy">`}</div>
        <div class="proyecto-cuerpo">
          <span class="area">${AREAS[p.area]}${p.anio ? ' · ' + p.anio : ''}</span>
          <h3>${p.titulo}</h3>
          <p>${p.texto}</p>
          ${p.videos ? `<div class="selector-video" role="group" aria-label="Elegir video">${p.videos.map((v, i) => `<button type="button" data-src="img/${v.src}" data-poster="img/${v.poster}" aria-pressed="${i === 0}">▶ ${v.nombre}</button>`).join('')}</div>` : ''}
          <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
          ${p.link ? `<a class="enlace" href="${p.link}" target="_blank" rel="noopener">${p.linkTexto || 'Ver más'} →</a>` : ''}
        </div>`;
      grid.appendChild(art);
    }
  }

  for (const [k, v] of Object.entries(AREAS)) {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = v; b.dataset.area = k;
    if (k === 'todos') b.setAttribute('aria-pressed', 'true');
    b.addEventListener('click', () => {
      filtros.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      pintar(k);
    });
    filtros.appendChild(b);
  }
  grid.addEventListener('click', e => {
    const b = e.target.closest('.selector-video button');
    if (!b) return;
    const card = b.closest('.proyecto'), v = card.querySelector('video');
    card.querySelectorAll('.selector-video button').forEach(x => x.setAttribute('aria-pressed', x === b));
    v.pause(); v.poster = b.dataset.poster; v.src = b.dataset.src; v.play().catch(() => {});
  });
  const n = document.getElementById('n-proyectos');
  if (n) n.textContent = PROYECTOS.length;
  pintar('todos');
})();
