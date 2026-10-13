import { SITE_URL, SITE_WWW_HOST } from "@/lib/site";

/** Plain robots.txt (includes experimental Llms: line for /llms.txt). */
export function buildRobotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Host: ${SITE_WWW_HOST}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Llms: ${SITE_URL}/llms.txt`,
    "",
  ].join("\n");
}
