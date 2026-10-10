import type { Locale } from "./i18n";

export type ServiceLandingKey = "designWalls" | "apartmentRefresh";

const DESIGN_WALLS_SLUG: Record<Locale, string> = {
  de: "designwaende",
  en: "design-walls",
};

const APARTMENT_REFRESH_SLUG: Record<Locale, string> = {
  de: "wohnungs-refresh",
  en: "apartment-refresh",
};

export function getDesignWallsSlug(lang: Locale): string {
  return DESIGN_WALLS_SLUG[lang];
}

export function getApartmentRefreshSlug(lang: Locale): string {
  return APARTMENT_REFRESH_SLUG[lang];
}

export function getDesignWallsPath(lang: Locale): string {
  return `/${lang}/${getDesignWallsSlug(lang)}`;
}

export function getApartmentRefreshPath(lang: Locale): string {
  return `/${lang}/${getApartmentRefreshSlug(lang)}`;
}

export function resolveServiceLandingPath(
  lang: Locale,
  key: ServiceLandingKey,
): string {
  return key === "designWalls"
    ? getDesignWallsPath(lang)
    : getApartmentRefreshPath(lang);
}

export function getSitemapPathsByLocale(lang: Locale): string[] {
  const base = ["", "/impressum", "/datenschutz"];
  return [
    ...base,
    getDesignWallsPath(lang).replace(`/${lang}`, ""),
    getApartmentRefreshPath(lang).replace(`/${lang}`, ""),
  ];
}

export function findLandingKeyBySlug(slug: string): ServiceLandingKey | null {
  if (slug === DESIGN_WALLS_SLUG.de || slug === DESIGN_WALLS_SLUG.en) {
    return "designWalls";
  }
  if (
    slug === APARTMENT_REFRESH_SLUG.de ||
    slug === APARTMENT_REFRESH_SLUG.en
  ) {
    return "apartmentRefresh";
  }
  return null;
}

export function isServiceSlugForLocale(
  lang: Locale,
  key: ServiceLandingKey,
  slug: string,
): boolean {
  return (
    slug ===
    (key === "designWalls"
      ? DESIGN_WALLS_SLUG[lang]
      : APARTMENT_REFRESH_SLUG[lang])
  );
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
