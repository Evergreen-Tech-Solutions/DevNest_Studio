import React, { useState, useEffect } from "react";
import Styles from "../styles/HomePage.module.css";
import darkModeVideo from "../assets/backgroundVids/darkMode_bg.mp4";
import lightModeVideo from "../assets/backgroundVids/lightMode_bg.mp4";
import customWebDevelopmentLogo from "../assets/logos/customWebDevelopmentLogo.png";
import uiUxLogo from "../assets/logos/uiUxLogo.png";
import marketingPromotionLogo from "../assets/logos/marketingPromotionLogo.png";
import AiIntegrationLogo from "../assets/logos/aiIntegrationLogo.png";
import drkLogo from "../assets/logos/darkLogo.png";
import lghtLogo from "../assets/logos/lightLogo.png";
import { useTheme, Box } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaJs,
  FaGitlab,
  FaCss3,
  FaHtml5,
  FaJava,
  FaBootstrap,
  FaPython,
  FaPhp,
  FaGit,
  FaWordpress,
  FaDocker,
  FaLaravel,
} from "react-icons/fa";
import DigitalProductDevelopment from "../components/modals/DigitalProductDevelopment";
import DesignQualityLifecycle from "../components/modals/ DesignQualityLifecycle";
import BusinessOptimization from "../components/modals/ Business&Optimization";
import AiIntegration from "../components/modals/AiIntegration";
import PackageSelectorGame from "../components/PackageSelector";
import LaunchPromoBox from "../components/modals/LaunchPromo";
import "../styles/global.css";
import { FaL } from "react-icons/fa6";

function HomePage({ darkMode }) {
  const theme = useTheme();
  const [activeModal, setActiveModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "DigitalProductDevelopment",
      logo: customWebDevelopmentLogo,
      title: "Digital Product Development",
      description:
        "Custom Web Development, Cross-Platform Development and E-commerce Solutions",
    },
    {
      id: "aiIntegration",
      logo: AiIntegrationLogo,
      title: "AI Integration",
      description: "Enhance applications with AI capabilities",
    },
    {
      id: "DesignQualityLifecycle",
      logo: uiUxLogo,
      title: "Design, Quality & Lifecycle Management",
      description: "UI/UX Design, Testing, Q/A, Deployment & Maintenance",
    },
    {
      id: "BusinessOptimization",
      logo: marketingPromotionLogo,
      title: "Business Growth & Optimization",
      description:
        "Business Marketing & Promotion and Business Process Automation",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="text-center m-12">
          <img
            src={darkMode ? lghtLogo : drkLogo}
            alt="DevNest Studio Logo"
            className="h-72 w-72 mx-auto"
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
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <section>
          <div
            className={`flex mb-8 justify-center space-x-10 ${
              darkMode ? "text-blu" : "text-gray-900"
            }`}
          >
            <FaJs className="text-5xl logo" />
            <FaReact className="text-5xl logo" />
            <FaNodeJs className="text-5xl logo" />
            <FaHtml5 className="text-5xl logo" />
            <FaCss3 className="text-5xl logo" />
            <FaBootstrap className="text-5xl logo" />
            <FaJava className="text-5xl logo" />
            <FaPython className="text-5xl logo" />
            <FaPhp className="text-5xl logo" />
            <FaLaravel className="text-5xl logo" />
            <FaDatabase className="text-5xl logo" />
            <FaGit className="text-5xl logo" />
            <FaGithub className="text-5xl logo" />
            <FaGitlab className="text-5xl logo" />
            <FaDocker className="text-5xl logo" />
            <FaWordpress className="text-5xl logo" />
          </div>
        </section>

        {/* Who We Are Section */}
        <div
          className={"py-12 text-center rounded-lg shadow-2xl mt-5 mb-8"}
          sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
        >
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <h3 className="text-2xl font-semibold mb-4">From BC to the World</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rooted in British Columbia, we are a collective of developers,
            designers, and marketing strategists crafting digital experiences
            for the next generation of businesses. Whether it’s a custom app,
            e-commerce site, or AI solution ... we tailor every project to your
            vision.
          </p>
            <a
            href="/about"
                className={`border border-teal-600 hover:bg-teal-600 hover:text-slate-900 font-semibold py-3 px-6 rounded-full transition duration-300`}
              >
            Learn more about us
          </a>
        </div>

        <h2
          className="text-4xl font-bold text-center rounded-lg shadow-2xl p-1 mb-16 mt-16"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #1e2a38, #2c3e50)"
              : "#defcfc",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <div
            className="text-center rounded-lg shadow-2xl p-1 m-4"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #263b4d, #1c2a3a)"
                : "#70d3e7",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <div
              className="text-center border-0 rounded-lg shadow-2xl p-1 m-4"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #13202d, #1b2d42)"
                  : "#109bb8",
                color: "#ffffff",
              }}
            >
              Our Services
            </div>
          </div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-4 shadow-md flex flex-col items-center text-center cursor-pointer transform transition-transform hover:scale-105"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #263b4d, #1c2a3a)"
                  : "#defcfc",
                color: darkMode ? "#ffffff" : "#000000",
              }}
              onClick={() => handleOpenModal(service.id)}
            >
              <img
                src={service.logo}
                alt={service.title}
                className="h-20 w-20 mb-3"
              />
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* Modals */}
      {activeModal === "DigitalProductDevelopment" && (
        <DigitalProductDevelopment
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
      {activeModal === "DesignQualityLifecycle" && (
        <DesignQualityLifecycle
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      {activeModal === "BusinessOptimization" && (
        <BusinessOptimization
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}

      <div className="mb-10 ml-10 mr-10">
        <LaunchPromoBox />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className={`w-full py-20 px-4 md:px-20 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Package Selector Game */}
          <div className="w-full md:w-1/2">
            <div className="h-full">
              <PackageSelectorGame />
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block h-64 w-px opacity-50"
            style={{ background: theme.palette.divider }}
          ></div>

          {/* Right Column: Info & Links */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
              Let’s Build Something Great Together
            </h2>
            <p className="text-lg mb-4 leading-relaxed text-center md:text-left">
              We're here to answer your questions, discuss your goals, and
              create something impactful, tailored just for you.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-center md:text-left">
              Whether you’re looking to launch a digital product, integrate AI,
              or streamline your business process, we’re just a message away.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className={`border border-teal-600 hover:bg-teal-600 hover:text-slate-900 font-semibold py-3 px-6 rounded-full transition duration-300`}
              >
                Contact Us
              </a>
              <a
                href="/pricing"
                className={`font-semibold text-teal-600 underline hover:text-teal-300 transition duration-300`}
              >
                View Pricing →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
