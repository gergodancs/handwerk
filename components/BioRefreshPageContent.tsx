import Link from "next/link";
import { buildWhatsAppHref } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getDesignWallsPath } from "@/lib/service-routes";
import { ServiceLandingCta } from "./ServiceLandingCta";
import { ServiceLandingFaq } from "./ServiceLandingFaq";
import { ServicePageShell } from "./ServicePageShell";

type BioRefreshPageContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function BioRefreshPageContent({
  lang,
  dict,
}: BioRefreshPageContentProps) {
  const page = dict.bioRefreshPage;
  const scopeAnchor = `#${page.scopeSectionId}`;

  return (
    <ServicePageShell
      lang={lang}
      dict={dict}
      activeLandingKey="apartmentRefresh"
    >
      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300">
            {page.heroBadge}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
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
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppHref(page.whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              {page.cta.whatsapp}
            </a>
            <a
              href={scopeAnchor}
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900"
            >
              {page.heroSecondaryCta}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            {page.comparisonTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {page.comparisonProblemTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {page.comparisonProblemText}
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                {page.comparisonSolutionTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {page.comparisonSolutionText}
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            {page.benefitsTitle}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {page.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id={page.scopeSectionId}
          className="mt-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            {page.scopeTitle}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {page.scopeOptions.map((option) => (
              <article
                key={option.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-emerald-800">
                  {option.name}
                </h3>
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">
                    {page.scopeIdealForLabel}:
                  </span>{" "}
                  {option.idealFor}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">
                    {page.scopeStepsLabel}
                  </p>
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                    {option.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">
                    {page.scopeAdvantageLabel}:
                  </span>{" "}
                  {option.advantage}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10">
          <h2 className="text-xl font-bold text-slate-900">
            {page.dustFreeTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {page.dustFreeText}
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.designWallsUpsellTitle}
          </h2>
          <p className="mt-2 text-slate-600">{page.designWallsUpsellText}</p>
          <Link
            href={getDesignWallsPath(lang)}
            className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
          >
            {page.designWallsUpsellLinkLabel}
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
