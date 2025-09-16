import { useState, useEffect  } from 'react'
import '../styles/DisplayBoard.css'

export default function DisplayBoard() {

    const fullText = "hi, im david.";
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
        }, 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="displayboard-wrapper">
            <p className="typewriter-text">{displayedText}</p>
        </div>
    )
}