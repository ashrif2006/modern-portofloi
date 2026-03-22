import React from 'react';
import { Link } from 'react-router-dom';

// Explicitly importing images so Vite bundles them correctly instead of breaking string paths!
import bookImg from '../assets/book-DvnezTGe-project1.png';
import fyloImg from '../assets/Project2.png';
import techCapImg from '../assets/project3.png';
import portfolioImg from '../assets/hero.png';

const projects = [
  {
    id: 0,
    title: 'NoorTime (مواقيت الصلاة)',
    category: 'Web Application',
    description: 'موقع ليتتبع الوقت ومواقيت الصلاة بدقة (الفجر، الظهر، العصر، المغرب، العشاء) لمصر، السعودية، والإمارات باستخدام Aladhan API.',
    tech: ['React', 'Aladhan API', 'JavaScript'],
    imagePlaceholder: 'linear-gradient(45deg, #11998e, #38ef7d)',
    realImage: 'https://raw.githubusercontent.com/ashrif2006/NoorTime/main/img/fromWipsite.png',
    githubUrl: 'https://github.com/ashrif2006/NoorTime',
    liveUrl: 'https://ashrif2006.github.io/NoorTime/'
  },
  {
    id: 1,
    title: 'BookStore App (متجر الكتب)',
    category: 'E-Commerce',
    description: 'مشروع متجر كتب معاصر باستخدام React. يوفر تجربة سلسة وجذابة بتصميم Glassmorphism، ونظام عربة (Cart) متكامل ومستمر بالبحث عبر Google Books API.',
    tech: ['React 19', 'React Router 7', 'Google Books API', 'Context API'],
    imagePlaceholder: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
    realImage: bookImg,
    githubUrl: 'https://github.com/ashrif2006/Book',
    liveUrl: 'https://ashrif2006.github.io/Book/'
  },
  {
    id: 2,
    title: 'Fylo Dark Theme',
    category: 'Landing Page',
    description: 'A beautiful dark-themed landing page focusing on layout structure, responsive grids, and modern UI components.',
    tech: ['HTML', 'CSS'],
    imagePlaceholder: 'linear-gradient(45deg, #0f2027, #203a43)',
    realImage: fyloImg,
    githubUrl: 'https://github.com/ashrif2006/fylo-dark-theme',
    liveUrl: 'https://ashrif2006.github.io/fylo-dark-theme/'
  },
  {
    id: 3,
    title: 'Tech Capital',
    category: 'Web Application',
    description: 'A sophisticated corporate platform and frontend interface for technology-focused businesses.',
    tech: ['React', 'CSS', 'JS'],
    imagePlaceholder: 'linear-gradient(45deg, #151828, #302b63)',
    realImage: techCapImg,
    githubUrl: 'https://github.com/ashrif2006/Tech-capital',
    liveUrl: 'https://ashrif2006.github.io/Tech-capital/'
  },
  {
    id: 4,
    title: 'My Portfolio',
    category: 'Web Design',
    description: 'A glassmorphism-themed interactive portfolio built with React. You are looking at it right now!',
    tech: ['React', 'CSS', 'Vite'],
    imagePlaceholder: 'linear-gradient(45deg, #1fa2ff, #12d8fa)',
    realImage: portfolioImg,
    githubUrl: 'https://github.com/ashrif2006/porofolio',
    liveUrl: '/'
  }
];

const Projects = ({ title, limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      {title && <h2>{title}</h2>}
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px',
        marginTop: title ? '60px' : '20px'
      }}>
        {displayedProjects.map((project, idx) => (
          <div 
            key={project.id} 
            className="glass-card proj-card" 
            style={{ 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              animation: `fadeIn 0.8s ease-out ${idx * 0.15}s both`
            }}
          >
            <div style={{
              height: '240px',
              background: project.imagePlaceholder,
              backgroundImage: project.realImage ? `url('${project.realImage}')` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(20,24,40,1), transparent)',
                opacity: 0.8
              }}></div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', marginTop: '-40px', zIndex: 2 }}>
              <span style={{ 
                color: 'var(--accent-secondary)', 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '8px' 
              }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.05)',
                    fontSize: '0.8rem',
                    color: '#ccc'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                <a href={project.liveUrl || '#'} target={project.liveUrl ? "_blank" : "_self"} rel={project.liveUrl ? "noopener noreferrer" : ""} className="text-gradient" style={{ textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
                  Live Demo →
                </a>
                
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    GitHub Repo
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/portfolio" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
