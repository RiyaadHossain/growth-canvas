import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Link } from "react-router-dom";
import {
  Check,
  Target,
  Users,
  MessageSquare,
  BookOpen,
  Layers,
  Palette,
  Volume2,
  Compass,
  Shield,
  TrendingUp,
  Sparkles,
  Eye,
  AlertTriangle,
  Shuffle,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── DATA ─── */

const painPoints = [
  { icon: Shuffle, text: "Generic positioning that blends in with competitors" },
  { icon: AlertTriangle, text: "Inconsistent messaging across website, social, and campaigns" },
  { icon: Eye, text: "Visual identity that looks good but says very little" },
  { icon: HelpCircle, text: "Difficulty communicating what makes the experience truly different" },
];

const capabilities = [
  { title: "Brand Positioning", desc: "Define what makes your travel business distinct, valuable, and relevant in the market.", icon: Target },
  { title: "Audience & Traveler Insights", desc: "Clarify who you're speaking to, what they care about, and what drives action.", icon: Users },
  { title: "Messaging Architecture", desc: "Create clear messaging pillars, value propositions, and conversion-ready communication.", icon: MessageSquare },
  { title: "Brand Narrative & Storytelling", desc: "Shape the emotional story behind the experience so the brand feels memorable and meaningful.", icon: BookOpen },
  { title: "Offer Clarity & Differentiation", desc: "Make your packages, stays, tours, or experiences easier to understand and more compelling.", icon: Layers },
  { title: "Visual Identity Direction", desc: "Develop visual references and creative direction that align with the strategy and experience.", icon: Palette },
  { title: "Tone of Voice Guidance", desc: "Define how the brand should sound across website, campaigns, and social channels.", icon: Volume2 },
  { title: "Experience-Led Brand Thinking", desc: "Ensure the brand reflects the actual traveler journey, not just aesthetics.", icon: Compass },
];

const processSteps = [
  { number: "01", title: "Discover", desc: "Research your market, traveler expectations, competitors, and current brand gaps." },
  { number: "02", title: "Define", desc: "Clarify positioning, audience, messaging, and the core strategic direction." },
  { number: "03", title: "Design", desc: "Translate strategy into narrative, voice, and visual identity direction." },
  { number: "04", title: "Deliver", desc: "Package the brand system so it can be used consistently across website, content, and campaigns." },
];

const deliverableGroups = [
  {
    label: "Strategy",
    items: ["Brand audit", "Competitive review", "Positioning framework", "Audience / traveler profile", "Differentiation map"],
  },
  {
    label: "Messaging",
    items: ["Messaging pillars", "Value proposition", "Brand story", "Offer framing", "Tone of voice guidance"],
  },
  {
    label: "Identity Direction",
    items: ["Visual identity direction", "Creative references / moodboards", "Art direction guidance", "Content style alignment"],
  },
  {
    label: "Activation",
    items: ["Website messaging guidance", "Campaign messaging direction", "Social and content alignment", "Internal brand consistency guidance"],
  },
];

const outcomes = [
  { title: "Clearer Positioning", desc: "Your audience instantly understands what makes your brand different.", icon: Target },
  { title: "Stronger Trust", desc: "A cohesive identity creates confidence across every touchpoint.", icon: Shield },
  { title: "Better Conversion", desc: "Clearer messaging and stronger differentiation improve decision-making.", icon: TrendingUp },
  { title: "Scalable Growth", desc: "Your brand becomes easier to extend across website, campaigns, content, and partnerships.", icon: Sparkles },
];

const audienceTags = [
  "Hotels & boutique stays",
  "Tour operators",
  "Travel startups",
  "Destination brands",
  "DMCs & travel agencies",
  "Experience-led hospitality brands",
];

const whyUsPoints = [
  { title: "Strategy before aesthetics", desc: "We define the business and traveler logic before shaping the visual direction." },
  { title: "Built for travel", desc: "We understand destinations, experiences, bookings, and how travel brands actually earn trust." },
  { title: "Connected to growth", desc: "Branding is designed to support websites, campaigns, search visibility, and conversion." },
  { title: "One partner, end-to-end", desc: "From brand clarity to launch-ready execution, everything works as one system." },
];

const faqItems = [
  { q: "Do you only do logo design?", a: "No. This service is focused on brand strategy, positioning, messaging, narrative, and identity direction — not just logo creation. The goal is to build a brand system that supports trust and growth." },
  { q: "Can you work with our existing website or team?", a: "Yes. We can collaborate with your existing internal team, freelancers, or current website setup and align the branding work across all touchpoints." },
  { q: "Is this right for early-stage travel businesses?", a: "Yes. This is especially useful for travel startups, new offers, repositioning efforts, or brands entering a more competitive market." },
  { q: "Will this help improve conversions?", a: "Yes. Clear positioning, stronger messaging, and a more cohesive identity often improve trust, clarity, and decision-making across the customer journey." },
  { q: "Do you also implement the brand across the website and marketing?", a: "Yes. TripUp Studio can also support website messaging, funnel design, content systems, and marketing execution after the brand strategy is defined." },
];

/* ─── PAGE ─── */

export default function BrandingIdentity() {
  return (
    <Layout>
      {/* 1 — Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Branding &amp; Identity for Travel Businesses
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Build a travel brand people remember —{" "}
              <span className="text-primary">and choose.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              TripUp Studio helps travel brands create a clear position, compelling story, and cohesive identity system that turns attention into trust and trust into bookings. From brand strategy to messaging and visual direction, we help you become the obvious choice in a crowded market.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Book a Free Discovery Call
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/why-us">See How We Work</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Built for hotels, destinations, tour operators, travel startups, and experience-led brands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2 — Problem / Opportunity */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Most travel brands don't have a visibility problem — they have a{" "}
                <span className="text-primary">clarity problem.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Many travel businesses struggle to stand out because their brand feels generic, inconsistent, or too focused on features instead of experience. In a market full of similar offers, unclear positioning and weak storytelling make it harder to earn trust, attract the right audience, and convert interest into bookings.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {painPoints.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3 — What We Do */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">What we do</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              We build travel brands from the inside out — combining strategy, story, and identity systems that make your business easier to understand, easier to trust, and easier to choose.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.05}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <cap.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — How We Work (mini) */}
      <BrandingProcess />

      {/* 5 — Deliverables */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">What you get</h2>
              <p className="mt-4 text-muted-foreground">
                Every branding engagement is built to give you clarity, consistency, and assets you can actually use across growth, content, and conversion.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                {deliverableGroups.map((group) => (
                  <div key={group.label}>
                    <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-primary">
                      {group.label}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6 — Outcomes */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
              What this unlocks for your travel business
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.05}>
                <div className="rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <o.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Who It's For */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Built for travel businesses that need more than a prettier logo
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {audienceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Ideal for brands preparing to relaunch, reposition, scale, or improve conversion across digital channels.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8 — Why TripUp Studio */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Why TripUp Studio</h2>
              <p className="mt-4 text-muted-foreground">
                Most providers can give you visuals. Fewer can connect brand strategy to traveler psychology, digital experience, and long-term growth. TripUp Studio combines research, positioning, identity thinking, and execution so your brand is not only beautiful — it performs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {whyUsPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h4 className="font-heading text-sm font-bold text-foreground">{pt.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-8">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <CTABand
        headline="Ready to build a travel brand people actually remember?"
        subtext="If your business feels hard to explain, hard to differentiate, or hard to grow, branding may be the missing layer. Start with a free discovery call and we'll help you see what needs clarity first."
        cta="Book a Free Discovery Call"
      />
    </Layout>
  );
}

/* ─── MINI PROCESS SECTION ─── */

function BrandingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            How we shape a brand that feels clear, consistent, and built for growth
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line on desktop */}
              {i < processSteps.length - 1 && (
                <div className="absolute right-0 top-5 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
              )}
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
              >
                {step.number}
              </motion.span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
