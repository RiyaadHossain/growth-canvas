import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import PricingCards from "@/components/sections/PricingCards";
import RoleTabs from "@/components/sections/RoleTabs";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { Check } from "lucide-react";

const included = [
  "Dedicated travel strategist",
  "Weekly strategy calls",
  "Same-day communication",
  "Rush support",
  "Monthly reporting",
  "No long-term contracts",
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
            <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
              Transparent Pricing Across All Our Travel Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engagements start at <span className="font-bold text-foreground">$1,800/month</span>. No hidden fees. No surprise invoices.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 inline-flex flex-wrap justify-center gap-4">
              {included.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding !pt-0">
        <div className="container-wide">
          <PricingCards />
        </div>
      </section>

      <RoleTabs />
      <FAQSection />
      <CTABand headline="Ready to Grow Your Travel Business?" subtext="Book a free strategy call and find out exactly how TripUp Studio can help." cta="Book a strategy call" />
    </Layout>
  );
}
