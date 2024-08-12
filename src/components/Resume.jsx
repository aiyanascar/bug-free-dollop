import React from 'react';
import './resume.css';
import resumePDF from '../assets/resume.pdf'; 

const proficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  // Add more proficiencies as needed
];

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my <a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a>
      </p>
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
