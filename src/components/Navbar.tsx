"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-green-900/40 bg-[#030a06]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-green-400 font-black text-2xl tracking-tight">CBC</span>
          <span className="text-green-600 text-sm font-medium hidden sm:block">Cart Boy Consulting</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-green-200/70">
          <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          <a href="#who-we-are" className="hover:text-green-400 transition-colors">Who We Are</a>
          <a href="#why-it-works" className="hover:text-green-400 transition-colors">Why It Works</a>
          <a href="#modules" className="hover:text-green-400 transition-colors">The Course</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#modules"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded-full text-sm transition-all"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-green-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#030a06] border-t border-green-900/40 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-green-200/70">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-green-400">About</a>
          <a href="#who-we-are" onClick={() => setOpen(false)} className="hover:text-green-400">Who We Are</a>
          <a href="#why-it-works" onClick={() => setOpen(false)} className="hover:text-green-400">Why It Works</a>
          <a href="#modules" onClick={() => setOpen(false)} className="hover:text-green-400">The Course</a>
          <a
            href="#modules"
            onClick={() => setOpen(false)}
            className="bg-green-500 text-black font-bold px-5 py-2.5 rounded-full text-center"
          >
            Get Started →
          </a>
        </div>
      )}
    </nav>
  );
}
