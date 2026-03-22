import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = ({ scrollY }) => {
  return (
    <>
      <Hero />
      <Projects limit={3} title="Featured Projects" />
      
      <section style={{ padding: '80px 0', textAlign: 'center', animation: 'fadeIn 1s ease-out' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Start a Project?</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Let's build something amazing together. Reach out and tell me about your ideas!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px', display: 'inline-block' }}>
            Get In Touch
          </Link>
          <a href="https://wa.me/201017781644" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px', display: 'inline-block', background: '#25D366', color: 'white', boxShadow: '0 5px 15px rgba(37, 211, 102, 0.4)' }}>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
