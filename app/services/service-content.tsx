export const serviceContent = {
  'prebid-integration': {
    title: 'Prebid Integration Suite',
    excerpt: 'Connect to multiple demand sources and unlock 30-50% CPM increases through header bidding.',
    icon: '🔗',
    date: 'May 2026',
    readTime: '4 min',
    content: `Most publishers operate with fundamental inefficiency in their ad auction mechanics. They sell inventory through one or two primary channels—a direct sales team and a single SSP. That concentration of demand means significant volume goes unbid. Demand that would pay premium prices never gets a chance to compete.

Header bidding fundamentally changes how ad auctions work. Instead of sequential bidders competing for the right to bid first, header bidding creates simultaneous auctions where all demand partners bid at once. The highest bid wins. This simple mechanic change creates dramatic revenue increases because actual market competition drives prices up.

The impact is predictable. A publisher with 10 million monthly impressions connecting eight to fifteen demand partners instead of one or two sees CPM increases of 30-50 percent. That translates to $80,000-$150,000 in additional annual revenue for a mid-size publisher. Larger publishers see proportionally larger gains.

Implementation requires expertise. You need to identify which demand partners make sense for your specific traffic and content. You need to configure timeouts that maximize bids while keeping page load times reasonable. You need to set floor prices that capture fair value without pricing out legitimate demand. You need monitoring infrastructure to understand what's actually happening.

Our approach handles this end-to-end. We assess your current demand environment and identify the partners with best fit for your content and geography. We configure Prebid properly—not just installed, but optimized. We establish monitoring so you can see what demand partners are bidding and why. We set up floor prices based on your actual data. One publisher increased from $12 to $19 CPM through proper Prebid setup—a 58 percent increase from the same traffic.

The ongoing benefits compound. Better auction mechanics create better outcomes quarter after quarter. You're not doing one-time optimization; you're changing the structural economics of your ad sales.`,
  },

  'upr-engine': {
    title: 'UPR Optimization Engine',
    excerpt: 'Intelligently optimize floor prices in real-time to maximize revenue without sacrificing fill rates.',
    icon: '⚙️',
    date: 'May 2026',
    readTime: '4 min',
    content: `Floor price optimization is one of the highest-impact but least-optimized levers in publisher monetization. Most publishers set a floor price and forget it. Some adjust quarterly if they remember. Few have systematic approaches to floor optimization.

The mechanics are straightforward but require data. Your historical bid data shows what demand partners are willing to pay. Machine learning trained on that data can identify patterns. Bid prices change based on time of day, day of week, seasonality, current demand environment, and dozens of other factors. An optimal floor price of $3 on Monday at 9 AM might be completely wrong on Friday at 5 PM.

Our UPR engine analyzes your 90-day historical bid data and learns the actual patterns in your specific demand environment. It then recalculates optimal floor prices four times daily. The system balances revenue in the moment with long-term bidder relationships—aggressive pricing might work once but burns partnerships.

The results are measurable. A publisher with 30 million monthly impressions improved CPMs from $4.20 to $5.10 while simultaneously increasing fill rates from 65 percent to 78 percent. That's not a trade-off; that's simultaneous improvement on both metrics. The revenue impact is $324,000 annually from optimization on the same traffic.

The system learns continuously. As demand patterns evolve, the model adapts. New bidders appearing? The system recognizes them. Seasonal demand shifting? The model adjusts floors accordingly. Content mix changing? The system learns and optimizes. You set it up once and the optimization compounds over time.

Beyond basic floor price optimization, there's opportunity in segmented pricing. Different geographies, different content categories, different audience segments—each could benefit from tailored floor strategies. The possibilities compound your returns if you have the data infrastructure to support segmentation.`,
  },

  'sales-order-creator': {
    title: 'Sales Order Creator',
    excerpt: 'Transform your sales process from 30-minute order setups to 5-minute configurations with automated validation.',
    icon: '📋',
    date: 'May 2026',
    readTime: '4 min',
    content: `Creating a Google Ad Manager order is deceptively complex. On the surface, it seems simple—enter advertiser, set dates, define line items, add creatives. But the actual process requires deep knowledge of GAM's terminology, configuration options, and gotchas. A sales person without expertise can easily make configuration errors that result in under-delivery or delivery to the wrong audience.

The typical order creation takes 30 minutes per order. For a sales team of four people handling 50 orders per month, that's 100 hours monthly spent on admin work. That same team could potentially handle 150 orders monthly with the right tools. Each additional order is $5,000-$25,000 in annual advertiser spend depending on your niche. That 100-order monthly increase represents $100,000-$500,000 in incremental annual revenue from the same team.

The Sales Order Creator streamlines this process into a simple four-step wizard. Step one: order basics (advertiser, dates, trafficking person). Step two: line items (targeting, impressions, CPM). Step three: creatives (upload or link assets). Step four: review and create. Each step validates your inputs, preventing errors before they happen.

The impact extends beyond speed. Fewer errors means better delivery performance. Better delivery means happier advertisers. More capacity means your sales team can spend time on strategy instead of administration. They can negotiate better terms, explore new advertiser categories, build deeper relationships. The tool removes friction from the process.

Implementation is straightforward—a few hours to integrate with your GAM account and train your team. The payoff is immediate. Faster order fulfillment, fewer configuration errors, dramatically increased sales capacity. It's the kind of leverage every publisher sales team should have.`,
  },

  'programmatic-guide': {
    title: 'Programmatic Advertising',
    excerpt: 'Monetize unsold inventory and expand demand through real-time bidding and automated ad placement.',
    icon: '🎯',
    date: 'May 2026',
    readTime: '4 min',
    content: `Direct sales are valuable, but they're inherently limited. Your sales team can only handle so many relationships. Their capacity sets a ceiling on direct-sold volume. Every publisher has inventory beyond that ceiling that sits unsold, generating zero revenue.

Programmatic advertising solves this capacity constraint. Instead of salespeople negotiating individual deals, technology automatically connects your unsold inventory to a global marketplace of buyers. A visitor lands on your page, an auction opens, thousands of potential bidders compete for that impression in milliseconds, the highest bidder wins, and their ad appears. The entire process happens in 100 milliseconds.

For a publisher with 20 million monthly impressions where 10-12 million sell directly to advertisers, that remaining 8-10 million represents opportunity. Connecting to Google AdX, Index Exchange, OpenX, and other SSPs turns that unsold inventory into revenue. A tech publisher with 15 million monthly impressions at 53 percent direct sell-through left 7 million impressions unsold. Implementing programmatic filled 87 percent of capacity, generating $17,500 monthly—$210,000 annually—from inventory that previously generated nothing.

The revenue isn't incidental either. Competition from thousands of simultaneous bidders drives CPMs higher than you'd get from unsold inventory. You're accessing global demand, not just local demand. You're reaching advertisers who'd never buy direct but will bid programmatically.

The sophistication scales with your goals. Basic programmatic works well for most publishers. Private Marketplace deals let select premium advertisers buy programmatic inventory at negotiated rates. Preferred deals give early access to quality inventory for key partners. The mechanics are flexible once the core infrastructure is in place.`,
  },

  'gam-dashboard': {
    title: 'GAM Command Center',
    excerpt: 'Real-time monitoring and analytics dashboard for complete visibility into your ad operations and performance.',
    icon: '🎛️',
    date: 'May 2026',
    readTime: '4 min',
    content: `Google Ad Manager's native interface spreads critical data across a dozen different reports. Getting a complete picture of daily performance requires visiting multiple dashboards, waiting for report generation, then manually synthesizing the data. By the time you understand yesterday's performance, it's already ancient history.

Real-time visibility creates different dynamics. When something goes wrong—CPMs drop significantly, fill rates decline, a technical issue emerges—you detect it within hours instead of discovering it days later. That early detection is worth thousands of dollars. A publisher detecting a CPM issue within two hours and fixing it might save $5,000 that month. Left undetected for a week, that same issue costs $35,000+.

The Command Center consolidates everything into one integrated dashboard. Impressions, clicks, CPM trends, fill rates, revenue, line item pacing, underperforming inventory—it's all visible in one place. The dashboard updates every 15 minutes. You can set alerts for specific conditions. You get notified immediately if CPM drops below thresholds or fill rates fall.

Ad operations teams typically spend 5-10 hours weekly on manual reporting—extracting data, formatting spreadsheets, explaining performance to stakeholders. That time adds no strategic value. The Command Center automates this entirely. Custom dashboards for different stakeholders, automated exports, scheduled email reports. The team moves from reactive reporting to strategic decision-making.

Beyond basic reporting, there's advanced analytics. Predictive analytics forecast demand 7-14 days out, helping with inventory planning. Anomaly detection flags unusual patterns automatically. Creative performance analysis shows which designs drive engagement. Audience insights reveal demographic data on engaged users. These insights create opportunities for additional optimization.

The benefit compounds. Better visibility enables better decisions. Better decisions drive better outcomes. Better outcomes lead to higher revenue. All of this happens with less manual work through a single integrated dashboard.`,
  },

  'consulting': {
    title: 'Consulting & Strategy',
    excerpt: 'Expert guidance to assess your current state and build a roadmap for 8-67% revenue growth.',
    icon: '💡',
    date: 'May 2026',
    readTime: '4 min',
    content: `Every publisher operates within unique constraints and opportunities. Your audience is different. Your content is different. Your demand environment is different. Your competitive position is different. A strategy that works brilliantly for one publisher might be completely wrong for yours.

We start with a comprehensive audit of your business. We analyze 50-100 data points across revenue, technology, team structure, and competitive positioning. We understand where your money currently comes from. We benchmark your CPMs against competitors in your category. We assess how your team spends time. We identify gaps between your current state and your potential state.

Most publishers have obvious gaps. Maybe you've integrated demand partners but never optimized them. Maybe your floor prices haven't been touched in years. Maybe operations that could be automated still run manually. Maybe inventory segments exist that you're not monetizing. Maybe team structure creates bottlenecks limiting growth.

We've helped publishers discover 8-67% revenue growth potential through systematic assessment and strategic planning. One publisher thought 8 percent growth was ambitious. Our audit identified Prebid implementation, floor price optimization, and programmatic expansion. Twelve months of implementation later, they'd achieved 90% growth.

The engagement takes 4-8 weeks depending on scope. We deliver a detailed report with opportunities ranked by ROI. Then comes the roadmap—a 12-month plan with clear timelines and financial projections. Some initiatives deliver quick wins (one week implementation, immediate impact). Others are foundational (three months, enabling future growth).

The economics are straightforward. A $30,000 consulting engagement identifying $500,000 in revenue opportunity is the best investment you can make. It's not about quick fixes; it's about seeing your business clearly, identifying genuine opportunities, and building a plan to capture them. The publishers achieving transformational growth combine strategic clarity with execution discipline. They get the consulting, build the roadmap, and actually implement it. That's where exceptional results come from.`,
  },
}
