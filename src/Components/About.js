import React from 'react';
import './About.css'; // Import your custom CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>Hi, I'm Saumya Srivastava</h2>
        <p>A Fullstack Developer with a passion for crafting web applications.</p>
        <p>I specialize in ReactJS and NodeJS</p>
      </div>
      <div className="about-image">
        {/* Insert your profile image here */}
        <img src="profile-image.jpg" alt="Saumya Srivastava" />
      </div>
    </div>
  );
};

export default About;
