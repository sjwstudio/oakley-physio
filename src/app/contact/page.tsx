import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Oakley Physio at 95 Windsor Road, Prestwich, Manchester, M25 0DB. Call 07806 358 752 — appointments within 24 hours, no GP referral needed.",
};

const mapSrc =
  "https://www.google.com/maps?q=95+Windsor+Road,+Prestwich,+Manchester,+M25+0DB&output=embed";

const details = [
  { label: "Address", value: site.address, href: undefined },
  { label: "Telephone", value: site.phone, href: site.phoneHref },
  { label: "Email", value: site.email, href: site.emailHref },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Get in touch with Oakley Physio"
        subtitle="We aim to provide appointments within 24 hours. There is no need to visit your GP first."
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="heading-lg text-charcoal">Visit or call us</h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-charcoal/10 bg-light-grey p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-lg font-medium text-charcoal transition-colors hover:text-orange"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-charcoal">{d.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden rounded-4xl border border-charcoal/10">
                <iframe
                  title="Oakley Physio location map"
                  src={mapSrc}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-4xl border border-charcoal/10 bg-light-grey p-8 md:p-10">
              <h2 className="font-heading text-2xl font-bold text-charcoal">Send us a message</h2>
              <p className="mt-2 text-sm text-grey">
                Fill in the form below and we will get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
