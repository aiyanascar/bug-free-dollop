import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">About Me</li>
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
