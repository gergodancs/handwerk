"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

type GalleryImage = {
  src: string;
  alt: string;
};

type MicrocementLandingGalleryProps = {
  lang: Locale;
  images: readonly GalleryImage[];
};

function Lightbox({
  image,
  lang,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  image: GalleryImage;
  lang: Locale;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const closeLabel = lang === "de" ? "Schließen" : "Close";
  const prevLabel = lang === "de" ? "Vorheriges Bild" : "Previous image";
  const nextLabel = lang === "de" ? "Nächstes Bild" : "Next image";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasPrev) onPrev();
      if (event.key === "ArrowRight" && hasNext) onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
      >
        {closeLabel}
      </button>

      {hasPrev ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-lg text-white transition-colors hover:bg-white/20 sm:left-4"
          aria-label={prevLabel}
        >
          ‹
        </button>
      ) : null}

      {hasNext ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-lg text-white transition-colors hover:bg-white/20 sm:right-14"
          aria-label={nextLabel}
        >
          ›
        </button>
      ) : null}

      <div
        className="relative h-[85vh] w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          unoptimized
          className="object-contain"
          priority
        />
      </div>

      <p className="absolute bottom-4 left-1/2 max-w-3xl -translate-x-1/2 px-4 text-center text-sm font-medium text-white">
        {image.alt}
      </p>
    </div>
  );
}

export function MicrocementLandingGallery({
  lang,
  images,
}: MicrocementLandingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : Math.max(0, current - 1),
    );
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : Math.min(images.length - 1, current + 1),
    );
  }, [images.length]);

  const enlargeLabel = lang === "de" ? "Vergrößern" : "Enlarge";
  const openAria =
    lang === "de" ? "Bild in voller Größe anzeigen" : "View full-size image";

  const activeImage =
    activeIndex !== null ? images[activeIndex] ?? null : null;

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure key={image.src} className="flex flex-col">
            <button
              type="button"
              onClick={() => openAt(index)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left ring-offset-2 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label={`${image.alt} – ${openAria}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/55 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {enlargeLabel}
              </span>
            </button>
          </figure>
        ))}
      </div>

      {activeImage && activeIndex !== null ? (
        <Lightbox
          image={activeImage}
          lang={lang}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < images.length - 1}
        />
      ) : null}
    </>
  );
}
