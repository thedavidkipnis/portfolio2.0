import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import DisplayBoard from "./components/DisplayBoard";

export default function App() {
  return (
    <div className="top-wrapper">
      <Navbar />
      <div className="contents-wrapper">
        <SideMenu />
        <DisplayBoard />
      </div>
    </div>
  );
}
