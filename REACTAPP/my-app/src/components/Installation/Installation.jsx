import React from 'react';
import './Installation.css';

const Installation = () => {
  const commands = [
    {
      comment: '# Install DevFlow CLI',
      command: 'npm install -g devflow-cli',
      highlight: ['npm', 'install', '-g', 'devflow-cli']
    },
    {
      comment: '# Initialize your project',
      command: 'devflow init my-awesome-app',
      highlight: ['devflow', 'init', 'my-awesome-app']
    },
    {
      comment: '# Deploy in seconds',
      command: 'devflow deploy --production',
      highlight: ['devflow', 'deploy', '--production']
    }
  ];

  const renderCommand = (commandObj) => {
    const parts = commandObj.command.split(' ');
    return (
      <>
        {commandObj.comment && (
          <div className="terminal-comment">{commandObj.comment}</div>
        )}
        <div className="terminal-command">
          {parts.map((part, index) => (
            <span
              key={index}
              className={commandObj.highlight.includes(part) ? 'highlight' : ''}
            >
              {part}{' '}
            </span>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="installation-section">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-icon">⌨</span>
          Terminal
        </div>
        <div className="terminal-body">
          {commands.map((cmd, index) => (
            <div key={index} className="command-block">
              {renderCommand(cmd)}
            </div>
          ))}
          <div className="success-message">
            <span className="check-icon">✓</span> Deployed successfully to https://my-awesome-app.devflow.dev
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
