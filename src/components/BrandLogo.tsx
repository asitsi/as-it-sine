import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export function BrandLogo({ className = "", compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="AS-IT SINE Home"
      className={`inline-flex items-center gap-3 group ${className}`}
    >
      <span className="inline-flex items-center justify-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm ring-1 ring-slate-200/80 dark:ring-white/15 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src="/logo.png"
          alt="AS-IT SINE Logo"
          width={compact ? 84 : 104}
          height={compact ? 54 : 67}
          className={compact ? "h-8 w-auto object-contain" : "h-10 w-auto object-contain"}
          priority
        />
      </span>
    </Link>
  );
}
