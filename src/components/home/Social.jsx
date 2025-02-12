import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/gonzalo-quiroga7/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/GonzaloQuirogaS"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      <a href="#contact" className="home__social-icon">
        <i className="uil uil-envelope"></i>
      </a>
      <div className="home__social-barra"></div>
    </div>
  );
};

export default Social;
