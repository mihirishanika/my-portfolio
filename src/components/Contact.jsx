import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import SocialIcons from './SocialIcons';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_igep65c', 'template_yvte0t9', form.current, 'sz51dtSQ9cpbgM6l0')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent!');
          form.current.reset(); // Optional: clears the form
      }, (error) => {
          console.error('Email sending error:', error.text);
          alert('An error occurred. Try again later.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      <div className="section-title contact-title">
        <h2>Contact</h2>
        <div className="section-title-line"></div>
      </div>

      <div className="contact-container">
        <form className="form" ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" id="name" className="form-input" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-input" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" id="message" className="form-textarea" placeholder="Enter your message" required></textarea>
          </div>

          <button type="submit" className="btn-primary">Send</button>
        </form>

        <SocialIcons />
      </div>
    </section>
  );
};

export default Contact;
