"use client";

import { useEffect, useMemo, useState } from "react";
import { useL } from "@/lib/providers";

type ActKey =
  | "actReading"
  | "actLearningLang"
  | "actExercise"
  | "actSocial"
  | "actMeditation"
  | "actSavings"
  | "actCraft"
  | "actScroll";

const ACTS: ActKey[] = [
  "actReading",
  "actLearningLang",
  "actExercise",
  "actSocial",
  "actMeditation",
  "actSavings",
  "actCraft",
  "actScroll",
];

export default function DecisionsPage() {
  const { tr, lang } = useL();
  const [act, setAct] = useState<ActKey>("actCraft");
  const [hours, setHours] = useState<number>(1);
  const [years, setYears] = useState<number>(20);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const a = p.get("act") as ActKey | null;
    const h = parseFloat(p.get("h") || "");
    const y = parseInt(p.get("y") || "");
    if (a && ACTS.includes(a)) setAct(a);
    if (isFinite(h) && h > 0 && h <= 8) setHours(h);
    if (isFinite(y) && y >= 1 && y <= 60) setYears(y);
  }, []);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    p.set("act", act);
    p.set("h", String(hours));
    p.set("y", String(years));
    window.history.replaceState({}, "", `${window.location.pathname}?${p.toString()}`);
  }, [act, hours, years]);

  const totalHours = hours * 365 * years;
  const totalDays = Math.round(totalHours / 24);

  const gain = useMemo(() => {
    switch (act) {
      case "actReading": {
        const books = Math.floor(totalHours / 6); // ~6h per book
        return { value: books.toLocaleString(), unitK: "decisionGainPagesRead" as const };
      }
      case "actLearningLang": {
        const pct = Math.min(100, (totalHours / 1500) * 100);
        return { value: `${pct.toFixed(0)}%`, unitK: "decisionGainHoursToFluency" as const };
      }
      case "actExercise": {
        const km = Math.round(totalHours * 8); // 8 km/hr running pace, generous
        return { value: km.toLocaleString(), unitK: "decisionGainMilesRun" as const };
      }
      case "actSocial": {
        return { value: totalHours.toLocaleString(), unitK: "decisionGainConvHours" as const };
      }
      case "actMeditation": {
        return { value: totalHours.toLocaleString(), unitK: "decisionGainMedHours" as const };
      }
      case "actSavings": {
        // Compounding savings: monthly contribution of (hours * hourly_wage) at 7% real annual
        const hourlyWage = 25; // assumed
        const monthly = hours * 30 * hourlyWage;
        const months = years * 12;
        const r = 0.07 / 12;
        // future value of annuity
        const fv = monthly * ((Math.pow(1 + r, months) - 1) / r);
        return { value: `$${Math.round(fv).toLocaleString()}`, unitK: "decisionGainSavings" as const };
      }
      case "actCraft": {
        const pct = Math.min(100, (totalHours / 10000) * 100);
        return { value: `${pct.toFixed(0)}%`, unitK: "decisionGainMastery" as const };
      }
      case "actScroll": {
        return { value: totalHours.toLocaleString(), unitK: "decisionGainScrollHours" as const };
      }
    }
  }, [act, hours, years, totalHours]);

  return (
    <main className="container-l py-16 md:py-24">
      <header className="mb-14 max-w-3xl animate-slow-in">
        <div className="eyebrow mb-3">{tr("decisionsEyebrow")}</div>
        <h1 className="display-1 mb-6">{tr("decisionsTitle")}</h1>
        <p className="lede max-w-2xl">{tr("decisionsSubtitle")}</p>
      </header>

      {/* Picker */}
      <div className="border border-smoke/60 p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <label className="eyebrow mb-3 block">{tr("decisionPickAct")}</label>
            <select
              value={act}
              onChange={(e) => setAct(e.target.value as ActKey)}
              className="input-quiet w-full appearance-none pr-6"
            >
              {ACTS.map((a) => (
                <option key={a} value={a} className="bg-ink text-paper">
                  {tr(a)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="eyebrow mb-2 flex justify-between">
              <span>{tr("decisionHours")}</span>
              <span className="text-paper">{hours.toFixed(1)} h</span>
            </label>
            <input
              type="range"
              min={0.25}
              max={8}
              step={0.25}
              value={hours}
              onChange={(e) => setHours(parseFloat(e.target.value))}
              className="slider-quiet"
            />
          </div>
          <div>
            <label className="eyebrow mb-2 flex justify-between">
              <span>{tr("decisionYears")}</span>
              <span className="text-paper">
                {years} {tr("timelineYears")}
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={60}
              step={1}
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              className="slider-quiet"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-smoke/40 md:grid-cols-2">
          <div className="bg-ink p-8">
            <div className="eyebrow mb-3">{tr("decisionGain")}</div>
            <div className="stat-num text-4xl text-gold md:text-5xl">{gain.value}</div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-bone">{tr(gain.unitK)}</div>
            <div className="mt-6 font-mono text-xs text-bone">
              ≈ {totalHours.toLocaleString()} {lang === "en" ? "hours" : "小时"} · {totalDays.toLocaleString()}{" "}
              {lang === "en" ? "days" : "天"}
            </div>
          </div>
          <div className="bg-ink p-8">
            <div className="eyebrow mb-3">{tr("decisionCost")}</div>
            <p className="prose-body">{tr("decisionCostUniversal")}</p>
          </div>
        </div>
      </div>

      {/* Compounding visualization */}
      <section className="mt-24 border-t border-smoke/40 pt-16">
        <div className="eyebrow mb-3">{tr("compoundingEyebrow")}</div>
        <h2 className="display-2 mb-4">{tr("compoundingTitle")}</h2>
        <p className="lede mb-10 max-w-2xl">{tr("compoundingNote")}</p>
        <CompoundingChart hoursPerDay={hours} />
      </section>

      {/* Five paths */}
      <section className="mt-24 border-t border-smoke/40 pt-16">
        <div className="eyebrow mb-3">{tr("counterfactualEyebrow")}</div>
        <h2 className="display-2 mb-4">{tr("counterfactualTitle")}</h2>
        <p className="lede mb-12 max-w-2xl">{tr("counterfactualBody")}</p>

        <div className="grid gap-px bg-smoke/40 md:grid-cols-2 lg:grid-cols-5">
          <Path titleK="pathStability" descK="pathStabilityDesc" costK="pathStabilityCost" />
          <Path titleK="pathExploration" descK="pathExplorationDesc" costK="pathExplorationCost" />
          <Path titleK="pathFamily" descK="pathFamilyDesc" costK="pathFamilyCost" />
          <Path titleK="pathSolitude" descK="pathSolitudeDesc" costK="pathSolitudeCost" />
          <Path titleK="pathService" descK="pathServiceDesc" costK="pathServiceCost" />
        </div>
      </section>
    </main>
  );
}

function CompoundingChart({ hoursPerDay }: { hoursPerDay: number }) {
  const { lang } = useL();
  // Project 50 years of: total hours invested, vs cumulative compounding savings.
  const points: { year: number; hours: number; dollars: number }[] = [];
  const wage = 25;
  const monthly = hoursPerDay * 30 * wage;
  const r = 0.07 / 12;
  for (let y = 0; y <= 50; y++) {
    const months = y * 12;
    const hours = hoursPerDay * 365 * y;
    const dollars = months > 0 ? monthly * ((Math.pow(1 + r, months) - 1) / r) : 0;
    points.push({ year: y, hours, dollars });
  }
  const W = 800;
  const H = 360;
  const PAD = 50;
  const maxH = points[points.length - 1].hours;
  const maxD = points[points.length - 1].dollars;
  const xOf = (y: number) => PAD + (y / 50) * (W - 2 * PAD);
  const yH = (h: number) => H - PAD - (h / maxH) * (H - 2 * PAD);
  const yD = (d: number) => H - PAD - (d / maxD) * (H - 2 * PAD);

  const linearPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xOf(p.year)} ${yH(p.hours)}`).join(" ");
  const expPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xOf(p.year)} ${yD(p.dollars)}`).join(" ");

  return (
    <div className="border border-smoke/40 p-4 md:p-8">
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full">
        {/* axes */}
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="#23232A" />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="#23232A" />
        {/* year ticks */}
        {[0, 10, 20, 30, 40, 50].map((y) => (
          <g key={y}>
            <line x1={xOf(y)} y1={H - PAD} x2={xOf(y)} y2={H - PAD + 4} stroke="#6B6B72" />
            <text x={xOf(y)} y={H - PAD + 18} fontSize="10" fill="#6B6B72" textAnchor="middle" fontFamily="ui-monospace">
              {y}y
            </text>
          </g>
        ))}
        {/* linear hours */}
        <path d={linearPath} fill="none" stroke="#6B6B72" strokeWidth="1.5" strokeDasharray="4 4" />
        {/* exponential dollars */}
        <path d={expPath} fill="none" stroke="#C8A75B" strokeWidth="2" />
        {/* labels at end */}
        <text x={W - PAD - 6} y={yH(maxH) - 8} fontSize="11" fill="#A8A39A" textAnchor="end" fontFamily="ui-monospace">
          {lang === "en" ? "linear: hours invested" : "线性：累计投入小时"}
        </text>
        <text x={W - PAD - 6} y={yD(maxD) - 8} fontSize="11" fill="#C8A75B" textAnchor="end" fontFamily="ui-monospace">
          {lang === "en"
            ? `compounded ($${Math.round(maxD).toLocaleString()})`
            : `复利后（$${Math.round(maxD).toLocaleString()}）`}
        </text>
      </svg>
    </div>
  );
}

function Path({
  titleK,
  descK,
  costK,
}: {
  titleK: any;
  descK: any;
  costK: any;
}) {
  const { tr } = useL();
  return (
    <div className="bg-ink p-8">
      <h3 className="display-3 mb-4 text-gold">{tr(titleK)}</h3>
      <p className="prose-body mb-6">{tr(descK)}</p>
      <p className="text-sm italic text-bone">{tr(costK)}</p>
    </div>
  );
}
