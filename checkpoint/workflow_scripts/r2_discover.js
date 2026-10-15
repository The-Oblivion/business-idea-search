export const meta = {
  name: 'biz-r2-discover',
  description: 'Round 2 step 1: breakout-pattern miners + big money-pool mappers (web research), feeding big-market-first ideation',
  phases: [
    { title: 'Patterns', model: 'claude-sonnet-5-5' },
    { title: 'Pools', model: 'claude-sonnet-5-5' },
  ],
}
// args: {part: 0|1, conc}. Part 0 = 5 pattern miners + pool slices 0-4; part 1 = pool slices 5-14.
// Each workflow caps itself at args.conc concurrent agents (10-CPU Mac allows 8; keep total in flight ~12).
const M = 'claude-sonnet-5-5'
const DIR = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R2 = `${DIR}/round2`
const SEARCH_NOTE = `Load web tools with ToolSearch "select:WebSearch,WebFetch". If WebSearch errors or reports a limit, fall back to Bash: python3 "/Users/asherperemel/docs/research_briefs/Wealth creation and preservation/search.py" "your query" 10 and open pages with WebFetch (or curl). Free APIs also work: SEC EDGAR full-text search, Wikipedia. Never pip-install anything. Today is mid-October 2026.`

const PATTERN_MINERS = [
  ['ai_breakouts', 'AI-native companies that went from launch to $50M+ annual revenue fastest in 2024-2026 (fastest-to-$100M-ARR lists, Bessemer/a16z/Sequoia/ICONIQ data, The Information, top YC companies, vertical AI winners in legal, medical, finance, code, support). For each: which existing spend pool did it capture (whose budget, what line item), what shift made it possible, what was the wedge, and why did incumbents fail to respond? Then say which of these patterns are now crowded and which are still open in other pools.'],
  ['non_ai_growth', 'The fastest-growing NON-AI or AI-light businesses of 2024-2026: the Inc. 5000 (2025) top ranks, Deloitte Fast 500, breakout consumer brands, outsized private-equity roll-ups, services businesses that scaled fast (home services, healthcare services, GLP-1 compounding and telehealth, defense suppliers, energy contractors, staffing). Extract the underlying growth mechanism (demand shock, regulatory shift, distribution hack, financing structure, labor arbitrage), not the company story.'],
  ['global_arbitrage', 'Breakout companies OUTSIDE the US in 2024-2026: India, Brazil, Mexico, Nigeria, Kenya, Egypt, Indonesia, Vietnam, the Gulf states, Europe, Japan, Korea. Find patterns that have not yet been ported to the US (or US patterns not yet ported to them), and say why the port would or would not work: regulation, payment rails, labor cost, density, culture.'],
  ['policy_created', 'Businesses that exploded because of a 2023-2026 policy or regulation change: the IRA and its 2025 rollback, CHIPS, the GENIUS Act (stablecoins), IEEPA tariffs and refunds, H.R.1 (Medicaid work requirements, SNAP changes), Medicare drug-price negotiation and MFN pricing, the EU AI Act, DORA, NIS2, the CSRD omnibus, US permitting reform, state privacy and AI laws, immigration enforcement, defense budget surges (US and Europe). Find which created LARGE new spend, who captured it, and which 2026-2028 deadlines will create the next wave of forced spend.'],
  ['too_early', 'Startups from 2012-2022 that failed or stalled because they were too early (post-mortems, shut-down announcements, CB Insights failure lists, "why we shut down" posts, HN threads), where the specific blocker (cost curve, missing technology, regulation, consumer behavior, infrastructure, financing) was REMOVED in 2025-2026. For each: the original idea, the exact reason it died, what changed and when, and the size of the prize now.'],
]

const POOL_SLICES = [
  ['health', 'US healthcare delivery and payers: hospitals, physician groups, post-acute and home health, behavioral health, Medicaid managed care (H.R.1 changes), Medicare Advantage (2026-27 rate and coding changes), pharmacy and PBMs, GLP-1 economics, clinical labs, revenue cycle.'],
  ['insurance', 'Insurance and risk transfer worldwide: the property and casualty availability crisis (wildfire, hail, flood, Florida/California), reinsurance, workers comp, commercial auto and trucking, title, life and annuities, specialty and E&S lines, AI and cyber liability, parametric and captive structures.'],
  ['built', 'Real estate, construction and housing: residential new-build and remodeling, multifamily, manufactured housing, the commercial real-estate debt maturity wall, property management, HOAs, building permits and inspections, insurance-driven repairs, skilled-trade labor shortages.'],
  ['energy', 'Energy, utilities and the grid: data-center power and interconnection, transmission, utility O&M and capex, distributed energy and storage, gas turbines and backup power, nuclear restarts and SMRs, oilfield services, utility rate cases, wildfire mitigation.'],
  ['industrial', 'Industrial and manufacturing economy: reshoring and tariff-driven sourcing shifts, MRO and industrial distribution, contract manufacturing, the defense industrial base, factory automation and robotics, industrial equipment service, aftermarket parts, quality and certification.'],
  ['logistics', 'Logistics, transport and trade: trucking and freight brokerage, customs and tariff compliance, ports, warehousing and 3PLs, last-mile delivery, aviation maintenance and parts, rail, cross-border e-commerce (de minimis repeal), fleet electrification.'],
  ['public', 'Government, defense and public-sector spend: state and local procurement, courts and justice, corrections, benefits administration, federal workforce cuts and outsourcing, European and Asian defense spending surges, NATO 3.5-5% commitments, municipal water and infrastructure, election administration.'],
  ['finance', 'Financial services: bank operations and compliance, small-business and consumer lending, private credit, payments and stablecoins after the GENIUS Act, the $80T+ generational wealth transfer, accounting, audit and tax, insurance-linked finance, collections, fraud.'],
  ['services', 'Professional and business services: law firms and legal spend, accounting and audit, consulting, staffing, BPO and outsourcing threatened by AI, HR and benefits administration, compliance and certification services, translation, customer support. Focus on where the money moves as AI displaces labor.'],
  ['consumer', 'Big consumer and household spend: food and groceries, car ownership (repairs, insurance, financing), childcare, aging at home and family caregiving, pets, death and funeral, home services, weddings, fitness, beauty, subscriptions and household admin. Look for pools that consumers hate paying for and that 2025-2026 shocks are disturbing.'],
  ['work_learning', 'Education, work and labor markets: K-12 (enrollment decline, ESAs and vouchers), higher education (the enrollment cliff, closures), workforce training and apprenticeships, trades shortages, immigrant labor after enforcement shifts, credentialing and licensing, white-collar job displacement, gig work.'],
  ['global_south', 'High-growth markets outside the US and Europe: India, Indonesia, Vietnam, the Philippines, Nigeria, Kenya, Egypt, Brazil, Mexico, the Gulf states. Big pools with 2025-2026 shocks (digital public infrastructure, remittances, tariffs and China+1, energy access, healthcare, credit, informal retail, agriculture).'],
  ['aging_rich', 'Aging rich-world economies and their pools: Japan, Korea, Germany, Italy, the UK and the US Northeast. Long-term care, pension and estate flows, labor shortages, succession of small businesses (the silver tsunami of owner retirements), housing stock, rural service collapse.'],
  ['resources', 'Agriculture, food systems, water and materials: farm inputs and crop insurance, livestock, food processing, water utilities and industrial water, critical minerals and mining, recycling and circular materials, forestry, fisheries. Include tariff and climate shocks of 2025-2026.'],
  ['hidden_giants', 'HIDDEN GIANTS across the whole economy: very large, boring, unglamorous spend pools that tech founders and VCs almost never look at (for example uniforms and linen, elevators and escalator service, pallets, fire and life-safety inspection, towing, court fines and fees, church and nonprofit finance, cemetery and monument, industrial cleaning, pest control, signage, school buses, vending, landfill and hauling). Find 10 with real 2025-2026 shocks and fragile incumbents.'],
]

const PATTERNS_SCHEMA = { type: 'object', properties: { patterns: { type: 'array', items: { type: 'object', properties: {
  name: { type: 'string' }, mechanism: { type: 'string', description: 'the underlying growth mechanism in 1-3 sentences' },
  examples: { type: 'array', items: { type: 'object', properties: { company: { type: 'string' }, evidence: { type: 'string', description: 'revenue/growth facts' }, url: { type: 'string' } }, required: ['company', 'evidence', 'url'] } },
  shift_that_enabled_it: { type: 'string' }, why_incumbents_failed: { type: 'string' },
  still_open_or_crowded: { type: 'string', description: 'is this pattern still open, and where?' },
  transfer_targets: { type: 'string', description: 'specific untouched spend pools it could transfer to, and why' } },
  required: ['name', 'mechanism', 'examples', 'shift_that_enabled_it', 'why_incumbents_failed', 'still_open_or_crowded', 'transfer_targets'] } } },
  required: ['patterns'] }

const POOLS_SCHEMA = { type: 'object', properties: { pools: { type: 'array', items: { type: 'object', properties: {
  name: { type: 'string', description: 'specific money flow, e.g. "US hospitals\' spend on contract nurses"' },
  geography: { type: 'string' },
  annual_spend_usd_b: { type: 'number', description: 'annual spend in USD billions' },
  size_basis: { type: 'string', description: 'how the size was derived' }, size_source_url: { type: 'string' },
  money_flow: { type: 'string', description: 'who pays whom for what' },
  shock: { type: 'string', description: 'the specific 2025-2026 change disturbing this money flow' },
  shock_date: { type: 'string', description: 'YYYY-MM' }, shock_source_url: { type: 'string' },
  incumbents: { type: 'string', description: 'who captures this money today and how they make it' },
  incumbent_fragility: { type: 'string', description: 'why incumbents cannot easily respond' },
  funded_startups_already_here: { type: 'string', description: 'named venture-funded startups (2023-2026) attacking it, or "none found" with what you searched' },
  crowdedness: { type: 'string', enum: ['open', 'contested', 'crowded'] },
  wedge_hints: { type: 'string', description: 'specific sub-segments where a small team could enter' },
  insider_roles: { type: 'string', description: 'practitioner roles who would know the non-obvious truths of this pool' },
  hidden_giant: { type: 'boolean', description: 'true if big but rarely looked at by tech founders and VCs' } },
  required: ['name', 'geography', 'annual_spend_usd_b', 'size_basis', 'size_source_url', 'money_flow', 'shock', 'shock_date',
    'shock_source_url', 'incumbents', 'incumbent_fragility', 'funded_startups_already_here', 'crowdedness', 'wedge_hints',
    'insider_roles', 'hidden_giant'] } } },
  required: ['pools'] }

const LIMIT = args.conc || 6
let active = 0
const waiters = []
async function limited(prompt, opts) {
  while (active >= LIMIT) await new Promise(r => waiters.push(r))
  active++
  try { return await agent(prompt, opts) } finally { active--; const w = waiters.shift(); if (w) w() }
}

const patternJob = ([key, brief]) => limited(`You are a research analyst mining REAL evidence of what is working in business right now, to inform a search for the best new business ideas of late 2026.
Your brief: ${brief}
${SEARCH_NOTE}
Read ${R2}/inputs/lessons.md first: round 1 of this search produced only small niche businesses, and your job is to surface mechanisms that build LARGE businesses.
Do 12-20 searches and fetches. Prefer primary or high-quality sources (company announcements, filings, investor letters, reputable press, datasets). Extract 8-12 distinct, transferable PATTERNS (a pattern is a mechanism that could recur in other markets, not just a company story), each backed by 1-3 real examples with numbers and URLs. Be skeptical of hype: no revenue number means weak evidence, so say so.
Write your findings as markdown to ${R2}/patterns/${key}.md (a section per pattern with sources), then return the structured result.`,
  { model: M, label: `r2pattern:${key}`, phase: 'Patterns', schema: PATTERNS_SCHEMA })

const poolJob = ([key, slice]) => limited(`You are mapping BIG MONEY POOLS for a search for the best new business ideas of late 2026. Round 1 of this search found only small niche businesses, so this round starts from where large amounts of money flow and are being disturbed. Read ${R2}/inputs/lessons.md first.
Your slice of the economy: ${slice}
${SEARCH_NOTE}
Map 8-10 spend pools in your slice. A pool is a specific stream of money (who pays whom for what), such as "US hospitals' annual spend on contract nurses" or "Japanese municipalities' spend on water-pipe replacement", NOT a whole industry. Requirements for each pool:
- Size: at least $5B a year (at least $15B if global), with a source and how you derived it.
- A specific 2025-2026 shock that is changing how this money flows (a regulation, price, technology, demographic, capital or geopolitical change), with a date and source.
- Incumbents: who captures the money today and how; why they are fragile, or why they cannot respond (business-model conflict, legacy systems, regulation, fragmentation).
- Crowdedness: search for venture-funded startups (2023-2026) already attacking it, name them, and judge open, contested or crowded. Be honest; crowded pools are still useful to know about.
- Wedge hints: specific sub-segments where a small team could get in.
- Insider roles: which practitioners would know the non-obvious truths.
At least 3 of your pools must be "hidden giants": big, boring pools that tech founders rarely look at. Avoid pools where the only obvious play is a generic AI copilot.
Do 15-25 searches and fetches, preferring primary sources (government statistics, filings, trade associations, earnings calls, regulators).
Write your pool map as markdown to ${R2}/pools/${key}.md (a section per pool with sources), then return the structured result.`,
  { model: M, label: `r2pool:${key}`, phase: 'Pools', schema: POOLS_SCHEMA })

const jobs = args.part === 0
  ? [...PATTERN_MINERS.map(p => () => patternJob(p).then(r => ({ kind: 'pattern', key: p[0], n: r ? r.patterns.length : 0 }))),
     ...POOL_SLICES.slice(0, 5).map(p => () => poolJob(p).then(r => ({ kind: 'pool', key: p[0], n: r ? r.pools.length : 0 })))]
  : POOL_SLICES.slice(5).map(p => () => poolJob(p).then(r => ({ kind: 'pool', key: p[0], n: r ? r.pools.length : 0 })))
const out = await Promise.all(jobs.map(j => j().catch(() => null)))
log(`part ${args.part}: ${out.filter(Boolean).length}/${jobs.length} agents returned`)
return out
