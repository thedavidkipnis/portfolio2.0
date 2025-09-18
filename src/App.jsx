import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import { useContent } from "./context/ContentProvider";

export default function App() {
  const { displayedContent } = useContent();

  return (
    <div className="top-wrapper">
      <Navbar />
      <div className="contents-wrapper">
        <SideMenu />
        {displayedContent}
      </div>
    </div>
  );
}
