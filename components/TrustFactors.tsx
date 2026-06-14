import type { Dictionary } from "@/lib/dictionaries";

const TRUST_ICONS = [
  (
    <svg key="precision" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="clean" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="pricing" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.34 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
];

type TrustFactorsProps = {
  dict: Dictionary;
};

export function TrustFactors({ dict }: TrustFactorsProps) {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dict.trust.title}
        </h2>

        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {dict.trust.items.map((item, index) => (
            <li key={item.title} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/15 text-emerald-400">
                {TRUST_ICONS[index]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
