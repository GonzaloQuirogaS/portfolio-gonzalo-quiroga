import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Gonzalo Quiroga</h1>
        <ul className="footer__list">
          <li className="footer__link">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__link">
            {" "}
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li className="footer__link">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gonzalo-quiroga7/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://github.com/GonzaloQuirogaS"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Gonzalo Quiroga</span>
      </div>
    </footer>
  );
};

export default Footer;
