import react from 'react';

const Hobbie = () => {
    return (
        <>
            <div className='bg-black flex flex-col items-center justify-center text-white h-screen'>
                <h1 className='text-4xl mb-10'>Hobbies</h1>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-wrap lg:gap-4'>
                    <p className='w-72 lg:w-[30%] lg:ml-16'>One of my biggest hobbies since many years ago is music, I am a bass player in a band and I play guitar in my free time, I also like to do all kind of electronic circuits design of synthesizers to make music with them at some point. </p>
                    <p className='w-72 mt-8 lg:w-[30%] lg:mt-0'>Currently the hobby to which I dedicate more time is programming, I'm constantly watching videos, reading blogs or even reading books to improve my programming techniques and expand my knowledge in the areas that I like.</p>
                </div>
            </div>
        </>
    );
}
 
export default Hobbie;