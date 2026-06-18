import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type PrivacyContentProps = {
  lang: Locale;
  dict: Dictionary;
};

export function PrivacyContent({ lang, dict }: PrivacyContentProps) {
  const page = dict.privacyPage;

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
        <p className="mt-3 text-sm text-slate-500">{page.lastUpdated}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
