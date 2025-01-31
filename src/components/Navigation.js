import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon
import darkLogo from "../assets/logo.png";
import lightLogo from "../assets/logo_w.png";
import "../tailwind.css";
import style from "../styles/Navigation.module.css";

function Navigation({ onToggleDarkMode, darkMode }) {
  return (
    <AppBar position="fixed">
      <Toolbar className="w-full z-10">
        <NavLink to="/" className="flex items-center">
          <p className="text-2xl">The DevNest</p>
          <Typography variant="h6" color="inherit" noWrap></Typography>
        </NavLink>
        <div className="flex-grow flex justify-center">
          <div className="text-xl flex items-baseline justify-center mr-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.navItemActive : style.navItemInactive
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? style.navItemActive : style.navItemInactive
              }
            >
              Pricing
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
        <div className="flex items-center space-x-4 ml-3">
          <IconButton color="inherit" onClick={onToggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
