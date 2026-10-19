#!/bin/bash
# usage: bk_p095.sh <file> <label>  -> versioned backup in round2/backups/P095
f="$1"; label="$2"
d=/Users/asherperemel/projects/business-idea-search-work/biz/round2/backups/P095
mkdir -p "$d"
base=$(basename "$f" .md)
n=$(ls "$d" | grep -c "^${base}\.v[0-9]")
n=$((n+1))
ts=$(date +%Y%m%d-%H%M%S)
out=$(printf "%s/%s.v%02d.%s.%s.md" "$d" "$base" "$n" "$ts" "$label")
cp "$f" "$out" && echo "backup -> $out"
