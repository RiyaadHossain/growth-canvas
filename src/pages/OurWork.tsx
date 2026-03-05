import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import CTABand from "@/components/sections/CTABand";

export default function OurWork() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Case Studies</p>
            <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
              Real Results for Real Travel Businesses
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              From repositioning tour operators to building AI-powered booking products — explore the work we're most proud of.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <CaseStudyGrid />
          </div>
        </div>
      </section>
      <CTABand
        headline="Ready to Be Our Next Case Study?"
        subtext="Let's talk about where your travel business wants to go — and build the systems to get you there."
        cta="Book a strategy call"
      />
    </Layout>
  );
}
