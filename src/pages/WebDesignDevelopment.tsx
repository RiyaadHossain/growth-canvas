import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Globe, Layout, Smartphone, MousePointerClick, Palette, Code, Gauge, Layers,
  Shield, TrendingUp, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Web Design & Development for Travel Businesses",
    headline: "Build a digital experience that earns trust and",
    highlightedText: "drives action.",
    description: "Your website should do more than look polished. It should communicate credibility, guide decision-making, and convert interest into inquiries, bookings, or qualified leads. We design and build travel websites that balance brand, performance, and usability.",
    trustLine: "Built for travel brands that need a website that performs as well as it looks.",
  },
  problem: {
    headline: "If your website doesn't build trust instantly,",
    highlightedText: "visitors leave.",
    paragraph: "We create sites that feel premium, intuitive, and conversion-aware from the first scroll.",
    painPoints: [
      { icon: Shuffle, text: "Outdated or low-trust website design" },
      { icon: AlertTriangle, text: "Poor mobile experience" },
      { icon: Eye, text: "Confusing navigation or weak page structure" },
      { icon: HelpCircle, text: "Beautiful sites that don't convert" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "End-to-end web design and development built to create clarity, trust, and conversion for travel businesses.",
    items: [
      { title: "UX & Page Structure", desc: "Plan intuitive page flows that guide visitors toward action.", icon: Layout },
      { title: "Wireframing & Content Flow", desc: "Map content hierarchy and user journeys before visual design begins.", icon: Layers },
      { title: "High-End UI Design", desc: "Craft premium visual design that aligns with your brand identity.", icon: Palette },
      { title: "Responsive Development", desc: "Build fast, responsive websites that work beautifully on every device.", icon: Smartphone },
      { title: "CMS Implementation", desc: "Set up scalable content management so your team can update with ease.", icon: Code },
      { title: "Conversion-Focused Pages", desc: "Design landing pages and core pages optimized for inquiries and bookings.", icon: MousePointerClick },
      { title: "Performance Optimization", desc: "Ensure fast load times, accessibility, and technical excellence.", icon: Gauge },
      { title: "Launch Support", desc: "Technical handoff, QA, and launch readiness to go live with confidence.", icon: Globe },
    ],
  },
  process: {
    heading: "How we design and build websites that travel brands trust",
    steps: [
      { number: "01", title: "Discover", desc: "Discovery and goals alignment to understand your business, audience, and objectives." },
      { number: "02", title: "Architect", desc: "UX strategy and page architecture to create the right structure and flow." },
      { number: "03", title: "Design", desc: "Visual design system and mockups that bring your brand to life digitally." },
      { number: "04", title: "Build", desc: "Development, responsive implementation, QA, and launch readiness." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A complete website experience designed for clarity, trust, and conversion — ready to support your growth.",
    groups: [
      { label: "Strategy", items: ["Page architecture", "Content flow plan", "UX recommendations", "Conversion mapping"] },
      { label: "Design", items: ["Wireframes", "High-fidelity designs", "Design system", "Mobile-first layouts"] },
      { label: "Development", items: ["Responsive website build", "CMS integration", "Performance optimization", "Core page templates"] },
      { label: "Launch", items: ["QA and testing", "Launch-ready assets", "Technical handoff", "Post-launch support guidance"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Premium First Impression", desc: "A website that communicates credibility and quality from the first scroll.", icon: Globe },
      { title: "Stronger Conversion", desc: "Clear structure and compelling design that turns visitors into leads or bookings.", icon: TrendingUp },
      { title: "Brand Consistency", desc: "A digital experience that feels aligned with your positioning and identity.", icon: Shield },
      { title: "Scalable Foundation", desc: "A website built to grow with your business, campaigns, and content.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that need more than a template",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands launching, relaunching, or upgrading their digital presence to match their market position.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most web agencies focus on aesthetics. We connect brand strategy, UX thinking, and conversion logic so your website doesn't just look premium — it drives results.",
    points: [
      { title: "Strategy-led design", desc: "Every design decision is rooted in your positioning, audience, and business goals." },
      { title: "Built for travel", desc: "We understand travel booking journeys, trust signals, and what makes travelers take action." },
      { title: "Performance-aware", desc: "Speed, accessibility, and technical quality are part of the design process, not afterthoughts." },
      { title: "Connected to growth", desc: "Your website is designed to support SEO, campaigns, content, and long-term scalability." },
    ],
  },
  faq: {
    items: [
      { q: "Do you build on specific platforms?", a: "We work with modern frameworks and CMS platforms suited to your needs — whether that's a custom build, headless CMS, or an existing platform like WordPress or Webflow." },
      { q: "Can you redesign our existing website?", a: "Yes. We can work with your current site and reimagine the design, structure, and content flow while preserving what already works." },
      { q: "How long does a typical website project take?", a: "Most projects take 6–12 weeks depending on scope, content readiness, and the number of pages involved." },
      { q: "Do you write the website content too?", a: "We can provide content direction and messaging guidance. For full copywriting, we work with trusted content partners or your internal team." },
      { q: "Will the site be optimized for SEO?", a: "Yes. Every site we build follows SEO best practices including page structure, metadata, performance, and content hierarchy." },
    ],
  },
  cta: {
    headline: "Need a website that feels premium and performs?",
    subtext: "Let's build a digital experience your travelers trust. Start with a free discovery call and we'll help you define the right approach.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function WebDesignDevelopment() {
  return <ServicePageLayout data={data} />;
}
