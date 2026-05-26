import type { Metadata } from 'next'
import ClientComponent from './client'
import { serviceContent } from '../service-content'
import '../service-detail.css'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const service = serviceContent[params.id as keyof typeof serviceContent]

  if (!service) {
    return {
      title: 'Service Not Found | Mamuka',
      description: 'The service you are looking for does not exist.',
    }
  }

  return {
    title: `${service.title} | Mamuka Solutions`,
    description: service.excerpt,
    openGraph: {
      title: service.title,
      description: service.excerpt,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  return <ClientComponent params={params} />
}
