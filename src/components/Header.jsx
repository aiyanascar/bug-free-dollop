import React from 'react';
import '../styles/header.css';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <div className="header-section icon">
        <img src="/favicon.gif" alt="Butterfly GIF Icon" />
      </div>
      <div className="header-section name">
        <h1>AiyanaScar</h1>
      </div>
      <div className="header-section navigation">
        <ul>
          <li onClick={() => setCurrentSection('About Me')} className={currentSection === 'About Me' ? 'active' : ''}>
            About Me
          </li>
          <li onClick={() => setCurrentSection('Portfolio')} className={currentSection === 'Portfolio' ? 'active' : ''}>
            Portfolio
          </li>
          <li onClick={() => setCurrentSection('Contact')} className={currentSection === 'Contact' ? 'active' : ''}>
            Contact
          </li>
          <li onClick={() => setCurrentSection('Resume')} className={currentSection === 'Resume' ? 'active' : ''}>
            Resume
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
