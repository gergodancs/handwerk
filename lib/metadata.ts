import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import type { Locale } from "./i18n";
import { OWNER_NAME, SITE_NAME, SITE_URL } from "./site";

function buildAlternates(lang: Locale, slug?: string) {
  const suffix = slug ? `/${slug}` : "";

  return {
    canonical: `/${lang}${suffix}`,
    languages: {
      de: `/de${suffix}`,
      en: `/en${suffix}`,
      "x-default": `/de${suffix}`,
    },
  };
}

function baseMetadata(lang: Locale): Partial<Metadata> {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(SITE_URL),
    authors: [{ name: OWNER_NAME, url: SITE_URL }],
    creator: OWNER_NAME,
    publisher: SITE_NAME,
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    formatDetection: {
      telephone: true,
      email: true,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "content-language": lang === "de" ? "de-AT" : "en",
      "geo.region": "AT-9",
      "geo.placename": "Wien",
    },
  };
}

function buildLegalOpenGraph(
  lang: Locale,
  title: string,
  description: string,
  path: string,
): Metadata["openGraph"] {
  return {
    title,
    description,
    url: `${SITE_URL}/${lang}/${path}`,
    siteName: SITE_NAME,
    locale: lang === "de" ? "de_AT" : "en_US",
    type: "website",
    images: [
      {
        url: `/${lang}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  };
}

export function buildImpressumMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);

  return {
    ...baseMetadata(lang),
    title: dict.impressumPage.metaTitle,
    description: dict.impressumPage.metaDescription,
    alternates: buildAlternates(lang, "impressum"),
    openGraph: buildLegalOpenGraph(
      lang,
      dict.impressumPage.metaTitle,
      dict.impressumPage.metaDescription,
      "impressum",
    ),
    twitter: {
      card: "summary_large_image",
      title: dict.impressumPage.metaTitle,
      description: dict.impressumPage.metaDescription,
      images: [`/${lang}/opengraph-image`],
    },
  };
}

export function buildPrivacyMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);

  return {
    ...baseMetadata(lang),
    title: dict.privacyPage.metaTitle,
    description: dict.privacyPage.metaDescription,
    alternates: buildAlternates(lang, "datenschutz"),
    openGraph: buildLegalOpenGraph(
      lang,
      dict.privacyPage.metaTitle,
      dict.privacyPage.metaDescription,
      "datenschutz",
    ),
    twitter: {
      card: "summary_large_image",
      title: dict.privacyPage.metaTitle,
      description: dict.privacyPage.metaDescription,
      images: [`/${lang}/opengraph-image`],
    },
  };
}

export function buildPageMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);

  return {
    ...baseMetadata(lang),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: buildAlternates(lang),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: SITE_NAME,
      locale: lang === "de" ? "de_AT" : "en_US",
      alternateLocale: [lang === "de" ? "en_US" : "de_AT"],
      type: "website",
      images: [
        {
          url: `/${lang}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/${lang}/opengraph-image`],
    },
    category: "construction",
  };
}
