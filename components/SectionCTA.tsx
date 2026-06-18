import type { Dictionary } from "@/lib/dictionaries";
import { buildMailtoHref, WHATSAPP_HREF } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { EmailIcon } from "./icons/EmailIcon";

type SectionCTAProps = {
  dict: Dictionary;
};

export function SectionCTA({ dict }: SectionCTAProps) {
  return (
    <div className="mt-10 rounded-2xl border border-emerald-600/30 bg-emerald-600/10 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
      <p className="text-base font-medium leading-relaxed text-slate-800 sm:max-w-xl">
        {dict.sectionCta.text}
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:shrink-0 sm:flex-row">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {dict.sectionCta.whatsapp}
        </a>
        <a
          href={buildMailtoHref()}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400"
        >
          <EmailIcon className="h-4 w-4" />
          {dict.sectionCta.email}
        </a>
      </div>
    </div>
  );
}
