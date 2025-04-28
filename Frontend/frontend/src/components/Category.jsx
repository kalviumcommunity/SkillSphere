import React from 'react';
import './PopularCategories.css';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';

const PopularCategory = () => {
  const categories = [
    { title: 'Engage your community', subtitle: 'Content Writing', imageUrl: image1 },
    { title: 'Boost your traffic', subtitle: 'SEO', imageUrl: image3 },
    { title: 'Build your site', subtitle: 'Website Development', imageUrl: image2 },
    { title: 'Elevate your brand', subtitle: 'Logo Design', imageUrl: image6 },
    { title: 'Tell your story', subtitle: 'Voice-over', imageUrl: image5 },
    { title: 'Picture your idea', subtitle: 'Illustration & Drawing', imageUrl: image4 },
  ];
  return (
    <div className='popular-cat'>
      <div className='popular-cat-header'>
        <h2>Most Popular Categories </h2>
        <div className='carousel-contrals'>
          <button className="prev-button">&larr;</button>
          <button className="next-button">&rarr;</button>
        </div>
      </div>
      <div className="popular-categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-image">
              <img src={category.imageUrl} alt={category.subtitle} />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="all-categories-link">
        <a href="#">All Categories &rarr;</a>
      </div>
    </div>
  );
};

export default PopularCategory;