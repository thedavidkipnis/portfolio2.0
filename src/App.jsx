import { useState, useEffect  } from 'react'
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import DisplayBoard from './components/DisplayBoard';

export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="top-wrapper">
      <Navbar/>
      <div className="contents-wrapper">
        <SideMenu/>
        <DisplayBoard/>
      </div>
    </div>
  )
}
