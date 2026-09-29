export const meta = {
  name: 'biz-evolve-hybrids',
  description: 'Evolution: two matchmakers crossbreed survivors from different problem clusters into hybrid businesses',
  phases: [{ title: 'Crossbreed', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const H = {
  parents: { type: 'array', items: { type: 'string' }, minItems: 2, maxItems: 2, description: 'the two parent IDs' },
  title: { type: 'string', description: 'max 8 words' }, one_liner: { type: 'string' },
  customer: { type: 'string' }, problem: { type: 'string' }, solution: { type: 'string' },
  why_now: { type: 'string' }, revenue_model: { type: 'string' }, non_obvious_insight: { type: 'string' },
  first_30_days: { type: 'string' }, why_combination_is_stronger: { type: 'string' },
}
const SCHEMA = { type: 'object', properties: { hybrids: { type: 'array', minItems: 6, maxItems: 8, items: { type: 'object',
  properties: H, required: Object.keys(H) } } }, required: ['hybrids'] }
const LENSES = [
  ['customer', 'SHARED CUSTOMER OR CHANNEL: two ideas that sell to the same buyer, or where one idea\'s customer relationship is the perfect distribution channel for the other.'],
  ['data', 'SHARED DATA OR CAPABILITY: where the data exhaust, verification capability, or trust position created by one idea is the missing input or moat for another.'],
]
phase('Crossbreed')
const res = await parallel(LENSES.map(([k, lens]) => () => agent(`You are a matchmaker in an evolutionary search for the best business of late 2026. Read ${DIR}/evo/survivor_index.txt: 83 ideas that survived a 1,340-idea tournament and a web competitor check (ID | title — one-liner | problem cluster | competition status). If you need detail on a specific idea, read ${DIR}/evo/parents/<ID>.json.

Your crossbreeding lens: ${lens}

Propose 6-8 HYBRIDS. Each combines exactly two survivors, ideally from DIFFERENT problem clusters, into one business that is clearly stronger than either parent alone (bigger, more defensible, cheaper to acquire customers, or with a unique data moat). Reject forced combinations: only propose hybrids where 1 + 1 = 3. Each hybrid must be a complete, specific business with a concrete first product a scrappy team can sell within 6 months.`, { model: M, label: `hybrid:${k}`, schema: SCHEMA })))
return { ok: res.filter(Boolean).length }
