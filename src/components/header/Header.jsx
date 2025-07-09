import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
import { FaAws, FaDocker, FaGithub, FaJenkins, FaPython, FaLinux, FaGit, FaChevronDown } from "react-icons/fa";
import { SiTerraform, SiAnsible } from "react-icons/si";
import { MdMonitor } from "react-icons/md";

const Header = () => {
  const skillsRef = useRef(null);
  
  useEffect(() => {
    // Add staggered animation to skills
    if (skillsRef.current) {
      const skills = skillsRef.current.querySelectorAll('.header__skill-item');
      skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, []);

  return (
    <header id="main">
      <a href="#about" className="skip-link">Skip to main content</a>
      <div className="container header_container">
        <div className="header__content">
          <div className="header__text animate-fade-in visible">
            <h5>Hello, I'm</h5>
            <h1 className="gradient-text">Nabeel Sarfraz</h1>
            <h5 className="text-light">DevOps Engineer & Cloud Architect</h5>
            
            <div className="header__tagline">
              <p>Building scalable, secure, and automated cloud infrastructure</p>
            </div>
            
            <div className="header__skills" ref={skillsRef}>
              <div className="header__skill-item skill-animation">
                <FaAws className="header__skill-icon" />
                <span>AWS</span>
              </div>
              <div className="header__skill-item skill-animation">
                <SiTerraform className="header__skill-icon" />
                <span>Terraform</span>
              </div>
              <div className="header__skill-item skill-animation">
                <SiAnsible className="header__skill-icon" />
                <span>Ansible</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaDocker className="header__skill-icon" />
                <span>Docker</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaGithub className="header__skill-icon" />
                <span>GitHub Actions</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaPython className="header__skill-icon" />
                <span>Python</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaJenkins className="header__skill-icon" />
                <span>CI/CD</span>
              </div>
              <div className="header__skill-item skill-animation">
                <MdMonitor className="header__skill-icon" />
                <span>CloudWatch</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaLinux className="header__skill-icon" />
                <span>Linux</span>
              </div>
              <div className="header__skill-item skill-animation">
                <FaGit className="header__skill-icon" />
                <span>Git</span>
              </div>
            </div>
            
            <CTA />
          </div>
          
          <div className="header__image-container animate-fade-in visible">
            <div className="me">
              <img src={ME} alt="Nabeel Sarfraz" className="profile-image" />
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
        
        <HeaderSocial />
        
        <a href="#about" className="scroll__down">
          <span>Scroll Down</span>
          <FaChevronDown className="scroll-icon pulse" />
        </a>
      </div>
    </header>
  );
};

export default Header;
