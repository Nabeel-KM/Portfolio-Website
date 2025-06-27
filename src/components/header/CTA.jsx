import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
// Use the original CV file to avoid issues with spaces in filenames
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        <FaDownload className="cta-icon" /> Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        <FaEnvelope className="cta-icon" /> Let's Talk
      </a>
    </div>
  );
};

export default CTA;
