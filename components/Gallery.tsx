import type { Dictionary } from "@/lib/dictionaries";
import { GALLERY_PHASES } from "@/lib/images";
import { GalleryProjectRow } from "./GalleryProjectRow";
import { SectionCTA } from "./SectionCTA";

type GalleryProps = {
  dict: Dictionary;
};

export function Gallery({ dict }: GalleryProps) {
  return (
    <section
      id="referenzen"
      className="bg-slate-100 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.gallery.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          {dict.gallery.subtitle}
        </p>

        <div className="mt-14">
          <GalleryProjectRow
            phases={dict.gallery.phases.map((phase, phaseIndex) => ({
              label: phase.label,
              ...GALLERY_PHASES[phaseIndex],
            }))}
          />
        </div>

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
