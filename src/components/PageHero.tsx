import Image from "next/image";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  badge: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHero({ badge, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </>
      )}
      <div className="container-x relative py-20 text-center md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange">
            {badge}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="heading-xl mx-auto mt-6 max-w-3xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
