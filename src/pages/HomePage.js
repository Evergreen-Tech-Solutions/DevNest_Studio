// import React from 'react';
// import Styles from '../styles/HomePage.module.css';
// import darkLogo from '../assets/logo.png';
// import lightLogo from '../assets/logo_w.png';
// import darkModeVideo from '../assets/backgroundVids/darkMode_bg.mp4';
// import lightModeVideo from '../assets/backgroundVids/lightMode_bg.mp4';


// function HomePage({ darkMode }) {
//   // Choose the video based on the darkMode state
//   const backgroundVideo = darkMode ? darkModeVideo : lightModeVideo;

//   return (
//     <div className="relative">
//       <video autoPlay loop muted style={{ pointerEvents: 'none' }} className="absolute inset-0 w-full h-screen object-cover">
//         <source src={backgroundVideo} type="video/mp4" />
//       </video>
//       <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center">
//           <img src={darkMode ? lightLogo : darkLogo} alt="DevNest Studio Logo" className="h-96 w-96 mx-auto mb-5" />
//           <h1 className="text-6xl font-bold mb-4">Coming Soon...</h1>
//           <p className="text-lg ">We offer top-notch services to meet your needs.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import Styles from '../styles/HomePage.module.css';
import darkLogo from '../assets/logo.png';
import lightLogo from '../assets/logo_w.png';
import darkModeVideo from '../assets/backgroundVids/darkMode_bg.mp4';
import lightModeVideo from '../assets/backgroundVids/lightMode_bg.mp4';

function HomePage({ darkMode }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video for dark mode */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ pointerEvents: 'none', display: darkMode ? 'block' : 'none' }}
        className="absolute inset-0 w-full h-screen object-cover"
      >
        <source src={darkModeVideo} type="video/mp4" />
      </video>

      {/* Video for light mode */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ pointerEvents: 'none', display: !darkMode ? 'block' : 'none' }}
        className="absolute inset-0 w-full h-screen object-cover"
      >
        <source src={lightModeVideo} type="video/mp4" />
      </video>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <img src={darkMode ? lightLogo : darkLogo} alt="DevNest Studio Logo" className="h-96 w-96 mx-auto mb-5" />
          <h1 className="text-6xl font-bold mb-4">Coming Soon...</h1>
          <p className="text-lg ">We offer top-notch services to meet your needs.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
