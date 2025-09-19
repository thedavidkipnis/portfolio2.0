import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import "../styles/ResumeBoard.css";

export default function ResumeBoard() {

    const textArray = [
        "> david kipnis",
        "> thedavidkipnis@gmail.com",
        "> +1 (206) 371 3658",
        "=== BIO ===",
        "> full-stack software engineer with 2+ years of experience developing database solutions and web applications.",
        "> passionate about machine learning/ai, mobile computing, and game development. ",
        "=== MY TECH ===",
        "> languages: JavaScript, Python, SQL (TSQL), C++",
        "> frontend: React, HTML5, CSS3",
        "> backend: MSSQL, SSMS, Firebase, Node.js",
        "> tooling: GitHub, Babel, Vite, ESLint, Prettier, NPM/Yarn",
        "=== EXPERIENCE ===",
        "> Infios | current, since 06.2023",
        "> software engineer/wms admin",
        "---> develop, deploy, and maintain warehouse management cloud solutions and client-side web applications.",
        "---> collaborate with customers to define application specifications, develop features, and implement solutions.",
        "---> monitor, troubleshoot, and deploy hotfixes to ensure data integrity and system reliability in live environments.",
        "",
        "",
        "> Foursquare | 06.2022-09.2022",
        "> software engineer intern",
        "---> designed and implemented an internal iOS application and supporting apis to streamline Jira ticket creation.",
        "---> developed automated scripts for operations data gathering and processing, improving efficiency for internal teams.",
        "",
        "",
        "> Western Washington University | 06.2021-07.2022",
        "> graduate teaching assistant, computer science department",
        "---> instructed courses in ai, app development, data structures, and functional programming.",
        "---> led labs and office hours.",
        "",
        "",
        "> Western Washington University | 01.2018-07.2022",
        "> front desk representative, office of admissions",
        "---> managed phone, email, and in-person inquiries for prospective students and families.",
        "---> supported office operations by scheduling campus tours, processing applications, and maintaining student records.",
        "",
        "",
        "> Coding with Kids | 06.2018-09.2019",
        "> coding instructor/manager"
    ];

    return (
        <div className="resumeboard-wrapper">
            {textArray.map((text, index) =>
                text.includes("=") ? (
                    <div key={index}>
                    <br />
                    <br />
                    <TypewriterText text={text} typingSpeed={50} />
                    <br />
                    <br />
                    </div>
                ) : (
                    <TypewriterText key={index} text={text} />
                ),
                )}
        </div>
    )
}