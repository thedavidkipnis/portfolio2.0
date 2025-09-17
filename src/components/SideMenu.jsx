import { useState, useEffect  } from 'react'
import { useTheme } from "../context/ThemeContext"
import '../styles/SideMenu.css'

export default function SideMenu() {
    const { darkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`sidemenu-wrapper ${isOpen ? "open" : "closed"}`}>
        <div className={`sidemenu-button-wrapper ${isOpen ? "open" : "closed"}`}>
            <img
            src={darkMode ? "/arrow_dark.png" : "/arrow_light.png"}
            alt="Toggle Menu"
            className={`sidemenu-toggle-arrow ${isOpen ? "open" : "closed"}`}
            onClick={toggleMenu}
            />
        </div>
        {isOpen && (
            <div className="sidemenu-items">
                <div className='sidemenu-item'>My Education</div><br/>
                <div className='sidemenu-item'>My Projects</div><br/>
                <div className='sidemenu-item'>My Experience</div>
            </div>
        )}
        </div>
    );
}