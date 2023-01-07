import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className="link">
        <div className="navSection">
          <AiFillHome className="navIcon" />
          {showName && <span>Home</span>}
        </div>
      </Link>
      <Link to="/projects" className="link">
        <div className="navSection">
          <AiFillProject className="navIcon" />
          {showName && <span>Projects</span>}
        </div>
      </Link>
      <Link to="/about" className="link">
        <div className="navSection">
          <FaUser className="navIcon" />
          {showName && <span>About</span>}
        </div>
      </Link>
      <Link to="/contact" className="link">
        <div className="navSection">
          <AiFillMail className="navIcon" />
          {showName && <span>Contact</span>}
        </div>
      </Link>
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
