export const meta = {
  name: 'sanity-check-b',
  description: 'Verify a second concurrent workflow can run',
  phases: [{ title: 'Probe', model: 'claude-sonnet-5-5' }],
}
phase('Probe')
const r = await agent(`You are a probe. Use the Write tool to write "probe-ok" to /tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz/probe_b.txt, then return "done" or the exact error.`, { model: 'claude-sonnet-5-5', label: 'probe-b' })
return r
