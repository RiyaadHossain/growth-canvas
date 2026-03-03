import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import TeamSection from "@/components/sections/TeamSection";
import StatsStrip from "@/components/sections/StatsStrip";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTABand from "@/components/sections/CTABand";
import HowWeWork from "@/components/sections/HowWeWork";

export default function WhyUs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Why Studioflow</p>
            <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
              Your Marketing Team, Without the Overhead
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop juggling vendors and waiting weeks for deliverables. Get a dedicated team of senior specialists that moves as fast as you do.
            </p>
            <Button variant="hero" size="lg" className="mt-8">
              Book a call
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <StatsStrip />
      <TeamSection />
      <TestimonialCarousel />
      <HowWeWork />
      <CTABand headline="Work With Us" subtext="Join 500+ brands that trust Studioflow to drive their growth." />
    </Layout>
  );
}
