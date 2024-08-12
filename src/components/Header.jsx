import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-section icon">
        <img src="/icons/favicon.gif" alt="Butterfly GIF Icon" />
      </div>
      <div className="header-section name">
        <h1>Your Name</h1>
      </div>
      <div className="header-section navigation">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
