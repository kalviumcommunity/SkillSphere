import React from "react";
import "./Landingpage.css";
import backgroundvideo from "../assets/background.video.mp4";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="video-background-wrapper">
        <video
          src={backgroundvideo}
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        >
          <source src={backgroundvideo} type="video/mp4" />
        </video>
      </div>
      <div className="content-overlay">
        <div className="text-container">
          <h1 className="main-heading">
            Hire the best freelancers for any job, online.
          </h1>
          <ul className="features-list">
            <li>• World's largest freelance marketplace</li>
            <li>• Any job you can possibly think of</li>
            <li>• Save up to 90% & get quotes for free</li>
            <li>• Pay only when you're 100% happy</li>
          </ul>
        </div>
        <div className="buttons-container">
          <button className="primary-button">
            Hire a Freelancer
          </button>
          <button className="secondary-button">
            Earn Money Freelancing
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;