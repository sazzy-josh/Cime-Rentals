"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/data/contact";
import { CAR_TRIP_TYPES, type TripType } from "@/data/tripTypes";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isSameDay(a: Date, b: Date) {
  return a.getTime() === b.getTime();
}

const longDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

const shortDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

function Calendar({
  start,
  end,
  range,
  onPick,
}: {
  start: Date | null;
  end: Date | null;
  range: boolean;
  onPick: (d: Date) => void;
}) {
  const today = startOfDay(new Date());
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = view.getFullYear();
  const month = view.getMonth();
  const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7; // week starts on Monday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const atCurrentMonth = year === today.getFullYear() && month === today.getMonth();

  const cells: (Date | null)[] = [
    ...Array<null>(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => setView(new Date(year, month - 1, 1))}
          disabled={atCurrentMonth}
          aria-label="Previous month"
          className="w-8 h-8 rounded-full text-lg leading-none text-[#0a0a0a] hover:bg-black/5 disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
        >
          ‹
        </button>
        <p className="text-sm font-bold text-[#0a0a0a]">
          {view.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
        </p>
        <button
          type="button"
          onClick={() => setView(new Date(year, month + 1, 1))}
          aria-label="Next month"
          className="w-8 h-8 rounded-full text-lg leading-none text-[#0a0a0a] hover:bg-black/5 transition-colors"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[0.6rem] uppercase tracking-widest text-black/65 font-bold pb-1">
            {d}
          </span>
        ))}
        {cells.map((date, i) => {
          if (!date) return <span key={`blank-${i}`} />;
          const isPast = date < today;
          const isStart = start !== null && isSameDay(date, start);
          const isEnd = end !== null && isSameDay(date, end);
          const isSelected = isStart || isEnd;
          const inRange = start !== null && end !== null && date > start && date < end;
          const isToday = isSameDay(date, today);

          // Continuous highlight band behind the selected range
          const band = inRange
            ? "bg-black/8"
            : isStart && end
              ? "bg-gradient-to-r from-transparent from-50% to-black/8 to-50%"
              : isEnd
                ? "bg-gradient-to-l from-transparent from-50% to-black/8 to-50%"
                : "";

          return (
            <div key={date.getDate()} className={band}>
              <button
                type="button"
                disabled={isPast}
                onClick={() => onPick(date)}
                aria-pressed={isSelected}
                className={`mx-auto block w-9 h-9 rounded-full text-sm transition-colors ${
                  isSelected
                    ? "bg-[#0a0a0a] text-white font-bold"
                    : isPast
                      ? "text-black/20"
                      : `${inRange ? "" : "hover:bg-black/8"} text-[#0a0a0a] ${
                          isToday ? "ring-1 ring-black/30" : ""
                        }`
                }`}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>

      {range && (
        <p className="mt-3 text-[0.65rem] text-gray-600 text-center">
          {!start ? "Select your start date" : !end ? "Now select your end date" : "Tap a date to start over"}
        </p>
      )}
    </div>
  );
}

export default function AvailabilityModal({
  vehicleName,
  tripTypes = CAR_TRIP_TYPES,
  onClose,
}: {
  vehicleName: string;
  tripTypes?: TripType[];
  onClose: () => void;
}) {
  const [tripId, setTripId] = useState(tripTypes[0].id);
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const trip = tripTypes.find((t) => t.id === tripId) ?? tripTypes[0];
  const isRange = trip.range === true;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function pickTrip(id: string) {
    setTripId(id);
    setEnd(null); // an end date only makes sense for multi-day trips
  }

  function pickDate(d: Date) {
    if (!isRange) {
      setStart(d);
      return;
    }
    // Range: first tap sets the start, second tap the end, a third starts over
    if (!start || end || d <= start) {
      setStart(d);
      setEnd(null);
    } else {
      setEnd(d);
    }
  }

  const ready = start !== null && (!isRange || end !== null);

  const summary = !start
    ? null
    : isRange
      ? end
        ? `${shortDate(start)} → ${shortDate(end)}`
        : `From ${shortDate(start)}`
      : longDate(start);

  function handleContinue() {
    if (!start || !ready) return;
    const when = isRange && end ? `from *${longDate(start)}* to *${longDate(end)}*` : `on *${longDate(start)}*`;
    const message = encodeURIComponent(
      `Hi Cime! I'd like to check the availability of the *${vehicleName}* ${when}. Trip type: *${trip.label}*. Please let me know if it's available.`
    );
    window.open(`${CONTACT.whatsapp.url}?text=${message}`, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-5 bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Check availability for ${vehicleName}`}
        className="bg-white rounded-3xl w-full max-w-sm p-6 relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-black/65 hover:text-[#0a0a0a] transition-colors text-xl leading-none"
        >
          ×
        </button>

        <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-1">
          Check availability
        </p>
        <h3 className="text-lg font-black text-[#0a0a0a] leading-snug pr-6">{vehicleName}</h3>

        {/* Trip type */}
        <p className="text-[0.6rem] uppercase tracking-widest text-black/65 font-bold mt-5 mb-2">
          Trip type
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tripTypes.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => pickTrip(id)}
              aria-pressed={tripId === id}
              className={`rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-colors ${
                tripId === id
                  ? "bg-[#0a0a0a] text-white border border-[#0a0a0a]"
                  : "text-black/70 border border-black/15 hover:border-black/40 hover:text-[#0a0a0a]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <Calendar start={start} end={end} range={isRange} onPick={pickDate} />

        <p className="mt-4 min-h-5 text-center text-sm font-bold text-[#0a0a0a]">{summary}</p>

        <button
          onClick={handleContinue}
          disabled={!ready}
          className="rounded-full mt-3 w-full bg-[#0a0a0a] hover:bg-black/80 disabled:opacity-30 text-white font-bold text-sm px-5 py-3 transition-colors"
        >
          Continue on WhatsApp →
        </button>
        <p className="mt-3 text-[0.65rem] text-gray-600 text-center">
          We&apos;ll confirm availability with you on WhatsApp.
        </p>
      </div>
    </div>
  );
}
