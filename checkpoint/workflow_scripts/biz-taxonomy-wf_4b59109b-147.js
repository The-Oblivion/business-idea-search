export const meta = {
  name: 'biz-taxonomy',
  description: 'Build a solution-agnostic taxonomy of underlying problems/opportunities across all generated ideas',
  phases: [{ title: 'Taxonomy', model: 'claude-sonnet-5-5' }],
}
const DIR = '/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz'
const SCHEMA = { type: 'object', properties: { clusters: { type: 'array', items: { type: 'object', properties: {
  cid: { type: 'string', description: 'C001, C002, ...' },
  name: { type: 'string', description: 'short name of the underlying problem/opportunity' },
  problem_statement: { type: 'string', description: 'one sentence: who has what problem, solution-agnostic' },
  approx_size: { type: 'integer', description: 'approximate number of ideas in the index that belong here' } },
  required: ['cid', 'name', 'problem_statement', 'approx_size'] } } }, required: ['clusters'] }
phase('Taxonomy')
const r = await agent(`You are organizing the output of a large brainstorm. The file ${DIR}/ideas/index.txt lists ~1,200 business ideas, one per line ("ID | title — one-liner"). Read the whole file with the Read tool (read it in chunks with offset/limit if needed; do not skip any part).

Build a taxonomy of the UNDERLYING PROBLEMS / OPPORTUNITIES these ideas address. Rules:
- Clusters are about the customer problem or opportunity, NOT the solution. Two ideas that attack the same pain for the same kind of customer with different products belong in the same cluster.
- Aim for 100-140 clusters. Each should be specific enough to be meaningful (e.g. "Caregivers coordinating care for aging parents at a distance", not "healthcare"), broad enough that most hold 3-20 ideas.
- Cover every idea: every line should fit some cluster. Add a final catch-all cluster C999 "Singular / uncategorized" for true one-offs.
- Number clusters C001, C002, ... in any order.

When done, write the taxonomy as JSON ({"clusters":[...]}) to ${DIR}/tournament_taxonomy.json with the Write tool, and also return it.`, { model: 'claude-sonnet-5-5', label: 'taxonomy', schema: SCHEMA })
return { clusters: r ? r.clusters.length : 0 }
