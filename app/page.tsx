'use client'

import { useState } from 'react'
import './home.css'

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCTA = (action: string) => {
    setShowContactForm(true)
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !message.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (message.trim().length < 10) {
      setError('Message must be at least 10 characters')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (!response.ok) throw new Error('Failed to send')

      setSubmitted(true)
      setEmail('')
      setMessage('')
      setError('')

      setTimeout(() => {
        setShowContactForm(false)
        setSubmitted(false)
      }, 2000)
    } catch (err) {
      setError('Failed to send. Please try again or email hello@mamuka.dk')
    } finally {
      setLoading(false)
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
                <p>We've received your message. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {error && <div className="error-message">{error}</div>}
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  aria-label="Email address"
                  required
                />
                <textarea
                  placeholder="Tell us about your project (min. 10 characters)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  rows={5}
                  aria-label="Project details"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1>Transform Publisher Revenue with Intelligent Yield Optimization</h1>
        <p>Data-driven strategies that unlock 8-67% revenue growth. We've helped publishers reclaim millions in lost yield.</p>
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
            <a href="/case-studies/fullstack" className="service-link">
              Learn more →
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon">🎛️</div>
            <h3>GAM Command Center</h3>
            <p>Comprehensive dashboard for managing and monitoring all GAM operations. Real-time insights, pacing metrics, and performance tracking.</p>
            <a href="/case-studies/inventory" className="service-link">
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
        <h2>Start Optimizing Revenue Today</h2>
        <p>Get a free yield analysis of your current setup. Discover your revenue opportunity in 15 minutes.</p>
        <button
          className="btn-primary"
          onClick={() => handleCTA('contact')}
          aria-label="Get a free yield analysis"
        >
          Get Free Yield Analysis
        </button>
      </section>
    </>
  )
}
