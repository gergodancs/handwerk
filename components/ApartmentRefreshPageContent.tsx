import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getBioRefreshPath } from "@/lib/bio-refresh-routes";
import { getDesignWallsPath } from "@/lib/service-routes";
import { ApartmentRefreshServiceIcon } from "./ApartmentRefreshServiceIcons";
import { ServiceLandingCta } from "./ServiceLandingCta";
import { ServiceLandingFaq } from "./ServiceLandingFaq";
import { ServicePageShell } from "./ServicePageShell";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" className="fill-emerald-100" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-600"
      />
    </svg>
  );
}

type ApartmentRefreshPageContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function ApartmentRefreshPageContent({
  lang,
  dict,
}: ApartmentRefreshPageContentProps) {
  const page = dict.apartmentRefreshPage;

  return (
    <ServicePageShell
      lang={lang}
      dict={dict}
      activeLandingKey="apartmentRefresh"
    >
      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {page.hero.subtitle}
          </p>
          {page.hero.tagline && (
            <p className="mt-4 text-sm font-semibold tracking-wide text-emerald-400">
              {page.hero.tagline}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            {page.positioningTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {page.positioningText}
          </p>
          <p className="mt-2 font-medium text-emerald-700">{page.durationNote}</p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            {page.featuresTitle}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.refreshIcons.map((feature, index) => (
              <article
                key={feature.label}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="rounded-full bg-gray-100 p-3 text-slate-600 w-fit">
                  <ApartmentRefreshServiceIcon index={index} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {feature.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
                {index === 0 && (
                  <Link
                    href={getBioRefreshPath(lang)}
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                  >
                    {page.bioPaintingMoreLinkLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            {page.audienceTitle}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.audienceItems.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <CheckIcon className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-10 sm:px-10">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            {page.processTitle}
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {page.processSteps.map((step, index) => (
              <li key={step.title} className="relative text-center sm:text-left">
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white sm:mx-0"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-emerald-900">
            {page.ecoUpgradeTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {page.ecoUpgradeIntro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {page.ecoUpgradeBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href={getBioRefreshPath(lang)}
            className="mt-4 inline-flex text-sm font-semibold text-emerald-800 hover:text-emerald-700"
          >
            {page.bioPaintingMoreLinkLabel}
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            {page.packagesTitle}
          </h2>
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
            {page.packages.map((pkg) => {
              const isPopular = pkg.popular === true;

              return (
                <article
                  key={pkg.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
                    isPopular
                      ? "border-emerald-600 shadow-lg ring-2 ring-emerald-600/20 lg:-mt-1 lg:mb-1"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  {isPopular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                    >
                      {page.popularPackageBadge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-emerald-800">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {page.packageDurationLabel}:{" "}
                    <span className="text-slate-800">{pkg.duration}</span>
                  </p>
                  <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm text-slate-700">
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-red-200/60 bg-red-50/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            {page.excludedTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {page.excludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.upsellTitle}
          </h2>
          <p className="mt-2 text-slate-600">{page.upsellText}</p>
          <Link
            href={getDesignWallsPath(lang)}
            className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
          >
            {page.upsellLinkLabel}
          </Link>
        </section>

        <div className="mt-16">
          <ServiceLandingFaq title={page.faqTitle} items={page.faq} />
        </div>

        <div className="mt-16">
          <ServiceLandingCta
            cta={page.cta}
            whatsappPrefill={page.whatsappPrefill}
          />
        </div>
      </div>
    </ServicePageShell>
  );
}
