"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Website / Web Platform",
  "Mobile App (iOS / Android)",
  "SaaS Product Engineering",
  "Autonomous AI Agents",
  "HotelOS Onboarding Demo",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 sm:p-10 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-lg">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
          Inquiry Received!
        </h3>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Thank you, <strong>{name}</strong>. Our engineering lead at AS-IT SINE has
          logged your <strong>{selectedType}</strong> inquiry and will respond to{" "}
          <strong>{email}</strong> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setCompany("");
            setMessage("");
          }}
          className="mt-2 rounded-full sine-gradient-bg px-6 py-2.5 text-xs font-semibold text-white shadow-md cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 sm:p-10 shadow-xl space-y-6"
    >
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          What are we building together?
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => {
            const active = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? "sine-gradient-bg text-white shadow-md"
                    : "border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
          >
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Rivera"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/70 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
          >
            Work Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/70 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-company"
          className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
        >
          Company / Organization
        </label>
        <input
          id="contact-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme Ventures"
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/70 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
        >
          Project Scope & Goals *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your timeline, target users, and what you want to launch..."
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/70 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full sine-gradient-bg py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.01] cursor-pointer"
      >
        Send Project Inquiry →
      </button>
    </form>
  );
}
