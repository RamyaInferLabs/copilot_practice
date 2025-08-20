import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
