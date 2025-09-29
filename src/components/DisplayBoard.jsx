import { useContent } from "../context/ContentProvider";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import "../styles/DisplayBoard.css";

export default function DisplayBoard() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContent();
  const triggerSideMenu = () => {
    if (isSideMenuOpen) {
      setIsSideMenuOpen(false);
    }
  };

  const [word, setWord] = useState("> Searching for new word...");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [wordDef, setWordDef] = useState("");

  const textArray = [
    "> im a fullstack engineer.",
    "> i mostly build web apps and automate database processes.",
    "===============",
    "> i studied computer science at Western Washington University.",
    "---> (Bachelor of Science, Computer Science 2021)",
    "---> (Master of Science, Computer Science 2022)",
    "===============",
    "> currently i work at Infios (a supply chain software company).",
    "> i build and maintain warehouse management solutions & web applications for clients.",
  ];

  useEffect(() => {
    let intervalId;

    async function fetchWordDef() {
      try {
        const wordData = await fetch(
          "https://random-word-api.vercel.app/api?words=1",
        );
        const word = await wordData.json();

        const wordDefData = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word[0]}`,
        );
        const wordDefinition = await wordDefData.json();

        setWord("> " + word[0]);
        setPartOfSpeech(" : " + wordDefinition[0].meanings[0].partOfSpeech);
        setWordDef(
          "> " +
            wordDefinition[0].meanings[0].definitions[0]?.definition.toLocaleLowerCase(),
        );
      } catch (error) {
        console.error("Error fetching word:", error);
        setWord("> Searching for new word...");
        setPartOfSpeech("");
        setWordDef("");
      }
    }

    fetchWordDef();
    intervalId = setInterval(fetchWordDef, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="displayboard-wrapper" onClick={triggerSideMenu}>
      <h1 className="displayboard-header">
        <TypewriterText text={"hi, i'm david kipnis."} />
      </h1>
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

      <div className="displayboard-wordoftheday-wrapper">
        <br />
        <br />
        <TypewriterText text={"---------------"} typingSpeed={50} />
        <TypewriterText text={`${word}${partOfSpeech}`} />
        <TypewriterText text={wordDef} />
      </div>
    </div>
  );
}
