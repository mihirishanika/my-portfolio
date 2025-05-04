// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/" className="nav-item active">Home</Link>
        <Link to="#projects" className="nav-item">Projects</Link>
        <Link to="#contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;