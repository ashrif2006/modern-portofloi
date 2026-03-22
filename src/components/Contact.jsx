import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xdawvgbn', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(null), 3500);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 3500);
      }
    } catch (err) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 3500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glass-card contact-grid">
        
        {/* Left Information Pane */}
        <div className="contact-info-pane" style={{ 
          flex: '1 1 400px', 
          background: 'linear-gradient(135deg, rgba(138,43,226,0.1) 0%, rgba(0,240,255,0.05) 100%)',
          padding: '50px 40px',
          borderRight: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '200px', height: '200px', background: 'rgba(138,43,226,0.2)', filter: 'blur(50px)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>Let's talk about your next big project!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>
              I am always open to discussing product design work or partnership opportunities. Drop me a line and I will get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)' }}>
                  📍
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Location</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>FCAI, Cairo, Egypt</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)' }}>
                  ✉️
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Email</h4>
                  <a href="mailto:ahmedashref17820069@gmail.com" style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>ahmedashref17820069@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)' }}>
                  📱
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Phone</h4>
                  <a href="https://wa.me/201017781644" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#25D366'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    01017781644 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '50px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {[
                { name: 'GitHub', url: 'https://github.com/ashrif2006' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-ashraf-40a4b6353/' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.3s',
                  background: 'rgba(255,255,255,0.02)', fontSize: '0.9rem'
                }}
                onMouseOver={(e) => { e.target.style.color = 'white'; e.target.style.borderColor = 'var(--accent-secondary)'; e.target.style.transform = 'translateY(-2px)' }}
                onMouseOut={(e) => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--glass-border)';  e.target.style.transform = 'translateY(0)' }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Pane */}
        <div style={{ flex: '1 1 500px', padding: '50px 40px', position: 'relative' }}>
          {formStatus === 'success' && (
            <div style={{
              position: 'absolute', inset: 0, 
              background: 'var(--card-bg)', backdropFilter: 'var(--glass-blur)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, animation: 'fadeIn 0.4s'
            }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,240,255,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', border: '2px solid var(--accent-secondary)' }}>
                ✅
              </div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          )}
          
          {formStatus === 'error' && (
            <div style={{
              position: 'absolute', inset: 0, 
              background: 'var(--card-bg)', backdropFilter: 'var(--glass-blur)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, animation: 'fadeIn 0.4s'
            }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,50,50,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', border: '2px solid #ff4444' }}>
                ❌
              </div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>Error Sending Message</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Please try again later or contact me directly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px', height: '100%' }}>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input 
                  type="text" id="name" name="name" required placeholder="John Doe"
                  style={{
                    padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--glass-border)', color: 'white', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem', transition: 'border-color 0.3s',
                    width: '100%'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input 
                  type="email" id="email" name="email" required placeholder="john@example.com"
                  style={{
                    padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--glass-border)', color: 'white', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem', transition: 'border-color 0.3s',
                    width: '100%'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="subject" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Subject</label>
              <input 
                type="text" id="subject" name="subject" required placeholder="Project Inquiry"
                style={{
                  padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--glass-border)', color: 'white', outline: 'none',
                  fontFamily: 'inherit', fontSize: '1rem', transition: 'border-color 0.3s',
                  width: '100%'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea 
                id="message" name="message" rows="5" required placeholder="Tell me about your project..."
                style={{
                  padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--glass-border)', color: 'white', outline: 'none',
                  fontFamily: 'inherit', resize: 'none', fontSize: '1rem', flex: 1, minHeight: '120px', transition: 'border-color 0.3s',
                  width: '100%'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ padding: '16px', width: '100%', borderRadius: '12px', fontSize: '1.05rem', marginTop: '10px' }}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
