import React from "react";
import "./Contact.scss";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT ME</h1>
      <div className="content">
        <div className="input">
          <form>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" />
            <textarea placeholder="Send me your message...." rows="10" />
          </form>
        </div>

        <hr />
        <div className="info">
          <p>
            <AiOutlineUser /> Nicolas Pham
          </p>
          <p>
            <AiOutlinePhone /> +1 437 984 4400
          </p>
          <p>
            <AiOutlineMail /> phd.ngoc163@gmail.com
          </p>

          <div className="social">
            <a href="https://github.com/NicolasPham?tab=repositories" className="link" target="_blank" rel="noreferrer">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/nicolas-pham-b39b8b15a/" className="link" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
