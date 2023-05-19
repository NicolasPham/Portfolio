import { motion } from "framer-motion";

import { hero } from "../assets";
import { slideLeft, slideRight } from "../utils/motion.js";

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-center md:pt-[100px]">
      <div className="max-w-7xl w-[100%] mt-0 md:mt-1 flex flex-col items-center justify-center gap-10 md:gap-0 md:justify-evenly px-5 sm:flex-row">
        <motion.div initial="hidden" animate="show" variants={slideLeft(1, 1)}>
          <p className="text-[48px] md:text-[64px]">
            Hi, I'm <span className="text-red font-bold">Nicolas</span>
          </p>
          <p className="text-[30px] md:text-[48px]">
            A <span className="text-primary font-bold">FullStack</span>{" "}
            Developer
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={slideRight(1, 1)}>
          <img
            src={hero}
            alt="hero"
            className="h-[400px] md:h-[600px] w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
