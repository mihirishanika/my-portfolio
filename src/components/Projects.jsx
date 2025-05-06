import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Embedded Public Transport Payment System",
      description: "This project is an Embedded System for Public Transportation (Train) Payments...",
      imageUrl: require("../images/rail_go.jpg"),
      link: "https://github.com/oshadapramod/SmartRailwayPayment.git"
    },
    {
      id: 2,
      title: "Building an Image Caption Generator using CNN-LSTM from Scratch",
      description: "This project implements an Image Captioning System using deep learning...",
      imageUrl: require("../images/deep_learning.jpg"),
      link: "https://github.com/mihirishanika/Building-an-Image-Caption-Generator-using-CNN-LSTM-from-Scratch-_DeepLearningProject.git"
    },
    {
      id: 3,
      title: "Page Replacement Algorithms",
      description: "This Java GUI application simulates and compares four popular Page Replacement Algorithms...",
      imageUrl: require("../images/cpu_scheduling.png"),
      link: "https://github.com/mihirishanika/Page-Replacement-Algorithms.git"
    },
    {
      id: 4,
      title: "Fully Functional Login and Signup Pages",
      description: "SecureConnect is a secure and user-friendly authentication system...",
      imageUrl: require("../images/login_signup.jpg"),
      link: "https://github.com/mihirishanika/SpiritX_CripticHackers_01.git"
    }
  ];

  const ongoingProjects = [
    {
      id: 5,
      title: "3D Coin Collecting Game",
      description: "A simple 3D game built in Unity where the player moves forward automatically...",
      imageUrl: require("../images/coin_collecting.png"),
      link: "https://github.com/mihirishanika/coin-collecting-3D-game.git"
    },
    {
      id: 6,
      title: "Blockchain-Based Electronic Voting System",
      description: "This project proposes a secure, transparent, and scalable Blockchain-Based Electronic Voting System...",
      imageUrl: require("../images/e_voting.png"),
      link: "https://github.com/mihirishanika/blockchain-based-E-voting-system.gits"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="section-title-line"></div>
      </div>

      <h3 className="projects-subtitle">✅ Completed Projects</h3>
      {projectsData.map((project, index) => (
        <Project 
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          reverse={index % 2 !== 0}
        />
      ))}

      <h3 className="projects-subtitle">🚧 Ongoing Projects</h3>
      {ongoingProjects.map((project, index) => (
        <Project 
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default Projects;
