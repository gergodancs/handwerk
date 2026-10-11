import type { Locale } from "./i18n";

export type ServiceLandingKey =
  | "designWalls"
  | "apartmentRefresh"
  | "microcementBathroom";

/** All service landing pages – keep in sync with sitemap and static generation. */
export const SERVICE_LANDING_KEYS: readonly ServiceLandingKey[] = [
  "designWalls",
  "apartmentRefresh",
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
