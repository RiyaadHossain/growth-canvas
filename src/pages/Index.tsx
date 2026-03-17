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
      <section className="flex items-center px-6 md:px-12 lg:px-20 py-10 md:py-12 lg:py-0 min-h-[calc(100vh-4rem)]">
        <div className="container-wide w-full">
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <ScrollReveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Travel Business Growth Partner
                </p>
                <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                  The full-stack growth partner for{" "}
                  <span className="text-primary">travel businesses</span>
                </h1>
                <p className="mt-4 max-w-lg text-base md:text-lg text-muted-foreground mx-auto lg:mx-0">
                  From market research and strategy to branding, digital products, and marketing execution — one team to take your travel brand from insight to scalable growth.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button variant="hero" size="lg">
                    Book a strategy call
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/our-work">See our work</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="hidden lg:block order-1 lg:order-2 h-[calc(100vh-8rem)]">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="flex flex-col gap-3 h-full">
                  <div className="flex-[3] min-h-0 rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel1} alt="Luxury travel destination" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-[2] min-h-0 rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel2} alt="Travel brand strategy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-full pt-8">
                  <div className="flex-[2] min-h-0 rounded-2xl overflow-hidden ring-1 ring-border/30">
                    <img src={heroTravel3} alt="Adventure travel" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-[3] min-h-0 rounded-2xl overflow-hidden ring-1 ring-border/30">
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
