import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import {
  COMPANY_LOCATION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  createPageMetadata,
  getBreadcrumbSchema,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact AS-IT SINE — Start Your Website, App, SaaS or AI Agent Project",
  description:
    "Get in touch with AS-IT SINE to build your website, mobile app, SaaS platform, or autonomous AI agent, or request a demo of our HotelOS product.",
  path: "/contact",
  keywords: ["contact AS-IT SINE", "hire AI engineers", "SaaS consultation", "HotelOS demo"],
});

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 py-16 sm:py-24">
        <SineWaveBackdrop />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
            Contact Us
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Let&apos;s Architect Your{" "}
            <span className="sine-gradient-text">Next Breakthrough.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Share your idea or product roadmap. Our engineering team typically responds
            within one business day.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm space-y-5">
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  Direct Channels
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 inline-block font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone / WhatsApp
                    </p>
                    <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                      {CONTACT_PHONE}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Studio Location
                    </p>
                    <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
                      {COMPANY_LOCATION}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                  Newly Launched Product
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
                  Looking to Onboard a Hotel?
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  You can jump straight into our newly launched HotelOS onboarding wizard
                  right now.
                </p>
                <Link
                  href="/hotel/onboarding"
                  className="mt-4 inline-flex items-center gap-2 rounded-full sine-gradient-bg px-5 py-2.5 text-xs font-semibold text-white shadow-md"
                >
                  Open Hotel Onboarding →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
