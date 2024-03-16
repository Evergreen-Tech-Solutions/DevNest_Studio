import React from 'react';
import Styles from '../../styles/services_styles/MobSrvc.module.css';
import crossPlatformLogo from '../../assets/logos/crossPlatformLogo.png'; // Update paths as needed
import uiUxLogo from '../../assets/logos/uiUxLogo.png';
import appPrototypingLogo from '../../assets/logos/appPrototypingLogo.png';
import mobileBackendLogo from '../../assets/logos/mobileBackendLogo.png';
import testingQALogo from '../../assets/logos/testingQALogo.png';
import deploymentMaintenanceLogo from '../../assets/logos/deploymentMaintenanceLogo.png';
import marketingPromotionLogo from '../../assets/logos/marketingPromotionLogo.png';


function MobileApplication() {
  const services = [
    {
      logo: crossPlatformLogo,
      title: "Cross-Platform Development",
      description: "Create apps that work seamlessly across iOS and Android, reaching a wider audience with a single codebase."
    },
    {
      logo: uiUxLogo,
      title: "UI/UX Design",
      description: "Craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction."
    },
    {
      logo: appPrototypingLogo,
      title: "App Prototyping",
      description: "Transform your app idea into a tangible prototype, allowing you to validate concepts and gather feedback early in development."
    },
    {
      logo: mobileBackendLogo,
      title: "Mobile Backend Development",
      description: "Build robust backend systems to power your mobile app, ensuring scalability, security, and performance."
    },
    {
      logo: testingQALogo,
      title: "Testing & Q/A",
      description: "Thoroughly test your app across various devices to identify and fix bugs, ensuring a smooth and reliable user experience."
    },
    {
      logo: deploymentMaintenanceLogo,
      title: "Deployment & Maintenance",
      description: "Deploy your app to app stores and provide ongoing maintenance and support to keep it up-to-date and running smoothly."
    },
    {
      logo: marketingPromotionLogo,
      title: "Marketing & Promotion",
      description: "Develop comprehensive marketing strategies to increase app visibility, drive downloads, and grow your user base."
    },
  ];

  return (
    <>
      <div className={`${Styles.backButtonContainer} flex`}>
        <a href="/services" className="text-dark bg-red-400 px-2 py-1 ml-4 rounded-md">Back</a>
      </div>
      <div className={`${Styles.webServices} min-h-screen flex flex-wrap justify-center items-center`}>
        {services.map((service, index) => (
          <div key={index} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-md`}>
            <img className="mx-auto h-20 w-20" src={service.logo} alt={service.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
            <p className="font-normal">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MobileApplication;
