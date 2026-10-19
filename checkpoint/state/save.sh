#!/usr/bin/env bash
# Durable save: refresh the repo checkpoint from the persistent work dir + this session's journals,
# mirror the readable round-2 files, commit, push, VERIFY the remote matches, then keep a versioned backup:
#   - every new commit -> a dated local snapshot (tar.gz of the whole work dir + repo docs) in ~/projects/business-idea-search-backups
#   - every non-autosave (milestone) commit -> also a pushed git tag  snap-YYYYMMDD-HHMM
set -uo pipefail
REPO=/Users/asherperemel/projects/business-idea-search
BIZ=/Users/asherperemel/projects/business-idea-search-work/biz
BK=/Users/asherperemel/projects/business-idea-search-backups
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
STAMP=$(date '+%Y%m%d-%H%M')
mkdir -p "$BK"
tar -czf "$BK/snap-$STAMP-${L:0:7}.tgz" -C /Users/asherperemel/projects business-idea-search-work \
    business-idea-search/PROCESS_LOG.md business-idea-search/RESUME.md business-idea-search/HANDOFF.md 2>/dev/null \
  && SNAP="snapshot $BK/snap-$STAMP-${L:0:7}.tgz" || SNAP="SNAPSHOT FAILED"
case "$MSG" in autosave*) TAG="";; *) TAG="snap-$STAMP"; git tag -f "$TAG" "$L" >/dev/null && git push -q -f origin "$TAG" 2>&1 | grep -v negotiation || true;; esac
if [ "$L" = "$R" ]; then echo "saved+pushed $L ($(date '+%H:%M')) | $SNAP${TAG:+ | tag $TAG}"; else echo "PUSH NOT VERIFIED local=$L remote=$R | $SNAP"; exit 1; fi
