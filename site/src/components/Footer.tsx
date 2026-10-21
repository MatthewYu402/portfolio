import type { MouseEvent } from 'react';
import { site } from '../content';
import { scrollToTop } from '../scroll';

export function Footer() {
  const onTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="footer">
      <span>
        DESIGNED &amp; BUILT BY {site.name.toUpperCase()} © {site.copyrightYear} — END OF VOLUME 1
      </span>
      <a href="#hero" className="footer__top" onClick={onTop}>
        BACK TO TOP <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
