# TripUp Studio

Brand & vibe

Clean, premium, slightly playful “agency” look.

Lots of whitespace, big headings, short punchy subtext.

Rounded cards, soft shadows, high-contrast CTA buttons.

Smooth hover states and micro-animations.

Site map (routes)

/ Home

/our-work Case studies grid

/why-us About/Why-us + team + proof points

/pricing Pricing + role-based sections + FAQ

Optional: /blog, /locations, /contact (can be placeholders)

Header nav should include: Services, Industries, Our Work, Why Us, Pricing, and a primary CTA button like “Talk to a strategist” / “Book a call”.

Global layout requirements

Header

Sticky header with:

Logo left

Nav items center

CTA button right (“Talk to a strategist”)

“Services” and “Industries” open a mega menu (dropdown panel) listing items with short descriptions.

Services examples: Creative Design, Media & Performance, AI-Enabled Marketing (NEW), Lifecycle & Retention (NEW), Strategy & Consulting, Branding, Websites, Conversion Optimization, Ecommerce & Marketplace.

Industries examples: Technology, CPG & Retail, Construction & Real Estate, Education, Professional Services, Financial Services, Hospitality & Tourism, Healthcare & Wellness.

Mobile: hamburger menu with expandable sections.

Footer

Multi-column footer with nav links, services, industries, social links, and legal links.

Page specs

1) Home (/)

Hero section

Big headline: “A marketing and design partner that grows with your company” style.

Subheading: proactive team, world-class design, proven systems.

Primary CTA: “Book an intro call”

Secondary CTA: “Our work”

Right side: image collage / stacked images (placeholders).

Trusted-by logo strip

“Trusted by 500+ brands” and a scrolling/marquee logo row.

Services overview

Section headline like “Full-Stack Marketing Services”

Grid of service cards (same set as mega menu), each with a short one-liner.

Testimonials

Carousel of testimonial cards; optionally show video thumbnail blocks (use placeholders).

Each testimonial has quote + person name + company + “Read customer story” link.

Value props

3-card section like:

One team, every channel

Faster launches, fewer bottlenecks

Scalable support without overhead

Final CTA band

“Let’s Get to Work” headline + CTA button.

2) Our Work (/our-work)

Headline: “See how [Studio] is helping with growth”

Grid of case-study tiles (image + client name + short tags).

End CTA: “Ready for a fast, reliable creative partner?” + button.

3) Why Us (/why-us)

Hero

Headline: “Your Marketing Team, Without the Overhead”

Subtext about not juggling vendors / waiting weeks

CTA to book a call.

Team section

“Meet a few of the specialists…” with team cards:

photo, name, role, 1-sentence personality line.

Stats strip

3–6 stats like:

“5 time zones coverage”

“8 years average experience”

“500+ brands”

“98% NPS”

“100% remote”

“22 hrs avg turnaround”

Customer testimonials

Similar to home testimonials.

4) Pricing (/pricing)

Hero

Headline: “Transparent pricing across all of our services”

“Engagements start at $1,500/month”

“Included in every engagement” bullet list (strategy calls, rush support, same-day communication, etc.)

Service pricing cards

Card grid for major categories (Performance Creative, Media Buying, Lifecycle & Retention, Strategy & Consulting, Branding, Websites, Conversion Optimization, Ecommerce & Marketplace).

Role-based content

A section titled like “See how [Studio] works in your role”

Use Tabs for roles:

Marketing Leader, Head of Growth, Founder/CEO, Media Buyer, Brand Manager, Ecommerce Manager

Each tab shows 4 bullet benefits + a case study link.

FAQ

Accordion titled “Frequently asked questions” with 6–8 Q/As (use the ones visible on the pricing page as starter content).

Final CTA

“Welcome to your new marketing team” + CTA.

Interaction + animation requirements

Mega menu: fade/slide down, closes on outside click + Esc.

Cards: slight lift on hover.

Sections: subtle scroll reveal.

Testimonials: swipe on mobile.

Content model (mock data)

Create a /data folder with JSON/TS objects for:

services[]

industries[]

testimonials[]

caseStudies[]

faq[]

roleTabs[]

Acceptance criteria

Fully responsive (mobile-first).

Lighthouse-friendly basics (semantic headings, alt text, accessible nav).

All pages have consistent header/footer.

Uses placeholders for all images/logos; no copyrighted assets copied.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tripup-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/31b2f572-deb8-434e-a5a3-b54fd7814446).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
