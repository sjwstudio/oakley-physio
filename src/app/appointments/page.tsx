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
            <div className="mt-8 overflow-x-auto rounded-4xl border border-charcoal/10">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="bg-orange text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Treatment
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Price
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Learn More
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Book Now
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-orange/10"}>
                      <td className="px-6 py-4 font-medium text-charcoal">{row.name}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-heading font-bold text-orange">
                        {row.price}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={row.learnMore}
                          className="text-sm font-semibold text-charcoal underline-offset-4 hover:text-orange hover:underline"
                        >
                          Learn More
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        {row.bookHref.startsWith("/") ? (
                          <Link href={row.bookHref} className="btn-primary !px-4 !py-2 text-xs">
                            Book Now
                          </Link>
                        ) : (
                          <a href={row.bookHref} className="btn-primary !px-4 !py-2 text-xs">
                            Book Now
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
