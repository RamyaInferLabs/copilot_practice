import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const companies = [
    'TechCorp',
    'StartupXYZ',
    'DevStudio',
    'CodeWorks',
    'InnovateLab'
  ];

  const stats = [
    {
      value: '50K+',
      label: 'Active Developers'
    },
    {
      value: '2M+',
      label: 'API Requests/Day'
    },
    {
      value: '99.9%',
      label: 'Uptime'
    }
  ];

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <h2 className="dashboard-title">
          Trusted by developers at leading companies
        </h2>
        
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-item">
              <span className="company-text">{company}</span>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
