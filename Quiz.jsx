import { useState } from 'react'
import { questions, catColors } from '../data'

function Results({ answers, score, pct, onRestart, onReview }) {
  const circumference = 2 * Math.PI * 52

  // ✏️ UPDATE: Change grade thresholds or labels here
  const grade =
    pct >= 90
      ? { label: 'Constitutional Scholar', icon: '🏆', color: 'gold' }
      : pct >= 70
      ? { label: 'Informed Voter', icon: '🗳️', color: 'green' }
      : pct >= 50
      ? { label: 'Learning Citizen', icon: '📚', color: 'saffron' }
      : { label: 'Keep Studying!', icon: '💪', color: 'navy' }

  return (
    <section className="quiz-section" id="quiz">
      <div className="container">
        <div className="results-wrap animate-fadeUp">
          <div className="results-card card">
            <div className={`results-header rh-${grade.color}`}>
              <div className="results-icon">{grade.icon}</div>
              <h2 className="results-grade">{grade.label}</h2>
            </div>

            <div className="results-body">
              <svg viewBox="0 0 120 120" className="score-svg">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#ECEAE6" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="52" fill="none" stroke="#E8541A" strokeWidth="10"
                  strokeDasharray={`${circumference * pct / 100} ${circumference}`}
                  strokeLinecap="round" transform="rotate(-90 60 60)"
                  style={{ transition: 'stroke-dasharray 1s ease' }}
                />
                <text x="60" y="55" textAnchor="middle" fill="#0D1F3C" fontSize="22" fontWeight="900" fontFamily="'Playfair Display',serif">
                  {pct}%
                </text>
                <text x="60" y="72" textAnchor="middle" fill="#6B6663" fontSize="11" fontFamily="'Plus Jakarta Sans',sans-serif">
                  {score}/{questions.length} correct
                </text>
              </svg>

              <div className="results-breakdown">
                {questions.map((q, i) => (
                  <div key={i} className={`rb-item ${answers[i] === q.ans ? 'rb-correct' : 'rb-wrong'}`}>
                    <span className="rb-icon">{answers[i] === q.ans ? '✓' : '✗'}</span>
                    <span className="rb-qnum">Q{i + 1}</span>
                    <span className="rb-cat">{q.cat}</span>
                  </div>
                ))}
              </div>

              <div className="results-actions">
                <button className="btn btn-primary" onClick={onRestart}>Try Again</button>
                <button className="btn btn-outline" onClick={onReview}>Review Questions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const score = answers.filter((a, i) => a === questions[i].ans).length
  const pct = Math.round((score / questions.length) * 100)
  const q = questions[current]
  const isAnswered = answers[current] !== null

  function answer(i) {
    if (isAnswered) return
    const next = [...answers]
    next[current] = i
    setAnswers(next)
  }

  function restart() {
    setCurrent(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
  }

  if (showResults) {
    return (
      <Results
        answers={answers}
        score={score}
        pct={pct}
        onRestart={restart}
        onReview={() => { setShowResults(false); setCurrent(0) }}
      />
    )
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="container">
        <div className="section-header">
          {/* ✏️ UPDATE: Edit section labels/titles */}
          <div className="section-label">Test Your Knowledge</div>
          <h2 className="section-title">Indian Election Quiz</h2>
          <p className="section-sub">
            15 questions covering constitutional law, EVMs, VVPATs, electoral system, and the Election Commission of India.
          </p>
        </div>

        <div className="quiz-layout">
          {/* Sidebar */}
          <div className="quiz-nav-sidebar">
            <div className="qns-header">
              <span>Questions</span>
              <span className="qns-score">{score}/{questions.length}</span>
            </div>
            <div className="qns-grid">
              {questions.map((_, i) => {
                const state = answers[i] === null ? 'unanswered' : answers[i] === questions[i].ans ? 'correct' : 'wrong'
                const isCurrent = i === current
                return (
                  <button
                    key={i}
                    className={`qns-btn ${state} ${isCurrent ? 'current' : ''}`}
                    onClick={() => setCurrent(i)}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div className="qns-legend">
              <span className="ql-item ql-correct">Correct</span>
              <span className="ql-item ql-wrong">Wrong</span>
              <span className="ql-item ql-unanswered">Not attempted</span>
            </div>
          </div>

          {/* Question Panel */}
          <div className="quiz-panel animate-fadeIn" key={current}>
            <div className="quiz-panel-header">
              <div className="qph-left">
                <span className={`badge badge-${catColors[q.cat] || 'navy'}`}>{q.cat}</span>
                <span className="qph-num">Question {current + 1} of {questions.length}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }}></div>
              </div>
            </div>

            <div className="quiz-question-body">
              <p className="quiz-question">{q.q}</p>

              <div className="quiz-options">
                {q.opts.map((opt, i) => {
                  let cls = 'quiz-option'
                  if (isAnswered) {
                    if (i === q.ans) cls += ' opt-correct'
                    else if (i === answers[current]) cls += ' opt-wrong'
                    else cls += ' opt-dim'
                  }
                  return (
                    <button key={i} className={cls} onClick={() => answer(i)} disabled={isAnswered}>
                      <div className="opt-label">{String.fromCharCode(65 + i)}</div>
                      <span style={{ flex: 1 }}>{opt}</span>
                      {isAnswered && i === q.ans && <span className="opt-check">✓</span>}
                      {isAnswered && i === answers[current] && answers[current] !== q.ans && <span className="opt-cross">✗</span>}
                    </button>
                  )
                })}
              </div>

              {isAnswered && (
                <div className={`quiz-feedback animate-fadeIn ${answers[current] === q.ans ? 'fb-correct' : 'fb-wrong'}`}>
                  <div className="fb-header">
                    <span className="fb-icon">{answers[current] === q.ans ? '✓' : '✗'}</span>
                    <strong>{answers[current] === q.ans ? 'Correct!' : 'Incorrect'}</strong>
                  </div>
                  <p>{q.exp}</p>
                </div>
              )}
            </div>

            <div className="quiz-footer">
              <button
                className="btn btn-ghost"
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
              >
                ← Prev
              </button>

              <div style={{ display: 'flex', gap: '10px' }}>
                {current === questions.length - 1 && answers.filter(a => a !== null).length === questions.length && (
                  <button className="btn btn-primary" onClick={() => setShowResults(true)}>
                    See Results 🏆
                  </button>
                )}
                {current < questions.length - 1 && (
                  <button
                    className="btn btn-primary"
                    onClick={() => setCurrent(current + 1)}
                    disabled={!isAnswered}
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
