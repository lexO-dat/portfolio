import React from 'react';

const About = () => {
    return (
        <>
            <div className='bg-black flex flex-col items-center justify-center text-white h-screen'>
                <h1 className='text-4xl mb-10'>About Me</h1>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-wrap lg:gap-4'>
                    <p className='w-72 lg:w-[30%] lg:ml-16'>
                        I am a computer science student specializing in AI applications with hands-on experience in multi-agent systems, 
                        LLM fine-tuning, NLP, and RAG implementations. I have experience developing hierarchical ML architectures and 
                        software-hardware integrations.
                    </p>
                    <p className='w-72 mt-8 lg:w-[30%] lg:mt-0'>
                        Active competitor in IEEE Xtreme and hackathons, demonstrating problem-solving and collaborative skills. 
                        Seeking to advance AI-driven software development with real-world impact while continuously expanding my 
                        technical expertise.
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default About;