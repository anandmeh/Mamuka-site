'use client'

import { useState } from 'react'
import './home.css'

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleCTA = (action: string) => {
    if (action === 'contact') {
      setShowContactForm(true)
    } else if (action === 'demo') {
      setShowContactForm(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && message) {
      console.log('Form submitted:', { email, message })
      setSubmitted(true)
      setTimeout(() => {
        setShowContactForm(false)
        setEmail('')
        setMessage('')
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <>
      {/* Contact Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowContactForm(false)}
              aria-label="Close form"
            >
              ✕
            </button>
            <h2>Let's Talk</h2>
            <p>Tell us about your project and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="success-message">
                <h3>✓ Thank you!</h3>
                <p>We've received your message. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  aria-label="Project details"
                />
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1>We Make AdTech Clear & Comprehensible</h1>
        <p>Empower your advertising strategy with intelligent insights and transparent solutions.</p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => handleCTA('contact')}
            aria-label="Start free trial"
          >
            Start Free Trial
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Learn more about services"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔗</div>
            <h3>Prebid Integration Suite</h3>
            <p>Complete solution for header bidding setup and management. Simplifies Prebid configuration, line item creation, and bidder optimization.</p>
            <a href="/case-studies/prebid" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>UPR Optimization Engine</h3>
            <p>Production-ready system that dynamically optimizes GAM floor prices. Delivers +8-15% revenue lift through intelligent price optimization.</p>
            <a href="/case-studies/upr" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Sales Order Creator</h3>
            <p>4-step wizard for creating GAM orders with integrated order tracking, delivery pacing visualization, and line-item management.</p>
            <a href="/case-studies/video" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Programmatic Advertising</h3>
            <p>Automated, data-driven advertising solutions that optimize your campaigns in real-time for maximum ROI.</p>
            <a href="/case-studies" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">🎛️</div>
            <h3>GAM Command Center</h3>
            <p>Comprehensive dashboard for managing and monitoring all GAM operations. Real-time insights, pacing metrics, and performance tracking.</p>
            <a href="/case-studies" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Consulting & Strategy</h3>
            <p>Expert guidance to develop and execute advertising strategies aligned with your business goals.</p>
            <a href="#contact" onClick={() => handleCTA('contact')} className="service-link">
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="process-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>We Meet</h3>
              <p>Understanding your business, goals, and challenges through in-depth consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>We Match</h3>
              <p>Aligning our solutions with your specific needs and market opportunities.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>We Plan</h3>
              <p>Developing a comprehensive strategy with clear milestones and KPIs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>We Execute</h3>
              <p>Implementing and optimizing campaigns with continuous monitoring and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <h2>Ready to Transform Your Advertising?</h2>
        <p>Join hundreds of companies that trust Mamuka for transparent, effective advertising solutions.</p>
        <button
          className="btn-primary"
          onClick={() => handleCTA('demo')}
          aria-label="Schedule a demo"
        >
          Schedule a Demo
        </button>
      </section>
    </>
  )
}
