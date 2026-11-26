import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { CONTACT_EMAIL, COMPANY_LOCATION } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#060916]/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <BrandLogo compact />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xs">
              AS-IT SINE builds high-velocity websites, native mobile apps, cloud SaaS
              platforms, and autonomous AI agents engineered for modern businesses.
            </p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
              {COMPANY_LOCATION}
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/services#websites" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Websites & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#saas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#ai-agents" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Autonomous AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Our Teams
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newly Launched Product */}
          <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              New Launch
            </span>
            <h3 className="mt-2.5 text-base font-bold text-slate-900 dark:text-white">
              AS-IT SINE HotelOS
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              24/7 WhatsApp AI Concierge &amp; Direct Booking Engine for hotels with 0%
              OTA commission.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/hotel-os"
                className="inline-flex items-center gap-1.5 rounded-full sine-gradient-bg px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:opacity-95 transition-opacity"
              >
                Explore HotelOS →
              </Link>
              <Link
                href="/hotel/onboarding"
                className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Onboarding
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 dark:border-slate-800/80 pt-8 text-xs text-slate-500 dark:text-slate-400 sm:flex-row">
          <p>© 2026 AS-IT SINE Software Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
