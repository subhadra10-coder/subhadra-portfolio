import React from 'react';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">My Journey & Background</h2>
          <p className="section-description">
            A look into my academic path in Data Science and my passion for analytical problem solving.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Narrative Content */}
          <div className="about-text">
            <p>
              I am an aspiring Data Scientist currently pursuing my <strong>Bachelor's degree in Data Science</strong> at 
              <strong> Kathmandu University</strong> under the <strong>Department of Mathematics</strong>.
            </p>
            <p>
              My academic journey is rooted in developing a strong mathematical and computational mindset. 
              I am genuinely fascinated by how mathematical concepts provide the logical foundation for analyzing complex datasets, 
              uncovering trends, and making data-informed decisions.
            </p>

            <div className="about-highlight-box">
              <p>
                "My current focus is actively learning Python to bridge mathematical models with practical data analysis, 
                building a solid ground for a meaningful career in Data Science."
              </p>
            </div>

            <p>
              I believe in dedicated, step-by-step learning. As I progress through my university program, 
              I continuously seek to deepen my analytical thinking, write cleaner Python code, and explore how 
              data science can create positive, real-world impact.
            </p>
          </div>

          {/* Quick Academic Cards */}
          <div className="about-cards">
            <div className="about-stat-card">
              <div className="about-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div>
                <div className="about-stat-title">Current Study</div>
                <div className="about-stat-value">Bachelor's in Data Science</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M3 7v14M21 7v14M9 3h6v4H9z"></path>
                  <line x1="9" y1="11" x2="9" y2="17"></line>
                  <line x1="15" y1="11" x2="15" y2="17"></line>
                </svg>
              </div>
              <div>
                <div className="about-stat-title">University</div>
                <div className="about-stat-value">Kathmandu University</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                  <line x1="10" y1="3" x2="8" y2="21"></line>
                  <line x1="16" y1="3" x2="14" y2="21"></line>
                </svg>
              </div>
              <div>
                <div className="about-stat-title">Department</div>
                <div className="about-stat-value">Department of Mathematics</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div>
                <div className="about-stat-title">Technical Focus</div>
                <div className="about-stat-value">Python Programming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
