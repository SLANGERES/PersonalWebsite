import React from 'react';
import Pulsevive from '../assets/Pulsevibe.png';
import Syncwave from '../assets/Syncwave.png';
import Urlshortner from '../assets/Urlshortner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Project = () => {
  const handlePulseVibe = () => {
    window.open("https://github.com/SLANGERES/PulseVibes", "_blank");
  };
  const handleSyncwave = () => {
    window.open("https://github.com/SLANGERES/Syncwave", "_blank");
  };
  const handleUrlShort = () => {
    window.open("https://github.com/SLANGERES/UrlShortner.github.io", "_blank");
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">RECENT</h1>
        <h1 className="text-emerald-800 font-bold text-4xl md:text-6xl lg:text-8xl">PROJECTS</h1>
      </div>

      {/* Projects List */}
      <div className="flex flex-col space-y-6 w-full max-w-2xl">
      {[
        { img: Pulsevive, title: "PulseVibe", desc: "Emotion-based Music Recommendation Web App", onClick: handlePulseVibe },
        { img: Syncwave, title: "Syncwave", desc: "AI-Based Communication Web App", onClick: handleSyncwave },
        { img: Urlshortner, title: "Short URL", desc: "URL Shortener Web App", onClick: handleUrlShort }
      ].map((project, index) => (
        <div 
          key={index} 
          className="group flex flex-col md:flex-row items-center w-full rounded-2xl p-4 md:p-6 
                     hover:bg-[#1B1B1B] transition duration-500 cursor-pointer"
          onClick={project.onClick}
        >
          <img src={project.img} alt={project.title} className="w-24 h-24 md:w-40 md:h-40 rounded-2xl object-cover" />
          <div className="md:ml-6 mt-4 md:mt-0 flex-1 text-left">
            <h1 className="text-white text-2xl md:text-3xl font-semibold">{project.title}</h1>
            <span className="text-emerald-800 text-sm md:text-base block mt-1">{project.desc}</span>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-3xl text-orange-400 transition-transform duration-300 group-hover:translate-x-2 rotate-[330deg]" />
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};
