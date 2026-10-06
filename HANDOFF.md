# Handoff: Business Idea Search, week 2 (steps 4–5)

## What this is and your role
You're continuing a multi-agent research project for me: **find the 5 best business ideas in the world right now (late 2026), thinking far outside the box.** A previous session (Claude Opus 5.5 orchestrating Claude Sonnet 5.5 subagents through the Workflow tool) ran steps 1–3 and paused for the weekly usage reset. You're the orchestrator now. **Use `claude-sonnet-5-5` for every subagent.** You make the judgment calls, and you write down every judgment call and the reason for it.

## My preferences (read carefully)
- **Depth and quality matter more than speed.** Never thin out what each agent does to save money.
- **This week's budget is about 12% of my weekly usage.** The previous run used about 50% for roughly 850 agent runs. Be efficient in *orchestration*: launch fewer, larger workflows; don't poll in a loop; don't read big data files into your own context (let Python scripts and subagents handle them). Every workflow completion wakes you, and that costs a full orchestration turn.
- **Document everything** in `PROCESS_LOG.md`, in the same style as before: what ran, counts, failures, judgment calls and why.
- **Commit and push to this repo after each step.** The container can be wiped while idle.
- Keep me updated briefly, and **stop where this file says to stop**.
- **Rubric for "best":** size of the prize; why now (a specific 2025–26 change); originality and non-obviousness; feasibility for a small scrappy team to win its first paying customers within about 6 months; defensibility. I haven't given founder constraints (budget, skills, location).

## What's already done (full detail in PROCESS_LOG.md)
1. **Discovery, 1,340 ideas** from 6 deliberately different sources: 32 web-research scout briefings feeding domain agents (4 angles each: contrarian, second-order, boring-but-lucrative, moonshot), 40 wildcard prompts, 40 domain-collision pairs, 40 insider personas (funeral director, customs broker, hospice chaplain...), and 20 demand-signal miners (Reddit "I'd pay for", 1-star reviews, regulatory deadlines, startup post-mortems, SBIR topics...).
2. **Screening:** a 120-pattern cliché list, a 133-cluster problem taxonomy, and a **162-judge forced-rank tournament**. Each idea was ranked 3 times in random groups of about 25, under 3 lenses (seed investor, bootstrapper/operator, contrarian futurist). 189 ideas were excluded as clichés (2+ judge votes). **Key finding:** insider personas were 15% of the ideas but **55% of the top 100**.
3. **Competitor check:** 105 candidates were researched on the web, leaving **82 "gap" survivors**. 23 were "crowded" and cut. Rules applied: only open/gap ideas survive, and when two checks disagree, the more skeptical verdict wins.
4. **Breeding:** the top 40 survivors each got 3 mutations (sharpened / new customer or model / 10x or inverted), giving 120 offspring, plus **12 hybrids** from 2 matchmakers (4 of the pairings were found independently by both). **Evolution pool: 214 candidates** (82 + 120 + 12). The step 4 batches are already built.

## Repo layout
- `PROCESS_LOG.md`: the full narrative. `RESUME.md`: the resume guide. `README.md`.
- `01-discovery/`: briefs, all 1,340 ideas, prompts. `02-screening/`: cliché list, taxonomy, the tournament ranking CSV and JSON, 105 competitor reports. `03-evolution/`: survivors, parents, pool, `SURVIVORS_AND_POOL.md`. `04-deep-validation/` and `05-final/`: empty for now.
- `skills/`: methods the agents follow (`deep-research-researcher.md`, `deep-research-report-writer.md`, `mr-competitive-analysis.md`, `strategy-frameworks.md`).
- `checkpoint/state/`: **the live pipeline state.** It contains the Python scripts (`aggregate_evo.py`, `build_evo_tournament.py`, ...), `next_steps/step4_evo_tournament.js`, `next_steps/step5_deep_validation.js`, `evo/` (pool, parents, tournament batches), `cliche_list.md`, `ideas/`, `exists/`, and the `*_runs.txt` run lists.
- `checkpoint/journals/`: every previous agent's raw output. `checkpoint/workflow_scripts/`: every prompt that was used.

## Environment setup (do this first)
```bash
REPO=/home/user/business-idea-search          # or wherever the repo is cloned
BIZ=<your scratchpad>/biz
mkdir -p "$BIZ" && cp -r "$REPO/checkpoint/state/"* "$BIZ/"
mkdir -p "$BIZ/deep" "$BIZ/finalists" "$BIZ/evo_out"     # empty dirs aren't stored in git
OLD=/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz
sed -i "s#$OLD#$BIZ#g" "$BIZ"/next_steps/*.js "$BIZ"/export_checkpoint.sh
nproc   # with 4 CPUs, each Workflow runs at most 2 agents at once, so split work across parallel workflows
```
Load the `workflow-authoring` skill before launching workflows. The Python scripts find their state relative to their own path, so they need no edits.

## Step 4: evolution tournament (27 judges, ~3% usage)
- Batches: `$BIZ/evo/tournament/r{0,1,2}_b{000..008}.json` (3 rounds × 9 batches of about 24 ideas).
- Launch `next_steps/step4_evo_tournament.js` with `scriptPath`, as **6 workflows**: args `{"shard": k, "nshards": 6, "nb": 9}` for k = 0..5. **Wave 1:** shards 0–2. Run a background `sleep 90` and then check each journal for `"failed"` lines. If it's clean, launch **wave 2:** shards 3–5.
- Save the 6 run IDs to `$BIZ/evo_tourn_runs.txt`. The journals are at `~/.claude/projects/*/subagents/workflows/<run-id>/journal.jsonl`.
- Aggregate: `NFINAL=25 python3 $BIZ/aggregate_evo.py <the 6 journal paths>`. This writes `evo_out/evolution_results.json`, `evo_out/evolution_ranking.csv`, `evo_out/finalist_ids.json` (in rank order) and `finalists/<id>.json`. The rules are built in: at most 1 finalist per family (a parent and its offspring share one slot), at most 2 per problem cluster, and 2+ cliché votes means excluded.
- Copy the outputs into the repo (`03-evolution/evolution_ranking.csv`, `03-evolution/evolution_results.json`, `03-evolution/finalists/`), add a "Step 4 result" section to PROCESS_LOG (counts; how many finalists are originals vs. offspring vs. hybrids; anything notable), then commit and push.
- **Then STOP.** Show me the 25 finalists (rank, title, one-liner, and lineage: original, mutation of X, or hybrid of X + Y), and **ask me what percentage of my weekly usage I'm at.**

## Step 5: deep validation (only after I answer)
- Default: **the top 12 finalists** (the first 12 in `finalist_ids.json`). Adjust based on my usage answer: about 0.7% per finalist is the rough estimate.
- Launch `next_steps/step5_deep_validation.js` with args `{"ids": [...], "shard": k, "nshards": N}`, sized so each workflow gets 2–3 finalists. Launch in **waves of about 3 workflows** with the same 90-second health check.
- For each finalist the script runs: a research dossier (15–30 searches, following `skills/deep-research-researcher.md` and `skills/mr-competitive-analysis.md`) → **3 adversarial critics** (competition and incumbent response / customer, pricing and go-to-market / execution, regulation and timing) → a strongest-version rewrite (with riskiest assumption and a 2-week test) → a **second-round critic** (survives, wounded, or dead) → **3 judges** scoring 1–10 on upside, timing, originality, feasibility, defensibility, evidence of demand, and overall. It writes `deep/<id>_dossier.md` and `deep/<id>_refined.md`.
- Afterwards, write a small script that reads the step 5 journals and produces `deep_validation_results.json` and `.csv` (per finalist: alive, second-round verdict, average scores, judge rationales, critic severities). Copy everything into `04-deep-validation/`, update PROCESS_LOG, commit and push, then give me a short summary of the results.

## Later (next week; don't do these now)
5b: finalists 13–25 (if still worth it). 6: head-to-head among the top 10 (all 45 pairs × 2 judges with the order swapped; rank by wins). 7: war-game the top 5 (incumbent response, 10 named real first customers with URLs, a 90-day plan, conditions for quitting, unit economics). 8: the orchestrator's own final review, explaining any overrides. 9: deliverables (the final top-5 answer, a report following `skills/deep-research-report-writer.md`, an **interactive explorer artifact of all 1,340 ideas and their full journeys**, and the final PROCESS_LOG).

## Gotchas learned the hard way
- **Safety-filter false positives** (`[reasoning_extraction]`): about 24 near-identical templated requests firing at once got blocked. Keep to roughly 12–14 concurrent agents and vary the prompts, launch in waves of about 3 workflows, and run the 90-second health check.
- **Usage limit** ("You've hit your session limit · resets X"): stop, wait for the reset, then resume each workflow with `resumeFromRunId` (this only works within the same session). In a `parallel()`, calls after the first failure re-run on resume, which can produce duplicate results; aggregation keeps the last one.
- A StructuredOutput retry-cap failure drops one item. Re-run it by resuming that workflow.
- Workflow scripts: `meta` must be a pure literal; there's no `Date.now()` or `Math.random()`. Embed long ID lists in the script file rather than resending them in args.
- Foreground `sleep` is blocked. Use a background `sleep N; check` instead.
- `git push` may print "push negotiation failed; proceeding anyway". That's harmless; confirm with `git ls-remote origin`.
- Google Drive mirror of the readable docs: folder ID `1MgtXornAlVdrOuvGAwBVzULrs7JCdWMm`. Optionally, at the end, have a Sonnet subagent upload the updated PROCESS_LOG there. Large raw data can't go to Drive.
- Commits: author The-Oblivion. Follow the session's attribution instructions.
