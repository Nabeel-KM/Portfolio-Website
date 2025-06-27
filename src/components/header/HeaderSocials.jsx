import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a 
        href="https://linkedin.com/in/nabeel-sarfraz" 
        target="_blank" 
        rel="noreferrer"
        title="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/Nabeel-KM" 
        target="_blank" 
        rel="noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noreferrer"
        title="Twitter"
      >
        <FaTwitter />
      </a>
      <a 
        href="https://medium.com" 
        target="_blank" 
        rel="noreferrer"
        title="Medium"
      >
        <SiMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
