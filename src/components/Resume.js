import React from 'react';
import IconSideNav from './Navbar/Navbar';

const Resume = () => {    const handleDownloadPDF = () => {
        // Method 1: Direct download using anchor element
        const link = document.createElement('a');
        link.href = '/cv_Lucas_Abello.pdf';
        link.download = 'Lucas_Abello_Resume.pdf';
        link.target = '_blank'; // Opens in new tab as fallback
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };    return (
        <div className="bg-black min-h-screen">
            <IconSideNav />
            <div className='bg-black min-h-screen pt-5 pb-16 lg:pl-20'>
                <div className='max-w-4xl mx-auto px-6 lg:px-8'>
                    {/* Header Section */}
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl lg:text-5xl font-bold text-white mb-4'>LUCAS ABELLO</h1>
                        <p className='text-lg text-gray-300 mb-4'>Computer Science Student | AI & Software Engineering Enthusiast</p>
                        <div className='text-sm text-gray-400 flex flex-wrap justify-center gap-2 lg:gap-4'>
                            <span>+56973756474</span>
                            <span>•</span>
                            <a href="mailto:lucas.abello@mail.udp.cl" className='text-blue-400 hover:text-blue-300'>lucas.abello@mail.udp.cl</a>
                            <span>•</span>
                            <a href="https://www.linkedin.com/in/lucasabello/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>LinkedIn: lucasabello</a>
                            <span>•</span>
                            <a href="https://github.com/lexO-dat" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>GitHub: lexO-dat</a>
                        </div>
                    </div>

                    {/* About Me Section */}
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2'>About Me</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            I am a computer science student specializing in AI applications with hands-on experience in multi-agent systems, 
                            LLM fine-tuning, NLP, and RAG implementations. I have experience developing hierarchical ML architectures and 
                            software-hardware integrations. Active competitor in IEEE Xtreme and hackathons, demonstrating problem-solving 
                            and collaborative skills. Seeking to advance AI-driven software development with real-world impact while 
                            continuously expanding my technical expertise.
                        </p>
                    </section>

                    {/* Projects Section */}
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-2'>Projects</h2>
                        
                        {/* Project 1: pparser */}
                        <div className='mb-6 p-6 bg-gray-900 rounded-lg border border-gray-700'>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3'>
                                <h3 className='text-xl font-semibold text-white'>pparser</h3>
                                <div className='text-sm text-gray-400 mt-1 lg:mt-0'>
                                    <a href="https://github.com/lexO-dat/pparser" target="_blank" rel="noopener noreferrer" 
                                       className='text-blue-400 hover:text-blue-300 mr-4'>
                                        github.com/pparser
                                    </a>
                                    <span>Present</span>
                                </div>
                            </div>
                            <p className='text-gray-300 italic mb-3'>
                                Multi-agent PDF-to-Markdown conversion system that transforms documents into LLM ready formats for RAG systems and other applications.
                            </p>
                            <ul className='text-gray-300 space-y-2'>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Used langGraph for development of the LLM system and created 7 different agents that work alongside to accomplish the task.
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Created the system as a Python package to easily import it and use it on any python code or even from the terminal.
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    <span><strong>Technologies used:</strong> Python, LangGraph and LLMs.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Project 2: CELLM */}
                        <div className='mb-6 p-6 bg-gray-900 rounded-lg border border-gray-700'>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3'>
                                <h3 className='text-xl font-semibold text-white'>CELLM</h3>
                                <div className='text-sm text-gray-400 mt-1 lg:mt-0'>
                                    <a href="https://github.com/lexO-dat/CELLM" target="_blank" rel="noopener noreferrer" 
                                       className='text-blue-400 hover:text-blue-300 mr-4'>
                                        github.com/CELLM
                                    </a>
                                    <span>2024-2025</span>
                                </div>
                            </div>
                            <p className='text-gray-300 italic mb-3'>
                                Developed an automated genetic circuit design system during my first research internship that generates biological circuits based on logical descriptions provided by the user.
                            </p>
                            <ul className='text-gray-300 space-y-2'>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Developed a multi-agent system for automated genetic circuit construction
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Fine-tuned LLM agents to analyze and synthesize biological circuits
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Implemented RAG (Retrieval-Augmented Generation) system to extract biological components, accelerating configuration file selection
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Built Golang CLI integration for the pipeline execution
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    <span><strong>Technologies used:</strong> Python, Golang</span>
                                </li>
                            </ul>
                        </div>

                        {/* Project 3: Deaf-PI */}
                        <div className='mb-6 p-6 bg-gray-900 rounded-lg border border-gray-700'>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3'>
                                <h3 className='text-xl font-semibold text-white'>Deaf-PI</h3>
                                <div className='text-sm text-gray-400 mt-1 lg:mt-0'>
                                    <a href="https://github.com/lexO-dat/SLML" target="_blank" rel="noopener noreferrer" 
                                       className='text-blue-400 hover:text-blue-300 mr-4'>
                                        github.com/SLML
                                    </a>
                                    <span>2024</span>
                                </div>
                            </div>
                            <p className='text-gray-300 italic mb-3'>
                                Sign language translation device
                            </p>
                            <ul className='text-gray-300 space-y-2'>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Developed hierarchical machine learning architecture with cluster-based sign detection: primary models identify sign clusters, followed by specialized models for precise sign recognition within each cluster
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Integrated custom API for seamless communication with Raspberry Pi hardware platform
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-400 mr-2'>•</span>
                                    Built custom ML models using Python, TensorFlow, and OpenCV for real-time image processing and sign detection
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2'>Education</h2>
                        <div className='p-6 bg-gray-900 rounded-lg border border-gray-700'>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                                <div>
                                    <h3 className='text-xl font-semibold text-white'>Universidad Diego Portales</h3>
                                    <p className='text-gray-300'>Civil Engineer in Computer Science and Telecommunications</p>
                                </div>
                                <div className='text-sm text-gray-400 mt-2 lg:mt-0'>
                                    <p>Santiago de Chile</p>
                                    <p>03/2022 - Present</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Languages Section */}
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2'>Languages</h2>
                        <div className='p-6 bg-gray-900 rounded-lg border border-gray-700'>
                            <div className='flex justify-between items-center'>
                                <span className='text-xl font-semibold text-white'>English</span>
                                <span className='text-gray-300'>B2</span>
                            </div>
                        </div>
                    </section>                    
                    {/* Download PDF Button */}
                    <div className='text-center mt-12'>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <button 
                                onClick={handleDownloadPDF}
                                className='px-4 sm:px-6 py-3 font-medium bg-black text-white transition-all shadow-[3px_3px_0px_white] 
                                           hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white hover:bg-white hover:text-black
                                           text-sm sm:text-base whitespace-nowrap'>
                                Download PDF Resume
                            </button>
                            <a 
                                href="/cv_Lucas_Abello.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='inline-block px-4 sm:px-6 py-3 font-medium bg-gray-800 text-white transition-all shadow-[3px_3px_0px_gray-600] 
                                           hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-gray-600 hover:bg-gray-600
                                           text-sm sm:text-base whitespace-nowrap invisible sm:visible'>
                                View PDF in Browser
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
