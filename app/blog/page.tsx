import Link from 'next/link'
import { publisherTrendPosts } from './publisher-trends-all'
import { remainingBlogPosts } from './remaining-blogs'
import './blog.css'

const buildPostMetadata = (id: string, post: any) => ({
  id,
  title: post.title,
  excerpt: post.excerpt,
  readTime: post.readTime.includes('min') ? `${post.readTime} read` : `${post.readTime} min read`,
  date: post.date,
  icon: post.icon,
})

const publisherTrendMetadata = Object.entries(publisherTrendPosts).map(([id, post]) =>
  buildPostMetadata(id, post)
)

const remainingBlogsMetadata = Object.entries(remainingBlogPosts).map(([id, post]) =>
  buildPostMetadata(id, post)
)

const blogPosts = [
  ...publisherTrendMetadata,
  ...remainingBlogsMetadata,
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
