export const meta = {
  name: 'biz-deliverables',
  description: 'Step 9: write the final top-5 report and build the interactive explorer page of every idea from both rounds',
  phases: [{ title: 'Deliverables', model: 'claude-sonnet-5-5' }],
}
const M = 'claude-sonnet-5-5'
const BIZ = '/Users/asherperemel/projects/business-idea-search-work/biz'
const R2 = `${BIZ}/round2`
const REPO = '/Users/asherperemel/projects/business-idea-search'
const report = agent(`You are writing the final report of a multi-week, multi-agent search for the 5 best business ideas in the world right now (late October 2026), for one reader: Asher, an 18-year-old founder who wants blunt, plain-language honesty with no sugarcoating.
First read ${BIZ}/skills/deep-research-report-writer.md and follow its standards (structure, citations, plain language). Then read:
- ${REPO}/PROCESS_LOG.md (the full narrative; read all of it, especially everything from "## Round 2" onward and "## Step 8")
- ${R2}/final_top5.json (the orchestrator's final ranking, overrides and contrarian bets: this is authoritative, so do not re-rank)
- For each top-5 cid (C10, C13, C03, C16, C09): ${R2}/deep/<cid>_refined.md, ${R2}/deep/<cid>_dossier.md, ${R2}/wargame/<cid>.md, ${R2}/h2h/briefs/<cid>.md
- ${R2}/h2h_results.csv
Write the report to "${REPO}/reports/Top 5 business ideas 2026.md". Structure:
1. The answer in 10 lines: the 5 ideas in rank order, one line each, plus the single most important conclusion of the whole search (the edge in late 2026 is the founder's insider position more than the idea; no uncrowded venture-scale slam dunk survived).
2. How the search worked: about 2,100 agent runs, two rounds, the funnel with real counts from the log, and what each filter killed and why. Keep it short and use a table.
3. One section per idea, in rank order. Each needs: the pitch in plain words; why now (dated, sourced); evidence of demand; competitors and the edge (name the strongest rival the war-game found); unit economics (price, CAC, gross margin, payback, capital to first revenue); the 10 named first customers (a table with URLs); the riskiest assumption and the exact 2-week test; the 90-day plan; quit conditions with dates; who must be on the founding team; and an honest verdict. Cite sources inline with URLs taken from the dossiers and war-games, and never invent a URL or a number.
4. Contrarian bets (3, clearly labeled as less validated).
5. What the search learned about finding ideas (lessons from round 1's failure, the gate calibration, and why operations-heavy businesses dominate).
6. Limitations: adversarial-agent bias, LLM judges, desk research only, no customer calls yet.
Aim for 6,000-9,000 words. Plain English, short sentences, no hype. Return a 5-line summary of what you wrote.`, { model: M, label: 'deliver:report', phase: 'Deliverables' })

const explorer = agent(`You are a senior front-end engineer and designer. Build ONE self-contained HTML page, written to ${R2}/explorer/index.html, that lets a reader explore every idea from a multi-agent search for the best business ideas of late 2026 and follow each idea's journey through the pipeline.
DATA (published next to the page and loaded with fetch() using relative URLs; never inline them):
- explorer_data.json (4.9 MB): an array of 1,768 records. Read the first ~3 records and a round-2 record of ${R2}/explorer/explorer_data.json to confirm the shape. Keys:
  - Every record: id, round (1|2), t (title), o (one-liner).
  - Round 1 also: cu customer, pr problem, so solution, wn why now, rm revenue model, ins insight, src source agent, k kind (idea|wild|collide|persona|signal|offspring|hybrid), obs outside-box score 1-10, parent (for offspring/hybrids), kids (offspring ids).
    - tour: {rank, score, cl cluster name, cv cliche votes, sel selected for competitor check, why selection reason, j: [{l lens, r rank, of, c cliche, f fatal flaw, n note}]}
    - comp: {s status open|gap|crowded|dominated, ws white space, sa sharper angle, c competitor names}
    - evo: {rank, score, fin finalist bool, lin lineage}
    - deep: {alive, v verdict, ov overall /10, rt refined title, why critic objections}
  - Round 2 also: pool, pid, k lens (insider|pattern|dilemma|shock).
    - gate: {v kill|weak|strong, pick bool, real, med, up (USD M per year), why deciding reason, nc competitors found}
    - optional cid, deep: {alive, v, ov, rt, med, up, why, risk, test}, h2h: {rank, w wins, g games, pts}, wargame: true
- final_top5.json: {objective, top5:[{rank, cid, h2h_rank, why}], dropped:[...], contrarian_bets:[{ref, why}]}. Round-2 records carry cid, so match the top 5 by cid.
- wargames.json: {cid: {incumbent_response, first_customers:[{name, url, why_them, buyer_role, how_to_reach}], plan_90_days[], quit_conditions[], unit_economics{price, cac, gross_margin, payback_months, capital_to_first_revenue, notes}, biggest_risk, mitigation, founder_fit, verdict}}
- h2h_summary.json: {ranking:[{rank, cid, title, wins, games, margin_points, ...}], games, order_agreement}
WHAT THE PAGE MUST DO:
1. Open in a useful state. The top shows the final 5 as the headline: rank, refined title, one-liner, and median/upside, each clickable to its full journey. Below that, a compact funnel of the whole search with real counts: round 1 = 1,340 ideas → 105 competitor-checked → 82 survivors → 214 evolution pool (82 + 120 offspring + 12 hybrids) → 25 finalists → 12 deep-validated → none above 3.3/10; round 2 = 143 money pools → 37 ideated → 296 ideas → 12 gate picks → 16 deep-validated → 12 contenders → 6 war-games → final 5. Then the 3 contrarian bets.
2. A searchable, filterable list of ALL 1,768 records: free-text search over title and one-liner; filters for round, kind/lens, the furthest stage reached (generated / top-100 in tournament / competitor-checked / evolution finalist / deep-validated / head-to-head / final 5), and verdict. Sort by stage reached or by tournament rank. Render incrementally (for example 60 at a time with "Show more") so it stays fast.
3. Clicking a record opens a detail view (a side panel on desktop, full-screen on phones) showing its JOURNEY as a vertical timeline of the stages it actually reached: source agent and kind → the 3 tournament judges (lens, rank of N, note, fatal flaw, cliche flag) → competitor verdict with competitors → evolution (lineage, offspring, evolution rank, finalist) → deep validation (verdict, score, objections). For round 2: pool → lens → gate (verdict, median/upside, reason) → deep validation (verdict, score, median/upside, riskiest assumption, 2-week test) → head-to-head (wins of games) → war-game (verdict, unit economics, first customers as links, quit conditions, founder fit) → final rank. Stages the idea never reached are not shown.
DESIGN CONTRACT (mandatory):
- Write page content only: no <!doctype>, <html>, <head> or <body> tags. Put <title>Business Idea Search Explorer</title> and <style> at the very top.
- Define all colors as tokens on bare :root (light). Redefine them for dark under @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {...; color-scheme: dark} } and again under :root[data-theme="dark"] {...; color-scheme: dark}. Give body an explicit token background. Never use a literal color that works in only one theme.
- Fonts: only Google Fonts via <link>, each with a fallback stack. Avoid Inter and Space Grotesk, and avoid the cream-paper/terracotta and black-with-neon-accent looks. Choose a calm, information-dense identity suited to an analyst's research ledger: a characterful display face used sparingly, a readable body face, and tabular figures for numbers.
- No external scripts unless truly needed (vanilla JS is preferred). No other external hosts (fetch only the 4 relative JSON files). No alert/confirm/prompt, no window.print, no download links, no localStorage dependence (wrap any use in try/catch).
- Responsive: works at 400px wide with a 16px side gutter and no horizontal page scroll. Flex/grid children holding text get min-width:0. Keyboard focus is visible, and respect prefers-reduced-motion.
- Show a clear loading state while explorer_data.json loads, and an error message if a fetch fails.
- Plain, specific copy. Name things by what readers recognize (Tournament, Competitor check, Evidence gate, Deep validation, Head-to-head, War-game). No emoji.
After writing, check that the file parses: run node --check on the extracted inline script if node exists, or at least re-read the file. Return a short summary: the file size, the features, and anything you could not do.`, { model: M, label: 'deliver:explorer', phase: 'Deliverables' })
const [r, x] = await Promise.all([report, explorer])
return { report: r, explorer: x }
