import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { GiHamburgerMenu } from "react-icons/gi";

//Import icons
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const nav = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "PROJECTS",
    link: "/projects",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="link">
        {!showMenu && (
          <div className="logo">
            <span>NICOLAS PHAM</span>
          </div>
        )}
      </Link>

      {!showMenu && (
        <GiHamburgerMenu
          className="menu"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}

      {showMenu && (
        <div className="nav">
          {nav.map((item, index) => (
            <Link
              to={item.link}
              className="link"
              key={index}
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="navSection">{item.name}</div>
            </Link>
          ))}

          <div className="navSection" onClick={props.changeMode}>
            {props.mode ? (
              <BsFillSunFill className="navIcon" />
            ) : (
              <BsFillMoonFill className="navIcon" />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
