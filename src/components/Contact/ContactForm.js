import React, { useState } from 'react';

const ContactForm = ({ isFullScreen = false }) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(null);
        setError(null);
    
        const data = {
            mail: email,
            subject: subject,
            body: message,
        };
    
        try {
            const response = await fetch('https://mail-sender-api.up.railway.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const responseData = await response.text(); // Obtener el cuerpo de la respuesta como texto
    
            if (response.ok) {
                setSuccess('Your message has been sent successfully!');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                console.error(`Failed to send message: ${response.status} - ${responseData}`);
                throw new Error(`Failed to send message: ${response.status} - ${responseData}`);
            }
        } catch (error) {
            console.error(error);
            setError('There was a problem sending your message.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className={`bg-black ${isFullScreen ? 'min-h-screen flex items-center justify-center' : ''}`}>
            <div className={`${isFullScreen ? 'mx-auto max-w-screen-md px-4' : 'py-28 lg:py-28 px-4 mx-auto max-w-screen-md'}`}>
                <p className="mb-8 lg:mb-8 font-light text-center text-white text-lg sm:text-xl">
                    Have questions or want to work together? Get in touch using the form below!
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Your email
                        </label>                        <input
                            type="email"
                            id="email"
                            className="text-white shadow-sm bg-gray-900 border border-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                            Subject
                        </label>                        <input
                            type="text"
                            id="subject"
                            className="text-white shadow-sm bg-gray-900 border border-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400"
                            placeholder="Let me know how I can help you"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                            Your message
                        </label>                        <textarea
                            id="message"
                            rows="6"
                            className="text-white shadow-sm bg-gray-900 border border-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 resize-vertical"
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">                        <button
                            type="submit"
                            className="w-full sm:w-auto rounded px-8 py-3 font-medium bg-black text-white transition-all shadow-[3px_3px_0px_white] 
                                                        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white
                                                        active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
                                                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_white]
                                                        disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    {success && <p className="text-green-500 text-center mt-4">{success}</p>}
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
