import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { features, img, services, site, stats, testimonials } from "@/lib/data";

const previewSlugs = ["musculo-skeletal", "pilates", "acupuncture"];
const previewServices = previewSlugs
  .map((slug) => services.find((s) => s.slug === slug)!)
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src={img.hero}
          alt="Oakley Physio clinic interior"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="container-x relative py-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {site.tagline}
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="heading-xl mt-6 text-white drop-shadow-sm">
                Welcome to <span className="text-orange">Oakley Physio</span>
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 text-xl font-semibold text-white">
                North Manchester&apos;s No.1 Physiotherapy Practice
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-3 text-lg text-white/85">
                Appointments within 24 hours — no GP referral needed.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9">
                <Link href="/appointments" className="btn-primary text-base">
                  Book an Appointment — {site.phone}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <Link
                href={feature.href}
                className="group flex h-full flex-col rounded-4xl border border-charcoal/10 bg-light-grey p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 font-heading text-lg font-bold text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">{feature.text}</p>
                <span className="mt-6 text-sm font-semibold text-orange transition-transform group-hover:translate-x-1">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-charcoal/10">
              <Image
                src={img.clinicInterior}
                alt="Oakley Physio clinic interior"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="label-pill">About Us</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mt-5 text-charcoal">
                Highly skilled, evidence-based physiotherapy in Prestwich
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-grey">
                Situated in Prestwich, North Manchester, and just south of Bury on the A665,
                we are a team of chartered physiotherapists working as part of a
                multi-disciplinary clinic. Our aim is to provide highly skilled and
                professional physiotherapy treatment which is based on the most up to date
                evidence. We provide a service where getting to the root of the problem is
                our top priority. Early treatment can mean a quicker recovery and less time
                off work and sport. At Oakley Physio we aim to provide appointments within
                24 hours. There is no need to visit your GP first; most patients simply
                contact us directly. We are recognised by all major insurance schemes. We
                are HPC registered and members of the CSP.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal py-20 text-white md:py-24">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="font-heading text-5xl font-extrabold text-orange sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mx-auto mt-3 max-w-[180px] text-sm text-white/65">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-light-grey">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Reveal>
                <span className="label-pill">Our Services</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="heading-lg mt-5 text-charcoal">
                  Specialist treatments tailored to you
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link href="/services" className="btn-outline-dark">
                View All Services
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {previewServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col overflow-hidden rounded-4xl border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                      {service.short}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-orange transition-transform group-hover:translate-x-1">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-light-grey !pt-0">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="label-pill">Testimonials</span>
            <h2 className="heading-lg mt-5 text-charcoal">What our patients say</h2>
          </Reveal>
          <Testimonials items={testimonials.slice(0, 5)} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
