import Image from "next/image";
import Link from "next/link";
import { img, nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                <Image src={img.logo} alt="Oakley Physio logo" fill className="object-cover" sizes="48px" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">Oakley Physio</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.tagline}. Expert chartered physiotherapy in Prestwich, Manchester.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="relative block h-14 w-14 overflow-hidden rounded-lg bg-white p-1">
                <Image src={img.hcpc} alt="HCPC registered" fill className="object-contain p-1.5" sizes="56px" />
              </span>
              <span className="relative block h-14 w-14 overflow-hidden rounded-lg bg-white p-1">
                <Image src={img.csp} alt="Chartered Society of Physiotherapy member" fill className="object-contain p-1.5" sizes="56px" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-orange">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-orange">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-orange">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition-colors hover:text-orange">
                  {site.email}
                </a>
              </li>
            </ul>
            <Link href="/appointments" className="btn-primary mt-6">
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs text-white/50">
          &copy; Oakley Physio 2025. 95 Windsor Road, Manchester, M25 0DB. Telephone: 07806 358 752
        </div>
      </div>
    </footer>
  );
}
