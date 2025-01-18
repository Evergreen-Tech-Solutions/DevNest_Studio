import React, { useState } from "react";
import Styles from "../styles/HomePage.module.css";
import darkLogo from "../assets/logo.png";
import lightLogo from "../assets/logo_w.png";
import darkModeVideo from "../assets/backgroundVids/darkMode_bg.mp4";
import lightModeVideo from "../assets/backgroundVids/lightMode_bg.mp4";
import customWebDevelopmentLogo from "../assets/logos/customWebDevelopmentLogo.png";
import eCommerceLogo from "../assets/logos/eCommerceLogo.png";
import crossPlatformLogo from "../assets/logos/crossPlatformLogo.png";
import uiUxLogo from "../assets/logos/uiUxLogo.png";
import testingQALogo from "../assets/logos/testingQALogo.png";
import marketingPromotionLogo from "../assets/logos/marketingPromotionLogo.png";
import placeholderLogo from "../assets/logos/placeholder.png";
import ContactForm from "../components/ContactForm";
import { useTheme, Box } from "@mui/material";

import CustomWebDev from "../components/modals/w_customWebDev";
import Ecommerce from "../components/modals/w_eCommerce";
import CrossPlatform from "../components/modals/m_crossPlatform";
import UiUx from "../components/modals/m_uiUx";
import TestingQa from "../components/modals/m_testingQa";
import MarketingPromotion from "../components/modals/m_marketingPromotion";
import BusinessAutomation from "../components/modals/w_businessAutomation";
import AiIntegration from "../components/modals/w_aiIntegration";
import "../styles/global.css";

function HomePage({ darkMode }) {
  const theme = useTheme();
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
        "Create apps that work seamlessly across Web, iOS, and Android.",
    },
    {
      id: "uiUx",
      logo: uiUxLogo,
      title: "UI/UX Design",
      description: "Visually stunning and user-friendly interfaces.",
    },
    {
      id: "testingQa",
      logo: testingQALogo,
      title: "Testing, Q/A, Deployment & Maintenance",
      description: "Ensure smooth deployment and provide ongoing maintenance.",
    },
    {
      id: "marketingPromotion",
      logo: marketingPromotionLogo,
      title: "Marketing & Promotion",
      description: "Increase app visibility and grow your user base.",
    },
    {
      id: "businessAutomation",
      logo: placeholderLogo,
      title: "Business Process Automation",
      description: "Automate operations to save time and reduce costs.",
    },
    {
      id: "aiIntegration",
      logo: placeholderLogo,
      title: "AI Integration",
      description: "Enhance applications with AI capabilities.",
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
    setModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Video for dark mode */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ pointerEvents: "none", display: darkMode ? "block" : "none" }}
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
        style={{ pointerEvents: "none", display: !darkMode ? "block" : "none" }}
        className="absolute inset-0 w-full h-screen object-cover"
      >
        <source src={lightModeVideo} type="video/mp4" />
      </video>

      <div
        className={`relative ${
          darkMode
            ? "bg-opacity-50 bg-gray-800 text-white"
            : "bg-opacity-50 bg-white text-gray-900"
        } mx-auto px-4 sm:px-6 lg:px-8 py-16 ${Styles.overlay}`}
      >
        <div className="text-center">
          <img
            src={darkMode ? lightLogo : darkLogo}
            alt="DevNest Studio Logo"
            className="h-48 w-48 mx-auto mb-5"
          />
          <h1 className="text-6xl font-bold mb-4">
            Transform Your Digital Presence
          </h1>
          <p className="text-lg mb-8">
            We offer top-notch services to meet your needs. From custom web
            development to AI integration, we have you covered.
          </p>
          {/* <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            Get a Free Quote
          </a> */}
        </div>
      </div>

      {/* Services Section */}
      <Box
        className="relative px-4 sm:px-6 lg:px-8 py-16 text-center"
        sx={{
          backgroundColor: darkMode ? "#787474" : "#ffffff",
          color: darkMode ? "#000000" : "#000000",
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-xs m-4 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer"
              style={{
                backgroundColor: darkMode ? "#999999" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
              onClick={() => handleOpenModal(service.id)}
            >
              <img
                src={service.logo}
                alt={service.title}
                className="h-20 w-20 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* Modals */}
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

      {/* Testimonials Section */}
      <div
        className={`py-16 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="max-w-md m-4 p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: darkMode ? "#999999" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <p className="text-lg italic">
              "The team at DevNest Studio transformed our website. Their
              expertise in custom web development is unparalleled."
            </p>
            <p className="text-right font-bold mt-4">- Client Name</p>
          </div>
          <div
            className="max-w-md m-4 p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: darkMode ? "#999999" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <p className="text-lg italic">
              "Thanks to their AI integration, our business operations are more
              efficient than ever."
            </p>
            <p className="text-right font-bold mt-4">- Client Name</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className={`py-16 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div
          className="max-w-md mx-auto p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: darkMode ? "#999999" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
