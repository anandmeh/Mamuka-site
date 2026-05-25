'use client'

import Link from 'next/link'
import './services.css'

const services = [
  {
    id: 'prebid-integration',
    title: 'Prebid Integration Suite',
    icon: '🔗',
    tagline: 'Header Bidding Made Simple',
    shortDesc: 'Connect 8-15 demand sources for 30-50% CPM lift',
    description: `Most publishers miss 30-50% of their potential revenue because they're only selling through one or two ad servers. Your inventory is a scarce resource with global demand, but if you're not creating actual competition for it, you're leaving money on the table. Header bidding changes that equation by letting multiple demand partners bid simultaneously on every impression. Instead of a waterfall where the first partner to bid wins, you get real market competition that drives prices up. The impact is immediate and measurable. Publishers typically see CPM increases of 30-50 percent just from implementing proper header bidding with the right partners. That's not a minor optimization—it's structural revenue improvement. We handle the entire implementation: identifying which demand partners match your traffic and content, configuring Prebid with optimal timeout settings so page load stays fast, setting smart floor prices, and monitoring performance in real time. Most publishers go from setup to live production in 4-6 weeks. The revenue lift compounds every quarter, making this one of the highest-ROI initiatives you can undertake.`,
    revenue: '8-15 per 1,000 impressions additional',
  },
  {
    id: 'upr-engine',
    title: 'UPR Optimization Engine',
    icon: '⚙️',
    tagline: 'AI-Powered Floor Optimization',
    shortDesc: 'Dynamic pricing that adjusts to real-time demand',
    description: `Floor price optimization sounds like a small lever, but it's one of the most impactful—and most neglected—knobs in publisher monetization. Static floor prices are crude instruments. Set it too high and you reject bids that would have filled. Set it too low and you leave margin on the table. Most publishers set a floor price once and never touch it again, missing enormous opportunity. Your demand environment is dynamic. Bid prices vary by time of day, day of week, seasonality, current market conditions, and dozens of other factors. An optimal floor price at 9 AM Monday might be completely wrong at 5 PM Friday. Machine learning trained on your actual bid history can identify these patterns and adjust your floors continuously. Our system analyzes your 90-day historical bid data, learns what demand partners are willing to pay under different conditions, and recalculates optimal floor prices four times daily. The system balances grabbing revenue in the moment with maintaining healthy long-term bidder relationships. Publishers implementing this see CPM improvements of 8-15 percent while simultaneously improving fill rates—which sounds impossible but happens because you're optimizing for actual market dynamics instead of guessing. The model learns continuously, adapting as new bidders appear, as seasonal demand shifts, or as your content mix changes.`,
    revenue: '$0.50-$2.00 per 1,000 impressions',
  },
  {
    id: 'sales-order-creator',
    title: 'Sales Order Creator',
    icon: '📋',
    tagline: 'GAM Orders in 5 Minutes',
    shortDesc: 'Automate order creation from 30 min to 5 min per order',
    description: `Creating a Google Ad Manager order looks simple until you actually try it. You need to understand advertiser settings, line item types, targeting options, pacing algorithms, creative specifications. One small misconfiguration—the wrong pacing strategy, targeting that's too narrow, a creative size mismatch—and the order under-delivers or delivers to the wrong audience. Your sales team spends 30 minutes per order navigating GAM's interface, with every order containing the risk of configuration errors. For a sales team handling 50 orders monthly, that's 25 hours spent on administrative work instead of selling. Each order your team creates represents $5,000 to $25,000 in annual advertiser spend. That 25 hours monthly prevents your sales team from handling 50% more business. We've built a simple 4-step wizard that removes the complexity. Step one: enter order basics. Step two: define line items with automatic validation. Step three: upload creatives with size verification. Step four: review everything before creation. The system prevents configuration errors before they happen, automatically creates the order in GAM, and maintains an audit trail of everything. Your sales team goes from 30 minutes per order to 5 minutes. They handle 50% more business with the same headcount. That's revenue growth without hiring.`,
    revenue: '+$50K-$375K per salesperson annually',
  },
  {
    id: 'programmatic-guide',
    title: 'Programmatic Advertising Suite',
    icon: '🎯',
    tagline: 'Fill Unsold Inventory Automatically',
    shortDesc: 'Monetize 20-50% more inventory with programmatic demand',
    description: `Your sales team is your primary revenue channel, but they can only maintain so many client relationships. Every publisher has inventory beyond what direct sales can fill. That unsold inventory generates zero revenue. It's completely wasted. Programmatic advertising solves this by connecting your unsold inventory to a global marketplace of buyers. Instead of your sales team manually negotiating deals, technology automatically opens auctions to thousands of potential bidders. A visitor lands on your page, an impression becomes available, all these demand sources bid simultaneously in milliseconds, the highest bidder wins, and their ad displays. The entire process happens in 100 milliseconds. This passive revenue stream requires no sales effort and often generates higher CPMs than you might expect. You're accessing global demand, not just local. You're reaching buyers who'd never negotiate direct deals but will bid competitively for the right inventory. The sophistication scales with your needs. Basic programmatic works well for most publishers. Private Marketplace deals let select premium advertisers buy programmatic inventory at negotiated rates. Preferred deals give key partners early access to quality inventory. Once your core infrastructure is in place, you can layer these strategies on top. Publishers with 20 million monthly impressions where 10-12 million sell directly through their sales team often find the remaining 8-10 million can be filled programmatically, generating $150,000 to $250,000 annually from inventory that previously generated nothing.`,
    revenue: '$2-8 per 1,000 impressions',
  },
  {
    id: 'gam-dashboard',
    title: 'GAM Command Center',
    icon: '🎛️',
    tagline: 'Real-Time Ad Operations Dashboard',
    shortDesc: 'See all your GAM data in one place with alerts',
    description: `Google Ad Manager's native reporting spreads critical data across a dozen different screens. Getting a complete picture of daily performance requires visiting multiple dashboards, waiting for report generation, manually synthesizing the data, and exporting to spreadsheets. By the time you understand what happened yesterday, it's ancient history. Real-time visibility changes everything. When something goes wrong—CPMs drop significantly, fill rates decline, a technical issue emerges—you detect it within hours instead of discovering it days later. That early detection is worth thousands of dollars. A publisher detecting a CPM issue within two hours and fixing it might save $5,000 that month. Left undetected for a week, the same issue costs $35,000 or more. Our dashboard consolidates everything into one integrated view. Impressions, clicks, CPM trends, fill rates, revenue, line item pacing, underperforming inventory—it's all visible in real time. The dashboard updates every 15 minutes. You set alerts for specific conditions. You get notified immediately if CPM drops below thresholds or fill rates fall. Ad operations teams typically spend 5-10 hours weekly on manual reporting. The dashboard automates all of it. Custom dashboards for different stakeholders. Automated exports. Scheduled email reports. The team moves from reactive reporting to strategic optimization.`,
    revenue: '2-5% CPM improvement from optimization',
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    icon: '💡',
    tagline: 'Expert Assessment & Revenue Roadmap',
    shortDesc: 'Custom strategy for 8-67% revenue growth',
    description: `Every publisher's business is different. What works brilliantly for one publisher might be completely wrong for another. Your audience is unique. Your content is unique. Your demand environment is unique. Your competitive position is unique. Generic advice misses the mark. We start with a comprehensive audit of your business. We analyze 50-100 data points across revenue, technology, team structure, and competitive positioning. We understand where your money currently comes from. We benchmark your CPMs against competitors in your category. We assess how your team spends time. We identify gaps between your current state and your potential state. Most publishers have obvious opportunities they're missing. Maybe you've integrated demand partners but never optimized them. Maybe your floor prices haven't been touched in years. Maybe operations that could be automated still run manually. Maybe inventory segments exist that you're not monetizing. Maybe team structure creates bottlenecks limiting growth. We've helped publishers discover 8-67% revenue growth potential through systematic assessment and strategic planning. One publisher thought 8 percent growth was ambitious. Our audit identified Prebid implementation, floor price optimization, and programmatic expansion. Twelve months of implementation later, they'd achieved 90% growth. The engagement takes 4-8 weeks depending on scope. We deliver a detailed report with opportunities ranked by ROI. Then comes the roadmap—a 12-month plan with clear timelines and financial projections. Some initiatives deliver quick wins. Others are foundational. The economics are straightforward. A $30,000 consulting engagement identifying $500,000 in revenue opportunity is the best investment you can make. Publishers achieving transformational growth combine strategic clarity with execution discipline.`,
    revenue: '$200K-$2M additional identified',
  },
]

export default function Services() {
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
                  <p>{(service as any).description}</p>
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
