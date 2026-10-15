export const meta = {
  name: 'biz-r2-pooljudge',
  description: 'Round 2 step 2: two independent judges score every mapped money pool (size, shock, fragility, wedge, uncrowdedness)',
  phases: [{ title: 'Judge pools', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const R2 = '/Users/asherperemel/projects/business-idea-search-work/biz/round2'
const SCHEMA = { type: 'object', properties: { scores: { type: 'array', items: { type: 'object', properties: {
  pool_id: { type: 'string' },
  size: { type: 'integer', minimum: 1, maximum: 10, description: 'credible size of the money actually reachable' },
  shock: { type: 'integer', minimum: 1, maximum: 10, description: 'strength and recency of the 2025-26 disturbance' },
  fragility: { type: 'integer', minimum: 1, maximum: 10, description: 'how unable incumbents are to respond' },
  wedge: { type: 'integer', minimum: 1, maximum: 10, description: 'how clear an entry point a small new team has' },
  uncrowded: { type: 'integer', minimum: 1, maximum: 10, description: '10 = nobody funded is attacking it' },
  overall: { type: 'integer', minimum: 1, maximum: 10, description: 'odds this pool yields one of the best new businesses of 2026' },
  note: { type: 'string', description: '<=25 words' } },
  required: ['pool_id', 'size', 'shock', 'fragility', 'wedge', 'uncrowded', 'overall', 'note'] } } }, required: ['scores'] }
const LENSES = [
  ['growth', 'a growth investor who has backed several category-defining companies. Your question: could a NEW entrant build a $1B+ company in this pool within 5-7 years, because of this specific shock? You distrust size claims without sources and pools already full of funded startups.'],
  ['insurgent', 'a serial founder who has started companies in boring, regulated industries. Your question: can a scrappy new team get a real wedge here within 6-12 months, with a payer who has budget today, before incumbents or funded startups react? You distrust pools where the only play is a generic AI copilot.'],
]
const res = await parallel(LENSES.map(([k, lens]) => () => agent(`You are ${lens}
Read ${R2}/inputs/lessons.md (why round 1 of this business-idea search only produced small niche businesses), then ${R2}/pools_all.json: every money pool mapped by research agents, each with a pool_id, size, source, 2025-26 shock, incumbents, fragility, funded startups already there, crowdedness and wedge hints. Source markdown with more detail is in ${R2}/pools/ if you need it.
Score EVERY pool 1-10 on size, shock, fragility, wedge, uncrowded, and overall. Use the full range: 5 is an ordinary pool, 9-10 is rare. Discount size claims whose source looks weak, and discount shocks that are already old news. Be decisive and calibrated; you are choosing where a search for the best new businesses should dig.`,
  { model: M, label: `r2pooljudge:${k}`, phase: 'Judge pools', schema: SCHEMA })))
return res.map(r => r ? r.scores.length : 0)
