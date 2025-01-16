import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon
import darkLogo from "../assets/logo.png";
import lightLogo from "../assets/logo_w.png";
import "../tailwind.css";
import style from "../styles/Navigation.module.css";

function Navigation({ onToggleDarkMode, darkMode }) {
  const location = useLocation();

  // Custom isActive checker for the "Services" NavLink
  const checkIsActive = (path) => {
    // You can add more paths here as needed
    const paths = ["/services", "/web-application", "/mobile-application"];
    return paths.includes(path);
  };

  return (
    <AppBar position="fixed">
      <Toolbar className="w-full z-10">
        <NavLink to="/" className="flex items-center">
          <img
            src={darkMode ? lightLogo : darkLogo}
            alt="DevNest Studio Logo"
            className="h-28 w-28 mr-2"
          />
          <Typography variant="h6" color="inherit" noWrap></Typography>
        </NavLink>
        <div className="flex-grow font-sans font-semibold">
          <div className="text-lg flex items-baseline justify-center mr-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.navItemActive : style.navItemInactive
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/quotebuilder"
              className={() =>
                checkIsActive(location.pathname)
                  ? style.navItemActive
                  : style.navItemInactive
              }
            >
              Quote Builder
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? style.navItemActive : style.navItemInactive
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? style.navItemActive : style.navItemInactive
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 ml-3">
          <IconButton color="inherit" onClick={onToggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* <IconButton color="inherit">
          <MenuIcon />
        </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
