"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PRODUCT_HIGHLIGHTS = [
  {
    step: "01",
    title: "24/7 Commission-Free Bookings",
    detail: "Real-Time Inventory Lock & direct payouts to your Razorpay, Cashfree, or Stripe.",
    liveEvent: "Room #402 locked • ₹12,320 settled directly (₹2,464 OTA fee saved)",
    tag: "DIRECT BOOKING",
  },
  {
    step: "02",
    title: "Zero Outside Noise AI Vault",
    detail: "Trained strictly on your hotel tariffs, policies & menus—zero hallucinations.",
    liveEvent: "Answered guest tariff & pool query in 1.8s from private hotel vault",
    tag: "ISOLATED AI",
  },
  {
    step: "03",
    title: "In-Room QR Food & Kitchen Board",
    detail: "Nightstand QR detects Room Number automatically (New → Preparing → Delivered).",
    liveEvent: "Room 304 scanned QR • Ticket #KDS-88 pushed to Kitchen Board",
    tag: "QR F&B",
  },
  {
    step: "04",
    title: "10-Second Pre-Check-In KYC",
    detail: "Automated WhatsApp ID collection & OCR extraction 24 hours before arrival.",
    liveEvent: "Passport OCR verified in 3.8s • Reception keycard pre-cleared",
    tag: "OCR KYC",
  },
  {
    step: "05",
    title: "Take Over Chat & Review Engine",
    detail: "1-click front-desk takeover plus 4–5★ public review routing & private 1–3★ alerts.",
    liveEvent: "5★ guest routed to Google Reviews • Front-desk takeover ready",
    tag: "REVIEWS & INBOX",
  },
];

const FEATURE_CARDS = [
  {
    title: "0% OTA Commission",
    desc: "Stop losing 15%–20% to OTAs—settle direct to Razorpay, Cashfree, or Stripe.",
  },
  {
    title: "3-Click WhatsApp Setup",
    desc: "Connect official WhatsApp Business in 2 mins; live in under 24 hours.",
  },
  {
    title: "Indian GST Engine Built-In",
    desc: "Auto-calculates 12%/18% room tariff GST & 5% F&B GST on receipts.",
  },
  {
    title: "PMS & OTA Sync Ready",
    desc: "Syncs with eZee, STAAH, AxisRooms & Cloudbeds—or use built-in inventory.",
  },
];

export function HotelOsSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCT_HIGHLIGHTS.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentItem = PRODUCT_HIGHLIGHTS[activeIndex];

  return (
    <section
      id="new-launch"
      aria-labelledby="new-launch-heading"
      className="relative py-20 sm:py-28 bg-slate-100/70 dark:bg-[#070b1a] border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
    >
      {/* Ambient floating aura behind the spotlight card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[38rem] w-[58rem] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20 blur-3xl animate-pulse-glow"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated gradient outer frame */}
        <div className="relative rounded-[2.1rem] p-[1.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 animate-gradient-pan shadow-2xl shadow-cyan-500/15 dark:shadow-cyan-500/20">
          <div className="relative rounded-[2rem] bg-white/95 dark:bg-[#090f22]/95 p-8 sm:p-12 lg:p-14 backdrop-blur-xl overflow-hidden">
            {/* Subtle top animated wave accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-gradient-pan" />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25">
                  <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                  <span>🚀 Newly Launched • 24/7 WhatsApp AI Concierge</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-[2px] animate-shimmer-sweep"
                  />
                </div>

                <h2
                  id="new-launch-heading"
                  className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Introducing{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent animate-gradient-pan">
                    AS-IT SINE HotelOS
                  </span>
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Turn every WhatsApp message into a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    direct commission-free booking, room service order, and 5-star review
                  </strong>
                  . Trained exclusively on your hotel’s own data, synced with eZee,
                  STAAH, Goibibo &amp; MakeMyTrip, and settled directly into your bank
                  account.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {FEATURE_CARDS.map((feat) => (
                    <div
                      key={feat.title}
                      className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/hotel-os"
                    className="relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-[1.03]"
                  >
                    <span className="relative z-10">Explore HotelOS Platform →</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-[2px] animate-shimmer-sweep"
                    />
                  </Link>
                  <Link
                    href="/hotel-os#simulator"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    Test Interactive WhatsApp Bot
                  </Link>
                  <Link
                    href="/hotel/onboarding"
                    className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Launch Onboarding →
                  </Link>
                </div>
              </div>

              {/* Right Column: Auto-cycling Animated Autopilot Pipeline */}
              <div
                className="lg:col-span-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-[#060a17] p-6 sm:p-7 shadow-inner">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Hotel Autopilot Suite
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        WhatsApp AI Concierge &amp; Booking Engine
                      </h3>
                    </div>
                    <Link
                      href="/hotel-os"
                      className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/25 transition-colors"
                    >
                      Full Overview ↗
                    </Link>
                  </div>

                  {/* Interactive Animated Steps */}
                  <div className="space-y-2.5">
                    {PRODUCT_HIGHLIGHTS.map((item, idx) => {
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={item.step}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          className={`relative w-full text-left overflow-hidden flex items-start gap-4 rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "border-cyan-500/60 bg-white dark:bg-[#0d1630] shadow-lg shadow-cyan-500/10 scale-[1.015]"
                              : "border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#0b1124]/60 opacity-80 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-md shadow-cyan-500/25"
                                : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            {item.step}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                {item.title}
                              </p>
                              {isActive && (
                                <span className="hidden sm:inline-block rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-bold text-cyan-600 dark:text-cyan-300">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                              {item.detail}
                            </p>
                          </div>

                          {/* Smooth progress bar along bottom of active step */}
                          {isActive && !isPaused && (
                            <span
                              key={`progress-${activeIndex}`}
                              aria-hidden="true"
                              className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-progress-fill"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Live Pulsing Activity Feed */}
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <p className="font-medium text-emerald-800 dark:text-emerald-200 truncate">
                      <span className="font-bold">Live Signal:</span> {currentItem.liveEvent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
