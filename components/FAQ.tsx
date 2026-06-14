import type { Dictionary } from "@/lib/dictionaries";
import { SectionCTA } from "./SectionCTA";

type FAQProps = {
  dict: Dictionary;
};

export function FAQ({ dict }: FAQProps) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.faq.title}
        </h2>

        <dl className="mt-12 max-w-3xl space-y-4">
          {dict.faq.items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:px-8 sm:py-6"
            >
              <dt className="text-lg font-semibold leading-snug text-slate-900">
                {item.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-slate-600">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
