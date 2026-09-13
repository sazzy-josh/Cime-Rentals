import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FLEET_VEHICLES } from "@/data/fleetVehicles";
import { CONTACT } from "@/data/contact";

export const metadata: Metadata = {
  title: "Cime Rentals — Private Jets, Luxury Cars & Chauffeur Service",
  description:
    "The art of moving you in style. Private jet charter, an executive fleet, chauffeur, and concierge — across Nigeria's top cities.",
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

function PriceIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

const HERO_STATS = [
  { value: "5,000+", label: "Happy clients" },
  { value: "4.9 ★", label: "Average rating" },
  { value: "5", label: "States" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative min-h-[640px] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden pt-28 pb-16">
        <Image
          src={FLEET_VEHICLES[0].image}
          alt={FLEET_VEHICLES[0].name}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[0.63rem] uppercase tracking-[0.22em] text-white/70 font-bold mb-5">
            Private Jets &nbsp;·&nbsp; Luxury Cars &nbsp;·&nbsp; Chauffeur &nbsp;·&nbsp; Concierge
          </p>
          <h1 className="text-[clamp(2.4rem,7vw,5.5rem)] font-black text-white leading-[0.98] tracking-tight">
            The art of moving
            <br />
            in&nbsp;
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #ffffff 0%, #999999 60%, #ffffff 100%)", backgroundSize: "200% auto", animation: "shimmer 4s linear infinite" }}
            >
              style
            </span>
            .
          </h1>

          <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3">
            <p className="text-sm text-white/70 leading-relaxed">
              Everyday car rentals, an executive fleet, and private jet charter — every journey
              handled by vetted professionals.
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/car-rentals"
              className="rounded-full bg-white hover:bg-white/85 text-[#0a0a0a] font-bold text-sm px-6 py-3 transition-colors"
            >
              Rent a car →
            </Link>
            <Link
              href="/fleet"
              className="rounded-full border border-white/25 hover:border-white/50 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 transition-colors"
            >
              Charter a jet →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Notice bar ────────────────────────────────────────────── */}
      <div className="bg-[#f7f7f7] border-b border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <p className="text-center text-xs text-gray-500">
            Availability changes daily — message us on WhatsApp to confirm your preferred vehicle
            before booking.
          </p>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                The collection
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                {FLEET_VEHICLES.length} vehicles, one standard
              </h2>
            </div>
            <Link
              href="/car-rentals"
              className="shrink-0 text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 hover:text-[#0a0a0a] transition-colors"
            >
              View more vehicles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {FLEET_VEHICLES.map((car) => {
              const msg = encodeURIComponent(
                `Hi Cime! I'd like to enquire about the *${car.name}* from The Fleet. Please share availability and pricing.`
              );
              return (
                <a
                  key={car.name}
                  href={`${CONTACT.whatsapp.url}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
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
                  <h3 className="mt-4 font-bold text-[#0a0a0a] leading-snug text-base group-hover:opacity-70 transition-opacity">
                    {car.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-4 text-[0.75rem] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <SeatIcon />
                      {car.seats} seats
                    </span>
                    <span className="flex items-center gap-1.5">
                      <TagIcon />
                      {car.category}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-4 text-[0.75rem] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <PinIcon />
                      {car.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PriceIcon />
                      From ₦{car.from12h.toLocaleString("en-NG")} / 12h
                    </span>
                  </div>
                </a>
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
              Planning something special?
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-sm leading-relaxed">
              Weddings, VIP transfers, corporate delegations, or a private flight — talk to our
              team and we&apos;ll put together the right vehicle for the occasion.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] hover:bg-black/80 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
            >
              Talk to us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
