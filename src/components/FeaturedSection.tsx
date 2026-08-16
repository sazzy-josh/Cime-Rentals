"use client";

import Image from "next/image";
import Link from "next/link";
import type { FeaturedVehicle } from "@/data/featuredVehicles";

function SeatIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

export default function FeaturedSection({ vehicles }: { vehicles: FeaturedVehicle[] }) {
  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
              Hand-picked for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white">
              Featured vehicles
            </h2>
          </div>
          <a
            href="#fleet"
            className="shrink-0 hidden sm:inline-block text-[0.68rem] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            See all →
          </a>
        </div>
      </div>

      {/* Scroll container — full-bleed on mobile, constrained on desktop */}
      <div className="relative">
        {/* Left/right fade masks on desktop */}
        <div
          aria-hidden
          className="hidden sm:block pointer-events-none absolute left-0 inset-y-0 w-8 z-10"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        <div
          aria-hidden
          className="hidden sm:block pointer-events-none absolute right-0 inset-y-0 w-8 z-10"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div
          className="flex gap-3 overflow-x-auto pb-4 px-5 sm:px-8 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {vehicles.map((car) => (
            <Link
              key={`${car.name}-${car.location}`}
              href={car.slug ? `/vehicles/${car.slug}` : "/#booking"}
              className="snap-start shrink-0 w-[240px] sm:w-[260px] bg-white/4 border border-white/8 flex flex-col group hover:border-[#0055FF]/50 transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative h-[148px] overflow-hidden bg-white/5">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 flex items-center gap-1 text-white/80 text-[0.6rem] font-semibold">
                  <SeatIcon />
                  {car.seats} seats
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[0.55rem] uppercase tracking-widest text-[#0055FF] font-bold mb-1">
                  {car.category}
                </p>
                <h3 className="text-[0.8125rem] font-bold text-white leading-snug flex-1">
                  {car.name}
                </h3>

                <div className="mt-3 pt-3 border-t border-white/8 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-base font-black text-white leading-none">
                      {car.from}
                      <span className="text-[0.65rem] font-normal text-white/35 ml-1">/ {car.per}</span>
                    </p>
                    {car.alt && (
                      <p className="text-[0.6rem] text-white/30 mt-0.5">{car.alt}</p>
                    )}
                  </div>
                  <span className="shrink-0 bg-[#0055FF] text-white text-[0.62rem] font-bold uppercase tracking-widest px-3 py-2">
                    {car.slug ? "View" : "Book"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center sm:hidden">
        <a href="#fleet" className="text-[0.68rem] font-bold uppercase tracking-widest text-white/35 hover:text-white transition-colors">
          See all vehicles →
        </a>
      </div>
    </section>
  );
}
