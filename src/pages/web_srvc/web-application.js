import React from 'react';
import Styles from '../../styles/services_styles/WebSrvc.module.css';

// Import logos for each service
import customWebDevelopmentLogo from '../../assets/logos/customWebDevelopmentLogo.png'; // Update paths as needed
import eCommerceLogo from '../../assets/logos/eCommerceLogo.png';
import cmsLogo from '../../assets/logos/cmsLogo.png';
import landingPageLogo from '../../assets/logos/landingPageLogo.png';
import webHostingLogo from '../../assets/logos/webHostingLogo.png';
import webMaintenanceLogo from '../../assets/logos/webMaintenanceLogo.png';
import seoLogo from '../../assets/logos/seoLogo.png';


function WebApplication() {
  // List of services with their logos and descriptions
  const services = [
    {
      logo: customWebDevelopmentLogo,
      title: "Custom Web Development",
      description: "Tailored web solutions to fit your unique business needs."
    },
    {
      logo: eCommerceLogo,
      title: "E-commerce Solutions",
      description: "Robust online stores with seamless shopping experiences."
    },
    {
      logo: cmsLogo,
      title: "Content Management Systems",
      description: "Flexible CMS solutions for easy content updates."
    },
    {
      logo: landingPageLogo,
      title: "Landing Pages",
      description: "Engaging landing pages to convert visitors into customers."
    },
    {
      logo: webHostingLogo,
      title: "Web Hosting",
      description: "Reliable web hosting solutions for your website."
    },
    {
      logo: webMaintenanceLogo,
      title: "Web Maintenance",
      description: "Regular website updates to keep your site fresh."
    },
    {
      logo: seoLogo,
      title: "SEO Optimization",
      description: "Boost your website's visibility and rank on search engines."
    },
  ];

  return (
    <div className={`${Styles.webServices} min-h-screen flex flex-wrap justify-center items-center`}>
      {services.map((service, index) => (
        <div key={index} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-md`}>
          <img className="mx-auto h-20 w-20" src={service.logo} alt={service.title} />
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
          <p className="font-normal">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WebApplication;
