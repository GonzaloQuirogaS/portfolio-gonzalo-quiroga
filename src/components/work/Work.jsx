import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work__section section" id="portfolio">
      <h2 className="section__title">Proyectos</h2>
      <span className="section__subtitle"></span>
      <div className="work__container">
        <Works />
      </div>
    </section>
  );
};

export default Work;
