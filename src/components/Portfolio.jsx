import React from 'react';
import Project from './Project';
import '../styles/portfolio.css';

// Import your project images
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
// import project3 from '../assets/images/project3.png';
// import project4 from '../assets/images/project4.png';
// import project5 from '../assets/images/project5.png';
// import project6 from '../assets/images/project6.png';

const projects = [
  {
    title: 'Note Taker',
    image: project1,
    deployedLink: 'https://note-taker-m8lk.onrender.com',
    repoLink: 'https://github.com/aiyanascar/note-taker',
  },
  {
    title: 'Task Board',
    image: project2,
    deployedLink: 'https://aiyanascar.github.io/task-board/',
    repoLink: 'https://github.com/aiyanascar/task-board',
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
