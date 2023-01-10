import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>ABOUT ME</h1>
      <div className="skills">
        <div className="section">
          <h2>FRONTEND</h2>
          <hr />
          <div className="contain">
            <div className="tools">
              <span>
                <BsFillPatchCheckFill className="check" />
                HTML
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                CSS
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                Javascript
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                React
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                Redux
              </span>
            </div>
            <div className="details">
              <p>- Proficient using HTML, CSS, Javascript</p>
              <p>- React Components to create similar objects</p>
              <p>- React Hooks such as useState, useContext, useEffect</p>
              <p>
                - Redux to retrieve data from a complicated app instead of
                useContext
              </p>
              <p>- SASS to efficiently manage styles</p>
              <p>- CSS Framework such as Bootstrap, Tailwind</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>BACKEND</h2>
          <hr />
          <div className="contain">
            <div className="tools">
              <span>
                <BsFillPatchCheckFill className="check" />
                NodeJs
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                Express
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                MongoDB
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                Axios
              </span>
              <span>
                <BsFillPatchCheckFill className="check" />
                MySQL
              </span>
            </div>
            <div className="details">
              <p>- Nodejs to create RESTful API app</p>
              <p>- Bcrypt to hash password</p>
              <p>- MongoDB/MySQL to store data either on cloud or on local</p>
              <p>- Sessions and cookies for retrieve a history data</p>
              <p>- Multer to upload image</p>
              <p>- Cloudinary to store images on cloud</p>
              <p>- Axios to connect backend and frontend</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
