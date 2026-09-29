export const meta = {
  name: 'biz-cliche-detector',
  description: 'Predict the most predictable/consensus startup ideas of 2026 so tournament judges can penalize clichés',
  phases: [{ title: 'Predict clichés', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const SCHEMA = { type: 'object', properties: { cliches: { type: 'array', items: { type: 'object', properties: {
  pattern: { type: 'string', description: 'short name of the predictable idea pattern' },
  examples: { type: 'string', description: '1-2 concrete example phrasings' },
  why_predictable: { type: 'string' } }, required: ['pattern', 'examples', 'why_predictable'] } } }, required: ['cliches'] }
const FRAMES = [
  'You are an experienced seed-stage investor in late September 2026. List the 40 startup pitches you are most tired of seeing this year: the ideas that arrive in your inbox every week, that dozens of funded companies already pursue, or that any smart person would think of first.',
  'Imagine 1,000 people and AI assistants were each asked in 2026 "what is a great new business idea?". List the 40 answers that would come up most often (the consensus, first-thought ideas), grouped as patterns.',
  'You are a startup accelerator partner reviewing thousands of 2026 applications. List 40 idea patterns that look novel to the founder but are actually crowded, obvious, or already dominated by incumbents or well-funded startups (e.g., in AI agents, climate, health, fintech, eldercare, SMB software, creator tools, security).',
]
phase('Predict clichés')
const res = await parallel(FRAMES.map((f, i) => () => agent(`${f}\n\nYou may load web search (ToolSearch "select:WebSearch") and run a few searches on 2025-2026 startup funding and accelerator batches to ground your list. Be concrete and specific.`, { model: M, label: `cliche:${i}`, schema: SCHEMA })))
return { lists: res.filter(Boolean).length }
