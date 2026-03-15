import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { caseStudiesItems } from "@/data/caseStudiesItems";
import { travelInsightsItems } from "@/data/travelInsightsItems";
import { guidesPlaybooksItems } from "@/data/guidesPlaybooksItems";
import { videoSessionsItems } from "@/data/videoSessionsItems";
import { ArrowRight, Play, Clock, BookOpen, BarChart2, FileText } from "lucide-react";

// ─── Pill badge ────────────────────────────────────────────────────────────
function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}

// ─── Section header ─────────────────────────────────────────────────────────
function SectionHeader({
  label,
  title,
  viewAllTo,
  viewAllLabel,
}: {
  label: string;
  title: string;
  viewAllTo?: string;
  viewAllLabel?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4">
      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">{label}</p>
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">{title}</h2>
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary sm:flex"
        >
          {viewAllLabel ?? "View all"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,hsl(var(--border)) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,hsl(var(--border)) 0 1px,transparent 1px 60px)",
        }}
      />
      <div className="container-wide relative">
        <ScrollReveal>
          <Pill className="mb-6 bg-accent text-accent-foreground">Our Work</Pill>
          <h1 className="font-heading max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
            Proof, strategy, and&nbsp;
            <span className="text-primary">growth work</span> for travel&nbsp;brands
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            This page combines real project work, strategic case studies, and practical resources
            that show how TripUp Studio approaches growth for travel brands — from positioning and
            digital experience to acquisition systems and long-term organic growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Strategy Call
            </Link>
            <Link
              to="/services/market-research"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-heading font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── FEATURED CASE STUDY ─────────────────────────────────────────────────────
function FeaturedCaseStudy() {
  const featured = caseStudiesItems.find((i) => i.featured) ?? caseStudiesItems[0];
  return (
    <section className="px-6 pb-20 md:px-12 lg:px-20">
      <div className="container-wide">
        <SectionHeader label="Highlighted Work" title="Featured Case Study" />
        <ScrollReveal>
          <Link to={featured.slug ?? "/resources/case-studies"} className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl">
              {/* cover image */}
              <div className="relative h-64 w-full overflow-hidden md:h-80">
                {featured.coverImage ? (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
                )}
                {/* dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              {/* content */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill className="bg-primary/10 text-primary">Featured</Pill>
                  <Pill className="bg-secondary text-muted-foreground">{featured.category}</Pill>
                  {featured.industryTag && (
                    <Pill className="bg-secondary text-muted-foreground">{featured.industryTag}</Pill>
                  )}
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold leading-snug md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                {/* metrics */}
                {featured.metrics && (
                  <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-6">
                    {featured.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-heading text-2xl font-extrabold text-primary">{m.value}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── CASE STUDIES GRID ───────────────────────────────────────────────────────
function CaseStudiesGrid() {
  const items = caseStudiesItems.filter((i) => !i.featured).slice(0, 6);
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide">
        <SectionHeader
          label="Proof Library"
          title="Case Studies"
          viewAllTo="/resources/case-studies"
          viewAllLabel="View all case studies"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={i * 0.06}>
              <Link to={cs.slug ?? "/resources/case-studies"} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                  {/* visual */}
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-background">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                      <BarChart2 className="h-16 w-16 text-primary" />
                    </div>
                    {/* category pill overlay */}
                    <div className="absolute left-4 top-4">
                      <Pill className="bg-card/80 text-muted-foreground backdrop-blur">{cs.category}</Pill>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {cs.industryTag && (
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary">
                        {cs.industryTag}
                      </p>
                    )}
                    <h3 className="font-heading text-base font-bold leading-snug text-foreground">
                      {cs.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {cs.excerpt}
                    </p>
                    {/* metrics row */}
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="mt-4 flex gap-4 border-t border-border pt-4">
                        {cs.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <p className="font-heading text-sm font-extrabold text-primary">{m.value}</p>
                            <p className="text-[10px] text-muted-foreground">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary/80">
                      View Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        {/* mobile view all */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/resources/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── WHAT THIS WORK REFLECTS ─────────────────────────────────────────────────
const pillars = [
  {
    icon: "🎯",
    title: "Strategic clarity before execution",
    desc: "Every engagement starts with understanding — market position, audience, and objective — before a single tactic is decided.",
  },
  {
    icon: "📐",
    title: "Conversion-focused digital experiences",
    desc: "Design and UX decisions are anchored in the traveler's decision journey, not aesthetic preference alone.",
  },
  {
    icon: "🌱",
    title: "Sustainable visibility through content and SEO",
    desc: "Organic authority compounds over time when content is built around traveler intent, not just search volume.",
  },
  {
    icon: "⚡",
    title: "Smarter systems through AI and automation",
    desc: "The most scalable brands build systems that reduce manual effort while improving the quality of every touchpoint.",
  },
];

function WhatThisWorkReflects() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
              What This Work Reflects
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="flex flex-col rounded-xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg">
                <span className="mb-4 text-3xl">{p.icon}</span>
                <h3 className="font-heading text-base font-bold text-foreground leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRAVEL INSIGHTS ─────────────────────────────────────────────────────────
function TravelInsightsSection() {
  const featured = travelInsightsItems.find((i) => i.featured) ?? travelInsightsItems[0];
  const rest = travelInsightsItems.filter((i) => i.slug !== featured.slug).slice(0, 3);

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide">
        <SectionHeader
          label="Strategic Thinking"
          title="Travel Insights"
          viewAllTo="/resources/travel-insights"
          viewAllLabel="View all insights"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* featured — spans 2 columns */}
          <ScrollReveal className="lg:col-span-2">
            <Link to={featured.slug ?? "/resources/travel-insights"} className="group block h-full">
              <div className="flex h-full flex-col rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <Pill className="bg-primary/10 text-primary">Featured Insight</Pill>
                  <Pill className="bg-secondary text-muted-foreground">{featured.category}</Pill>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground leading-snug md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{featured.readingTime}</span>
                  {featured.date && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{featured.date}</span>
                    </>
                  )}
                </div>
                <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary/80">
                  Read Insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </Link>
          </ScrollReveal>

          {/* supporting cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 0.08}>
                <Link to={item.slug ?? "/resources/travel-insights"} className="group block">
                  <div className="flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg">
                    <Pill className="mb-3 self-start bg-secondary text-muted-foreground">{item.category}</Pill>
                    <h4 className="font-heading text-sm font-bold text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{item.readingTime}</span>
                    </div>
                    <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary/80">
                      Read Insight <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* mobile view all */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/resources/travel-insights"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── GUIDES & PLAYBOOKS ──────────────────────────────────────────────────────
const typeColors: Record<string, string> = {
  Guide: "bg-blue-500/10 text-blue-400",
  Playbook: "bg-purple-500/10 text-purple-400",
  Checklist: "bg-emerald-500/10 text-emerald-400",
  Framework: "bg-amber-500/10 text-amber-400",
};

function GuidesSection() {
  const items = guidesPlaybooksItems.slice(0, 3);
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Practical Frameworks"
          title="Guides & Playbooks"
          viewAllTo="/resources/guides-playbooks"
          viewAllLabel="View all guides"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link to={item.slug ?? "/resources/guides-playbooks"} className="group block h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg">
                  {/* type + category */}
                  <div className="flex items-center gap-2">
                    <Pill className={typeColors[item.type] ?? "bg-secondary text-muted-foreground"}>
                      {item.type}
                    </Pill>
                    <Pill className="bg-secondary text-muted-foreground">{item.category}</Pill>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  {/* best for */}
                  {"bestFor" in item && item.bestFor && (
                    <div className="mt-4 rounded-lg bg-secondary/60 px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Best for
                      </p>
                      <p className="mt-0.5 text-xs text-foreground">{item.bestFor as string}</p>
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>{item.readingTime}</span>
                    </div>
                    <p className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary/80">
                      Open Guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/resources/guides-playbooks"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── VIDEO SESSIONS ──────────────────────────────────────────────────────────
function VideoSessionsSection() {
  const items = videoSessionsItems.slice(0, 3);
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide">
        <SectionHeader
          label="On-Demand Expertise"
          title="Video Sessions"
          viewAllTo="/resources/video-sessions"
          viewAllLabel="View all sessions"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link to={item.slug ?? "/resources/video-sessions"} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-xl">
                  {/* thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/20" />
                    )}
                    {/* play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-5 w-5 translate-x-0.5 text-primary-foreground" fill="currentColor" />
                      </div>
                    </div>
                    {/* duration badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-bold text-foreground backdrop-blur">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  {/* content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <Pill className="bg-secondary text-muted-foreground">{item.categoryPill ?? item.category}</Pill>
                      <span className="text-[11px] text-muted-foreground">{item.format}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-base font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                    <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary/80">
                      Watch Session <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/resources/video-sessions"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all sessions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide text-center">
        <ScrollReveal>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-background/50">
            Let's Work Together
          </p>
          <h2 className="font-heading text-4xl font-extrabold md:text-5xl">
            Ready to turn strategy into growth?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-background/60 leading-relaxed">
            Explore how TripUp Studio helps travel brands strengthen their positioning, improve
            conversions, grow organically, and build smarter systems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-heading font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Strategy Call
            </Link>
            <Link
              to="/services/market-research"
              className="inline-flex items-center gap-2 rounded-full border-2 border-background/20 px-8 py-3.5 font-heading font-semibold text-background transition-colors hover:border-background/50"
            >
              Explore Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function OurWork() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCaseStudy />
      <CaseStudiesGrid />
      <WhatThisWorkReflects />
      <TravelInsightsSection />
      <GuidesSection />
      <VideoSessionsSection />
      <FinalCTA />
    </Layout>
  );
}
