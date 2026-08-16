import Navbar from "@/components/Navbar";
import BookingWidget from "@/components/BookingWidget";

const STATS = [
  { value: "5,000+", label: "Rides completed" },
  { value: "4.9", label: "Average rating" },
  { value: "20+", label: "Vehicle models" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Search",
    desc: "Pick your city, trip type, and date. We'll show you what's available.",
  },
  {
    step: "02",
    title: "Choose",
    desc: "Browse our fleet — economy, executive, or SUVs — and pick the perfect fit.",
  },
  {
    step: "03",
    title: "Book",
    desc: "Confirm your booking in seconds. A driver arrives right on time.",
  },
];

const SERVICES = [
  { icon: "✈️", title: "Airport Pickup", desc: "Stress-free transfers to and from any airport." },
  { icon: "🕐", title: "Hourly Hire", desc: "Need a car for a few hours? We've got you." },
  { icon: "📅", title: "Daily Rental", desc: "Full-day access with a dedicated driver or self-drive." },
  { icon: "🛣️", title: "Interstate Travel", desc: "Comfortable long-distance trips between cities." },
  { icon: "🏢", title: "Corporate", desc: "Reliable fleet solutions for businesses of any size." },
  { icon: "💍", title: "Events & Weddings", desc: "Premium vehicles to make your occasion special." },
];

const FLEET = [
  { name: "Toyota Corolla", category: "Economy", price: "₦25,000", tag: "Popular" },
  { name: "Toyota Camry", category: "Sedan", price: "₦35,000", tag: null },
  { name: "Toyota Prado", category: "SUV", price: "₦60,000", tag: "Premium" },
  { name: "Honda CR-V", category: "SUV", price: "₦50,000", tag: null },
  { name: "Mercedes E-Class", category: "Executive", price: "₦90,000", tag: "Luxury" },
  { name: "Hyundai Sonata", category: "Sedan", price: "₦30,000", tag: null },
];

const TESTIMONIALS = [
  {
    name: "Amaka O.",
    role: "Business traveller",
    text: "Cime made my Lagos–Abuja trip seamless. The car was spotless and the driver was on time. Highly recommend!",
  },
  {
    name: "Tunde B.",
    role: "Regular customer",
    text: "I use Cime for every airport run. Reliable, professional, and always affordable.",
  },
  {
    name: "Chioma N.",
    role: "Event planner",
    text: "Booked 4 vehicles for a wedding. Everything was perfect — the team went above and beyond.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start gap-10 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              Premium car hire
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Move in <span className="text-amber-500">comfort.</span>
              <br />
              Arrive in style.
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-xl">
              Book reliable, chauffeur-driven cars for airport pickups, city trips, or interstate journeys — all in minutes.
            </p>
          </div>

          <BookingWidget />

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Simple process</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">How it works</h2>
            <p className="mt-3 text-gray-500">Three easy steps to get you moving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-7xl font-black text-gray-100 select-none leading-none">{item.step}</span>
                <div className="-mt-8 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">What we offer</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Our services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-amber-500 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Browse vehicles</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Our fleet</h2>
            <p className="mt-3 text-gray-500">From economy to executive — a car for every need and budget.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((car) => (
              <div
                key={car.name}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Placeholder image area */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-44 flex items-center justify-center relative">
                  <span className="text-6xl opacity-30">🚗</span>
                  {car.tag && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {car.tag}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{car.category}</span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">{car.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-gray-900">{car.price}</span>
                      <span className="text-sm text-gray-400 ml-1">/ day</span>
                    </div>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Customer love</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">What people say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="booking" className="py-20 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white">Ready to ride?</h2>
          <p className="mt-3 text-amber-100 text-lg max-w-xl mx-auto">
            Book your car in under 2 minutes. No hidden fees, no surprises.
          </p>
          <button className="mt-8 bg-white text-amber-600 font-bold px-8 py-3.5 rounded-full text-base hover:bg-amber-50 transition-colors shadow-lg">
            Book a car now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <p className="text-xl font-bold text-white">
                Cime<span className="text-amber-500">.</span>
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Premium car hire for individuals and businesses across Nigeria.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-300 mb-4">Services</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {["Airport Pickup", "Hourly Hire", "Daily Rental", "Interstate", "Corporate"].map((l) => (
                  <li key={l}><a href="#services" className="hover:text-gray-300 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-300 mb-4">Company</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {["About us", "Blog", "Careers", "Partners"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-gray-300 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-300 mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Lagos, Nigeria</li>
                <li>hello@cimerentals.com</li>
                <li>+234 800 000 0000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Cime Rentals. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400">Privacy</a>
              <a href="#" className="hover:text-gray-400">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
