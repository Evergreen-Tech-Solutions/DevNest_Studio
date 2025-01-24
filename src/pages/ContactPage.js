import React from "react";
import ContactForm from "../components/ContactForm";

function ContactPage({ darkMode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Get in touch with us for inquiries and collaborations.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
