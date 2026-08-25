import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  BarChart3, Target, MousePointerClick, Megaphone, TrendingUp, Layers, Gauge, Zap,
  Shield, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

export const data: ServicePageData = {
  hero: {
    eyebrow: "Performance Marketing for Travel Businesses",
    headline: "Build a Paid Growth System, Not Just",
    highlightedText: "Campaigns",
    description: "We turn your ad spend into a predictable growth system, so every dollar works toward generating real leads and bookings.",
    trustLine: "Built for travel brands that want paid campaigns to drive real, measurable outcomes.",
  },
  problem: {
    headline: "Half your ad budget could be wasted without the",
    highlightedText: "right system.",
    paragraph: "Many travel businesses invest in ads but see little return because campaigns lack clear strategy, targeting, and conversion focus. Without a structured approach, clicks don't turn into bookings. In performance marketing, it's not about spending more — it's about making every dollar work.",
    painPoints: [
      { icon: Shuffle, text: "Low return on ad spend" },
      { icon: AlertTriangle, text: "Weak lead quality from campaigns" },
      { icon: Eye, text: "High click costs with poor conversion" },
      { icon: HelpCircle, text: "Campaigns running without a clear strategy" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A strategic performance marketing system designed to generate qualified demand, not just clicks.",
    items: [
      { title: "Paid Acquisition Strategy", desc: "Build a structured plan for paid growth across the right channels and audiences.", icon: Target },
      { title: "Offer & Campaign Positioning", desc: "Align your offer messaging with what drives action for your ideal traveler.", icon: Megaphone },
      { title: "Channel Recommendations", desc: "Identify the highest-impact channels — Meta, Google, programmatic, or travel-specific platforms.", icon: BarChart3 },
      { title: "Landing Page Direction", desc: "Design conversion-focused landing experiences that match campaign intent.", icon: MousePointerClick },
      { title: "Creative & Messaging Guidance", desc: "Develop ad creative direction and messaging angles that resonate and convert.", icon: Layers },
      { title: "Funnel & Conversion Planning", desc: "Map the post-click journey so leads move from interest to action.", icon: TrendingUp },
      { title: "Campaign Launch Structure", desc: "Set up campaigns with proper structure, testing, and measurement from day one.", icon: Zap },
      { title: "Optimization Framework", desc: "Build a repeatable process for reviewing, learning, and improving performance.", icon: Gauge },
    ],
  },
  process: {
    heading: "How we build performance campaigns that actually drive growth",
    steps: [
      { number: "01", title: "Align", desc: "Offer and audience alignment to ensure campaigns target the right people with the right message." },
      { number: "02", title: "Plan", desc: "Campaign structure, channel strategy, and messaging direction built for your goals." },
      { number: "03", title: "Launch", desc: "Structured campaign launch with proper creative, targeting, and tracking." },
      { number: "04", title: "Optimize", desc: "Performance review, testing, and iterative improvement for sustained results." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A performance marketing system with clear strategy, creative direction, and optimization structure.",
    groups: [
      { label: "Strategy", items: ["Paid growth strategy", "Campaign framework", "Channel recommendations", "Audience targeting plan"] },
      { label: "Creative", items: ["Messaging angles", "Ad creative direction", "Landing page direction", "Offer positioning"] },
      { label: "Execution", items: ["Campaign structure", "Launch plan", "Tracking setup guidance", "Testing framework"] },
      { label: "Optimization", items: ["Reporting framework", "Optimization roadmap", "Performance benchmarks", "Iteration strategy"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Predictable Pipeline", desc: "Paid campaigns that consistently generate qualified interest and opportunities.", icon: BarChart3 },
      { title: "Better ROI", desc: "Smarter targeting and messaging that reduces waste and increases return.", icon: TrendingUp },
      { title: "Scalable Acquisition", desc: "A campaign system that can grow with your business, not just burn budget.", icon: Sparkles },
      { title: "Connected Experience", desc: "Ads, landing pages, and follow-up that feel like one cohesive journey.", icon: Shield },
    ],
  },
  audience: {
    heading: "Built for travel businesses that want paid campaigns to drive real growth",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands ready to invest in paid acquisition with a strategy that supports long-term growth.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most performance agencies optimize metrics. We optimize outcomes — connecting campaign strategy to brand positioning, landing experience, and the full traveler journey.",
    points: [
      { title: "Strategy before spend", desc: "We build the strategic foundation before launching a single ad." },
      { title: "Travel-specific insight", desc: "We understand travel buying cycles, seasonal demand, and what drives bookings." },
      { title: "Full-funnel thinking", desc: "Campaigns are designed to work with your website, content, and follow-up systems." },
      { title: "Transparent and measurable", desc: "Clear reporting, honest assessment, and continuous improvement." },
    ],
  },
  faq: {
    items: [
      { q: "Do you manage ad accounts directly?", a: "We can manage campaigns or provide strategic direction for your team to execute. The engagement is flexible based on your needs." },
      { q: "Which platforms do you work with?", a: "We work across Meta (Facebook/Instagram), Google Ads, and other relevant platforms depending on your audience and goals." },
      { q: "How quickly can campaigns launch?", a: "Most campaigns can be structured and launched within 2–4 weeks after strategy alignment." },
      { q: "Do you also build the landing pages?", a: "Yes. We can design and build conversion-focused landing pages as part of the campaign system." },
      { q: "What budget do we need to start?", a: "We'll recommend a budget range based on your goals, market, and competitive landscape. There's no fixed minimum, but we'll be honest about what's realistic." },
    ],
  },
  cta: {
    headline: "Want paid campaigns that actually support growth?",
    subtext: "Let's build a smarter acquisition system. Start with a free discovery call and we'll help you define the right approach for your market.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function PerformanceMarketing() {
  return <ServicePageLayout data={data} />;
}
