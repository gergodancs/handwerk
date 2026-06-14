import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { TrustFactors } from "@/components/TrustFactors";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  return buildPageMetadata(lang as Locale);
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} page="home" />
      <Header lang={lang} dict={dict} />

      <main className="pb-24 md:pb-0">
        <Hero dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Reviews dict={dict} lang={lang} />
        <Gallery dict={dict} />
        <TrustFactors dict={dict} />
        <FAQ dict={dict} />
      </main>

      <Footer lang={lang} dict={dict} />
      <FloatingCTA dict={dict} />
    </>
  );
}
