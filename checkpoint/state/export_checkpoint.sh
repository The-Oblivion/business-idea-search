#!/usr/bin/env bash
# Package the full pipeline state into /home/user/business-idea-search/checkpoint for durable storage.
set -euo pipefail
BIZ=/tmp/claude-0/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9/scratchpad/biz
WF=/root/.claude/projects/-home-user/7d5d40b9-c4a2-5a88-8ca2-c003de06ceb9
OUT=/home/user/business-idea-search/checkpoint
rm -rf "$OUT"; mkdir -p "$OUT/state" "$OUT/journals" "$OUT/workflow_scripts"

# Working state (pipeline inputs/outputs), minus nothing: every intermediate file is kept.
cp -r "$BIZ"/* "$OUT/state/"
rm -f "$OUT/state/probe_a.txt" "$OUT/state/probe_b.txt"

# Every workflow journal: one line per agent start/result/failure, with full return values.
for d in "$WF"/subagents/workflows/wf_*/; do
  id=$(basename "$d")
  [ -f "$d/journal.jsonl" ] && cp "$d/journal.jsonl" "$OUT/journals/$id.jsonl"
done

# Exact workflow scripts (every agent prompt) as run.
cp "$WF"/workflows/scripts/*.js "$OUT/workflow_scripts/"

du -sh "$OUT"; find "$OUT" -type f | wc -l
