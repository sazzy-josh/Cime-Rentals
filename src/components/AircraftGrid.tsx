"use client";

import { useState } from "react";
import AircraftCard from "@/components/AircraftCard";
import type { Aircraft } from "@/data/aircraft";

const TYPES = [
  { id: "all", label: "All aircraft" },
  { id: "Jet", label: "Jets" },
  { id: "Helicopter", label: "Helicopters" },
] as const;

type TypeId = (typeof TYPES)[number]["id"];

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest transition-all ${
        active
          ? "bg-[#0a0a0a] text-white"
          : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-[#0a0a0a]"
      }`}
    >
      {children}
    </button>
  );
}

export default function AircraftGrid({ aircraft }: { aircraft: Aircraft[] }) {
  const [type, setType] = useState<TypeId>("all");

  const filtered = aircraft.filter((a) => type === "all" || a.type === type);

  return (
    <div>
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          {TYPES.map(({ id, label }) => (
            <FilterButton key={id} active={type === id} onClick={() => setType(id)}>
              {label}
              <span className="ml-1.5 opacity-60 font-normal">
                ({aircraft.filter((a) => id === "all" || a.type === id).length})
              </span>
            </FilterButton>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((a) => (
            <AircraftCard key={a.slug} aircraft={a} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-gray-700 text-sm">No aircraft match those filters.</p>
          <button
            onClick={() => setType("all")}
            className="mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-[#0a0a0a] underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className="mt-12 text-xs text-gray-600 text-center">
        Showing {filtered.length} of {aircraft.length} aircraft
      </p>
    </div>
  );
}
