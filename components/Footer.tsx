import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMailtoHref, GOOGLE_MAPS_PLACE_URL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { PhoneIcon } from "./icons/PhoneIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { EmailIcon } from "./icons/EmailIcon";

type FooterProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {dict.footer.impressum}
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={`/${lang}/impressum`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {dict.footer.impressum}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/datenschutz`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {dict.footer.impressumTeaser} {dict.footer.privacyTeaser}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {dict.footer.contactTitle}
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={buildMailtoHref()}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <EmailIcon className="h-4 w-4" />
                  {dict.email.buttonText}
                </a>
              </li>
              {GOOGLE_MAPS_PLACE_URL ? (
                <li>
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Google Maps
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
