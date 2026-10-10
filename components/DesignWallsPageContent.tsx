import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  DESIGN_WALL_SAMPLE_BOARDS,
  DESIGN_WALL_TECHNIQUE_PREVIEWS,
} from "@/lib/images";
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

function FieldIcon({
  type,
}: {
  type: "look" | "ideal" | "advantage" | "care" | "sample";
}) {
  const paths: Record<typeof type, ReactNode> = {
    look: (
      <>
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M5 19l1.5-1.5M19 19l-1.5-1.5" />
      </>
    ),
    ideal: (
      <>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    advantage: (
      <>
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
      </>
    ),
    care: (
      <>
        <path d="M4 14h16" />
        <path d="M6 10h12v8H6z" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" />
      </>
    ),
    sample: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 4v16" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-emerald-700"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function TvFeatureIcon({ type }: { type: "cable" | "led" | "color" }) {
  if (type === "cable") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className="h-5 w-5 text-emerald-600"
        aria-hidden="true"
      >
        <path d="M8 6v12M16 6v8" />
        <path d="M8 18h8" />
        <circle cx="8" cy="6" r="2" />
        <circle cx="16" cy="6" r="2" />
      </svg>
    );
  }
  if (type === "led") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className="h-5 w-5 text-emerald-600"
        aria-hidden="true"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v2" />
        <path d="M8 6h8l2 5H6l2-5z" />
        <path d="M9 11v1a3 3 0 0 0 6 0v-1" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className="h-5 w-5 text-emerald-600"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
    </svg>
  );
}

const PROCESS_ICONS = [
  // WhatsApp / phone
  <path key="p0" d="M8 4h8l2 4v12H6V8l2-4zM12 8v4" />,
  // palette / sample
  <g key="p1">
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
  </g>,
  // clipboard
  <g key="p2">
    <rect x="6" y="5" width="12" height="16" rx="2" />
    <path d="M9 5h6v2H9z" />
    <path d="M9 12h6M9 16h4" />
  </g>,
  // brush
  <g key="p3">
    <path d="M4 20l8-8" />
    <path d="M14 6l4 4-3 3-4-4 3-3z" />
  </g>,
];

const TV_FEATURE_ICON_TYPES = ["cable", "led", "color"] as const;

type DesignWallsPageContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function DesignWallsPageContent({
  lang,
  dict,
}: DesignWallsPageContentProps) {
  const page = dict.designWallsPage;
  const labels = page.techniqueFieldLabels;

  return (
    <ServicePageShell
      lang={lang}
      breadcrumbHome={page.breadcrumbHome}
      breadcrumbCurrent={page.breadcrumbCurrent}
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
        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/80 px-6 py-6 sm:px-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.dryZoneTitle}
          </h2>
          <p className="mt-2 leading-relaxed text-slate-700">{page.dryZoneText}</p>
          <Link
            href={`/${lang}#leistungen`}
            className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-600"
          >
            {page.dryZoneLinkLabel}
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {page.techniquesTitle}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {page.techniques.map((technique, index) => {
              const preview = DESIGN_WALL_TECHNIQUE_PREVIEWS[index];

              return (
                <article
                  key={technique.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/10] bg-slate-200">
                    <Image
                      src={preview.src}
                      alt={preview.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white drop-shadow">
                      {technique.title}
                    </p>
                  </div>
                  <dl className="space-y-4 p-6 sm:p-8">
                    <div>
                      <dt className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                        <FieldIcon type="look" />
                        {labels.look}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {technique.look}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                        <FieldIcon type="ideal" />
                        {labels.idealFor}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {technique.idealFor}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-emerald-50/80 px-4 py-3 ring-1 ring-emerald-100">
                      <dt className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                        <FieldIcon type="advantage" />
                        {labels.advantage}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-800">
                        {technique.advantage}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                        <FieldIcon type="care" />
                        {labels.care}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {technique.care}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                        <FieldIcon type="sample" />
                        {labels.sample}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {technique.sample}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="mt-16 rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/80 px-6 py-10 sm:px-10 sm:py-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {page.sampleBoardTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            {page.sampleBoardIntro}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {page.sampleBoardLabels.map((label, index) => {
              const sample = DESIGN_WALL_SAMPLE_BOARDS[index];

              return (
              <figure
                key={label}
                className="relative overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm"
              >
                <div className="relative aspect-square bg-slate-200">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className="absolute right-2 top-2 flex max-w-[calc(100%-1rem)] items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-semibold leading-tight text-slate-700 shadow-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-3 w-3 shrink-0"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3-3" />
                  </svg>
                  {page.sampleBoardTouchBadge}
                </span>
                <figcaption className="px-3 py-2.5 text-center text-xs font-semibold text-slate-800">
                  {label}
                </figcaption>
              </figure>
            );
            })}
          </div>
          <p className="mt-8 flex items-start gap-3 text-lg font-bold text-slate-900">
            <CheckIcon className="h-7 w-7 shrink-0" />
            <span>{page.sampleBoardCta}</span>
          </p>
        </section>

        <section className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900">
                {page.tvWallTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {page.tvWallIntro}
              </p>
              <ul className="mt-8 space-y-5">
                {page.tvWallFeatures.map((feature, index) => (
                  <li key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <TvFeatureIcon
                        type={TV_FEATURE_ICON_TYPES[index] ?? "cable"}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-slate-900 p-6 sm:p-10 lg:min-h-[320px]">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
                <Image
                  src={DESIGN_WALL_TECHNIQUE_PREVIEWS[0].src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="mx-4 max-w-sm rounded-xl border border-slate-600 bg-slate-950/90 p-6 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {page.tvWallTipTitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      {page.tvWallTipText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            {page.processTitle}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.processSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:text-left"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 sm:mx-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-700"
                    aria-hidden="true"
                  >
                    {PROCESS_ICONS[index]}
                  </svg>
                </div>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
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
          <ServiceLandingCta
            cta={page.cta}
            whatsappPrefill={page.whatsappPrefill}
          />
        </div>

        <ServiceLandingFaq title={page.faqTitle} items={page.faq} />
      </div>
    </ServicePageShell>
  );
}
