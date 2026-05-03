# Life Ledger · 生命账簿

> Time is the only currency you cannot earn back.
> 时间是唯一赚不回来的货币。

Life Ledger is a mirror, a simulator, and a quiet system for looking
honestly at how a life is spent. Not a productivity tool. There is no
streak to maintain, no badge to earn. Four modules: a 100-year weekly
canvas, a daily-decision compounding simulator, a three-frame
philosophical reading, and an aggregate view of how billions of lives
are spent.

## Links

- **Live:** [ledger.psyverse.fun](https://ledger.psyverse.fun)
- **Vercel:** [ledger-psyverse.vercel.app](https://ledger-psyverse.vercel.app)
- **GitHub:** [github.com/gewenbo888/ledger-psyverse](https://github.com/gewenbo888/ledger-psyverse)

## Modules

- `/timeline` — Tim-Urban-style 80×52 weeks-of-your-life canvas. Enter
  your birth date, choose an assumed lifespan, see the cells you've spent
  and the ones you haven't. Plus a dashboard of weekends, summers, and
  free attention remaining.
- `/decisions` — Pick a daily commitment. See what it accumulates to over
  decades — books read, kilometers run, dollars compounded — and read
  the universal cost. Includes a 50-year compounding curve.
- `/meaning` — A three-frame essay on what meaning is: biological,
  psychological, philosophical. No definition is right; the silhouette
  appears between them.
- `/collective` — How an average ~80-year life is distributed across
  sleep, work, screens, eating, hygiene, and "everything else." Plus the
  five most-repeated regrets of the dying.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS, Cormorant Garamond + Inter + JetBrains Mono
- All static, no backend, no auth, no analytics beyond a single tracker
- Bilingual EN / 中文 with localStorage persistence

## Local dev

```bash
npm install
npm run dev   # http://localhost:3048
```

## About

Part of the [Psyverse](https://psyverse.fun) portfolio by [Gewenbo](https://psyverse.fun).
