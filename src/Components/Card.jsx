import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import profile from '../assets/profile.png';

export const Card = () => {
  // Event handlers for social media links
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/karan-nautiyal-lin/", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/SLANGERES", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/karan._.nautiyal/?hl=en", "_blank");
  };

  const handleGmail = () => {
    window.location.href = "mailto:karannautiyal22@gmail.com";
  };

  return (
    <div className="bg-white max-h-[650px] w-[400px] rounded-2xl mt-30 flex flex-col justify-center items-center hover:shadow-cyan-500/50 hover:-translate-y-1 hover:shadow-2xl hover:ease-in-out duration-300">
      {/* Profile Image */}
      <div className="w-[250px] h-[300px] bg-amber-300 rounded-3xl">
        <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Name */}
      <div className="h-20 flex justify-center items-center text-4xl font-bold">
        <span className="tracking-wide">Karan Nautiyal</span>
      </div>

      {/* Description */}
      <div className="w-[70%] font-extralight text-center text-cyan-950">
        My code is like my coffee: clean, strong, and keeping everyone functional.
      </div>

      {/* Social Icons */}
      <div className="flex flex-row space-x-2 mt-10">
        <div
          className="w-[35px] rounded-xl hover:bg-gray-200 h-[35px] flex justify-center items-center cursor-pointer"
          onClick={handleLinkedin}
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-orange-600" />
        </div>
        <div
          className="w-[35px] rounded-xl hover:bg-gray-200 h-[35px] flex justify-center items-center cursor-pointer"
          onClick={handleGithub}
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-orange-600" />
        </div>
        <div
          className="w-[35px] rounded-xl hover:bg-gray-200 h-[35px] flex justify-center items-center cursor-pointer"
          onClick={handleInstagram}
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-orange-600" />
        </div>
        <div
          className="w-[35px] rounded-xl hover:bg-gray-200 h-[35px] flex justify-center items-center cursor-pointer"
          onClick={handleGmail}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-orange-600" />
        </div>
      </div>
    </div>
  );
};
