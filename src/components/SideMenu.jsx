import { useTheme } from "../context/ThemeContext";
import { useContent } from "../context/ContentProvider";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const { darkMode } = useTheme();
  const {
    isSideMenuOpen,
    setIsSideMenuOpen,
    displayedContentFlag,
    setDisplayedContentFlag,
  } = useContent();

  const toggleMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  return (
    <div className={`sidemenu-wrapper ${isSideMenuOpen ? "open" : "closed"}`}>
      <div
        className={`sidemenu-button-wrapper ${isSideMenuOpen ? "open" : "closed"}`}
      >
        <img
          src={
            darkMode
              ? "/portfolio2.0/arrow_dark.png"
              : "/portfolio2.0/arrow_light.png"
          }
          alt="Toggle Menu"
          className={`sidemenu-toggle-arrow ${isSideMenuOpen ? "open" : "closed"}`}
          onClick={toggleMenu}
        />
      </div>
      <div
        className="sidemenu-items"
        style={{
          opacity: isSideMenuOpen ? 1 : 0,
          pointerEvents: isSideMenuOpen ? "auto" : "none",
        }}
      >
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("DisplayBoard");
            setIsSideMenuOpen(!isSideMenuOpen);
          }}
        >
          {displayedContentFlag == "DisplayBoard" ? "> about me" : "about me"}
        </div>
        <br />
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("ResumeBoard");
            setIsSideMenuOpen(!isSideMenuOpen);
          }}
        >
          {displayedContentFlag == "ResumeBoard" ? "> my resume" : "my resume"}
        </div>
        <br />
        <div
          className="sidemenu-item"
          onClick={() => {
            setDisplayedContentFlag("ProjectBoard");
            setIsSideMenuOpen(!isSideMenuOpen);
          }}
        >
          {displayedContentFlag == "ProjectBoard"
            ? "> my projects"
            : "my projects"}
        </div>
        <br />
        <div className="sidemenu-link">
          <a
            href="https://ieeexplore.ieee.org/document/10216577"
            target="_blank"
            rel="noopener noreferrer"
          >
            my grad research
          </a>
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
