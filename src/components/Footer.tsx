import CimeLogo from "@/components/CimeLogo";
import { CONTACT } from "@/data/contact";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505]">

      {/* Top band — brand + contact */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Brand side */}
          <div>
            <div className="mb-5">
              <CimeLogo textColor="#fff" size="footer" />
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs mb-8">
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
                  className="w-9 h-9 flex items-center justify-center border border-white/12 text-white/75 hover:text-white hover:border-white/30 transition-all"
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
                  className="text-[0.68rem] text-white/65 hover:text-white transition-colors"
                >
                  {s.name} &nbsp;·&nbsp; {s.handle}
                </a>
              ))}
            </div>
          </div>

          {/* Contact side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/65 font-bold mb-6">
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
                    <p className="text-[0.6rem] uppercase tracking-widest text-white/65 font-bold mb-0.5">WhatsApp</p>
                    <p className="text-sm text-white/85 group-hover:text-white transition-colors">{CONTACT.whatsapp.number}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.phone.url}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/75">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-white/65 font-bold mb-0.5">Phone</p>
                    <p className="text-sm text-white/85 group-hover:text-white transition-colors">{CONTACT.phone.number}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/75">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-white/65 font-bold mb-0.5">Email</p>
                    <p className="text-sm text-white/85 group-hover:text-white transition-colors">{CONTACT.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center bg-white/5 text-white/75">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-white/65 font-bold mb-0.5">Based in</p>
                    <p className="text-sm text-white/85">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick book CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/65 font-bold mb-6">
                  Quick book
                </p>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  Ready to ride? Message us on WhatsApp and we&apos;ll have a vehicle ready for you.
                </p>
                <a
                  href={CONTACT.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-white/90 text-[#0a0a0a] text-[0.72rem] font-bold uppercase tracking-widest px-5 py-3 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path d={CONTACT.socials[2].iconPath} />
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-white/6">
                <p className="text-[0.6rem] uppercase tracking-widest text-white/60 font-bold mb-3">Available</p>
                <p className="text-sm font-bold text-white/80">24 / 7 &nbsp;·&nbsp; All cities</p>
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
                { label: "Airport transfers", href: "/car-rentals#services" },
                { label: "Daily rentals", href: "/car-rentals#services" },
                { label: "Interstate travel", href: "/car-rentals#services" },
                { label: "Monthly plans", href: "/car-rentals#services" },
                { label: "Corporate hire", href: "/car-rentals#services" },
                { label: "Wedding convoys", href: "/car-rentals#services" },
              ],
            },
            {
              heading: "Locations",
              links: [
                { label: "Lagos", href: "/car-rentals#cities" },
                { label: "Abuja", href: "/car-rentals#cities" },
                { label: "Edo", href: "/car-rentals#cities" },
                { label: "Delta", href: "/car-rentals#cities" },
                { label: "Rivers", href: "/car-rentals#cities" },
              ],
            },
            {
              heading: "Company",
              links: [
                { label: "Luxury fleet", href: "/" },
                { label: "Car rentals", href: "/car-rentals" },
                { label: "Private jets", href: "/fleet" },
                { label: "How it works", href: "/car-rentals#services" },
                { label: "FAQs", href: "/car-rentals#faq" },
                { label: "Contact us", href: CONTACT.whatsapp.url },
              ],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/65 font-bold mb-5">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[0.82rem] text-white/75 hover:text-white transition-colors"
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
        <p className="text-[0.65rem] text-white/60">
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
              className="text-[0.65rem] text-white/60 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
