import React from 'react';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
import Landingpage from './components/Landingpage'
import PopularCategory from './components/Category'
import ExpertFreelancers from './components/ExpertFreelancers'
import HeroSection from './components/HeroSection'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Landingpage/>
      <PopularCategory/>
      <ExpertFreelancers/>
      <HeroSection/>
      {/* <Footer /> */}
      
      
    </div>
  );
}

export default App;
