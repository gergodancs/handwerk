import type { Locale } from "./i18n";

export type ServiceLandingKey =
  | "designWalls"
  | "apartmentRefresh"
  | "microcementBathroom"
  | "allrounderMontage";

/**
 * All service landing pages – single source for sitemap, static params, and nav order.
 */
export const SERVICE_LANDING_KEYS: readonly ServiceLandingKey[] = [
  "apartmentRefresh",
  "allrounderMontage",
  "designWalls",
  "microcementBathroom",
];

const SERVICE_LANDING_SLUGS: Record<
  ServiceLandingKey,
  Record<Locale, string>
> = {
  designWalls: {
    de: "designwaende",
    en: "design-walls",
  },
  apartmentRefresh: {
    de: "wohnungs-refresh",
    en: "apartment-refresh",
  },
  microcementBathroom: {
    de: "mikrozement-bad",
    en: "microcement-bathroom",
  },
  allrounderMontage: {
    de: "allrounder-montage-reparatur",
    en: "handyman-mounting-repairs",
  },
};

export function getServiceLandingSlug(
  key: ServiceLandingKey,
  lang: Locale,
): string {
  return SERVICE_LANDING_SLUGS[key][lang];
}

export function getDesignWallsSlug(lang: Locale): string {
  return getServiceLandingSlug("designWalls", lang);
}

export function getApartmentRefreshSlug(lang: Locale): string {
  return getServiceLandingSlug("apartmentRefresh", lang);
}

export function getMicrocementBathroomSlug(lang: Locale): string {
  return getServiceLandingSlug("microcementBathroom", lang);
}

export function getServiceLandingPath(
  key: ServiceLandingKey,
  lang: Locale,
): string {
  return `/${lang}/${getServiceLandingSlug(key, lang)}`;
}

export function getDesignWallsPath(lang: Locale): string {
  return getServiceLandingPath("designWalls", lang);
}

export function getApartmentRefreshPath(lang: Locale): string {
  return getServiceLandingPath("apartmentRefresh", lang);
}

export function getMicrocementBathroomPath(lang: Locale): string {
  return getServiceLandingPath("microcementBathroom", lang);
}

export function getAllrounderMontagePath(lang: Locale): string {
  return getServiceLandingPath("allrounderMontage", lang);
}

export function resolveServiceLandingPath(
  lang: Locale,
  key: ServiceLandingKey,
): string {
  return getServiceLandingPath(key, lang);
}

export function getSitemapPathsByLocale(lang: Locale): string[] {
  const base = ["", "/impressum", "/datenschutz"];
  return [
    ...base,
    ...SERVICE_LANDING_KEYS.map((key) =>
      getServiceLandingPath(key, lang).replace(`/${lang}`, ""),
    ),
  ];
}

export function findLandingKeyBySlug(slug: string): ServiceLandingKey | null {
  for (const key of Object.keys(SERVICE_LANDING_SLUGS) as ServiceLandingKey[]) {
    const slugs = SERVICE_LANDING_SLUGS[key];
    if (slug === slugs.de || slug === slugs.en) {
      return key;
    }
  }
  return null;
}

export function isServiceSlugForLocale(
  lang: Locale,
  key: ServiceLandingKey,
  slug: string,
): boolean {
  return slug === SERVICE_LANDING_SLUGS[key][lang];
}

export function getServiceLandingAlternates(key: ServiceLandingKey) {
  const dePath = resolveServiceLandingPath("de", key);
  const enPath = resolveServiceLandingPath("en", key);

  return {
    languages: {
      de: dePath,
      en: enPath,
      "x-default": dePath,
    },
  };
}
