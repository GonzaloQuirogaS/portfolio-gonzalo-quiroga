import React from "react";
import "./skills.css";
import Stack from "./Stack";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tecnologias</h2>
      <span className="section__subtitle">Mi stack tecnológico incluye</span>
      <div className="skills__container container grid">
        <Stack />
      </div>
    </section>
  );
};

export default Skills;
