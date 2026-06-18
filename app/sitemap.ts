import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const routes = ["", "/impressum", "/datenschutz"] as const;

function buildLanguageAlternates(route: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${route}`]),
    ),
    "x-default": `${SITE_URL}/de${route}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.5,
      alternates: {
        languages: buildLanguageAlternates(route),
      },
    })),
  );
}
