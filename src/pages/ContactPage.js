import React from 'react';
import Styles from '../styles/ContactPage.module.css';

function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Get in touch with us for inquiries and collaborations.</p>
          <div className="mt-8 max-w-lg mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="border rounded-md py-2 px-3 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="border rounded-md py-2 px-3 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="border rounded-md py-2 px-3 w-full"></textarea>
              </div>
              <button type="submit" className="bg-orng hover:bg-blu text-drkblu font-semibold py-2 px-4 rounded-md">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
