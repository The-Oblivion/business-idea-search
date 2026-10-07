#!/usr/bin/env bash
# Additive checkpoint export into the repo: refreshes checkpoint/state from $BIZ and ADDS this session's
# journals and workflow scripts. It never deletes journals from earlier sessions.
set -euo pipefail
BIZ=/private/tmp/claude-501/-Users-asherperemel/2d21b2bf-d792-4998-b326-860505fc728f/scratchpad/biz
WF=/Users/asherperemel/.claude/projects/-Users-asherperemel/2d21b2bf-d792-4998-b326-860505fc728f
OUT=/Users/asherperemel/projects/business-idea-search/checkpoint
mkdir -p "$OUT/state" "$OUT/journals" "$OUT/workflow_scripts"

# Working state (pipeline inputs/outputs): every intermediate file is kept.
rsync -a "$BIZ"/ "$OUT/state/"

# This session's workflow journals: one line per agent start/result/failure, with full return values.
for d in "$WF"/subagents/workflows/wf_*/; do
  id=$(basename "$d")
  [ -f "$d/journal.jsonl" ] && cp "$d/journal.jsonl" "$OUT/journals/$id.jsonl"
done

# Exact workflow scripts (every agent prompt) as run.
cp "$BIZ"/next_steps/*.js "$OUT/workflow_scripts/" 2>/dev/null || true

du -sh "$OUT"; find "$OUT" -type f | wc -l
