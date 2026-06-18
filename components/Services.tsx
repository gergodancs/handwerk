import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionCTA } from "./SectionCTA";
import { SERVICE_IMAGES } from "@/lib/images";

type ServicesProps = {
  dict: Dictionary;
};

export function Services({ dict }: ServicesProps) {
  return (
    <section
      id="leistungen"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.services.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const image = SERVICE_IMAGES[index];

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] bg-slate-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
