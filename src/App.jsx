import { useState, useEffect  } from 'react'
import Navbar from './components/Navbar';

export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      <Navbar/>
    </div>
  )
}
