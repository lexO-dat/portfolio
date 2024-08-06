import react from 'react';

const About = () => {
    return (
        <>
            <div className='bg-black flex flex-col items-center justify-center text-white h-screen'>
                <h1 className='text-4xl mb-10'>About Me</h1>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-wrap lg:gap-4'>
                    <p className='w-72 lg:w-[30%] lg:ml-16'>I am a computer engineering student with a passion for technology since my childhood. I have actively participated in numerous competitive programming events, such as Ieeextreme, Python Generative AI Hackathon and the ICPC and the AV Innovate demonstrating a satisfactory performance both as a team player and as an individual.</p>
                    <p className='w-72 mt-8 lg:w-[30%] lg:mt-0'>I have worked on personal projects as a backend developer. However, my main interest lies in expanding my skills in software development and cybersecurity.</p>
                </div>
            </div>
        </>
    );
}
 
export default About;