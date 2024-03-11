import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import logo from '../assets/logo.png';
import '../tailwind.css';
import style from '../styles/Navigation.module.css';

function Navigation({ onToggleDarkMode, darkMode }) {
  return (
    <AppBar position="fixed">
      <Toolbar className="w-full z-10">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="DevNest Studio Logo" className="h-28 w-28 mr-2" />
          <Typography variant="h6" color="inherit" noWrap>
          </Typography>
        </NavLink>
        <div className="flex-grow"></div>
        <div className="ml-12 flex items-baseline align-middle">
          <NavLink to="/" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Contact</NavLink>
        </div>

        {/* Dark Mode Toggle Button */}
        <IconButton color="inherit" onClick={onToggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;





// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../tailwind.css';
// import logo from '../assets/logo.png';
// import style from '../styles/Navigation.module.css';
// import '../App.css';



// function Navigation({ onToggleDarkMode }) {
//   return (
//     <nav className={`fixed top-0 left-0 w-full z-10 bg-blu py-4 shadow-xl ${darkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <NavLink to="/">
//                 <img src={logo} alt="DevNest Studio Logo" className="h-24 w-24" />
//               </NavLink>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-12 flex items-baseline">
//                 <NavLink to="/" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Home</NavLink>
//                 <NavLink to="/about" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>About</NavLink>
//                 <NavLink to="/services" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Services</NavLink>
//                 <NavLink to="/projects" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Projects</NavLink>
//                 <NavLink to="/contact" className={({ isActive }) => isActive ? style.navItemActive : style.navItemInactive}>Contact</NavLink>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button onClick={toggleDarkMode} className="p-2 rounded">
//               {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
//             </button>
//             <button onClick={toggleColorBlindMode} className="p-2 rounded">
//               {colorBlindMode ? <i className="fas fa-eye"></i> : <i className="fas fa-low-vision"></i>}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;
