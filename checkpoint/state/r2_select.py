"""Round 2: merge the 2 pool judges' scores and list candidates for the orchestrator's pool selection.

Usage: python r2_select.py <pooljudge journal> [--write P001,P002,...]
Without --write: prints a compact ranked table. With --write: writes round2/pools_selected.json (in the given order)
and round2/pool_scores.json (all pools with both judges' scores).
"""
import json, os, sys, statistics
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
pools = {p["pool_id"]: p for p in json.load(open(os.path.join(R2, "pools_all.json")))}
labels, scores = {}, {}
for line in open(sys.argv[1]):
    e = json.loads(line)
    if e.get("type") == "started": labels[e["key"]] = e.get("label", "")
    elif e.get("type") == "result" and e.get("result"):
        lens = labels.get(e["key"], "").split(":")[-1]
        for s in e["result"]["scores"]:
            scores.setdefault(s["pool_id"], {})[lens] = s
F = ["size", "shock", "fragility", "wedge", "uncrowded", "overall"]
rows = []
for pid, p in pools.items():
    js = scores.get(pid, {})
    m = {f: round(statistics.mean(j[f] for j in js.values()), 2) if js else 0 for f in F}
    rows.append({"pool_id": pid, "slice": p["slice"], "name": p["name"], "usd_b": p["annual_spend_usd_b"],
                 "crowd": p["crowdedness"], "hidden": p["hidden_giant"], **m, "n_judges": len(js),
                 "notes": {k: v["note"] for k, v in js.items()}})
rows.sort(key=lambda r: (-r["overall"], -(r["size"] + r["shock"] + r["fragility"] + r["wedge"] + r["uncrowded"])))
json.dump(rows, open(os.path.join(R2, "pool_scores.json"), "w"), indent=1)
if "--write" in sys.argv:
    ids = sys.argv[sys.argv.index("--write") + 1].split(",")
    json.dump([pools[i] for i in ids], open(os.path.join(R2, "pools_selected.json"), "w"), indent=1)
    print(f"wrote {len(ids)} selected pools")
else:
    print(f"scored pools: {sum(1 for r in rows if r['n_judges'] == 2)}/{len(rows)} by both judges")
    for n, r in enumerate(rows[:int(os.environ.get('TOP', '55'))]):
        print(f"{n+1:>2} {r['pool_id']} ov{r['overall']} sz{r['size']} sh{r['shock']} fr{r['fragility']} wd{r['wedge']} un{r['uncrowded']} | {r['slice'][:8]} | ${r['usd_b']}B | {r['crowd'][:4]}{' H' if r['hidden'] else ''} | {r['name'][:85]}")
