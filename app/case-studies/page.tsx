import Link from 'next/link'
import { caseStudies } from '../data/caseStudies'
import './case-studies.css'

export default function CaseStudies() {
  return (
    <>
      <section className="case-studies-hero">
        <h1>Case Studies</h1>
        <p>Real-world examples of how we've transformed publisher revenue</p>
      </section>

      <section className="case-studies-list">
        <div className="case-studies-container">
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <Link href={`/case-studies/${study.id}`} key={study.id}>
                <div className="case-study-card">
                  <div className="case-study-icon">{study.icon}</div>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <div className="card-footer">
                    <span className="read-more">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
