import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-java"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-spring-boot"></i>
            <div>
              <h3 className="skills__name">Spring</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-data"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-postgresql"></i>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
