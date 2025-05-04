// components/Contact.jsx
import React from 'react';
import SocialIcons from './SocialIcons';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      <div className="section-title contact-title">
        <h2>Contact</h2>
        <div className="section-title-line"></div>
      </div>
      
      <div className="contact-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-textarea" placeholder="Enter your message"></textarea>
          </div>
          
          <button type="submit" className="btn-primary">Send</button>
        </form>
        
        <SocialIcons />
      </div>
    </section>
  );
};

export default Contact;

