import { projects, type Project } from '../content';
import { Panel, type PanelShape } from './Panel';
import { SectionHeader } from './SectionHeader';

// The asymmetric grid from the mockup. Projects take these slots in order and wrap around.
const SLOTS: { span: number; shape: PanelShape; variant: string }[] = [
  { span: 7, shape: 's3', variant: 'a' },
  { span: 5, shape: 's5', variant: 'b' },
  { span: 5, shape: 's6', variant: 'c' },
  { span: 7, shape: 's4', variant: 'd' },
];

function Screenshot({ project }: { project: Project }) {
  if (project.screenshot) {
    const { src, alt, width, height, focus } = project.screenshot;
    return (
      <div className="project__shot">
        <img src={src} alt={alt} width={width} height={height} loading="lazy" style={{ objectPosition: focus }} />
      </div>
    );
  }
  return (
    <div className="project__shot">
      <div className="project__shot-tone" aria-hidden="true" />
      <span className="chip">TODO — SCREENSHOT</span>
    </div>
  );
}

function RepoLink({ project, className }: { project: Project; className: string }) {
  if (!project.repo) return null;
  return (
    <a className={className} href={project.repo} target="_blank" rel="noopener noreferrer">
      GitHub repo <span aria-hidden="true">↗</span>
      <span className="sr-only"> for {project.title} (opens in a new tab)</span>
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const slot = SLOTS[index % SLOTS.length]!;
  const titleId = `project-${index}-title`;

  if (project.inProgress) {
    return (
      <Panel
        as="article"
        shape={slot.shape}
        span={slot.span}
        pop="subtle"
        labelledBy={titleId}
        innerClassName={`project project--${slot.variant} project--next speed`}
      >
        <span className="project__next display" aria-hidden="true">
          NEXT!
        </span>
        <h3 id={titleId} className="project__title chip-bg">
          {project.title}
        </h3>
        <p className="project__desc chip-bg">{project.description}</p>
        {(project.repo || project.href) && (
          <div className="project__links">
            <RepoLink project={project} className="project__link chip-bg" />
            {project.href && (
              <a className="project__link chip-bg" href={project.href}>
                Follow along <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        )}
      </Panel>
    );
  }

  return (
    <Panel
      as="article"
      shape={slot.shape}
      span={slot.span}
      pop="subtle"
      labelledBy={titleId}
      innerClassName={`project project--${slot.variant}`}
    >
      <Screenshot project={project} />
      <div className="project__head">
        <h3 id={titleId} className="project__title">
          {project.title}
        </h3>
        {project.year && <span className="project__year">{project.year}</span>}
      </div>
      <p className="project__desc">{project.description}</p>
      {(project.stack.length > 0 || project.href || project.repo) && (
        <div className="project__foot">
          {project.stack.length > 0 && <span className="project__stack">{project.stack.join(' · ')}</span>}
          <div className="project__links">
            <RepoLink project={project} className="project__link" />
            {project.href && (
              <a className="project__link" href={project.href}>
                View case <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      )}
    </Panel>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHeader number="01" title="PROJECTS" id="projects-title" />
      <div className="g12">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
