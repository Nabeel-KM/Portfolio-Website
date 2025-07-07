import React from "react";
import { FaDownload, FaEnvelope, FaBriefcase } from "react-icons/fa";
// Use the updated resume file
import CV from "../../assets/Nabeel_Sarfraz_DevOps_Engineer_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        <FaDownload className="cta-icon" /> Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        <FaEnvelope className="cta-icon" /> Let's Talk
      </a>
      <a href="/upwork-profile.html" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        <FaBriefcase className="cta-icon" /> Upwork Profile
      </a>
    </div>
  );
};

export default CTA;
