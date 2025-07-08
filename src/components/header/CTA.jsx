import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/upwork-profile" className="btn btn-secondary">
        <FaBriefcase className="cta-icon" /> Upwork Profile
      </Link>
    </div>
  );
};

export default CTA;
