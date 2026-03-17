import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Play,
  Clock,
  CalendarDays,
  Users,
  Layers,
  ArrowRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";

/* ─── TYPES ─── */

export interface VideoSessionHighlight {
  timestamp: string;
  label: string;
}

export interface VideoSessionResource {
  type: "Guide" | "Case Study" | "Service" | "Checklist";
  title: string;
  description: string;
  to: string;
}

export interface VideoSessionItem {
  type: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  duration?: string;
  ctaLabel?: string;
  featured?: boolean;
  slug: string;

  // Rich detail fields
  thumbnail?: string;       // path to thumbnail image
  categoryPill?: string;
  format?: string;            // Workshop, Breakdown, Training, Q&A, Case Review
  audience?: string;          // "For tour operators", etc.
  videoUrl?: string;          // embed URL (YouTube/Vimeo iframe src)
  thumbnailLabel?: string;    // label shown on the placeholder thumbnail
  coversBullets?: string[];   // "What this session covers" list
  keyTakeaways?: {
    title: string;
    desc: string;
  }[];
  whoIsItFor?: string[];
  highlights?: VideoSessionHighlight[];
  relatedResources?: VideoSessionResource[];
  relatedServiceTo?: string;  // CTA → service page link
  relatedServiceLabel?: string;
}

/* ─── MAIN COMPONENT ─── */

interface Props {
  item: VideoSessionItem;
  relatedItems?: VideoSessionItem[];
  backTo?: string;
}

export default function VideoSessionDetailPage({
  item,
  relatedItems = [],
  backTo = "/resources/video-sessions",
}: Props) {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* ── Back nav ── */}
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <div className="container-wide">
          <button
            onClick={() => navigate(backTo)}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Video Sessions
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: text */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  Video Session
                </span>
                {item.categoryPill && (
                  <span className="inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {item.categoryPill}
                  </span>
                )}
              </div>
              <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {item.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>

              {/* Meta row */}
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                {item.duration && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {item.duration}
                  </span>
                )}
                {item.format && (
                  <span className="flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-primary" />
                    {item.format}
                  </span>
                )}
                {item.audience && (
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-primary" />
                    {item.audience}
                  </span>
                )}
                {item.date && (
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {item.date}
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#video-player">
                    <Play className="h-4 w-4" /> Watch Session
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Book a Strategy Call</Link>
                </Button>
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex flex-wrap gap-4">
                {["Free strategic session", "Built for travel businesses", "Actionable frameworks"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: video thumbnail / preview card — desktop only */}
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl border border-border aspect-video flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                {item.videoUrl ? (
                  <iframe
                    src={item.videoUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={item.title}
                  />
                ) : (
                  <>
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background/75 shadow-lg backdrop-blur-sm border border-primary/20">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. VIDEO PLAYER (full-width embed)
      ══════════════════════════════════════════ */}
      <section id="video-player" className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {item.videoUrl ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    src={item.videoUrl}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              ) : (
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-card">
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background/75 shadow-xl backdrop-blur-sm border border-primary/20">
                      <Play className="h-10 w-10 text-primary ml-1.5" />
                    </div>
                  </div>
                </div>
              )}
              {/* Below-player meta */}
              <div className="flex flex-wrap items-center gap-6 border-t border-border px-6 py-4">
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.duration}{item.date ? ` · ${item.date}` : ""} · Hosted by TripUp Studio
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SESSION OVERVIEW — "What this covers"
      ══════════════════════════════════════════ */}
      {item.coversBullets && item.coversBullets.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <ScrollReveal>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Session Overview</p>
                <h2 className="font-heading text-3xl font-bold md:text-4xl leading-tight">
                  What This Session Covers
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">What you'll learn</p>
                <div className="space-y-3">
                  {item.coversBullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm text-foreground">{bullet}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          4. KEY TAKEAWAYS (insight cards)
      ══════════════════════════════════════════ */}
      {item.keyTakeaways && item.keyTakeaways.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-primary">Key Takeaways</p>
              <h2 className="text-center font-heading text-3xl font-bold md:text-4xl mb-12">
                What You'll Take Away
              </h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.keyTakeaways.map((tk, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <p className="font-heading text-base font-bold text-foreground">{tk.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tk.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          5. RELATED RESOURCES
      ══════════════════════════════════════════ */}
      {item.relatedResources && item.relatedResources.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Related Resources</p>
              <h2 className="font-heading text-2xl font-bold mb-8">Go deeper with these</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {item.relatedResources.map((res, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <Link
                    to={res.to}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{res.type}</span>
                    <h3 className="mt-2 font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {res.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground flex-1">{res.description}</p>
                    <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          6. WHO THIS IS FOR
      ══════════════════════════════════════════ */}
      {item.whoIsItFor && item.whoIsItFor.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-primary">
                Who This Is For
              </p>
              <h2 className="text-center font-heading text-3xl font-bold md:text-4xl mb-10">
                This Session Is For You If…
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
                {item.whoIsItFor.map((who, i) => (
                  <span key={i} className="rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground">
                    {who}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          7. SESSION HIGHLIGHTS (timestamps)
      ══════════════════════════════════════════ */}
      {item.highlights && item.highlights.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Session Highlights</p>
              <h2 className="font-heading text-2xl font-bold mb-8">Jump to a section</h2>
            </ScrollReveal>
            <div className="space-y-3">
              {item.highlights.map((h, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <span className="shrink-0 font-mono text-sm font-bold text-primary">{h.timestamp}</span>
                    <div className="h-4 w-px bg-border" />
                    <p className="text-sm text-foreground">{h.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          8. HOST / SPEAKER CREDIBILITY
      ══════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Hosted by TripUp Studio</p>
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-foreground">TripUp Studio</p>
                  <p className="mt-1 text-xs text-muted-foreground">Growth studio for travel brands</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    TripUp Studio helps travel brands grow through strategic branding, conversion-focused web experiences, organic visibility systems, and smart automation. These sessions are drawn directly from client work — actionable, specific, and built for the realities of the travel industry.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. TOPIC-SPECIFIC CTA
      ══════════════════════════════════════════ */}
      <section className="section-padding !pt-0">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Apply It to Your Business</p>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Want help applying this to your business?
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl mx-auto">
                If this session highlighted issues in your current brand, website, or growth systems, we can help you turn the strategy into execution.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book a Strategy Call</Link>
                </Button>
                {item.relatedServiceTo && (
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to={item.relatedServiceTo}>
                      {item.relatedServiceLabel ?? "Explore Related Service"}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. RELATED VIDEO SESSIONS
      ══════════════════════════════════════════ */}
      {relatedItems.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">More Sessions</p>
              <h2 className="font-heading text-2xl font-bold mb-8">Related Video Sessions</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.06}>
                  <Link
                    to={r.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                  >
                    {/* Thumbnail */}
                    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
                      {r.thumbnail ? (
                        <img
                          src={r.thumbnail}
                          alt={r.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card">
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
                        </div>
                      )}
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-background/75 shadow backdrop-blur-sm border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-5 w-5 text-primary ml-0.5" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="flex flex-col flex-1 p-5">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{r.category}</span>
                      <h3 className="mt-2 font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                        {r.title}
                      </h3>
                      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          {r.duration && <><Clock className="h-3 w-3 text-primary" />{r.duration}</>}
                        </span>
                        <span className="text-xs font-semibold text-primary">Watch →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA band */}
      <CTABand
        headline="Want this applied to your business, not just explained?"
        subtext="Our video sessions help you think more clearly. If you want help turning those ideas into execution, we can work directly on the strategy, systems, and implementation."
        cta="Book a Strategy Call"
      />
    </Layout>
  );
}
