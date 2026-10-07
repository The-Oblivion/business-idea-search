export const meta = {
  name: 'biz-evo-tournament',
  description: 'Step 4: forced-rank tournament over survivors + offspring + hybrids (3 rounds x 3 lenses) to pick 25 finalists',
  phases: [{ title: 'Judge', model: 'claude-sonnet-5-5' }],
}
// Before running in a new session: set DIR to the folder that holds this pipeline's state
// (checkpoint/state in the repo), and pass args {shard, nshards, nb} where nb = batches per round
// printed by build_evo_tournament.py.
const M = 'claude-sonnet-5-5'
const DIR = '/private/tmp/claude-501/-Users-asherperemel/2d21b2bf-d792-4998-b326-860505fc728f/scratchpad/biz'
const LENSES = [
  ['vc', 'a partner at a top seed fund who has seen 20,000 pitches. You ask: can this become a very large company, why exactly now, and is it non-consensus AND right? You punish crowded categories and features pretending to be companies.'],
  ['operator', 'a serial founder who built three profitable bootstrapped companies. You ask: is the pain urgent and already budgeted, can a scrappy team reach and close its first 10 paying customers within 6 months, and do the unit economics work? You punish vague customers and ideas that need huge capital or regulatory miracles before any revenue.'],
  ['contrarian', 'a contrarian strategist and futurist. You ask: does this rest on a genuinely non-obvious insight that most smart people would dismiss but that is actually right, anchored in a real 2025-2026 shift? You punish clichés, me-too ideas, and "insights" that are just trends everyone already knows.'],
]
const SCHEMA = { type: 'object', properties: { ranking: { type: 'array', items: { type: 'object', properties: {
  id: { type: 'string' },
  rank: { type: 'integer', description: '1 = best; every idea gets a unique rank' },
  cliche: { type: 'boolean' },
  fatal_flaw: { type: 'string', description: '"none" or <=15 words' },
  note: { type: 'string', description: '<=25 words: the key reason for this rank' } },
  required: ['id', 'rank', 'cliche', 'fatal_flaw', 'note'] } } }, required: ['ranking'] }
const jobs = []
for (let r = 0; r < 3; r++) for (let b = 0; b < args.nb; b++) jobs.push({ r, b })
const mine = jobs.filter((_, j) => j % args.nshards === args.shard)
// Concurrency limiter: on a many-core host the engine allows up to 8 agents per workflow, so cap each
// workflow at args.conc (default 7) to keep total in-flight judges ~12-14 (safety-filter burst lesson).
async function pool(items, limit, fn) {
  const out = new Array(items.length).fill(null); let next = 0
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) { const k = next++; try { out[k] = await fn(items[k]) } catch (e) { out[k] = null } }
  }))
  return out
}
phase('Judge')
const res = await pool(mine, args.conc || 7, ({ r, b }) => {
  const [lk, lens] = LENSES[r]
  const bf = `${DIR}/evo/tournament/r${r}_b${String(b).padStart(3, '0')}.json`
  return agent(`You are judging round ${r + 1} of the EVOLUTION round of a business-idea tournament (early October 2026). You are ${lens}

Every idea in your batch already survived a 1,340-idea tournament and a web competitor check, or was bred from such a survivor. Each entry says its lineage (original survivor, mutation of a parent, or hybrid of two parents) and its competition context (what the competitor research found, and for offspring, how they claim to avoid those competitors). Judge each idea on its own merits: offspring are not automatically better than originals, and a hybrid must be genuinely stronger than a single business, not just bigger. Penalize ideas that do not credibly escape the competitors listed.

Read with the Read tool:
1. Your batch: ${bf}
2. Predictable/crowded patterns to penalize: ${DIR}/cliche_list.md

For EVERY idea give: cliche (true/false), fatal_flaw ("none" or <=15 words), note (<=25 words). Then force-rank ALL ideas from 1 (best) to N, no ties, weighing size of the prize, why-now, originality, feasibility for a scrappy team to win first paying customers within ~6 months, and defensibility, through your lens. Reward substance over polish. Be decisive.`, { model: M, label: `evojudge:r${r}_b${String(b).padStart(3, '0')}:${lk}`, schema: SCHEMA })
})
return { shard: args.shard, batches: mine.length, ok: res.filter(Boolean).length }
