// components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';
import heroImage from '../images/profile.jpg';
import heroBackgroundImage from '../images/profile.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  };

  return (
    <section className="hero">
      <div className="yellow-bg"></div>
      <div className="hero-image" style={heroStyle}></div>
      <div className="intro">
        <div className="role">Computer Engineering Undergraduate at University of Jaffna</div>
        <div className="content">
          <h1 className="title">Hello, my name is Mihiri Shanika</h1>
          <p className="subtitle">a strong passion for technology, including blockchain, 
            artificial intelligence (AI), and machine learning (ML). With a background in 
            software development and hands-on experience in both front-end and back-end technologies, 
            I thrive in collaborative environments and enjoy solving complex problems. 
            I am always eager to take on new challenges and contribute to innovative projects.</p>
          <div className="buttons">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;