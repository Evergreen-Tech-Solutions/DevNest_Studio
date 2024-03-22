import React, {useState} from 'react';
import Styles from '../../styles/services_styles/WebSrvc.module.css';
import customWebDevelopmentLogo from '../../assets/logos/customWebDevelopmentLogo.png'; // Update paths as needed
import eCommerceLogo from '../../assets/logos/eCommerceLogo.png';
import cmsLogo from '../../assets/logos/cmsLogo.png';
import landingPageLogo from '../../assets/logos/landingPageLogo.png';
import webHostingLogo from '../../assets/logos/webHostingLogo.png';
import webMaintenanceLogo from '../../assets/logos/webMaintenanceLogo.png';
import seoLogo from '../../assets/logos/seoLogo.png';
import CustomWebDev from '../../components/modals/w_customWebDev';
import { act } from 'react-dom/test-utils';
import Ecommerce from '../../components/modals/w_eCommerce';
import Cms from '../../components/modals/w_cms';
import WebHosting from '../../components/modals/w_webHosting';
import WebMaintenance from '../../components/modals/w_webMeintenance';
import Seo from '../../components/modals/w_seo';
import LandingPage from '../../components/modals/w_landingPage';


function WebApplication() {
  const [activeModal, setActiveModal] = useState(null);
  // State to control the modal visibility
  const [modalOpen, setModalOpen] = useState(false);
  // State to hold the currently selected service
  const [selectedService, setSelectedService] = useState(null);


  const services = [
    {
      id: 'customWebDev',
      logo: customWebDevelopmentLogo,
      title: "Custom Web Development",
      description: "Tailored web solutions to fit your unique business needs."
    },
    {
      id: 'eCommerce',
      logo: eCommerceLogo,
      title: "E-commerce Solutions",
      description: "Robust online stores with seamless shopping experiences."
    },
    {
      id: 'cms',
      logo: cmsLogo,
      title: "Content Management Systems",
      description: "Flexible CMS solutions for easy content updates."
    },
    {
      id: 'landingPage',
      logo: landingPageLogo,
      title: "Landing Pages",
      description: "Engaging landing pages to convert visitors into customers."
    },
    {
      id: 'webHosting',
      logo: webHostingLogo,
      title: "Web Hosting",
      description: "Reliable web hosting solutions for your website."
    },
    {
      id: 'webMaintenance',
      logo: webMaintenanceLogo,
      title: "Web Maintenance",
      description: "Regular website updates to keep your site fresh."
    },
    {
      id: 'seo',
      logo: seoLogo,
      title: "SEO Services",
      description: "Boost your website's visibility and rank on search engines."
    },
  ];

  
  const handleOpenModal = (id) => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service);
    setActiveModal(id);
    setModalOpen(true);
  }; 

  const handleCloseModal = () => {
    setActiveModal(null);
  };


  return (
    <>
      <div className={`${Styles.backButtonContainer} flex`}>
        <button><a  href="/services" className="text-dark bg-red-400 px-2 py-2 ml-4 rounded-md">Back</a></button>
      </div>
      <div className={`${Styles.webServices} min-h-screen flex flex-wrap justify-center items-center`}>
        {services.map((service) => (
          <div key={service.id} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-lg`} onClick={() => handleOpenModal(service.id)}>
            <img className="mx-auto h-20 w-20" src={service.logo} alt={service.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
            <p className="font-normal">{service.description}</p>
          </div>
        ))}
      </div>
      {activeModal === 'customWebDev' && 
        <CustomWebDev open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'eCommerce' &&
        <Ecommerce open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'cms' &&
        <Cms open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'landingPage' &&
        <LandingPage open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'webHosting' &&
        <WebHosting open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'webMaintenance' &&
        <WebMaintenance open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'seo' &&
        <Seo open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
    </>
  );
}

export default WebApplication;
