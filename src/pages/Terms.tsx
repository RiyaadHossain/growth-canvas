import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="container-wide px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="mt-12 space-y-10 text-foreground/80">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm leading-relaxed">
                By accessing or using TripUp Studio's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">2. Services</h2>
              <p className="mt-3 text-sm leading-relaxed">
                TripUp Studio provides growth, marketing, design, and technology services to travel businesses, destinations, and operators. The specific scope of work, deliverables, timelines, and fees for any engagement will be defined in a separate Statement of Work or service agreement signed by both parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">3. Intellectual Property</h2>
              <p className="mt-3 text-sm leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of TripUp Studio and is protected by applicable intellectual property laws. Upon full payment for services, deliverables produced specifically for a client will be transferred to the client as agreed in the relevant service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">4. Client Responsibilities</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Clients are responsible for providing accurate and timely information, approvals, and materials required for the delivery of services. Delays caused by the client may affect project timelines and TripUp Studio will not be held responsible for such delays.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">5. Payment Terms</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Payment terms will be specified in the relevant service agreement. TripUp Studio reserves the right to suspend or terminate services in the event of non-payment. All fees are exclusive of applicable taxes unless stated otherwise.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
              <p className="mt-3 text-sm leading-relaxed">
                To the fullest extent permitted by law, TripUp Studio shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability shall not exceed the total fees paid by the client in the three months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">7. Confidentiality</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of an engagement. This obligation will survive the termination of any service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">8. Termination</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Either party may terminate a service agreement with written notice as specified in the relevant contract. Upon termination, any outstanding fees for work completed will remain due and payable.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">9. Governing Law</h2>
              <p className="mt-3 text-sm leading-relaxed">
                These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the relevant courts.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">10. Contact Us</h2>
              <p className="mt-3 text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at: <a href="mailto:hello@tripupstudio.com" className="text-primary hover:underline">hello@tripupstudio.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
