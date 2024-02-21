import React from 'react';
import Navigation from '../components/Navigation';

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">Learn more about our company and team.</p>
          <div className="mt-8">
            <p className="text-gray-700">
              We are a passionate team dedicated to providing high-quality services to our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
