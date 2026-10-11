import type { Dictionary } from "./dictionaries";
import type { Locale } from "./i18n";
import type { FaqItem } from "./service-page-types";
import {
  getServiceLandingPath,
  type ServiceLandingKey,
} from "./service-routes";

export function getServiceLandingPageDict(
  dict: Dictionary,
  key: ServiceLandingKey,
) {
  switch (key) {
    case "designWalls":
      return dict.designWallsPage;
    case "apartmentRefresh":
      return dict.apartmentRefreshPage;
    case "microcementBathroom":
      return dict.microcementBathroomPage;
  }
}

export function getServiceLandingFaqItems(
  dict: Dictionary,
  key: ServiceLandingKey,
): FaqItem[] {
  if (key === "microcementBathroom") {
    return dict.microcementFaq.items;
  }
  if (key === "designWalls") {
    return dict.designWallsPage.faq;
  }
  return dict.apartmentRefreshPage.faq;
}

export function resolveServiceLandingUrl(
  lang: Locale,
  key: ServiceLandingKey,
): string {
  return getServiceLandingPath(key, lang);
}
