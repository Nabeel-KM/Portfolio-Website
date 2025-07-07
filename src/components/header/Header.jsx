import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
import { FaAws, FaDocker, FaGithub, FaJenkins, FaPython, FaLinux, FaGit } from "react-icons/fa";
import { SiTerraform, SiAnsible } from "react-icons/si";
import { MdMonitor } from "react-icons/md";

const Header = () => {
  return (
    <header id="main">
      <div className="container header_container">
        <div className="header__content">
          <div className="header__text">
            <h5>Hello, I'm</h5>
            <h1>Nabeel Sarfraz</h1>
            <h5 className="text-light">DevOps Engineer</h5>
            
            <div className="header__skills">
              <div className="header__skill-item">
                <FaAws className="header__skill-icon" />
                <span>AWS</span>
              </div>
              <div className="header__skill-item">
                <SiTerraform className="header__skill-icon" />
                <span>Terraform</span>
              </div>
              <div className="header__skill-item">
                <SiAnsible className="header__skill-icon" />
                <span>Ansible</span>
              </div>
              <div className="header__skill-item">
                <FaDocker className="header__skill-icon" />
                <span>Docker</span>
              </div>
              <div className="header__skill-item">
                <FaGithub className="header__skill-icon" />
                <span>GitHub Actions</span>
              </div>
              <div className="header__skill-item">
                <FaPython className="header__skill-icon" />
                <span>Python</span>
              </div>
              <div className="header__skill-item">
                <FaJenkins className="header__skill-icon" />
                <span>CI/CD</span>
              </div>
              <div className="header__skill-item">
                <MdMonitor className="header__skill-icon" />
                <span>CloudWatch</span>
              </div>
              <div className="header__skill-item">
                <FaLinux className="header__skill-icon" />
                <span>Linux</span>
              </div>
              <div className="header__skill-item">
                <FaGit className="header__skill-icon" />
                <span>Git</span>
              </div>
            </div>
            
            <div className="header__tagline">
              <p>Building scalable, secure, and automated cloud infrastructure</p>
            </div>
            
            <CTA />
          </div>
          
          <div className="header__image-container">
            <div className="me">
              <img src={ME} alt="Nabeel Sarfraz" />
            </div>
          </div>
        </div>
        
        <HeaderSocial />
        
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
