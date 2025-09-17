import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`sidemenu-wrapper ${isOpen ? "open" : "closed"}`}>
      <div className={`sidemenu-button-wrapper ${isOpen ? "open" : "closed"}`}>
        <img
          src={darkMode ? "/arrow_dark.png" : "/arrow_light.png"}
          alt="Toggle Menu"
          className={`sidemenu-toggle-arrow ${isOpen ? "open" : "closed"}`}
          onClick={toggleMenu}
        />
      </div>
      <div
        className="sidemenu-items"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="sidemenu-item">about me</div>
        <br />
        <div className="sidemenu-item">my projects</div>
        <br />
        <div className="sidemenu-item">my resume</div>
        <br />
        <br />
        <div className="sidemenu-filler">==========</div>
        <br />
        <br />
        <div className="sidemenu-link">
          <a
            href="https://www.linkedin.com/in/thedavidkipnis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <br />
        <div className="sidemenu-link">
          <a
            href="https://github.com/thedavidkipnis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
