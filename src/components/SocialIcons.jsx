// components/SocialIcons.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin,Facebook, Mail, Phone } from 'lucide-react';
import '../styles/SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div className="icons">
        <a href="https://github.com/mihirishanika" target="_blank" rel="noopener noreferrer" className="icon">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/mihirishanika" target="_blank" rel="noopener noreferrer" className="icon">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/share/14E8dVWud5J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="icon">
          <Facebook size={24} />
        </a>
        <a href="mailto:mihirishanika57@gmail.com" className="icon">
          <Mail size={24} />
        </a>
        <a href="tel:+94760915119" className="icon">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;