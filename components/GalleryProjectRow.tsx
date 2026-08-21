"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = {
  label: string;
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  aspectRatio?: "4/3" | "3/4";
};

type GalleryProjectRowProps = {
  phases: Phase[];
};

function PhaseCard({
  phase,
  className,
  sizes,
  onOpen,
}: {
  phase: Phase;
  className?: string;
  sizes: string;
  onOpen: () => void;
}) {
  const objectFit = phase.objectFit ?? "cover";
  const objectPosition = phase.objectPosition ?? "center center";
  const aspectClass =
    phase.aspectRatio === "3/4" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <figure className={`flex flex-col ${className ?? ""}`}>
      <button
        type="button"
        onClick={onOpen}
        className={`group relative ${aspectClass} w-full overflow-hidden rounded-xl bg-slate-100 text-left ring-offset-2 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600`}
        aria-label={`${phase.label} – Bild vergrößern`}
      >
        <Image
          src={phase.src}
          alt={phase.alt}
          fill
          sizes={sizes}
          quality={92}
          unoptimized={phase.aspectRatio === "3/4"}
          className={`transition-transform duration-300 group-hover:scale-[1.02] ${
            objectFit === "contain" ? "object-contain" : "object-cover"
          }`}
          style={{ objectPosition }}
          loading="lazy"
        />
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/55 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Vergrößern
        </span>
      </button>
      <figcaption className="mt-2 px-1 text-sm font-semibold leading-snug text-slate-800">
        {phase.label}
      </figcaption>
    </figure>
  );
}

function Lightbox({
  phase,
  onClose,
}: {
  phase: Phase;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={phase.label}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
      >
        Schließen
      </button>
      <div
        className="relative h-[85vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={phase.src}
          alt={phase.alt}
          fill
          sizes="100vw"
          quality={95}
          className="object-contain"
          priority
          unoptimized={phase.aspectRatio === "3/4"}
        />
      </div>
      <p className="absolute bottom-4 left-1/2 max-w-3xl -translate-x-1/2 px-4 text-center text-sm font-medium text-white">
        {phase.label}
      </p>
    </div>
  );
}

export function GalleryProjectRow({ phases }: GalleryProjectRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxPhase, setLightboxPhase] = useState<Phase | null>(null);

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
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scroller-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:hidden"
      >
        {phases.map((phase) => (
          <PhaseCard
            key={phase.label}
            phase={phase}
            sizes="85vw"
            className="w-[85vw] max-w-md shrink-0 snap-center"
            onOpen={() => setLightboxPhase(phase)}
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
        className={`hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 ${
          phases.length === 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {phases.map((phase) => (
          <PhaseCard
            key={phase.label}
            phase={phase}
            sizes="(max-width: 1024px) 25vw, 280px"
            onOpen={() => setLightboxPhase(phase)}
          />
        ))}
      </div>

      {lightboxPhase ? (
        <Lightbox phase={lightboxPhase} onClose={() => setLightboxPhase(null)} />
      ) : null}
    </div>
  );
}
