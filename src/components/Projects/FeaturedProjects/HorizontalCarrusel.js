import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Cards } from "./Cards";
import { Link, useLocation } from 'react-router-dom';

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    let start, end;
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    if (isMobile) {
      start = "40%";
      end = "-40%"
    } else {
      start = "18%";
      end = "-23%"
    }

    const x = useTransform(scrollYProgress, [0, 1], [start, end]);

    return (
      <section ref={targetRef} className="h-[300vh] bg-black">
        <div className="lg:ml-20 sticky top-0 flex flex-col items-center overflow-hidden z-10">
          <div> 
              <h1 className={`text-2xl lg:text-3xl font-bold text-center ${isMobile ? 'mt-16' : 'mt-20'} lg:mb-10 mb-5 lg:mr-16 text-white`}>Featured Projects:</h1>
          </div>
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Cards card={card} key={card.id} />;
            })}
          </motion.div>
          <div className="bg-white flex items-center justify-center mt-16 lg:mr-20 mb-10">
            <Link to="/projects">
              <button className="px-4 py-2 font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_black] 
                                 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white">
                  See all my projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
};
  
//data for the cards
const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: " SLML ",
    description: "El proyecto SLML busca desarrollar un dispositivo eficiente y accesible para el reconocimiento de lengua de señas, aprovechando la capacidad de Raspberry Pi y ESP32-CAM, utilizando TensorFlow para …",
    skills: ["Python", "TensorFlow", "OpenCv", "C++"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/SLML",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "pixelate pp app",
    description: "Este repo hecho en python implementa un efecto de pixelación de imágenes simulando un efecto de pantalla antigua usando la biblioteca PIL y NumPy.",
    skills: ["Python"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/pixelated_transform",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: " proyecto db ",
    description: "Proyecto de base de datos de un twitter de alienigenas con todo el backend realizado.",
    skills: ["PostgreSQL", "NodeJS"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/proyecto_db",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: " weather-app ",
    description: "a weather application made with react native to test al the basic stuff of this framework.",
    skills: ["JavaScript", "React"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/weather-app",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: " React-Chat ",
    description: "a simple chat made with react and socket.io.",
    skills: ["JavaScript", "React", "NodeJS"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/React-Chat",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Go-Email-Sender ",
    description: "This project offers a Go script for sending emails via SMTP, focusing on Gmail. It's easy to use and allows sending HTML emails with attachments.",
    skills: ["Go"],
    demo: "no",
    info: "no",
    demoUrl: "https://github.com/lexO-dat/Go-Email-Sender",
    id: 6,
  },
];