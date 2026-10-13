import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { INSTITUTIONAL_EMBASSY_IMAGE } from "@/lib/images";
import { getAllrounderMontagePath } from "@/lib/service-routes";

type InstitutionalCareProps = {
  lang: Locale;
  dict: Dictionary;
};

export function InstitutionalCare({ lang, dict }: InstitutionalCareProps) {
  const section = dict.institutionalCare;

  return (
    <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {section.intro}
          </p>
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 px-5 py-4 text-slate-800">
            {section.highlight}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-1">
            {section.bullets.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={getAllrounderMontagePath(lang)}
            className="mt-8 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
          >
            {section.ctaLabel} →
          </Link>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
            <Image
              src={INSTITUTIONAL_EMBASSY_IMAGE}
              alt={section.imageAlt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
