"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMailtoHref, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import {
  HOME_SECTION_NAV,
  getServiceLandingNavItems,
} from "@/lib/site-navigation";
import { resolveServiceLandingPath } from "@/lib/service-routes";
import { PhoneIcon } from "./icons/PhoneIcon";
import { EmailIcon } from "./icons/EmailIcon";

type MobileNavMenuProps = {
  lang: Locale;
  dict: Dictionary;
};

export function MobileNavMenu({ lang, dict }: MobileNavMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const serviceItems = getServiceLandingNavItems(dict);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  const linkClass =
    "block rounded-lg px-3 py-2.5 text-base font-medium text-slate-100 transition-colors hover:bg-slate-800";

  const menuPanel =
    open && mounted
      ? createPortal(
          <div
            id="mobile-site-nav"
            className="fixed inset-0 z-[100] flex flex-col bg-slate-950 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={dict.header.nav.menuTitle}
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 px-4">
              <span className="text-sm font-semibold text-white">
                {dict.header.nav.menuTitle}
              </span>
              <button
                type="button"
                onClick={close}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white"
              >
                {dict.header.nav.menuClose}
              </button>
            </div>

            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6"
              aria-label={dict.header.nav.menuTitle}
            >
              <Link href={`/${lang}`} className={linkClass} onClick={close}>
                {dict.header.nav.home}
              </Link>

              <p className="mt-6 px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                {dict.header.nav.services}
              </p>
              <div className="mt-2 space-y-1">
                <Link
                  href={`/${lang}#leistungen`}
                  className={linkClass}
                  onClick={close}
                >
                  {dict.header.nav.servicesOverview}
                </Link>
                {serviceItems.map((item) => {
                  const href = resolveServiceLandingPath(lang, item.key);
                  const active = pathname === href;

                  return (
                    <Link
                      key={item.key}
                      href={href}
                      className={`${linkClass} ${
                        active ? "bg-slate-800 text-emerald-400" : ""
                      }`}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              <p className="mt-6 px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                {dict.header.nav.homeSections}
              </p>
              <div className="mt-2 space-y-1">
                {HOME_SECTION_NAV.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${lang}${item.href}`}
                    className={linkClass}
                    onClick={close}
                  >
                    {dict.header.nav[item.key]}
                  </Link>
                ))}
              </div>

              <div className="mt-8 space-y-2 border-t border-slate-800 pt-6 pb-24">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-3 text-sm font-semibold text-white"
                  onClick={close}
                >
                  <PhoneIcon className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={buildMailtoHref()}
                  className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-3 text-sm font-medium text-slate-200"
                  onClick={close}
                >
                  <EmailIcon className="h-4 w-4" />
                  {dict.email.buttonText}
                </a>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
        aria-expanded={open}
        aria-controls="mobile-site-nav"
        aria-label={open ? dict.header.nav.menuClose : dict.header.nav.menuOpen}
      >
        {open ? (
          <span className="text-xl leading-none" aria-hidden="true">×</span>
        ) : (
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        )}
      </button>
      {menuPanel}
    </div>
  );
}
