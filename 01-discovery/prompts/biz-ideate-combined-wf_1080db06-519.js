export const meta = {
  name: 'biz-ideate-combined',
  description: 'Discovery ideation, consolidated: one agent per domain (all 4 lenses), paired wildcards, paired collisions; reads scout briefs from disk',
  phases: [{ title: 'Ideate', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const DOMAINS = [
  ['agent-economy', 'AI agents & the emerging agent economy (agents as buyers/sellers, agent infrastructure, what breaks when software acts autonomously)'],
  ['health-glp1-longevity', 'Healthcare delivery, GLP-1 drugs, longevity/preventive medicine, consumer health'],
  ['aging-silver', 'Aging populations, eldercare, caregivers, the silver economy'],
  ['climate-adapt', 'Climate adaptation: extreme heat, floods, wildfire, insurance retreat, uninsurable homes'],
  ['energy-grid', 'Energy transition & the grid: data-center power demand, batteries, VPPs, interconnection queues, home electrification'],
  ['trades-housing', 'Construction, housing shortage, skilled-trades labor shortage, home services'],
  ['reshoring-supply', 'Manufacturing reshoring, tariffs, supply-chain rewiring, industrial automation'],
  ['food-ag', 'Food & agriculture: precision ag, farm labor, food waste, alt proteins, GLP-1 effects on food'],
  ['edu-credentials', 'Education, credentialing and skills after AI; schools, homeschooling, trade schools'],
  ['work-displacement', 'Labor-market disruption from AI: displaced white-collar workers, new job types, freelancing'],
  ['smb-ops', 'The ~30M small businesses: back office, bookkeeping, compliance, local marketing, succession'],
  ['legal-regtech', 'Legal services, compliance, new regulations (EU AI Act, privacy, PFAS, right to repair, etc.)'],
  ['fintech-insurance', 'Finance: stablecoins, payments, embedded finance, insurance gaps, household finance'],
  ['real-estate', 'Real estate: office-to-residential conversion, vacancies, property management, housing affordability'],
  ['logistics-robotics', 'Logistics & physical automation: drones, autonomous vehicles, warehouse & humanoid robots'],
  ['space-sat', 'Space economy: cheap launch, satellite data, direct-to-cell, earth observation'],
  ['synbio-biotools', 'Biotech tools, synthetic biology, lab automation, AI-driven drug discovery'],
  ['mental-loneliness', 'Mental health, loneliness epidemic, community, meaning'],
  ['creator-provenance', 'Creator economy & media after AI-generated content floods: provenance, authenticity, human-made'],
  ['entertainment-live', 'Gaming, entertainment, live experiences, fandoms'],
  ['pets', 'Pets & animal health, vet shortage, pet insurance'],
  ['parenting-genalpha', 'Parenting, childcare deserts, Gen Alpha, kids and AI/screens'],
  ['govtech-defense', 'Government, public sector, defense tech, dual-use, municipal services'],
  ['security-identity', 'Cybersecurity, deepfake fraud, identity verification, scams targeting consumers and businesses'],
  ['emerging-markets', 'Emerging markets leapfrogging: Africa, India, LATAM, Southeast Asia'],
  ['circular-materials', 'Waste, recycling, circular economy, critical minerals, materials'],
  ['water', 'Water scarcity, water infrastructure, PFAS, desalination, agriculture water'],
  ['travel-hospitality', 'Travel, hospitality, remote work travel, overtourism'],
  ['fitness-wellness', 'Sports, fitness, wellness, wearables, recovery'],
  ['death-wealth-transfer', 'Death, funerals, estates, inheritance, the great wealth transfer'],
  ['trust-verification', 'Trust & verification markets: proving human, proving quality, reputation, audits'],
  ['niche-weird', 'Weird, niche and overlooked markets: hobbies, collectibles, faith communities, subcultures'],
]
const WILDCARDS = [
  'Businesses whose paying customers are AI agents, not humans.',
  'Regulatory windows: things that just became legal/required (or will in 12-24 months) that create forced demand.',
  'When intelligence is nearly free, what becomes scarce and expensive? (trust, liability, physical presence, taste, human attention, accountability). Build businesses on the new scarcity.',
  'Famous startups that failed 5-15 years ago because they were too early. Which would work in late 2026, and how exactly?',
  'Luxury services only the rich have (family office, personal chef, concierge doctor, chief of staff, lobbyist). Deliver them to ordinary people for about $20/month.',
  'Business models that succeed in one country (China, India, Brazil, Nigeria, Japan, Korea, Nordics) but do not exist yet in the US/Europe, or the reverse.',
  'Data nobody is monetizing: exhaust data, public records, sensor feeds, municipal data, abandoned datasets.',
  'Problems people pay to escape: embarrassment, bureaucracy, waiting, confrontation, paperwork, fear. Businesses that remove dread.',
  'Stand in 2032 and look back: which business will seem obvious in hindsight that almost nobody is building in 2026?',
  'Liability and insurance for decisions made by AI systems and autonomous machines.',
  'Physical-world APIs: making physical things (buildings, vehicles, labs, factories, farms) programmable by software and agents.',
  'Status goods and signaling in an AI-saturated world: what will people show off?',
  'People displaced by AI (paralegals, junior coders, translators, call-center staff, illustrators): businesses that serve them or employ them in new ways.',
  'Distressed and stranded assets: dead malls, empty offices, abandoned golf courses, closed churches, decommissioned infrastructure. Profitable second lives.',
  'Old people + new technology: the 80-year-old customer is underserved by every tech company.',
  'Unbundle a giant incumbent (Amazon, Google, a big bank, a hospital system, a university) for 2026: which piece can be carved off?',
  'Rituals and life transitions (moving, divorce, weddings, new baby, retirement, immigration, death): the moments people spend a lot and are underserved.',
  'Anti-AI and anti-screen: products for the growing number of people who want less screen time, more analog life, verified human contact.',
  'Longevity and elite preventive health for the middle class.',
  'New cheap sensors or new satellite data streams (hyperspectral, methane, SAR, direct-to-cell) that enable businesses impossible 3 years ago.',
  'Matching markets that do not exist yet: two groups that need each other but have no efficient way to meet.',
  'The trust and payment layer for agent-to-agent commerce (disputes, escrow, reputation, identity for agents).',
  'Take an idea from a science-fiction novel or film that is now technically feasible, and turn it into a real business.',
  'Biomimicry and nature-inspired businesses: biology as the product or the process.',
  'Meaning, faith, purpose and belonging as a market in a secularizing, lonely world.',
  'Start with the silliest-sounding business idea you can think of, then find the real, serious, lucrative business hiding inside it.',
  'Roll-ups of fragmented local service businesses (HVAC, pest control, laundromats, dental labs, funeral homes) supercharged by AI operations.',
  'Micro-manufacturing and local production: 3D printing, CNC, bioprinting, small-batch everything.',
  'Businesses that exploit the time lag between a new capability existing and incumbents adopting it (the 18-month gap).',
  'Open-source projects or public research with huge adoption but no one commercializing them properly.',
  'Hardware plus subscription businesses in categories that have never had them.',
  'Weather, climate and catastrophe risk products for ordinary people and small businesses (parametric insurance, hedges).',
  'Businesses for Gen Alpha and Gen Z as they become earners, not as they are today.',
  'Second-order effects of GLP-1 drugs, humanoid robots, and self-driving cars on adjacent industries.',
  'Businesses that thrive in a recession or crisis and are counter-cyclical.',
  'The "picks and shovels" for the AI buildout that are unglamorous (cooling, permitting, power, skilled labor, data labeling for physical world).',
  'Identity, reputation and credentials that people can carry across platforms and borders.',
  'Things that are informal or gray-market today that could be formalized into large legitimate businesses.',
  'Businesses serving a single extremely specific persona with high willingness to pay (e.g., rural veterinarians, ship captains, wedding planners, landlords with 3-10 units).',
  'Inversion: take a business everyone thinks is terrible (low margin, hated, regulated) and find the version that is great.',
]
const LOCAL_PAIRS = [[0,4],[1,5],[2,6],[3,7],[0,3],[1,6],[2,7],[4,5],[0,6],[3,5]]
const SKIP_WILD = [2, 6, 7]
const IDEA_PROPS = {
  title: { type: 'string', description: 'max 8 words' },
  angle: { type: 'string', description: 'which lens / wildcard / pairing produced this idea' },
  one_liner: { type: 'string' },
  customer: { type: 'string', description: 'who exactly pays' },
  problem: { type: 'string' },
  solution: { type: 'string' },
  why_now: { type: 'string', description: 'specific 2025-2026 change that makes this possible or urgent now' },
  revenue_model: { type: 'string' },
  non_obvious_insight: { type: 'string', description: 'the secret / contrarian truth this idea rests on' },
  first_30_days: { type: 'string', description: 'how a small team starts and gets first paying customers cheaply' },
  outside_box_score: { type: 'integer', minimum: 1, maximum: 10 },
}
const SCHEMA = { type: 'object', properties: { ideas: { type: 'array', items: { type: 'object', properties: IDEA_PROPS,
  required: ['title','angle','one_liner','customer','problem','solution','why_now','revenue_model','non_obvious_insight','first_30_days','outside_box_score'] } } }, required: ['ideas'] }

const RULES = `Quality bar for every idea:
- Specific: a named customer segment, a concrete wedge product, a clear way money changes hands.
- Genuinely outside the box, yet a real buildable business.
- Skip crowded clichés (generic AI tutor, note-taker, sales agent, personal assistant, freelancer marketplace, carbon-credit marketplace, meal kits, generic telehealth, thin "AI for X" wrappers, NFTs, dropshipping) unless you have a truly new angle.
- Favor ideas where a small, scrappy team could win first paying customers within ~6 months, even if the eventual business is huge.
- No two ideas should be near-duplicates.
- outside_box_score: your honest 1-10 rating of how non-obvious it is.`

const jobs = []
DOMAINS.forEach(([slug, desc]) => jobs.push({ label: `idea:${slug}:all4`, prompt:
`It is late September 2026 and you are a startup strategist hunting for the best new businesses in one area: ${desc}.

Start by reading the research briefing a colleague wrote on this area: ${DIR}/briefs/${slug}.md (Read tool). If the file is missing, load web search with ToolSearch "select:WebSearch" and do 5-8 searches on what changed in this area during 2025-2026.

Then produce 20 ideas, 5 from each of these four angles (set "angle" accordingly):
1. contrarian: what do insiders believe that is wrong or about to become wrong? Profit from the gap.
2. second-order: trace the trends 2-3 steps downstream. Who is about to have a new problem nobody solves yet?
3. boring-lucrative: unsexy picks-and-shovels, services-as-software, compliance, operations, roll-ups with urgent pain and real budgets.
4. moonshot: sounds like science fiction but became feasible in 2025-2026; ambitious, yet with a concrete first product.

${RULES}` }))
const wild = WILDCARDS.map((w, i) => [i, w]).filter(([i]) => !SKIP_WILD.includes(i))
for (let k = 0; k < wild.length; k += 2) {
  const grp = wild.slice(k, k + 2)
  jobs.push({ label: `wild:${grp.map(g => 'g' + g[0]).join('+')}`, prompt:
`It is late September 2026. You are an unusually imaginative founder brainstorming businesses from provocative starting points. Take each prompt below and produce 5 ideas for it (set "angle" to the prompt number), ${grp.length * 5} ideas total:
${grp.map((g, n) => `Prompt ${n + 1}: ${g[1]}`).join('\n')}

You may load web search (ToolSearch "select:WebSearch") and check a few facts to make ideas sharper and current, but most of the value is original thinking.

${RULES}` })
}
const pairs = []
for (let k = 0; k < 4; k++) LOCAL_PAIRS.forEach(([a, b]) => pairs.push([4 * a + k, 4 * b + k]))
for (let k = 0; k < pairs.length; k += 2) {
  const grp = pairs.slice(k, k + 2)
  jobs.push({ label: `collide:${grp.map(([a, b]) => DOMAINS[a][0] + 'x' + DOMAINS[b][0]).join('+')}`, prompt:
`It is late September 2026. Your specialty is finding businesses that can only exist where two unrelated industries meet. For each pairing below, produce 5 ideas that genuinely need BOTH industries (set "angle" to the pairing), ${grp.length * 5} ideas total.
${grp.map(([a, b], n) => `Pairing ${n + 1}: (A) ${DOMAINS[a][1]}  x  (B) ${DOMAINS[b][1]}. Briefings: ${DIR}/briefs/${DOMAINS[a][0]}.md and ${DIR}/briefs/${DOMAINS[b][0]}.md`).join('\n')}

Read the briefings with the Read tool first (if one is missing, use your own knowledge of that industry as of 2026).

${RULES}` })
}
const mine = jobs.filter((_, j) => j % args.nshards === args.shard)
log(`shard ${args.shard}/${args.nshards}: ${mine.length} of ${jobs.length} jobs`)
phase('Ideate')
const res = await parallel(mine.map(j => () => agent(j.prompt, { model: M, label: j.label, schema: SCHEMA })))
return { shard: args.shard, jobs: mine.length, ok: res.filter(Boolean).length }
