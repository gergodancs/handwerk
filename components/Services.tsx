import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { getBioRefreshPath } from "@/lib/bio-refresh-routes";
import type { Locale } from "@/lib/i18n";
import { SERVICE_CARD_IMAGE_BY_LANDING } from "@/lib/images";
import { resolveServiceLandingPath } from "@/lib/service-routes";
import { SectionCTA } from "./SectionCTA";

type ServicesProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Services({ lang, dict }: ServicesProps) {
  const featured = dict.services.featuredBio;
  const bioHref = getBioRefreshPath(lang);

  return (
    <section
      id="leistungen"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.services.title}
        </h2>

        <article
          className="mt-10 rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="text-xl font-bold text-emerald-900 sm:text-2xl">
            {featured.title}
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            {featured.description}
          </p>
          <Link
            href={bioHref}
            className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            {featured.ctaLabel}
          </Link>
        </article>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.services.items.map((service) => {
            const landingHref = service.landing
              ? resolveServiceLandingPath(lang, service.landing)
              : null;
            const image = service.landing
              ? SERVICE_CARD_IMAGE_BY_LANDING[service.landing]
              : null;

            return (
              <article
                key={service.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-shadow hover:shadow-md"
              >
                {image && (
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
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-5 min-h-7">
                    {landingHref && (
                      <Link
                        href={landingHref}
                        className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                      >
                        {dict.services.learnMore} →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
