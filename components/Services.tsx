import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SERVICE_IMAGES } from "@/lib/images";
import { resolveServiceLandingPath } from "@/lib/service-routes";
import { MicrocementFAQ } from "./MicrocementFAQ";
import { SectionCTA } from "./SectionCTA";

type ServicesProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Services({ lang, dict }: ServicesProps) {
  return (
    <section
      id="leistungen"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.services.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const image = SERVICE_IMAGES[index];
            const landingHref = service.landing
              ? resolveServiceLandingPath(lang, service.landing)
              : null;

            return (
              <article
                key={service.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className={
                      image.cropTopHalf
                        ? "object-cover object-top !h-[200%] !max-h-none"
                        : "object-cover"
                    }
                    priority={index === 0}
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  {landingHref && (
                    <Link
                      href={landingHref}
                      className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                    >
                      {dict.services.learnMore} →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <MicrocementFAQ dict={dict} embedded />

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
