import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Installation from '../components/Installation/Installation';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Features />
      <Installation />
    </div>
  );
};

export default HomePage;
