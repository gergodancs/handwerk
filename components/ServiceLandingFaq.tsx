import type { FaqItem } from "@/lib/service-page-types";

type ServiceLandingFaqProps = {
  title: string;
  items: FaqItem[];
};

export function ServiceLandingFaq({ title, items }: ServiceLandingFaqProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <p className="border-t border-slate-200 px-6 pb-5 pt-4 leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
