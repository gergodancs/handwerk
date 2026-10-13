import { buildRobotsTxt } from "@/lib/robots-txt";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const body = buildRobotsTxt();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
