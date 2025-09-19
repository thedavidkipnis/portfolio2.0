import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useContent } from "../context/ContentProvider";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const { darkMode } = useTheme();
  const { setDisplayedContentFlag } = useContent();

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
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("DisplayBoard");
            setIsOpen(!isOpen);
          }}
        >
          about me
        </div>
        <br />
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("ResumeBoard");
            setIsOpen(!isOpen);
          }}
        >
          my resume
        </div>
        <br />
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("ProjectBoard");
            setIsOpen(!isOpen);
          }}
        >
          my projects
        </div>
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
