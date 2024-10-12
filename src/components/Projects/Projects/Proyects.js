import react from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import {Cards} from '../FeaturedProjects/Cards';

const ProjectsPage = () => {
    return (
        <section className="h-scren bg-black">
          <div className="lg:ml-20 mt-14 lg:mt-20 flex flex-col items-center overflow-hidden z-10 mb-28">
            <div> 
                <h1 className={`text-2xl lg:text-3xl font-bold text-center lg:mb-10 mb-2 lg:mr-16 text-white`}>Proyects and Experiments</h1>
            </div>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
              {cards.map((card) => {
                return <Cards card={card} key={card.id} />;
              })}
            </div>
          </div>
        </section>
      );
}

export default ProjectsPage;

//data for the cards
const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: " SLML ",
      description: "The SLML project aims to develop an efficient and accessible device for sign language recognition, taking advantage of Raspberry Pi and ESP32-CAM capabilities, using TensorFlow for …",
      skills: ["Python", "TensorFlow", "OpenCv", "C++"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/SLML",
      id: 1,
    },
    {
      url: "/imgs/abstract/1.jpg",
      title: " AV_INNOVATE 2024 ",
      description: "machine learning music recommender system api for a ticket selling platform made in python ",
      skills: ["Python", "Golang", "Docker"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/AV_Innovate",
      id: 2,
    },
    {
      url: "/imgs/abstract/1.jpg",
      title: " S.O. process playground ",
      description: "This project is intended to make a system that renders the hierarchy tree between processes and shows graphically everything related to processes / threads for people... ",
      skills: ["C++", "Docker"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/playground-so",
      id: 3,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "Go-Email-Sender ",
      description: "This project offers a Go script for sending emails via SMTP, focusing on Gmail. It's easy to use and allows sending HTML emails with attachments.",
      skills: ["Go"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/Go-Email-Sender",
      id: 4,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "pixelate post processing app",
      description: "This python repo implements an image pixelation effect simulating an old screen effect using the PIL library and NumPy.",
      skills: ["Python"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/pixelated_transform",
      id: 5,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: " weather-app ",
      description: "a weather application made with react native to test al the basic stuff of this framework.",
      skills: ["JavaScript", "React"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/weather-app",
      id: 6,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: " React-Chat ",
      description: "a chat made with react and socket.io.",
      skills: ["JavaScript", "React", "NodeJS"],
      demo: "no",
      info: "no",
      demoUrl: "https://github.com/lexO-dat/React-Chat",
      id: 7,
    },
  ];
