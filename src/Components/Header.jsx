import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileLines,
  faFolderClosed,
  faUser,
  faFontAwesome,
} from "@fortawesome/free-regular-svg-icons";

export const Header = ({ scrollToSection }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#1B1B1B] text-amber-50 h-[50px] m-6 w-[300px] rounded-xl flex items-center justify-center space-x-10 sticky top-0 z-50">
        
        {/* Profile Icon */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection("profile")}>
          <FontAwesomeIcon icon={faUser} className="text-white text-xl hover:scale-110 transition" />
          <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Profile
          </span>
        </div>

        {/* Projects Icon */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection("projects")}>
          <FontAwesomeIcon icon={faFolderClosed} className="text-white text-xl hover:scale-110 transition" />
          <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Projects
          </span>
        </div>

        {/* Tools Icon */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection("tools")}>
          <FontAwesomeIcon icon={faFontAwesome} className="text-white text-xl hover:scale-110 transition" />
          <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Tools
          </span>
        </div>

        {/* Certifications Icon */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection("certifications")}>
          <FontAwesomeIcon icon={faFileLines} className="text-white text-xl hover:scale-110 transition" />
          <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Certifications
          </span>
        </div>

        {/* Contact Icon */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection("contact")}>
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl hover:scale-110 transition" />
          <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Contact
          </span>
        </div>
        
      </div>
    </div>
  );
};
