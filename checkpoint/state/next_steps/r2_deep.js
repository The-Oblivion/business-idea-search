export const meta = {
  name: 'biz-r2-deep',
  description: 'Round 2 deep validation v2 (no-shrink rewrite, calibrated judges) per candidate, plus optional revival triage + gate of round-1 survivors',
  phases: [
    { title: 'Revive', model: 'claude-sonnet-5-5' },
    { title: 'Research', model: 'claude-sonnet-5-5' },
    { title: 'Critique', model: 'claude-sonnet-5-5' },
    { title: 'Rewrite', model: 'claude-sonnet-5-5' },
    { title: 'Re-critique', model: 'claude-sonnet-5-5' },
    { title: 'Judge', model: 'claude-sonnet-5-5' },
  ],
}
// args: {cands: [{cid, pid, title, pick_title?}], conc, revive?: true}
const M = 'claude-sonnet-5-5'
const DIR = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R2 = `${DIR}/round2`
const SEARCH_NOTE = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Never pip-install anything. Today is mid-October 2026.`
const LIMIT = args.conc || 6
let active = 0
const waiters = []
async function limited(prompt, opts) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(prompt, opts) } finally { active--; const w = waiters.shift(); if (w) w() }
}
const CRITIC = { type: 'object', properties: {
  severity: { type: 'string', enum: ['fatal', 'serious', 'manageable'] },
  objections: { type: 'array', items: { type: 'string' }, description: 'the 3-5 strongest objections, most damaging first' },
  evidence: { type: 'string', description: 'concrete evidence with URLs' },
  what_would_change_my_mind: { type: 'string' } }, required: ['severity', 'objections', 'evidence', 'what_would_change_my_mind'] }
const REFINED = { type: 'object', properties: {
  alive: { type: 'boolean', description: 'false if the critiques make a credible $100M+ upside impossible' },
  title: { type: 'string' }, one_liner: { type: 'string' },
  pitch: { type: 'string', description: '250-400 words: the strongest honest version' },
  wedge_customer: { type: 'string' }, payer_and_signer: { type: 'string' }, first_product: { type: 'string' }, pricing: { type: 'string' },
  why_now: { type: 'string' }, moat: { type: 'string', description: 'which of the 7 Powers, and how it is reached' },
  bottom_up_market: { type: 'string', description: '# reachable payers x realistic annual spend, with sources' },
  median_case_revenue_usd_m: { type: 'number' }, upside_case_revenue_usd_m: { type: 'number' },
  upside_assumptions: { type: 'string' }, competitors_and_edge: { type: 'string' },
  riskiest_assumption: { type: 'string' }, two_week_test: { type: 'string', description: 'the cheapest real-world test of the riskiest assumption' },
  how_critiques_were_addressed: { type: 'string' } },
  required: ['alive', 'title', 'one_liner', 'pitch', 'wedge_customer', 'payer_and_signer', 'first_product', 'pricing', 'why_now', 'moat',
    'bottom_up_market', 'median_case_revenue_usd_m', 'upside_case_revenue_usd_m', 'upside_assumptions', 'competitors_and_edge',
    'riskiest_assumption', 'two_week_test', 'how_critiques_were_addressed'] }
const RECRIT = { type: 'object', properties: {
  verdict: { type: 'string', enum: ['survives', 'wounded', 'dead'] },
  remaining_holes: { type: 'array', items: { type: 'string' } },
  which_critiques_were_dodged_not_answered: { type: 'string' },
  upside_believable: { type: 'string', description: 'are the upside-case assumptions believable? why or why not' } },
  required: ['verdict', 'remaining_holes', 'which_critiques_were_dodged_not_answered', 'upside_believable'] }
const SCORE = { type: 'object', properties: {
  upside: { type: 'integer', minimum: 1, maximum: 10 }, timing: { type: 'integer', minimum: 1, maximum: 10 },
  originality: { type: 'integer', minimum: 1, maximum: 10 }, feasibility: { type: 'integer', minimum: 1, maximum: 10 },
  defensibility: { type: 'integer', minimum: 1, maximum: 10 }, evidence_of_demand: { type: 'integer', minimum: 1, maximum: 10 },
  overall: { type: 'integer', minimum: 1, maximum: 10 }, rationale: { type: 'string' } },
  required: ['upside', 'timing', 'originality', 'feasibility', 'defensibility', 'evidence_of_demand', 'overall', 'rationale'] }
const IDEAS = { type: 'object', properties: { ideas: { type: 'array', maxItems: 4, items: { type: 'object', properties: {
  lens: { type: 'string' }, title: { type: 'string' }, one_liner: { type: 'string' }, customer: { type: 'string' },
  payer_and_signer: { type: 'string' }, problem: { type: 'string' }, solution: { type: 'string' }, why_now: { type: 'string' },
  wedge: { type: 'string' }, path_to_100m: { type: 'string' }, who_does_it_today: { type: 'string' }, why_they_lose: { type: 'string' },
  moat: { type: 'string' }, earned_secret: { type: 'string' }, first_90_days: { type: 'string' }, round1_source: { type: 'string', description: 'the round-1 idea id(s) and title(s) it comes from' } },
  required: ['lens', 'title', 'one_liner', 'customer', 'payer_and_signer', 'problem', 'solution', 'why_now', 'wedge', 'path_to_100m',
    'who_does_it_today', 'why_they_lose', 'moat', 'earned_secret', 'first_90_days', 'round1_source'] } } }, required: ['ideas'] }
const GATE = { type: 'object', properties: {
  verdicts: { type: 'array', items: { type: 'object', properties: {
    title: { type: 'string' }, verdict: { type: 'string', enum: ['kill', 'weak', 'strong'] },
    competitors_found: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, url: { type: 'string' }, what_they_do: { type: 'string' }, scale_or_funding: { type: 'string' } }, required: ['name', 'url', 'what_they_do', 'scale_or_funding'] } },
    substitutes: { type: 'string' }, revenue_math_check: { type: 'string' },
    median_case_revenue_usd_m: { type: 'number' }, upside_case_revenue_usd_m: { type: 'number' }, upside_assumptions: { type: 'string' },
    legal_or_premise_check: { type: 'string' }, deciding_reason: { type: 'string' } },
    required: ['title', 'verdict', 'competitors_found', 'substitutes', 'revenue_math_check', 'median_case_revenue_usd_m', 'upside_case_revenue_usd_m', 'upside_assumptions', 'legal_or_premise_check', 'deciding_reason'] } },
  picks: { type: 'array', maxItems: 2, items: { type: 'object', properties: {
    from_title: { type: 'string' }, title: { type: 'string' }, one_liner: { type: 'string' }, sharpened_pitch: { type: 'string' },
    payer_and_signer: { type: 'string' }, path_to_100m: { type: 'string' }, competitors_and_edge: { type: 'string' },
    why_now: { type: 'string' }, moat: { type: 'string' }, biggest_open_risk: { type: 'string' }, cheapest_next_test: { type: 'string' } },
    required: ['from_title', 'title', 'one_liner', 'sharpened_pitch', 'payer_and_signer', 'path_to_100m', 'competitors_and_edge', 'why_now', 'moat', 'biggest_open_risk', 'cheapest_next_test'] } },
  pool_note: { type: 'string' } }, required: ['verdicts', 'picks', 'pool_note'] }

const where = c => c.pid === 'R1'
  ? `${R2}/ideas/R1.md (round-1 revivals) and its gate report ${R2}/gate/R1.md`
  : `${R2}/ideas/${c.pid}.md (the idea titled "${c.title}") and the evidence-gate report ${R2}/gate/${c.pid}.md (its verdict on that idea, the competitors found${c.pick_title ? `, and the sharpened pick "${c.pick_title}"` : ''}). The money pool is pool_id "${c.pid}" in ${R2}/pools_all.json`
const CRITICS = [
  ['competition', 'COMPETITION AND INCUMBENT RESPONSE: who already does this or could add it (startups, PE roll-ups, incumbents, platforms, in-house teams, free substitutes)? How would the strongest one respond once this gets traction, and why would they win?'],
  ['customer', 'CUSTOMER, PRICING AND GO-TO-MARKET: is the pain urgent and budgeted, who exactly signs, how long is the sales cycle, what does a customer cost to acquire, do the unit economics work, and are the upside-case volumes reachable? Find evidence customers will NOT pay.'],
  ['execution', 'EXECUTION, REGULATION, CAPITAL AND TIMING: licenses, data access, regulation, liability, capital needs, technical hurdles, timing. Is the why-now real, or already over?'],
]
const JUDGES = [
  ['vc', 'a top seed-fund partner: size of prize, why-now, non-consensus and right'],
  ['operator', 'a serial founder of profitable companies: urgent budgeted pain, first 10 customers within 6-12 months, unit economics, capital efficiency'],
  ['contrarian', 'a contrarian strategist: a genuinely non-obvious insight anchored in a real 2025-2026 shift'],
]
const CALIBRATION = `Calibrate against real companies AT THEIR SEED STAGE: 9-10 = among the best seed-stage opportunities of the decade (think Stripe, Toast or Samsara at founding); 7-8 = a strong deal top funds would compete for; 5-6 = fundable but ordinary; 3-4 = a decent small business, not venture-scale; 1-2 = flawed or not a business. Strong critiques do not automatically mean a low score: every great company had serious objections at seed. Score the opportunity, not the polish.`

const deepOne = c => pipeline([c],
  () => limited(`You are the lead researcher validating a finalist business idea from a large multi-agent search for the best new businesses of late 2026.
First read: ${R2}/inputs/lessons.md (what killed earlier finalists), ${DIR}/skills/deep-research-researcher.md (research practice; ignore where it says to save notes) and ${DIR}/skills/mr-competitive-analysis.md (apply its "Analysis workflow" steps 0-9 and source standards; ignore deck/PowerPoint/ask-user parts).
Then read the candidate: ${where(c)}.
${SEARCH_NOTE}
Research deeply (15-30 searches and fetches): confirm or refute every competitor the gate found and look for more (startups with funding, PE roll-ups, incumbents' product pages, in-house teams, free/public substitutes); bottom-up market (# reachable payers x realistic annual spend, sourced); hard evidence of demand and willingness to pay (RFPs, contracts, spend on workarounds, regulation forcing spend, complaints); unit-economics analogs; capital needs; the regulatory and liability landscape; whether the why-now is real; and specifically whether the upside-case assumptions hold.
Write a 1,800-2,800 word dossier with inline source URLs to ${R2}/deep/${c.cid}_dossier.md, then return the full dossier text.`,
    { model: M, label: `r2research:${c.cid}`, phase: 'Research' }),
  dossier => parallel(CRITICS.map(([k, lens]) => () => limited(`You are an adversarial critic. Your job is to KILL this business idea if it deserves to die. Default to skepticism, but be precise: name evidence, not vibes.
Lens: ${lens}
Read the candidate (${where(c)}) and the research dossier ${R2}/deep/${c.cid}_dossier.md. Use ${DIR}/skills/strategy-frameworks.md (pre-mortem, 7 Powers, unit economics).
${SEARCH_NOTE}
Run 5-12 searches for evidence AGAINST the idea that the researcher missed.`,
    { model: M, label: `r2critic:${c.cid}:${k}`, phase: 'Critique', schema: CRITIC }))).then(cs => ({ critiques: cs })),
  st => limited(`You are the founder's strategist. Produce the STRONGEST HONEST VERSION of this business after hearing its critics.
Read: the candidate (${where(c)}), the dossier ${R2}/deep/${c.cid}_dossier.md, ${R2}/inputs/lessons.md and ${DIR}/skills/strategy-frameworks.md.
The three critiques:
${JSON.stringify(st.critiques, null, 1)}
Answer each critique by changing the wedge, payer, pricing, first product, sequencing or moat. CRUCIAL RULE: do NOT shrink the business to survive. Round 1's rewrites narrowed every idea into a defensible but tiny boutique, which is a failure. The refined version must keep a credible path to $100M+ a year in the upside case. If the critiques make that impossible, set alive=false and say so plainly. Give a median case and an upside case with named assumptions. Identify the single riskiest assumption and the cheapest 2-week real-world test of it.
Also write the refined version as markdown to ${R2}/deep/${c.cid}_refined.md.`,
    { model: M, label: `r2rewrite:${c.cid}`, phase: 'Rewrite', schema: REFINED }).then(r => ({ ...st, refined: r })),
  st => limited(`You are a second-round adversarial critic. A business idea was critiqued, then rewritten to answer the critiques. Decide whether the rewrite genuinely answered them or dodged them, and whether its upside-case assumptions are believable.
Original critiques: ${JSON.stringify(st.critiques, null, 1)}
Rewritten version: ${JSON.stringify(st.refined, null, 1)}
You may read ${R2}/deep/${c.cid}_dossier.md and search the web (ToolSearch "select:WebSearch") to check claims. Verdict: survives, wounded, or dead.`,
    { model: M, label: `r2recritic:${c.cid}`, phase: 'Re-critique', schema: RECRIT }).then(r => ({ ...st, recritique: r })),
  st => parallel(JUDGES.map(([k, lens]) => () => limited(`Score this fully researched and stress-tested business idea as ${lens}. Scores 1-10.
${CALIBRATION}
Refined version: ${JSON.stringify(st.refined, null, 1)}
Second-round critic: ${JSON.stringify(st.recritique, null, 1)}
Original critiques: ${JSON.stringify(st.critiques, null, 1)}
The full dossier is at ${R2}/deep/${c.cid}_dossier.md (read it).`,
    { model: M, label: `r2score:${c.cid}:${k}`, phase: 'Judge', schema: SCORE }))).then(ss => {
      const ok = ss.filter(Boolean)
      const avg = f => ok.length ? ok.reduce((a, s) => a + s[f], 0) / ok.length : 0
      return { cid: c.cid, title: st.refined && st.refined.title, alive: st.refined && st.refined.alive,
        recritique: st.recritique && st.recritique.verdict, overall: avg('overall'),
        median: st.refined && st.refined.median_case_revenue_usd_m, upside: st.refined && st.refined.upside_case_revenue_usd_m }
    }),
).then(r => r[0])

const reviveBranch = () => limited(`You are re-examining ROUND 1 of a business-idea search to rescue anything that round 2's standard could accept. Round 1 produced 1,340 ideas; its 25 finalists were insider-driven niche businesses, and the 12 that were deep-validated all came back small (realistic ceilings of $0.1-2M a year).
Read: ${R2}/inputs/lessons.md; ${DIR}/evo_out/evolution_ranking.csv (round 1's 214-candidate evolution ranking); the 25 finalist files in ${DIR}/finalists/; and for the 12 deep-validated ones, ${DIR}/deep_out/deep_validation_results.json and the refined pitches in ${DIR}/deep/*_refined.md.
${SEARCH_NOTE}
Find up to 3 round-1 insights (from the finalists, or anywhere in the top 60 of the evolution ranking) that could support a business with a credible $100M+ a year upside if re-aimed at a much larger payer, pool or product. This is not a rewrite of the small version: the insight stays, the business gets bigger. Do 8-15 searches to check that each re-aimed version is not already done and that the bigger payer has budget. If nothing qualifies, return fewer (0 is acceptable).
Write them as markdown to ${R2}/ideas/R1.md and return them.`,
  { model: M, label: 'r2revive:R1', phase: 'Revive', schema: IDEAS }).then(gen => gen && gen.ideas.length ? limited(`You are an adversarial due-diligence partner. Assume someone already does it and that the market is smaller than claimed, until searching proves otherwise. Read ${R2}/inputs/lessons.md.
${SEARCH_NOTE}
These are round-1 insights re-aimed at bigger pools:
${JSON.stringify(gen.ideas, null, 1)}
For EACH: 2-4 targeted searches for direct competitors, in-house, free or public substitutes, and the key numbers; check any legal premise; verdict kill/weak/strong. Size each with a MEDIAN case and an UPSIDE case (5-7 years) and name the upside assumptions. PICK AT MOST 2 non-kill ideas with a credible $100M+ upside and a $20M+ median, sharpened without shrinking. Picking 0 is allowed.
Write the report as markdown to ${R2}/gate/R1.md, then return the structured result.`,
    { model: M, label: 'r2gate:R1', phase: 'Revive', schema: GATE }).then(g => ({ revived: gen.ideas.length, picks: g ? g.picks.map(p => p.title) : null })) : { revived: 0, picks: [] })

const tasks = [...(args.cands || []).map(c => () => deepOne(c).catch(() => null))]
if (args.revive) tasks.push(() => reviveBranch().catch(() => null))
const out = await Promise.all(tasks.map(t => t()))
log(`deep: ${out.filter(Boolean).length}/${tasks.length} branches returned`)
return out
