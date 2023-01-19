import React, { useState } from "react";
import "./Projects.scss";
import { projects } from "../constant/projects";
import { motion } from "framer-motion";

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

  const variants = {
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, x: -200 },
  };

  return (
    <div className="projects">
      <h1>MY PROJECTS</h1>
      <div className="content">
        <div className="container">
          {projects.map((project, i) => (
            <motion.div
              className="card"
              key={i}
              onClick={handleClick}
              custom={i}
              initial="hidden"
              animate="show"
              variants={variants}
            >
              {project.title}
            </motion.div>
          ))}
        </div>

        <div className={`${!projects[id] ? "visible" : ""} detail`}>
          {projects[id] && (
            <div className="card_detail">
              <div className="desc">
                <h2>{projects[id].title}</h2>
                <div className="content">
                  <p>{projects[id].desc}</p>

                  <div className="function">
                  <hr/>
                    {projects[id].highlightFront.map((skill, index) => (
                      <p key={index}>- {skill}</p>
                    ))}
                  </div>
                  <div className="function">
                    {projects[id].highlightBack.map((skill, index) => (
                      <p key={index}>- {skill}</p>
                    ))}
                  </div>
                </div>
                
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
