import React from 'react';
import IconSideNav from './Navbar/Navbar';
import ContactForm from './Contact/ContactForm';

const Contact = () => {
    return (
        <div className="bg-black min-h-screen">
            <IconSideNav />
            <div className="lg:pl-20">
                <ContactForm isFullScreen={true} />
            </div>
        </div>
    );
};

export default Contact;
