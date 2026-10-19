import type { Dictionary } from "@/lib/dictionaries";
import { SERVICE_LANDING_KEYS, type ServiceLandingKey } from "@/lib/service-routes";

export const HOME_SECTION_NAV = [
  { key: "gallery" as const, href: "#referenzen" },
  { key: "reviews" as const, href: "#bewertungen" },
  { key: "faq" as const, href: "#faq" },
] as const;

export function getServiceLandingNavItems(dict: Dictionary) {
  const byKey = new Map(
    dict.services.items
      .filter((item) => item.landing)
      .map((item) => [item.landing!, item]),
  );

  return SERVICE_LANDING_KEYS.flatMap((key) => {
    const item = byKey.get(key);
    return item ? [{ key, title: item.title }] : [];
  });
}

export function getBioPaintingNavLabel(dict: Dictionary): string {
  return dict.header.nav.bioPaintingLink;
}

export function getServiceLandingChipLabel(
  dict: Dictionary,
  key: ServiceLandingKey,
): string {
  switch (key) {
    case "microcementBathroom":
      return dict.footer.microcementBathroomLink;
    case "apartmentRefresh":
      return dict.footer.apartmentRefreshLink;
    case "designWalls":
      return dict.footer.designWallsLink;
    case "allrounderMontage":
      return dict.footer.allrounderMontageLink;
  }
}
