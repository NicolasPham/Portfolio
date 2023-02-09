import "./slider.scss";
import { projects } from "../constant/projects";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Slider = ({ projectId, imageIndex }) => {
  /*******************************************************/
  const [imgIndex, setImgIndex] = useState(imageIndex);

  let maxImg = projects[projectId].img.length;
  const handleSlide = (direction) => {
    if (direction === "up") {
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : maxImg - 1);
    } else {
      setImgIndex(imgIndex >= maxImg - 1 ? 0 : imgIndex + 1);
    }
  };
  /*******************************************************/
  return (
    <div className="slide">
      <BsFillArrowUpCircleFill
        className="slideIcon"
        onClick={() => handleSlide("up")}
      />

      <img src={projects[projectId].img[imgIndex]} alt="" />

      <BsFillArrowDownCircleFill
        className="slideIcon"
        onClick={() => handleSlide("down")}
      />
    </div>
  );
};

export default Slider;
