"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

type Phase = {
  label: string;
  src: string;
  alt: string;
};

type GalleryProjectRowProps = {
  title: string;
  phases: Phase[];
};

function PhaseCard({
  src,
  alt,
  label,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  sizes: string;
}) {
  return (
    <figure
      className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2.5 backdrop-blur-sm">
        <span className="text-sm font-semibold leading-snug text-white">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}

export function GalleryProjectRow({ title, phases }: GalleryProjectRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth ?? 1;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), phases.length - 1));
  }, [phases.length]);

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scroller-hide -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:hidden"
      >
        {phases.map((phase) => (
          <PhaseCard
            key={phase.label}
            src={phase.src}
            alt={phase.alt}
            label={phase.label}
            sizes="85vw"
            className="w-[85vw] max-w-md shrink-0 snap-center"
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
        {phases.map((phase, index) => (
          <span
            key={phase.label}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-6 bg-emerald-600"
                : "w-2 bg-slate-300"
            }`}
            aria-hidden="true"
          />
        ))}
        <span className="ml-2 text-xs font-medium text-slate-500">
          {activeIndex + 1}/{phases.length}
        </span>
      </div>

      <div
        className={`mt-6 hidden gap-4 sm:grid ${
          phases.length > 4
            ? "sm:grid-cols-2 lg:grid-cols-5"
            : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {phases.map((phase) => (
          <PhaseCard
            key={phase.label}
            src={phase.src}
            alt={phase.alt}
            label={phase.label}
            sizes="(max-width: 1024px) 25vw, 280px"
          />
        ))}
      </div>
    </div>
  );
}
