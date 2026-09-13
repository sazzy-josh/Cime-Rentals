import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BookingWidget from "@/components/BookingWidget";
import FleetGrid from "@/components/FleetGrid";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import { VEHICLES } from "@/data/vehicles";
import { FEATURED_VEHICLES } from "@/data/featuredVehicles";
import { FLEET_AS_VEHICLES } from "@/data/fleetVehicles";
import { CONTACT } from "@/data/contact";

export const metadata: Metadata = {
  title: "Car Rentals — Cime Rentals",
  description:
    "Book a car with a professional driver in just a few taps. Sedans, SUVs, and buses across Nigeria's top cities.",
};

/* ─── Data ───────────────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "Search",
    body: "Enter your city, dates, and booking type to see the cars available near you.",
  },
  {
    n: "02",
    title: "Choose your car",
    body: "Compare vehicles, prices, and options, then pick the one that fits your trip.",
  },
  {
    n: "03",
    title: "Book and pay",
    body: "Confirm your details and pay securely. Your car and driver are assigned right away.",
  },
];

const SERVICES = [
  {
    title: "Airport transfers",
    body: "Reliable, on-time transfers — pickup and drop-off, any airport, any hour.",
  },
  {
    title: "Hourly rental",
    body: "A car and driver by the hour, on your schedule. From 3 hours upwards.",
  },
  {
    title: "Interstate travel",
    body: "Comfortable direct trips from Lagos to Abuja, Rivers, and beyond.",
  },
  {
    title: "Monthly plans",
    body: "Flexible monthly arrangements at better long-term rates.",
  },
  {
    title: "Convoys & occasions",
    body: "Coordinated multi-vehicle convoys for weddings and VIP events.",
  },
  {
    title: "Corporate hire",
    body: "Consistent, professional fleet solutions for businesses of any size.",
  },
];

const CITIES = [
  { name: "Lagos", tag: "Commercial capital" },
  { name: "Abuja", tag: "Federal capital" },
  { name: "Edo", tag: "South-south" },
  { name: "Delta", tag: "South-south" },
  { name: "Rivers", tag: "Port Harcourt & beyond" },
];

const TESTIMONIALS = [
  {
    quote:
      "The most professional rental service I have used in Nigeria. Timely and consistent over three days.",
    name: "Oluwaferanmi",
    role: "Regular customer",
  },
  {
    quote:
      "Lagos can be madness, but booking with Cime was refreshing. Smooth from start to finish.",
    name: "Dotun",
    role: "Business traveller",
  },
  {
    quote:
      "Booked four vehicles for a wedding. Everything was perfect — the team went above and beyond.",
    name: "Chioma N.",
    role: "Event planner",
  },
  {
    quote:
      "Seamless experience, friendly staff, a clean vehicle, and flexible options. Five stars.",
    name: "Precious",
    role: "First-time rider",
  },
];

const FAQS = [
  {
    q: "Do I need an account to book?",
    a: "No. You can book without an account. You will need to provide accurate contact details, including an emergency contact, so we can reach you if anything comes up.",
  },
  {
    q: "How long is the standard rental period?",
    a: "The standard rental period is 12 hours. Going beyond that attracts overtime charges that depend on the vehicle category — you can see the applicable rates at checkout.",
  },
  {
    q: "Do your cars come with a driver?",
    a: "Yes. Every booking comes with a professional chauffeur, and fuel is included at the start of your trip: 30 litres for sedans and 35 litres for SUVs.",
  },
  {
    q: "Can I book a trip outside Lagos?",
    a: "Yes. You can travel from Lagos to other states. Interstate trips are treated as full-day rentals, and the period ends once you return to your origin city.",
  },
  {
    q: "What if something is wrong with the vehicle on arrival?",
    a: "You have a one-hour inspection window when the vehicle is delivered. If there is a mechanical issue you can reject it within that window and our support team will step in immediately.",
  },
  {
    q: "Is fuel included in the price?",
    a: "You start with 30 litres for a sedan or 35 litres for an SUV. If it runs low during your trip, you top up enough to finish — or you can add a full tank at booking for a fixed fee.",
  },
];

const ALL_RENTAL_VEHICLES = [...FLEET_AS_VEHICLES, ...VEHICLES];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function CarRentalsPage() {
  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] flex flex-col justify-end pt-32 pb-16 sm:min-h-screen sm:pb-20 overflow-hidden">
        <Image
          src={VEHICLES[0].image}
          alt={VEHICLES[0].name}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 flex flex-col items-center text-center">
          {/* Badge — hidden on mobile to avoid visual overlap with navbar */}
          <div className="hero-badge hidden sm:flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/70 font-bold">
              Everyday car rentals &nbsp;·&nbsp; Nigeria
            </p>
          </div>

          <h1 className="hero-heading text-[clamp(2.4rem,9.5vw,7.5rem)] font-black leading-[0.88] tracking-tighter text-white mb-6 max-w-4xl">
            Hire a car.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #ffffff 0%, #999999 60%, #ffffff 100%)", backgroundSize: "200% auto", animation: "shimmer 4s linear infinite" }}
            >
              Arrive
            </span>
            &nbsp;in&nbsp;style.
          </h1>

          <p className="hero-subcopy text-sm sm:text-base text-white/55 max-w-lg leading-relaxed mb-8 sm:mb-10">
            Sedans, SUVs, and buses for every trip — fuel and a professional driver included on
            every booking.
          </p>

          <div className="hero-widget">
            <BookingWidget />
          </div>

          {/* Quick contact links */}
          <div className="hero-links mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            <a
              href={CONTACT.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.72rem] font-semibold text-white/50 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp us</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href={CONTACT.phone.url}
              className="text-[0.72rem] font-semibold text-white/50 hover:text-white transition-colors"
            >
              or call {CONTACT.phone.number}
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="/"
              className="text-[0.72rem] font-bold text-white hover:opacity-70 transition-opacity"
            >
              Explore the Luxury Fleet →
            </a>
          </div>

          <div className="hero-stats mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { value: "5,000+", label: "Happy clients" },
              { value: "4.9 ★", label: "Average rating" },
              { value: "5", label: "States" },
              { value: "24/7", label: "Support" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3.5 min-w-[110px]"
              >
                <p className="text-xl sm:text-2xl font-black text-white">{value}</p>
                <p className="text-[0.6rem] sm:text-[0.68rem] uppercase tracking-widest text-white/40 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ticker strip ──────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a] overflow-hidden py-3">
        <div className="flex gap-12 animate-[marquee_28s_linear_infinite] whitespace-nowrap w-max">
          {Array(3)
            .fill([
              "Airport transfers",
              "Hourly rentals",
              "Interstate travel",
              "Corporate hire",
              "Wedding convoys",
              "Monthly plans",
            ])
            .flat()
            .map((item, i) => (
              <span
                key={i}
                className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70 flex items-center gap-12"
              >
                {item}
                <span className="text-white/30">—</span>
              </span>
            ))}
        </div>
      </div>

      {/* ── Featured vehicles ─────────────────────────────────────── */}
      <FeaturedSection vehicles={FEATURED_VEHICLES} />

      {/* ── How it works ──────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-black/8">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                Simple process
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                Book a car in just<br />three simple steps
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              From search to confirmation in minutes. No back-and-forth, no waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/8">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span className="block text-[5rem] font-black leading-none text-black/5 mb-2 select-none">
                  {n}
                </span>
                <h3 className="text-lg font-bold mb-3 -mt-6 relative">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
              What we offer
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Everything you can<br />book with Cime
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {SERVICES.map(({ title, body }) => (
              <div
                key={title}
                className="bg-[#f3f3f3] p-8 flex flex-col justify-between group hover:bg-white transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-[#0a0a0a]">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities ────────────────────────────────────────────────── */}
      <section id="cities" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                Where we operate
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#0a0a0a]">
                Cities we&apos;re in
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Tap a city to see the cars available near you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-black/8">
            {CITIES.map(({ name, tag }) => (
              <div
                key={name}
                className="group bg-white hover:bg-[#0a0a0a] transition-colors p-7 cursor-pointer flex flex-col justify-between min-h-[140px]"
              >
                <p className="text-[0.63rem] uppercase tracking-widest text-black/35 font-medium group-hover:text-white/50 transition-colors">
                  {tag}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-white mb-2 transition-colors">{name}</h3>
                  <span className="text-[0.68rem] text-[#0a0a0a] group-hover:text-white font-bold uppercase tracking-widest transition-colors">
                    View cars →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet ────────────────────────────────────────────────── */}
      <section id="rentals" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/8">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                Car rentals
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                Top-rated vehicles
              </h2>
              <p className="mt-3 text-sm text-gray-500 max-w-sm leading-relaxed">
                {ALL_RENTAL_VEHICLES.length} vehicles across Lagos, Abuja, Rivers, and beyond.
                Driver and fuel included on most bookings.
              </p>
            </div>
            <a
              href="/fleet"
              className="shrink-0 text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 hover:text-[#0a0a0a] transition-colors"
            >
              Need to fly instead? Charter a private jet →
            </a>
          </div>

          <FleetGrid vehicles={ALL_RENTAL_VEHICLES} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-black/8">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                Customer love
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                Riders keep<br />coming back
              </h2>
            </div>
            <p className="text-sm text-gray-500">4.9 from our first 500+ customers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/8">
            {/* Featured */}
            <div className="bg-[#f3f3f3] p-10 lg:p-14 flex flex-col justify-between">
              <span className="text-[5rem] leading-none text-black/6 font-serif select-none -mt-4">&ldquo;</span>
              <blockquote className="text-xl sm:text-2xl font-medium leading-snug tracking-tight text-[#0a0a0a] -mt-8">
                {TESTIMONIALS[0].quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-black/8">
                <div className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center text-white text-xs font-black">
                  {TESTIMONIALS[0].name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold">{TESTIMONIALS[0].name}</p>
                  <p className="text-xs text-gray-500">{TESTIMONIALS[0].role}</p>
                </div>
              </div>
            </div>

            {/* Smaller quotes stacked */}
            <div className="flex flex-col divide-y divide-black/8 bg-white">
              {TESTIMONIALS.slice(1).map(({ quote, name, role }) => (
                <div key={name} className="p-8 sm:p-10">
                  <blockquote className="text-[0.9375rem] leading-relaxed text-gray-700 mb-5">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 bg-black/8 flex items-center justify-center text-[0.65rem] font-black text-[#0a0a0a]">
                      {name[0]}
                    </div>
                    <span className="text-xs font-semibold">{name}</span>
                    <span className="text-xs text-gray-400">· {role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0a0a0a] font-bold mb-2">
                Good to know
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-tight mb-6">
                Frequently asked questions
              </h2>
              <a
                href="#"
                className="text-[0.72rem] font-bold uppercase tracking-widest text-[#0a0a0a] border-b border-[#0a0a0a] pb-0.5 hover:opacity-60 transition-opacity"
              >
                See all FAQs →
              </a>
            </div>

            <div className="divide-y divide-black/8">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 font-semibold text-[0.9375rem] select-none">
                    {q}
                    <span className="shrink-0 text-xl text-[#0a0a0a] font-light group-open:rotate-45 transition-transform origin-center leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#0a0a0a]">
              Ready to ride?
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-sm leading-relaxed">
              Find a vehicle with a professional driver in minutes. No hidden fees.
            </p>
          </div>
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0a0a0a] hover:bg-black/80 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Hero animations ── */
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .hero-badge  { animation: fade-up 0.65s 0.10s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-heading{ animation: fade-up 0.75s 0.22s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-subcopy{ animation: fade-up 0.70s 0.30s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-widget { animation: fade-up 0.70s 0.38s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-links  { animation: fade-up 0.60s 0.52s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-stats  { animation: fade-up 0.60s 0.64s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>
    </div>
  );
}
