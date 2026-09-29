export const meta = {
  name: 'biz-signal-mining',
  description: 'Demand-first idea generation: mine real-world signal sources (forums, reviews, regulations, shutdowns, papers) for evidence-backed ideas',
  phases: [{ title: 'Signal mining', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const IDEAS_SCHEMA = {
  type: 'object',
  properties: {
    ideas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'max 8 words' },
          one_liner: { type: 'string' },
          customer: { type: 'string', description: 'who exactly pays' },
          problem: { type: 'string' },
          solution: { type: 'string' },
          why_now: { type: 'string', description: 'specific 2025-2026 change that makes this possible or urgent now' },
          revenue_model: { type: 'string' },
          non_obvious_insight: { type: 'string', description: 'the secret / contrarian truth this idea rests on, citing the signal evidence found (with URL)' },
          first_30_days: { type: 'string', description: 'how a small team starts and gets first paying customers cheaply' },
          outside_box_score: { type: 'integer', minimum: 1, maximum: 10 },
        },
        required: ['title','one_liner','customer','problem','solution','why_now','revenue_model','non_obvious_insight','first_30_days','outside_box_score'],
      },
    },
  },
  required: ['ideas'],
}
phase('Signal mining')
const res = await parallel(args.sources.map((src, i) => () => agent(`Today is 2026-09-28. You are one of hundreds of independent agents in a large search for the best business ideas in the world right now. Other agents brainstorm from trends; YOUR job is DEMAND-FIRST: find hard evidence of unmet demand in a specific real-world signal source, then build business ideas on that evidence.

YOUR SIGNAL SOURCE: ${src}

Method:
1. Use ToolSearch with query "select:WebSearch,WebFetch" to load web tools.
2. Run 10-20 searches and fetch pages to mine this source for concrete signals from 2025-2026: repeated complaints, workarounds, money being spent badly, deadlines forcing spending, gaps left behind. Collect specific evidence (quotes, numbers, URLs).
3. Cluster the strongest signals and turn them into 5 business ideas. Each idea's non_obvious_insight must cite the concrete evidence (with a URL) that demand exists.

Rules:
- Be SPECIFIC: named customer segment, concrete wedge product, clear way money changes hands.
- Think outside the box about the SOLUTION, but ground the PROBLEM in evidence.
- Avoid clichés (generic AI assistant/tutor/note-taker/SDR, generic marketplace, generic SaaS wrapper) unless the evidence points to a genuinely new angle.
- Prefer ideas where a small, scrappy team could win first paying customers within ~6 months.
- outside_box_score: honest 1-10 rating of how non-obvious the idea is.
Return exactly 5 ideas.`, { model: M, label: `persona:signal-${args.tag}-${i}`, schema: IDEAS_SCHEMA })))
const n = res.filter(Boolean).reduce((a, r) => a + (r.ideas ? r.ideas.length : 0), 0)
return { tag: args.tag, ideas: n }
