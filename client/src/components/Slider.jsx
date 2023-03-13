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
      {projects[projectId].img.length > 1 && (
        <div className="iconWrapper up" onClick={() => handleSlide("up")}>
          <BsFillArrowUpCircleFill className="slideIcon" />
        </div>
      )}

      <img src={projects[projectId].img[imgIndex]} alt="" />
      {projects[projectId].img.length > 1 && (
        <div className="iconWrapper down" onClick={() => handleSlide("down")}>
          <BsFillArrowDownCircleFill className="slideIcon" />
        </div>
      )}
    </div>
  );
};

export default Slider;
