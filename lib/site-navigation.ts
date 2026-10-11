import type { Dictionary } from "@/lib/dictionaries";
import type { ServiceLandingKey } from "@/lib/service-routes";

export const HOME_SECTION_NAV = [
  { key: "gallery" as const, href: "#referenzen" },
  { key: "reviews" as const, href: "#bewertungen" },
  { key: "faq" as const, href: "#faq" },
] as const;

export const SERVICE_LANDING_NAV_ORDER: ServiceLandingKey[] = [
  "microcementBathroom",
  "apartmentRefresh",
  "designWalls",
];

export function getServiceLandingNavItems(dict: Dictionary) {
  const byKey = new Map(
    dict.services.items
      .filter((item) => item.landing)
      .map((item) => [item.landing!, item]),
  );

  return SERVICE_LANDING_NAV_ORDER.flatMap((key) => {
    const item = byKey.get(key);
    return item ? [{ key, title: item.title }] : [];
  });
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
  }
}
