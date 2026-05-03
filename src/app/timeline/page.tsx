"use client";

import { useEffect, useMemo, useState } from "react";
import { useL } from "@/lib/providers";

const WEEKS_PER_YEAR = 52;

export default function TimelinePage() {
  const { tr, lang } = useL();
  const [dob, setDob] = useState<string>("1995-01-01");
  const [lifespan, setLifespan] = useState<number>(80);

  // restore from URL
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const d = p.get("dob");
    const ls = parseInt(p.get("ls") || "");
    if (d && /^\d{4}-\d{2}-\d{2}$/.test(d)) setDob(d);
    if (ls >= 50 && ls <= 110) setLifespan(ls);
  }, []);
  // sync to URL
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    p.set("dob", dob);
    p.set("ls", String(lifespan));
    window.history.replaceState({}, "", `${window.location.pathname}?${p.toString()}`);
  }, [dob, lifespan]);

  const stats = useMemo(() => {
    const dobDate = new Date(dob);
    const now = new Date();
    const ms = now.getTime() - dobDate.getTime();
    if (isNaN(ms)) return null;
    const weeksLived = Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24 * 7)));
    const totalWeeks = lifespan * WEEKS_PER_YEAR;
    const weeksAhead = Math.max(0, totalWeeks - weeksLived);
    const ageYears = ms / (1000 * 60 * 60 * 24 * 365.25);
    const yearsAhead = Math.max(0, lifespan - ageYears);
    return {
      weeksLived,
      totalWeeks,
      weeksAhead,
      ageYears,
      yearsAhead,
      weekendsAhead: weeksAhead, // each week has one weekend
      summersAhead: Math.floor(yearsAhead),
      sleepHours: weeksAhead * 7 * 8, // 8h sleep
      workHoursIfWorks40MoreYears: Math.min(40, yearsAhead) * 50 * 40, // 50 weeks/yr, 40h/wk, capped
      freeAttentionHours: weeksAhead * 7 * 4, // ~4h discretionary attention/day
    };
  }, [dob, lifespan]);

  return (
    <main className="container-l py-16 md:py-24">
      <header className="mb-14 max-w-3xl animate-slow-in">
        <div className="eyebrow mb-3">{tr("timelineEyebrow")}</div>
        <h1 className="display-1 mb-6">{tr("timelineTitle")}</h1>
        <p className="lede max-w-2xl">{tr("timelineSubtitle")}</p>
      </header>

      <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_1fr_auto]">
        <div>
          <label className="eyebrow mb-2 block">{tr("timelineEnterDob")}</label>
          <input
            type="date"
            value={dob}
            min="1900-01-01"
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDob(e.target.value)}
            className="input-quiet w-full"
          />
        </div>
        <div>
          <label className="eyebrow mb-2 flex justify-between">
            <span>{tr("timelineYearsLifespan")}</span>
            <span className="text-paper">
              {lifespan} {tr("timelineYears")}
            </span>
          </label>
          <input
            type="range"
            min={50}
            max={110}
            step={1}
            value={lifespan}
            onChange={(e) => setLifespan(parseInt(e.target.value))}
            className="slider-quiet"
          />
        </div>
        <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="flex items-center gap-2 text-bone">
            <span className="inline-block h-2 w-2 bg-gold" />
            {tr("timelineLegendLived")}
          </span>
          <span className="flex items-center gap-2 text-bone">
            <span className="inline-block h-2 w-2 border border-smoke" />
            {tr("timelineLegendRemaining")}
          </span>
        </div>
      </div>

      {stats && <WeeksGrid lifespan={lifespan} weeksLived={stats.weeksLived} />}

      <p className="mt-6 max-w-2xl text-sm italic text-bone">{tr("timelineFootnote")}</p>

      {/* Dashboard */}
      {stats && (
        <section className="mt-24 border-t border-smoke/40 pt-16">
          <div className="eyebrow mb-3">{tr("timelineDashboardTitle")}</div>
          <h2 className="display-2 mb-12">
            {lang === "en"
              ? `If you live ${lifespan}, this is what's left.`
              : `若你活到 ${lifespan} 岁，剩下的便是这些。`}
          </h2>
          <div className="grid gap-px bg-smoke/40 md:grid-cols-2 lg:grid-cols-3">
            <DashStat n={stats.weeksAhead.toLocaleString()} k="timelineDashWeeks" />
            <DashStat n={stats.summersAhead.toString()} k="timelineDashSummers" />
            <DashStat n={stats.weekendsAhead.toLocaleString()} k="timelineDashWeekends" />
            <DashStat n={Math.round(stats.sleepHours).toLocaleString()} k="timelineDashSleeping" suffix={lang === "en" ? "hours" : "小时"} />
            <DashStat n={Math.round(stats.workHoursIfWorks40MoreYears).toLocaleString()} k="timelineDashWorking" suffix={lang === "en" ? "hours" : "小时"} />
            <DashStat n={Math.round(stats.freeAttentionHours).toLocaleString()} k="timelineDashFreeAttention" suffix={lang === "en" ? "hours" : "小时"} accent />
          </div>
        </section>
      )}

      {/* Heatmap of lifetime hours */}
      <Heatmap />
    </main>
  );
}

function WeeksGrid({ lifespan, weeksLived }: { lifespan: number; weeksLived: number }) {
  return (
    <div
      className="select-none rounded-sm"
      role="img"
      aria-label="A grid where each cell is one week of a human life"
    >
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${WEEKS_PER_YEAR}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: lifespan * WEEKS_PER_YEAR }, (_, i) => {
          const lived = i < weeksLived;
          const isCurrent = i === weeksLived;
          return (
            <div
              key={i}
              className="aspect-square"
              style={{
                background: lived
                  ? "#C8A75B"
                  : isCurrent
                  ? "#9C2B2B"
                  : "transparent",
                border: lived || isCurrent ? "none" : "1px solid #1f1f25",
                opacity: lived ? 0.85 + (i / (lifespan * WEEKS_PER_YEAR)) * 0.15 : 1,
              }}
              title={`Week ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function DashStat({
  n,
  k,
  suffix,
  accent,
}: {
  n: string;
  k:
    | "timelineDashWeeks"
    | "timelineDashWeekends"
    | "timelineDashSummers"
    | "timelineDashSleeping"
    | "timelineDashWorking"
    | "timelineDashFreeAttention";
  suffix?: string;
  accent?: boolean;
}) {
  const { tr } = useL();
  return (
    <div className="bg-ink p-8">
      <div className="eyebrow mb-3">{tr(k)}</div>
      <div className={`stat-num text-3xl md:text-4xl ${accent ? "text-gold" : "text-paper"}`}>{n}</div>
      {suffix && <div className="mt-1 font-mono text-xs text-bone">{suffix}</div>}
    </div>
  );
}

// Lifetime allocation — for a 73.4-year median life. 643,584 hours total.
// Numbers are reasonable averages; intent is the *shape*, not precision.
function Heatmap() {
  const { tr, lang } = useL();
  // Hours per day allocations
  const buckets: { kK: any; hours: number; color: string }[] = [
    { kK: "heatmapSleep", hours: 8.0, color: "#1B1B22" },
    { kK: "heatmapWork", hours: 4.5, color: "#2A2A33" }, // averaged across full lifespan including childhood/retirement
    { kK: "heatmapEat", hours: 2.0, color: "#3A3A45" },
    { kK: "heatmapPhone", hours: 3.5, color: "#4A4A55" },
    { kK: "heatmapCommute", hours: 1.5, color: "#5A5A65" },
    { kK: "heatmapHygiene", hours: 1.0, color: "#6A6A75" },
    { kK: "heatmapFree", hours: 3.5, color: "#C8A75B" }, // remaining out of 24
  ];

  const cells = 24 * 30; // 720 cells (1 month worth — good visual)
  let assigned = 0;
  const colored: string[] = [];
  for (const b of buckets) {
    const n = Math.round((b.hours / 24) * cells);
    for (let i = 0; i < n && assigned < cells; i++, assigned++) colored.push(b.color);
  }
  while (colored.length < cells) colored.push("#0A0A0C");

  return (
    <section className="mt-24 border-t border-smoke/40 pt-16">
      <div className="eyebrow mb-3">Sub-module · {lang === "en" ? "Allocation" : "分配"}</div>
      <h2 className="display-2 mb-4">{tr("heatmapTitle")}</h2>
      <p className="lede mb-10 max-w-2xl">{tr("heatmapSubtitle")}</p>

      <div className="grid grid-cols-[1fr_300px] gap-12 md:grid-cols-[1fr_360px]">
        <div
          className="grid gap-[2px]"
          style={{ gridTemplateColumns: `repeat(36, minmax(0, 1fr))` }}
        >
          {colored.map((c, i) => (
            <div key={i} className="aspect-square" style={{ background: c }} />
          ))}
        </div>
        <ul className="space-y-3 self-start">
          {buckets.map((b) => (
            <li key={b.kK} className="flex items-baseline gap-3">
              <span className="inline-block h-3 w-3 flex-shrink-0" style={{ background: b.color }} />
              <span className="flex-1 text-paper/85">{tr(b.kK)}</span>
              <span className="stat-num text-bone">
                {b.hours.toFixed(1)}h
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
