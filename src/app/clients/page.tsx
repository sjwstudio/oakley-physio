import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { img, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Read what patients say about Oakley Physio — outstanding chartered physiotherapy in Prestwich, Manchester.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        badge="Clients"
        title="What our patients say"
        subtitle="We are constantly striving to improve. Here is what some of our patients have to say."
      />

      <section className="section bg-light-grey">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-4xl border border-charcoal/10">
              <Image
                src={img.clinicInterior}
                alt="Oakley Physio clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-5">
            {testimonials.map((quote, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <blockquote className="rounded-4xl border border-charcoal/10 bg-white p-7 shadow-sm">
                  <div className="flex gap-0.5 text-orange" aria-hidden>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s}>&#9733;</span>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-charcoal">{quote}</p>
                  <footer className="mt-4 text-sm font-semibold text-orange">
                    Verified Patient Review
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
