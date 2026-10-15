#!/usr/bin/env bash
# While agents run: save + push every 15 minutes. Stops when $BIZ/.autosave_stop exists or after 8 hours.
BIZ=/Users/asherperemel/projects/business-idea-search-work/biz
rm -f "$BIZ/.autosave_stop"
for i in $(seq 1 32); do
  sleep 900
  [ -f "$BIZ/.autosave_stop" ] && break
  bash "$BIZ/save.sh" "autosave: round 2 in progress" | tail -1
done
echo "autosave loop ended"
