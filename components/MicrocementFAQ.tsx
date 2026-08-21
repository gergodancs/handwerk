import type { Dictionary } from "@/lib/dictionaries";

type MicrocementFAQProps = {
  dict: Dictionary;
  embedded?: boolean;
};

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MicrocementFAQ({ dict, embedded = false }: MicrocementFAQProps) {
  return (
    <section
      id="mikrocement-faq"
      className={
        embedded
          ? "mt-16 border-t border-slate-200 pt-16"
          : "border-t border-slate-200 bg-slate-100 px-4 py-16 sm:px-6 sm:py-20"
      }
    >
      <div className={embedded ? "" : "mx-auto max-w-6xl"}>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {dict.microcementFaq.title}
        </h2>

        <div className="mt-10 max-w-3xl space-y-3">
          {dict.microcementFaq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                  {item.question}
                </span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-100 px-6 pb-5 pt-4 sm:px-8 sm:pb-6">
                <p className="leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
