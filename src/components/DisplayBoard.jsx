import { useState, useEffect  } from 'react'
import '../styles/DisplayBoard.css'

export default function DisplayBoard() {

    const fullText = displayText("hi, im david.", 30);
    const fullText2 = displayText("im a fullstack engineer - i build web apps.", 20);
    const fullText3 = displayText("i love minialism (lol).", 25);

    return (
        <div className="displayboard-wrapper">
            {fullText}
            <br/>
            {fullText2}
            <br/>
            {fullText3}
        </div>
    )
}

function displayText(text, typingSpeed) {
    const fullText = text;
    const [displayedText, setDisplayedText] = useState("");

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