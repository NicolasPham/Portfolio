import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

import { hello } from "../assets";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          Hi, I'm
        </motion.span>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        >
          Nicolas <font>Pham</font>
        </motion.span>
        <motion.span
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 3 }}
        >
          A <font>FullStack</font> Developer
        </motion.span>
      </div>
      <div className="right">
        <motion.img
          src={hello}
          alt=""
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        />
        <div />
      </div>
    </div>
  );
};

export default Home;
