"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-[#050814]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <BrandLogo compact />

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/hotel-os"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm ${
              pathname === "/hotel-os" || pathname === "/hotel/onboarding"
                ? "sine-gradient-bg text-white shadow-cyan-500/25"
                : "border border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            New: HotelOS
          </Link>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center rounded-full sine-gradient-bg px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-transform hover:scale-[1.02]"
          >
            Start a Project
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="inline-flex md:hidden items-center justify-center rounded-xl border border-slate-300/80 dark:border-slate-700/80 p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#050814]/95 px-4 py-4 backdrop-blur-xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "sine-gradient-bg text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/hotel-os"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center justify-between rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300"
            >
              <span>Newly Launched: HotelOS</span>
              <span>→</span>
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
