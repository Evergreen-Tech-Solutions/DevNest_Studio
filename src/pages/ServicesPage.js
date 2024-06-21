import React, { useState } from "react";
import Styles from "../styles/ServicesPage.module.css";
import customWebDevelopmentLogo from "../assets/logos/customWebDevelopmentLogo.png"; // Update paths as needed
import eCommerceLogo from "../assets/logos/eCommerceLogo.png";
import crossPlatformLogo from "../assets/logos/crossPlatformLogo.png";
import uiUxLogo from "../assets/logos/uiUxLogo.png";
import testingQALogo from "../assets/logos/testingQALogo.png";
import marketingPromotionLogo from "../assets/logos/marketingPromotionLogo.png";
import placeholder from "../assets/logos/placeholder.png";

import CustomWebDev from "../components/modals/w_customWebDev";
import Ecommerce from "../components/modals/w_eCommerce";
import CrossPlatform from "../components/modals/m_crossPlatform";
import UiUx from "../components/modals/m_uiUx";
import TestingQa from "../components/modals/m_testingQa";
import MarketingPromotion from "../components/modals/m_marketingPromotion";
import BusinessAutomation from "../components/modals/w_businessAutomation";
import AiIntegration from "../components/modals/w_aiIntegration";

function ServicesPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "customWebDev",
      logo: customWebDevelopmentLogo,
      title: "Custom Web Development",
      description: "Tailored web solutions to fit your unique business needs.",
    },
    {
      id: "eCommerce",
      logo: eCommerceLogo,
      title: "E-commerce Solutions",
      description: "Robust online stores with seamless shopping experiences.",
    },
    {
      id: "crossPlatform",
      logo: crossPlatformLogo,
      title: "Cross-Platform Development",
      description:
        "Create apps that work seamlessly across Web, iOS, and Android, reaching a wider audience with a single codebase.",
    },
    {
      id: "uiUx",
      logo: uiUxLogo,
      title: "UI/UX Design",
      description:
        "Craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction.",
    },
    {
      id: "testingQa",
      logo: testingQALogo,
      title: "Testing, Q/A, Deployment & Maintenance",
      description:
        "Thoroughly test your app, ensure smooth deployment, and provide ongoing maintenance and support.",
    },
    {
      id: "marketingPromotion",
      logo: marketingPromotionLogo,
      title: "Marketing & Promotion",
      description:
        "Develop comprehensive marketing strategies to increase app visibility, drive downloads, and grow your user base.",
    },
    {
      id: "businessAutomation",
      logo: placeholder,
      title: "Business Process Automation",
      description:
        "Streamline your business operations with automated solutions that save time and reduce costs.",
    },
    {
      id: "aiIntegration",
      logo: placeholder,
      title: "AI Integration",
      description:
        "Enhance your applications with cutting-edge artificial intelligence capabilities.",
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
      <div
        className={`${Styles.serviceOptions} min-h-screen flex flex-wrap justify-center items-center`}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className={`${Styles.serviceCard} m-4 p-6 max-w-sm rounded-lg border border-gray-800 shadow-lg`}
            onClick={() => handleOpenModal(service.id)}
          >
            <img
              className="mx-auto h-20 w-20"
              src={service.logo}
              alt={service.title}
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {service.title}
            </h5>
            <p className="font-normal">{service.description}</p>
          </div>
        ))}
      </div>
      {activeModal === "customWebDev" && (
        <CustomWebDev
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "eCommerce" && (
        <Ecommerce
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "crossPlatform" && (
        <CrossPlatform
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "uiUx" && (
        <UiUx
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "testingQa" && (
        <TestingQa
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "marketingPromotion" && (
        <MarketingPromotion
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "businessAutomation" && (
        <BusinessAutomation
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "aiIntegration" && (
        <AiIntegration
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </>
  );
}

export default ServicesPage;
