"use client";

import { useState } from "react";
import { CONTACT } from "@/data/contact";

const TRIP_TYPES = [
  { id: "12h", label: "12 hrs" },
  { id: "24h", label: "24 hrs" },
  { id: "airport", label: "Airport" },
  { id: "interstate", label: "Interstate" },
];

const CITIES = ["Lagos", "Abuja", "Edo", "Delta", "Rivers"];

export default function BookingWidget() {
  const [tripType, setTripType] = useState("12h");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function handleBook() {
    const tripLabel = TRIP_TYPES.find((t) => t.id === tripType)?.label ?? tripType;
    const parts = [`Hi Cime! I'd like to book a *${tripLabel}* trip`];
    if (city) parts.push(`in *${city}*`);
    if (date) parts.push(`on *${date}*`);
    parts.push("— please help me find a vehicle.");
    const message = encodeURIComponent(parts.join(" "));
    window.open(`${CONTACT.whatsapp.url}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      id="booking"
      className="relative overflow-hidden bg-white/10 backdrop-blur-3xl backdrop-saturate-150 border border-white/25 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] rounded-3xl p-6 w-full max-w-3xl text-left"
    >
      {/* Glass sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 35%, transparent 70%, rgba(255,255,255,0.08) 100%)" }}
      />

      <div className="relative">
        {/* Trip type */}
        <div className="flex gap-2 flex-wrap mb-5 border-b border-white/15 pb-4">
          {TRIP_TYPES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTripType(id)}
              className={`rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-all ${
                tripType === id
                  ? "bg-white text-[#0a0a0a]"
                  : "text-white/85 border border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase tracking-widest text-white/80 font-bold">
              City
            </span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-xl bg-white/10 border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-white/50 transition-colors appearance-none"
            >
              <option value="" className="text-black">Select city</option>
              {CITIES.map((c) => (
                <option key={c} value={c} className="text-black">{c}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase tracking-widest text-white/80 font-bold">
              Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-xl bg-white/10 border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
            />
          </label>

          <button
            onClick={handleBook}
            className="rounded-full bg-white hover:bg-white/85 text-[#0a0a0a] font-bold text-sm px-6 py-2.5 transition-colors whitespace-nowrap"
          >
            Book now →
          </button>
        </div>

        <p className="mt-4 text-[0.65rem] text-white/75 tracking-wide">
          Verified professional drivers &nbsp;·&nbsp; Fuel included on chauffeured trips
        </p>
      </div>
    </div>
  );
}
