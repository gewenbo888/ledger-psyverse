"use client";

import { useL } from "@/lib/providers";

export default function MeaningPage() {
  const { tr } = useL();
  return (
    <main className="container-l py-16 md:py-24">
      <header className="mb-20 max-w-3xl animate-slow-in">
        <div className="eyebrow mb-3">{tr("meaningEyebrow")}</div>
        <h1 className="display-1 mb-6">{tr("meaningTitle")}</h1>
        <p className="lede max-w-2xl">{tr("meaningSubtitle")}</p>
      </header>

      <article className="space-y-32">
        <Frame
          numberK="meaningBioEyebrow"
          titleK="meaningBioTitle"
          bodyK="meaningBioBody"
        />
        <Frame
          numberK="meaningPsyEyebrow"
          titleK="meaningPsyTitle"
          bodyK="meaningPsyBody"
        />
        <Frame
          numberK="meaningPhilEyebrow"
          titleK="meaningPhilTitle"
          bodyK="meaningPhilBody"
        />
      </article>

      {/* Closing */}
      <section className="mt-32 border-t border-smoke/40 pt-16">
        <div className="container-narrow text-center">
          <p className="lede italic">{tr("meaningClose")}</p>
          <div className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-bone">— ⟡ —</div>
        </div>
      </section>
    </main>
  );
}

function Frame({ numberK, titleK, bodyK }: { numberK: any; titleK: any; bodyK: any }) {
  const { tr } = useL();
  return (
    <section>
      <div className="eyebrow mb-6 text-gold">{tr(numberK)}</div>
      <h2 className="display-2 mb-10 max-w-3xl">{tr(titleK)}</h2>
      <div className="container-narrow !mx-0 !pl-0">
        <p className="prose-body text-[1.0625rem] leading-[1.75] md:text-[1.125rem]">{tr(bodyK)}</p>
      </div>
    </section>
  );
}
