#!/usr/bin/env bash
# Durable save: refresh the repo checkpoint from the persistent work dir + this session's journals,
# mirror the readable round-2 files, commit, push, and VERIFY the remote matches. Safe to run anytime.
set -uo pipefail
REPO=/Users/asherperemel/projects/business-idea-search
BIZ=/Users/asherperemel/projects/business-idea-search-work/biz
LOCK="$REPO/.git/biz-save.lock"
MSG="${1:-autosave: pipeline state + journals}"
mkdir "$LOCK" 2>/dev/null || { echo "save already running; skipped"; exit 0; }
trap 'rmdir "$LOCK"' EXIT
bash "$BIZ/export_checkpoint.sh" >/dev/null
[ -d "$BIZ/round2" ] && rsync -a --exclude 'work/' "$BIZ/round2/" "$REPO/round2/"
cd "$REPO" || exit 1
git add -A
if git diff --cached --quiet; then echo "nothing new to save"; exit 0; fi
git commit -q -m "$MSG

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q origin main 2>&1 | grep -v "negotiation" || true
L=$(git rev-parse HEAD); R=$(git ls-remote origin main | cut -f1)
if [ "$L" = "$R" ]; then echo "saved+pushed $L ($(date '+%H:%M'))"; else echo "PUSH NOT VERIFIED local=$L remote=$R"; exit 1; fi
