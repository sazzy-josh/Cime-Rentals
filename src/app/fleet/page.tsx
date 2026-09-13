import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JetBookingWidget from "@/components/JetBookingWidget";
import { JETS } from "@/data/jets";
import { CONTACT } from "@/data/contact";

export const metadata: Metadata = {
  title: "Private Jets — Cime Rentals",
  description:
    "Charter a private jet or helicopter with Cime — helicopters, midsize, and super-midsize jets for business travel, VIP transfers, and special occasions.",
};

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

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
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

// Placeholder artwork until real aircraft photos are supplied — a jet
// silhouette on a dark gradient tile, not a stock or third-party photo.
function JetPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" className="w-2/3 h-2/3">
        <path d="M2.5 19.5 21 12 2.5 4.5l1.5 6.5L2.5 12l1.5 1-1.5 6z" strokeLinejoin="round" />
      </svg>
      <span className="absolute bottom-3 left-3 text-[0.6rem] uppercase tracking-widest text-white/25 font-bold">
        {label}
      </span>
    </div>
  );
}

const HERO_STATS = [
  { value: `${JETS.length}`, label: "Aircraft" },
  { value: "3", label: "Cities" },
  { value: "24/7", label: "On call" },
];

export default function FleetPage() {
  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative min-h-[560px] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden pt-28 pb-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 60%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[0.63rem] uppercase tracking-[0.22em] text-white/60 font-bold mb-5">
            Private jet &amp; helicopter charter
          </p>
          <h1 className="text-[clamp(2.4rem,7vw,4.5rem)] font-black text-white leading-[0.98] tracking-tight">
            Fly on your own
            <br />
            schedule
          </h1>

          <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3">
            <p className="text-sm text-white/70 leading-relaxed">
              Helicopters and midsize jets for business travel, VIP transfers, and occasions that
              can&apos;t wait on commercial schedules.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HERO_STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-4 min-w-[110px]"
              >
                <p className="text-xl font-black text-white">{value}</p>
                <p className="text-[0.65rem] uppercase tracking-widest text-white/45 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <JetBookingWidget />
          </div>
        </div>
      </div>

      {/* ── Notice bar ────────────────────────────────────────────── */}
      <div className="bg-[#f7f7f7] border-b border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <p className="text-center text-xs text-gray-500">
            Aircraft photos coming soon — message us on WhatsApp for full specs, availability, and
            a quote.
          </p>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
              The aircraft
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              {JETS.length} aircraft, ready when you are
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {JETS.map((jet) => {
              const msg = encodeURIComponent(
                `Hi Cime! I'd like to request a quote for the *${jet.name}* (${jet.category}). Please share availability and pricing.`
              );
              return (
                <div key={jet.name} className="flex flex-col">
                  <JetPlaceholder label={jet.category} />

                  <h3 className="mt-4 font-bold text-[#0a0a0a] leading-snug text-base">
                    {jet.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {jet.blurb}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-[0.75rem] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <SeatIcon />
                      {jet.seats} seats
                    </span>
                    <span className="flex items-center gap-1.5">
                      <TagIcon />
                      {jet.category}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-4 text-[0.75rem] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <PinIcon />
                      {jet.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RangeIcon />
                      {jet.rangeNm.toLocaleString("en-NG")} nm range
                    </span>
                  </div>

                  <a
                    href={`${CONTACT.whatsapp.url}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0a0a0a] hover:bg-black/80 text-white font-bold text-[0.72rem] uppercase tracking-widest px-5 py-3 transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#0a0a0a]">
              Not sure which aircraft?
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-sm leading-relaxed">
              Tell us your route, party size, and dates — our team will recommend the right
              aircraft and handle the rest.
            </p>
          </div>
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0a0a0a] hover:bg-black/80 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
          >
            Talk to us on WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
