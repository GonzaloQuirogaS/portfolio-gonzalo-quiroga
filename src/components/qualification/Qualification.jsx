import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Experiencia</h2>
      <span className="section__subtitle">Mi camino</span>

      <div className="qualification__container ">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educacion
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div className="qualification__data__info">
                <h3 className="qualification__title">
                  Tecnicatura Universitaria en Programación
                </h3>
                <span className="qualification__subtitle">
                  UTN - Facultad Regional San Rafael
                </span>
                <p className="qualification__description">
                  Adquiri conocimientos en manejo de
                  <strong> bases de datos</strong>, desarrollo de aplicaciones
                  <strong>
                    {" "}
                    web y de escritorio , arquitectura de software y
                    metodologías ágiles{" "}
                  </strong>
                  entre otras tecnologías.
                </p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>02/2022 - 12/2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__data__info">
                <h3 className="qualification__title">Curso Spring</h3>
                <span className="qualification__subtitle">
                  Udemy - Andres Guzmán
                </span>
                <p className="qualification__description">
                  Curso en el cual adquiri conocimientos en el desarrollo de
                  aplicaciones <strong>backend</strong> utilizando{" "}
                  <strong>
                    Spring Framework 6 y Spring Boot 3: AOP, JPA, Security JWT,
                    RESTful, AWS EC2
                  </strong>{" "}
                  entre otras tecnologias.
                </p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>03/2024 - Finalizado
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__data__info">
                <h3 className="qualification__title">Carrera Backend</h3>
                <span className="qualification__subtitle">Coderhouse</span>
                <p className="qualification__description">
                  Curso en el cual adquiri conocimientos en el desarrollo de
                  aplicaciones{" "}
                  <strong>
                    backendutilizando Node.js, Express, MongoDB y MySQL
                  </strong>{" "}
                  entre otras tecnologias.
                </p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>08/2022 - 01/2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__data__info">
                <h3 className="qualification__title">Carrera Frontend</h3>
                <span className="qualification__subtitle">Coderhouse</span>
                <p className="qualification__description">
                  Curso en el cual adquiri conocimientos en el desarrollo de
                  aplicaciones <strong>frontend</strong> utilizando{" "}
                  <strong>HTML, CSS, JavaScript y React</strong> entre otras
                  tecnologias.
                </p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>12/2021 - 07/2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div className="qualification__data__info">
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">InkuA</span>
                <p className="qualification__description">
                  Trabajé en el desarrollo <strong>backend</strong> del campus
                  virtual OCA (Open Code Academy) para el cual desarrolle una
                  <strong> API RESTful</strong> implementando tecnologias como
                  <strong> Spring Boot</strong> para el desarrollo de la API,
                  <strong> JWT</strong> para la autenticación y autorización de
                  usuarios, y <strong> PostgreSQL</strong> para la persistencia
                  de datos. Ademas trabaje en el desarrollo de un bot asistente
                  llamado "Robotino" el cual se encarga de asistir a los alumnos
                  en la resolución de dudas y consultas.
                </p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>08/2023 - 12/2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
