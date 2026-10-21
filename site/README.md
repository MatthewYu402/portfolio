# Portfolio — "Red Slash" redesign

Vite + React + TypeScript (strict). Design reference: `../design/red-slash.html`.

```sh
cd site
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into site/dist
npm run preview   # serve the build at http://localhost:4173/portfolio/
```

- **Edit text, links and photos in `src/content.ts`.** Search it for `TODO` to find placeholders.
- The Cowboy Bebop intro lives in `src/components/Intro.tsx` / `Intro.module.css` (a port of the
  old `index.html` + `script.js` + `styles.css`, same timings and assets).
- `vite.config.ts` sets `base: '/portfolio/'` for GitHub Pages.
- `.npmrc` sets `legacy-peer-deps` to work around an npm 10.8 crash ("reading 'edgesOut'").
