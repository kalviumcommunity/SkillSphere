import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/15.avif'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="freelancers-label">Freelancers</p>
        <h1 className="hero-title">Embrace the freelance revolution</h1>
        <p className="hero-description">
          There's never been a better time to take yourself online and start
          making money from your very own fine-tuned set of skills.
          <br />
          <br />
          Work wherever suits you, choose full-time, part-time or flexi-time. On
          PeoplePerHour you remain in control of everything — including your
          price.
        </p>
        <button className="join-button">JOIN AS A FREELANCER</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Freelancer working" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;