import React from 'react';
import './ExpertFreelancers.css';
// Import your freelancer profile images here
import heroSeoProfile from '../assets/7.jpeg';
import robMProfile from '../assets/8.jpeg';
import simonHProfile from '../assets/9.jpeg';
import michelleNProfile from '../assets/11.jpg';
import logoDesignProfile from '../assets/12.jpg';

const ExpertFreelancers = () => {
  const freelancers = [
    {
      name: 'Hero SEO',
      title: 'SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed.',
      location: 'United Kingdom',
      rating: 4.9,
      reviews: 1172,
      tags: ['link building', 'google ranking'],
      projects: '1,823 projects',
      hourlyRate: '£75/hr',
      profileImage: heroSeoProfile,
    },
    {
      name: 'Rob M.',
      title: 'Graphic Designer, Illustrator and Motion Graphic Designer',
      location: 'United Kingdom',
      rating: 5.0,
      reviews: 151,
      tags: ['ad design', 'banner'],
      projects: '135 projects',
      hourlyRate: '£10/hr',
      profileImage: robMProfile,
    },
    {
      name: 'Simon H.',
      title: 'Travel Software Developer / Web Developer / Linux Admin / Python & Tcl/Tk for Mac/Windows & Linux',
      location: 'United Kingdom',
      rating: 5.0,
      reviews: 69,
      tags: ['ajax', 'html5'],
      projects: '52 projects',
      hourlyRate: '£45/hr',
      profileImage: simonHProfile,
    },
    {
      name: 'Michelle N.',
      title: 'Freelance article writer, blog writer, and SEO web content creation',
      location: 'United Kingdom',
      rating: 5.0,
      reviews: 507,
      tags: ['blog development'],
      projects: '506 projects',
      hourlyRate: '£20/hr',
      profileImage: michelleNProfile,
    },
    {
      name: 'M',
      title: 'Logo Design',
      location: 'United Kingdom',
      rating: 5.0,
      reviews: 2025,
      tags: ['adobe illustrator'],
      projects: '1,899 projects',
      hourlyRate: '£-', // Or the actual rate if available
      profileImage: logoDesignProfile,
    },
  ];

  return (
    <div className="expert-freelancers-section">
      <div className="expert-freelancers-header">
        <h2>Expert freelancers</h2>
        <p>Search and contact expert freelancers directly with no obligation</p>
        <div className="carousel-controls">
          <button className="prev-button">&larr;</button>
          <button className="next-button">&rarr;</button>
        </div>
      </div>
      <div className="freelancer-grid">
        {freelancers.map((freelancer, index) => (
          <div key={index} className="freelancer-card">
            <div className="profile-image">
              <img src={freelancer.profileImage} alt={freelancer.name} />
            </div>
            <h3>{freelancer.name}</h3>
            <p className="freelancer-title">{freelancer.title}</p>
            <p className="freelancer-location">
              <svg viewBox="0 0 24 24" fill="currentColor" className="location-icon">
                <path d="M12 4C9.23858 4 7 6.23858 7 9C7 12 12 22 12 22C12 22 17 12 17 9C17 6.23858 14.7614 4 12 4ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
              </svg>
              {freelancer.location}
            </p>
            <div className="freelancer-rating">
              <span className="rating">{freelancer.rating}</span>
              <span className="reviews">({freelancer.reviews})</span>
            </div>
            <ul className="freelancer-tags">
              {freelancer.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
            <div className="freelancer-stats">
              <p className="projects">{freelancer.projects}</p>
              <p className="hourly-rate">{freelancer.hourlyRate}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="all-freelancers-link">
        <a href="#">All freelancers &rarr;</a>
      </div>
    </div>
  );
};

export default ExpertFreelancers;