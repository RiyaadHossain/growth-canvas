import type { VideoSessionItem } from "@/components/resources/VideoSessionDetailPage";
import thumbWebsiteUx from "@/assets/video-thumb-website-ux.jpg";
import thumbConversion from "@/assets/video-thumb-conversion.jpg";
import thumbPaidMedia from "@/assets/video-thumb-paid-media.jpg";
import thumbContentSeo from "@/assets/video-thumb-content-seo.jpg";
import thumbBrand from "@/assets/video-thumb-brand.jpg";
import thumbCrm from "@/assets/video-thumb-crm.jpg";

export const videoSessionsItems: VideoSessionItem[] = [
  {
    type: "Strategy Session",
    title: "How to Improve a Travel Website Without a Full Redesign",
    excerpt:
      "A walkthrough of the highest-impact changes you can make to an existing travel website to improve trust, clarity, and conversion — without touching the design system.",
    category: "Website & UX",
    categoryPill: "Web & CRO",
    format: "Workshop",
    audience: "For travel brands & tour operators",
    date: "Mar 2026",
    duration: "18 min",
    ctaLabel: "Watch session",
    featured: true,
    thumbnail: thumbWebsiteUx,
    slug: "/resources/video-sessions/improve-travel-website-without-redesign",
    relatedServiceTo: "/services/web-design-development",
    relatedServiceLabel: "Explore Web Design & CRO",
    coversBullets: [
      "Why most travel websites underperform without needing a visual overhaul",
      "What causes trust drop-off before the visitor even considers enquiring",
      "How to simplify user journeys for higher conversions",
      "Where content, positioning, and CRO overlap — and why that matters",
      "What to fix first before investing in traffic",
    ],
    keyTakeaways: [
      {
        title: "Clarity beats complexity",
        desc: "The best-performing travel pages reduce friction before asking for commitment. Simpler paths convert better.",
      },
      {
        title: "Trust must appear early",
        desc: "Social proof, positioning signals, and clear structure should work before the visitor scrolls too far.",
      },
      {
        title: "Traffic is not the first problem",
        desc: "Many brands need better conversion paths before they need more visibility. Fix the leaky funnel first.",
      },
      {
        title: "Copy drives conversion more than design",
        desc: "Hero copy, CTA language, and page narrative have a larger impact on enquiries than colour or layout.",
      },
      {
        title: "Photography quality signals brand quality",
        desc: "Authentic, high-quality imagery has a disproportionate impact on first impressions in the travel space.",
      },
      {
        title: "Quick wins compound",
        desc: "Update hero copy, add recent social proof, clarify the primary CTA — these are high-ROI, low-effort changes.",
      },
    ],
    whoIsItFor: [
      "Boutique travel brands",
      "Tour operators",
      "Retreat businesses",
      "Founders preparing for a redesign",
      "Teams struggling with low enquiry conversion",
      "Brands investing in traffic but not converting",
    ],
    highlights: [
      { timestamp: "01:30", label: "Why most travel websites leak trust before visitors enquire" },
      { timestamp: "05:45", label: "The 3 conversion mistakes hurting enquiry rates" },
      { timestamp: "10:20", label: "How to structure pages for better lead quality" },
      { timestamp: "14:10", label: "Quick wins you can implement this week" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Web Design & Development",
        description: "Conversion-focused website builds for travel brands.",
        to: "/services/web-design-development",
      },
      {
        type: "Guide",
        title: "Travel Website CRO Checklist",
        description: "A step-by-step audit framework for travel brand websites.",
        to: "/resources/guides-playbooks",
      },
      {
        type: "Case Study",
        title: "Rebuilding a Travel Website Around Trust & Conversion",
        description: "How messaging-first redesign doubled enquiries in 6 weeks.",
        to: "/resources/case-studies/travel-website-trust-clarity-conversion",
      },
    ],
  },
  {
    type: "Strategy Session",
    title: "How to Diagnose a Low-Converting Travel Homepage",
    excerpt:
      "We break down common patterns that kill homepage conversion — and what to fix first to turn passive browsers into active enquiries.",
    category: "Website & UX",
    categoryPill: "Web & CRO",
    format: "Breakdown",
    audience: "For tour operators & travel agencies",
    date: "Feb 2026",
    duration: "14 min",
    ctaLabel: "Watch session",
    thumbnail: thumbWebsiteUx,
    slug: "/resources/video-sessions/diagnose-low-converting-homepage",
    relatedServiceTo: "/services/web-design-development",
    relatedServiceLabel: "Explore Web Design & CRO",
    coversBullets: [
      "The most common homepage failure patterns in the travel category",
      "How unclear positioning pushes visitors into passive browsing mode",
      "Why navigation overwhelm kills conversion before users decide",
      "The difference between vague and specific CTAs — and what it costs you",
      "How to run a homepage conversion audit in under an hour",
    ],
    keyTakeaways: [
      {
        title: "Unclear positioning kills conversion",
        desc: "The most common homepage failure is when visitors can't immediately tell who the brand is for.",
      },
      {
        title: "Navigation overwhelm is a conversion killer",
        desc: "Too many options push users into passive exploration mode rather than active consideration.",
      },
      {
        title: "Vague CTAs underperform",
        desc: "'Learn More' and 'Explore' consistently underperform specific, outcome-focused alternatives.",
      },
      {
        title: "Audit before investing in traffic",
        desc: "Spending on traffic to a low-converting homepage is the most expensive mistake in travel marketing.",
      },
    ],
    whoIsItFor: [
      "Tour operators with declining enquiry rates",
      "Travel brands investing in paid traffic",
      "Teams preparing for a website review",
      "Founders unsure why their homepage isn't converting",
    ],
    highlights: [
      { timestamp: "01:00", label: "The 5 homepage patterns that kill conversion" },
      { timestamp: "04:30", label: "How to spot positioning failure above the fold" },
      { timestamp: "08:15", label: "CTA language that actually converts travel visitors" },
      { timestamp: "12:00", label: "Running your own homepage conversion audit" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Web Design & Development",
        description: "Conversion-focused website builds for travel brands.",
        to: "/services/web-design-development",
      },
      {
        type: "Case Study",
        title: "Improving Booking Confidence for a Premium Travel Offer",
        description: "How we increased enquiry rate by 40% without a redesign.",
        to: "/resources/case-studies/booking-confidence-premium-travel",
      },
    ],
  },
  {
    type: "Expert Interview",
    title: "What Makes a Booking Journey Feel Trustworthy",
    excerpt:
      "A conversation about the micro-moments that build or break buyer confidence during the booking process — and what travel businesses can do to engineer trust at each step.",
    category: "Booking & Conversion",
    categoryPill: "Growth",
    format: "Q&A",
    audience: "For all travel businesses",
    date: "Feb 2026",
    duration: "22 min",
    ctaLabel: "Watch session",
    thumbnail: thumbConversion,
    slug: "/resources/video-sessions/trustworthy-booking-journey",
    relatedServiceTo: "/services/web-design-development",
    relatedServiceLabel: "Explore Web Design & CRO",
    coversBullets: [
      "How trust is built incrementally through small, consistent signals",
      "What transparency about inclusions does to pre-booking anxiety",
      "Why response speed and communication quality predict booking rates",
      "How payment and cancellation policy clarity reduces checkout abandonment",
      "The micro-moments that can make or break a booking decision",
    ],
    keyTakeaways: [
      {
        title: "Trust is incremental",
        desc: "It's built through small, consistent signals — not one big statement. Every touchpoint contributes.",
      },
      {
        title: "Transparency reduces anxiety",
        desc: "Clear information about what's included (and what isn't) reduces pre-booking anxiety more than any other copy element.",
      },
      {
        title: "Response speed predicts bookings",
        desc: "Communication quality during the enquiry phase strongly predicts booking rates for high-consideration travel.",
      },
      {
        title: "Policy clarity at the right moment",
        desc: "Payment and cancellation policy clarity placed at decision moments significantly reduces checkout abandonment.",
      },
    ],
    whoIsItFor: [
      "Premium tour operators",
      "Luxury retreat businesses",
      "Hospitality brands",
      "Teams working on booking flow optimisation",
      "Brands with high enquiry-to-booking drop-off",
    ],
    highlights: [
      { timestamp: "02:00", label: "What trust really means in a booking journey" },
      { timestamp: "07:30", label: "The transparency gap — what most travel brands get wrong" },
      { timestamp: "13:00", label: "Engineering trust at each stage of the funnel" },
      { timestamp: "18:45", label: "Quick wins for improving booking confidence" },
    ],
    relatedResources: [
      {
        type: "Case Study",
        title: "Improving Booking Confidence for a Premium Travel Offer",
        description: "How restructuring a pricing page increased enquiries by 40%.",
        to: "/resources/case-studies/booking-confidence-premium-travel",
      },
      {
        type: "Service",
        title: "Web Design & Development",
        description: "Conversion-focused website builds and booking flow optimisation.",
        to: "/services/web-design-development",
      },
    ],
  },
  {
    type: "Strategy Session",
    title: "Why Some Travel Brands Scale With Ads and Others Stall",
    excerpt:
      "The structural differences between travel brands that grow profitably with paid media and those that burn budget without results.",
    category: "Paid Media",
    categoryPill: "Growth",
    format: "Training",
    audience: "For tour operators & travel agencies",
    date: "Jan 2026",
    duration: "16 min",
    ctaLabel: "Watch session",
    thumbnail: thumbPaidMedia,
    slug: "/resources/video-sessions/why-travel-brands-scale-with-ads",
    relatedServiceTo: "/services/performance-marketing",
    relatedServiceLabel: "Explore Performance Marketing",
    coversBullets: [
      "What the brands that scale profitably have in common before they run ads",
      "Why driving paid traffic to an unconverted landing experience is so costly",
      "How to measure CAC against LTV — not just first-booking revenue",
      "Why creative fatigue kills travel campaigns faster than most categories",
      "The structural prerequisites for profitable paid media in travel",
    ],
    keyTakeaways: [
      {
        title: "Ads amplify what's already there",
        desc: "Brands that scale with paid media have a clear, differentiated offer — the ads just amplify it.",
      },
      {
        title: "Fix the landing before running ads",
        desc: "The biggest paid media failure mode: driving spend to an unconverted landing experience.",
      },
      {
        title: "Measure LTV, not just first bookings",
        desc: "Profitable scaling requires measuring CAC against LTV, not just against first-booking revenue.",
      },
      {
        title: "Creative fatigue is real in travel",
        desc: "Static creative fatigue kills campaigns faster in travel than most other categories. Test continuously.",
      },
    ],
    whoIsItFor: [
      "Tour operators considering paid media",
      "Travel brands currently running ads",
      "Marketing teams managing paid budgets",
      "Founders looking to scale acquisition efficiently",
    ],
    highlights: [
      { timestamp: "01:30", label: "The structural prerequisites for profitable paid media" },
      { timestamp: "05:00", label: "Why most travel ad campaigns underperform" },
      { timestamp: "10:20", label: "Measuring what actually matters: LTV vs. first booking" },
      { timestamp: "13:40", label: "Creative strategy for travel audiences" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Performance Marketing",
        description: "Paid media strategy and execution for travel brands.",
        to: "/services/performance-marketing",
      },
      {
        type: "Case Study",
        title: "Turning Fragmented Marketing Into a Clear Acquisition System",
        description: "How data-led budget reallocation cut cost per acquisition by 35%.",
        to: "/resources/case-studies/fragmented-marketing-to-acquisition-system",
      },
    ],
  },
  {
    type: "Strategy Session",
    title: "How to Structure a Content System for Long-Term Discoverability",
    excerpt:
      "Building an organic content engine that compounds over time — not just a blog with random posts that generates noise without authority.",
    category: "SEO & Content",
    categoryPill: "Content & SEO",
    format: "Workshop",
    audience: "For destination brands & travel operators",
    date: "Jan 2026",
    duration: "20 min",
    ctaLabel: "Watch session",
    thumbnail: thumbContentSeo,
    slug: "/resources/video-sessions/content-system-for-discoverability",
    relatedServiceTo: "/services/content-seo",
    relatedServiceLabel: "Explore Content & SEO",
    coversBullets: [
      "Why random blog publishing creates noise instead of authority",
      "How topic clusters beat individual posts for search and conversion",
      "Content repurposing strategies that extend ROI across channels",
      "What decision-stage content looks like — and why it converts",
      "How to build a 6-month editorial plan that compounds results",
    ],
    keyTakeaways: [
      {
        title: "Systems beat sporadic publishing",
        desc: "Random blog publishing creates noise. A structured content system creates compounding authority.",
      },
      {
        title: "Topic clusters outperform individual posts",
        desc: "Cover a subject area deeply before moving to the next. Depth signals expertise to both readers and search engines.",
      },
      {
        title: "Repurposing multiplies ROI",
        desc: "Content repurposing extends the return on each piece across search, social, and email simultaneously.",
      },
      {
        title: "Decision-stage content converts",
        desc: "The best travel content addresses the specific questions your ideal customer is asking before they book.",
      },
    ],
    whoIsItFor: [
      "Destination-led travel brands",
      "Tour operators building organic visibility",
      "Content teams without a clear strategy",
      "Brands reducing reliance on paid traffic",
    ],
    highlights: [
      { timestamp: "02:00", label: "Why most travel content strategies fail to compound" },
      { timestamp: "07:15", label: "Topic clusters explained with travel examples" },
      { timestamp: "13:00", label: "Building a 6-month content calendar" },
      { timestamp: "17:30", label: "Measuring content impact beyond pageviews" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Content & SEO",
        description: "Organic content and search strategy for travel brands.",
        to: "/services/content-seo",
      },
      {
        type: "Case Study",
        title: "How Content Strategy Improved Discoverability",
        description: "How one brand achieved a 2.5x organic traffic increase in 6 months.",
        to: "/resources/case-studies/content-strategy-destination-brand-discoverability",
      },
    ],
  },
  {
    type: "Case Breakdown",
    title: "The Difference Between Brand Awareness and Booking Intent",
    excerpt:
      "Understanding the gap between visibility and revenue — and how to close it strategically with the right content at the right stage.",
    category: "Brand Positioning",
    categoryPill: "Brand Strategy",
    format: "Case Review",
    audience: "For all travel businesses",
    date: "Dec 2025",
    duration: "12 min",
    ctaLabel: "Watch session",
    thumbnail: thumbBrand,
    slug: "/resources/video-sessions/brand-awareness-vs-booking-intent",
    relatedServiceTo: "/services/branding-identity",
    relatedServiceLabel: "Explore Branding & Identity",
    coversBullets: [
      "The strategic difference between awareness-stage and intent-stage content",
      "Why many travel brands over-invest in awareness and under-invest in conversion",
      "What intent-stage content looks like — and why it's so cost-effective",
      "How to build a measurement framework that tracks intent signals",
      "The content gap between visibility and revenue — and how to close it",
    ],
    keyTakeaways: [
      {
        title: "Awareness ≠ revenue",
        desc: "Brand awareness and booking intent are distinct stages that require entirely different content strategies.",
      },
      {
        title: "The consideration bridge is underfunded",
        desc: "Most travel brands over-invest in awareness and under-invest in the consideration-to-conversion bridge.",
      },
      {
        title: "Intent content is cost-effective",
        desc: "Comparisons, itineraries, and FAQs are disproportionately valuable relative to their production cost.",
      },
      {
        title: "Measure intent, not just reach",
        desc: "Measurement frameworks should track intent signals — not just reach and impressions.",
      },
    ],
    whoIsItFor: [
      "Travel brands investing in content",
      "Marketing teams measuring reach over revenue",
      "Founders wanting more from their content efforts",
      "Tour operators with visibility but low conversions",
    ],
    highlights: [
      { timestamp: "01:00", label: "Awareness vs. intent — the strategic gap" },
      { timestamp: "04:30", label: "Where most travel brands are over-investing" },
      { timestamp: "08:00", label: "Intent-stage content that actually converts" },
      { timestamp: "10:15", label: "Building a measurement framework for intent" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Branding & Identity",
        description: "Strategic brand positioning for travel businesses.",
        to: "/services/branding-identity",
      },
      {
        type: "Case Study",
        title: "How a Boutique Travel Brand Clarified Its Positioning",
        description: "Repositioning that delivered 3x qualified lead quality in 60 days.",
        to: "/resources/case-studies/boutique-travel-brand-positioning-relaunch",
      },
    ],
  },
  {
    type: "Strategy Session",
    title: "Where Automation Creates the Most Leverage in Travel Operations",
    excerpt:
      "Identifying the workflows and touchpoints where automation delivers real ROI — and how to prioritise implementation for a travel business.",
    category: "CRM & Automation",
    categoryPill: "AI & Automation",
    format: "Training",
    audience: "For travel operators & retreat businesses",
    date: "Dec 2025",
    duration: "15 min",
    ctaLabel: "Watch session",
    thumbnail: thumbCrm,
    slug: "/resources/video-sessions/automation-leverage-travel-operations",
    relatedServiceTo: "/services/ai-automation",
    relatedServiceLabel: "Explore AI & Automation",
    coversBullets: [
      "Where automation delivers the highest ROI in a travel business",
      "How lead nurturing automation reduces drop-off in long consideration windows",
      "Post-booking communication automation and its impact on cancellations",
      "How to prioritise which workflows to automate first",
      "The difference between a well-built automation and a poorly-built one",
    ],
    keyTakeaways: [
      {
        title: "Automate high-frequency, low-complexity tasks first",
        desc: "Follow-up, reminders, and confirmations have the highest ROI and lowest implementation risk.",
      },
      {
        title: "Lead nurturing is underused in travel",
        desc: "Despite long consideration windows, most travel brands have no structured lead nurturing automation.",
      },
      {
        title: "Post-booking automation reduces cancellations",
        desc: "Automated post-booking communication improves confidence and measurably reduces pre-departure cancellations.",
      },
      {
        title: "Start with one, done well",
        desc: "One well-built automation delivers more value than many poorly-built ones. Prioritise depth over breadth.",
      },
    ],
    whoIsItFor: [
      "Travel operators with growing lead volume",
      "Retreat businesses losing leads in follow-up",
      "Founders wanting to scale without hiring",
      "Teams spending too much time on manual tasks",
    ],
    highlights: [
      { timestamp: "01:30", label: "The automation opportunity most travel brands are missing" },
      { timestamp: "05:00", label: "Lead nurturing sequences that reduce drop-off" },
      { timestamp: "09:30", label: "Post-booking automation that builds confidence" },
      { timestamp: "13:00", label: "How to prioritise your first automation build" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "AI & Automation",
        description: "CRM, automation, and AI systems for travel businesses.",
        to: "/services/ai-automation",
      },
      {
        type: "Case Study",
        title: "Streamlining Lead Follow-Up for a Long Sales Cycle",
        description: "How automation reduced lead drop-off by 35% in 4 weeks.",
        to: "/resources/case-studies/lead-followup-automation-long-sales-cycle",
      },
    ],
  },
  {
    type: "Expert Interview",
    title: "Breaking Down a Travel Offer That Feels Easier to Say Yes To",
    excerpt:
      "What makes some travel offers feel irresistible — and how to restructure yours for clarity and buyer confidence.",
    category: "Brand Positioning",
    categoryPill: "Brand Strategy",
    format: "Q&A",
    audience: "For tour operators & boutique brands",
    date: "Nov 2025",
    duration: "19 min",
    ctaLabel: "Watch session",
    slug: "/resources/video-sessions/travel-offer-easier-to-say-yes",
    relatedServiceTo: "/services/branding-identity",
    relatedServiceLabel: "Explore Branding & Identity",
    coversBullets: [
      "What the best travel offers have in common — and why they convert",
      "How specificity builds confidence better than vague experience promises",
      "Why risk reversal can unlock demand that price incentives can't",
      "How offer presentation shapes how the offer is perceived",
      "Practical ways to restructure your offer for clarity and confidence",
    ],
    keyTakeaways: [
      {
        title: "Great offers remove objections preemptively",
        desc: "A great offer removes the buyer's objections before they can even articulate them.",
      },
      {
        title: "Specificity builds confidence",
        desc: "Detailed itineraries and clear expectations consistently outperform vague experience promises.",
      },
      {
        title: "Risk reversal unlocks demand",
        desc: "Flexible booking and clear cancellation policies can unlock demand that even price reductions can't.",
      },
      {
        title: "Presentation is part of the offer",
        desc: "How you structure the page shapes how the offer is perceived — presentation matters as much as content.",
      },
    ],
    whoIsItFor: [
      "Boutique travel brands",
      "Luxury retreat operators",
      "Tour operators with low enquiry-to-booking rates",
      "Brands re-pricing or repositioning their offer",
    ],
    highlights: [
      { timestamp: "01:45", label: "What makes a travel offer feel irresistible" },
      { timestamp: "06:30", label: "Specificity vs. vagueness in offer copy" },
      { timestamp: "11:00", label: "Risk reversal strategies that actually work" },
      { timestamp: "15:30", label: "How to restructure your offer page for higher conversion" },
    ],
    relatedResources: [
      {
        type: "Service",
        title: "Branding & Identity",
        description: "Strategic brand and offer positioning for travel businesses.",
        to: "/services/branding-identity",
      },
      {
        type: "Case Study",
        title: "How a Boutique Brand Clarified Positioning Before Relaunch",
        description: "Repositioning that delivered 3x qualified lead quality in 60 days.",
        to: "/resources/case-studies/boutique-travel-brand-positioning-relaunch",
      },
    ],
  },
];
