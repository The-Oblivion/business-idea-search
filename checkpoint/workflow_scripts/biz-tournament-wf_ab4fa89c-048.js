export const meta = {
  name: 'biz-tournament',
  description: 'Forced-rank tournament: 3 rounds x 54 batches of ~25 ideas, 3 judge lenses, cliché flags, problem-cluster tagging',
  phases: [{ title: 'Judge', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const LENSES = [
  ['vc', 'a partner at a top seed fund who has seen 20,000 pitches. You ask: can this become a very large company, why exactly now, and is it non-consensus AND right? You punish crowded categories and features pretending to be companies.'],
  ['operator', 'a serial founder who built three profitable bootstrapped companies. You ask: is the pain urgent and already budgeted, can a scrappy team reach and close its first 10 paying customers within 6 months, and do the unit economics work? You punish vague customers and ideas that need huge capital or regulatory miracles before any revenue.'],
  ['contrarian', 'a contrarian strategist and futurist. You ask: does this rest on a genuinely non-obvious insight that most smart people would dismiss but that is actually right, anchored in a real 2025-2026 shift? You punish clichés, me-too ideas, and "insights" that are just trends everyone already knows.'],
]
const SCHEMA = { type: 'object', properties: { ranking: { type: 'array', items: { type: 'object', properties: {
  id: { type: 'string' },
  rank: { type: 'integer', description: '1 = best; every idea gets a unique rank' },
  cluster: { type: 'string', description: 'cid from the taxonomy, e.g. C042; C999 if nothing fits' },
  cliche: { type: 'boolean' },
  fatal_flaw: { type: 'string', description: '"none" or <=15 words' },
  note: { type: 'string', description: '<=20 words: the key reason for this rank' } },
  required: ['id', 'rank', 'cluster', 'cliche', 'fatal_flaw', 'note'] } } }, required: ['ranking'] }

const jobs = []
for (let r = 0; r < 3; r++) for (let b = 0; b < args.nb; b++) jobs.push({ r, b })
const mine = jobs.filter((_, j) => j % args.nshards === args.shard)
log(`shard ${args.shard}: ${mine.length} batches`)
phase('Judge')
const res = await parallel(mine.map(({ r, b }) => () => {
  const [lk, lens] = LENSES[r]
  const bf = `${DIR}/tournament/r${r}_b${String(b).padStart(3, '0')}.json`
  return agent(`You are judging round ${r + 1} of a business-idea tournament (late September 2026). You are ${lens}

Read these three files with the Read tool:
1. The batch of ideas you must judge: ${bf}
2. A reference list of predictable, crowded startup patterns: ${DIR}/cliche_list.md
3. A taxonomy of underlying customer problems: ${DIR}/tournament_taxonomy.json

For EVERY idea in the batch:
- cluster: the taxonomy cid whose problem the idea addresses (C999 if none fits).
- cliche: true if it matches a predictable pattern from the reference list without a genuinely unusual customer, wedge or insight, or if it is simply the first idea any smart person would have.
- fatal_flaw: "none", or the single flaw that would most likely kill it (<=15 words).
- note: the key reason for its rank (<=20 words).
Then force-rank ALL ideas from 1 (best) to N (worst), with no ties, weighing: size of the prize, why-now, originality/non-obviousness, feasibility for a scrappy team to win first paying customers within ~6 months, and defensibility, as seen through your lens. Reward substance and insight, not polished writing. Be decisive.`, { model: M, label: `judge:r${r}_b${String(b).padStart(3, '0')}:${lk}`, schema: SCHEMA })
}))
return { shard: args.shard, batches: mine.length, ok: res.filter(Boolean).length }
