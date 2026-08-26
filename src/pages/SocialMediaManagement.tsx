import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Video, Target, CalendarDays, Palette, PenTool, Clock, BarChart3,
  AlertTriangle, Eye, HelpCircle, Shuffle, Camera, Megaphone,
  TrendingUp, Shield, Film, Users,
} from "lucide-react";

export const data: ServicePageData = {
  hero: {
    eyebrow: "Video & Creative Production for Travel Businesses",
    headline: "Turn Your Experiences Into Creative That Drives",
    highlightedText: "Bookings",
    description:
      "We plan, produce, and edit video and creative assets that show your experiences at their best — built to earn attention and convert it into real inquiries and bookings.",
    trustLine:
      "Beautiful footage isn't enough. Without direction and purpose, creative won't drive real results.",
  },
  problem: {
    headline: "Nice-looking content isn't the same as",
    highlightedText: "effective creative",
    paragraph:
      "Many travel businesses have footage and photos but struggle to turn them into creative that sells. Without clear direction, messaging, and a production system, assets pile up without moving the business forward. Creative should do more than look good — it should build trust and drive action.",
    painPoints: [
      { icon: Shuffle, text: "Random content with no creative direction" },
      { icon: Eye, text: "Footage that doesn't reflect the real experience" },
      { icon: AlertTriangle, text: "Videos that get views but no inquiries" },
      { icon: HelpCircle, text: "No repeatable system for producing assets" },
      { icon: Camera, text: "Inconsistent quality across channels and campaigns" },
      { icon: Megaphone, text: "Creative that isn't built for ads or landing pages" },
    ],
  },
  capabilities: {
    heading: "What's Included in Video & Creative Production",
    intro:
      "An end-to-end creative production system built for travel brands — from concept and shoot direction to editing, formats, and performance review.",
    items: [
      {
        title: "Creative Strategy & Direction",
        desc: "Define what your creative needs to communicate so every asset feels intentional and aligned with your business goals.",
        icon: Target,
      },
      {
        title: "Concepting & Shot Planning",
        desc: "Build storyboards, shot lists, and production plans around your offers, destinations, seasonality, and campaigns.",
        icon: CalendarDays,
      },
      {
        title: "Video & Photo Production",
        desc: "Capture destinations, properties, and experiences with a look that feels premium and instantly more credible.",
        icon: Camera,
      },
      {
        title: "Editing & Post-Production",
        desc: "Edit, colour, caption, and cut assets into the formats each channel actually needs — reels, hero films, and ad cuts.",
        icon: Film,
      },
      {
        title: "Scripting & Messaging",
        desc: "Write hooks, voiceover, and on-screen messaging that communicate value and encourage action.",
        icon: PenTool,
      },
      {
        title: "Brand & Visual Consistency",
        desc: "Keep every asset visually cohesive with your identity across website, ads, and social channels.",
        icon: Palette,
      },
      {
        title: "Asset Library & Delivery",
        desc: "Organise and deliver a reusable creative library your team can deploy across campaigns without starting from scratch.",
        icon: Clock,
      },
      {
        title: "Creative Performance Review",
        desc: "Review which hooks, formats, and edits perform, then refine the next production cycle around what works.",
        icon: BarChart3,
      },
    ],
  },
  process: {
    heading: "How Our Video & Creative Production Works",
    steps: [
      { number: "01", title: "Audit & Strategy", desc: "Review your existing assets, identify gaps, and define the right creative direction based on your audience, offers, and business goals." },
      { number: "02", title: "Concept & Pre-Production", desc: "Build the creative concept, script, shot list, and production plan with clear themes and visual direction." },
      { number: "03", title: "Production & Editing", desc: "Shoot on location, then edit, colour, and cut assets into the formats each channel and campaign needs." },
      { number: "04", title: "Performance Review & Iteration", desc: "Analyse how creative performs across channels, then refine hooks, formats, and direction for stronger results." },
    ],
  },
  deliverables: {
    heading: "Why Creative Matters More in Travel",
    paragraph:
      "Travel is emotional, visual, and trust-driven. Before someone books, they watch and look to answer silent questions: Does this experience feel worth it? Can I trust them with my trip? If your creative can't answer those questions clearly, you lose attention before the sales conversation even starts.",
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
      { title: "Stronger Brand Presence", desc: "Creative that makes your brand look as premium as the experience you deliver.", icon: Shield },
      { title: "A Reusable Asset Library", desc: "A consistent bank of video and photo assets for offers, campaigns, and channels.", icon: Video },
      { title: "Higher-Performing Ads", desc: "Creative built for paid campaigns, with hooks and formats that hold attention.", icon: Users },
      { title: "Growth That Converts", desc: "Assets that support sales, inquiries, and long-term growth.", icon: TrendingUp },
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
      "Established brands wanting creative that supports real growth",
    ],
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph:
      "Most production teams deliver footage. We deliver creative that works. TripUp Studio combines travel market understanding, brand strategy, messaging psychology, and production discipline to build creative systems that help travel brands communicate better, and convert attention into demand. We help you make every asset actually matter.",
    points: [
      { title: "Growth-first approach", desc: "Every asset is connected to your business goals, not just aesthetics or view counts." },
      { title: "Built for travel", desc: "We understand how travelers discover, evaluate, and decide — and we design creative around that." },
      { title: "Brand consistency at scale", desc: "We ensure your visual identity, messaging, and tone stay aligned across every format and platform." },
      { title: "Strategy + execution", desc: "We don't just concept — we shoot, edit, deliver, review, and improve every cycle." },
    ],
  },
  faq: {
    items: [
      { q: "What kind of assets do you produce?", a: "Destination and property films, short-form vertical video for social, ad creative, testimonial edits, and supporting photography — shaped around where the assets will be used." },
      { q: "Do you shoot on location?", a: "Yes. We plan the shoot, direct on location, and handle post-production. We can also work entirely with your existing footage and photo library when a shoot isn't practical." },
      { q: "How many assets do we get?", a: "Volume depends on the plan and shoot scope, but most engagements deliver a core set of hero videos plus a batch of short-form cuts and stills for ongoing use." },
      { q: "Can you run the ads with this creative?", a: "Creative production focuses on the assets. For campaign management, we offer Paid Advertising as a separate or combined service." },
      { q: "How do you measure results?", a: "We track watch-through, engagement, click-through, and inquiry volume by asset — and review everything to refine the next production cycle." },
    ],
  },
  cta: {
    headline: "Ready to Make Your Creative Work for Your Travel Brand?",
    subtext:
      "If your video and creative feel inconsistent, underperforming, or disconnected from real growth, we'll help turn them into a stronger trust and demand channel.",
    ctaLabel: "Book a Free Growth Call",
  },
};

export default function SocialMediaManagement() {
  return <ServicePageLayout data={data} />;
}
