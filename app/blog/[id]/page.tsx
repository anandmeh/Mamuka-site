import type { Metadata } from 'next'
import Link from 'next/link'
import ClientComponent from './client'
import { publisherTrendPosts } from '../publisher-trends-all'
import { remainingBlogPosts } from '../remaining-blogs'
import '../blog-detail.css'

const blogContent = {
  ...publisherTrendPosts,
  ...remainingBlogPosts,
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = blogContent[params.id as keyof typeof blogContent]

  if (!post) {
    return {
      title: 'Post Not Found | Mamuka Blog',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Mamuka Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date().toISOString(),
    },
  }
}

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  return <ClientComponent params={params} />
}
