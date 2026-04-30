import React from 'react';
import { Vote } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-tricolor">
        <div className="ft-saffron"></div>
        <div className="ft-white"></div>
        <div className="ft-green"></div>
      </div>
      <div className="container footer-body">
        <a href="/" className="footer-brand">
          <div className="header-emblem footer-emblem">
            <Vote size={24} />
          </div>
          <div>
            <div className="footer-title">Bharat Elects</div>
            <div className="footer-sub">Empowering Indian Citizens</div>
          </div>
        </a>

        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#timeline">Timeline</a>
          <a href="#guide">Voting Guide</a>
          <a href="#quiz">Quiz</a>
        </div>

        <p className="footer-note">
          © {new Date().getFullYear()} Bharat Elects. Educational platform dedicated to Indian electoral awareness. Not affiliated with ECI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
