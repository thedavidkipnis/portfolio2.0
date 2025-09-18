import { useTheme } from "../context/ThemeContext";
import { useContent } from "../context/ContentProvider";
import TypewriterText from "./TypewriterText";
import "../styles/Navbar.css";

export default function Navbar() {
  // const charSelection = ["#", "*", "&", "$", "/", "|", "%", "!", "@", "(", ")"];

  const { darkMode, setDarkMode } = useTheme();
  const { contentTitle } = useContent();

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <TypewriterText text={contentTitle} />
      </div>
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
