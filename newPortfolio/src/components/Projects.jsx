import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

import { BsGlobe, BsGithub } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import SectionWrapper from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants/projects.js";
import { slideLeft, zoomIn } from "../utils/motion";

//Project Card ======================================

const ProjectCard = ({ id, project }) => {
  const [img, setImg] = useState(0);
  function handleProjectImg(direction) {
    console.log("Click");
    if (direction === "left") {
      setImg(img > 0 ? img - 1 : project.img.length - 1);
    } else {
      setImg(img >= project.img.length - 1 ? 0 : img + 1);
    }
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={zoomIn(0, 0.5)}
      viewport={{ once: true }}
      className="mt-10 p-4 rounded-lg bg-light text-darkBlue"
    >
      <div className="relative">
        <div
          className="absolute z-10 text-light bg-sky-500/10 opacity-20 hover:opacity-100 h-full w-[20%] flex items-center justify-center text-[30px] top-0 left-0 cursor-pointer"
          onClick={() => handleProjectImg("left")}
        >
          <BsArrowLeft className="" />
        </div>
        <img
          src={project.img[img]}
          className="rounded-lg w-full h-full object-cover"
        />
        <div
          className="absolute z-10 text-light bg-sky-500/20 opacity-20 hover:opacity-100 h-full w-[20%] flex items-center justify-center text-[30px] right-0 top-0 cursor-pointer"
          onClick={() => handleProjectImg("right")}
        >
          <BsArrowRight className="slideIcon" />
        </div>
      </div>

      <div className="lg:grid grid-cols-4">
        <div className="col-start-1 col-end-4">
          <h1 className="text-center text-[24px] lg:text-[30px] text-red font-bold leading-1 p-2 mt-4">
            {project.title}
          </h1>
          <p className="p-3 text-[14px] lg:text-[18px]">{project.desc}</p>
        </div>
        <div className="flex justify-center items-center gap-[30px] py-5 px-5 lg:flex-col">
          <a
            href={project.url}
            target="_blank"
            className={`flex items-center gap-1 lg:gap-4 cursor-pointer text-secondary border-darkBlue border-[0.5px] bg-darkBlue px-4 py-2 rounded-md ${
              project.url.length < 2 ? "pointer-events-none" : ""
            }`}
          >
            <BsGlobe />
            {project.url.length > 0 ? "Live Demo" : "Not available"}
          </a>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center gap-1 cursor-pointer text-red border-red border-[0.5px] px-4 py-2 rounded-md"
          >
            <BsGithub /> Source Code
          </a>
        </div>
      </div>

      <hr className="mx-6 my-3" />

      <div className="lg:grid grid-cols-2 grid-rows-1">
        <div className="mb-4 px-3 mx-auto lg:px-5">
          <h2 className="text-[18px] lg:text-[24px] text-darkBlue font-[600]">
            Front End
          </h2>
          <div className="">
            {project.highlightFront.map((item, index) => (
              <p
                key={`project-${id}-front-${index}`}
                className="text-[14px] lg:text-[18px]"
              >
                - {item}
              </p>
            ))}
          </div>
        </div>

        <hr className="mx-6 my-3 lg:hidden" />

        {project.highlightBack.length > 0 && (
          <div className="mb-4 px-3 mx-auto lg:px-5">
            <h2 className="text-[18px] lg:text-[24px] text-darkBlue font-[600]">
              Back End
            </h2>
            <div>
              {project.highlightBack.map((item, index) => (
                <p
                  key={`project-${id}-back-${index}`}
                  className="text-[14px] lg:text-[18px]"
                >
                  - {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="mx-6 my-3 " />
      <div className="flex flex-wrap justify-evenly my-[30px]">
        {project.skills.map((skill, index) => (
          <span
            key={`projectSkill-${index}`}
            className="text-light text-[14px] black-gradient px-2 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
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

      <div className="grid grid-cols-2 grid-rows-3 lg:flex gap-3 justify-center mt-5">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="darkBlue-gradient shadow-card flex items-center justify-center 
          rounded-lg cursor-pointer border-primary border-[1px]"
            onClick={() => {
              setProjectId(index);
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideLeft(0.25 * index, 0.5)}
              viewport={{ once: true }}
            >
              <Tilt>
                <p className="text-center py-2 px-3">{project.title}</p>
              </Tilt>
            </motion.div>
          </div>
        ))}
      </div>

      <ProjectCard id={projectId} project={projects[projectId]} />
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
