export interface CaseStudy {
  id: string
  title: string
  icon: string
  excerpt: string
  date: string
  readTime: string
  content: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'video',
    title: 'Video Strategy: Preroll & Midroll Optimization',
    icon: '🎬',
    excerpt: 'How a media publisher restructured video ad placement to capture premium CPMs while maintaining viewer engagement.',
    date: 'May 2026',
    readTime: '4 min',
    content: `A lifestyle media publisher faced a familiar problem: video inventory that wasn't generating the revenue it should. They had the audience. They had the video content. But their video advertising strategy was creating friction between monetization goals and user experience.

The publisher's initial approach was typical—load ads aggressively, hope some stick, measure what lands. Preroll ads ran for 30-45 seconds at the start of every video. Midroll ads appeared whenever algorithm deemed them appropriate. The result was predictable: viewer frustration, incomplete views, and CPMs that lagged far behind the industry benchmarks for quality video inventory.

What was missing wasn't more aggressive ad insertion. It was strategic placement based on how viewers actually consume content.

The shift began with preroll placement strategy. Rather than treating all prerolls identically, the publisher implemented segmented rules. Short-form content (under 3 minutes) received 15-second preroll only. Medium-form content (3-8 minutes) received 30-second preroll. Long-form content (8+ minutes) received 30-second preroll plus continuation opportunity. This segmentation alone reduced bounce rates because the ad load matched viewer expectations for the content format.

Midroll placement followed a similar principle—content structure, not arbitrary frequency. The publisher mapped natural narrative breaks in their video content, identifying moments where viewers expected transitions. Video essays have distinct section breaks. How-to content has step transitions. Entertainment content has scene transitions. Midroll ads inserted at these natural moments felt less disruptive than ads interrupting narrative flow mid-thought.

Lazy-loading video ads changed the equation substantially. Rather than loading all ad inventory upfront, ads loaded as viewers progressed through content. A 10-minute video might have three midroll ad opportunities, but ads loaded only when the viewer reached the appropriate timestamp. This reduced page weight significantly, improving load times and reducing bounce rates before the video even started.

The final piece was dynamic ad load intensity based on viewer engagement. The publisher implemented signals monitoring: how long viewers watched before dropping off, whether they rewound or skipped, whether they engaged with related content afterward. Highly engaged viewers received slightly heavier ad loads. Viewers showing early drop-off received lighter loads. This created a virtuous cycle where engaged viewers generated more impressions while maintaining completion rates.

The financial impact was substantial. Video CPMs increased 34% within the first 60 days. Completion rates improved to 85%+ (up from 62%). Overall video revenue increased 42% in the first quarter despite no significant traffic growth. Viewability metrics remained strong at 87% across all placements.

What made this strategy durable was that it aligned publisher incentives with viewer incentives. Aggressive ad loads depress viewer experience, creating friction that ultimately suppresses revenue. Strategic placement based on content structure and engagement signals creates better experiences while generating premium revenue. This is the pattern that distinguishes short-term monetization tactics from sustainable revenue strategies.`,
  },
  {
    id: 'pps',
    title: 'PPS & PPID: Audience & Revenue Maximization',
    icon: '👤',
    excerpt: 'How a finance publisher leveraged first-party audience signals to maintain CPMs during cookie deprecation.',
    date: 'May 2026',
    readTime: '4 min',
    content: `A financial services publisher watched cookie deprecation with genuine concern. Their advertising business depended on third-party data—browser history inference, cross-site audience profiles, probabilistic audience segments. Without third-party cookies, how would they communicate audience value to advertisers?

The conventional panic response was predictable. Assume revenue loss. Assume CPM decline. Assume a slow erosion toward commoditized inventory pricing.

But this publisher recognized something others missed. They had something more valuable than third-party inferences: direct knowledge of their readers. Logged-in users who explicitly provided subscription information, content preferences, and investment interests. This first-party data was more accurate, more valuable, and more defensible than any third-party profile.

The publisher's first step was implementing publisher-provided identifiers (PPID). For every logged-in user, they generated a deterministic pseudonymous identifier. Not a cookie. Not a tracking parameter. A hashed value representing the user to demand partners, enabling user recognition without relying on third-party infrastructure.

Within their user base, PPID coverage reached 42% of daily traffic. For anonymous visitors, they maintained contextual signals—page category, time of day, device type. Combined PPID and contextual coverage reached 68% of inventory.

Publisher-provided signals (PPS) came next. The publisher passed audience signals to bidders through Prebid, communicating real audience attributes. A user reading multiple articles about cryptocurrency trading wasn't a probabilistic guess—it was documented behavior. A user with an active premium finance subscription wasn't an inference—it was explicit subscription status.

The publisher segmented their audience by investment profile. Retail investors interested in ETFs. Accredited investors interested in alternative investments. Institutional investors making allocation decisions. Day traders focused on volatility. Each segment had distinct advertiser value and received distinct signal transmission to bidders.

The results emerged quickly. CPM premiums for PPID-identified traffic reached 22% above anonymous. Bid density from premium financial advertisers improved 31% because they could trust signals about audience composition. Rather than competing on CPM volume, bidders competed on ability to reach specific, verified audience segments.

Revenue per thousand impressions improved 18% despite meaningful cookie deprecation because first-party data commanded premium valuations. Advertisers paid more for direct audience knowledge than probabilistic inference—the fundamental truth the publisher acted on.

What made this sustainable wasn't just the immediate CPM lift. It was the competitive moat first-party data created. Competitors without registered user bases lacked the audience intelligence to command premium pricing. They competed on volume and contextual signals. This publisher competed on audience quality and explicit user attributes.

The privacy posture improved simultaneously. Users understood exactly what audience data was being used—subscription status, content preferences, reading history—all within the context they explicitly provided. No third-party tracking. No mysterious profile building. This transparency increased user trust while enabling premium monetization.`,
  },
  {
    id: 'prebid',
    title: 'Prebid Self-Hosting & Slot Optimization',
    icon: '🔧',
    excerpt: 'How a news publisher optimized header bidding to improve page speed and increase bid quality.',
    date: 'May 2026',
    readTime: '4 min',
    content: `A regional news publisher's programmatic setup was technically sound but economically inefficient. They were using Prebid for header bidding, but relying on a CDN-hosted version that served tens of thousands of publishers. Page latency was high. Bid quality was inconsistent. Revenue per thousand impressions lagged peer benchmarks.

The core issue was architectural. CDN-hosted Prebid made sense for publishers without scale. But this publisher generated 18 million monthly impressions and had the volume to justify infrastructure investment. They were optimizing for convenience rather than economics.

The shift began with self-hosting Prebid.js. Rather than loading Prebid from a shared CDN, the publisher served it from their own origin. This single change reduced Prebid initialization time from 380ms to 140ms. Page load improved immediately.

More importantly, self-hosting enabled radical adapter simplification. The publisher's original setup included 23 demand partner adapters. Some generated 2% of programmatic revenue. Others generated 15%. Many generated meaningless bid volume—bids that were rarely competitive or aligned with publisher needs.

The publisher implemented strict adapter hygiene. Each adapter required justification: does it generate meaningful bid participation? Does it improve competitive dynamics? Does it add value relative to operational overhead? The initial 23 adapters reduced to 8 high-performing demand partners. This meant each adapter integration received more operational attention and optimization.

With fewer adapters, the publisher optimized timeout settings. Prebid's auction times out after a configured threshold—300ms is standard, but many publishers keep it higher. The publisher tested aggressively: 200ms timeout, 250ms timeout, 300ms timeout, 350ms timeout. They measured bid participation, bid quality, and page load.

The sweet spot was 220ms. At this timeout, they captured 94% of quality bids while maintaining sub-600ms page load. Bids arriving after 220ms were rarely competitive anyway—mostly low-value demand filling the long tail of their bidder list.

Slot optimization followed. The publisher reviewed their ad unit architecture—every placement, every size variant, every targeting rule. Some slots were optimized for mobile. Others for desktop. Some appeared high on pages. Others below the fold. Rather than optimizing each slot individually, the publisher grouped slots by performance characteristics and applied unified optimization.

High-impact above-the-fold slots received direct private marketplace deals with premium demand partners, bypassing header bidding entirely. Mid-impact slots received header bidding with all 8 adapters. Low-impact below-the-fold slots received a reduced adapter set—only high-volume, low-selectivity partners.

The results compounded. Page load improved 240ms on average. Bid participation from quality bidders increased 19% because pruned adapters meant less noise and faster decision-making. Revenue on optimized slots increased 27% through better deal structure and more focused bidder competition.

The infrastructure investment—self-hosting, adapter management, ongoing optimization—was substantial. But the payoff was durable. CDN fees dropped $45k annually. More importantly, the publisher had created an economic incentive structure aligned with revenue generation rather than arbitrary bidder participation. Every adapter served a purpose. Every millisecond of latency was accounted for.`,
  },
  {
    id: 'upr',
    title: 'Unified Pricing Rules & Waterfall Optimization',
    icon: '💰',
    excerpt: 'How a technology publisher used ML elasticity modeling to optimize floor prices and increase yield.',
    date: 'May 2026',
    readTime: '4 min',
    content: `A technology publisher had inventory management down to a science—dozens of ad units, sophisticated targeting rules, a well-optimized header bidding setup. But pricing was static. Floor prices were set quarterly based on historical data and adjusted manually. It worked, but it left revenue on the table.

The publisher recognized that floor pricing operated in a demand elasticity curve. Set floors too high, and fill rates collapse—inventory doesn't sell. Set floors too low, and you're underpricing premium inventory. The optimal floor sits at a precise point where you maximize revenue across fill rate and price.

That optimal point wasn't static. It shifted based on day of week, time of day, advertiser budgets, competitive demand, and seasonality. Manual quarterly adjustments couldn't capture this dynamic.

The solution was deploying a unified pricing rules engine with elasticity modeling. The publisher clustered their inventory into eight categories: premium desktop above-the-fold, standard desktop mid-page, mobile leaderboard, mobile bottom-of-page, content recommendation, video preroll, video midroll, and sidebar. Each cluster had distinct demand characteristics and fill-rate sensitivity to price changes.

For each cluster, the publisher gathered historical data: what were bids at various floor prices, what was the fill rate, what was total revenue? They fit elasticity curves to this data, modeling how fill rate responded to price changes. Desktop premium inventory had high elasticity—high demand remained strong even at elevated floors. Mobile bottom-of-page inventory had low elasticity—fill rates dropped sharply with modest price increases.

These elasticity models became the foundation of dynamic pricing. The pricing engine observed real-time demand signals. Were CPMs rising consistently? Increase floors. Were fill rates dropping faster than usual? Decrease floors. The engine optimized weekly based on patterns while capping adjustments at ±15% to prevent overreaction to noise.

The real power emerged when they restructured their waterfall. Previously, the publisher used a semi-random sequencing: partner A got first position, partner B second, based on historical performance. This created systematic underpricing—first-position partners knew lower partners wouldn't compete actively, so they underbid.

The restructured waterfall was explicit and demand-based. High-margin direct deals received first position, effectively removing inventory from auction. Header bidding received second position with all demand partners bidding simultaneously. Third position was the open exchange for unsold inventory. Fourth position was a backup partner. This hierarchy reflected actual economics rather than arbitrary sequencing.

The publisher A/B tested the new strategy carefully. 85% of inventory ran control (existing pricing and waterfall). 15% ran test (optimized pricing and waterfall) for seven days. The measurement infrastructure captured fill rates, CPMs, revenue per thousand impressions, and external demand signals.

Results were compelling. The test group generated 12.3% higher revenue in the first week. Floor prices increased 8.5% on average. Fill rates decreased 3.2%—acceptable because 2% higher CPM combined with 3% lower fill still meant higher total revenue. By day seven, statistical significance reached 95% confidence. They rolled out the optimization to 100% of inventory.

The ongoing operational benefit was substantial. Rather than manual floor-price adjustments every quarter, the system adjusted dynamically based on real demand patterns. As demand softened, floors adjusted automatically. As demand strengthened, the system captured upside. The publisher's yield operations moved from reactive manual management to proactive dynamic optimization.`,
  },
  {
    id: 'inventory',
    title: 'Inventory Architecture & Ad Unit Structuring',
    icon: '🏗️',
    excerpt: 'How a publishing network reorganized ad inventory to enable precise pricing and faster optimization cycles.',
    date: 'May 2026',
    readTime: '4 min',
    content: `A multi-category publishing network had grown organically over seven years. Travel content. Technology news. Career guides. Business analysis. Each section had different audiences, traffic patterns, and advertiser appeal. The ad operations infrastructure grew similarly—organically, inconsistently, accumulated over time.

The result was structural chaos. Ad units named inconsistently across properties. Sizes mixing standard IAB formats with proprietary dimensions. Pricing rules scattered across multiple spreadsheets, sometimes conflicting. Reporting required manual data collection and reconciliation. Optimization took weeks because understanding which units belonged to which category required detective work.

The core problem was that inventory structure followed organizational silos rather than economic reality. Technology ads didn't just run on the Technology section. They ran across Career guides, on homepage recommendations, in promoted content sections. But the ad operations team couldn't easily identify all technology-targeting inventory because units were named and organized by section rather than by audience intent.

The publisher restructured using a hierarchical naming convention. Every ad unit followed a pattern: network/section/format/size. Network identified the top-level property. Section indicated content category—not page location, but content topic. Format indicated the placement type—leaderboard, sidebar, below-content, content-recommendation, etc. Size specified standard IAB dimensions.

Under this structure, every unit had meaning. A path like travelsite/luxury/leaderboard/728x90 was clearly a leaderboard ad in luxury travel content. Another like techsite/cloud-computing/sidebar/300x250 was clearly a sidebar rectangle in cloud computing content. Any person or system could understand inventory composition instantly.

More importantly, this structure enabled inventory clustering. The publisher identified that reporting on individual units was less important than understanding inventory categories. They clustered units into segments: premium above-the-fold placements, standard mid-page content advertising, mobile placements, content recommendation inventory, video inventory, and homepage featured placements. Some categories spanned multiple properties. This clustering reflected actual advertiser demand, not organizational structure.

Pricing rules reorganized accordingly. Rather than maintaining individual floor prices for 400+ ad units, they maintained eight cluster-level pricing rules. Desktop premium received one rule. Mobile content ads received another. Video received a third. This unified approach meant a pricing change applied intelligently across all relevant inventory rather than requiring manual updates to dozens of individual units.

The real impact emerged in reporting and optimization. Where previously the publisher needed days to understand inventory performance by advertiser category, they could now generate reports in hours. They could identify that technology advertisers spent 60% of budget on premium above-the-fold inventory, 25% on standard placements, and 15% on recommendation inventory—and identify underperforming inventory within each category.

Yield optimization cycles accelerated dramatically. Where optimization previously took two weeks—gather data, analyze, implement changes, measure—the new structure enabled it in two days. Inventory classification was clear. Rules applied cleanly. Measurement was straightforward.

The maintenance overhead dropped 60%. Unit naming was standardized. Size enforcement prevented the proliferation of proprietary dimensions. Labeling tagging made categorization systematic rather than requiring interpretation. When new sections launched, the publisher integrated them into the existing taxonomy rather than inventing new infrastructure.

More subtly, the standardized structure made inventory tradable. Premium advertisers could be offered "premium above-the-fold inventory" without needing to understand which specific units qualified—the taxonomy handled that. Programmatic demand partners could target inventory categories rather than negotiating dozens of individual units. The structure reduced friction in the buying process.`,
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Publisher Transformation',
    icon: '🚀',
    excerpt: 'How a regional publisher combined five optimization strategies to achieve 67% revenue growth in four months.',
    date: 'May 2026',
    readTime: '4.5 min',
    content: `A regional news publisher covering a mid-sized metro area had built a loyal, engaged audience. Readers returned daily. Content quality was high. Traffic was consistent at 2.3 million monthly uniques. But revenue growth had stalled for two years.

The underlying problem wasn't audience. It was monetization infrastructure that had accumulated through opportunistic decisions rather than strategic design. Ad operations were fragmented. Legacy systems persisted alongside newer tools. Yield optimization happened in isolated pockets rather than systematically. Revenue per thousand impressions lagged peer benchmarks by 30%.

The publisher recognized that fixing one component wouldn't unlock sustainable growth. You can't optimize yield without understanding inventory structure. You can't build efficient auctions on inefficient infrastructure. You can't use first-party data without proper audience architecture. Real transformation required addressing the entire stack simultaneously.

They committed to a four-month comprehensive optimization program, structured in five coordinated phases.

Phase one focused on inventory architecture. The publisher spent two weeks mapping existing inventory chaos and rebuilding it systematically. Every ad unit was renamed, reorganized, and standardized. Sizes standardized to IAB formats. Naming conventions clarified inventory intent. Clustering enabled logical grouping. Where ad operations previously required interpretation of dozens of individual units, they now worked with eight clear inventory clusters. The infrastructure for optimization was laid.

Phase two deployed Prebid self-hosting with ruthless adapter pruning. Rather than loading Prebid from shared CDN infrastructure, the publisher served it from their origin servers, reducing initialization time. They evaluated 18 demand partners and retained eight high-performing partners. Timeout optimization reduced auction duration to 220ms. This phase took four weeks—longer than initial inventory work because it required testing and validation. But it created the auction infrastructure for high-quality bidding.

Phase three implemented unified pricing rules with dynamic elasticity modeling. They built K-means clustering across their inventory categories, fitted elasticity curves to historical demand, and deployed a pricing engine that optimized floor prices weekly based on demand patterns. Rather than static quarterly pricing, they had dynamic optimization responding to real market conditions. Three weeks of work and ongoing tuning. The operational payoff was substantial—yield optimization that previously took two weeks now happened automatically.

Phase four launched first-party data monetization. They implemented publisher-provided identifiers (PPID) for logged-in users, publisher-provided signals (PPS) for behavioral and subscription data, and segmented audiences into advertiser-relevant categories. This was ongoing—not a discrete project but an organizational shift toward audience quality rather than volume. But within two months, PPID-identified traffic commanded 22% CPM premiums.

Phase five restructured video placements for strategic preroll and midroll. Short videos received 15-second preroll. Medium videos received 30-second preroll plus midroll at natural narrative breaks. Long videos received multiple strategic midroll placements. Lazy-loading reduced inventory weight. Dynamic load intensity responded to engagement signals. Video revenue increased 42% through better placement strategy.

These five initiatives compounded. The results became visible within weeks and accelerated over four months. Total revenue increased 67%. CPM improved 45% as auction quality, inventory clarity, and floor optimization aligned. Fill rates increased 28% as restructured waterfalls and dynamic pricing found the optimal price-volume balance. The publisher generated $2.3 million in incremental annual revenue from the same traffic.

The operational team efficiency improved 50%. Where yield optimization previously required 40 hours weekly of manual analysis and implementation, the new systematic approach required 20 hours of oversight and refinement. The team shifted from reactive management to strategic optimization.

More importantly, the transformation created sustainable competitive advantage. The publisher now had clean inventory architecture, efficient header bidding infrastructure, dynamic pricing, first-party data monetization, and optimized video strategy. Competitors hadn't executed this comprehensive transformation. This created structural advantages that persisted and compounded over time.

The transformation pattern reflected a fundamental principle: publisher growth isn't limited by audience. It's limited by monetization infrastructure. Fix the infrastructure strategically and systematically, and growth follows naturally.`,
  },
]
