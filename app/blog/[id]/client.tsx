'use client'

import Link from 'next/link'
import { useState, use } from 'react'
import { publisherTrendPosts } from '../publisher-trends-all'
import { remainingBlogPosts } from '../remaining-blogs'

const blogContent = {
  ...publisherTrendPosts,
  ...remainingBlogPosts,
}

export default function BlogPostClient({ params }: { params: Promise<{ id: string }> }) {
  const [showForm, setShowForm] = useState(false)
  const { id } = use(params)
  const post = blogContent[id as keyof typeof blogContent]

  if (!post) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <article className="blog-detail">
        <div className="blog-detail-hero">
          <div className="blog-detail-container">
            <div className="blog-detail-icon">{post.icon}</div>
            <h1>{post.title}</h1>
            <p className="blog-detail-excerpt">{post.excerpt}</p>
            <div className="blog-detail-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="blog-detail-content">
          <div className="blog-detail-container">
            <section className="blog-section-block">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          </div>
        </div>

        <div className="blog-nav">
          <Link href="/blog" className="back-link">
            ← Back to Blog
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
