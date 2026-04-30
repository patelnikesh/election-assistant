import React from 'react';
import { guideSteps } from '../data/data';

const Guide = () => {
  return (
    <section id="guide" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
           <span style={{ 
            color: 'var(--secondary)', 
            fontWeight: 800, 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em' 
          }}>Voter Education</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>How to <span className="gradient-text">Cast Your Vote</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem' }}>
            A step-by-step interactive guide to the voting process at the polling station.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {guideSteps.map((step) => (
            <div key={step.id} className="card hover-scale" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Step number badge */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--bg-alt)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--border)',
                opacity: 0.5
              }}>
                {step.id}
              </div>

              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                width: '80px',
                height: '80px',
                backgroundColor: `rgba(var(--${step.color}-rgb), 0.1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-md)'
              }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                {step.desc}
              </p>

              <div style={{ 
                flex: 1, 
                backgroundColor: 'var(--bg-alt)', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem'
              }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {step.substeps.map((sub, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      <span style={{ color: 'var(--secondary)' }}>✓</span> {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ 
                padding: '1rem', 
                border: '1px dashed var(--primary)', 
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255,153,51,0.05)',
                fontSize: '0.85rem'
              }}>
                <strong>💡 Pro Tip:</strong> {step.tip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
