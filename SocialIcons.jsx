// components/SocialIcons.jsx
import React from 'react';
// Removed unused Link import
import { Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react';
import '../styles/SocialIcons.css';

const SocialIcons = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      </div>

      {/* Back to Top button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
        <span>Back to Top</span>
      </button>
    </div>
  );
};

export default SocialIcons;