import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Available for Academic & Data Science Discussions</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Subhadra Thapa</span>
            </h1>

            <p className="hero-subtitle">Aspiring Data Scientist</p>

            <p className="hero-intro">
              Welcome to my personal portfolio. I am a dedicated Data Science student 
              at Kathmandu University, passionate about working with numbers, unraveling 
              meaningful patterns, and leveraging modern analytical techniques with Python to solve 
              data-driven problems.
            </p>

            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">
                Explore My Journey
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Right Visual (Clean Monogram & Highlights - No Fake Profile Photo) */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-emblem">ST</div>
              <div className="hero-card-header">
                <h2 className="hero-card-name">Subhadra Thapa</h2>
                <span className="hero-card-role">Aspiring Data Scientist</span>
              </div>

              <div className="hero-card-divider"></div>

              <ul className="hero-card-list">
                <li className="hero-card-item">
                  <div className="hero-card-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-card-label">Degree</div>
                    <div className="hero-card-value">Bachelor's in Data Science</div>
                  </div>
                </li>

                <li className="hero-card-item">
                  <div className="hero-card-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 7v14M21 7v14M9 3h6v4H9z"></path>
                      <line x1="9" y1="11" x2="9" y2="17"></line>
                      <line x1="15" y1="11" x2="15" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-card-label">Institution</div>
                    <div className="hero-card-value">Kathmandu University</div>
                  </div>
                </li>

                <li className="hero-card-item">
                  <div className="hero-card-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="9" x2="20" y2="9"></line>
                      <line x1="4" y1="15" x2="20" y2="15"></line>
                      <line x1="10" y1="3" x2="8" y2="21"></line>
                      <line x1="16" y1="3" x2="14" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-card-label">Department</div>
                    <div className="hero-card-value">Department of Mathematics</div>
                  </div>
                </li>

                <li className="hero-card-item">
                  <div className="hero-card-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-card-label">Core Technical Skill</div>
                    <div className="hero-card-value">Python</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
