import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactPage({ darkMode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-400" : "text-gray-600";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const iconColor = darkMode ? "#00a896" : "#00796b";

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto`}>
            Whether you're interested in working with us or just want to say hello, we're here for you.
            Drop us a message and let's bring your ideas to life.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6 mt-8 text-2xl">
            <a
              href="https://www.linkedin.com/company/the-devnest-studio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin color={iconColor} className="hover:scale-110 transition-transform" />
            </a>
            {/* <a
              href="https://www.instagram.com/thedevnest.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color={iconColor} className="hover:scale-110 transition-transform" />
            </a> */}
            <a
              href="https://github.com/Evergreen-Tech-Solutions/website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub color={iconColor} className="hover:scale-110 transition-transform" />
            </a>
            {/* <a
              href="mailto:hello@thedevnest.ca"
              aria-label="Email"
            >
              <FaEnvelope color={iconColor} className="hover:scale-110 transition-transform" />
            </a> */}
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-lg mx-auto">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
