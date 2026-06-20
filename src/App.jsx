import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#ffffff' }}>
      <header className="app-header">
        <nav className="navbar">
          <div className="logo">
            <h1>ParallelTest</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1 className="hero-title">Run Tests in Parallel</h1>
          <p className="hero-subtitle">Speed up your testing workflow by 10x with intelligent parallel test execution</p>
          <div className="hero-buttons">
            <button className="primary-button">Start Free Trial</button>
            <button className="secondary-button">View Demo</button>
          </div>
        </section>
        
        <section id="features" className="features">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Lightning Fast</h3>
              <p>Execute thousands of tests simultaneously across multiple environments</p>
            </div>
            <div className="feature-card">
              <h3>Smart Distribution</h3>
              <p>AI-powered test distribution for optimal resource utilization</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Results</h3>
              <p>Watch your tests complete in real-time with detailed analytics</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 ParallelTest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
