import type { CaseStudyItem } from "@/components/resources/CaseStudyDetailPage";
import imgPositioning from "@/assets/case-study-positioning.jpg";
import imgUxBooking from "@/assets/case-study-ux-booking.jpg";
import imgGrowthStrategy from "@/assets/case-study-growth-strategy.jpg";
import imgWebsiteRedesign from "@/assets/case-study-website-redesign.jpg";
import imgContentSeo from "@/assets/case-study-content-seo.jpg";
import imgAutomation from "@/assets/case-study-automation.jpg";

export const caseStudiesItems: CaseStudyItem[] = [
  {
    type: "Case Study",
    title: "How a Boutique Travel Brand Clarified Its Positioning Before Relaunch",
    excerpt:
      "A repositioning engagement that helped a boutique travel business define its audience, sharpen its offer, and relaunch with a cohesive brand system.",
    category: "Positioning",
    date: "Mar 2026",
    readingTime: "8 min read",
    ctaLabel: "View case study",
    featured: true,
    slug: "/resources/case-studies/boutique-travel-brand-positioning-relaunch",
    industryTag: "Boutique Travel Brand",
    metrics: [
      { value: "+3x", label: "Qualified lead quality" },
      { value: "60 days", label: "To measurable results" },
      { value: "100%", label: "Brand system cohesion" },
    ],
    snapshot: {
      clientType: "Boutique travel company",
      serviceScope: "Brand positioning, messaging, brand system",
      timeline: "4 weeks",
      primaryGoal: "Relaunch with a clear, high-converting brand identity",
    },
    challenge: {
      intro:
        "The client had been operating for several years and had strong word-of-mouth, but their digital presence wasn't reflecting their actual quality. Enquiries were coming in but not converting.",
      points: [
        "Attracting the wrong audience — high volume but low-fit enquiries",
        "Positioning was vague and didn't speak directly to the ideal traveler",
        "Brand visuals felt generic compared to the actual experience offered",
        "Messaging was inconsistent across channels and touchpoints",
        "No clear articulation of what made them different from competitors",
      ],
    },
    approachSteps: [
      { number: "01", title: "Brand & Audience Audit", desc: "Reviewed all existing materials and interviewed past clients to understand true positioning." },
      { number: "02", title: "Ideal Client Definition", desc: "Built a specific audience profile based on research, not assumptions." },
      { number: "03", title: "Messaging Refinement", desc: "Rewrote key messaging to speak directly to the identified traveler profile." },
      { number: "04", title: "Brand System Rebuild", desc: "Created a cohesive visual and verbal identity anchored in the new positioning." },
      { number: "05", title: "Relaunch Execution", desc: "Rolled out the new brand across website, social, and sales collateral." },
    ],
    deliverables: [
      "Brand positioning strategy document",
      "Audience persona and customer profile",
      "Messaging framework and tagline",
      "Visual brand system (colours, typography, tone)",
      "Website copy and page architecture",
      "Social media brand guidelines",
      "Sales collateral templates",
    ],
    transformation: {
      before: [
        "Generic positioning that appealed to everyone — and converted no one",
        "Inconsistent tone and visuals across website and social",
        "High enquiry volume with poor lead quality",
        "No clear brand differentiation in a crowded market",
      ],
      after: [
        "Sharp, niche positioning that spoke directly to premium traveler profiles",
        "Unified brand system applied consistently across all touchpoints",
        "3x improvement in qualified lead quality within 60 days",
        "Clear competitive differentiation that resonated with the right audience",
      ],
    },
    results: [
      { value: "+3x", label: "Qualified lead quality within 60 days" },
      { value: "4 weeks", label: "Full brand system delivered" },
      { value: "100%", label: "Brand consistency across channels" },
    ],
    keyTakeaways: [
      "The client was attracting enquiries that didn't convert — a sign of a positioning mismatch, not a traffic problem.",
      "Audience research revealed a specific traveler profile that the existing brand was failing to speak to directly.",
      "Repositioning the offer around a clearly defined niche led to a 3x improvement in qualified lead quality within 60 days.",
      "Brand consistency across website, social, and sales materials compounded the impact of the positioning work.",
    ],
    testimonial: {
      quote: "TripUp Studio helped us stop trying to appeal to everyone and start speaking directly to the people who actually book with us. Within two months, the quality of our enquiries transformed completely.",
      name: "Sarah M.",
      role: "Founder",
      brand: "Boutique Travel Brand (Anonymised)",
    },
  },
  {
    type: "Case Study",
    title: "Improving Booking Confidence for a High-Consideration Travel Offer",
    excerpt:
      "How we identified and addressed the trust barriers in a premium travel booking journey to improve conversion rates.",
    category: "UX & Booking",
    date: "Feb 2026",
    readingTime: "7 min read",
    ctaLabel: "View case study",
    slug: "/resources/case-studies/booking-confidence-premium-travel",
    industryTag: "Premium Tour Operator",
    metrics: [
      { value: "+40%", label: "Enquiry rate increase" },
      { value: "0", label: "Redesign cost" },
      { value: "3 weeks", label: "Implementation timeline" },
    ],
    snapshot: {
      clientType: "Premium tour operator",
      serviceScope: "UX audit, pricing page restructure, conversion optimisation",
      timeline: "3 weeks",
      primaryGoal: "Increase enquiry rate from the pricing page",
    },
    challenge: {
      intro:
        "The client had strong inbound traffic but were converting a fraction of what their offer deserved. The premium quality of their experience wasn't translating in the digital journey.",
      points: [
        "Major drop-off at the pricing page — visitors leaving without enquiring",
        "Pricing information was ambiguous — unclear what was included",
        "No social proof at the critical decision-making moment",
        "Confusing enquiry flow with too many steps",
        "Mobile experience was particularly poor at key conversion points",
      ],
    },
    approachSteps: [
      { number: "01", title: "Analytics Deep Dive", desc: "Identified the exact drop-off point using heatmaps and session recordings." },
      { number: "02", title: "Exit Survey Analysis", desc: "Ran targeted exit surveys to understand the primary objections." },
      { number: "03", title: "Page Architecture Redesign", desc: "Restructured the pricing page to answer objections before they arose." },
      { number: "04", title: "Trust Signal Integration", desc: "Added FAQs, inclusions list, and social proof at the right moments." },
      { number: "05", title: "A/B Test & Validate", desc: "Ran a 2-week test to confirm the uplift before full rollout." },
    ],
    deliverables: [
      "Full UX audit report with findings",
      "Exit survey setup and analysis",
      "Redesigned pricing page structure",
      "FAQ section with trust-building content",
      "Social proof integration plan",
      "Mobile UX recommendations",
    ],
    transformation: {
      before: [
        "Pricing page with minimal context — just numbers, no narrative",
        "Visitors leaving unsure whether the price was worth it",
        "No FAQ or social proof at the decision moment",
        "Confusing multi-step enquiry process",
      ],
      after: [
        "Transparent pricing page with clear inclusions and FAQs",
        "Social proof and testimonials placed at key trust points",
        "Streamlined enquiry flow — fewer steps, higher completion",
        "40% increase in enquiry rate with no visual redesign",
      ],
    },
    results: [
      { value: "+40%", label: "Enquiry rate increase" },
      { value: "-35%", label: "Drop-off during enquiry flow" },
      { value: "3 weeks", label: "Full implementation" },
    ],
    keyTakeaways: [
      "Analytics revealed a major drop-off point at the pricing page — visitors were leaving without enquiring.",
      "Exit surveys identified transparency (what's included, how payment works) as the primary blocker.",
      "Restructuring the pricing page with clear inclusions, FAQs, and social proof increased enquiry rate by 40%.",
      "No redesign was needed — the improvement came entirely from content and page structure changes.",
    ],
  },
  {
    type: "Case Study",
    title: "Turning Fragmented Marketing Into a Clearer Acquisition System",
    excerpt:
      "A growth strategy engagement that consolidated scattered channel activity into a structured, measurable acquisition framework.",
    category: "Growth Strategy",
    date: "Jan 2026",
    readingTime: "9 min read",
    ctaLabel: "View case study",
    slug: "/resources/case-studies/fragmented-marketing-to-acquisition-system",
    industryTag: "Travel Agency",
    metrics: [
      { value: "-35%", label: "Cost per acquisition" },
      { value: "90 days", label: "To measurable CPA drop" },
      { value: "60%", label: "Conversions from 1 channel" },
    ],
    snapshot: {
      clientType: "Mid-scale travel agency",
      serviceScope: "Growth strategy, channel audit, attribution setup, budget reallocation",
      timeline: "6 weeks",
      primaryGoal: "Reduce cost per acquisition and improve channel efficiency",
    },
    challenge: {
      intro:
        "The client was investing in five different marketing channels simultaneously but had no clear picture of which was driving bookings. Budget was being allocated based on habit, not data.",
      points: [
        "Active across 5 channels with no attribution model in place",
        "Marketing budget split evenly despite vastly different performance",
        "No unified reporting — each channel tracked separately",
        "Team was stretched thin trying to maintain too many platforms",
        "Growth had plateaued despite increasing spend",
      ],
    },
    approachSteps: [
      { number: "01", title: "Funnel Audit", desc: "Mapped every channel to conversion data to see what was actually driving bookings." },
      { number: "02", title: "Attribution Setup", desc: "Built a simple but accurate attribution model across the full funnel." },
      { number: "03", title: "Channel Rationalisation", desc: "Identified the one or two channels worth doubling down on." },
      { number: "04", title: "Budget Reallocation", desc: "Shifted spend toward proven channels and paused underperformers." },
      { number: "05", title: "Reporting Framework", desc: "Created a unified dashboard so the team could make faster, data-led decisions." },
    ],
    deliverables: [
      "Full channel and funnel audit report",
      "Attribution model and tracking setup",
      "Channel performance benchmarks",
      "Revised budget allocation plan",
      "Unified reporting dashboard",
      "90-day growth roadmap",
    ],
    transformation: {
      before: [
        "Budget split equally across 5 channels with no performance data",
        "Organic search — the top-performing channel — was significantly underinvested",
        "Team overextended managing too many platforms at once",
        "No way to know which activities were driving actual bookings",
      ],
      after: [
        "Consolidated focus on 2 high-performing channels",
        "Organic search investment tripled based on data, not guesswork",
        "35% reduction in cost per acquisition within 90 days",
        "Clear reporting framework gave the team clarity and confidence",
      ],
    },
    results: [
      { value: "-35%", label: "Cost per acquisition in 90 days" },
      { value: "60%", label: "Of conversions driven by one channel" },
      { value: "2x", label: "Team efficiency improvement" },
    ],
    keyTakeaways: [
      "The client was active across 5 channels but had no attribution model — budget was being allocated by assumption.",
      "A funnel audit revealed that one underinvested channel (organic search) was driving 60% of conversions.",
      "Reallocating budget based on data rather than habit reduced cost per acquisition by 35% in 90 days.",
      "A clearer acquisition system also improved team focus — fewer channels done well outperformed more channels done poorly.",
    ],
  },
  {
    type: "Case Study",
    title: "Rebuilding a Travel Website Around Trust, Clarity, and Conversion",
    excerpt:
      "A website redesign focused on aligning brand messaging, UX structure, and booking flow for a destination-led travel brand.",
    category: "UX & Booking",
    date: "Jan 2026",
    readingTime: "8 min read",
    ctaLabel: "View case study",
    slug: "/resources/case-studies/travel-website-trust-clarity-conversion",
    industryTag: "Destination Travel Brand",
    metrics: [
      { value: "+45%", label: "Time on site post-launch" },
      { value: "-30%", label: "Bounce rate reduction" },
      { value: "2x", label: "Booking enquiries in 6 weeks" },
    ],
    snapshot: {
      clientType: "Destination-led travel brand",
      serviceScope: "Website redesign, messaging architecture, booking flow optimisation",
      timeline: "6 weeks",
      primaryGoal: "Redesign website to convert first-time visitors into enquiries",
    },
    challenge: {
      intro:
        "The site was visually attractive but not doing the job it needed to do. First-time visitors had no clear signal that this brand was the right choice for them.",
      points: [
        "Visually appealing but failing to communicate unique positioning",
        "No clear value proposition above the fold",
        "Confusing navigation — users couldn't find key information",
        "Booking flow had too many friction points",
        "Mobile experience was underperforming relative to desktop",
      ],
    },
    approachSteps: [
      { number: "01", title: "Messaging Architecture", desc: "Defined the narrative structure before touching a single visual element." },
      { number: "02", title: "Copy-First Design", desc: "Wrote all key page copy to ensure the story was clear before layout decisions." },
      { number: "03", title: "UX Wireframing", desc: "Mapped every page with conversion and user journey in mind." },
      { number: "04", title: "Visual Design", desc: "Translated the messaging and structure into a premium visual experience." },
      { number: "05", title: "Launch & Optimise", desc: "Launched with post-go-live monitoring and conversion tracking in place." },
    ],
    deliverables: [
      "Full site messaging and copy architecture",
      "UX wireframes for all key pages",
      "Visual design and brand refresh",
      "Redesigned booking enquiry flow",
      "Mobile-first responsive implementation",
      "Analytics and conversion tracking setup",
    ],
    transformation: {
      before: [
        "Beautiful imagery but no clear story or value proposition",
        "High bounce rate — visitors leaving without understanding the brand",
        "Confusing navigation and fragmented information architecture",
        "Booking flow discouraging serious enquiries",
      ],
      after: [
        "Messaging-first design that communicates value immediately",
        "45% increase in time on site and 30% reduction in bounce rate",
        "Clear, intuitive navigation guiding visitors to the right pages",
        "2x booking enquiries within 6 weeks of launch",
      ],
    },
    results: [
      { value: "+45%", label: "Time on site" },
      { value: "-30%", label: "Bounce rate" },
      { value: "2x", label: "Booking enquiries in 6 weeks" },
    ],
    keyTakeaways: [
      "The original site was visually appealing but failed to communicate the brand's unique positioning to first-time visitors.",
      "A messaging-first redesign approach — copy architecture before visual design — ensured the site told a clear story.",
      "Post-launch, time on site increased by 45% and bounce rate decreased by 30%.",
      "Booking enquiries increased 2x within the first 6 weeks of the new site going live.",
    ],
  },
  {
    type: "Case Study",
    title: "How Content Strategy Improved Discoverability for a Destination-Led Brand",
    excerpt:
      "An organic growth engagement that built a content architecture connecting search intent to the brand's core travel experiences.",
    category: "Content & SEO",
    date: "Dec 2025",
    readingTime: "7 min read",
    ctaLabel: "View case study",
    slug: "/resources/case-studies/content-strategy-destination-brand-discoverability",
    industryTag: "Destination Brand",
    metrics: [
      { value: "+2.5x", label: "Organic traffic in 6 months" },
      { value: "Top 3", label: "Rankings on key destination terms" },
      { value: "0", label: "Paid traffic required" },
    ],
    snapshot: {
      clientType: "Destination-led travel brand",
      serviceScope: "Content strategy, SEO architecture, editorial planning",
      timeline: "8 weeks (strategy) + ongoing",
      primaryGoal: "Build organic search visibility and reduce reliance on paid channels",
    },
    challenge: {
      intro:
        "The brand had exceptional word-of-mouth and a loyal returning customer base but almost no organic search presence. Their ideal traveler was searching online — and finding competitors instead.",
      points: [
        "Near-zero organic search visibility despite 3+ years in operation",
        "Existing pages targeting broad, unwinnable keywords",
        "No content strategy — publishing happened randomly, without intent",
        "Ideal traveler was highly searchable but not being reached organically",
        "Strong brand reputation not being leveraged in search",
      ],
    },
    approachSteps: [
      { number: "01", title: "Keyword & Intent Research", desc: "Mapped exactly what the ideal traveler was searching for at each stage of the journey." },
      { number: "02", title: "Content Audit", desc: "Reviewed all existing pages against real search intent data." },
      { number: "03", title: "Topic Cluster Architecture", desc: "Built destination-led content clusters designed to own niche search territory." },
      { number: "04", title: "Editorial Calendar", desc: "Created a structured 6-month publishing plan prioritising high-impact content first." },
      { number: "05", title: "Content Production", desc: "Produced intent-aligned guides, destination pages, and FAQs targeting specific decision-stage queries." },
    ],
    deliverables: [
      "Full keyword and intent research report",
      "Content audit with recommendations",
      "Topic cluster architecture and site structure",
      "6-month editorial calendar",
      "15+ SEO-optimised content pieces",
      "Internal linking and on-page SEO plan",
    ],
    transformation: {
      before: [
        "Broad, generic destination pages targeting unwinnable keywords",
        "No content strategy — publishing driven by availability, not intent",
        "Virtually no organic search traffic or rankings",
        "Missing the decision-stage traveler entirely",
      ],
      after: [
        "Intent-aligned content clusters targeting specific destination searches",
        "Structured publishing cadence with clear priority logic",
        "2.5x organic traffic increase within 6 months",
        "Long-tail content outperforming broad guides on both rankings and conversion",
      ],
    },
    results: [
      { value: "+2.5x", label: "Organic traffic in 6 months" },
      { value: "+180%", label: "Increase in organic enquiries" },
      { value: "Top 3", label: "Rankings on target destination terms" },
    ],
    keyTakeaways: [
      "The client had strong word-of-mouth but almost no organic search presence — a significant untapped channel.",
      "A content audit revealed that existing pages were targeting broad keywords with no decision-stage content.",
      "Building intent-aligned content clusters around core destinations drove a 2.5x increase in organic traffic in 6 months.",
      "Long-tail, question-based content outperformed broad destination guides on both rankings and conversion rate.",
    ],
  },
  {
    type: "Case Study",
    title: "Streamlining Lead Follow-Up for a Travel Business With Longer Sales Cycles",
    excerpt:
      "How we mapped the lead journey and implemented automation to reduce drop-off and improve conversion in a high-consideration travel business.",
    category: "Automation",
    date: "Dec 2025",
    readingTime: "6 min read",
    ctaLabel: "View case study",
    slug: "/resources/case-studies/lead-followup-automation-long-sales-cycle",
    industryTag: "Luxury Retreat Business",
    metrics: [
      { value: "-35%", label: "Lead drop-off reduction" },
      { value: "72 hrs", label: "Critical follow-up window addressed" },
      { value: "3", label: "Key automation sequences built" },
    ],
    snapshot: {
      clientType: "Luxury retreat operator",
      serviceScope: "CRM setup, lead journey mapping, automation sequences",
      timeline: "4 weeks",
      primaryGoal: "Reduce lead drop-off and improve follow-up consistency",
    },
    challenge: {
      intro:
        "The client had a strong product and good enquiry volume, but leads were going cold after initial contact. A slow, inconsistent follow-up process was the primary growth bottleneck.",
      points: [
        "Losing 40% of enquiries within 72 hours of initial contact",
        "No structured follow-up process — responses were ad hoc and delayed",
        "High-consideration purchase cycle meant leads needed nurturing, not just speed",
        "Small team couldn't handle follow-up volume without dropping the ball",
        "No visibility into where leads were dropping off in the journey",
      ],
    },
    approachSteps: [
      { number: "01", title: "Lead Journey Mapping", desc: "Documented every touchpoint from enquiry to booking to find critical drop-off moments." },
      { number: "02", title: "CRM Audit & Setup", desc: "Configured the CRM to track lead status and flag stale conversations." },
      { number: "03", title: "Automation Design", desc: "Designed personalised sequences for day 0, day 3, and day 7 follow-up." },
      { number: "04", title: "Content Creation", desc: "Wrote the email sequences — warm, helpful, and aligned with the buying journey." },
      { number: "05", title: "Launch & Monitor", desc: "Activated the sequences and tracked drop-off rates against baseline." },
    ],
    deliverables: [
      "Full lead journey map and drop-off analysis",
      "CRM configuration and lead status workflow",
      "3 automated follow-up email sequences",
      "Lead scoring and priority flagging setup",
      "Response time monitoring alerts",
      "30-day performance report",
    ],
    transformation: {
      before: [
        "40% of enquiries going cold within 72 hours of contact",
        "Manual, inconsistent follow-up driven by team availability",
        "No visibility into lead status or drop-off points",
        "High-value conversations getting lost in a busy inbox",
      ],
      after: [
        "Automated sequences ensuring no lead goes uncontacted after day 0",
        "35% reduction in lead drop-off within the first 30 days",
        "Full visibility into lead journey and conversion pipeline",
        "Team freed to focus on high-value conversations, not chasing cold leads",
      ],
    },
    results: [
      { value: "-35%", label: "Lead drop-off within 30 days" },
      { value: "+28%", label: "Enquiry-to-booking conversion rate" },
      { value: "4 weeks", label: "Full implementation timeline" },
    ],
    keyTakeaways: [
      "The client was losing 40% of enquiries within 72 hours of initial contact due to slow or inconsistent follow-up.",
      "Mapping the lead journey revealed three critical moments where personalised communication significantly increased engagement.",
      "Automating the initial response and day-3/day-7 follow-up sequences reduced lead drop-off by 35%.",
      "Automation did not replace personalisation — it ensured no lead fell through the cracks while the team handled high-value conversations.",
    ],
  },
];
