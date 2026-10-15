export const meta = {
  name: 'biz-r2-ideate-gate-v2',
  description: 'Round 2 step 3 (v2 gate): 4-lens ideation per pool, then an adversarial gate that sizes median AND upside cases and keeps at most 2',
  phases: [
    { title: 'Ideate', model: 'claude-sonnet-5-5' },
    { title: 'Gate', model: 'claude-sonnet-5-5' },
  ],
}
// args: {part, nparts, conc}. Pools come from round2/pools_selected.json (written by the orchestrator), split by index % nparts.
const M = 'claude-sonnet-5-5'
const DIR = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R2 = `${DIR}/round2`
const SEARCH_NOTE = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Never pip-install anything. Today is mid-October 2026.`
const POOL_IDS = args.pool_ids
const IDEAS = { type: 'object', properties: { ideas: { type: 'array', items: { type: 'object', properties: {
  lens: { type: 'string', enum: ['insider', 'pattern', 'dilemma', 'shock'] },
  title: { type: 'string' }, one_liner: { type: 'string' },
  customer: { type: 'string' }, payer_and_signer: { type: 'string', description: 'who pays, from which budget line, and the title of the person who signs' },
  problem: { type: 'string' }, solution: { type: 'string' }, why_now: { type: 'string' },
  wedge: { type: 'string', description: 'the first narrow product and first 10 customers' },
  path_to_100m: { type: 'string', description: 'bottom-up: # reachable payers x realistic annual spend, with sources; say what share of the pool it needs' },
  who_does_it_today: { type: 'string', description: 'named startups, incumbents, in-house teams, free substitutes you found' },
  why_they_lose: { type: 'string' }, moat: { type: 'string', description: 'which of the 7 Powers and how it is reached' },
  earned_secret: { type: 'string', description: 'the non-obvious truth an insider knows that makes this work' },
  first_90_days: { type: 'string' },
  outside_box_score: { type: 'integer', minimum: 1, maximum: 10 } },
  required: ['lens', 'title', 'one_liner', 'customer', 'payer_and_signer', 'problem', 'solution', 'why_now', 'wedge', 'path_to_100m',
    'who_does_it_today', 'why_they_lose', 'moat', 'earned_secret', 'first_90_days', 'outside_box_score'] } } }, required: ['ideas'] }
const GATE = { type: 'object', properties: {
  verdicts: { type: 'array', items: { type: 'object', properties: {
    title: { type: 'string' }, verdict: { type: 'string', enum: ['kill', 'weak', 'strong'] },
    competitors_found: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, url: { type: 'string' }, what_they_do: { type: 'string' }, scale_or_funding: { type: 'string' } }, required: ['name', 'url', 'what_they_do', 'scale_or_funding'] } },
    substitutes: { type: 'string', description: 'in-house, free, public or status-quo alternatives' },
    revenue_math_check: { type: 'string', description: 'does the $100M path survive scrutiny? corrected numbers' },
    median_case_revenue_usd_m: { type: 'number', description: 'annual revenue in 5-7 years with competent execution, USD millions' },
    upside_case_revenue_usd_m: { type: 'number', description: 'annual revenue in 5-7 years with top-decile execution, USD millions' },
    upside_assumptions: { type: 'string', description: 'what specifically has to go right for the upside case, and how plausible each is' },
    legal_or_premise_check: { type: 'string' },
    deciding_reason: { type: 'string', description: '<=40 words' } },
    required: ['title', 'verdict', 'competitors_found', 'substitutes', 'revenue_math_check', 'median_case_revenue_usd_m', 'upside_case_revenue_usd_m', 'upside_assumptions', 'legal_or_premise_check', 'deciding_reason'] } },
  picks: { type: 'array', maxItems: 2, items: { type: 'object', properties: {
    from_title: { type: 'string' }, title: { type: 'string' }, one_liner: { type: 'string' },
    sharpened_pitch: { type: 'string', description: '150-250 words: the strongest version that answers what the gate found WITHOUT shrinking below a $100M path' },
    payer_and_signer: { type: 'string' }, path_to_100m: { type: 'string' }, competitors_and_edge: { type: 'string' },
    why_now: { type: 'string' }, moat: { type: 'string' }, biggest_open_risk: { type: 'string' },
    cheapest_next_test: { type: 'string' } },
    required: ['from_title', 'title', 'one_liner', 'sharpened_pitch', 'payer_and_signer', 'path_to_100m', 'competitors_and_edge', 'why_now', 'moat', 'biggest_open_risk', 'cheapest_next_test'] } },
  pool_note: { type: 'string', description: 'what this pool taught us, <=60 words' } },
  required: ['verdicts', 'picks', 'pool_note'] }

const LIMIT = args.conc || 6
let active = 0
const waiters = []
async function limited(prompt, opts) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(prompt, opts) } finally { active--; const w = waiters.shift(); if (w) w() }
}

const mine = POOL_IDS.filter((_, j) => j % args.nparts === args.part)
const out = await pipeline(mine,
  pid => limited(`You are generating business ideas for ONE large money pool, as part of a search for the best new businesses of late 2026.
Read, in order:
1. ${R2}/inputs/lessons.md: why round 1 produced only small niche businesses, and the rules for round 2. Follow them.
2. ${R2}/pools_selected.json: find the entry with pool_id "${pid}". That is your pool: size, sources, 2025-26 shock, incumbents, fragility, funded startups already there, wedge hints, insider roles. More detail is in ${R2}/pools/.
3. ${R2}/inputs/patterns_digest.md: mechanisms that are building big companies right now.
4. ${DIR}/cliche_list.md: predictable patterns to avoid.
${SEARCH_NOTE}
Generate exactly 8 ideas for this pool, 2 through each lens:
- insider: become one of the pool's insider practitioners (pick from its insider roles; 15+ years in the job). What do you know that outsiders don't, and what business does that secret make possible?
- pattern: transfer one of the digest's patterns into this pool, and say why it hasn't happened here yet.
- dilemma: what can the incumbents structurally NOT do (business-model conflict, channel conflict, legacy systems, regulatory position)? Attack exactly there.
- shock: the 2025-26 shock creates new forced spend, a new workflow or a new buyer. Be the default answer to it.
Every idea must show a bottom-up path to at least $100M of annual revenue (# reachable payers x realistic spend, with sources) and must name who does it today. Do 8-15 searches to anchor sizes and to check for existing competitors BEFORE you finalize. Prefer ideas that are big AND non-obvious; drop any idea a smart generalist would think of in 5 minutes.
Write the 8 ideas as markdown to ${R2}/ideas/${pid}.md, then return them.`,
    { model: M, label: `r2ideate:${pid}`, phase: 'Ideate', schema: IDEAS }),
  (gen, pid) => gen ? limited(`You are an adversarial due-diligence partner. Your job is to stop a search for the best new businesses of 2026 from wasting money on ideas that are small, already done, or built on a false premise. Default to skepticism: assume someone already does it, and assume the market is smaller than claimed, until your searching proves otherwise.
Read ${R2}/inputs/lessons.md (round 1's 12 finalists all died or were wounded for these reasons; do not let it happen again) and the pool "${pid}" in ${R2}/pools_selected.json.
${SEARCH_NOTE}
Here are the 8 ideas generated for this pool:
${JSON.stringify(gen.ideas, null, 1)}
For EACH idea, run 2-4 targeted searches: direct competitors (Crunchbase, YC, TechCrunch, product pages, "<thing> software", "<thing> service", "<thing> startup"), in-house or free or public substitutes, and the key numbers in its $100M path. Check any legal or regulatory premise it depends on. Give a verdict: kill (already done, a false premise, or small even in the upside case), weak, or strong.
Size every idea with TWO numbers, because startup outcomes are skewed and a single "realistic" number hides the upside: a MEDIAN case (5-7 years, competent execution) and an UPSIDE case (5-7 years, top-decile execution). For the upside case, name exactly what has to go right and how plausible each assumption is. Be honest in both directions: do not inflate the median, and do not squash a real upside.
Then PICK AT MOST 2 non-kill ideas with the best upside, provided the upside case is at least $100M a year on assumptions you can name and believe, and the median case is at least $20M. For each pick, write the sharpened version that answers what you found WITHOUT shrinking it; if it cannot keep a credible $100M+ upside, do not pick it. Picking 0 is allowed and better than picking a weak idea.
Write your gate report as markdown to ${R2}/gate/${pid}.md (a verdict table with evidence URLs, then the picks), then return the structured result.`,
    { model: M, label: `r2gate:${pid}`, phase: 'Gate', schema: GATE }).then(g => ({ pid, ideas: gen.ideas.length, picks: g ? g.picks.length : null, kills: g ? g.verdicts.filter(v => v.verdict === 'kill').length : null })) : null,
)
log(`part ${args.part}: ${out.filter(Boolean).length}/${mine.length} pools gated`)
return out
