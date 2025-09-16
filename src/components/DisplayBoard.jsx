import { useState, useEffect  } from 'react'
import '../styles/DisplayBoard.css'

export default function DisplayBoard() {

    const fullText = "hi, im david.";
    const [displayedText, setDisplayedText] = useState("");

    const fullText2 = "im a fullstack engineer - i build web apps.";
    const [displayedText2, setDisplayedText2] = useState("");

    const fullText3 = "i love minialism (lol).";
    const [displayedText3, setDisplayedText3] = useState("");

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
        }, 45);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let index = 0;
        let curText = "";
        const interval = setInterval(() => {
        if (index < fullText2.length) {
            curText += fullText2[index];
            setDisplayedText2(curText);
            index++;
        } else {
            clearInterval(interval);
        }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let index = 0;
        let curText = "";
        const interval = setInterval(() => {
        if (index < fullText3.length) {
            curText += fullText3[index];
            setDisplayedText3(curText);
            index++;
        } else {
            clearInterval(interval);
        }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="displayboard-wrapper">
            <p className="typewriter-text">{displayedText}</p>
            <p className="typewriter-text">{displayedText2}</p>
            <p className="typewriter-text">{displayedText3}</p>
        </div>
    )
}