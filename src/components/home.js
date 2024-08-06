import React, { useState, useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import IconSideNav from './Navbar/Navbar';
import Landing from './Landing/landing';
import Projects from './Projects/FeaturedProjects/FeaturedProjects';
import ContactForm from './Contact/ContactForm';
import About from "./About/About";
import Hobbie from "./Hobbie/Hobbies";

const Home = () => {
    const [currentSection, setCurrentSection] = useState('landing');

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleClick = (section) => {
        setCurrentSection(section);
    };

    return (
        <div className="relative">
            <IconSideNav />
            <div className="fixed top-1/2 transform -translate-y-1/2 right-4 z-50 hidden-mobile">
                <ul>
                    <li className="my-2">
                        <Link 
                            to="landing" 
                            smooth={true} 
                            duration={500} 
                            className={`block w-3 h-3 rounded-full cursor-pointer ${currentSection === 'landing' ? 'bg-white scale-115' : 'bg-gray-800'}`}
                            onClick={() => handleClick('landing')}
                        ></Link>
                    </li>
                    <li className="my-2">
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            className={`block w-3 h-3 rounded-full cursor-pointer ${currentSection === 'about' ? 'bg-white scale-115' : 'bg-gray-800'}`}
                            onClick={() => handleClick('about')}
                        ></Link>
                    </li>
                    <li className="my-2">
                        <Link 
                            to="hobbies" 
                            smooth={true} 
                            duration={500} 
                            className={`block w-3 h-3 rounded-full cursor-pointer ${currentSection === 'hobbies' ? 'bg-white scale-115' : 'bg-gray-800'}`}
                            onClick={() => handleClick('hobbies')}
                        ></Link>
                    </li>
                    <li className="my-2">
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500} 
                            className={`block w-3 h-3 rounded-full cursor-pointer ${currentSection === 'projects' ? 'bg-white scale-115' : 'bg-gray-800'}`}
                            onClick={() => handleClick('projects')}
                        ></Link>
                    </li>
                    <li className="my-2">
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            className={`block w-3 h-3 rounded-full cursor-pointer ${currentSection === 'contact' ? 'bg-white scale-115' : 'bg-gray-800'}`}
                            onClick={() => handleClick('contact')}
                        ></Link>
                    </li>
                </ul>
            </div>
            <Element name="landing">
                <Landing />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="hobbies">
                <Hobbie />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <ContactForm />
            </Element>
        </div>
    );
}

export default Home;
