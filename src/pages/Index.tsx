import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroTravel1 from "@/assets/hero-travel-1.jpg";
import heroTravel2 from "@/assets/hero-travel-2.jpg";
import heroTravel3 from "@/assets/hero-travel-3.jpg";
import heroTravel4 from "@/assets/hero-travel-4.jpg";
import LogoStrip from "@/components/sections/LogoStrip";
import ServiceGrid from "@/components/sections/ServiceGrid";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ValueProps from "@/components/sections/ValueProps";
import CTABand from "@/components/sections/CTABand";
import HowWeWork from "@/components/sections/HowWeWork";
import FirstThirtyDays from "@/components/sections/FirstThirtyDays";
import ComparisonTable from "@/components/sections/ComparisonTable";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                  Travel Business Growth Partner
                </p>
                <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  The full-stack growth partner for{" "}
                  <span className="text-primary">travel businesses</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                  From market research and strategy to branding, digital products, and marketing execution — one team to take your travel brand from insight to scalable growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg">
                    Book a strategy call
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/our-work">See our work</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel1} alt="Luxury travel destination" className="h-full w-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel2} alt="Travel brand strategy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel3} alt="Adventure travel" className="h-full w-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel4} alt="Luxury hotel" className="h-full w-full object-cover" />
                  </div>
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
      <FirstThirtyDays />
      <ComparisonTable />
      <ValueProps />
      <CTABand />
    </Layout>
  );
}
