"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/60 hover:shadow-cyan-500/10 cursor-pointer"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        {isDark ? (
          <svg
            className="h-4 w-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-indigo-600 transition-transform duration-300 group-hover:-rotate-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </span>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
