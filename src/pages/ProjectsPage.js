import React from 'react';
import Styles from '../styles/ProjectsPage.module.css';

function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600">Discover some of the projects we've worked on.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 1" className="w-full h-auto" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h2>
                <p className="text-gray-600">Description of project 1 goes here.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 2" className="w-full h-auto" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h2>
                <p className="text-gray-600">Description of project 2 goes here.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 3" className="w-full h-auto" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h2>
                <p className="text-gray-600">Description of project 3 goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
