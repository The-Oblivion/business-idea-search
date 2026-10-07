# RESUME: how to continue the business idea search

**Updated:** 7 Oct 2026, after step 4 (evolution tournament). 25 finalists picked.
**Next step:** step 5, deep validation (sized to the remaining weekly budget; default top 12 of `finalist_ids.json`).

## Quick start (for the human)

Start a new Claude Code session with the `The-Oblivion/business-idea-search` repo attached, and say:

> Read RESUME.md and PROCESS_LOG.md, then continue the business idea search from step 4. Use Sonnet 5.5 for agents; keep depth and quality over speed.

## Where things stand

| Step | Status | Output |
|---|---|---|
| 1 Discovery | ✅ 1,340 ideas | `checkpoint/state/ideas/all.json` |
| 2A Cliché list + problem taxonomy | ✅ 120 patterns, 133 clusters | `state/cliche_list.md`, `state/tournament_taxonomy.json` |
| 2B Forced-rank tournament | ✅ 162/162 judges | `state/screening_out/tournament_results.json`, `tournament_ranking.csv` |
| 2C Competitor check | ✅ 105/105 (82 gap survive, 23 crowded cut) | `state/exists/<ID>.json`, `state/screening_out/existence_verdicts.json` |
| 3 Breeding | ✅ 120 offspring + 12 hybrids | `state/evo/pool.json` (214 candidates), `state/evo/tournament/` (27 batch files) |
| 4 Evolution tournament | ✅ 27/27 judges, 25 finalists | `03-evolution/evolution_ranking.csv`, `finalist_ids.json`, `finalists/` |
| 5 Deep validation (25) | script ready | `state/next_steps/step5_deep_validation.js` |
| 6 Head-to-head (top 10) | designed below | |
| 7 War-game (top 5) | designed below | |
| 8 Orchestrator final review | designed below | |
| 9 Deliverables | designed below | |

## Environment setup (for Claude, in the new session)

```bash
REPO=<path to the cloned business-idea-search repo>
BIZ=<your scratchpad>/biz            # any writable dir
mkdir -p "$BIZ" && cp -r "$REPO/checkpoint/state/"* "$BIZ/"
OLD=$(grep -o "DIR = '[^']*'" "$BIZ/next_steps/step5_deep_validation.js" | cut -d"'" -f2)   # last session's scratchpad path
sed -i "s#$OLD#$BIZ#g" "$BIZ"/next_steps/*.js "$BIZ"/export_checkpoint.sh
# Python scripts locate state relative to their own path, so they need no edits.
# Journals from the previous session (every agent's full output) are in $REPO/checkpoint/journals/<run-id>.jsonl.
# The run-ID lists are in $BIZ/*_runs.txt (discovery_runs, tournament_runs, exists_runs, evo_gen_runs).
```

Then `/workflow-authoring` for the Workflow API reminders.

## Step 4: evolution tournament (27 judge agents)

1. The batches are already built: `$BIZ/evo/tournament/r{0,1,2}_b{000..008}.json` (3 rounds × 9 batches).
2. Launch `next_steps/step4_evo_tournament.js` with `scriptPath`, **6 workflows**: args `{"shard": k, "nshards": 6, "nb": 9}` for k = 0..5. Launch 3, wait about 90 seconds and check there are no failures, then launch the other 3.
3. Save the 6 new run IDs to `$BIZ/evo_tourn_runs.txt`.
4. Aggregate: `NFINAL=25 python3 $BIZ/aggregate_evo.py <journal paths>` (new-session journals are at `~/.claude/projects/<project>/subagents/workflows/<run-id>/journal.jsonl`). This writes `evo_out/evolution_ranking.csv`, `evo_out/finalist_ids.json`, and `finalists/<id>.json`. Rules: at most 1 finalist per family (a parent and its offspring compete for one slot), at most 2 per problem cluster, and 2+ cliché votes means excluded.

## Step 5: deep validation of 25 finalists (~225 agents)

`next_steps/step5_deep_validation.js`, args `{"ids": <finalist_ids.json>, "shard": k, "nshards": 9}`, launched in waves of 3. Per finalist:
research dossier (following `skills/deep-research-researcher.md` + `skills/mr-competitive-analysis.md`, 15-30 searches) → 3 adversarial critics (competition & incumbent response / customer, pricing & GTM / execution, regulation & timing) → strongest-version rewrite (riskiest assumption + 2-week test) → second-round critic (survives / wounded / dead) → 3 judges scoring 1-10 on upside, timing, originality, feasibility, defensibility, evidence of demand, and overall.
Outputs: `deep/<id>_dossier.md`, `deep/<id>_refined.md`, plus every structured result in the journals.

## Step 6: head-to-head final (90 agents)

Take the top 10 by mean overall score among finalists with `alive = true` and a second-round verdict other than `dead`. For all 45 pairs, run **2 judges with the order swapped**. Each judge reads both `_refined.md` and both dossiers, then returns `{winner, margin 1-3, reasons}`. Rank by wins (Bradley-Terry if tied).

## Step 7: war-game the top 5 (5 agents, web research)

For each: simulate the strongest incumbent's response; find **10 named real first customers** (with URLs); write a 90-day launch plan; set explicit conditions for quitting; and estimate rough unit economics.

## Step 8: orchestrator final review (Opus, no subagent)

Read the top 10's refined pitches, dossiers, critiques, head-to-head results and war-games. Make the final call on the top 5, and explain any override of the head-to-head ranking.

## Step 9: deliverables

1. The final top-5 answer in chat, each with pitch, why now, demand evidence, competitors & edge, risks, 2-week test, and 90-day plan.
2. `reports/Top 5 business ideas 2026.md`, following `skills/deep-research-report-writer.md`.
3. An **interactive explorer artifact** covering all 1,340 ideas with each one's full journey (source agent → 3 judge ranks and notes → cliché flags → competitor verdict → offspring/hybrids → finalist dossier and critiques). Load the `artifact-design` skill first; the data files are listed above.
4. Finish `PROCESS_LOG.md` and export a final checkpoint.

## Gotchas learned the hard way

- **Only 2 agents per workflow** can run at a time on this 4-CPU container, so split work across parallel workflows. CPU is never the bottleneck.
- **Safety-filter false positives:** about 24 *near-identical* templated requests at once triggered `[reasoning_extraction]` blocks. Keep about 12-14 concurrent, vary the prompts, and **launch in waves** with a 90-second health check.
- **Usage limit:** the run hit the account session limit at about 800 agent runs. Resuming with `resumeFromRunId` replays finished agents from cache. Note that in a `parallel()`, calls after the first failure re-run, which can produce duplicate results. Aggregation keeps the last result; for competitor checks, take the more skeptical verdict.
- A structured-output failure (5 retries) drops one item. Re-run it by resuming the same workflow.
- The workflow `resumeFromRunId` cache is **same-session only**. In a new session, re-run from the checkpoint files instead.
