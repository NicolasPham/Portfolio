import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled software developer with knowledge in frameworks such as
        React, Nodejs. I'm a quick learner and will be able to collaborate
        closely with clients and team members to create efficient, scalable, and
        user-friendly solutions that solve real-world problem.
      </motion.p>
    </>
  );
};

export default About;
