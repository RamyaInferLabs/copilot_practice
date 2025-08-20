import React from 'react';
import './Hero.css';

const Hero = () => {
  const codeSnippet = `import { DevFlow } from '@devflow/api';

// Initialize API endpoint
const api = new DevFlow.API({
  name: 'users-api',
  auth: true
});

// Create a new user
api.post('/users', async (req, res) => {
  const user = await db.users.create(req.body);
  return res.json(user);
});

// Deploy with a single command
api.deploy();`;

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="code-preview">
          <div className="code-window">
            <div className="code-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
            </div>
            <pre className="code-content">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
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
    </div>
  );
};

export default Hero;
