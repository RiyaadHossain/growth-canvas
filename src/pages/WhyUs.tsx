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
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Why TripUp Studio</p>
            <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
              Your Complete Travel Growth Team, Without the Overhead
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop juggling research firms, brand agencies, developers, and media buyers. Get one specialist team that covers everything — from market insight to scalable growth systems.
            </p>
            <Button variant="hero" size="lg" className="mt-8">
              Book a strategy call
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <StatsStrip />
      <TeamSection />
      <HowWeWork />
      <TestimonialCarousel />
      <CTABand headline="Work With Us" subtext="Join 500+ travel brands that trust TripUp Studio to drive their growth." />
    </Layout>
  );
}
