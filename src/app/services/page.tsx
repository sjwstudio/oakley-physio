import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceContent from "@/components/ServiceContent";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import { img, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Musculo-skeletal physiotherapy, Pilates, continence physiotherapy, acupuncture, pregnancy care, elderly rehabilitation and women's health in Prestwich, Manchester.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="A wide range of specialist physiotherapy services"
        subtitle="Covering a variety of complaints and injuries — all delivered by chartered physiotherapists."
        image={img.servicesHero}
      />

      <div className="bg-white">
        {services.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 ${i % 2 === 1 ? "bg-light-grey" : "bg-white"}`}
            >
              <div className="container-x section">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* MEDIA */}
                  <Reveal className={reversed ? "lg:order-2" : ""}>
                    <div className="space-y-5">
                      {service.images.map((src, j) => (
                        <div
                          key={j}
                          className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-charcoal/10"
                        >
                          <Image
                            src={src}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ))}

                      {service.videoThumb && (
                        <div className="group relative aspect-video w-full overflow-hidden rounded-4xl border border-charcoal/10">
                          <Image
                            src={service.videoThumb}
                            alt={`${service.title} video`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform group-hover:scale-110">
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden>
                                <path d="M19 9.27a2 2 0 0 1 0 3.46L3 21.66A2 2 0 0 1 0 19.93V2.07A2 2 0 0 1 3 .34L19 9.27Z" />
                              </svg>
                            </span>
                          </div>
                          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal">
                            Video coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </Reveal>

                  {/* TEXT */}
                  <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                    <span className="label-pill">
                      {String(i + 1).padStart(2, "0")} — Service
                    </span>
                    <h2 className="heading-lg mt-4 text-charcoal">{service.title}</h2>

                    {service.testimonials && (
                      <div className="mt-6 space-y-3">
                        {service.testimonials.map((quote, k) => (
                          <blockquote
                            key={k}
                            className="rounded-2xl border border-orange/15 bg-orange/5 p-4 text-sm italic leading-relaxed text-grey"
                          >
                            &ldquo;{quote}&rdquo;
                          </blockquote>
                        ))}
                      </div>
                    )}

                    <div className="mt-6">
                      <ServiceContent content={service.content} />
                    </div>

                    {service.bookingForm && (
                      <div className="mt-8 rounded-4xl border border-charcoal/10 bg-white p-6 sm:p-8">
                        <h3 className="font-heading text-xl font-bold text-charcoal">
                          Book a Women&apos;s Health appointment
                        </h3>
                        <p className="mt-1 text-sm text-grey">
                          Tell us a little about how we can help and choose your preferred
                          practitioner.
                        </p>
                        <div className="mt-5">
                          <ContactForm withPractitioner />
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner
        title="Not sure which treatment is right for you?"
        text="Call us and we will help you find the right path to recovery — appointments within 24 hours."
      />
    </>
  );
}
