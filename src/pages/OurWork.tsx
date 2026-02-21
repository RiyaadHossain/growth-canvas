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
              See How Studioflow Is Helping Brands Grow
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Real results from real partnerships. Explore the work we're most proud of.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <CaseStudyGrid />
          </div>
        </div>
      </section>
      <CTABand
        headline="Ready for a Fast, Reliable Creative Partner?"
        subtext="Let's talk about how we can help you hit your next growth milestone."
        cta="Book an intro call"
      />
    </Layout>
  );
}
