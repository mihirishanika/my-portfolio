// Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <a href="#home" className="nav-item">Home</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#certifications" className="nav-item">Certifications</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
