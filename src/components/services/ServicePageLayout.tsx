import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";

/* ─── TYPES ─── */

export interface ServicePageData {
  hero: {
    eyebrow: string;
    headline: string;
    highlightedText: string;
    description: string;
    trustLine?: string;
  };
  problem: {
    headline: string;
    highlightedText: string;
    paragraph: string;
    painPoints: { icon: LucideIcon; text: string }[];
  };
  capabilities: {
    heading: string;
    intro: string;
    items: { title: string; desc: string; icon: LucideIcon }[];
  };
  process: {
    eyebrow?: string;
    heading: string;
    steps: { number: string; title: string; desc: string }[];
  };
  deliverables: {
    heading: string;
    paragraph: string;
    groups: { label: string; items: string[] }[];
  };
  outcomes: {
    heading: string;
    items: { title: string; desc: string; icon: LucideIcon }[];
  };
  audience: {
    heading: string;
    tags: string[];
    supportingLine?: string;
  };
  whyUs: {
    heading: string;
    paragraph: string;
    points: { title: string; desc: string }[];
  };
  faq: {
    items: { q: string; a: string }[];
  };
  cta: {
    headline: string;
    subtext: string;
    ctaLabel: string;
  };
}

/* ─── LAYOUT ─── */

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <Layout>
      {/* 1 — Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {data.hero.eyebrow}
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {data.hero.headline}{" "}
              <span className="text-primary">{data.hero.highlightedText}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {data.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Book a Free Discovery Call
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/why-us">See How We Work</Link>
              </Button>
            </div>
            {data.hero.trustLine && (
              <p className="mt-6 text-xs text-muted-foreground">
                {data.hero.trustLine}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* 2 — Problem / Opportunity */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                {data.problem.headline}{" "}
                <span className="text-primary">{data.problem.highlightedText}</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                {data.problem.paragraph}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {data.problem.painPoints.map((p, i) => (
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
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{data.capabilities.heading}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {data.capabilities.intro}
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.capabilities.items.map((cap, i) => (
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

      {/* 4 — Process */}
      <ProcessSection
        eyebrow={data.process.eyebrow}
        heading={data.process.heading}
        steps={data.process.steps}
      />

      {/* 5 — Deliverables */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">{data.deliverables.heading}</h2>
              <p className="mt-4 text-muted-foreground">
                {data.deliverables.paragraph}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                {data.deliverables.groups.map((group) => (
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
              {data.outcomes.heading}
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.outcomes.items.map((o, i) => (
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
              {data.audience.heading}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {data.audience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {data.audience.supportingLine && (
              <p className="mt-6 text-sm text-muted-foreground">
                {data.audience.supportingLine}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* 8 — Why TripUp Studio */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">{data.whyUs.heading}</h2>
              <p className="mt-4 text-muted-foreground">
                {data.whyUs.paragraph}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {data.whyUs.points.map((pt, i) => (
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
              {data.faq.items.map((item, i) => (
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
        headline={data.cta.headline}
        subtext={data.cta.subtext}
        cta={data.cta.ctaLabel}
      />
    </Layout>
  );
}

/* ─── PROCESS SECTION ─── */

function ProcessSection({
  eyebrow = "Our Process",
  heading,
  steps,
}: {
  eyebrow?: string;
  heading: string;
  steps: { number: string; title: string; desc: string }[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Each step has 3 elements (number, title, desc) + 1 connecting line after it (except last)
  // Timing: per step = badge(0.4s) + title(0.3s) + desc(0.3s) + line(0.5s) = 1.5s
  // We stagger so each element waits for the previous one
  const getStepDelay = (stepIndex: number) => stepIndex * 1.5;

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => {
            const base = getStepDelay(i);
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center px-4">
                {/* Connecting line drawn from previous step */}
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: base - 0.5, ease: "easeInOut" }}
                    className="absolute top-5 right-1/2 h-[2px] w-full origin-left bg-primary/30"
                    style={{ zIndex: 0 }}
                  />
                )}

                {/* Step number badge */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: base, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg"
                >
                  {step.number}
                </motion.span>

                {/* Step title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: base + 0.4 }}
                  className="mt-4 font-heading text-lg font-bold text-foreground"
                >
                  {step.title}
                </motion.h3>

                {/* Step description */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: base + 0.7 }}
                  className="mt-2 text-sm text-muted-foreground"
                >
                  {step.desc}
                </motion.p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative ml-5 border-l-2 border-primary/20 pl-8">
            {steps.map((step, i) => {
              const base = getStepDelay(i);
              return (
                <div key={step.number} className="relative pb-10 last:pb-0">
                  {/* Animated line segment */}
                  {i > 0 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: base - 0.5, ease: "easeInOut" }}
                      className="absolute -left-8 bottom-full h-full w-[2px] origin-top bg-primary/40"
                      style={{ top: 0 }}
                    />
                  )}

                  {/* Badge */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: base, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -left-[2.55rem] top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg"
                  >
                    {step.number}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.4 }}
                    className="font-heading text-lg font-bold text-foreground"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.7 }}
                    className="mt-2 text-sm text-muted-foreground"
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
