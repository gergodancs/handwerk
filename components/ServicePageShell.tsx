import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type ServicePageShellProps = {
  lang: Locale;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  children: React.ReactNode;
};

export function ServicePageShell({
  lang,
  breadcrumbHome,
  breadcrumbCurrent,
  children,
}: ServicePageShellProps) {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-sm text-slate-600"
          aria-label="Breadcrumb"
        >
          <Link
            href={`/${lang}`}
            className="font-medium text-emerald-700 hover:text-emerald-600"
          >
            {breadcrumbHome}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900">{breadcrumbCurrent}</span>
        </nav>
      </div>
      {children}
    </div>
  );
}
