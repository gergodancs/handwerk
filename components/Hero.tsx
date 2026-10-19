import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { buildMailtoHref, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { HERO_BACKGROUND } from "@/lib/images";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { EmailIcon } from "./icons/EmailIcon";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-200 px-4 py-20 sm:px-6 sm:py-28">
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[68%_center]"
        aria-hidden="true"
      />

      {/* Scrim only behind copy (left); right side stays bright so Limewash is visible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/92 from-0% via-slate-950/70 via-[48%] to-transparent to-[78%] sm:via-slate-950/50 sm:via-[40%] sm:to-[58%]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/35 to-transparent sm:h-28"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {dict.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {dict.hero.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {dict.hero.subtitleSecondary}
        </p>

        <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {dict.hero.trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-sm font-medium text-emerald-300"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 shrink-0 text-emerald-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-500"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.hero.ctaWhatsApp}
          </a>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-600 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800/50"
          >
            <PhoneIcon className="h-5 w-5" />
            {dict.hero.ctaCall}
          </a>

          <a
            href={buildMailtoHref()}
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-600 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800/50"
          >
            <EmailIcon className="h-5 w-5" />
            {dict.email.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
