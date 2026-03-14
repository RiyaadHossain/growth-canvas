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

// Sequential timing: badge(0.4s) + title(0.3s) + checklist(0.3s) + line(0.5s) = 1.5s per step
const getStepDelay = (stepIndex: number) => stepIndex * 1.5;

export default function FirstThirtyDays() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="section-padding" ref={ref}>
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0">
          {milestones.map((milestone, i) => {
            const base = getStepDelay(i);
            return (
              <div key={milestone.label} className="relative flex flex-col items-center px-3">
                {/* Connecting line drawn left-to-right */}
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: base - 0.5, ease: "easeInOut" }}
                    className="absolute top-3.5 right-1/2 h-[2px] w-full origin-left bg-primary/30"
                    style={{ zIndex: 0 }}
                  />
                )}

                {/* Badge */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: base, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-10 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary tracking-wide"
                >
                  {milestone.label}
                </motion.span>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: base + 0.4 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px -8px hsl(72 79% 52% / 0.12)" }}
                  className="mt-4 flex-1 w-full rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
                >
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.5 }}
                    className="font-heading text-base font-bold text-foreground leading-snug"
                  >
                    {milestone.title}
                  </motion.h3>

                  {/* Checklist */}
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.7 }}
                    className="space-y-2.5"
                  >
                    {milestone.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-2.5 w-2.5 text-primary" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">{pt}</span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative ml-5 border-l-2 border-primary/20 pl-8">
            {milestones.map((milestone, i) => {
              const base = getStepDelay(i);
              return (
                <div key={milestone.label} className="relative pb-10 last:pb-0">
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
                    className="absolute -left-[2.55rem] top-0 z-10 inline-flex items-center justify-center rounded-full bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground shadow-lg"
                  >
                    {milestone.label}
                  </motion.span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: base + 0.4 }}
                    className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
                  >
                    <h3 className="font-heading text-base font-bold text-foreground leading-snug">
                      {milestone.title}
                    </h3>
                    <motion.ul
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: base + 0.7 }}
                      className="space-y-2.5"
                    >
                      {milestone.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                            <Check className="h-2.5 w-2.5 text-primary" strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-muted-foreground">{pt}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
