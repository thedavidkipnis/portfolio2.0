import { useState, useEffect  } from 'react'
import '../styles/SideMenu.css'

export default function SideMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`sidemenu-wrapper ${isOpen ? 'open' : 'closed'}`}>
            <button className={`sidemenu-toggle-button ${isOpen ? 'open' : 'closed'}`}
                onClick={toggleMenu}>
                {isOpen ? '<' : '>'}
            </button>
            {isOpen && (
                <div className="sidemenu-items">
                    <div>My Education</div>
                    <div>My Projects</div>
                    <div>My Experience</div>
                </div>
            )}
        </div>
    )
}