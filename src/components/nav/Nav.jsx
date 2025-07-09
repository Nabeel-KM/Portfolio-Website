import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#main");
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add scrolled class
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = '#' + section.getAttribute('id');
        }
      });
      
      if (current !== '' && current !== activeNav) {
        setActiveNav(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeNav]);
  
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-tooltip">Home</div>
      <a
        href="#main"
        onClick={() => setActiveNav("#main")} 
        className={activeNav === "#main" ? "active" : ""} 
        aria-label="Home"
        data-tooltip="Home"
      >
        <AiOutlineHome />
        <span className="nav-label">Home</span>
      </a>
      
      <div className="nav-tooltip">About</div>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
        data-tooltip="About"
      >
        <AiOutlineUser />
        <span className="nav-label">About</span>
      </a>
      
      <div className="nav-tooltip">Experience</div>
      <a 
        href="#experience" 
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Experience"
        data-tooltip="Experience"
      >
        <BiBook />
        <span className="nav-label">Experience</span>
      </a>
      
      <div className="nav-tooltip">Services</div>
      <a 
        href="#services" 
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="Services"
        data-tooltip="Services"
      >
        <RiServiceLine />
        <span className="nav-label">Services</span>
      </a>
      
      <div className="nav-tooltip">Portfolio</div>
      <a 
        href="#portfolio" 
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Portfolio"
        data-tooltip="Portfolio"
      >
        <FaLaptopCode />
        <span className="nav-label">Portfolio</span>
      </a>
      
      <div className="nav-tooltip">Contact</div>
      <a 
        href="#contact" 
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
        data-tooltip="Contact"
      >
        <BiMessageSquareDetail />
        <span className="nav-label">Contact</span>
      </a>
      
      <div className="nav-tooltip">Upwork</div>
      <Link 
        to="/upwork-profile" 
        className={activeNav === "upwork" ? "active" : ""}
        aria-label="Upwork Profile"
        data-tooltip="Upwork"
      >
        <FaBriefcase />
        <span className="nav-label">Upwork</span>
      </Link>
    </nav>
  );
};

export default Nav;
