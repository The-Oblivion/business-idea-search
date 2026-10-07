"""Sanity checks on the step 4 evolution tournament (run after aggregate_evo.py).

Usage: python analyze_evo.py   -> prints JSON summary; also writes evo_out/evolution_analysis.json
"""
import json, os, statistics
from collections import Counter, defaultdict

BIZ = os.path.dirname(os.path.abspath(__file__))
rows = json.load(open(os.path.join(BIZ, "evo_out", "evolution_results.json")))
fin_ids = json.load(open(os.path.join(BIZ, "evo_out", "finalist_ids.json")))
ideas = {x["id"]: x for x in json.load(open(os.path.join(BIZ, "ideas", "all.json")))}
by = {r["id"]: r for r in rows}

def kind(i):
    return "hybrid" if i.startswith("H") else ("mutant" if "-M" in i else "original")

def root_kind(r):
    fam = r["family"]
    return ideas[fam]["kind"] if fam in ideas else "hybrid"

out = {"judged": len(rows), "judges_per_idea": dict(Counter(len(r["judges"]) for r in rows))}

# 1. Offspring vs parents
fams = defaultdict(list)
for r in rows:
    if not r["id"].startswith("H"):
        fams[r["family"]].append(r)
beat, total, best_is_child, deltas = 0, 0, 0, defaultdict(list)
for fam, rs in fams.items():
    par = by.get(fam)
    kids = [r for r in rs if "-M" in r["id"]]
    if not par or not kids:
        continue
    for k in kids:
        total += 1
        beat += k["score"] > par["score"]
        deltas[k["id"].split("-")[-1]].append(k["score"] - par["score"])
    best_is_child += max(rs, key=lambda r: r["score"])["id"] != fam
out["offspring_vs_parent"] = {
    "offspring_beating_parent": f"{beat}/{total}",
    "families_where_best_member_is_offspring": f"{best_is_child}/{sum(1 for f, rs in fams.items() if any('-M' in r['id'] for r in rs))}",
    "mean_score_delta_by_mutation": {m: round(statistics.mean(v), 3) for m, v in sorted(deltas.items())},
    "share_beating_parent_by_mutation": {m: f"{sum(d > 0 for d in v)}/{len(v)}" for m, v in sorted(deltas.items())},
}

# 2. Hybrids
hy = sorted([r for r in rows if r["id"].startswith("H")], key=lambda r: r["evo_rank"])
out["hybrids"] = [{"id": r["id"], "title": r["title"], "evo_rank": r["evo_rank"], "score": r["score"],
                   "finalist": r["finalist"]} for r in hy]

# 3. Mix of kinds
top = lambda n: [r for r in rows if r["evo_rank"] <= n]
pool_mix = Counter(kind(r["id"]) for r in rows)
out["kind_mix"] = {"pool": dict(pool_mix), "top25_raw": dict(Counter(kind(r["id"]) for r in top(25))),
                   "finalists": dict(Counter(kind(i) for i in fin_ids))}
out["root_source_kind"] = {"pool": dict(Counter(root_kind(r) for r in rows)),
                           "finalists": dict(Counter(root_kind(by[i]) for i in fin_ids))}

# 4. What the diversity rules pushed out of the raw top 40
skipped = []
for r in rows[:40]:
    if r["finalist"]:
        continue
    why = "cliche>=2" if r["cliche_votes"] >= 2 else "family/cluster cap"
    skipped.append({"id": r["id"], "title": r["title"], "evo_rank": r["evo_rank"], "why": why})
out["top40_not_finalist"] = skipped

# 5. Cliché + lens agreement
out["cliche_excluded"] = sum(r["cliche_votes"] >= 2 for r in rows)
lens_rank = defaultdict(dict)
for r in rows:
    for j in r["judges"]:
        lens_rank[r["id"]][j["lens"]] = j["pct"]
spread = [max(v.values()) - min(v.values()) for v in lens_rank.values() if len(v) == 3]
out["lens_spread_mean"] = round(statistics.mean(spread), 3)
split = sorted(((max(v.values()) - min(v.values()), i) for i, v in lens_rank.items() if len(v) == 3), reverse=True)[:5]
out["most_divisive"] = [{"id": i, "title": by[i]["title"], "pcts": lens_rank[i]} for _, i in split]

# 6. Finalists with lineage
out["finalists"] = [{"n": n + 1, "id": i, "title": by[i]["title"], "one_liner": by[i]["one_liner"],
                     "lineage": by[i]["lineage"][:160], "score": by[i]["score"], "evo_rank": by[i]["evo_rank"],
                     "cluster": by[i]["cluster"], "root_kind": root_kind(by[i])} for n, i in enumerate(fin_ids)]
json.dump(out, open(os.path.join(BIZ, "evo_out", "evolution_analysis.json"), "w"), indent=1)
print(json.dumps({k: v for k, v in out.items() if k != "finalists"}, indent=1))
