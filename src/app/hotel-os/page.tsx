import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { WhatsAppBotSimulator } from "@/components/WhatsAppBotSimulator";
import { HotelOsFaq } from "@/components/HotelOsFaq";
import { createPageMetadata, getBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AS-IT SINE HotelOS — 24/7 WhatsApp AI Concierge & Direct Booking Engine",
  description:
    "Turn every WhatsApp message into a direct commission-free hotel booking, room service order, and 5-star review. Syncs with eZee, STAAH, Goibibo & MakeMyTrip.",
  path: "/hotel-os",
  keywords: [
    "WhatsApp AI Concierge for Hotels",
    "Direct Hotel Booking Engine",
    "HotelOS AS-IT SINE",
    "In-room QR food ordering",
    "Hotel Pre-Check-In KYC WhatsApp",
    "eZee STAAH WhatsApp sync",
  ],
});

const TRUST_BAR = [
  "3-Click Official WhatsApp Setup",
  "Zero Outside Data / Zero Hallucinations",
  "Syncs with eZee, STAAH, Goibibo & MakeMyTrip",
  "100% Direct Payouts to Your Payment Gateway",
];

const PAIN_POINTS = [
  {
    stat: "15%–20% Commission Loss",
    title: "Slow Replies Send Guests Back to OTAs",
    description:
      "Every day, potential guests message your property on WhatsApp asking about room availability, tariffs, early check-in, or pool timings—costing you 15% to 20% in OTA commissions when your front desk is busy.",
  },
  {
    stat: "Missed F&B Revenue",
    title: "Dropped Room-Service Calls at Peak Hours",
    description:
      "Busy phone lines and manual order taking during peak dining hours lower your in-room F&B revenue and create avoidable order errors.",
  },
  {
    stat: "Lobby Bottlenecks",
    title: "Manual Check-In Paperwork Delays",
    description:
      "Photocopying IDs and filling arrival registers at the reception counter creates long lobby queues and frustrated guests.",
  },
];

const AUTOPILOT_FEATURES = [
  {
    num: "01",
    title: "Trained Strictly on Your Hotel’s Data (Zero Outside Noise)",
    body: "Unlike generic chatbots that pull inaccurate answers from the internet, your assistant runs on a private, hotel-isolated knowledge base. Upload your room tariffs, house rules, restaurant menu, spa brochure, and local guide—the AI answers guest questions using only your approved information.",
  },
  {
    num: "02",
    title: "24/7 Commission-Free Room Bookings",
    body: "Guests check live room availability, compare room types, see exact GST-inclusive pricing, and complete bookings right inside WhatsApp. Includes Real-Time Inventory Lock during checkout so two guests never double-book, plus Direct Merchant Payouts straight to your Razorpay, Cashfree, or Stripe account.",
  },
  {
    num: "03",
    title: "In-Room QR Food Ordering & Live Kitchen Board",
    body: "Place custom-generated QR codes on every nightstand. Scanning automatically recognizes the guest's Room Number—no app download or typing required. Guests customize dishes, pay online or bill to their room, and tickets appear instantly on your Kitchen Display Screen (New → Preparing → Delivered).",
  },
  {
    num: "04",
    title: "10-Second Digital Pre-Check-In & KYC",
    body: "24 hours before arrival, your assistant automatically messages incoming guests on WhatsApp to collect government ID photos (Passport, Driving License, or Voter ID). Built-in OCR extracts guest details automatically so reception hands over the key in seconds.",
  },
  {
    num: "05",
    title: "Instant Front-Desk Takeover (Human-in-the-Loop)",
    body: "Need to handle a VIP request or a sensitive guest issue? Your reception team monitors all chats from one unified inbox and clicks \"Take Over Chat\" at any moment—pausing the AI instantly so staff can reply personally.",
  },
  {
    num: "06",
    title: "Automated Post-Stay Review Engine",
    body: "After checkout, the assistant sends a friendly feedback message on WhatsApp. 4 & 5-Star guests are guided directly to leave a public review on Google, Goibibo, or TripAdvisor, while 1 to 3-Star guests route privately to the Hotel Manager’s alert inbox.",
  },
];

const LAUNCH_STEPS = [
  {
    step: "Step 1: Connect WhatsApp",
    action:
      "Link your official WhatsApp Business number using our 3-click Meta Embedded Signup—no coding or developer setup needed.",
    time: "2 Minutes",
  },
  {
    step: "Step 2: Upload Hotel Data",
    action:
      "Upload your FAQs, policies, room rates, and food menu files, and connect your payment gateway & PMS (optional).",
    time: "10 Minutes",
  },
  {
    step: "Step 3: Print QRs & Launch",
    action:
      "Download your auto-generated In-Room QR codes, test your assistant in our live simulator, and start taking direct bookings.",
    time: "Instant",
  },
];

const OPERATIONS_FEATURES = [
  {
    title: "PMS & OTA Sync (Optional)",
    desc: "Already using eZee, STAAH, AxisRooms, or Cloudbeds to manage Goibibo, MakeMyTrip, and Booking.com? Connect your Channel Manager so WhatsApp bookings automatically update inventory across every OTA. No PMS? Use our built-in room inventory manager out of the box.",
  },
  {
    title: "Automated Indian GST & Tax Engine",
    desc: "Automatically calculates room tariff GST slabs (12% / 18%) and restaurant F&B GST (5%) on every checkout link and receipt.",
  },
  {
    title: "Staff Role Permissions",
    desc: "Give your Owner, Front Desk, and Kitchen Staff separate logins so everyone sees only the tools they need.",
  },
  {
    title: "Commission-Saved Analytics",
    desc: "Track every rupee earned from direct WhatsApp bookings and see exactly how much OTA commission you saved each month.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Response Time",
    manual: "15 mins – 4 hours",
    ai: "Under 3 seconds, 24/7",
  },
  {
    feature: "Booking Commission",
    manual: "15% – 20% paid to OTAs",
    ai: "0% Commission (Direct to you)",
  },
  {
    feature: "Answer Accuracy",
    manual: "Depends on staff availability",
    ai: "100% grounded in your uploaded hotel files",
  },
  {
    feature: "Room Service Ordering",
    manual: "Busy phone lines & order errors",
    ai: "Scan nightstand QR → Instant Kitchen Ticket",
  },
  {
    feature: "Check-In Speed",
    manual: "5–10 mins manual ID photocopying",
    ai: "Pre-verified via WhatsApp before arrival",
  },
];

const FAQS = [
  {
    question: "Will the AI ever give wrong prices or information from other hotels?",
    answer:
      "No. Each hotel operates inside an isolated data vault. The assistant only reads the documents, menus, and live room rates you upload—never external websites or other properties.",
  },
  {
    question: "Do we need a PMS or Channel Manager to use this?",
    answer:
      "No. If you use eZee, STAAH, or another PMS connected to Goibibo/MakeMyTrip, we sync with it directly. If you don't use a PMS, you can manage all room availability right inside our dashboard.",
  },
  {
    question: "Where does the guest's payment go?",
    answer:
      "Directly into your hotel's bank account. You connect your own Razorpay, Cashfree, or Stripe credentials during setup, and every booking or food payment settles straight to your merchant account.",
  },
  {
    question: "Can our reception staff still reply to guests manually?",
    answer:
      "Yes. Your front desk gets a live shared inbox with instant alerts. Staff can jump into any conversation with one click and hand it back to the AI whenever they are done.",
  },
];

export default function HotelOsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AS-IT SINE HotelOS", path: "/hotel-os" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AS-IT SINE HotelOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, WhatsApp Business",
    url: `${SITE_URL}/hotel-os`,
    creator: { "@type": "Organization", name: "AS-IT SINE" },
    description:
      "24/7 WhatsApp AI Concierge & Direct Booking Engine for Hotels with In-Room QR Dining, Pre-Check-In KYC OCR, PMS/OTA Sync, and 0% Commission Direct Payouts.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <SineWaveBackdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-white/85 dark:bg-slate-900/85 px-4 py-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                <span>24/7 WhatsApp AI Concierge &amp; Direct Booking Engine for Hotels</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:leading-[1.1]">
                Turn Every WhatsApp Message Into a{" "}
                <span className="sine-gradient-text">
                  Direct Booking, Room Service Order, and 5-Star Review.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Automate guest inquiries, room reservations, in-room dining, and
                pre-check-in KYC on WhatsApp—trained exclusively on your hotel’s own
                data, synced with your PMS/OTAs, and paid directly into your bank
                account with zero commission.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full sine-gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform hover:scale-[1.02]"
                >
                  Book a Free Live Demo →
                </Link>
                <a
                  href="#simulator"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/85 dark:bg-slate-900/85 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-md hover:border-cyan-500/60"
                >
                  Test Interactive WhatsApp Bot
                </a>
                <Link
                  href="/hotel/onboarding"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:underline px-2 py-2"
                >
                  Start Property Onboarding →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <WhatsAppBotSimulator />
            </div>
          </div>

          {/* Trust Bar */}
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BAR.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0b1124]/80 px-4 py-3 text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md shadow-sm"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full sine-gradient-bg text-[10px] text-white">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Hotels Lose Revenue Today */}
      <section className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              The Revenue Leak
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Why Hotels Lose Revenue Today
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Your AI Hotel Assistant fixes all three bottlenecks automatically—without
              replacing your hospitality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((pain) => (
              <article
                key={pain.title}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm"
              >
                <span className="inline-block rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                  {pain.stat}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
                  {pain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pain.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Everything Your Hotel Runs on Autopilot */}
      <section className="py-20 sm:py-24 bg-slate-100/70 dark:bg-[#070b1a] border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Core Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Everything Your Hotel Runs on Autopilot
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AUTOPILOT_FEATURES.map((feat) => (
              <article
                key={feat.num}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl sine-gradient-bg text-xs font-bold text-white">
                  {feat.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {feat.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Go Live in 3 Simple Steps */}
      <section className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Rapid Deployment
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Go Live in 3 Simple Steps
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {LAUNCH_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm"
              >
                <div>
                  <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-300">
                    Time Required: {item.time}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
                    {item.step}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Built for Modern Hotel Operations */}
      <section className="py-20 sm:py-24 bg-slate-100/70 dark:bg-[#070b1a] border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Operations &amp; Compliance
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Built for Modern Hotel Operations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {OPERATIONS_FEATURES.map((op) => (
              <div
                key={op.title}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {op.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Traditional Front Desk vs. Your WhatsApp AI Assistant */}
      <section className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Side-by-Side Comparison
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Traditional Front Desk vs. Your WhatsApp AI Assistant
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Manual WhatsApp &amp; OTAs
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Hotel WhatsApp AI Assistant
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                      {row.manual}
                    </td>
                    <td className="px-6 py-4 font-semibold text-emerald-700 dark:text-emerald-300">
                      ✓ {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="py-20 sm:py-24 bg-slate-100/70 dark:bg-[#070b1a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <HotelOsFaq items={FAQS} />
        </div>
      </section>

      {/* 8. Final Call-to-Action Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl sine-gradient-bg px-8 py-14 text-center text-white shadow-2xl sm:px-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stop Paying 20% Commission on Guests Who Already Want to Book With You.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90">
              Give your guests instant 24/7 WhatsApp service while keeping 100% of your
              revenue.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-transform hover:scale-[1.03]"
              >
                Get Started — Book Your 15-Minute Demo
              </Link>
              <Link
                href="/hotel/onboarding"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20"
              >
                Launch Property Onboarding →
              </Link>
            </div>
            <p className="mt-5 text-xs font-medium text-white/85">
              No technical skills required • Live in under 24 hours • Dedicated onboarding support
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
