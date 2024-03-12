import React from 'react';
import Navigation from '../components/Navigation';
import Styles from '../styles/HomePage.module.css';
import logo from '../assets/logo.png';


function HomePage() {
  return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* image here */}
          <img src={logo} alt="DevNest Studio Logo" className="h-96 w-96 mx-auto mb-5" />
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Coming Soon...</h1>
          <p className="text-lg text-gray-600">We offer top-notch services to meet your needs.</p>
        </div>
      </div>
  );
}

export default HomePage;
