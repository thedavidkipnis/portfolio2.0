import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <button
          className="navbar-darkmode-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className="navbar-darkmode-button-image-wrapper">
            <img
              src="/lightmode.png"
              alt="Light Mode"
              className={`image ${darkMode ? "visible" : "hidden"}`}
            />
            <img
              src="/darkmode.png"
              alt="Dark Mode"
              className={`image ${darkMode ? "hidden" : "visible"}`}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
