import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Target, Users, MessageSquare, BookOpen, Layers, Palette, Volume2, Compass,
  Shield, TrendingUp, Sparkles, Shuffle, AlertTriangle, Eye, HelpCircle,
} from "lucide-react";

export const data: ServicePageData = {
  hero: {
    eyebrow: "Brand & Positioning for Travel Businesses",
    headline: "Make Your Brand Impossible to",
    highlightedText: "Ignore",
    description: "We design brand systems that position your travel business clearly, communicate value effectively, and drive booking decisions.",
    trustLine: "Built for hotels, destinations, tour operators, travel startups, and experience-led brands.",
  },
  problem: {
    headline: "If your brand feels generic,",
    highlightedText: "your growth will too.",
    paragraph: "In a crowded tourism market, many businesses struggle to stand out because their positioning is unclear and branding feels inconsistent. This makes it harder to build trust and convert attention into bookings. Without a strong, cohesive brand, even great offers get overlooked.",
    painPoints: [
      { icon: Shuffle, text: "Generic positioning that blends in with competitors" },
      { icon: AlertTriangle, text: "Inconsistent messaging across website, social, and campaigns" },
      { icon: Eye, text: "Visual identity that looks good but says very little" },
      { icon: HelpCircle, text: "Difficulty communicating what makes the experience truly different" },
    ],
  },
  capabilities: {
    heading: "What we do",
    intro: "We build travel brands from the inside out — combining strategy, story, and identity systems that make your business easier to understand, easier to trust, and easier to choose.",
    items: [
      { title: "Brand Positioning", desc: "Define what makes your travel business distinct, valuable, and relevant in the market.", icon: Target },
      { title: "Audience & Traveler Insights", desc: "Clarify who you're speaking to, what they care about, and what drives action.", icon: Users },
      { title: "Messaging Architecture", desc: "Create clear messaging pillars, value propositions, and conversion-ready communication.", icon: MessageSquare },
      { title: "Brand Narrative & Storytelling", desc: "Shape the emotional story behind the experience so the brand feels memorable and meaningful.", icon: BookOpen },
      { title: "Offer Clarity & Differentiation", desc: "Make your packages, stays, tours, or experiences easier to understand and more compelling.", icon: Layers },
      { title: "Visual Identity Direction", desc: "Develop visual references and creative direction that align with the strategy and experience.", icon: Palette },
      { title: "Tone of Voice Guidance", desc: "Define how the brand should sound across website, campaigns, and social channels.", icon: Volume2 },
      { title: "Experience-Led Brand Thinking", desc: "Ensure the brand reflects the actual traveler journey, not just aesthetics.", icon: Compass },
    ],
  },
  process: {
    heading: "How we shape a brand that feels clear, consistent, and built for growth",
    steps: [
      { number: "01", title: "Discover", desc: "Research your market, traveler expectations, competitors, and current brand gaps." },
      { number: "02", title: "Define", desc: "Clarify positioning, audience, messaging, and the core strategic direction." },
      { number: "03", title: "Design", desc: "Translate strategy into narrative, voice, and visual identity direction." },
      { number: "04", title: "Deliver", desc: "Package the brand system so it can be used consistently across website, content, and campaigns." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "Every branding engagement is built to give you clarity, consistency, and assets you can actually use across growth, content, and conversion.",
    groups: [
      { label: "Strategy", items: ["Brand audit", "Competitive review", "Positioning framework", "Audience / traveler profile", "Differentiation map"] },
      { label: "Messaging", items: ["Messaging pillars", "Value proposition", "Brand story", "Offer framing", "Tone of voice guidance"] },
      { label: "Identity Direction", items: ["Visual identity direction", "Creative references / moodboards", "Art direction guidance", "Content style alignment"] },
      { label: "Activation", items: ["Website messaging guidance", "Campaign messaging direction", "Social and content alignment", "Internal brand consistency guidance"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Clearer Positioning", desc: "Your audience instantly understands what makes your brand different.", icon: Target },
      { title: "Stronger Trust", desc: "A cohesive identity creates confidence across every touchpoint.", icon: Shield },
      { title: "Better Conversion", desc: "Clearer messaging and stronger differentiation improve decision-making.", icon: TrendingUp },
      { title: "Scalable Growth", desc: "Your brand becomes easier to extend across website, campaigns, content, and partnerships.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that need more than a prettier logo",
    tags: ["Hotels & boutique stays", "Tour operators", "Travel startups", "Destination brands", "DMCs & travel agencies", "Experience-led hospitality brands"],
    supportingLine: "Ideal for brands preparing to relaunch, reposition, scale, or improve conversion across digital channels.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most providers can give you visuals. Fewer can connect brand strategy to traveler psychology, digital experience, and long-term growth. TripUp Studio combines research, positioning, identity thinking, and execution so your brand is not only beautiful — it performs.",
    points: [
      { title: "Strategy before aesthetics", desc: "We define the business and traveler logic before shaping the visual direction." },
      { title: "Built for travel", desc: "We understand destinations, experiences, bookings, and how travel brands actually earn trust." },
      { title: "Connected to growth", desc: "Branding is designed to support websites, campaigns, search visibility, and conversion." },
      { title: "One partner, end-to-end", desc: "From brand clarity to launch-ready execution, everything works as one system." },
    ],
  },
  faq: {
    items: [
      { q: "Do you only do logo design?", a: "No. This service is focused on brand strategy, positioning, messaging, narrative, and identity direction — not just logo creation. The goal is to build a brand system that supports trust and growth." },
      { q: "Can you work with our existing website or team?", a: "Yes. We can collaborate with your existing internal team, freelancers, or current website setup and align the branding work across all touchpoints." },
      { q: "Is this right for early-stage travel businesses?", a: "Yes. This is especially useful for travel startups, new offers, repositioning efforts, or brands entering a more competitive market." },
      { q: "Will this help improve conversions?", a: "Yes. Clear positioning, stronger messaging, and a more cohesive identity often improve trust, clarity, and decision-making across the customer journey." },
      { q: "Do you also implement the brand across the website and marketing?", a: "Yes. TripUp Studio can also support website messaging, funnel design, content systems, and marketing execution after the brand strategy is defined." },
    ],
  },
  cta: {
    headline: "Ready to build a travel brand people actually remember?",
    subtext: "If your business feels hard to explain, hard to differentiate, or hard to grow, branding may be the missing layer. Start with a free discovery call and we'll help you see what needs clarity first.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function BrandingIdentity() {
  return <ServicePageLayout data={data} />;
}
