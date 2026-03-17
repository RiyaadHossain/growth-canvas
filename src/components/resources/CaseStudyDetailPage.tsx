import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Check, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";

/* ─── TYPES ─── */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudySnapshot {
  clientType: string;
  serviceScope: string;
  timeline: string;
  primaryGoal: string;
  platform?: string;
}

export interface CaseStudyChallenge {
  intro: string;
  points: string[];
}

export interface CaseStudyApproachStep {
  number: string;
  title: string;
  desc: string;
}

export interface CaseStudyTransformation {
  before: string[];
  after: string[];
}

export interface CaseStudyTestimonial {
  quote: string;
  name?: string;
  role?: string;
  brand?: string;
}

export interface CaseStudyItem {
  type: "Case Study";
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime?: string;
  ctaLabel?: string;
  featured?: boolean;
  slug: string;
  industryTag?: string;
  coverImage?: string;

  // New rich fields
  metrics?: CaseStudyMetric[];
  snapshot?: CaseStudySnapshot;
  challenge?: CaseStudyChallenge;
  approachSteps?: CaseStudyApproachStep[];
  deliverables?: string[];
  transformation?: CaseStudyTransformation;
  results?: CaseStudyMetric[];
  keyTakeaways?: string[];
  testimonial?: CaseStudyTestimonial;
}

/* ─── COMPONENT ─── */

interface Props {
  item: CaseStudyItem;
  relatedItems?: CaseStudyItem[];
  backTo?: string;
}

export default function CaseStudyDetailPage({
  item,
  relatedItems = [],
  backTo = "/resources/case-studies",
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
            Back to Case Studies
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: text */}
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  Case Study
                </span>
                {item.industryTag && (
                  <span className="inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {item.industryTag}
                  </span>
                )}
              </div>
              <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {item.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>

              {/* Metrics strip */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-6">
                  {item.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-heading text-2xl font-extrabold text-primary">{m.value}</span>
                      <span className="text-xs text-muted-foreground">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="hero-outline" size="lg" onClick={() => navigate(backTo)}>
                  View More Case Studies
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: visual card */}
            <ScrollReveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-card p-8">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Project Overview</p>

                {item.snapshot ? (
                  <div className="space-y-4">
                    {[
                      { label: "Client Type", value: item.snapshot.clientType },
                      { label: "Service Scope", value: item.snapshot.serviceScope },
                      { label: "Timeline", value: item.snapshot.timeline },
                      { label: "Primary Goal", value: item.snapshot.primaryGoal },
                      ...(item.snapshot.platform ? [{ label: "Platform", value: item.snapshot.platform }] : []),
                    ].map((row) => (
                      <div key={row.label} className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                        <span className="text-xs font-semibold text-muted-foreground">{row.label}</span>
                        <span className="text-xs font-medium text-foreground text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-48 items-center justify-center rounded-xl bg-primary/5 border border-primary/20">
                    <TrendingUp className="h-12 w-12 text-primary/40" />
                  </div>
                )}

                {/* Meta */}
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{item.category}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                  {item.readingTime && (
                    <>
                      <span>·</span>
                      <span>{item.readingTime}</span>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. SNAPSHOT / QUICK OVERVIEW
      ══════════════════════════════════════════════ */}
      {item.snapshot && (
        <section className="section-padding !pt-16">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-primary">
                Quick Overview
              </p>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Client Type", value: item.snapshot.clientType },
                { label: "Service Scope", value: item.snapshot.serviceScope },
                { label: "Timeline", value: item.snapshot.timeline },
                { label: "Primary Goal", value: item.snapshot.primaryGoal },
              ].map((card, i) => (
                <ScrollReveal key={card.label} delay={i * 0.06}>
                  <div className="rounded-xl border border-border bg-card p-6 h-full">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">{card.label}</p>
                    <p className="font-heading text-base font-semibold text-foreground">{card.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          3. THE CHALLENGE
      ══════════════════════════════════════════════ */}
      {item.challenge && (
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <ScrollReveal>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">The Challenge</p>
                <h2 className="font-heading text-3xl font-bold md:text-4xl leading-tight">
                  What was holding this brand back
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.challenge.intro}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-3">
                  {item.challenge.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-xs font-bold text-destructive">
                        !
                      </span>
                      <p className="text-sm text-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          4. STRATEGIC APPROACH
      ══════════════════════════════════════════════ */}
      {item.approachSteps && item.approachSteps.length > 0 && (
        <ApproachSection steps={item.approachSteps} />
      )}

      {/* ══════════════════════════════════════════════
          5. DELIVERABLES
      ══════════════════════════════════════════════ */}
      {item.deliverables && item.deliverables.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">What We Delivered</p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Service Scope & Deliverables</h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.deliverables.map((d, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    <span className="text-sm font-medium text-foreground">{d}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          6. BEFORE / AFTER TRANSFORMATION
      ══════════════════════════════════════════════ */}
      {item.transformation && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-primary">
                The Transformation
              </p>
              <h2 className="text-center font-heading text-3xl font-bold md:text-4xl mb-12">
                Before &amp; After
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 lg:grid-cols-2">
              <ScrollReveal delay={0.05}>
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 h-full">
                  <p className="mb-5 text-sm font-bold uppercase tracking-widest text-destructive">Before</p>
                  <div className="space-y-3">
                    {item.transformation.before.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 h-full">
                  <p className="mb-5 text-sm font-bold uppercase tracking-widest text-primary">After</p>
                  <div className="space-y-3">
                    {item.transformation.after.map((a, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          7. RESULTS (high-contrast highlight)
      ══════════════════════════════════════════════ */}
      {item.results && item.results.length > 0 && (
      <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-primary">
                The Results
              </p>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl mb-12">
                Measurable Impact
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.results.map((r, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center h-full">
                    <p className="font-heading text-4xl font-extrabold text-primary">{r.value}</p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{r.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          9. KEY TAKEAWAYS
      ══════════════════════════════════════════════ */}
      {item.keyTakeaways && item.keyTakeaways.length > 0 && (
        <section className="section-padding">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Key Takeaways
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl mb-8">
                What This Project Proved
              </h2>
            </ScrollReveal>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <div className="space-y-4">
                {item.keyTakeaways.map((point, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-foreground leading-relaxed">{point}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          10. TESTIMONIAL / PROJECT OUTCOME SUMMARY
      ══════════════════════════════════════════════ */}
      {item.testimonial ? (
        <section className="section-padding !pt-0">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <div className="relative rounded-2xl border border-border bg-card p-8 md:p-12">
                <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/20" />
                <p className="font-heading text-xl font-semibold leading-relaxed text-foreground italic">
                  "{item.testimonial.quote}"
                </p>
                {(item.testimonial.name || item.testimonial.role) && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <div className="text-right">
                      {item.testimonial.name && (
                        <p className="text-sm font-semibold text-foreground">{item.testimonial.name}</p>
                      )}
                      {item.testimonial.role && (
                        <p className="text-xs text-muted-foreground">{item.testimonial.role}{item.testimonial.brand ? `, ${item.testimonial.brand}` : ""}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ) : (
        <section className="section-padding !pt-0">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Project Outcome Summary</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This engagement delivered a measurable improvement across positioning clarity, conversion performance, and digital credibility — giving the brand a stronger foundation for sustainable growth. The strategic approach ensured every change was grounded in audience insight, not just aesthetic preference.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          11. RELATED CASE STUDIES
      ══════════════════════════════════════════════ */}
      {relatedItems.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Related Work</p>
              <h2 className="font-heading text-2xl font-bold mb-8">More Case Studies</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.06}>
                  <Link
                    to={r.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{r.category}</span>
                    <h3 className="mt-2 font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2 flex-1">{r.excerpt}</p>
                    <span className="mt-4 text-sm font-semibold text-primary">View Case Study →</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          12. FINAL CTA
      ══════════════════════════════════════════════ */}
      <CTABand
        headline="Want similar results for your travel brand?"
        subtext="We design strategy-led systems that help travel businesses grow with more clarity, stronger positioning, and better conversion."
        cta="Book a Strategy Call"
      />
    </Layout>
  );
}

/* ─── APPROACH / PROCESS SECTION ─── */

function ApproachSection({ steps }: { steps: { number: string; title: string; desc: string }[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const getStepDelay = (i: number) => i * 1.5;

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-primary">
            Our Strategic Approach
          </p>
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            How We Solved It
          </h2>
        </ScrollReveal>

        {/* Desktop horizontal timeline */}
        <div
          className="mt-16 hidden lg:grid lg:gap-0"
          style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
        >
          {steps.map((step, i) => {
            const base = getStepDelay(i);
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center px-4">
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: base - 0.5, ease: "easeInOut" }}
                    className="absolute top-5 right-1/2 h-[2px] w-full origin-left bg-primary/30"
                    style={{ zIndex: 0 }}
                  />
                )}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: base, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg"
                >
                  {step.number}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: base + 0.4 }}
                  className="mt-4 font-heading text-base font-bold text-foreground"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: base + 0.7 }}
                  className="mt-2 text-xs text-muted-foreground"
                >
                  {step.desc}
                </motion.p>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative ml-5 pl-8">
            {steps.map((step, i) => {
              const base = getStepDelay(i);
              const isLast = i === steps.length - 1;
              return (
                <div key={step.number} className="relative pb-10 last:pb-0">
                  {/* Animated line segment — draws downward from THIS badge to the next */}
                  {!isLast && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: base + 1.0, ease: "easeInOut" }}
                      className="absolute -left-8 top-10 w-[2px] origin-top bg-primary/40"
                      style={{ height: "calc(100% - 2.5rem)" }}
                    />
                  )}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: base, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -left-[2.55rem] top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg"
                  >
                    {step.number}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.4 }}
                    className="font-heading text-base font-bold text-foreground pl-3"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.7 }}
                    className="mt-2 text-sm text-muted-foreground pl-3"
                  >
                    {step.desc}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
