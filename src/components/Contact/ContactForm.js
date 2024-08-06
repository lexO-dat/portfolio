import React from 'react';


const ContactForm = () => {
    return (
        <section claclassNamess="bg-black">
            <div className="py-20 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Have questions or want to work together? Get in touch using the form below!</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" id="email" className="text-white shadow-sm bg-gray-900 border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@mail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-white ">Subject</label>
                        <input type="text" id="subject" className="text-white shadow-sm bg-gray-900 border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Let me know how i can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-white ">Your message</label>
                        <textarea id="message" rows="6" className="text-white shadow-sm bg-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className='flex items-center justify-center'> 
                        <button type="submit" className="rounded px-6 py-2 font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_black] 
                                                        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;