import Image from "next/image";
import Link from "next/link";
import { getTailNumber, formatRange, type Aircraft } from "@/data/aircraft";

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

function RangeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a15 15 0 0 1 0 18M3 12h18" />
    </svg>
  );
}

export default function AircraftCard({ aircraft }: { aircraft: Aircraft }) {
  const [photo] = aircraft.images;
  const tail = getTailNumber(aircraft);

  return (
    <Link href={`/fleet/${aircraft.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={photo}
          alt={`${aircraft.manufacturer} ${aircraft.model}`}
          fill
          className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <p className="mt-4 text-[0.6rem] uppercase tracking-[0.18em] text-gray-600 font-bold">
        {aircraft.manufacturer}
        {tail && <span className="text-gray-500"> &nbsp;·&nbsp; {tail}</span>}
      </p>
      <h3 className="mt-1 font-bold text-[#0a0a0a] leading-snug text-base group-hover:opacity-70 transition-opacity">
        {aircraft.model}
      </h3>

      <div className="mt-3 flex items-center gap-4 text-[0.75rem] text-gray-700">
        <span className="flex items-center gap-1.5">
          <SeatIcon />
          {aircraft.seats} seats
        </span>
        <span className="flex items-center gap-1.5">
          <TagIcon />
          {aircraft.classification}
        </span>
      </div>

      <div className="mt-1.5 flex items-center gap-4 text-[0.75rem] text-gray-700">
        <span className="flex items-center gap-1.5">
          <RangeIcon />
          {formatRange(aircraft)} range
        </span>
      </div>

      <span className="mt-4 inline-flex items-center justify-center rounded-full border border-black/15 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white text-[#0a0a0a] font-bold text-[0.7rem] uppercase tracking-widest px-5 py-2.5 transition-colors">
        View details →
      </span>
    </Link>
  );
}
