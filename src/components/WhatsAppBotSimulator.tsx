"use client";

import { useState } from "react";

interface ChatTurn {
  id: string;
  sender: "guest" | "ai" | "staff";
  text: string;
  badge?: string;
}

interface Scenario {
  id: string;
  label: string;
  guestMessage: string;
  aiReply: string;
  badge: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "booking",
    label: "Direct Room Booking",
    guestMessage: "Hi, do you have a Deluxe Sea-View room available for this Friday–Sunday?",
    badge: "Real-Time Inventory Lock • 12% GST • Direct Razorpay Link",
    aiReply:
      "Yes! Deluxe Sea-View is available for Fri–Sun (2 nights).\n• Tariff: ₹5,500/night + 12% GST (₹1,320) = ₹12,320 total.\n• I have placed a 10-minute Inventory Lock on Room #402.\n• Complete direct booking (0% OTA fee) via your hotel's Razorpay link: pay.hotel.in/bk-402",
  },
  {
    id: "qr-food",
    label: "Room 304 QR Dining",
    guestMessage: "[Scanned QR: Room 304] Can I order 1 Butter Paneer, 2 Garlic Naan, and 1 Masala Chai?",
    badge: "Kitchen Display Ticket #KDS-88 • 5% F&B GST",
    aiReply:
      "Welcome to In-Room Dining (Room 304 detected automatically).\n• Order: 1× Butter Paneer, 2× Garlic Naan, 1× Masala Chai\n• Subtotal: ₹540 + 5% F&B GST (₹27) = ₹567\n• Ticket #KDS-88 sent to Kitchen Board (Status: New → Preparing). Pay via UPI or Bill to Room 304?",
  },
  {
    id: "kyc",
    label: "10-Sec Pre-Check-In KYC",
    guestMessage: "Here is my Passport photo for tomorrow's 2 PM check-in.",
    badge: "OCR Verified • Express Key Ready",
    aiReply:
      "ID verified in 4 seconds via OCR! Guest profile matched for Booking #HTL-918.\nYour digital key & room assignment are pre-cleared—just collect your keycard at reception with zero paperwork wait.",
  },
  {
    id: "review",
    label: "Post-Stay Review",
    guestMessage: "We loved our stay! Especially the rooftop pool and quick room service. 5/5!",
    badge: "4–5★ Public Review Router",
    aiReply:
      "Thank you so much! We're thrilled you enjoyed the rooftop pool. Would you mind sharing your 5-star experience on Google or Goibibo? Here is your 1-tap link: g.page/r/your-hotel-review",
  },
];

export function WhatsAppBotSimulator() {
  const [activeScenario, setActiveScenario] = useState<string>("booking");
  const [humanTakeover, setHumanTakeover] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      id: "init-1",
      sender: "guest",
      text: SCENARIOS[0].guestMessage,
    },
    {
      id: "init-2",
      sender: "ai",
      text: SCENARIOS[0].aiReply,
      badge: SCENARIOS[0].badge,
    },
  ]);

  const selectScenario = (scenario: Scenario) => {
    setActiveScenario(scenario.id);
    setHumanTakeover(false);
    setMessages([
      { id: `${scenario.id}-g`, sender: "guest", text: scenario.guestMessage },
      {
        id: `${scenario.id}-a`,
        sender: "ai",
        text: scenario.aiReply,
        badge: scenario.badge,
      },
    ]);
  };

  const handleTakeover = () => {
    const next = !humanTakeover;
    setHumanTakeover(next);
    if (next) {
      setMessages((prev) => [
        ...prev,
        {
          id: `staff-${prev.length}`,
          sender: "staff",
          badge: "Front Desk Takeover Active • AI Paused",
          text: "Hi! This is Priya from the Front Desk taking over personally—we've arranged complimentary early check-in at 11 AM for your VIP stay.",
        },
      ]);
    }
  };

  return (
    <div
      id="simulator"
      className="scroll-mt-24 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-5 sm:p-7 shadow-2xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
            💬
          </span>
          <div>
            <p className="text-sm font-bold text-slate-950 dark:text-white">
              HotelOS Interactive WhatsApp Simulator
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Isolated Hotel Vault •{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {humanTakeover ? "Human Staff Active" : "AI Concierge Online (<3s)"}
              </span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleTakeover}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
            humanTakeover
              ? "bg-amber-500 text-slate-950 shadow-sm"
              : "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-cyan-500/50"
          }`}
        >
          {humanTakeover ? "Resume AI Mode" : "Take Over Chat"}
        </button>
      </div>

      {/* Scenario Selector */}
      <div className="mt-4 flex flex-wrap gap-2">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => selectScenario(sc)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeScenario === sc.id
                ? "sine-gradient-bg text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Chat Thread */}
      <div className="mt-5 space-y-3 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-slate-50 dark:bg-[#060a17] p-4 min-h-[260px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === "guest" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                msg.sender === "guest"
                  ? "bg-emerald-600 text-white rounded-br-sm"
                  : msg.sender === "staff"
                    ? "border border-amber-500/40 bg-amber-500/10 text-slate-900 dark:text-amber-100 rounded-bl-sm"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d152c] text-slate-800 dark:text-slate-200 rounded-bl-sm"
              }`}
            >
              {msg.badge && (
                <span className="mb-1.5 inline-block rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                  {msg.badge}
                </span>
              )}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
