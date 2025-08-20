import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast APIs',
      description: 'RESTful and GraphQL APIs with sub-millisecond response times. Built-in caching, rate limiting, and real-time subscriptions out of the box.'
    },
    {
      icon: '🔧',
      title: 'Advanced Debugging',
      description: 'Intelligent error tracking with stack trace analysis, performance profiling, and automated issue detection across your entire application stack.'
    },
    {
      icon: '🚀',
      title: 'One-Click Deployment',
      description: 'Deploy to global CDN with automatic scaling, rollback capabilities, and zero-downtime deployments. Supports all major cloud providers.'
    }
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Everything you need to ship faster</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
