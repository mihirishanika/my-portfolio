// components/Projects.jsx
import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Embedded Public Transport Payment System",
      description: "This project is an Embedded System for Public Transportation (Train) Payments, developed as part of a university project. It combines hardware and software to create a modern, efficient railway ticketing solution for Sri Lanka, allowing passengers to use RFID cards for seamless journey logging and automated monthly billing.",
      imageUrl: require("../images/rail_go.jpg"),
      link: "https://github.com/oshadapramod/SmartRailwayPayment.git"
    },
    {
      id: 2,
      title: "Building an Image Caption Generator using CNN-LSTM from Scratch ",
      description: "This project implements an Image Captioning System using deep learning, where a model generates human-like descriptions for input images. (The system combines:CNN (InceptionV3) for image feature extraction and LSTM-based sequence model for caption generation.)",
      imageUrl: require("../images/deep_learning.jpg"),
      link: "https://github.com/mihirishanika/Building-an-Image-Caption-Generator-using-CNN-LSTM-from-Scratch-_DeepLearningProject.git"
    },
    {
      id: 3,
      title: "Page Replacement Algorithms",
      description: "This Java GUI application simulates and compares four popular Page Replacement Algorithms:FIFO, LRU, LFU, and MFU. It helps users understand how different algorithms perform in terms of page faults for a given reference string and frame size.",
      imageUrl: require("../images/cpu_scheduling.png"),
      link: "https://github.com/mihirishanika/Page-Replacement-Algorithms.git"
    },
    {
      id: 4,
      title: "Fully Functional Login and Signup Pages",
      description: "SecureConnect is a secure and user-friendly authentication system designed for robust login and signup functionality. It ensures strong validation, secure authentication, and seamless user experience using a fully integrated frontend, backend, and database system.",
      imageUrl: require("../images/login_signup.jpg"),
      link: "https://github.com/mihirishanika/SpiritX_CripticHackers_01.git"
    },
    {
      id: 5,
      title: "3D Coin Collecting Game",
      description: "A simple 3D game built in Unity where the player moves forward automatically, collects coins, avoids barriers and survives as long as possible.",
      imageUrl: require("../images/coin_collecting.png"),
      link: "https://github.com/mihirishanika/coin-collecting-3D-game.git"
    },
    {
      id: 6,
      title: "Blockchain-Based Electronic Voting System",
      description: "This project proposes a secure, transparent, and scalable Blockchain-Based Electronic Voting System. It addresses the security, scalability, and trust issues found in traditional electronic voting systems by leveraging blockchain technologies such as Hybrid Blockchain Architecture, NFT-based Voter Authentication, Sharding, and Zero-Knowledge Rollups.",
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
    </section>
  );
};

export default Projects;
