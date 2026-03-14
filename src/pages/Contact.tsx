import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Call us",
    lines: [
      { value: "+44 20 1234 5678", href: "tel:+442012345678" },
      { value: "+1 212 555 0199", href: "tel:+12125550199" },
    ],
  },
  {
    icon: Mail,
    label: "Email us",
    lines: [
      { value: "hello@tripupstudio.com", href: "mailto:hello@tripupstudio.com" },
    ],
  },
  {
    icon: MapPin,
    label: "Based in",
    lines: [
      { value: "London, UK — working globally" },
    ],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1200);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Let's talk about{" "}
              <span className="text-primary">your growth.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you have a project in mind or just want to explore how we
              can help — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold md:text-3xl">
                  Reach out directly
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Prefer a conversation? Book a free discovery call and we'll
                  walk through your goals together.
                </p>
                <Button variant="hero" size="lg" className="mt-6">
                  Book a Free Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-10 space-y-5">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                  <h3 className="font-heading text-xl font-bold">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill in the form below and we'll get back to you within 24 hours.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="border-border bg-secondary/50 placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-border bg-secondary/50 placeholder:text-muted-foreground/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Company{" "}
                        <span className="normal-case tracking-normal text-muted-foreground/50">
                          (optional)
                        </span>
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company or brand"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="border-border bg-secondary/50 placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, or questions..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="border-border bg-secondary/50 placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={sending}
                    >
                      {sending ? (
                        "Sending…"
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Ready to grow your travel business?
            </h2>
            <p className="mt-4 text-background/60">
              Book a free strategy call and see how TripUp Studio can take you
              from insight to scalable growth.
            </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Book a Strategy Call
            </button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
