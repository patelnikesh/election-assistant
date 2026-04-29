import React from 'react';
import { Vote } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '0.5rem', 
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <Vote size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>
            India <span className="gradient-text">Elects</span>
          </h1>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#timeline" style={{ fontWeight: 500, color: 'var(--text-main)' }}>Timeline</a>
          <a href="#guide" style={{ fontWeight: 500, color: 'var(--text-main)' }}>EVM Guide</a>
          <a href="#quiz" style={{ fontWeight: 500, color: 'var(--text-main)' }}>Take Quiz</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
