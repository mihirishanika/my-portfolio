import React from 'react';
import '../styles/Experiences.css';
import profileImage from '../images/slt.png';

const Experiences = () => {
  return (
    <>
      <div id="home" />
      <section id="experiences" className="experiences">
        <div className="section-title">
          <h2>Experiences</h2>
        </div>

        <div className="experiences-container">
          <div className="experiences-content">
            <h1 className="experiences-title">Intern DevOps Engineer at Sri Lanka Telecom</h1>
            <div className="experiences-role">
              <span>(02 DEC 2025 - 01 MAR 2026)</span>
              <span>Rocky Linux Virtual Machine, GitHub Actions, Jenkins</span>
            </div>
            <p className="experiences-text">
              As a DevOps Engineer Intern at Sri Lanka Telecom in Colombo, I worked on deploying and
              managing production-grade web applications, including ASP.NET Core MVC and MERN stack
              systems, on Rocky Linux virtual machines hosted in a Proxmox Virtual Environment. I was
              responsible for setting up and maintaining Microsoft SQL Server and MySQL databases in
              Linux environments. I configured Nginx as a reverse proxy and managed application
              services using systemd to maintain high availability and smooth service operation.
            </p>
            <p className="experiences-text">
              In addition, I implemented firewall and NAT rules to securely expose services to external
              networks while maintaining system security. I also contributed to building CI/CD pipelines
              using GitHub Actions and Jenkins to automate the build, testing, and deployment lifecycle,
              improving deployment efficiency and consistency across environments.
            </p>
          </div>

          <div className="experiences-image-container">
            <div className="experiences-image-frame">
              <img src={profileImage} alt="Mihiri Shanika" className="experiences-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
