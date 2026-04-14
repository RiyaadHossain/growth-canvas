import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import TeamSection from "@/components/sections/TeamSection";
import StatsStrip from "@/components/sections/StatsStrip";
import CTABand from "@/components/sections/CTABand";
import { CALENDLY_URL } from "@/data/constants";

const milestones = [
  { year: "2016", label: "Founded", detail: "Started as a two-person travel strategy consultancy with a bold vision for the industry." },
  { year: "2018", label: "100 Travel Brands", detail: "Crossed 100 active travel clients spanning destinations, operators, and hospitality groups." },
  { year: "2020", label: "Remote-First", detail: "Went fully distributed, unlocking deep travel expertise across 5 time zones globally." },
  { year: "2022", label: "Digital Products", detail: "Launched our dedicated digital product and AI-enabled travel technology practice." },
  { year: "2024", label: "500+ Travel Brands", detail: "Serving over 500 travel businesses globally with a team of 40+ travel specialists." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">About TripUp Studio</p>
            <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
              Built by Travel Industry Specialists Who Actually Care
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              TripUp Studio is a full-stack consultancy and growth partner exclusively for travel businesses. We embed into your team, challenge assumptions, and build the systems that take you from insight to scalable growth.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="font-heading text-center text-3xl font-extrabold md:text-4xl mb-12">Our Journey</h2>
          </ScrollReveal>
          <div className="relative mx-auto max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.1}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"} pl-16 md:pl-0`}>
                      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{m.year}</span>
                        <h3 className="mt-1 font-heading text-lg font-bold">{m.label}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-6 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide grid gap-12 md:grid-cols-2 items-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold md:text-4xl">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              We believe every ambitious travel brand deserves the same calibre of research, strategy, and execution that the world's biggest tourism organisations rely on — without the bloated retainers or the guesswork. Our mission is to give growing travel businesses the tools, expertise, and systems to compete and win in a rapidly evolving industry.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Transparency", desc: "No black-box retainers. You always know what we're doing, why, and what it's delivering." },
                { label: "Travel-First", desc: "Everything we do is built around the nuances of the travel industry — not repurposed from another sector." },
                { label: "Ownership", desc: "We treat your brand like our own — with real accountability at every stage." },
                { label: "Results", desc: "Every decision is tied back to the metrics that matter: bookings, revenue, and long-term growth." },
              ].map((v) => (
                <div key={v.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="font-heading font-bold text-foreground">{v.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StatsStrip />
      <TeamSection />
      <CTABand headline="Let's Build Something Great" subtext="Join 500+ travel brands that trust TripUp Studio to drive their growth." />
    </Layout>
  );
}
