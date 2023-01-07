import React from "react";
import "./Home.scss";

import { hello } from "../assets";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <span>Hi, I'm</span>
        <span>
          Nicolas <font>Pham</font>
        </span>
        <span>
          A <font>FullStack</font> Developer
        </span>
      </div>
      <div className="right">
        <img src={hello} alt="" />
        <div />
      </div>
    </div>
  );
};

export default Home;
