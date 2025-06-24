import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="main">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nabeel Sarfraz</h1>
        <h5 className="text-light">DevOps Engineer</h5>
        <div style={{fontSize: '0.95em', color: '#b0b0b0', margin: '0.5em 0 1em 0', fontWeight: 500}}>
          AWS · Terraform · Ansible · Docker · GitHub Actions · Python · CI/CD · CloudWatch · Linux · Git
        </div>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
