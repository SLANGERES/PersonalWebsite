import React from 'react';
import cpp from '../assets/Svgs/cpp-svgrepo-com.svg';
import docker from '../assets/Svgs/docker-svgrepo-com.svg';
import reactnative from '../assets/Svgs/icons8-react-native.svg';
import nodejs from '../assets/Svgs/node-js-svgrepo-com.svg';
import postman from '../assets/Svgs/postman-icon-svgrepo-com.svg';
import tailwind from '../assets/Svgs/tailwind-svgrepo-com.svg';
import reactjs from '../assets/Svgs/reactjs-svgrepo-com.svg';
import langchain from '../assets/Svgs/langchain-seeklogo.svg';

const tools = [
  { name: 'C++', desc: 'Programming Language', icon: cpp },
  { name: 'Docker', desc: 'Containerization Tool', icon: docker },
  { name: 'ReactJs', desc: 'JavaScript library', icon: reactjs },
  { name: 'React Native', desc: 'Mobile app framework', icon: reactnative },
  { name: 'Postman', desc: 'API testing tool', icon: postman },
  { name: 'NodeJs', desc: 'JavaScript runtime', icon: nodejs },
  { name: 'Tailwind', desc: 'CSS utility framework', icon: tailwind },
  { name: 'Langchain', desc: 'Framework for LLM applications', icon: langchain },
];

export const Tools = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">PREMIUM</h1>
        <h1 className="text-emerald-800 font-bold text-4xl md:text-6xl lg:text-8xl">TOOLS</h1>
      </div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center">
              <img src={tool.icon} alt={tool.name} className="w-20 h-20" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-xl md:text-2xl font-semibold">{tool.name}</span>
              <span className="text-emerald-800 text-lg md:text-xl">{tool.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
