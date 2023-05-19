import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-[24px] font-bold text-cream">Nicolas Pham</h1>
        </Link>

        <ul className="hidden sm:flex gap-5 items-center list-none">
          {navLinks.map((link) => (
            <li
              key={`navLink-${link.id}`}
              className="cursor-pointer hover:text-light hover:translate-y-[-1px]"
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[30px] h-[30px] object-contain"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
