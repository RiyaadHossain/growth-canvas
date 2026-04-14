import { ScrollReveal } from "@/components/ScrollReveal";
import { CALENDLY_URL } from "@/data/constants";

export default function CTABand({
  headline = "Ready to Grow Your Travel Business?",
  subtext = "Book a free strategy call and see how TripUp Studio can take you from insight to scalable growth.",
  cta = "Book a Strategy Call",
}: {
  headline?: string;
  subtext?: string;
  cta?: string;
}) {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">{headline}</h2>
          <p className="mt-4 text-background/60">{subtext}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {cta}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
