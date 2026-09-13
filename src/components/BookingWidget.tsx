"use client";

import { useState } from "react";
import { CONTACT } from "@/data/contact";

const TRIP_TYPES = [
  { id: "airport", label: "Airport" },
  { id: "hourly", label: "Hourly" },
  { id: "daily", label: "Full day" },
  { id: "interstate", label: "Interstate" },
];

const CITIES = ["Lagos", "Abuja", "Edo", "Delta", "Rivers"];

export default function BookingWidget() {
  const [tripType, setTripType] = useState("daily");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const [showAvailability, setShowAvailability] = useState(false);
  const [availName, setAvailName] = useState("");
  const [availPhone, setAvailPhone] = useState("");
  const [availDate, setAvailDate] = useState("");

  function handleBook() {
    const tripLabel = TRIP_TYPES.find((t) => t.id === tripType)?.label ?? tripType;
    const parts = [`Hi Cime! I'd like to book a *${tripLabel}* trip`];
    if (city) parts.push(`in *${city}*`);
    if (date) parts.push(`on *${date}*`);
    parts.push("— please help me find a vehicle.");
    const message = encodeURIComponent(parts.join(" "));
    window.open(`${CONTACT.whatsapp.url}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  function openAvailability() {
    setAvailDate(date);
    setShowAvailability(true);
  }

  function handleCheckAvailability() {
    const tripLabel = TRIP_TYPES.find((t) => t.id === tripType)?.label ?? tripType;
    const parts = [`Hi Cime! I'd like to check availability for a *${tripLabel}* trip`];
    if (city) parts.push(`in *${city}*`);
    if (availDate) parts.push(`on *${availDate}*`);
    parts.push(".");
    if (availName) parts.push(`My name is ${availName}`);
    if (availPhone) parts.push(`${availName ? "and my" : "My"} phone number is ${availPhone}.`);
    const message = encodeURIComponent(parts.join(" "));
    window.open(`${CONTACT.whatsapp.url}?text=${message}`, "_blank", "noopener,noreferrer");
    setShowAvailability(false);
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
                  : "text-white/60 border border-white/20 hover:border-white/40 hover:text-white/90"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto_auto] gap-3 items-end">
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase tracking-widest text-white/50 font-bold">
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
            <span className="text-[0.6rem] uppercase tracking-widest text-white/50 font-bold">
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

          <button
            onClick={openAvailability}
            className="rounded-full border border-white/25 hover:border-white/50 hover:bg-white/10 text-white font-bold text-sm px-5 py-2.5 transition-colors whitespace-nowrap"
          >
            Check availability
          </button>
        </div>

        <p className="mt-4 text-[0.65rem] text-white/45 tracking-wide">
          Verified professional drivers &nbsp;·&nbsp; Fuel included on chauffeured trips
        </p>
      </div>

      {/* Check availability modal */}
      {showAvailability && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-5 bg-black/60"
          onClick={() => setShowAvailability(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-sm p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAvailability(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-black/40 hover:text-[#0a0a0a] transition-colors text-xl leading-none"
            >
              ×
            </button>

            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-1">
              Check availability
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Pick a date and share your details — we&apos;ll confirm on WhatsApp.
            </p>

            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.6rem] uppercase tracking-widest text-black/40 font-bold">
                  Date
                </span>
                <input
                  type="date"
                  value={availDate}
                  onChange={(e) => setAvailDate(e.target.value)}
                  className="rounded-xl bg-white border border-black/15 text-[#0a0a0a] text-sm px-3 py-2.5 focus:outline-none focus:border-[#0a0a0a] transition-colors"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[0.6rem] uppercase tracking-widest text-black/40 font-bold">
                  Name
                </span>
                <input
                  type="text"
                  value={availName}
                  onChange={(e) => setAvailName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-xl bg-white border border-black/15 text-[#0a0a0a] text-sm px-3 py-2.5 focus:outline-none focus:border-[#0a0a0a] transition-colors placeholder:text-black/30"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[0.6rem] uppercase tracking-widest text-black/40 font-bold">
                  Phone number
                </span>
                <input
                  type="tel"
                  value={availPhone}
                  onChange={(e) => setAvailPhone(e.target.value)}
                  placeholder="080X XXX XXXX"
                  className="rounded-xl bg-white border border-black/15 text-[#0a0a0a] text-sm px-3 py-2.5 focus:outline-none focus:border-[#0a0a0a] transition-colors placeholder:text-black/30"
                />
              </label>

              <button
                onClick={handleCheckAvailability}
                disabled={!availDate}
                className="rounded-full mt-2 bg-[#0a0a0a] hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold text-sm px-5 py-3 transition-colors"
              >
                Continue on WhatsApp →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
