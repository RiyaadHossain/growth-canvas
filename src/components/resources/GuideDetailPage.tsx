import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  CalendarDays,
  Tag,
  BookOpen,
  Users,
  Target,
  ChevronDown,
  ChevronUp,
  FileText,
  Layers,
  Zap,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";

/* ─── TYPES ─── */

export interface GuideRelatedService {
  title: string;
  description: string;
  to: string;
}

export interface GuideFrameworkStep {
  title: string;
  description: string;
}

export interface GuideSamplePreview {
  title: string;
  items: string[];
}

export interface GuideItem {
  type: string; // "Guide" | "Playbook" | "Framework" | "Checklist"
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime?: string;
  bestFor?: string;
  ctaLabel?: string;
  featured?: boolean;
  slug: string;
  coverImage?: string;

  // Rich detail fields
  keyTakeaways?: string[];         // "What's Inside" modules
  whoIsItFor?: string[];           // "Who This Is For"
  outcomes?: string[];             // "What You'll Walk Away With"
  frameworkSteps?: GuideFrameworkStep[]; // "A Preview of the Framework"
  samplePreviews?: GuideSamplePreview[]; // "Preview the Guide"
  relatedServices?: GuideRelatedService[];
}

/* ─── VISUAL MOCKUP ─── */

function GuideMockup({ type }: { type: string }) {
  const isChecklist = type === "Checklist";
  const isPlaybook = type === "Playbook";
  const isFramework = type === "Framework";

  return (
    <div className="relative h-full min-h-[320px] w-full">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />

      {/* Main card mockup */}
      <div className="relative z-10 mx-auto max-w-[280px]">
        {/* Primary doc */}
        <div className="relative rounded-2xl border border-primary/30 bg-card shadow-2xl overflow-hidden">
          {/* Doc header bar */}
          <div className="h-10 bg-primary/15 flex items-center px-4 gap-2 border-b border-primary/20">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            <div className="h-1.5 w-20 rounded-full bg-primary/30" />
            <div className="ml-auto">
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70">TripUp</span>
            </div>
          </div>

          {/* Doc body */}
          <div className="p-5 space-y-3">
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-foreground/20" />
              <div className="h-1.5 w-4/5 rounded-full bg-foreground/15" />
            </div>

            {isChecklist && (
              <div className="space-y-2 mt-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded border ${i <= 2 ? "bg-primary border-primary" : "border-border"}`} />
                    <div className="h-1.5 flex-1 rounded-full bg-foreground/15" />
                  </div>
                ))}
              </div>
            )}

            {isPlaybook && (
              <div className="space-y-2 mt-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-border/60 p-2.5 space-y-1">
                    <div className="h-1.5 w-2/3 rounded-full bg-primary/40" />
                    <div className="h-1 w-full rounded-full bg-foreground/15" />
                    <div className="h-1 w-4/5 rounded-full bg-foreground/10" />
                  </div>
                ))}
              </div>
            )}

            {isFramework && (
              <div className="flex gap-2 mt-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 rounded-lg border border-border/60 p-2 text-center">
                    <div className="h-4 w-4 rounded-full bg-primary/30 mx-auto mb-1.5 flex items-center justify-center">
                      <span className="text-[7px] font-bold text-primary">{i}</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-foreground/15" />
                    <div className="h-1 w-3/4 mx-auto rounded-full bg-foreground/10 mt-0.5" />
                  </div>
                ))}
              </div>
            )}

            {!isChecklist && !isPlaybook && !isFramework && (
              <div className="space-y-1.5 mt-3">
                {[80, 100, 70, 90, 65].map((w, i) => (
                  <div key={i} className={`h-1.5 rounded-full bg-foreground/15`} style={{ width: `${w}%` }} />
                ))}
              </div>
            )}

            <div className="mt-4 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="h-1.5 w-20 rounded-full bg-primary/50" />
            </div>
          </div>
        </div>

        {/* Shadow doc behind */}
        <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-primary/15 bg-card/60" />
        <div className="absolute -bottom-6 -right-6 -z-20 h-full w-full rounded-2xl border border-primary/10 bg-card/40" />
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-4 left-0 rounded-xl border border-primary/30 bg-card px-4 py-2 shadow-lg">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{type}</p>
        <p className="text-[11px] font-semibold text-foreground/80">TripUp Studio</p>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */

interface Props {
  item: GuideItem;
  relatedItems?: GuideItem[];
  backTo?: string;
}

export default function GuideDetailPage({
  item,
  relatedItems = [],
  backTo = "/resources/guides-playbooks",
}: Props) {
  const navigate = useNavigate();
  const [openPreview, setOpenPreview] = useState<number | null>(null);

  const typeIcon =
    item.type === "Checklist" ? CheckCircle2
    : item.type === "Playbook" ? BookOpen
    : item.type === "Framework" ? Layers
    : FileText;
  const TypeIcon = typeIcon;

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
            Back to Guides &amp; Playbooks
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          1. HERO — Two-column, value-first
      ══════════════════════════════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: content */}
            <ScrollReveal>
              {/* Label + category row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  <TypeIcon className="h-3 w-3" />
                  {item.type}
                </span>
                {item.category && (
                  <span className="inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {item.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>

              {/* Meta row */}
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                {item.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {item.readingTime}
                  </span>
                )}
                {item.date && (
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {item.date}
                  </span>
                )}
                {item.bestFor && (
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-primary" />
                    {item.bestFor}
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    {item.type === "Checklist" ? "Access the Checklist" : item.type === "Playbook" ? "Access the Playbook" : item.type === "Framework" ? "Access the Framework" : "Access the Guide"}
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Book a Strategy Call</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: visual mockup */}
            <ScrollReveal delay={0.15}>
              <div className="flex items-center justify-center py-8 lg:py-0">
                <GuideMockup type={item.type} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. WHAT'S INSIDE (key takeaways as modules)
      ══════════════════════════════════════════ */}
      {item.keyTakeaways && item.keyTakeaways.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Contents</p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl mb-10">
                What's Inside
              </h2>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.keyTakeaways.map((point, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/25 mt-0.5">
                      <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{point}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          4. WHO IT'S FOR
      ══════════════════════════════════════════ */}
      {item.whoIsItFor && item.whoIsItFor.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Audience</p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl mb-10">
                Who This Is For
              </h2>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.whoIsItFor.map((who, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{who}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          5. OUTCOMES — "What You'll Walk Away With"
      ══════════════════════════════════════════ */}
      {item.outcomes && item.outcomes.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <div className="rounded-2xl border border-primary/25 bg-primary/6 p-8 md:p-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Outcomes</p>
                <h2 className="font-heading text-2xl font-bold mb-7">
                  What You'll Walk Away With
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {item.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm text-foreground leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          6. FRAMEWORK PREVIEW
      ══════════════════════════════════════════ */}
      {item.frameworkSteps && item.frameworkSteps.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Methodology</p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl mb-10">
                A Preview of the Framework
              </h2>
            </ScrollReveal>
            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
              <div className="space-y-4">
                {item.frameworkSteps.map((step, i) => (
                  <ScrollReveal key={i} delay={i * 0.07}>
                    <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:pl-8">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          7. SAMPLE PREVIEWS (accordion)
      ══════════════════════════════════════════ */}
      {item.samplePreviews && item.samplePreviews.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Sample</p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl mb-8">
                Preview the {item.type}
              </h2>
            </ScrollReveal>
            <div className="space-y-3 max-w-2xl">
              {item.samplePreviews.map((preview, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenPreview(openPreview === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary/40"
                    >
                      <div className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-heading text-sm font-semibold text-foreground">{preview.title}</span>
                      </div>
                      {openPreview === i ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                    </button>
                    {openPreview === i && (
                      <div className="border-t border-border px-6 pb-5 pt-4">
                        <ul className="space-y-2.5">
                          {preview.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          8. RELATED SERVICE BRIDGE
      ══════════════════════════════════════════ */}
      {item.relatedServices && item.relatedServices.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Need Help Going Beyond the Framework?</p>
              <h2 className="font-heading text-2xl font-bold mb-3">
                Turn this framework into results
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl">
                This {item.type.toLowerCase()} helps you identify what to improve. If you want help implementing the strategy across your brand, website, content, or systems, TripUp Studio can help.
              </p>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 max-w-2xl">
              {item.relatedServices.map((svc, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <Link
                    to={svc.to}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">Service</p>
                      <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {svc.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                    </div>
                    <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary">
                      Explore service <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          9. RELATED RESOURCES
      ══════════════════════════════════════════ */}
      {relatedItems.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Related Resources</p>
              <h2 className="font-heading text-2xl font-bold mb-8">More from the Library</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {relatedItems.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.07}>
                  <Link
                    to={r.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">{r.category}</p>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground mb-3 w-fit">
                      {r.type}
                    </span>
                    <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{r.readingTime}</span>
                      <span className="font-semibold text-primary group-hover:gap-2 transition-all">Read →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════ */}
      <CTABand
        headline="Want help applying this to your travel business?"
        subtext="If this guide highlights gaps in your website, positioning, content, or operational systems, we can help turn those insights into execution."
        cta="Book a Strategy Call"
      />
    </Layout>
  );
}
