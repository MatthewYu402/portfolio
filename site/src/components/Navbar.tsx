import { useLayoutEffect, useRef, type MouseEvent } from 'react';
import { navItems, site } from '../content';
import { scrollToTop } from '../scroll';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  // Publish the nav's height so sections can offset their scroll-margin-top,
  // even when the links wrap onto extra rows on small screens.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <nav ref={navRef} className="navbar" aria-label="Primary">
      <div className="navbar__inner">
        <a href="#hero" className="logo" aria-label={`${site.name} — back to top`} onClick={onLogoClick}>
          <svg className="logo__splat" aria-hidden="true" width="190" height="62" viewBox="0 0 190 62">
            <circle cx="22" cy="20" r="14" fill="var(--accent)" />
            <circle cx="44" cy="10" r="4" fill="var(--accent)" />
            <circle cx="8" cy="44" r="3" fill="var(--ink)" />
            <circle cx="170" cy="48" r="5" fill="var(--ink)" />
            <circle cx="182" cy="38" r="2.5" fill="var(--ink)" />
            <path d="M30 50 L180 40 L178 46 L32 55 Z" fill="var(--ink)" />
          </svg>
          <span className="logo__name display">{site.name.toUpperCase()}</span>
        </a>
        <ul className="navbar__links">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link">
                <span className="nav-link__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
