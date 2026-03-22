
import { Link } from 'react-router-dom';
import imageAhmedashraf from '../assets/ahmedashref.png';

const Hero = ({ scrollY }) => {
  return (
    <section 
      className="hero-section"
      style={{
        transform: `translateY(${scrollY * 0.2}px)`,
        opacity: Math.max(1 - scrollY / 600, 0),
        animation: 'fadeIn 1s ease-out',
        flexWrap: 'wrap-reverse',
      }}
    >
      {/* Text Content */}
      <div style={{ flex: '1 1 500px' }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid var(--accent-primary)',
          color: 'var(--accent-secondary)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '24px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          backgroundColor: 'rgba(138, 43, 226, 0.1)'
        }}>
          Ahmed Ashraf | Frontend Enthusiast
        </div>
        
        <h1>
          Crafting digital <br/>
          <span className="text-gradient">experiences</span> with style.
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '550px',
          marginBottom: '40px',
          lineHeight: '1.8'
        }}>
          Hi, I'm Ahmed Ashraf, a student at <strong>FCAI</strong> and a passionate <strong>Web Developer</strong> specializing in <strong>React</strong>. I build modern, responsive, and beautifully interactive web applications. Let's create something extraordinary together!
        </p>

        <div className="btn-group" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/portfolio" className="btn btn-primary">My Portfolio</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          <a href="https://wa.me/201017781644" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', boxShadow: '0 5px 15px rgba(37, 211, 102, 0.4)' }}>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Hero Image / Avatar */}
      <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div className="hero-img-container" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '650px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Animated Glow Behind Image */}
          <div style={{
            position: 'absolute',
            inset: '0%',
            background: 'radial-gradient(circle, rgba(138,43,226,0.6) 0%, rgba(0,240,255,0) 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          
          <img 
            src={imageAhmedashraf}
            alt="Ahmed Ashraf Avatar" 
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 2,
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
