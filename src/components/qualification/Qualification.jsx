import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
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
              <div>
                <h3 className="qualification__title">
                  Tecnicatura Universitaria en Programacion
                </h3>
                <span className="qualification__subtitle">
                  UTN - Facultad Regional San Rafael
                </span>
                <div className="qualification__calender">
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

              <div>
                <h3 className="qualification__title">Carrera Backend</h3>
                <span className="qualification__subtitle">Coderhouse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>08/2022 - 01/2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Curso ReactJs</h3>
                <span className="qualification__subtitle">Coderhouse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>05/2022 - 07/2022
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

              <div>
                <h3 className="qualification__title">Curso JavaScript</h3>
                <span className="qualification__subtitle">Coderhouse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>03/2022 - 05/2022
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
              <div>
                <h3 className="qualification__title">
                  Backend Developer Internship
                </h3>
                <span className="qualification__subtitle">inkuA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>08/2023 - 12/2023
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

              <div>
                <h3 className="qualification__title">Art Director2</h3>
                <span className="qualification__subtitle">
                  Spain - Institue
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design2</h3>
                <span className="qualification__subtitle">
                  Spain - Institue
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
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

              <div>
                <h3 className="qualification__title">Art Director2</h3>
                <span className="qualification__subtitle">
                  Spain - Institue
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
