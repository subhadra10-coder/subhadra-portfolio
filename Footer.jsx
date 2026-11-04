import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="brand-emblem" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>
              ST
            </div>
            <p className="footer-text">
              © {currentYear} <span className="footer-name">Subhadra Thapa</span>. Aspiring Data Scientist • Kathmandu University.
            </p>
          </div>

          <a href="#home" className="back-to-top-btn">
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
