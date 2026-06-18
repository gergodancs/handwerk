import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMailtoHref, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PhoneIcon } from "./icons/PhoneIcon";
import { EmailIcon } from "./icons/EmailIcon";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

const NAV_ITEMS = [
  { key: "services" as const, href: "#leistungen" },
  { key: "gallery" as const, href: "#referenzen" },
  { key: "reviews" as const, href: "#bewertungen" },
  { key: "faq" as const, href: "#faq" },
];

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={`/${lang}`}
          className="shrink-0 text-base font-semibold tracking-tight text-white sm:text-lg"
        >
          {dict.header.companyName}
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label={lang === "de" ? "Seitennavigation" : "Page navigation"}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {dict.header.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher lang={lang} />

          <a
            href={buildMailtoHref()}
            className="hidden items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white sm:inline-flex"
          >
            <EmailIcon className="h-3.5 w-3.5" />
            <span>{dict.email.buttonText}</span>
          </a>

          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
