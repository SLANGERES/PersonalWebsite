import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Section = () => {
  const handleResume = () => {
    window.open("https://drive.google.com/file/d/1Zy3-wGcd2kXJYKxHeaPc8WV9hjquMgpF/view?usp=sharing", "_blank");
  };

  return (
    <div className="w-full h-screen flex flex-col  items-start px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className='h-[120px]'></div>
      <div className="mb-6">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">SOFTWARE</h1>
        <h1 className="text-emerald-800 font-bold text-4xl md:text-6xl lg:text-8xl">DEVELOPER</h1>
      </div>
      <div className='h-[50px]'></div>

      {/* Description */}
      <p className="text-emerald-200 max-w-4xl text-lg md:text-xl font-extralight tracking-wide lg:w-[70%]">
        A passionate software developer who transforms ideas into scalable and efficient solutions. 
        From crafting seamless user experiences to building robust backend systems, 
        I thrive on clean code, innovation, and solving complex problems with creativity and precision.
      </p>

      {/* Statistics Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-start max-w-4xl gap-10 mt-8">
        <div className="flex flex-col text-left">
          <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">150+</span>
          <span className="text-emerald-800 text-lg md:text-xl">DSA Problems Solved</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">10+</span>
          <span className="text-emerald-800 text-lg md:text-xl">Projects Completed</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">5000+</span>
          <span className="text-emerald-800 text-lg md:text-xl">Lines of Code</span>
        </div>
      </div>

      {/* Resume Button */}
      <button 
  className="group w-full md:w-[50%] h-16 md:h-20 mt-8 rounded-2xl flex items-center justify-between px-6 bg-transparent 
             hover:bg-[#1B1B1B]  transition duration-500 ease-in-out"
  onClick={handleResume}
>
  <FontAwesomeIcon icon={faFile} className="text-white text-2xl md:text-3xl" />
  <span className="text-white text-lg md:text-2xl">Resume</span>
  <FontAwesomeIcon 
    icon={faArrowRight} 
    className="text-2xl md:text-3xl text-orange-400 transition-transform duration-300 group-hover:translate-x-2 rotate-330" 
  />
</button>

    </div>
  );
};
