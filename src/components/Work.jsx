import Icon from "./Icon.jsx";
import Gallery from "./Gallery.jsx";
import { featured, compact } from "../data/projects.js";
import "./Work.css";

function Built({ items }) {
  return (
    <details className="built">
      <summary>
        What I built <Icon name="chevronDown" size={16} />
      </summary>
      <ul>
        {items.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </details>
  );
}

function Tech({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="tag tag-accent">
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, flip }) {
  return (
    <article className={`card project${flip ? " project--flip" : ""}`} id={project.id}>
      <Gallery images={project.images} title={project.title} />

      <div className="project__body">
        <p className="project__meta">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.period}</span>
        </p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__role">
          {project.role} <span>· {project.context}</span>
        </p>
        <p className="project__summary">{project.summary}</p>

        <Built items={project.built} />
        <Tech items={project.tech} />

        {project.links?.length > 0 && (
          <div className="project__links">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} className="text-link" target="_blank" rel="noopener noreferrer">
                {l.icon && <Icon name={l.icon} />}
                {l.label}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function CompactProject({ project }) {
  return (
    <article className="card mini" id={project.id}>
      <p className="project__meta">
        <span>{project.category}</span>
      </p>
      <h3 className="mini__title">{project.title}</h3>
      <p className="project__role">
        {project.role} <span>· {project.context}</span>
      </p>
      <p className="project__summary">{project.summary}</p>
      <Built items={project.built} />
      <Tech items={project.tech} />
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2 className="section-title">Selected projects</h2>
          <p className="section-sub">
            VR research, a desktop app in weekly use, my own studio's website, and commercial team projects.
          </p>
        </div>

        <div className="projects">
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <h3 className="projects__more">Commercial team projects</h3>
        <div className="minis">
          {compact.map((p) => (
            <CompactProject key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
