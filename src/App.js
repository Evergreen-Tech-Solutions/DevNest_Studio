import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const [colorBlindMode, setColorBlindMode] = useState(false);
  const toggleColorBlindMode = () => setColorBlindMode(!colorBlindMode);

  useEffect(() => {
    if (colorBlindMode) {
      document.body.classList.add('color-blind-mode');
    } else {
      document.body.classList.remove('color-blind-mode');
    }
  }, [colorBlindMode]);
  return (
    <Router>
      <div className={`App flex flex-col min-h-screen ${darkMode ? 'dark' : 'light'} ${colorBlindMode ? 'color-blind' : ''}`}>
      <Navigation onToggleDarkMode={toggleDarkMode} onToggleColorBlindMode={toggleColorBlindMode} />
          <main className="flex-1 pt-[64px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;
