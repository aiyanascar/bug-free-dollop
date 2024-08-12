import React from 'react';
import '../styles/navigation.css';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="nav-list">
        {sections.map((section) => (
          <li
            key={section}
            className={`nav-item ${currentSection === section ? 'active' : ''}`}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
