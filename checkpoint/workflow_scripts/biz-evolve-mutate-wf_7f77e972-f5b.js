export const meta = {
  name: 'biz-evolve-mutate',
  description: 'Evolution: 3 mutations per top survivor (sharpened, new customer/model, 10x/inverted), informed by competitor research and judge notes',
  phases: [{ title: 'Mutate', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const IDEA = {
  mutation_type: { type: 'string', enum: ['sharpened', 'new-customer-or-model', '10x-or-inverted'] },
  title: { type: 'string', description: 'max 8 words' }, one_liner: { type: 'string' },
  customer: { type: 'string' }, problem: { type: 'string' }, solution: { type: 'string' },
  why_now: { type: 'string' }, revenue_model: { type: 'string' }, non_obvious_insight: { type: 'string' },
  first_30_days: { type: 'string' }, how_it_avoids_competitors: { type: 'string' },
}
const SCHEMA = { type: 'object', properties: { mutants: { type: 'array', minItems: 3, maxItems: 3, items: { type: 'object',
  properties: IDEA, required: Object.keys(IDEA) } } }, required: ['mutants'] }
const mine = args.ids.filter((_, j) => j % args.nshards === args.shard)
phase('Mutate')
const res = await parallel(mine.map(id => () => agent(`You are an idea breeder in an evolutionary search for the best business of late 2026. A parent idea survived a 1,340-idea tournament and a web competitor check. Your job: breed 3 stronger offspring.

Read the parent: ${DIR}/evo/parents/${id}.json (Read tool). It contains the idea, the tournament judges' notes (including flaws they saw) and the competitor research (competitors, white space, a suggested sharper angle, demand evidence). Also skim ${DIR}/skills/strategy-frameworks.md for tools (JTBD, Blue Ocean ERRC, 7 Powers, first-principles cost stack).

Produce exactly 3 offspring, one of each type:
1. sharpened: the most differentiated, defensible version, fixing the flaws the judges named and avoiding the competitors found. Name a narrower wedge customer if that helps.
2. new-customer-or-model: keep the core insight but change WHO pays or HOW (e.g., the insurer/lender/municipality pays, outcome-based or contingency pricing, data product, embedded through a channel partner, roll-up, marketplace).
3. 10x-or-inverted: a far more ambitious version (network, infrastructure, standard-setter, balance-sheet business) OR the inversion of the idea, still with a concrete first product a scrappy team can sell within 6 months.

Each offspring must be a complete, specific business (named customer, wedge product, money flow) and must explain how it avoids the competitors in the parent's research. Do not produce clichés. Offspring should be genuinely different from each other.`, { model: M, label: `mutate:${id}`, schema: SCHEMA })))
return { shard: args.shard, n: mine.length, ok: res.filter(Boolean).length }
