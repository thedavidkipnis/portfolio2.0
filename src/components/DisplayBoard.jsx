import { useState, useEffect } from "react";
import "../styles/DisplayBoard.css";

export default function DisplayBoard() {
  const fullTextBreak = displayText("===============", 50);
  const introText1 = displayText("> hi, im david.");
  const introText2 = displayText(
    "> im a fullstack engineer - i build web apps.",
  );

  const educationText1 = displayText(
    "> i studied computer science at Western Washington University.",
  );
  const educationText2 = displayText(
    "---> (Bachelor of Science, Computer Science 2021)",
  );
  const educationText3 = displayText(
    "---> (Master of Science, Computer Science 2022)",
  );
  const educationText4 = displayText(
    "> My graduate research on AI has been published by IEEE and can be found here.",
  );

  const workText1 = displayText(
    "> currently i work at Infios (a supply chain software company).",
  );
  const workText2 = displayText(
    "> i build and maintain warehouse management solutions & web applications for clients.",
  );

  return (
    <div className="displayboard-wrapper">
      {introText1}
      <br />
      {introText2}
      <br />
      <br />
      <br />
      {fullTextBreak}
      <br />
      <br />
      <br />
      {educationText1}
      <br />
      {educationText2}
      <br />
      {educationText3}
      <br />
      {educationText4}
      <br />
      <br />
      <br />
      {fullTextBreak}
      <br />
      <br />
      <br />
      {workText1}
      <br />
      {workText2}
      <br />
      <br />
      <br />
    </div>
  );
}

function displayText(text, typingSpeed) {
  const fullText = text;
  const [displayedText, setDisplayedText] = useState("");

  if (!typingSpeed) {
    typingSpeed = getRandomInt(10, 25) - text.length / 25;
  }

  useEffect(() => {
    let index = 0;
    let curText = "";
    const interval = setInterval(() => {
      if (index < fullText.length) {
        curText += fullText[index];
        setDisplayedText(curText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return displayedText;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
