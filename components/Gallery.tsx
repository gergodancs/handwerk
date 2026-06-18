import type { Dictionary } from "@/lib/dictionaries";
import { GALLERY_PROJECTS } from "@/lib/images";
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

        <div className="mt-14 space-y-16">
          {dict.gallery.projects.map((project, projectIndex) => {
            const images = GALLERY_PROJECTS[projectIndex];

            return (
              <GalleryProjectRow
                key={project.title}
                title={project.title}
                phases={project.phases.map((phase, phaseIndex) => ({
                  label: phase.label,
                  src: images.phases[phaseIndex].src,
                  alt: images.phases[phaseIndex].alt,
                }))}
              />
            );
          })}
        </div>

        <SectionCTA dict={dict} />
      </div>
    </section>
  );
}
