import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import { VEHICLE_DETAILS } from "@/data/vehicleDetails";
import { CONTACT } from "@/data/contact";

export async function generateStaticParams() {
  return Object.keys(VEHICLE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = VEHICLE_DETAILS[slug];
  if (!v) return {};
  return {
    title: `${v.name} — Cime Rentals`,
    description: v.description.slice(0, 155),
  };
}

function FeatureTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-black/12 px-3 py-1.5 text-[0.7rem] font-semibold text-[#0a0a0a] uppercase tracking-widest">
      {label}
    </span>
  );
}

function PriceRow({ label, priceNGN }: { label: string; priceNGN: number }) {
  const formatted = `₦${priceNGN.toLocaleString("en-NG")}`;
  return (
    <div className="flex items-center justify-between py-4 border-b border-black/6 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-base font-black text-[#0a0a0a]">{formatted}</span>
    </div>
  );
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = VEHICLE_DETAILS[slug];
  if (!v) notFound();

  const [hero, ...rest] = v.photos;

  return (
    <div className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* ── Hero image ─────────────────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[400px] bg-[#0a0a0a]">
        {hero && (
          <Image
            src={hero}
            alt={v.name}
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
        )}
        {/* top gradient keeps the transparent navbar legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-8 pb-10">
          <Link
            href="/#fleet"
            className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-4"
          >
            ← Back to fleet
          </Link>
          <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-2">
            {v.vehicleType} &nbsp;·&nbsp; {v.location}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            {v.name}
          </h1>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

          {/* Left column */}
          <div>
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/8 mb-16">
              {[
                { label: "Seats", value: `${v.seats}` },
                { label: "Driver", value: v.driverIncluded ? "Included" : "Self-drive" },
                { label: "Fuel", value: v.fuelIncluded ? "Included" : "Client pays" },
                { label: "Max duration", value: v.maxTripDuration },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white p-5">
                  <p className="text-[0.58rem] uppercase tracking-widest text-gray-400 font-bold mb-1">
                    {label}
                  </p>
                  <p className="text-[0.9375rem] font-bold text-[#0a0a0a]">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-14">
              <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-4">
                About this vehicle
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                {v.description}
              </p>
            </div>

            {/* Features */}
            {v.features.length > 0 && (
              <div className="mb-14">
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-5">
                  Features & amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {v.features.map((f) => (
                    <FeatureTag key={f} label={f} />
                  ))}
                </div>
              </div>
            )}

            {/* Photo gallery */}
            {rest.length > 0 && (
              <div>
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-5">
                  More photos
                </p>
                <PhotoGallery name={v.name} photos={rest} />
              </div>
            )}
          </div>

          {/* Right column — sticky pricing + CTA */}
          <div>
            <div className="lg:sticky lg:top-28">
              <div className="border border-black/8 p-8">
                <p className="text-[0.63rem] uppercase tracking-[0.22em] text-[#0055FF] font-bold mb-6">
                  Pricing
                </p>

                <div className="mb-6">
                  {v.pricing.map((p) => (
                    <PriceRow key={p.label} label={p.label} priceNGN={p.priceNGN} />
                  ))}
                </div>

                <p className="text-[0.65rem] text-gray-400 mb-6 leading-relaxed">
                  All prices include driver and starting fuel.
                  Extra hours billed at ₦20,000 / hr after your booking period ends.
                </p>

                {(() => {
                  const lowestPrice = v.pricing.length
                    ? `₦${Math.min(...v.pricing.map((p) => p.priceNGN)).toLocaleString("en-NG")}`
                    : "";
                  const msg = encodeURIComponent(
                    `Hi Cime! I'd like to book the *${v.name}* (${v.year}, ${v.location}).${lowestPrice ? ` Starting from ${lowestPrice}.` : ""} Please help me arrange this.`
                  );
                  return (
                    <a
                      href={`${CONTACT.whatsapp.url}?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#0055FF] hover:bg-[#0044DD] text-white font-bold text-[0.8rem] uppercase tracking-widest text-center py-4 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book this vehicle
                    </a>
                  );
                })()}

                <div className="mt-5 pt-5 border-t border-black/6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Year
                    </p>
                    <p className="text-sm font-bold">{v.year}</p>
                  </div>
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Color
                    </p>
                    <p className="text-sm font-bold">{v.color}</p>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-[0.7rem] font-bold text-[#0a0a0a] mb-0.5">Need help choosing?</p>
                  <p className="text-xs text-gray-500">Chat with our team — available 24/7.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Similar vehicles CTA ───────────────────────────────────── */}
      <div className="bg-[#0a0a0a] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Browse the full fleet
            </h2>
            <p className="mt-2 text-white/40 text-sm">
              {Object.keys(VEHICLE_DETAILS).length} vehicles available across Nigeria.
            </p>
          </div>
          <Link
            href="/#fleet"
            className="shrink-0 bg-[#0055FF] hover:bg-[#0044DD] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
          >
            See all vehicles
          </Link>
        </div>
      </div>
    </div>
  );
}
