import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getServiceLandingChipLabel } from "@/lib/site-navigation";
import {
  SERVICE_LANDING_KEYS,
  resolveServiceLandingPath,
  type ServiceLandingKey,
} from "@/lib/service-routes";

type ServiceLandingCrossLinksProps = {
  lang: Locale;
  dict: Dictionary;
  activeKey: ServiceLandingKey;
};

export function ServiceLandingCrossLinks({
  lang,
  dict,
  activeKey,
}: ServiceLandingCrossLinksProps) {
  return (
    <nav
      className="border-b border-slate-200 bg-white px-4 py-3 sm:px-6"
      aria-label={dict.serviceLandingCrossNav.ariaLabel}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {dict.serviceLandingCrossNav.label}
        </p>
        <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto pb-1">
          {SERVICE_LANDING_KEYS.map((key) => {
            const href = resolveServiceLandingPath(lang, key);
            const isActive = key === activeKey;
            const label = getServiceLandingChipLabel(dict, key);

            return (
              <Link
                key={key}
                href={href}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
