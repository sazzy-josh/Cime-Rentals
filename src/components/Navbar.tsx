"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Cime<span className="text-amber-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#fleet" className="hover:text-gray-900 transition-colors">Fleet</Link>
          <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</Link>
          <Link href="#services" className="hover:text-gray-900 transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-gray-900 transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#booking" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign in
          </Link>
          <Link
            href="#booking"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Book a car
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="#fleet" onClick={() => setMenuOpen(false)}>Fleet</Link>
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="#booking"
            className="bg-amber-500 text-white font-semibold px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a car
          </Link>
        </div>
      )}
    </header>
  );
}
