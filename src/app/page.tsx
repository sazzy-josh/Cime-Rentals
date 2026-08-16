import Navbar from "@/components/Navbar";
import BookingWidget from "@/components/BookingWidget";
import FleetGrid from "@/components/FleetGrid";
import FeaturedSection from "@/components/FeaturedSection";
import CimeLogo from "@/components/CimeLogo";
import { VEHICLES } from "@/data/vehicles";
import { FEATURED_VEHICLES } from "@/data/featuredVehicles";
import { CONTACT } from "@/data/contact";

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
    body: "Comfortable direct trips from Lagos to Abuja, Port Harcourt, and beyond.",
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
  { name: "Port Harcourt", tag: "Rivers state" },
  { name: "Delta", tag: "South-south" },
  { name: "Oyo", tag: "Ibadan & beyond" },
  { name: "Abia", tag: "Eastern Nigeria" },
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

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] flex flex-col justify-end pt-28 pb-16 sm:min-h-screen sm:pt-0 sm:pb-20 overflow-hidden">
        {/* Animated glow orb — top right */}
        <div
          aria-hidden
          className="glow-orb-1 pointer-events-none absolute -top-60 -right-60 w-[750px] h-[750px] rounded-full"
          style={{ background: "radial-gradient(circle, #0055FF 0%, transparent 65%)", opacity: 0.13 }}
        />
        {/* Animated glow orb — bottom left */}
        <div
          aria-hidden
          className="glow-orb-2 pointer-events-none absolute -bottom-40 -left-40 w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, #0055FF 0%, transparent 70%)", opacity: 0.07 }}
        />
        {/* Animated glow orb — center */}
        <div
          aria-hidden
          className="glow-orb-3 pointer-events-none absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, #0033BB 0%, transparent 65%)", opacity: 0.05 }}
        />

        {/* Dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative car silhouette — desktop right side */}
        <div
          aria-hidden
          className="hero-car pointer-events-none hidden lg:block absolute right-0 bottom-0 w-[55%] h-full"
        >
          <svg
            viewBox="0 0 1373.873004 465.142904"
            fill="#0055FF"
            className="absolute bottom-20 right-0 w-full opacity-[0.04]"
            style={{ filter: "blur(1px)" }}
          >
            <g transform="translate(-314.061202,1236.499943) scale(0.100000,-0.100000)">
              <path d="M10515 12355 c-417 -14 -702 -30 -794 -46 -58 -10 -101 -40 -101 -71 0 -10 7 -21 15 -24 8 -4 15 -12 15 -19 0 -27 -123 -165 -392 -440 -150 -154 -307 -316 -348 -360 -146 -156 -246 -251 -285 -269 -34 -17 -54 -18 -165 -13 -153 8 -285 29 -327 53 -26 15 -35 16 -57 6 -29 -13 -44 -38 -30 -52 5 -5 36 -14 69 -19 33 -6 121 -24 195 -41 210 -48 307 -63 410 -63 117 -1 160 12 194 61 14 20 48 60 76 87 48 47 52 49 65 31 15 -20 31 -123 21 -133 -3 -3 -29 -10 -58 -14 -75 -12 -86 -27 -57 -78 26 -47 56 -69 113 -86 31 -9 42 -18 48 -41 16 -59 29 -57 -544 -66 -569 -9 -1296 -30 -1808 -53 -179 -9 -422 -20 -540 -25 -118 -5 -269 -14 -335 -20 -210 -19 -418 -41 -475 -50 -30 -5 -89 -14 -130 -20 -208 -33 -577 -117 -753 -172 -156 -49 -198 -91 -268 -271 -44 -114 -76 -152 -158 -190 -142 -64 -212 -77 -449 -84 -214 -6 -233 -3 -213 35 25 47 318 280 476 379 168 105 471 245 622 287 26 8 86 26 133 41 118 38 241 73 335 96 44 11 96 24 115 29 68 19 169 40 375 80 28 6 109 21 180 35 221 44 518 91 755 120 69 9 159 20 200 25 87 12 223 27 365 41 55 5 116 14 135 19 19 6 70 10 113 10 44 0 77 4 77 10 0 13 -100 13 -310 0 -359 -22 -729 -55 -905 -80 -164 -24 -354 -52 -413 -61 -354 -53 -806 -162 -1142 -276 -171 -57 -260 -95 -465 -194 -325 -157 -684 -444 -762 -608 -21 -46 -24 -64 -20 -110 13 -118 27 -185 42 -200 14 -14 67 -17 410 -21 l395 -5 30 -31 c60 -59 19 -83 -136 -78 -510 19 -887 24 -900 13 -35 -29 -4 -86 108 -201 54 -56 124 -144 175 -220 173 -260 226 -280 854 -319 207 -13 245 -9 288 26 31 27 32 31 66 255 20 130 38 204 72 295 145 391 473 691 873 798 125 34 198 42 360 41 246 -2 386 -34 605 -138 245 -117 456 -329 586 -588 67 -133 134 -338 159 -488 56 -333 74 -362 231 -383 60 -8 777 -11 2514 -12 2599 0 2505 -2 2618 49 94 42 113 80 127 256 20 241 46 356 122 537 74 178 139 275 272 408 302 302 744 450 1167 390 326 -45 591 -169 802 -374 235 -228 413 -556 478 -883 36 -184 51 -193 289 -184 85 3 180 10 210 15 30 6 102 17 160 26 166 25 196 38 234 99 18 28 50 95 70 149 68 184 86 208 186 254 64 30 91 63 97 117 5 43 3 48 -34 83 -22 21 -65 55 -96 76 -59 39 -117 116 -142 186 -20 57 -48 224 -80 466 -9 66 -20 140 -25 165 -5 25 -16 92 -25 150 -9 58 -27 173 -40 255 -43 267 -45 289 -43 367 3 65 0 81 -18 105 -34 45 -55 37 -58 -22 -3 -58 -32 -128 -69 -167 -26 -27 -28 -28 -144 -28 -65 0 -309 7 -543 16 -481 18 -1535 15 -1670 -5 -41 -6 -111 -16 -155 -22 -144 -18 -317 -48 -460 -79 -471 -102 -701 -145 -1004 -186 -170 -24 -161 -33 -161 168 0 130 2 148 18 157 9 5 62 14 117 20 55 7 132 16 170 21 39 5 95 12 125 15 30 4 80 10 110 15 30 5 105 16 165 25 61 9 133 20 160 26 45 8 383 74 510 98 45 9 103 19 310 51 193 30 760 70 998 70 135 0 207 4 207 10 0 13 -6 15 -100 30 -133 22 -504 126 -690 194 -36 13 -117 43 -180 66 -63 23 -173 64 -245 90 -71 27 -184 67 -250 90 -174 60 -252 88 -320 117 -63 26 -139 78 -151 103 -4 8 -10 57 -14 109 -8 126 -4 124 -211 140 -432 33 -1703 47 -2324 26z m1699 -208 c18 -13 18 -27 7 -298 -24 -560 -53 -690 -159 -718 -40 -11 -322 -28 -597 -36 -93 -3 -269 -10 -390 -15 -524 -24 -984 -41 -1305 -50 -381 -10 -370 -12 -370 52 0 16 -7 60 -16 99 -13 57 -21 74 -48 94 -36 27 -82 32 -135 14 -20 -7 -36 -8 -42 -2 -19 19 816 818 896 858 26 13 172 15 1086 15 864 0 1058 -2 1073 -13z m-138 -1163 c9 -34 -4 -247 -16 -280 -9 -23 -14 -24 -87 -24 -43 0 -202 4 -353 10 -151 5 -500 16 -775 25 -275 8 -556 17 -625 21 -69 3 -250 9 -402 13 l-277 8 -41 28 c-45 31 -59 52 -71 104 -13 60 -8 61 210 61 333 0 1364 27 1911 49 102 5 260 9 352 9 l168 2 6 -26z m-46 -469 c0 -19 -4 -44 -9 -57 -5 -13 -14 -48 -21 -78 -26 -115 -124 -398 -187 -540 -64 -142 -201 -409 -244 -473 -65 -99 -154 -186 -224 -221 -54 -26 -105 -34 -105 -16 0 6 9 10 20 10 11 0 39 12 61 26 128 81 258 284 426 669 138 315 189 448 249 652 21 70 34 81 34 28z m-265 16 c38 -8 44 -39 14 -67 -20 -18 -35 -19 -233 -16 -236 4 -372 14 -388 30 -8 8 -6 18 6 36 l16 26 278 -1 c152 -1 291 -4 307 -8z"/>
              <path d="M14055 9974 c-405 -40 -780 -287 -887 -584 -74 -204 -109 -557 -73 -740 28 -147 97 -314 177 -433 80 -118 255 -280 378 -349 65 -37 212 -94 305 -117 263 -67 577 -29 805 97 121 67 305 226 381 328 99 134 172 290 205 435 22 93 25 368 5 449 -87 366 -280 632 -560 771 -100 49 -259 102 -371 123 -87 16 -293 27 -365 20z m362 -383 c287 -92 541 -340 592 -579 16 -75 14 -229 -4 -307 -49 -211 -149 -367 -305 -476 -137 -96 -265 -132 -465 -132 -113 0 -155 4 -220 22 -223 62 -334 137 -446 302 -113 166 -161 349 -139 529 43 350 306 609 675 664 66 10 251 -4 312 -23z"/>
              <path d="M5760 9925 c-163 -25 -291 -71 -431 -156 -240 -144 -401 -356 -469 -617 -19 -72 -40 -231 -40 -296 0 -78 23 -208 56 -316 94 -308 310 -565 593 -705 138 -68 238 -97 402 -116 181 -21 406 20 584 106 199 97 402 305 505 519 59 124 88 220 106 351 17 130 17 193 -1 318 -49 334 -259 641 -538 786 -218 114 -520 164 -767 126z m329 -330 c277 -53 506 -244 602 -503 30 -81 32 -96 33 -217 0 -157 -19 -256 -74 -370 -91 -189 -260 -328 -467 -385 -92 -25 -302 -28 -390 -5 -139 36 -245 91 -332 171 -85 79 -129 137 -180 240 -64 130 -75 180 -74 339 0 123 4 149 26 215 71 209 215 369 415 463 138 64 284 81 441 52z"/>
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
          {/* Badge — hidden on mobile to avoid visual overlap with navbar */}
          <div className="hero-badge hidden sm:flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0055FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0055FF]" />
            </span>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold">
              Premium car hire &nbsp;·&nbsp; Nigeria
            </p>
          </div>

          <h1 className="hero-heading text-[clamp(2.4rem,9.5vw,7.5rem)] font-black leading-[0.88] tracking-tighter text-white mb-8 sm:mb-10 max-w-4xl">
            Hire a car.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #4488FF 60%, #0055FF 100%)", backgroundSize: "200% auto", animation: "shimmer 4s linear infinite" }}
            >
              Arrive
            </span>
            &nbsp;in&nbsp;style.
          </h1>

          <div className="hero-widget">
            <BookingWidget />
          </div>

          {/* Quick contact links */}
          <div className="hero-links mt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            <a
              href={CONTACT.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.72rem] font-semibold text-white/45 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp us</span>
            </a>
            <span className="text-white/15 hidden sm:inline">|</span>
            <a
              href={CONTACT.phone.url}
              className="text-[0.72rem] font-semibold text-white/45 hover:text-white transition-colors"
            >
              or call {CONTACT.phone.number}
            </a>
          </div>

          <div className="hero-stats mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/8 flex flex-wrap gap-7 sm:gap-10">
            {[
              { value: "5,000+", label: "Rides completed" },
              { value: "4.9 ★", label: "Average rating" },
              { value: "6", label: "Cities" },
              { value: "24/7", label: "Support" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-xl sm:text-2xl font-black text-white">{value}</p>
                <p className="text-[0.6rem] sm:text-[0.68rem] uppercase tracking-widest text-white/35 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ticker strip ──────────────────────────────────────────── */}
      <div className="bg-[#0055FF] overflow-hidden py-3">
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
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
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
            <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
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
                <div className="mt-8 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-[#0055FF]">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities ────────────────────────────────────────────────── */}
      <section id="cities" className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
                Where we operate
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white">
                Cities we&apos;re in
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Tap a city to see the cars available near you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/6">
            {CITIES.map(({ name, tag }) => (
              <div
                key={name}
                className="group bg-[#0a0a0a] hover:bg-[#0055FF] transition-colors p-7 cursor-pointer flex flex-col justify-between min-h-[140px]"
              >
                <p className="text-[0.63rem] uppercase tracking-widest text-white/30 font-medium group-hover:text-white/60 transition-colors">
                  {tag}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                  <span className="text-[0.68rem] text-[#0055FF] group-hover:text-white font-bold uppercase tracking-widest transition-colors">
                    View cars →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet ────────────────────────────────────────────────── */}
      <section id="fleet" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/8">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
                Browse vehicles
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                Top-rated vehicles
              </h2>
              <p className="mt-3 text-sm text-gray-500 max-w-sm leading-relaxed">
                {VEHICLES.length} vehicles across Lagos, Abuja, Port Harcourt, and Ibadan.
                Driver and fuel included on most bookings.
              </p>
            </div>
          </div>

          <FleetGrid vehicles={VEHICLES} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-black/8">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
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
                <div className="w-8 h-8 bg-[#0055FF] flex items-center justify-center text-white text-xs font-black">
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
                    <div className="w-6 h-6 bg-[#0055FF]/10 flex items-center justify-center text-[0.65rem] font-black text-[#0055FF]">
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
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
                Good to know
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-tight mb-6">
                Frequently asked questions
              </h2>
              <a
                href="#"
                className="text-[0.72rem] font-bold uppercase tracking-widest text-[#0055FF] border-b border-[#0055FF] pb-0.5 hover:opacity-60 transition-opacity"
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
                    <span className="shrink-0 text-xl text-[#0055FF] font-light group-open:rotate-45 transition-transform origin-center leading-none">
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
      <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white">
              Ready to ride?
            </h2>
            <p className="mt-3 text-white/45 text-base max-w-sm leading-relaxed">
              Find a vehicle with a professional driver in minutes. No hidden fees.
            </p>
          </div>
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0055FF] hover:bg-[#0044DD] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer id="contact" className="bg-[#050505]">

        {/* Top band — brand + contact */}
        <div className="border-b border-white/6">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Brand side */}
            <div>
              <div className="mb-5">
                <CimeLogo textColor="#fff" size="footer" />
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
                Premium, reliable vehicle hire with professional chauffeurs across Nigeria&apos;s top cities. No hidden fees.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 flex items-center justify-center border border-white/12 text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d={s.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Social handles */}
              <div className="mt-4 flex flex-col gap-1">
                {CONTACT.socials.slice(0, 2).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.68rem] text-white/25 hover:text-white/50 transition-colors"
                  >
                    {s.name} &nbsp;·&nbsp; {s.handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/25 font-bold mb-6">
                  Contact us
                </p>
                <div className="space-y-5">
                  <a
                    href={CONTACT.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d={CONTACT.socials[2].iconPath} />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest text-white/25 font-bold mb-0.5">WhatsApp</p>
                      <p className="text-sm text-white/60 group-hover:text-white transition-colors">{CONTACT.whatsapp.number}</p>
                    </div>
                  </a>

                  <a
                    href={CONTACT.phone.url}
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest text-white/25 font-bold mb-0.5">Phone</p>
                      <p className="text-sm text-white/60 group-hover:text-white transition-colors">{CONTACT.phone.number}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest text-white/25 font-bold mb-0.5">Email</p>
                      <p className="text-sm text-white/60 group-hover:text-white transition-colors">{CONTACT.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest text-white/25 font-bold mb-0.5">Based in</p>
                      <p className="text-sm text-white/60">{CONTACT.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick book CTA */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/25 font-bold mb-6">
                    Quick book
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed mb-6">
                    Ready to ride? Message us on WhatsApp and we&apos;ll have a vehicle ready for you.
                  </p>
                  <a
                    href={CONTACT.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#0055FF] hover:bg-[#0044DD] text-white text-[0.72rem] font-bold uppercase tracking-widest px-5 py-3 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                      <path d={CONTACT.socials[2].iconPath} />
                    </svg>
                    Book on WhatsApp
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-white/6">
                  <p className="text-[0.6rem] uppercase tracking-widest text-white/20 font-bold mb-3">Available</p>
                  <p className="text-sm font-bold text-white/50">24 / 7 &nbsp;·&nbsp; All cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="border-b border-white/6">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {[
              {
                heading: "Services",
                links: [
                  { label: "Airport transfers", href: "#services" },
                  { label: "Hourly rental", href: "#services" },
                  { label: "Interstate travel", href: "#services" },
                  { label: "Monthly plans", href: "#services" },
                  { label: "Corporate hire", href: "#services" },
                  { label: "Wedding convoys", href: "#services" },
                ],
              },
              {
                heading: "Locations",
                links: [
                  { label: "Lagos", href: "#cities" },
                  { label: "Abuja", href: "#cities" },
                  { label: "Port Harcourt", href: "#cities" },
                  { label: "Delta", href: "#cities" },
                  { label: "Oyo — Ibadan", href: "#cities" },
                  { label: "Abia", href: "#cities" },
                ],
              },
              {
                heading: "Company",
                links: [
                  { label: "Our fleet", href: "#fleet" },
                  { label: "How it works", href: "#services" },
                  { label: "FAQs", href: "#faq" },
                  { label: "Contact us", href: CONTACT.whatsapp.url },
                  { label: "Book a ride", href: CONTACT.whatsapp.url },
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/25 font-bold mb-5">
                  {heading}
                </p>
                <ul className="space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[0.82rem] text-white/40 hover:text-white/75 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[0.65rem] text-white/18">
            © {new Date().getFullYear()} Cime Rentals. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Terms of Service", href: "#" },
              { label: "Privacy Policy", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.65rem] text-white/18 hover:text-white/40 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </footer>

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
        @keyframes glow-float {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.13; }
          33%     { transform: translate(40px,-30px) scale(1.1); opacity: 0.20; }
          66%     { transform: translate(-25px,20px) scale(0.93); opacity: 0.09; }
        }
        @keyframes glow-pulse {
          0%,100% { transform: scale(1); opacity: 0.07; }
          50%     { transform: scale(1.2); opacity: 0.14; }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes hero-car-drift {
          0%,100% { transform: translateX(0) translateY(0); opacity: 0.04; }
          50%     { transform: translateX(-18px) translateY(-12px); opacity: 0.07; }
        }

        .hero-badge  { animation: fade-up 0.65s 0.10s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-heading{ animation: fade-up 0.75s 0.22s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-widget { animation: fade-up 0.70s 0.38s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-links  { animation: fade-up 0.60s 0.52s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-stats  { animation: fade-up 0.60s 0.64s cubic-bezier(0.16,1,0.3,1) both; }

        .glow-orb-1 { animation: glow-float 11s ease-in-out infinite; }
        .glow-orb-2 { animation: glow-pulse 7s ease-in-out infinite; }
        .glow-orb-3 { animation: glow-float 14s 3s ease-in-out infinite reverse; }
        .hero-car   { animation: hero-car-drift 16s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
