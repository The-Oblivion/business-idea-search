#!/usr/bin/env bash
# While agents run: save + push + snapshot every 10 minutes, independent of the model (keeps saving even if
# the usage cap stops the orchestrator). Stops when $BIZ/.autosave_stop exists or after 12 hours.
BIZ=/Users/asherperemel/projects/business-idea-search-work/biz
rm -f "$BIZ/.autosave_stop"
for i in $(seq 1 72); do
  sleep 600
  [ -f "$BIZ/.autosave_stop" ] && break
  bash "$BIZ/save.sh" "autosave: in progress" | tail -1
done
echo "autosave loop ended"
