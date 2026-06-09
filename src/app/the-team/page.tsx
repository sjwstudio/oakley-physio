import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Meet the chartered physiotherapists at Oakley Physio — Rivka Goldblatt, Lisa Miller and Debbie Bernstein.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="The Team"
        title="Meet your chartered physiotherapists"
        subtitle="Years of specialist NHS and private experience — all Chartered, CSP and HPC registered."
      />

      <section className="section bg-white">
        <div className="container-x space-y-12 md:space-y-20">
          {team.map((member, i) => (
            <Reveal key={member.name}>
              <article
                className={`grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl border border-charcoal/10">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-charcoal">{member.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-orange">
                    {member.qual}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-grey">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Book with our specialist team"
        text="Appointments within 24 hours — no GP referral needed."
      />
    </>
  );
}
