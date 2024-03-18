import React, {useState} from 'react';
import Styles from '../../styles/services_styles/MobSrvc.module.css';
import crossPlatformLogo from '../../assets/logos/crossPlatformLogo.png'; // Update paths as needed
import uiUxLogo from '../../assets/logos/uiUxLogo.png';
import appPrototypingLogo from '../../assets/logos/appPrototypingLogo.png';
import mobileBackendLogo from '../../assets/logos/mobileBackendLogo.png';
import testingQALogo from '../../assets/logos/testingQALogo.png';
import deploymentMaintenanceLogo from '../../assets/logos/deploymentMaintenanceLogo.png';
import marketingPromotionLogo from '../../assets/logos/marketingPromotionLogo.png';
import CrossPlatform from '../../components/modals/m_crossPlatform';
import UiUx from '../../components/modals/m_uiUx';
import AppPrototyping from '../../components/modals/m_appPrototyping';
import MBackend from '../../components/modals/m_mBackend';
import TestingQa from '../../components/modals/m_testingQa';
import DeploymentMaintenance from '../../components/modals/m_deploymentMaintenance';
import MarketingPromotion from '../../components/modals/m_marketingPromotion';



function MobileApplication() {

  const [activeModal, setActiveModal] = useState(null);
  // State to control the modal visibility
  const [modalOpen, setModalOpen] = useState(false);
  // State to hold the currently selected service
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'crossPlatform',
      logo: crossPlatformLogo,
      title: "Cross-Platform Development",
      description: "Create apps that work seamlessly across iOS and Android, reaching a wider audience with a single codebase."
    },
    {
      id: 'uiUx',
      logo: uiUxLogo,
      title: "UI/UX Design",
      description: "Craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction."
    },
    {
      id: 'appPrototyping',
      logo: appPrototypingLogo,
      title: "App Prototyping",
      description: "Transform your app idea into a tangible prototype, allowing you to validate concepts and gather feedback early in development."
    },
    {
      id: 'mBackend',
      logo: mobileBackendLogo,
      title: "Mobile Backend Development",
      description: "Build robust backend systems to power your mobile app, ensuring scalability, security, and performance."
    },
    {
      id: 'testingQa',
      logo: testingQALogo,
      title: "Testing & Q/A",
      description: "Thoroughly test your app across various devices to identify and fix bugs, ensuring a smooth and reliable user experience."
    },
    {
      id: 'deploymentMaintenance',
      logo: deploymentMaintenanceLogo,
      title: "Deployment & Maintenance",
      description: "Deploy your app to app stores and provide ongoing maintenance and support to keep it up-to-date and running smoothly."
    },
    {
      id: 'marketingPromotion',
      logo: marketingPromotionLogo,
      title: "Marketing & Promotion",
      description: "Develop comprehensive marketing strategies to increase app visibility, drive downloads, and grow your user base."
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
        <a href="/services" className="text-dark bg-red-400 px-2 py-1 ml-4 rounded-md">Back</a>
      </div>
      <div className={`${Styles.webServices} min-h-screen flex flex-wrap justify-center items-center`}>
        {services.map((service) => (
          <div key={service.id} className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-md`} onClick={() => handleOpenModal(service.id)}>
            <img className="mx-auto h-20 w-20" src={service.logo} alt={service.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.title}</h5>
            <p className="font-normal">{service.description}</p>
          </div>
        ))}
      </div>
      {activeModal === 'crossPlatform' && 
        <CrossPlatform open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'uiUx' &&
        <UiUx open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'appPrototyping' &&
        <AppPrototyping open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'mBackend' &&
        <MBackend open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'testingQa' &&
        <TestingQa open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'deploymentMaintenance' &&
        <DeploymentMaintenance open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
      {activeModal === 'marketingPromotion' &&
        <MarketingPromotion open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      }
    </>
  );
}

export default MobileApplication;
