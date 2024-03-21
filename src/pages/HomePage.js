import React from 'react';
import Styles from '../styles/HomePage.module.css';
import logo from '../assets/logo.png';
import darkModeVideo from '../assets/backgroundVids/darkMode_bg.mp4';
import lightModeVideo from '../assets/backgroundVids/lightMode_bg.mp4';


function HomePage({ darkMode }) {
  // Choose the video based on the darkMode state
  const backgroundVideo = darkMode ? darkModeVideo : lightModeVideo;

  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <img src={logo} alt="DevNest Studio Logo" className="h-96 w-96 mx-auto mb-5" />
          <h1 className="text-6xl font-bold text-white mb-4">Coming Soon...</h1>
          <p className="text-lg text-gray-200">We offer top-notch services to meet your needs.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
