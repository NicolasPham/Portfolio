import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

//Import icons
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const nav = [
  {
    name: "HOME",
    link: '/',
  },
  {
    name: "PROJECTS",
    link: '/projects',
  },
  {
    name: "ABOUT",
    link: '/about',
  },
  {
    name: "CONTACT",
    link: '/contact',
  },
]

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <Link to='/' className="link" >
      <div className="logo">
        <span>NICOLAS PHAM</span>
      </div>
      </Link>

      <div className="nav">
          
      {nav.map((item, index) => (
        <Link to={item.link} className="link" key={index}>
        <div className="navSection">
          {item.name}
        </div>
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
    </nav>
  );
};

export default Navbar;
