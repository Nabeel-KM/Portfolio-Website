import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Nabeel Sarfraz</a>

      <ul className="permalinks">
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/nabeel-sarfraz" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/Nabeel-KM" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:nabntan@gmail.com" aria-label="Email"><FiMail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Nabeel Sarfraz. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
