import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import '../index.css';

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
    }, 150); // Small delay to allow flip animation to reset
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
    <section id="flashcards" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.25rem 1rem',
            backgroundColor: 'rgba(255,153,51,0.1)',
            color: 'var(--primary)',
            borderRadius: '2rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Terminology
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Election Flashcards
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Test your knowledge of key election terms and concepts. Click the card to flip it!
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          
          {/* Flashcard Container */}
          <div 
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            style={{
              width: '100%',
              height: '350px',
              perspective: '1000px',
              cursor: 'pointer',
              marginBottom: '2rem'
            }}
          >
            <div className="flashcard-inner" style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transition: 'transform 0.6s',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
              
              {/* Front of Card */}
              <div className="flashcard-front" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                border: '2px solid var(--border)'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  backgroundColor: 'var(--bg-main)',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {currentCard.category}
                </span>
                <h3 style={{ fontSize: '3rem', color: 'var(--primary)', textAlign: 'center', margin: 0 }}>
                  {currentCard.term}
                </h3>
                <p style={{ position: 'absolute', bottom: '1.5rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RotateCcw size={16} /> Click to reveal
                </p>
              </div>

              {/* Back of Card */}
              <div className="flashcard-back" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2.5rem',
                transform: 'rotateY(180deg)'
              }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.9 }}>{currentCard.term}</h4>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, textAlign: 'center', margin: 0 }}>
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
            gap: '2rem',
            width: '100%'
          }}>
            <button 
              onClick={handlePrev}
              className="hover-scale"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {currentIndex + 1} / {FLASHCARD_DATA.length}
            </span>

            <button 
              onClick={handleNext}
              className="hover-scale"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Flashcards;
