import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

// ProjectCard create===========================
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary sm:w-[360px] w-full p-5 rounded-2xl"
        options={{
          max: 45,
          speed: 450,
          scale: 1,
        }}
      >
        <div className="w-full h-[230px] relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-1 card-img_hover">
            <div
              className="w-8 h-8 black-gradient rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                atl="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p className={`text-14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// ====================================================

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>MY work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl">
          Following projects showcases my skills and experience through examples
          of my work. Each project is briefly described with links to code
          resporatories and live demos in it. It reflec my abilities to solve
          complex problems, work with different technologies, and manage
          projects efficiently.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
