# Dev Hub · Curso

Página para los estudiantes del curso: una guía corta de Git y una colección de herramientas (librerías, frameworks y servicios). Está hecha con React + Vite y con componentes animados de [React Bits](https://reactbits.dev).

## Cómo correrla

```bash
npm install
npm run dev
```

## Cómo agregar contenido

No necesitas tocar los componentes, solo los archivos de datos:

- `src/data/gitGuide.js`: los pasos de la guía de Git (`gitSteps`) y los tipos de commit (`commitTypes`).
- `src/data/tools.js`: las herramientas (`tools`) y sus categorías (`categories`).

## Componentes de React Bits que se usan

Están en `src/components/reactbits/`:

| Componente | Dónde se usa |
| --- | --- |
| Aurora | Fondo animado del hero |
| SplitText | Título "Dev Hub" |
| RotatingText | Frase que va cambiando en el hero |
| StarBorder + Magnet | Botones del hero |
| CountUp | Números del hero |
| ScrollFloat | Títulos de las secciones |
| DecryptedText | Hashes de los "commits" de la guía |
| GradientText | Título de Conventional Commits |
| SpotlightCard | Tarjetas de herramientas |
| Dock | Barra de navegación inferior |
| ClickSpark | Chispas al hacer clic en cualquier parte |
| ShinyText | Pie de página |

## Publicarla

`npm run build` genera la carpeta `dist/`. Puedes subirla a Vercel, Netlify o GitHub Pages.
# curso-dev-hub
