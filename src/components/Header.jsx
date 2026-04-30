import React, { useState, useEffect } from 'react';
import { Vote, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Timeline', href: '#timeline' },
    { name: 'Guide', href: '#guide' },
    { name: 'Flashcards', href: '#flashcards' },
    { name: 'Quiz', href: '#quiz' },
  ];

  return (
    <header className={`glass ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      padding: isScrolled ? '0.5rem 0' : '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '0.6rem', 
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 12px var(--primary-glow)'
          }}>
            <Vote size={22} />
          </div>
          <h1 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
            Bharat <span className="gradient-text">Elects</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ 
                fontWeight: 600, 
                color: 'var(--text-main)', 
                fontSize: '0.95rem',
                opacity: 0.8,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = '1'}
              onMouseOut={(e) => e.target.style.opacity = '0.8'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            display: 'none', 
            background: 'none', 
            color: 'var(--text-main)',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="glass" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid var(--border)',
          animation: 'slideUp 0.3s ease'
        }}>
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                fontWeight: 600, 
                color: 'var(--text-main)', 
                fontSize: '1.1rem',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
