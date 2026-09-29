"""Aggregate forced-rank tournament results, cluster convergence, and select candidates for existence checks.

Usage: python aggregate_tournament.py <tournament journal files...>
"""
import json, os, sys, statistics, csv
from collections import defaultdict, Counter

BIZ = os.path.dirname(os.path.abspath(__file__))
ideas = {i["id"]: i for i in json.load(open(os.path.join(BIZ, "ideas", "all.json")))}
tax = json.load(open(os.path.join(BIZ, "tournament_taxonomy.json")))
cname = {c["cid"]: c["name"] for c in tax["clusters"]}

per = defaultdict(list)
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result":
            lab = labels.get(e["key"], "")
            if not lab.startswith("judge:"):
                continue
            _, batch, lens = lab.split(":")
            rk = (e.get("result") or {}).get("ranking", [])
            rk = [x for x in rk if x.get("id") in ideas]
            n = len(rk)
            # normalize ranks to 1..n by sorted order, guarding against ties/gaps
            for pos, x in enumerate(sorted(rk, key=lambda x: x.get("rank", 999))):
                pct = (n - 1 - pos) / (n - 1) if n > 1 else 0.5
                per[x["id"]].append({"batch": batch, "lens": lens, "rank": pos + 1, "of": n, "pct": pct,
                                     "cluster": x.get("cluster", "none"), "cliche": bool(x.get("cliche")),
                                     "fatal_flaw": x.get("fatal_flaw", "none"), "note": x.get("note", "")})

# cluster majority vote per idea
idea_cluster = {}
for iid, vs in per.items():
    c = Counter(v["cluster"] for v in vs if v["cluster"] in cname).most_common(1)
    idea_cluster[iid] = c[0][0] if c else "none"

# convergence stats per cluster
cl = defaultdict(lambda: {"ideas": [], "kinds": set(), "sources": set()})
for iid, c in idea_cluster.items():
    if c in ("none", "C999"):
        continue
    cl[c]["ideas"].append(iid)
    cl[c]["kinds"].add(ideas[iid]["kind"])
    cl[c]["sources"].add(ideas[iid]["source"])

rows = []
for iid, vs in per.items():
    mean = statistics.mean(v["pct"] for v in vs)
    cliche = sum(v["cliche"] for v in vs)
    c = idea_cluster[iid]
    kinds = len(cl[c]["kinds"]) if c in cl else 1
    bonus = 0.0 if c in ("none", "C999") else min(0.06, 0.015 * max(0, kinds - 1))
    score = mean + bonus - 0.10 * (cliche / len(vs))
    rows.append({"id": iid, "title": ideas[iid]["title"], "one_liner": ideas[iid]["one_liner"],
                 "kind": ideas[iid]["kind"], "source": ideas[iid]["source"], "cluster": c,
                 "cluster_name": cname.get(c, "none"), "mean_pct": round(mean, 3),
                 "convergence_kinds": kinds, "cliche_votes": cliche, "judgings": len(vs),
                 "score": round(score, 3), "judges": vs})
rows.sort(key=lambda r: -r["score"])
for n, r in enumerate(rows):
    r["overall_rank"] = n + 1

# selection
N = int(os.environ.get("NSEL", "90"))
sel, per_cluster = [], Counter()
for r in rows:
    if len(sel) >= N:
        break
    if r["cliche_votes"] >= 2:
        continue
    if r["cluster"] != "none" and per_cluster[r["cluster"]] >= 2:
        continue
    sel.append(r); per_cluster[r["cluster"]] += 1
selected = {r["id"] for r in sel}
conv_adds = []
for c, d in sorted(cl.items(), key=lambda kv: (-len(kv[1]["kinds"]), -len(kv[1]["ideas"]))):
    if len(d["kinds"]) < 3 or per_cluster[c] > 0:
        continue
    best = next((r for r in rows if r["cluster"] == c and r["cliche_votes"] < 2), None)
    if best and best["id"] not in selected:
        sel.append(best); selected.add(best["id"]); per_cluster[c] += 1; conv_adds.append(best["id"])
    if len(conv_adds) >= 15:
        break

for r in rows:
    r["selected_for_existence_check"] = r["id"] in selected
    r["selection_reason"] = ("convergence add" if r["id"] in conv_adds else "top tournament score") if r["id"] in selected else (
        "cliché (2+ judges)" if r["cliche_votes"] >= 2 else
        "cluster cap (2 per problem cluster)" if r["cluster"] != "none" and per_cluster[r["cluster"]] >= 2 and r["overall_rank"] <= N * 2 else
        "below cutoff")

OUT = os.path.join(BIZ, "screening_out")
os.makedirs(OUT, exist_ok=True)
json.dump(rows, open(os.path.join(OUT, "tournament_results.json"), "w"), indent=1)
with open(os.path.join(OUT, "tournament_ranking.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["overall_rank", "id", "title", "kind", "cluster_name", "mean_pct", "convergence_kinds",
                "cliche_votes", "score", "selected", "reason", "one_liner"])
    for r in rows:
        w.writerow([r["overall_rank"], r["id"], r["title"], r["kind"], r["cluster_name"], r["mean_pct"],
                    r["convergence_kinds"], r["cliche_votes"], r["score"], r["selected_for_existence_check"],
                    r["selection_reason"], r["one_liner"]])
clusters_out = sorted([{"cid": c, "name": cname.get(c), "n_ideas": len(d["ideas"]), "kinds": sorted(d["kinds"]),
                        "n_kinds": len(d["kinds"]), "n_source_agents": len(d["sources"]), "ideas": d["ideas"]}
                       for c, d in cl.items()], key=lambda x: (-x["n_kinds"], -x["n_ideas"]))
json.dump(clusters_out, open(os.path.join(OUT, "clusters_convergence.json"), "w"), indent=1)
json.dump([r["id"] for r in sel], open(os.path.join(OUT, "selected_ids.json"), "w"))
os.makedirs(os.path.join(BIZ, "candidates"), exist_ok=True)
for r in sel:
    json.dump(ideas[r["id"]], open(os.path.join(BIZ, "candidates", f"{r['id']}.json"), "w"), indent=1)
print(json.dumps({"judged": len(rows), "unjudged": len(ideas) - len(rows), "selected": len(sel),
                  "convergence_adds": len(conv_adds), "clusters": len(cl),
                  "top10": [(r["id"], r["title"], r["score"], r["cluster_name"]) for r in rows[:10]],
                  "top_convergent_clusters": [(c["name"], c["n_kinds"], c["n_ideas"]) for c in clusters_out[:10]]}, indent=0))
