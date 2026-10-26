export const meta = {
  name: 'biz-r4-insider',
  description: 'Round 4: insider-access search: what Asher can build with his family companies (healthcare, advisor tech, live events) as first customers and doors',
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
const IDEA = { type: 'object', properties: {
  title: { type: 'string' }, one_liner: { type: 'string' }, customer: { type: 'string' }, who_pays: { type: 'string' },
  problem: { type: 'string' }, solution: { type: 'string' }, why_now: { type: 'string' },
  founder_edge: { type: 'string', description: 'why THIS 18-year-old founder can win it' },
  first_10_customers: { type: 'string', description: 'exactly how he gets the first 10 paying customers' },
  cost_to_first_revenue_usd: { type: 'number' }, path_to_big: { type: 'string' },
  who_does_it_today: { type: 'string', description: 'competitors you searched for and found' } },
  required: ['title', 'one_liner', 'customer', 'who_pays', 'problem', 'solution', 'why_now', 'founder_edge', 'first_10_customers', 'cost_to_first_revenue_usd', 'path_to_big', 'who_does_it_today'] }
const SCREEN = { type: 'object', properties: {
  scores: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, teen: { type: 'integer', minimum: 0, maximum: 10 }, upside: { type: 'integer', minimum: 0, maximum: 10 } }, required: ['id', 'teen', 'upside'] } },
  nominations: { type: 'array', maxItems: 8, items: { type: 'object', properties: { id: { type: 'string' }, title: { type: 'string' }, one_liner: { type: 'string' },
    teen_version: { type: 'string', description: 'how an 18-year-old could start a version of this, and why it could still get big' }, why: { type: 'string' } }, required: ['id', 'title', 'one_liner', 'teen_version', 'why'] } } },
  required: ['scores', 'nominations'] }
const GENS = [
  ['mhc_coo', 'Become the COO of a Florida home-health (or home-care) agency. List the most painful, expensive, manual workflows (referral intake, eligibility, OASIS documentation, scheduling, visit verification and EVV, missed visits, billing, denials, staffing, survey readiness, PDGM and LUPA management), and invent AI-built tools that would pay for themselves at MHC first, then sell to the roughly 1,000+ Florida agencies and beyond.'],
  ['mhc_revenue', 'Home-health revenue and payer friction in 2025-2026: the Medicare Review Choice Demonstration (Florida is a demonstration state), PDGM and LUPA, Medicare Advantage prior authorization and denials, the 2026 home-health payment rule, and Medicaid managed-care LTC. Invent businesses that recover or protect revenue for agencies, priced on results.'],
  ['mhc_workforce', 'The home-health and home-care workforce: recruiting, onboarding and credentialing nurses, therapists and aides, scheduling, retention, multilingual workforces (Miami: Spanish and Haitian Creole), training and compliance, and the 2025-2026 immigration-enforcement shock to caregiver supply. Invent businesses an AI builder with insider access could start.'],
  ['healthcare_ops', 'In case MHC is a different kind of healthcare company: owner-operated healthcare services in Florida (clinics, pharmacy, DME, staffing, home care, hospice). Find the AI-native operational wedges with the clearest ROI that an insider-backed young builder could prove at one operator and sell to its peers.'],
  ['mfa_compliance', 'Financial-advisor marketing and communications compliance in 2025-2026: the SEC Marketing Rule, FINRA 2210, AI-written posts, newsletters and emails needing review, testimonial and endorsement rules, off-channel communication fines, and recordkeeping. Invent products his father\'s platform and network could distribute. Name the incumbents (Smarsh, Saifr, Hearsay, Red Oak, FMG) honestly.'],
  ['mfa_growth', 'Advisor growth and operations: client acquisition for flat-fee and advice-only advisors, young-adult and Gen Z access to affordable advice (his own world), advisor succession for aging advisors, AI-assisted meeting prep and plan delivery, and what a 24-year financial-services founder\'s platform and network can launch with an AI builder. No regulated advice by Asher himself.'],
  ['baygrass_events', 'Independent festival and live-event operations (his father co-founded a nominated bluegrass festival): sponsorship sales and ROI reporting, vendor and volunteer management, ticketing data, weather and insurance, nonprofit giving tie-ins, and artist booking. Find products to prove at Baygrass and sell to the thousands of independent festivals (IBMA and festival associations).'],
  ['family_freight', 'Cross-selling his already-built freight-invoice audit into the family networks: which of these businesses and their peers (home-health supply, DME, festival production logistics, advisor offices) actually ship freight, and is there a better vertical fit (for example medical-supply distributors) for the audit engine?'],
  ['cross_family', 'Combinations across the family businesses that only he could see: for example home-health patients and families who need elder financial planning (advisor network), caregivers needing financial literacy, mental-health awareness, events plus wellness. The combination must be genuinely stronger than either part.'],
  ['insider_personas', 'Inhabit insider practitioners in these industries (a home-health intake coordinator, a Medicare RCD specialist, a home-health biller, an RIA chief compliance officer, a festival production manager) and surface their earned secrets: the problem they would pay to make disappear, and what an AI builder could ship.'],
  ['insider_signals', 'Mine real 2025-2026 demand in these industries: home-health administrator forums and groups (r/homehealth, NAHC and HCAF discussions, Home Health Care News), advisor and RIA compliance forums, and festival-producer communities. Use "I would pay for", 1-star reviews of vertical software (HCHB, WellSky, Axxess, Smarsh) and job postings for manual roles. Cite them.'],
  ['insider_big', 'The BIG version: which of these insider positions could plausibly grow into a $50M+ or venture-scale company (a vertical AI platform for home health, an advisor-compliance network, festival infrastructure)? Be specific about the wedge that starts at the family company.'],
]
const genJob = ([k, brief]) => limited(`You are inventing business ideas for ONE specific founder. ${FOUNDER}
${RUBRIC}
Your lens: ${brief}
${SEARCH}
Do 8-15 searches to ground the ideas (demand, existing competitors, prices). Then return exactly 8 ideas through your lens, ranked best first, each one specific enough that he could start it Monday. Prefer non-obvious ideas that can still get big. Write them as markdown to ${R3}/gen/${k}.md as well.`,
  { model: M, label: `r4gen:${k}`, phase: 'Generate', schema: { type: 'object', properties: { ideas: { type: 'array', minItems: 6, maxItems: 8, items: IDEA } }, required: ['ideas'] } })
const screenJob = i => limited(`You are screening ideas from an earlier large business-idea search to find ones that ONE specific founder could actually start. ${FOUNDER}
${RUBRIC}
Read ${R3}/screen/shard_${String(i).padStart(2, '0')}.json (about 148 ideas, each with id, title t, one-liner o, and customer or pool). Most were designed for experienced industry insiders. He NOW HAS insider access to healthcare services (likely home health), financial-advisor technology and live events through his family, so weight ideas in or near those areas that this access makes feasible. Score EVERY idea: teen = how feasible it is for this founder to start a real version within 90 days (0-10), and upside = how big it could get (0-10). Then nominate up to 8 ideas where a teen-startable version could still become big, and for each write the specific "teen version". Be decisive and calibrated; most ideas should score low on teen.`,
  { model: M, label: `r4screen:${i}`, phase: 'Screen', schema: SCREEN })

log('Phase 1: screening 1,768 ideas and generating new ones')
const [screens, gens] = await Promise.all([
  (args && args.skipScreen) ? Promise.resolve([]) : Promise.all(Array.from({ length: 12 }, (_, i) => screenJob(i).catch(() => null))),
  Promise.all(GENS.map(g => genJob(g).catch(() => null))),
])
const cands = []
screens.forEach((s, i) => s && s.nominations.forEach(n => cands.push({ key: `S:${n.id}`, src: `screen ${i}`, title: n.title, one_liner: n.one_liner, teen_version: n.teen_version, why: n.why })))
gens.forEach((g, i) => g && g.ideas.forEach((x, j) => cands.push({ key: `G:${GENS[i][0]}:${j}`, src: `gen ${GENS[i][0]}`, title: x.title, one_liner: x.one_liner, teen_version: x.first_10_customers, why: x.founder_edge, idea: x })))
log(`Phase 1 done: ${screens.filter(Boolean).length} screens, ${gens.filter(Boolean).length}/16 generators, ${cands.length} candidates`)

const LIST = cands.map(c => `[${c.key}] ${c.title}: ${c.one_liner} | Teen path: ${String(c.teen_version).slice(0, 220)}`).join('\n')
const SEL = { type: 'object', properties: { picks: { type: 'array', minItems: 20, maxItems: 30, items: { type: 'object', properties: { key: { type: 'string' }, score: { type: 'integer', minimum: 1, maximum: 10 }, reason: { type: 'string' } }, required: ['key', 'score', 'reason'] } } }, required: ['picks'] }
const LENSES = [
  ['operator', 'a founder who started three profitable companies in their teens and twenties. Can this specific 18-year-old get real paying customers within 90 days, and does it compound from there?'],
  ['investor', 'a seed investor. Could this become very big, with a real why-now and a non-consensus insight, while still being startable by this founder now?'],
  ['contrarian', 'a contrarian strategist. Which ideas are genuinely non-obvious and uncrowded, the ones most smart people would miss, yet real?'],
]
phase('Select')
const sels = await Promise.all(LENSES.map(([k, lens]) => limited(`You are ${lens}
${FOUNDER}
${RUBRIC}
Here are ${cands.length} candidate business ideas for this founder:
${LIST}
Pick the 20-30 best for THIS founder (weight how well the family access makes each feasible), score each 1-10, and give a one-line reason. Use the keys exactly as written.`,
  { model: M, label: `r4select:${k}`, phase: 'Select', schema: SEL }).catch(() => null)))
const votes = {}
sels.forEach(s => s && s.picks.forEach(p => { votes[p.key] = (votes[p.key] || 0) + p.score }))
const byKey = Object.fromEntries(cands.map(c => [c.key, c]))
const shortlist = Object.keys(votes).filter(k => byKey[k]).sort((a, b) => votes[b] - votes[a]).slice(0, (args && args.shortlist) || 30)
log(`Shortlist: ${shortlist.length} candidates (top votes ${shortlist.slice(0, 5).map(k => votes[k]).join(', ')})`)

const GATE = { type: 'object', properties: {
  verdict: { type: 'string', enum: ['kill', 'weak', 'strong'] },
  competitors: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, url: { type: 'string' }, what: { type: 'string' } }, required: ['name', 'url', 'what'] } },
  teen_blockers: { type: 'string', description: 'age, credibility, license, legal or capital blockers for this founder, and whether each is real' },
  first_customers_channel: { type: 'string', description: 'the concrete channel and the first 10 named customer types or communities' },
  cost_to_first_revenue_usd: { type: 'number' }, weeks_to_first_revenue: { type: 'number' },
  median_case_revenue_usd_m: { type: 'number' }, upside_case_revenue_usd_m: { type: 'number' },
  deciding_reason: { type: 'string' },
  sharpened: { type: 'object', properties: { title: { type: 'string' }, one_liner: { type: 'string' }, pitch: { type: 'string', description: '150-250 words' } }, required: ['title', 'one_liner', 'pitch'] } },
  required: ['verdict', 'competitors', 'teen_blockers', 'first_customers_channel', 'cost_to_first_revenue_usd', 'weeks_to_first_revenue', 'median_case_revenue_usd_m', 'upside_case_revenue_usd_m', 'deciding_reason', 'sharpened'] }
phase('Gate')
const gated = (await Promise.all(shortlist.map((k, n) => limited(`You are an adversarial due-diligence partner checking ONE business idea for ONE founder. Default to skepticism: assume someone already does it, and assume he can't reach customers, until searching proves otherwise. ${FOUNDER}
${RUBRIC}
The idea (key ${k}): ${JSON.stringify(byKey[k], null, 1)}
${SEARCH}
Do 8-15 searches: direct competitors (startups, apps, incumbents, free tools), whether this founder can actually reach and close the first customers, any legal or age issue, real prices and willingness to pay, and realistic size. Then give a verdict (kill = already done, illegal, unreachable or tiny; weak; strong), the numbers, and a sharpened version that answers what you found without shrinking it. Write a short markdown report to ${R3}/gate/g${String(n).padStart(2, '0')}.md as well.`,
  { model: M, label: `r4gate:${k}`, phase: 'Gate', schema: GATE }).then(g => g ? { key: k, ...g } : null).catch(() => null)))).filter(Boolean)
log(`Gate: ${gated.length} checked, strong ${gated.filter(g => g.verdict === 'strong').length}, weak ${gated.filter(g => g.verdict === 'weak').length}, kill ${gated.filter(g => g.verdict === 'kill').length}`)

const GLIST = gated.map(g => `[${g.key}] ${g.verdict.toUpperCase()} | ${g.sharpened.title}: ${g.sharpened.one_liner} | first revenue $${g.cost_to_first_revenue_usd} in ${g.weeks_to_first_revenue} weeks | median $${g.median_case_revenue_usd_m}M, upside $${g.upside_case_revenue_usd_m}M | blockers: ${String(g.teen_blockers).slice(0, 160)} | reason: ${String(g.deciding_reason).slice(0, 200)}`).join('\n')
const NF = (args && args.nfinal) || 8
const CHIEF = { type: 'object', properties: { finalists: { type: 'array', minItems: Math.min(3, NF), maxItems: NF, items: { type: 'object', properties: { key: { type: 'string' }, why: { type: 'string' } }, required: ['key', 'why'] } } }, required: ['finalists'] }
const chief = await limited(`You are the chief of a search for the best business an 18-year-old founder can start now. ${FOUNDER}
${RUBRIC}
These ideas passed through an adversarial evidence gate:
${GLIST}
Pick the ${NF} finalists that deserve full deep validation. Weigh the gate verdict, the speed and cost to first revenue, the founder fit and the upside. Keep variety, and avoid picking several near-duplicates. Use the keys exactly.`,
  { model: M, label: 'r4chief', phase: 'Gate', schema: CHIEF })
const byGate = Object.fromEntries(gated.map(g => [g.key, g]))
const finals = (chief ? chief.finalists : []).filter(f => byGate[f.key]).map((f, i) => ({ fid: `F${String(i + 1).padStart(2, '0')}`, key: f.key, why: f.why, gate: byGate[f.key], cand: byKey[f.key] }))
log(`Finalists: ${finals.map(f => f.fid + ' ' + f.gate.sharpened.title).join(' | ')}`)

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
The idea after the evidence gate: ${JSON.stringify({ candidate: f.cand, gate: f.gate }, null, 1)}
First read ${BIZ}/skills/deep-research-researcher.md and follow its research practice (ignore where it says to save notes).
${SEARCH}
Research deeply (15-25 searches and fetches): every competitor and free substitute; real prices and willingness to pay (posts, reviews, pricing pages); where the first customers gather and how to reach them; the legal, age and platform-policy issues; unit economics; and why now. Write a 1,500-2,500 word dossier with inline URLs to ${R3}/deep/${f.fid}_dossier.md, then return it.`,
    { model: M, label: `r4research:${f.fid}`, phase: 'Deep' }),
  (_, f) => parallel([
    ['market', 'MARKET AND COMPETITION: who already does this, what is free, would people really pay, and what happens when a bigger player copies it?'],
    ['founder', 'FOUNDER FIT, LEGAL AND EXECUTION: can THIS 18-year-old with 10-15 hours a week really get customers, deliver, stay legal, and handle platform risk, trust and support load?'],
  ].map(([k, lens]) => () => limited(`You are an adversarial critic trying to kill this idea if it deserves it. Lens: ${lens}
${FOUNDER}
Read the dossier ${R3}/deep/${f.fid}_dossier.md and the gate result: ${JSON.stringify(f.gate.sharpened)}.
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
return { candidates: cands.length, shortlist: shortlist.length, gated: gated.length, finalists: finals.length, standing: done }
