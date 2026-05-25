import Link from 'next/link'
import './blog.css'

const blogPosts = [
  {
    id: 'prebid-integration',
    title: 'Prebid Integration Suite',
    excerpt: 'Complete header bidding solution that drives 30-50% CPM lift by connecting multiple demand sources.',
    readTime: '8 min read',
    date: 'May 2026',
    icon: '🔗',
  },
  {
    id: 'upr-optimization',
    title: 'UPR Optimization Engine',
    excerpt: 'Intelligent floor price optimization that adjusts dynamically in real-time for maximum revenue.',
    readTime: '7 min read',
    date: 'May 2026',
    icon: '⚙️',
  },
  {
    id: 'sales-order-creator',
    title: 'Sales Order Creator',
    excerpt: 'Streamlined GAM order management that reduces setup time from 30 minutes to 5 minutes.',
    readTime: '6 min read',
    date: 'May 2026',
    icon: '📋',
  },
  {
    id: 'programmatic-advertising',
    title: 'Programmatic Advertising',
    excerpt: 'Real-time bidding automation that fills unsold inventory and drives 20-50% revenue from untapped demand.',
    readTime: '8 min read',
    date: 'May 2026',
    icon: '🎯',
  },
  {
    id: 'gam-command-center',
    title: 'GAM Command Center',
    excerpt: 'Unified dashboard for real-time ad operations monitoring with alerts and performance tracking.',
    readTime: '7 min read',
    date: 'May 2026',
    icon: '🎛️',
  },
  {
    id: 'consulting-strategy',
    title: 'Consulting & Strategy',
    excerpt: 'Expert guidance for publisher revenue transformation with 8-67% growth potential.',
    readTime: '9 min read',
    date: 'May 2026',
    icon: '💡',
  },
]

export default function Blog() {
  return (
    <>
      <section className="blog-hero">
        <h1>Publisher Revenue Guides</h1>
        <p>Deep-dive insights into AdTech solutions, revenue optimization, and growth strategies</p>
      </section>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <article className="blog-card">
                  <div className="blog-icon">{post.icon}</div>
                  <h2>{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="read-time">{post.readTime}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="read-more">
                    Read Article →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <h2>Ready to Transform Your Revenue?</h2>
        <p>Get expert insights from our AdTech specialists</p>
        <a href="/#contact" className="btn-primary">
          Schedule Consultation
        </a>
      </section>
    </>
  )
}
