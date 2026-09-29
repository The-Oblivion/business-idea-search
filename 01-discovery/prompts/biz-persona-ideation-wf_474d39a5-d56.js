export const meta = {
  name: 'biz-persona-ideation',
  description: 'Insider personas generate business ideas from firsthand earned secrets',
  phases: [{ title: 'Persona ideation', model: 'claude-sonnet-5-5' }],
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
          non_obvious_insight: { type: 'string', description: 'the insider secret / contrarian truth this idea rests on' },
          first_30_days: { type: 'string', description: 'how a small team starts and gets first paying customers cheaply' },
          outside_box_score: { type: 'integer', minimum: 1, maximum: 10 },
        },
        required: ['title','one_liner','customer','problem','solution','why_now','revenue_model','non_obvious_insight','first_30_days','outside_box_score'],
      },
    },
  },
  required: ['ideas'],
}
phase('Persona ideation')
const res = await parallel(args.personas.map((p, i) => () => agent(`Today is 2026-09-28. You are one of hundreds of independent idea-generators in a large search for the best business ideas in the world right now.

Fully inhabit this persona: ${p}.

From this person's firsthand vantage point (daily frustrations, broken workflows, workarounds insiders use, what customers quietly pay for, what outsiders and VCs completely misunderstand about this world, and how AI, regulation, demographics and the economy are changing it in 2025-2026), produce 5 business ideas built on EARNED SECRETS: truths you only know from years inside this world.

You may use ToolSearch "select:WebSearch" and run 2-5 searches to check current facts (regulations, market data, whether something already exists) to make ideas sharper, but most of the value is insider insight.

Rules:
- Be SPECIFIC: named customer segment, concrete wedge product, clear way money changes hands.
- Think far outside the box, but every idea must be a real, buildable business.
- Ideas can serve this persona's world OR use this persona's insight to serve a completely different market.
- Avoid clichés (generic AI assistant/tutor/note-taker/SDR, generic marketplace, generic SaaS wrapper) unless the insider angle makes it genuinely new.
- Prefer ideas where a small, scrappy team could win first paying customers within ~6 months, even if the eventual business is huge.
- outside_box_score: honest 1-10 rating of how non-obvious the idea is.
Return exactly 5 ideas.`, { model: M, label: `persona:${args.tag}-${i}`, schema: IDEAS_SCHEMA })))
const n = res.filter(Boolean).reduce((a, r) => a + (r.ideas ? r.ideas.length : 0), 0)
return { tag: args.tag, ideas: n }
