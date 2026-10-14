import { getBioRefreshPath, getBioRefreshSubSlug } from "./bio-refresh-routes";
import type { Locale } from "./i18n";
import {
  findLandingKeyBySlug,
  getServiceLandingPath,
} from "./service-routes";

const STATIC_LOCALIZED_SEGMENTS = new Set(["impressum", "datenschutz"]);

/**
 * Maps the current pathname to the equivalent route in another locale
 * (localized service slugs and nested bio-refresh sub-pages).
 */
export function resolveLocalizedPath(
  pathname: string,
  fromLang: Locale,
  toLang: Locale,
): string {
  if (fromLang === toLang) {
    return pathname;
  }

  const prefix = `/${fromLang}`;

  if (pathname === prefix) {
    return `/${toLang}`;
  }

  if (!pathname.startsWith(`${prefix}/`)) {
    return `/${toLang}`;
  }

  const segments = pathname.slice(prefix.length + 1).split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${toLang}`;
  }

  if (segments.length === 1 && STATIC_LOCALIZED_SEGMENTS.has(segments[0])) {
    return `/${toLang}/${segments[0]}`;
  }

  if (segments.length === 2) {
    const [serviceSlug, subSlug] = segments;
    const landingKey = findLandingKeyBySlug(serviceSlug);
    const isBioSubSlug =
      subSlug === getBioRefreshSubSlug("de") ||
      subSlug === getBioRefreshSubSlug("en");

    if (landingKey === "apartmentRefresh" && isBioSubSlug) {
      return getBioRefreshPath(toLang);
    }
  }

  if (segments.length === 1) {
    const landingKey = findLandingKeyBySlug(segments[0]);
    if (landingKey) {
      return getServiceLandingPath(landingKey, toLang);
    }
  }

  return pathname.replace(`/${fromLang}`, `/${toLang}`);
}
