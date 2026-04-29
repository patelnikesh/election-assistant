import { heroStats } from '../data'

const phaseColors = ['#E8541A', '#F0B429', '#A78BFA', '#1AB574', '#60A5FA', '#F472B6']
const phaseLabels = ['Announcement', 'Nominations', 'Campaigning', 'Polling', 'Counting', 'Results']

export default function Hero() {
  return (
    <section className="hero" id="overview">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
      </div>

      <div className="container hero-content">
        {/* Left: Text */}
        <div className="hero-text animate-fadeUp">
          {/* ✏️ UPDATE: Edit eyebrow label */}
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>World's Largest Democracy
          </div>

          {/* ✏️ UPDATE: Edit main headline */}
          <h1 className="hero-title">
            Understand India's<br />
            <span className="hero-title-accent">Election Process</span>
          </h1>

          {/* ✏️ UPDATE: Edit hero description */}
          <p className="hero-desc">
            From announcement to government formation — explore every step, understand EVMs & VVPATs,
            and test your knowledge of Bharat's democratic process.
          </p>

          <div className="hero-actions">
            <a href="#timeline" className="btn btn-primary">🗺 Explore Timeline</a>
            <a href="#quiz" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📝 Take the Quiz
            </a>
          </div>
        </div>

        {/* Right: Card */}
        <div className="hero-visual animate-fadeUp" style={{ animationDelay: '0.15s' }}>
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hc-dot hc-saffron"></div>
              <div className="hc-dot hc-gold"></div>
              <div className="hc-dot hc-green"></div>
              {/* ✏️ UPDATE: Change card title */}
              <span className="hc-title">India's 2024 General Election</span>
            </div>
            <div className="hero-card-body">
              <div className="hc-phases">
                {phaseLabels.map((p, i) => (
                  <div className="hc-phase" key={p} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    <div
                      className="hc-phase-dot"
                      style={{ background: phaseColors[i], boxShadow: `0 0 0 3px ${phaseColors[i]}33` }}
                    ></div>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="hc-divider"></div>
              {/* ✏️ UPDATE: Edit the 3 stat boxes inside the card */}
              <div className="hc-info">
                <div className="hc-info-item">
                  <div className="hc-info-label">Phases</div>
                  <div className="hc-info-val saffron">7</div>
                </div>
                <div className="hc-info-item">
                  <div className="hc-info-label">Turnout</div>
                  <div className="hc-info-val green">66.1%</div>
                </div>
                <div className="hc-info-item">
                  <div className="hc-info-label">EVMs Used</div>
                  <div className="hc-info-val navy">5.5M+</div>
                </div>
              </div>
            </div>
          </div>
          {/* ✏️ UPDATE: Edit the floating badge text */}
          <div className="hero-badge-float">🏆 Largest election in human history</div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="hero-stats">
        <div className="container">
          <div className="stats-row">
            {heroStats.map((s, i) => (
              <div className="stat-item" key={s.num} style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
