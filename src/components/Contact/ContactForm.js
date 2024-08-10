import React, { useState } from 'react';

const ContactForm = () => {
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
        <section className="bg-black">
            <div className="py-28 lg:py-16 px-4 mx-auto max-w-screen-md">
                <p className="mb-8 lg:mb-8 font-light text-center text-white sm:text-xl">
                    Have questions or want to work together? Get in touch using the form below!
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="text-white shadow-sm bg-gray-900 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="text-white shadow-sm bg-gray-900 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Let me know how I can help you"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="text-white shadow-sm bg-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="rounded px-6 py-2 font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_black] 
                                                        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-white"
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
