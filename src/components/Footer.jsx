import Icon from "./Icon.jsx";
import { site } from "../data/site.js";
import "./Footer.css";

/* global __BUILD_DATE__ */

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p>
            © {year} {site.name} · {site.location}
          </p>
          <p className="footer__updated">Last updated {__BUILD_DATE__}</p>
        </div>

        <div className="footer__right">
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="footer__icon">
            <Icon name="linkedin" size={18} title="LinkedIn" />
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="footer__icon">
            <Icon name="github" size={18} title="GitHub" />
          </a>
          <a href="#home" className="footer__top">
            Back to top <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
