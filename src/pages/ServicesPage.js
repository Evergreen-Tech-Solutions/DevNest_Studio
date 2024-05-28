import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import Styles from '../styles/ServicesPage.module.css';
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
    <>
      {/* <h1 className="text-4xl font-bold text-center mt-10">
        Please choose your service
      </h1> */}
      <div className={`${Styles.serviceOptions} min-h-screen flex justify-center items-center`}>
        {/* Web Application Service Card */}
        <div
          className={`${Styles.serviceCard} flex-1`}
          onClick={() => navigate('/web-application')}
          role="button"
          tabIndex={0}
        >
          <div className={Styles.lottie}>
            <Lottie options={webAppOptions} height={380} width={380} />
          </div>

          <h2 className="text-3xl font-thin text-center">Web Applications</h2>
        </div>

        {/* Mobile Application Service Card */}
        <div
          className={`${Styles.serviceCard} flex-1`}
          onClick={() => navigate('/mobile-application')}
          role="button"
          tabIndex={0}
        >
          <div className={Styles.lottie}>
            <Lottie options={mobileAppOptions} height={380} width={380} />
          </div>
          <h2 className="text-3xl font-thin text-center">Mobile Applications</h2>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
