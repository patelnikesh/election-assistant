import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What does EVM stand for in the Indian election system?",
      options: [
        "Electronic Voting Machine",
        "Electoral Verification Method",
        "Election Voting Mechanism",
        "Electronic Verification Machine"
      ],
      correctAnswer: 0,
      explanation: "EVM stands for Electronic Voting Machine, which is used to record votes electronically."
    },
    {
      question: "What is the purpose of the VVPAT?",
      options: [
        "To verify voter identity before entering",
        "To provide a paper slip confirming the vote cast",
        "To count the total number of votes",
        "To announce the final election results"
      ],
      correctAnswer: 1,
      explanation: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing the candidate voted for, allowing voters to verify their choice."
    },
    {
      question: "How long is the VVPAT slip visible to the voter?",
      options: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
      correctAnswer: 2,
      explanation: "The printed VVPAT slip is visible behind a transparent window for 7 seconds before it drops into a sealed box."
    },
    {
      question: "Which body conducts elections to the Lok Sabha in India?",
      options: [
        "Supreme Court of India",
        "Parliament",
        "Election Commission of India",
        "Ministry of Home Affairs"
      ],
      correctAnswer: 2,
      explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India."
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    
    setTimeout(() => {
      if (index === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500); // Wait 1.5s to show correct/incorrect state before moving on
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <section id="quiz" className="section" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Test Your Knowledge</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
          How well do you know the Indian electoral process?
        </p>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-main)' }}>
          {showResult ? (
            <div className="animate-slide-up" style={{ textAlign: 'center', padding: '3rem 0', animation: 'slideUp 0.5s ease forwards' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem', animation: 'bounce 2s infinite' }}>
                {score === questions.length ? '🏆' : score > questions.length / 2 ? '👍' : '📚'}
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>
                Quiz Complete!
              </h3>
              <p style={{ fontSize: '1.4rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
                You scored <strong style={{ color: 'var(--primary)', fontSize: '1.8rem' }}>{score}</strong> out of <strong>{questions.length}</strong>.
              </p>
              <button className="btn btn-primary hover-scale" onClick={restartQuiz} style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                <RotateCcw size={24} /> Try Again
              </button>
            </div>
          ) : (
            <div className="animate-slide-up" key={currentQuestion} style={{ animation: 'slideUp 0.3s ease forwards' }}>
              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', marginBottom: '2rem', overflow: 'hidden' }}>
                <div style={{ 
                  width: `${((currentQuestion) / questions.length) * 100}%`, 
                  height: '100%', 
                  backgroundColor: 'var(--primary)', 
                  transition: 'width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Question {currentQuestion + 1} / {questions.length}</span>
                <span style={{ color: 'var(--accent)' }}>Score: {score}</span>
              </div>
              
              <h3 style={{ fontSize: '1.6rem', marginBottom: '2.5rem', color: 'var(--accent)', lineHeight: '1.4' }}>
                {questions[currentQuestion].question}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {questions[currentQuestion].options.map((option, index) => {
                  let buttonStyle = {
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid var(--border)',
                    backgroundColor: 'transparent',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  };

                  let icon = null;

                  if (selectedAnswer !== null) {
                    if (index === questions[currentQuestion].correctAnswer) {
                      buttonStyle.borderColor = 'var(--secondary-light)';
                      buttonStyle.backgroundColor = 'rgba(40, 167, 69, 0.1)';
                      icon = <CheckCircle color="var(--secondary-light)" />;
                    } else if (index === selectedAnswer) {
                      buttonStyle.borderColor = '#DC3545';
                      buttonStyle.backgroundColor = 'rgba(220, 53, 69, 0.1)';
                      icon = <XCircle color="#DC3545" />;
                    }
                  } else {
                    buttonStyle.cursor = 'pointer';
                    // Inline hover simulation not perfect in React inline styles, relying on CSS class if needed, or simple static style
                  }

                  return (
                    <button 
                      key={index}
                      className={selectedAnswer === null ? "hover-scale" : ""}
                      style={buttonStyle}
                      onClick={() => selectedAnswer === null && handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      onMouseOver={(e) => {
                        if (selectedAnswer === null) {
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.boxShadow = '0 4px 10px rgba(255,153,51,0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (selectedAnswer === null) {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      {option}
                      {icon}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="animate-fade-in" style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  backgroundColor: 'rgba(0,0,0,0.03)', 
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-muted)'
                }}>
                  <strong>Explanation:</strong> {questions[currentQuestion].explanation}
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
