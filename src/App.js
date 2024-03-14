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
import WebApplication from './pages/web_srvc/web-application';
import MobileApplication from './pages/mob_srvc/mobile-application';
import { deepOrange, grey } from '@mui/material/colors';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#b6e1e0' },
          divider: grey[700],
          text: {
            primary: grey[900],
            secondary: grey[500],
          },
        }
      : {
          // palette values for dark mode
          primary: { main: grey[900] },
          divider: deepOrange[500],
          background: {
            default: grey[600],
            paper: grey[800],
          },
          text: {
            primary: grey[300],
            secondary: grey[200],
          },
        }),
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
      <Navigation onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <main className="flex-1 pt-[64px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/web-application" element={<WebApplication />} />
              <Route path="/mobile-application" element={<MobileApplication />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
        </ThemeProvider>
    </Router>
  );
}

export default App;
