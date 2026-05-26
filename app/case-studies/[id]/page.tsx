import Link from 'next/link'
import { caseStudies } from '../../data/caseStudies'
import '../case-study-detail.css'
import { CaseStudyClient } from './client'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Case Study Not Found</h1>
        <p>Sorry, the case study you're looking for doesn't exist.</p>
        <Link href="/case-studies" style={{ color: 'var(--color-accent)' }}>
          ← Back to Case Studies
        </Link>
      </div>
    )
  }

  const relatedStudies = caseStudies.filter((s) => s.id !== study.id).slice(0, 3)

  return <CaseStudyClient study={study} relatedStudies={relatedStudies} />
}
