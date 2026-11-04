import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-description">
            Focused on mastering the essential programming foundation required for modern Data Science.
          </p>
        </div>

        {/* Dedicated Python Skill Card */}
        <div className="skills-wrapper">
          <div className="python-skill-card">
            <div className="skill-card-top">
              <div className="skill-brand">
                <div className="python-icon-wrapper">
                  {/* Official Python Logo SVG */}
                  <svg width="44" height="44" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.2 2C32.1 2 33.5 11.6 33.5 11.6L33.6 21.6H54.6V24.7H24.5C12.4 24.7 2 33.2 2 54.3C2 75.3 10.6 74 10.6 74L16.6 74V65.6C16.6 65.6 16.3 55.4 26.8 55.4H47.4C55.4 55.4 59.8 50.8 59.8 42.8V14.7C59.8 14.7 61.9 2 54.2 2ZM43.3 8.3C45.9 8.3 48 10.4 48 13C48 15.6 45.9 17.7 43.3 17.7C40.7 17.7 38.6 15.6 38.6 13C38.6 10.4 40.7 8.3 43.3 8.3Z" fill="#387EB8"/>
                    <path d="M55.8 108C77.9 108 76.5 98.4 76.5 98.4L76.4 88.4H55.4V85.3H85.5C97.6 85.3 108 76.8 108 55.7C108 34.7 99.4 36 99.4 36L93.4 36V44.4C93.4 44.4 93.7 54.6 83.2 54.6H62.6C54.6 54.6 50.2 59.2 50.2 67.2V95.3C50.2 95.3 48.1 108 55.8 108ZM66.7 101.7C64.1 101.7 62 99.6 62 97C62 94.4 64.1 92.3 66.7 92.3C69.3 92.3 71.4 94.4 71.4 97C71.4 99.6 69.3 101.7 66.7 101.7Z" fill="#FFE052"/>
                  </svg>
                </div>
                <div className="skill-info">
                  <h3>Python</h3>
                  <p>Primary Programming Language</p>
                </div>
              </div>

              <div className="skill-badge-status">
                Current Technical Skill
              </div>
            </div>

            <p className="skill-description">
              Python serves as my primary language for learning data science. I am actively building a strong 
              foundation in writing clean, structured code, applying algorithmic logic, and leveraging Python's 
              capabilities to work with numbers, datasets, and mathematical formulations.
            </p>

            <div className="skill-highlights-grid">
              <div className="skill-highlight-item">
                <div className="highlight-check">✓</div>
                <div className="highlight-text">Core Python Syntax & Programming Logic</div>
              </div>

              <div className="skill-highlight-item">
                <div className="highlight-check">✓</div>
                <div className="highlight-text">Data Structures & Problem Solving</div>
              </div>

              <div className="skill-highlight-item">
                <div className="highlight-check">✓</div>
                <div className="highlight-text">Computational Mathematics & Algorithms</div>
              </div>

              <div className="skill-highlight-item">
                <div className="highlight-check">✓</div>
                <div className="highlight-text">Continuous & Dedicated Practice</div>
              </div>
            </div>

            <div className="skill-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>
                Dedicated to achieving solid proficiency in Python fundamentals before expanding into advanced data science frameworks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
