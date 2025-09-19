import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import "../styles/DisplayBoard.css";

export default function DisplayBoard() {
  const [word, setWord] = useState("> Searching for new word...");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [wordDef, setWordDef] = useState("");

  const textArray = [
    "> hi, im david kipnis.",
    "> im a fullstack engineer - i mostly build web apps.",
    "===============",
    "> i studied computer science at Western Washington University.",
    "---> (Bachelor of Science, Computer Science 2021)",
    "---> (Master of Science, Computer Science 2022)",
    "> My graduate research on AI has been published by IEEE and can be found here.",
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

        console.log(wordDefinition[0].meanings[0].definitions);

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
    <div className="displayboard-wrapper">
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
        <TypewriterText text={`${word}${partOfSpeech}`} />
        <TypewriterText text={wordDef} />
      </div>
    </div>
  );
}
