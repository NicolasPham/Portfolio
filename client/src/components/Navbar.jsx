import React, { useState } from "react";
import "./style.scss";

//Import icons
import { AiFillHome, AiFillProject, AiFillMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = (props) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="navbar"
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <div className="navSection">
        <AiFillHome className="navIcon" />
        {showName && <span>Home</span>}
      </div>
      <div className="navSection">
        <AiFillProject className="navIcon" />
        {showName && <span>Projects</span>}
      </div>
      <div className="navSection">
        <FaUser className="navIcon" />
        {showName && <span>About</span>}
      </div>
      <div className="navSection">
        <AiFillMail className="navIcon" />
        {showName && <span>Contact</span>}
      </div>
      <div className="navSection" onClick={props.changeMode}>
        {props.mode ? (
          <BsFillSunFill className="navIcon" />
        ) : (
          <BsFillMoonFill className="navIcon" />
        )}
        {showName && <span>Mode</span>}
      </div>
    </div>
  );
};

export default Navbar;
