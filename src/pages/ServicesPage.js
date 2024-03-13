import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import Styles from '../styles/ServicesPage.module.css';

// Import your Lottie animation JSON files
import webAnimationData from '../assets/Web_lottie.json';
import mobileAnimationData from '../assets/Mobile_lottie.json';

function ServicesPage() {
  const navigate = useNavigate();

  // Lottie options for the Web Application animation
  const webAppOptions = {
    loop: true,
    autoplay: true,
    animationData: webAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Lottie options for the Mobile Application animation
  const mobileAppOptions = {
    loop: true,
    autoplay: true,
    animationData: mobileAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-between gap-10">
        {/* Web Application Service Card */}
        <div
          className={`${Styles.serviceCard} flex-1`}
          onClick={() => navigate('/web-application')}
          role="button"
          tabIndex={0}
        >
          <Lottie options={webAppOptions} height={400} width={400} />
          <h2 className="text-2xl font-bold text-center">Web Application</h2>
        </div>

        {/* Mobile Application Service Card */}
        <div
          className={`${Styles.serviceCard} flex-1`}
          onClick={() => navigate('/mobile-application')}
          role="button"
          tabIndex={0}
        >
          <Lottie options={mobileAppOptions} height={400} width={400} />
          <h2 className="text-2xl font-bold text-center">Mobile Application</h2>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
