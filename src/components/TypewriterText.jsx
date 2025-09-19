import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TypewriterText({ text, typingSpeed }) {
  const [displayedText, setDisplayedText] = useState("");

  if (!typingSpeed) {
    typingSpeed = Math.min(10, 25 - text.length / 25);
  }

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <span>
      {displayedText}
      <br />
    </span>
  );
}

TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
  typingSpeed: PropTypes.number,
};
