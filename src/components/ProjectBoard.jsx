import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import "../styles/ProjectBoard.css";

export default function ProjectBoard() {

    const projects = [
        ["tondo", "description", "link"],
        ["alchemystic", "description", "link"]
    ]

    return <div className="projectboard-wrapper">
        <div className="projectboard-grid">
            {projects.map((project, index) =>
                <div key={index} className="projectboard-box">
                    {project[0]}<br/>
                    {project[1]}<br/>
                    {project[2]}<br/>
                </div>    
            )}
        </div>
    </div>;
}
