import React from "react";
import "./leftBar.css";
import { SiFrontendmentor } from "react-icons/si";
import { RiGithubLine } from "react-icons/ri";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const LeftBar = () => {
  return (
    <div className="bar leftbar">
      <div className="wrapper">
        <ul>
          <li title="Github">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Oussamabennabi"
            >
              <RiGithubLine fill="#FFFFFF" />
            </a>
          </li>
          <li title="Facebook">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/Oussama.Ben.Q/"
            >
              <FiFacebook fill="#FFFFFF" />
            </a>
          </li>

          <li title="LinkedIn">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/oussama-bennabi/"
            >
              <FiLinkedin fill="#FFFFFF" />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              title="tor"
              href="https://www.frontendmentor.io/profile/Oussamabennabi"
              rel="noreferrer"
            >
              <SiFrontendmentor fill="#FFFFFF" />
            </a>
          </li>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default LeftBar;
