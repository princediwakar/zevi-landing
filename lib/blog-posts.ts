export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
  sections: {
    heading?: string;
    body: string;
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "aarrr-vs-circles",
    category: "FRAMEWORKS",
    title: "AARRR vs. CIRCLES: Which Framework When?",
    excerpt:
      "Both are PM interview staples. But reaching for the wrong one in a product design question vs. a metrics question is a fast way to lose the interviewer's confidence. Here's the decision matrix.",
    date: "FEB 12, 2026",
    readTime: "6 MIN READ",
    featured: true,
    sections: [
      {
        body: "One of the most common mistakes PM candidates make in interviews is grabbing the first framework that comes to mind rather than the right one for the question type. AARRR and CIRCLES are both essential tools — but they operate in completely different contexts. Using AARRR on a product design question signals to the interviewer that you're pattern-matching on the wrong signal.",
      },
      {
        heading: "WHEN THE QUESTION IS ABOUT METRICS",
        body: "AARRR (Acquisition, Activation, Retention, Revenue, Referral) is a metrics framework. It organizes the full user lifecycle into five measurable stages. Any question that starts with 'a metric dropped,' 'how would you measure success,' or 'how would you grow X' is pointing you toward AARRR territory. You're diagnosing or designing a measurement system — not a product.",
      },
      {
        heading: "WHEN THE QUESTION IS ABOUT DESIGN",
        body: "CIRCLES is a product design framework. It structures your response to 'design a product for X' or 'how would you improve Y' questions. The seven steps — Comprehend, Identify, Report, Cut, List, Evaluate, Summarize — walk you through everything from clarifying the problem to recommending a solution. CIRCLES is about structuring a decision, not analyzing a funnel.",
      },
      {
        heading: "THE DECISION MATRIX",
        body: "'A metric dropped 15% — diagnose it' → AARRR. 'How would you improve Spotify for commuters' → CIRCLES. 'Design a feature for remote teams' → CIRCLES. 'DAU/MAU fell — what's happening' → AARRR. 'What would you build next for Gmail' → CIRCLES. 'How would you measure success for a new onboarding flow' → AARRR.",
      },
      {
        heading: "WHERE CANDIDATES GO WRONG",
        body: "The most common mistake: using CIRCLES on a metrics question because the candidate is more comfortable with it. This produces an answer that's structured but answering the wrong thing. The interviewer asked you to diagnose a problem, not design a solution. Structure without relevance is still a failure mode.",
      },
      {
        heading: "THE HYBRID SITUATION",
        body: "Some questions need both. 'How would you improve the retention of Duolingo?' requires you to first diagnose the retention problem (AARRR lens: which stage of retention is failing?) and then propose a product solution (CIRCLES lens: what should we build to fix it?). Signal to the interviewer that you're switching lenses — don't blend them invisibly.",
      },
      {
        heading: "PRACTICE NOTE",
        body: "In Zevi, every question is tagged with its primary framework. That categorization is itself a skill to internalize — because in a real interview, nobody tells you which framework to use. Practice identifying the question type before you start answering.",
      },
    ],
  },
  {
    slug: "5-patterns-pm-interview",
    category: "INTERVIEW TIPS",
    title: "The 5 Patterns Behind Every PM Interview Question",
    excerpt:
      "After analyzing 2,000+ PM interview questions, we found that 94% fall into just five categories. Recognize the pattern and the framework applies itself.",
    date: "FEB 3, 2026",
    readTime: "8 MIN READ",
    featured: false,
    sections: [
      {
        body: "After indexing over 2,000 PM interview questions from real candidates at Google, Meta, Stripe, Uber, and Amazon, we found that the vast majority collapse into five distinct patterns. The implication: if you can recognize which pattern a question belongs to, the framework selection becomes almost automatic.",
      },
      {
        heading: "PATTERN 1: PRODUCT SENSE",
        body: "These questions test your ability to understand users, define problems, and generate creative, well-prioritized solutions. Canonical forms: 'Design a product for elderly users,' 'How would you improve LinkedIn's homepage,' 'What would you build next for Notion?' Framework: CIRCLES. The tell: these questions ask you to design or improve something.",
      },
      {
        heading: "PATTERN 2: EXECUTION / METRICS",
        body: "These questions test analytical rigor and your ability to diagnose and fix product health issues. Canonical forms: 'DAU dropped 10%, diagnose it,' 'How would you measure success for X,' 'How would you set goals for this team?' Framework: AARRR + Root Cause Analysis. The tell: these questions involve numbers, metrics, or performance.",
      },
      {
        heading: "PATTERN 3: STRATEGY",
        body: "These questions test market understanding and competitive thinking. Canonical forms: 'Should Spotify enter the podcast market?' 'How would you compete with X entering your space?' 'What's Apple's strategy for wearables?' Framework: Porter's Five Forces, SWOT, or a structured market entry framework. The tell: these questions involve business decisions, markets, or competition.",
      },
      {
        heading: "PATTERN 4: BEHAVIORAL",
        body: "These questions test your actual PM instincts through real experiences. Canonical forms: 'Tell me about a time you disagreed with an engineer,' 'Describe a product you launched that failed,' 'How do you prioritize competing demands?' Framework: STAR (Situation, Task, Action, Result). The tell: 'Tell me about a time...' or 'Describe a situation where...'",
      },
      {
        heading: "PATTERN 5: ESTIMATION",
        body: "These questions test structured quantitative thinking. Canonical forms: 'How many pianos are in New York City?' 'Estimate the revenue of Google Maps,' 'How would you size the market for X?' Framework: Break down into components, estimate each, multiply, sense-check. The tell: any 'how many' or 'estimate' question.",
      },
      {
        heading: "WHY PATTERN RECOGNITION MATTERS",
        body: "Candidates who fail interviews often have the right knowledge but apply it to the wrong pattern. You cannot CIRCLES your way through a metrics question or AARRR your way through a behavioral one. Pattern recognition is the prerequisite to framework application — and it's a learnable skill, not an innate talent.",
      },
    ],
  },
  {
    slug: "nail-metrics-question",
    category: "STRATEGY",
    title: "How to Nail the Metrics Question Every Time",
    excerpt:
      "Metric questions trip up even experienced PMs. The mistake isn't picking the wrong metric — it's skipping the clarification step that reveals what you actually need to measure.",
    date: "JAN 28, 2026",
    readTime: "5 MIN READ",
    featured: false,
    sections: [
      {
        body: "Experienced PMs fail metrics questions all the time. Not because they don't know what DAU means. Because they jump to the metric before understanding what the metric needs to answer. The clarification step is not a formality — it's where the real answer lives.",
      },
      {
        heading: "THE CLARIFICATION STEP YOU'RE SKIPPING",
        body: "Before naming a single metric, ask: what decision will this metric inform? A metric that tells you whether users are returning is different from a metric that tells you whether users are getting value. Both are retention metrics. Only one answers the question being asked. Every metrics question starts with: 'What decision are we trying to make with this data?'",
      },
      {
        heading: "THE NORTH STAR TRAP",
        body: "Every PM knows about north star metrics. Most PM candidates recite DAU as their default answer for almost everything. The problem: a north star metric is for tracking directional progress over months — it's a lagging indicator. If you're asked 'how would you measure the success of this new feature at launch,' DAU is the wrong answer. You need leading indicators that move in days, not quarters.",
      },
      {
        heading: "THE GUARDRAIL METRIC",
        body: "Strong candidates don't just name a success metric — they name a guardrail metric too. The guardrail is what you're watching to make sure optimizing your primary metric doesn't break something else. Optimizing notification open rates without a guardrail on notification volume leads to user fatigue and churn. Always pair them.",
      },
      {
        heading: "LEVEL 1 vs. LEVEL 3 METRICS",
        body: "Level 1: 'I'd measure DAU.' Level 2: 'I'd measure DAU, with a 7-day retention breakdown by new vs. returning users.' Level 3: 'I'd measure the percentage of users who complete their core job-to-be-done in the first session, because that's the activation event most predictive of 30-day retention based on our cohort analysis.' Level 3 answers win. They require understanding the product deeply enough to identify the leading indicator that matters.",
      },
      {
        heading: "THE TEMPLATE",
        body: "Clarify the goal → Name the primary metric and why → Name the guardrail metric → Define what 'success' looks like numerically → Identify how you'd segment the data. That's the structure. The content varies by product and question — but the skeleton never changes.",
      },
    ],
  },
  {
    slug: "voice-practice",
    category: "PRACTICE",
    title: "Voice Practice: The Secret Weapon No One Talks About",
    excerpt:
      "Reading about frameworks and saying frameworks out loud are completely different cognitive tasks. Here's why verbal practice triggers the same conditions as an actual interview.",
    date: "JAN 20, 2026",
    readTime: "4 MIN READ",
    featured: false,
    sections: [
      {
        body: "Most PM candidates prepare by reading. They absorb frameworks, memorize acronyms, and study sample answers until they feel ready. Then they sit in an interview, open their mouth, and the structure collapses. The issue isn't knowledge. It's that verbal recall under pressure is a completely different cognitive task than visual reading — and most candidates never practice the one they'll actually need.",
      },
      {
        heading: "THE RETRIEVAL GAP",
        body: "Cognitive science calls this the retrieval gap: the difference between being able to recognize something and being able to produce it. You can recognize CIRCLES when you see it written down. Producing CIRCLES verbally, in order, while maintaining eye contact and thinking through an actual problem, is a fundamentally harder task. You only build the latter through practice — not through reading.",
      },
      {
        heading: "WHY VERBAL PRACTICE WORKS",
        body: "When you practice out loud, you're simulating the exact conditions of the interview: verbal production, real-time structure maintenance, pacing, and confidence. These are motor skills as much as cognitive ones. A PM who has answered 50 questions out loud will perform differently than one who has written 50 bullet-point outlines — even if the conceptual knowledge is identical.",
      },
      {
        heading: "WHAT TO LISTEN FOR",
        body: "When you review your voice practice recordings, check for: filler words ('um,' 'like,' 'so') that signal cognitive load, pace drops when you lose structure, hedging language ('I think maybe,' 'possibly') that signals low confidence, and complete structural collapses where you abandon the framework mid-answer. These are trainable. You can't fix what you can't hear.",
      },
      {
        heading: "HOW ZEVI USES IT",
        body: "Zevi's voice practice mode transcribes your answer, evaluates your structure, pacing, and framework adherence, and gives you a verbal fluency score alongside your content score. It's the only way to get honest feedback on the thing that actually matters in an interview: how you sound when you're under pressure.",
      },
    ],
  },
  {
    slug: "why-candidates-fail-case-study",
    category: "MINDSET",
    title: "Why Most PM Candidates Fail the Case Study",
    excerpt:
      "It's rarely a knowledge gap. It's a structure gap. Candidates who fail case studies almost always share one habit in common — and it's fixable in under a week.",
    date: "JAN 14, 2026",
    readTime: "7 MIN READ",
    featured: false,
    sections: [
      {
        body: "After coaching hundreds of PM candidates, a clear pattern emerges in case study failures. It's almost never a knowledge gap. Candidates who fail have usually read Cracking the PM Interview. They know what CIRCLES is. They understand root cause analysis. The failure mode is structural: they can't maintain the framework under follow-up pressure.",
      },
      {
        heading: "THE FOLLOW-UP COLLAPSE",
        body: "Here's how it plays out: the candidate gives a solid opening answer using a framework. The interviewer probes with a follow-up. The candidate, now off the scripted path, loses the structure and starts free-form answering. The interviewer senses the loss of rigor. The candidate feels the energy shift, gets nervous, and the answer degrades further. This pattern accounts for the majority of case study failures.",
      },
      {
        heading: "THE ONE HABIT THAT CAUSES IT",
        body: "The root cause: candidates practice full answers from start to finish, but never practice re-entering a framework midway. They learn the structure as a linear sequence, not as a mental model they can navigate from any point. The fix is to practice being dropped into step 4 of CIRCLES and having to articulate where you are and what comes next.",
      },
      {
        heading: "WHAT INTERVIEWERS ARE ACTUALLY TESTING",
        body: "The follow-up question isn't testing whether you know more information. It's testing whether your structure is real or performed. A candidate who can absorb a follow-up, briefly pause, and say 'Good question — that actually changes my prioritization in step 4 because...' demonstrates that the framework is internalized, not memorized. That's the signal interviewers are looking for.",
      },
      {
        heading: "THE FIX: RANDOMIZED ENTRY PRACTICE",
        body: "Practice re-entering frameworks at random points. Have someone drop you into step 5 of CIRCLES mid-conversation. Practice articulating what you've done and what comes next without starting over. This trains the navigational version of the framework — the one you actually need under interview conditions.",
      },
      {
        heading: "THE TIMELINE",
        body: "This is genuinely fixable in under a week of deliberate practice. Not because it's easy — but because the skill is narrow and the feedback loop is tight. Five to ten voice practice sessions where you specifically practice follow-up recovery will compound fast. Most candidates never do this. The ones who do clear the bar that trips up the majority.",
      },
    ],
  },
  {
    slug: "framework-mastery-vs-memorization",
    category: "FRAMEWORKS",
    title: "Framework Mastery vs. Memorization: A Critical Difference",
    excerpt:
      "You can memorize the CIRCLES acronym in 10 minutes. Mastering it takes 60 days of deliberate application. Here's exactly what the difference looks like under interview conditions.",
    date: "JAN 7, 2026",
    readTime: "6 MIN READ",
    featured: false,
    sections: [
      {
        body: "Most PM prep resources treat frameworks as knowledge to acquire. They give you an acronym, explain each step, show you a sample answer, and move on. The assumption is that knowing the framework means you can use the framework. That assumption is wrong — and it's the reason so many well-prepared candidates fail.",
      },
      {
        heading: "WHAT MEMORIZATION LOOKS LIKE",
        body: "A memorized framework produces responses that follow the steps perfectly on a clean question but collapse when the question is ambiguous, when a follow-up introduces new information, or when the interviewer pushes back. The candidate can recite CIRCLES in order but can't defend why they're in step 4 rather than step 3, or why they chose one user over another.",
      },
      {
        heading: "WHAT MASTERY LOOKS LIKE",
        body: "A mastered framework produces responses where the structure is invisible. The candidate doesn't announce 'Now I'm doing step 3.' They just navigate the problem in a way that happens to be structured. They can enter the framework at any step, defend every decision, and absorb follow-up questions without losing the thread. The framework has become a thinking pattern, not a script.",
      },
      {
        heading: "THE 60-DAY THRESHOLD",
        body: "In our data, candidates who practice a specific framework for fewer than 20 sessions show memorization-level performance. After 40–60 deliberate practice sessions, mastery-level performance becomes the norm. This isn't about intelligence — it's about repetition and feedback. The cognitive pathway has to be strengthened enough to remain stable under pressure.",
      },
      {
        heading: "HOW TO PRACTICE TOWARD MASTERY",
        body: "Three practices build mastery faster than anything else. First: vary the question. Don't practice the same type of question repeatedly — vary the domain, the user, and the constraint. Second: answer without notes. Once you can navigate the framework from memory, stop looking at the acronym. Third: practice follow-ups specifically. The follow-up is where mastery is tested.",
      },
      {
        heading: "THE DUOLINGO PARALLEL",
        body: "Zevi is built on the same insight that made Duolingo work: spaced repetition and active recall are far superior to passive reading for skill acquisition. Reading about CIRCLES is the equivalent of reading about riding a bike. The skill only develops through repeated attempts, failures, and corrections. The feedback loop — immediate, specific, honest — is what converts repetition into mastery.",
      },
    ],
  },
  {
    slug: "inside-zevis-ai-feedback",
    category: "PRODUCT",
    title: "Inside Zevi's AI Feedback Engine",
    excerpt:
      "What does the AI actually evaluate? It's not just checking if you mentioned the right framework. It's analyzing your structure depth, hypothesis quality, and reasoning coherence.",
    date: "DEC 30, 2025",
    readTime: "9 MIN READ",
    featured: false,
    sections: [
      {
        body: "When you answer a question in Zevi, the AI doesn't just check whether you mentioned CIRCLES. It evaluates the quality of every step — the precision of your user definition, the depth of your needs analysis, the coherence of your prioritization logic, and the confidence of your recommendation. This is a breakdown of what the engine actually does.",
      },
      {
        heading: "LAYER 1: STRUCTURAL COMPLETENESS",
        body: "The first thing the AI evaluates is whether your answer covers all the required structural components for the given framework. For CIRCLES, that's all 7 steps. For AARRR, it's whether you've correctly identified the relevant funnel stage. Structural completeness is necessary but not sufficient — a complete but shallow answer still scores low.",
      },
      {
        heading: "LAYER 2: STEP QUALITY",
        body: "For each structural component the AI identifies in your answer, it evaluates the quality of that step independently. In CIRCLES step I (Identify the Customer), the AI checks: did you segment meaningfully, or did you just name a demographic? Did you choose one segment and defend the choice, or did you try to design for everyone? This is the layer most feedback tools skip.",
      },
      {
        heading: "LAYER 3: LOGICAL COHERENCE",
        body: "The AI evaluates whether each step logically follows from the previous one. If you identified your user as 'remote knowledge workers,' your needs in step R should reflect that specific user — not generic productivity app users. If your prioritized need doesn't match your user definition, the AI flags the coherence break and explains why it matters.",
      },
      {
        heading: "LAYER 4: HYPOTHESIS QUALITY",
        body: "This is the hardest layer to evaluate and the one we're most proud of. For metrics and root cause questions, the AI evaluates whether your hypotheses are specific and testable, whether they're ranked in a reasonable order of likelihood, and whether they demonstrate product intuition or just list the obvious options. A hypothesis that says 'maybe something changed in the product' is not a hypothesis — it's a tautology.",
      },
      {
        heading: "LAYER 5: RECOMMENDATION CONFIDENCE",
        body: "The AI penalizes hedged recommendations. 'I might possibly consider building something like...' is not a recommendation. Strong PM candidates make clear, defended choices and acknowledge the tradeoffs explicitly. The AI distinguishes between confidence (good) and certainty (suspicious in complex problems) — and scores accordingly.",
      },
      {
        heading: "WHAT WE DON'T EVALUATE (YET)",
        body: "The AI doesn't evaluate creativity — there are infinite valid product solutions and we don't want to penalize unconventional answers. It doesn't evaluate domain knowledge — you don't need to know Spotify's MAU to answer a Spotify question well. And it doesn't evaluate personality. The framework is what matters. The Zevi engine evaluates the quality of your structured thinking, nothing else.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
