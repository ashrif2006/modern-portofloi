import React from 'react';
import Projects from '../components/Projects';

const Portfolio = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '40px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>My <span className="text-gradient">Portfolio</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore all of my recent work, side projects, and open source contributions below.
        </p>
      </div>
      <Projects title="" limit={null} />
    </div>
  );
};

export default Portfolio;
