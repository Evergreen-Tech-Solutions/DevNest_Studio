import { useState } from "react";
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
import businessAutomationLogo from "../assets/logos/businessProcessaAtomationLogo.png";
import AiIntegrationLogo from "../assets/logos/aiIntegrationLogo.png";
import ContactForm from "../components/ContactForm";
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
import Ecommerce from "../components/modals/w_eCommerce";
import CrossPlatform from "../components/modals/m_crossPlatform";
import DesignQualityLifecycle from "../components/modals/ DesignQualityLifecycle";
import TestingQa from "../components/modals/m_testingQa";
import BusinessOptimization from "../components/modals/ Business&Optimization";
import BusinessAutomation from "../components/modals/w_businessAutomation";
import AiIntegration from "../components/modals/w_aiIntegration";
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
    // {
    //   id: "eCommerce",
    //   logo: eCommerceLogo,
    //   title: "E-commerce Solutions",
    //   description: "Robust online stores with seamless shopping experiences.",
    // },
    // {
    //   id: "crossPlatform",
    //   logo: crossPlatformLogo,
    //   title: "Cross-Platform Development",
    //   description:
    //     "Create apps that work seamlessly across Web, iOS, and Android.",
    // },

    // {
    //   id: "testingQa",
    //   logo: testingQALogo,
    //   title: "Testing, Q/A, Deployment & Maintenance",
    //   description: "Ensure smooth deployment and provide ongoing maintenance.",
    // },
    // {
    //   id: "businessAutomation",
    //   logo: businessAutomationLogo,
    //   title: "",
    //   description: "Automate operations to save time and reduce costs.",
    // },
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
            className="h-60 w-60 mx-auto mb-5"
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
          className={`py-12 text-center rounded-lg shadow-2xl mt-5 mb-8 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-lght text-gray-900"
          }`}
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
            className={` p-3 text-center text-lg rounded-lg shadow-2xl ${
              darkMode ? "bg-lght text-gray-900" : "bg-gray-700 text-gray-100"
            }`}
          >
            Learn more about us
          </a>
        </div>

        <h2
          className="text-4xl font-bold text-center rounded-lg shadow-2xl p-1 mb-16 mt-16"
          style={{
            backgroundColor: darkMode ? "#999999" : "#defcfc",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <div
            className="text-center rounded-lg shadow-2xl p-1 m-4"
            style={{
              backgroundColor: darkMode ? "#5C5C5C" : "#70d3e7",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <div
              className="text-center border-0 rounded-lg shadow-2xl p-1 m-4"
              style={{
                backgroundColor: darkMode ? "#3f3f3f" : "#109bb8",
                color: darkMode ? "#ffffff" : "#ffffff",
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
                backgroundColor: darkMode ? "#999999" : "#defcfc",
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
      {/* {activeModal === "eCommerce" && (
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
      )} */}
      {/* {activeModal === "testingQa" && (
        <TestingQa
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )} */}
      {/* {activeModal === "businessAutomation" && (
        <BusinessAutomation
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )} */}

      {/* Testimonials Section */}
      {/* <div
        className={`py-16 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"
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
      </div> */}

      {/* Contact Section */}
      <div className="flex justify-center mb-5">
        <div
          id="contact"
          className={`m-2 p-6 rounded-lg shadow-xl ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Get in touch with us
          </h2>
          <div className="">
            <p className="text-lg text-center mb-6">
              We're here to answer your questions, discuss your ideas, and help
              you get started with what you need. Whether you're curious about
              our services, have feedback to share, or just want to say hello,
              we're always happy to hear from you.
            </p>
            <p className="text-lg text-center mb-6">
              Feel free to reach out to us by visiting our
              <a
                href="/contact"
                className="text-blue-500 underline hover:text-red-500 mx-1"
              >
                Contact Page
              </a>
              . You'll find a simple form to send us your message, and we'll get
              back to you as soon as possible!
            </p>
            <p className="text-lg text-center">
              Let's connect and explore how we can work together to achieve your
              goals. Your journey starts with a conversation—don't hesitate to
              get in touch today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
