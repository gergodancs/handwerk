import type { Dictionary } from "@/lib/dictionaries";

type HomeAudienceFitProps = {
  dict: Dictionary;
};

export function HomeAudienceFit({ dict }: HomeAudienceFitProps) {
  const section = dict.homeAudience;

  return (
    <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {section.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {section.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.columns.map((column) => (
            <article
              key={column.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-emerald-800">
                {column.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {column.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
