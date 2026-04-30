import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Lightbulb } from 'lucide-react';

const FLASHCARD_DATA = [
  {
    id: 1,
    term: 'EVM',
    definition: 'Electronic Voting Machine. A secure, standalone device used to record votes electronically, eliminating invalid votes and speeding up counting.',
    category: 'Equipment'
  },
  {
    id: 2,
    term: 'VVPAT',
    definition: 'Voter Verifiable Paper Audit Trail. Provides feedback to voters using a slip of paper to verify their vote was cast correctly.',
    category: 'Equipment'
  },
  {
    id: 3,
    term: 'NOTA',
    definition: 'None Of The Above. A ballot option allowing voters to indicate their disapproval of all the candidates in a voting system.',
    category: 'Voting Option'
  },
  {
    id: 4,
    term: 'ECI',
    definition: 'Election Commission of India. An autonomous constitutional authority responsible for administering election processes in India at national, state and district levels.',
    category: 'Organization'
  },
  {
    id: 5,
    term: 'Model Code of Conduct',
    definition: 'A set of guidelines issued by the ECI to regulate political parties and candidates prior to elections to ensure free and fair elections.',
    category: 'Rules'
  },
  {
    id: 6,
    term: 'Constituency',
    definition: 'A specific geographic area that is represented by a seat in a legislative body (like the Lok Sabha or State Assembly).',
    category: 'Geography'
  }
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARD_DATA.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARD_DATA.length) % FLASHCARD_DATA.length);
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = FLASHCARD_DATA[currentIndex];

  return (
    <section id="flashcards" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            color: 'var(--primary)', 
            fontWeight: 800, 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em' 
          }}>Glossary</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>Election <span className="gradient-text">Flashcards</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem' }}>
            Click to flip the cards and master key election terminology.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          
          {/* Flashcard Container */}
          <div 
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            style={{
              width: '100%',
              height: '400px',
              perspective: '1500px',
              cursor: 'pointer',
              marginBottom: '3rem'
            }}
          >
            <div className="flashcard-inner" style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
              
              {/* Front of Card */}
              <div className="flashcard-front card" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3rem',
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  backgroundColor: 'var(--bg-alt)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {currentCard.category}
                </span>
                
                <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>
                   <Lightbulb size={64} strokeWidth={1} />
                </div>
                
                <h3 style={{ fontSize: '3.5rem', color: 'var(--text-main)', textAlign: 'center', margin: 0, letterSpacing: '-0.03em' }}>
                  {currentCard.term}
                </h3>
                
                <p style={{ 
                  position: 'absolute', 
                  bottom: '2rem', 
                  color: 'var(--text-muted)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  <RotateCcw size={16} /> Click to flip
                </p>
              </div>

              {/* Back of Card */}
              <div className="flashcard-back" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3.5rem',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, var(--accent) 0%, #000040 100%)'
              }}>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '2rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{currentCard.term}</h4>
                <p style={{ fontSize: '1.5rem', lineHeight: 1.5, textAlign: 'center', margin: 0, fontWeight: 500 }}>
                  {currentCard.definition}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            width: '100%'
          }}>
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="btn hover-scale"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                color: 'var(--text-main)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <ChevronLeft size={28} />
            </button>
            
            <span style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 800, fontFamily: 'Outfit' }}>
              {currentIndex + 1} <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1rem' }}>/ {FLASHCARD_DATA.length}</span>
            </span>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="btn hover-scale"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                color: 'var(--text-main)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <ChevronRight size={28} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Flashcards;
