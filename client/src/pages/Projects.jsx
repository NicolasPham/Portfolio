import React, { useState } from "react";
import "./Projects.scss";
import { projects } from "../constant/projects";

const Projects = () => {
  const [id, setId] = useState();
  const handleClick = (e) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList = "card";
    });

    e.target.className = "card active";

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].className === "card active") {
        setId(i);
      }
    }
  };
  console.log(projects[id]);

  return (
    <div className="projects">
      <h1>MY PROJECTS</h1>
      <div className="content">
        <div className="container">
          {projects.map((project, key) => (
            <div className="card" key={key} onClick={handleClick}>
              <span>{project.title}</span>
            </div>
          ))}
        </div>

        <div className={`${!projects[id] ? "visible" : ""} detail`}>
          {projects[id] && (
            <div className="card_detail">
              <div className="desc">
                <h2>{projects[id].title}</h2>
                <p>{projects[id].desc}</p>
                <div className="skills">
                  {projects[id].skills.map((skill, key) => (
                    <span key={key}>{skill}</span>
                  ))}
                </div>
              </div>
              <img src={projects[id].img} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
