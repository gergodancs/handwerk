import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { MICROCEMENT_LANDING_GALLERY } from "@/lib/images";
import { MicrocementFAQ } from "./MicrocementFAQ";
import { MicrocementLandingGallery } from "./MicrocementLandingGallery";
import { ServiceLandingCta } from "./ServiceLandingCta";
import { ServicePageShell } from "./ServicePageShell";

type MicrocementBathroomPageContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function MicrocementBathroomPageContent({
  lang,
  dict,
}: MicrocementBathroomPageContentProps) {
  const page = dict.microcementBathroomPage;

  return (
    <ServicePageShell
      lang={lang}
      dict={dict}
      activeLandingKey="microcementBathroom"
    >
      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
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
            {page.benefitsTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {page.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-800">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-900">
            {page.applicationsTitle}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.applications.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            {page.galleryTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">{page.galleryIntro}</p>
          <MicrocementLandingGallery
            lang={lang}
            images={MICROCEMENT_LANDING_GALLERY}
          />
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-10 sm:px-10">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            {page.processTitle}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.processSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center sm:text-left"
              >
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white sm:mx-0"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {page.processStepLabel} {index + 1}
                </p>
                <h3 className="mt-2 font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16">
          <MicrocementFAQ dict={dict} />
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
