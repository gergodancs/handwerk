"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getBioRefreshPath } from "@/lib/bio-refresh-routes";
import {
  HOME_SECTION_NAV,
  getBioPaintingNavLabel,
  getServiceLandingNavItems,
} from "@/lib/site-navigation";
import { resolveServiceLandingPath, type ServiceLandingKey } from "@/lib/service-routes";

type HeaderNavProps = {
  lang: Locale;
  dict: Dictionary;
};

export function HeaderNav({ lang, dict }: HeaderNavProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const serviceItems = getServiceLandingNavItems(dict);
  const bioHref = getBioRefreshPath(lang);
  const bioNavLabel = getBioPaintingNavLabel(dict);

  const closeServices = useCallback(() => setServicesOpen(false), []);

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        closeServices();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeServices();
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen, closeServices]);

  const isServiceActive = (key: ServiceLandingKey) =>
    pathname === resolveServiceLandingPath(lang, key);

  const isBioActive = pathname === bioHref;

  const sectionLinkClass =
    "text-sm font-medium text-slate-300 transition-colors hover:text-white";

  return (
    <nav
      className="hidden items-center gap-5 lg:flex"
      aria-label={lang === "de" ? "Seitennavigation" : "Page navigation"}
    >
      <div ref={servicesRef} className="relative">
        <button
          type="button"
          onClick={() => setServicesOpen((open) => !open)}
          className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
            servicesOpen ? "text-white" : "text-slate-300 hover:text-white"
          }`}
          aria-expanded={servicesOpen}
          aria-haspopup="true"
        >
          {dict.header.nav.services}
          <span className="text-xs opacity-70" aria-hidden="true">
            ▾
          </span>
        </button>

        {servicesOpen ? (
          <div
            className="absolute left-0 top-full z-50 mt-2 min-w-[15rem] rounded-xl border border-slate-700 bg-slate-900 py-2 shadow-xl"
            role="menu"
          >
            <Link
              href={`/${lang}#leistungen`}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
              onClick={closeServices}
            >
              {dict.header.nav.servicesOverview}
            </Link>
            <div className="my-1 border-t border-slate-800" role="separator" />
            <Link
              href={bioHref}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-slate-800 ${
                isBioActive
                  ? "bg-slate-800/80 font-semibold text-emerald-400"
                  : "font-medium text-emerald-300 hover:text-emerald-200"
              }`}
              onClick={closeServices}
              aria-current={isBioActive ? "page" : undefined}
            >
              {bioNavLabel}
            </Link>
            {serviceItems.map((item) => {
              const href = resolveServiceLandingPath(lang, item.key);
              const active = isServiceActive(item.key);

              return (
                <Link
                  key={item.key}
                  href={href}
                  role="menuitem"
                  className={`block px-4 py-2.5 text-sm transition-colors hover:bg-slate-800 ${
                    active
                      ? "bg-slate-800/80 font-semibold text-emerald-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                  onClick={closeServices}
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>

      {HOME_SECTION_NAV.map((item) => (
        <Link
          key={item.key}
          href={`/${lang}${item.href}`}
          className={sectionLinkClass}
        >
          {dict.header.nav[item.key]}
        </Link>
      ))}
    </nav>
  );
}
