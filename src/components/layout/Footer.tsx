import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const footerNav = [
  { label: "Our Work", to: "/our-work" },
  { label: "Why Us", to: "/why-us" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-wide px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
          <p className="font-heading text-xl font-bold">TripUp Studio</p>
            <p className="mt-3 text-sm text-background/60">
              The full-stack growth partner for travel businesses — from research and strategy to products and marketing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">Company</p>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-background/70 transition-colors hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">Services</p>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <span className="text-sm text-background/70">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">Industries</p>
            <ul className="space-y-2">
              {industries.slice(0, 6).map((i) => (
                <li key={i.title}>
                  <span className="text-sm text-background/70">{i.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-xs text-background/40">© {new Date().getFullYear()} TripUp Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-background/40 hover:text-background/60 cursor-pointer">Privacy</span>
            <span className="text-xs text-background/40 hover:text-background/60 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
