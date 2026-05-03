"use client";

import { useL } from "@/lib/providers";

// Approximations of how an ~80-year life is distributed in years.
const ALLOCATIONS: { kK: any; years: number; color: string }[] = [
  { kK: "heatmapSleep", years: 26.7, color: "#1B1B22" },
  { kK: "heatmapWork", years: 13.0, color: "#2A2A33" },
  { kK: "heatmapPhone", years: 11.7, color: "#4A4A55" },
  { kK: "heatmapEat", years: 6.7, color: "#3A3A45" },
  { kK: "heatmapCommute", years: 5.0, color: "#5A5A65" },
  { kK: "heatmapHygiene", years: 3.3, color: "#6A6A75" },
  { kK: "heatmapFree", years: 13.6, color: "#C8A75B" },
];

export default function CollectivePage() {
  const { tr, lang } = useL();
  const totalYears = ALLOCATIONS.reduce((s, a) => s + a.years, 0);

  return (
    <main className="container-l py-16 md:py-24">
      <header className="mb-20 max-w-3xl animate-slow-in">
        <div className="eyebrow mb-3">{tr("collectiveEyebrow")}</div>
        <h1 className="display-1 mb-6">{tr("collectiveTitle")}</h1>
        <p className="lede max-w-2xl">{tr("collectiveSubtitle")}</p>
      </header>

      {/* Average life bar */}
      <section className="mb-32">
        <div className="eyebrow mb-3">{tr("collectiveAvgTitle")}</div>
        <h2 className="display-2 mb-10 max-w-2xl">
          {lang === "en"
            ? `≈ ${totalYears.toFixed(1)} years, in proportion`
            : `≈ ${totalYears.toFixed(1)} 年，按比例划分`}
        </h2>

        {/* Stacked horizontal bar */}
        <div className="flex h-12 w-full overflow-hidden rounded-sm">
          {ALLOCATIONS.map((a) => (
            <div
              key={a.kK}
              style={{
                width: `${(a.years / totalYears) * 100}%`,
                background: a.color,
              }}
              title={`${a.years} years`}
            />
          ))}
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {ALLOCATIONS.map((a) => (
            <li key={a.kK} className="flex items-baseline gap-3">
              <span className="inline-block h-3 w-3 flex-shrink-0" style={{ background: a.color }} />
              <span className="flex-1 text-paper/85">{tr(a.kK)}</span>
              <span className="stat-num text-bone">
                {a.years.toFixed(1)} {tr("timelineYears")}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Regrets */}
      <section className="border-t border-smoke/40 pt-16">
        <div className="eyebrow mb-3">{lang === "en" ? "The five most repeated" : "最常被重复的五句话"}</div>
        <h2 className="display-2 mb-4 max-w-3xl">{tr("collectiveRegretsTitle")}</h2>
        <p className="lede mb-12 max-w-2xl">{tr("collectiveRegretsSub")}</p>

        <ol className="space-y-12">
          {[1, 2, 3, 4, 5].map((n) => (
            <li key={n} className="flex flex-col gap-4 md:flex-row md:gap-10">
              <div className="font-display text-5xl font-light text-gold/70 md:w-20 md:text-right">
                {String(n).padStart(2, "0")}
              </div>
              <p className="prose-body max-w-2xl text-lg italic md:text-xl">{tr(`regret${n}` as any)}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-2xl text-sm italic text-bone">
          {lang === "en"
            ? "From the work of Bronnie Ware, palliative care nurse and author of The Top Five Regrets of the Dying. Patterns recurred across patients, ages, and circumstances."
            : "出自临终关怀护士 Bronnie Ware 的著作《临终前最常见的五种遗憾》。这些主题在不同年龄、不同处境的病人那里反复出现。"}
        </p>
      </section>

      {/* Coming soon */}
      <section className="mt-32 border-t border-smoke/40 pt-16">
        <div className="eyebrow mb-3">{lang === "en" ? "Roadmap" : "路线图"}</div>
        <h2 className="display-2 mb-4 max-w-3xl">{tr("collectiveSoonTitle")}</h2>
        <p className="prose-body max-w-2xl">{tr("collectiveSoonBody")}</p>
      </section>
    </main>
  );
}
