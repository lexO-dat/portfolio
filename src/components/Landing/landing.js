import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-white lg:mt-20">Lucas Abello</h1>
      <p className="text-center text-sm mt-4 max-w-md">
        Computer Engineering student with a passion for technology and programming. Enthusiast in software development and artificial intelligence.
      </p>
      <div className="flex space-x-6 mt-6">
        <a href="https://www.linkedin.com/in/lucasabello/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-800 transition duration-300">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/lexO-dat" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-800 transition duration-300">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="mt-40 bottom-8 text-center">
        <p className="hidden lg:block text-sm">Scroll down</p>
        <p className="lg:hidden text-sm">Swipe down</p>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faChevronDown} className="text-white text-2xl mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
