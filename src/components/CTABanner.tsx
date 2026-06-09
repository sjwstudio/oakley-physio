import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

type CTABannerProps = {
  title?: string;
  text?: string;
};

export default function CTABanner({
  title = "Ready to start your recovery?",
  text,
}: CTABannerProps) {
  return (
    <section className="bg-orange text-white">
      <Reveal className="container-x py-16 text-center md:py-20">
        <h2 className="heading-lg mx-auto max-w-2xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          {text ?? (
            <>
              Call us now on{" "}
              <a href={site.phoneHref} className="font-semibold underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </>
          )}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-on-orange">
            Get in Touch
          </Link>
          <a href={site.phoneHref} className="btn-on-orange">
            Call {site.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
