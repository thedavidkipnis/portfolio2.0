import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import "../styles/ProjectBoard.css";

export default function ProjectBoard() {

    const projects = [
        [
            "tondo",
            "React (JS), Firebase, Node.js",
            "Web application that acts as a board of sticky notes for writing down your ideas or todo's", 
            "https://thedavidkipnis.github.io/Tondo/",
            "https://github.com/thedavidkipnis/Tondo"
        ],
        [
            "alchemystic", 
            "React (JS), Firebase, Node.js", 
            "Web platform for connecting clients, practitioners, and providers in the physical therapy space", 
            "https://thedavidkipnis.github.io/alchemystic-platform/",
            "https://github.com/thedavidkipnis/alchemystic-platform"
        ],
        [
            "game-of-life",
            "JavaScript, HTML/CSS",
            "My take on Conway's game-of-life", 
            "thedavidkipnis.github.io/game-of-life/",
            "https://github.com/thedavidkipnis/game-of-life"
        ],
    ]

    return <div className="projectboard-wrapper">
        <div className="projectboard-grid">
            {projects.map((project, index) =>
                <div key={index} className="projectboard-box">
                    <div className="projectboard-box-content">
                    <h2 className="projectboard-box-title">
                        {project[0]}
                    </h2>
                    {"> " + project[1]}<br/><br/>
                    {project[2]}
                    </div>
                    <div className="projectboard-footer">
                        <a href={project[3]} target="_blank" rel="noopener noreferrer">link to app</a>
                        <span>|</span>
                        <a href={project[4]} target="_blank" rel="noopener noreferrer">link to code</a>
                    </div>
                </div>
                )}
        </div>
    </div>;
}
