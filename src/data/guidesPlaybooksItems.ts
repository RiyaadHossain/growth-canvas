import type { GuideItem } from "@/components/resources/GuideDetailPage";
import imgPositioning from "@/assets/case-studies/case-study-positioning.jpg";
import imgUxBooking from "@/assets/case-studies/case-study-ux-booking.jpg";
import imgGrowthStrategy from "@/assets/case-studies/case-study-growth-strategy.jpg";
import imgPaidMedia from "@/assets/video-thumbnails/video-thumb-paid-media.jpg";
import imgContentSeo from "@/assets/case-studies/case-study-content-seo.jpg";
import imgWebsiteRedesign from "@/assets/case-studies/case-study-website-redesign.jpg";

// Keep ResourceItem alias for backward compat with ResourcePageShell / ResourceCard
import type { ResourceItem } from "@/components/resources/ResourceCard";

export type { GuideItem };

// Full rich type — GuideItem is a superset of ResourceItem
export const guidesPlaybooksItems: (GuideItem & ResourceItem)[] = [
  {
    type: "Playbook",
    title: "The Travel Brand Positioning Playbook",
    excerpt: "A practical framework for clarifying your audience, value proposition, and market edge — so your brand becomes easier to understand, trust, and choose.",
    category: "Brand Strategy",
    date: "Mar 2026",
    readingTime: "25 min read",
    bestFor: "Tour operators & boutique travel brands",
    ctaLabel: "Read playbook",
    featured: true,
    slug: "/resources/guides-playbooks/travel-brand-positioning-playbook",
    coverImage: imgPositioning,
    keyTakeaways: [
      "Audience definition & customer segmentation",
      "Value proposition clarity workshop",
      "Competitive landscape mapping",
      "Positioning statement construction",
      "Messaging hierarchy across touchpoints",
      "Brand voice and tone alignment",
    ],
    whoIsItFor: [
      "Tour operators looking to differentiate",
      "Boutique travel brands with unclear positioning",
      "Founders preparing for a rebrand",
      "Marketing teams rewriting core messaging",
      "Retreat and wellness travel businesses",
      "Hospitality brands entering new markets",
    ],
    outcomes: [
      "A clear positioning statement your team and customers can repeat",
      "A defined audience profile that makes messaging decisions easier",
      "Competitive differentiation that holds up under scrutiny",
      "Messaging frameworks ready to apply across website and sales materials",
      "A consistent brand voice that builds trust over time",
    ],
    frameworkSteps: [
      {
        title: "Audit Your Current Position",
        description: "Identify what your brand currently communicates versus what your best customers actually value — the gap between those two is your starting point.",
      },
      {
        title: "Define the Right Audience",
        description: "Move beyond demographic profiles to psychographic and behavioral patterns. Who are your highest-value customers, and what are they actually buying?",
      },
      {
        title: "Map the Competitive Landscape",
        description: "Understand where competitors are positioned and identify the white space — the gap where your distinct offer can own a clear market position.",
      },
      {
        title: "Build Your Positioning Statement",
        description: "Construct a positioning framework that's specific, ownable, and translatable across every customer touchpoint, from ads to your homepage hero.",
      },
    ],
    samplePreviews: [
      {
        title: "Audience Definition Template",
        items: [
          "Who is your primary traveler profile (beyond demographics)?",
          "What decision stage are they in when they first encounter your brand?",
          "What are the top 3 objections they raise before booking?",
          "What do your best customers say about you in their own words?",
        ],
      },
      {
        title: "Positioning Statement Builder",
        items: [
          "For [audience], who [problem or need]...",
          "[Brand name] is the [category] that [key differentiator]...",
          "Unlike [alternative], we [unique proof point]...",
          "This is credible because [evidence or reason to believe]...",
        ],
      },
    ],
    relatedServices: [
      {
        title: "Brand & Positioning",
        description: "Positioning, visual identity, and messaging systems built for travel brands ready to lead their category.",
        to: "/services/branding-identity",
      },
      {
        title: "Growth Strategy & Consulting",
        description: "Customer insight and competitive research that surfaces your real differentiation.",
        to: "/services/market-research",
      },
    ],
  },
  {
    type: "Guide",
    title: "How to Audit a Travel Website for Conversion Friction",
    excerpt: "A step-by-step guide to identifying the UX, messaging, and structural issues that quietly hurt your website's ability to convert.",
    category: "UX & Conversion",
    date: "Feb 2026",
    readingTime: "18 min read",
    bestFor: "Travel brands with traffic but weak enquiry rates",
    ctaLabel: "Read guide",
    slug: "/resources/guides-playbooks/travel-website-conversion-audit",
    coverImage: imgUxBooking,
    keyTakeaways: [
      "Homepage clarity and first-impression trust audit",
      "Messaging alignment across key pages",
      "Conversion friction review for enquiry journeys",
      "Trust signals and proof placement analysis",
      "CTA hierarchy and user flow checkpoints",
      "Content gaps affecting search and decision-making",
    ],
    whoIsItFor: [
      "Travel brands with good traffic but low enquiries",
      "Teams preparing for a redesign",
      "Founders who want stronger conversions from existing traffic",
      "Marketing managers running paid media to weak landing pages",
      "Boutique operators experiencing drop-off in the booking funnel",
    ],
    outcomes: [
      "Spot conversion issues before they become expensive redesign costs",
      "Clarify what to fix first across website and messaging",
      "Build a more intentional user journey from first click to enquiry",
      "Improve trust and enquiry readiness without a full rebuild",
      "Prioritise high-impact changes without guesswork",
    ],
    frameworkSteps: [
      {
        title: "Audit the First Impression",
        description: "Assess clarity, trust, and positioning above the fold. Can a stranger understand who you serve and why you're different in under 5 seconds?",
      },
      {
        title: "Map the Enquiry Journey",
        description: "Trace the path from landing page to enquiry form. Identify every moment where a visitor could stall, lose confidence, or leave without acting.",
      },
      {
        title: "Strengthen Trust Signals",
        description: "Ensure proof, credibility, and clarity appear early enough in the journey — not buried on a dedicated testimonials page no one reaches.",
      },
      {
        title: "Prioritise Improvements",
        description: "Focus on the fixes most likely to improve lead quality and conversion rate — ranked by impact vs. effort.",
      },
    ],
    samplePreviews: [
      {
        title: "Homepage Trust Audit Sample",
        items: [
          "Is your positioning clear in the first 5 seconds without scrolling?",
          "Is your strongest social proof visible above the fold?",
          "Does your hero image show your actual experience — not stock photography?",
          "Is there a clear, single primary CTA in the hero section?",
        ],
      },
      {
        title: "CTA Hierarchy Review Sample",
        items: [
          "Does each page have one dominant CTA and one secondary action?",
          "Are your CTAs outcome-focused ('Book your trip') not action-focused ('Submit')?",
          "Is the CTA visible without scrolling on mobile?",
          "Are you using social proof near the CTA to reduce hesitation?",
        ],
      },
    ],
    relatedServices: [
      {
        title: "Web Design & Development",
        description: "Conversion-focused travel website builds that fix the issues this guide helps you identify.",
        to: "/services/web-design-development",
      },
    ],
  },
  {
    type: "Framework",
    title: "A Practical Growth Strategy Framework for Tour Operators",
    excerpt: "A structured approach to evaluating your market position, acquisition channels, and operational readiness for scalable growth.",
    category: "Growth Strategy",
    date: "Feb 2026",
    readingTime: "22 min read",
    bestFor: "Tour operators ready to scale beyond referrals",
    ctaLabel: "Open framework",
    slug: "/resources/guides-playbooks/growth-strategy-framework-tour-operators",
    coverImage: imgGrowthStrategy,
    keyTakeaways: [
      "Growth readiness diagnostic checklist",
      "Market position and differentiation audit",
      "Primary acquisition channel evaluation",
      "Retention and repeat booking economics model",
      "Operational capacity and scalability review",
      "Prioritised growth roadmap template",
    ],
    whoIsItFor: [
      "Tour operators at revenue plateau",
      "Travel businesses transitioning from referral-led growth",
      "Operators expanding into new destinations or segments",
      "Founders building their first formal growth system",
      "Marketing teams who need a structured strategy brief",
    ],
    outcomes: [
      "A clear picture of your current growth readiness across 5 dimensions",
      "Identification of your single highest-leverage acquisition channel",
      "Understanding of your retention economics and repeat booking potential",
      "A prioritised roadmap of growth initiatives by impact and feasibility",
      "A framework you can revisit each quarter as your model evolves",
    ],
    frameworkSteps: [
      {
        title: "Diagnose Before You Prescribe",
        description: "Start with an honest audit of current position: what's working, what's leaking, and where growth is actually coming from today.",
      },
      {
        title: "Identify Your Primary Channel",
        description: "Most tour operators grow fastest by deepening one acquisition channel before diversifying. Identify where your best leads actually come from.",
      },
      {
        title: "Model Retention Economics",
        description: "Calculate your repeat booking rate and the lifetime value of a retained customer. Often this single number changes where you invest.",
      },
      {
        title: "Build the Roadmap",
        description: "Translate diagnosis into a prioritised action plan — ranked by impact vs. readiness, with clear owners and timelines.",
      },
    ],
    samplePreviews: [
      {
        title: "Growth Readiness Diagnostic",
        items: [
          "Can your current team and systems handle 40% more volume?",
          "Is your product-market fit strong enough to justify acquisition investment?",
          "Do you have clear unit economics: cost per lead, cost per booking, LTV?",
          "Is your brand positioning clear enough to scale paid acquisition?",
        ],
      },
    ],
    relatedServices: [
      {
        title: "Growth Strategy",
        description: "A structured growth plan built around your specific business model, market position, and acquisition channels.",
        to: "/services/growth-strategy",
      },
      {
        title: "Growth Strategy & Consulting",
        description: "The market insight foundation your growth strategy needs to make confident channel decisions.",
        to: "/services/market-research",
      },
    ],
  },
  {
    type: "Checklist",
    title: "The Paid Media Readiness Checklist for Travel Brands",
    excerpt: "Before you spend on ads, make sure your offer, landing experience, and tracking are ready to perform.",
    category: "Paid Media",
    date: "Jan 2026",
    readingTime: "12 min read",
    bestFor: "Travel brands considering or scaling paid ads",
    ctaLabel: "Open checklist",
    slug: "/resources/guides-playbooks/paid-media-readiness-checklist",
    coverImage: imgPaidMedia,
    keyTakeaways: [
      "Offer clarity check before writing ad copy",
      "Landing page conversion readiness review",
      "Tracking and attribution setup verification",
      "Audience segmentation and targeting brief",
      "Creative format and message hierarchy audit",
      "Budget allocation and testing framework",
    ],
    whoIsItFor: [
      "Travel brands preparing to launch their first paid campaigns",
      "Operators scaling ad spend beyond initial tests",
      "Teams frustrated by poor ad performance on existing campaigns",
      "Businesses relaunching paid media after a poor experience",
      "Founders evaluating whether paid media is right for them now",
    ],
    outcomes: [
      "Know exactly what to fix before spending a single pound on ads",
      "Verify your tracking is properly configured before any spend",
      "Ensure your landing page can convert the traffic you're paying for",
      "Build a smarter first campaign around intent, not just audience size",
      "Avoid the most common paid media mistakes travel brands make",
    ],
    frameworkSteps: [
      {
        title: "Validate Your Offer",
        description: "Your offer needs to be communicable in a single sentence before you write ad copy. If it takes a paragraph to explain, it won't convert under paid pressure.",
      },
      {
        title: "Verify Tracking First",
        description: "Tracking must be confirmed working before spend starts — not after you notice results look off. Check conversions, UTMs, and attribution paths end to end.",
      },
      {
        title: "Audit the Landing Experience",
        description: "Most paid media failures are landing page problems, not creative problems. Review message match, load speed, trust signals, and mobile experience.",
      },
      {
        title: "Define Audience Segments",
        description: "Audience segmentation matters more than budget at the start — test your positioning and messaging with defined segments before scaling any single campaign.",
      },
    ],
    samplePreviews: [
      {
        title: "Offer Readiness Check",
        items: [
          "Can you describe your offer in one sentence without jargon?",
          "Is your price point visible and positioned around value, not cost?",
          "Do you have a specific, single primary CTA for each campaign?",
          "Is your offer differentiated enough to justify a click vs. a competitor ad?",
        ],
      },
      {
        title: "Tracking Verification Checklist",
        items: [
          "Is your primary conversion event firing correctly in all browsers?",
          "Are UTM parameters consistently applied across all campaign links?",
          "Have you tested your thank-you page or confirmation trigger?",
          "Is your attribution window aligned with your booking cycle length?",
        ],
      },
    ],
    relatedServices: [
      {
        title: "Paid Advertising",
        description: "Paid media campaigns for travel brands built on the foundations this checklist helps you verify.",
        to: "/services/performance-marketing",
      },
    ],
  },
  {
    type: "Guide",
    title: "How to Build a Content & SEO System That Actually Compounds",
    excerpt: "A practical guide to creating a content architecture that drives organic discovery and builds authority over time.",
    category: "SEO & Content",
    date: "Jan 2026",
    readingTime: "20 min read",
    bestFor: "Travel brands investing in long-term organic growth",
    ctaLabel: "Read guide",
    slug: "/resources/guides-playbooks/content-seo-system-guide",
    coverImage: imgContentSeo,
    keyTakeaways: [
      "Intent cluster architecture and content mapping",
      "Pillar and supporting page structure design",
      "Internal linking strategy and implementation",
      "Authority-building through depth, not volume",
      "Content calendar built on search strategy",
      "Measurement framework for organic compounding",
    ],
    whoIsItFor: [
      "Travel brands starting their first content strategy",
      "Marketing teams frustrated by flat organic traffic",
      "Operators who publish content but see no SEO results",
      "Businesses looking to reduce reliance on paid acquisition",
      "Founders who want to understand how SEO actually works for travel",
    ],
    outcomes: [
      "A structured content architecture you can build and expand over time",
      "A clear picture of the intent clusters that matter most for your audience",
      "An internal linking map that strengthens your most important pages",
      "A publishing strategy focused on depth and authority, not volume",
      "A measurement approach that shows compounding returns over time",
    ],
    frameworkSteps: [
      {
        title: "Map Intent Clusters",
        description: "Group content around traveler intent, not individual keywords. Each cluster should address the full spectrum from awareness to decision for a single topic.",
      },
      {
        title: "Build Pillar Depth",
        description: "Authority is built through comprehensive coverage of a topic. One well-executed pillar page consistently outperforms ten shallow posts targeting the same theme.",
      },
      {
        title: "Engineer Internal Links",
        description: "Internal linking is one of the highest-leverage, lowest-effort SEO improvements available. Map how authority flows between your pillar and supporting pages.",
      },
      {
        title: "Publish on Strategy, Not Schedule",
        description: "A content calendar without a strategy creates noise, not growth. Prioritise depth over frequency and measure by assisted conversions, not session counts.",
      },
    ],
    relatedServices: [
      {
        title: "SEO & Content Marketing",
        description: "Organic content strategy and execution for travel brands built around intent, authority, and long-term compounding.",
        to: "/services/content-seo",
      },
    ],
  },
  {
    type: "Framework",
    title: "The Booking UX Improvement Framework",
    excerpt: "Diagnose and fix the friction points in your booking flow that cost you conversions — without a full redesign.",
    category: "UX & Conversion",
    date: "Dec 2025",
    readingTime: "15 min read",
    bestFor: "Travel brands losing conversions in the booking funnel",
    ctaLabel: "Open framework",
    slug: "/resources/guides-playbooks/booking-ux-improvement-framework",
    coverImage: imgWebsiteRedesign,
    keyTakeaways: [
      "Booking funnel entry point audit",
      "Unanswered question mapping by funnel stage",
      "Progressive disclosure review",
      "Trust signal placement at payment moment",
      "Mobile booking experience assessment",
      "Abandonment point analysis and fix prioritisation",
    ],
    whoIsItFor: [
      "Travel businesses with high funnel drop-off before payment",
      "Operators running an online booking system they can't fully redesign",
      "Teams who want to improve conversion rate without a rebuild",
      "Marketing managers optimising towards a booking conversion goal",
    ],
    outcomes: [
      "A clear map of where your booking flow loses visitors and why",
      "Prioritised fixes ranked by conversion impact vs. implementation effort",
      "Specific copy, sequencing, and UX improvements you can act on immediately",
      "A framework for continuously reviewing and improving your booking experience",
    ],
    frameworkSteps: [
      {
        title: "Map the Full Booking Journey",
        description: "Document every step from first landing to completed booking. Note every question a traveler could reasonably have — and where those questions go unanswered.",
      },
      {
        title: "Apply Progressive Disclosure",
        description: "Reveal complexity gradually. Don't front-load forms, options, or technical details before the visitor is committed to the journey.",
      },
      {
        title: "Strengthen Trust at Payment",
        description: "Trust cues at the point of payment — security, refund policy, direct contact info — have an outsized impact on completion rate.",
      },
      {
        title: "Prioritise Copy and Sequencing Changes",
        description: "Most booking UX wins come from copy and sequencing improvements, not visual redesigns. Focus there first.",
      },
    ],
    relatedServices: [
      {
        title: "Web Design & Development",
        description: "Booking-optimised travel websites designed to convert at every stage of the customer journey.",
        to: "/services/web-design-development",
      },
    ],
  },
  {
    type: "Guide",
    title: "How to Structure Lead Nurturing for High-Consideration Travel Offers",
    excerpt: "When the buying cycle is long, follow-up matters. A guide to nurturing leads through to conversion in travel.",
    category: "CRM & Automation",
    date: "Dec 2025",
    readingTime: "16 min read",
    bestFor: "Operators with high-consideration or high-value offers",
    ctaLabel: "Read guide",
    slug: "/resources/guides-playbooks/lead-nurturing-high-consideration-travel",
    keyTakeaways: [
      "Lead lifecycle mapping for long-cycle travel decisions",
      "Nurture sequence architecture by decision stage",
      "Objection-based email content strategy",
      "Segmentation by trip type and intent signal",
      "Timing and cadence optimisation",
      "Conversion trigger identification and automation",
    ],
    whoIsItFor: [
      "Tour operators with premium or group travel offers",
      "Retreat businesses with a 3–6 month sales cycle",
      "Luxury travel brands with high average booking values",
      "Teams frustrated by strong enquiries that don't convert",
      "Operators with a CRM or email platform they aren't fully using",
    ],
    outcomes: [
      "A nurture sequence structure mapped to your specific buying cycle",
      "Email content that answers objections, not just repeats the offer",
      "Segmentation logic that increases engagement and personalises follow-up",
      "Automation triggers that move leads forward without manual chasing",
      "A measurable improvement in lead-to-booking conversion rate",
    ],
    frameworkSteps: [
      {
        title: "Map the Decision Journey",
        description: "High-consideration bookings require 5–12 touchpoints on average before a decision is made. Map every stage and identify where most leads go cold.",
      },
      {
        title: "Design Objection-Led Sequences",
        description: "Nurture sequences should answer objections, not just repeat the original offer. Identify your top 5 conversion objections and build content around them.",
      },
      {
        title: "Segment by Intent and Interest",
        description: "Segmenting leads by trip type or destination interest dramatically improves email engagement and reduces unsubscribes.",
      },
      {
        title: "Optimise Timing and Cadence",
        description: "Timing and message quality matter equally in long-cycle nurture flows. Test send timing and frequency before scaling any sequence.",
      },
    ],
    relatedServices: [
      {
        title: "CRM & Automation",
        description: "CRM and automation systems that turn slow lead pipelines into faster, more consistent booking funnels.",
        to: "/services/crm-funnels-automation",
      },
    ],
  },
  {
    type: "Playbook",
    title: "A Travel Business Funnel Mapping Playbook",
    excerpt: "Map your customer journey from first touch to booking — and identify where the biggest opportunities live.",
    category: "Growth Strategy",
    date: "Nov 2025",
    readingTime: "20 min read",
    bestFor: "Travel businesses with multi-channel marketing",
    ctaLabel: "Read playbook",
    slug: "/resources/guides-playbooks/travel-funnel-mapping-playbook",
    keyTakeaways: [
      "Full customer journey mapping from awareness to booking",
      "Channel-by-channel touchpoint audit",
      "Attribution model selection for travel businesses",
      "Leak identification and prioritisation matrix",
      "Hand-off failure diagnosis between channels",
      "Funnel optimisation roadmap template",
    ],
    whoIsItFor: [
      "Travel businesses running multi-channel marketing",
      "Teams who struggle to attribute where bookings actually come from",
      "Operators scaling beyond their first growth channel",
      "Marketing managers building their first formal attribution model",
      "Founders who want to understand what's really driving their growth",
    ],
    outcomes: [
      "A complete visual map of your customer journey from first touch to booking",
      "Identification of your top funnel leak points and hand-off failures",
      "A clearer picture of how channels influence each other — beyond last-click",
      "An attribution framework aligned to your actual booking cycle",
      "A prioritised list of funnel improvements by revenue impact",
    ],
    frameworkSteps: [
      {
        title: "Map Every Touchpoint",
        description: "Document every channel, content piece, and interaction that could influence a booking decision — from first social impression to final confirmation email.",
      },
      {
        title: "Identify Hand-Off Failures",
        description: "Most funnel leaks happen between awareness and consideration, not at checkout. Look for gaps where leads fall through the cracks between channels and teams.",
      },
      {
        title: "Audit Attribution Logic",
        description: "Attribution in travel is rarely last-click. Map the full influence path to understand which channels deserve more investment and which are being overcredited.",
      },
      {
        title: "Prioritise and Iterate",
        description: "Funnel mapping is not a one-time exercise. Build a review cadence and revisit the map each time your business model or channel mix changes.",
      },
    ],
    relatedServices: [
      {
        title: "Growth Strategy",
        description: "A coherent growth strategy built around your funnel economics and channel mix.",
        to: "/services/growth-strategy",
      },
      {
        title: "Paid Advertising",
        description: "Paid and organic acquisition designed to feed the right stages of your funnel.",
        to: "/services/performance-marketing",
      },
    ],
  },
];
