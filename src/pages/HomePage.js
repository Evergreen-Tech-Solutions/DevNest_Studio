import React from 'react';
import Navigation from '../components/Navigation';
import Styles from '../styles/HomePage.module.css';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Business</h1>
          <p className="text-lg text-gray-600">We offer top-notch services to meet your needs.</p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
