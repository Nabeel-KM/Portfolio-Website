import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaEnvelope, FaBriefcase } from "react-icons/fa";
// Use the updated resume file
import CV from "../../assets/Nabeel_Sarfraz_DevOps_Engineer_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-secondary btn-with-icon">
        <FaDownload className="btn-icon" /> 
        <span>Download Resume</span>
      </a>
      <a href="#contact" className="btn btn-primary btn-with-icon">
        <FaEnvelope className="btn-icon" /> 
        <span>Let's Talk</span>
      </a>
      <Link to="/upwork-profile" className="btn btn-outline btn-with-icon">
        <FaBriefcase className="btn-icon" /> 
        <span>Upwork Profile</span>
      </Link>
    </div>
  );
};

export default CTA;
