import { useState, useEffect  } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {

    const [darkMode, setDarkMode] = useState(true);
    
    useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className="navbar-wrapper">
            <button className="navbar-darkmode-button"
                onClick={() => setDarkMode(!darkMode)}
            >
                <div className="navbar-darkmode-button-image-wrapper">
                    <img
                        src="/lightmode2.png"
                        alt="Light Mode"
                        className={`image ${darkMode ? "visible" : "hidden"}`}
                    />
                    <img
                        src="/darkmode2.png"
                        alt="Dark Mode"
                        className={`image ${darkMode ? "hidden" : "visible"}`}
                    />
                </div>
            </button>
        </div>
    )
}