"""Aggregate the evolution tournament and pick finalists (max 1 per lineage family, max 2 per problem cluster).

Usage: NFINAL=25 python aggregate_evo.py <evo-tournament journal files...>
"""
import json, os, sys, statistics, csv
from collections import defaultdict, Counter

BIZ = os.path.dirname(os.path.abspath(__file__))
E = os.path.join(BIZ, "evo")
pool = {x["id"]: x for x in json.load(open(os.path.join(E, "pool.json")))}
parents = {i: json.load(open(os.path.join(E, "parents", f"{i}.json"))) for i in json.load(open(os.path.join(E, "survivors.json")))}

def cluster_of(x):
    fam = x.get("hybrid_parents", [x["family"]])[0]
    return parents[fam]["tournament"]["cluster"] if fam in parents else "hybrid"

per = defaultdict(list)
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result":
            lab = labels.get(e["key"], "")
            if not lab.startswith("evojudge:"):
                continue
            _, batch, lens = lab.split(":")
            rk = [x for x in (e.get("result") or {}).get("ranking", []) if x.get("id") in pool]
            n = len(rk)
            for pos, x in enumerate(sorted(rk, key=lambda x: x.get("rank", 999))):
                per[x["id"]].append({"batch": batch, "lens": lens, "rank": pos + 1, "of": n,
                                     "pct": (n - 1 - pos) / (n - 1) if n > 1 else 0.5,
                                     "cliche": bool(x.get("cliche")), "fatal_flaw": x.get("fatal_flaw", ""),
                                     "note": x.get("note", "")})
rows = []
for iid, vs in per.items():
    x = pool[iid]
    mean = statistics.mean(v["pct"] for v in vs)
    cl = sum(v["cliche"] for v in vs)
    rows.append({"id": iid, "title": x["title"], "one_liner": x["one_liner"], "family": x["family"],
                 "lineage": x["lineage"], "cluster": cluster_of(x), "mean_pct": round(mean, 3), "cliche_votes": cl,
                 "score": round(mean - 0.10 * cl / len(vs), 3), "judges": vs})
rows.sort(key=lambda r: -r["score"])
N = int(os.environ.get("NFINAL", "25"))
fin, fam_used, cl_used = [], set(), Counter()
for r in rows:
    if len(fin) >= N:
        break
    if r["cliche_votes"] >= 2 or r["family"] in fam_used or cl_used[r["cluster"]] >= 2:
        continue
    fin.append(r); fam_used.add(r["family"]); cl_used[r["cluster"]] += 1
fset = {r["id"] for r in fin}
for n, r in enumerate(rows):
    r["evo_rank"] = n + 1
    r["finalist"] = r["id"] in fset
OUT = os.path.join(BIZ, "evo_out"); os.makedirs(OUT, exist_ok=True)
json.dump(rows, open(os.path.join(OUT, "evolution_results.json"), "w"), indent=1)
with open(os.path.join(OUT, "evolution_ranking.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["evo_rank", "id", "title", "family", "cluster", "mean_pct", "cliche_votes", "score", "finalist", "lineage"])
    for r in rows:
        w.writerow([r["evo_rank"], r["id"], r["title"], r["family"], r["cluster"], r["mean_pct"], r["cliche_votes"],
                    r["score"], r["finalist"], r["lineage"]])
FD = os.path.join(BIZ, "finalists"); os.makedirs(FD, exist_ok=True)
for r in fin:
    x = dict(pool[r["id"]])
    fam = x.get("hybrid_parents", [x["family"]])
    x["parent_competition_reports"] = {p: parents[p]["competition"] for p in fam if p in parents}
    json.dump(x, open(os.path.join(FD, f"{r['id']}.json"), "w"), indent=1)
json.dump([r["id"] for r in fin], open(os.path.join(OUT, "finalist_ids.json"), "w"))
kinds = Counter("original" if "-M" not in r["id"] and not r["id"].startswith("H") else ("hybrid" if r["id"].startswith("H") else "mutant") for r in fin)
print(json.dumps({"judged": len(rows), "finalists": len(fin), "finalist_kinds": kinds,
                  "finalists_list": [(r["id"], r["title"], r["score"]) for r in fin]}, indent=0))
