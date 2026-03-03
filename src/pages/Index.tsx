import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import LogoStrip from "@/components/sections/LogoStrip";
import ServiceGrid from "@/components/sections/ServiceGrid";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ValueProps from "@/components/sections/ValueProps";
import CTABand from "@/components/sections/CTABand";
import HowWeWork from "@/components/sections/HowWeWork";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                  Your Growth Partner
                </p>
                <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  A marketing & design partner that{" "}
                  <span className="text-primary">grows with your company</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                  Proactive team. World-class design. Proven systems. One subscription for every channel you need.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg">
                    Book an intro call
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/our-work">Our work</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10" />
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10" />
                </div>
                <div className="mt-8 space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-primary/15" />
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LogoStrip />
      <ServiceGrid />
      <TestimonialCarousel />
      <HowWeWork />
      <ValueProps />
      <CTABand />
    </Layout>
  );
}
