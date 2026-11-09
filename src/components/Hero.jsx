import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { site } from "../data/site.js";
import "./Hero.css";

// Types each phrase letter by letter, pauses, erases it, then types the next.
// Runs even with "reduce motion" on: typing text isn't the kind of motion
// that setting is for, and screen readers get the full sentence separately.
function useTypewriter(phrases, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    let t;
    if (!erasing && text === full) {
      t = setTimeout(() => setErasing(true), hold);
    } else if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      t = setTimeout(
        () => setText(erasing ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        erasing ? erase : type
      );
    }
    return () => clearTimeout(t);
  }, [text, erasing, index, phrases, type, erase, hold]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(site.specialties);
  const list = site.specialties;
  const sentence = `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__title">{site.title}</p>

        <p className="hero__typed">
          <span className="visually-hidden">Building {sentence}.</span>
          <span aria-hidden="true">
            building <span className="hero__phrase">{typed}</span>
            <span className="hero__caret" />
          </span>
        </p>

        <p className="hero__location">
          <Icon name="pin" size={16} /> {site.location}
        </p>

        <div className="hero__actions">
          <a className="btn btn-primary" href="#work">
            View my work <Icon name="arrowRight" />
          </a>
          <a className="btn btn-ghost" href={site.cv} target="_blank" rel="noopener">
            <Icon name="file" /> View CV
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <Icon name="chevronDown" size={22} />
      </a>
    </section>
  );
}
