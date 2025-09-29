import { useContent } from "../context/ContentProvider";
import TypewriterText from "./TypewriterText";
import "../styles/ResumeBoard.css";

export default function ResumeBoard() {

  const { isSideMenuOpen, setIsSideMenuOpen } = useContent();
  const triggerSideMenu = () => {if (isSideMenuOpen) {setIsSideMenuOpen(false)} };

  const textArray = [
    "> david kipnis",
    "> thedavidkipnis@gmail.com",
    "> +1 (206) 371 3658",
    "=== BIO ===",
    "> full-stack software engineer with 2+ years of experience developing database solutions and web applications.",
    "> focus on automation and process optimization.",
    "> passionate about machine learning/ai, mobile computing, and game development. ",
    "=== MY TECH ===",
    "> languages: JavaScript, Python, SQL (TSQL), C++",
    "> frontend: React, HTML5, CSS3",
    "> backend: MSSQL, SSMS, Firebase, Node.js",
    "> tooling: GitHub, Babel, Vite, ESLint, Prettier, NPM/Yarn",
    "=== EXPERIENCE ===",
  ];

  const experienceArray = [
    {
      Infios: {
        duration: "06.2023 - current",
        position: "software engineer / wms admin",
        prompts: [
          "develop, deploy, and maintain warehouse management cloud solutions and client-side web applications.",
          "collaborate with customers to define application specifications, develop features, and implement solutions.",
          "monitor, troubleshoot, and deploy hotfixes to ensure data integrity and system reliability in live environments.",
        ],
        link: "https://www.infios.com",
      },
    },
    {
      Foursquare: {
        duration: "06.2022 - 09.2022",
        position: "software engineer intern",
        prompts: [
          "designed and implemented an internal iOS application and supporting apis to streamline Jira ticket creation.",
          "developed automated scripts for operations data gathering and processing, improving efficiency for internal teams.",
        ],
        link: "https://www.foursquare.com",
      },
    },
    {
      "Western Washington University": {
        duration: "06.2021 - 07.2022",
        position: "graduate teaching assistant, computer science department",
        prompts: [
          "instructed courses in ai, app development, data structures, and functional programming.",
          "led labs and office hours.",
        ],
        link: "https://www.wwu.edu",
      },
    },
    {
      "Western Washington University": {
        duration: "01.2018 - 07.2022",
        position: "front desk representative, office of admissions",
        prompts: [
          "managed phone, email, and in-person inquiries for prospective students and families.",
          "supported office operations by scheduling campus tours, processing applications, and maintaining student records.",
        ],
        link: "https://www.wwu.edu",
      },
    },
    {
      "Coding with Kids": {
        duration: "06.2018 - 09.2019",
        position: "coding instructor / manager",
        prompts: [],
        link: "https://codingwithkids.com",
      },
    },
  ];

  return (
    <div className="resumeboard-wrapper" onClick={triggerSideMenu}>
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

      <div className="resumeboard-experience-wrapper">
        {experienceArray.map((entry, index) => {
          const company = Object.keys(entry)[0];
          const details = entry[company];

          return (
            <div key={index} className="experience-section">
              <div className="experience-header">
                <h3 className="experience-company">
                  {<TypewriterText text={company} />}
                </h3>
                <span className="experience-duration">
                  {<TypewriterText text={details.duration} />}
                </span>
              </div>
              <div className="experience-position">
                {<TypewriterText text={details.position} />}
              </div>
              {details.prompts && details.prompts.length > 0 && (
                <div className="experience-prompts">
                  {details.prompts.map((prompt, idx) => (
                    <div key={idx} className="experience-prompt">
                      {"> "}
                      {<TypewriterText text={prompt} />}
                    </div>
                  ))}
                </div>
              )}
              {details.link && details.link.trim() !== "" && (
                <div className="experience-link">
                  <a
                    href={details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TypewriterText text={details.link} />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
