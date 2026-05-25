'use client'

import Link from 'next/link'
import { useState } from 'react'
import './services.css'

const services = [
  {
    id: 'prebid-integration',
    title: 'Prebid Integration Suite',
    icon: '🔗',
    tagline: 'Header Bidding Made Simple',
    shortDesc: 'Connect 8-15 demand sources for 30-50% CPM lift',
    fullDesc: `Prebid is the industry standard for header bidding. Our suite handles everything from bidder configuration to optimization, letting you tap into premium demand sources without the technical complexity.`,
    problem: `Most publishers either use only their primary ad server (missing 30-50% of potential demand) or attempt DIY Prebid and spend months on configuration. You lose revenue while your engineering team gets bogged down in setup.`,
    solution: `We implement production-ready Prebid with pre-vetted demand partners, optimal timeout tuning, price floors, and real-time monitoring. Go from setup to live in 4-6 weeks.`,
    benefits: [
      '30-50% CPM lift from demand competition',
      'Faster page loads (optimized timeouts)',
      'Fill unsold inventory',
      'Better negotiating leverage with primary SSP',
    ],
    cta: 'Explore Prebid Setup',
    revenue: '8-15 per 1,000 impressions additional',
  },
  {
    id: 'upr-engine',
    title: 'UPR Optimization Engine',
    icon: '⚙️',
    tagline: 'AI-Powered Floor Optimization',
    shortDesc: 'Dynamic pricing that adjusts to real-time demand',
    fullDesc: `Instead of guessing floor prices, our AI learns your demand patterns and adjusts prices automatically. Set it and forget it. Optimize 24/7 even while you sleep.`,
    problem: `Static floor prices leave money on the table. Too high → lose volume. Too low → leave margin behind. You're either losing deals or leaving revenue on the table, with no way to know which.`,
    solution: `Machine learning model trained on your 90-day bid history. System recalculates optimal floor 4x daily based on current demand, time of day, seasonality, and trends.`,
    benefits: [
      '8-15% revenue lift from optimization',
      'Improved fill rates',
      'Real-time adaptation to market changes',
      'Reduce manual pricing work',
    ],
    cta: 'Get Free Floor Audit',
    revenue: '$0.50-$2.00 per 1,000 impressions',
  },
  {
    id: 'sales-order-creator',
    title: 'Sales Order Creator',
    icon: '📋',
    tagline: 'GAM Orders in 5 Minutes',
    shortDesc: 'Automate order creation from 30 min to 5 min per order',
    fullDesc: `Stop wrestling with GAM's complex interface. Our 4-step wizard streamlines order creation with validation and automation, multiplying your sales team's capacity.`,
    problem: `Creating a GAM order manually requires 15-20 steps across 3+ screens. Your sales team spends 30 minutes per order on admin work instead of selling. Configuration errors cost you money. You can't scale sales operations.`,
    solution: `Simple 4-step wizard: Details → Line Items → Creatives → Review. Validate everything before creation. Auto-create in GAM. Track all orders in one place.`,
    benefits: [
      '6x faster order creation',
      'Fewer configuration errors',
      'Sales team capacity +300%',
      'Better client service & faster fulfillment',
    ],
    cta: 'See Demo',
    revenue: '+$50K-$375K per salesperson annually',
  },
  {
    id: 'programmatic-guide',
    title: 'Programmatic Advertising Suite',
    icon: '🎯',
    tagline: 'Fill Unsold Inventory Automatically',
    shortDesc: 'Monetize 20-50% more inventory with programmatic demand',
    fullDesc: `Direct sales can't fill all inventory. Programmatic fills the gaps with thousands of buyers competing for every impression. Passive revenue from inventory that would otherwise go unsold.`,
    problem: `20-40% of your inventory goes unsold. You're leaving $50K-$300K annual revenue on the table. But you don't have time to build complex programmatic setup.`,
    solution: `Connect to premium SSPs (Google AdX, Index Exchange, OpenX, etc.) and open up your remnant inventory to programmatic demand. We handle the setup and optimization.`,
    benefits: [
      'Fill 20-50% more inventory',
      'Passive income from unsold inventory',
      'Competition drives CPMs up',
      'Requires no sales effort',
    ],
    cta: 'Unlock Remnant Revenue',
    revenue: '$2-8 per 1,000 impressions',
  },
  {
    id: 'gam-dashboard',
    title: 'GAM Command Center',
    icon: '🎛️',
    tagline: 'Real-Time Ad Operations Dashboard',
    shortDesc: 'See all your GAM data in one place with alerts',
    fullDesc: `Stop logging into GAM and drilling through reports. Real-time dashboard shows impressions, CPM, fill rate, revenue with instant alerts when something goes wrong.`,
    problem: `GAM's native interface spreads data across 10+ reports. Takes 20+ minutes to understand daily performance. You miss revenue drops until weeks later.`,
    solution: `API-powered dashboard pulling live GAM data every 15 minutes. Custom dashboards for your KPIs. Alerts notify you when CPM drops or fill rate falls.`,
    benefits: [
      'Real-time visibility into performance',
      'Catch problems within hours (not weeks)',
      'Save 5-10 hours/week on reporting',
      'Make faster, better-informed decisions',
    ],
    cta: 'Get Live Dashboard',
    revenue: '2-5% CPM improvement from optimization',
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    icon: '💡',
    tagline: 'Expert Assessment & Revenue Roadmap',
    shortDesc: 'Custom strategy for 8-67% revenue growth',
    fullDesc: `One-size-fits-all solutions don't work. Our specialists audit your entire ad tech stack and create a custom roadmap for your specific business.`,
    problem: `You don't know where your revenue leaks are. Your ad tech stack is fragmented. Sales process is manual. No clear strategy for growth. Consultants cost $$$$ and don't understand AdTech.`,
    solution: `50-100 point audit of current state. Identify opportunities ranked by ROI. Custom 12-month roadmap with financial projections. Implementation support.`,
    benefits: [
      '8-67% revenue growth over 12 months',
      '$200K-$2M in identified opportunities',
      'Custom roadmap for your business',
      '10x-50x ROI on consulting',
    ],
    cta: 'Schedule Consultation',
    revenue: '$200K-$2M additional identified',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <>
      <section className="services-hero">
        <h1>Publisher Revenue Solutions</h1>
        <p>Each tool designed to solve a specific problem and unlock revenue growth</p>
      </section>

      <section className="services-listing">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-large">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="tagline">{service.tagline}</p>
                <p className="short-desc">{service.shortDesc}</p>

                <div className="service-details">
                  <div className="detail-section">
                    <h4>The Problem</h4>
                    <p>{service.problem}</p>
                  </div>

                  <div className="detail-section">
                    <h4>The Solution</h4>
                    <p>{service.solution}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Key Benefits</h4>
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="revenue-potential">
                    <strong>Revenue Potential:</strong> {service.revenue}
                  </div>
                </div>

                <Link href={`/services/${service.id}`} className="btn-primary">
                  Learn More →
                </Link>
              </div>
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
