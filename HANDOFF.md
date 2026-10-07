# HANDOFF: Business Idea Search (you are taking over as orchestrator)

## 0. Your mission and role
You are taking over a multi-agent research project from a previous Claude session. **The goal: find the 5 best business ideas in the world right now (late 2026), thinking far outside the box, with depth and quality over speed.** The user explicitly asked for hundreds or thousands of agents, hours or days of research, and radical outside-the-box thinking.

You are the **orchestrator**. You design and launch Workflow scripts, make the judgment calls, keep the documentation, and talk to the user. **Every subagent must use model `claude-sonnet-5-5`.** You do the high-judgment work yourself (aggregation decisions, overrides, the final review).

**The user does nothing manually. You do everything:** setup, running, committing, pushing, documenting, and Drive uploads. The user only answers your questions at the checkpoints below.

## 1. The user (read carefully)
- Communicates casually and briefly. Give **short status updates** in plain language; no walls of text. Tell them when each step finishes.
- Values **depth and quality over speed and cost**, but has a **weekly usage budget.** This week: **about 12% of their weekly usage in total.** The previous run used about 50% for roughly 850 agent runs.
- Wants **every step documented** so they can see every idea and everything that happened. Keep updating `PROCESS_LOG.md` in the same narrative style (what ran, counts, failures and fixes, judgment calls and why).
- Gave no founder constraints (budget, skills, location), so don't assume any.
- Never claim results you haven't verified (for example, check pushes with `git ls-remote`). If something fails, say so plainly with the fix.

## 2. The rubric for "best" (use it everywhere)
1. **Upside:** size of the prize.
2. **Why now:** a specific 2025-2026 change makes it possible or urgent now.
3. **Originality:** non-obvious, not crowded, not the first idea any smart person or AI would have.
4. **Feasibility:** a small, scrappy team could win its first paying customers within about 6 months.
5. **Defensibility:** a credible path to a moat (Helmer's 7 Powers).

Reward substance and insight over polished writing. Penalize clichés (see `cliche_list.md`).

## 3. What has been done (the full narrative is in PROCESS_LOG.md)
**Step 1: Discovery, 1,340 ideas** from 6 deliberately different sources:
- 32 web-research **scouts**, one per domain (agent economy, GLP-1/longevity, aging, climate adaptation, grid, trades/housing, reshoring, food/ag, education, AI job displacement, SMB ops, legal/regtech, fintech/insurance, real estate, logistics/robotics, space, synbio, mental health/loneliness, creator provenance, entertainment, pets, parenting, govtech/defense, security/identity, emerging markets, circular materials, water, travel, fitness, death/wealth transfer, trust/verification, niche/weird). Each wrote a briefing.
- **Domain agents** (one per domain, with 4 angles: contrarian, second-order, boring-but-lucrative, moonshot): 640 ideas.
- **Wildcards** (40 provocative prompts, e.g. "customers are AI agents", "luxury for $20/mo", "silliest idea → serious business"): 200.
- **Collisions** (40 domain pairs, ideas must need both): 200.
- **Insider personas** (40: funeral director, customs broker, hospice chaplain, trucker, county clerk, Lagos fintech founder, 78-year-old retiree...): 200.
- **Signal miners** (20 demand-first sources: Reddit "I'd pay for", 1-star reviews of vertical SaaS, bulk job postings, Federal Register and EU deadlines, SBIR/DARPA topics, startup post-mortems, patent expirations, search trends, Kickstarter, HN, earnings calls, insurance exclusions, municipal RFPs, Asian consumer trends, unexploited papers, PE roll-ups, consumer spending): 100.

**Step 2: Screening.**
- **Cliché detector** (3 agents): 120 predictable 2026 patterns, saved in `cliche_list.md`.
- **Problem taxonomy** (1 agent): 133 solution-agnostic problem clusters.
- **Forced-rank tournament** (162 judges): every idea was ranked 3 times in random groups of about 25, under 3 lenses (round 1 seed investor, round 2 bootstrapper/operator, round 3 contrarian futurist). Each judge also tagged a problem cluster, a cliché flag, a fatal flaw and a note. Score = mean rank percentile + a small convergence bonus (+0.015 per extra source *kind* in the idea's problem cluster, max +0.06, none for the uncategorized cluster C999) − a cliché penalty. **189 ideas were excluded as clichés (2+ judge votes).** At most 2 per problem cluster were selected.
- **Key finding:** insider personas were 15% of the ideas but **55% of the top 100.**
- 105 candidates were selected: the top 90 plus 15 "convergence picks" (the best idea from clusters independently reached by 3+ source kinds).

**Step 2C: Competitor check** (105 web-research agents): verdicts were open / gap / crowded / dominated. The result: **82 gap, 23 crowded, 0 open, 0 dominated.** The agents almost never set `kill` themselves, so **the orchestrator rule is: only open/gap ideas survive, and when two independent checks disagree, the more skeptical verdict wins.** One idea (I0185) got gap and then crowded, so it was cut. 5 of 6 accidentally double-checked ideas got the same verdict both times. **82 survivors.**

**Step 3: Breeding.**
- **Mutation:** the **top 40 survivors by tournament score** each got 3 offspring (sharpened / new-customer-or-model / 10x-or-inverted), informed by the judges' notes and the competitor research: 120 offspring.
- **Crossbreeding:** 2 matchmakers (shared customer/channel lens; shared data/capability lens) produced 16 hybrids, **4 pairings proposed independently by both**. After de-duplication: **12 hybrids.**
- **Evolution pool: 214** (82 originals + 120 offspring + 12 hybrids). Step 4's batches are already built.

**Incidents and fixes (learn from these):**
- (a) The first discovery shards were slow (2 agents per workflow), so the work was resharded.
- (b) About 24 near-identical templated requests fired at once were blocked by Sonnet's safety filter (`[reasoning_extraction]`), with 91 failures. The fix: fewer, larger, varied jobs, launched in waves.
- (c) The account session limit hit mid competitor-check. The fix: resume from journals after the reset.
- (d) One structured-output failure was fixed by a resume.

## 4. Where everything lives
- **GitHub (source of truth):** `The-Oblivion/business-idea-search`, branch `main`. **Commit and push after every step.** The container can be wiped while idle.
- **Google Drive mirror** (readable docs only): folder ID `1MgtXornAlVdrOuvGAwBVzULrs7JCdWMm`. Large raw data can't go to Drive, because uploads pass through the conversation.
- **Repo layout:**
  - `PROCESS_LOG.md` (narrative), `RESUME.md`, `README.md`, `HANDOFF.md` (this file).
  - `01-discovery/` (briefs/, prompts/, all_ideas.json). `02-screening/` (cliche_list.md, problem_taxonomy.json, tournament_ranking.csv, tournament_results.json, clusters_convergence.json, existence_verdicts.json, competitor_checks/<ID>.json). `03-evolution/` (survivors, parents/, pool.json, SURVIVORS_AND_POOL.md). `04-deep-validation/`, `05-final/` (empty).
  - `skills/`: `deep-research-researcher.md`, `deep-research-report-writer.md`, `mr-competitive-analysis.md` (from Anthropic's market-researcher plugin), `strategy-frameworks.md` (JTBD, Blue Ocean, Wardley, first principles, disruption, 7 Powers, riskiest assumption, pre-mortem, unit economics, why-now).
  - `checkpoint/state/`: **the live pipeline state and scripts.** `checkpoint/journals/<run-id>.jsonl`: every previous agent's raw output. `checkpoint/workflow_scripts/`: every prompt that was used.

**Data schemas (in `checkpoint/state/`):**
- `ideas/all.json`: a list of `{id, title, one_liner, customer, problem, solution, why_now, revenue_model, non_obvious_insight, first_30_days, outside_box_score, source, kind(idea|wild|collide|persona|signal), angle?}`.
- `screening_out/tournament_results.json`: a list of `{id, title, kind, source, cluster, cluster_name, mean_pct, convergence_kinds, cliche_votes, score, overall_rank, selected_for_existence_check, selection_reason, judges:[{batch, lens, rank, of, pct, cluster, cliche, fatal_flaw, note}]}`.
- `exists/<ID>.json`: `{status, competitors:[{name, url, what_they_do, scale_or_funding, overlap}], white_space, evidence_of_demand, kill, kill_reason, sharper_angle}`.
- `evo/parents/<ID>.json`: the idea fields + `tournament{score, overall_rank, cluster, judge_notes[]}` + `competition{...}`.
- `evo/pool.json`: a list of `{id (I#### | I####-M1..M3 | H01..H12), idea fields, family, lineage, competition_context, hybrid_parents?}`.
- `finalists/<id>.json` (written by step 4): a pool entry + `parent_competition_reports`.
- Journal lines are `{"type":"started","key","label"}` / `{"type":"result","key","result"}` / `{"type":"failed","key"}`. Join started→result by `key`. Labels: `judge:`, `exists:`, `mutate:`, `hybrid:`, `evojudge:rN_bNNN:lens`, `research:<id>`, `critic:<id>:<lens>`, `rewrite:<id>`, `recritic:<id>`, `score:<id>:<lens>`.

## 5. Environment setup (do this first)
```bash
REPO=/home/user/business-idea-search            # the repo clone
BIZ=<your scratchpad dir>/biz
mkdir -p "$BIZ" && cp -r "$REPO/checkpoint/state/"* "$BIZ/"
mkdir -p "$BIZ/deep" "$BIZ/finalists" "$BIZ/evo_out"     # git doesn't store empty dirs
OLD=/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz
sed -i "s#$OLD#$BIZ#g" "$BIZ"/next_steps/*.js "$BIZ"/export_checkpoint.sh
ls "$BIZ/evo/tournament" | wc -l   # expect 27 batch files
nproc                              # 4 CPUs means max 2 agents per workflow
```
- Load the `workflow-authoring` skill before writing or launching workflows.
- The Python scripts locate state relative to their own path, so they need no edits.
- New-session journals live at `~/.claude/projects/*/subagents/workflows/<run-id>/journal.jsonl`.

## 6. This week (budget ≈12%)

### Step 4: evolution tournament (27 judges, ≈3%)
1. Launch `$BIZ/next_steps/step4_evo_tournament.js` via `scriptPath`, as 6 workflows with args `{"shard": k, "nshards": 6, "nb": 9}`. **Wave 1:** k = 0, 1, 2. Then a background `sleep 90` and check each journal for `"failed"` lines. If it's clean, **wave 2:** k = 3, 4, 5.
2. Save the run IDs to `$BIZ/evo_tourn_runs.txt`.
3. Run `NFINAL=25 python3 $BIZ/aggregate_evo.py <6 journal paths>`. This writes `evo_out/evolution_results.json`, `evo_out/evolution_ranking.csv`, `evo_out/finalist_ids.json` (rank order) and `finalists/<id>.json`. Built-in rules: at most 1 finalist per family (a parent and its offspring share one slot), at most 2 per problem cluster, and 2+ cliché votes means excluded.
4. Sanity-check the result. Do offspring beat their parents? Did any hybrid make it? Log interesting patterns.
5. Copy the outputs to `03-evolution/` (ranking CSV, results JSON, `finalists/`) and to `checkpoint/state/`. Add a **"Step 4 result"** section to PROCESS_LOG. Commit and push, and verify with `git ls-remote`.
6. **STOP and message the user:** a numbered list of the 25 finalists (title, one-liner, lineage), 2-3 notable findings, and the question **"What % of your weekly usage are you at?"**

### Step 5: deep validation (after the user answers, ≈0.7-0.8% per finalist)
1. Size it from the user's answer: remaining budget ≈ 12% − (current% − start-of-week%). The default is **the top 12** finalists in `finalist_ids.json` order. Tell the user the number before launching.
2. Launch `$BIZ/next_steps/step5_deep_validation.js` with args `{"ids": [...], "shard": k, "nshards": N}`, with 2-3 finalists per workflow, in **waves of about 3 workflows** with the 90-second health check.
3. For each finalist the pipeline runs: a **research dossier** (15-30 searches, following `skills/deep-research-researcher.md` and `skills/mr-competitive-analysis.md`) → **3 adversarial critics** (competition and incumbent response / customer, pricing and go-to-market / execution, regulation and timing) → a **strongest-version rewrite** (`alive` flag, wedge, pricing, moat, bottom-up market, riskiest assumption, 2-week test) → a **second-round critic** (survives / wounded / dead) → **3 judges** (1-10 on upside, timing, originality, feasibility, defensibility, evidence of demand, overall). It writes `deep/<id>_dossier.md` and `deep/<id>_refined.md`.
4. Write `aggregate_deep.py`. It reads the step 5 journals (labels above) and writes `deep_validation_results.json` and `.csv` (per finalist: alive, second-round verdict, average scores, critic severities, judge rationales).
5. Copy everything to `04-deep-validation/`, update PROCESS_LOG, then commit, push and verify.
6. Message the user with a short ranked summary (which finalists survive, which died and why, standout surprises), and say the rest continues next week.
7. Optionally, have a Sonnet subagent upload the updated PROCESS_LOG to the Drive folder.

## 7. Later steps (next week; designed, not built)
- **5b:** deep-validate finalists 13-25 if still worthwhile.
- **Step 6, head-to-head:** take the top 10 by mean overall score among `alive=true` and second-round verdict ≠ dead. For all 45 pairs, run **2 judges with the order swapped** (90 agents). Each reads both `_refined.md` files, both dossiers and both critiques, and returns `{winner A|B, margin 1-3, decisive_factors, reasons}`. Rank by wins; break ties with Bradley-Terry or the mean overall score.
- **Step 7, war-game the top 5** (1 web agent each): the strongest incumbent's response; **10 named real first customers with URLs** and how to reach them; a 90-day plan; explicit conditions for quitting; unit economics (price, CAC, gross margin, payback); the biggest risk and its mitigation.
- **Step 8, orchestrator final review** (you, no subagent): read the top 10's refined pitches, second-round critiques, head-to-head and war-games; pick the final 5; **explain any override** of the head-to-head order in PROCESS_LOG.
- **Step 9, deliverables:**
  1. The final top-5 answer in chat (per idea: pitch, why now, demand evidence, competitors and edge, risks, 2-week test, 90-day plan).
  2. `reports/Top 5 business ideas 2026.md` following `skills/deep-research-report-writer.md`.
  3. An **interactive explorer artifact** (load `artifact-design` first) covering all 1,340 ideas, searchable and filterable, where clicking an idea shows its full journey: source agent → 3 judge ranks and notes → cliché flags → competitor verdict → offspring/hybrids → finalist dossier and critiques. The top 5 are highlighted.
  4. The final PROCESS_LOG, a checkpoint export, the push, and the Drive mirror.

## 8. Operational rules and gotchas (hard-won)
- **Concurrency:** 4 CPUs means at most 2 agents per workflow. CPU is never the bottleneck. Split work across parallel workflows, but keep the **total to about 12-14 concurrent agents.**
- **Safety-filter false positives (`[reasoning_extraction]`):** they're triggered by about 20+ near-identical templated requests at once. Vary the prompts, launch in waves of about 3 workflows, and run the 90-second health check. If failures appear, stop, reduce concurrency, and re-run.
- **Usage limit** ("You've hit your session limit · resets X"): stop and tell the user. After the reset, resume each workflow with `resumeFromRunId` (same session only). In `parallel()`, calls after the first failure re-run on resume, which can produce duplicates. Aggregation keeps the last result; for verdicts, the skeptical one wins.
- **StructuredOutput retry-cap failure:** one item comes back null. Re-run it by resuming that workflow.
- **Workflow scripts:** `meta` must be a pure literal; there's no `Date.now()` or `Math.random()`; plain JavaScript only. Embed long ID lists in the script file instead of resending large args.
- **Each workflow completion wakes you** for a full orchestration turn. Fewer, larger workflows save usage. Don't poll; foreground `sleep` is blocked, so use a background `sleep N; check`.
- **Don't read big data files into your own context.** Use Python to summarize them.
- `git push` may print "push negotiation failed; proceeding anyway". That's harmless; verify with `git ls-remote origin main`. Author: The-Oblivion; follow the session's attribution instructions.
- **Rough cost per agent:** a tournament judge is about 100k tokens; a competitor check about 60k; a mutation about 70k; a deep-validation finalist (9 agents) about 0.8M. Roughly 1M subagent tokens ≈ 1% of the weekly budget. These are estimates; calibrate with the user's reported %.
