export const meta = {
  name: 'biz-deep-validation',
  description: 'Step 5: per finalist - research dossier, 3 adversarial critics, strongest-version rewrite, second-round critic, 3-judge scoring',
  phases: [
    { title: 'Research', model: 'claude-sonnet-5-5' },
    { title: 'Critique', model: 'claude-sonnet-5-5' },
    { title: 'Rewrite', model: 'claude-sonnet-5-5' },
    { title: 'Re-critique', model: 'claude-sonnet-5-5' },
    { title: 'Judge', model: 'claude-sonnet-5-5' },
  ],
}
// Before running in a new session: set DIR to the pipeline state folder. args: {ids: [finalist ids], shard, nshards}.
// Finalist files are DIR/finalists/<id>.json (written by aggregate_evo.py). Outputs go to DIR/deep/.
const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const CRITIC = { type: 'object', properties: {
  severity: { type: 'string', enum: ['fatal', 'serious', 'manageable'] },
  objections: { type: 'array', items: { type: 'string' }, description: 'the 3-5 strongest objections, most damaging first' },
  evidence: { type: 'string', description: 'concrete evidence with URLs supporting the objections' },
  what_would_change_my_mind: { type: 'string' } },
  required: ['severity', 'objections', 'evidence', 'what_would_change_my_mind'] }
const REFINED = { type: 'object', properties: {
  alive: { type: 'boolean', description: 'false if, after honest reflection, the critiques are fatal' },
  title: { type: 'string' }, one_liner: { type: 'string' },
  pitch: { type: 'string', description: '200-300 words: the strongest version of this business' },
  wedge_customer: { type: 'string' }, first_product: { type: 'string' }, pricing: { type: 'string' },
  why_now: { type: 'string' }, moat: { type: 'string', description: 'which of the 7 Powers, and how it is reached' },
  bottom_up_market: { type: 'string', description: '# reachable customers x realistic annual spend, with sources' },
  competitors_and_edge: { type: 'string' },
  riskiest_assumption: { type: 'string' },
  two_week_test: { type: 'string', description: 'the cheapest real-world test of the riskiest assumption' },
  how_critiques_were_addressed: { type: 'string' } },
  required: ['alive', 'title', 'one_liner', 'pitch', 'wedge_customer', 'first_product', 'pricing', 'why_now', 'moat',
    'bottom_up_market', 'competitors_and_edge', 'riskiest_assumption', 'two_week_test', 'how_critiques_were_addressed'] }
const RECRIT = { type: 'object', properties: {
  verdict: { type: 'string', enum: ['survives', 'wounded', 'dead'] },
  remaining_holes: { type: 'array', items: { type: 'string' } },
  which_critiques_were_dodged_not_answered: { type: 'string' } },
  required: ['verdict', 'remaining_holes', 'which_critiques_were_dodged_not_answered'] }
const SCORE = { type: 'object', properties: {
  upside: { type: 'integer', minimum: 1, maximum: 10 }, timing: { type: 'integer', minimum: 1, maximum: 10 },
  originality: { type: 'integer', minimum: 1, maximum: 10 }, feasibility: { type: 'integer', minimum: 1, maximum: 10 },
  defensibility: { type: 'integer', minimum: 1, maximum: 10 }, evidence_of_demand: { type: 'integer', minimum: 1, maximum: 10 },
  overall: { type: 'integer', minimum: 1, maximum: 10 }, rationale: { type: 'string' } },
  required: ['upside', 'timing', 'originality', 'feasibility', 'defensibility', 'evidence_of_demand', 'overall', 'rationale'] }
const CRITICS = [
  ['competition', 'COMPETITION AND INCUMBENT RESPONSE: who already does this or could trivially add it (startups, incumbents, platforms, open source)? How would the strongest incumbent respond once this gets traction, and why would they win?'],
  ['customer', 'CUSTOMER, PRICING AND GO-TO-MARKET: is the pain urgent and budgeted, who exactly signs the check, how long is the sales cycle, what does it cost to acquire a customer, and do the unit economics work? Find evidence customers will NOT pay.'],
  ['execution', 'EXECUTION, REGULATION AND TIMING: what licenses, data access, regulations, liability, technical hurdles or timing assumptions could kill it? Is the why-now real or already over?'],
]
const JUDGES = [
  ['vc', 'a top seed-fund partner: size of prize, why-now, non-consensus and right'],
  ['operator', 'a serial bootstrapper: urgent budgeted pain, first 10 customers in 6 months, unit economics'],
  ['contrarian', 'a contrarian strategist: genuine non-obvious insight anchored in a real 2025-2026 shift'],
]
const mine = args.ids.filter((_, j) => j % args.nshards === args.shard)
const out = await pipeline(mine,
  id => agent(`You are the lead researcher validating a finalist business idea from a 1,340-idea search (today is late 2026).
First read these method guides and follow them: ${DIR}/skills/deep-research-researcher.md (research practice; ignore its instructions about where to save notes) and ${DIR}/skills/mr-competitive-analysis.md (apply its "Analysis workflow" steps 0-9 and source-quality standards; ignore deck/PowerPoint/ask-user parts).
Then read the finalist: ${DIR}/finalists/${id}.json (includes lineage and prior competitor research).
Load web tools (ToolSearch "select:WebSearch,WebFetch") and research deeply (15-30 searches/fetches): direct and indirect competitors with funding and traction; incumbents who could add this; bottom-up market size (# reachable customers x realistic spend); hard evidence of demand and willingness to pay (forum complaints, RFPs, regulations forcing spend, current spend on workarounds); unit-economics analogs; regulatory and liability landscape; whether the why-now is real.
Write a 1,500-2,500 word dossier with inline source URLs to ${DIR}/deep/${id}_dossier.md, then return the full dossier text.`,
    { model: M, label: `research:${id}`, phase: 'Research' }),
  (dossier, id) => parallel(CRITICS.map(([k, lens]) => () => agent(`You are an adversarial critic. Your job is to KILL this business idea if it deserves to die. Default to skepticism.
Lens: ${lens}
Read the finalist ${DIR}/finalists/${id}.json and the research dossier ${DIR}/deep/${id}_dossier.md. Use ${DIR}/skills/strategy-frameworks.md (especially pre-mortem, 7 Powers, unit economics). Load web tools (ToolSearch "select:WebSearch,WebFetch") and run 5-12 searches to find evidence AGAINST the idea that the researcher missed.`,
    { model: M, label: `critic:${id}:${k}`, phase: 'Critique', schema: CRITIC }))).then(cs => ({ dossier, critiques: cs })),
  (st, id) => agent(`You are the founder's strategist. Produce the STRONGEST HONEST VERSION of this business after hearing its critics.
Read: ${DIR}/finalists/${id}.json, ${DIR}/deep/${id}_dossier.md, and ${DIR}/skills/strategy-frameworks.md.
The three critiques are:
${JSON.stringify(st.critiques, null, 1)}
Rework the idea to answer each critique: narrow or change the wedge customer, change pricing or the payer, change the first product, or reframe the moat. Do not hand-wave; if a critique is truly fatal, set alive=false and say so. Identify the single riskiest assumption and the cheapest 2-week real-world test of it. Also write the refined version as markdown to ${DIR}/deep/${id}_refined.md.`,
    { model: M, label: `rewrite:${id}`, phase: 'Rewrite', schema: REFINED }).then(r => ({ ...st, refined: r })),
  (st, id) => agent(`You are a second-round adversarial critic. A business idea was critiqued, then rewritten to answer the critiques. Decide whether the rewrite genuinely answered them or dodged them.
Original critiques: ${JSON.stringify(st.critiques, null, 1)}
Rewritten version: ${JSON.stringify(st.refined, null, 1)}
You may read ${DIR}/deep/${id}_dossier.md and search the web (ToolSearch "select:WebSearch") to check claims. Verdict: survives, wounded, or dead.`,
    { model: M, label: `recritic:${id}`, phase: 'Re-critique', schema: RECRIT }).then(r => ({ ...st, recritique: r })),
  (st, id) => parallel(JUDGES.map(([k, lens]) => () => agent(`Score this fully researched and stress-tested business idea as ${lens}. Scores 1-10, where 10 is exceptional and 5 is mediocre; use the full range and be calibrated.
Refined version: ${JSON.stringify(st.refined, null, 1)}
Second-round critic verdict: ${JSON.stringify(st.recritique, null, 1)}
Original critiques: ${JSON.stringify(st.critiques, null, 1)}
The full dossier is at ${DIR}/deep/${id}_dossier.md (read it).`,
    { model: M, label: `score:${id}:${k}`, phase: 'Judge', schema: SCORE }))).then(ss => {
      const ok = ss.filter(Boolean)
      const avg = f => ok.length ? ok.reduce((a, s) => a + s[f], 0) / ok.length : 0
      return { id, title: st.refined && st.refined.title, alive: st.refined && st.refined.alive,
        recritique: st.recritique && st.recritique.verdict, overall: avg('overall'),
        scores: ['upside', 'timing', 'originality', 'feasibility', 'defensibility', 'evidence_of_demand'].map(f => [f, avg(f)]) }
    }),
)
return out.filter(Boolean)
