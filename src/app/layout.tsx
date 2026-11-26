import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  SITE_URL,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050814" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  applicationName: COMPANY_NAME,
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  keywords: [
    "AS-IT SINE",
    "software engineering company",
    "custom website development",
    "mobile app development",
    "SaaS product engineering",
    "autonomous AI agents",
    "HotelOS onboarding",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 800,
        height: 600,
        alt: `${COMPANY_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: [`${SITE_URL}/logo.png`],
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('as-it-sine-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-cyan-500/25">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
