import React from 'react';
import { phases } from '../data/data';

const Timeline = () => {
  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ 
            color: 'var(--primary)', 
            fontWeight: 800, 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em' 
          }}>Process Journey</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>The Election <span className="gradient-text">Timeline</span></h2>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '32px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--primary), var(--accent))',
            opacity: 0.3
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {phases.map((phase, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                position: 'relative'
              }}>
                {/* Number/Icon indicator */}
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  backgroundColor: 'white',
                  border: '2px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--primary)'
                }}>
                  {phase.num}
                </div>

                {/* Content Card */}
                <div className="card" style={{ flex: 1, padding: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                       <span style={{ 
                         backgroundColor: `var(--${phase.badgeType})`, 
                         color: 'white', 
                         padding: '0.25rem 0.75rem', 
                         borderRadius: 'var(--radius-full)',
                         fontSize: '0.75rem',
                         fontWeight: 700,
                         textTransform: 'uppercase'
                       }}>{phase.badge}</span>
                       <h3 style={{ fontSize: '1.75rem', marginTop: '0.75rem' }}>{phase.icon} {phase.title}</h3>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{phase.duration}</span>
                  </div>
                  
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
                    {phase.summary}
                  </p>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                    gap: '1rem',
                    padding: '1.5rem',
                    backgroundColor: 'var(--bg-alt)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid var(--primary)`
                  }}>
                    {phase.details.map((detail, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>•</div>
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', fontStyle: 'italic', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                    ⚖️ {phase.constitutional}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
