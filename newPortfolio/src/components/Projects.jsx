import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

import SectionWrapper from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants/projects.js";

//Project Card ======================================

const ProjectCard = ({ id, project }) => {
  return (
    <div className="mt-10 px-4 py-2 rounded-lg bg-light text-darkBlue">
      <img
        src={project.img[0]}
        className="rounded-lg w-full h-full object-cover"
      />

      <div>
        <h1 className="text-center text-[24px] text-red font-bold leading-1 p-2 mt-4">
          {project.title}
        </h1>
        <p className="p-3 text-[14px]">{project.desc}</p>
      </div>

      <div className="">
        <hr className="mx-6 my-3" />
        <div className="mb-4 px-3 mx-auto">
          <h2 className="text-[18px] text-darkBlue font-[600]">Front End</h2>
          <div className="">
            {project.highlightFront.map((item, index) => (
              <p key={`project-${id}-front-${index}`} className="text-[14px]">
                - {item}
              </p>
            ))}
          </div>
        </div>

        <hr className="mx-6 my-3" />

        {project.highlightBack.length > 0 && (
          <div className="mb-4 px-3 mx-auto">
            <h2 className="text-[18px] text-darkBlue font-[600]">Back End</h2>
            <div>
              {project.highlightBack.map((item, index) => (
                <p key={`project-${id}-back-${index}`} className="text-[14px]">
                  - {item}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-between">
          {project.skills.map((skill, index) => (
            <span
              key={`projectSkill-index`}
              className="text-light text-[12px] bg-darkBlue px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

//===================================================
const Projects = () => {
  const [projectId, setProjectId] = useState(0);

  return (
    <section>
      <motion.div>
        <p className={styles.sectionSubText}>MY work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.div className="grid grid-cols-2 grid-rows-3 gap-3 justify-center mt-5">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="darkBlue-gradient shadow-card flex items-center justify-center 
          rounded-lg cursor-pointer border-primary border-[1px]"
            onClick={() => {
              setProjectId(index);
            }}
          >
            <Tilt>
              <p className="text-center py-2 px-3">{project.title}</p>
            </Tilt>
          </div>
        ))}
      </motion.div>

      <ProjectCard id={projectId} project={projects[projectId]} />
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
