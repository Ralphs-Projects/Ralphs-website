import Icon from "./Icon.jsx";
import { education } from "../data/education.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Degrees &amp; certificates</h2>
        </div>

        <ul className="edu">
          {education.map((e) => (
            <li key={e.title} className={`card edu__item${e.detail ? "" : " edu__item--short"}`}>
              <span className="edu__icon">
                <Icon name={e.detail ? "degree" : "award"} size={22} />
              </span>
              <div>
                <h3 className="edu__title">{e.title}</h3>
                <p className="edu__school">{e.school}</p>
                {e.detail && <p className="edu__detail">{e.detail}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
