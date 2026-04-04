import { Search, Fingerprint, Smartphone, Bot, BarChart3, Megaphone, Share2 } from "lucide-react";

export const services = [
  // Research & Strategy
  { title: "Market Research & Growth Strategy", description: "Deep-dive insights, competitive analysis, and a clear growth roadmap tailored to your travel segment.", icon: Search, category: "Research & Strategy", slug: "/services/market-research-growth-strategy" },
  // Brand & Product
  { title: "Branding & Identity", description: "Visual identity, positioning, and messaging systems built specifically for travel brands.", icon: Fingerprint, category: "Brand & Product", slug: "/services/branding-identity" },
  { title: "Product Design & Development", description: "Web and mobile apps engineered for travel operators, platforms, and experiences.", icon: Smartphone, category: "Brand & Product", slug: "/services/web-design-development" },
  { title: "AI & Automation", description: "Custom AI agents and smart automations that streamline operations and personalise at scale.", icon: Bot, category: "Brand & Product", comingSoon: true, slug: "/services/ai-automation" },
  // Marketing & Growth
  { title: "Performance Marketing", description: "Data-driven campaigns across search, social, and travel platforms — optimised for bookings and ROI.", icon: BarChart3, category: "Marketing & Growth", slug: "/services/performance-marketing" },
  { title: "Content & SEO", description: "Organic reach through destination content, SEO strategy, and authority-building that drives long-term growth.", icon: Megaphone, category: "Marketing & Growth", slug: "/services/content-seo" },
  { title: "Social Media Management", description: "Strategy, content calendars, and community management that grow your travel brand across social platforms.", icon: Share2, category: "Marketing & Growth", slug: "/services/social-media" },
];

export const serviceCategories = ["Research & Strategy", "Brand & Product", "Marketing & Growth"] as const;
export type ServiceCategory = typeof serviceCategories[number];
