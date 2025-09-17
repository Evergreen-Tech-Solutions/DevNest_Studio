import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import darkLogo from "../assets/logos/darkLogo.png";
import lightLogo from "../assets/logos/lightLogo.png";
import { useTheme } from "@mui/material";
import "../tailwind.css";
import style from "../styles/Navigation.module.css";
import { hover } from "framer-motion";

function Navigation({ onToggleDarkMode, darkMode }) {
  const theme = useTheme();
  return (
    <AppBar position="fixed">
      <Toolbar className="w-full z-10">
        <NavLink
          to="/"
          className="flex items-center transition-transform hover:scale-110 hover:text-[#00a896]"
        >
          {/* <img
            src={darkMode ? lightLogo : darkLogo}
            alt="Logo"
            className="h-10 w-10"
          /> */}
          <p className="text-2xl">DevNest Studio</p>
          <Typography variant="h6" color="inherit" noWrap></Typography>
        </NavLink>
        <div className="flex-grow flex justify-center">
          <div className="text-xl flex items-baseline justify-center mr-32">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${style.navItemBase} ${isActive ? style.navItemActive : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${style.navItemBase} ${isActive ? style.navItemActive : ""}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `${style.navItemBase} ${isActive ? style.navItemActive : ""}`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${style.navItemBase} ${isActive ? style.navItemActive : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${style.navItemBase} ${isActive ? style.navItemActive : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-3 transition-transform hover:scale-110 hover:text-[#00a896]">
          <IconButton color="inherit" onClick={onToggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
