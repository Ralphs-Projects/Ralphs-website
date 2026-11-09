import Icon from "./Icon.jsx";
import { about } from "../data/site.js";
import { skills } from "../data/skills.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">From the first interview to the shipped product</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="about__focus">
            {about.focus.map((f) => (
              <li key={f.title} className="card focus">
                <span className="focus__icon">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="focus__title">{f.title}</h3>
                <p className="focus__text">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card skills">
          <h3 className="skills__title">Skills &amp; tools</h3>
          <dl className="skills__grid">
            {skills.map((s) => (
              <div key={s.group} className="skills__group">
                <dt>{s.group}</dt>
                <dd>
                  <ul className="tags">
                    {s.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
