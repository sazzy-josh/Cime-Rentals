"use client";

import { useState } from "react";

const TRIP_TYPES = ["Airport Pickup", "Hourly", "Daily", "Interstate"];
const LOCATIONS = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano"];

export default function BookingWidget() {
  const [tripType, setTripType] = useState("Daily");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl">
      {/* Trip type tabs */}
      <div className="flex gap-2 flex-wrap mb-5">
        {TRIP_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setTripType(t)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              tripType === t
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Pickup location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select city</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Pickup date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <button className="self-end bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl px-6 py-2.5 text-sm transition-colors">
          Search cars
        </button>
      </div>
    </div>
  );
}
