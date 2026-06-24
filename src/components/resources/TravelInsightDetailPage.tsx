import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  CalendarDays,
  Tag,
  User,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Zap,
} from "lucide-react";
import { CALENDLY_URL } from "@/data/constants";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* ─── TYPES ─── */

export interface TravelInsightCallout {
  type: "Key Insight" | "What Most Brands Miss" | "Common Mistake" | "Strategic Takeaway" | "Quick Win" | "TripUp Perspective";
  text: string;
}

export interface TravelInsightBodySection {
  heading?: string;
  paragraphs: string[];
  callout?: TravelInsightCallout;
  pullQuote?: string;
}

export interface TravelInsightRelatedService {
  title: string;
  description: string;
  to: string;
}

export interface TravelInsightItem {
  type: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime?: string;
  author?: string;
  ctaLabel?: string;
  featured?: boolean;
  slug: string;
  coverImage?: string;

  // Rich detail fields
  keyTakeaways?: string[];           // "In This Insight" bullets
  bodySections?: TravelInsightBodySection[];  // structured article body
  contentHtml?: string;              // WYSIWYG HTML content
  actionableTakeaways?: string[];    // "What This Means for Your Travel Brand"
  relatedServices?: TravelInsightRelatedService[];
}

/* ─── CALLOUT ICON MAP ─── */

const calloutConfig: Record<
  TravelInsightCallout["type"],
  { icon: React.ElementType; label: string; colorClass: string; bgClass: string }
> = {
  "Key Insight": {
    icon: Lightbulb,
    label: "Key Insight",
    colorClass: "text-primary",
    bgClass: "border-primary/30 bg-primary/8",
  },
  "What Most Brands Miss": {
    icon: AlertTriangle,
    label: "What Most Brands Miss",
    colorClass: "text-amber-400",
    bgClass: "border-amber-400/30 bg-amber-400/8",
  },
  "Common Mistake": {
    icon: AlertTriangle,
    label: "Common Mistake",
    colorClass: "text-red-400",
    bgClass: "border-red-400/30 bg-red-400/8",
  },
  "Strategic Takeaway": {
    icon: TrendingUp,
    label: "Strategic Takeaway",
    colorClass: "text-primary",
    bgClass: "border-primary/30 bg-primary/8",
  },
  "Quick Win": {
    icon: Zap,
    label: "Quick Win",
    colorClass: "text-green-400",
    bgClass: "border-green-400/30 bg-green-400/8",
  },
  "TripUp Perspective": {
    icon: User,
    label: "TripUp Perspective",
    colorClass: "text-primary",
    bgClass: "border-primary/40 bg-primary/10",
  },
};

/* ─── MAIN COMPONENT ─── */

interface Props {
  item: TravelInsightItem;
  relatedItems?: TravelInsightItem[];
  backTo?: string;
}

export default function TravelInsightDetailPage({
  item,
  relatedItems = [],
  backTo = "/resources/travel-insights",
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
            Back to Travel Insights
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          1. HERO — Editorial, left-aligned
      ══════════════════════════════════════════ */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-4xl">
          <ScrollReveal>
            {/* Label + category pill row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                Travel Insight
              </span>
              {item.category && (
                <span className="inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  {item.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
              {item.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" />
                {item.author ?? "TripUp Studio"}
              </span>
            </div>

            {/* Subtle CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services/market-research">Explore Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. COVER IMAGE
      ══════════════════════════════════════════ */}
      {item.coverImage && (
        <section className="section-padding !pb-0">
          <div className="container-wide">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-border aspect-[21/9]">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          3. "IN THIS INSIGHT" QUICK SUMMARY
      ══════════════════════════════════════════ */}
      {item.keyTakeaways && item.keyTakeaways.length > 0 && (
        <section className="section-padding !pb-0">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-primary/25 bg-primary/6 p-8 md:p-10">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">In This Insight</p>
                <ul className="space-y-4">
                  {item.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          4 + 5. ARTICLE BODY — structured editorial sections
          (includes inline callout blocks & pull quotes)
      ══════════════════════════════════════════ */}
      {item.contentHtml ? (
        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <article
              className="insight-content prose prose-invert max-w-none text-muted-foreground leading-relaxed
                         prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                         prose-h1:text-3xl md:prose-h1:text-4xl
                         prose-h2:text-2xl md:prose-h2:text-3xl
                         prose-h3:text-xl md:prose-h3:text-2xl
                         prose-p:text-muted-foreground prose-p:leading-relaxed
                         prose-strong:text-foreground prose-strong:font-semibold
                         prose-em:text-foreground
                         prose-a:text-primary hover:prose-a:underline
                         prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:text-foreground
                         prose-ul:list-disc prose-ol:list-decimal prose-li:text-muted-foreground
                         prose-img:rounded-xl
                         prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          </div>
        </section>
      ) : item.bodySections && item.bodySections.length > 0 ? (
        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <div className="space-y-14">
              {item.bodySections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="space-y-5">
                    {section.heading && (
                      <h2 className="font-heading text-2xl font-bold md:text-3xl text-foreground">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed text-base">
                        {para}
                      </p>
                    ))}

                    {/* Callout block */}
                    {section.callout && (() => {
                      const cfg = calloutConfig[section.callout.type];
                      const Icon = cfg.icon;
                      return (
                        <div className={`rounded-xl border p-6 ${cfg.bgClass}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className={`h-4 w-4 ${cfg.colorClass}`} />
                            <p className={`text-xs font-bold uppercase tracking-widest ${cfg.colorClass}`}>
                              {cfg.label}
                            </p>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">{section.callout.text}</p>
                        </div>
                      );
                    })()}

                    {/* Pull quote */}
                    {section.pullQuote && (
                      <blockquote className="my-8 border-l-4 border-primary pl-6">
                        <p className="font-heading text-xl font-semibold text-foreground leading-snug md:text-2xl">
                          "{section.pullQuote}"
                        </p>
                      </blockquote>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Fallback placeholder body when no bodySections are set */
        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  This insight covers the strategic principles and practical frameworks that help travel brands navigate the challenge described above. The full content explores actionable approaches, real-world context, and specific recommendations tailored to travel operators, agencies, and destination brands.
                </p>
                <p>
                  Whether you're in the early stages of building your brand, refining your digital experience, or looking to optimise an existing growth system, the ideas here are designed to give you a clearer starting point — and a more structured way to think about what needs to change.
                </p>
                <p>
                  The frameworks shared here are drawn directly from our work with travel businesses across different scales and categories — and reflect what actually moves the needle when it comes to positioning, conversion, and sustainable growth.
                </p>
              </div>
              <div className="mt-10 rounded-xl border border-border bg-secondary p-6 text-center">
                <p className="text-sm font-semibold text-foreground">Full content coming soon</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We're publishing the complete version shortly. In the meantime, book a call to discuss these ideas directly with our team.
                </p>
                <Button variant="hero" size="sm" className="mt-4" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          7. ACTIONABLE TAKEAWAYS
      ══════════════════════════════════════════ */}
      {item.actionableTakeaways && item.actionableTakeaways.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Actionable Takeaways</p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl mb-8">
                What This Means for Your Travel Brand
              </h2>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {item.actionableTakeaways.map((takeaway, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg h-full">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground leading-relaxed">{takeaway}</p>
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
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Need Help Applying This?</p>
              <h2 className="font-heading text-2xl font-bold mb-8">Take this further with our team</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2">
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
          9. RELATED INSIGHTS
      ══════════════════════════════════════════ */}
      {relatedItems.length > 0 && (
        <section className="section-padding !pt-0">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Related Insights</p>
              <h2 className="font-heading text-2xl font-bold mb-8">Continue Reading</h2>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {relatedItems.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.07}>
                  <Link
                    to={r.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">{r.category}</p>
                    <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      {r.readingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {r.readingTime}
                        </span>
                      )}
                      <span className="flex items-center gap-1 font-semibold text-primary">
                        Read Insight <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          10. FINAL CTA (editorial tone)
      ══════════════════════════════════════════ */}
      <CTABand
        headline="Want a clearer growth strategy for your travel brand?"
        subtext="If this insight reflects what's happening in your brand, website, or marketing systems, we can help you turn strategy into execution."
        cta="Book a Strategy Call"
      />
    </Layout>
  );
}
