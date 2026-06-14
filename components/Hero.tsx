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
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-28">
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center brightness-[0.88] saturate-[1.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/72 to-slate-950/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-slate-950/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {dict.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {dict.hero.subtitle}
        </p>

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
            href={buildMailtoHref(dict.email.subject, dict.email.body)}
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
