import React from 'react';
import '../styles/project.css';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
