"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CimeLogo from "@/components/CimeLogo";
import { CONTACT } from "@/data/contact";

const LEFT_LINKS = [
  { label: "Rentals", href: "/car-rentals" },
  { label: "Jets", href: "/fleet" },
];

const RIGHT_LINKS = [
  { label: "Services", href: "/car-rentals#services" },
  { label: "Cities", href: "/car-rentals#cities" },
  { label: "FAQ", href: "/car-rentals#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoColor = scrolled ? "#0a0a0a" : "#fff";
  const linkClass = scrolled
    ? "text-[#333] hover:text-[#0a0a0a]"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-[1fr_auto_1fr] items-center h-[68px]">
        {/* Left — nav links (desktop) / menu button (mobile) */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center gap-7 text-[0.8rem] font-medium tracking-wide">
            {LEFT_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${linkClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-[1.5px] w-5" style={{ background: logoColor }} />
            ))}
          </button>
        </div>

        {/* Center — logo */}
        <div className="flex justify-center">
          <Link href="/">
            <CimeLogo textColor={logoColor} size="navbar" />
          </Link>
        </div>

        {/* Right — nav links + CTA (desktop) / spacer (mobile) */}
        <div className="flex items-center justify-end gap-7">
          <nav className="hidden md:flex items-center gap-7 text-[0.8rem] font-medium tracking-wide">
            {RIGHT_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${linkClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block text-[0.8rem] font-bold px-5 py-2.5 transition-colors ${
              scrolled
                ? "bg-[#0a0a0a] text-white hover:bg-black/80"
                : "bg-white text-[#0a0a0a] hover:bg-white/85"
            }`}
          >
            Book a ride
          </a>
          <div className="md:hidden w-9" aria-hidden />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-5">
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] text-white font-bold text-sm px-5 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a ride
          </a>
        </div>
      )}
    </header>
  );
}
