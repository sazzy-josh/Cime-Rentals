"use client";

import Image from "next/image";
import Link from "next/link";
import CheckAvailabilityButton from "@/components/CheckAvailabilityButton";
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
              Hand-picked for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#0a0a0a]">
              Featured vehicles
            </h2>
          </div>
          <Link
            href="/car-rentals#rentals"
            className="shrink-0 hidden sm:inline-block text-[0.68rem] font-bold uppercase tracking-widest text-gray-600 hover:text-[#0a0a0a] transition-colors"
          >
            See all →
          </Link>
        </div>
      </div>

      {/* Scroll container — full-bleed on mobile, constrained on desktop */}
      <div className="relative">
        {/* Left/right fade masks on desktop */}
        <div
          aria-hidden
          className="hidden sm:block pointer-events-none absolute left-0 inset-y-0 w-8 z-10"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
        <div
          aria-hidden
          className="hidden sm:block pointer-events-none absolute right-0 inset-y-0 w-8 z-10"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />

        <div
          className="flex gap-3 overflow-x-auto pb-4 px-5 sm:px-8 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {vehicles.map((car) => (
            <div
              key={`${car.name}-${car.location}`}
              className="snap-start shrink-0 relative w-[240px] sm:w-[260px] bg-[#f7f7f7] border border-black/8 flex flex-col group hover:bg-white hover:border-black/20 transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative h-[148px] overflow-hidden bg-gray-100">
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
                <p className="text-[0.55rem] uppercase tracking-widest text-[#0a0a0a] font-bold mb-1">
                  {car.category}
                </p>
                <h3 className="text-[0.8125rem] font-bold text-[#0a0a0a] leading-snug flex-1">
                  {/* Stretched link: the whole card opens the vehicle, the button stays on top */}
                  <Link
                    href={car.slug ? `/vehicles/${car.slug}` : "/car-rentals#booking"}
                    className="after:absolute after:inset-0"
                  >
                    {car.name}
                  </Link>
                </h3>

                <CheckAvailabilityButton
                  name={car.name}
                  className="relative z-10 mt-3 block w-full bg-[#0a0a0a] hover:opacity-75 text-white text-center text-[0.62rem] font-bold uppercase tracking-widest px-3 py-2.5 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center sm:hidden">
        <Link href="/car-rentals#rentals" className="text-[0.68rem] font-bold uppercase tracking-widest text-gray-600 hover:text-[#0a0a0a] transition-colors">
          See all vehicles →
        </Link>
      </div>
    </section>
  );
}
