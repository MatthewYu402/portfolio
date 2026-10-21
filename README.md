# Matthew Yu — Portfolio

Software engineer based in Phoenix, MD, interested in backend development and building complex systems with simple implementations. Open to full-time opportunities and relocation.

**Live site:** https://matthewyu402.github.io/portfolio/

## Links

| | |
|---|---|
| Résumé | [PDF](https://matthewyu402.github.io/portfolio/resume-10-20-26.pdf) · [source file](site/public/resume-10-20-26.pdf) |
| LinkedIn | [linkedin.com/in/matthew-yu-37b860222](https://www.linkedin.com/in/matthew-yu-37b860222/) |
| GitHub | [github.com/MatthewYu402](https://github.com/MatthewYu402) |
| Email | [myu22826@gmail.com](mailto:myu22826@gmail.com) |

## Featured work

- **[Green Leaf Restaurant](https://greenleafcuisine.com)** — responsive React/TypeScript restaurant site with 100+ menu items and a GitHub Actions CI/CD pipeline ([repo](https://github.com/MatthewYu402/green_leaf_restarant_website)).
- **[LeetCode Visualizer](https://github.com/MatthewYu402/LeetCode-Visualizer)** — steps through an unmodified LeetCode `Solution` line by line and draws the data structures as they change.
- **[Spotify KPI Dashboard](https://github.com/MatthewYu402/spotify-kpi-dashboard)** — full-stack analytics dashboard over your Spotify Extended Streaming History.
- **CHIP-8 Emulator** — a CHIP-8 interpreter in C++ (in progress).

## About this site

A manga-inspired single-page portfolio ("Red Slash" design) with a Cowboy Bebop–style intro.

- **Stack:** React 19, TypeScript (strict), Vite, plain CSS. Fonts are self-hosted with `@fontsource`.
- **Content:** all text, links and photos live in [`site/src/content.ts`](site/src/content.ts), so they can be edited without touching components.
- **Design reference:** [`design/red-slash.html`](design/red-slash.html).

### Run it locally

```sh
cd site
npm install
npm run dev       # dev server
npm run build     # type-check + production build into site/dist
npm run preview   # serve the build at http://localhost:4173/portfolio/
```

### Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds `site/` and publishes `site/dist` to GitHub Pages. It can also be run by hand from the Actions tab.

## License

[MIT](LICENSE)
