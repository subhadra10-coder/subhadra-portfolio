import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <div className="brand-emblem">ST</div>
          <div className="brand-info">
            <span className="brand-name">Subhadra Thapa</span>
            <span className="brand-role">Aspiring Data Scientist</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className="nav-link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link" onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#goals" className="nav-link" onClick={closeMenu}>
                Career Goals
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
