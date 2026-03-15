import type { TravelInsightItem } from "@/components/resources/TravelInsightDetailPage";
import imgPreBooking from "@/assets/insight-pre-booking-expectations.jpg";
import imgTrust10s from "@/assets/insight-trust-10-seconds.jpg";
import imgTrafficIntent from "@/assets/insight-traffic-vs-intent.jpg";
import imgDtcLessons from "@/assets/insight-dtc-lessons.jpg";

export type { TravelInsightItem };

export const travelInsightsItems: TravelInsightItem[] = [
  {
    type: "Insight",
    title: "What today's travelers actually expect before they book",
    excerpt: "Booking decisions are shaped long before the checkout page. Understanding pre-booking expectations helps brands build trust earlier in the journey.",
    category: "Booking Behavior",
    date: "Mar 2026",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
    featured: true,
    coverImage: imgPreBooking,
    slug: "/resources/travel-insights/pre-booking-expectations",
    keyTakeaways: [
      "Over 70% of travel booking decisions are shaped during the research phase, not at checkout.",
      "Trust signals — reviews, imagery, transparency about inclusions — matter more than price at the consideration stage.",
      "Brands that invest in pre-booking content and reassurance consistently outperform on conversion.",
      "The booking window has lengthened: high-consideration trips are now planned 3–6 months in advance on average.",
    ],
    actionableTakeaways: [
      "Audit your homepage for trust signals before spending more on traffic",
      "Publish detailed itinerary and inclusion pages to answer pre-booking questions early",
      "Add recent, specific social proof above the fold — not just a testimonials page",
      "Align your content strategy with the 3–6 month planning window of your ideal traveler",
    ],
    relatedServices: [
      {
        title: "Web Design & Development",
        description: "Conversion-focused website builds that earn trust at every stage of the booking journey.",
        to: "/services/web-design-development",
      },
      {
        title: "Growth Strategy",
        description: "A structured growth plan that maps your marketing to how travelers actually decide.",
        to: "/services/growth-strategy",
      },
    ],
  },
  {
    type: "Insight",
    title: "Why most travel websites lose trust in the first 10 seconds",
    excerpt: "First impressions in travel are ruthless. We break down the patterns that erode credibility before visitors even scroll.",
    category: "Conversion & UX",
    date: "Mar 2026",
    readingTime: "5 min read",
    ctaLabel: "Read insight",
    coverImage: imgTrust10s,
    slug: "/resources/travel-insights/trust-first-10-seconds",
    keyTakeaways: [
      "Weak or stock imagery signals inauthenticity faster than any other element on the page.",
      "Unclear positioning — who this is for and why it's different — causes immediate bounce from qualified visitors.",
      "Missing social proof above the fold reduces willingness to explore further by a significant margin.",
      "Slow load speed and poor mobile formatting compound credibility loss in the first few seconds.",
    ],
    bodySections: [
      {
        heading: "The problem with first impressions in travel",
        paragraphs: [
          "Most travel brands underestimate how quickly a visitor forms a judgment. Research consistently shows that first impressions are formed in under 100 milliseconds — and in travel, where the purchase is emotionally led, those impressions carry enormous weight.",
          "The challenge is that most businesses focus on the visual layer of their website — the colours, fonts, and layout — when the real trust signals operate at a deeper level: imagery authenticity, positioning clarity, and social proof placement.",
        ],
        callout: {
          type: "What Most Brands Miss",
          text: "A premium-looking site does not automatically create trust. Trust is built through clarity, proof, flow, and positioning — not just aesthetics.",
        },
      },
      {
        heading: "What's actually eroding trust",
        paragraphs: [
          "Stock photography is perhaps the single fastest trust-eroder in the travel category. Visitors have seen the same 'smiling couple on a beach' image on dozens of competitor sites. When your imagery doesn't feel real and specific to your offer, the implicit message is that you're not confident enough to show your actual product.",
          "Unclear positioning is the second major culprit. If a visitor can't immediately understand who you serve, what you offer, and what makes you different — they default to comparison shopping on price alone. That's a race to the bottom that nobody wins.",
        ],
        pullQuote: "Travel brands don't lose conversions because they lack traffic. They lose conversions because their trust signals arrive too late.",
      },
      {
        heading: "What to fix first",
        paragraphs: [
          "The highest-leverage change for most travel websites isn't a redesign — it's a repositioning of existing trust elements. Move your strongest social proof above the fold. Replace stock imagery with real, specific photography from your actual experiences. Rewrite your hero copy to speak directly to the decision your visitor is in the middle of making.",
        ],
        callout: {
          type: "Quick Win",
          text: "Replace your homepage hero with a real image from your best-performing experience and a headline that names your specific audience and outcome. This single change often improves scroll depth within days.",
        },
      },
    ],
    actionableTakeaways: [
      "Replace stock imagery with authentic, experience-specific photography",
      "Rewrite your hero headline to name your audience and the outcome you deliver",
      "Move your strongest testimonial or social proof above the fold",
      "Test your homepage on mobile at 3G speed — this is how most travelers experience it",
      "Audit your above-the-fold section for clarity of positioning before anything else",
    ],
    relatedServices: [
      {
        title: "Web Design & Development",
        description: "Conversion-focused website builds that earn trust in the first 10 seconds.",
        to: "/services/web-design-development",
      },
    ],
  },
  {
    type: "Insight",
    title: "The difference between traffic and booking intent in travel",
    excerpt: "Not all visitors are created equal. Learn how to distinguish awareness traffic from high-intent demand.",
    category: "Brand Strategy",
    date: "Feb 2026",
    readingTime: "7 min read",
    ctaLabel: "Read insight",
    coverImage: imgTrafficIntent,
    slug: "/resources/travel-insights/traffic-vs-booking-intent",
    keyTakeaways: [
      "Ranking for broad travel keywords drives volume but rarely drives bookings — intent alignment is what converts.",
      "High-intent visitors exhibit specific behavioural patterns: pricing page visits, multiple return sessions, and review engagement.",
      "Segmenting traffic by intent stage allows smarter content investment and better paid media targeting.",
      "A lower-traffic site with strong intent alignment consistently outperforms a high-traffic site with weak alignment.",
    ],
    actionableTakeaways: [
      "Review your top organic keywords — are they intent-rich or awareness-only?",
      "Track pricing page visits and return sessions as leading indicators of booking intent",
      "Create decision-stage content: comparisons, itineraries, and FAQs that answer final questions",
      "Separate your content investment by funnel stage — don't try to convert awareness traffic",
    ],
    relatedServices: [
      {
        title: "Content & SEO",
        description: "Organic content strategy built around traveler intent, not just traffic volume.",
        to: "/services/content-seo",
      },
      {
        title: "Performance Marketing",
        description: "Paid media strategy that targets intent signals, not just audience demographics.",
        to: "/services/performance-marketing",
      },
    ],
  },
  {
    type: "Insight",
    title: "What boutique travel brands can learn from high-converting DTC brands",
    excerpt: "Direct-to-consumer brands excel at clarity and conversion. Here's what travel operators can borrow from their playbook.",
    category: "Brand Strategy",
    date: "Feb 2026",
    readingTime: "8 min read",
    ctaLabel: "Read insight",
    slug: "/resources/travel-insights/dtc-lessons-for-travel",
    keyTakeaways: [
      "DTC brands obsess over offer clarity — the what, who for, and why now are never left ambiguous.",
      "Social proof is woven into every stage of the funnel, not just placed on a single testimonials page.",
      "Email and retention sequences are treated as revenue drivers, not afterthoughts.",
      "DTC operators consistently test and optimise — travel brands that adopt this mindset see compounding improvements.",
    ],
    actionableTakeaways: [
      "Clarify your offer: state the what, who for, and why now on every major page",
      "Distribute social proof throughout your funnel — not just on a testimonials page",
      "Build an email sequence that re-engages enquirers who didn't convert",
      "Set up a simple A/B test on your primary CTA copy this month",
    ],
    relatedServices: [
      {
        title: "Branding & Identity",
        description: "Sharp brand positioning and visual identity that differentiates your travel business.",
        to: "/services/branding-identity",
      },
    ],
  },
  {
    type: "Insight",
    title: "SEO for travel brands: visibility is not the same as demand",
    excerpt: "Ranking for keywords doesn't guarantee bookings. We explore the gap between organic traffic and real traveler intent.",
    category: "Organic Growth",
    date: "Jan 2026",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
    slug: "/resources/travel-insights/seo-visibility-vs-demand",
    keyTakeaways: [
      "High-volume travel keywords often represent early-stage curiosity, not booking readiness.",
      "Long-tail, intent-rich queries convert at a significantly higher rate despite lower search volumes.",
      "Content that answers decision-stage questions — itineraries, inclusions, comparisons — drives qualified organic visits.",
      "SEO ROI for travel is best measured by assisted conversions, not just organic session counts.",
    ],
    actionableTakeaways: [
      "Audit your top 10 organic landing pages for conversion intent — not just traffic",
      "Identify 5 long-tail, decision-stage queries your ideal customer is searching before booking",
      "Create an itinerary or 'what's included' page optimised for high-intent queries",
      "Measure organic SEO success by assisted bookings, not just session counts",
    ],
    relatedServices: [
      {
        title: "Content & SEO",
        description: "Organic strategy built for travel brands that want qualified visitors, not just traffic.",
        to: "/services/content-seo",
      },
    ],
  },
  {
    type: "Insight",
    title: "Why travelers compare emotionally before they compare prices",
    excerpt: "Price sensitivity in travel is often a symptom of weak positioning. Emotional differentiation changes the comparison game.",
    category: "Booking Behavior",
    date: "Jan 2026",
    readingTime: "5 min read",
    ctaLabel: "Read insight",
    slug: "/resources/travel-insights/emotional-comparison-before-price",
    keyTakeaways: [
      "Travel is an emotionally-led purchase — logic validates a decision that emotion has already made.",
      "When two offers feel the same, price becomes the default differentiator. Positioning solves this.",
      "Brands that anchor on transformation (the experience of the trip) rather than transaction outperform on both enquiry rate and average booking value.",
      "Positioning clarity reduces price sensitivity by making comparison harder.",
    ],
    actionableTakeaways: [
      "Rewrite your homepage to lead with the emotional outcome, not the itinerary features",
      "Identify the one transformation your best customers consistently describe — lead with that",
      "Remove generic phrases like 'authentic', 'immersive', 'unforgettable' from your copy",
      "Position your pricing page around value and outcome, not just cost breakdown",
    ],
    relatedServices: [
      {
        title: "Branding & Identity",
        description: "Brand positioning that anchors your offer on transformation, not transaction.",
        to: "/services/branding-identity",
      },
    ],
  },
  {
    type: "Insight",
    title: "The hidden cost of fragmented marketing systems in travel",
    excerpt: "Disconnected tools and channels create invisible friction. Here's how fragmentation quietly erodes growth.",
    category: "Distribution & Channels",
    date: "Dec 2025",
    readingTime: "7 min read",
    ctaLabel: "Read insight",
    slug: "/resources/travel-insights/fragmented-marketing-systems",
    keyTakeaways: [
      "Fragmented systems create data blind spots — you can't optimise what you can't measure end to end.",
      "Disjointed channel activity sends inconsistent brand messages, reducing trust across the customer journey.",
      "Operational fragmentation (multiple disconnected tools) wastes marketing team time and inflates cost per lead.",
      "Consolidating into a coherent system often unlocks quick wins without additional spend.",
    ],
    actionableTakeaways: [
      "Map your entire marketing stack — identify every tool, channel, and handoff point",
      "Find the measurement gaps: where does your attribution break down?",
      "Consolidate to fewer, better-integrated tools rather than adding more",
      "Standardise your brand message across every channel touchpoint",
    ],
    relatedServices: [
      {
        title: "Growth Strategy",
        description: "A coherent, integrated growth system built around your specific travel business.",
        to: "/services/growth-strategy",
      },
    ],
  },
  {
    type: "Insight",
    title: "How to position a travel brand without sounding like everyone else",
    excerpt: "Differentiation in travel starts with clarity, not creativity. A framework for finding your real market edge.",
    category: "Brand Strategy",
    date: "Dec 2025",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
    slug: "/resources/travel-insights/position-without-sounding-generic",
    keyTakeaways: [
      "Generic positioning phrases — 'authentic', 'immersive', 'unforgettable' — have lost meaning through overuse.",
      "Real differentiation comes from specificity: who you serve, what problem you solve, and how you deliver it differently.",
      "The most effective positioning statements emerge from customer research, not internal brainstorming.",
      "A sharply positioned brand attracts better-fit customers and reduces the cost of acquisition over time.",
    ],
    actionableTakeaways: [
      "List every positioning phrase on your homepage and remove any that a competitor could also claim",
      "Interview your 3 best recent customers and extract the exact language they used to describe value",
      "Rebuild your hero copy around specificity: who, what outcome, and what makes it different",
      "Test your new positioning with people unfamiliar with your brand — can they repeat it back?",
    ],
    relatedServices: [
      {
        title: "Branding & Identity",
        description: "Brand positioning built on specificity, not generic travel category phrases.",
        to: "/services/branding-identity",
      },
      {
        title: "Market Research",
        description: "Customer insight and competitive research that surfaces your real differentiation.",
        to: "/services/market-research",
      },
    ],
  },
];
