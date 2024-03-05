import React from 'react';
import ContactIcons from '../ContactIcon';
import contactData from '../contact.json'; // Import the JSON data

function Contact(props) {
  return (
    <>
      <section id="contact" className="contact bg-image" >
        <div className="container">
          <div className="boxstyle">
            <div className="text-center mt-5">
              <h5 className="title">Get in Touch</h5>
            </div>
            <div className="note">
              <p className="lead">
                Feel free to get in touch with me! Whether you have questions, feedback, or just want to say hello,
                I'd love to hear from you.
              </p>
            </div>
            <div className="social">
              <ContactIcons socialData={contactData} />
            </div>
          </div>
        </div>
      </section>
      
      <footer className="mb-5 text-center">
        <p> &copy; 2023 NY🌸All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;

