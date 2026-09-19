"use client";

import { useState } from "react";
import Image from "next/image";
import AvailabilityModal from "@/components/AvailabilityModal";
import type { FleetVehicle } from "@/data/fleetVehicles";

function SeatIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24H4a1 1 0 0 0-1 1v5.59a2 2 0 0 0 .59 1.41l9.58 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83Z" />
      <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FleetCard({ car }: { car: FleetVehicle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <h3 className="mt-4 font-bold text-[#0a0a0a] leading-snug text-base">{car.name}</h3>

      <div className="mt-3 flex items-center gap-4 text-[0.75rem] text-gray-700">
        <span className="flex items-center gap-1.5">
          <SeatIcon />
          {car.seats} seats
        </span>
        <span className="flex items-center gap-1.5">
          <TagIcon />
          {car.category}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={() => setOpen(true)}
          className="w-full rounded-full border border-black/15 hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white text-[#0a0a0a] font-bold text-[0.7rem] uppercase tracking-widest px-5 py-2.5 transition-colors"
        >
          Check availability
        </button>
      </div>

      {open && (
        <AvailabilityModal
          vehicleName={car.name}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
