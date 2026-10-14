import { getBioRefreshSubSlug } from "./bio-refresh-routes";
import { isValidLocale, type Locale } from "./i18n";
import {
  findLandingKeyBySlug,
  getServiceLandingSlug,
} from "./service-routes";

const STATIC_LOCALIZED_SEGMENTS = new Set(["impressum", "datenschutz"]);

function splitPathname(pathname: string): { rest: string[] } {
  const clean =
    pathname.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const parts = clean.split("/").filter(Boolean);

  if (parts.length > 0 && isValidLocale(parts[0])) {
    return { rest: parts.slice(1) };
  }

  return { rest: parts };
}

function translateRestSegments(rest: string[], toLang: Locale): string[] {
  if (rest.length === 0) {
    return [];
  }

  if (rest.length === 1) {
    const [segment] = rest;
    if (STATIC_LOCALIZED_SEGMENTS.has(segment)) {
      return [segment];
    }
    const landingKey = findLandingKeyBySlug(segment);
    if (landingKey) {
      return [getServiceLandingSlug(landingKey, toLang)];
    }
    return rest;
  }

  if (rest.length === 2) {
    const [serviceSlug, subSlug] = rest;
    const landingKey = findLandingKeyBySlug(serviceSlug);
    const isBioSubSlug =
      subSlug === getBioRefreshSubSlug("de") ||
      subSlug === getBioRefreshSubSlug("en");

    if (landingKey === "apartmentRefresh" && isBioSubSlug) {
      return [
        getServiceLandingSlug("apartmentRefresh", toLang),
        getBioRefreshSubSlug(toLang),
      ];
    }
  }

  return rest;
}

function buildLocalizedPath(toLang: Locale, rest: string[]): string {
  const translated = translateRestSegments(rest, toLang);
  if (translated.length === 0) {
    return `/${toLang}`;
  }
  return `/${toLang}/${translated.join("/")}`;
}

/**
 * Maps the current pathname to the equivalent route in `toLang`.
 * Infers the page from path segments (DE or EN slugs) — does not rely on a
 * separate locale prop, so slug translation still works when they disagree.
 */
export function resolveLocalizedPath(pathname: string, toLang: Locale): string {
  const { rest } = splitPathname(pathname);
  return buildLocalizedPath(toLang, rest);
}
