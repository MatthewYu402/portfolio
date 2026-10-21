import { about, music, type Photo } from '../content';
import { Panel } from './Panel';
import { SectionHeader } from './SectionHeader';

function PanelPhoto({ photo, eager = false }: { photo: Photo; eager?: boolean }) {
  return (
    <img
      className="photo"
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectPosition: photo.focus }}
    />
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionHeader number="04" title="ABOUT" id="about-title" />

      <div className="g12">
        <Panel shape="s1" span={4} rowSpan={2} innerClassName="about__portrait">
          <PanelPhoto photo={about.portrait} />
          <div className="tone photo-tone" aria-hidden="true" />
        </Panel>

        <Panel shape="s2" span={4} innerClassName="about__shot">
          {about.workPhoto ? (
            <PanelPhoto photo={about.workPhoto} />
          ) : (
            <>
              <div className="tone-fade about__shot-tone" aria-hidden="true" />
              <span className="chip">TODO — PHOTO AT WORK</span>
            </>
          )}
        </Panel>

        <Panel shape="s6" span={4} innerClassName="about__shot">
          <PanelPhoto photo={about.hobbyPhoto} />
          <span className="chip about__caption">{about.hobbyCaption}</span>
        </Panel>

        <div className="about__profile">
          <blockquote className="balloon">
            <p>“{about.quote}”</p>
            <svg className="balloon__tail" aria-hidden="true" width="44" height="40" viewBox="0 0 44 40">
              {/* White fill covers the balloon's border; only the two outer edges are inked. */}
              <path d="M2 0 L42 0 L6 38 Z" fill="var(--panel)" />
              <path d="M5 8 L6 38 L34 8" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="miter" />
            </svg>
          </blockquote>

          <div className="about__bio">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="stats row">
            {about.stats.map((stat) => (
              <div key={stat.label} className="stats__item">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="music" aria-labelledby="music-title">
        <div className="music__head">
          <span className="row-label">Music</span>
          <h3 id="music-title" className="music__title display">
            {music.title.toUpperCase()}
          </h3>
          <p className="music__desc">{music.description}</p>
        </div>
        <div className="music__grid">
          <div className="music__embed">
            <iframe
              title={`Spotify playlist: ${music.title}`}
              src={music.embedSrc}
              width="100%"
              height="520"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="music__side">
            <a className="cta cta--box" href={music.href} target="_blank" rel="noopener noreferrer">
              Open in Spotify <span aria-hidden="true">↗</span>
            </a>
            <h4 className="row-label music__more">More playlists</h4>
            <ul className="playlists">
              {music.playlists.map((pl) => (
                <li key={pl.href} className="playlists__item">
                  <span className="playlists__title">{pl.title}</span>
                  <p className="playlists__desc">{pl.description}</p>
                  <a href={pl.href} target="_blank" rel="noopener noreferrer" className="cta">
                    Listen on Spotify <span aria-hidden="true">↗</span>
                    <span className="sr-only"> — {pl.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
