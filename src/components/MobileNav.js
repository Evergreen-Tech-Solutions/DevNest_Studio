import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import darkLogo from "../assets/logo.png";
import lightLogo from "../assets/logo_w.png";
import { m } from "framer-motion";

function MobileNav({ onToggleDarkMode, darkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", to: "/" },
    { text: "Pricing", to: "/pricing" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="w-full z-10 mb-2">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: isMobile ? "block" : "none" }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className="w-full flex justify-center items-center">
            <p className="text-2xl">DevNest Studio</p>
            <Typography variant="h6" color="inherit" noWrap></Typography>
          </NavLink>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div className="flex-grow">
            <div className="text-lg flex items-baseline justify-center mr-8">
              {!isMobile &&
                menuItems.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.text}
                    className={({ isActive }) =>
                      isActive ? "navItemActive" : "navItemInactive"
                    }
                  >
                    {item.text}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IconButton color="inherit" onClick={onToggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <div className=" h-full flex flex-col items-center justify-center">
          <List className="w-32">
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  navigate(item.to);
                  handleDrawerToggle();
                }}
              >
                <ListItemText
                  primary={item.text}
                  className={`${styles.mobItem}`}
                  primaryTypographyProps={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default MobileNav;
