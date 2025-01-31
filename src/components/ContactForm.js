import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kqj97nd",
        "template_dnixpat",
        formData,
        "ZuAY0cJ381FVYv2Oz"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Email successfully sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
<form
      onSubmit={handleSubmit}
      className={`${
        darkMode
          ? "bg-drkblu text-lght" // Dark mode styles
          : "bg-lght text-gray-700" // Light mode styles
      } shadow-md rounded px-8 pt-6 pb-8 mb-4`}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className={`block font-bold mb-2 ${
            darkMode ? "text-lght" : "text-gray-700"
          }`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block font-bold mb-2 ${
            darkMode ? "text-lght" : "text-gray-700"
          }`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className={`block font-bold mb-2 ${
            darkMode ? "text-lght" : "text-gray-700"
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`${
            darkMode
              ? "bg-blu text-drkblu hover:bg-red-400"
              : "bg-drkblu text-lght hover:bg-red-400"
          } text-xl px-4 py-2 mt-3 mb-2 rounded-md w-full text-center`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
