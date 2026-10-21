import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo at https://matthewyu402.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
