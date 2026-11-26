import type { MetadataRoute } from "next";
import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_NAME} — Websites, Mobile Apps, SaaS & AI Agents`,
    short_name: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#050814",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
