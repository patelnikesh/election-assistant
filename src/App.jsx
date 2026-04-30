import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Guide from './components/Guide';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import ChatAssistant from './components/ChatAssistant';
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';
import { heroStats } from './data/data';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="section" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(circle at top right, rgba(255,153,51,0.08), transparent 40%), radial-gradient(circle at bottom left, rgba(19,136,8,0.05), transparent 40%)',
          paddingTop: '0'
        }}>
          <div className="container animate-slide-up" style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              backgroundColor: 'rgba(0,0,128,0.05)',
              color: 'var(--accent)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.9rem',
              marginBottom: '2.5rem',
              border: '1px solid rgba(0,0,128,0.1)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              <CheckCircle size={16} /> Digital Democracy Guide
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
              marginBottom: '1.5rem', 
              color: 'var(--text-main)',
              lineHeight: 0.95
            }}>
              Navigate the <br />
              <span className="gradient-text">Largest Democratic</span> <br />
              Exercise on Earth
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-muted)',
              maxWidth: '800px',
              margin: '0 auto 3.5rem auto',
              lineHeight: 1.6,
              fontWeight: 500
            }}>
              Empowering 968 million voices. Explore the journey of a vote, 
              from registration to result, with Bharat Elects interactive assistant.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#timeline" className="btn btn-primary hover-scale" style={{ textDecoration: 'none', padding: '1rem 2.5rem' }}>
                Explore Timeline <ArrowRight size={20} />
              </a>
              <a href="#guide" className="btn btn-outline hover-scale" style={{ textDecoration: 'none', padding: '1rem 2.5rem' }}>
                How to Vote
              </a>
            </div>

            {/* Stats */}
            <div className="container" style={{ 
              marginTop: '6rem', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px'
            }}>
              {heroStats.map((stat, i) => (
                <div key={i} className="glass" style={{ 
                  padding: '2rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{stat.num}</h3>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '5rem', animation: 'bounce-subtle 2s infinite ease-in-out' }}>
              <a href="#timeline" style={{ color: 'var(--text-muted)' }}>
                <ChevronDown size={36} />
              </a>
            </div>
          </div>
        </section>

        {/* Components Sections */}
        <div id="timeline"><Timeline /></div>
        <div id="guide"><Guide /></div>
        <div id="flashcards"><Flashcards /></div>
        <div id="quiz"><Quiz /></div>

      </main>

      <ChatAssistant />

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0F172A',
        color: 'white',
        padding: '5rem 0 2rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
             <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bharat <span style={{ color: 'var(--primary)' }}>Elects</span></h2>
             <p style={{ color: '#94A3B8', maxWidth: '500px', margin: '0 auto' }}>
               An educational platform dedicated to simplifying the Indian electoral process for every citizen.
             </p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            marginBottom: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '3rem'
          }}>
            <a href="#timeline" style={{ color: 'white', fontWeight: 500 }}>Timeline</a>
            <a href="#guide" style={{ color: 'white', fontWeight: 500 }}>Voting Guide</a>
            <a href="#quiz" style={{ color: 'white', fontWeight: 500 }}>Knowledge Quiz</a>
          </div>

          <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Bharat Elects. Educational Project - Not affiliated with the Election Commission of India.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default App;
