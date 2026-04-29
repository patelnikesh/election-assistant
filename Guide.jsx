import { useState } from 'react'
import { guideSteps } from '../data'

function EVMVisual() {
  return (
    <div className="evm-diagram">
      <div className="evm-unit">
        <div className="evm-unit-label">Control Unit</div>
        <div className="evm-unit-body">
          <div className="evm-screen">READY</div>
          <div className="evm-buttons-row">
            <div className="evm-btn-small">CLOSE</div>
            <div className="evm-btn-small active-btn">BALLOT</div>
            <div className="evm-btn-small">RESULT</div>
          </div>
          <div className="evm-label-small">With Polling Officer</div>
        </div>
      </div>

      <div className="evm-cable">———</div>

      <div className="evm-unit">
        <div className="evm-unit-label">Ballot Unit</div>
        <div className="evm-unit-body">
          {/* ✏️ UPDATE: Change candidate names/symbols displayed on EVM */}
          {['Candidate A 🪷', 'Candidate B ✋', 'NOTA ✗'].map((c, i) => (
            <div className="evm-candidate-row" key={i}>
              <span className="evm-cand-num">{i + 1}</span>
              <span className="evm-cand-name">{c}</span>
              <div className={`evm-vote-btn ${i === 0 ? 'evm-vote-active' : ''}`}></div>
            </div>
          ))}
          <div className="evm-label-small">Voter Presses Blue Button</div>
        </div>
      </div>
    </div>
  )
}

function VVPATVisual() {
  return (
    <div className="vvpat-diagram">
      <div className="vvpat-screen">
        <div className="vvpat-window">
          <div className="vvpat-slip">
            <div className="vs-num">01</div>
            <div className="vs-symbol">🪷</div>
            <div className="vs-name">Party — Candidate Name</div>
          </div>
        </div>
        <div className="vvpat-label">Visible for 7 seconds only</div>
        <div className="vvpat-box">📦 Sealed paper trail box</div>
      </div>
    </div>
  )
}

export default function Guide() {
  const [activeStep, setActiveStep] = useState(0)
  const step = guideSteps[activeStep]

  return (
    <section className="guide-section" id="guide">
      <div className="container">
        <div className="section-header">
          {/* ✏️ UPDATE: Edit section labels/titles */}
          <div className="section-label">How to Vote</div>
          <h2 className="section-title">EVM & VVPAT Voting Guide</h2>
          <p className="section-sub">
            A step-by-step walkthrough of what happens inside a polling station, from entering to casting your vote.
          </p>
        </div>

        <div className="guide-layout">
          {/* Sidebar: Step buttons */}
          <div className="guide-steps">
            {guideSteps.map((s, i) => (
              <button
                key={s.id}
                className={`guide-step-btn ${activeStep === i ? 'active' : ''} color-${s.color}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="gsb-icon">{s.icon}</div>
                <div className="gsb-body">
                  <div className="gsb-num">Step {s.id}</div>
                  <div className="gsb-title">{s.title}</div>
                </div>
                {activeStep === i && <div className="gsb-arrow">→</div>}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="guide-detail card animate-fadeIn" key={activeStep}>
            <div className={`guide-detail-header gd-${step.color}`}>
              <div className="gd-icon">{step.icon}</div>
              <div>
                <div className="gd-step-num">Step {step.id} of {guideSteps.length}</div>
                <h3 className="gd-title">{step.title}</h3>
              </div>
            </div>

            <div className="guide-detail-body">
              <p className="gd-desc">{step.desc}</p>

              {step.evmVisual && <EVMVisual />}
              {step.vvpatVisual && <VVPATVisual />}

              <div className="gd-substeps">
                {step.substeps.map((s, i) => (
                  <div className="gd-substep" key={i}>
                    <div className={`gd-substep-dot dot-${step.color}`}>{i + 1}</div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className={`gd-tip tip-${step.color}`}>
                <span className="tip-icon">💡</span>
                <p>{step.tip}</p>
              </div>
            </div>

            <div className="guide-nav">
              <button
                className="btn btn-ghost"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
              >
                ← Previous
              </button>

              <div className="guide-dots">
                {guideSteps.map((_, i) => (
                  <div
                    key={i}
                    className={`guide-dot ${i === activeStep ? 'active' : ''}`}
                    onClick={() => setActiveStep(i)}
                  ></div>
                ))}
              </div>

              <button
                className="btn btn-primary"
                onClick={() => setActiveStep(Math.min(guideSteps.length - 1, activeStep + 1))}
                disabled={activeStep === guideSteps.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
