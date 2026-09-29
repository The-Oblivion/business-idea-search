export const meta = {
  name: 'sanity-check-a',
  description: 'Verify Sonnet subagents can web-search and write files',
  phases: [{ title: 'Probe', model: 'claude-sonnet-5-5' }],
}
phase('Probe')
const r = await agent(`You are a probe. Do three things and report results:
1. Use ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then run one WebSearch for "startup funding trends September 2026" and report the titles of the top 3 results (or the exact error if it fails).
2. Write the text "probe-ok" to the file /tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz/probe_a.txt using the Write tool. Report success or the exact error.
3. State which model you are if you know.
Return a short plain-text report.`, { model: 'claude-sonnet-5-5', label: 'probe-a' })
return r
