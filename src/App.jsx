import { useState, useEffect  } from 'react'
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';

export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      <Navbar/>
      <SideMenu/>
    </div>
  )
}
