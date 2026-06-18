import "server-only";

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? "";
const REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN ?? "";

export function hasBusinessProfileCredentials(): boolean {
  return Boolean(CLIENT_ID && CLIENT_SECRET && REFRESH_TOKEN);
}

export async function getGoogleAccessToken(): Promise<string | null> {
  if (!hasBusinessProfileCredentials()) return null;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    if (process.env.NODE_ENV === "development") {
      const error = await response.text();
      console.warn("[google-auth] Token refresh failed:", error);
    }
    return null;
  }

  const data = (await response.json()) as { access_token?: string };
  return data.access_token ?? null;
}
