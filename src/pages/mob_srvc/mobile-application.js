import React from 'react';
import Styles from '../../styles/services_styles/MobSrvc.module.css';

function MobileApplication() {
  const services = [
    {
      title: "Cross-Platform Development",
      description: "Create apps that work seamlessly across iOS and Android, reaching a wider audience with a single codebase."
    },
    {
      title: "UI/UX Design",
      description: "Craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction."
    },
    {
      title: "App Prototyping",
      description: "Transform your app idea into a tangible prototype, allowing you to validate concepts and gather feedback early in development."
    },
    {
      title: "Mobile Backend Development",
      description: "Build robust backend systems to power your mobile app, ensuring scalability, security, and performance."
    },
    {
      title: "Testing & Q/A",
      description: "Thoroughly test your app across various devices to identify and fix bugs, ensuring a smooth and reliable user experience."
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploy your app to app stores and provide ongoing maintenance and support to keep it up-to-date and running smoothly."
    },
    {
      title: "Marketing & Promotion",
      description: "Develop comprehensive marketing strategies to increase app visibility, drive downloads, and grow your user base."
    },
  ];

  return (
    <div className={`${Styles.mobileServices} min-h-screen flex flex-wrap justify-center items-center`}>
      {services.map((service, index) => (
        <div key={index} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-md`}>
          <div className="mx-auto h-20 w-20 bg-gray-300 rounded-md mb-2"></div> {/* Placeholder */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
          <p className="font-normal">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MobileApplication;
