"use client";

import { useL } from "@/lib/providers";

export function Footer() {
  const { tr } = useL();
  return (
    <footer className="hairline mt-32">
      <div className="container-l flex flex-col items-start justify-between gap-4 py-12 md:flex-row md:items-baseline">
        <div>
          <div className="font-display text-xl tracking-tight">{tr("brand")}</div>
          <div className="mt-1 text-sm text-bone italic">{tr("footerLine")}</div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
          {tr("footerPart")}{" "}
          <a href="https://psyverse.fun" className="quiet-link">{tr("footerPsyverse")}</a>
        </div>
      </div>
    </footer>
  );
}
