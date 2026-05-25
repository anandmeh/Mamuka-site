import Link from 'next/link'
import { serviceContent } from './service-content'
import './services.css'

const services = [
  { id: 'prebid-integration' },
  { id: 'upr-engine' },
  { id: 'sales-order-creator' },
  { id: 'programmatic-guide' },
  { id: 'gam-dashboard' },
  { id: 'consulting' },
]

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <h1>Publisher Revenue Solutions</h1>
        <p>Each tool designed to unlock revenue growth</p>
      </section>

      <section className="services-listing">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => {
              const content = serviceContent[service.id as keyof typeof serviceContent]
              return (
                <Link key={service.id} href={`/services/${service.id}`} className="service-card">
                  <div className="service-card-header">
                    <div className="service-icon">{content.icon}</div>
                    <h2>{content.title}</h2>
                  </div>
                  <p className="service-description">{content.content.split('\n\n')[0]}</p>
                  <div className="read-more">Read full article →</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Ready to Grow Your Revenue?</h2>
        <p>Schedule a free consultation with our AdTech specialists</p>
        <a href="/#contact" className="btn-primary">
          Get Started Today
        </a>
      </section>
    </>
  )
}
