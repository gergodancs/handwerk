import type { Dictionary } from "@/lib/dictionaries";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { PhoneIcon } from "./icons/PhoneIcon";

type FloatingCTAProps = {
  dict: Dictionary;
};

export function FloatingCTA({ dict }: FloatingCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {dict.floatingCta.whatsapp}
        </a>

        <a
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-500"
        >
          <PhoneIcon className="h-5 w-5" />
          {dict.floatingCta.call}
        </a>
      </div>
    </div>
  );
}
