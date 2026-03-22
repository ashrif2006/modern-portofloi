import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ContactPage from './pages/ContactPage'

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {/* Background Glowing Orbs */}
        <div className="glow-orb glow-orb-1" style={{ transform: `translateY(${scrollY * 0.15}px)` }}></div>
        <div className="glow-orb glow-orb-2" style={{ transform: `translateY(${scrollY * -0.1}px)` }}></div>

        <nav className="glass nav-container">
          <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem' }}>
            <h1 
            style={{fontSize:'1.5rem',
              fontFamily:'Outfit',
              fontWeight:'800',
              letterSpacing:'1px',
              margin: 0,
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            >Ahmed Ashraf</h1>
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
            <Link to="/portfolio" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Portfolio</Link>
            <Link to="/contact" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home scrollY={scrollY} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="footer-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
            <a href="https://github.com/ashrif2006" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.2rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-ashraf-40a4b6353/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.2rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} Ahmed Ashraf. Crafted with React & vanilla CSS.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
