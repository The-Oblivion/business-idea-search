export const meta = {
  name: 'biz-r4-deep-resume',
  description: 'Round 4 resume: deep-validate the 4 chosen insider-access finalists (from round4/finalists.json), rank them, and write round4/FINAL.md',
  phases: [
    { title: 'Screen', model: 'claude-sonnet-5-5' }, { title: 'Generate', model: 'claude-sonnet-5-5' },
    { title: 'Select', model: 'claude-sonnet-5-5' }, { title: 'Gate', model: 'claude-sonnet-5-5' },
    { title: 'Deep', model: 'claude-sonnet-5-5' }, { title: 'Final', model: 'claude-sonnet-5-5' },
  ],
}
const M = 'claude-sonnet-5-5'
const BIZ = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R3 = `${BIZ}/round4`
const SEARCH = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Never pip-install anything. Today is late October 2026.`
const FOUNDER = `THE FOUNDER: Asher, 18, a US high-school senior applying to engineering programs. He has about 10-15 hours a week until June 2027, then a full summer, then college. He is legally an adult (he can form an LLC, sign contracts and take payments).
Strengths: he ships real, deployed software very fast with AI coding agents. He has built a multi-game web app with accounts and an in-app economy, multi-agent research pipelines, an AI-text detector that beat commercial detectors in his own blind tests, and a strategy-backtesting lab.
Network: a mentor who founded a roughly $1B audio-visual integration company and teaches entrepreneurship at a university; a family with business and investment connections and possibly modest seed capital if an idea earns it; and his own Gen Z world (classmates, college applicants, gamers, sports-betting friends).
Already built but not yet selling: a freight-invoice audit service for shippers (a flat diagnostic plus a contingency fee).
Weaknesses: no professional licenses, no industry track record, and enterprise or regulated buyers will not take him seriously cold.
INSIDER ACCESS (new, the key edge this round):
- His GRANDFATHER founded and owns **MHC Healthcare**, and his MOTHER works there. It is most likely a Florida home-health company (Medicare-certified agencies operate in Florida as "MHC Area N, LLC", e.g. Riverview, Boca Raton and Fort Lauderdale). This is UNVERIFIED, so treat it as an owner-operated healthcare-services company and note where the answer depends on its exact type.
- His FATHER, Ron Peremel, founded **MyFinancialAdvice** (2001: a platform connecting consumers with pre-screened flat-fee financial advisors, plus technology that keeps advisors compliant on social media; about 24 years in financial services) and co-founded the **Annapolis Baygrass Music Festival** (2022; nominated for IBMA 2026 Event of the Year).
- He can plausibly shadow their operations, see real workflows and data (with permission and the right privacy agreements), use a family company as the first paying customer or pilot, and get warm introductions to their peers, vendors and associations.
GUARDRAILS: Ideas must be legal and ethical for an 18-year-old in the US. No real-money gambling operations, no regulated financial or medical advice, nothing that targets or exploits minors, and no academic-dishonesty tools.`
const RUBRIC = `What counts as a GREAT idea for this founder:
(1) He can get a first PAYING customer within about 60-90 days, spending under about $10k, in school-year hours.
(2) The buyers can be reached: a family company as the first customer or pilot, then their PEERS (other home-health agencies, other advisors and RIAs, other independent festivals) through warm introductions and associations. There must be a path to non-family customers within about 6 months. Any healthcare work must respect HIPAA (BAAs, minimum-necessary data).
(3) There is no license or regulatory wall he cannot clear.
(4) It uses his real edges: AI-speed building, Gen Z distribution, his mentor and family network, and things he has already built.
(5) There is a credible path to something BIG (a $10M+ a year business or a venture-scale outcome), not just a side hustle.
(6) It is not crowded and not the first idea anyone would have.
Lessons from two earlier rounds (read ${BIZ}/round2/inputs/lessons.md): assume someone already does it until you search; name the payer and their budget; and don't shrink an idea into a tiny boutique to make it survive.`
const LIMIT = args && args.conc ? args.conc : 8
let active = 0
const waiters = []
async function limited(p, o) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(p, o) } finally { active--; const w = waiters.shift(); if (w) w() }
}
const finals = (args && args.finals) || [{ fid: 'F01' }, { fid: 'F02' }, { fid: 'F03' }, { fid: 'F04' }]
const CRIT = { type: 'object', properties: { severity: { type: 'string', enum: ['fatal', 'serious', 'manageable'] }, objections: { type: 'array', items: { type: 'string' } }, evidence: { type: 'string' } }, required: ['severity', 'objections', 'evidence'] }
const REF = { type: 'object', properties: {
  alive: { type: 'boolean' }, title: { type: 'string' }, one_liner: { type: 'string' }, pitch: { type: 'string', description: '250-400 words' },
  why_now: { type: 'string' }, customer_and_payer: { type: 'string' }, pricing: { type: 'string' }, moat_path: { type: 'string' },
  first_30_days: { type: 'array', items: { type: 'string' }, description: 'day-by-day or week-by-week actions with measurable outputs' },
  first_customers: { type: 'array', items: { type: 'string' }, description: '10 specific named communities, accounts, businesses or channels to reach first' },
  cost_to_first_revenue_usd: { type: 'number' }, weeks_to_first_revenue: { type: 'number' },
  median_case_revenue_usd_m: { type: 'number' }, upside_case_revenue_usd_m: { type: 'number' }, path_to_big: { type: 'string' },
  riskiest_assumption: { type: 'string' }, two_week_test: { type: 'string' }, quit_conditions: { type: 'array', items: { type: 'string' } },
  how_critiques_were_addressed: { type: 'string' } },
  required: ['alive', 'title', 'one_liner', 'pitch', 'why_now', 'customer_and_payer', 'pricing', 'moat_path', 'first_30_days', 'first_customers', 'cost_to_first_revenue_usd', 'weeks_to_first_revenue', 'median_case_revenue_usd_m', 'upside_case_revenue_usd_m', 'path_to_big', 'riskiest_assumption', 'two_week_test', 'quit_conditions', 'how_critiques_were_addressed'] }
const SC = { type: 'object', properties: { fit: { type: 'integer', minimum: 1, maximum: 10 }, speed: { type: 'integer', minimum: 1, maximum: 10 }, upside: { type: 'integer', minimum: 1, maximum: 10 }, originality: { type: 'integer', minimum: 1, maximum: 10 }, defensibility: { type: 'integer', minimum: 1, maximum: 10 }, overall: { type: 'integer', minimum: 1, maximum: 10 }, rationale: { type: 'string' } }, required: ['fit', 'speed', 'upside', 'originality', 'defensibility', 'overall', 'rationale'] }
const CAL = 'Calibrate: 9-10 = among the best possible things for a talented 18-year-old to start this year (the kind of idea that becomes a famous teen-founded company); 7-8 = clearly worth doing now; 5-6 = decent; 3-4 = a side hustle at best or a poor fit; 1-2 = do not do it.'
phase('Deep')
const deep = await pipeline(finals,
  f => limited(`You are the lead researcher validating a finalist business idea for ONE founder. ${FOUNDER}
${RUBRIC}
The idea after the evidence gate: read the entry with fid "${f.fid}" in ${R3}/finalists.json (its candidate and gate fields) and the gate reports in ${R3}/gate/.
First read ${BIZ}/skills/deep-research-researcher.md and follow its research practice (ignore where it says to save notes).
${SEARCH}
Research deeply (15-25 searches and fetches): every competitor and free substitute; real prices and willingness to pay (posts, reviews, pricing pages); where the first customers gather and how to reach them; the legal, age and platform-policy issues; unit economics; and why now. Write a 1,500-2,500 word dossier with inline URLs to ${R3}/deep/${f.fid}_dossier.md, then return it.`,
    { model: M, label: `r4research:${f.fid}`, phase: 'Deep' }),
  (_, f) => parallel([
    ['market', 'MARKET AND COMPETITION: who already does this, what is free, would people really pay, and what happens when a bigger player copies it?'],
    ['founder', 'FOUNDER FIT, LEGAL AND EXECUTION: can THIS 18-year-old with 10-15 hours a week really get customers, deliver, stay legal, and handle platform risk, trust and support load?'],
  ].map(([k, lens]) => () => limited(`You are an adversarial critic trying to kill this idea if it deserves it. Lens: ${lens}
${FOUNDER}
Read the dossier ${R3}/deep/${f.fid}_dossier.md and the entry with fid "${f.fid}" in ${R3}/finalists.json.
${SEARCH}
Do 5-10 searches for evidence AGAINST it.`, { model: M, label: `r4critic:${f.fid}:${k}`, phase: 'Deep', schema: CRIT }))),
  (cs, f) => limited(`You are the founder's strategist. Produce the STRONGEST HONEST VERSION of this business for this founder after hearing the critics. ${FOUNDER}
${RUBRIC}
Read the dossier ${R3}/deep/${f.fid}_dossier.md. The critiques: ${JSON.stringify(cs, null, 1)}
Answer each critique concretely. Do NOT shrink it into a side hustle to survive: keep a credible path to big, or set alive=false. Include a concrete first-30-days plan and 10 specific first customers or channels. Write the refined version as markdown to ${R3}/deep/${f.fid}_refined.md as well.`,
    { model: M, label: `r4rewrite:${f.fid}`, phase: 'Deep', schema: REF }).then(r => ({ critiques: cs, refined: r })),
  (st, f) => parallel([['operator', 'a founder who started profitable companies young'], ['investor', 'a seed investor who backs young founders'], ['mentor', 'a blunt mentor who wants this specific 18-year-old to succeed and not waste a year']].map(([k, lens]) => () => limited(`Score this refined business idea for THIS founder as ${lens}. ${FOUNDER}
${CAL}
Refined version: ${JSON.stringify(st.refined, null, 1)}
Critiques: ${JSON.stringify(st.critiques, null, 1)}
The dossier is at ${R3}/deep/${f.fid}_dossier.md (read it).`, { model: M, label: `r4score:${f.fid}:${k}`, phase: 'Deep', schema: SC }))).then(ss => {
    const ok = ss.filter(Boolean); const avg = d => ok.length ? Math.round(ok.reduce((a, s) => a + s[d], 0) / ok.length * 100) / 100 : null
    return { fid: f.fid, key: f.key, title: st.refined && st.refined.title, alive: st.refined && st.refined.alive, overall: avg('overall'), fit: avg('fit'), speed: avg('speed'), upside: avg('upside'),
      median: st.refined && st.refined.median_case_revenue_usd_m, up: st.refined && st.refined.upside_case_revenue_usd_m }
  }),
)
const done = deep.filter(Boolean)
log(`Deep done: ${done.length}/${finals.length}`)
phase('Final')
const FLIST = done.map(d => `${d.fid}: ${d.title} (judges overall ${d.overall}, alive ${d.alive}) — refined pitch at ${R3}/deep/${d.fid}_refined.md`).join('\n')
const RANK = { type: 'object', properties: { ranking: { type: 'array', items: { type: 'object', properties: { fid: { type: 'string' }, rank: { type: 'integer' }, reason: { type: 'string' } }, required: ['fid', 'rank', 'reason'] } } }, required: ['ranking'] }
const ranks = await Promise.all([['operator', 'a serial founder who started young'], ['investor', 'an early-stage investor'], ['mentor', 'his blunt mentor']].map(([k, lens]) => limited(`You are ${lens}. ${FOUNDER}
Read every refined pitch below (open each file), then force-rank them 1 = best: which should THIS founder actually start? Weigh how fast he can get paying customers, how well it fits him, and how big it can get.
${FLIST}`, { model: M, label: `r4rank:${k}`, phase: 'Final', schema: RANK }).catch(() => null)))
const mr = {}
ranks.forEach(r => r && r.ranking.forEach(x => { (mr[x.fid] = mr[x.fid] || []).push(x.rank) }))
done.forEach(d => { const v = mr[d.fid] || []; d.mean_rank = v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length * 100) / 100 : 99 })
done.sort((a, b) => a.mean_rank - b.mean_rank || (b.overall || 0) - (a.overall || 0))
await limited(`Write the final memo of a search for the best business that Asher (18, AI-fluent builder, high-school senior) can start now. ${FOUNDER}
The final standing, best first (mean rank across 3 rankers, judge scores): ${JSON.stringify(done, null, 1)}
Rankers' reasons: ${JSON.stringify(ranks.filter(Boolean), null, 1)}
Read each finalist's ${R3}/deep/<fid>_refined.md and _dossier.md. Note that MHC Healthcare's exact business is UNVERIFIED (most likely a Florida home-health operator), and flag where the recommendation depends on it. Write ${R3}/FINAL.md: (1) the single best pick and exactly why, in plain blunt words; (2) the top 5 with, for each, the pitch, why now, the first 10 customers or channels, pricing, the cost and weeks to first dollar, the 30-day plan, the 2-week test, quit conditions and path to big; (3) the honest risks; (4) what to do THIS WEEK, given college-application deadlines through Nov 1. Plain English, no hype, cite sources from the dossiers. Return a 6-line summary.`, { model: M, label: 'r4memo', phase: 'Final' })
return { finalists: finals.length, standing: done }
