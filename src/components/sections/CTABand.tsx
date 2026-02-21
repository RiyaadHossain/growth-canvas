import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CTABand({
  headline = "Let's Get to Work",
  subtext = "Book a free strategy call and see how we can accelerate your growth.",
  cta = "Book an intro call",
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
          <Button variant="hero" size="lg" className="mt-8">
            {cta}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
