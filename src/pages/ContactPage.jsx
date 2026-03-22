import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', minHeight: '80vh', display: 'flex', flexDirection: 'column', padding: '40px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>Get in <span className="text-gradient">Touch</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Feel free to reach out for collaborations, freelance opportunities, or just to say hi!
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
