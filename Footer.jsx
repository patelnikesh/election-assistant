export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-tricolor">
        <div className="ft-saffron"></div>
        <div className="ft-white"></div>
        <div className="ft-green"></div>
      </div>

      <div className="container footer-body">
        <div className="footer-brand">
          <div className="footer-emblem">🗳</div>
          <div>
            {/* ✏️ UPDATE: Change footer brand name */}
            <div className="footer-title">Bharat Nirvachan</div>
            <div className="footer-sub">Indian Election Assistant</div>
          </div>
        </div>

        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#timeline">Timeline</a>
          <a href="#guide">EVM Guide</a>
          <a href="#quiz">Quiz</a>
        </div>

        {/* ✏️ UPDATE: Change footer disclaimer text */}
        <div className="footer-note">
          Educational resource. Data sourced from ECI, Constitution of India, and Representation of the People Acts.
        </div>
      </div>
    </footer>
  )
}
