"use client";

import { useState } from "react";
import { CONTACT } from "@/data/contact";

const TRIP_TYPES = [
  { id: "airport", label: "Airport" },
  { id: "hourly", label: "Hourly" },
  { id: "daily", label: "Full day" },
  { id: "interstate", label: "Interstate" },
];

const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Delta", "Oyo", "Abia"];

export default function BookingWidget() {
  const [tripType, setTripType] = useState("daily");
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
      className="bg-white/6 border border-white/12 backdrop-blur-sm p-6 w-full max-w-xl"
    >
      {/* Trip type */}
      <div className="flex gap-2 flex-wrap mb-6 border-b border-white/10 pb-5">
        {TRIP_TYPES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTripType(id)}
            className={`px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-all ${
              tripType === id
                ? "bg-[#0055FF] text-white"
                : "text-white/50 border border-white/15 hover:border-white/35 hover:text-white/80"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">
            City
          </span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-white/6 border border-white/12 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#0055FF] transition-colors appearance-none"
          >
            <option value="" style={{ background: "#111" }}>Select city</option>
            {CITIES.map((c) => (
              <option key={c} value={c} style={{ background: "#111" }}>{c}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">
            Date
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white/6 border border-white/12 text-white/70 text-sm px-3 py-2.5 focus:outline-none focus:border-[#0055FF] transition-colors"
          />
        </label>

        <button
          onClick={handleBook}
          className="bg-[#0055FF] hover:bg-[#0044DD] text-white font-bold text-sm px-5 py-2.5 transition-colors whitespace-nowrap"
        >
          Book now →
        </button>
      </div>

      <p className="mt-4 text-[0.65rem] text-white/30 tracking-wide">
        Verified professional drivers &nbsp;·&nbsp; Fuel included on chauffeured trips
      </p>
    </div>
  );
}
