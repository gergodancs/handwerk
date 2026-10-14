import { NextRequest, NextResponse } from "next/server";
import {
  getBioRefreshPath,
  getBioRefreshSubSlug,
  isBioRefreshRoute,
} from "./lib/bio-refresh-routes";
import { defaultLocale, isValidLocale, type Locale } from "./lib/i18n";
import { findLandingKeyBySlug } from "./lib/service-routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Legacy URLs (e.g. old site or GBP) – no /home route in this app
  if (pathname === "/home" || pathname === "/home/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308);
  }
  if (pathname === "/de/home" || pathname === "/de/home/") {
    return NextResponse.redirect(new URL("/de", request.url), 308);
  }
  if (pathname === "/en/home" || pathname === "/en/home/") {
    return NextResponse.redirect(new URL("/en", request.url), 308);
  }

  const pathnameLocale = pathname.split("/")[1];

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308);
  }

  if (!isValidLocale(pathnameLocale)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
      308,
    );
  }

  const lang = pathnameLocale as Locale;
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 3) {
    const [, serviceSlug, subSlug] = pathSegments;
    const isBioSubSlug =
      subSlug === getBioRefreshSubSlug("de") ||
      subSlug === getBioRefreshSubSlug("en");

    if (
      isBioSubSlug &&
      findLandingKeyBySlug(serviceSlug) === "apartmentRefresh" &&
      !isBioRefreshRoute(lang, serviceSlug, subSlug)
    ) {
      return NextResponse.redirect(
        new URL(getBioRefreshPath(lang), request.url),
        308,
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
