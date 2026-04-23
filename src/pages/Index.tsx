import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/data/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import LogoStrip from "@/components/sections/LogoStrip";
import ServiceGrid from "@/components/sections/ServiceGrid";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ValueProps from "@/components/sections/ValueProps";
import CTABand from "@/components/sections/CTABand";
import HowWeWork from "@/components/sections/HowWeWork";
import FirstThirtyDays from "@/components/sections/FirstThirtyDays";
import ComparisonTable from "@/components/sections/ComparisonTable";
import { Link } from "react-router-dom";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden px-6 md:px-12 lg:px-20">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute left-1/4 bottom-1/4 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[120px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>

        <div className="relative z-10 container-wide w-full text-center">
          {/* Headline */}
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
              Get <span className="text-primary">Predictable Bookings</span>
              <br />
              <span className="text-foreground">Using Structured Growth Systems.</span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.1}>
            <p className="mt-5 md:mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              We help travel businesses grow sustainably with AI and expert-managed growth systems.
            </p>
          </ScrollReveal>

          {/* Social Proof */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center">
                {/* Overlapping avatars */}
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Client"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                {/* Rating + text */}
                <div className="ml-4 text-left">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                    <span className="ml-1.5 text-sm font-semibold text-foreground">5.0</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Trusted by <span className="text-foreground font-medium">50+</span> travel brands
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 md:mt-10">
              <Button variant="hero" size="lg" className="group text-base px-8 py-6 h-auto" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                Free 30-minute consultation · No commitment
              </p>
            </div>
          </ScrollReveal>
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