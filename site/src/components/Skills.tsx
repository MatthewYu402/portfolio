import { skills } from '../content';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHeader number="03" title="SKILLS" id="skills-title" />
      <div className="skills">
        {skills.map((group) => (
          <div key={group.label} className="skills__row row">
            <h3 className="row-label">{group.label}</h3>
            <ul className="skills__list">
              {group.skills.map((skill, i) => (
                <li key={skill}>
                  {i > 0 && (
                    <span className="slash" aria-hidden="true">
                      /{' '}
                    </span>
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
