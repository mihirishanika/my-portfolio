import React from 'react';
import '../styles/Hero.css';
import profileImage from '../images/propic.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left side - Text content */}
        <div className="hero-content">
          <div className="role">
            Computer Engineering Undergraduate at<br/> University of Jaffna
          </div>
          <h1 className="title">Hello, I'm Mihiri Shanika</h1>
          <p className="subtitle">
          I'm an enthusiastic and driven undergraduate currently pursuing a 
          BSc. Engineering (Hons) degree in Computer Engineering at the Faculty of Engineering, 
          University of Jaffna. Originally from Ratnapura, I completed my secondary education 
          at Gamini Central College, specializing in the Physical Science stream for my Advanced Level studies.
          </p><p className="subtitle">
          My interests lie at the intersection of cutting-edge technologies such as DevOps, Cloud Compuring, Blockchain, 
          Artificial Intelligence (AI), Machine Learning (ML) and Software Development. 
          I am passionate about developing innovative solutions and continuously seek opportunities 
          to expand my knowledge and skill set.Beyond academics, I actively volunteer with IEEE, 
          where I collaborate with peers on impactful, tech-driven initiatives. 
          </p><p className="subtitle">
          Outside of my technical pursuits, I enjoy gaming, traveling, watching TV series and reading novels.
          I’m always eager to embrace new challenges, explore emerging technologies 
          and contribute to meaningful projects that make a real-world impact.
          </p>

          <div className="social-icons_">
            <a
              href="https://github.com/mihirishanika"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/mihirishanika"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="hero-image-container">
          <div className="image-frame">
            <img src={profileImage} alt="Mihiri Shanika" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
