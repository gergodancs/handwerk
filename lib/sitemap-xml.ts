import { locales, type Locale } from "@/lib/i18n";
import { getBioRefreshSubSlug } from "@/lib/bio-refresh-routes";
import {
  SERVICE_LANDING_KEYS,
  getServiceLandingSlug,
} from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site";

type SitemapPageGroup = {
  slugs: Record<Locale, string>;
  changeFrequency: string;
  priority: string;
};

const STATIC_SITEMAP_GROUPS: SitemapPageGroup[] = [
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
];

const BIO_REFRESH_SITEMAP_GROUP: SitemapPageGroup = {
  slugs: {
    de: `/${getServiceLandingSlug("apartmentRefresh", "de")}/${getBioRefreshSubSlug("de")}`,
    en: `/${getServiceLandingSlug("apartmentRefresh", "en")}/${getBioRefreshSubSlug("en")}`,
  },
  changeFrequency: "weekly",
  priority: "0.88",
};

/** Specialist landings – bio sub-page directly after apartment refresh */
const SERVICE_LANDING_SITEMAP_GROUPS: SitemapPageGroup[] =
  SERVICE_LANDING_KEYS.flatMap((key) => {
    const group: SitemapPageGroup = {
      slugs: {
        de: `/${getServiceLandingSlug(key, "de")}`,
        en: `/${getServiceLandingSlug(key, "en")}`,
      },
      changeFrequency: "weekly",
      priority: "0.9",
    };

    if (key === "apartmentRefresh") {
      return [group, BIO_REFRESH_SITEMAP_GROUP];
    }

    return [group];
  });

const SITEMAP_GROUPS: SitemapPageGroup[] = [
  ...STATIC_SITEMAP_GROUPS,
  ...SERVICE_LANDING_SITEMAP_GROUPS,
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
