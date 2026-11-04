import React from 'react';

export default function CareerGoals() {
  return (
    <section id="goals" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Vision & Aspirations</span>
          <h2 className="section-title">Career Goals</h2>
          <p className="section-description">
            My commitment to continuous learning and building a purposeful career in Data Science.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="goals-grid">
          <div className="goal-card">
            <div className="goal-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Deepen Data Science Knowledge</h3>
            <p>
              Commit to developing a thorough understanding of mathematical formulations, statistical inference, 
              and data structures, transforming theoretical university concepts into solid technical expertise.
            </p>
          </div>

          <div className="goal-card">
            <div className="goal-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Master Computational Problem-Solving</h3>
            <p>
              Continue advancing proficiency in Python to analyze data, formulate algorithms, and handle 
              analytical workflows with precision, clarity, and computational efficiency.
            </p>
          </div>

          <div className="goal-card">
            <div className="goal-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Build an Impactful Career</h3>
            <p>
              Aspire to contribute to meaningful data-driven solutions in industry and research, utilizing 
              evidence-based analysis to solve real-world challenges and guide strategic decision-making.
            </p>
          </div>
        </div>

        {/* Goal Quote Banner */}
        <div className="goal-quote-banner">
          <h3>"Building a successful career in Data Science through curiosity, consistency, and hard work."</h3>
          <p>
            With every concept mastered in mathematics and every line of code written in Python, my goal is to 
            grow into a well-rounded Data Scientist capable of turning raw data into valuable, actionable insights.
          </p>
        </div>
      </div>
    </section>
  );
}
