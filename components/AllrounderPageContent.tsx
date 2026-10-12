import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ServiceLandingCta } from "./ServiceLandingCta";
import { ServiceLandingFaq } from "./ServiceLandingFaq";
import { ServicePageShell } from "./ServicePageShell";

type AllrounderPageContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function AllrounderPageContent({ lang, dict }: AllrounderPageContentProps) {
  const page = dict.allrounderPage;

  return (
    <ServicePageShell
      lang={lang}
      dict={dict}
      activeLandingKey="allrounderMontage"
    >
      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          {page.hero.tagline ? (
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              {page.hero.tagline}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {page.servicesTitle}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {page.categories.map((category) => (
              <article
                key={category.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-emerald-800">
                  {category.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {page.benefitsTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {page.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
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
