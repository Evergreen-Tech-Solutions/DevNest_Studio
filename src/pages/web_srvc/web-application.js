import React, {useState} from 'react';
import Styles from '../../styles/services_styles/WebSrvc.module.css';
import customWebDevelopmentLogo from '../../assets/logos/customWebDevelopmentLogo.png'; // Update paths as needed
import eCommerceLogo from '../../assets/logos/eCommerceLogo.png';
import cmsLogo from '../../assets/logos/cmsLogo.png';
import landingPageLogo from '../../assets/logos/landingPageLogo.png';
import webHostingLogo from '../../assets/logos/webHostingLogo.png';
import webMaintenanceLogo from '../../assets/logos/webMaintenanceLogo.png';
import seoLogo from '../../assets/logos/seoLogo.png';
import ServiceModal from '../../components/modals/w_customWebDev';


function WebApplication() {

  // State to control the modal visibility
  const [modalOpen, setModalOpen] = useState(false);
  // State to hold the currently selected service
  const [selectedService, setSelectedService] = useState(null);

  // Function to open the modal with the selected service's details
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => setModalOpen(false);


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
    <>
      <div className={`${Styles.backButtonContainer} flex`}>
        <a href="/services" className="text-dark bg-red-400 px-2 py-1 ml-4 rounded-md">Back</a>
      </div>
      <div className={`${Styles.webServices} min-h-screen flex flex-wrap justify-center items-center`}>
        {services.map((service, index) => (
          <div key={index} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-md`} onClick={() => handleOpenModal(service)}>
            <img className="mx-auto h-20 w-20" src={service.logo} alt={service.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
            <p className="font-normal">{service.description}</p>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServiceModal
          open={modalOpen}
          handleClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </>
  );
}

export default WebApplication;
