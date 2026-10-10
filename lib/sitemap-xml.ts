import { locales, type Locale } from "@/lib/i18n";
import {
  getApartmentRefreshSlug,
  getDesignWallsSlug,
} from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site";

type SitemapPageGroup = {
  slugs: Record<Locale, string>;
  changeFrequency: string;
  priority: string;
};

const SITEMAP_GROUPS: SitemapPageGroup[] = [
  {
    slugs: { de: "", en: "" },
    changeFrequency: "weekly",
    priority: "1.0",
  },
  {
    slugs: { de: "/impressum", en: "/impressum" },
    changeFrequency: "monthly",
    priority: "0.5",
  },
  {
    slugs: { de: "/datenschutz", en: "/datenschutz" },
    changeFrequency: "monthly",
    priority: "0.5",
  },
  {
    slugs: {
      de: `/${getDesignWallsSlug("de")}`,
      en: `/${getDesignWallsSlug("en")}`,
    },
    changeFrequency: "monthly",
    priority: "0.85",
  },
  {
    slugs: {
      de: `/${getApartmentRefreshSlug("de")}`,
      en: `/${getApartmentRefreshSlug("en")}`,
    },
    changeFrequency: "monthly",
    priority: "0.85",
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function hreflangForLocale(locale: Locale): string {
  return locale === "de" ? "de-AT" : "en";
}

function buildAlternateLinks(group: SitemapPageGroup): string {
  const links = locales.map((locale) => {
    const href = `${SITE_URL}/${locale}${group.slugs[locale]}`;
    return `    <xhtml:link rel="alternate" hreflang="${hreflangForLocale(locale)}" href="${escapeXml(href)}" />`;
  });

  const xDefault = `${SITE_URL}/de${group.slugs.de}`;
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`,
  );

  return links.join("\n");
}

export function buildSitemapXml(lastModified = new Date()): string {
  const lastmod = lastModified.toISOString();

  const urlEntries = SITEMAP_GROUPS.flatMap((group) =>
    locales.map((locale) => {
      const loc = `${SITE_URL}/${locale}${group.slugs[locale]}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${buildAlternateLinks(group)}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${group.changeFrequency}</changefreq>
    <priority>${group.priority}</priority>
  </url>`;
    }),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join("\n")}
</urlset>`;
}
