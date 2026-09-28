// Guía de Git: cada paso se muestra como una tarjeta con sus comandos.
// Para agregar un paso nuevo, añade un objeto a este arreglo.
export const gitSteps = [
  {
    id: 'config',
    title: 'Configura tu identidad',
    level: 'Básico',
    description:
      'Lo primero: dile a Git quién eres. Esta información aparece en cada commit que hagas.',
    commands: [
      { cmd: 'git config --global user.name "Tu Nombre"', note: 'Tu nombre visible en los commits' },
      { cmd: 'git config --global user.email "tu@correo.com"', note: 'Usa el mismo correo de GitHub' },
      { cmd: 'git config --global init.defaultBranch main', note: 'La rama principal se llamará main' },
    ],
  },
  {
    id: 'start',
    title: 'Crea o clona un repositorio',
    level: 'Básico',
    description:
      'Un repositorio es la carpeta de tu proyecto con todo su historial. Puedes crear uno desde cero o copiar uno existente.',
    commands: [
      { cmd: 'git init', note: 'Convierte la carpeta actual en un repo' },
      { cmd: 'git clone https://github.com/usuario/proyecto.git', note: 'Descarga un repo remoto' },
    ],
  },
  {
    id: 'cycle',
    title: 'El ciclo diario: status → add → commit',
    level: 'Básico',
    description:
      'Modificas archivos, los preparas (staging) y guardas una "foto" del proyecto con un mensaje claro.',
    commands: [
      { cmd: 'git status', note: '¿Qué cambió? Úsalo todo el tiempo' },
      { cmd: 'git add archivo.js', note: 'Prepara un archivo (o "git add ." para todos)' },
      { cmd: 'git commit -m "feat: agrega formulario de login"', note: 'Guarda los cambios preparados' },
      { cmd: 'git log --oneline --graph', note: 'Mira el historial de forma compacta' },
    ],
    tip: 'Haz commits pequeños y frecuentes. Un buen mensaje explica el "qué" y el "por qué".',
  },
  {
    id: 'branches',
    title: 'Ramas: trabaja sin miedo',
    level: 'Intermedio',
    description:
      'Una rama es una línea de trabajo independiente. Crea una por cada funcionalidad o experimento.',
    commands: [
      { cmd: 'git switch -c feature/navbar', note: 'Crea una rama y cámbiate a ella' },
      { cmd: 'git branch', note: 'Lista las ramas locales' },
      { cmd: 'git switch main', note: 'Regresa a main' },
      { cmd: 'git merge feature/navbar', note: 'Une la rama a la rama actual' },
    ],
  },
  {
    id: 'remote',
    title: 'Sincroniza con GitHub',
    level: 'Intermedio',
    description:
      'El remoto (normalmente "origin") es la copia de tu repo en la nube. Sube y baja cambios para colaborar.',
    commands: [
      { cmd: 'git remote add origin https://github.com/usuario/proyecto.git', note: 'Conecta tu repo local con GitHub' },
      { cmd: 'git push -u origin main', note: 'Sube tus commits (la primera vez con -u)' },
      { cmd: 'git pull', note: 'Trae y une los cambios del remoto' },
      { cmd: 'git fetch', note: 'Solo descarga, sin unir' },
    ],
  },
  {
    id: 'pr',
    title: 'Flujo de equipo con Pull Requests',
    level: 'Intermedio',
    description:
      'En equipo nadie sube directo a main. Trabajas en tu rama, la subes y abres un Pull Request para revisión.',
    commands: [
      { cmd: 'git switch -c fix/validacion-email', note: '1. Rama nueva' },
      { cmd: 'git commit -am "fix: valida formato de email"', note: '2. Commit de tus cambios' },
      { cmd: 'git push -u origin fix/validacion-email', note: '3. Sube la rama' },
      { cmd: 'gh pr create --fill', note: '4. Abre el PR (o desde la web de GitHub)' },
    ],
  },
  {
    id: 'undo',
    title: 'Deshacer errores (sin pánico)',
    level: 'Avanzado',
    description:
      'Git casi nunca pierde nada. Estos comandos te sacan de los apuros más comunes.',
    commands: [
      { cmd: 'git restore archivo.js', note: 'Descarta cambios no guardados de un archivo' },
      { cmd: 'git restore --staged archivo.js', note: 'Quita un archivo del staging' },
      { cmd: 'git commit --amend', note: 'Corrige el último commit (si no lo has subido)' },
      { cmd: 'git revert <hash>', note: 'Crea un commit que deshace otro (seguro en equipo)' },
      { cmd: 'git stash / git stash pop', note: 'Guarda cambios temporalmente y recupéralos' },
    ],
    tip: 'Evita "git push --force" en ramas compartidas. Si lo necesitas, usa --force-with-lease.',
  },
  {
    id: 'ignore',
    title: '.gitignore: lo que NO se sube',
    level: 'Básico',
    description:
      'Crea un archivo .gitignore en la raíz para excluir dependencias, builds y secretos.',
    commands: [
      { cmd: 'node_modules/', note: 'Dependencias (se reinstalan con npm install)' },
      { cmd: 'dist/', note: 'Archivos generados por el build' },
      { cmd: '.env', note: '¡Nunca subas contraseñas ni API keys!' },
    ],
  },
];

export const commitTypes = [
  { type: 'feat', desc: 'Nueva funcionalidad' },
  { type: 'fix', desc: 'Corrección de un bug' },
  { type: 'docs', desc: 'Solo documentación' },
  { type: 'style', desc: 'Formato, sin cambiar lógica' },
  { type: 'refactor', desc: 'Reestructura sin cambiar comportamiento' },
  { type: 'test', desc: 'Agrega o corrige pruebas' },
  { type: 'chore', desc: 'Tareas de mantenimiento' },
];
