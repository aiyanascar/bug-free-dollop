import React from 'react';
import Navigation from './Navigation';
import './header.css';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <div className="header-section icon">
        <img src="/icons/favicon.gif" alt="Butterfly GIF Icon" />
      </div>
      <div className="header-section name">
        <h1>Your Name</h1>
      </div>
      <div className="header-section navigation">
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
    </header>
  );
};

export default Header;
