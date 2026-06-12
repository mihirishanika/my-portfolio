import React from 'react';
import '../styles/Hero.css';
import profileImage from '../images/slt.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left side - Text content */}
        <div className="hero-content">
          <div className="role">
            Intern DevOps Engineer at<br/> Sri Lanka Telecom (02 DEC 2025 - 01 MAR 2026)
          </div>
          <h1 className="title2">Rocky Linux Virtual Machine, GitHub Actions, Jenkins</h1>
          <p className="subtitle">
            As a DevOps Engineer Intern at Sri Lanka Telecom in Colombo, 
            I worked on deploying and managing production-grade web applications, 
            including ASP.NET Core MVC and MERN stack systems, on Rocky Linux virtual machines 
            hosted in a Proxmox Virtual Environment. I was responsible for setting up and 
            maintaining Microsoft SQL Server and MySQL databases in Linux environments.
            I configured Nginx as a reverse proxy and managed application services using systemd 
            to maintain high availability and smooth service operation. 
          </p><p className="subtitle">
            In addition, I implemented firewall and NAT rules to securely expose services to 
            external networks while maintaining system security. I also contributed to 
            building CI/CD pipelines using GitHub Actions and Jenkins to automate the build, 
            testing, and deployment lifecycle, improving deployment efficiency and consistency 
            across environments.
          </p>
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
