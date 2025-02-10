import React from "react";
import mongo from "../../assets/mongo.svg";
import java from "../../assets/java.svg";
import react from "../../assets/react.svg";
import css from "../../assets/css.svg";
import html from "../../assets/html5.svg";
import spring from "../../assets/spring.svg";
import sql from "../../assets/sql.svg";
import mysql from "../../assets/mysql.svg";
import javascript from "../../assets/javascript.svg";
import postgresql from "../../assets/postgresql.svg";

const Stack = () => {
  return (
    <div className="skills__container">
      <div className="skill__content html">
        <img src={html} alt="" />
        <p>HTML</p>
      </div>
      <div className="skill__content css">
        <img src={css} alt="" />
        <p>CSS</p>
      </div>
      <div className="skill__content js">
        <img src={javascript} alt="" />
        <p>JavaScript</p>
      </div>
      <div className="skill__content react">
        <img src={react} alt="" />
        <p>React</p>
      </div>
      <div className="skill__content java">
        <img src={java} alt="" />
        <p>Java</p>
      </div>
      <div className="skill__content spring">
        <img src={spring} alt="" />
        <p>Spring</p>
      </div>
      <div className="skill__content mysql">
        <img src={mysql} alt="" />
        <p>MySQL</p>
      </div>
      <div className="skill__content sql">
        <img src={sql} alt="" />
        <p>SQL</p>
      </div>
      <div className="skill__content postgre">
        <img src={postgresql} alt="" />
        <p>PostgreSQL</p>
      </div>
      <div className="skill__content mongo">
        <img src={mongo} alt="" />
        <p>MongoDB</p>
      </div>
    </div>
  );
};

export default Stack;
