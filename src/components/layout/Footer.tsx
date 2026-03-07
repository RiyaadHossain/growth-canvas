import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const footerNav = [
  { label: "Our Work", to: "/our-work" },
  { label: "Why Us", to: "/why-us" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "X (Twitter)", href: "https://x.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-wide px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold text-foreground">TripUp Studio</p>
            <p className="mt-3 text-sm text-foreground/60">
              The full-stack growth partner for travel businesses — from research and strategy to products and marketing.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/50 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">Company</p>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">Services</p>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <span className="text-sm text-foreground/70">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">Industries</p>
            <ul className="space-y-2">
              {industries.slice(0, 6).map((i) => (
                <li key={i.title}>
                  <span className="text-sm text-foreground/70">{i.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-foreground/40">© {new Date().getFullYear()} TripUp Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
