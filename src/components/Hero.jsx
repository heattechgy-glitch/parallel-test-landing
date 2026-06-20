import React from 'react';
import './Hero.css'; // assumes you have a CSS file for styling

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">Welcome to ParallelTest</h1>
                <p className="hero-subtitle">Streamline your testing process with ease and efficiency.</p>
                <a href="#get-started" className="hero-cta">Get Started</a>
            </div>
        </section>
    );
};

export default Hero;

/* CSS in Hero.css
.hero {
    background: linear-gradient(135deg, #1E40EF, #3B82F6);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

.hero-content {
    max-width: 600px;
    padding: 20px;
}

.hero-headline {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

.hero-cta {
    background-color: #2563EB;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.hero-cta:hover {
    background-color: #1E40EF;
}
*/