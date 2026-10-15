"""Round 2: compile pattern-miner and pool-mapper results from workflow journals.

Usage: python r2_compile.py <journal files...>
Writes round2/patterns_all.json, round2/inputs/patterns_digest.md, round2/pools_all.json (pool_id P001..).
"""
import json, os, sys
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
res = {}
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started": labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result": res[labels.get(e["key"], e["key"])] = e.get("result")
pats, pools = [], []
for lab, r in sorted(res.items()):
    if not r: continue
    if lab.startswith("r2pattern:"):
        for p in r.get("patterns", []): pats.append({"miner": lab.split(":")[1], **p})
    elif lab.startswith("r2pool:"):
        for p in r.get("pools", []): pools.append({"slice": lab.split(":")[1], **p})
for n, p in enumerate(pools): p["pool_id"] = f"P{n+1:03d}"
json.dump(pats, open(os.path.join(R2, "patterns_all.json"), "w"), indent=1)
json.dump(pools, open(os.path.join(R2, "pools_all.json"), "w"), indent=1)
with open(os.path.join(R2, "inputs", "patterns_digest.md"), "w") as f:
    f.write("# Breakout patterns digest (round 2)\n\nMechanisms that built big companies in 2024-2026, mined from evidence by 5 research agents. Full sources: round2/patterns/<miner>.md.\n")
    for m in sorted({p["miner"] for p in pats}):
        f.write(f"\n## {m}\n")
        for p in [x for x in pats if x["miner"] == m]:
            ex = "; ".join(e["company"] for e in p.get("examples", [])[:3])
            f.write(f"\n**{p['name']}**: {p['mechanism']} *Examples:* {ex}. *Shift:* {p['shift_that_enabled_it']} "
                    f"*Still open?* {p['still_open_or_crowded']} *Transfer targets:* {p['transfer_targets']}\n")
from collections import Counter
print(json.dumps({"patterns": len(pats), "pools": len(pools), "by_slice": Counter(p["slice"] for p in pools),
                  "hidden_giants": sum(bool(p.get("hidden_giant")) for p in pools),
                  "crowdedness": Counter(p.get("crowdedness") for p in pools),
                  "digest_words": len(open(os.path.join(R2, "inputs", "patterns_digest.md")).read().split())}, indent=0))
