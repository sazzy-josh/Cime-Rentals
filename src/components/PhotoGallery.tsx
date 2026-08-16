"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export default function PhotoGallery({
  name,
  photos,
}: {
  name: string;
  photos: string[]; // gallery photos (hero excluded)
}) {
  const [open, setOpen] = useState<number | null>(null);
  const touchStartX = useRef(0);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handle);
    return () => {
      window.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  if (photos.length === 0) return null;

  return (
    <>
      {/* ── Photo grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            className="relative aspect-[4/3] bg-gray-100 overflow-hidden group focus-visible:outline-2 focus-visible:outline-[#0055FF]"
          >
            <Image
              src={photo}
              alt={`${name} — photo ${i + 2}`}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} — photo ${open + 1} of ${photos.length}`}
          className="fixed inset-0 z-[200] bg-black/96 flex flex-col select-none"
          onClick={close}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
          }}
        >
          {/* Top bar */}
          <div
            className="shrink-0 flex items-center justify-between px-5 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/40 text-sm tabular-nums font-medium">
              {open + 1} <span className="text-white/20">/</span> {photos.length}
            </span>
            <p className="absolute left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-widest font-bold hidden sm:block">
              {name}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="p-2 -mr-2 text-white/40 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main image */}
          <div
            className="flex-1 relative flex items-center justify-center px-12 sm:px-20 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={photos[open]}
                alt={`${name} — photo ${open + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Prev / Next */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-white/8 hover:bg-white/16 border border-white/10 text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-white/8 hover:bg-white/16 border border-white/10 text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Thumbnail strip */}
          {photos.length > 1 && (
            <div
              className="shrink-0 flex gap-1.5 px-5 pb-5 pt-3 overflow-x-auto justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpen(i)}
                  className={`shrink-0 relative w-14 h-10 overflow-hidden transition-all ${
                    i === open
                      ? "ring-2 ring-[#0055FF] opacity-100 scale-105"
                      : "opacity-35 hover:opacity-65"
                  }`}
                >
                  <Image src={photo} alt="" fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
