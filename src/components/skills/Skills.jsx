import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tecnologias</h2>
      <span className="section__subtitle">
        En mi viaje por el mundo del desarrollo web, he cultivado experiencia y
        habilidades <br></br> en una variedad de tecnologias.
        <strong> Mi stack tecnologico incluye:</strong>
      </span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
