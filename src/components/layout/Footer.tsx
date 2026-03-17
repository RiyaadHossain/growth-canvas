import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.256 5.626 5.908-5.626Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const footerNav = [
  { label: "Our Work", to: "/our-work" },
  { label: "Why Us", to: "/why-us" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/tripupstudios/", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tripupstudio/", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/tripupstudio", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/tripupstudio", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-wide px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logoMark} alt="TripUp Studio logo" className="h-7 w-7 object-contain" />
              <p className="font-heading text-xl font-bold text-foreground">TripUp Studio</p>
            </div>
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
              {services.map((s) => (
                <li key={s.title}>
                  <Link to={s.slug} className="text-sm text-foreground/70 transition-colors hover:text-foreground">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Resources */}
           <div>
             <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">Resources</p>
             <ul className="space-y-2">
              {resources.map((r) => (
                  <li key={r.title}>
                    <Link to={r.slug} className="text-sm text-foreground/70 transition-colors hover:text-foreground">{r.title}</Link>
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
