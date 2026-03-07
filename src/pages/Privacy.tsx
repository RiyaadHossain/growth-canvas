import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="container-wide px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="mt-12 space-y-10 text-foreground/80">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-3 text-sm leading-relaxed">
                TripUp Studio ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or request a consultation. This may include your name, email address, company name, and the nature of your inquiry. We also automatically collect certain technical data when you visit our website, including IP address, browser type, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-3 text-sm leading-relaxed">
                We use the information we collect to respond to your inquiries, provide our services, send you marketing communications (where you have consented), improve our website and services, comply with legal obligations, and protect against fraudulent or unlawful activity.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Sharing Your Information</h2>
              <p className="mt-3 text-sm leading-relaxed">
                We do not sell, trade, or rent your personal data to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We may also disclose your information when required by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">5. Cookies</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Our website uses cookies to enhance your browsing experience, analyse site traffic, and personalise content. You can choose to disable cookies through your browser settings, though this may affect the functionality of some parts of our site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">6. Data Retention</h2>
              <p className="mt-3 text-sm leading-relaxed">
                We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable laws and regulations. When data is no longer needed, we securely delete or anonymise it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">7. Your Rights</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. You may also have the right to data portability and to withdraw consent at any time. To exercise any of these rights, please contact us at the details below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">8. Contact Us</h2>
              <p className="mt-3 text-sm leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at: <a href="mailto:hello@tripupstudio.com" className="text-primary hover:underline">hello@tripupstudio.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
