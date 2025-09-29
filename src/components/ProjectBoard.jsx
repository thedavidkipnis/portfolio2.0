import { useContent } from "../context/ContentProvider";
import "../styles/ProjectBoard.css";

export default function ProjectBoard() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContent();
  const triggerSideMenu = () => {
    if (isSideMenuOpen) {
      setIsSideMenuOpen(false);
    }
  };

  const projects = [
    [
      "tondo",
      "React (JS), Firebase, Node.js",
      "Web application that acts as a board of sticky notes for writing down your ideas or todo's",
      "https://thedavidkipnis.github.io/Tondo/",
      "https://github.com/thedavidkipnis/Tondo",
    ],
    [
      "alchemystic",
      "React (JS), Firebase, Node.js",
      "Web platform for connecting clients, practitioners, and providers in the physical therapy space",
      "https://thedavidkipnis.github.io/alchemystic-platform/",
      "https://github.com/thedavidkipnis/alchemystic-platform",
    ],
    [
      "game-of-life",
      "JavaScript, HTML/CSS",
      "My take on Conway's game-of-life",
      "https://thedavidkipnis.github.io/game-of-life/",
      "https://github.com/thedavidkipnis/game-of-life",
    ],
    [
      "dev tool playground",
      "React (JS), Node.js",
      "(w.i.p) a hub of dev tools such as regex detector and case converter",
      "https://thedavidkipnis.github.io/devtoolplayground/",
      "https://github.com/thedavidkipnis/devtoolplayground",
    ],
    [
      "MONOLITH",
      "C++, SDL2, Visual Studio",
      "(w.i.p) 2D, DND-style roguelike being made for windows OS",
      "",
      "https://github.com/thedavidkipnis/Monolith_DND",
    ],
  ];

  return (
    <div className="projectboard-wrapper" onClick={triggerSideMenu}>
      <div className="projectboard-grid">
        {projects.map((project, index) => (
          <div key={index} className="projectboard-box">
            <div className="projectboard-box-content">
              <h2 className="projectboard-box-title">{project[0]}</h2>
              {"> " + project[1]}
              <br />
              <br />
              {project[2]}
            </div>
            <div className="projectboard-footer">
              {project[3].length > 1 && (
                <a href={project[3]} target="_blank" rel="noopener noreferrer">
                  link to app
                </a>
              )}
              {project[3].length > 1 && <span>|</span>}
              {project[4].length > 1 && (
                <a href={project[4]} target="_blank" rel="noopener noreferrer">
                  link to code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
