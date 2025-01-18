import React, { useState, useEffect } from "react";
import {
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import QuoteBuilderPage from "./pages/QuoteBuilderPage";
import ContactPage from "./pages/ContactPage";
import { deepOrange, grey } from "@mui/material/colors";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  // Detect user's dark mode preference
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [manualToggle, setManualToggle] = useState(false); // Track manual toggle
  const mode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
          // palette values for light mode
          primary: { main: "#b6e1e0" },
          divider: deepOrange[500],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            ctaSection: "#ffffff", // Add custom property for light mode
          },
        }
        : {
          // palette values for dark mode
          primary: { main: grey[800] },
          divider: deepOrange[500],
          background: {
            default: grey[600],
            paper: grey[800],
            ctaSection: "#333333", // Add custom property for dark mode
          },
          text: {
            primary: grey[300],
            secondary: grey[600],
          },
        }),
      typography: {
        fontFamily: `"Quicksand", serif`,
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setManualToggle(true); // Indicate that the toggle was manual
  };

  const isMobile = useMediaQuery("(max-width:648px)");

  // Listen for changes to the user's preference and update state accordingly
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!manualToggle) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [manualToggle]); // Depend on manualToggle

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App flex flex-col min-h-screen">
          {isMobile ? (
            <MobileNav onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          ) : (
            <Navigation onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          )}
          <main className="flex-1 pt-[64px]">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    key={darkMode ? "dark" : "light"}
                    darkMode={darkMode}
                  />
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/quotebuilder" element={<QuoteBuilderPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
