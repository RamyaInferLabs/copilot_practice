import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Build faster and collaborate smarter with our developer tools
        </h1>
        <p className="hero-subtitle">
          Automate workflows, debug easily, and deploy seamlessly with our 
          comprehensive suite of developer-first solutions.
        </p>
        <div className="hero-buttons">
          <button className="start-building-btn">Start Building Now</button>
          <button className="view-demo-btn">View Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
