import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Install react-icons if you haven't already

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
    </footer>
  );
};

export default Footer;
