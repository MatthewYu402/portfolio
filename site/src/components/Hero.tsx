import type { Ref } from 'react';
import { hero, site } from '../content';
import { Panel } from './Panel';

interface HeroProps {
  onReplayIntro: () => void;
  replayRef: Ref<HTMLButtonElement>;
}

export function Hero({ onReplayIntro, replayRef }: HeroProps) {
  return (
    <section id="hero" className="section hero" aria-labelledby="hero-title">
      <div className="g12">
        <Panel shape="s1" span={9} innerClassName="hero__main speed">
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
        <Panel shape="s2" span={3} className="hide-sm" innerClassName="hero__side">
          <div className="tone-fade hero__side-tone" aria-hidden="true" />
          <span className="hero__side-text display" aria-hidden="true">
            PORTFOLIO
          </span>
        </Panel>
      </div>

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
    </section>
  );
}
