import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const routes = [
  { path: "", changeFrequency: "weekly", priority: "1.0" },
  { path: "/impressum", changeFrequency: "monthly", priority: "0.5" },
  { path: "/datenschutz", changeFrequency: "monthly", priority: "0.5" },
] as const;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml(lastModified = new Date()): string {
  const lastmod = lastModified.toISOString();

  const urlEntries = routes.flatMap((route) =>
    locales.map(
      (lang) => `  <url>
    <loc>${escapeXml(`${SITE_URL}/${lang}${route.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    ),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>`;
}
