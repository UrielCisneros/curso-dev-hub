// Herramientas recomendadas. Para agregar una, añade un objeto con la
// categoría correspondiente (debe existir en `categories`).
export const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ui', label: 'UI y Animación' },
  { id: 'backend', label: 'Backend' },
  { id: 'data', label: 'Bases de datos' },
  { id: 'testing', label: 'Testing' },
  { id: 'deploy', label: 'Deploy' },
  { id: 'productividad', label: 'Productividad' },
];

export const tools = [
  // Frontend
  { name: 'React', category: 'frontend', url: 'https://react.dev', desc: 'Librería para construir interfaces con componentes.', tag: 'Librería' },
  { name: 'Vite', category: 'frontend', url: 'https://vite.dev', desc: 'Bundler ultrarrápido para iniciar proyectos web en segundos.', tag: 'Tooling' },
  { name: 'Next.js', category: 'frontend', url: 'https://nextjs.org', desc: 'Framework de React con rutas, SSR y API integradas.', tag: 'Framework' },
  { name: 'Astro', category: 'frontend', url: 'https://astro.build', desc: 'Ideal para sitios de contenido rápidos: blogs, portafolios, docs.', tag: 'Framework' },
  { name: 'TypeScript', category: 'frontend', url: 'https://www.typescriptlang.org', desc: 'JavaScript con tipos: menos bugs y mejor autocompletado.', tag: 'Lenguaje' },

  // UI y animación
  { name: 'React Bits', category: 'ui', url: 'https://reactbits.dev', desc: 'Componentes animados listos para copiar. ¡Esta página los usa!', tag: 'Componentes' },
  { name: 'Tailwind CSS', category: 'ui', url: 'https://tailwindcss.com', desc: 'CSS con clases utilitarias directamente en tu HTML.', tag: 'CSS' },
  { name: 'shadcn/ui', category: 'ui', url: 'https://ui.shadcn.com', desc: 'Componentes accesibles que copias a tu proyecto y personalizas.', tag: 'Componentes' },
  { name: 'Motion', category: 'ui', url: 'https://motion.dev', desc: 'Animaciones declarativas para React (antes Framer Motion).', tag: 'Animación' },
  { name: 'GSAP', category: 'ui', url: 'https://gsap.com', desc: 'La librería de animación más potente para la web.', tag: 'Animación' },
  { name: 'Lucide', category: 'ui', url: 'https://lucide.dev', desc: 'Iconos limpios y consistentes como componentes.', tag: 'Iconos' },

  // Backend
  { name: 'Node.js', category: 'backend', url: 'https://nodejs.org', desc: 'Ejecuta JavaScript en el servidor.', tag: 'Runtime' },
  { name: 'Express', category: 'backend', url: 'https://expressjs.com', desc: 'Framework minimalista para crear APIs REST en Node.', tag: 'Framework' },
  { name: 'Hono', category: 'backend', url: 'https://hono.dev', desc: 'Framework web ligero y moderno, corre en cualquier runtime.', tag: 'Framework' },
  { name: 'FastAPI', category: 'backend', url: 'https://fastapi.tiangolo.com', desc: 'APIs en Python rápidas, con documentación automática.', tag: 'Framework' },

  // Datos
  { name: 'PostgreSQL', category: 'data', url: 'https://www.postgresql.org', desc: 'Base de datos relacional robusta y open source.', tag: 'SQL' },
  { name: 'Supabase', category: 'data', url: 'https://supabase.com', desc: 'Postgres + autenticación + storage, con plan gratuito.', tag: 'BaaS' },
  { name: 'Prisma', category: 'data', url: 'https://www.prisma.io', desc: 'ORM con tipos para trabajar con tu base de datos.', tag: 'ORM' },
  { name: 'Firebase', category: 'data', url: 'https://firebase.google.com', desc: 'Backend en la nube: base de datos en tiempo real y auth.', tag: 'BaaS' },

  // Testing
  { name: 'Vitest', category: 'testing', url: 'https://vitest.dev', desc: 'Pruebas unitarias rápidas, compatible con Vite.', tag: 'Unit' },
  { name: 'Playwright', category: 'testing', url: 'https://playwright.dev', desc: 'Pruebas end-to-end en navegadores reales.', tag: 'E2E' },

  // Deploy
  { name: 'Vercel', category: 'deploy', url: 'https://vercel.com', desc: 'Publica tu frontend conectando tu repo de GitHub.', tag: 'Hosting' },
  { name: 'Netlify', category: 'deploy', url: 'https://www.netlify.com', desc: 'Hosting para sitios estáticos con deploy automático.', tag: 'Hosting' },
  { name: 'GitHub Pages', category: 'deploy', url: 'https://pages.github.com', desc: 'Hosting gratuito directo desde tu repositorio.', tag: 'Hosting' },
  { name: 'Render', category: 'deploy', url: 'https://render.com', desc: 'Despliega APIs y bases de datos fácilmente.', tag: 'Hosting' },

  // Productividad
  { name: 'VS Code', category: 'productividad', url: 'https://code.visualstudio.com', desc: 'El editor más usado, con miles de extensiones.', tag: 'Editor' },
  { name: 'OpenCode', category: 'productividad', url: 'https://opencode.ai', desc: 'Agente de IA open source para programar desde la terminal.', tag: 'IA' },
  { name: 'GitHub Desktop', category: 'productividad', url: 'https://desktop.github.com', desc: 'Interfaz visual para Git, ideal para empezar.', tag: 'Git' },
  { name: 'Postman', category: 'productividad', url: 'https://www.postman.com', desc: 'Prueba y documenta tus APIs.', tag: 'APIs' },
  { name: 'Excalidraw', category: 'productividad', url: 'https://excalidraw.com', desc: 'Pizarra para diagramas con estilo dibujado a mano.', tag: 'Diagramas' },
  { name: 'roadmap.sh', category: 'productividad', url: 'https://roadmap.sh', desc: 'Rutas de aprendizaje para cada rol de desarrollo.', tag: 'Aprendizaje' },
];
