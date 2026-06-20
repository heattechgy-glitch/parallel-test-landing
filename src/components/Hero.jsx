import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          Accelerate Your Testing with
          <span className="highlight"> Parallel Execution</span>
        </h1>
        <p className="hero-subheadline">
          Run tests faster, ship code quicker. Our parallel testing platform reduces your CI/CD pipeline time by up to 80%.
        </p>
        <div className="hero-cta-container">
          <button className="hero-cta">
            Get Started Free
          </button>
          <button className="hero-cta-secondary">
            Watch Demo
          </button>
        </div>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
          z-index: 1;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(90deg, #00bfff, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subheadline {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-cta {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #00bfff 0%, #1e90ff 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 191, 255, 0.4);
          position: relative;
          overflow: hidden;
        }

        .hero-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(0, 191, 255, 0.6);
        }

        .hero-cta:hover::before {
          left: 100%;
        }

        .hero-cta-secondary {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #00bfff;
          background: transparent;
          border: 2px solid #00bfff;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          background: rgba(0, 191, 255, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem;
          }

          .hero-cta-container {
            flex-direction: column;
            align-items: center;
          }

          .hero-cta,
          .hero-cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
