import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { OWNER_NAME } from "@/lib/site";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
            <Image
              src="/images/owner-placeholder.svg"
              alt={dict.about.imageAlt}
              fill
              sizes="280px"
              className="object-cover"
              priority={false}
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-emerald-400">
            {dict.about.role}
          </p>
          <p className="text-center text-lg font-semibold text-white">
            {OWNER_NAME}
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.about.title}
          </h2>
          <div className="mt-6 space-y-4">
            {dict.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lg leading-relaxed text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
