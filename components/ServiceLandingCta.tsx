import type { ServiceLandingPageDict } from "@/lib/service-page-types";
import { buildMailtoHref, buildWhatsAppHref } from "@/lib/constants";
import { EmailIcon } from "./icons/EmailIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

type ServiceLandingCtaProps = {
  cta: ServiceLandingPageDict["cta"];
  whatsappPrefill: string;
};

export function ServiceLandingCta({
  cta,
  whatsappPrefill,
}: ServiceLandingCtaProps) {
  return (
    <section className="rounded-2xl border border-emerald-600/30 bg-emerald-600/10 px-6 py-8 sm:px-10">
      <h2 className="text-xl font-bold text-slate-900">{cta.title}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">{cta.text}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildWhatsAppHref(whatsappPrefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {cta.whatsapp}
        </a>
        <a
          href={buildMailtoHref()}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400"
        >
          <EmailIcon className="h-4 w-4" />
          {cta.email}
        </a>
      </div>
    </section>
  );
}
