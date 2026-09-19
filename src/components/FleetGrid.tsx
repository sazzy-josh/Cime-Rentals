"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckAvailabilityButton from "@/components/CheckAvailabilityButton";
import type { Vehicle } from "@/data/vehicles";
import { CONTACT } from "@/data/contact";

const FILTERS = [
  { id: "all", label: "All vehicles" },
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "luxury", label: "Luxury" },
  { id: "bus", label: "Bus" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function SeatIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

export default function FleetGrid({ vehicles }: { vehicles: Vehicle[] }) {
  const [active, setActive] = useState<FilterId>("all");

  const filtered =
    active === "all" ? vehicles : vehicles.filter((v) => v.group === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.filter(
          ({ id }) => id === "all" || vehicles.some((v) => v.group === id)
        ).map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id as FilterId)}
            className={`px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest transition-all ${
              active === id
                ? "bg-[#0a0a0a] text-white"
                : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-[#0a0a0a]"
            }`}
          >
            {label}
            {id !== "all" && (
              <span className="ml-1.5 opacity-60 font-normal">
                ({vehicles.filter((v) => v.group === id).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
        {filtered.map((car) => {
          const msg = encodeURIComponent(
            `Hi Cime! I'd like to enquire about the *${car.name}*. Please share availability and pricing.`
          );
          const href = car.slug ? `/vehicles/${car.slug}` : `${CONTACT.whatsapp.url}?text=${msg}`;
          const external = !car.slug;
          return (
          <div
            key={`${car.name}-${car.location}`}
            className="group relative bg-white hover:bg-gray-50 transition-colors duration-200 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52 bg-gray-100 overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {car.tag && (
                <span className="absolute top-3 left-3 bg-[#0a0a0a] text-white text-[0.58rem] font-black uppercase tracking-widest px-2 py-1">
                  {car.tag}
                </span>
              )}

              <span className="absolute bottom-3 left-3 flex items-center gap-1 text-white/90 text-[0.65rem] font-semibold">
                <SeatIcon />
                {car.seats} seats
              </span>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-[0.58rem] uppercase tracking-widest text-[#0a0a0a] font-bold mb-1">
                {car.category}
              </p>
              <h3 className="font-bold text-[#0a0a0a] leading-snug text-[0.9375rem] flex-1">
                {/* Stretched link: the whole card opens the vehicle, the button stays on top */}
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="after:absolute after:inset-0"
                >
                  {car.name}
                </Link>
              </h3>

              <CheckAvailabilityButton
                name={car.name}
                className="relative z-10 mt-4 block w-full bg-[#0a0a0a] hover:opacity-75 text-white text-center text-[0.68rem] font-bold uppercase tracking-widest px-4 py-3 transition-opacity"
              />
            </div>
          </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-gray-600 text-center">
        Showing {filtered.length} of {vehicles.length} vehicles
      </p>
    </div>
  );
}
