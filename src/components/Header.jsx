import React, { useState } from 'react';
import { Vote, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ['Timeline', 'EVM Guide', 'Quiz'];
  const hrefs = ['#timeline', '#guide', '#quiz'];

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="/" className="header-brand">
          <div className="header-emblem">
            <Vote size={24} />
          </div>
          <div>
            <div className="header-title">Bharat Elects</div>
            <div className="header-sub">Indian Election Assistant</div>
          </div>
        </a>

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
          style={{ display: 'none' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="tricolor-bar">
        <div className="tricolor-saffron"></div>
        <div className="tricolor-white"></div>
        <div className="tricolor-green"></div>
      </div>
    </header>
  );
};

export default Header;
