export type Lang = "en" | "zh";

type T = { en: string; zh: string };
type Dict = Record<string, T>;

export const t: Dict = {
  // Brand
  brand: { en: "Life Ledger", zh: "生命账簿" },
  brandShort: { en: "ledger", zh: "账簿" },
  langToggle: { en: "中文", zh: "EN" },

  // Nav
  navHome: { en: "Premise", zh: "前提" },
  navTimeline: { en: "Timeline", zh: "时间轴" },
  navDecisions: { en: "Decisions", zh: "选择" },
  navMeaning: { en: "Meaning", zh: "意义" },
  navCollective: { en: "Collective", zh: "众生" },

  // ───── Landing
  heroEyebrow: { en: "A unified system of human time, decisions, and meaning", zh: "时间、选择与意义的统一系统" },
  heroTitle: { en: "Your life is a ledger.", zh: "你的一生是一本账簿。" },
  heroSubtitle: {
    en: "Time is the only currency you cannot earn back. Every decision is an entry. The total is your meaning.",
    zh: "时间是唯一赚不回来的货币。每一个选择都是一笔账。结余即是你这一生的意义。",
  },
  heroCta: { en: "Open your ledger", zh: "翻开账簿" },
  heroSecondary: { en: "Read the premise", zh: "阅读前提" },

  tickerWeeksLeft: { en: "weeks remaining", zh: "周还剩" },
  tickerYearsLeft: { en: "years remaining", zh: "年还剩" },
  tickerStatistical: {
    en: "Estimated against a global median lifespan of 73.4 years.",
    zh: "依据全球预期寿命中位数 73.4 岁估算。",
  },

  premiseEyebrow: { en: "Three premises", zh: "三个前提" },
  premise1Title: { en: "Time is non-renewable.", zh: "时间不可再生。" },
  premise1Body: {
    en: "Money returns. Energy returns. Relationships, with care, return. Time does not. The hour you read this in is gone — there is no version of the future where you get it back. Every system in this site begins from this single fact.",
    zh: "钱会再来，精力会恢复，关系若加经营也能修复。唯独时间不会。你读这句话的这一小时已经过去——在任何未来里你都拿不回它。本站的一切系统都从这唯一的事实开始。",
  },
  premise2Title: { en: "Decisions are state changes.", zh: "选择即状态改变。" },
  premise2Body: {
    en: "When you choose A, you do not 'pause' B — you delete it. The version of you that picked B does not exist anywhere. Each decision is a one-way door, and the cumulative effect of small one-way doors is what we call a life.",
    zh: "你选了 A，并不是把 B 暂停——而是把它删掉了。那个选了 B 的你，在任何地方都不存在。每个选择都是一道单向门，许许多多小小的单向门累加起来，就是所谓的人生。",
  },
  premise3Title: { en: "Meaning is emergent.", zh: "意义是涌现出来的。" },
  premise3Body: {
    en: "No single act is meaningful. A decade of consistent acts is. Meaning is the residue of attention sustained over time — what shows up when you stop and look at what you actually did, not what you intended.",
    zh: "单独一件事并不构成意义。十年持续做同一件事，才有意义。意义是注意力在时间中沉淀的痕迹——当你停下来，去看你「实际做了什么」而不是「曾经打算做什么」的时候，它就显现出来。",
  },

  manifestoEyebrow: { en: "What this is", zh: "这是什么" },
  manifestoBody1: {
    en: "Life Ledger is not a productivity tool. There is no streak to maintain, no badge to earn, no leaderboard to climb. We are not interested in helping you do more.",
    zh: "生命账簿不是效率工具。没有要维持的连胜，没有要获得的徽章，没有要爬的排行榜。我们对「帮你做得更多」没有兴趣。",
  },
  manifestoBody2: {
    en: "It is a mirror, a simulator, and a quiet system. A mirror, to show you how your hours actually flow. A simulator, to show you the lives you are not living. A system, because reflection without structure dissolves into mood.",
    zh: "它是一面镜子，一个模拟器，一套安静的系统。镜子——让你看到时间真正怎么流走。模拟器——让你看到你没在过的那些人生。系统——因为没有结构的反思，最后只会化作情绪。",
  },
  manifestoBody3: {
    en: "If you are looking for optimism, this is the wrong room. If you are looking for despair, also wrong. We are looking, with care, at what is.",
    zh: "如果你在找乐观，这里不是。找悲观，也不是。我们只是平静地、认真地，看着事情本来的样子。",
  },

  // ───── Timeline page
  timelineEyebrow: { en: "Module · 1", zh: "模块·一" },
  timelineTitle: { en: "Your life in weeks", zh: "以周为单位的你" },
  timelineSubtitle: {
    en: "Each cell below is one week. Most of us get fewer than four thousand seven hundred. The lit ones are spent.",
    zh: "下方每一格是一周。多数人一辈子不到四千七百格。已点亮的那些已经过去。",
  },
  timelineEnterDob: { en: "Enter your birth date", zh: "输入你的出生日期" },
  timelineYearsLifespan: { en: "Assumed lifespan", zh: "假设寿命" },
  timelineYears: { en: "years", zh: "年" },
  timelineLegendLived: { en: "Lived", zh: "已度过" },
  timelineLegendRemaining: { en: "Remaining", zh: "尚未度过" },
  timelineLegendThisWeek: { en: "This week", zh: "本周" },
  timelineDashboardTitle: { en: "What remains", zh: "你还剩下" },
  timelineDashWeeks: { en: "Weeks ahead", zh: "未来还有的周" },
  timelineDashWeekends: { en: "Weekends", zh: "周末" },
  timelineDashSummers: { en: "Summers", zh: "夏天" },
  timelineDashSleeping: { en: "Spent sleeping", zh: "用于睡眠" },
  timelineDashWorking: { en: "Spent working (40-yr career)", zh: "用于工作（40 年）" },
  timelineDashFreeAttention: { en: "Free attention", zh: "可自由支配的注意力" },
  timelineFootnote: {
    en: "After Tim Urban's 'Your Life in Weeks' (2014). Numbers are approximations against a 73.4-year global median.",
    zh: "致敬 Tim Urban 的 'Your Life in Weeks'（2014）。数字基于 73.4 岁全球中位寿命估算。",
  },

  // Activity heatmap
  heatmapTitle: { en: "Where the hours actually go", zh: "时间究竟去了哪里" },
  heatmapSubtitle: {
    en: "If you live to a global-median age, this is roughly the budget. The yellow cells are what most lives have left for the rest. The other cells are not optional.",
    zh: "活到全球中位寿命，这大约就是你的总预算。金色格子是大多数人一生中留给「剩下的事」的总量。其他格子不是可选项。",
  },
  heatmapSleep: { en: "Sleep", zh: "睡眠" },
  heatmapWork: { en: "Work", zh: "工作" },
  heatmapEat: { en: "Eat & cook", zh: "吃饭与做饭" },
  heatmapCommute: { en: "Commute & errands", zh: "通勤与杂事" },
  heatmapHygiene: { en: "Hygiene", zh: "盥洗" },
  heatmapPhone: { en: "Phone & screens (avg.)", zh: "手机与屏幕（平均）" },
  heatmapFree: { en: "Everything else", zh: "其他所有" },

  // ───── Decisions page
  decisionsEyebrow: { en: "Module · 2", zh: "模块·二" },
  decisionsTitle: { en: "Every yes is a thousand silent nos.", zh: "每一个「是」，都是一千个沉默的「否」。" },
  decisionsSubtitle: {
    en: "Pick one daily commitment. See what it accumulates to — and what it costs.",
    zh: "选一项每日投入。看它在时间里积累成什么——也看它花掉了什么。",
  },
  decisionPickAct: { en: "Daily activity", zh: "每天做的事" },
  decisionHours: { en: "Hours per day", zh: "每天小时数" },
  decisionYears: { en: "Sustained for", zh: "坚持多少年" },

  actReading: { en: "Reading", zh: "阅读" },
  actLearningLang: { en: "Learning a language", zh: "学一门语言" },
  actExercise: { en: "Exercise", zh: "锻炼" },
  actSocial: { en: "Time with someone you love", zh: "陪你爱的人" },
  actMeditation: { en: "Meditation", zh: "冥想" },
  actSavings: { en: "Saving (one hour's wage)", zh: "储蓄（每天一小时工资）" },
  actCraft: { en: "A craft (writing, music, code)", zh: "一门手艺（写作、音乐、代码）" },
  actScroll: { en: "Scrolling", zh: "刷手机" },

  decisionGain: { en: "What you gain", zh: "你得到了什么" },
  decisionCost: { en: "What it cost you", zh: "它的代价是什么" },
  decisionGainPagesRead: { en: "books read", zh: "本书" },
  decisionGainHoursToFluency: { en: "of the ~1500 hrs to language fluency", zh: "（流利掌握一门语言约需 1500 小时）" },
  decisionGainMilesRun: { en: "kilometers run", zh: "公里跑过" },
  decisionGainConvHours: { en: "hours of conversation accumulated", zh: "小时的对话累积" },
  decisionGainMedHours: { en: "hours of stillness", zh: "小时的静坐" },
  decisionGainSavings: { en: "USD saved (at 7% real return)", zh: "美元储蓄（按 7% 实际回报）" },
  decisionGainMastery: { en: "of the ~10,000 hrs to mastery", zh: "（掌握一门手艺约需 10,000 小时）" },
  decisionGainScrollHours: { en: "hours given to a feed", zh: "小时贡献给信息流" },
  decisionCostUniversal: {
    en: "These hours are not stored. They cannot be retrieved. The version of you that did not spend them lives in a future you do not enter.",
    zh: "这些小时不会被存起来，无法取回。那个「没有这样花掉时间」的你，活在一个你不会进入的未来里。",
  },

  compoundingEyebrow: { en: "The compounding curve", zh: "复利曲线" },
  compoundingTitle: {
    en: "Linear effort. Exponential return — for the patient.",
    zh: "线性投入，指数回报——对耐心的人而言。",
  },
  compoundingNote: {
    en: "Every line below is the same daily input, projected forward over decades. Compounding is what makes one hour of attention today worth more than ten hours promised in twenty years.",
    zh: "下方每一条曲线，都是同样的每日投入在几十年后的累计。复利之所以重要——就在于此刻的一小时，胜过二十年后承诺的十小时。",
  },

  counterfactualEyebrow: { en: "The doors not opened", zh: "没有打开的那些门" },
  counterfactualTitle: {
    en: "What you chose, and what you didn't.",
    zh: "你选了什么，没选什么。" ,
  },
  counterfactualBody: {
    en: "Below are five paths most adults face exactly once. Each cancels the others. There is no honest version of life where all five are taken.",
    zh: "下面是大多数成年人一生只面对一次的五条路。任选其一，其他四条便关上了。不存在五条都走的人生。",
  },
  pathStability: { en: "Stability", zh: "安稳" },
  pathStabilityDesc: { en: "A career chosen, deepened, owned. Predictable income, durable expertise.", zh: "选定一份职业，向下扎根，把它变成自己的。收入稳定，技艺扎实。" },
  pathStabilityCost: { en: "Foregoes the lives where you reinvented yourself three times.", zh: "代价：那个「重新发明自己三次」的你，不存在了。" },
  pathExploration: { en: "Exploration", zh: "漂泊" },
  pathExplorationDesc: { en: "Many cities, many roles, wide reference frame.", zh: "走过许多城市，做过许多角色，参照系广。" },
  pathExplorationCost: { en: "Foregoes the depth of one place known across decades.", zh: "代价：那个「一个地方住几十年，把它摸透」的深度，没有了。" },
  pathFamily: { en: "Family", zh: "家庭" },
  pathFamilyDesc: { en: "Children, the discipline of presence, the texture of small repetitions.", zh: "孩子，「在场」的训练，小事一日日重复出来的肌理。" },
  pathFamilyCost: { en: "Foregoes the silent decade you would have used differently.", zh: "代价：那个「独自用十年走另一条路」的你，没有了。" },
  pathSolitude: { en: "Solitude", zh: "独处" },
  pathSolitudeDesc: { en: "Long, undistracted time with one's own mind. Strange thoughts allowed to mature.", zh: "与自己的心智长久共处，不被打扰。让奇怪的想法慢慢成熟。" },
  pathSolitudeCost: { en: "Foregoes the intimacy that only daily proximity creates.", zh: "代价：只有「每天身边有人」才能生出的那种亲密，得不到了。" },
  pathService: { en: "Service", zh: "奉献" },
  pathServiceDesc: { en: "A life arranged around something larger than the self — a calling, a community.", zh: "一生围绕比自己更大的东西展开——一项使命、一个共同体。" },
  pathServiceCost: { en: "Foregoes the unencumbered self that owes nothing.", zh: "代价：那个「无所亏欠、自由自在」的自己，没有了。" },

  // ───── Meaning page
  meaningEyebrow: { en: "Module · 4", zh: "模块·四" },
  meaningTitle: { en: "What is meaning, in three frames.", zh: "意义，从三个视角看。" },
  meaningSubtitle: {
    en: "No definition is right. Each is incomplete in the same way the others are not. Hold all three in mind at once and the silhouette appears.",
    zh: "没有哪个定义是对的。每一个的缺失，恰好被另外两个补上。三个一起看，轮廓就出现了。",
  },

  meaningBioEyebrow: { en: "I — Biological", zh: "一 · 生物学" },
  meaningBioTitle: { en: "Meaning is metabolic.", zh: "意义是新陈代谢。" },
  meaningBioBody: {
    en: "From below, you are a system that converts energy into structure. Every meaningful act — feeding a child, laying a stone, finishing a thought — is the same fundamental transaction: a low-entropy output sustained against the second law. The body does not know the difference between a poem and a meal; it knows only whether the gradient was held or it was let slip. To live meaningfully, in this frame, is to keep the gradient — to keep building, against decay, the small structures that you alone can build. Death is when the gradient inverts. Meaning is everything you held against it.",
    zh: "从底层看，你是把能量转化为结构的一台系统。每一件有意义的事——喂养一个孩子，砌一块石头，把一个念头想到底——都是同一笔基础交易：以一种「低熵的产出」，对抗热力学第二定律。身体不分诗与饭——它只知道梯度被维持住了，还是失守了。从这个视角看，活得有意义，就是维持那个梯度——在衰朽之中，继续筑造那些只有你能筑造的小结构。死，是梯度反转的那一刻。意义，就是你曾经对抗它的全部。",
  },

  meaningPsyEyebrow: { en: "II — Psychological", zh: "二 · 心理学" },
  meaningPsyTitle: { en: "Meaning is the felt sense of consistency.", zh: "意义是「前后一致」的体感。" },
  meaningPsyBody: {
    en: "From the middle, meaning is what arises when your actions, over a long horizon, line up with what you say you care about. It is not a feeling that comes during the act — it comes later, when you look back and see a shape. People who report 'meaningful' lives are usually not happier in the moment than people who report 'happy' lives; what they report is something quieter — a sense that their life is theirs, that they would not trade it. That sense is built, daily, by small alignments between attention and value. It cannot be bought, performed, or purchased in retrospect. It can only be deposited.",
    zh: "从中间这一层看，意义是这样一种东西：当你的行为，经过很长时间，渐渐与你声称在乎的东西对得上，它就出现了。它不是事情发生的当下能感觉到的东西——是事后回望、看到一个形状的时候才浮现。心理学研究里，自评「有意义」的人，并不一定比自评「幸福」的人在当下更快乐——他们说的是另一种更安静的东西：这一生是我的，我不愿换。那种感觉，是日复一日地——靠注意力与价值之间一点点对齐——积累出来的。它买不到、演不来、也无法事后凭空补上。它只能一笔一笔地存进去。",
  },

  meaningPhilEyebrow: { en: "III — Philosophical", zh: "三 · 哲学" },
  meaningPhilTitle: { en: "Meaning is what you would defend.", zh: "意义是你愿意为之辩护的东西。" },
  meaningPhilBody: {
    en: "From above, the question reverses. Stop asking what is meaningful. Ask: what, if it were taken from me tomorrow, would feel like a wound? What, if I were never seen doing it, would I still do? What, if no one remembers it, am I willing to make? The answers are usually small and unglamorous — a person, a craft, a quiet promise to oneself. They look like nothing on a résumé. They are the entire ledger. Camus said one must imagine Sisyphus happy. The harder claim is older: one must imagine Sisyphus, mid-roll, choosing the rock.",
    zh: "从最高处看，问题反过来了。不要问「什么是有意义的」。要问：如果它明天被夺走，我会觉得是一道伤口的——是什么？没有任何人看见我做、我也仍然会做的——是什么？没有任何人会记得、我也愿意去做的——是什么？答案通常都很小、不漂亮——一个人，一门手艺，一个对自己安静的承诺。它们写在履历上是一片空白，却就是整本账簿。加缪说，要想象西西弗斯是幸福的。更难的、更古老的说法是：要想象西西弗斯——正在推石头、汗流浃背的当中——主动地选择了那块石头。",
  },

  meaningClose: {
    en: "Three lenses, one silhouette. Hold the body's gradient. Keep your attention near what you said mattered. Defend, daily, what you would not trade. The ledger writes itself.",
    zh: "三个视角，一个轮廓。维持身体的梯度。让注意力贴着你说过在乎的东西。每天去守护那些你不愿换出去的事。账簿，自己会写下来。",
  },

  // ───── Collective page
  collectiveEyebrow: { en: "Module · 6", zh: "模块·六" },
  collectiveTitle: { en: "How a billion lives are spent.", zh: "十亿人，是怎么过完一生的。" },
  collectiveSubtitle: {
    en: "A live aggregation layer is in development. In the meantime: what we already know.",
    zh: "实时汇聚的部分仍在搭建。此刻先看一些我们已经知道的事。",
  },
  collectiveAvgTitle: { en: "An average human life, distributed", zh: "一个普通人的一生，分配如下" },
  collectiveRegretsTitle: { en: "What dying people most often say.", zh: "临终之人最常说的话。" },
  collectiveRegretsSub: {
    en: "From Bronnie Ware's eight years as a palliative care nurse. The themes were striking in their consistency.",
    zh: "Bronnie Ware 在临终关怀机构工作八年，听到的话——主题之一致，令人震惊。",
  },
  regret1: {
    en: "I wish I'd had the courage to live a life true to myself, not the life others expected of me.",
    zh: "我希望当时有勇气，过一种忠于自己的生活，而不是别人期待我过的那种。",
  },
  regret2: { en: "I wish I hadn't worked so hard.", zh: "我希望当时没那么拼命工作。" },
  regret3: { en: "I wish I'd had the courage to express my feelings.", zh: "我希望当时有勇气，把感受说出来。" },
  regret4: { en: "I wish I had stayed in touch with my friends.", zh: "我希望当时和朋友保持了联系。" },
  regret5: { en: "I wish I had let myself be happier.", zh: "我希望当时容许自己更快乐一点。" },

  collectiveSoonTitle: { en: "Coming: anonymous aggregation.", zh: "即将上线：匿名汇总。" },
  collectiveSoonBody: {
    en: "Visitors will be able to deposit their own time-allocation, weighted by self-reported satisfaction. The Collective Map will surface honest patterns — which uses of time correlate with which felt outcomes — without storing anything that identifies a person.",
    zh: "访客可匿名投入自己的时间分配，附上自评满意度。集体图谱将展示真实的模式：哪些时间投入，与哪些主观感受相关——同时不保留任何能识别个人身份的数据。",
  },

  // ───── Footer
  footerLine: { en: "Each visit is one entry less.", zh: "每一次造访，账簿里少一笔。" },
  footerPart: { en: "Part of", zh: "属于" },
  footerPsyverse: { en: "the Psyverse", zh: "Psyverse 宇宙" },
};

export const tr = (k: keyof typeof t, lang: Lang) => t[k][lang];
