import React, { useState } from 'react';
import { questions, catColors } from '../data/data';
import { Trophy, RefreshCw, ChevronRight, Check, X } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].ans;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <section id="quiz" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            color: 'var(--accent)', 
            fontWeight: 800, 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em' 
          }}>Knowledge Check</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>Election <span className="gradient-text">Trivia Challenge</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {showScore ? (
            <div className="card animate-slide-up" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: 'rgba(255,153,51,0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 2rem auto',
                color: 'var(--primary)'
              }}>
                <Trophy size={48} />
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Quiz Completed!</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                You scored <strong style={{ color: 'var(--text-main)' }}>{score}</strong> out of <strong style={{ color: 'var(--text-main)' }}>{questions.length}</strong>
              </p>
              <button onClick={resetQuiz} className="btn btn-primary hover-scale">
                <RefreshCw size={20} /> Try Again
              </button>
            </div>
          ) : (
            <div className="card animate-slide-up" style={{ position: 'relative' }}>
              {/* Progress Bar */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: `${((currentQuestion + 1) / questions.length) * 100}%`, 
                height: '6px', 
                backgroundColor: 'var(--primary)',
                transition: 'width 0.3s ease',
                borderTopLeftRadius: 'var(--radius-lg)',
                borderTopRightRadius: currentQuestion === questions.length - 1 ? 'var(--radius-lg)' : '0'
              }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
                <span style={{ 
                  backgroundColor: `var(--accent)`, 
                  color: 'white', 
                  padding: '0.25rem 0.8rem', 
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  {questions[currentQuestion].cat}
                </span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', lineHeight: 1.3 }}>
                {questions[currentQuestion].q}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {questions[currentQuestion].opts.map((option, index) => {
                  let bgColor = 'var(--surface)';
                  let borderColor = 'var(--border)';
                  let textColor = 'var(--text-main)';
                  
                  if (selectedAnswer !== null) {
                    if (index === questions[currentQuestion].ans) {
                      bgColor = 'rgba(19, 136, 8, 0.1)';
                      borderColor = 'var(--secondary)';
                      textColor = 'var(--secondary-dark)';
                    } else if (index === selectedAnswer) {
                      bgColor = 'rgba(239, 68, 68, 0.1)';
                      borderColor = '#ef4444';
                      textColor = '#b91c1c';
                    } else {
                      opacity = 0.5;
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      style={{
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        borderRadius: 'var(--radius-md)',
                        border: `2px solid ${borderColor}`,
                        backgroundColor: bgColor,
                        color: textColor,
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: selectedAnswer === null ? 'pointer' : 'default'
                      }}
                      className={selectedAnswer === null ? 'hover-scale' : ''}
                    >
                      {option}
                      {selectedAnswer !== null && index === questions[currentQuestion].ans && <Check size={20} />}
                      {selectedAnswer !== null && index === selectedAnswer && index !== questions[currentQuestion].ans && <X size={20} />}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="animate-slide-up" style={{ marginTop: '2.5rem' }}>
                  <div style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'var(--bg-alt)', 
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid ${isCorrect ? 'var(--secondary)' : '#ef4444'}`,
                    marginBottom: '2rem'
                  }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                      {isCorrect ? '✨ Correct!' : '❌ Incorrect'}
                    </strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      {questions[currentQuestion].exp}
                    </p>
                  </div>
                  
                  <button onClick={handleNextQuestion} className="btn btn-primary" style={{ width: '100%' }}>
                    {currentQuestion + 1 === questions.length ? 'Show Results' : 'Next Question'} <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
