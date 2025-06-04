import React from 'react';
import { useMediaQuery } from "react-responsive";

//skills icons
import { FaPython, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill, RiJavascriptFill, RiReactjsLine } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiTensorflow, SiOpencv, SiCplusplus } from 'react-icons/si';
import { TbBrandGolang } from "react-icons/tb";

/*
url for fetching github:
curl -s "https://api.github.com/users/lexO-dat/repos?sort=updated&direction=desc" -> gives all the repos
curl -s "https://api.github.com/repos/lexO-dat/leetcode_problems/languages" -> gives the languages used in the repo
*/

const skillIcons = {
  Python: FaPython,
  TensorFlow: SiTensorflow,
  OpenCv: SiOpencv,
  'C++': SiCplusplus,
  TailwindCSS: RiTailwindCssFill,
  JavaScript: RiJavascriptFill,
  React: RiReactjsLine,
  NodeJS: FaNodeJs,
  PostgreSQL: BiLogoPostgresql,
  Go: TbBrandGolang,
};

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + "...";
  }
  return description;
};

//card component
export const Cards = ({ card }) => {
  let maxLength = 0;
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
  if (isMobile) {
    maxLength = 120;
  } else {
    maxLength = 180;
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-black border-white border-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default select-none h-full flex flex-col">
        <div className="p-6 flex-grow flex flex-col">
          <div className="font-semibold text-xl mb-4 text-center text-white">
            {card.title}
          </div>
          
          <div className="flex-grow mb-4">
            <p className="text-white text-sm text-center leading-relaxed">
              {truncateDescription(card.description, maxLength)}
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <a 
              href={card.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 font-medium bg-black text-white transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white hover:bg-white hover:text-black"
            >
              View Code
            </a>
          </div>
          
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {card.skills?.map((skill) => {
              const IconComponent = skillIcons[skill];
              return IconComponent ? (
                <IconComponent 
                  key={skill} 
                  className="text-xl lg:text-2xl text-white hover:text-gray-300 transition-colors" 
                  title={skill}
                />
              ) : (
                <span 
                  key={skill} 
                  className="text-xs bg-white text-black px-2 py-1 rounded"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
