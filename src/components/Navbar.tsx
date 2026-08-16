"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CimeLogo from "@/components/CimeLogo";
import { CONTACT } from "@/data/contact";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <Link href="/">
          <CimeLogo textColor={scrolled ? "#0a0a0a" : "#fff"} size="navbar" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[0.8rem] font-medium tracking-wide">
          {["Fleet", "Services", "Cities", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:opacity-100"
              style={{ color: scrolled ? "#444" : "rgba(255,255,255,0.65)" }}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8rem] font-bold px-5 py-2.5 bg-[#0055FF] text-white hover:bg-[#0044DD] transition-colors"
          >
            Book a ride
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-[1.5px] w-5"
              style={{ background: scrolled ? "#0a0a0a" : "#fff" }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-5">
          {["Fleet", "Services", "Cities", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0055FF] text-white font-bold text-sm px-5 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a ride
          </a>
        </div>
      )}
    </header>
  );
}
