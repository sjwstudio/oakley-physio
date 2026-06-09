import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { img, pricing, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Appointments",
  description:
    "Appointments and pricing at Oakley Physio, Prestwich, Manchester. No GP referral needed — appointments within 24 hours.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        badge="Appointments & Pricing"
        title="Quick, easy access to expert care"
        subtitle="No GP referral needed — we aim to see you within 24 hours."
      />

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <div className="rounded-4xl border border-charcoal/10 bg-light-grey p-8 md:p-10">
              <h2 className="font-heading text-2xl font-bold text-charcoal">
                Appointments &amp; Pricing
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-grey">
                <p>
                  The prices set out below are for self-funding patients. We do not require
                  you to contact your GP before receiving treatment but most insurance
                  policies request that you do so.
                </p>
                <p>
                  Charges to insurance companies may be slightly higher due to administration
                  fees.
                </p>
                <p>Our standard prices are set out as follows:</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-4xl border border-charcoal/10">
              {pricing.map((row, i) => (
                <div
                  key={row.name}
                  className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                    i % 2 === 0 ? "bg-white" : "bg-light-grey"
                  }`}
                >
                  <div>
                    <p className="font-heading text-lg font-bold text-charcoal">{row.name}</p>
                    <p className="text-sm text-grey">{row.detail}</p>
                  </div>
                  <span className="text-sm font-semibold text-orange">{row.price}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-grey">
              For Pilates pricing or any other specialist areas, please complete the{" "}
              <Link href="/contact" className="font-semibold text-orange">
                Contact Us
              </Link>{" "}
              form or call{" "}
              <a href={site.phoneHref} className="font-semibold text-orange">
                {site.phone}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-4xl border border-charcoal/10 bg-light-grey p-8">
              <p className="w-full text-center text-sm font-semibold uppercase tracking-wider text-grey">
                Registered &amp; regulated
              </p>
              <span className="relative block h-20 w-32">
                <Image src={img.hcpc} alt="HCPC registered" fill className="object-contain" sizes="128px" />
              </span>
              <span className="relative block h-20 w-32">
                <Image src={img.csp} alt="Chartered Society of Physiotherapy member" fill className="object-contain" sizes="128px" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
