import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JetBookingWidget from "@/components/JetBookingWidget";
import AircraftGrid from "@/components/AircraftGrid";
import HeroBackground from "@/components/HeroBackground";
import { AIRCRAFT } from "@/data/aircraft";
import { CONTACT } from "@/data/contact";

export const metadata: Metadata = {
  title: "Private Jets — Cime Rentals",
  description:
    "Charter a private jet or helicopter with Cime — helicopters, light and midsize jets, and long-range business jets for business travel, VIP transfers, and special occasions.",
};

// Aircraft whose first photo is a clean exterior shot, used as hero backgrounds.
const HERO_REGISTRATIONS = [
  "5N-BVT",
  "5N-BMT",
  "5N-OSA",
  "T7-XAM",
  "SJAC-52711",
  "SJAC-58553",
  "5N-ONC",
  "SJAC-62950",
  "5N-LRK",
  "SJAC-17409",
  "5N-BYX",
];

const HERO_IMAGES = AIRCRAFT.filter(
  (a) => HERO_REGISTRATIONS.includes(a.registration) && a.images.length > 0
).map((a) => ({ src: a.images[0], alt: `${a.manufacturer} ${a.model}` }));

const HERO_STATS = [
  { value: `${AIRCRAFT.length}`, label: "Aircraft" },
  { value: "24/7", label: "On call" },
];

export default function FleetPage() {
  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden pt-28 pb-16">
        <HeroBackground images={HERO_IMAGES} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[0.63rem] uppercase tracking-[0.22em] text-white/85 font-bold mb-5">
            Private jet &amp; helicopter charter
          </p>
          <h1 className="text-[clamp(2.4rem,7vw,4.5rem)] font-black text-white leading-[0.98] tracking-tight">
            Fly on your own
            <br />
            schedule
          </h1>

          <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3">
            <p className="text-sm text-white/90 leading-relaxed">
              Helicopters, business jets, and regional airliners for business travel, VIP
              transfers, and occasions that can&apos;t wait on commercial schedules.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HERO_STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-4 min-w-[110px]"
              >
                <p className="text-xl font-black text-white">{value}</p>
                <p className="text-[0.65rem] uppercase tracking-widest text-white/75 mt-1">{label}</p>
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
          <p className="text-center text-xs text-gray-700">
            Availability changes daily — message us on WhatsApp to confirm your preferred aircraft
            before booking.
          </p>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <section id="aircraft" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
              The aircraft
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              {AIRCRAFT.length} aircraft, ready when you are
            </h2>
          </div>

          <AircraftGrid aircraft={AIRCRAFT} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#0a0a0a]">
              Not sure which aircraft?
            </h2>
            <p className="mt-3 text-gray-700 text-base max-w-sm leading-relaxed">
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
