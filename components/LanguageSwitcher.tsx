"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { resolveLocalizedPath } from "@/lib/localized-path";

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && (
            <span className="text-slate-500" aria-hidden="true">
              |
            </span>
          )}
          <Link
            href={resolveLocalizedPath(pathname ?? "/", locale)}
            className={`px-1.5 py-0.5 text-sm font-medium transition-colors ${
              lang === locale
                ? "text-emerald-400"
                : "text-slate-400 hover:text-white"
            }`}
            aria-current={lang === locale ? "page" : undefined}
            hrefLang={locale}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
