import React from "react";
import "./Projects.scss";
import { projects } from "../constant/projects";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, key) => (
        <div className="card" key={key}>
          <img src={project.img} alt="" />
          <div className="card_info">
            <h1>{project.title}</h1>
            <div className="skill">
              {project.skills.map((skill, keyskill) => (
                <span key={keyskill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
