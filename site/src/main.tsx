import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Site fonts (self-hosted). Rubik Dirt is declared in fonts.css with font-display: block.
import './fonts.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';

// Intro fonts — the same weights the original page loaded from Google Fonts.
import '@fontsource/league-spartan/800.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700-italic.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/700.css';

import './styles.css';
import { App } from './App';

// Every load (including a refresh) starts on the Hero: don't restore the old scroll
// position and drop any #section hash left in the URL.
history.scrollRestoration = 'manual';
if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
window.scrollTo(0, 0);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
