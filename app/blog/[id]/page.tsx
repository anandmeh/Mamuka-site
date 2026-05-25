'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../blog-detail.css'

const blogContent = {
  'prebid-integration': {
    title: 'Prebid Integration Suite',
    date: 'May 2026',
    readTime: '8 min read',
    icon: '🔗',
    excerpt: 'Complete header bidding solution that drives 30-50% CPM lift by connecting multiple demand sources.',
    sections: [
      {
        title: 'The Complete Header Bidding Solution for Publishers',
        content: `Prebid is an open-source header bidding library that allows publishers to simultaneously request bids from multiple demand sources (SSPs, ad networks, exchanges) before sending requests to their primary ad server. The Mamuka Prebid Integration Suite simplifies this complex setup into a manageable, production-ready system.`,
      },
      {
        title: 'The Problem It Solves',
        content: `Most publishers either:
- Use only their primary ad server (missing 30-50% of potential demand)
- Attempt DIY Prebid and spend months on configuration
- Hire expensive agencies to manage header bidding
- Face technical debt and slow page load times

Prebid solves all of these challenges with a structured, proven approach.`,
      },
      {
        title: 'How It Works',
        content: `The Mamuka Prebid Integration Suite follows these steps:

1. **Bidder Configuration** — We set up 8-15 pre-vetted demand partners (AppNexus, Rubicon, Criteo, etc.)
2. **Ad Unit Mapping** — Each ad slot on your pages gets automatically mapped to the right bidders
3. **Timeout Management** — Optimal timeout (usually 1-2 seconds) balances revenue with page speed
4. **Price Floors** — Dynamic floor pricing ensures you never accept below-market bids
5. **Monitoring Dashboard** — Real-time bid rates, response times, and fill rates

Each step is carefully optimized to maximize revenue while maintaining user experience.`,
      },
      {
        title: 'Revenue Opportunities',
        content: `Prebid creates multiple revenue streams:

- **30-50% lift in CPMs** — More demand sources = higher competition = higher prices
- **Reduce header latency** — Faster page loads improve user experience and ad viewability
- **Recover lost inventory** — Fill unsold impressions with extra demand partners
- **Better deal negotiation** — Data from Prebid gives you leverage with your primary SSP

A mid-size publisher (10M monthly impressions) can generate $80K-150K additional annual revenue from Prebid alone.`,
      },
      {
        title: 'Real Numbers',
        content: `- Average publisher earns **$8-15 per 1,000 impressions** from header bidding alone
- A mid-size publisher (10M monthly impressions) generates **$80K-150K additional annual revenue**
- Publishers with optimized Prebid see **40-60% reduction in bounce rates** (from faster pages)

**Client Example:**
A premium lifestyle publisher with 25M monthly impressions:
- **Before:** $12 CPM from GAM direct + Google AdX
- **After:** $19 CPM (58% lift) from Prebid + GAM
- **Result:** +$175K annual revenue | +2% page speed improvement`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Beyond basic Prebid setup, there are advanced opportunities:

- **Private deals integration** — Add preferred deals from SSPs at better rates
- **First Look** — Give premium buyers first chance at inventory
- **Video monetization** — Extend Prebid to outstream and video content
- **Mobile optimization** — Reduce latency on mobile devices (often slower)
- **Cross-device tracking** — Follow users across devices for better targeting

These advanced features can add another 10-20% revenue lift.`,
      },
    ],
    cta: 'Schedule your Prebid consultation',
  },
  'upr-optimization': {
    title: 'UPR Optimization Engine',
    date: 'May 2026',
    readTime: '7 min read',
    icon: '⚙️',
    excerpt: 'Intelligent floor price optimization that adjusts dynamically in real-time for maximum revenue.',
    sections: [
      {
        title: 'Algorithmic Floor Price Optimization for Maximum Revenue',
        content: `UPR (Unified Price Recommendation) is an intelligent system that automatically adjusts GAM floor prices in real-time based on:
- Historical bid data
- Current demand patterns
- Inventory scarcity
- Seasonality and trends
- Competitive pricing

Instead of setting a fixed floor price ($5 CPM), the system dynamically optimizes it ($4.50 in off-peak, $8.50 during prime time).`,
      },
      {
        title: 'The Problem It Solves',
        content: `Most publishers set floor prices statically:
- Too high → lose volume and fill rate
- Too low → leave money on the table
- Never adjusted → miss seasonality changes
- No data-driven decision making → guesswork

UPR eliminates this guesswork with intelligent, data-driven optimization.`,
      },
      {
        title: 'How It Works',
        content: `The UPR Optimization Engine follows this process:

1. **Bid Data Collection** — Analyze 90 days of historical bid data from GAM
2. **Machine Learning Model** — Train model on bid patterns, trends, and demand
3. **Real-Time Optimization** — System recalculates optimal floor 4x daily
4. **A/B Testing** — Test floors against control group to measure impact
5. **Dashboard Reporting** — See revenue lift, fill rates, and CPM changes

The system learns continuously and improves over time.`,
      },
      {
        title: 'Revenue Opportunities',
        content: `UPR creates significant revenue upside:

- **8-15% revenue lift** — Direct from better floor optimization
- **Improved fill rates** — Floors set correctly attract more bids
- **Reduce underselling** — Stop leaving money on the table
- **Better bidder relationships** — Fair floors = more participation

A publisher with 10M monthly impressions can gain $50K-200K annually from UPR.`,
      },
      {
        title: 'Real Numbers',
        content: `- Average publisher gains **$0.50-$2.00 per 1,000 impressions**
- Publisher with 10M monthly impressions: **$50K-200K annual lift**
- Peak season (holiday): **20-30% floor increases** without losing volume
- Off-peak: **Lower floors** increase competition and preserve fill

**Client Example:**
A news publisher with 30M monthly impressions:
- **Before:** Fixed $3 floor, 65% fill rate
- **After:** Dynamic floor ($2.50-$4.50), 78% fill rate
- **CPM increase:** $4.20 → $5.10
- **Result:** +$324K annual revenue | +13% fill rate`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Advanced optimization strategies:

- **Geo-based optimization** — Higher floors in US/UK, lower in international
- **Time-based pricing** — Premium rates during peak traffic hours
- **Content-type pricing** — News articles = higher floors than listicles
- **Device optimization** — Mobile vs desktop price differentiation
- **Seasonal patterns** — Black Friday/Cyber Monday dynamic pricing

These advanced tactics can unlock an additional 5-10% revenue lift.`,
      },
    ],
    cta: 'Get your free floor optimization audit',
  },
  'sales-order-creator': {
    title: 'Sales Order Creator',
    date: 'May 2026',
    readTime: '6 min read',
    icon: '📋',
    excerpt: 'Streamlined GAM order management that reduces setup time from 30 minutes to 5 minutes.',
    sections: [
      {
        title: 'Streamlined GAM Order Management & Automation',
        content: `The Sales Order Creator is a 4-step wizard tool that simplifies creating Google Ad Manager orders, line items, and creatives. Instead of 15-20 manual steps in GAM's complex UI, publishers complete setup in minutes with automated validations.`,
      },
      {
        title: 'The Problem It Solves',
        content: `Creating a GAM order manually requires:
- 15-20 different fields across 3+ screens
- Deep knowledge of GAM's terminology (line items, creatives, key values)
- Risk of configuration errors (wrong CPM, wrong creative size, wrong targeting)
- Significant time investment per order (~30 minutes)
- Difficult to track and audit order history

Sales Order Creator streamlines this entire process.`,
      },
      {
        title: 'How It Works',
        content: `The 4-step wizard makes order creation simple:

1. **Step 1: Order Details** — Enter order name, advertiser, start/end dates
2. **Step 2: Line Items** — Define impression targets, CPM, targeting rules
3. **Step 3: Creatives** — Upload or link creative assets (display, video)
4. **Step 4: Review & Create** — Validate everything, then auto-create in GAM

Each step includes validation to prevent errors before they happen.`,
      },
      {
        title: 'Revenue Opportunities',
        content: `Sales Order Creator multiplies your sales capacity:

- **Faster order fulfillment** — From 30 min to 5 min per order
- **Fewer configuration errors** — Fewer errors = fewer missed impressions
- **More ad sales capacity** — Sales team can handle 5-6x more orders
- **Better client service** — Quick turnarounds = happier advertisers`,
      },
      {
        title: 'Real Numbers',
        content: `- A sales team of 3 people can handle **10-15 additional orders per week**
- Each order = **$5K-$25K annual ad spend** (depending on your niche)
- **$50K-375K additional annual revenue** per salesperson
- ROI: Pays for itself in first month of use

**Client Example:**
Premium publisher with 4-person sales team:
- **Before:** 50 orders/month, 30 min per order (sales time)
- **After:** 150 orders/month, 5 min per order (sales time)
- **Result:** 3x more orders | +$1.2M annual revenue | more time for upsells`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Advanced capabilities:

- **Bulk order creation** — Upload CSV of 50 orders, auto-create all
- **Template management** — Save & reuse order configurations
- **Performance tracking** — See per-order delivery, pacing, CPM
- **Advertiser analytics** — Revenue reports by advertiser, time period
- **Programmatic integration** — Connect to demand-side platforms (DSPs)

These features can further improve team efficiency and sales capacity.`,
      },
    ],
    cta: 'See Sales Order Creator in action',
  },
  'programmatic-advertising': {
    title: 'Programmatic Advertising',
    date: 'May 2026',
    readTime: '8 min read',
    icon: '🎯',
    excerpt: 'Real-time bidding automation that fills unsold inventory and drives 20-50% revenue from untapped demand.',
    sections: [
      {
        title: 'Real-Time Bidding & Automated Ad Placement',
        content: `Programmatic advertising automates the buying and selling of ad inventory in real-time. Instead of direct deals negotiated months in advance, algorithms instantly match advertiser campaigns with publisher inventory based on targeting criteria.`,
      },
      {
        title: 'The Problem It Solves',
        content: `Traditional ad sales are manual and slow:
- Months to negotiate one deal
- Inventory often unsold (wasted revenue)
- Targeting is basic (geo, device, day/time only)
- No real-time optimization
- Sales team spends time on admin, not strategy

Programmatic solves these inefficiencies automatically.`,
      },
      {
        title: 'How It Works',
        content: `The programmatic ecosystem works in four steps:

1. **Auction Setup** — Define which impressions are available to programmatic buyers
2. **Demand Connection** — Connect to major SSPs (Google AdX, Index Exchange, OpenX)
3. **Real-Time Bidding** — For each impression, thousands of buyers bid simultaneously
4. **Instant Decisioning** — In milliseconds, highest bid wins and ad is served
5. **Continuous Optimization** — Algorithms learn which audiences are valuable

The entire process happens in under 100 milliseconds per impression.`,
      },
      {
        title: 'Revenue Opportunities',
        content: `Programmatic creates multiple revenue streams:

- **Fill unsold inventory** — 30-40% of publisher inventory often goes unsold; programmatic fills it
- **Higher CPMs** — Competition from thousands of buyers drives prices up
- **Passive income** — No sales team needed; algorithms handle it
- **Audience targeting** — Reach niche audiences advertisers want to buy`,
      },
      {
        title: 'Real Numbers',
        content: `- Publishers earn **$2-8 per 1,000 impressions** from programmatic (lower than direct but fills inventory)
- Unsold inventory is often **20-40%** of total capacity
- Converting 50% of unsold to programmatic = **$50K-$300K additional annual revenue** (depending on size)
- Programmatic can account for **40-60% of publisher revenue**

**Client Example:**
A tech news site with 15M monthly impressions:
- **Before:** 8M impressions sold (53% fill)
- **After:** 13M impressions monetized (87% fill)
- **Programmatic revenue:** 5M impressions × $3.50 CPM = $17,500/month = **$210K/year**
- **Total lift:** +$210K annual revenue`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Advanced programmatic strategies:

- **Private marketplace (PMP)** — Premium programmatic deals at negotiated rates
- **Preferred deals** — Guaranteed inventory at fixed prices for select buyers
- **Audience marketplace** — Sell first-party audience data (high-value subscribers)
- **Cross-device targeting** — Follow users across phone, tablet, desktop
- **Contextual targeting** — Target by article topic, not just user behavior

These premium formats can achieve 2-3x higher CPMs than standard programmatic.`,
      },
    ],
    cta: 'Unlock your programmatic potential',
  },
  'gam-command-center': {
    title: 'GAM Command Center',
    date: 'May 2026',
    readTime: '7 min read',
    icon: '🎛️',
    excerpt: 'Unified dashboard for real-time ad operations monitoring with alerts and performance tracking.',
    sections: [
      {
        title: 'Unified Dashboard for Ad Operations Management',
        content: `The GAM Command Center is a comprehensive dashboard that consolidates GAM data, analytics, and controls into one place. Instead of logging into GAM and navigating 10+ screens to understand performance, everything is visible in real-time.`,
      },
      {
        title: 'The Problem It Solves',
        content: `GAM's native interface is powerful but complex:
- Data is scattered across multiple reports
- Takes 20+ minutes to generate a performance report
- No real-time alerts when something goes wrong
- Hard to see trends or compare performance across time
- Limited mobile access for on-the-go monitoring

The Command Center consolidates everything into one intuitive view.`,
      },
      {
        title: 'How It Works',
        content: `The Command Center integrates with GAM via API:

1. **Data Integration** — Pulls live data from GAM API every 15 minutes
2. **Custom Dashboards** — View impressions, clicks, CPM, fill rate, revenue
3. **Drill-down Analytics** — Click on any metric to see underlying data
4. **Alerting** — Notifications if CPM drops 20% or fill rate falls below threshold
5. **Export & Reporting** — One-click reports for stakeholders

Data updates every 15 minutes with historical tracking.`,
      },
      {
        title: 'Key Metrics Displayed',
        content: `The dashboard tracks essential KPIs:

- **Impressions** — Total served across all line items
- **Clicks** — Click-through rate (CTR) by geography, device, creative
- **CPM trends** — Visual graph of CPM over time
- **Fill rate** — % of available inventory that was sold
- **Revenue** — Daily, weekly, monthly totals
- **Line item pacing** — Track towards impression goals
- **Underperforming inventory** — Which ad slots lag behind

All metrics are color-coded for quick pattern recognition.`,
      },
      {
        title: 'Real Numbers',
        content: `- Ad ops teams save **5-10 hours per week** on manual reporting
- Faster problem resolution saves **$500-$2,000 per incident** (prevented revenue loss)
- Better targeting decisions = **2-5% CPM improvement** ($20K-$100K for large publishers)
- Improved client retention = higher lifetime value

**Client Example:**
Mid-size publisher with 20M monthly impressions:
- **Before:** Manual reports take 8 hours/week, often outdated
- **After:** Real-time dashboard, automated alerts
- **Result:** 8 hours saved/week | Caught CPM drop within 2 hours (prevented $5K loss) | Improved client relationships`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Advanced analytics features:

- **Predictive analytics** — ML models forecast demand 7-14 days out
- **Anomaly detection** — Automatic alerts for unusual patterns
- **Competitive benchmarking** — Compare your CPMs to industry benchmarks
- **Creative performance** — See which designs/messages drive highest CTR
- **Audience insights** — Demographic data on who's viewing your inventory

These insights can drive another 5-10% optimization gains.`,
      },
    ],
    cta: 'Get real-time visibility into your ad operations',
  },
  'consulting-strategy': {
    title: 'Consulting & Strategy',
    date: 'May 2026',
    readTime: '9 min read',
    icon: '💡',
    excerpt: 'Expert guidance for publisher revenue transformation with 8-67% growth potential.',
    sections: [
      {
        title: 'Expert Guidance for Publisher Revenue Transformation',
        content: `Strategic consulting to assess your current ad tech stack, identify revenue leaks, and create a roadmap for 8-67% revenue growth. Our team of AdTech specialists reviews everything from pricing strategy to inventory management.`,
      },
      {
        title: 'The Problem It Solves',
        content: `Publishers often have:
- Disconnected ad tech tools that don't work together
- Pricing strategies based on gut feeling, not data
- Untapped inventory segments (mobile, international, video)
- No clear roadmap for revenue growth
- Too much manual work, not enough automation

Our consulting identifies and solves all of these gaps.`,
      },
      {
        title: 'What We Audit',
        content: `Our comprehensive audit covers:

1. **Current revenue streams** — Where is money coming from?
2. **Pricing analysis** — Are floors optimal? Are CPMs competitive?
3. **Competition analysis** — How do you compare to similar publishers?
4. **Technology stack** — Which tools are working? Which should be replaced?
5. **Inventory analysis** — Where are revenue opportunities?
6. **Team & process review** — How efficient is your sales/ops team?

Each audit produces a detailed 50-100 data point analysis.`,
      },
      {
        title: 'What We Deliver',
        content: `Consulting engagement includes:

- **Baseline assessment** — Current state analysis with 50-100 data points
- **Opportunity report** — Specific initiatives ranked by ROI potential
- **12-month roadmap** — Phased implementation plan with timelines
- **Financial projections** — Expected revenue lift from each initiative
- **Exec summary** — Board-ready presentation of findings

The entire engagement typically takes 4-8 weeks.`,
      },
      {
        title: 'Real Numbers',
        content: `- Average engagement: **$20K-$50K in consulting fees**
- Average outcome: **$200K-$2M additional annual revenue identified**
- ROI: **10x-50x return** on consulting investment
- Publishers following our roadmap achieve **8-67% revenue growth** in 12-24 months

**Case 1: Mid-Tier Publisher (10M monthly impressions)**
- **Before:** $50K/month revenue, manual pricing
- **Opportunity:** Prebid + floor optimization + programmatic
- **Engagement:** 3-month implementation
- **After:** $95K/month revenue
- **Result:** +$540K annual revenue | 90% ROI on consulting

**Case 2: Premium Publisher (50M monthly impressions)**
- **Before:** $800K/month, fragmented tools
- **Opportunity:** Tool consolidation + UPR + team restructuring
- **Engagement:** 6-month implementation
- **After:** $1.3M/month revenue
- **Result:** +$6M annual revenue | 120x ROI`,
      },
      {
        title: 'Hidden Opportunities',
        content: `Strategic initiatives beyond core services:

- **Audience first-party data** — Build owned audience for higher CPMs
- **Content sponsorships** — Premium pricing for sponsored content
- **International expansion** — Enter high-CPM markets (US, UK, AU)
- **Subscription hybrid model** — Mix free ad-supported + premium
- **B2B inventory** — Sell to enterprise advertisers at 2-3x CPM

These strategic moves can unlock exponential growth potential.`,
      },
    ],
    cta: 'Start your revenue transformation',
  },
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const [showForm, setShowForm] = useState(false)
  const post = blogContent[params.id as keyof typeof blogContent]

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
            {post.sections.map((section, idx) => (
              <section key={idx} className="blog-section-block">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}

            <section className="blog-cta-section">
              <h2>{post.cta}</h2>
              <button
                className="btn-primary"
                onClick={() => setShowForm(true)}
              >
                Get Started
              </button>
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
