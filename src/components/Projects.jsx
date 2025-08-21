import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "DevOps Project using Jenkins & Docker on Ubuntu",
      description: "This project is a CI/CD pipeline that automates the process of building, testing and deploying applications...",
      imageUrl: require("../images/cicd.jpeg"),
      link: "https://www.linkedin.com/posts/mihirishanika_devops-cicd-docker-activity-7343904144006479873-LZBf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdpPCMBSpXMmmxuSHTZXZhhnFEGTWaLurU"
    },
    {
      id: 2,
      title: "DevOps capstone project",
      description: "This is the final project of IBM DevOps and Software Engineering Professional Certificate...",
      imageUrl: require("../images/capstone.png"),
      link: "https://github.com/mihirishanika/Building-an-Image-Caption-Generator-using-CNN-LSTM-from-Scratch-_DeepLearningProject.git"
    },
    {
      id: 3,
      title: "Embedded Public Transport Payment System",
      description: "This project is an Embedded System for Public Transportation (Train) Payments...",
      imageUrl: require("../images/rail_go.jpg"),
      link: "https://github.com/oshadapramod/SmartRailwayPayment.git"
    },
    {
      id: 4,
      title: "Building an Image Caption Generator using CNN-LSTM from Scratch",
      description: "This project implements an Image Captioning System using deep learning...",
      imageUrl: require("../images/deep_learning.jpg"),
      link: "https://github.com/mihirishanika/Building-an-Image-Caption-Generator-using-CNN-LSTM-from-Scratch-_DeepLearningProject.git"
    },
    {
      id: 5,
      title: "Page Replacement Algorithms",
      description: "This Java GUI application simulates and compares four popular Page Replacement Algorithms...",
      imageUrl: require("../images/cpu_scheduling.png"),
      link: "https://github.com/mihirishanika/Page-Replacement-Algorithms.git"
    },
    {
      id: 6,
      title: "Fully Functional Login and Signup Pages",
      description: "SecureConnect is a secure and user-friendly authentication system...",
      imageUrl: require("../images/login_signup.jpg"),
      link: "https://github.com/mihirishanika/SpiritX_CripticHackers_01.git"
    }
  ];

  const ongoingProjects = [
    {
      id: 7,
      title: "Blockchain-Based Electronic Voting System",
      description: "This project proposes a secure, transparent, and scalable Blockchain-Based Electronic Voting System...",
      imageUrl: require("../images/e_voting.png"),
      link: "https://github.com/mihirishanika/blockchain-based-E-voting-system.git"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="section-title-line"></div>
      </div>

      {/* Completed */}
      <h3 className="projects-subtitle">✅ Completed Projects</h3>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="overlay">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Ongoing */}
      <h3 className="projects-subtitle">🚧 Ongoing Projects</h3>
      <div className="projects-grid">
        {ongoingProjects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="overlay">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
