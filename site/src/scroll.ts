const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smooth-scrolls to a section (instantly if the user prefers reduced motion). */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
}

/** Scrolls back to the hero (the top of the page) and drops any #hash so a reload doesn't jump elsewhere. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
