'use client'

import Link from 'next/link'
import { useState, use } from 'react'
import { serviceContent } from '../service-content'

export default function ServicePageClient({ params }: { params: Promise<{ id: string }> }) {
  const [showForm, setShowForm] = useState(false)
  const { id } = use(params)
  const service = serviceContent[id as keyof typeof serviceContent]

  if (!service) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Service not found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link href="/services" style={{ color: 'var(--color-accent)' }}>
          ← Back to Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <article className="service-detail">
        <div className="service-detail-hero">
          <div className="service-detail-container">
            <div className="service-detail-icon">{service.icon}</div>
            <h1>{service.title}</h1>
            <p className="service-detail-excerpt">{service.excerpt}</p>
            <div className="service-detail-meta">
              <span>{service.date}</span>
              <span>•</span>
              <span>{service.readTime} read</span>
            </div>
          </div>
        </div>

        <div className="service-detail-content">
          <div className="service-detail-container">
            <section className="service-section-block">
              <p>{service.content}</p>
            </section>

            <section className="service-cta-section">
              <h2>Let's Discuss Your Strategy</h2>
              <button
                className="btn-primary"
                onClick={() => setShowForm(true)}
              >
                Schedule Consultation
              </button>
            </section>
          </div>
        </div>

        <div className="service-nav">
          <Link href="/services" className="back-link">
            ← Back to Services
          </Link>
        </div>
      </article>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              ✕
            </button>
            <h2>Let's Talk</h2>
            <p>Tell us about your project and we'll get back to you within 24 hours.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setShowForm(false)
              }}
              noValidate
            >
              <input
                type="email"
                placeholder="Your email"
                required
                aria-label="Email address"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                aria-label="Project details"
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
