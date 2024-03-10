import React from 'react';
import { NavLink } from 'react-router-dom';
import '../tailwind.css';
import logo from '../assets/logo.png';
import style from '../styles/Navigation.module.css';


function Navigation({ darkMode, toggleDarkMode, colorBlindMode, toggleColorBlindMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-blu py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img src={logo} alt="DevNest Studio Logo" className="h-24 w-24" />
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <NavLink to="/" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Services</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button onClick={toggleColorBlindMode} className="p-2 rounded">
              {colorBlindMode ? 'Normal Vision' : 'Color Blind Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
