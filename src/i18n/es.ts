import type { Dict } from './types';

const es: Dict = {
  meta: {
    homeTitle: 'TBH DPS Meter — Overlay de DPS en tiempo real para Task Bar Hero (TBH)',
    homeDesc: 'Overlay en el juego gratuito y de código abierto para Task Bar Hero (TBH / TaskBarHero). DPS en vivo, daño recibido, comparación de etapas por oleada y planificador de farmeo personalizado. Solo lectura — nunca modifica los valores del juego.',
    installTitle: 'Instalación — TBH DPS Meter para TaskBarHero',
    installDesc: 'Instala el overlay TBH DPS Meter para TaskBarHero en tres pasos. Sin compilación.',
    changelogTitle: 'Registro de cambios — TBH DPS Meter',
    changelogDesc: 'Notas de versión e historial de lanzamientos del overlay TBH DPS Meter para TaskBarHero.',
  },
  nav: { features: 'Características', install: 'Instalar', faq: 'Preguntas frecuentes', download: 'Descargar' },
  hero: {
    eyebrow: 'Hecho para TaskBarHero · Overlay de BepInEx',
    titleA: 'Entiende cada',
    titleHighlight: 'golpe que das',
    lede: 'DPS en vivo, daño recibido, comparación de etapas por oleada y planificador de farmeo personalizado — todo como overlay en el juego. Código abierto, solo lectura, nunca cambia ningún valor del juego.',
    ctaDownload: 'Descargar la última versión',
    ctaGithub: 'Ver código fuente en GitHub',
    trust: { mit: 'Código abierto MIT', readonly: 'Solo lectura · sin edición de valores', langs: '5 idiomas', tested: 'Probado en v1.00.09' },
  },
  stats: { damageTypes: 'Tipos de daño', panels: 'Paneles de análisis', languages: 'Idiomas', openSource: 'Código abierto · solo lectura' },
  featuresKicker: 'Características',
  featuresTitle: 'No solo un número — un panel de combate completo',
  featuresSub: 'Ocho paneles, cada uno con una función. Una tecla los superpone en el juego, y los clics pasan a través para no bloquear el juego.',
  features: [
    {
      tag: 'F1 · Centro',
      title: 'Centro de control',
      body: 'Un pequeño centro siempre visible: DPS en vivo, tiempo de partida y cofres abiertos de un vistazo, más una fila de botones para abrir y cerrar todos los demás paneles. La puerta de entrada a toda la superposición.',
      points: ['DPS en vivo, tiempo de partida y conteo de cofres siempre visibles', 'Un toque para abrir o cerrar cada panel', 'Arrástralo desde cualquier punto hasta donde te convenga'],
    },
    {
      tag: 'F9 · En vivo',
      title: 'Panel de DPS',
      body: 'DPS en vivo en una ventana deslizante de 5 segundos, más pico y promedio. Ve tu estructura de daño de un vistazo y sabe qué estadística mejorar a continuación.',
      points: ['DPS en vivo / pico / promedio', 'Tasa de crítico y porcentaje de daño crítico', 'Desglose: cuerpo a cuerpo / proyectil / área / invocación / DoT / trampa', 'Autoajuste + escalado de UI; los paneles nunca se salen de pantalla (v0.6.0)'],
    },
    {
      tag: 'F10 · Defensa',
      title: 'Panel de daño recibido',
      body: 'No se trata solo de cuánto golpeas — también de cuánto te golpean. Encuentra de dónde viene el golpe letal y ajusta tus resistencias y posicionamiento.',
      points: ['DTPS, mayor golpe individual, conteo de impactos', 'Tasa de crítico de los monstruos contra ti', 'Distribución: físico / fuego / hielo / rayo / caos'],
    },
    {
      tag: 'F11 · Comparar',
      title: 'Comparación de etapas por oleada',
      body: 'Pon esta partida junto a tu mejor claro — hasta las diferencias de equipo y habilidades. Un gráfico de ritmo muestra exactamente qué oleada te retrasó.',
      points: ['Tiempo por oleada, tiempo activo vs inactivo', 'Diferencia de equipo y habilidades completa del personaje', 'Gráfico de tendencia de tiempo de claro — haz clic en cualquier punto para inspeccionar'],
    },
    {
      tag: 'F6 · Planear',
      title: 'Planificador de farmeo personalizado',
      body: 'No es una tabla estática de wiki — calibrada a tus propias partidas reales. Gold/seg y exp/seg clasificados uno al lado del otro, diciéndote exactamente qué etapa farmear.',
      points: ['Valores medidos para etapas completadas, multiplicador personal para el resto', 'Columna de retención de EXP refleja la penalización de nivel', 'Detecta automáticamente cambios de equipo y sugiere re-completar'],
    },
    {
      tag: 'F5 · Registro',
      title: 'Registro de cofres',
      body: 'Registra cada cofre que abres: total, cofres de jefe y cofres por hora, con marca de tiempo por etapa. Conoce tu tasa de botín real en lugar de adivinar.',
      points: ['Total y cofres de jefe', 'Cofres por hora', 'Registro con marca de tiempo por etapa'],
    },
    {
      tag: 'F4 · Aperturas',
      title: 'Estadísticas de calidad al abrir',
      body: 'Desglosa cada cofre que abres en una matriz de calidad × origen: cuánto de Común a Trascendente, cuánto de cofres normales vs de jefe, con un registro de aperturas línea por línea debajo.',
      points: ['Matriz calidad × tipo de cofre (conteo + %)', 'Reparto: Común / Poco común / Raro / Legendario / Trascendente', 'Registro línea por línea: hora, tipo de cofre, calidad, objeto'],
    },
    {
      tag: 'F3 · Mapa de calor',
      title: 'Mapa de calor de botín',
      body: 'Despliega tus cofres y botín en un mapa de calor de día × 24 horas para ver tus mejores franjas, con un gráfico de tendencia de tiempo de claro debajo que sigue la etapa seleccionada en F11.',
      points: ['Dos mapas de calor día×hora: cofres obtenidos × tasa de botín', 'Pasa el cursor por cualquier celda para ver qué abriste entonces', 'Gráfico de tendencia de tiempo de claro, sincronizado con tu etapa en F11'],
    },
  ],
  install: {
    kicker: 'Instalación',
    title: 'Tres pasos, tres minutos',
    sub: 'Sin compilar, sin configurar. Descomprime, colócalo en la carpeta, inicia desde Steam.',
    steps: [
      { title: 'Descarga el zip', body: 'Obtén el último TBH-DpsMeter.zip de Releases — sin compilación necesaria.' },
      { title: 'Descomprime en la carpeta del juego', body: 'Extrae todo junto a TaskBarHero.exe; elige sobrescribir si se solicita.' },
      { title: 'Inicia desde Steam', body: 'Siempre inicia el juego a través de Steam — el overlay se carga automáticamente.' },
    ],
    full: 'Ver la guía de instalación completa →',
  },
  installPage: {
    lead: 'Instala el overlay TBH DPS Meter para TaskBarHero. Sin compilación — solo descarga, extrae e inicia desde Steam.',
    firstTime: {
      title: 'Primera instalación (BepInEx aún no instalado)',
      steps: [
        'Descarga TBH-DpsMeter-vX.Y.Z.zip desde la página de Releases.',
        'En Steam, haz clic derecho en "TBH: Task Bar Hero" → Administrar → Explorar archivos locales (deberías ver TaskBarHero.exe).',
        'Extrae TODOS los archivos del zip en esa carpeta para que winhttp.dll, doorstop_config.ini, dotnet y BepInEx queden junto a TaskBarHero.exe (elige "Sí" para sobrescribir si se solicita).',
        'Inicia a través de Steam — iniciar el exe directamente NO cargará el plugin.',
        'El primer inicio muestra una pantalla negra durante 1–3 minutos (configuración única). Después de eso funciona normalmente.',
      ],
    },
    update: {
      title: 'Actualizar el plugin (ya instalado antes)',
      body: 'Actualizar solo necesita el único DLL — BepInEx en sí no se toca. Cierra el juego completamente primero (mientras se ejecuta el DLL está bloqueado), sobrescribe el nuevo TBH.DpsMeter.dll en <carpeta del juego>\\BepInEx\\plugins\\, luego reinicia a través de Steam. El panel también muestra una notificación de actualización en la aplicación con descarga de un clic.',
    },
    blackScreen: {
      title: '¿Es normal la pantalla negra en el primer inicio?',
      body: 'Sí. El primer inicio ejecuta una configuración única de 1–3 minutos. Después de eso, el inicio es normal.',
    },
    uninstall: {
      title: 'Desinstalar',
      body: 'Elimina winhttp.dll, doorstop_config.ini, .doorstop_version, la carpeta dotnet\\ y la carpeta BepInEx\\ de la carpeta del juego. Esto restaura completamente el juego original.',
    },
    backHome: '← Volver al inicio',
  },
  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Probablemente te estás preguntando',
    items: [
      { q: '¿Me banearán?', a: 'La herramienta se inyecta a través de BepInEx, solo lee datos de daño, no modifica ningún valor del juego y el juego es para un solo jugador. Dicho esto, cualquier mod de terceros o herramienta de inyección puede violar los Términos de Servicio del juego o de la plataforma (por ejemplo, Steam) — úsalo bajo tu propio riesgo.' },
      { q: '¿Cómo actualizo?', a: 'Solo sobrescribe el único TBH.DpsMeter.dll en la carpeta plugins — BepInEx en sí no se toca. El panel también muestra una notificación de actualización en la aplicación con descarga de un clic.' },
      { q: '¿Es normal la pantalla negra en el primer inicio?', a: 'Sí. El primer inicio ejecuta una configuración única de 1–3 minutos, después de lo cual todo es normal.' },
      { q: '¿Qué versiones del juego son compatibles?', a: 'Probado en v1.00.09 (Unity 6 / IL2CPP). Después de actualizaciones importantes del juego, las correcciones siguen lo más rápido posible.' },
    ],
  },
  finalCta: { title: '¿Listo para ver tu daño claramente?', sub: 'Gratis, código abierto, instalación en tres minutos.' },
  footer: {
    license: 'Licencia MIT',
    disclaimer: 'Descargo de responsabilidad',
    disclaimerLong: 'Esta herramienta solo lee datos y no modifica los valores del juego. Usas este software completamente bajo tu propio riesgo. © 2026 WarmBed',
  },
  changelog: {
    title: 'Registro de cambios',
    intro: 'Cada versión de TBH DPS Meter, obtenida directamente de GitHub.',
    fallback: 'No se pudieron cargar los lanzamientos en este momento — véalos en GitHub.',
  },
};

export default es;
