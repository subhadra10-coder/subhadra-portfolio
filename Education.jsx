import React from 'react';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-description">
            Building a rigorous foundation in mathematics, computation, and data science principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-container">
          <div className="education-card">
            <div className="edu-header">
              <div className="edu-icon-badge">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>

              <div className="edu-title-group">
                <h3 className="edu-institution">Kathmandu University</h3>
                <div className="edu-degree">Bachelor's in Data Science</div>
                <div className="edu-department">Department of Mathematics</div>
              </div>

              <div className="edu-status-tag">Undergraduate Program</div>
            </div>

            <div className="edu-divider"></div>

            <div className="edu-details">
              <p className="edu-details-text">
                Enrolled in the Bachelor's in Data Science program at Kathmandu University, hosted within the prestigious Department of Mathematics. 
                The curriculum is designed to cultivate deep analytical reasoning, mathematical rigor, and computational proficiency.
              </p>

              <div style={{ marginTop: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Core Areas of Academic Study
                </span>
                <div className="edu-key-areas">
                  <span className="edu-key-pill">Data Science Fundamentals</span>
                  <span className="edu-key-pill">Mathematics & Calculus</span>
                  <span className="edu-key-pill">Probability & Statistics</span>
                  <span className="edu-key-pill">Computational Problem Solving</span>
                  <span className="edu-key-pill">Algorithmic Thinking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
