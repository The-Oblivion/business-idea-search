export const meta = {
  name: 'biz-r2-wargame',
  description: 'Step 7: war-game each top-5 finalist with web research (incumbent response, 10 real first customers, 90-day plan, quit conditions, unit economics)',
  phases: [{ title: 'War-game', model: 'claude-sonnet-5-5' }],
}
// args: {cands: [cid...], conc}
const M = 'claude-sonnet-5-5'
const R2 = '/Users/asherperemel/projects/business-idea-search-work/biz/round2'
const SEARCH_NOTE = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Never pip-install anything. Today is late October 2026.`
const SCHEMA = { type: 'object', properties: {
  incumbent_response: { type: 'string', description: 'the strongest incumbent or funded rival, exactly how they would respond once this gets traction, and the counter-move' },
  first_customers: { type: 'array', minItems: 8, maxItems: 12, items: { type: 'object', properties: {
    name: { type: 'string', description: 'a real named organization' }, url: { type: 'string' },
    why_them: { type: 'string', description: 'the specific evidence they have the pain and budget now' },
    buyer_role: { type: 'string', description: 'the title of the person who signs' }, how_to_reach: { type: 'string' } },
    required: ['name', 'url', 'why_them', 'buyer_role', 'how_to_reach'] } },
  plan_90_days: { type: 'array', items: { type: 'string' }, description: 'week-by-week or phase-by-phase actions with measurable outputs' },
  quit_conditions: { type: 'array', items: { type: 'string' }, description: 'explicit, measurable signals by a date that mean stop' },
  unit_economics: { type: 'object', properties: {
    price: { type: 'string' }, cac: { type: 'string' }, gross_margin: { type: 'string' }, payback_months: { type: 'string' },
    capital_to_first_revenue: { type: 'string' }, notes: { type: 'string' } },
    required: ['price', 'cac', 'gross_margin', 'payback_months', 'capital_to_first_revenue', 'notes'] },
  biggest_risk: { type: 'string' }, mitigation: { type: 'string' },
  founder_fit: { type: 'string', description: 'what kind of founding team can win this, and what they must already know or have' },
  verdict: { type: 'string', description: '<=80 words: after war-gaming, how attractive is this to actually start, and why' } },
  required: ['incumbent_response', 'first_customers', 'plan_90_days', 'quit_conditions', 'unit_economics', 'biggest_risk', 'mitigation', 'founder_fit', 'verdict'] }
const LIMIT = args.conc || 5
let active = 0
const waiters = []
async function limited(prompt, opts) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(prompt, opts) } finally { active--; const w = waiters.shift(); if (w) w() }
}
const out = await Promise.all(args.cands.map(c => limited(`You are war-gaming a finalist from a long multi-agent search for the best new businesses of late 2026, as if you were about to found it on Monday. Be concrete and real: named organizations, real URLs, real numbers.
Read: ${R2}/h2h/briefs/${c}.md, the refined pitch ${R2}/deep/${c}_refined.md, and the research dossier ${R2}/deep/${c}_dossier.md.
${SEARCH_NOTE}
Do 20-35 searches and fetches to produce:
1. The STRONGEST incumbent or funded rival's response once this gets traction (name them, cite what they already sell), and the counter-move.
2. 10 REAL named first customers, organizations that have this pain and budget NOW. For each: URL, the specific evidence (an RFP, a filing, a court order, a news item, a job posting, a regulatory deadline), the title of the person who signs, and how to reach them.
3. A 90-day plan with measurable outputs.
4. Explicit quit conditions: measurable signals, by a date, that mean stop.
5. Unit economics: price, customer acquisition cost, gross margin, payback, and capital needed to first revenue. Show your math and sources.
6. The biggest risk and its mitigation, and what kind of founding team can win this.
Write it as markdown to ${R2}/wargame/${c}.md (with the sources), then return the structured result.`,
  { model: M, label: `wargame:${c}`, phase: 'War-game', schema: SCHEMA }).catch(() => null)))
log(`war-games: ${out.filter(Boolean).length}/${args.cands.length}`)
return out.map((r, i) => ({ cid: args.cands[i], ok: !!r, customers: r ? r.first_customers.length : 0 }))
