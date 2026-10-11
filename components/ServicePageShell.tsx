import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { ServiceLandingKey } from "@/lib/service-routes";
import { ServiceLandingCrossLinks } from "./ServiceLandingCrossLinks";

type ServicePageShellProps = {
  lang: Locale;
  dict: Dictionary;
  activeLandingKey: ServiceLandingKey;
  children: React.ReactNode;
};

export function ServicePageShell({
  lang,
  dict,
  activeLandingKey,
  children,
}: ServicePageShellProps) {
  return (
    <div className="bg-white">
      <ServiceLandingCrossLinks
        lang={lang}
        dict={dict}
        activeKey={activeLandingKey}
      />
      {children}
    </div>
  );
}
