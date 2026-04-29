import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Guide from './components/Guide';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import ChatAssistant from './components/ChatAssistant';
import { ChevronDown } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="section" style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,153,51,0.15) 0%, rgba(255,255,255,0) 70%)',
            zIndex: -1,
            animation: 'pulse-soft 4s infinite alternate'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(19,136,8,0.1) 0%, rgba(255,255,255,0) 70%)',
            zIndex: -1,
            animation: 'pulse-soft 5s infinite alternate-reverse'
          }}></div>

          <div className="container animate-slide-up" style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0,0,128,0.05)',
              color: 'var(--accent)',
              borderRadius: '2rem',
              fontWeight: 600,
              marginBottom: '2rem',
              border: '1px solid rgba(0,0,128,0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              Your Vote. Your Voice. Your Democracy.
            </div>

            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Understand the <br />
              <span className="gradient-text" style={{ display: 'inline-block', transform: 'translateY(10px)' }}>Indian Election Process</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              margin: '0 auto 3rem auto',
              lineHeight: 1.8
            }}>
              An interactive guide to navigating the world's largest democratic exercise.
              Learn about the timelines, how to use EVMs, and verify your vote with VVPAT.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#guide" className="btn btn-primary hover-pulse" style={{ textDecoration: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Start Learning
              </a>
              <a href="#quiz" className="btn btn-outline hover-scale" style={{ textDecoration: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Take the Quiz
              </a>
            </div>

            <div style={{ marginTop: '5rem', animation: 'bounce 2s infinite' }}>
              <a href="#timeline" style={{ color: 'var(--text-muted)' }}>
                <ChevronDown size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* Components Sections */}
        <Timeline />
        <Guide />
        <Flashcards />
        <Quiz />

      </main>

      <ChatAssistant />

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--text-main)',
        color: 'white',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Educational Project - Not affiliated with the Election Commission of India.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--primary)', borderRadius: '2px' }}></span>
            <span style={{ width: '30px', height: '4px', backgroundColor: 'white', borderRadius: '2px' }}></span>
            <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--secondary)', borderRadius: '2px' }}></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
