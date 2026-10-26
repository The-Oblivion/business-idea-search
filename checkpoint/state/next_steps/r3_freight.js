export const meta = {
  name: 'biz-r3-freight',
  description: 'Round 3b: deep-validate and war-game the freight-invoice audit venture Asher already built, on the same scale as the round-3 finalists',
  phases: [{ title: 'Deep', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const BIZ = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R3 = `${BIZ}/round3`
const SEARCH = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Never pip-install anything. Today is late October 2026.`
const FOUNDER = `THE FOUNDER: Asher, 18, a US high-school senior applying to engineering programs. He has about 10-15 hours a week until June 2027, then a full summer, then college. He is legally an adult (he can form an LLC, sign contracts and take payments).
Strengths: he ships real, deployed software very fast with AI coding agents. He has built a multi-game web app with accounts and an in-app economy, multi-agent research pipelines, an AI-text detector that beat commercial detectors in his own blind tests, and a strategy-backtesting lab.
Network: a mentor who founded a roughly $1B audio-visual integration company and teaches entrepreneurship at a university; a family with business and investment connections and possibly modest seed capital if an idea earns it; and his own Gen Z world (classmates, college applicants, gamers, sports-betting friends).
Already built but not yet selling: a freight-invoice audit service for shippers (a flat diagnostic plus a contingency fee).
Weaknesses: no professional licenses, no industry track record, and enterprise or regulated buyers will not take him seriously cold.
GUARDRAILS: Ideas must be legal and ethical for an 18-year-old in the US. No real-money gambling operations, no regulated financial or medical advice, nothing that targets or exploits minors, and no academic-dishonesty tools.`
const RUBRIC = `What counts as a GREAT idea for this founder:
(1) He can get a first PAYING customer within about 60-90 days, spending under about $10k, in school-year hours.
(2) The buyers are ones who would plausibly buy from an 18-year-old: consumers, students, creators, small-business owners, prosumers, or self-serve software buyers where the product speaks for itself.
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

const F = `${R3}/freight`
const P = '/Users/asherperemel/projects/freight-audit'
const VENTURE = `THE VENTURE (already built by Asher, not yet sold): an LTL freight-invoice audit service for small and mid-size shippers. Offer: a $500 flat diagnostic (one month of invoices, full audit, written report, refunded if it finds under $500, credited against fees), then ongoing monthly auditing and recovery at a 20% contingency. Key law: 49 USC 13710(a)(3)(B) gives shippers 180 days from receipt of a bill to contest a charge, and 49 CFR 378 gives carriers 60 days to respond. The error classes are accessorials never rendered (liftgate, limited access, detention), reclass, reweigh, fuel-surcharge basis errors, duplicates and weight-break misses. NMFC density classes were restructured on 2025-07-19. The project files are in ${P} (read START-HERE.md, HANDOFF.md, FACT-CHECK.md, and skim outreach/, research/, src/ and site/).`
const CRIT = { type: 'object', properties: { severity: { type: 'string', enum: ['fatal', 'serious', 'manageable'] }, objections: { type: 'array', items: { type: 'string' } }, evidence: { type: 'string' } }, required: ['severity', 'objections', 'evidence'] }
const SC = { type: 'object', properties: { fit: { type: 'integer', minimum: 1, maximum: 10 }, speed: { type: 'integer', minimum: 1, maximum: 10 }, upside: { type: 'integer', minimum: 1, maximum: 10 }, originality: { type: 'integer', minimum: 1, maximum: 10 }, defensibility: { type: 'integer', minimum: 1, maximum: 10 }, overall: { type: 'integer', minimum: 1, maximum: 10 }, rationale: { type: 'string' } }, required: ['fit', 'speed', 'upside', 'originality', 'defensibility', 'overall', 'rationale'] }
const CAL = 'Calibrate: 9-10 = among the best possible things for a talented 18-year-old to start this year; 7-8 = clearly worth doing now; 5-6 = decent; 3-4 = a side hustle at best or a poor fit; 1-2 = do not do it. For reference, nine other teen-startable ideas from a 1,768-idea search scored 2.0-2.7 on this scale.'
const WG = { type: 'object', properties: {
  targets: { type: 'array', minItems: 15, maxItems: 25, items: { type: 'object', properties: { company: { type: 'string' }, url: { type: 'string' }, city_state: { type: 'string' }, why_ltl_heavy: { type: 'string' }, who_to_contact: { type: 'string', description: 'role, and name only if publicly listed' }, how_to_reach: { type: 'string' } }, required: ['company', 'url', 'city_state', 'why_ltl_heavy', 'who_to_contact', 'how_to_reach'] } },
  channels: { type: 'array', items: { type: 'string' } }, call_script: { type: 'string' }, objection_answers: { type: 'array', items: { type: 'string' } },
  strongest_competitor_response: { type: 'string' }, unit_economics: { type: 'string' }, plan_30_days: { type: 'array', items: { type: 'string' } },
  quit_conditions: { type: 'array', items: { type: 'string' } }, verdict: { type: 'string' } },
  required: ['targets', 'channels', 'call_script', 'objection_answers', 'strongest_competitor_response', 'unit_economics', 'plan_30_days', 'quit_conditions', 'verdict'] }
const dossier = await limited(`You are the lead researcher validating an already-built venture for ONE founder. ${FOUNDER}
${VENTURE}
First read ${BIZ}/skills/deep-research-researcher.md (its research practice) and the project files listed.
${SEARCH}
Research deeply (20-30 searches and fetches):
- every competitor serving SMALL and mid shippers (freight-audit and payment firms, AI freight-audit startups, contingency recovery shops, TMS and 3PL built-in audit, free tools) and their minimums and pricing;
- the real number of US shippers spending roughly $100k-$5M a year on LTL;
- real error and recovery rates from credible sources;
- how such shippers buy, and who signs;
- whether an 18-year-old can credibly sell this, and why contingency pricing helps;
- the legal points (180-day window, Part 378, contract waivers under 14101(b));
- whether AI now makes it possible to audit the unstructured documents (BOLs, delivery receipts, PODs) that rate-file automation misses;
- the path from a service to a scalable product or data asset.
Write a 2,000-3,000 word dossier with inline URLs to ${F}/dossier.md, then return it.`, { model: M, label: 'r3f:research', phase: 'Deep' })
const crits = await parallel([['market', 'MARKET AND COMPETITION: who already serves small LTL shippers, what is free or bundled into TMS and 3PL services, will they really pay 20%, and what happens when an AI freight-audit startup moves down-market?'], ['founder', 'FOUNDER FIT, LEGAL AND EXECUTION: can THIS 18-year-old with 10-15 hours a week get shippers to hand over invoices, deliver accurate audits, win carrier disputes, collect contingency fees, and stay legal (including whether claims need a licensed or bonded agent)?']].map(([k, lens]) => () => limited(`You are an adversarial critic trying to kill this venture if it deserves it. Lens: ${lens}
${FOUNDER}
${VENTURE}
Read the dossier ${F}/dossier.md. ${SEARCH} Do 6-12 searches for evidence AGAINST it.`, { model: M, label: `r3f:critic:${k}`, phase: 'Deep', schema: CRIT })))
const refined = await limited(`You are the founder's strategist. Produce the STRONGEST HONEST VERSION of this venture for this founder after the critics. ${FOUNDER}
${VENTURE}
Read ${F}/dossier.md and the project files. The critiques: ${JSON.stringify(crits, null, 1)}
Answer each one concretely. Keep a credible path to big (for example a niche wedge, then a product or data asset) or say plainly that it is a cash-flow side business. Give pricing, a median and an upside case, the riskiest assumption with a 2-week test, and quit conditions. Write it as markdown to ${F}/refined.md and return the markdown.`, { model: M, label: 'r3f:rewrite', phase: 'Deep' })
const [wg, scores] = await Promise.all([
  limited(`You are war-gaming the launch of this venture as if Asher starts calling on Monday. ${FOUNDER}
${VENTURE}
Read ${F}/refined.md, ${F}/dossier.md and ${P}/outreach/.
${SEARCH}
Do 20-35 searches to produce 15-25 REAL named target shippers that are likely heavy LTL users and small enough to be ignored by enterprise auditors. Prioritize Florida and the Southeast, plus audio-visual integrators and distributors, since his mentor founded a large AV integrator and the industry ships racks and displays by LTL. For each: URL, city, why it is LTL-heavy, who to contact (role, and a name only if publicly listed) and how to reach them. Also give: the channels, a 60-second call script, objection answers, the strongest competitor's response, unit economics, a 30-day plan and dated quit conditions. Write it as markdown to ${F}/wargame.md as well.`, { model: M, label: 'r3f:wargame', phase: 'Deep', schema: WG }),
  parallel([['operator', 'a founder who started profitable companies young'], ['investor', 'a seed investor who backs young founders'], ['mentor', 'a blunt mentor who wants this 18-year-old to succeed and not waste a year']].map(([k, lens]) => () => limited(`Score this venture for THIS founder as ${lens}. ${FOUNDER}
${CAL}
The refined version: ${refined}
Critiques: ${JSON.stringify(crits, null, 1)}
Read ${F}/dossier.md.`, { model: M, label: `r3f:score:${k}`, phase: 'Deep', schema: SC }))),
])
const ok = scores.filter(Boolean); const avg = d => ok.length ? Math.round(ok.reduce((a, s) => a + s[d], 0) / ok.length * 100) / 100 : null
return { critics: crits.filter(Boolean).map(c => c.severity), overall: avg('overall'), fit: avg('fit'), speed: avg('speed'), upside: avg('upside'), defensibility: avg('defensibility'), targets: wg ? wg.targets.length : 0, verdict: wg && wg.verdict }
