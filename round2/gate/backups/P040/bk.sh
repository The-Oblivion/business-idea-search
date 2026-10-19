#!/bin/bash
# usage: bk.sh <file> <label>  -> numbered snapshot, never overwrites
SRC="$1"; LABEL="${2:-snap}"; D=/Users/asherperemel/projects/business-idea-search-work/biz/round2/gate/backups/P040
BASE=$(basename "$SRC")
N=$(ls "$D" | grep -c "^$BASE\.v[0-9]*\." ); N=$((N+1))
cp "$SRC" "$D/$BASE.v$(printf %02d $N).$(date +%Y%m%d-%H%M%S).$LABEL"
ls "$D" | tail -2
