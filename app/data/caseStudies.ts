export interface CaseStudy {
  id: string
  title: string
  icon: string
  summary: string
  challenge: string
  solution: string[]
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'video',
    title: 'Video Strategy: Preroll & Midroll Optimization',
    icon: '🎬',
    summary: 'Learn how to structure video placements for maximum yield while capturing modern audiences.',
    challenge: 'Publishers faced declining CPMs on video inventory due to ad-blocking and viewer fatigue from aggressive ad loads.',
    solution: [
      'Strategic preroll placement with 15-30 second ad slots at content start',
      'Mid-roll insertion at natural content breaks (every 3-5 minutes)',
      'Lazy-load video ads to reduce bounce rates',
      'Dynamic ad load based on viewer engagement metrics',
    ],
    results: [
      '+34% average CPM increase',
      '+28% completion rates',
      '+42% overall video revenue',
      'Maintained 85%+ viewability rates',
    ],
  },
  {
    id: 'pps',
    title: 'PPS & PPID: Audience & Revenue Maximization',
    icon: '👤',
    summary: 'Leverage publisher-provided signals and IDs to increase relevance and CPMs without third-party cookies.',
    challenge: 'Third-party cookies deprecation threatened audience targeting capability and revenue per thousand impressions.',
    solution: [
      'Implement Publisher-Provided Signals (PPS) for logged-in user behavior',
      'Deploy Publisher-Provided IDs (PPID) for persistent, first-party user identification',
      'Create audience segments from first-party data (subscription status, content preferences)',
      'Pass contextual and behavioral signals to bidders through Prebid',
    ],
    results: [
      '+22% CPM improvement vs. anonymous traffic',
      '+31% bid density from premium buyers',
      '+18% overall revenue despite cookie deprecation',
      'Zero user privacy concerns with first-party approach',
    ],
  },
  {
    id: 'prebid',
    title: 'Prebid Self-Hosting & Slot Optimization',
    icon: '🔧',
    summary: 'Self-host Prebid, optimize header bidding setup, and reclaim revenue lost to latency and inefficient adapters.',
    challenge: 'Relying on CDN-hosted Prebid created latency issues; bloated adapter configuration reduced page speed and bid quality.',
    solution: [
      'Self-host Prebid.js on publisher infrastructure for instant access',
      'Prune unused adapters and bidders; keep only high-performing demand sources',
      'Implement timeout optimization (200ms sweet spot for most publishers)',
      'A/B test slot configurations: size variations, targeting rules, header bidding vs. direct deals',
    ],
    results: [
      '-240ms average page load improvement',
      '+19% bid participation from quality bidders',
      '+27% revenue on optimized slots',
      'Saved $45k/year CDN fees',
    ],
  },
  {
    id: 'upr',
    title: 'Unified Pricing Rules & Waterfall Optimization',
    icon: '💰',
    summary: 'Dynamically optimize floor prices using ML elasticity models and create intelligent waterfall hierarchies.',
    challenge: 'Static pricing rules left revenue on the table; waterfall misconfiguration caused high rejection rates and lost impressions.',
    solution: [
      'Deploy UPR optimization engine with K-Means clustering by inventory type',
      'Fit elasticity curves to model fill-rate sensitivity for each cluster',
      'Dynamically set floors based on demand patterns (±15% weekly adjustment cap)',
      'Restructure waterfall: high-CPM direct deals → header bidding → open exchange → fallback',
      'A/B test 85% control vs. 15% test split for 7+ days validation',
    ],
    results: [
      '+12.3% estimated revenue lift in first week',
      '+8.5% average floor price increase',
      '-3.2% fill rate (acceptable trade-off for 2x revenue gain)',
      'Statistical significance achieved at 95% confidence by Day 7',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Architecture & Ad Unit Structuring',
    icon: '🏗️',
    summary: 'Design inventory taxonomy that enables easy serving, reporting, and yield optimization across all surfaces.',
    challenge: 'Chaotic ad unit structure made reporting difficult, prevented effective pricing by context, and created serving conflicts.',
    solution: [
      'Hierarchical naming: /publisher/section/format/size (e.g., /nyt/politics/leaderboard/728x90)',
      'Inventory clustering: Group by page type, content category, device, geography, daypart',
      'Unified pricing rules: One rule per cluster instead of hundreds of individual units',
      'Standardized sizes: Enforce IAB standard sizes (300x250, 728x90, 320x50, 970x250)',
      'Labeling scheme: Tag each unit with category, seasonality, premium status',
    ],
    results: [
      '-60% ad unit maintenance overhead',
      '+40% reporting clarity and speed',
      '+25% pricing accuracy (rules apply to broader inventory clusters)',
      '10x faster yield optimization cycles (from 2 weeks to 2 days)',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Publisher Transformation',
    icon: '🚀',
    summary: 'End-to-end optimization combining all strategies for maximum revenue uplift.',
    challenge: 'Regional publisher with fragmented ad operations, legacy systems, and no unified yield strategy. Revenue plateaued for 2 years.',
    solution: [
      'Rebuilt inventory architecture (Phase 1: 2 weeks)',
      'Deployed Prebid self-hosting with optimized adapters (Phase 2: 1 month)',
      'Implemented UPR engine with 150-cluster optimization (Phase 3: 3 weeks)',
      'Launched first-party data strategy with PPID & PPS (Phase 4: ongoing)',
      'Video placement restructuring for preroll/midroll (Phase 5: 2 weeks)',
    ],
    results: [
      '+67% total revenue increase over 4 months',
      '+45% CPM improvement',
      '+28% fill rate increase',
      '$2.3M additional annual revenue',
      'Ad operations team efficiency improved by 50%',
    ],
  },
]
