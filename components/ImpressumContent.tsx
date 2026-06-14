import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  EMAIL,
  IMPRESSUM,
  ODR_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  RIS_DISPLAY,
  RIS_URL,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
} from "@/lib/constants";

type ImpressumContentProps = {
  lang: Locale;
  dict: Dictionary;
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-base text-slate-900">{children}</dd>
    </div>
  );
}

export function ImpressumContent({ lang, dict }: ImpressumContentProps) {
  const page = dict.impressumPage;

  return (
    <main className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/${lang}`}
          className="text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-600"
        >
          {page.backToHome}
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {page.title}
        </h1>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.responsibleTitle}
          </h2>
          <dl className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
            <InfoRow label={page.nameLabel}>{IMPRESSUM.name}</InfoRow>
            <InfoRow label={page.companyLabel}>{IMPRESSUM.company}</InfoRow>
            <InfoRow label={page.addressLabel}>{page.address}</InfoRow>
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.contactTitle}
          </h2>
          <dl className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
            <InfoRow label={page.phoneLabel}>
              <a
                href={PHONE_HREF}
                className="transition-colors hover:text-emerald-700"
              >
                {PHONE_DISPLAY}
              </a>
            </InfoRow>
            <InfoRow label={page.emailLabel}>
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-emerald-700"
              >
                {EMAIL}
              </a>
            </InfoRow>
            <InfoRow label={page.webLabel}>
              <a
                href={WEBSITE_URL}
                className="transition-colors hover:text-emerald-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {WEBSITE_DISPLAY}
              </a>
            </InfoRow>
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.businessTitle}
          </h2>
          <dl className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
            <InfoRow label={page.gisaLabel}>{IMPRESSUM.gisaNumber}</InfoRow>
            <InfoRow label={page.authorityLabel}>{page.authority}</InfoRow>
            <InfoRow label={page.membershipLabel}>{page.membership}</InfoRow>
            <InfoRow label={page.legalLabel}>
              <a
                href={RIS_URL}
                className="transition-colors hover:text-emerald-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.legalLinkText}: {RIS_DISPLAY}
              </a>
            </InfoRow>
          </dl>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {page.disputeTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            {page.disputeTextBefore}{" "}
            <a
              href={ODR_URL}
              className="font-medium text-emerald-700 underline-offset-2 transition-colors hover:text-emerald-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ODR_URL}
            </a>
            . {page.disputeTextAfter}
          </p>
        </section>
      </div>
    </main>
  );
}
