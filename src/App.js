import React, {useState} from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';



function App() {

  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => setDarkMode(!darkMode);

  // const [colorBlindMode, setColorBlindMode] = useState(false);
  // const toggleColorBlindMode = () => setColorBlindMode(!colorBlindMode);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark-mode');
  //   } else {
  //     document.documentElement.classList.remove('dark-mode');
  //   }
  // }, [darkMode]);

  // useEffect(() => {
  //   if (colorBlindMode) {
  //     document.documentElement.classList.add('color-blind');
  //   } else {
  //     document.documentElement.classList.remove('color-blind');
  //   }
  // }, [colorBlindMode]);


  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // You can customize other theme properties here
      // customize the colors here
      primary: {
        main: '#b6e1e0',
      },
      secondary: {
        main: '#3f3f3f',
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App flex flex-col min-h-screen">
      <Navigation onToggleDarkMode={toggleDarkMode} />
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
        </ThemeProvider>
    </Router>
  );
}

export default App;
