import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const milestones = [
  {
    label: "Today",
    title: "Kickoff & Discovery",
    points: [
      "Intro call & onboarding",
      "Understand your travel business model",
      "Audit brand, website, and digital presence",
      "Identify quick wins and growth opportunities",
    ],
  },
  {
    label: "Day 7",
    title: "Strategy & Direction",
    points: [
      "Market and traveler insights review",
      "Competitive and destination analysis",
      "Clear positioning and differentiation",
      "Growth roadmap defined",
    ],
  },
  {
    label: "Day 15",
    title: "Design & Build",
    points: [
      "Brand and messaging framework",
      "Website / funnel architecture planned",
      "Content and storytelling direction",
      "Systems and automation planning",
    ],
  },
  {
    label: "Day 30",
    title: "Launch Momentum",
    points: [
      "Initial marketing campaigns live",
      "SEO and discovery optimization started",
      "Analytics and performance tracking active",
      "Clear plan for the next growth phase",
    ],
  },
];

function MilestoneCard({
  milestone,
  index,
  totalCount,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  totalCount: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col"
    >
      {/* Timeline connector row — desktop only */}
      <div className="hidden lg:flex items-center mb-4">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary tracking-wide shrink-0">
          {milestone.label}
        </span>
        {/* Connector line to next (hidden for last) */}
        {index < totalCount - 1 && (
          <div className="ml-3 flex-1 h-px bg-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary/40"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
            />
          </div>
        )}
      </div>

      {/* Mobile badge */}
      <div className="lg:hidden mb-3">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary tracking-wide">
          {milestone.label}
        </span>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 12px 32px -8px hsl(72 79% 52% / 0.12)" }}
        transition={{ duration: 0.25 }}
        className="flex-1 rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
      >
        <h3 className="font-heading text-base font-bold text-foreground leading-snug">
          {milestone.title}
        </h3>
        <ul className="space-y-2.5">
          {milestone.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <Check className="h-2.5 w-2.5 text-primary" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{pt}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function FirstThirtyDays() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            A clear roadmap from insight to momentum.
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            What the first 30 days with TripUp Studio{" "}
            <br className="hidden md:block" />
            could look like
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <MilestoneCard
              key={m.label}
              milestone={m}
              index={i}
              totalCount={milestones.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
