export const meta = {
  name: 'biz-discover-shard',
  description: 'Scout 8 domains with web research, then generate ideas via domain lenses, wildcards and cross-domain collisions',
  phases: [
    { title: 'Scout', detail: 'web-research current signals per domain', model: 'claude-sonnet-5-5' },
    { title: 'Ideate', detail: 'domain lenses + wildcards + collisions', model: 'claude-sonnet-5-5' },
  ],
}

const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const SHARD = args.shard

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
  'Start with the silliest-sounding business idea you can think of, then find the real, serious, lucrative business hiding inside it. Do this five times.',
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
  'Things that are illegal, gray-market or informal today that could be formalized into large legitimate businesses.',
  'Businesses serving a single extremely specific persona with high willingness to pay (e.g., rural veterinarians, ship captains, wedding planners, landlords with 3-10 units).',
  'Inversion: take a business everyone thinks is terrible (low margin, hated, regulated) and find the version that is great.',
]

const LENSES = [
  ['contrarian', 'CONTRARIAN / INVERSION: identify what most people in this space believe that is wrong or about to become wrong, and build a business that profits from that gap.'],
  ['second-order', 'SECOND-ORDER EFFECTS: trace consequences 2-3 steps downstream of the trends in the brief. Who is about to have a new problem nobody is solving yet?'],
  ['boring-lucrative', 'BORING BUT LUCRATIVE: unsexy picks-and-shovels, services-as-software, compliance, operations, roll-ups. Real customers with budgets and urgent pain.'],
  ['moonshot', 'MOONSHOT / NOW-POSSIBLE: ideas that sound like science fiction but became technically and economically feasible in 2025-2026. Big, weird, ambitious, still with a concrete first product.'],
]

const COLLISION_PAIRS = [[0,4],[1,5],[2,6],[3,7],[0,3],[1,6],[2,7],[4,5],[0,6],[3,5]]

const IDEAS_SCHEMA = {
  type: 'object',
  properties: {
    ideas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'max 8 words' },
          one_liner: { type: 'string' },
          customer: { type: 'string', description: 'who exactly pays' },
          problem: { type: 'string' },
          solution: { type: 'string' },
          why_now: { type: 'string', description: 'specific 2025-2026 change that makes this possible or urgent now' },
          revenue_model: { type: 'string' },
          non_obvious_insight: { type: 'string', description: 'the secret / contrarian truth this idea rests on' },
          first_30_days: { type: 'string', description: 'how a small team starts and gets first paying customers cheaply' },
          outside_box_score: { type: 'integer', minimum: 1, maximum: 10 },
        },
        required: ['title','one_liner','customer','problem','solution','why_now','revenue_model','non_obvious_insight','first_30_days','outside_box_score'],
      },
    },
  },
  required: ['ideas'],
}

const COMMON = `Today is 2026-09-28. You are one of hundreds of independent idea-generators in a large search for the best business ideas in the world right now. Other agents cover other angles, so go deep and original on YOUR angle.

Rules for every idea:
- Be SPECIFIC: a named customer segment, a concrete wedge product, a clear way money changes hands. No vague "platform for X".
- Think far outside the box, but every idea must be a real, buildable business, not a thought experiment.
- Avoid tired, crowded clichés unless you have a genuinely new angle: generic AI tutor, AI note-taker, AI SDR/sales agent, AI personal assistant, generic freelancer marketplace, carbon-credit marketplace, meal kits, generic telehealth app, generic "AI for X" SaaS wrapper, NFT/metaverse, dropshipping.
- Prefer ideas where a small, scrappy team could win first paying customers within ~6 months, even if the eventual business is huge.
- Each idea must be meaningfully different from the others you produce.
- outside_box_score: honest 1-10 rating of how non-obvious the idea is (10 = almost nobody is thinking about this).
Return exactly 5 ideas.`

function scout(slug, desc) {
  return agent(`${COMMON.split('\n')[0]}

You are a RESEARCH SCOUT for the domain: ${desc}.

Use ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then run 8-15 targeted searches (and fetch key pages) to build a fact-dense briefing on what is CHANGING in this domain right now (2025-2026). Cover:
1. Biggest shifts of the last 12-18 months (technology cost curves crossing thresholds, new regulations and deadlines, demographic or behavioral shifts, macro/tariff effects). Use numbers.
2. Acute, quantified pain points. Look at forums/Reddit/industry press for what practitioners and customers complain about and would pay to fix.
3. Where money is flowing (recent funding rounds, acquisitions, big corporate moves), and which categories are already crowded.
4. Underserved segments, awkward gaps, and things incumbents are structurally unable to do.
5. 3-5 "weird signals": early, surprising data points most people have not noticed.

Write the briefing (800-1300 words, markdown, bullet-heavy, include source URLs inline) to the file ${DIR}/briefs/${slug}.md using the Write tool. Then return the full briefing text as your final answer.`, { model: M, label: `scout:${slug}`, phase: 'Scout' })
}

function ideate(kind, label, prompt) {
  return agent(`${COMMON}

${prompt}`, { model: M, label, phase: 'Ideate', schema: IDEAS_SCHEMA })
    .then(r => (r && r.ideas ? r.ideas.map(i => ({ ...i, source: label, kind })) : []))
    .catch(() => [])
}

const myDomains = DOMAINS.filter((_, i) => i % 4 === SHARD)
const myWild = WILDCARDS.filter((_, i) => i % 4 === SHARD)
log(`Shard ${SHARD}: ${myDomains.length} domains, ${myWild.length} wildcards, ${COLLISION_PAIRS.length} collisions`)

const scoutP = myDomains.map(([slug, desc]) => scout(slug, desc).then(b => b || `(scout for ${desc} failed; rely on your own knowledge of the domain as of 2026)`))

const wildP = myWild.map((w, i) => ideate('wildcard', `wild:s${SHARD}-${i}`,
  `Your creative angle (WILDCARD): ${w}
You may use ToolSearch "select:WebSearch" to check 2-4 facts that would make your ideas sharper and more current, but spend most effort on original thinking.`))

const domainP = myDomains.flatMap(([slug, desc], di) => LENSES.map(([lk, lens]) =>
  scoutP[di].then(brief => ideate('domain', `idea:${slug}:${lk}`,
    `DOMAIN: ${desc}
YOUR LENS: ${lens}

A research scout produced this current briefing on the domain. Mine it for non-obvious opportunities (do not just restate it):
<briefing>
${brief}
</briefing>`))))

const collP = COLLISION_PAIRS.map(([a, b]) =>
  Promise.all([scoutP[a], scoutP[b]]).then(([ba, bb]) => ideate('collision', `collide:${myDomains[a][0]}x${myDomains[b][0]}`,
    `COLLISION: Find businesses that only exist at the intersection of two unrelated domains. Every idea must genuinely need BOTH.
DOMAIN A: ${myDomains[a][1]}
<briefing_a>
${ba}
</briefing_a>
DOMAIN B: ${myDomains[b][1]}
<briefing_b>
${bb}
</briefing_b>`)))

const all = (await Promise.all([...wildP, ...domainP, ...collP])).flat()
log(`Shard ${SHARD}: ${all.length} ideas generated`)
return { shard: SHARD, count: all.length, titles: all.map(i => i.title) }
