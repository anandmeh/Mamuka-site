'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CaseStudy } from '../../data/caseStudies'

export function CaseStudyClient({
  study,
  relatedStudies,
}: {
  study: CaseStudy
  relatedStudies: CaseStudy[]
}) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>
              ✕
            </button>
            <h2>Schedule Consultation</h2>
            <p>Let's discuss how we can help you achieve similar results.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setShowForm(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Tell us about your current strategy..." rows={4} required />
              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="case-study-detail-hero">
        <div className="case-study-detail-container">
          <Link href="/case-studies" className="back-link">
            ← Back to Case Studies
          </Link>
          <div className="case-study-icon-large">{study.icon}</div>
          <h1>{study.title}</h1>
          <p>{study.summary}</p>
        </div>
      </section>

      <section className="case-study-detail-content">
        <div className="case-study-detail-container">
          <div className="detail-section">
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
          </div>

          <div className="detail-section">
            <h2>Solution</h2>
            <ul className="solution-list">
              {study.solution.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2>Results</h2>
            <div className="results-grid">
              {study.results.map((result, idx) => {
                const parts = result.split(' ')
                const metric = parts[0]
                const description = parts.slice(1).join(' ')
                return (
                  <div key={idx} className="result-item">
                    <strong>{metric}</strong>
                    <span>{description}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="detail-section cta-section">
            <h2>Ready to Achieve Similar Results?</h2>
            <p>Let's discuss how we can optimize your advertising strategy.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="related-studies">
        <div className="case-study-detail-container">
          <h2>Other Case Studies</h2>
          <div className="related-grid">
            {relatedStudies.map((related) => (
              <Link href={`/case-studies/${related.id}`} key={related.id}>
                <div className="related-card">
                  <div className="icon">{related.icon}</div>
                  <h3>{related.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
