"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function HotelOsFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
              <span className="text-base font-bold text-slate-950 dark:text-white">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 transition-transform ${
                  isOpen ? "rotate-45 sine-gradient-bg text-white border-transparent" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 dark:border-slate-800/80 px-6 py-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
