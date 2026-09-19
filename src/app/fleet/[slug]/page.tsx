import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import AircraftCard from "@/components/AircraftCard";
import CheckAvailabilityButton from "@/components/CheckAvailabilityButton";
import {
  AIRCRAFT,
  formatRange,
  formatRangeKm,
  formatSpeed,
  formatSpeedKmh,
  getAircraft,
  getDisplayName,
  getRelatedAircraft,
  getTailNumber,
} from "@/data/aircraft";
import { CONTACT } from "@/data/contact";
import { JET_TRIP_TYPES } from "@/data/tripTypes";

export async function generateStaticParams() {
  return AIRCRAFT.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAircraft(slug);
  if (!a) return {};
  return {
    title: `${a.manufacturer} ${a.model} — Cime Rentals`,
    description: a.summary.slice(0, 155),
  };
}

const WHATSAPP_ICON = CONTACT.socials.find((s) => s.name === "WhatsApp")?.iconPath ?? "";

export default async function AircraftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAircraft(slug);
  if (!a) notFound();

  const [hero, ...rest] = a.images;
  const tail = getTailNumber(a);
  const related = getRelatedAircraft(a);

  const stats = [
    { label: "Passengers", value: `Up to ${a.seats}` },
    { label: "Range", value: formatRange(a), sub: formatRangeKm(a) },
    { label: "Cruise speed", value: formatSpeed(a), sub: formatSpeedKmh(a) },
  ];

  const specs = [
    { label: "Manufacturer", value: a.manufacturer },
    { label: "Model", value: a.model },
    { label: "Classification", value: a.classification },
    { label: "Type", value: a.type },
    ...(tail ? [{ label: "Registration", value: tail }] : []),
    { label: "Luggage capacity", value: `${a.luggageCuFt.toLocaleString("en-US")} cu ft` },
    { label: "Cabin height", value: a.cabinHeight },
    { label: "Cabin width", value: a.cabinWidth },
  ];

  const quoteMsg = encodeURIComponent(
    `Hi Cime! I'd like to request a quote for the *${getDisplayName(a)}* (${a.classification}). Please share availability and pricing.`
  );

  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero image ─────────────────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[420px] bg-[#0a0a0a]">
        <Image
          src={hero}
          alt={`${a.manufacturer} ${a.model}`}
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        {/* top gradient keeps the transparent navbar legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-8 pb-10">
          <Link
            href="/fleet#aircraft"
            className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors mb-4"
          >
            ← Back to fleet
          </Link>
          <p className="text-[0.63rem] uppercase tracking-[0.22em] text-white/90 font-bold mb-2">
            {a.type} &nbsp;·&nbsp; {a.classification}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            {a.model}
          </h1>
          <p className="mt-2 text-sm text-white/85">
            {a.manufacturer}
            {tail && <> &nbsp;·&nbsp; {tail}</>}
          </p>
        </div>
      </div>

      {/* ── Headline stats ─────────────────────────────────────────── */}
      <div className="border-b border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3">
          {stats.map(({ label, value, sub }) => (
            <div key={label} className="py-6 pr-4 sm:border-r sm:border-black/8 sm:pl-6 sm:first:pl-0 sm:last:border-r-0">
              <p className="text-[0.58rem] uppercase tracking-widest text-gray-600 font-bold mb-1">
                {label}
              </p>
              <p className="text-lg font-black text-[#0a0a0a]">{value}</p>
              {sub && <p className="text-[0.7rem] text-gray-600 mt-0.5">{sub}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* Left column */}
          <div>
            {/* Overview */}
            <div className="mb-14">
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-4">
                Aircraft overview
              </p>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">{a.summary}</p>
            </div>

            {/* Specifications */}
            <div className="mb-14">
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-5">
                Specifications
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {specs.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 py-4 border-b border-black/6"
                  >
                    <dt className="text-sm text-gray-700">{label}</dt>
                    <dd className="text-sm font-bold text-[#0a0a0a] text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            {a.features.length > 0 && (
              <div className="mb-14">
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-5">
                  Features &amp; amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {a.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center border border-black/12 px-3 py-1.5 text-[0.7rem] font-semibold text-[#0a0a0a] uppercase tracking-widest"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Photo gallery */}
            {rest.length > 0 && (
              <div>
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-5">
                  More photos
                </p>
                <PhotoGallery name={`${a.manufacturer} ${a.model}`} photos={rest} lightbox={false} />
              </div>
            )}
          </div>

          {/* Right column — sticky quote card */}
          <div>
            <div className="lg:sticky lg:top-28">
              <div className="border border-black/8 p-8">
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-3">
                  Charter this aircraft
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  Pricing is quoted per trip, based on your route, dates, and number of passengers.
                </p>

                <a
                  href={`${CONTACT.whatsapp.url}?text=${quoteMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#0a0a0a] hover:bg-black/80 text-white font-bold text-[0.8rem] uppercase tracking-widest text-center py-4 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d={WHATSAPP_ICON} />
                  </svg>
                  Request a quote
                </a>

                <CheckAvailabilityButton
                  name={getDisplayName(a)}
                  tripTypes={JET_TRIP_TYPES}
                  className="mt-3 w-full border border-black/15 hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white text-[#0a0a0a] font-bold text-[0.8rem] uppercase tracking-widest text-center py-4 transition-colors"
                >
                  Check availability
                </CheckAvailabilityButton>

                <div className="mt-6 pt-5 border-t border-black/6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-widest text-gray-600 font-bold mb-1">
                      Seats
                    </p>
                    <p className="text-sm font-bold">{a.seats}</p>
                  </div>
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-widest text-gray-600 font-bold mb-1">
                      Type
                    </p>
                    <p className="text-sm font-bold">{a.type}</p>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 p-5 bg-[#f3f3f3] hover:bg-[#eaeaea] transition-colors flex items-start gap-3"
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4 mt-0.5 shrink-0">
                  <path d={WHATSAPP_ICON} />
                </svg>
                <div>
                  <p className="text-[0.7rem] font-bold text-[#0a0a0a] mb-0.5">Need help choosing?</p>
                  <p className="text-xs text-gray-700">Chat with our team — available 24/7.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── More aircraft ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f7f7f7] py-20 border-t border-black/8">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                  Similar aircraft
                </p>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
                  More from the fleet
                </h2>
              </div>
              <Link
                href="/fleet#aircraft"
                className="shrink-0 hidden sm:inline-block text-[0.7rem] font-bold uppercase tracking-widest text-gray-600 hover:text-[#0a0a0a] transition-colors"
              >
                View all {AIRCRAFT.length} aircraft →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {related.map((r) => (
                <AircraftCard key={r.slug} aircraft={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
