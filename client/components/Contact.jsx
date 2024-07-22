import React from 'react';
import SayHello from '../components/Sayhello';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <div className="contact1">
          <div className="sayHello9 text-gradient-contact">
            say hello
          </div>
          <div className="text-gradient-contact-body-9">
          Let's collaborate. Feel free to drop me a line about your project or follow me on social networks
          </div>
      </div>
      <ContactForm/>
      
    </>
  )
}

export default Contact
