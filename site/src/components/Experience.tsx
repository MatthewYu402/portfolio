import { education, experience } from '../content';
import { Panel, type PanelShape } from './Panel';
import { SectionHeader } from './SectionHeader';

const SHAPES: PanelShape[] = ['s4', 's5'];

// Three jobs sit in one row; four (or more) go two per row so no panel is left on its own.
const spanFor = (count: number) => (count === 3 ? 4 : count === 1 ? 12 : 6);

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeader number="02" title="EXPERIENCE" id="experience-title" />

      <div className="g12">
        {experience.map((job, i) => {
          const titleId = `job-${i}-title`;
          const shape = SHAPES[i % SHAPES.length]!;
          return (
            <Panel
              key={titleId}
              as="article"
              shape={shape}
              span={spanFor(experience.length)}
              pop="strong"
              labelledBy={titleId}
              innerClassName={`job job--${shape === 's5' ? 'right' : 'left'}`}
            >
              {i === experience.length - 1 && <div className="tone-fade job__tone" aria-hidden="true" />}
              <span className="job__dates">{job.dates}</span>
              <h3 id={titleId} className="job__role">
                {job.role}
              </h3>
              <p className="job__company">{job.company}</p>
              <ul className="job__highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Panel>
          );
        })}
      </div>

      <div className="edu row" aria-labelledby="education-title">
        <h3 id="education-title" className="row-label">
          Education
        </h3>
        <ul className="edu__list">
          {education.map((school) => (
            <li key={school.school} className="edu__item">
              <span className="edu__dates">{school.dates}</span>
              <span className="edu__degree">{school.degree}</span>
              <span className="edu__school">{school.school}</span>
              <p className="edu__desc">{school.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
