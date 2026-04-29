import { useState } from 'react'
import { phases } from '../data'

export default function Timeline() {
  const [active, setActive] = useState(null)

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-header">
          {/* ✏️ UPDATE: Edit section labels/titles */}
          <div className="section-label">Step by Step</div>
          <h2 className="section-title">Election Timeline</h2>
          <p className="section-sub">
            The complete journey from announcement to government formation — every phase of the Indian election process.
          </p>
        </div>

        <div className="tl-container">
          <div className="tl-line-track"></div>

          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className={`tl-item ${active === i ? 'expanded' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="tl-marker">
                <div className={`tl-dot tl-dot-${phase.badgeType}`}>{phase.icon}</div>
              </div>

              <div className="tl-card card" onClick={() => setActive(active === i ? null : i)}>
                <div className="tl-card-header">
                  <div className="tl-meta">
                    <span className={`badge badge-${phase.badgeType}`}>{phase.badge}</span>
                    <span className="tl-duration">{phase.duration}</span>
                  </div>
                  <div className="tl-num">{phase.num}</div>
                </div>

                <h3 className="tl-title">{phase.title}</h3>
                <p className="tl-summary">{phase.summary}</p>

                {active === i && (
                  <div className="tl-expanded animate-fadeIn">
                    <div className="tl-details">
                      {phase.details.map((d, j) => (
                        <div className="tl-detail-item" key={j}>
                          <div className="tl-detail-bullet"></div>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="tl-constitutional">
                      <span className="const-label">Legal basis:</span>
                      <span className="const-text">{phase.constitutional}</span>
                    </div>
                  </div>
                )}

                <button className="tl-toggle">
                  {active === i ? '↑ Less' : '↓ More details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
