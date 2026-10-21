import type { Ref } from 'react';
import { hero, site } from '../content';
import { Panel } from './Panel';

interface HeroProps {
  onReplayIntro: () => void;
  replayRef: Ref<HTMLButtonElement>;
}

// Desktop: photo on the left with the caption box overlapping its bottom; name panel on the right.
// Mobile (one column): name, photo, then the caption overlapping the photo.
export function Hero({ onReplayIntro, replayRef }: HeroProps) {
  return (
    <section id="hero" className="section hero" aria-labelledby="hero-title">
      <div className="g12 hero__grid">
        <Panel shape="s1" className="hero__name-panel" innerClassName="hero__main speed">
          <div className="hero__slash" aria-hidden="true" />
          <p className="hero__kicker">{hero.kicker}</p>
          <h1 id="hero-title" className="hero__name display big">
            {site.nameLines.map((line) => (
              <span key={line} className="hero__name-line">
                {line}{' '}
              </span>
            ))}
          </h1>
        </Panel>

        <Panel shape="s2" className="hero__photo-panel" innerClassName="hero__photo">
          {hero.photo ? (
            <img
              className="photo"
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              style={{ objectPosition: hero.photo.focus }}
            />
          ) : (
            <>
              <div className="tone-fade hero__photo-tone" aria-hidden="true" />
              <span className="chip">TODO — HERO PHOTO</span>
            </>
          )}
        </Panel>

        <div className="hero__caption-col">
          <div className="caption-box">
            <p className="caption-box__text">{hero.caption}</p>
            <div className="caption-box__links">
              <a href="#projects" className="cta">
                Read the work <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="cta cta--accent">
                Get in touch
              </a>
            </div>
          </div>

          <button ref={replayRef} type="button" className="replay" aria-label="Replay intro animation" onClick={onReplayIntro}>
            <span className="replay__icon" aria-hidden="true">
              ▶
            </span>
            Replay intro
          </button>
        </div>
      </div>
    </section>
  );
}
