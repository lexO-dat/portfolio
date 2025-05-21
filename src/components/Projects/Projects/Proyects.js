<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { Cards } from '../FeaturedProjects/Cards';
import { fetchGitHubProjects } from '../../../utils/projectData';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                const fetchedProjects = await fetchGitHubProjects('lexO-dat');
                setProjects(fetchedProjects);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProjects([]); // Clear projects on error
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, []); // Empty dependency array to run once on mount

    return (
        <section className="h-auto min-h-screen bg-black pt-14 lg:pt-20 pb-28"> {/* Adjusted for dynamic content height */}
          <div className="lg:ml-20 flex flex-col items-center overflow-hidden z-10">
            <div> 
                <h1 className={`text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 lg:mr-16 text-white`}>Projects and Experiments</h1>
            </div>
            {loading && <p className="text-white text-center text-xl">Loading projects...</p>}
            {error && <p className="text-red-500 text-center text-xl">Error: {error}</p>}
            {!loading && !error && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 w-full max-w-6xl'> {/* Ensure grid takes available width */}
                  {projects.map((project) => {
                    return <Cards card={project} key={project.id} />;
                  })}
                </div>
            )}
            {!loading && !error && projects.length === 0 && (
                <p className="text-white text-center text-xl">No projects found.</p>
            )}
          </div>
        </section>
      );
}

export default ProjectsPage;
>>>>>>> 0f00e43449205402057ac834c82a4d033fea1cb6
