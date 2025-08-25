import React from "react";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

function ContactPage({ darkMode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Get in touch with us for inquiries and collaborations.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <ContactForm darkMode={darkMode} /> {/* Pass darkMode to ContactForm */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
