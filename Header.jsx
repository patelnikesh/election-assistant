import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ['Overview', 'Timeline', 'EVM Guide', 'Quiz']
  const hrefs = ['#overview', '#timeline', '#guide', '#quiz']

  return (
    <header className="header">
      <div className="header-inner container">
        <div className="header-brand">
          <div className="header-emblem">🗳</div>
          <div>
            {/* ✏️ UPDATE: Change app name/subtitle here */}
            <div className="header-title">Bharat Nirvachan</div>
            <div className="header-sub">Indian Election Assistant</div>
          </div>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {nav.map((n, i) => (
            <a
              key={n}
              href={hrefs[i]}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {n}
            </a>
          ))}
          <a
            href="#quiz"
            className="btn btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Take Quiz
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>

      <div className="tricolor-bar">
        <div className="tricolor-saffron"></div>
        <div className="tricolor-white"></div>
        <div className="tricolor-green"></div>
      </div>
    </header>
  )
}
