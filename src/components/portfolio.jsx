import React from "react";
import { useState } from "react";



import beach1 from "../img/projects/beach1.jpeg";
import beach2 from "../img/projects/beach2.jpeg";
import beach3 from "../img/projects/beach3.jpeg";
import beach4 from "../img/projects/beach4.jpeg";
import beach5 from "../img/projects/beach5.jpeg";
import beach6 from "../img/projects/beach6.jpeg";
import uw1 from "../img/projects/uw1.jpeg";
import uw2 from "../img/projects/uw2.jpeg";
import uw3 from "../img/projects/uw3.jpeg";
import uw4 from "../img/projects/uw4.jpeg";



const projects = [
  {
    id: "vr-ocean",
    title: "Ocean Literacy VR Experience",
    tag: "VR / Unity / C#",
    year: "2025 – 2026",
    role: "VR Developer & Researcher",
    description:
      "A culturally grounded VR application co-created with the Topnaar community — Namibia's first documented coastal inhabitants. Users experience the Namibian coastline through a Topnaar narrator, collect medicinal seaweed by hand, then dive beneath the surface to explore ocean literacy concepts around Earth's oxygen cycle. Pilot evaluations confirmed awe effects and short-term retention of key ecological and cultural concepts.",
    tech: ["Unity 6", "C#", "Meta Quest", "Spatial Audio", "VR Interaction Design"],
    links: {
      Video: "https://www.youtube.com/watch?v=VyaEZIzMA5Y",
    },
    images: [
      { src: beach1, caption: "Coastal dune scene" },
      { src: beach2, caption: "Coast ocean" },
      { src: beach3, caption: "Coastal dune scene " },
      { src: beach4, caption: "Ocean coastline" },
      { src: beach5, caption: "interactive object-Rock" },
      { src: beach6, caption: "interactive object-Seaweed" },
      { src: uw1, caption: "Underwater exploration" },
      { src: uw2, caption: "Underwater exploration — kelp" },
      { src: uw3, caption: "Underwater exploration-shipwreck" },
      { src: uw4, caption: "Underwater exploration-marine life" },
    ],
  },
  // Add more projects here following the same structure
];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="carousel">
      <div className="carousel__track">
        <div className="carousel__slide">
          {images[current].src ? (
            <img
              src={images[current].src}
              alt={images[current].caption}
              className="carousel__img"
            />
          ) : (
            <div className="carousel__placeholder">
              <span className="carousel__placeholder-icon">⬡</span>
              <span className="carousel__placeholder-text">
                {images[current].caption}
              </span>
            </div>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="carousel__controls">
          <button className="carousel__btn" onClick={prev} aria-label="Previous image">
            ←
          </button>
          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot${i === current ? " carousel__dot--active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel__btn" onClick={next} aria-label="Next image">
            →
          </button>
        </div>
      )}

      {images[current].caption && (
        <p className="carousel__caption">{images[current].caption}</p>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <Carousel images={project.images} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-tag">{project.tag}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <div className="project-card__role-row">
          <span className="project-role">{project.role}</span>
          {project.venue && (
            <span className="project-venue">{project.venue}</span>
          )}
        </div>

        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {project.links && (
          <div className="project-card__links">
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--paper"
              >
                Read the paper →
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--github"
              >
                View on GitHub →
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--live"
              >
                Live demo →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-section sect-pt4 route">
        <div className="container">

          <div className="portfolio-header">
            <h3 className="portfolio-header__title">Portfolio</h3>
            <p className="portfolio-header__sub">
              A selection of projects built with purpose — spanning VR, full-stack web, and research.
            </p>
            <div className="line-mf"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;
