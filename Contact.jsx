import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'subhadrathapa757@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            I would love to connect with peers, professors, mentors, and anyone enthusiastic about Data Science.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-icon-bubble">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>

            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out to me directly via email. Whether it is discussing academic 
              interests in Data Science, collaborating on learning opportunities, or sharing insights, 
              my inbox is always open.
            </p>

            {/* Email Display & Copy Box */}
            <div className="email-display-box">
              <span className="email-address">{email}</span>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`} 
                onClick={handleCopy}
                title="Copy email to clipboard"
                type="button"
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Direct Mailto Action Buttons */}
            <div className="contact-actions">
              <a 
                href={`mailto:${email}?subject=Hello%20Subhadra%20-%20Data%20Science%20Inquiry`}
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send an Email
              </a>

              <a 
                href="#home"
                className="btn btn-secondary"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
