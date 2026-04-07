import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Share2, Target, CalendarDays, Palette, PenTool, Clock, BarChart3,
  AlertTriangle, Eye, HelpCircle, Shuffle, MessageCircle, Megaphone,
  TrendingUp, Shield, Sparkles, Heart, Users,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Social Media Management for Travel Businesses",
    headline: "Turn Social Media Into Consistent",
    highlightedText: "Bookings",
    description:
      "We manage your content, messaging, and growth strategy to attract the right audience and convert attention into real inquiries and bookings.",
    trustLine:
      "Posting regularly isn't enough. Without strategy and consistency, social media won't drive real results.",
  },
  problem: {
    headline: "Being active isn't the same as being",
    highlightedText: "effective",
    paragraph:
      "Many travel businesses stay active online but struggle to turn attention into real results. Without clear strategy, consistent messaging, and audience focus, engagement doesn't translate into inquiries. Social media should do more than look good — it should build trust and drive actual bookings.",
    painPoints: [
      { icon: Shuffle, text: "Inconsistent posting without measurable business impact" },
      { icon: Eye, text: "Weak or disconnected visual brand presence" },
      { icon: AlertTriangle, text: "Low engagement despite regular effort" },
      { icon: HelpCircle, text: "No clear strategy behind content or offers" },
      { icon: MessageCircle, text: "Difficulty turning followers into inquiries or bookings" },
      { icon: Megaphone, text: "Social media that feels busy but not effective" },
    ],
  },
  capabilities: {
    heading: "What's Included in Social Media Management",
    intro:
      "A complete social media management system built for travel brands — from strategy and content planning to execution and performance review.",
    items: [
      {
        title: "Social Strategy & Positioning",
        desc: "Define what your brand should communicate across social platforms so your presence feels clear, intentional, and aligned with your business goals.",
        icon: Target,
      },
      {
        title: "Content Planning & Campaign Direction",
        desc: "Build structured content plans around your offers, seasonality, campaigns, and customer journey so every post supports a purpose.",
        icon: CalendarDays,
      },
      {
        title: "Visual Consistency & Brand Presentation",
        desc: "Make sure your feed looks cohesive, premium, and instantly more credible.",
        icon: Palette,
      },
      {
        title: "Caption & Messaging Development",
        desc: "Create content messaging that communicates value, creates emotional pull, and encourages action.",
        icon: PenTool,
      },
      {
        title: "Publishing & Ongoing Management",
        desc: "Manage the execution side so your brand stays active, organized, and consistent across the right channels.",
        icon: Clock,
      },
      {
        title: "Performance Review & Optimization",
        desc: "Review what's working, what's underperforming, and where to improve so your social media gets stronger over time.",
        icon: BarChart3,
      },
    ],
  },
  process: {
    heading: "How Our Social Media Management Works",
    steps: [
      { number: "01", title: "Audit & Direction", desc: "Review your current social presence, identify gaps, and define the right strategic direction." },
      { number: "02", title: "Monthly Planning", desc: "Create a structured content and campaign plan based on your offers, audience behavior, and growth priorities." },
      { number: "03", title: "Content & Messaging", desc: "Shape the content structure, visual direction, and messaging needed to keep your brand clear and consistent." },
      { number: "04", title: "Publish & Manage", desc: "Manage rollout, scheduling, and ongoing execution so your channels stay active and aligned." },
      { number: "05", title: "Review & Improve", desc: "Analyze performance each cycle and refine the strategy for better results over time." },
    ],
  },
  deliverables: {
    heading: "Why Social Media Matters More in Travel",
    paragraph:
      "Travel is emotional, visual, and trust-driven. Before someone books, they often check your social media to answer silent questions: Does this brand look credible? Does this experience feel worth it? Is this business active and professional? Can I trust them with my trip? If your social presence can't answer those questions clearly, you lose attention before the sales conversation even starts.",
    groups: [
      {
        label: "Trust & Credibility",
        items: ["Build credibility faster", "Strengthen brand perception", "Support paid campaigns and website conversions"],
      },
      {
        label: "Growth & Results",
        items: ["Stay top of mind", "Generate better quality inquiries over time", "Turn attention into real demand"],
      },
    ],
  },
  outcomes: {
    heading: "What You Can Expect",
    items: [
      { title: "Stronger Brand Presence", desc: "A more trustworthy and professional brand presence across social platforms.", icon: Shield },
      { title: "Better Consistency", desc: "More aligned content around offers, campaigns, and brand messaging.", icon: Share2 },
      { title: "Stronger Engagement", desc: "Higher quality interactions and audience response over time.", icon: Heart },
      { title: "Growth That Converts", desc: "A social presence that supports sales, inquiries, and long-term growth.", icon: TrendingUp },
    ],
  },
  audience: {
    heading: "This Service Is Best For",
    tags: [
      "Hotels & resorts",
      "Tour operators",
      "Travel agencies",
      "DMCs",
      "Visa & holiday service brands",
      "Luxury & niche travel brands",
      "New travel brands needing a polished presence",
      "Established brands wanting social to support real growth",
    ],
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph:
      "Most agencies treat social media as a content task. We treat it as a growth system. TripUp Studio combines travel market understanding, brand strategy, messaging psychology, and execution discipline to build social media systems that help travel brands look stronger, communicate better, and convert attention into demand. We don't just help you post more. We help you make social media actually matter.",
    points: [
      { title: "Growth-first approach", desc: "Every piece of content is connected to your business goals, not just engagement metrics." },
      { title: "Built for travel", desc: "We understand how travelers discover, evaluate, and decide — and we design social strategies around that." },
      { title: "Brand consistency at scale", desc: "We ensure your visual identity, messaging, and tone stay aligned across every platform." },
      { title: "Strategy + execution", desc: "We don't just plan — we manage, publish, review, and improve every cycle." },
    ],
  },
  faq: {
    items: [
      { q: "Which platforms do you manage?", a: "We typically manage Instagram, Facebook, and LinkedIn for travel brands. We can also support TikTok or other platforms depending on your audience and goals." },
      { q: "Do you create the content too?", a: "We provide content direction, caption writing, and visual structure. For photography or video production, we work with your existing assets or coordinate with content partners." },
      { q: "How often do you post?", a: "Posting frequency depends on the plan and platform, but most clients see 12–20 posts per month across channels, supported by stories and engagement management." },
      { q: "Can you run paid ads too?", a: "Social media management focuses on organic presence. For paid campaigns, we offer Performance Marketing as a separate or combined service." },
      { q: "How do you measure results?", a: "We track reach, engagement, follower quality, inquiry volume, and content performance — and review everything monthly to refine the strategy." },
    ],
  },
  cta: {
    headline: "Ready to Make Social Media Work for Your Travel Brand?",
    subtext:
      "If your social presence feels inconsistent, underperforming, or disconnected from real growth, we'll help turn it into a stronger trust and demand channel.",
    ctaLabel: "Book a Free Growth Call",
  },
};

export default function SocialMediaManagement() {
  return <ServicePageLayout data={data} />;
}
