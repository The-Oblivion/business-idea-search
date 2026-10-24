export const meta = {
  name: 'biz-r2-h2h',
  description: 'Step 6: full round-robin head-to-head of the round-2 contenders; every pair judged twice with the order swapped',
  phases: [{ title: 'Head-to-head', model: 'claude-sonnet-5-5' }],
}
// args: {part, nparts, conc}. 12 contenders -> 66 pairs x 2 orders = 132 judges, split by index % nparts.
const M = 'claude-sonnet-5-5'
const R2 = '/Users/asherperemel/projects/business-idea-search-work/biz/round2'
const C = ['C10', 'C03', 'C04', 'C06', 'C13', 'C15', 'C02', 'C05', 'C09', 'C11', 'C16', 'C01']
const SCHEMA = { type: 'object', properties: {
  winner: { type: 'string', enum: ['A', 'B'] },
  margin: { type: 'integer', minimum: 1, maximum: 3, description: '1 = close call, 2 = clear, 3 = decisive' },
  decisive_factors: { type: 'array', items: { type: 'string' }, description: '2-4 factors that decided it' },
  reasons: { type: 'string', description: '120-250 words' },
  a_biggest_risk: { type: 'string' }, b_biggest_risk: { type: 'string' } },
  required: ['winner', 'margin', 'decisive_factors', 'reasons', 'a_biggest_risk', 'b_biggest_risk'] }
const PERSONAS = {
  ab: 'a founder-investor who has started two companies and written early checks into thirty more',
  ba: 'an operating partner at a growth-equity fund who has run businesses and diligenced hundreds more',
}
const LIMIT = args.conc || 6
let active = 0
const waiters = []
async function limited(prompt, opts) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(prompt, opts) } finally { active--; const w = waiters.shift(); if (w) w() }
}
const jobs = []
for (let i = 0; i < C.length; i++) for (let j = i + 1; j < C.length; j++) { jobs.push([C[i], C[j], 'ab']); jobs.push([C[j], C[i], 'ba']) }
const mine = jobs.filter((_, k) => k % args.nparts === args.part)
const out = await Promise.all(mine.map(([a, b, o]) => limited(`You are ${PERSONAS[o]}. Two business ideas reached the final round of a long multi-agent search for the best new businesses of late 2026 (about 1,600 ideas generated, then tournaments, competitor checks, an evidence gate and deep validation with adversarial critics). Decide which ONE is the better business to start now.
"Better" means the higher EXPECTED OUTCOME for a capable founding team in late 2026: the value created if it works x the probability it works, weighed against the capital and time it needs. Venture scale is one factor, not a gate; a high-probability $30M-profit business can beat a long-shot $200M-revenue one. Judge substance, not writing quality. Both ideas have serious objections; weigh which objections are more likely to be fatal.
Idea A: read ${R2}/h2h/briefs/${a}.md, then its refined pitch ${R2}/deep/${a}_refined.md and its dossier ${R2}/deep/${a}_dossier.md.
Idea B: read ${R2}/h2h/briefs/${b}.md, then its refined pitch ${R2}/deep/${b}_refined.md and its dossier ${R2}/deep/${b}_dossier.md.
Read all six files fully before deciding. Return the winner, a margin (1 close, 2 clear, 3 decisive), the decisive factors, your reasoning, and each idea's single biggest risk.`,
  { model: M, label: `h2h:${a}:${b}:${o}`, phase: 'Head-to-head', schema: SCHEMA }).catch(() => null)))
log(`part ${args.part}: ${out.filter(Boolean).length}/${mine.length} judgments`)
return { part: args.part, ok: out.filter(Boolean).length, of: mine.length }
