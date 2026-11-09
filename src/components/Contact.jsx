import Icon from "./Icon.jsx";
import { site } from "../data/site.js";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contact">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="contact__text">
            Whether it's a role, a project or a question about something here, LinkedIn is the quickest way to reach
            me. My CV has the full details.
          </p>

          <div className="contact__actions">
            <a className="btn btn-primary" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={site.links.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub
            </a>
          </div>

          <div className="contact__cv">
            <a className="text-link" href={site.cv} target="_blank" rel="noopener">
              <Icon name="file" /> View CV
            </a>
            <a className="text-link" href={site.cv} download="Ralph_Dyakugha_CV.pdf">
              <Icon name="download" /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
