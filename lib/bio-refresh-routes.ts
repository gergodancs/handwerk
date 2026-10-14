import type { Locale } from "./i18n";
import { locales } from "./i18n";
import {
  getServiceLandingSlug,
  isServiceSlugForLocale,
} from "./service-routes";

export const BIO_REFRESH_PARENT = "apartmentRefresh" as const;

const BIO_REFRESH_SUB_SLUGS: Record<Locale, string> = {
  de: "bio-oeko",
  en: "eco-healthy-painting",
};

export function getBioRefreshSubSlug(lang: Locale): string {
  return BIO_REFRESH_SUB_SLUGS[lang];
}

export function getBioRefreshPath(lang: Locale): string {
  const parentSlug = getServiceLandingSlug(BIO_REFRESH_PARENT, lang);
  return `/${lang}/${parentSlug}/${getBioRefreshSubSlug(lang)}`;
}

export function getBioRefreshAlternates() {
  const dePath = getBioRefreshPath("de");
  const enPath = getBioRefreshPath("en");

  return {
    languages: {
      de: dePath,
      en: enPath,
      "x-default": dePath,
    },
  };
}

export function isBioRefreshRoute(
  lang: Locale,
  serviceSlug: string,
  subSlug: string,
): boolean {
  if (subSlug !== getBioRefreshSubSlug(lang)) {
    return false;
  }

  return isServiceSlugForLocale(lang, BIO_REFRESH_PARENT, serviceSlug);
}

export function getBioRefreshStaticParams() {
  return locales.map((lang) => ({
    lang,
    serviceSlug: getServiceLandingSlug(BIO_REFRESH_PARENT, lang),
    subSlug: getBioRefreshSubSlug(lang),
  }));
}
