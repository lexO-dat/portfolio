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
    maxLength = 100;
  } else {
    maxLength = 200;
  }

  return (
    <div>
      <div className="flex bg-black" key={card.id}>
        <div>
          <div className="p-3 mt-10 w-full grid grid-cols-1 cursor-default select-none rounded border-white border-2 shadow-lg flex flex-col justify-between">
            <div className="font-semibold text-lg sm:text-xl mb-2 ml-2 flex justify-center items-center text-white">
              {card.title}
            </div>
            <div className="my-1 mr-1">
              <p className="text-white text-sm flex items-center justify-center">
                {truncateDescription(card.description, maxLength)}
              </p>
            </div>
            <div className="flex items-center justify-center mb-2">
            <a 
              href={card.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 lg:px-5 font-medium bg-black text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white"
            >
              Code
            </a>
            </div>
            <div>
              <div className="flex flex-row space-x-2 justify-center">
                {card.skills?.map((skill) => {
                  const IconComponent = skillIcons[skill];
                  return IconComponent ? (
                    <IconComponent key={skill} className="text-lg sm:text-xl lg:text-2xl lg:mt-1 text-white" />
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
