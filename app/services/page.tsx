import Link from 'next/link'
import './services.css'

const services = [
  { id: 'prebid-integration', title: 'Prebid Integration Suite', icon: '🔗' },
  { id: 'upr-engine', title: 'UPR Optimization Engine', icon: '⚙️' },
  { id: 'sales-order-creator', title: 'Sales Order Creator', icon: '📋' },
  { id: 'programmatic-guide', title: 'Programmatic Advertising Suite', icon: '🎯' },
  { id: 'gam-dashboard', title: 'GAM Command Center', icon: '🎛️' },
  { id: 'consulting', title: 'Consulting & Strategy', icon: '💡' },
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
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`} className="service-card-simple">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <div className="card-arrow">→</div>
              </Link>
            ))}
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
