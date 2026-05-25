import './home.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>We Make AdTech Clear & Comprehensible</h1>
        <p>Empower your advertising strategy with intelligent insights and transparent solutions.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔗</div>
            <h3>Prebid Integration Suite</h3>
            <p>Complete solution for header bidding setup and management. Simplifies Prebid configuration, line item creation, and bidder optimization.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>UPR Optimization Engine</h3>
            <p>Production-ready system that dynamically optimizes GAM floor prices. Delivers +8-15% revenue lift through intelligent price optimization.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Sales Order Creator</h3>
            <p>4-step wizard for creating GAM orders with integrated order tracking, delivery pacing visualization, and line-item management.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Programmatic Advertising</h3>
            <p>Automated, data-driven advertising solutions that optimize your campaigns in real-time for maximum ROI.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎛️</div>
            <h3>GAM Command Center</h3>
            <p>Comprehensive dashboard for managing and monitoring all GAM operations. Real-time insights, pacing metrics, and performance tracking.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Consulting & Strategy</h3>
            <p>Expert guidance to develop and execute advertising strategies aligned with your business goals.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="process-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>We Meet</h3>
              <p>Understanding your business, goals, and challenges through in-depth consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>We Match</h3>
              <p>Aligning our solutions with your specific needs and market opportunities.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>We Plan</h3>
              <p>Developing a comprehensive strategy with clear milestones and KPIs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>We Execute</h3>
              <p>Implementing and optimizing campaigns with continuous monitoring and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <h2>Ready to Transform Your Advertising?</h2>
        <p>Join hundreds of companies that trust Mamuka for transparent, effective advertising solutions.</p>
        <button className="btn-primary">Schedule a Demo</button>
      </section>
    </>
  )
}
