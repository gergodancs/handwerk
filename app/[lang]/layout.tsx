import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { isValidLocale, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
