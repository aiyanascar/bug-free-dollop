import React from 'react';
import './aboutme.css';
import avatar from '../assets/images/avatar.jpg'; // Make sure to place your image in this path

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={avatar} alt="Your Name" className="avatar" />
        <p>
          {/* Your bio goes here */}
          Hello! I'm [Your Name], a passionate web developer with a knack for creating engaging user experiences. With expertise in React, JavaScript, and responsive design, I strive to build applications that are both functional and aesthetically pleasing.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
