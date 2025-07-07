import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#main");
  return (
    <nav>
      <a
        href="#main"
        onClick={() => setActiveNav("#main")} className={activeNav === "#main" ? "active" : ""} >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
      <a href="/upwork-profile.html" target="_blank" rel="noopener noreferrer"
        className={activeNav === "upwork" ? "active" : ""}>
        <FaBriefcase />
      </a>
    </nav>
  );
};

export default Nav;
