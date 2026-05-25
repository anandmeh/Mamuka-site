import Link from 'next/link'
import { caseStudies } from '../../data/caseStudies'
import '../case-study-detail.css'

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default function CaseStudyDetail({ params }: { params: { id: string } }) {
  const study = caseStudies.find((s) => s.id === params.id)

  if (!study) {
    return <div>Case study not found</div>
  }

  return (
    <>
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
              {study.results.map((result, idx) => (
                <div key={idx} className="result-item">
                  <strong>{result.split(' ').slice(0, 2).join(' ')}</strong>
                  <span>{result.split(' ').slice(2).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section cta-section">
            <h2>Ready to Achieve Similar Results?</h2>
            <p>Let's discuss how we can optimize your advertising strategy.</p>
            <button className="btn-primary">Schedule Consultation</button>
          </div>
        </div>
      </section>

      <section className="related-studies">
        <div className="case-study-detail-container">
          <h2>Other Case Studies</h2>
          <div className="related-grid">
            {caseStudies
              .filter((s) => s.id !== study.id)
              .slice(0, 3)
              .map((related) => (
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
