import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ApartmentRefreshPageContent } from "@/components/ApartmentRefreshPageContent";
import { DesignWallsPageContent } from "@/components/DesignWallsPageContent";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { buildServiceLandingMetadata } from "@/lib/metadata";
import {
  findLandingKeyBySlug,
  getApartmentRefreshSlug,
  getDesignWallsSlug,
  isServiceSlugForLocale,
  resolveServiceLandingPath,
} from "@/lib/service-routes";

type PageProps = {
  params: Promise<{ lang: string; serviceSlug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((lang) => [
    { lang, serviceSlug: getDesignWallsSlug(lang) },
    { lang, serviceSlug: getApartmentRefreshSlug(lang) },
  ]);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, serviceSlug } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const key = findLandingKeyBySlug(serviceSlug);
  if (!key || !isServiceSlugForLocale(lang as Locale, key, serviceSlug)) {
    return {};
  }

  return buildServiceLandingMetadata(lang as Locale, key);
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { lang, serviceSlug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const key = findLandingKeyBySlug(serviceSlug);
  if (!key) {
    notFound();
  }

  if (!isServiceSlugForLocale(lang, key, serviceSlug)) {
    redirect(resolveServiceLandingPath(lang, key));
  }

  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} serviceLanding={key} />
      <Header lang={lang} dict={dict} />
      <main className="pb-24 md:pb-0">
        {key === "designWalls" ? (
          <DesignWallsPageContent lang={lang} dict={dict} />
        ) : (
          <ApartmentRefreshPageContent lang={lang} dict={dict} />
        )}
      </main>
      <Footer lang={lang} dict={dict} />
      <FloatingCTA dict={dict} />
    </>
  );
}
