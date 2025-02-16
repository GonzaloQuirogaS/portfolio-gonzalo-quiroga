import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
      <p>{item.description}</p>
      <ul className="work__technologies">
        {item.technologies.map((technology, index) => {
          return (
            <li className="work__technology" key={index}>
              {technology}
            </li>
          );
        })}
      </ul>
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="work__button"
      >
        Ver proyecto
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
