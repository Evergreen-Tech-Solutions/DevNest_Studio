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
import PricingPage from "./pages/PricingPage";
import QuoteBuilderPage from "./pages/QuoteBuilderPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import AcknowledgementsPage from "./pages/AcknowledgementsPage";
import FAQPage from "./pages/FAQPage";
import OurTeamPage from "./pages/OurTeamPage";
import { deepOrange, grey } from "@mui/material/colors";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  // Detect user's dark mode preference
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [manualToggle, setManualToggle] = useState(false);
  const mode = darkMode ? "dark" : "light";
  const theme = createTheme({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode colors
          primary: { main: "#b6e1e0" },
          divider: "#00a896",
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: "#ffffff",
            paper: "#f5f5f5",
            ctaSection: "#ffffff",
          },
        }
      : {
          // Navy/Dark Blue mode colors
          primary: { main: "#0d1b2a" }, // deep navy
          divider: "#00a896",
          background: {
            default: "#0d1b2a", // page background
            paper: "#1b263b",   // cards, modals
            ctaSection: "#1b263b",
          },
          text: {
            primary: "#e0e1dd",  // soft light
            secondary: "#778da9", // muted blue-gray
          },
        }),
  },
  typography: {
    fontFamily: `"Quicksand", serif`,
  },
});


  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setManualToggle(true);
    localStorage.setItem("darkMode", newMode ? "true" : "false");
  };

  const isMobile = useMediaQuery("(max-width:648px)");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!manualToggle) {
        setDarkMode(e.matches);
        localStorage.setItem("darkMode", e.matches ? "true" : "false");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [manualToggle]);
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
      setDarkMode(storedPreference === "true");
      setManualToggle(true);
    }
  }, []);

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
              <Route
                path="/pricing"
                element={<PricingPage darkMode={darkMode} />}
              />{" "}
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/quotebuilder"
                element={<QuoteBuilderPage darkMode={darkMode} />}
              />{" "}
              <Route
                path="/contact"
                element={<ContactPage darkMode={darkMode} />}
              />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsAndConditionsPage />} />
              <Route
                path="/acknowledgements"
                element={<AcknowledgementsPage />}
              />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/ourteam" element={<OurTeamPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
