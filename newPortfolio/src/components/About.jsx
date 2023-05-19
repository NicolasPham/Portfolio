import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import SectionWrapper from "../hoc";
import { styles } from "../styles";
import { aboutCard } from "../constants";
import { zoomIn } from "../utils/motion";

//==================================================
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={zoomIn(0.5 * skill.id, 1)}
    >
      <Tilt
        transitionSpeed={200}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="mt-10 black-gradient px-7 py-5 rounded-2xl 
      shadow-card border-secondary border-2 lg:h-full"
      >
        <h1 className="text-[30px] text-primary mb-[10px] font-[700] tracking-wide">
          {skill.title}
        </h1>
        {skill.skills.map((item, index) => (
          <p key={`${skill.title}-${index}`} className="text-light leading-8">
            {item}
          </p>
        ))}
      </Tilt>
    </motion.div>
  );
};

//==================================================
const About = () => {
  return (
    <section>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p className="mt-4 text-light max-w-3xl leading-[30px] text-[17px]">
        I'm a skilled software developer with knowledge in frameworks such as
        React, Nodejs. I'm a quick learner and will be able to collaborate
        closely with clients and team members to create efficient, scalable, and
        user-friendly solutions that solve real-world problem.
      </motion.p>
      <div className="lg:grid grid-cols-3 grid-rows-1 gap-4">
        {aboutCard.map((skill) => (
          <SkillCard skill={skill} key={`about-${skill.id}`} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
