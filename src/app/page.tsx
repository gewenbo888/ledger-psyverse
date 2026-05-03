"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useL } from "@/lib/providers";

const MEDIAN_LIFESPAN_YEARS = 73.4;
const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export default function Home() {
  const { tr, lang } = useL();

  // Ticker — counts down from a "median age" reference. Pure illustrative.
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Reference: assume the visitor is 30 years old. We don't know their age.
  // The ticker is illustrative — "if you were born today, you'd have this many weeks ahead at the median".
  const totalWeeksAtMedian = Math.floor(MEDIAN_LIFESPAN_YEARS * 52.1429);
  // Live counter: weeks since the page loaded (subtle motion only).
  const [t0] = useState(now);
  const elapsedWeeks = (now - t0) / MS_PER_WEEK;
  const tickerWeeks = totalWeeksAtMedian - elapsedWeeks;

  return (
    <main className="atmos">
      {/* HERO */}
      <section className="container-l py-24 md:py-40">
        <div className="max-w-3xl animate-slow-in">
          <div className="eyebrow mb-8">{tr("heroEyebrow")}</div>
          <h1 className="display-1 mb-10">{tr("heroTitle")}</h1>
          <p className="lede max-w-2xl">{tr("heroSubtitle")}</p>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/timeline" className="btn-primary">
              {tr("heroCta")} →
            </Link>
            <a href="#premise" className="btn-ghost">
              {tr("heroSecondary")}
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-24 max-w-2xl border-l border-gold/40 pl-6 md:mt-32">
          <div className="eyebrow mb-3">{lang === "en" ? "Reference: median lifespan" : "参考：中位寿命"}</div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-4xl tabular-nums text-gold animate-breathe md:text-5xl">
              {tickerWeeks.toFixed(2)}
            </span>
            <span className="text-bone">{tr("tickerWeeksLeft")}</span>
          </div>
          <p className="mt-3 text-sm italic text-bone">{tr("tickerStatistical")}</p>
        </div>
      </section>

      {/* PREMISES */}
      <section id="premise" className="border-t border-smoke/40 py-24 md:py-32">
        <div className="container-l">
          <div className="eyebrow mb-12">{tr("premiseEyebrow")}</div>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
            <Premise n="I" titleK="premise1Title" bodyK="premise1Body" />
            <Premise n="II" titleK="premise2Title" bodyK="premise2Body" />
            <Premise n="III" titleK="premise3Title" bodyK="premise3Body" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-smoke/40 py-24 md:py-32">
        <div className="container-narrow">
          <div className="eyebrow mb-8">{tr("manifestoEyebrow")}</div>
          <div className="prose-body">
            <p>{tr("manifestoBody1")}</p>
            <p>{tr("manifestoBody2")}</p>
            <p>{tr("manifestoBody3")}</p>
          </div>
        </div>
      </section>

      {/* MODULE INDEX */}
      <section className="border-t border-smoke/40 py-24 md:py-32">
        <div className="container-l">
          <div className="grid gap-px bg-smoke/40 md:grid-cols-2">
            <ModuleCard
              n="I"
              titleK="navTimeline"
              descK={lang === "en" ? null : null}
              href="/timeline"
              text={
                lang === "en"
                  ? "A 100-year canvas. One cell per week. The ones spent are lit. Look, without commentary."
                  : "一张百年画布，每格一周。已度过的那些被点亮。请直接看，不必评论。"
              }
            />
            <ModuleCard
              n="II"
              titleK="navDecisions"
              href="/decisions"
              text={
                lang === "en"
                  ? "Pick a daily commitment, see what it accumulates to over decades, and what it cancels."
                  : "选一项每日投入，看它在数十年里累积成什么，又取消了什么。"
              }
            />
            <ModuleCard
              n="III"
              titleK="navMeaning"
              href="/meaning"
              text={
                lang === "en"
                  ? "Meaning, in three frames: biological, psychological, philosophical. Held together, the silhouette appears."
                  : "意义，从三个视角：生物学、心理学、哲学。三者并置，轮廓自现。"
              }
            />
            <ModuleCard
              n="IV"
              titleK="navCollective"
              href="/collective"
              text={
                lang === "en"
                  ? "How a billion lives are spent. Common patterns. The most repeated regrets, in their own words."
                  : "十亿人是怎么过完一生的。常见的模式。临终者最常重复的话，原话照录。"
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Premise({
  n,
  titleK,
  bodyK,
}: {
  n: string;
  titleK: "premise1Title" | "premise2Title" | "premise3Title";
  bodyK: "premise1Body" | "premise2Body" | "premise3Body";
}) {
  const { tr } = useL();
  return (
    <div>
      <div className="font-mono text-sm tracking-[0.2em] text-gold">{n}.</div>
      <h3 className="display-3 mt-3">{tr(titleK)}</h3>
      <p className="prose-body mt-5">{tr(bodyK)}</p>
    </div>
  );
}

function ModuleCard({
  n,
  titleK,
  href,
  text,
}: {
  n: string;
  titleK: "navTimeline" | "navDecisions" | "navMeaning" | "navCollective";
  descK?: any;
  href: string;
  text: string;
}) {
  const { tr } = useL();
  return (
    <Link href={href} className="group bg-ink p-10 md:p-12">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-gold">{n}</span>
        <span className="font-mono text-xs tracking-[0.18em] text-bone transition-colors group-hover:text-paper">
          →
        </span>
      </div>
      <h3 className="display-2 mt-4 transition-colors group-hover:text-gold">{tr(titleK)}</h3>
      <p className="prose-body mt-4 max-w-md">{text}</p>
    </Link>
  );
}
