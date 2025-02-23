import React from 'react';
import hackerrank from '../assets/Expassets/hackerrank-4.svg';
import walmart from '../assets/Expassets/walmart.svg';
import eagames from '../assets/Expassets/ea-games.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Certification = () => {
  const handleEA = () => {
    window.open("https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_H4gvBDSeYRDRrojNy_1738950692372_completion_certificate.pdf", "_blank");
  };
  const handleWalmart = () => {
    window.open("https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_H4gvBDSeYRDRrojNy_1738958755421_completion_certificate.pdf", "_blank");
  };
  const handleHackerRank = () => {
    window.open("https://www.hackerrank.com/certificates/ab8bd43f0e7d", "_blank");
  };

  const certifications = [
    {
      img: walmart,
      title: 'Walmart',
      subtitle: 'Advanced Software Engineering Certification',
      onClick: handleWalmart,
    },
    {
      img: eagames,
      title: 'Electronic Arts',
      subtitle: 'Software Engineering Certification',
      onClick: handleEA,
    },
    {
      img: hackerrank,
      title: 'HackerRank',
      subtitle: 'Problem Solving & 5-Star in C++',
      onClick: handleHackerRank,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">Experience &</h1>
        <h1 className="text-emerald-800 font-bold text-4xl md:text-6xl lg:text-8xl">Certification</h1>
      </div>

      {/* Certification Cards */}
      <div className="flex flex-col space-y-6 w-full max-w-2xl">
  {certifications.map((cert, index) => (
    <div
      key={index}
      className="group w-full h-[180px] md:h-[200px] flex items-center p-4 rounded-2xl cursor-pointer  hover:bg-[#1B1B1B] transition duration-300"
      onClick={cert.onClick}
    >
      <img
        src={cert.img}
        alt={cert.title}
        className="w-[100px] md:w-[160px] h-[100px] md:h-[160px] rounded-2xl object-contain bg-white"
      />
      <div className="flex-1 text-left ml-6">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">{cert.title}</h1>
        <span className="text-emerald-800 block mt-1">{cert.subtitle}</span>
      </div>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className="text-orange-400 text-3xl ml-3 transition-transform duration-300 group-hover:translate-x-2 rotate-[330deg]" 
      />
    </div>
  ))}
</div>

    </div>
  );
};
