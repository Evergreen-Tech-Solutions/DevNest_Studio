import React from 'react';
import { Link } from 'react-router-dom';
import '../tailwind.css';


function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-blu py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">DevNest Studio</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Home</Link>
                <Link to="/about" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">About</Link>
                <Link to="/services" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Services</Link>
                <Link to="/projects" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Projects</Link>
                <Link to="/contact" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
