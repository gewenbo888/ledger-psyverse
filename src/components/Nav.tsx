"use client";

import Link from "next/link";
import { useL } from "@/lib/providers";

export function Nav() {
  const { tr, lang, setLang } = useL();

  return (
    <header className="border-b border-smoke/40">
      <div className="container-l flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-xl tracking-tight">{tr("brand")}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone">·</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "/timeline", k: "navTimeline" as const },
            { href: "/decisions", k: "navDecisions" as const },
            { href: "/meaning", k: "navMeaning" as const },
            { href: "/collective", k: "navCollective" as const },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:text-paper"
            >
              {tr(it.k)}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:text-gold"
          aria-label="Toggle language"
        >
          {tr("langToggle")}
        </button>
      </div>
    </header>
  );
}
