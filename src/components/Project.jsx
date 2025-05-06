// components/Project.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

const Project = ({ title, description, imageUrl, link, reverse }) => {
  return (
    <div className={`project ${reverse ? 'reverse' : ''}`}>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <Link to={link} className="project-button">View Project</Link>
      </div>
      <img src={imageUrl} alt={title} className="project-image" />
    </div>
  );
};

export default Project;